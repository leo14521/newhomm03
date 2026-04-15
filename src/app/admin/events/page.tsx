import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import type { EventPost } from "@prisma/client";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import { ensureHommageSchema } from "@/lib/bootstrap-prisma-schema";
import AdminEventBoard, { type EventRow } from "./AdminEventBoard";

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin/events");
  }

  let rows: EventRow[] = [];
  try {
    const dbRows = await prisma.eventPost.findMany({
      orderBy: { createdAt: "desc" },
    });
    rows = dbRows.map((row: EventPost) => ({
      id: row.id,
      title: row.title,
      summary: row.summary,
      imageUrl: row.imageUrl,
      content: row.content,
      isPublished: row.isPublished,
      popupEnabled: row.popupEnabled,
      publishedAt: row.publishedAt ? new Date(row.publishedAt).toISOString() : null,
      createdAt: new Date(row.createdAt).toISOString(),
    }));
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    if (msg.toLowerCase().includes("does not exist")) {
      await ensureHommageSchema();
    }
  }

  return (
    <div>
      <h1 className="font-[family-name:var(--font-kr-heading)] text-[20px] font-medium">이벤트 관리</h1>
      <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
        홈페이지 이벤트 게시판 글을 등록/수정/삭제할 수 있습니다.
      </p>
      <div className="mt-6">
        <AdminEventBoard initialItems={rows} />
      </div>
    </div>
  );
}
