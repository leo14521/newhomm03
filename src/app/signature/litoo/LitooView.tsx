"use client";

import Link from "next/link";
import { InlineBold } from "@/components/i18n/InlineBold";
import { useLocale } from "@/i18n/LocaleProvider";
import { getLitooPageContent } from "@/i18n/litooPageContent";

export default function LitooView() {
  const { t, locale } = useLocale();
  const c = getLitooPageContent(locale);

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2.5rem)]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <nav className="mb-8 text-[12px] text-[var(--text-secondary)]">
          <Link href="/signature/boosting" className="hover:text-[var(--accent-terracotta-dark)]">
            {t("boosting.hub.back")}
          </Link>
        </nav>

        <p className="sec-label text-[10px] tracking-[0.28em] text-[var(--text-secondary)]">LITOO</p>
        <h1 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(26px,4vw,36px)] font-medium leading-tight">
          {c.title}
        </h1>
        <p className="mt-6 text-[15px] leading-[1.85] text-[var(--text-secondary)]">{c.intro[0]}</p>
        <p className="mt-4 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
          <InlineBold text={c.intro[1]!} />
        </p>

        <section className="mt-16 space-y-8">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-medium">{c.pillarsSectionTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {c.pillars.map((b) => (
              <div key={b.kicker} className="rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-5">
                <p className="font-[family-name:var(--font-en-title)] text-[9px] tracking-[0.2em] text-[var(--accent-terracotta-dark)] uppercase">
                  {b.kicker}
                </p>
                <h3 className="mt-2 text-[15px] font-medium">{b.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-medium">{c.agingTitle}</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.agingIntro}</p>
          <ol className="mt-6 space-y-3 border-l-2 border-[var(--accent-terracotta)] pl-5">
            {c.aging.map((line, i) => (
              <li key={i} className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
                <span className="mr-2 font-[family-name:var(--font-en-display)] text-[12px] text-[var(--text-primary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {line}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-medium">{c.hadmTitle}</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.hadmIntro}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-[13px] font-medium text-[var(--text-secondary)]">{c.compareLegacyTitle}</h3>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                {c.legacy.map((x) => (
                  <li
                    key={x}
                    className="relative pl-3 before:absolute before:left-0 before:top-[0.45em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--text-primary)]/40"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[13px] font-medium text-[var(--accent-terracotta-dark)]">{c.compareHadmTitle}</h3>
              <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                {c.hadm.map((x) => (
                  <li
                    key={x}
                    className="relative pl-3 before:absolute before:left-0 before:top-[0.45em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent-terracotta)]"
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-5 text-[13px] leading-relaxed text-[var(--text-secondary)]">
            {c.hadmNote}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-medium">{c.structureTitle}</h2>
          <p className="mt-4 text-[14px] leading-[1.85] text-[var(--text-secondary)]">{c.structureBody}</p>
          <p className="mt-3 text-[12px] text-[var(--text-secondary)]/90">{c.structureFootnote}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.structureBullets.map((line) => (
              <li key={line} className="rounded-sm border border-[var(--border-page)] bg-white px-4 py-3 text-[13px] text-[var(--text-secondary)]">
                {line}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-medium">{c.clinicalTitle}</h2>
          <p className="mt-3 text-[13px] text-[var(--text-secondary)]">{c.clinicalIntro}</p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {c.stats.map((s) => (
              <div key={s.label} className="rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-4 text-center">
                <p className="font-[family-name:var(--font-en-display)] text-[clamp(22px,3vw,28px)] font-light text-[var(--text-primary)]">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] text-[var(--text-secondary)]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-medium">{c.benefitsTitle}</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.benefitsIntro}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {c.benefits.map((b) => (
              <li key={b} className="flex gap-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent-terracotta)]" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-8">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.idealTitle}</h2>
          <ul className="mt-5 space-y-3">
            {c.ideal.map((x) => (
              <li key={x} className="text-[14px] text-[var(--text-secondary)]">
                · {x}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/#consult"
            className="inline-flex rounded-sm bg-[var(--text-primary)] px-6 py-3.5 text-[13px] font-medium tracking-wide text-white transition-opacity hover:opacity-90"
          >
            {t("pages.consultBook")}
          </Link>
          <Link
            href="/signature/boosting"
            className="inline-flex rounded-sm border border-[var(--border-page)] px-6 py-3.5 text-[13px] text-[var(--text-primary)] hover:border-[var(--text-primary)]/30"
          >
            {t("boosting.hub.viewAll")}
          </Link>
        </div>
      </div>
    </main>
  );
}
