"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export type ConsultRow = {
  id: string;
  name: string;
  phone: string;
  interest: string | null;
  message: string | null;
  status: string;
  visitType: string;
  createdAt: string;
  privacyConsentAt: string | null;
};

const STATUS_LABEL: Record<string, string> = {
  NEW: "신규",
  CONTACTED: "연락함",
  DONE: "완료",
};
const VISIT_LABEL: Record<string, string> = {
  NEW_PATIENT: "신환",
  FIRST_VISIT: "초진",
  RETURN_VISIT: "재진",
};

export default function AdminConsultTable({ items }: { items: ConsultRow[] }) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedRow = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId]
  );
  const [editForm, setEditForm] = useState({
    name: "",
    phone: "",
    interest: "",
    message: "",
    status: "NEW",
    visitType: "NEW_PATIENT",
  });
  const [modalError, setModalError] = useState("");

  function openDetail(row: ConsultRow) {
    setSelectedId(row.id);
    setModalError("");
    setEditForm({
      name: row.name,
      phone: row.phone,
      interest: row.interest ?? "",
      message: row.message ?? "",
      status: row.status,
      visitType: row.visitType,
    });
  }

  function closeDetail() {
    if (busyId) return;
    setSelectedId(null);
    setModalError("");
  }

  async function updateRow(id: string, payload: { status?: string; visitType?: string }) {
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/consultations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) router.refresh();
    } finally {
      setBusyId(null);
    }
  }

  async function saveDetail() {
    if (!selectedRow) return;
    setBusyId(selectedRow.id);
    setModalError("");
    try {
      const res = await fetch(`/api/admin/consultations/${selectedRow.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setModalError(data.error ?? "수정 중 오류가 발생했습니다.");
        return;
      }
      setSelectedId(null);
      router.refresh();
    } finally {
      setBusyId(null);
    }
  }

  async function deleteRow() {
    if (!selectedRow) return;
    const ok = window.confirm("이 상담 신청을 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.");
    if (!ok) return;

    setBusyId(selectedRow.id);
    setModalError("");
    try {
      const res = await fetch(`/api/admin/consultations/${selectedRow.id}`, {
        method: "DELETE",
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setModalError(data.error ?? "삭제 중 오류가 발생했습니다.");
        return;
      }
      setSelectedId(null);
      router.refresh();
    } finally {
      setBusyId(null);
    }
  }

  if (items.length === 0) {
    return <p className="text-[14px] text-[var(--text-secondary)]">아직 상담 신청이 없습니다.</p>;
  }

  return (
    <div className="space-y-3">
      <div className="rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[13px] font-medium text-[var(--text-primary)]">예약 접수/확인 문자 센터</p>
            <p className="mt-0.5 text-[12px] text-[var(--text-secondary)]">
              곧 오픈 예정 기능입니다. UI만 미리 제공되며 실제 발송은 아직 비활성화 상태입니다.
            </p>
          </div>
          <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">
            서비스 준비중
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            disabled
            className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)] opacity-70"
          >
            신규접수 안내 문자 발송
          </button>
          <button
            type="button"
            disabled
            className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)] opacity-70"
          >
            예약확정 문자 발송
          </button>
          <button
            type="button"
            disabled
            className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)] opacity-70"
          >
            발송 이력 보기
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-sm border border-[var(--border-page)]">
      <table className="w-full min-w-[640px] text-left text-[13px]">
        <thead className="border-b border-[var(--border-page)] bg-[var(--bg-card)]">
          <tr>
            <th className="px-3 py-2 font-medium">일시</th>
            <th className="px-3 py-2 font-medium">성함</th>
            <th className="px-3 py-2 font-medium">연락처</th>
            <th className="px-3 py-2 font-medium">관심</th>
            <th className="px-3 py-2 font-medium">문의</th>
            <th className="px-3 py-2 font-medium">개인정보동의</th>
            <th className="px-3 py-2 font-medium">상태</th>
            <th className="px-3 py-2 font-medium">내원구분</th>
            <th className="px-3 py-2 font-medium">문자</th>
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
                <button
                  type="button"
                  onClick={() => openDetail(row)}
                  className="w-full truncate text-left text-blue-600 underline underline-offset-2 hover:text-blue-700"
                >
                  {row.message || "—"}
                </button>
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-[var(--text-secondary)]">
                {row.privacyConsentAt ? new Date(row.privacyConsentAt).toLocaleString("ko-KR") : "—"}
              </td>
              <td className="px-3 py-2">
                <select
                  value={row.status}
                  disabled={busyId === row.id}
                  onChange={(e) => updateRow(row.id, { status: e.target.value })}
                  className="w-full max-w-[120px] border border-[var(--border-page)] bg-[var(--bg-page)] px-2 py-1 text-[12px]"
                >
                  {Object.entries(STATUS_LABEL).map(([k, lab]) => (
                    <option key={k} value={k}>
                      {lab}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-3 py-2">
                <select
                  value={row.visitType}
                  disabled={busyId === row.id}
                  onChange={(e) => updateRow(row.id, { visitType: e.target.value })}
                  className="w-full max-w-[120px] border border-[var(--border-page)] bg-[var(--bg-page)] px-2 py-1 text-[12px]"
                >
                  {Object.entries(VISIT_LABEL).map(([k, lab]) => (
                    <option key={k} value={k}>
                      {lab}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-3 py-2">
                <button
                  type="button"
                  disabled
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-2 py-1 text-[11px] text-[var(--text-secondary)] opacity-70"
                  title="서비스 준비중"
                >
                  준비중
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {selectedRow ? (
        <div className="fixed inset-0 z-[1400] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            onClick={closeDetail}
            aria-label="상담 상세 닫기"
          />
          <div className="relative z-[1] w-full max-w-[760px] rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[18px] font-medium">상담 상세 / 수정</h3>
              <button
                type="button"
                onClick={closeDetail}
                className="rounded border border-[var(--border-page)] px-2 py-1 text-[12px]"
                disabled={busyId === selectedRow.id}
              >
                닫기
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
                <span>성함</span>
                <input
                  value={editForm.name}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
                <span>연락처</span>
                <input
                  value={editForm.phone}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, phone: e.target.value }))}
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
                <span>관심</span>
                <input
                  value={editForm.interest}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, interest: e.target.value }))}
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
                <span>개인정보동의</span>
                <input
                  value={selectedRow.privacyConsentAt ? new Date(selectedRow.privacyConsentAt).toLocaleString("ko-KR") : "—"}
                  disabled
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-secondary)]"
                />
              </label>
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
                <span>상태</span>
                <select
                  value={editForm.status}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, status: e.target.value }))}
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
                >
                  {Object.entries(STATUS_LABEL).map(([k, lab]) => (
                    <option key={k} value={k}>
                      {lab}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
                <span>내원구분</span>
                <select
                  value={editForm.visitType}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, visitType: e.target.value }))}
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
                >
                  {Object.entries(VISIT_LABEL).map(([k, lab]) => (
                    <option key={k} value={k}>
                      {lab}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)] sm:col-span-2">
                <span>문의 내용 (전체)</span>
                <textarea
                  value={editForm.message}
                  onChange={(e) => setEditForm((prev) => ({ ...prev, message: e.target.value }))}
                  rows={7}
                  className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] leading-relaxed text-[var(--text-primary)]"
                />
              </label>
            </div>

            {modalError ? (
              <p className="mt-3 rounded border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-700">{modalError}</p>
            ) : null}

            <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={deleteRow}
                disabled={busyId === selectedRow.id}
                className="rounded border border-red-300 bg-red-50 px-3 py-2 text-[12px] text-red-700 hover:bg-red-100 disabled:cursor-default disabled:opacity-60"
              >
                삭제
              </button>
              <button
                type="button"
                onClick={saveDetail}
                disabled={busyId === selectedRow.id}
                className="rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-3 py-2 text-[12px] text-white hover:opacity-90 disabled:cursor-default disabled:opacity-60"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
