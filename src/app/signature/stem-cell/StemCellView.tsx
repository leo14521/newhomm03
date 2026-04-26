"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";
import { InlineBold } from "@/components/i18n/InlineBold";
import { useLocale } from "@/i18n/LocaleProvider";
import { getStemCellPageContent } from "@/i18n/stemCellPageContent";

export default function StemCellView() {
  const { t, locale } = useLocale();
  const c = getStemCellPageContent(locale);
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* 섹션 1: 줄기세포치료 도입부 */}
      <SignatureHero
        title="Stem Cell Therapy"
        titleKr={c.heroTitleKr}
        description={c.heroDesc}
        imageIndex={0}
      />

      {/* 섹션 2: 줄기세포란? */}
      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">ABOUT</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.aboutH2}</h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {c.aboutParas.map((para, i) => (
              <p key={i}>
                <InlineBold text={para} strongClassName="font-medium text-[var(--text-primary)]" />
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 3: 미라셀(Miracell) + MCT(메타셀) 소개 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">EQUIPMENT</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.equipmentH2}</h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {c.equipmentParas.map((para, i) => (
              <p key={i}>
                <InlineBold text={para} strongClassName="font-medium text-[var(--text-primary)]" />
              </p>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-[var(--text-primary)]/20 bg-[var(--bg-page)] p-6">
            <h4 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] uppercase tracking-wide">
              {c.keyPointTitle}
            </h4>
            {c.keyPointParas.map((para, i) => (
              <p key={i} className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 4: 오마쥬클리닉 맞춤 시술 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">CUSTOMIZED</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.customizedH2}</h2>
          <div className="mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p className="font-medium text-[var(--text-primary)]">{c.customizedHighlight}</p>
            {c.customizedParas.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 5: 시술 추천 대상 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">FOR YOU</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.forYouH2}</h2>
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

      {/* 섹션 6: 시술 후 주의사항 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">AFTERCARE</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.aftercareH2}</h2>
          </div>
          <ul className="mt-10 space-y-3">
            {c.aftercare.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-5 py-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 font-[family-name:var(--font-en-display)] text-[13px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">{t("signatureCommon.consultTitleStemCell")}</p>
          <p className="mt-2 text-[14px] text-white/60">{t("signatureCommon.liftingConsultLead")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
            >
              {t("signatureCommon.consultReserve")}
            </Link>
            <Link
              href="/"
              className="inline-block rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
            >
              {t("signatureCommon.navHome")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
