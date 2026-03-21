"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const METHODS = [
  {
    title: "레이저 미백",
    description: "비침습 레이저를 이용하여 멜라닌 색소를 제거하고 자연스러운 미백 효과를 제공합니다.",
  },
  {
    title: "고주파 미백",
    description: "고주파 에너지를 이용하여 피부 재생을 촉진하고 미백 효과를 제공합니다.",
  },
  {
    title: "비수술 시술",
    description: "수술 없이 레이저와 고주파를 활용하여 안전하고 효과적인 미백을 제공합니다.",
  },
  {
    title: "자연스러운 결과",
    description: "자연스러운 미백 효과로 자신감 있는 삶을 만들어드립니다.",
  },
];

export default function IntimateWhiteningView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Intimate Whitening"
      heroTitleKr="인티메이트 미백"
      heroDescription="레이저와 고주파를 활용한 전문적인 인티메이트 미백 시술"
      showHeroBackground={false}
      imageIndex={4}
      introTitle="Tone Balancing Program"
      introBody="인티메이트 미백은 단순히 톤을 밝게 만드는 시술이 아니라, 피부 상태·자극 이력·색소 양상을 함께 읽어내는 정밀 케어입니다. 오마쥬는 밝기보다 조화로운 결과를 목표로 큐레이션합니다."
      exhibitionLabel="Women's program · 02"
      exhibitionHeadline="Light, Refined. Never Overdone."
      exhibitionBody="과한 대비보다 자연스러운 톤 업, 빠른 결과보다 안정적인 경과를 지향합니다. 시술 강도와 템포를 단계적으로 조정해 일상 복귀와 만족도를 모두 고려합니다."
      keywords={["Whitening", "Tone", "Refined", "Non-surgical", "Harmony"]}
      featuresTitle="Whitening Methods"
      features={METHODS}
      ctaTitle="밝기보다 조화로운 미백"
      ctaBody="피부의 현재 상태를 충분히 분석한 뒤, 자극을 최소화한 맞춤 계획으로 자연스럽고 깔끔한 인상을 완성합니다."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
