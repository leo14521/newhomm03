"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useLocale } from "@/i18n/LocaleProvider";

export default function HeaderAuth() {
  const { t } = useLocale();
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="nav-auth-placeholder w-12 shrink-0 sm:w-16" aria-hidden />;
  }

  if (!session?.user) {
    return (
      <div className="nav-auth flex shrink-0 items-center gap-1.5 text-[10px] font-medium tracking-wider text-[var(--text-primary)] sm:gap-2 sm:text-[11px]">
        <Link href="/login" className="opacity-85 transition-opacity hover:opacity-100">
          {t("auth.login")}
        </Link>
        <span className="text-[var(--text-secondary)]" aria-hidden>
          |
        </span>
        <Link href="/register" className="opacity-85 transition-opacity hover:opacity-100">
          {t("auth.register")}
        </Link>
      </div>
    );
  }

  return (
    <div className="nav-auth flex max-w-[120px] shrink-0 flex-col items-end gap-0.5 text-right sm:max-w-[200px] sm:flex-row sm:items-center sm:gap-2">
      {session.user.role === "ADMIN" ? (
        <Link href="/admin" className="text-[10px] font-medium tracking-wider text-[var(--accent-terracotta-dark)] sm:text-[11px]">
          {t("auth.admin")}
        </Link>
      ) : null}
      <span
        className="hidden max-w-[88px] truncate text-[10px] text-[var(--text-secondary)] sm:inline sm:max-w-[100px]"
        title={session.user.email ?? ""}
      >
        {session.user.name || session.user.email}
      </span>
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="text-[10px] font-medium tracking-wider text-[var(--text-primary)] underline-offset-2 hover:underline sm:text-[11px]"
      >
        {t("auth.logout")}
      </button>
    </div>
  );
}
