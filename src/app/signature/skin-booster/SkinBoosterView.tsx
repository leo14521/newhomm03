"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const SKIN_BOOSTER_FEATURES = [
  {
    title: "피부 장벽 회복 중심 설계",
    description:
      "민감도와 건조도, 염증 후 흔적 상태를 함께 평가하여 과도한 자극 없이 피부 장벽 회복을 우선하는 프로토콜로 진행합니다.",
  },
  {
    title: "결·톤·탄력의 균형 개선",
    description:
      "단순 보습이 아닌 피부결, 톤, 잔탄력까지 입체적으로 개선하도록 시술 간격과 강도를 개인 피부 반응에 맞춰 조절합니다.",
  },
  {
    title: "리쥬란 · 엑소좀 맞춤 큐레이션",
    description:
      "피부 재생이 우선인지, 진정과 컨디션 회복이 우선인지에 따라 리쥬란과 엑소좀을 단독 또는 병합으로 설계합니다.",
  },
  {
    title: "다운타임 최소화 관리",
    description:
      "시술 직후 진정 케어와 회복 안내를 체계적으로 제공해 일상 복귀 부담은 줄이고, 유지력을 높이는 홈케어까지 안내합니다.",
  },
];

export default function SkinBoosterView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Skin Booster"
      heroTitleKr="스킨부스터"
      heroDescription="피부 장벽 회복과 결·톤·탄력 개선을 동시에 설계하는 프리미엄 스킨부스터 프로그램"
      imageIndex={1}
      introTitle="Healthy Skin, Delicately Rebuilt"
      introBody="스킨부스터는 단기적인 광채보다 피부 컨디션의 안정적인 회복을 목표로 해야 합니다. 오마쥬는 피부 상태를 세밀하게 분석해 과하지 않지만 분명한 변화를 설계합니다."
      exhibitionLabel="Booster · Skin"
      exhibitionHeadline="Barrier, Texture, and Lasting Glow"
      exhibitionBody="피부는 개인마다 손상 패턴이 다릅니다. 같은 제품이라도 깊이·용량·주기를 다르게 설계해야 만족도가 올라갑니다. 진정, 재생, 유지까지 연결되는 맞춤 프로토콜을 제안합니다."
      keywords={["Skin", "Barrier", "Texture", "Tone", "Recovery"]}
      featuresTitle="Skin Booster Curation"
      features={SKIN_BOOSTER_FEATURES}
      ctaTitle="내 피부 상태에 맞춘 스킨부스터 설계"
      ctaBody="리쥬란·엑소좀 기반의 맞춤 시술 계획으로 피부 본연의 컨디션을 회복하고, 오래 지속되는 안정적인 결과를 만듭니다."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
