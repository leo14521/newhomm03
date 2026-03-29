/**
 * index.html 이식용 메인 페이지 데이터
 */

export type HeroSlide = {
  image: string;
  alt: string;
  subtitle: string;
  titleLines: string[];
  /** 강조 단어 (이탤릭, 골드) */
  highlightWord?: string;
  /** 강조 없이 이탤릭만 (예: Specialist) */
  italicWord?: string;
  cta: string;
  ctaHref: string;
};

/** 메인 히어로 슬라이드 — 로컬 클리닉 이미지만 사용 (main, philosophy, consultation, interior) */
export const HERO_SLIDES: HeroSlide[] = [
  {
    image: "/images/clinic/main/01.jpg",
    alt: "Consultation",
    subtitle: "AI PERSONAL ANALYSIS",
    titleLines: ["당신만을 위한", "미학적 설계"],
    highlightWord: "Perfect",
    cta: "나의 예상 견적 확인하기",
    ctaHref: "#",
  },
  {
    image: "/images/clinic/main/02.jpg",
    alt: "Medical Team",
    subtitle: "MASTER MEDICAL TEAM",
    titleLines: ["정직한 진료,", "검증된"],
    italicWord: "Specialist",
    cta: "의료진 소개 바로가기",
    ctaHref: "#",
  },
  {
    image: "/images/clinic/main/03.jpg",
    alt: "Philosophy",
    subtitle: "OUR PHILOSOPHY",
    titleLines: ["본연의 아름다움을", "깨우는"],
    highlightWord: "Atelier",
    cta: "브랜드 스토리 확인",
    ctaHref: "#",
  },
  {
    image: "/images/clinic/lifting/01.jpg",
    alt: "Signature",
    subtitle: "HOMMAGE SIGNATURE",
    titleLines: ["차원이 다른 깊이,", "리프팅"],
    italicWord: "Link-Free",
    cta: "시그니처 프로그램 보기",
    ctaHref: "#",
  },
  {
    image: "/images/clinic/main/05.jpg",
    alt: "Reservation",
    subtitle: "PRIVATE RESERVATION",
    titleLines: ["기다림 없는 편안함,", "사전 예약"],
    highlightWord: "Private",
    cta: "실시간 예약 바로가기",
    ctaHref: "#",
  },
];

export type CurationCard = {
  title: string;
  desc: string;
  image: string;
  tags: string[];
  highlight?: boolean;
  /** 연결할 페이지 (없으면 #curation) */
  href?: string;
};

/** 큐레이션 — 오마쥬 진료과목별 분류 경로 (lifting, boosting, body, women-care) */
export const CURATION_WOMEN: CurationCard[] = [
  {
    title: "Link-Free Body",
    desc: "[Signature] 절개 없는 바디 라인. 리뉴비온·튠바디·바디필러로 군살과 늘어진 탄력을 한 번에 케어합니다.",
    image: "/images/clinic/body/01.jpg",
    tags: ["리뉴비온", "튠바디", "바디필러"],
    highlight: true,
    href: "/signature/link-free-body",
  },
  {
    title: "Volume & Shape",
    desc: "부족한 볼륨은 필러·쥬브젠으로, 불필요한 지방은 윤곽주사로 정리합니다. 1:1 설계로 자연스러운 라인을 만듭니다.",
    image: "/images/clinic/illustration/01.jpg",
    tags: ["쥬브젠", "필러", "윤곽주사"],
    href: "/signature/juvegen",
  },
  {
    title: "Private Care",
    desc: "여성만을 위한 1인실 케어. 소음순·질·대음순 등 여의사 전담으로 비밀과 회복을 동시에 케어합니다.",
    image: "/images/clinic/women-care/01.jpg",
    tags: ["소음순", "질케어", "여의사"],
    href: "/treatment/labiaplasty",
  },
];

