"use client";

import Link from "next/link";
import { getLandingImage } from "@/utils/landingImages";

const BENEFITS = [
  {
    title: "PDRN 성분",
    description: "DNA 핵산 성분인 PDRN이 피부 세포 재생을 촉진하고 콜라겐 생성을 활성화합니다.",
  },
  {
    title: "피부 재생",
    description: "손상된 피부 조직을 복구하고 새로운 세포 생성을 촉진하여 피부를 재생시킵니다.",
  },
  {
    title: "탄력 개선",
    description: "콜라겐과 엘라스틴 생성을 촉진하여 피부 탄력을 개선하고 주름을 완화합니다.",
  },
  {
    title: "수분 공급",
    description: "피부 깊숙이 수분을 공급하여 건조함을 개선하고 피부 장벽을 강화합니다.",
  },
];

const TREATMENT_AREAS = [
  "얼굴 전반",
  "목",
  "손등",
  "가슴",
];

export default function RejuranView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f5f4f2] via-[#fafaf8] to-[#f5f4f2]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${getLandingImage(1)})`,
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-en-serif)] text-[clamp(48px,8vw,96px)] font-light tracking-wide text-[#111] mb-6">
            Rejuran
          </h1>
          <p className="text-[clamp(18px,2.5vw,24px)] text-[#666] leading-relaxed">
            PDRN 성분을 함유한<br />
            프리미엄 스킨부스터
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-en-serif)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Rejuran
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            리쥬란은 DNA 핵산 성분인 PDRN(Polydeoxyribonucleotide)을 함유한 프리미엄 스킨부스터입니다.
            PDRN은 피부 세포 재생을 촉진하고 콜라겐 생성을 활성화하여 피부 탄력과 주름 개선에 효과적입니다.
            손상된 피부 조직을 복구하고 새로운 세포 생성을 촉진하여 자연스러운 피부 재생을 돕습니다.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-[family-name:var(--font-en-serif)] text-center text-[clamp(32px,4vw,48px)] tracking-wide text-[#111] mb-16">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                className="benefit-card bg-white p-8 rounded-lg shadow-sm border border-[#e8e8e8]"
              >
                <h3 className="text-xl font-medium text-[#111] mb-3">{benefit.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#666]">{benefit.description}</p>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            리쥬란 시술에 대한 자세한 상담을 원하시면<br />
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
