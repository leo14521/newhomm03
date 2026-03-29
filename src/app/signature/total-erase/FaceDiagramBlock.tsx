"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/i18n/LocaleProvider";
import { getTotalEraseContent } from "@/i18n/totalEraseContent";

gsap.registerPlugin(ScrollTrigger);

function WrinkleIcon({ type, active }: { type: string; active: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || !active) return;
    const paths = svgRef.current.querySelectorAll("path[id]");
    gsap.fromTo(
      paths,
      { strokeDashoffset: 120 },
      { strokeDashoffset: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
    );
  }, [active, type]);

  const common = {
    stroke: "var(--hip-accent-dark)",
    strokeWidth: 1.2,
    fill: "none",
    strokeLinecap: "round" as const,
    style: { strokeDasharray: 120, strokeDashoffset: 120 },
  };

  if (type === "horizontal")
    return (
      <svg ref={svgRef} className="h-8 w-16" viewBox="0 0 64 32" aria-hidden>
        <path id="l1" d="M 8 8 L 56 8" {...common} />
        <path id="l2" d="M 12 16 L 52 16" {...common} />
        <path id="l3" d="M 8 24 L 56 24" {...common} />
      </svg>
    );
  if (type === "vertical")
    return (
      <svg ref={svgRef} className="h-10 w-12" viewBox="0 0 48 40" aria-hidden>
        <path id="v1" d="M 24 4 L 24 36" {...common} />
        <path id="v2" d="M 18 8 L 18 32" {...common} />
        <path id="v3" d="M 30 8 L 30 32" {...common} />
      </svg>
    );
  if (type === "curve")
    return (
      <svg ref={svgRef} className="h-10 w-14" viewBox="0 0 56 40" aria-hidden>
        <path id="c1" d="M 8 12 Q 28 4 48 20" {...common} />
        <path id="c2" d="M 12 24 Q 28 16 44 28" {...common} />
      </svg>
    );
  if (type === "marionette")
    return (
      <svg ref={svgRef} className="h-12 w-12" viewBox="0 0 48 48" aria-hidden>
        <path id="m1" d="M 20 8 L 16 44" {...common} />
        <path id="m2" d="M 28 8 L 32 44" {...common} />
      </svg>
    );
  if (type === "neck")
    return (
      <svg ref={svgRef} className="h-8 w-20" viewBox="0 0 80 32" aria-hidden>
        <path id="n1" d="M 8 8 L 72 8" {...common} />
        <path id="n2" d="M 4 16 L 76 16" {...common} />
        <path id="n3" d="M 8 24 L 72 24" {...common} />
      </svg>
    );
  return null;
}

/**
 * 토탈 이레이즈 대상 부위 — 부위별 주름 특징·형태 애니메이션
 */
export function FaceDiagramBlock() {
  const { locale } = useLocale();
  const c = getTotalEraseContent(locale);
  const sectionRef = useRef<HTMLElement>(null);
  const zonesRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useGSAP(
    () => {
      zonesRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.88, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-[#e8e8e8] bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-[900px]">
        <p className="mb-2 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
          {c.zonesKicker}
        </p>
        <h3 className="mb-4 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
          {c.zonesTitleBefore}
          <span className="text-[var(--hip-accent-dark)]">{c.zonesTitleAccent}</span>
          {c.zonesTitleAfter}
        </h3>
        <p className="mb-14 text-center text-[14px] text-[#666]">{c.zonesLead}</p>

        <div className="relative mx-auto flex min-h-[480px] max-w-[340px] flex-col items-stretch justify-between gap-4 rounded-2xl border border-[#e8e8e8] bg-white p-6 shadow-sm">
          {c.zones.map((z, i) => (
            <button
              key={z.id}
              ref={(el) => {
                zonesRef.current[i] = el;
              }}
              type="button"
              onClick={() => setActiveId(activeId === z.id ? null : z.id)}
              onFocus={() => setActiveId(z.id)}
              onBlur={() => setActiveId(null)}
              className={`relative z-10 flex items-center gap-4 rounded-xl px-4 py-4 text-left transition-all duration-300 ${
                activeId === z.id
                  ? "bg-[var(--hip-accent)]/12 ring-2 ring-[var(--hip-accent)]/40"
                  : "hover:bg-[var(--hip-bg)]"
              }`}
            >
              <div className="flex h-14 w-20 flex-shrink-0 items-center justify-center rounded-lg bg-[#f8f6f3]">
                <WrinkleIcon type={z.wrinkle} active={activeId === z.id} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[11px] tracking-[0.2em] text-[var(--hip-accent-dark)]">
                  {z.sub}
                </span>
                <span className="mt-0.5 block font-[family-name:var(--font-heading-kr)] text-[17px] tracking-[0.04em] text-[#111]">
                  {z.label}
                </span>
                {activeId === z.id && (
                  <p className="mt-2 text-[13px] leading-relaxed text-[#666]">{z.desc}</p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
