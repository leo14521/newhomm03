"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Lenis와 동기화된 스크롤 값 (ScrollTrigger 기준) */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setY(self.scroll()),
    });
    return () => st.kill();
  }, []);
  return y;
}

const QUICK_PHONE = "02-543-4842";
const QUICK_LINKS = [
  { label: "카톡상담", href: "#" },
  { label: "네이버예약", href: "#", highlight: true },
  { label: "전화문의", href: "#", isCall: true },
];

/**
 * 리원피부과 UX 참고: 스크롤 시에만 우측 퀵 메뉴 노출 (#quick.on)
 * - 스크롤 > 0 이면 퀵 영역 표시
 * - 전화문의 클릭 시 플로팅 팝업(번호 표시)
 * - TOP 버튼으로 상단 이동
 */
export function TopButton() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useGSAP(
    () => {
      if (!btnRef.current) return;
      ScrollTrigger.create({
        trigger: "main",
        start: "top top-=10%",
        endTrigger: "footer",
        end: "top bottom",
        onEnter: () => setVisible(true),
        onLeaveBack: () => setVisible(false),
      });
    },
    { dependencies: [] }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={scrollToTop}
      className={`_topBtn fixed bottom-8 right-8 z-[999] flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1a1918] shadow-lg transition-[opacity,visibility] hover:bg-[var(--color-bg-sub)] md:bottom-10 md:right-10 ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-label="맨 위로"
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

/**
 * 리원 스타일: 스크롤 시 등장하는 우측 퀵 메뉴 + 전화 플로팅 팝업
 */
export function QuickLink() {
  const quickRef = useRef<HTMLDivElement>(null);
  const scrollY = useScrollY();
  const quickOn = scrollY > 50;
  const [expandOpen, setExpandOpen] = useState(false);
  const [callPopOpen, setCallPopOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={quickRef}
        id="quick"
        className={`quick fixed right-0 top-1/2 z-[998] -translate-y-1/2 transition-all duration-300 ${
          quickOn ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="quick-wrap flex flex-col items-end gap-2 pr-4 md:pr-6">
          {/* 퀵 소셜 아이콘 (펼치면 보임) */}
          <div
            className={`quick-social-icon flex flex-col gap-1 overflow-hidden transition-all duration-300 ${
              expandOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {QUICK_LINKS.map((item) =>
              item.isCall ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setCallPopOpen(true)}
                  className="title-wrap flex items-center gap-2 rounded-full bg-[#1a1918]/95 px-4 py-2.5 text-left text-sm text-white backdrop-blur-sm hover:bg-[#2a2928]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm">📞</span>
                  <span className="tit">{item.label}</span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`title-wrap flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-white hover:bg-white/10 ${
                    item.highlight ? "bg-[var(--color-accent)]/90" : "bg-[#1a1918]/95 backdrop-blur-sm"
                  }`}
                >
                  <span className="tit">{item.label}</span>
                </Link>
              )
            )}
          </div>

          {/* Quick 토글 버튼 (리원 "Quick!" 스타일) */}
          <button
            type="button"
            onClick={() => setExpandOpen((o) => !o)}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1a1918]/20 bg-white text-[#1a1918] shadow-lg transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            aria-label={expandOpen ? "퀵 메뉴 닫기" : "퀵 메뉴 열기"}
            aria-expanded={expandOpen}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          {/* TOP 버튼 */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex h-11 w-11 flex-col items-center justify-center rounded-full bg-[#1a1918] text-white shadow-lg hover:bg-[#2a2928]"
            aria-label="맨 위로"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[9px] font-medium tracking-wider">TOP</span>
          </button>
        </div>
      </div>

      {/* 전화문의 플로팅 팝업 (리원 .floating-pop 참고) */}
      <div
        className={`floating-pop fixed left-1/2 top-1/2 z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 md:left-auto md:right-8 md:top-auto md:bottom-32 md:translate-x-0 md:translate-y-0 ${
          callPopOpen ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95 pointer-events-none"
        }`}
        role="dialog"
        aria-label="전화 문의"
      >
        <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
          <button
            type="button"
            onClick={() => setCallPopOpen(false)}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#999] hover:bg-black/5 hover:text-[#333]"
            aria-label="닫기"
          >
            <span className="block h-px w-4 rotate-45 bg-current" />
            <span className="absolute block h-px w-4 -rotate-45 bg-current" />
          </button>
          <p className="mb-1 text-sm text-[#666]">오마쥬 의원 전화 문의</p>
          <a
            href={`tel:${QUICK_PHONE.replace(/-/g, "")}`}
            className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#1a1918] hover:text-[var(--color-accent)]"
          >
            {QUICK_PHONE}
          </a>
        </div>
      </div>

      {/* 배경 딤드 (팝업 열렸을 때) */}
      <button
        type="button"
        aria-hidden
        onClick={() => setCallPopOpen(false)}
        className={`fixed inset-0 z-[9999] bg-black/20 transition-opacity duration-300 ${
          callPopOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}
