/**
 * 홈페이지 콘텐츠·이미지 중앙 설정 (추후 수정용 분류)
 * - 실감 나는 카피: 환자가 "여기서 받아야겠다" 느끼도록 구체적 정보
 * - 이미지: 실제 클리닉(청담피부과·청담산부인과 등) 수집 이미지, 진료과목별 분류
 * - 애니메이션: 섹션별 on/off·지연 가능
 *
 * 수정 시: 이 파일과 homePage.ts에서 해당 키 검색 후 교체
 */

export const CONTENT_SECTIONS = {
  /** Philosophy — 신뢰·차별화 한 줄 */
  philosophy: {
    /** 화면 너비별 줄바꿈 — 렌더 시 `\n` 기준 분리 */
    headline:
      "아름다움은 만들어내는 것이 아니라,\n당신 안에 숨겨진 빛을\n발견하는 것입니다.",
    paragraphs: [
      {
        compact:
          "오마쥬 의원은 진부한 공장형 시술을 단호히 거부합니다. 우리는 당신의 고유한 얼굴이 지닌 서사에 집중합니다.",
        desktopLines: [
          "오마쥬 의원은 진부한 공장형 시술을 단호히 거부합니다.",
          "우리는 당신의 고유한 얼굴이 지닌 서사에 집중합니다.",
        ],
      },
      {
        compact:
          "마치 갤러리에서 유일한 예술 작품을 감상하듯, 오직 당신만을 위한 프라이빗하고 깊이 있는 의학적 큐레이션을 경험해 보세요.",
        desktopLines: [
          "마치 갤러리에서 유일한 예술 작품을 감상하듯,",
          "오직 당신만을 위한 프라이빗하고 깊이 있는 의학적 큐레이션을 경험해 보세요.",
        ],
      },
      {
        compact:
          "시간이 흘러도 변치 않는 가치, 본연의 우아함을 찾아드리는 여정을 약속합니다.",
        desktopLines: [
          "시간이 흘러도 변치 않는 가치,",
          "본연의 우아함을 찾아드리는 여정을 약속합니다.",
        ],
      },
    ],
    image: "/images/clinic/main/05.jpg",
    imageAlt: "클리닉 상담 (오마쥬 진료과목별 분류)",
  },

  /** 대표 시술 — 구체적 키워드로 검색 유도 */
  rep: {
    subhead: "REPRESENTATIVE",
    head: "오마쥬 대표 시술",
    lead: "검증된 장비와 프로토콜로, 리프팅·스킨·바디·여성 케어까지 한 곳에서.",
  },

  /** 숫자 인포 — 실감 나는 수치 (추후 실제 숫자로 교체) */
  stats: {
    items: [
      { num: "2", unit: "인", label: "전문의 원장", sub: "산부인과·피부과 협진 진료" },
      { num: "5", unit: "단계", label: "케어 단계", sub: "초진 상담 → 진찰·검사 → 시술 설계·준비 → 시술·처치 → 경과·애프터케어" },
      { num: "25", unit: "년", label: "원장 경력", sub: "산부인과·여성성형·피부관리 전문" },
      { num: "30", unit: "K+", label: "누적 케어", sub: "맞춤 설계 데이터 기반" },
    ],
  },

  /** 큐레이션 — 환자 관점 문장 */
  curation: {
    subhead: "PRIVATE CURATION",
    head: "당신에게 필요한 솔루션",
    lead: "고민 부위와 목표에 맞춘 시술 조합을 제안합니다. 여성 케어와 피부·바디를 한 번에.",
  },

  /** Knowhow — 구체적 과정 */
  knowhow: {
    subhead: "HOMMAGE EXPERTISE",
    head: "독보적인 시술 노하우",
    panels: [
      {
        num: "01",
        title: "커스텀 디자인 리프팅",
        desc: "골격·피부 두께·근육 움직임을 3D로 분석해 이상적인 리프팅 벡터를 설계합니다. 울쎄라·온다·튠페이스 조합으로 1회 만에 만족도 높은 결과를 목표로 합니다.",
      },
      {
        num: "02",
        title: "통증 최소화 솔루션",
        desc: "3단계 마취와 쿨링으로 시술 중 통증과 시술 후 붓기를 줄였습니다. 당일 일상 복귀가 가능한 프로토콜을 적용합니다.",
      },
      {
        num: "03",
        title: "프리미엄 애프터 케어",
        desc: "시술 효과 극대화와 빠른 회복을 위해 LDM 물방울 리프팅·재생 레이저 관리를 무상 제공합니다. 재방문 시 피부 상태를 함께 점검합니다.",
      },
    ],
    backgroundImage: "/images/clinic/interior/01.jpg",
  },

  /** Care — 단계별로 신뢰 */
  care: {
    subhead: "CARE SYSTEM",
    head: "오마쥬 케어 시스템",
    items: [
      {
        num: "01",
        title: "초진·맞춤 상담",
        desc: "예약 시간에 맞춰 문진·병력을 확인하고, 산부인과·피부 고민에 맞는 진료 방향을 1:1로 안내합니다.",
      },
      {
        num: "02",
        title: "진찰·필요 검사",
        desc: "전문의 진찰로 상태를 평가하고, 필요 시 부인과·피부과적 검사를 진행합니다.",
      },
      {
        num: "03",
        title: "시술 설계·준비",
        desc: "치료·시술 계획을 확정하고 동의를 거친 뒤, 멸균·소독 등 시술 전 준비를 진행합니다.",
      },
      {
        num: "04",
        title: "시술·처치",
        desc: "확정된 계획에 따라 시술·처치를 진행하며, 필요 시 국소·침윤 마취 등으로 통증을 완화합니다.",
      },
      {
        num: "05",
        title: "경과 관찰·애프터케어",
        desc: "시술 직후 상태를 확인하고, 회복 가이드와 재방문·경과 관찰 일정을 안내합니다.",
      },
    ],
  },
} as const;

