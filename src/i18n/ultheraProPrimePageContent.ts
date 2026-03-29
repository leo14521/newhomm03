import type { Locale } from "@/i18n/messages";

export type UltheraPrimeTechItem = {
  num: string;
  en: string;
  title: string;
  sub: string;
  imgPc: string;
  imgWebp: string;
};

export type UltheraProPrimePageContent = {
  heroSubLine1: string;
  heroSubLine2: string;
  heroImageAlt: string;
  introLogoAlt: string;
  introItalicPart1: string;
  introItalicBold1: string;
  introItalicPart2: string;
  introItalicBold2: string;
  introTitleBold: string;
  introDeviceAlt: string;
  techKicker: string;
  techTitle: string;
  techList: UltheraPrimeTechItem[];
  customKicker: string;
  customTitle: string;
  customImageAlt: string;
  customFigcaptionSr: string;
  customH3Line1: string;
  customH3Highlight: string;
  differenceKicker: string;
  differenceTitle: string;
  differenceItems: { title: string; desc: string }[];
  bannerLine1: string;
  bannerLine2: string;
  bannerSvgAlt: string;
  bannerImageAlt: string;
  faqTitlePrefix: string;
  faqTitleSuffix: string;
  faqs: { q: string; a: string }[];
};

const TECH_URLS = [
  {
    num: "01",
    en: "Visual",
    imgPc: "https://skinab.com/img/page/ultherapy-prime/tech-01.png",
    imgWebp: "https://skinab.com/img/page/ultherapy-prime/tech-01.webp",
  },
  {
    num: "02",
    en: "Long-lasting",
    imgPc: "https://skinab.com/img/page/ultherapy-prime/tech-02.png",
    imgWebp: "https://skinab.com/img/page/ultherapy-prime/tech-02.webp",
  },
  {
    num: "03",
    en: "Speedy-Comfort",
    imgPc: "https://skinab.com/img/page/ultherapy-prime/tech-03.png",
    imgWebp: "https://skinab.com/img/page/ultherapy-prime/tech-03.webp",
  },
] as const;

function buildTechList(entries: { title: string; sub: string }[]): UltheraPrimeTechItem[] {
  return TECH_URLS.map((u, i) => ({
    num: u.num,
    en: u.en,
    title: entries[i]!.title,
    sub: entries[i]!.sub,
    imgPc: u.imgPc,
    imgWebp: u.imgWebp,
  }));
}

