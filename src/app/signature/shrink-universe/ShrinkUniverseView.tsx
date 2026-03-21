"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";

const FEATURES = [
  {
    title: "MP 모드 & Normal 모드",
    description: "두 가지 모드로 시술이 가능하며, 총 7가지 카트리지로 깊이 맞춤화(1.5mm~4.5mm)가 가능합니다.",
  },
  {
    title: "빠른 시술 속도",
    description: "시술 속도가 기존 대비 2.5배 빨라지고 통증이 크게 감소했습니다.",
  },
  {
    title: "이중턱 & V라인",
    description: "이중턱, 처진 볼살, 불분명한 턱선 개선 및 V라인 효과를 제공합니다.",
  },
  {
    title: "장기 지속 효과",
    description: "효과는 일반적으로 6개월~1년 유지됩니다.",
  },
];

const TREATMENT_AREAS = [
  "이중턱",
  "처진 볼살",
  "불분명한 턱선",
  "V라인",
  "목주름",
];

export default function ShrinkUniverseView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${getLandingImage(3)})`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-white mb-6">
            Shrink Universe
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-white/90 leading-relaxed">
            고강도 집속 초음파(HIFU) 에너지를 이용한<br />
            2세대 리프팅 시술
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Shrink Universe
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            슈링크 유니버스는 고강도 집속 초음파(HIFU) 에너지를 이용한 2세대 리프팅 시술입니다.
            돋보기로 햇빛을 모아 종이를 태우듯, 초음파 에너지를 피부 속 진피층과 근막층(SMAS)에 집중시켜
            65~75℃의 열응고점을 만들어 콜라겐 재생을 촉진합니다.
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

      {/* Treatment Areas */}
      <section className="relative bg-white px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[800px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-12">
            시술 부위
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TREATMENT_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[var(--hip-bg)] rounded-lg border border-[#e8e8e8]"
              >
                <span className="text-[16px] text-[#111]">{area}</span>
              </div>
            ))}
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
            슈링크 유니버스 시술에 대한 자세한 상담을 원하시면<br />
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