export const CURATION_SKIN: CurationCard[] = [
  {
    title: "Recovery Lifting",
    desc: "[Best] 울쎄라피 프라임·온다·튠페이스로 SMAS층까지 리프팅. 당일 복귀 가능, 3~6개월에 걸쳐 탄력이 유지됩니다.",
    image: "/images/clinic/lifting/01.jpg",
    tags: ["울쎄라피 프라임", "온다", "튠페이스"],
    highlight: true,
    href: "/signature/ulthera-pro-prime",
  },
  {
    title: "Boosting",
    desc: "리쥬란 힐러·리투오·쥬베룩·스킨바이브·힐로웨이브로 진피 수분·재생·볼륨을 단계적으로 설계합니다.",
    image: "/images/clinic/skin-booster/01.jpg",
    tags: ["리쥬란 힐러", "스킨바이브", "힐로웨이브"],
    href: "/signature/boosting",
  },
  {
    title: "Laser Toning",
    desc: "기미·잡티·모공을 시그니처·레이저 케어로 정리합니다. 토탈 이레이즈·코레지셀핏·인모드로 맑은 피부 톤을 목표로 합니다.",
    image: "/images/clinic/device/02.jpg",
    tags: ["토탈 이레이즈", "코레지셀핏", "인모드"],
    href: "/signature/total-erase",
  },
];

/** 대표 시술 — 햄버거 메뉴 1차 카테고리와 동일 (About 제외) */
export const REP_ITEMS = [
  { title: "시그니처", href: "/signature/total-erase", en: "Signature", image: "/images/clinic/lifting/01.jpg" },
  { title: "줄기세포", href: "/signature/stem-cell", en: "Stem Cell", image: "/images/clinic/illustration/01.jpg" },
  { title: "여성성형", href: "/treatment/labiaplasty", en: "Women", image: "/images/clinic/women-care/01.jpg" },
  { title: "리프팅", href: "/signature/lifting", en: "Lifting", image: "/images/clinic/lifting/01.jpg" },
  { title: "레이저", href: "/signature/ulthera", en: "Laser", image: "/images/clinic/device/02.jpg" },
  { title: "실", href: "/signature/mint-thread", en: "Thread", image: "/images/clinic/lifting/02.jpg" },
  { title: "부스팅", href: "/signature/boosting", en: "Boosting", image: "/images/clinic/skin-booster/01.jpg" },
];

/** 숫자 인포그래픽 — homeContent.stats 와 동기화, 실감 나는 수치 */
export const STATS = [
  { num: "2", unit: "인", label: "전문의 원장", sub: "산부인과·피부과 협진 진료" },
  { num: "5", unit: "단계", label: "케어 단계", sub: "초진 상담 → 진찰·검사 → 시술 설계·준비 → 시술·처치 → 경과·애프터케어" },
  { num: "20", unit: "년", label: "원장 경력", sub: "산부인과·여성성형·피부관리 전문" },
  { num: "30", unit: "K+", label: "누적 케어", sub: "맞춤 설계 데이터 기반" },
];

/** Care 시스템 — homeContent.care 와 동기화 */
export const CARE_ITEMS = [
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
];

export const KNOWHOW_PANELS = [
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
];

/** 메인 영상: https://www.youtube.com/watch?v=2WepWxZGZRY */
export const YT_MAIN_ID = "2WepWxZGZRY";
/** 포스터·캡션에 쓰는 한 줄 (메인 영상 기본 선택 시) */
export const YT_MAIN_DISPLAY_CAPTION = "여성 소음순 · 전문의 안내";
/**
 * 메인 영상 전용 디자인 포스터 (public 경로). 예: "/images/youtube/main-poster.jpg"
 * null 이면 해당 영상(YT_MAIN_ID)의 유튜브 썸네일을 포스터로 사용합니다.
 */
export const YT_MAIN_CUSTOM_POSTER: string | null = null;

export type YtListItem = {
  id: string;
  title: string;
  meta: string;
  /** 이 영상 선택 시 포스터로 쓸 커스텀 이미지 (없으면 유튜브 썸네일) */
  posterSrc?: string | null;
};

/**
 * 사이드 3개 (watch URL과 동일 ID)
 * 1 https://www.youtube.com/watch?v=PoJPZTYNS-Y
 * 2 https://www.youtube.com/watch?v=ga0EoHbIAlo
 * 3 https://www.youtube.com/watch?v=R6S6O1bxPaA
 */
export const YT_VIDEOS: YtListItem[] = [
  {
    id: "PoJPZTYNS-Y",
    title: "난치성 질환의 치료 및 항노화의 솔루션~~ 바로 줄기세포!!",
    meta: "슬기로운 여성생활",
  },
  { id: "ga0EoHbIAlo", title: "내 피부에도 힐링이 필요해! 코레지 셀럽을 알아보자~", meta: "슬기로운 여성생활" },
  {
    id: "R6S6O1bxPaA",
    title: "요실금수술과 질성형을 한꺼번에~",
    meta: "슬기로운 여성생활",
  },
];
