"use client";

import Image from "next/image";
import { BRAND_MESSAGE_LABEL, BRAND_SLOGAN_KR } from "@/config/brand";

/** 메인 히어로 — 미술관 전시회 컨셉: 흑·백·그레이, 고급스럽고 깔끔 */
const HERO_IMAGE = "/images/clinic/main/01.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-full min-h-screen w-full overflow-hidden bg-[var(--color-bg-dark)]"
      data-hero
    >
      <div
        className="absolute inset-0 z-0 origin-center will-change-transform"
        data-hero-bg
      >
        <Image
          src={HERO_IMAGE}
          alt="HOMMAGE"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-black/0"
        data-hero-overlay
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-white"
        data-hero-content
      >
        <span className="mb-6 font-[family-name:var(--font-en)] text-[10px] tracking-[0.35em] text-white/50 uppercase">
          {BRAND_MESSAGE_LABEL}
        </span>
        <h1 className="max-w-4xl text-center font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5rem)] font-normal tracking-[0.2em]">
          HOMMAGE
        </h1>
        <div className="mt-8 flex flex-col items-center gap-2 text-center">
          <span className="inline-block h-px w-20 bg-white/40" aria-hidden />
          <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(1rem,1.8vw,1.25rem)] font-light leading-relaxed text-white/95 whitespace-pre-line">
            {BRAND_SLOGAN_KR}
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="h-16 w-px overflow-hidden rounded-full bg-white/30">
          <div
            className="h-1/2 w-full origin-top rounded-full bg-white"
            data-hero-scroll-bar
          />
        </div>
        <span className="text-[10px] tracking-[0.2em] text-white/70">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
