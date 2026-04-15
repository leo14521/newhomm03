/**
 * 메뉴 오버레이: 어바웃 오마쥬, 시그니처, 여성성형(통합), 리프팅/스킨/콜라겐
 */
import {
  MENU_OVERLAY_ITEMS_JA,
  MENU_OVERLAY_ITEMS_RU,
  MENU_OVERLAY_ITEMS_ZH,
} from "./menuOverlay.i18n";

export type MenuOverlaySub = { title: string; subtitle: string; link: string; children?: MenuOverlaySub[] };

export type MenuOverlayItem = {
  title: string;
  subtitle: string;
  link: string;
  children?: MenuOverlaySub[];
};

export const MENU_OVERLAY_ITEMS: MenuOverlayItem[] = [
  { title: "About Hommage", subtitle: "어바웃 오마쥬", link: "/about" },
  { title: "이벤트", subtitle: "EVENT", link: "/event" },
  {
    title: "시그니처",
    subtitle: "SIGNATURE",
    link: "/signature/total-erase",
    children: [
      { title: "TOTAL ERASE", subtitle: "토탈 이레이즈", link: "/signature/total-erase" },
      {
        title: "LINK-FREE BODY",
        subtitle: "바디",
        link: "/signature/link-free-body",
        children: [
          { title: "리뉴비온", subtitle: "Renuviron", link: "/signature/renewvion" },
          { title: "바디필러", subtitle: "Body Filler", link: "/signature/link-free-body#body-filler" },
        ],
      },
      { title: "RECOVERY", subtitle: "재생", link: "/signature/recovery" },
    ],
  },
  {
    title: "줄기세포",
    subtitle: "STEM CELL",
    link: "/signature/stem-cell",
  },
  {
    title: "여성성형",
    subtitle: "여성의료 · 인티메이트 케어",
    link: "/treatment/labiaplasty",
    children: [
      { title: "소음순 성형", subtitle: "레이저 소음순", link: "/treatment/labiaplasty" },
      { title: "질 성형", subtitle: "", link: "/treatment/vaginal-plasty" },
      { title: "질 필러", subtitle: "", link: "/treatment/vaginal-filler" },
      { title: "외음부 성형", subtitle: "", link: "/treatment/labia-majora#vulva-procedures" },
      { title: "처녀막 재생", subtitle: "", link: "/treatment/hymen-restoration" },
      { title: "질 타이트닝", subtitle: "", link: "/treatment/vaginal-tightening" },
      { title: "요실금 케어", subtitle: "", link: "/treatment/urinary-incontinence" },
      { title: "미백 관리", subtitle: "", link: "/treatment/intimate-whitening" },
    ],
  },
  {
    title: "리프팅",
    subtitle: "LIFTING",
    link: "/signature/lifting",
  },
  {
    title: "레이저",
    subtitle: "LASER",
    link: "/signature/ulthera",
    children: [
      { title: "울쎄라피 프라임", subtitle: "ULTHERAPY PRIME", link: "/signature/ulthera-pro-prime" },
      { title: "온다", subtitle: "Onda", link: "/signature/onda" },
      { title: "튠페이스", subtitle: "Tune Face", link: "/signature/tune-face" },
      { title: "코레지셀핏", subtitle: "Correction Fit", link: "/signature/correction-fit" },
    ],
  },
  {
    title: "실",
    subtitle: "THREAD",
    link: "/signature/mint-thread",
    children: [
      { title: "민트", subtitle: "Mint Thread", link: "/signature/mint-thread" },
      { title: "실루엣 소프트", subtitle: "Silhouette Soft", link: "/signature/silhouette-soft" },
      { title: "압토스", subtitle: "Aptos", link: "/signature/aptos" },
    ],
  },
  {
    title: "부스팅",
    subtitle: "BOOSTING",
    link: "/signature/boosting",
    children: [
      { title: "리쥬란 힐러", subtitle: "PDRN 스킨부스터", link: "/signature/rejuran" },
      { title: "리투오", subtitle: "hADM · LITOO", link: "/signature/litoo" },
      { title: "쥬베룩", subtitle: "PLLA + HA", link: "/signature/juvelook" },
      { title: "스킨바이브", subtitle: "SKINVIVE by Juvéderm", link: "/signature/skinvive" },
      { title: "힐로웨이브", subtitle: "듀얼 HA 바이오스티뮬레이터", link: "/signature/hilo-wave" },
      { title: "쥬브젠", subtitle: "자가 진피 재생술", link: "/signature/juvegen" },
      { title: "엑소좀", subtitle: "줄기세포 유래", link: "/signature/exosome" },
    ],
  },
];

