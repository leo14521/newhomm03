"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/i18n/LocaleProvider";
import { CLINIC_TEL, CLINIC_TEL_DIGITS } from "@/config/brand";

gsap.registerPlugin(ScrollTrigger);

/**
 * 통합 플로팅: 예약·상담 + SNS 그룹화, TOP 버튼
 * - 모바일: 하단 하나의 바 (그룹 구분)
 * - PC: 우측 하나의 플로팅 패널 (접었다 펼치기)
 */
export default function FloatingBanner() {
  const { t } = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);

  const consultLinks = useMemo(
    () =>
      [
        { icon: "fa-phone", label: t("floating.phone"), href: `tel:${CLINIC_TEL_DIGITS}`, type: "tel" as const },
        { icon: "fa-comment", label: t("floating.kakao"), href: "#", color: "#FEE500", type: "link" as const },
        {
          icon: "fa-calendar-check",
          label: t("floating.naver"),
          href: "#",
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
        { icon: "fa-brands fa-instagram", label: t("floating.instagram"), href: "#", color: "#E4405F" },
        { icon: "fa-brands fa-youtube", label: t("floating.youtube"), href: "#", color: "#FF0000" },
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
        onEnter: () => setScrollVisible(true),
        onLeaveBack: () => setScrollVisible(false),
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

      {/* PC: 우측 플로팅 패널 — 예약·상담 + SNS + TOP (항상 표시) */}
      <div className="hidden lg:flex fixed right-0 top-1/2 z-[1996] -translate-y-1/2 transition-transform duration-300">
        <div className="relative flex items-center">
          {/* 토글 버튼 */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 w-11 h-14 bg-white/95 backdrop-blur-md rounded-l-xl shadow-lg border border-r-0 border-black/10 flex items-center justify-center text-[#333] hover:bg-white transition-all hover:scale-105"
            aria-label={isExpanded ? "퀵 메뉴 닫기" : "퀵 메뉴 열기"}
            aria-expanded={isExpanded}
          >
            <i className={`fa-solid text-sm transition-transform duration-300 ${isExpanded ? "fa-chevron-right" : "fa-chevron-left"}`} />
          </button>

          {/* 패널: 예약·상담 / SNS / TOP */}
          <div
            className={`bg-white/95 backdrop-blur-md border-l border-black/10 shadow-xl transition-all duration-300 overflow-hidden ${isExpanded ? "w-[180px]" : "w-0"}`}
          >
            <div className="py-4 px-3 w-[180px]">
              <p className="text-[10px] tracking-widest text-[#999] uppercase mb-2">예약·상담</p>
              <div className="flex flex-col gap-1.5 mb-4">
                {consultLinks.map((link, idx) =>
                  link.type === "tel" ? (
                    <a
                      key={idx}
                      href={`tel:${CLINIC_TEL_DIGITS}`}
                      className="flex items-center gap-2.5 w-full rounded-lg py-2.5 px-3 text-left text-sm text-[#333] hover:bg-black/5 transition-colors"
                      aria-label={`${link.label} ${CLINIC_TEL}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#1a1918] flex items-center justify-center text-white flex-shrink-0">
                        <i className={`fa-solid ${link.icon} text-xs`} />
                      </div>
                      <span>{link.label}</span>
                    </a>
                  ) : (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`flex items-center gap-2.5 w-full rounded-lg py-2.5 px-3 text-sm text-[#333] hover:bg-black/5 transition-colors ${"highlight" in link && link.highlight ? "font-medium" : ""}`}
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
                        style={{ backgroundColor: link.color || "#333" }}
                      >
                        <i className={`fa-solid ${link.icon} text-xs`} />
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  )
                )}
              </div>
              <p className="text-[10px] tracking-widest text-[#999] uppercase mb-2">SNS</p>
              <div className="flex gap-2 mb-4">
                {snsLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className="flex items-center justify-center w-9 h-9 rounded-full text-white transition-transform hover:scale-110"
                    style={{ backgroundColor: link.color || "#333" }}
                    aria-label={link.label}
                  >
                    <i className={`${link.icon} text-sm`} />
                  </Link>
                ))}
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-lg bg-[#1a1918] text-white text-sm font-medium hover:bg-[#2a2928] transition-colors"
                aria-label="맨 위로"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                TOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