const ko: UltheraProPrimePageContent = {
  heroSubLine1: "볼수록 단단해지는",
  heroSubLine2: "울쎄라 프라임 리프팅",
  heroImageAlt: "울쎄라 프라임 리프팅",
  introLogoAlt: "오마쥬 X ULTHERAPY PRIME",
  introItalicPart1: "세계가 인정한 ",
  introItalicBold1: "정품,",
  introItalicPart2: " 그 이상의 ",
  introItalicBold2: "강력함",
  introTitleBold: "오마쥬 울쎄라",
  introDeviceAlt: "울쎄라 프라임 장비",
  techKicker: "기존 울쎄라 대비 업그레이드된 기술",
  techTitle: "울쎄라 프라임",
  techList: buildTechList([
    { title: "눈으로 확인하는 명확한 시술 계획, DEEP SEE 기술", sub: "심층 구조를 교차 검증하고 정밀하게 전달" },
    { title: "최대 8mm까지 초음파 관찰로 맞춤 리프팅 설계", sub: "오래 유지되는 탄력과 리프팅 효과" },
    { title: "빠른 피드백으로 통증·불편감 완화에 초점", sub: "시술 만족도와 편안함을 동시에" },
  ]),
  customKicker: "피부 두께·탄력에 맞춘",
  customTitle: "나만을 위한 맞춤 TIP",
  customImageAlt: "트랜스듀서별 맞춤 시술",
  customFigcaptionSr: "깊이별 에너지 분배 안내 이미지",
  customH3Line1: "여러 가지 트랜스듀서로",
  customH3Highlight: "당신에게 맞는 깊이로 시술",
  differenceKicker: "결과의 차이를 보여주는",
  differenceTitle: "오마쥬 울쎄라",
  differenceItems: [
    { title: " 프로세스", desc: "정밀진단과 계획·맞춤 리프팅 시술로 차별화된 효과와 유지력" },
    { title: "1:1 맞춤 상담 디자인", desc: "1:1 맞춤 상담 디자인 구성으로 시술 부위·깊이를 세밀하게 조절" },
    { title: "맞춤 마취·전문의 주치", desc: "맞춤 마취 프로토콜과 전문의 주치로 통증 부담을 줄입니다" },
  ],
  bannerLine1: "볼수록 단단해지는,",
  bannerLine2: "보이는 초음파 리프팅",
  bannerSvgAlt: "울쎄라도 오마쥬에서",
  bannerImageAlt: "울쎄라 프라임 배너",
  faqTitlePrefix: "울쎄라 프라임 ",
  faqTitleSuffix: "Q&A",
  faqs: [
    {
      q: "울쎄라 시술 원리가 어떻게 되나요?",
      a: "초음파 에너지를 SMAS층까지 전달해 조직을 수축·리모델링하고, 시간이 지나며 콜라겐 생성이 촉진되어 탄력 개선을 기대할 수 있습니다. 시술 직후 당김·붓기 등 일시적 반응이 있을 수 있습니다.",
    },
    {
      q: "울쎄라 리프팅 효과는 어떤가요?",
      a: "처짐과 주름 개선, 턱선·이중턱 라인 정리 등에 도움이 될 수 있습니다. 개인차가 있으며 권장 샷 수·깊이는 상담 후 결정합니다.",
    },
    {
      q: "효과는 언제부터인가요?",
      a: "즉각적인 당김감과 함께 1~2개월 전후로 점진적 개선이 나타나는 경우가 많으며, 수개월에 걸쳐 리프팅 효과가 유지·보강되는 경우가 있습니다.",
    },
    {
      q: "볼 패임이 걱정돼요.",
      a: "얼굴 구조와 지방 분포에 따라 시술 깊이·에너지를 조절하는 것이 중요합니다. 1:1 상담에서 골격·지방층을 고려해 개인별 맞춤 시술을 설계합니다.",
    },
    {
      q: "시술 시간은 얼마나 걸리나요?",
      a: "부위·샷 수에 따라 다르며, 상담 후 대략 1시간 전후에서 1시간 30분 내외까지 소요되는 경우가 많습니다.",
    },
    {
      q: "통증은 어느 정도인가요?",
      a: "개인차가 큽니다. 초음파 리프팅 특성상 순간적인 따끔함·온열감이 있을 수 있으며, 마취·쿨링 등으로 편안함을 높이도록 안내드립니다.",
    },
  ],
};

const en: UltheraProPrimePageContent = {
  heroSubLine1: "Firms the more you look",
  heroSubLine2: "Ultherapy Prime lifting",
  heroImageAlt: "Ultherapy Prime lifting",
  introLogoAlt: "Hommage × ULTHERAPY PRIME",
  introItalicPart1: "Globally trusted ",
  introItalicBold1: "authenticity",
  introItalicPart2: "—and more ",
  introItalicBold2: "power",
  introTitleBold: "Hommage Ultherapy",
  introDeviceAlt: "Ultherapy Prime device",
  techKicker: "Upgrades over classic Ultherapy",
  techTitle: "Ultherapy Prime",
  techList: buildTechList([
    { title: "Clear treatment planning you can see—DEEP SEE", sub: "Cross-check depth and deliver precisely" },
    { title: "Custom lifting design with ultrasound imaging up to ~8 mm", sub: "Elasticity and lift designed to last" },
    { title: "Fast feedback focused on comfort", sub: "Satisfaction and ease together" },
  ]),
  customKicker: "Matched to skin thickness & elasticity",
  customTitle: "Custom tips for you",
  customImageAlt: "Transducer-matched treatment depths",
  customFigcaptionSr: "Depth and energy distribution guide",
  customH3Line1: "Multiple transducers",
  customH3Highlight: "Depth tailored to you",
  differenceKicker: "Where outcomes differ",
  differenceTitle: "Hommage Ultherapy",
  differenceItems: [
    { title: "Process", desc: "Diagnostics, planning and customised ultrasound lifting for differentiated durability." },
    { title: "1:1 consult design", desc: "Fine-tune zones and depths from a personalised map." },
    { title: "Anaesthesia & specialist care", desc: "Comfort protocols and physician-led continuity reduce anxiety." },
  ],
  bannerLine1: "Firms the more you look—",
  bannerLine2: "ultrasound lifting you can trust",
  bannerSvgAlt: "Ultherapy at Hommage",
  bannerImageAlt: "Ultherapy Prime banner",
  faqTitlePrefix: "Ultherapy Prime ",
  faqTitleSuffix: "Q&A",
  faqs: [
    {
      q: "How does Ultherapy work?",
      a: "Focused ultrasound reaches the SMAS layer to tighten and remodel; collagen builds over time. Temporary tightness or swelling can occur.",
    },
    {
      q: "What can it improve?",
      a: "May help laxity, lines and jaw/double-chin contour—individual response varies; shots and depth are chosen in consult.",
    },
    {
      q: "When will I see results?",
      a: "Some immediate tightness; gradual change often around 1–2 months, with effects evolving over months.",
    },
    {
      q: "I worry about cheek hollowing.",
      a: "Depth and energy are adjusted to your bone and fat map—personalised in 1:1 planning.",
    },
    {
      q: "How long is the visit?",
      a: "Depends on area and shots—often about an hour to ~90 minutes after planning.",
    },
    {
      q: "How painful is it?",
      a: "Varies; brief pinpricks or warmth are common. We layer anaesthesia and cooling for comfort.",
    },
  ],
};

