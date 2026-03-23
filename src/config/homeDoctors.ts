/** 의료진 — 홈 시그니처 섹션 (한국어 기본) */

export type HomeDoctor = {
  id: string;
  position: string;
  nameKo: string;
  nameEn: string;
  image: string;
  catchCopy: string;
  points: string[];
  oneLiner: string;
  instagram: string;
  youtube: string;
};

export const HOME_DOCTORS: HomeDoctor[] = [
  {
    id: "park",
    position: "원장",
    nameKo: "박유나",
    nameEn: "Park Yuna",
    image: "/dr-park.jpg",
    catchCopy: "산부인과 진료와 소음순 성형의 전문가\n박유나 원장",
    points: [
      "산부인과 전문의로서 여성 건강과 아름다움을 함께 케어합니다.",
      "소음순 성형·여성건강 시술로 많은 분의 만족을 이끌어 온 원장.",
      "편안한 상담과 정확한 진단으로 당신만의 솔루션을 제안합니다.",
    ],
    oneLiner: "당신의 이야기를 듣고, 함께 결정해 나가겠습니다.",
    instagram: "#",
    youtube: "#",
  },
  {
    id: "kim",
    position: "부원장",
    nameKo: "김현빈",
    nameEn: "Kim Hyunbin",
    image: "/dr-kim.jpg",
    catchCopy: "피부과 시술의 전문가\n김현빈 부원장",
    points: [
      "피부과 시술 전담 부원장으로 리프팅·보톡스·필러·레이저 등 다수의 시술 경험.",
      "피부 재생·모공·흉터·미백 등 맞춤 케어로 자연스러운 결과를 추구합니다.",
      "상담부터 시술까지 꼼꼼하고 세심하게 케어합니다.",
    ],
    oneLiner: "당신의 피부 고민을 이해하고, 가장 적합한 방법을 제안합니다.",
    instagram: "#",
    youtube: "#",
  },
];
