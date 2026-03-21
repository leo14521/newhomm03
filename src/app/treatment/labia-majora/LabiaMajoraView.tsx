"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";
import { LABIA_MAJORA_COPY, LABIA_MAJORA_VULVA_BY_LOCALE } from "@/config/i18n/exhibition/labiaMajora";
import { pickLocale } from "@/i18n/pickLocale";
import { useLocale } from "@/i18n/LocaleProvider";

export default function LabiaMajoraView() {
  const { locale, t } = useLocale();
  const c = pickLocale(locale, LABIA_MAJORA_COPY);
  const vulvaItems = pickLocale(locale, LABIA_MAJORA_VULVA_BY_LOCALE);

  return (
    <>
      <TreatmentExhibitionPage
        {...c}
        primaryLabel={t("pages.consultBook")}
        secondaryLabel={t("pages.directions")}
      />

      <section id="vulva-procedures" className="section-block border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1240px]">
          <div className="sec-head text-center">
            <span className="sec-label block">{t("pages.vulvaSectionKicker")}</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,34px)]">{t("pages.vulvaProgramsTitle")}</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {vulvaItems.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-7 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-[family-name:var(--font-kr-heading)] text-[20px] text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[13px] tracking-[0.08em] text-[var(--text-secondary)] uppercase">
                  {t("pages.caseIndications")}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{item.target}</p>
                <p className="mt-5 text-[13px] tracking-[0.08em] text-[var(--text-secondary)] uppercase">
                  {t("pages.procedureDetail")}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
