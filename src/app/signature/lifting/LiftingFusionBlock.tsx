"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";

gsap.registerPlugin(ScrollTrigger);

const FUSION_STEPS = [
  {
    step: "01",
    title: "당김",
    method: "실",
    description: "실리프팅으로 근본적인 당김 효과를 구현합니다.",
    image: getLandingImage(0),
    color: "from-black/5 to-black/10",
  },
  {
    step: "02",
    title: "탄력",
    method: "레이저",
    description: "레이저 에너지로 콜라겐 생성을 촉진하여 탄력을 개선합니다.",
    image: getLandingImage(1),
    color: "from-black/5 to-black/10",
  },
  {
    step: "03",
    title: "결과",
    method: "융합",
    description: "실과 레이저의 융합으로 완벽한 리프팅 결과를 완성합니다.",
    image: getLandingImage(2),
    color: "from-black/5 to-black/10",
  },
];

export function LiftingFusionBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const fusionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 카드들이 순차적으로 나타나는 애니메이션
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        const cardContent = el.querySelector(".card-content");
        const cardImage = el.querySelector(".card-image");
        
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: i * 0.25,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // 카드 내부 요소들도 순차적으로 나타나게
        if (cardContent) {
          gsap.fromTo(
            cardContent,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: i * 0.25 + 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // 이미지 패럴랙스 효과
        if (cardImage) {
          gsap.to(cardImage, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // 융합 섹션이 나타나는 애니메이션
      if (fusionRef.current) {
        const fusionContent = fusionRef.current.querySelector(".fusion-content");
        gsap.fromTo(
          fusionRef.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fusionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        if (fusionContent) {
          gsap.fromTo(
            fusionContent,
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              delay: 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: fusionRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section ref={sectionRef} className="section-block relative overflow-hidden bg-[var(--bg-page)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="sec-head mb-14 text-center">
          <span className="sec-label block">Fusion Approach</span>
          <h2 className="sec-title mt-3 text-[clamp(28px,4vw,44px)]">리프팅은 한가지로 완성되지 않습니다</h2>
          <p className="mx-auto mt-4 max-w-[720px] text-[16px] leading-relaxed text-[var(--text-secondary)]">
            당김은 실로, 탄력은 레이저로. 결과는 융합으로 완성됩니다.
          </p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {FUSION_STEPS.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => { cardsRef.current[idx] = el; }}
              className="group relative overflow-hidden rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] transition-all duration-300 shadow-[0_4px_20px_rgba(44,43,42,0.04)] hover:shadow-[0_8px_28px_rgba(44,43,42,0.06)]"
            >
              <div className="card-image absolute inset-0 bg-[var(--text-primary)]/[0.03]" />
              <div
                className="card-image absolute inset-0 bg-cover bg-center opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="card-content relative z-10 p-6 lg:p-8">
                <span className="font-[family-name:var(--font-en-display)] text-[clamp(36px,5vw,52px)] font-normal leading-none text-[var(--text-primary)]">{item.step}</span>
                <h3 className="mt-4 font-[family-name:var(--font-kr-heading)] text-[clamp(22px,2.8vw,28px)] font-medium text-[var(--text-primary)]">{item.title}</h3>
                <span className="mt-2 inline-block text-[12px] font-medium tracking-[0.15em] text-[var(--text-secondary)] uppercase">{item.method}</span>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={fusionRef} className="relative overflow-hidden rounded-lg bg-[var(--text-primary)] p-10 lg:p-14">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.06] grayscale"
            style={{ backgroundImage: `url(${getLandingImage(3)})` }}
          />
          <div className="fusion-content relative z-10 text-center">
            <span className="inline-block text-[11px] font-light tracking-[0.25em] text-white/60 uppercase">Complete Fusion</span>
            <h3 className="mt-4 font-[family-name:var(--font-kr-heading)] text-[clamp(28px,4vw,40px)] font-medium text-white">
              완벽한 융합의 결과
            </h3>
            <p className="mx-auto mt-4 max-w-[640px] text-[16px] leading-relaxed text-white/80">
              실의 당김과 레이저의 탄력이 융합되어, 단일 시술로는 불가능한 완벽한 리프팅 결과를 만들어냅니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
