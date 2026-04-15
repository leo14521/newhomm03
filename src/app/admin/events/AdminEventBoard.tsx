"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export type EventRow = {
  id: string;
  title: string;
  summary: string | null;
  imageUrl: string | null;
  content: string;
  isPublished: boolean;
  popupEnabled: boolean;
  publishedAt: string | null;
  createdAt: string;
};

const EMPTY_FORM = {
  title: "",
  summary: "",
  imageUrl: "",
  content: "",
  isPublished: true,
  popupEnabled: false,
};

export default function AdminEventBoard({ initialItems }: { initialItems: EventRow[] }) {
  const router = useRouter();
  const [items, setItems] = useState<EventRow[]>(initialItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [popupMode, setPopupMode] = useState<"auto" | "event" | "opening" | "off">("auto");
  const [popupBusy, setPopupBusy] = useState(false);
  const [popupError, setPopupError] = useState("");

  const isEditing = useMemo(() => editingId !== null, [editingId]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/admin/popup-settings", { cache: "no-store" });
        const data = (await res.json().catch(() => ({}))) as { mode?: string };
        if (!cancelled && (data.mode === "auto" || data.mode === "event" || data.mode === "opening" || data.mode === "off")) {
          setPopupMode(data.mode);
        }
      } catch {
        if (!cancelled) setPopupError("팝업 설정을 불러오지 못했습니다.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function savePopupMode() {
    if (popupBusy) return;
    setPopupBusy(true);
    setPopupError("");
    try {
      const res = await fetch("/api/admin/popup-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: popupMode }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setPopupError(data.error ?? "팝업 설정 저장 중 오류가 발생했습니다.");
        return;
      }
      router.refresh();
    } catch {
      setPopupError("팝업 설정 저장 중 오류가 발생했습니다.");
    } finally {
      setPopupBusy(false);
    }
  }

  function startEdit(row: EventRow) {
    setEditingId(row.id);
    setError("");
    setForm({
      title: row.title,
      summary: row.summary ?? "",
      imageUrl: row.imageUrl ?? "",
      content: row.content,
      isPublished: row.isPublished,
      popupEnabled: row.popupEnabled,
    });
  }

  function resetForm() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setError("");
  }

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    if (!form.title.trim() || !form.content.trim()) {
      setError("제목과 본문은 필수입니다.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const method = isEditing ? "PATCH" : "POST";
      const endpoint = isEditing ? `/api/admin/events/${editingId}` : "/api/admin/events";
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        item?: EventRow;
      };
      if (!res.ok) {
        setError(data.error ?? "처리 중 오류가 발생했습니다.");
        return;
      }

      if (isEditing && data.item) {
        setItems((prev) => prev.map((item) => (item.id === data.item!.id ? data.item! : item)));
      } else if (data.item) {
        setItems((prev) => [data.item!, ...prev]);
      }
      resetForm();
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  async function fileToDataUrl(file: File) {
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") resolve(reader.result);
        else reject(new Error("이미지 파일을 읽지 못했습니다."));
      };
      reader.onerror = () => reject(new Error("이미지 파일을 읽지 못했습니다."));
      reader.readAsDataURL(file);
    });
  }

  async function handleImageFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 업로드할 수 있습니다.");
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setError("이미지 용량은 8MB 이하만 가능합니다.");
      return;
    }
    setError("");
    const dataUrl = await fileToDataUrl(file);
    setForm((prev) => ({ ...prev, imageUrl: dataUrl }));
  }

  async function deleteRow(id: string) {
    const ok = window.confirm("이 이벤트를 삭제하시겠습니까?");
    if (!ok || busy) return;

    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/events/${id}`, { method: "DELETE" });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "삭제 중 오류가 발생했습니다.");
        return;
      }
      setItems((prev) => prev.filter((item) => item.id !== id));
      if (editingId === id) resetForm();
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded border border-[var(--border-page)] bg-[var(--bg-card)] p-4">
        <h2 className="text-[16px] font-medium">메인 팝업 노출 설정</h2>
        <p className="mt-1 text-[12px] text-[var(--text-secondary)]">
          이벤트 게시글이 없을 때는 개원 팝업으로 자동 대체됩니다.
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:max-w-[320px]">
          <select
            value={popupMode}
            onChange={(e) =>
              setPopupMode((e.target.value as "auto" | "event" | "opening" | "off") ?? "auto")
            }
            className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
          >
            <option value="auto">자동 (이벤트 우선, 없으면 개원)</option>
            <option value="event">이벤트 팝업 우선</option>
            <option value="opening">개원 팝업 고정</option>
            <option value="off">팝업 끔</option>
          </select>
          <button
            type="button"
            onClick={savePopupMode}
            disabled={popupBusy}
            className="inline-flex w-fit items-center rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-3 py-2 text-[12px] text-white disabled:cursor-default disabled:opacity-60"
          >
            {popupBusy ? "저장 중..." : "팝업 설정 저장"}
          </button>
          {popupError ? (
            <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-700">
              {popupError}
            </p>
          ) : null}
        </div>
      </section>

      <section className="rounded border border-[var(--border-page)] bg-[var(--bg-card)] p-4">
        <h2 className="text-[16px] font-medium">{isEditing ? "이벤트 수정" : "이벤트 작성"}</h2>
        <form
          className="mt-4 space-y-3"
          onSubmit={submitForm}
          onPaste={async (e) => {
            const item = Array.from(e.clipboardData.items).find((it) => it.type.startsWith("image/"));
            if (!item) return;
            const file = item.getAsFile();
            if (!file) return;
            e.preventDefault();
            await handleImageFile(file);
          }}
        >
          <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
            <span>제목</span>
            <input
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
              className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
            />
          </label>
          <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
            <span>요약</span>
            <input
              value={form.summary}
              onChange={(e) => setForm((prev) => ({ ...prev, summary: e.target.value }))}
              className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] text-[var(--text-primary)]"
            />
          </label>
          <div className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] p-3">
            <p className="text-[12px] text-[var(--text-secondary)]">대표 이미지</p>
            <p className="mt-1 text-[11px] text-[var(--text-secondary)]/90">
              업로드 버튼을 누르거나, 클립보드 이미지(Ctrl+V)를 붙여넣으세요.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <label className="inline-flex cursor-pointer items-center rounded border border-[var(--text-primary)] px-3 py-1.5 text-[12px] text-[var(--text-primary)]">
                이미지 업로드
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    await handleImageFile(file);
                    e.currentTarget.value = "";
                  }}
                />
              </label>
              {form.imageUrl ? (
                <button
                  type="button"
                  onClick={() => setForm((prev) => ({ ...prev, imageUrl: "" }))}
                  className="rounded border border-[var(--border-page)] px-3 py-1.5 text-[12px] text-[var(--text-secondary)]"
                >
                  이미지 제거
                </button>
              ) : null}
            </div>
            {form.imageUrl ? (
              <div className="mt-3 overflow-hidden rounded border border-[var(--border-page)] bg-white">
                <img src={form.imageUrl} alt="미리보기" className="h-[160px] w-full object-cover object-center" />
              </div>
            ) : null}
          </div>
          <label className="flex flex-col gap-1 text-[12px] text-[var(--text-secondary)]">
            <span>본문</span>
            <textarea
              rows={8}
              value={form.content}
              onChange={(e) => setForm((prev) => ({ ...prev, content: e.target.value }))}
              className="rounded border border-[var(--border-page)] bg-[var(--bg-page)] px-3 py-2 text-[13px] leading-relaxed text-[var(--text-primary)]"
            />
          </label>
          <label className="inline-flex items-center gap-2 text-[12px] text-[var(--text-secondary)]">
            <input
              type="checkbox"
              checked={form.isPublished}
              onChange={(e) => setForm((prev) => ({ ...prev, isPublished: e.target.checked }))}
            />
            공개 상태
          </label>
          <label className="inline-flex items-center gap-2 text-[12px] text-[var(--text-secondary)]">
            <input
              type="checkbox"
              checked={form.popupEnabled}
              onChange={(e) => setForm((prev) => ({ ...prev, popupEnabled: e.target.checked }))}
            />
            팝업 노출 연동
          </label>
          {error ? (
            <p className="rounded border border-red-200 bg-red-50 px-3 py-2 text-[12px] text-red-700">{error}</p>
          ) : null}
          <div className="flex gap-2">
            <button
              type="submit"
              disabled={busy}
              className="rounded border border-[var(--text-primary)] bg-[var(--text-primary)] px-3 py-2 text-[12px] text-white disabled:cursor-default disabled:opacity-60"
            >
              {isEditing ? "수정 저장" : "이벤트 등록"}
            </button>
            {isEditing ? (
              <button
                type="button"
                onClick={resetForm}
                disabled={busy}
                className="rounded border border-[var(--border-page)] px-3 py-2 text-[12px] text-[var(--text-primary)] disabled:cursor-default disabled:opacity-60"
              >
                취소
              </button>
            ) : null}
          </div>
        </form>
      </section>

      <section className="rounded border border-[var(--border-page)] bg-[var(--bg-card)] p-4">
        <h2 className="text-[16px] font-medium">이벤트 목록</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[13px]">
            <thead className="border-b border-[var(--border-page)]">
              <tr>
                <th className="px-3 py-2">작성일</th>
                <th className="px-3 py-2">제목</th>
                <th className="px-3 py-2">공개</th>
                <th className="px-3 py-2 text-right">관리</th>
              </tr>
            </thead>
            <tbody>
              {items.map((row) => (
                <tr key={row.id} className="border-b border-[var(--border-page)]/70">
                  <td className="px-3 py-2 text-[var(--text-secondary)]">
                    {new Date(row.createdAt).toLocaleString("ko-KR")}
                  </td>
                  <td className="max-w-[360px] truncate px-3 py-2">{row.title}</td>
                  <td className="px-3 py-2">
                    <span>{row.isPublished ? "공개" : "비공개"}</span>
                    {row.popupEnabled ? <span className="ml-2 rounded bg-[var(--text-primary)]/10 px-1.5 py-0.5 text-[11px] text-[var(--text-primary)]">팝업</span> : null}
                  </td>
                  <td className="px-3 py-2 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(row)}
                        disabled={busy}
                        className="rounded border border-[var(--border-page)] px-2 py-1 text-[12px] disabled:cursor-default disabled:opacity-60"
                      >
                        수정
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteRow(row.id)}
                        disabled={busy}
                        className="rounded border border-red-300 bg-red-50 px-2 py-1 text-[12px] text-red-700 disabled:cursor-default disabled:opacity-60"
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 ? (
            <p className="py-6 text-center text-[13px] text-[var(--text-secondary)]">등록된 이벤트가 없습니다.</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
