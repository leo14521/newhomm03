/**
 * HOMMAGE: 사이드바 sb-nav (sb-btn-link + sb-circle + sb-label, sb-divider)
 * 그룹 사이에 sb-divider 표시
 */
export type SidebarLink = {
  label: string;
  href: string;
  icon: string;
  highlight?: boolean;
};

export const SIDEBAR_GROUPS: SidebarLink[][] = [
  [
    { label: "전화상담", href: "tel:02-543-4842", icon: "phone-alt" },
    { label: "카톡상담", href: "#", icon: "comment" },
    { label: "네이버예약", href: "#", icon: "calendar-check", highlight: true },
  ],
  [
    { label: "블로그", href: "#", icon: "pen-square" },
    { label: "인스타그램", href: "#", icon: "instagram" },
    { label: "유튜브", href: "#", icon: "youtube" },
  ],
  [
    { label: "위챗", href: "#", icon: "weixin" },
    { label: "라인", href: "#", icon: "line" },
    { label: "왓츠앱", href: "#", icon: "whatsapp" },
  ],
  [{ label: "오시는길", href: "/about/location", icon: "map-marker-alt" }],
];
