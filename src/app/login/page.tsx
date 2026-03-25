"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function getLoginErrorMessage(errorCode: string) {
  if (errorCode === "AUTH_SERVER_ERROR") {
    return "로그인 서버 설정 오류가 발생했습니다. 관리자에게 문의해 주세요.";
  }
  return "이메일 또는 비밀번호가 올바르지 않습니다.";
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromBa = searchParams.get("from") === "ba";
  const registered = searchParams.get("registered") === "1";
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const isAdminLoginAttempt = callbackUrl.startsWith("/admin");
  const isHttps = typeof window !== "undefined" ? window.location.protocol === "https:" : true;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
      });
      if (res?.error) {
        setError(getLoginErrorMessage(res.error));
        setLoading(false);
        return;
      }
      if (fromBa) {
        window.location.href = "/#ba";
        return;
      }
      if (callbackUrl.startsWith("/")) {
        router.push(callbackUrl);
        router.refresh();
        return;
      }
      router.push("/");
      router.refresh();
    } catch {
      setError("로그인 처리 중 오류가 발생했습니다.");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2rem)]">
      <div className="mx-auto w-full max-w-[420px] px-6">
        <p className="sec-label mb-2 uppercase">Account</p>
        <h1 className="font-[family-name:var(--font-kr-heading)] text-[clamp(22px,3vw,28px)] font-medium">로그인</h1>
        <p className="mt-2 text-[14px] text-[var(--text-secondary)]">전후 사진 열람 및 맞춤 안내를 위해 로그인해 주세요.</p>
        {registered ? (
          <p className="mt-4 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[13px] text-[var(--text-secondary)]">
            회원가입이 완료되었습니다. 로그인해 주세요.
          </p>
        ) : null}
        {isAdminLoginAttempt ? (
          <p className="mt-4 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[13px] text-[var(--text-secondary)]">
            관리자 페이지 접근 중입니다. 운영 도메인(HTTPS)으로 접속 중인지 확인해 주세요.
            {!isHttps ? (
              <span className="mt-1 block text-[12px] text-[var(--text-secondary)]/90">현재 접속이 HTTP라면 로그인 세션이 저장되지 않을 수 있습니다.</span>
            ) : null}
          </p>
        ) : null}

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          {error ? <p className="text-[13px] text-red-600">{error}</p> : null}
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
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3 text-[15px] outline-none focus:border-[var(--accent-terracotta)]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-sm bg-[var(--text-primary)] py-3.5 text-[14px] font-medium tracking-wider text-white transition-opacity disabled:opacity-50"
          >
            {loading ? "확인 중…" : "로그인"}
          </button>
        </form>

        <p className="mt-8 text-center text-[14px] text-[var(--text-secondary)]">
          계정이 없으신가요?{" "}
          <Link href="/register" className="text-[var(--accent-terracotta-dark)] underline underline-offset-4">
            회원가입
          </Link>
        </p>
        <p className="mt-4 text-center">
          <Link href="/" className="text-[13px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
            ← 홈으로
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--bg-page)] pt-32 text-center text-[var(--text-secondary)]">로딩…</div>}>
      <LoginForm />
    </Suspense>
  );
}
