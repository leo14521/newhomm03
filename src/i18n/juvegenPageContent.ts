import type { Locale } from "@/i18n/messages";

export type JuvegenPageContent = {
  heroLine1: string;
  heroLine2: string;
  heroBrand: string;
  tags: string[];
  effectsKicker: string;
  effectsTitle: string;
  effects: { title: string; en: string }[];
  whatKicker: string;
  whatTitle: string;
  whatPara1: { before: string; emphasis: string; after: string };
  whatPara2: string;
  whatDuration: string;
  deviceKicker: string;
  deviceTitle: string;
  deviceLead: string;
  deviceFeatures: { title: string; desc: string }[];
  forYouKicker: string;
  forYouTitle: string;
  recommend: string[];
  faqKicker: string;
  faqTitle: string;
  qna: { q: string; a: string }[];
  cautionKicker: string;
  cautionTitle: string;
  cautionLead: string;
  cautions: string[];
  imgAlt: string;
};

const ko: JuvegenPageContent = {
  heroLine1: "피부 속부터 채워주는",
  heroLine2: "자가 진피 재생술",
  heroBrand: "'JUVGEN(쥬브젠)'",
  tags: ["#자가진피재생술", "#새살이차오르는", "#쥬브젠", "#함몰흉터", "#깊은흉터", "#깊은주름"],
  effectsKicker: "Key Effects",
  effectsTitle: "쥬브젠의 4가지 주요 효과",
  effects: [
    { title: "주름·흉터 개선", en: "Wrinkle & Scar" },
    { title: "콜라겐 재생", en: "Collagen" },
    { title: "비교적 낮은 통증", en: "Low Discomfort" },
    { title: "자연스러운 효과", en: "Natural Result" },
  ],
  whatKicker: "What is it?",
  whatTitle: "자가진피재생술 쥬브젠이란?",
  whatPara1: {
    before: "쥬브젠은 전용 주사 장치로 약 ",
    emphasis: "0.001cc~0.003cc 극미량",
    after: "의 히알루론산을 이산화탄소 가스와 교대로 같은 피부 위치에 주입하여, 물리적, 화학적, 생물학적 반응으로 다량의 콜라겐 생성을 유도합니다.",
  },
  whatPara2: "이 작용으로 피부의 새살이 돋아나 주름과 상처가 채워지는 효과를 기대할 수 있습니다.",
  whatDuration: "시술 시간: 20~30분 소요",
  deviceKicker: "Medical Device",
  deviceTitle: "오마쥬클리닉 쥬브젠 전용 의료기기의 특별함",
  deviceLead: "오마쥬클리닉에서는 쥬브젠 자가 진피 재생술 전용 의료기기를 사용합니다.",
  deviceFeatures: [
    {
      title: "기체와 액체를 하나의 주사기로",
      desc: "듀얼 챔버 시린지를 사용하여 기체와 액체를 하나의 주사 장치로 주입합니다. 동일한 부위에 두 개의 약물을 반복적으로 주입할 수 있습니다.",
    },
    {
      title: "극소량을 단속적으로 (0.001cc)",
      desc: "주입되는 약액의 양을 0.001cc로 조절하여 깊은 주름부터 함몰 흉터까지 다양한 시술이 가능합니다.",
    },
    {
      title: "자동화 기술로 균등한 결과",
      desc: "모니터를 통한 주사량 설정 및 자동 주입으로 보다 손쉽고 정교하게 시술이 가능합니다.",
    },
  ],
  forYouKicker: "For You",
  forYouTitle: "쥬브젠, 이런 분께 추천합니다!",
  recommend: [
    "깊은 흉터, 깊은 주름이 고민이신 분",
    "레이저로도 개선이 잘되지 않으셨던 분",
    "지속적으로 새살이 생성되길 원하시는 분",
    "1회 시술로 빠른 효과를 기대하시는 분",
    "통증이 무서워 시술이 두려우신 분",
    "자연스러운 오랜 시술 효과를 유지하고 싶으신 분",
  ],
  faqKicker: "FAQ",
  faqTitle: "시술 Q&A",
  qna: [
    {
      q: "쥬브젠 자가진피재생술과 쥬베룩의 차이점이 뭔가요?",
      a: "쥬베룩은 콜라겐 스킨부스터의 종류이며, 피부 탄력, 잔주름, 피부결 등 노화된 피부 개선에 효과적입니다. 반면, 쥬브젠 자가진피재생술은 수술로도 해결되지 않는 깊은 주름에 콜라겐 섬유 조직을 생성시켜 깊었던 주름이나 흉터 개선에 도움이 되는 시술입니다.",
    },
    {
      q: "흉터가 생기고 나서 언제부터 쥬브젠 치료가 가능한가요?",
      a: "흉터가 다 아물고 나서 치료가 가능합니다. 패인 흉터가 아물고 새살이 차오르는 데 시간이 걸리기 때문에, 상처 발생 후 6개월 이전에는 시술을 권해드리고 있지 않습니다.",
    },
    {
      q: "시술 진행 시 마취를 하나요?",
      a: "마취는 하지 않습니다. 매우 얇은 특수 주사기를 사용하여 시술이 진행되므로 통증 부담이 적습니다.",
    },
  ],
  cautionKicker: "Cautions",
  cautionTitle: "시술 후 주의사항",
  cautionLead: "관리만큼이나 셀프케어도 효과에 큰 영향을 줍니다. 주의사항을 꼼꼼히 읽은 후, 잘 지켜주세요.",
  cautions: [
    "시술 후 2일 뒤 소독을 받은 이후부터 바로 세안과 화장이 가능합니다.",
    "시술 후 과음, 사우나/찜질방 출입, 열탕 목욕, 격한 운동은 피해 주는 것이 좋습니다.",
    "시술 후 건조함이 동반될 수 있으므로 보습제를 자주 사용해 주시고, 외출 시 선크림을 반드시 바르는 것이 좋습니다.",
    "기타 불편한 사항이 있을 경우 지체 없이 오마쥬클리닉으로 연락 주시기 바랍니다.",
  ],
  imgAlt: "쥬브젠 자가진피재생술",
};

