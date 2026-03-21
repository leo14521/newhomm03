"use client";

import { useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

/**
 * 주름 펴는 UX — 드래그/슬라이드로 주름 라인이 사라지는 인터랙션
 */
export function WrinkleEraseBlock() {
  const [progress, setProgress] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const isDragging = useRef(false);

  const update = useCallback((x: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    setProgress(p);
    if (fillRef.current) fillRef.current.style.width = `${p * 100}%`;
    if (lineRef.current) {
      const len = 380;
      gsap.set(lineRef.current, { strokeDasharray: len, strokeDashoffset: len * p });
    }
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      update(e.clientX);
    },
    [update]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      update(e.clientX);
    },
    [update]
  );

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
      <div className="mx-auto max-w-[640px]">
        <p className="mb-2 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
          INTERACTIVE
        </p>
        <h3 className="mb-2 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
          주름을 펴 보세요
        </h3>
        <p className="mb-10 text-center text-[14px] text-[#666]">
          바를 드래그하면 주름이 사라지는 토탈 이레이즈의 개념을 체험해 보세요.
        </p>

        <div
          ref={trackRef}
          className="relative mx-auto h-14 w-full max-w-[400px] cursor-pointer select-none rounded-full border-2 border-[#e0e0e0] bg-[#f5f5f5] touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            ref={fillRef}
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[var(--hip-accent)] to-[var(--hip-accent-light)] transition-[width] duration-150"
            style={{ width: `${progress * 100}%` }}
          />
          {/* 구부러진 주름 선: 처음엔 보이다가 바를 드래그하면 왼쪽부터 사라짐 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg className="h-7 w-[92%]" viewBox="0 0 360 28" fill="none" aria-hidden>
              <path
                ref={lineRef}
                d="M 12 14 Q 50 8 90 14 Q 130 20 180 12 Q 230 6 270 14 Q 310 22 348 14"
                stroke="#8b7355"
                strokeWidth="2.8"
                strokeLinecap="round"
                fill="none"
                style={{ strokeDasharray: 380, strokeDashoffset: 0 }}
              />
            </svg>
          </div>
          <div
            className="absolute top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[var(--hip-accent)] bg-white shadow-md"
            style={{ left: `${progress * 100}%` }}
          />
        </div>

        <p className="mt-6 text-center text-[13px] text-[#888]">
          {progress < 0.1 && "← 바를 드래그해 보세요"}
          {progress >= 0.1 && progress < 0.9 && "주름이 사라지고 있어요"}
          {progress >= 0.9 && "토탈 이레이즈 완료"}
        </p>
      </div>
    </section>
  );
}
