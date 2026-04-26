"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";
import { getThermageFlxPageContent } from "@/i18n/thermageFlxPageContent";

const DEVICE_SRC = "/images/clinic/device/thermage-flx.png";

export default function ThermageFlxView() {
  const { t, locale } = useLocale();
  const c = getThermageFlxPageContent(locale);

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[var(--header-height)] text-[var(--text-primary)] lg:pt-[var(--header-h)]">
      <section className="border-b border-[color-mix(in_srgb,var(--accent-terracotta)_18%,var(--border-page))] bg-gradient-to-br from-[#fdf6f0] via-[#faf2ea] to-[#f4e8de] px-6 py-10 lg:px-[var(--pad-global)] lg:py-14">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-[1fr_min(42%,420px)] lg:gap-14">
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-en-display)] text-[10px] font-semibold tracking-[0.32em] text-[var(--text-secondary)]">
              LASER · EQUIPMENT
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#e85d2a] px-4 py-2.5 shadow-sm">
              <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-semibold tracking-tight text-white md:text-[16px]">
                {c.pillKr}
              </span>
              <span className="hidden text-[11px] font-medium tracking-[0.14em] text-white/95 sm:inline md:text-[12px]">
                ({c.pillEn})
              </span>
            </div>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.9] text-[color-mix(in_srgb,var(--text-primary)_88%,var(--text-secondary))] break-keep">
              {c.introParas.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <dl className="mt-10 space-y-4 text-[14px] leading-relaxed md:text-[15px]">
              <div className="rounded-lg border border-[color-mix(in_srgb,var(--accent-terracotta)_22%,var(--border-page))] bg-white/80 px-4 py-3.5 backdrop-blur-sm">
                <dt className="font-[family-name:var(--font-kr-heading)] text-[13px] font-medium text-[var(--accent-terracotta-dark)]">
                  {c.detailTimeLabel}
                </dt>
                <dd className="mt-1.5 text-[var(--text-secondary)]">{c.detailTimeValue}</dd>
              </div>
              <div className="rounded-lg border border-[color-mix(in_srgb,#f5b5c8_45%,var(--border-page))] bg-[#fff5f8] px-4 py-3.5">
                <dt className="font-[family-name:var(--font-kr-heading)] text-[13px] font-medium text-[#c94d6a]">
                  {c.detailDurationLabel}
                </dt>
                <dd className="mt-1.5 text-[var(--text-secondary)]">{c.detailDurationValue}</dd>
              </div>
            </dl>
            <div className="mt-10 overflow-hidden rounded-xl border border-[color-mix(in_srgb,#f5b5c8_50%,var(--border-page))] bg-white/90 shadow-[var(--shadow-soft)]">
              <div className="bg-[#ffd6e4] px-4 py-2.5 text-center">
                <h2 className="font-[family-name:var(--font-kr-heading)] text-[14px] font-semibold tracking-wide text-[#a33d58]">
                  {c.aftercareTitle}
                </h2>
              </div>
              <ul className="list-disc space-y-2.5 px-8 py-5 text-[14px] leading-[1.75] text-[var(--text-secondary)] marker:text-[#e85d2a]">
                {c.aftercareItems.map((item, i) => (
                  <li key={i} className="pl-1 break-keep">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-8 rounded-lg border border-dashed border-[color-mix(in_srgb,var(--accent-terracotta)_28%,var(--border-page))] bg-white/60 px-4 py-4 text-[13px] leading-[1.85] text-[var(--text-secondary)] break-keep">
              {c.heatNote}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-2xl border border-[var(--border-page)] bg-[#f4f4f5] shadow-[var(--shadow-card)] lg:max-w-none">
              <Image
                src={DEVICE_SRC}
                alt={c.imageAlt}
                fill
                className="object-contain object-center p-4"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4 lg:px-[var(--pad-global)]">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4">
          <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="transition-colors hover:text-[var(--text-primary)]">
                {t("signatureCommon.navHome")}
              </Link>
            </li>
            <li aria-hidden>
              /
            </li>
            <li>
              <Link href="/signature/ulthera-pro-prime" className="transition-colors hover:text-[var(--text-primary)]">
                {t("signatureCommon.navLaser")}
              </Link>
            </li>
            <li aria-hidden>
              /
            </li>
            <li className="font-medium text-[var(--text-primary)]">{t("signatureCommon.thermageFlxPageName")}</li>
          </ol>
          {/* Lenis + Next 클라이언트 전환 시 해시 스크롤이 누락될 수 있어 네이티브 앵커 사용; 스크롤은 홈 page.tsx에서 보강 */}
          <a
            href="/#consult"
            className="rounded-full border border-[var(--text-primary)] px-4 py-2 text-[12px] font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--text-primary)] hover:text-white"
          >
            {t("signatureCommon.consultBookCta")}
          </a>
        </div>
      </section>
    </main>
  );
}
