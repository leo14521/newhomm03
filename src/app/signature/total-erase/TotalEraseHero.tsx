"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";

gsap.registerPlugin(ScrollTrigger);

/**
 * 토탈 이레이즈 히어로 — 힙 미니멀 + 스크롤 패럴랙스
 */
export function TotalEraseHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !bgRef.current) return;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(bgRef.current, { y: self.progress * 80 });
        },
      });
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
        );
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[75vh] items-end overflow-hidden bg-white lg:min-h-[85vh]"
      aria-label="토탈 이레이즈"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 -top-[15%] h-[130%] w-full bg-cover bg-center bg-no-repeat opacity-20 grayscale"
        style={{
          backgroundImage: `url(${getLandingImage(0)})`,
        }}
        aria-hidden
      />
      {/* 아래에서 위로 흰색 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent" aria-hidden />
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-60" aria-hidden />

      <div ref={textRef} className="relative z-10 w-full px-6 pb-20 pt-28 lg:px-[var(--pad-global)] lg:pb-28 lg:pt-36">
        <div className="max-w-[900px]">
          <span className="mb-4 block font-[family-name:var(--font-display)] text-[11px] tracking-[0.4em] uppercase text-[#666]">
            SIGNATURE
          </span>
          <h1 className="font-[family-name:var(--font-en-display)] text-[clamp(36px,5.5vw,56px)] font-light leading-[1.2] tracking-tight text-[#111]">
            Total Erase
          </h1>
          <p className="mt-2 font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.02em] text-[#111]">
            토탈 이레이즈
          </p>
          <h2 className="mt-8 max-w-[min(100%,36rem)] font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(18px,2.5vw,26px)] font-light leading-[1.45] tracking-tight text-[#1a1a1a] break-keep text-balance">
            <span className="block">아름다움은 만들어내는 것이 아니라,</span>
            <span className="mt-1 block sm:mt-1.5">
              당신 안에 숨겨진{" "}
              <span className="philo-light-shine" lang="ko">
                빛
              </span>
              을 발견하는 것입니다.
            </span>
          </h2>
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-[#333] lg:text-[16px]">
            미간, 이마, 팔자, 마리오넷, 목주름 —
            <br className="hidden sm:block" />
            오마쥬 클리닉만의 노하우로 노화의 상징인 주름을 탁월하게 개선합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
