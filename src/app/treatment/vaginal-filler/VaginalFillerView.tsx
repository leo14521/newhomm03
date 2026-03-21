"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";

const FILLER_POINTS = [
  {
    title: "볼륨 보강",
    description: "부족한 볼륨을 보강해 편안함과 탄력감을 회복할 수 있도록 설계합니다.",
  },
  {
    title: "건조·위축 개선",
    description: "건조감과 위축으로 인한 불편함을 줄이고 컨디션 회복을 돕습니다.",
  },
  {
    title: "비수술 주사 시술",
    description: "절개 없이 진행되며 일상 복귀 부담이 낮아 빠른 케어가 가능합니다.",
  },
  {
    title: "1:1 프라이빗 진료",
    description: "민감한 상담부터 시술 계획까지 여의사 전담으로 섬세하게 진행합니다.",
  },
];

export default function VaginalFillerView() {
  return (
    <TreatmentExhibitionPage
      heroTitle="Vaginal Filler"
      heroTitleKr="질필러"
      heroDescription="질 건조증·위축 개선과 볼륨·탄력 보강을 위한 필러 시술입니다. 간단한 주사로 부담 없이 케어하며, 여의사 1:1 전담 진료로 프라이빗하게 진행합니다."
      showHeroBackground={false}
      imageIndex={2}
      introTitle="Volume & Comfort Design"
      introBody="질필러는 볼륨만 채우는 시술이 아니라 컨디션과 촉감을 함께 개선하는 섬세한 설계입니다. 오마쥬는 주입 포인트와 용량을 개인 상태에 맞춰 조절해 자연스러운 결과를 추구합니다."
      exhibitionLabel="Women's program · 06"
      exhibitionHeadline="Soft Volume, Elevated Comfort"
      exhibitionBody="건조감·위축으로 인한 불편을 완화하고, 과하지 않은 볼륨감을 통해 자연스러운 만족도를 목표로 합니다. 짧은 시술 시간과 빠른 회복 흐름도 함께 고려합니다."
      keywords={["Filler", "Volume", "Hydration", "Comfort", "Private"]}
      featuresTitle="Filler Curation"
      features={FILLER_POINTS}
      ctaTitle="자연스럽고 섬세한 볼륨 케어"
      ctaBody="상태를 정밀하게 확인한 뒤, 필요한 만큼만 채우는 맞춤 디자인으로 부담은 줄이고 만족도는 높입니다."
      primaryHref="/#curation"
      primaryLabel="상담 예약"
      secondaryHref="/#map"
      secondaryLabel="오시는 길"
    />
  );
}
