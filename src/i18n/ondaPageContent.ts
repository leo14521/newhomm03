import type { Locale } from "@/i18n/messages";

export type OndaTechBlock = { num: string; title: string; desc: string; bullets: string[] };
export type OndaEffectCard = { title: string; sub: string; desc: string };
export type OndaProcessStep = { step: string; title: string; sub: string; desc: string };
export type OndaFaq = { q: string; a: string };

export type OndaPageContent = {
  heroLead: string;
  techIntro: string;
  collagenKicker: string;
  collagenTitle: string;
  collagenBody: string;
  processTitle: string;
  processLead: string;
  faqHeading: string;
  techSteps: OndaTechBlock[];
  effectCards: OndaEffectCard[];
  processSteps: OndaProcessStep[];
  faq: OndaFaq[];
};

const ko: OndaPageContent = {
  heroLead:
    "**오마쥬 온다**는 고주파를 활용한 비침습 바디 컨투어링 시술입니다. 쿨웨이브 기술로 지방 세포를 분해하고 피부 탄력을 개선하여, 수술 없이 안전하고 효과적인 바디 라인을 만들어드립니다.",
  techIntro: "고주파 에너지로 지방 세포를 분해하고 피부 탄력을 개선하는 비침습 바디 컨투어링입니다. 수술 없이 안전하게 바디 라인을 설계합니다.",
  collagenKicker: "02 · Collagen",
  collagenTitle: "콜라겐 생성 촉진",
  collagenBody:
    "고주파 에너지가 피부 깊숙이 전달되면서 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다.",
  processTitle: "시술 흐름",
  processLead: "오마쥬 온다 시술은 편안함과 안전을 우선한 단계별 프로토콜로 진행됩니다.",
  faqHeading: "자주 묻는 질문",
  techSteps: [
    {
      num: "01",
      title: "쿨웨이브 고주파 기술",
      desc: "온다는 쿨웨이브(Coolwaves) 고주파 기술을 사용하여 지방 세포를 선택적으로 분해합니다. 피부 표면은 보호하면서 깊은 곳의 지방층에만 에너지를 전달하여 안전하고 효과적인 바디 컨투어링을 제공합니다.",
      bullets: ["선택적 지방 분해", "피부 표면 보호", "비침습 시술"],
    },
  ],
  effectCards: [
    { title: "지방 분해", sub: "Fat Reduction", desc: "선택적 지방 분해로 원하는 부위의 지방을 효과적으로 감소시킵니다." },
    { title: "탄력 개선", sub: "Skin Tightening", desc: "콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다." },
    { title: "비침습 시술", sub: "Non-Invasive", desc: "수술 없이 고주파를 활용하여 안전하고 효과적인 바디 컨투어링을 제공합니다." },
  ],
  processSteps: [
    { step: "01", title: "맞춤 상담", sub: "Consultation", desc: "개인의 바디 상태와 목표를 정밀 진단하고 개인별 맞춤 시술 계획을 설계합니다." },
    { step: "02", title: "시술 준비", sub: "Preparation", desc: "시술 부위를 깨끗이 정리하고 전용 젤을 도포하여 최적의 시술 환경을 만듭니다." },
    { step: "03", title: "고주파 시술", sub: "Procedure", desc: "쿨웨이브 고주파 기술로 지방 세포를 분해하고 콜라겐 생성을 촉진합니다." },
    { step: "04", title: "진정 관리", sub: "After Care", desc: "시술 후 진정 관리로 피부를 보호하고 최적의 회복을 돕습니다." },
  ],
  faq: [
    {
      q: "시술 효과는 언제부터 나타나나요?",
      a: "시술 직후 즉각적인 효과를 느낄 수 있으나, 지방 분해와 콜라겐 재생이 본격화되는 2~4주 후부터 효과가 더욱 뚜렷해집니다. 개인의 바디 상태에 따라 다르지만, 평균적으로 3~6개월 정도 효과가 유지됩니다.",
    },
    {
      q: "통증이 있나요?",
      a: "온다는 비침습 시술로 통증이 거의 없습니다. 시술 중 따뜻한 느낌이나 약간의 따끔함을 느낄 수 있으나 대부분의 고객님께서 편안하게 시술을 받으실 수 있습니다.",
    },
    {
      q: "일상생활은 바로 가능한가요?",
      a: "네, 온다는 피부 표면에 손상을 주지 않는 비침습 시술입니다. 시술 직후 바로 일상생활이 가능하며, 운동이나 샤워도 시술 당일부터 가능합니다.",
    },
    {
      q: "어떤 부위에 시술이 가능한가요?",
      a: "복부, 허벅지, 팔뚝, 옆구리, 등, 엉덩이 등 다양한 부위에 시술이 가능합니다. 개인의 상태와 목표에 따라 맞춤형 시술 계획을 수립합니다.",
    },
  ],
};