/**
 * 주제별 이미지 풀 (실제 클리닉 이미지, public/images/clinic/ 로컬 경로)
 * 분류: clinic(클리닉 인테리어), consultation(상담), skin(피부시술), women(여성케어), body(바디), trust(신뢰/팀)
 */
/** 오마쥬 진료과목·페이지별 이미지 풀 (download-clinic-images.mjs 실행 후 저장) */
export const IMAGE_POOL = {
  clinic: [
    "/images/clinic/interior/01.jpg",
    "/images/clinic/interior/02.jpg",
    "/images/clinic/interior/03.jpg",
  ],
  consultation: [
    "/images/clinic/main/05.jpg",
    "/images/clinic/main/02.jpg",
  ],
  skin: [
    "/images/clinic/lifting/01.jpg",
    "/images/clinic/skin-booster/01.jpg",
    "/images/clinic/device/01.jpg",
    "/images/clinic/illustration/01.jpg",
  ],
  women: [
    "/images/clinic/women-care/01.jpg",
    "/images/clinic/women-care/02.jpg",
    "/images/clinic/women-care/03.jpg",
  ],
  body: [
    "/images/clinic/body/01.jpg",
    "/images/clinic/device/02.jpg",
  ],
  trust: [
    "/images/clinic/main/05.jpg",
    "/images/clinic/interior/01.jpg",
  ],
} as const;

/** 스크롤 애니메이션 설정 — 섹션별 켜기/끄기·지연(초) */
export const SCROLL_ANIMATION = {
  philosophy: { enabled: true, delay: 0.1, y: 40 },
  rep: { enabled: true, delay: 0.05, stagger: 0.08 },
  stats: { enabled: true, delay: 0, stagger: 0.1 },
  curation: { enabled: true, delay: 0.05, stagger: 0.1 },
  knowhow: { enabled: true, delay: 0, stagger: 0.12 },
  care: { enabled: true, delay: 0, stagger: 0.08 },
  media: { enabled: true, delay: 0.1 },
  form: { enabled: true, delay: 0.1 },
} as const;
