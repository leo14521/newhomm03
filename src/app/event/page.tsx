import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ensureHommageSchema } from "@/lib/bootstrap-prisma-schema";

export const dynamic = "force-dynamic";

type EventListItem = {
  id: string;
  title: string;
  summary: string | null;
  imageUrl: string | null;
  createdAt: Date;
  publishedAt: Date | null;
};

export default async function EventPage() {
  let items: EventListItem[] = [];
  try {
    const rows = await prisma.eventPost.findMany({
      where: {
        isPublished: true,
      },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      select: {
        id: true,
        title: true,
        summary: true,
        imageUrl: true,
        createdAt: true,
        publishedAt: true,
      },
    });
    items = rows;
  } catch (error) {
    const msg = error instanceof Error ? error.message : "";
    if (msg.toLowerCase().includes("does not exist")) {
      await ensureHommageSchema();
    }
  }

  return (
    <main className="min-h-screen bg-[var(--bg-page)] px-4 pb-16 pt-[calc(var(--header-height)+2rem)] text-[var(--text-primary)] sm:px-6 lg:px-[var(--pad-global)] lg:pt-[calc(var(--header-h)+2rem)]">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-8 border-b border-[var(--border-page)] pb-5">
          <p className="text-[11px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">Hommage Board</p>
          <h1 className="mt-2 font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(30px,4vw,42px)]">이벤트</h1>
          <p className="mt-2 text-[14px] text-[var(--text-secondary)]">오마쥬의 최신 이벤트 소식을 확인하세요.</p>
        </div>

        <div className="overflow-hidden rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)]">
          <table className="w-full text-left text-[13px]">
            <thead className="border-b border-[var(--border-page)] bg-[var(--bg-page)]">
              <tr>
                <th className="w-[120px] px-4 py-3">번호</th>
                <th className="px-4 py-3">제목</th>
                <th className="w-[180px] px-4 py-3">등록일</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr key={item.id} className="border-b border-[var(--border-page)]/70 last:border-b-0">
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {String(items.length - idx).padStart(2, "0")}
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/event/${item.id}`} className="line-clamp-1 hover:underline">
                      {item.title}
                    </Link>
                    {item.imageUrl ? (
                      <div className="mt-2 max-h-[200px] overflow-hidden rounded border border-[var(--border-page)] bg-[var(--bg-page)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.imageUrl}
                          alt=""
                          className="mx-auto block h-auto max-h-[200px] w-auto max-w-full object-contain object-center"
                        />
                      </div>
                    ) : null}
                    {item.summary ? (
                      <p className="mt-1 line-clamp-1 text-[12px] text-[var(--text-secondary)]">{item.summary}</p>
                    ) : null}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">
                    {new Date(item.publishedAt ?? item.createdAt).toLocaleDateString("ko-KR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {items.length === 0 ? (
            <p className="px-4 py-10 text-center text-[13px] text-[var(--text-secondary)]">등록된 이벤트가 없습니다.</p>
          ) : null}
        </div>
      </div>
    </main>
  );
}
