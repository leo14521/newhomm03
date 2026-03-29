"use client";

import Link from "next/link";
import { InlineBold } from "@/components/i18n/InlineBold";
import { useLocale } from "@/i18n/LocaleProvider";
import type { ThreadLiftPageContent } from "@/i18n/threadLiftTypes";

export function ThreadLiftStandardSections({
  c,
  consultTitle,
}: {
  c: ThreadLiftPageContent;
  consultTitle: string;
}) {
  const { t } = useLocale();

  return (
    <>
      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            {c.aboutKicker}
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            {c.aboutH2}
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            {c.aboutParas.map((para, i) => (
              <p key={i}>
                <InlineBold text={para} />
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            {c.solutionKicker}
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            {c.solutionBefore}
            <span className="text-[var(--hip-accent-dark)]">{c.solutionAccent}</span>
            {c.solutionAfter}
          </h3>
          <ul
            id={c.solutionUlId}
            className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${c.featureGridClass ?? "lg:grid-cols-4"}`}
          >
            {c.features.map((item, i) => (
              <li
                key={i}
                id={item.anchorId}
                className="group relative flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-6 pl-8 transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
              >
                <span
                  className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 transition-opacity group-hover:opacity-80"
                  aria-hidden
                />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            {c.forYouKicker}
          </p>
          <h3 className="font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.4vw,26px)] text-[#111]">{c.forYouH2}</h3>
          <ul className="mt-8 space-y-3 text-[15px] leading-[1.75] text-[#555]">
            {c.recommend.map((line) => (
              <li key={line} className="flex gap-3 border-b border-[#eee] pb-3 last:border-0">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--hip-accent)]" aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-[#faf9f8] px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">{c.flowKicker}</p>
          <h3 className="font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.4vw,26px)] text-[#111]">{c.flowH2}</h3>
          <ol className="mt-8 space-y-4 text-[15px] leading-[1.8] text-[#555]">
            {c.flow.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#111] font-[family-name:var(--font-display)] text-[12px] text-white">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[13px] leading-relaxed text-[#888]">{c.footnote}</p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span
          className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50"
          aria-hidden
        />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">
            {consultTitle}
          </p>
          <p className="mt-2 text-[14px] text-[#999]">{t("signatureCommon.liftingConsultLead")}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              {t("signatureCommon.consultInquiry")}
            </Link>
            <Link
              href="/signature/lifting"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              {t("signatureCommon.viewAllLifting")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
