/**
 * HOMMAGE 레퍼런스: 모드별 GNB (WOMEN'S BOUTIQUE / AESTHETIC SUITE)
 */
export type HeaderNavSub = { name: string; link: string };
export type HeaderNavItem = {
  title: string;
  link: string;
  subs?: HeaderNavSub[];
  isHighlight?: boolean;
};

export type HeaderMode = "women" | "aesthetic";

export const HEADER_NAV: Record<HeaderMode, HeaderNavItem[]> = {
  women: [
    {
      title: "WOMEN'S SURGERY",
      link: "/treatment/labiaplasty",
      subs: [
        { name: "여성 성형 소개", link: "#" },
        { name: "소음순 성형", link: "/treatment/labiaplasty" },
        { name: "질 성형", link: "/treatment/vaginal-plasty" },
        { name: "질필러", link: "/treatment/vaginal-filler" },
        { name: "외음부 성형", link: "/treatment/labia-majora#vulva-procedures" },
        { name: "대음순 성형", link: "/treatment/labia-majora" },
      ],
    },
    {
      title: "INTIMATE CARE",
      link: "#",
      subs: [
        { name: "질 타이트닝", link: "/treatment/vaginal-tightening" },
        { name: "요실금 케어", link: "/treatment/urinary-incontinence" },
        { name: "미백 관리", link: "/treatment/intimate-whitening" },
      ],
    },
    { title: "WAXING", link: "#" },
    { title: "EVENT & PACKAGE", link: "#", isHighlight: true },
  ],
  aesthetic: [
    {
      title: "LIFTING",
      link: "/signature/lifting",
    },
    {
      title: "LASER",
      link: "/signature/ulthera",
      subs: [
        { name: "울쎄라피 프라임", link: "/signature/ulthera-pro-prime" },
        { name: "온다", link: "/signature/onda" },
        { name: "튠페이스", link: "/signature/tune-face" },
        { name: "코레지셀핏", link: "/signature/correction-fit" },
      ],
    },
    {
      title: "THREAD",
      link: "/signature/mint-thread",
      subs: [
        { name: "민트", link: "/signature/mint-thread" },
        { name: "실루엣 소프트", link: "/signature/silhouette-soft" },
        { name: "압토스", link: "/signature/aptos" },
      ],
    },
    {
      title: "SIGNATURE",
      link: "/signature/total-erase",
      isHighlight: true,
      subs: [
        { name: "TOTAL ERASE (토탈 이레이즈)", link: "/signature/total-erase" },
        { name: "LINK-FREE BODY (바디)", link: "/signature/link-free-body" },
        { name: "RECOVERY (재생)", link: "/signature/recovery" },
        { name: "줄기세포", link: "/signature/stem-cell" },
      ],
    },
    {
      title: "SKIN BOOSTER",
      link: "/signature/skin-booster",
      subs: [
        { name: "리쥬란", link: "/signature/rejuran" },
        { name: "엑소좀", link: "/signature/exosome" },
      ],
    },
    {
      title: "COLLAGEN BOOSTER",
      link: "/signature/collagen-booster",
      subs: [
        { name: "쥬브젠", link: "/signature/juvegen" },
      ],
    },
    {
      title: "BODY",
      link: "/signature/link-free-body",
      subs: [
        { name: "리뉴비온", link: "/signature/renewvion" },
        { name: "튠바디", link: "/signature/tune-body" },
        { name: "바디필러 (어깨·골반)", link: "/signature/link-free-body#body-filler" },
        { name: "인모드", link: "/signature/inmode" },
      ],
    },
    { title: "EVENT", link: "#" },
  ],
};
