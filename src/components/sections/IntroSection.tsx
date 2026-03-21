"use client";

import { getLandingImage } from "@/utils/landingImages";

const INTRO_BG = getLandingImage(1);

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-bg-sub)]"
      data-intro-section
    >
      {/* Parallax background */}
      <div
        className="absolute inset-0 scale-110"
        data-intro-bg
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${INTRO_BG})` }}
        />
      </div>
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      {/* Center logo SVG - Draw animation */}
      <div
        className="relative z-10 flex items-center justify-center px-6"
        data-intro-logo
      >
        <svg
          data-intro-svg
          className="h-auto w-[min(80vw,420px)] max-w-full text-[var(--color-accent)]"
          viewBox="0 0 200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="HOMMAGE"
        >
          <path
            data-intro-path
            d="M20 30 L50 10 L80 30 L110 10 L140 30 L180 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="48"
            textAnchor="middle"
            className="fill-[var(--color-text-primary)] font-[family-name:var(--font-display)] text-[8px] tracking-[0.5em]"
          >
            HOMMAGE
          </text>
        </svg>
      </div>
    </section>
  );
}
