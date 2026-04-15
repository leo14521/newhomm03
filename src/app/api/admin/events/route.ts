import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { ensureHommageSchema } from "@/lib/bootstrap-prisma-schema";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const rows = await prisma.eventPost.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ items: rows });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    if (msg.toLowerCase().includes("does not exist")) {
      await ensureHommageSchema();
      const rows = await prisma.eventPost.findMany({
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json({ items: rows });
    }
    return NextResponse.json({ error: "이벤트 목록을 불러오지 못했습니다." }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const summary = typeof body.summary === "string" ? body.summary.trim() : "";
  const imageUrl = typeof body.imageUrl === "string" ? body.imageUrl.trim() : "";
  const content = typeof body.content === "string" ? body.content.trim() : "";
  const isPublished = body.isPublished !== false;
  const popupEnabled = body.popupEnabled === true;

  if (!title || !content) {
    return NextResponse.json({ error: "제목과 본문은 필수입니다." }, { status: 400 });
  }

  const authorId =
    session.user.id && session.user.id !== "admin-fixed" ? session.user.id : null;

  try {
    const created = await prisma.eventPost.create({
      data: {
        title,
        summary: summary || null,
        imageUrl: imageUrl || null,
        content,
        isPublished,
        popupEnabled,
        publishedAt: isPublished ? new Date() : null,
        authorId,
      },
    });
    return NextResponse.json({ ok: true, item: created });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    if (msg.toLowerCase().includes("does not exist")) {
      await ensureHommageSchema();
      const created = await prisma.eventPost.create({
        data: {
          title,
          summary: summary || null,
          imageUrl: imageUrl || null,
          content,
          isPublished,
          popupEnabled,
          publishedAt: isPublished ? new Date() : null,
          authorId,
        },
      });
      return NextResponse.json({ ok: true, item: created });
    }
    return NextResponse.json({ error: "이벤트 작성 중 오류가 발생했습니다." }, { status: 500 });
  }
}
