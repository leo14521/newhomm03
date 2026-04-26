import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const row = await prisma.eventPost.findFirst({
    where: {
      id: params.id,
      isPublished: true,
    },
    select: {
      id: true,
      title: true,
      summary: true,
      imageUrl: true,
      content: true,
      createdAt: true,
      publishedAt: true,
    },
  });

  if (!row) notFound();

  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-4 pb-16 pt-[calc(var(--header-height)+2rem)] text-[var(--text-primary)] sm:px-6 lg:px-[var(--pad-global)] lg:pt-[calc(var(--header-h)+2rem)]">
      <article className="mx-auto max-w-[920px] rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6 sm:p-8">
        <p className="text-[12px] text-[var(--text-secondary)]">
          등록일 {new Date(row.publishedAt ?? row.createdAt).toLocaleDateString("ko-KR")}
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(24px,3.4vw,36px)] leading-tight">
          {row.title}
        </h1>
        {row.summary ? (
          <p className="mt-4 rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-4 py-3 text-[14px] text-[var(--text-secondary)]">
            {row.summary}
          </p>
        ) : null}
        {row.imageUrl ? (
          <figure className="mt-6 overflow-hidden rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)]">
            {/* 원본 비율 유지 — 고정 높이·cover 사용 시 정사각형 배너가 세로로 잘림 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={row.imageUrl}
              alt={row.title}
              className="mx-auto block h-auto w-full max-w-full object-contain align-middle"
              loading="eager"
              decoding="async"
            />
          </figure>
        ) : null}
        <div className="mt-6 whitespace-pre-wrap text-[15px] leading-[1.9] text-[var(--text-primary)]">
          {row.content}
        </div>
        <div className="mt-10 border-t border-[var(--border-page)] pt-5">
          <Link href="/event" className="inline-flex rounded border border-[var(--text-primary)] px-4 py-2 text-[13px] transition-colors hover:bg-[var(--text-primary)] hover:text-white">
            목록으로
          </Link>
        </div>
      </article>
    </main>
  );
}
