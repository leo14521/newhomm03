"use client";

import Link from "next/link";
import { InlineBold } from "@/components/i18n/InlineBold";
import { useLocale } from "@/i18n/LocaleProvider";
import { getSkinvivePageContent } from "@/i18n/skinvivePageContent";

export default function SkinviveView() {
  const { t: tr, locale } = useLocale();
  const c = getSkinvivePageContent(locale);

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2.5rem)]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <nav className="mb-8 text-[12px] text-[var(--text-secondary)]">
          <Link href="/signature/boosting" className="hover:text-[var(--accent-terracotta-dark)]">
            {tr("boosting.hub.back")}
          </Link>
        </nav>

        <p className="sec-label text-[10px] tracking-[0.28em] text-[var(--text-secondary)]">SKINVIVE by Juvéderm</p>
        <h1 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(26px,4vw,36px)] font-medium leading-tight">
          {c.titleKr}
        </h1>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.25em] text-[var(--accent-terracotta-dark)] uppercase">
            {c.whatIsHeading}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            <InlineBold text={c.whatIsBody} />
          </p>
        </section>

        <section className="mt-14 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-8">
          <h2 className="font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.22em] text-[var(--text-secondary)] uppercase">
            {c.recommendKicker}
          </h2>
          <p className="mt-2 text-[13px] text-[var(--text-secondary)]">{c.recommendSub}</p>
          <ul className="mt-5 space-y-3">
            {c.recommend.map((line, i) => (
              <li key={line} className="flex gap-3 text-[14px] text-[var(--text-secondary)]">
                <span className="shrink-0 font-[family-name:var(--font-en-display)] text-[12px] text-[var(--text-primary)]">
                  POINT {i + 1}
                </span>
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.22em] text-[var(--text-secondary)] uppercase">
            {c.cautionsKicker}
          </h2>
          <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-[var(--text-secondary)]">
            {c.cautions.map((line) => (
              <li key={line}>· {line}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14 border-t border-[var(--border-page)] pt-12">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.overviewTitle}</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">
            <InlineBold text={c.overviewBody} />
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.overviewCards.map((x) => (
              <div key={x.label} className="rounded-sm border border-[var(--border-page)] bg-white p-5">
                <p className="font-[family-name:var(--font-en-title)] text-[9px] tracking-[0.2em] text-[var(--accent-terracotta-dark)] uppercase">
                  {x.label}
                </p>
                <p className="mt-2 text-[13px] text-[var(--text-secondary)]">{x.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[11px] text-[var(--text-secondary)]">{c.infographicNote}</p>
        </section>

        <div className="mt-14">
          <Link
            href="/#consult"
            className="inline-flex rounded-sm bg-[var(--text-primary)] px-6 py-3.5 text-[13px] font-medium text-white hover:opacity-90"
          >
            {tr("pages.consultBook")}
          </Link>
        </div>
      </div>
    </main>
  );
}
