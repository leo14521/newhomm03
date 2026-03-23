import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import AdminUserTable, { type UserRow } from "./AdminUserTable";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin/users");
  }

  let rows:
    | Awaited<ReturnType<typeof prisma.user.findMany>>
    | null = null;
  let loadError = false;
  try {
    rows = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: { id: true, email: true, name: true, role: true, createdAt: true },
    });
  } catch {
    loadError = true;
  }

  if (loadError || rows == null) {
    return (
      <div>
        <h1 className="font-[family-name:var(--font-kr-heading)] text-[20px] font-medium">회원 관리</h1>
        <p className="mt-3 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[13px] text-[var(--text-secondary)]">
          관리자 DB 연결 상태를 확인해 주세요. (운영 환경의 DATABASE_URL/Prisma 설정 필요)
        </p>
      </div>
    );
  }

  const items: UserRow[] = rows.map((r) => ({
    id: r.id,
    email: r.email,
    name: r.name,
    role: r.role,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <div>
      <h1 className="font-[family-name:var(--font-kr-heading)] text-[20px] font-medium">회원 관리</h1>
      <p className="mt-1 text-[13px] text-[var(--text-secondary)]">가입 회원 목록입니다. 관리자 계정은 삭제할 수 없습니다.</p>
      <div className="mt-8">
        <AdminUserTable items={items} currentUserId={session.user.id} />
      </div>
    </div>
  );
}