export const MENU_FOOTER_SOCIAL = [
  { label: "WeChat", href: "#", icon: "wechat" },
  { label: "Line", href: "#", icon: "line" },
  { label: "Blog", href: "#", icon: "blog" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

/** English menu tree — same links, localised labels */
export const MENU_OVERLAY_ITEMS_EN: MenuOverlayItem[] = [
  { title: "About Hommage", subtitle: "Brand & clinic", link: "/about" },
  { title: "Event", subtitle: "EVENT", link: "/event" },
  {
    title: "Signature",
    subtitle: "SIGNATURE",
    link: "/signature/total-erase",
    children: [
      { title: "TOTAL ERASE", subtitle: "Pigment & texture", link: "/signature/total-erase" },
      {
        title: "LINK-FREE BODY",
        subtitle: "Body contour",
        link: "/signature/link-free-body",
        children: [
          { title: "Renuviron", subtitle: "Body tightening", link: "/signature/renewvion" },
          { title: "Body filler", subtitle: "Volume & line", link: "/signature/link-free-body#body-filler" },
        ],
      },
      { title: "RECOVERY", subtitle: "Regeneration", link: "/signature/recovery" },
    ],
  },
  { title: "Stem cell", subtitle: "STEM CELL", link: "/signature/stem-cell" },
  {
    title: "Women’s aesthetics",
    subtitle: "Intimate & women’s care",
    link: "/treatment/labiaplasty",
    children: [
      { title: "Labiaplasty", subtitle: "Laser labia", link: "/treatment/labiaplasty" },
      { title: "Vaginal rejuvenation", subtitle: "", link: "/treatment/vaginal-plasty" },
      { title: "Vaginal filler", subtitle: "", link: "/treatment/vaginal-filler" },
      { title: "Labia majora", subtitle: "", link: "/treatment/labia-majora#vulva-procedures" },
      { title: "Hymen restoration", subtitle: "", link: "/treatment/hymen-restoration" },
      { title: "Vaginal tightening", subtitle: "", link: "/treatment/vaginal-tightening" },
      { title: "Urinary care", subtitle: "", link: "/treatment/urinary-incontinence" },
      { title: "Intimate brightening", subtitle: "", link: "/treatment/intimate-whitening" },
    ],
  },
  { title: "Lifting", subtitle: "LIFTING", link: "/signature/lifting" },
  {
    title: "Laser",
    subtitle: "LASER",
    link: "/signature/ulthera",
    children: [
      { title: "ULTHERAPY PRIME", subtitle: "Ultrasound lifting", link: "/signature/ulthera-pro-prime" },
      { title: "Onda", subtitle: "Microwave body & face", link: "/signature/onda" },
      { title: "Tune Face", subtitle: "RF lifting", link: "/signature/tune-face" },
      { title: "Correction Fit", subtitle: "Cell synergy", link: "/signature/correction-fit" },
    ],
  },
  {
    title: "Threads",
    subtitle: "THREAD",
    link: "/signature/mint-thread",
    children: [
      { title: "Mint", subtitle: "PDO threads", link: "/signature/mint-thread" },
      { title: "Silhouette Soft", subtitle: "Bidirectional", link: "/signature/silhouette-soft" },
      { title: "Aptos", subtitle: "Threads", link: "/signature/aptos" },
    ],
  },
  {
    title: "Boosting",
    subtitle: "BOOSTING",
    link: "/signature/boosting",
    children: [
      { title: "Rejuran Healer", subtitle: "PDRN skin booster", link: "/signature/rejuran" },
      { title: "Litoo", subtitle: "hADM dermal matrix", link: "/signature/litoo" },
      { title: "Juvelook", subtitle: "PLLA + HA collagen", link: "/signature/juvelook" },
      { title: "SKINVIVE", subtitle: "Micro-droplet HA (Juvéderm)", link: "/signature/skinvive" },
      { title: "Hilo Wave", subtitle: "Dual HA biostimulator", link: "/signature/hilo-wave" },
      { title: "Juvegen", subtitle: "Autologous dermal regeneration", link: "/signature/juvegen" },
      { title: "Exosome", subtitle: "Stem-cell derived", link: "/signature/exosome" },
    ],
  },
];

export type MenuLocale = "ko" | "en" | "ja" | "zh" | "ru";

export function getMenuOverlayItems(locale: MenuLocale): MenuOverlayItem[] {
  switch (locale) {
    case "ko":
      return MENU_OVERLAY_ITEMS;
    case "en":
      return MENU_OVERLAY_ITEMS_EN;
    case "ja":
      return MENU_OVERLAY_ITEMS_JA;
    case "zh":
      return MENU_OVERLAY_ITEMS_ZH;
    case "ru":
      return MENU_OVERLAY_ITEMS_RU;
    default:
      return MENU_OVERLAY_ITEMS_EN;
  }
}
