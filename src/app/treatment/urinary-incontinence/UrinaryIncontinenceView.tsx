"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const TREATMENTS = [
  {
    title: "레이저 치료",
    description: "비침습 레이저를 이용하여 요도 주변 조직을 강화하고 요실금을 개선합니다.",
  },
  {
    title: "고주파 치료",
    description: "고주파 에너지를 이용하여 골반 근육을 강화하고 요실금을 치료합니다.",
  },
  {
    title: "비수술 치료",
    description: "수술 없이 레이저와 고주파를 활용하여 안전하고 효과적인 치료를 제공합니다.",
  },
  {
    title: "요실금 수술",
    description: "중등도 이상의 요실금에 대해 요도 밴드 수술, 질벽 성형술 등 수술적 치료를 제공합니다. 개인 상태에 맞는 수술 방법을 상담해 드립니다.",
  },
  {
    title: "근육 강화",
    description: "골반 근육을 강화하여 요실금을 예방하고 개선합니다.",
  },
];

export default function UrinaryIncontinenceView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Urinary Incontinence Care"
      heroTitleKr="요실금 케어"
      heroDescription="비수술 요실금 치료로 일상생활의 불편함을 개선"
      showHeroBackground={false}
      imageIndex={3}
      introTitle="Daily Life Recovery"
      introBody="요실금 케어의 핵심은 일상 회복입니다. 오마쥬는 증상 강도와 원인을 분석해 비수술 치료부터 수술적 선택지까지 단계별로 제시하며, 불편을 줄이는 현실적인 개선을 목표로 합니다."
      exhibitionLabel="Women's program · 05"
      exhibitionHeadline="From Discomfort to Control"
      exhibitionBody="눈에 띄는 화려함보다 실질적인 기능 개선이 중요한 영역입니다. 반복되는 불편을 줄이고 생활의 자신감을 회복할 수 있도록 치료 옵션을 명확하게 큐레이션합니다."
      keywords={["Recovery", "Pelvic Care", "Laser", "RF", "Surgical Option"]}
      featuresTitle="Care Methods"
      features={TREATMENTS}
      ctaTitle="일상을 다시 편안하게"
      ctaBody="증상 패턴과 생활 습관을 함께 확인한 뒤, 본인에게 맞는 맞춤 치료 계획을 차분하게 안내해 드립니다."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