const ja: UltheraProPrimePageContent = {
  ...en,
  heroSubLine1: "見るほど引き締まる",
  heroSubLine2: "ウルセラ プライム リフティング",
  heroImageAlt: "ウルセラ プライム",
  introItalicPart1: "世界が認めた",
  introItalicBold1: "正規品、",
  introItalicPart2: "その先の",
  introItalicBold2: "力強さ",
  introTitleBold: "オマージュ ウルセラ",
  introDeviceAlt: "ウルセラ プライム 機器",
  techKicker: "従来ウルセラからのアップグレード",
  techTitle: "ウルセラ プライム",
  techList: buildTechList([
    { title: "目で見える計画、DEEP SEE", sub: "深層をクロスチェックし精密に届ける" },
    { title: "最大8mmまでの観察でカスタム設計", sub: "持続しやすいハリとリフト" },
    { title: "快適さにフォーカスしたフィードバック", sub: "満足度と安心を両立" },
  ]),
  customKicker: "肌の厚み・弾力に合わせて",
  customTitle: "あなた専用のカスタムTIP",
  customH3Line1: "複数のトランスデューサーで",
  customH3Highlight: "あなたに合う深さへ",
  differenceKicker: "結果の差が出る",
  differenceTitle: "オマージュ ウルセラ",
  faqTitlePrefix: "ウルセラ プライム ",
};

const zh: UltheraProPrimePageContent = {
  ...en,
  heroSubLine1: "愈看愈紧实",
  heroSubLine2: "Ultherapy Prime 提拉",
  introItalicPart1: "全球认可的",
  introItalicBold1: "正品，",
  introItalicPart2: "更强一层的",
  introItalicBold2: "力量",
  introTitleBold: "Hommage Ultherapy",
  techKicker: "相较经典 Ultherapy 的升级",
  techTitle: "Ultherapy Prime",
  techList: buildTechList([
    { title: "可视化的治疗规划—DEEP SEE", sub: "交叉验证深层并精准传递" },
    { title: "超声观察至约 8 mm 的定制提拉", sub: "更持久的弹性与提拉感" },
    { title: "以舒适为导向的快速反馈", sub: "满意度与轻松感兼顾" },
  ]),
  customKicker: "匹配肤质厚度与弹性",
  customTitle: "专属定制 TIP",
  customH3Line1: "多种换能器",
  customH3Highlight: "按你的深度施打",
  differenceKicker: "结果差异来自",
  differenceTitle: "Hommage Ultherapy",
  faqTitlePrefix: "Ultherapy Prime ",
};

const ru: UltheraProPrimePageContent = {
  ...en,
  heroSubLine1: "Чем смотришь — тем плотнее",
  heroSubLine2: "Ultherapy Prime лифтинг",
  introItalicPart1: "Признанный ",
  introItalicBold1: "стандарт",
  introItalicPart2: " — и больше ",
  introItalicBold2: "мощности",
  introTitleBold: "Hommage Ultherapy",
  techKicker: "Улучшения относительно классики",
  techTitle: "Ultherapy Prime",
  differenceKicker: "Где меняется результат",
  differenceTitle: "Hommage Ultherapy",
  faqTitlePrefix: "Ultherapy Prime ",
};

const byLocale: Record<Locale, UltheraProPrimePageContent> = { ko, en, ja, zh, ru };

export function getUltheraProPrimePageContent(locale: Locale): UltheraProPrimePageContent {
  return byLocale[locale] ?? ko;
}
