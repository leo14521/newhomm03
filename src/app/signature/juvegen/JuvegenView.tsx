"use client";

import Link from "next/link";
import { useState } from "react";
import { getJuvegenPageContent } from "@/i18n/juvegenPageContent";
import { useLocale } from "@/i18n/LocaleProvider";

export default function JuvegenView() {
  const [openQna, setOpenQna] = useState<number | null>(null);
  const { t, locale } = useLocale();
  const c = getJuvegenPageContent(locale);

  return (
    <main
      data-page="juvegen"
      className="min-h-screen overflow-x-hidden bg-[var(--bg-page)] pt-[var(--header-height)] text-[var(--text-primary)] lg:pt-[var(--header-h)]"
    >
      {/* ========== Section 1: Hero ========== */}
      <section
        id="intro"
        className="relative flex min-h-[100vh] flex-col justify-end overflow-hidden bg-[var(--bg-card)] pb-24 pt-28 lg:flex-row lg:items-center lg:justify-between lg:pb-32 lg:pt-32 lg:px-[var(--pad-global)]"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-0">
          <div className="lg:col-span-7">
            <p className="mb-6 font-[family-name:var(--font-en-display)] text-[11px] uppercase tracking-[0.25em] text-[var(--text-secondary)]" data-reveal-line>
              Autologous Dermis Regeneration
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-kr-heading)] text-[clamp(36px,7vw,72px)] font-medium leading-[1.15] tracking-tight">
              <span className="block overflow-hidden">
                <span data-reveal-line className="block">{c.heroLine1}</span>
              </span>
              <span className="block overflow-hidden">
                <span data-reveal-line className="block">{c.heroLine2}</span>
              </span>
              <span className="mt-2 block overflow-hidden">
                <span data-reveal-line className="inline-block font-[family-name:var(--font-en-display)] italic text-[var(--text-primary)]">{c.heroBrand}</span>
              </span>
            </h1>
            <p data-reveal-sub className="max-w-lg border-l-2 border-[var(--text-primary)]/20 pl-6 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              {t("signatureCommon.juvegenHeroLead1")}
              <br />
              {t("signatureCommon.juvegenHeroLead2")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal-tag>
              {c.tags.map((tag, i) => (
                <span key={i} className="rounded-full border border-[var(--text-primary)]/20 bg-[var(--bg-page)] px-4 py-2 text-[12px] text-[var(--text-secondary)]" data-reveal-tag>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-6">
              <Link href="/#curation" className="inline-flex items-center gap-2 rounded-sm border border-[var(--text-primary)] bg-[var(--text-primary)] px-8 py-4 text-[13px] font-medium tracking-[0.12em] text-white transition-colors hover:bg-[var(--text-primary)]/90">
                {t("signatureCommon.privateConsultBook")}
                <span aria-hidden>→</span>
              </Link>
              <a href="#effects" className="text-[13px] font-medium tracking-wider text-[var(--text-secondary)] underline underline-offset-4 hover:text-[var(--text-primary)]">
                {t("signatureCommon.juvegenViewEffects")}
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-[45vh] min-h-[320px] w-full overflow-hidden lg:col-span-5 lg:mt-0 lg:h-[70vh]">
            <div className="absolute inset-0 -top-[10%] h-[120%] w-full">
              <img
                src="/images/sub/play1_1.jpg"
                alt={c.imgAlt}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=JUVGEN";
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-card)] to-transparent pointer-events-none" aria-hidden />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">Scroll</span>
          <div className="h-12 w-px overflow-hidden rounded-full bg-[var(--text-primary)]/20">
            <div className="h-1/2 w-full rounded-full bg-[var(--text-primary)]/50" style={{ animation: "movedown 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* Marquee tags */}
      <div className="relative z-20 overflow-hidden border-y border-[var(--border-page)] bg-[var(--text-primary)] py-5">
        <div
          className="flex w-max gap-16 whitespace-nowrap text-[var(--bg-page)]"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[...c.tags, ...c.tags].map((tag, i) => (
            <span key={i} className="font-[family-name:var(--font-en-display)] text-[clamp(18px,2.5vw,28px)] italic opacity-90">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ========== Section 2: 4가지 주요 효과 ========== */}
      <section id="effects" className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1200px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">{c.effectsKicker}</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,42px)]">{c.effectsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.effects.map((item, i) => (
              <div
                key={i}
                data-sec-card
                className="group flex flex-col items-center rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-8 text-center transition-colors hover:border-[var(--text-primary)]/30"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--text-primary)]/8 font-[family-name:var(--font-en-display)] text-[18px] text-[var(--text-primary)] transition-colors group-hover:bg-[var(--text-primary)]/15">
                  {i + 1}
                </span>
                <p className="font-[family-name:var(--font-en-display)] text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">{item.en}</p>
                <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Section 3: 쥬브젠이란? ========== */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">{c.whatKicker}</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">{c.whatTitle}</h2>
          </div>
          <div data-sec-card className="space-y-6 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
            <p>
              {c.whatPara1.before}
              <strong className="text-[var(--text-primary)]">{c.whatPara1.emphasis}</strong>
              {c.whatPara1.after}
            </p>
            <p>{c.whatPara2}</p>
            <p className="pt-4 font-medium text-[var(--text-primary)]">{c.whatDuration}</p>
          </div>
        </div>
      </section>

      {/* ========== Section 4: 오마쥬클리닉 전용 의료기기 ========== */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1000px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">{c.deviceKicker}</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">{c.deviceTitle}</h2>
            <p className="mt-4 text-[15px] text-[var(--text-secondary)]">{c.deviceLead}</p>
          </div>
          <ul className="space-y-8">
            {c.deviceFeatures.map((item, i) => (
              <li key={i} data-sec-card className="flex flex-col gap-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-8 lg:flex-row lg:items-start lg:gap-8">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] font-[family-name:var(--font-en-display)] text-[18px] font-medium text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.8] text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 5: 추천 ========== */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[1000px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">{c.forYouKicker}</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">{c.forYouTitle}</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.recommend.map((text, i) => (
              <li key={i} data-sec-card className="flex items-start gap-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] p-6">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 font-[family-name:var(--font-en-display)] text-[14px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 6: Q&A ========== */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[720px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">{c.faqKicker}</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">{c.faqTitle}</h2>
          </div>
          <ul className="space-y-3">
            {c.qna.map((item, i) => (
              <li key={i} data-sec-card className="overflow-hidden rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)]">
                <button
                  type="button"
                  onClick={() => setOpenQna(openQna === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-page)]"
                >
                  <span className="text-[15px]">Q. {item.q}</span>
                  <span className={`flex-shrink-0 text-[var(--text-secondary)] transition-transform duration-300 ${openQna === i ? "rotate-180" : ""}`} aria-hidden>▼</span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: openQna === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[var(--border-page)] px-6 py-4 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                      A. {item.a}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 7: 주의사항 ========== */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[720px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">{c.cautionKicker}</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">{c.cautionTitle}</h2>
            <p className="mt-4 text-[15px] text-[var(--text-secondary)]">{c.cautionLead}</p>
          </div>
          <ul className="space-y-4">
            {c.cautions.map((text, i) => (
              <li key={i} data-sec-card className="flex items-start gap-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--text-primary)]/40" aria-hidden />
                <p className="text-[15px] leading-[1.8] text-[var(--text-secondary)]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section-block section-dark">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">{t("signatureCommon.consultTitleJuvegen")}</p>
          <p className="mt-2 text-[14px] text-white/60">{t("signatureCommon.consultLeadJuvegen")}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/#curation" className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white">
              {t("signatureCommon.consultReserve")}
            </Link>
            <Link href="/" className="inline-block rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white">
              {t("signatureCommon.navHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
