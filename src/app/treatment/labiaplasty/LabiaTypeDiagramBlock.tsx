"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const LABIA_TYPES = [
  {
    id: "normal",
    label: "정상형",
    sub: "Normal",
    desc: "소음순이 대음순 안쪽에 자연스럽게 위치한 상태입니다. 시술이 필요하지 않습니다.",
    before: { left: 0.3, right: 0.3, thickness: 0.4 },
    after: { left: 0.3, right: 0.3, thickness: 0.4 },
    color: "#8b9a8f",
  },
  {
    id: "hypertrophy",
    label: "비대형",
    sub: "Hypertrophy",
    desc: "소음순이 과도하게 길거나 넓어 대음순 밖으로 돌출되는 경우입니다. 레이저로 정확하게 정리하여 자연스러운 라인을 만듭니다.",
    before: { left: 0.7, right: 0.7, thickness: 0.5 },
    after: { left: 0.35, right: 0.35, thickness: 0.4 },
    color: "#b8a078",
  },
  {
    id: "asymmetric",
    label: "비대칭형",
    sub: "Asymmetric",
    desc: "한쪽 소음순만 비대하거나 양쪽 크기가 다른 경우입니다. 대칭을 맞추어 균형잡힌 형태로 개선합니다.",
    before: { left: 0.8, right: 0.4, thickness: 0.5 },
    after: { left: 0.35, right: 0.35, thickness: 0.4 },
    color: "#b8a078",
  },
  {
    id: "thick",
    label: "비후형",
    sub: "Thickened",
    desc: "소음순이 두꺼워 보기 거북하거나 불편함을 주는 경우입니다. 두께를 줄여 섬세하고 자연스러운 형태로 정리합니다.",
    before: { left: 0.5, right: 0.5, thickness: 0.7 },
    after: { left: 0.35, right: 0.35, thickness: 0.4 },
    color: "#b8a078",
  },
];

function LabiaDiagram({ type, isBefore }: { type: typeof LABIA_TYPES[number]; isBefore: boolean }) {
  const { left, right, thickness } = isBefore ? type.before : type.after;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll("path");
    gsap.fromTo(
      paths,
      { scale: 0.98 },
      { scale: 1, duration: 0.35, stagger: 0.05, ease: "power2.out", clearProps: "transform" }
    );
  }, [isBefore]);

  return (
    <svg ref={svgRef} className="h-full w-full" viewBox="0 0 200 300" aria-hidden>
      {/* 대음순 (외부) */}
      <path
        d="M 50 50 Q 100 30 150 50 Q 150 150 150 250 Q 100 270 50 250 Q 50 150 50 50"
        fill="#f0e8e0"
        stroke="#d0c0b0"
        strokeWidth="2"
      />
      {/* 소음순 (내부) - 왼쪽 */}
      <ellipse
        cx={100 - left * 30}
        cy={150}
        rx={8 + thickness * 8}
        ry={30 + left * 40}
        fill={type.color}
        fillOpacity={isBefore ? 0.7 : 0.5}
        stroke={type.color}
        strokeWidth="1.5"
      />
      {/* 소음순 (내부) - 오른쪽 */}
      <ellipse
        cx={100 + right * 30}
        cy={150}
        rx={8 + thickness * 8}
        ry={30 + right * 40}
        fill={type.color}
        fillOpacity={isBefore ? 0.7 : 0.5}
        stroke={type.color}
        strokeWidth="1.5"
      />
      {/* 중심선 */}
      <line x1="100" y1="50" x2="100" y2="250" stroke="#e0d0c0" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  );
}

/**
 * 소음순 유형별 도식화 + 수술 전후 비교 애니메이션
 */
export function LabiaTypeDiagramBlock() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showAfter, setShowAfter] = useState<Record<string, boolean>>({});

  const toggleAfter = (id: string) => {
    setShowAfter((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative overflow-hidden border-y border-[#e8e8e8] bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-[1000px]">
        <p className="mb-2 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
          LABIAPLASTY TYPES
        </p>
        <h3 className="mb-4 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
          소음순 유형별 <span className="text-[var(--hip-accent-dark)]">수술 효과</span>
        </h3>
        <p className="mb-14 text-center text-[14px] text-[#666]">
          유형을 선택하고 버튼을 클릭하면 수술 전후 효과를 확인할 수 있습니다.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {LABIA_TYPES.map((type) => {
            const isActive = activeId === type.id;
            const isShowingAfter = showAfter[type.id];
            return (
              <div
                key={type.id}
                className={`group relative overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 ${
                  isActive ? "border-[var(--hip-accent)] shadow-lg" : "border-[#e8e8e8] hover:border-[var(--hip-accent)]/50"
                }`}
              >
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] tracking-[0.2em] text-[var(--hip-accent-dark)]">
                        {type.sub}
                      </span>
                      <h4 className="mt-1 font-[family-name:var(--font-heading-kr)] text-[18px] tracking-[0.04em] text-[#111]">
                        {type.label}
                      </h4>
                    </div>
                    {type.id !== "normal" && (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveId(type.id);
                          toggleAfter(type.id);
                        }}
                        className={`rounded-full px-4 py-2 text-[12px] font-medium tracking-wider transition-all ${
                          isShowingAfter
                            ? "bg-[var(--hip-accent)] text-white"
                            : "bg-[var(--hip-bg)] text-[var(--hip-accent-dark)] hover:bg-[var(--hip-accent)]/10"
                        }`}
                      >
                        {isShowingAfter ? "수술 전" : "수술 후"}
                      </button>
                    )}
                  </div>

                  <div className="relative mx-auto h-[200px] w-full max-w-[180px]">
                    <div className={`absolute inset-0 transition-opacity duration-500 ${isShowingAfter ? "opacity-0" : "opacity-100"}`}>
                      <LabiaDiagram type={type} isBefore={true} />
                    </div>
                    {type.id !== "normal" && (
                      <div className={`absolute inset-0 transition-opacity duration-500 ${isShowingAfter ? "opacity-100" : "opacity-0"}`}>
                        <LabiaDiagram type={type} isBefore={false} />
                      </div>
                    )}
                  </div>

                  {isActive && (
                    <p className="mt-4 text-[13px] leading-relaxed text-[#666] animate-[fadeIn_0.3s_ease-out]">
                      {type.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
