import type { Locale } from "@/i18n/messages";

export type AboutPageCopy = {
  imageAlt: string;
  titleLine1: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  paragraphs: string[];
  directorLine: string;
};

const KO: AboutPageCopy = {
  imageAlt: "오마쥬 철학 비주얼",
  titleLine1: "아름다움은 만들어내는 것이 아니라,",
  titleBefore: "당신 안에 숨겨진 ",
  titleHighlight: "빛",
  titleAfter: "을 발견하는 것입니다.",
  paragraphs: [
    "오마쥬 의원은 진부한 공장형 시술을 단호히 거부합니다. 우리는 당신의 고유한 얼굴이 지닌 서사에 집중합니다.",
    "마치 갤러리에서 유일한 예술 작품을 감상하듯,\n오직 당신만을 위한 프라이빗하고 깊이 있는 의학적 큐레이션을 경험해 보세요.",
    "시간이 흘러도 변치 않는 가치,\n본연의 우아함을 찾아드리는 여정을 약속합니다.",
  ],
  directorLine: "Park Yuna, Representative Director, Hommage Clinic",
};

const EN: AboutPageCopy = {
  imageAlt: "Hommage philosophy visual",
  titleLine1: "Beauty is not something we create—",
  titleBefore: "it is the hidden ",
  titleHighlight: "light",
  titleAfter: " within you that we help you see.",
  paragraphs: [
    "Hommage rejects factory-style, one-size-fits-all treatments. We focus on the unique story your face already tells.",
    "Like viewing a single masterpiece in a private gallery,\nexperience medical curation designed only for you—deep, discreet, and personal.",
    "We walk with you toward lasting value and\nthe quiet elegance that was yours all along.",
  ],
  directorLine: "Park Yuna, Representative Director, Hommage Clinic",
};

const JA: AboutPageCopy = {
  imageAlt: "オマージュの哲学ビジュアル",
  titleLine1: "美しさは作り出すものではなく、",
  titleBefore: "あなたの内側に眠る",
  titleHighlight: "光",
  titleAfter: "を一緒に見つけることです。",
  paragraphs: [
    "オマージュは画一的な工場型施術を拒み、あなたの顔が持つ唯一の物語に焦点を当てます。",
    "プライベートギャラリーで傑作を鑑賞するように、\nあなただけのための深く静かな医学的キュレーションを体験してください。",
    "時が経っても色あせない価値と、\n本来のエレガンスへ伴走します。",
  ],
  directorLine: "朴ユナ 院長、オマージュクリニック",
};

const ZH: AboutPageCopy = {
  imageAlt: "Hommage 品牌理念视觉",
  titleLine1: "美不是被制造出来的，",
  titleBefore: "而是我们与您一起发现内在的",
  titleHighlight: "光",
  titleAfter: "。",
  paragraphs: [
    "Hommage 拒绝流水线式治疗，我们关注您面容独特的故事。",
    "就像在私人画廊欣赏唯一杰作，\n体验只为您的、深入而私密的医学策展。",
    "我们陪伴您走向经得起时间考验的价值，\n与本就属于您的从容优雅。",
  ],
  directorLine: "朴裕娜 院长，Hommage 诊所",
};

const RU: AboutPageCopy = {
  imageAlt: "Визуал концепции Hommage",
  titleLine1: "Красота — не то, что мы создаём с нуля,",
  titleBefore: "а ",
  titleHighlight: "свет",
  titleAfter: ", который мы помогаем обнаружить внутри вас.",
  paragraphs: [
    "Hommage отказывается от конвейерных процедур. Мы сосредоточены на уникальной истории вашего лица.",
    "Как у единственного шедевра в частной галерее —\nглубокая, деликатная и персональная медицинская курация только для вас.",
    "Мы идём с вами к устойчивой ценности и\nтихой элегантности, которая всегда была вашей.",
  ],
  directorLine: "Пак Юна, главный врач, клиника Hommage",
};

export const ABOUT_PAGE_BY_LOCALE: Record<Locale, AboutPageCopy> = {
  ko: KO,
  en: EN,
  ja: JA,
  zh: ZH,
  ru: RU,
};
