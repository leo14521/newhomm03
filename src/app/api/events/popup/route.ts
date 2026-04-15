import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type PopupPayload = {
  type: "none" | "event" | "opening";
  item: {
    id: string;
    title: string;
    summary: string | null;
    imageUrl: string | null;
    content: string;
  } | null;
};

let memoryCache: { expiresAt: number; payload: PopupPayload } | null = null;

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
      // SiteSetting 테이블이 아직 없어도 홈페이지 팝업은 기본 모드(auto)로 즉시 응답한다.
    }

    if (popupMode === "off") {
      const payload: PopupPayload = { type: "none", item: null };
      memoryCache = { payload, expiresAt: Date.now() + 10_000 };
      return NextResponse.json(payload);
    }

    const row = await prisma.eventPost.findFirst({
      where: {
        isPublished: true,
        popupEnabled: true,
      },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      select: {
        id: true,
        title: true,
        summary: true,
        imageUrl: true,
        content: true,
      },
    });

    if (popupMode === "opening") {
      const payload: PopupPayload = { type: "opening", item: null };
      memoryCache = { payload, expiresAt: Date.now() + 30_000 };
      return NextResponse.json(payload);
    }

    if (popupMode === "event") {
      if (row) {
        const payload: PopupPayload = { type: "event", item: row };
        memoryCache = { payload, expiresAt: Date.now() + 30_000 };
        return NextResponse.json(payload);
      }
      const hasPublished = await prisma.eventPost.findFirst({
        where: { isPublished: true },
        select: { id: true },
      });
      if (!hasPublished) {
        const payload: PopupPayload = { type: "opening", item: null };
        memoryCache = { payload, expiresAt: Date.now() + 15_000 };
        return NextResponse.json(payload);
      }
      const payload: PopupPayload = { type: "none", item: null };
      memoryCache = { payload, expiresAt: Date.now() + 10_000 };
      return NextResponse.json(payload);
    }

    // auto: 이벤트 우선, 이벤트 게시글이 전혀 없으면 개원 팝업
    if (row) {
      const payload: PopupPayload = { type: "event", item: row };
      memoryCache = { payload, expiresAt: Date.now() + 30_000 };
      return NextResponse.json(payload);
    }
    const hasPublished = await prisma.eventPost.findFirst({
      where: { isPublished: true },
      select: { id: true },
    });
    if (!hasPublished) {
      const payload: PopupPayload = { type: "opening", item: null };
      memoryCache = { payload, expiresAt: Date.now() + 15_000 };
      return NextResponse.json(payload);
    }
    const payload: PopupPayload = { type: "none", item: null };
    memoryCache = { payload, expiresAt: Date.now() + 10_000 };
    return NextResponse.json(payload);
  } catch (error) {
    const payload: PopupPayload = { type: "none", item: null };
    memoryCache = { payload, expiresAt: Date.now() + 5_000 };
    return NextResponse.json(payload);
  }
}
