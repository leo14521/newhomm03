"use client";

import Link from "next/link";
import {
  CLINIC_DIRECTOR_NAME_KR,
  CLINIC_TEL,
  CLINIC_TEL_DIGITS,
  getBrandMessageLabel,
  getBrandServicesForLocale,
  getBrandSloganForLocale,
  getClinicAddressForLocale,
  getClinicTransitHintForLocale,
} from "@/config/brand";
import Logo from "@/components/ui/Logo";
import { useLocale } from "@/i18n/LocaleProvider";

const SNS_LINKS = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Youtube" },
  { href: "#", label: "Kakao Talk" },
] as const;

export default function Footer() {
  const { locale, t } = useLocale();
  const isKo = locale === "ko";
  const slogan = getBrandSloganForLocale(locale);
  const address = getClinicAddressForLocale(locale);
  const services = getBrandServicesForLocale(locale);
  const transit = getClinicTransitHintForLocale(locale);

  return (
    <footer className="relative border-t border-[color-mix(in_srgb,var(--accent-terracotta)_20%,transparent)] bg-white px-4 py-10 text-[13px] text-[var(--text-secondary)] sm:px-6 lg:px-[var(--pad-global)] lg:py-12">
      <div className="mx-auto max-w-[920px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
          <div className="shrink-0 lg:max-w-[280px]">
            <Logo
              href="/"
              tone="dark"
              className="mb-3 w-[88px] opacity-95 transition-opacity hover:opacity-100 sm:w-[96px]"
            />
            <p className="mb-0.5 text-[10px] tracking-[0.28em] text-[var(--text-secondary)] uppercase">
              {getBrandMessageLabel(locale)}
            </p>
            <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[14px] font-light leading-snug text-[var(--text-primary)] sm:text-[15px] sm:leading-relaxed whitespace-pre-line">
              {slogan}
            </p>
            <p className="mt-2 text-[12px] leading-snug text-[var(--text-secondary)]">{services}</p>
          </div>

          <div className="min-w-0 flex-1 space-y-6">
            <div className="grid gap-6 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-x-10 sm:gap-y-0">
              <div className="border-l-2 border-[var(--accent-terracotta)] pl-3.5">
                <h2 className="mb-1.5 text-[10px] font-medium tracking-[0.22em] text-[var(--accent-terracotta-dark)] uppercase">
                  {t("footer.hoursTitle")}
                </h2>
                <ul className="space-y-0.5 text-[12px] leading-[1.65] text-[var(--text-secondary)] sm:text-[13px]">
                  <li>
                    {t("footer.monFri")} AM 10:00 ~ PM 08:00
                    <br />
                    <small className="text-[12px] text-[var(--text-secondary)]/90">{t("footer.nightNote")}</small>
                  </li>
                  <li>
                    {t("footer.tueThu")} AM 10:00 ~ PM 07:00
                  </li>
                  <li>
                    {t("footer.saturday")} AM 10:00 ~ PM 03:00
                  </li>
                  <li className="text-[var(--text-secondary)]/90">{t("footer.closedNote")}</li>
                </ul>
              </div>

              <div className="space-y-1.5 text-[12px] leading-[1.65] sm:text-[13px]">
                <p className="text-[13px] font-medium text-[var(--text-primary)] sm:text-[14px]">
                  {t("footer.clinicLine")}
                  {!isKo ? null : (
                    <>
                      {" "}
                      <span className="font-normal text-[var(--text-secondary)]">{t("footer.clinicLineEn")}</span>
                    </>
                  )}
                </p>
                <p>
                  {t("footer.directorLine")} {CLINIC_DIRECTOR_NAME_KR}
                  {t("footer.bizLine")}
                </p>
                <p className="text-[var(--text-secondary)]">{address}</p>
                <p>
                  <a
                    href={`tel:${CLINIC_TEL_DIGITS}`}
                    className="text-[var(--accent-terracotta)] hover:text-[var(--accent-terracotta-dark)]"
                  >
                    {CLINIC_TEL}
                  </a>
                  <span className="mx-1.5 text-[var(--border-page)]">|</span>
                  <a
                    href="mailto:master@hommage.com"
                    className="hover:text-[var(--text-primary)]"
                  >
                    master@hommage.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-[var(--border-page)] pt-5 text-[12px] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-2 sm:text-[13px]">
              <div className="flex flex-wrap items-center gap-x-1 gap-y-1 text-[var(--text-primary)]">
                <span className="sr-only">{t("footer.snsSr")}</span>
                {SNS_LINKS.map((s, i) => (
                  <span key={s.label} className="inline-flex items-center">
                    {i > 0 && <span className="mx-1.5 text-[var(--text-secondary)]/40" aria-hidden>·</span>}
                    <a href={s.href} className="transition-colors hover:text-[var(--accent-terracotta)]">
                      {s.label}
                    </a>
                  </span>
                ))}
              </div>
              <div className="flex min-w-0 flex-col gap-1 sm:max-w-[55%] sm:text-right lg:max-w-none">
                <p className="leading-snug text-[var(--text-secondary)]">{transit}</p>
                <Link
                  href="/#map"
                  className="w-fit text-[12px] font-medium text-[var(--accent-terracotta)] underline decoration-[color-mix(in_srgb,var(--accent-terracotta)_40%,transparent)] underline-offset-[5px] hover:text-[var(--accent-terracotta-dark)] sm:ml-auto sm:w-auto"
                >
                  {t("footer.mapLink")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-page)] pt-5 text-center text-[11px] text-[var(--text-secondary)] sm:text-[12px]">
          <nav aria-label={t("footer.legalNavAria")} className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <Link
              href="/terms"
              className="text-[var(--text-primary)] underline decoration-[color-mix(in_srgb,var(--accent-terracotta)_45%,transparent)] underline-offset-[4px] hover:text-[var(--accent-terracotta)]"
            >
              {t("footer.termsOfService")}
            </Link>
            <span className="text-[var(--text-secondary)]/40" aria-hidden>
              |
            </span>
            <Link
              href="/privacy"
              className="text-[var(--text-primary)] underline decoration-[color-mix(in_srgb,var(--accent-terracotta)_45%,transparent)] underline-offset-[4px] hover:text-[var(--accent-terracotta)]"
            >
              {t("footer.privacyPolicy")}
            </Link>
          </nav>
          <p className="text-[10px] tracking-[0.14em] sm:text-[11px]">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
