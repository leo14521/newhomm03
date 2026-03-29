"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getTotalEraseContent } from "@/i18n/totalEraseContent";
import { TotalEraseHero } from "./TotalEraseHero";
import { WrinkleEraseBlock } from "./WrinkleEraseBlock";
import { FaceDiagramBlock } from "./FaceDiagramBlock";

export default function TotalEraseView() {
  const { t, locale } = useLocale();
  const c = getTotalEraseContent(locale);
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <TotalEraseHero />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Total Erase
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">{c.introBody}</p>
        </div>
      </section>

      <WrinkleEraseBlock />
      <FaceDiagramBlock />

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            {c.solutionKicker}
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            {c.solutionHeadingBefore}
            <span className="text-[var(--hip-accent-dark)]">{c.solutionHeadingAccent}</span>
            {c.solutionHeadingAfter}
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.solutions.map((item, i) => (
              <li
                key={i}
                className="group relative flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-6 pl-8 transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
              >
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">
            {t("signatureCommon.consultTitleTotalErase")}
          </p>
          <p className="mt-2 text-[14px] text-[#999]">
            {t("signatureCommon.liftingConsultLead")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              {t("signatureCommon.consultInquiry")}
            </Link>
            <Link
              href="/"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              {t("pages.homeLink")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
