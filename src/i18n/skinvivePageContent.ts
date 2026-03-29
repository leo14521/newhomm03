import type { Locale } from "@/i18n/messages";

export type SkinvivePageContent = {
  titleKr: string;
  whatIsHeading: string;
  whatIsBody: string;
  recommendKicker: string;
  recommendSub: string;
  recommend: string[];
  cautionsKicker: string;
  cautions: string[];
  overviewTitle: string;
  overviewBody: string;
  overviewCards: { label: string; desc: string }[];
  infographicNote: string;
};

const ko: SkinvivePageContent = {
  titleKr: "스킨바이브",
  whatIsHeading: "What is it?",
  whatIsBody:
    "스스로 무게의 약 300~1000배 수분을 머금을 수 있는 히알루론산을 피부 진피층에 직접 주입하는 주사 시술입니다. 노화로 메마르고 건조해진 피부, 탄력이 떨어진 피부를 촉촉하고 맑게 가꾸며, **꽉 찬 수분감에서 오는 탄력감**을 함께 기대할 수 있는 안티에이징 케어입니다.",
  recommendKicker: "Recommend",
  recommendSub: "이런 분께 추천합니다.",
  recommend: ["피부에 탄력이 없고 윤기가 부족한 분", "모공 개선과 보습 효과를 함께 원하는 분"],
  cautionsKicker: "Cautions",
  cautions: [
    "관리만큼이나 셀프 케어도 효과에 큰 영향을 줍니다. 아래 사항을 꼼꼼히 지켜 주세요.",
    "시술 후 3~7일간 과음, 사우나·찜질방, 열탕 목욕, 격한 운동은 피하는 것이 좋습니다.",
    "시술 후 엠보싱, 멍, 붓기, 통증, 붉은기 등이 생길 수 있으나 대부분 일시적이며 수일 내 완화되는 경우가 많습니다.",
    "피부가 건조해지지 않도록 보습제·재생 크림을 자주 사용하고, 외출 시 자외선 차단제를 꼭 발라 주세요.",
  ],
  overviewTitle: "작용 개요",
  overviewBody:
    "진피층에 주입된 히알루론산은 섬유아세포 주변에 수분 환경을 형성하고, 기계적 자극(스트레칭)을 통해 콜라겐 환경을 정돈하는 데 기여할 수 있습니다. 그 결과 **촉촉한 광채·매끈한 결·탄력**을 동시에 노리는 케어로 설계됩니다.",
  overviewCards: [
    { t: "시각적", d: "촉촉함, 광채, 피부톤 정돈" },
    { t: "촉각적", d: "거친 결 완화, 부드러운 촉감" },
    { t: "역학적", d: "탄성·유연성, 견고함" },
    { t: "핵심 키워드", d: "Hydration · 잔주름 · 탄력" },
  ].map((x) => ({ label: x.t, desc: x.d })),
  infographicNote: "인포그래픽·제품 이미지는 클리닉 자료로 별도 안내 가능합니다.",
};

const en: SkinvivePageContent = {
  titleKr: "Skinvive",
  whatIsHeading: "What is it?",
  whatIsBody:
    "Micro-injections of hyaluronic acid into the dermis to rehydrate dull, dry or lax skin—aiming for **plump hydration and a springier feel** alongside anti-ageing goals.",
  recommendKicker: "Recommend",
  recommendSub: "Often chosen when…",
  recommend: ["Elasticity and glow feel depleted", "You want pores and hydration addressed together"],
  cautionsKicker: "Cautions",
  cautions: [
    "Home care strongly influences outcomes—please follow guidance closely.",
    "Avoid heavy alcohol, sauna, hot baths and intense exercise for several days.",
    "Embossing, bruising, swelling, tenderness or redness are usually temporary.",
    "Moisturise and regenerate creams often; use SPF when outdoors.",
  ],
  overviewTitle: "How it works",
  overviewBody:
    "Dermal HA supports a hydrated matrix around fibroblasts and may help organise collagen signalling via gentle tissue stretch—designed for **glow, smoother texture and bounce** together.",
  overviewCards: [
    { label: "Visual", desc: "Dewiness, radiance, more even tone" },
    { label: "Tactile", desc: "Softer, less rough texture" },
    { label: "Mechanical", desc: "Elasticity and suppleness" },
    { label: "Keywords", desc: "Hydration · fine lines · firmness" },
  ],
  infographicNote: "Infographics and brand assets can be shared in clinic.",
};

