import type { Locale } from "@/i18n/messages";

/** 대표 시술 그리드 — 로케일별 표기 (상단 소제목 · 본문) */
export type RepGridItem = {
  href: string;
  image: string;
  lineUpper: string;
  lineMain: string;
};

export const REP_GRID_BY_LOCALE: Record<Locale, RepGridItem[]> = {
  ko: [
    { href: "/signature/total-erase", image: "/images/clinic/lifting/01.jpg", lineUpper: "SIGNATURE", lineMain: "시그니처" },
    { href: "/signature/stem-cell", image: "/images/clinic/illustration/01.jpg", lineUpper: "STEM CELL", lineMain: "줄기세포" },
    { href: "/treatment/labiaplasty", image: "/images/clinic/women-care/01.jpg", lineUpper: "WOMEN", lineMain: "여성성형" },
    { href: "/signature/lifting", image: "/images/clinic/lifting/01.jpg", lineUpper: "LIFTING", lineMain: "리프팅" },
    { href: "/signature/ulthera", image: "/images/clinic/device/02.jpg", lineUpper: "LASER", lineMain: "레이저" },
    { href: "/signature/mint-thread", image: "/images/clinic/lifting/02.jpg", lineUpper: "THREAD", lineMain: "실" },
    { href: "/signature/juvegen", image: "/images/clinic/skin-booster/01.jpg", lineUpper: "SKIN", lineMain: "피부" },
  ],
  en: [
    { href: "/signature/total-erase", image: "/images/clinic/lifting/01.jpg", lineUpper: "SIGNATURE", lineMain: "Signature" },
    { href: "/signature/stem-cell", image: "/images/clinic/illustration/01.jpg", lineUpper: "STEM CELL", lineMain: "Stem cell" },
    { href: "/treatment/labiaplasty", image: "/images/clinic/women-care/01.jpg", lineUpper: "WOMEN", lineMain: "Women’s aesthetics" },
    { href: "/signature/lifting", image: "/images/clinic/lifting/01.jpg", lineUpper: "LIFTING", lineMain: "Lifting" },
    { href: "/signature/ulthera", image: "/images/clinic/device/02.jpg", lineUpper: "LASER", lineMain: "Laser" },
    { href: "/signature/mint-thread", image: "/images/clinic/lifting/02.jpg", lineUpper: "THREAD", lineMain: "Threads" },
    { href: "/signature/juvegen", image: "/images/clinic/skin-booster/01.jpg", lineUpper: "SKIN", lineMain: "Skin" },
  ],
  ja: [
    { href: "/signature/total-erase", image: "/images/clinic/lifting/01.jpg", lineUpper: "SIGNATURE", lineMain: "シグネチャー" },
    { href: "/signature/stem-cell", image: "/images/clinic/illustration/01.jpg", lineUpper: "STEM CELL", lineMain: "幹細胞" },
    { href: "/treatment/labiaplasty", image: "/images/clinic/women-care/01.jpg", lineUpper: "WOMEN", lineMain: "女性形成・ケア" },
    { href: "/signature/lifting", image: "/images/clinic/lifting/01.jpg", lineUpper: "LIFTING", lineMain: "リフティング" },
    { href: "/signature/ulthera", image: "/images/clinic/device/02.jpg", lineUpper: "LASER", lineMain: "レーザー" },
    { href: "/signature/mint-thread", image: "/images/clinic/lifting/02.jpg", lineUpper: "THREAD", lineMain: "糸リフト" },
    { href: "/signature/juvegen", image: "/images/clinic/skin-booster/01.jpg", lineUpper: "SKIN", lineMain: "スキン" },
  ],
  zh: [
    { href: "/signature/total-erase", image: "/images/clinic/lifting/01.jpg", lineUpper: "SIGNATURE", lineMain: "招牌项目" },
    { href: "/signature/stem-cell", image: "/images/clinic/illustration/01.jpg", lineUpper: "STEM CELL", lineMain: "干细胞" },
    { href: "/treatment/labiaplasty", image: "/images/clinic/women-care/01.jpg", lineUpper: "WOMEN", lineMain: "女性整形" },
    { href: "/signature/lifting", image: "/images/clinic/lifting/01.jpg", lineUpper: "LIFTING", lineMain: "提拉" },
    { href: "/signature/ulthera", image: "/images/clinic/device/02.jpg", lineUpper: "LASER", lineMain: "激光" },
    { href: "/signature/mint-thread", image: "/images/clinic/lifting/02.jpg", lineUpper: "THREAD", lineMain: "线雕" },
    { href: "/signature/juvegen", image: "/images/clinic/skin-booster/01.jpg", lineUpper: "SKIN", lineMain: "皮肤" },
  ],
  ru: [
    { href: "/signature/total-erase", image: "/images/clinic/lifting/01.jpg", lineUpper: "SIGNATURE", lineMain: "Сигнатура" },
    { href: "/signature/stem-cell", image: "/images/clinic/illustration/01.jpg", lineUpper: "STEM CELL", lineMain: "Стволовые клетки" },
    { href: "/treatment/labiaplasty", image: "/images/clinic/women-care/01.jpg", lineUpper: "WOMEN", lineMain: "Женская эстетика" },
    { href: "/signature/lifting", image: "/images/clinic/lifting/01.jpg", lineUpper: "LIFTING", lineMain: "Лифтинг" },
    { href: "/signature/ulthera", image: "/images/clinic/device/02.jpg", lineUpper: "LASER", lineMain: "Лазер" },
    { href: "/signature/mint-thread", image: "/images/clinic/lifting/02.jpg", lineUpper: "THREAD", lineMain: "Нити" },
    { href: "/signature/juvegen", image: "/images/clinic/skin-booster/01.jpg", lineUpper: "SKIN", lineMain: "Кожа" },
  ],
};
