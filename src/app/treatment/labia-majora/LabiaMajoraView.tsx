"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const MAJORA_POINTS = [
  {
    title: "볼륨 재배치",
    description: "볼륨 부족, 비대칭 등 상태를 분석해 자연스럽고 안정적인 볼륨 라인을 설계합니다.",
  },
  {
    title: "맞춤 술식 선택",
    description: "지방이식·필러·절개 성형 중 개인 상태에 맞는 방법을 선택해 진행합니다.",
  },
  {
    title: "자연스러운 윤곽",
    description: "과한 교정보다 본연의 균형감을 살리는 방식으로 결과를 디자인합니다.",
  },
  {
    title: "프라이빗 회복 케어",
    description: "상담부터 회복 안내까지 민감도를 고려한 1:1 케어를 제공합니다.",
  },
];

const VULVA_PROCEDURES = [
  {
    title: "치구 성형",
    target:
      "치구 부위의 과도한 볼륨, 비대칭, 돌출로 인해 타이트한 의복 착용 시 불편감이 있거나 외형 콤플렉스를 느끼는 경우",
    description:
      "치구(외음부 상부의 지방층) 라인을 해부학적으로 분석해 지방 축소 또는 볼륨 보완을 통해 매끄러운 윤곽으로 교정하는 외음부 성형입니다.",
  },
  {
    title: "대음순 성형",
    target:
      "노화·출산·체중 변화로 대음순의 볼륨이 꺼지거나 처짐, 비대칭, 마찰 불편감이 있는 경우",
    description:
      "대음순의 볼륨과 탄력을 회복해 외음부 보호 기능과 외형 균형을 동시에 개선하는 성형으로, 지방이식·필러·절개 방식 중 상태에 맞춰 선택합니다.",
  },
];

export default function LabiaMajoraView() {
  return (
    <>
      <TreatmentExhibitionPage
        heroTitle="Labia Majora"
        heroTitleKr="대음순 성형"
        heroDescription="대음순의 볼륨 부족, 비대칭, 형태 불만족을 개선하는 여성 성형 시술입니다. 지방이식, 필러, 절개 성형 등 개인에 맞는 방법으로 설계하며, 여의사 1:1 전담 진료로 진행합니다."
        showHeroBackground={false}
        imageIndex={2}
        introTitle="Natural Contour Reconstruction"
        introBody="대음순 성형은 외형의 선을 정리하면서도 기능적 편안함을 함께 고려해야 합니다. 오마쥬는 부위별 볼륨과 좌우 균형을 분석해 과하지 않은 자연스러운 윤곽을 만듭니다."
        exhibitionLabel="Women's program · 07"
        exhibitionHeadline="Balanced Form, Gentle Confidence"
        exhibitionBody="지방이식·필러·절개 성형 등 선택지는 다양하지만 핵심은 개인에게 맞는 한 가지 조합입니다. 상담 단계에서 목적과 회복 계획을 명확히 정리해 안정적인 결과를 유도합니다."
        keywords={["Contour", "Balance", "Volume", "Symmetry", "Private"]}
        featuresTitle="Majora Design Points"
        features={MAJORA_POINTS}
        ctaTitle="개인 맞춤 대음순 디자인"
        ctaBody="선천적·후천적 변화로 달라진 라인을 섬세하게 분석하고, 가장 자연스러운 방식으로 균형을 되찾는 계획을 제안합니다."
        primaryHref="/#curation"
        primaryLabel="상담 예약"
        secondaryHref="/#map"
        secondaryLabel="오시는 길"
      />

      <section id="vulva-procedures" className="section-block border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1240px]">
          <div className="sec-head text-center">
            <span className="sec-label block">VULVA SURGERY</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,34px)]">외음부성형 시술 항목</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {VULVA_PROCEDURES.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-7 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-[family-name:var(--font-kr-heading)] text-[20px] text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[13px] tracking-[0.08em] text-[var(--text-secondary)] uppercase">치료 대상</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{item.target}</p>
                <p className="mt-5 text-[13px] tracking-[0.08em] text-[var(--text-secondary)] uppercase">시술 설명</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
