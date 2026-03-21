"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";

const FEATURES = [
  {
    title: "멀티 고주파 기술",
    description: "40.68MHz의 이상적인 주파수 에너지를 사용하여 피부 속 물분자를 회전시키고, 이로 인한 마찰열로 콜라겐을 자극하고 재생합니다.",
  },
  {
    title: "3단계 깊이 조절",
    description: "5mm, 8mm, 11mm 깊이 조절이 가능하여 피부층별 맞춤 시술이 가능합니다.",
  },
  {
    title: "아이스 컨택트 쿨링",
    description: "통증을 최소화하는 아이스 컨택트 쿨링 시스템으로 편안한 시술이 가능합니다.",
  },
  {
    title: "즉시 효과",
    description: "시술 직후 즉시 피부가 당겨지고 얼굴라인이 정리되는 효과가 나타납니다.",
  },
];

const DEPTH_LEVELS = [
  { depth: "5mm", target: "표피층", effect: "표면 탄력 개선" },
  { depth: "8mm", target: "진피층", effect: "콜라겐 재생" },
  { depth: "11mm", target: "근막층", effect: "리프팅 효과" },
];

export default function TuneFaceView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${getLandingImage(2)})`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-white mb-6">
            Tune Face
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-white/90 leading-relaxed">
            멀티 고주파를 활용한<br />
            페이스리프팅 시술
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Tune Face
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            튠페이스는 이스라엘 ALMA사에서 개발한 멀티 고주파를 활용한 페이스리프팅 시술로,
            공식명칭은 악센트 프라임(Accent Prime)입니다.
            40.68MHz의 이상적인 주파수 에너지를 사용하여 피부 속 물분자를 회전시키고,
            이로 인한 마찰열로 콜라겐을 자극하고 재생합니다.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="feature-card bg-white p-8 rounded-lg shadow-sm border border-[#e8e8e8]"
              >
                <h3 className="text-xl font-medium text-[#111] mb-3">{feature.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depth Levels */}
      <section className="relative bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            3단계 깊이 조절
          </h2>
          <div className="space-y-8">
            {DEPTH_LEVELS.map((level, idx) => (
              <div key={idx} className="depth-item flex gap-8 items-center p-8 bg-[var(--hip-bg)] rounded-lg border border-[#e8e8e8]">
                <div className="flex-shrink-0">
                  <span className="text-[clamp(40px,5vw,60px)] font-light text-[var(--hip-accent)]">
                    {level.depth}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-[#111] mb-2">{level.target}</h3>
                  <p className="text-[15px] text-[#666]">{level.effect}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-[#1a1a1a] rounded-lg text-center">
            <p className="text-white/90 text-[15px] leading-relaxed">
              <strong className="text-white">권장 시술:</strong> 1개월 간격으로 3회 이상 시술 권장되며,<br />
              3회 기준 1년 정도 유지됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1a1a1a] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(32px,4vw,48px)] text-white mb-6">
            상담 및 예약
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            튠페이스 시술에 대한 자세한 상담을 원하시면<br />
            전문 상담사가 도와드리겠습니다.
          </p>
          <Link
            href="/community/contact"
            className="inline-block px-8 py-4 bg-white text-[#111] rounded-sm hover:bg-[var(--hip-accent)] hover:text-white transition-colors"
          >
            상담 예약하기
          </Link>
        </div>
      </section>
    </main>
  );
}