const en: OndaPageContent = {
  heroLead:
    "**Hommage Onda** is non-invasive body contouring with Coolwaves RF—selective fat signalling and collagen support without surgery.",
  techIntro: "RF targets fat layers while the surface is monitored; plan vectors in consult for safer contouring.",
  collagenKicker: "02 · Collagen",
  collagenTitle: "Collagen support",
  collagenBody: "Deeper RF delivery can accompany collagen remodelling narratives for firmer, tighter-feeling skin.",
  processTitle: "Visit flow",
  processLead: "Comfort-first staging from consult through cooling aftercare.",
  faqHeading: "FAQ",
  techSteps: [
    {
      num: "01",
      title: "Coolwaves RF core",
      desc: "Microwave-class Coolwaves energy is positioned to spare epidermis while engaging fat-prone depth—always individualised in clinic.",
      bullets: ["Selective fat focus", "Surface protection mindset", "Non-invasive pathway"],
    },
  ],
  effectCards: [
    { title: "Fat contour", sub: "Fat Reduction", desc: "Targeted zones per medical mapping." },
    { title: "Firmness", sub: "Skin Tightening", desc: "Collagen activity as part of the story." },
    { title: "Non-surgical", sub: "Non-Invasive", desc: "No incision protocol in appropriate cases." },
  ],
  processSteps: [
    { step: "01", title: "Consult", sub: "Consultation", desc: "Goals, zones and contraindications reviewed." },
    { step: "02", title: "Prep", sub: "Preparation", desc: "Cleanse and coupling gel for even delivery." },
    { step: "03", title: "RF pass", sub: "Procedure", desc: "Coolwaves sequence per plan." },
    { step: "04", title: "Cool-down", sub: "After Care", desc: "Soothing steps to settle skin." },
  ],
  faq: [
    {
      q: "When will I see change?",
      a: "Some tightness early; fat and collagen timelines often build over weeks, with maintenance varying by biology.",
    },
    {
      q: "Is it painful?",
      a: "Usually mild warmth or prickle; most patients tolerate without systemic anaesthesia.",
    },
    {
      q: "Downtime?",
      a: "Non-ablative pathway—often same-day routine; follow clinic advice on heat and exercise.",
    },
    {
      q: "Which areas?",
      a: "Abdomen, thighs, arms, flanks, back, buttocks—subject to assessment.",
    },
  ],
};

const ja: OndaPageContent = {
  ...en,
  heroLead: "**オマージュ オンダ**はクールウェーブ高周波による非侵襲ボディコンター。脂肪層へのアプローチと肌のハリ感を目指します。",
  techIntro: "表面を守りながら深部の脂肪層にエネルギーを届ける設計を相談で個別に行います。",
  collagenTitle: "コラーゲンサポート",
  collagenBody: "深部への高周波がコラーゲン環境の整理にもつながるケアとして説明されます。",
  processTitle: "施術の流れ",
  processLead: "相談から冷却ケアまで段階的に進めます。",
  faqHeading: "よくある質問",
  faq: en.faq,
};

const zh: OndaPageContent = {
  ...en,
  heroLead: "**Hommage Onda** 以 Coolwaves 射频进行非侵入式身体轮廓管理。",
  techIntro: "在保护表皮的同时针对脂肪层设计方案，需在面诊中个体化。",
  collagenTitle: "胶原支持",
  collagenBody: "深层射频常与胶原重塑叙述一并说明，以改善紧致感。",
  processTitle: "流程",
  processLead: "从咨询到术后舒缓分步进行。",
  faqHeading: "常见问题",
  faq: en.faq,
};

const ru: OndaPageContent = {
  ...en,
  heroLead: "**Hommage Onda** — неинвазивный контуринг на Coolwaves RF.",
  techIntro: "Энергия для жирового слоя с контролем поверхности — план только после осмотра.",
  collagenTitle: "Коллаген",
  collagenBody: "Глубокое RF может сопровождаться разговором о ремоделировании коллагена.",
  processTitle: "Этапы",
  processLead: "От консультации до успокаивающего ухода.",
  faqHeading: "Вопросы",
  faq: en.faq,
};

const byLocale: Record<Locale, OndaPageContent> = { ko, en, ja, zh, ru };

export function getOndaPageContent(locale: Locale): OndaPageContent {
  return byLocale[locale] ?? ko;
}