const en: JuvegenPageContent = {
  heroLine1: "Fill from within the skin",
  heroLine2: "Autologous dermal regeneration",
  heroBrand: "'JUVGEN'",
  tags: ["#autologousDermis", "#renewal", "#Juvgen", "#atrophicScar", "#deepScar", "#deepWrinkle"],
  effectsKicker: "Key Effects",
  effectsTitle: "Four focus areas",
  effects: [
    { title: "Wrinkles & scars", en: "Wrinkle & Scar" },
    { title: "Collagen renewal", en: "Collagen" },
    { title: "Relatively gentle", en: "Low Discomfort" },
    { title: "Natural-looking change", en: "Natural Result" },
  ],
  whatKicker: "What is it?",
  whatTitle: "What is Juvgen?",
  whatPara1: {
    before: "A dedicated handpiece alternates ",
    emphasis: "micro-doses (about 0.001–0.003 cc)",
    after: " of hyaluronic acid with CO₂ at the same skin point to trigger physical, chemical and biological cascades that encourage robust collagen response.",
  },
  whatPara2: "The goal is supportive filling of deep lines and atrophic scars as new tissue quality improves over time.",
  whatDuration: "Typical visit: about 20–30 minutes",
  deviceKicker: "Medical Device",
  deviceTitle: "Why our Juvgen device matters",
  deviceLead: "Hommage uses a Juvgen-specific system for this protocol.",
  deviceFeatures: [
    {
      title: "Gas and liquid in one syringe",
      desc: "Dual-chamber design delivers both through one interface for layered passes on the same zone.",
    },
    {
      title: "Micro-boluses down to 0.001 cc",
      desc: "Dosing granularity helps address deep creases and depressed scars with control.",
    },
    {
      title: "Automated delivery",
      desc: "Monitor-guided settings support even, repeatable treatment.",
    },
  ],
  forYouKicker: "For You",
  forYouTitle: "Often chosen when…",
  recommend: [
    "Deep scars or deep wrinkles are the main concern",
    "Laser alone did not meet your goals",
    "You want ongoing tissue-quality improvement",
    "You hope for visible change without many sessions",
    "Needle anxiety is high but you still want results",
    "You prioritise natural, durable improvement",
  ],
  faqKicker: "FAQ",
  faqTitle: "Q&A",
  qna: [
    {
      q: "Juvgen vs Juvelook?",
      a: "Juvelook is a collagen-booster class focused on tone, fine lines and texture. Juvgen targets deeper dermal regeneration where fibrous tissue is needed for deep folds or atrophic scars.",
    },
    {
      q: "How soon after an injury?",
      a: "Only after mature healing—often not before ~6 months from the initial wound; your doctor confirms timing.",
    },
    {
      q: "Do I need anaesthesia?",
      a: "Often none; very fine needles keep discomfort modest for many patients.",
    },
  ],
  cautionKicker: "Cautions",
  cautionTitle: "Aftercare",
  cautionLead: "Home care strongly influences outcomes—please follow clinic guidance.",
  cautions: [
    "After disinfection day 2 onward, cleansing and makeup are usually fine per plan.",
    "Avoid heavy alcohol, sauna, hot baths and intense exercise while healing.",
    "Moisturise often and use SPF outdoors.",
    "Contact the clinic promptly if anything feels wrong.",
  ],
  imgAlt: "Juvgen autologous dermal regeneration",
};

