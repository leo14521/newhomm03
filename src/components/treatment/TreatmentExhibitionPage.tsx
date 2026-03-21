"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

type FeatureItem = {
  title: string;
  description: string;
};

interface TreatmentExhibitionPageProps {
  heroTitle: string;
  heroTitleKr: string;
  heroDescription: string;
  /** 히어로 배경 스톡·인물 이미지 (false 권장: 여성성형 등) */
  showHeroBackground?: boolean;
  imageIndex?: number;
  introTitle: string;
  introBody: string;
  exhibitionLabel: string;
  exhibitionHeadline: string;
  exhibitionBody: string;
  keywords: string[];
  /** 선택: 클리닉 안내 한 문단 (없으면 생략) */
  programNote?: string;
  featuresTitle: string;
  features: FeatureItem[];
  ctaTitle: string;
  ctaBody: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export default function TreatmentExhibitionPage({
  heroTitle,
  heroTitleKr,
  heroDescription,
  showHeroBackground = true,
  imageIndex = 0,
  introTitle,
  introBody,
  exhibitionLabel,
  exhibitionHeadline,
  exhibitionBody,
  keywords,
  programNote,
  featuresTitle,
  features,
  ctaTitle,
  ctaBody,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: TreatmentExhibitionPageProps) {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title={heroTitle}
        titleKr={heroTitleKr}
        description={heroDescription}
        showBackgroundImage={showHeroBackground}
        imageIndex={imageIndex}
      />

      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[860px]">
          <p className="sec-label mb-3 text-center uppercase">Treatment Curation</p>
          <h2 className="sec-title text-center font-[family-name:var(--font-en-display)] text-[clamp(24px,3.4vw,40px)] font-light">
            {introTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-[740px] text-center text-[15px] leading-relaxed text-[var(--text-secondary)] lg:text-[16px] break-keep">
            {introBody}
          </p>
        </div>
      </section>

      {/* 프로그램 요약 — 뮤지엄 그리드·인물 이미지 제거, 사이트 공통 톤 */}
      <section className="section-block border-t border-[var(--border-page)] bg-[var(--bg-card)]">
        <div className="relative mx-auto max-w-[1000px]">
          <div className="lg:grid lg:grid-cols-[1fr_min(300px,34%)] lg:items-start lg:gap-14">
            <div>
              <p className="sec-label uppercase">{exhibitionLabel}</p>
              <h3 className="mt-4 font-[family-name:var(--font-en-display)] text-[clamp(26px,3.8vw,44px)] font-light leading-[1.15] text-[var(--text-primary)]">
                {exhibitionHeadline}
              </h3>
              <p className="mt-6 max-w-[540px] text-[15px] leading-relaxed text-[var(--text-secondary)] lg:text-[16px] break-keep">
                {exhibitionBody}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <li
                    key={keyword}
                    className="rounded-full border border-[var(--border-page)] bg-[var(--bg-page)] px-4 py-2 text-[11px] font-medium tracking-[0.12em] text-[var(--text-secondary)] uppercase"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 space-y-4 lg:mt-0">
              <div
                className="h-32 rounded-sm border border-[var(--border-page)] bg-gradient-to-br from-[var(--bg-page)] via-[var(--hip-bg-deep)] to-[var(--bg-card)]"
                aria-hidden
              />
              <div className="h-24 rounded-sm border border-[var(--border-page)] bg-[var(--text-primary)]/[0.04]" aria-hidden />
              {programNote ? (
                <div className="rounded-sm border border-[var(--border-page)] bg-[var(--bg-page)] p-6">
                  <p className="sec-label !text-[10px] uppercase">Clinic note</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)] break-keep">{programNote}</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1000px]">
          <h3 className="sec-title mb-12 text-center font-[family-name:var(--font-en-display)] text-[clamp(24px,3.2vw,38px)] font-light">
            {featuresTitle}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {features.map((feature, index) => (
              <article
                key={`${feature.title}-${index}`}
                className="group relative overflow-hidden rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-7 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <span className="sec-label mb-3 block uppercase">
                  Point {String(index + 1).padStart(2, "0")}
                </span>
                <h4 className="font-[family-name:var(--font-heading-kr)] text-[19px] text-[var(--text-primary)]">{feature.title}</h4>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-secondary)] break-keep">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-dark relative border-t border-white/10 text-center">
        <div className="mx-auto max-w-[700px]">
          <p className="sec-label text-white/60">Next step</p>
          <h3 className="sec-title mt-5 text-[clamp(24px,3.2vw,36px)] text-white">{ctaTitle}</h3>
          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-relaxed text-white/75 lg:text-[16px] break-keep">{ctaBody}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
            >
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-block rounded-sm border border-white/35 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
