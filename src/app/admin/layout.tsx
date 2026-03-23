import Link from "next/link";
import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+1rem)] text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+1rem)]">
      <div className="border-b border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 lg:px-8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3">
          <span className="text-[13px] font-medium">오마쥬 관리자</span>
          <nav className="flex gap-4 text-[12px]">
            <Link href="/admin" className="text-[var(--accent-terracotta-dark)] hover:underline">
              상담 신청
            </Link>
            <Link href="/admin/users" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">
              회원
            </Link>
            <Link href="/admin/password" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline">
              비밀번호 변경
            </Link>
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              사이트
            </Link>
          </nav>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] px-4 py-8 lg:px-8">{children}</div>
    </div>
  );
}
