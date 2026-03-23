"use client";

import { useState } from "react";

export default function AdminPasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [nextPassword, setNextPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [ok, setOk] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setOk("");
    if (nextPassword !== confirmPassword) {
      setError("새 비밀번호와 확인 비밀번호가 일치하지 않습니다.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/admin/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, nextPassword }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "비밀번호 변경에 실패했습니다.");
        return;
      }
      setOk("비밀번호가 변경되었습니다.");
      setCurrentPassword("");
      setNextPassword("");
      setConfirmPassword("");
    } catch {
      setError("네트워크 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[520px]">
      <h1 className="font-[family-name:var(--font-kr-heading)] text-[20px] font-medium">비밀번호 변경</h1>
      <p className="mt-1 text-[13px] text-[var(--text-secondary)]">관리자 계정 비밀번호를 변경합니다.</p>

      <form onSubmit={onSubmit} className="mt-7 space-y-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-5">
        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}
        {ok ? <p className="text-[13px] text-emerald-700">{ok}</p> : null}

        <div>
          <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">현재 비밀번호</label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full border border-[var(--border-page)] bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[var(--accent-terracotta)]"
          />
        </div>
        <div>
          <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">새 비밀번호</label>
          <input
            type="password"
            required
            minLength={4}
            value={nextPassword}
            onChange={(e) => setNextPassword(e.target.value)}
            className="w-full border border-[var(--border-page)] bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[var(--accent-terracotta)]"
          />
        </div>
        <div>
          <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">새 비밀번호 확인</label>
          <input
            type="password"
            required
            minLength={4}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-[var(--border-page)] bg-white px-3 py-2.5 text-[14px] outline-none focus:border-[var(--accent-terracotta)]"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="rounded-sm bg-[var(--text-primary)] px-4 py-2.5 text-[13px] font-medium text-white transition-opacity disabled:opacity-50"
        >
          {loading ? "변경 중..." : "비밀번호 변경"}
        </button>
      </form>
    </div>
  );
}
