"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";
import { LiftingFusionBlock } from "./LiftingFusionBlock";
import { useLocale } from "@/i18n/LocaleProvider";
import { getLiftingPageContent } from "@/i18n/liftingPageContent";

export default function LiftingView() {
  const { t, locale } = useLocale();
  const c = getLiftingPageContent(locale);
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)] bg-[var(--bg-page)] text-[var(--text-primary)]">
      
      {/* 1. Hero Section */}
      <SignatureHero
        title="Lifting"
        titleKr="리프팅"
        description={c.heroDesc}
        imageIndex={0}
      />

      {/* 2. Intro Section */}
      <section className="relative py-20 lg:py-32 border-t border-[var(--border-page)] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
            Lifting
          </span>
          <p className="text-[15px] lg:text-[16px] leading-relaxed text-[var(--text-secondary)] break-keep">
            {c.introLine1} <br className="hidden md:block" />
            {c.introLine2}
          </p>
        </div>
      </section>

      {/* 3. Fusion Block Component */}
      <LiftingFusionBlock />

      {/* 4. About Section (이미지 제거 및 텍스트 중심 레이아웃) */}
      <section className="relative py-20 lg:py-32 bg-[var(--bg-card)] px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              {c.aboutLabel}
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-3xl lg:text-4xl font-medium mb-8">
              {c.aboutH2}
            </h3>
            <div className="bg-[var(--bg-page)] border border-[var(--border-page)] p-8 lg:p-12 rounded-2xl shadow-sm">
              <p className="text-base lg:text-lg leading-relaxed text-[var(--text-secondary)] break-keep mb-6">
                {c.aboutP1}
                {c.aboutP2 ? ` ${c.aboutP2}` : ""}
              </p>
              <div className="inline-flex flex-wrap justify-center items-center gap-2 pt-6 border-t border-[var(--border-page)]">
                <span className="font-medium text-[var(--text-primary)] mr-2">{c.tagsLabel}</span>
                {c.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-page)] text-[13px] text-[var(--text-secondary)] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Solution Section */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              {c.solutionKicker}
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-2xl lg:text-3xl font-medium">
              {c.solutionH2}
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.specialityItems.map((item, i) => (
              <li
                key={i}
                className="group flex flex-col rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-8 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <span className="mb-4 font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.25em] text-[var(--text-secondary)] uppercase">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-kr-heading)] text-xl font-medium text-[var(--text-primary)] mb-3">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] break-keep">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Features Section */}
      <section className="relative py-20 lg:py-32 bg-[var(--bg-card)] px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              {c.featuresSectionKicker}
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-2xl lg:text-3xl font-medium">
              {c.featuresSectionH2}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.featureItems.map((item) => (
              <Link
                key={item.num}
                href={item.link}
                className="group flex flex-col rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] p-8 transition-all duration-300 shadow-sm hover:border-[var(--text-primary)] hover:shadow-md"
              >
                <span className="mb-3 font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                  {item.sub}
                </span>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-en-display)] text-2xl font-light text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {item.num}
                  </span>
                  <h4 className="font-[family-name:var(--font-kr-heading)] text-lg font-medium text-[var(--text-primary)]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] flex-grow break-keep">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-medium tracking-wider text-[var(--text-primary)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>{t("signatureCommon.viewMore")}</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA / Contact Section */}
      <section className="relative py-24 bg-[#111] text-white px-6">
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-2xl lg:text-3xl mb-3">
            {t("signatureCommon.liftingConsultTitle")}
          </h2>
          <p className="text-[15px] text-white/60 mb-10">
            {t("signatureCommon.liftingConsultLead")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#curation" 
              className="w-full sm:w-auto rounded-sm border border-white bg-white px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-black transition-colors hover:bg-transparent hover:text-white"
            >
              {t("signatureCommon.consultInquiry")}
            </Link>
            <Link 
              href="/" 
              className="w-full sm:w-auto rounded-sm border border-white/30 px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {t("signatureCommon.navHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}