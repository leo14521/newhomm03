import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const POPUP_EVENT_LIMIT = 4;

export type PopupEventItem = {
  id: string;
  title: string;
  summary: string | null;
  imageUrl: string | null;
  content: string;
};

export type PopupPayload = {
  type: "none" | "event" | "opening";
  /** 첫 번째 배너 (구 클라이언트 호환) */
  item: PopupEventItem | null;
  /** 팝업에 노출할 이벤트 최대 4건, 최신순 */
  items: PopupEventItem[];
};

let memoryCache: { expiresAt: number; payload: PopupPayload } | null = null;

async function fetchPopupEvents(): Promise<PopupEventItem[]> {
  return prisma.eventPost.findMany({
    where: {
      isPublished: true,
      popupEnabled: true,
    },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: POPUP_EVENT_LIMIT,
    select: {
      id: true,
      title: true,
      summary: true,
      imageUrl: true,
      content: true,
    },
  });
}

function eventPayload(rows: PopupEventItem[]): PopupPayload {
  const item = rows[0] ?? null;
  return { type: "event", item, items: rows };
}

export async function GET() {
  if (memoryCache && memoryCache.expiresAt > Date.now()) {
    return NextResponse.json(memoryCache.payload);
  }

  try {
    let popupMode: "auto" | "event" | "opening" | "off" = "auto";
    try {
      const setting = await prisma.siteSetting.findUnique({
        where: { key: "popup_mode" },
        select: { value: true },
      });
      const raw = setting?.value;
      if (raw === "auto" || raw === "event" || raw === "opening" || raw === "off") {
        popupMode = raw;
      }
    } catch (error) {
      const msg = error instanceof Error ? error.message.toLowerCase() : "";
      if (!msg.includes("does not exist")) throw error;
    }

    if (popupMode === "off") {
      const payload: PopupPayload = { type: "none", item: null, items: [] };
      memoryCache = { payload, expiresAt: Date.now() + 10_000 };
      return NextResponse.json(payload);
    }

    if (popupMode === "opening") {
      const payload: PopupPayload = { type: "opening", item: null, items: [] };
      memoryCache = { payload, expiresAt: Date.now() + 30_000 };
      return NextResponse.json(payload);
    }

    const rows = await fetchPopupEvents();

    if (popupMode === "event") {
      if (rows.length > 0) {
        const payload = eventPayload(rows);
        memoryCache = { payload, expiresAt: Date.now() + 30_000 };
        return NextResponse.json(payload);
      }
      const hasPublished = await prisma.eventPost.findFirst({
        where: { isPublished: true },
        select: { id: true },
      });
      if (!hasPublished) {
        const payload: PopupPayload = { type: "opening", item: null, items: [] };
        memoryCache = { payload, expiresAt: Date.now() + 15_000 };
        return NextResponse.json(payload);
      }
      const payload: PopupPayload = { type: "none", item: null, items: [] };
      memoryCache = { payload, expiresAt: Date.now() + 10_000 };
      return NextResponse.json(payload);
    }

    // auto: 이벤트 우선(최대 4건), 없으면 개원
    if (rows.length > 0) {
      const payload = eventPayload(rows);
      memoryCache = { payload, expiresAt: Date.now() + 30_000 };
      return NextResponse.json(payload);
    }
    const hasPublished = await prisma.eventPost.findFirst({
      where: { isPublished: true },
      select: { id: true },
    });
    if (!hasPublished) {
      const payload: PopupPayload = { type: "opening", item: null, items: [] };
      memoryCache = { payload, expiresAt: Date.now() + 15_000 };
      return NextResponse.json(payload);
    }
    const payload: PopupPayload = { type: "none", item: null, items: [] };
    memoryCache = { payload, expiresAt: Date.now() + 10_000 };
    return NextResponse.json(payload);
  } catch {
    const payload: PopupPayload = { type: "none", item: null, items: [] };
    memoryCache = { payload, expiresAt: Date.now() + 5_000 };
    return NextResponse.json(payload);
  }
}
