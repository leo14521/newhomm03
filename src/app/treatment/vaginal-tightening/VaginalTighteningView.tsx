"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const METHODS = [
  {
    title: "비비브 1.0",
    description: "고주파 기반 질 타이트닝 장비로, 초기 이완 개선과 점막 탄력 회복에 유용한 베이직 프로토콜을 제공합니다.",
  },
  {
    title: "비비브 2.0",
    description: "업그레이드된 에너지 제어로 조직 반응을 더 정밀하게 유도하며, 탄력 저하·건조감 개선을 보다 안정적으로 설계합니다.",
  },
  {
    title: "질쎄라",
    description: "초음파 에너지를 이용해 질벽 깊은 층까지 자극하여 탄성 구조를 리모델링하고 타이트닝 유지력을 높입니다.",
  },
  {
    title: "리비브",
    description: "질 점막 컨디션 회복과 촉감 개선을 목표로 하는 장비로, 타이트닝 프로그램과 병행 시 만족도를 높이는 데 도움을 줍니다.",
  },
  {
    title: "질소노케어",
    description: "초음파 기반 케어 장비로 조직 상태를 섬세하게 관리하며, 시술 간 간격에서도 안정적인 컨디션 유지를 돕습니다.",
  },
  {
    title: "질압측정기",
    description: "정량화된 질압 데이터를 기반으로 현재 상태를 객관적으로 확인하고, 개인별 시술 강도·횟수를 정밀하게 결정합니다.",
  },
];

export default function VaginalTighteningView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Vaginal Tightening"
      heroTitleKr="질 타이트닝"
      heroDescription="레이저와 고주파를 활용한 비수술 질 타이트닝 시술"
      showHeroBackground={false}
      imageIndex={2}
      introTitle="Elasticity Reframing"
      introBody="질 타이트닝은 단순 수축이 아니라, 조직 탄성 회복과 컨디션 개선을 함께 설계하는 과정입니다. 오마쥬는 보유 장비를 조합해 개인별 반응에 맞춘 안정적인 변화를 설계합니다."
      exhibitionLabel="Women's program · 03"
      exhibitionHeadline="Structure, Tension, and Grace"
      exhibitionBody="출산 후 변화나 노화로 달라진 감각을 세심하게 분석하고, 비수술 방식으로 부담을 낮춘 프로토콜을 적용합니다. 결과는 자연스럽고, 회복은 담백해야 한다는 기준으로 설계합니다."
      keywords={["Elasticity", "Tightening", "Laser", "RF", "Non-surgical"]}
      featuresTitle="오마쥬 질 타이트닝 보유 장비"
      features={METHODS}
      ctaTitle="자연스럽게 회복되는 탄력 케어"
      ctaBody="일상 리듬을 해치지 않으면서도 확실한 변화를 체감할 수 있도록, 상담부터 단계별 시술 계획까지 섬세하게 안내합니다."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
