"use client";

import { BRAND_SLOGAN_KR } from "@/config/brand";

const BG = "/images/clinic/interior/01.jpg";

/** 2단계: 미술관 컨셉 — 흑·백·그레이, 슬로건 */
export default function Stage2Section() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-bg-dark)]"
      data-stage="2"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${BG})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-4xl px-6 text-center text-white">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide">
          HOMMAGE
        </h2>
        <div className="mt-8">
          <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(1rem,1.8vw,1.2rem)] font-light leading-relaxed text-white/95 whitespace-pre-line">
            {BRAND_SLOGAN_KR}
          </p>
        </div>
      </div>
    </section>
  );
}
