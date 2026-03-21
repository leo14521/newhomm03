/**
 * 블랑드비 UX 벤치마킹: GNB / Aside / Total(모바일) 공통 메뉴 데이터
 * 구조: depth01 (1depth) + depth (2depth), 2depth는 p(영문) + em(한글)
 */
export type NavDepthItem = { label: string; sub: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavDepthItem[];
  /** 마지막 항목: 홈/브랜치 (globe 아이콘 + 텍스트), children 없음 */
  isBranch?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Brand Story", sub: "브랜드스토리", href: "/about" },
      { label: "Doctor", sub: "의료진", href: "/about/doctor" },
      { label: "Gallery", sub: "갤러리", href: "/about/gallery" },
      { label: "Location", sub: "오시는길", href: "/about/location" },
    ],
  },
  {
    label: "BDV Signature",
    href: "/signature",
    children: [
      { label: "Sculpting Injection", sub: "조각주사", href: "/signature/sculpting" },
      { label: "Easy Thread Lifting", sub: "이지실리프팅", href: "/signature/easythread" },
      { label: "Titanium Lifting", sub: "티타늄리프팅", href: "/signature/titanium" },
      { label: "Quattro Lifting", sub: "콰트로리프팅", href: "/signature/quattro" },
      { label: "One-day Extreme Lifting", sub: "원데이익스트림리프팅", href: "/signature/oneday" },
      { label: "B Toning", sub: "B토닝", href: "/signature/btoning" },
    ],
  },
  {
    label: "Customizing",
    href: "/customizing",
    children: [
      { label: "Customizing", sub: "커스터마이징", href: "/customizing" },
      { label: "Lifting", sub: "리프팅", href: "/customizing#lifting" },
      { label: "Brightening", sub: "미백", href: "/customizing#brightening" },
      { label: "Skin Rejuvenation", sub: "피부재생", href: "/customizing#skin" },
      { label: "Pore / Scar", sub: "모공/흉터", href: "/customizing#pore" },
      { label: "Body Contouring", sub: "바디컨투어링", href: "/customizing#contouring" },
      { label: "Skin Care Program", sub: "스킨케어 프로그램", href: "/customizing#skincare" },
      { label: "Circulation", sub: "순환 프로그램", href: "/customizing#circulation" },
      { label: "Stem Cell", sub: "항노화 안티에이징 시술", href: "/customizing#stem" },
      { label: "Petit", sub: "쁘띠시술", href: "/customizing#petit" },
    ],
  },
  {
    label: "BDV Channel",
    href: "/channel",
    children: [
      { label: "Blog", sub: "블로그", href: "/channel" },
      { label: "Instagram", sub: "인스타그램", href: "/channel/instagram" },
      { label: "Youtube", sub: "유튜브", href: "/channel/youtube" },
      { label: "Media", sub: "언론보도", href: "/channel/media" },
    ],
  },
  {
    label: "Community",
    href: "/community",
    children: [
      { label: "Notice", sub: "공지사항", href: "/community/notice" },
      { label: "News", sub: "소식", href: "/community/news" },
      { label: "Contact Us", sub: "상담 및 예약", href: "/community/contact" },
      { label: "Membership", sub: "블랑드비 멤버십", href: "/community/membership" },
      { label: "Stars", sub: "셀러브리티", href: "/community/stars" },
    ],
  },
  {
    label: "Promotion",
    href: "/promotion",
    children: [
      { label: "Monthly Event", sub: "정기 이벤트", href: "/promotion" },
      { label: "Spot Event", sub: "스팟 이벤트", href: "/promotion/spot" },
    ],
  },
  {
    label: "HOMMAGE",
    href: "/",
    isBranch: true,
  },
];
