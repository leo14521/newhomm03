"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const COLLAGEN_FEATURES = [
  {
    title: "콜라겐 생성 활성화",
    description:
      "피부 속 콜라겐 재생 사이클을 자극해 꺼짐, 깊은 주름, 탄력 저하를 단계적으로 완화하도록 설계합니다.",
  },
  {
    title: "쥬브젠 중심의 정밀 주입",
    description:
      "주입 포인트와 용량을 세밀하게 조절해 함몰 부위의 볼륨 회복과 피부결 개선이 함께 나타나도록 유도합니다.",
  },
  {
    title: "자연스러운 볼륨 밸런스",
    description:
      "과도한 팽창보다 얼굴 전체의 균형을 우선해, 표정 변화가 자연스러운 범위 내에서 개선을 목표로 합니다.",
  },
  {
    title: "장기 유지 전략",
    description:
      "1회 시술 결과에 그치지 않도록 피부 반응에 맞춘 유지 주기와 병합 케어 플랜을 함께 제안합니다.",
  },
];

export default function CollagenBoosterView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Collagen Booster"
      heroTitleKr="콜라겐부스터"
      heroDescription="꺼짐·주름·탄력 저하를 정밀하게 개선하는 콜라겐 재생 중심 프로그램"
      imageIndex={3}
      introTitle="Structured Collagen Renewal"
      introBody="콜라겐부스터는 즉각적인 볼륨감보다 시간이 지날수록 안정적으로 좋아지는 재생 흐름이 중요합니다. 오마쥬는 피부층별 반응을 고려한 정밀 설계를 지향합니다."
      exhibitionLabel="Booster · Collagen"
      exhibitionHeadline="Depth Recovery, Naturally Refined"
      exhibitionBody="깊은 주름과 함몰 부위는 표면만 다뤄서는 개선이 어렵습니다. 쥬브젠을 중심으로 콜라겐 재생 환경을 만들고, 장기 유지를 고려한 단계별 계획으로 완성도를 높입니다."
      keywords={["Collagen", "Volume", "Regeneration", "Wrinkle", "Precision"]}
      featuresTitle="Collagen Booster Curation"
      features={COLLAGEN_FEATURES}
      ctaTitle="콜라겐 재생 중심의 맞춤 안티에이징"
      ctaBody="피부 상태를 기반으로 한 맞춤 계획으로, 과하지 않으면서도 분명한 변화가 이어지는 콜라겐부스터를 제안합니다."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
