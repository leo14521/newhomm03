"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";
import HeaderAuth from "@/components/layout/HeaderAuth";
import Logo from "@/components/ui/Logo";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/i18n/messages";

const LOCALE_CHOICES: {
  locale: Locale;
  /** JP / CN / RU 등 표기 */
  label: string;
  ariaKey: string;
}[] = [
  { locale: "ko", label: "KO", ariaKey: "header.localeOptionKoAria" },
  { locale: "en", label: "EN", ariaKey: "header.localeOptionEnAria" },
  { locale: "ja", label: "JP", ariaKey: "header.localeOptionJaAria" },
  { locale: "zh", label: "CN", ariaKey: "header.localeOptionZhAria" },
  { locale: "ru", label: "RU", ariaKey: "header.localeOptionRuAria" },
];

function triggerLabelForLocale(locale: Locale): string {
  const row = LOCALE_CHOICES.find((c) => c.locale === locale);
  return row?.label ?? "KO";
}

/**
 * B&S 스타일: 좌 햄버거 | 중앙 로고 | 우 전화. 스크롤 시 nav-active(배경·높이 변경).
 * 햄버거 클릭 시 전체 메뉴 오버레이.
 */
export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const localeWrapRef = useRef<HTMLDivElement>(null);

  const heroGlass =
    pathname === "/" && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      setLocaleMenuOpen(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!localeMenuOpen) return;
    const onDocDown = (e: MouseEvent) => {
      const el = localeWrapRef.current;
      if (el && !el.contains(e.target as Node)) setLocaleMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLocaleMenuOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [localeMenuOpen]);

  return (
    <>
      <header
        className={`nav-header ${scrolled ? "nav-active" : ""}${heroGlass ? " nav-header--hero" : ""}`}
      >
        <button
          type="button"
          className="nav-menu-btn flex flex-col justify-center gap-1"
          onClick={() => setMenuOpen(true)}
          aria-label={t("header.menuOpen")}
        >
          <span className="block h-px w-full" />
          <span className="block h-px w-full" />
          <span className="block h-px w-full" />
        </button>

        <div className="nav-logo">
          <Logo href="/" tone="light" variant="headerStrokeGradient" />
        </div>

        <div className="nav-actions flex items-center gap-2 sm:gap-3">
          <HeaderAuth />
          <div ref={localeWrapRef} className="relative">
            <button
              type="button"
              className="nav-locale inline-flex min-h-[2rem] min-w-[2.25rem] items-center justify-center rounded-md border border-[color-mix(in_srgb,var(--text-primary)_32%,transparent)] bg-[var(--bg-page)]/80 px-2 py-1 font-[family-name:var(--font-en-title)] text-[10px] font-medium tracking-[0.18em] text-[var(--text-primary)] backdrop-blur-sm transition-opacity hover:opacity-80 sm:min-w-[2.5rem] sm:text-[11px]"
              aria-expanded={localeMenuOpen}
              aria-haspopup="listbox"
              aria-label={t("header.localeMenuButtonAria")}
              onClick={() => setLocaleMenuOpen((o) => !o)}
            >
              {triggerLabelForLocale(locale)}
            </button>
            {localeMenuOpen ? (
              <ul
                role="listbox"
                aria-label={t("header.localeMenuButtonAria")}
                className="absolute right-0 z-[60] mt-1.5 flex min-w-[3.25rem] flex-col gap-0.5 rounded-md border border-[color-mix(in_srgb,var(--text-primary)_18%,transparent)] bg-[var(--bg-card)] p-1 shadow-lg"
              >
                {LOCALE_CHOICES.map(({ locale: loc, label, ariaKey }) => (
                  <li key={loc} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={locale === loc}
                      aria-label={t(ariaKey)}
                      className={`flex w-full items-center justify-center rounded px-2 py-1.5 font-[family-name:var(--font-en-title)] text-[10px] font-medium tracking-[0.18em] transition-colors sm:text-[11px] ${
                        locale === loc
                          ? "bg-[color-mix(in_srgb,var(--accent-terracotta)_14%,transparent)] text-[var(--text-primary)]"
                          : "text-[var(--text-primary)] hover:bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
                      }`}
                      onClick={() => {
                        setLocale(loc);
                        setLocaleMenuOpen(false);
                      }}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </header>

      {/* key로 열림/닫힘마다 리마운트 → 2·3단(activeIndex/activeSubIndex)이 다음 오픈에 남지 않음 */}
      <MenuOverlay
        key={menuOpen ? "menu-open" : "menu-off"}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
