"use client";

import { useState, useCallback } from "react";

/** 메인 히어로 영상 — hero_2 우선, 실패 시 기존 소스로 폴백 */
const VIDEO_SOURCES = ["/hero_2.mp4", "/hero-sculpture.mp4", "/hero.mp4"] as const;

type HeroVideoProps = {
  /** 메인 홈 전용 — 오로라 톤 오버레이 */
  vivid?: boolean;
};

export default function HeroVideo({ vivid = false }: HeroVideoProps) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const handleError = useCallback(() => {
    setSourceIndex((prev) => {
      if (prev < VIDEO_SOURCES.length - 1) return prev + 1;
      setVideoFailed(true);
      return prev;
    });
  }, []);

  const src = VIDEO_SOURCES[sourceIndex] ?? VIDEO_SOURCES[0];

  return (
    <div
      className="hero-seq-bg absolute inset-0 z-0 bg-[var(--bg-main)]"
      data-seq-bg
    >
      {!videoFailed ? (
        <video
          key={sourceIndex}
          autoPlay
          muted
          loop
          playsInline
          className={
            vivid
              ? "absolute inset-0 h-full w-full object-cover [filter:brightness(0.94)_contrast(1.02)_saturate(0.92)]"
              : "absolute inset-0 h-full w-full object-cover"
          }
          src={src}
          onError={handleError}
        />
      ) : null}
      {/* 가독성 우선: 어두운 스크림 + 중앙 비네트(카피 구역) — mix-blend는 영상이 너무 밝아지며 글자가 묻히는 경우가 있어 일반 합성 */}
      <div
        className={
          vivid
            ? "absolute inset-0 bg-gradient-to-b from-white/82 via-[#faf8f5]/52 to-[#f5f0eb]/90"
            : "absolute inset-0 bg-gradient-to-b from-[#4A3B39]/35 via-transparent to-[#4A3B39]/45 mix-blend-multiply"
        }
        aria-hidden
      />
      {vivid ? (
        <>
          {/* 화이트 톤 히어로: 중심은 밝게, 가장자리만 은은한 웜 그레이 비네트 */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_88%_72%_at_50%_42%,rgba(255,255,255,0.72)_0%,rgba(252,250,248,0.38)_38%,rgba(235,228,220,0.32)_72%,rgba(210,200,190,0.38)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#f8f4f0]/60"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_42%,rgba(232,196,168,0.12)_0%,transparent_68%)]"
            aria-hidden
          />
        </>
      ) : null}
    </div>
  );
}
