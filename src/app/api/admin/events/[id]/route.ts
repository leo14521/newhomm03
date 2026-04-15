import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const summary = typeof body.summary === "string" ? body.summary.trim() : "";
  const imageUrl = typeof body.imageUrl === "string" ? body.imageUrl.trim() : "";
  const content = typeof body.content === "string" ? body.content.trim() : "";
  const isPublished = body.isPublished === true;
  const popupEnabled = body.popupEnabled === true;

  if (!title || !content) {
    return NextResponse.json({ error: "제목과 본문은 필수입니다." }, { status: 400 });
  }

  try {
    const updated = await prisma.eventPost.update({
      where: { id: params.id },
      data: {
        title,
        summary: summary || null,
        imageUrl: imageUrl || null,
        content,
        isPublished,
        popupEnabled,
        publishedAt: isPublished ? new Date() : null,
      },
    });
    return NextResponse.json({ ok: true, item: updated });
  } catch {
    return NextResponse.json({ error: "수정할 게시글을 찾지 못했습니다." }, { status: 404 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await prisma.eventPost.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "삭제할 게시글을 찾지 못했습니다." }, { status: 404 });
  }
}
