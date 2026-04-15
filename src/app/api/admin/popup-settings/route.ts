import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { ensureHommageSchema } from "@/lib/bootstrap-prisma-schema";

const KEY = "popup_mode";
const ALLOWED = new Set(["auto", "event", "opening", "off"]);

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const row = await prisma.siteSetting.findUnique({ where: { key: KEY } });
    return NextResponse.json({ mode: row?.value ?? "auto" });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    if (msg.toLowerCase().includes("does not exist")) {
      await ensureHommageSchema();
      return NextResponse.json({ mode: "auto" });
    }
    return NextResponse.json({ error: "팝업 설정을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const mode = typeof body.mode === "string" ? body.mode.trim() : "";
  if (!ALLOWED.has(mode)) {
    return NextResponse.json({ error: "유효하지 않은 팝업 타입입니다." }, { status: 400 });
  }

  try {
    const row = await prisma.siteSetting.upsert({
      where: { key: KEY },
      update: { value: mode },
      create: { key: KEY, value: mode },
    });
    return NextResponse.json({ ok: true, mode: row.value });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    if (msg.toLowerCase().includes("does not exist")) {
      await ensureHommageSchema();
      const row = await prisma.siteSetting.upsert({
        where: { key: KEY },
        update: { value: mode },
        create: { key: KEY, value: mode },
      });
      return NextResponse.json({ ok: true, mode: row.value });
    }
    return NextResponse.json({ error: "팝업 설정 저장 중 오류가 발생했습니다." }, { status: 500 });
  }
}
