"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";
import { useLocale } from "@/i18n/LocaleProvider";
import { getRejuranLanding } from "@/i18n/signatureLandingContent";

export default function RejuranView() {
  const { locale, t } = useLocale();
  const copy = getRejuranLanding(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f4f2] via-[#fafaf8] to-[#f5f4f2]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${getLandingImage(1)})`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-[#111] mb-6">
            Rejuran
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-[#666] leading-relaxed whitespace-pre-line">
            {copy.heroSub}
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Rejuran
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">{copy.intro}</p>
        </div>
      </section>

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            {t("signatureCommon.benefitsHeading")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {copy.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="benefit-card bg-white p-8 rounded-lg shadow-sm border border-[#e8e8e8]"
              >
                <h3 className="text-xl font-medium text-[#111] mb-3">{benefit.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-12">
            {t("signatureCommon.treatmentAreasHeading")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {copy.areas.map((area, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[var(--hip-bg)] rounded-lg border border-[#e8e8e8]"
              >
                <span className="text-[16px] text-[#111]">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1a1a] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] text-white mb-6">
            {t("signatureCommon.consultAndBook")}
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            {copy.ctaLead}
            <br />
            {t("signatureCommon.staffHelpLine")}
          </p>
          <Link
            href="/#consult"
            className="inline-block px-8 py-4 bg-white text-[#111] rounded-sm hover:bg-[var(--hip-accent)] hover:text-white transition-colors"
          >
            {t("signatureCommon.consultBookCta")}
          </Link>
        </div>
      </section>
    </main>
  );
}
