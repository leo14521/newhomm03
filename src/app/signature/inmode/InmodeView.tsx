"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";

const FEATURES = [
  {
    title: "RF + 초음파 결합",
    description: "고주파(RF)와 초음파를 결합하여 지방 분해와 리프팅 효과를 동시에 제공합니다.",
  },
  {
    title: "지방 분해",
    description: "초음파 에너지로 지방 세포를 분해하고 제거하여 바디 라인을 개선합니다.",
  },
  {
    title: "리프팅 효과",
    description: "고주파 에너지로 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 리프팅 효과를 제공합니다.",
  },
  {
    title: "비수술 시술",
    description: "수술 없이 RF와 초음파를 활용하여 안전하고 효과적인 바디 컨투어링을 제공합니다.",
  },
];

const TREATMENT_AREAS = [
  "복부",
  "허벅지",
  "팔뚝",
  "옆구리",
  "등",
  "엉덩이",
];

export default function InmodeView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${getLandingImage(4)})`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-white mb-6">
            Inmode
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-white/90 leading-relaxed">
            RF와 초음파를 결합한<br />
            바디 컨투어링 시술
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Inmode
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            인모드는 고주파(RF)와 초음파를 결합한 바디 컨투어링 시술로, 지방 분해와 리프팅에 효과적입니다.
            초음파 에너지로 지방 세포를 분해하고 제거하여 바디 라인을 개선하며,
            고주파 에너지로 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 리프팅 효과를 제공합니다.
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
            인모드 시술에 대한 자세한 상담을 원하시면<br />
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
