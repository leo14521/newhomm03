import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth-options";
import { prisma } from "@/lib/prisma";
import AdminConsultTable, { type ConsultRow } from "./AdminConsultTable";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/login?callbackUrl=/admin");
  }

  const rows = await prisma.consultation.findMany({
    orderBy: { createdAt: "desc" },
  });

  const items: ConsultRow[] = rows.map((r) => ({
    id: r.id,
    name: r.name,
    phone: r.phone,
    interest: r.interest,
    message: r.message,
    status: r.status,
    createdAt: r.createdAt.toISOString(),
    privacyConsentAt: r.privacyConsentAt?.toISOString() ?? null,
  }));

  return (
    <div>
      <h1 className="font-[family-name:var(--font-kr-heading)] text-[20px] font-medium">상담 신청</h1>
      <p className="mt-1 text-[13px] text-[var(--text-secondary)]">빠른 상담 폼으로 접수된 내역입니다.</p>
      <div className="mt-8">
        <AdminConsultTable items={items} />
      </div>
    </div>
  );
}
