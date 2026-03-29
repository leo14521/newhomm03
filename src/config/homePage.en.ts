import type { YtListItem } from "@/config/homePage";

/** English mirrors for homePage when locale === "en" (curation cards + YouTube list) */

export const CURATION_WOMEN_EN = [
  {
    title: "Link-Free Body",
    desc: "Non-surgical body contouring. Renuviron, Tune Body, and body filler address laxity and line in one programme.",
    image: "/images/clinic/body/01.jpg",
    tags: ["Renuviron", "Tune Body", "Body filler"],
    highlight: true,
    href: "/signature/link-free-body",
  },
  {
    title: "Volume & shape",
    desc: "Juvegen and fillers restore volume; contour injections refine where needed. 1:1 design for natural lines.",
    image: "/images/clinic/illustration/01.jpg",
    tags: ["Juvegen", "Filler", "Contour"],
    href: "/signature/juvegen",
  },
  {
    title: "Private care",
    desc: "Women-only private suites. OB-GYN-led intimate procedures including labia and vaginal health.",
    image: "/images/clinic/women-care/01.jpg",
    tags: ["Labia", "Vaginal care", "Female MD"],
    href: "/treatment/labiaplasty",
  },
];

export const CURATION_SKIN_EN = [
  {
    title: "Recovery lifting",
    desc: "ULTHERAPY PRIME, Onda, Tune Face for SMAS-level lifting. Often same-day return; elasticity improves over 3–6 months.",
    image: "/images/clinic/lifting/01.jpg",
    tags: ["ULTHERAPY PRIME", "Onda", "Tune Face"],
    highlight: true,
    href: "/signature/ulthera-pro-prime",
  },
  {
    title: "Boosting",
    desc: "Rejuran Healer, Litoo, Juvelook, SKINVIVE, and Hilo Wave—hydration, collagen remodelling, and subtle volume in one menu.",
    image: "/images/clinic/skin-booster/01.jpg",
    tags: ["Rejuran Healer", "SKINVIVE", "Hilo Wave"],
    href: "/signature/boosting",
  },
  {
    title: "Laser toning",
    desc: "Signature laser care for melasma, spots, and pores. Total Erase, Correction Fit, InMode for clearer skin.",
    image: "/images/clinic/device/02.jpg",
    tags: ["Total Erase", "Correction Fit", "InMode"],
    href: "/signature/total-erase",
  },
];

export const YT_MAIN_DISPLAY_CAPTION_EN = "Women’s intimate care · Specialist guidance";

export const YT_VIDEOS_EN: YtListItem[] = [
  {
    id: "PoJPZTYNS-Y",
    title: "Stem cells for complex conditions and anti-ageing",
    meta: "Wise women’s health",
  },
  {
    id: "ga0EoHbIAlo",
    title: "Healing your skin—meet Corege Celebrity",
    meta: "Wise women’s health",
  },
  {
    id: "R6S6O1bxPaA",
    title: "Incontinence surgery and vaginal rejuvenation together",
    meta: "Wise women’s health",
  },
];
