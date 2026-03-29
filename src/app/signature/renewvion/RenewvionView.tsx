"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";
import { useLocale } from "@/i18n/LocaleProvider";
import { getRenewvionPageContent } from "@/i18n/renewvionPageContent";

export default function RenewvionView() {
  const { t, locale } = useLocale();
  const c = getRenewvionPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero title="Renuvion" titleKr={c.heroTitleKr} description={c.heroDesc} imageIndex={5} />

      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.keyLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.keyTitle}</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {c.keyLead}
          </p>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            {c.situationsTitle}
          </h3>
          <ul className="mt-4 space-y-2">
            {c.situations.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 text-[12px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            {c.diffSectionTitle}
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {c.diffs.map((item, i) => (
              <li key={i} className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-5">
                <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{item.title}</span>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-lg border border-[var(--text-primary)]/20 bg-[var(--bg-card)] p-6">
            <h4 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
              {c.guideTitle}
            </h4>
            <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">{c.guideP1}</p>
            <p className="mt-2 text-[15px] leading-[1.8] text-[var(--text-secondary)]">{c.guideP2}</p>
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.bgLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.bgTitle}</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">{c.bgLead}</p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{c.liftLimitTitle}</h3>
              <ul className="mt-3 space-y-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                {c.liftItems.map((li, i) => (
                  <li key={i}>
                    <strong className="text-[var(--text-primary)]">{li.strong}</strong> {li.rest}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{c.faceliftReluctTitle}</h3>
              <ul className="mt-3 space-y-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                {c.faceliftItems.map((li, i) => (
                  <li key={i}>
                    <strong className="text-[var(--text-primary)]">{li.strong}</strong> {li.rest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.deviceLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.deviceTitle}</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">{c.deviceLead}</p>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            {c.deviceListTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            {c.deviceList.map((li, i) => (
              <li key={i}>
                <strong className="text-[var(--text-primary)]">{li.strong}</strong> {li.rest}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            {c.principleTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            {c.principleList.map((li, i) => (
              <li key={i}>
                <strong className="text-[var(--text-primary)]">{li.strong}</strong> {li.rest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.forYouLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.forYouTitle}</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">{c.forYouLead}</p>
          <h3 className="mt-8 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            {c.recTitle}
          </h3>
          <ul className="mt-4 space-y-4">
            {c.targets.map((item, i) => (
              <li key={i} className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 font-[family-name:var(--font-en-display)] text-[14px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                <div>
                  <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{item.title}</span>
                  <p className="mt-1 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.totalLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.totalTitle}</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">{c.totalLead}</p>

          <div className="mt-10 space-y-10">
            <div className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{c.stretchTitle}</h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">{c.stretchP1Strong}</strong> {c.stretchP1Body}
              </p>
              <p className="mt-2 text-[15px] font-medium text-[var(--text-primary)]">{c.stretchP2}</p>
              <ul className="mt-3 space-y-3">
                {c.tunaeal.map((r) => (
                  <li key={r.step} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/15 text-[13px] font-medium text-[var(--text-primary)]">
                      {r.step}
                    </span>
                    <div>
                      <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{r.title}:</span>
                      <span className="ml-1 text-[14px] leading-[1.75] text-[var(--text-secondary)]">{r.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{c.surgeryTitle}</h3>
              <ul className="mt-3 space-y-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                {c.surgeryItems.map((li, i) => (
                  <li key={i}>
                    <strong className="text-[var(--text-primary)]">{li.strong}</strong> {li.rest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">{c.faqLabel}</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">{c.faqTitle}</h2>
          <ul className="mt-8 space-y-4">
            {c.faq.map((item, i) => (
              <li key={i} className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-5">
                <p className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">Q. {item.q}</p>
                <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-secondary)]">A. {item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">{t("signatureCommon.consultTitleRenewvion")}</p>
          <p className="mt-2 text-[14px] text-white/60">{t("signatureCommon.consultLeadRenewvion")}</p>
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
