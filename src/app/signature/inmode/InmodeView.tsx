"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";
import { useLocale } from "@/i18n/LocaleProvider";
import { getInmodePageContent } from "@/i18n/inmodePageContent";

export default function InmodeView() {
  const { t, locale } = useLocale();
  const c = getInmodePageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${getLandingImage(4)})`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-white">
            Inmode
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] leading-relaxed text-white/90">
            {c.heroLine1}
            <br />
            {c.heroLine2}
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            {c.introTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">{c.introBody}</p>
        </div>
      </section>

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-16 text-center font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] tracking-wide text-[#111]">
            {c.featuresHeading}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {c.features.map((feature, idx) => (
              <div key={idx} className="feature-card rounded-lg border border-[#e8e8e8] bg-white p-8 shadow-sm">
                <h3 className="mb-3 text-xl font-medium text-[#111]">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-12 text-center font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] tracking-wide text-[#111]">
            {t("signatureCommon.treatmentAreasHeading")}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {c.areas.map((area, idx) => (
              <div key={idx} className="rounded-lg border border-[#e8e8e8] bg-[var(--hip-bg)] p-6 text-center">
                <span className="text-[16px] text-[#111]">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1a1a] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="mb-6 font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] text-white">
            {t("signatureCommon.consultAndBook")}
          </h2>
          <p className="mb-8 leading-relaxed text-white/80">
            {t("signatureCommon.inmodeConsultLine1")}
            <br />
            {t("signatureCommon.inmodeConsultLine2")}
          </p>
          <Link
            href="/#curation"
            className="inline-block rounded-sm bg-white px-8 py-4 text-[#111] transition-colors hover:bg-[var(--hip-accent)] hover:text-white"
          >
            {t("signatureCommon.consultBookCta")}
          </Link>
        </div>
      </section>
    </main>
  );
}
