"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLocale } from "@/i18n/LocaleProvider";

const STORAGE_KEY = "hommage-grand-opening-popup";

function dismissedUntil(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

function shouldShowPopup(): boolean {
  if (typeof window === "undefined") return false;
  const until = dismissedUntil();
  if (until == null) return true;
  return Date.now() > until;
}

function dismissForToday() {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  try {
    localStorage.setItem(STORAGE_KEY, String(end.getTime()));
  } catch {
    /* ignore */
  }
}

/**
 * 개원·오픈 이벤트 안내 — Paperlogy 통일, GSAP 등장
 */
export default function GrandOpeningPopup() {
  const { t } = useLocale();
  const pathname = usePathname();
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [dismissToday, setDismissToday] = useState(false);

  const hideOnRoute =
    pathname?.startsWith("/admin") ||
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/register");

  const close = useCallback((rememberToday: boolean) => {
    if (rememberToday) dismissForToday();
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!backdrop || !panel || reduceMotion) {
      setVisible(false);
      return;
    }

    gsap
      .timeline({
        onComplete: () => setVisible(false),
      })
      .to(backdrop, { autoAlpha: 0, duration: 0.28, ease: "power2.in" }, 0)
      .to(
        panel,
        { autoAlpha: 0, y: 18, scale: 0.98, duration: 0.34, ease: "power2.in" },
        0
      );
  }, []);

  useEffect(() => {
    if (hideOnRoute || typeof window === "undefined") return;
    if (!shouldShowPopup()) return;
    const id = window.setTimeout(() => setVisible(true), 720);
    return () => window.clearTimeout(id);
  }, [hideOnRoute]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, close]);

  useGSAP(
    () => {
      if (!visible) return;
      const backdrop = backdropRef.current;
      const panel = panelRef.current;
      if (!backdrop || !panel) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set([backdrop, panel], { autoAlpha: 1, y: 0, scale: 1 });
        return;
      }

      gsap.set([backdrop, panel], { autoAlpha: 0 });
      gsap.set(panel, { y: 36, scale: 0.94 });

      const tl = gsap.timeline();
      tl.to(backdrop, { autoAlpha: 1, duration: 0.42, ease: "power2.out" }).to(
        panel,
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.78, ease: "power3.out" },
        "-=0.22"
      );
    },
    { dependencies: [visible] }
  );

  if (!visible) return null;

  return (
    <div
      className="grand-opening-popup pointer-events-none fixed inset-0 z-[10150]"
      aria-hidden={false}
    >
      <div
        ref={backdropRef}
        className="grand-opening-popup__backdrop pointer-events-auto absolute inset-0 bg-[rgba(28,24,22,0.42)] backdrop-blur-[8px]"
        aria-hidden
        onClick={() => close(false)}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="grand-opening-title"
          className="font-paperlogy pointer-events-auto relative w-full max-w-[min(100%,520px)] overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--accent-terracotta)_32%,var(--border-page))] bg-gradient-to-b from-[#fffefb] via-[#faf6f2] to-[#f3ebe4] shadow-[0_28px_80px_rgba(45,42,38,0.16),0_0_0_1px_rgba(255,255,255,0.65)_inset] sm:rounded-3xl"
        >
          <div
            className="h-[3px] w-full bg-gradient-to-r from-transparent via-[var(--accent-terracotta)] to-transparent opacity-90"
            aria-hidden
          />

          <button
            type="button"
            onClick={() => close(dismissToday)}
            className="absolute right-3 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-secondary)] transition-colors hover:bg-[color-mix(in_srgb,var(--accent-terracotta)_12%,transparent)] hover:text-[var(--text-primary)]"
            aria-label={t("eventPopup.closeAria")}
          >
            <span className="block h-px w-4 rotate-45 bg-current" />
            <span className="absolute block h-px w-4 -rotate-45 bg-current" />
          </button>

          <div className="relative flex flex-col md:flex-row md:items-center">
            {/* 왼쪽: 테라코타 틴트가 오른쪽으로 서서히 희미해지는 워시 — 세로 구분선 없음 */}
            <div className="relative flex w-full flex-col items-center md:w-[min(44%,260px)] md:flex-shrink-0 md:justify-center md:self-stretch md:py-10 md:px-5">
              <div
                className="pointer-events-none absolute inset-0 hidden md:block"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse 118% 88% at 50% 48%, rgba(232, 196, 168, 0.26) 0%, rgba(250, 244, 238, 0.5) 45%, transparent 72%)",
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 -mb-px block md:hidden"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(ellipse 92% 100% at 50% 0%, rgba(232, 196, 168, 0.2) 0%, rgba(252, 248, 244, 0.35) 48%, transparent 74%)",
                }}
              />
              <div className="relative z-[1] flex w-full flex-col items-center px-7 pb-6 pt-8 md:px-0 md:pb-0 md:pt-0">
                <div
                  role="img"
                  aria-label={t("eventPopup.packageAlt")}
                  className="flex w-full justify-center py-1"
                >
                  <span className="event-popup-logo-mark" aria-hidden />
                </div>
                <p className="font-paperlogy mt-4 w-full text-center text-[11px] font-medium tracking-[0.08em] text-[var(--text-secondary)]">
                  {t("eventPopup.packageCaption")}
                </p>
              </div>
            </div>

            <div className="relative z-[1] flex flex-1 flex-col px-7 pb-8 pt-2 md:px-9 md:pb-10 md:pl-8 md:pr-10 md:pt-10">
              <p className="text-[10px] font-semibold tracking-[0.28em] text-[var(--accent-terracotta-dark)]">
                {t("eventPopup.kicker")}
              </p>
              <h2
                id="grand-opening-title"
                className="mt-2.5 text-[clamp(1.2rem,3.8vw,1.55rem)] font-semibold leading-snug tracking-tight text-[var(--text-primary)]"
              >
                {t("eventPopup.title")}
              </h2>
              <p className="mt-2 text-[15px] font-medium leading-relaxed text-[color-mix(in_srgb,var(--text-primary)_90%,var(--text-secondary))]">
                {t("eventPopup.lead")}
              </p>
              <p className="mt-3 text-[13px] font-normal leading-[1.75] text-[var(--text-secondary)]">
                {t("eventPopup.detail")}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 sm:mt-auto md:pt-6">
                <label className="inline-flex shrink-0 cursor-pointer items-center gap-2.5 text-[12px] text-[var(--text-secondary)] select-none">
                  <input
                    type="checkbox"
                    checked={dismissToday}
                    onChange={(e) => setDismissToday(e.target.checked)}
                    className="h-3.5 w-3.5 shrink-0 rounded border-[var(--border-subtle)] text-[var(--accent-terracotta)] focus:ring-[var(--accent-terracotta)]"
                  />
                  <span className="whitespace-nowrap">{t("eventPopup.dismissToday")}</span>
                </label>
                <Link
                  href="/#consult"
                  onClick={() => close(dismissToday)}
                  className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[var(--text-primary)] px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-transform hover:scale-[1.02] hover:bg-[color-mix(in_srgb,var(--text-primary)_92%,var(--accent-terracotta))] active:scale-[0.98]"
                >
                  {t("eventPopup.cta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
