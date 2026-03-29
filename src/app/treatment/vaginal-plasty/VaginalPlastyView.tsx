"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";
import { getVaginalPlastyPageContent } from "@/i18n/vaginalPlastyPageContent";
import { useLocale } from "@/i18n/LocaleProvider";

export default function VaginalPlastyView() {
  const { locale } = useLocale();
  const c = getVaginalPlastyPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title={c.heroTitle}
        titleKr={c.heroTitleKr}
        description={c.heroDescription}
        showBackgroundImage={false}
        imageIndex={0}
      />

      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.s2Label}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.s2Title}</h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {c.s2Paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.s3Label}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.s3Title}</h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {c.s3Paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="sec-head text-center">
            <span className="sec-label block">{c.s4Label}</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.s4Title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {c.methods.map((item, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[0_8px_28px_rgba(44,43,42,0.06)]"
              >
                <h3 className="font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.s5Label}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.s5Title}</h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {c.s5Paras.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[900px]">
          <div className="sec-head text-center">
            <span className="sec-label block">{c.s6Label}</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.s6Title}</h2>
          </div>
          <ul className="space-y-4">
            {c.features.map((item, i) => (
              <li
                key={i}
                className="flex flex-col rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-start sm:gap-5"
              >
                <span className="mb-2 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] sm:mb-0 sm:w-[160px] sm:flex-shrink-0">
                  {item.title}
                </span>
                <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)]">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">{c.s7Label}</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.s7Title}</h2>
          </div>
          <ul className="mt-10 space-y-3">
            {c.recommend.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] px-5 py-4"
              >
                <span className="font-[family-name:var(--font-en-display)] text-[18px] font-normal text-[var(--text-primary)] flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[700px]">
          <div className="sec-head text-center">
            <span className="sec-label block">{c.processLabel}</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.processTitle}</h2>
          </div>
          <ol className="mt-10 space-y-4">
            {c.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-center gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-5 py-4"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] font-[family-name:var(--font-en-display)] text-[14px] font-medium text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium text-[var(--text-primary)]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.directorLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.directorTitle}</h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>{c.directorParas[0]}</p>
            <p className="text-[14px] text-[var(--text-secondary)]/90">{c.directorKeywords}</p>
            <p>{c.directorParas[1]}</p>
          </div>
        </div>
      </section>

      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">{c.ctaTitle}</p>
          <p className="mt-2 text-[14px] text-white/60">{c.ctaSub}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
            >
              {c.ctaBook}
            </Link>
            <Link
              href="/"
              className="inline-block rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
            >
              {c.ctaHome}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
