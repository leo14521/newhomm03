"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useLocale } from "@/i18n/LocaleProvider";

const STORAGE_KEY = "hommage-grand-opening-popup";
const POPUP_CACHE_KEY = "hommage-popup-cache-v2";

type PopupBannerItem = {
  id: string;
  title: string;
  summary: string | null;
  imageUrl: string | null;
  content: string;
};

function normalizePopupItems(data: {
  items?: PopupBannerItem[] | null;
  item?: PopupBannerItem | null;
}): PopupBannerItem[] {
  const fromItems = Array.isArray(data.items) ? data.items : [];
  if (fromItems.length > 0) return fromItems.slice(0, 4);
  if (data.item) return [data.item];
  return [];
}

declare global {
  interface Window {
    __hommagePopupShownInRuntime?: boolean;
  }
}

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
  if (window.__hommagePopupShownInRuntime) return false;
  const until = dismissedUntil();
  if (until == null) return true;
  return Date.now() > until;
}

function markShownInRuntime() {
  if (typeof window === "undefined") return;
  window.__hommagePopupShownInRuntime = true;
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
  const [popupItems, setPopupItems] = useState<PopupBannerItem[]>([]);
  const [activePopupIndex, setActivePopupIndex] = useState(0);
  const [popupType, setPopupType] = useState<"none" | "event" | "opening">("none");

  const popupEvent = popupItems[activePopupIndex] ?? null;

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
    let cancelled = false;

    // 캐시가 없을 때도 서버 응답을 우선 반영한다.
    let hasLocalCache = false;
    try {
      let raw = localStorage.getItem(POPUP_CACHE_KEY);
      if (!raw) raw = localStorage.getItem("hommage-popup-cache-v1");
      if (raw) {
        const cached = JSON.parse(raw) as {
          expiresAt?: number;
          type?: "none" | "event" | "opening";
          item?: PopupBannerItem | null;
          items?: PopupBannerItem[];
        };
        if (typeof cached.expiresAt === "number" && cached.expiresAt > Date.now()) {
          hasLocalCache = true;
          const type = cached.type ?? "none";
          if (type !== "none") {
            setPopupType(type);
            setPopupItems(type === "event" ? normalizePopupItems(cached) : []);
            setActivePopupIndex(0);
            setVisible(true);
          }
        }
      }
    } catch {
      /* ignore */
    }

    (async () => {
      try {
        const res = await fetch("/api/events/popup", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json().catch(() => ({}))) as {
          type?: "none" | "event" | "opening";
          item?: PopupBannerItem | null;
          items?: PopupBannerItem[];
        };
        if (cancelled) return;
        const type = data.type ?? "none";

        try {
          localStorage.setItem(
            POPUP_CACHE_KEY,
            JSON.stringify({
              type,
              item: data.item ?? null,
              items: Array.isArray(data.items) ? data.items : normalizePopupItems(data),
              expiresAt: Date.now() + 1000 * 60 * 3,
            })
          );
        } catch {
          /* ignore */
        }

        if (type === "none") {
          setVisible(false);
          return;
        }

        setPopupType(type);
        setPopupItems(type === "event" ? normalizePopupItems(data) : []);
        setActivePopupIndex(0);
        setVisible(true);
        markShownInRuntime();
      } catch {
        // 네트워크 오류면 이미 기본 개원 팝업이 떠 있으므로 그대로 유지
      }
    })();

    return () => {
      cancelled = true;
    };
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

  const eventImageOnly = popupType === "event" && Boolean(popupEvent?.imageUrl);
  const showPopupBannerPicker = popupType === "event" && popupItems.length > 1;

  const popupBannerPicker = showPopupBannerPicker ? (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="팝업 배너 선택"
    >
      {popupItems.map((it, i) => (
        <button
          key={it.id}
          type="button"
          role="tab"
          aria-selected={activePopupIndex === i}
          aria-label={`${i + 1}번 배너, ${it.title}`}
          onClick={() => setActivePopupIndex(i)}
          className={
            activePopupIndex === i
              ? "flex h-9 min-w-9 items-center justify-center rounded-lg border-2 border-[var(--text-primary)] bg-[var(--text-primary)] text-[13px] font-semibold text-white shadow-sm"
              : "flex h-9 min-w-9 items-center justify-center rounded-lg border border-[var(--border-page)] bg-white text-[13px] font-semibold text-[var(--text-secondary)] shadow-sm transition-colors hover:border-[color-mix(in_srgb,var(--text-primary)_40%,var(--border-page))] hover:text-[var(--text-primary)]"
          }
        >
          {i + 1}
        </button>
      ))}
    </div>
  ) : null;

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
        {eventImageOnly && popupEvent ? (
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={popupEvent.title}
            className="font-paperlogy pointer-events-auto flex w-[min(92vmin,520px)] max-w-[calc(100vw-2rem)] flex-col items-stretch gap-3"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--accent-terracotta)_28%,var(--border-page))] bg-[#faf6f2] shadow-[0_28px_80px_rgba(45,42,38,0.2),0_0_0_1px_rgba(255,255,255,0.5)_inset] sm:rounded-3xl">
              <img
                src={popupEvent.imageUrl!}
                alt={popupEvent.title}
                className="absolute inset-0 h-full w-full object-contain object-center"
              />
              <button
                type="button"
                onClick={() => close(dismissToday)}
                className="absolute right-2.5 top-2.5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/92 text-[var(--text-primary)] shadow-md backdrop-blur-sm transition-colors hover:bg-white"
                aria-label={t("eventPopup.closeAria")}
              >
                <span className="block h-px w-4 rotate-45 bg-current" />
                <span className="absolute block h-px w-4 -rotate-45 bg-current" />
              </button>
            </div>
            {popupBannerPicker}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] px-4 py-3.5 shadow-[0_2px_12px_rgba(45,42,38,0.08)]">
              <label className="inline-flex cursor-pointer items-center gap-3 select-none">
                <input
                  type="checkbox"
                  checked={dismissToday}
                  onChange={(e) => setDismissToday(e.target.checked)}
                  className="h-4 w-4 shrink-0 rounded border-2 border-[var(--text-primary)]/35 bg-white text-[var(--accent-terracotta)] accent-[var(--accent-terracotta)] focus:ring-2 focus:ring-[var(--accent-terracotta)]/40"
                />
                <span className="text-[13px] font-semibold leading-snug text-[var(--text-primary)]">
                  {t("eventPopup.dismissToday")}
                </span>
              </label>
              <Link
                href={`/event/${popupEvent.id}`}
                onClick={() => close(dismissToday)}
                className="inline-flex shrink-0 items-center rounded-full bg-[var(--text-primary)] px-4 py-2.5 text-[12px] font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                이벤트 자세히 보기
              </Link>
            </div>
          </div>
        ) : (
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
                  {popupType === "event" && popupEvent ? "EVENT POPUP" : "OPENING POPUP"}
                </p>
                <h2
                  id="grand-opening-title"
                  className="mt-2.5 text-[clamp(1.2rem,3.8vw,1.55rem)] font-semibold leading-snug tracking-tight text-[var(--text-primary)]"
                >
                  {popupType === "event" && popupEvent ? popupEvent.title : t("eventPopup.title")}
                </h2>
                <p className="mt-2 text-[15px] font-medium leading-relaxed text-[color-mix(in_srgb,var(--text-primary)_90%,var(--text-secondary))]">
                  {popupType === "event" && popupEvent ? (popupEvent.summary ?? "") : t("eventPopup.lead")}
                </p>
                <p className="mt-3 text-[13px] font-normal leading-[1.75] text-[var(--text-secondary)]">
                  {popupType === "event" && popupEvent
                    ? `${popupEvent.content?.slice(0, 200) ?? ""}${popupEvent.content && popupEvent.content.length > 200 ? "…" : ""}`
                    : t("eventPopup.detail")}
                </p>

                {popupBannerPicker ? <div className="mt-5">{popupBannerPicker}</div> : null}

                <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 rounded-xl border border-[var(--border-page)] bg-[color-mix(in_srgb,var(--bg-page)_88%,var(--bg-card))] px-4 py-3.5 sm:mt-auto md:pt-4">
                  <label className="inline-flex shrink-0 cursor-pointer items-center gap-3 select-none">
                    <input
                      type="checkbox"
                      checked={dismissToday}
                      onChange={(e) => setDismissToday(e.target.checked)}
                      className="h-4 w-4 shrink-0 rounded border-2 border-[var(--text-primary)]/35 bg-white text-[var(--accent-terracotta)] accent-[var(--accent-terracotta)] focus:ring-2 focus:ring-[var(--accent-terracotta)]/40"
                    />
                    <span className="whitespace-nowrap text-[13px] font-semibold text-[var(--text-primary)]">
                      {t("eventPopup.dismissToday")}
                    </span>
                  </label>
                  <Link
                    href={popupType === "event" && popupEvent ? `/event/${popupEvent.id}` : "/#consult"}
                    onClick={() => close(dismissToday)}
                    className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[var(--text-primary)] px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-transform hover:scale-[1.02] hover:bg-[color-mix(in_srgb,var(--text-primary)_92%,var(--accent-terracotta))] active:scale-[0.98]"
                  >
                    {popupType === "event" && popupEvent ? "이벤트 자세히 보기" : t("eventPopup.cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
