"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";
import { useLocale } from "@/i18n/LocaleProvider";
import { getTuneFaceLanding } from "@/i18n/signatureLandingContent";

export default function TuneFaceView() {
  const { locale, t } = useLocale();
  const copy = getTuneFaceLanding(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${getLandingImage(2)})`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-white">
            Tune Face
          </h1>
          <p className="whitespace-pre-line text-[clamp(18px,2.5vw,24px)] leading-relaxed text-white/90">
            {copy.heroSub}
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Tune Face
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">{copy.intro}</p>
        </div>
      </section>

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-16 text-center font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] tracking-wide text-[#111]">
            {t("signatureCommon.featuresHeading")}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {copy.features.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card rounded-lg border border-[#e8e8e8] bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-medium text-[#111]">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-16 text-center font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] tracking-wide text-[#111]">
            {copy.depthHeading}
          </h2>
          <div className="space-y-8">
            {copy.depths.map((level, idx) => (
              <div
                key={idx}
                className="depth-item flex items-center gap-8 rounded-lg border border-[#e8e8e8] bg-[var(--hip-bg)] p-8"
              >
                <div className="flex-shrink-0">
                  <span className="text-[clamp(40px,5vw,60px)] font-light text-[var(--hip-accent)]">
                    {level.depth}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-medium text-[#111]">{level.target}</h3>
                  <p className="text-[15px] text-[#666]">{level.effect}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-[#1a1a1a] p-6 text-center">
            <p className="text-[15px] leading-relaxed text-white/90">{copy.recNote}</p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#1a1a1a] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="mb-6 font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] text-white">
            {t("signatureCommon.consultAndBook")}
          </h2>
          <p className="mb-8 leading-relaxed text-white/80">
            {copy.ctaLead}
            <br />
            {t("signatureCommon.staffHelpLine")}
          </p>
          <Link
            href="/#consult"
            className="inline-block rounded-sm bg-white px-8 py-4 text-[#111] transition-colors hover:bg-[var(--hip-accent)] hover:text-white"
          >
            {t("signatureCommon.consultBookCta")}
          </Link>
        </div>
      </section>
    </main>
  );
}
