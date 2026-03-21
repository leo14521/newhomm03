"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const FEATURES = [
  {
    title: "전문 시술",
    description: "여성 성형 전문 의료진이 안전하고 정확한 시술을 진행합니다.",
  },
  {
    title: "자연스러운 결과",
    description: "자연스러운 처녀막 재생을 통해 원하는 결과를 얻을 수 있습니다.",
  },
  {
    title: "안전한 시술",
    description: "최신 의료 기술과 장비를 사용하여 안전한 시술을 보장합니다.",
  },
  {
    title: "사후 관리",
    description: "시술 후 전문적인 사후 관리를 통해 최적의 회복을 돕습니다.",
  },
];

export default function HymenRestorationView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Hymen Restoration"
      heroTitleKr="처녀막 재생"
      heroDescription="전문적인 의료진이 안전하고 정확한 처녀막 재생 시술"
      showHeroBackground={false}
      imageIndex={1}
      introTitle="Private Reconstruction"
      introBody="처녀막 재생은 매우 섬세한 판단과 숙련된 술기가 요구되는 시술입니다. 오마쥬는 개인의 상황과 심리적 맥락을 함께 고려한 프라이빗 프로토콜로 안전하고 자연스러운 결과를 설계합니다."
      exhibitionLabel="Women's program · 01"
      exhibitionHeadline="A Quiet Restoration of Confidence"
      exhibitionBody="수술의 목적은 단순한 재현이 아니라, 균형과 안정입니다. 상담부터 회복까지 노출을 최소화한 동선과 여백 있는 안내 방식으로 심리적 부담을 낮추고 집중도 높은 케어를 제공합니다."
      keywords={["Private", "Precision", "Reconstruction", "Healing", "Balance"]}
      featuresTitle="Clinical Features"
      features={FEATURES}
      ctaTitle="조용하고 안전한 프라이빗 케어"
      ctaBody="민감한 시술일수록 디테일과 신뢰가 중요합니다. 의료진과 1:1로 충분히 상담한 뒤, 본인에게 맞는 계획으로 진행하세요."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
