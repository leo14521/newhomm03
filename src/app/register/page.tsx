"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { isValidKrMobile, normalizeKrMobile } from "@/lib/phone-kr";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = setTimeout(() => setCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [cooldown]);

  async function onSendCode(e?: React.MouseEvent) {
    e?.preventDefault();
    setError("");
    const normalized = normalizeKrMobile(phone);
    if (!isValidKrMobile(normalized)) {
      setError("휴대폰 번호를 올바르게 입력한 뒤 인증번호를 요청해 주세요.");
      return;
    }
    setSendingCode(true);
    try {
      const res = await fetch("/api/phone/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "인증번호 발송에 실패했습니다.");
        setSendingCode(false);
        return;
      }
      setCodeSent(true);
      setPhoneCode("");
      setCooldown(60);
      if (typeof data.devHint === "string") {
        console.info(data.devHint);
      }
    } catch {
      setError("인증번호 발송 중 오류가 발생했습니다.");
    }
    setSendingCode(false);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!agreeTerms || !agreePrivacy) {
      setError("필수 약관에 동의해 주세요.");
      return;
    }
    const normalized = normalizeKrMobile(phone);
    if (!isValidKrMobile(normalized)) {
      setError("휴대폰 번호를 확인해 주세요.");
      return;
    }
    if (!/^\d{6}$/.test(phoneCode.replace(/\D/g, ""))) {
      setError("6자리 인증번호를 입력해 주세요.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || undefined,
          email: email.trim().toLowerCase(),
          password,
          phone: normalized,
          phoneCode: phoneCode.replace(/\D/g, ""),
          agreeTerms: true,
          agreePrivacy: true,
          marketingOptIn,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "가입에 실패했습니다.");
        setLoading(false);
        return;
      }
      router.push("/login?registered=1");
      router.refresh();
    } catch {
      setError("회원가입 처리 중 오류가 발생했습니다.");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2rem)]">
      <div className="mx-auto w-full max-w-[420px] px-6">
        <p className="sec-label mb-2 uppercase">Account</p>
        <h1 className="font-[family-name:var(--font-kr-heading)] text-[clamp(22px,3vw,28px)] font-medium">회원가입</h1>
        <p className="mt-2 text-[14px] text-[var(--text-secondary)]">
          휴대폰 인증 후 가입이 완료됩니다. 비밀번호는 8자 이상으로 설정해 주세요.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

          <div>
            <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">이름 (선택)</label>
            <input
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[15px] outline-none focus:border-[var(--accent-terracotta)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">휴대폰 번호</label>
            <div className="flex gap-2">
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="01012345678"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="min-w-0 flex-1 border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[15px] outline-none focus:border-[var(--accent-terracotta)]"
              />
              <button
                type="button"
                disabled={sendingCode || cooldown > 0}
                onClick={onSendCode}
                className="shrink-0 rounded-sm border border-[var(--text-primary)] px-3 py-2 text-[12px] font-medium tracking-wide text-[var(--text-primary)] transition-opacity disabled:opacity-40"
              >
                {sendingCode ? "발송 중…" : cooldown > 0 ? `${cooldown}s` : "인증번호 받기"}
              </button>
            </div>
            {process.env.NODE_ENV === "development" ? (
              <p className="mt-1 text-[11px] text-[var(--text-secondary)]">
                하이픈 없이 입력해 주세요. 로컬 개발 시 인증번호는 서버 터미널에 출력됩니다.
              </p>
            ) : (
              <p className="mt-1 text-[11px] text-[var(--text-secondary)]">하이픈 없이 입력해 주세요.</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">인증번호 (6자리)</label>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              required
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              className="w-full border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[15px] tracking-widest outline-none focus:border-[var(--accent-terracotta)]"
              placeholder="000000"
            />
            {codeSent ? (
              <p className="mt-1 text-[11px] text-[var(--accent-terracotta-dark)]">인증번호가 발송되었습니다. 5분 이내에 입력해 주세요.</p>
            ) : null}
          </div>

          <div>
            <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">이메일</label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[15px] outline-none focus:border-[var(--accent-terracotta)]"
            />
          </div>

          <div>
            <label className="mb-1 block text-[12px] text-[var(--text-secondary)]">비밀번호</label>
            <input
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[15px] outline-none focus:border-[var(--accent-terracotta)]"
            />
          </div>

          <div className="space-y-3 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-4">
            <p className="text-[12px] font-medium text-[var(--text-primary)]">약관 동의</p>
            <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-snug text-[var(--text-secondary)]">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent-terracotta)]"
              />
              <span>
                <span className="text-[var(--text-primary)]">(필수)</span> 서비스 이용약관에 동의합니다.{" "}
                <Link href="/terms" target="_blank" className="text-[var(--accent-terracotta-dark)] underline underline-offset-2">
                  내용 보기
                </Link>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-snug text-[var(--text-secondary)]">
              <input
                type="checkbox"
                checked={agreePrivacy}
                onChange={(e) => setAgreePrivacy(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent-terracotta)]"
              />
              <span>
                <span className="text-[var(--text-primary)]">(필수)</span> 개인정보 처리방침에 동의합니다.{" "}
                <Link href="/privacy" target="_blank" className="text-[var(--accent-terracotta-dark)] underline underline-offset-2">
                  내용 보기
                </Link>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-snug text-[var(--text-secondary)]">
              <input
                type="checkbox"
                checked={marketingOptIn}
                onChange={(e) => setMarketingOptIn(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--accent-terracotta)]"
              />
              <span>
                <span className="text-[var(--text-primary)]">(선택)</span> 이벤트·혜택 등 마케팅 정보 수신에 동의합니다.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-sm bg-[var(--text-primary)] py-3.5 text-[14px] font-medium tracking-wider text-white transition-opacity disabled:opacity-50"
          >
            {loading ? "처리 중…" : "가입하기"}
          </button>
        </form>

        <p className="mt-8 text-center text-[14px] text-[var(--text-secondary)]">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-[var(--accent-terracotta-dark)] underline underline-offset-4">
            로그인
          </Link>
        </p>
      </div>
    </main>
  );
}
