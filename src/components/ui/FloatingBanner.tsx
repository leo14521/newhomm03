"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  CLINIC_INSTAGRAM_URL,
  CLINIC_KAKAO_TALK_URL,
  CLINIC_NAVER_PLACE_URL,
  CLINIC_TEL,
  CLINIC_TEL_DIGITS,
  CLINIC_YOUTUBE_URL,
} from "@/config/brand";

gsap.registerPlugin(ScrollTrigger);

/**
 * 통합 플로팅: 예약·상담 + SNS 그룹화, TOP 버튼
 * - 모바일: 하단 하나의 바 (그룹 구분)
 * - PC: 우측 하나의 플로팅 패널 (접었다 펼치기)
 */
export default function FloatingBanner() {
  const { t } = useLocale();

  const consultLinks = useMemo(
    () =>
      [
        { icon: "fa-phone", label: t("floating.phone"), href: `tel:${CLINIC_TEL_DIGITS}`, type: "tel" as const },
        { icon: "fa-comment", label: t("floating.kakao"), href: CLINIC_KAKAO_TALK_URL, color: "#FEE500", type: "link" as const },
        {
          icon: "fa-calendar-check",
          label: t("floating.naver"),
          href: CLINIC_NAVER_PLACE_URL,
          color: "#03C75A",
          highlight: true,
          type: "link" as const,
        },
      ] as const,
    [t]
  );

  const snsLinks = useMemo(
    () =>
      [
        { icon: "fa-brands fa-instagram", label: t("floating.instagram"), href: CLINIC_INSTAGRAM_URL, color: "#E4405F" },
        { icon: "fa-brands fa-youtube", label: t("floating.youtube"), href: CLINIC_YOUTUBE_URL, color: "#FF0000" },
      ] as const,
    [t]
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: "main",
        start: "top top-=15%",
        endTrigger: "footer",
        end: "top bottom",
        onEnter: () => null,
        onLeaveBack: () => null,
      });
    },
    { dependencies: [] }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 모바일: 하단 고정 바 — 예약·상담 | SNS | TOP 그룹화 */}
      <div className="fixed bottom-0 left-0 right-0 z-[1997] lg:hidden safe-area-inset-bottom">
        <div className="bg-white/95 backdrop-blur-md border-t border-black/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
          <div className="flex items-stretch">
            {/* 예약·상담 그룹 */}
            <div className="flex flex-1 items-center justify-around border-r border-black/5 py-3">
              {consultLinks.map((link, idx) =>
                link.type === "tel" ? (
                  <a
                    key={idx}
                    href={`tel:${CLINIC_TEL_DIGITS}`}
                    className="flex flex-col items-center gap-1 p-2 rounded-lg transition-all active:scale-95"
                    aria-label={`${link.label} ${CLINIC_TEL}`}
                  >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white bg-[#1a1918]">
                      <i className={`fa-solid ${link.icon as string} text-sm`} />
                    </div>
                    <span className="text-[10px] text-[#333] font-medium">{link.label}</span>
                  </a>
                ) : (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex flex-col items-center gap-1 p-2 rounded-lg transition-all active:scale-95"
                    aria-label={link.label}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${"highlight" in link && link.highlight ? "ring-2 ring-[#03C75A]/50" : ""}`}
                      style={{ backgroundColor: link.color || "#333" }}
                    >
                      <i className={`fa-solid ${link.icon as string} text-sm`} />
                    </div>
                    <span className="text-[10px] text-[#333] font-medium text-center leading-tight">{link.label}</span>
                  </Link>
                )
              )}
            </div>
            {/* SNS 그룹 */}
            <div className="flex items-center gap-1 px-2 py-3 border-r border-black/5">
              {snsLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="flex flex-col items-center gap-0.5 p-2 rounded-lg transition-all active:scale-95"
                  aria-label={link.label}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: link.color || "#333" }}>
                    <i className={`${link.icon} text-xs`} />
                  </div>
                  <span className="text-[8px] text-[#666]">{link.label}</span>
                </Link>
              ))}
            </div>
            {/* TOP */}
            <div className="flex items-center px-3 py-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex flex-col items-center justify-center gap-0.5 w-12 h-14 rounded-xl bg-[#1a1918] text-white transition-all active:scale-95"
                aria-label="맨 위로"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[8px] font-medium">TOP</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PC: 우측 고정 퀵 배너 — 토글 없이 항상 노출 */}
      <div className="hidden lg:flex fixed right-0 top-1/2 z-[1996] -translate-y-1/2">
        <div className="w-[78px] overflow-hidden rounded-l-xl border border-r-0 border-black/10 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
          <div className="flex flex-col">
            <a
              href={`tel:${CLINIC_TEL_DIGITS}`}
              className="group flex h-[76px] flex-col items-center justify-center gap-0.5 border-b border-black/10 text-[#333] transition-colors hover:bg-black/[0.03]"
              aria-label={`${t("floating.phone")} ${CLINIC_TEL}`}
            >
              <i className="fa-solid fa-phone text-lg" />
              <span className="mt-1 text-[10px] leading-none tracking-[-0.02em] text-center">02.517.7125</span>
            </a>
            <a href={CLINIC_KAKAO_TALK_URL} target="_blank" rel="noopener noreferrer" className="group flex h-[76px] flex-col items-center justify-center gap-0.5 border-b border-black/10 text-[#333] transition-colors hover:bg-black/[0.03]" aria-label={t("floating.kakao")}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEE500] text-[#2B2B2B]">
                <i className="fa-solid fa-comment text-sm" />
              </div>
              <span className="text-[11px] leading-none">카카오톡</span>
            </a>
            <a href={CLINIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="group flex h-[76px] flex-col items-center justify-center gap-0.5 border-b border-black/10 text-[#333] transition-colors hover:bg-black/[0.03]" aria-label={t("floating.instagram")}>
              <i className="fa-brands fa-instagram text-[20px] text-[#E4405F]" />
              <span className="text-[11px] leading-none">인스타</span>
            </a>
            <a href={CLINIC_YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="group flex h-[76px] flex-col items-center justify-center gap-0.5 border-b border-black/10 text-[#333] transition-colors hover:bg-black/[0.03]" aria-label={t("floating.youtube")}>
              <i className="fa-brands fa-youtube text-[20px] text-[#FF0000]" />
              <span className="text-[11px] leading-none">유튜브</span>
            </a>
            <a href={CLINIC_NAVER_PLACE_URL} target="_blank" rel="noopener noreferrer" className="group flex h-[76px] flex-col items-center justify-center gap-0.5 border-b border-black/10 text-[#333] transition-colors hover:bg-black/[0.03]" aria-label={t("floating.naver")}>
              <div className="rounded-full bg-[#03C75A] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">N</div>
              <span className="text-[11px] leading-none">네이버예약</span>
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-14 items-center justify-center bg-[#f3f5f4] text-[#2e2e2e] transition-colors hover:bg-[#e8ecea]"
              aria-label="맨 위로"
            >
              <i className="fa-solid fa-chevron-up text-sm" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