const ja: SkinvivePageContent = {
  titleKr: "スキンバイブ",
  whatIsHeading: "What is it?",
  whatIsBody:
    "ヒアルロン酸を真皮にマイクロ注入し、乾燥・くすみ・ハリ不足にアプローチ。**みずみずしい潤いからくるハリ感**も期待できるエイジングケアです。",
  recommendKicker: "Recommend",
  recommendSub: "こんな方に。",
  recommend: ["弾力とツヤが不足している方", "毛穴と保湿を同時に考えたい方"],
  cautionsKicker: "Cautions",
  cautions: [
    "ホームケアも効果に大きく関わります。以下を守ってください。",
    "術後3〜7日は飲酒過多、サウナ、熱い入浴、激しい運動は避けましょう。",
    "エンボス・内出血・腫れ・痛み・赤みは多く一時的です。",
    "保湿・再生クリームをこまめに、外出時はUVケアを。",
  ],
  overviewTitle: "作用の概要",
  overviewBody:
    "真皮のHAは線維芽細胞周囲の水分環境を支え、軽いストレッチを通じてコラーゲン環境の整理に寄与しうるケアとして**ツヤ・キメ・ハリ**を狙います。",
  overviewCards: [
    { label: "視覚", desc: "うるおい、ツヤ、トーン" },
    { label: "触覚", desc: "ざらつき軟化、なめらかさ" },
    { label: "力学", desc: "弾力・しなやかさ" },
    { label: "キーワード", desc: "Hydration・小じわ・ハリ" },
  ],
  infographicNote: "図版・製品画像は院内でご案内できます。",
};

const zh: SkinvivePageContent = {
  titleKr: "Skinvive 肤漾",
  whatIsHeading: "What is it?",
  whatIsBody:
    "将透明质酸微注于真皮，改善干燥、暗沉与松弛，兼顾**充盈水润带来的弹润感**。",
  recommendKicker: "Recommend",
  recommendSub: "适合人群",
  recommend: ["弹性与光泽不足者", "希望同时改善毛孔与保湿者"],
  cautionsKicker: "Cautions",
  cautions: [
    "居家护理对效果影响很大，请严格遵守注意事项。",
    "术后3–7天避免酗酒、桑拿、高温泡澡与剧烈运动。",
    "可能出现暂时性颗粒感、淤青、肿胀、痛感或泛红。",
    "勤用保湿与修护霜，外出务必防晒。",
  ],
  overviewTitle: "作用概述",
  overviewBody:
    "真皮内 HA 有助于纤维母细胞周围的水合环境，并通过温和机械刺激参与胶原环境整理，目标同时提升**水光、细腻与弹性**。",
  overviewCards: [
    { label: "视觉", desc: "水润、光泽、肤色匀净" },
    { label: "触觉", desc: "粗糙缓解、柔滑触感" },
    { label: "力学", desc: "弹性与柔韧" },
    { label: "关键词", desc: "Hydration · 细纹 · 弹性" },
  ],
  infographicNote: "信息图与产品资料可在院内索取。",
};

const ru: SkinvivePageContent = {
  titleKr: "Skinvive",
  whatIsHeading: "What is it?",
  whatIsBody:
    "Микроинъекции гиалуроновой кислоты в дерму для увлажнения и упругости с акцентом на **наполненную гидратацию**.",
  recommendKicker: "Recommend",
  recommendSub: "Часто выбирают при…",
  recommend: ["Нехватает упругости и сияния", "Нужны поры и увлажнение вместе"],
  cautionsKicker: "Cautions",
  cautions: [
    "Домашний уход сильно влияет на результат.",
    "3–7 дней избегайте алкоголя, сауны, горячих ванн и интенспорта.",
    "Рельеф, синяки, отёк, боль или покраснение обычно временны.",
    "Чаще увлажняйте кожу и используйте SPF на улице.",
  ],
  overviewTitle: "Как это работает",
  overviewBody:
    "HA в дерме поддерживает водную среду и мягкую механическую стимуляцию для **сияния, рельефа и упругости**.",
  overviewCards: [
    { label: "Визуально", desc: "Увлажнение, сияние, тон" },
    { label: "На ощупь", desc: "Меньше шероховатости" },
    { label: "Механика", desc: "Эластичность" },
    { label: "Фокус", desc: "Hydration · мелкие морщины" },
  ],
  infographicNote: "Инфографику можно запросить в клинике.",
};

const byLocale: Record<Locale, SkinvivePageContent> = { ko, en, ja, zh, ru };

export function getSkinvivePageContent(locale: Locale): SkinvivePageContent {
  return byLocale[locale] ?? ko;
}
