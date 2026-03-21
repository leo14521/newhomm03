"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export type ConsultRow = {
  id: string;
  name: string;
  phone: string;
  interest: string | null;
  message: string | null;
  status: string;
  createdAt: string;
};

const STATUS_LABEL: Record<string, string> = {
  NEW: "신규",
  CONTACTED: "연락함",
  DONE: "완료",
};

export default function AdminConsultTable({ items }: { items: ConsultRow[] }) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);

  async function updateStatus(id: string, status: string) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/consultations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) router.refresh();
    } finally {
      setBusyId(null);
    }
  }

  if (items.length === 0) {
    return <p className="text-[14px] text-[var(--text-secondary)]">아직 상담 신청이 없습니다.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-sm border border-[var(--border-page)]">
      <table className="w-full min-w-[640px] text-left text-[13px]">
        <thead className="border-b border-[var(--border-page)] bg-[var(--bg-card)]">
          <tr>
            <th className="px-3 py-2 font-medium">일시</th>
            <th className="px-3 py-2 font-medium">성함</th>
            <th className="px-3 py-2 font-medium">연락처</th>
            <th className="px-3 py-2 font-medium">관심</th>
            <th className="px-3 py-2 font-medium">문의</th>
            <th className="px-3 py-2 font-medium">상태</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row) => (
            <tr key={row.id} className="border-b border-[var(--border-page)]/80">
              <td className="whitespace-nowrap px-3 py-2 text-[var(--text-secondary)]">
                {new Date(row.createdAt).toLocaleString("ko-KR")}
              </td>
              <td className="px-3 py-2">{row.name}</td>
              <td className="px-3 py-2">{row.phone}</td>
              <td className="max-w-[100px] truncate px-3 py-2 text-[var(--text-secondary)]" title={row.interest ?? ""}>
                {row.interest || "—"}
              </td>
              <td className="max-w-[180px] truncate px-3 py-2 text-[var(--text-secondary)]" title={row.message ?? ""}>
                {row.message || "—"}
              </td>
              <td className="px-3 py-2">
                <select
                  value={row.status}
                  disabled={busyId === row.id}
                  onChange={(e) => updateStatus(row.id, e.target.value)}
                  className="w-full max-w-[120px] border border-[var(--border-page)] bg-[var(--bg-page)] px-2 py-1 text-[12px]"
                >
                  {Object.entries(STATUS_LABEL).map(([k, lab]) => (
                    <option key={k} value={k}>
                      {lab}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
