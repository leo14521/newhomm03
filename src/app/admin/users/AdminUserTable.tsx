"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export type UserRow = {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: string;
};

export default function AdminUserTable({ items, currentUserId }: { items: UserRow[]; currentUserId: string }) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  async function remove(id: string) {
    if (!confirm("이 회원을 삭제할까요? 되돌릴 수 없습니다.")) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
      if (res.ok) router.refresh();
      else {
        const d = await res.json().catch(() => ({}));
        alert(typeof d.error === "string" ? d.error : "삭제 실패");
      }
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="overflow-x-auto rounded-sm border border-[var(--border-page)]">
      <table className="w-full min-w-[560px] text-left text-[13px]">
        <thead className="border-b border-[var(--border-page)] bg-[var(--bg-card)]">
          <tr>
            <th className="px-3 py-2 font-medium">가입일</th>
            <th className="px-3 py-2 font-medium">이메일</th>
            <th className="px-3 py-2 font-medium">이름</th>
            <th className="px-3 py-2 font-medium">역할</th>
            <th className="px-3 py-2 font-medium" />
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id} className="border-b border-[var(--border-page)]/80">
              <td className="whitespace-nowrap px-3 py-2 text-[var(--text-secondary)]">
                {new Date(row.createdAt).toLocaleString("ko-KR")}
              </td>
              <td className="px-3 py-2">{row.email}</td>
              <td className="px-3 py-2">{row.name || "—"}</td>
              <td className="px-3 py-2">{row.role === "ADMIN" ? "관리자" : "회원"}</td>
              <td className="px-3 py-2 text-right">
                {row.role === "ADMIN" || row.id === currentUserId ? (
                  <span className="text-[12px] text-[var(--text-secondary)]">—</span>
                ) : (
                  <button
                    type="button"
                    disabled={busyId === row.id}
                    onClick={() => remove(row.id)}
                    className="text-[12px] text-red-600 hover:underline disabled:opacity-50"
                  >
                    삭제
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
