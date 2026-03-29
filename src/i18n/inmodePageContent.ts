import type { Locale } from "@/i18n/messages";

export type InmodePageContent = {
  heroLine1: string;
  heroLine2: string;
  introTitle: string;
  introBody: string;
  featuresHeading: string;
  features: { title: string; description: string }[];
  areas: string[];
};

const ko: InmodePageContent = {
  heroLine1: "RF와 초음파를 결합한",
  heroLine2: "바디 컨투어링 시술",
  introTitle: "Inmode",
  introBody:
    "인모드는 고주파(RF)와 초음파를 결합한 바디 컨투어링 시술로, 지방 분해와 리프팅에 효과적입니다. 초음파 에너지로 지방 세포를 분해하고 제거하여 바디 라인을 개선하며, 고주파 에너지로 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 리프팅 효과를 제공합니다.",
  featuresHeading: "Features",
  features: [
    { title: "RF + 초음파 결합", description: "고주파(RF)와 초음파를 결합하여 지방 분해와 리프팅 효과를 동시에 제공합니다." },
    { title: "지방 분해", description: "초음파 에너지로 지방 세포를 분해하고 제거하여 바디 라인을 개선합니다." },
    { title: "리프팅 효과", description: "고주파 에너지로 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 리프팅 효과를 제공합니다." },
    { title: "비수술 시술", description: "수술 없이 RF와 초음파를 활용하여 안전하고 효과적인 바디 컨투어링을 제공합니다." },
  ],
  areas: ["복부", "허벅지", "팔뚝", "옆구리", "등", "엉덩이"],
};

const en: InmodePageContent = {
  heroLine1: "RF plus ultrasound",
  heroLine2: "for body contouring",
  introTitle: "Inmode",
  introBody:
    "InMode-style body contouring pairs radiofrequency with ultrasound to target fat reduction while supporting collagen for firmer skin.",
  featuresHeading: "Features",
  features: [
    { title: "Combined RF + ultrasound", description: "Dual energy pathways for contour and lift-style tightening." },
    { title: "Fat-focused ultrasound", description: "Ultrasound energy helps disrupt adipocytes along planned vectors." },
    { title: "Collagen support", description: "RF encourages collagen activity for smoother, tighter skin." },
    { title: "Non-surgical pathway", description: "No incision protocol tailored in consult for your zones.",
    },
  ],
  areas: ["Abdomen", "Thighs", "Arms", "Flanks", "Back", "Buttocks"],
};

const ja: InmodePageContent = {
  heroLine1: "RFと超音波を組み合わせた",
  heroLine2: "ボディコンタリング",
  introTitle: "Inmode",
  introBody:
    "高周波と超音波を組み合わせ、脂肪のケアと引き締め感のサポートを目指すボディ施術です。",
  featuresHeading: "Features",
  features: [
    { title: "RF＋超音波", description: "脂肪ケアとタイトニングを同時に狙うデュアルアプローチ。" },
    { title: "脂肪へのアプローチ", description: "超音波で脂肪細胞をターゲットに。" },
    { title: "コラーゲンサポート", description: "RFでコラーゲン生成を後押し。" },
    { title: "非手術", description: "切開なしで部位に合わせ設計。" },
  ],
  areas: ["腹部", "太もも", "二の腕", "脇腹", "背中", "臀部"],
};

const zh: InmodePageContent = {
  heroLine1: "射频联合超声波",
  heroLine2: "身体轮廓管理",
  introTitle: "Inmode",
  introBody:
    "以射频与超声波结合的身体轮廓方案，兼顾脂肪管理与紧致感支持。",
  featuresHeading: "Features",
  features: [
    { title: "射频 + 超声", description: "双能量路径，兼顾塑形与紧致方向。" },
    { title: "脂肪管理", description: "超声能量针对脂肪细胞。" },
    { title: "胶原支持", description: "射频促进胶原活动。" },
    { title: "非手术", description: "无切口，按部位在咨询中设计。" },
  ],
  areas: ["腹部", "大腿", "手臂", "侧腰", "背部", "臀部"],
};

const ru: InmodePageContent = {
  heroLine1: "РЧ плюс ультразвук",
  heroLine2: "для контурирования тела",
  introTitle: "Inmode",
  introBody:
    "Комбинация радиочастоты и ультразвука для работы с жиром и поддержки упругости кожи.",
  featuresHeading: "Features",
  features: [
    { title: "РЧ + УЗ", description: "Двойная энергия для контура и упругости." },
    { title: "Работа с жиром", description: "Ультразвук на адипоциты по плану." },
    { title: "Коллаген", description: "РЧ стимулирует коллаген." },
    { title: "Без разреза", description: "Персональный план зон на консультации." },
  ],
  areas: ["Живот", "Бёдра", "Руки", "Фланки", "Спина", "Ягодицы"],
};

const byLocale: Record<Locale, InmodePageContent> = { ko, en, ja, zh, ru };

export function getInmodePageContent(locale: Locale): InmodePageContent {
  return byLocale[locale] ?? ko;
}
