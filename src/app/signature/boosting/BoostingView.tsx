"use client";

import Link from "next/link";
import { BOOSTING_PROGRAM_ORDER } from "@/config/boostingNav";
import { useLocale } from "@/i18n/LocaleProvider";

export default function BoostingView() {
  const { t } = useLocale();

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2.5rem)]">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
        <p className="sec-label mb-2 text-[10px] tracking-[0.28em] text-[var(--text-secondary)]">{t("boosting.hub.kicker")}</p>
        <h1 className="font-[family-name:var(--font-kr-heading)] text-[clamp(28px,4vw,40px)] font-medium leading-tight">
          {t("boosting.hub.title")}
        </h1>
        <p className="mt-4 max-w-[640px] text-[15px] leading-relaxed text-[var(--text-secondary)]">{t("boosting.hub.intro")}</p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOOSTING_PROGRAM_ORDER.map(({ href, progKey }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--accent-terracotta)_35%,var(--border-page))] hover:-translate-y-0.5"
              >
                <span className="font-[family-name:var(--font-en-title)] text-[10px] font-light tracking-[0.22em] text-[var(--text-secondary)] uppercase">
                  {t(`boosting.prog.${progKey}.subtitle`)}
                </span>
                <h2 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">
                  {t(`boosting.prog.${progKey}.title`)}
                </h2>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {t(`boosting.prog.${progKey}.blurb`)}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-[12px] font-medium text-[var(--accent-terracotta-dark)] group-hover:underline underline-offset-4">
                  {t("boosting.hub.readMore")}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-[12px] text-[var(--text-secondary)]">
          {t("boosting.hub.footnoteBefore")}
          <Link href="/signature/recovery" className="text-[var(--accent-terracotta-dark)] underline underline-offset-4">
            {t("boosting.hub.recoveryName")}
          </Link>
          {t("boosting.hub.footnoteAfter")}
        </p>
      </div>
    </main>
  );
}