const ja: JuvegenPageContent = {
  ...en,
  heroLine1: "肌の内側から満たす",
  heroLine2: "自家真皮再生",
  heroBrand: "'JUVGEN（ジュブジェン）'",
  tags: ["#自家真皮再生", "#新生", "#ジュブジェン", "#陥没瘢痕", "#深い傷跡", "#深いしわ"],
  effectsTitle: "4つのフォーカス",
  whatTitle: "ジュブジェンとは？",
  whatPara1: {
    before: "専用デバイスで",
    emphasis: "約0.001〜0.003cc",
    after: "のヒアルロン酸とCO₂を同一部位に交互に注入し、コラーゲン反応を誘導します。",
  },
  whatPara2: "深いしわや陥没瘢痕のサポートを目指します。",
  whatDuration: "所要時間：約20〜30分",
  deviceTitle: "専用機器の特徴",
  deviceLead: "オマージュではジュブジェン専用システムを使用します。",
  forYouTitle: "こんな方に",
  recommend: en.recommend,
  faqTitle: "Q&A",
  qna: [
    {
      q: "ジュベルックとの違いは？",
      a: "ジュベルックはブースター系でキメ・小じわ・ハリ。ジュブジェンは深いしわや陥没瘢痕に真皮再生の視点でアプローチします。",
    },
    {
      q: "傷跡からどのくらいで？",
      a: "十分に治癒後—多くの場合外傷後6か月未満は推奨しません。医師が判断します。",
    },
    { q: "麻酔は？", a: "多くの場合不要で、細い針で負担を抑えます。", },
  ],
  cautionTitle: "術後の注意",
  cautionLead: "ホームケアも効果に大きく関わります。",
  cautions: en.cautions,
  imgAlt: "ジュブジェン",
};

const zh: JuvegenPageContent = {
  ...en,
  heroLine1: "由内充盈肌肤",
  heroLine2: "自体真皮再生",
  heroBrand: "'JUVGEN（珠肤臻）'",
  tags: ["#自体真皮再生", "#新生", "#Juvgen", "#凹陷瘢痕", "#深疤", "#深纹"],
  effectsTitle: "四大方向",
  whatTitle: "什么是 Juvgen？",
  whatPara1: {
    before: "专用手柄在同一位置交替注入",
    emphasis: "约 0.001–0.003cc",
    after: "透明质酸与CO₂，激发胶原相关反应。",
  },
  whatPara2: "用于辅助改善深纹与萎缩性瘢痕。",
  whatDuration: "单次约 20–30 分钟",
  deviceTitle: "专用设备特点",
  deviceLead: "Hommage 使用 Juvgen 专用系统。",
  forYouTitle: "适合人群",
  faqTitle: "问答",
  qna: [
    { q: "与 Juvelook 区别？", a: "Juvelook 偏肤质与细纹；Juvgen 面向更深真皮层与萎缩瘢痕需求。", },
    { q: "受伤后多久可做？", a: "需创面成熟后，通常伤后 6 个月内不建议，由医生评估。", },
    { q: "需要麻醉吗？", a: "多数不必，细针减轻不适。", },
  ],
  cautionTitle: "术后注意",
  imgAlt: "Juvgen",
};

const ru: JuvegenPageContent = {
  ...en,
  heroLine1: "Изнутри кожи",
  heroLine2: "Аутологичная регенерация дермы",
  heroBrand: "'JUVGEN'",
  tags: ["#дерма", "#обновление", "#Juvgen", "#рубец", "#глубокиеМорщины"],
  effectsTitle: "Четыре фокуса",
  whatTitle: "Что такое Juvgen?",
  whatPara1: en.whatPara1,
  whatPara2: en.whatPara2,
  deviceTitle: "Особенности аппарата",
  deviceLead: "В Hommage используется выделенная система Juvgen.",
  forYouTitle: "Кому подходит",
  faqTitle: "Вопросы",
  imgAlt: "Juvgen",
};

const byLocale: Record<Locale, JuvegenPageContent> = { ko, en, ja, zh, ru };

export function getJuvegenPageContent(locale: Locale): JuvegenPageContent {
  return byLocale[locale] ?? ko;
}
