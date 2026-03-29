import type { Locale } from "@/i18n/messages";

export type LitooPageContent = {
  title: string;
  intro: string[];
  pillarsSectionTitle: string;
  pillars: { kicker: string; title: string; body: string }[];
  agingTitle: string;
  agingIntro: string;
  aging: string[];
  hadmTitle: string;
  hadmIntro: string;
  compareLegacyTitle: string;
  compareHadmTitle: string;
  legacy: string[];
  hadm: string[];
  hadmNote: string;
  structureTitle: string;
  structureBody: string;
  structureFootnote: string;
  structureBullets: string[];
  clinicalTitle: string;
  clinicalIntro: string;
  stats: { label: string; value: string }[];
  benefitsTitle: string;
  benefitsIntro: string;
  benefits: string[];
  idealTitle: string;
  ideal: string[];
};

const ko: LitooPageContent = {
  title: "세상에 없던 진짜 피부, 리투오",
  pillarsSectionTitle: "핵심 가치",
  intro: [
    "리투오는 피부의 주요 성분인 콜라겐과 엘라스틴을 함유한 동종 진피를 주입해 빠르게 흡수되도록 돕습니다. 피부 탄력 저하와 주름 등 노화 징후를 완화하고, 보습을 개선하는 데 효과적인 제품으로 알려져 있습니다.",
    "리투오는 **Real Human Skin** 이식에 가까운 개념으로 완성하는 신개념 스킨부스터입니다.",
  ],
  pillars: [
    {
      kicker: "The FIRST",
      title: "에스테틱 시술 최초의 접근",
      body: "Real Human Skin을 피부에 직접 보충하는 개념으로, 진피 ECM 환경을 실질적으로 보완하는 데 초점을 둡니다.",
    },
    {
      kicker: "Safety & Stability",
      title: "생체 적합성",
      body: "인공 합성 물질이 아닌 인체 유래 성분 기반으로, 면역·생체 반응을 고려한 안정성을 지향합니다.",
    },
    {
      kicker: "All-in-One",
      title: "다양한 피부 고민",
      body: "미백, 주름, 모공, 피부결 등 복합적인 노화 징후를 함께 다루는 통합 케어로 설계할 수 있습니다.",
    },
  ],
  agingTitle: "피부 노화와 구조 변화",
  agingIntro: "시간이 지나면 보이지 않는 미세 균열과 ECM 변화로 피부 구조는 서서히 무너질 수 있습니다.",
  aging: [
    "피부 노화가 진행되면서 ECM(세포외기질)의 콜라겐과 엘라스틴이 감소합니다.",
    "콜라겐 합성량·진피층 치밀도·피부 탄력이 함께 떨어집니다.",
    "주름, 모공 확장, 속건조 등이 복합적으로 나타날 수 있습니다.",
  ],
  hadmTitle: "새로운 트렌드, hADM",
  hadmIntro:
    "리투오는 기존 스킨 부스터의 한계를 넘어 인간 콜라겐·ECM을 활용해 피부와의 호환성을 높이는 방향을 지향합니다. 동물 유래 콜라겐에 비해 자극 가능성을 낮추고, 자연스러운 회복과 장기적인 개선을 목표로 합니다.",
  compareLegacyTitle: "일반 스킨 부스팅 (Collagen Stimulator)",
  compareHadmTitle: "hADM (human Acellular Dermal Matrix)",
  legacy: [
    "진피층에 일정 간격으로 수십 회 반복 주입이 필요한 경우가 많음",
    "효과 유지 기간이 짧게 느껴질 수 있음",
    "개인차에 따라 체감 변화가 완만할 수 있음",
    "시술 부담·통증에 민감한 분들이 있음",
  ],
  hadm: [
    "hADM(human Acellular Dermal Matrix): 표피·지방을 제거한 인체 진피 조직",
    "Alloclean™ 등 무세포화·면역반응 물질 제거 기술로 안전성을 확보한 재료",
    "조직 재생·재건 목적으로 수술 영역에서도 검증된 치료 재료 계열",
    "실제 인체 진피의 ECM 성분으로 ‘진짜 피부’ 보충에 가깝게 접근",
  ],
  hadmNote:
    "리투오의 원재료 hADM은 미국 FDA 승인을 받은 안전·유효성이 입증된 재료로, 인체 사용 기준을 충족한 신뢰할 수 있는 성분입니다. (개인별 반응·시술 계획은 반드시 의료진 상담을 통해 결정합니다.)",
  structureTitle: "구조적 특성",
  structureBody:
    "리투오는 합성 콜라겐과 달리 자연 콜라겐 고유의 삼중 나선 구조를 유지하며, 생체 내에서 피브릴화 과정을 거쳐 촘촘하고 안정적인 조직 형성을 돕습니다. 100μm 이하 균일 입자로 이동성이 낮아 형태 유지에 유리하고, 콜라겐 생물학적 활성 부위가 보존되어 세포 접착·상호작용에 유리합니다.",
  structureFootnote: "※ 피브릴화: 물리·화학적 작용을 통해 섬유를 가는 상태로 나누는 과정을 의미합니다.",
  structureBullets: [
    "콜라겐·엘라스틴 분포 약 2.9배·3.2배 증가(연구·자료 기준, 개인차 있음)",
    "시간이 지나도 피부 내 유지력이 강한 편으로 보고됨",
  ],
  clinicalTitle: "임상적으로 보고된 개선 경향",
  clinicalIntro:
    "아래 수치는 자료에 기재된 평균적 개선율이며, 실제 결과는 피부 상태·시술 횟수·회복에 따라 달라질 수 있습니다.",
  stats: [
    { label: "모공", value: "약 17%" },
    { label: "콜라겐파워(탄력)", value: "약 16%" },
    { label: "피부 결", value: "약 12%" },
    { label: "피부 결 밀도", value: "약 11%" },
    { label: "피부 톤(붉은기)", value: "약 10%" },
  ],
  benefitsTitle: "기대할 수 있는 변화",
  benefitsIntro: "리투오로 피부 본연의 치유력이 활성화되면 탄력·주름·피부결·흉터 관리까지 폭넓은 개선을 경험할 수 있습니다.",
  benefits: [
    "피부 본연의 치유·회복 능력 활성화",
    "콜라겐 생성을 돕고 잔주름 완화에 기여",
    "피부결을 매끄럽고 부드럽게",
    "흉터·넓어진 모공 완화에 도움",
    "진피층 직접 주입으로 비교적 빠른 변화를 기대할 수 있음",
    "동종 진피 기반으로 안전성을 고려한 시술 설계",
  ],
  idealTitle: "이런 분께 추천드립니다",
  ideal: [
    "처진 피부 탄력이 고민인 분",
    "넓은 모공과 거친 피부결이 걱정인 분",
    "자극을 최소화한 재생 케어를 원하는 분",
    "빠른 피부 변화를 기대하는 분",
    "노화 예방·개선이 필요한 분",
  ],
};

const en: LitooPageContent = {
  title: "Litoo — skin closer to real dermis",
  pillarsSectionTitle: "Core values",
  intro: [
    "Litoo delivers human dermal matrix rich in collagen and elastin to support absorption kinetics, elasticity, fine lines and hydration goals.",
    "Positioned as a **Real Human Skin** supplementation concept rather than synthetic polymer-only boosters.",
  ],
  pillars: [
    {
      kicker: "The FIRST",
      title: "Aesthetic-first dermal supplementation",
      body: "Focuses on replenishing ECM elements where synthetic-only cocktails may fall short.",
    },
    {
      kicker: "Safety & Stability",
      title: "Biocompatibility mindset",
      body: "Human-origin acellular matrix pathway versus purely synthetic stimulators for immune nuance.",
    },
    {
      kicker: "All-in-One",
      title: "Combined ageing signs",
      body: "Tone, pores, texture and laxity can be staged in one roadmap when clinically appropriate.",
    },
  ],
  agingTitle: "Ageing and ECM change",
  agingIntro: "Micro-cracks and ECM shift can erode structure long before it is obvious on photos.",
  aging: [
    "Collagen and elastin within ECM decline with time.",
    "Synthesis, dermal density and bounce drop together.",
    "Wrinkles, enlarged pores and inner dryness may cluster.",
  ],
  hadmTitle: "hADM trend",
  hadmIntro:
    "Litoo leans on human collagen/ECM compatibility versus animal collagen alone, aiming for calmer recovery and durable quality gains.",
  compareLegacyTitle: "Classic collagen stimulators",
  compareHadmTitle: "hADM (human Acellular Dermal Matrix)",
  legacy: [
    "Often dozens of micro-sessions spaced tightly",
    "Duration may feel short for some patients",
    "Subtle perceived change depending on biology",
    "Discomfort-sensitive patients may struggle",
  ],
  hadm: [
    "hADM: human dermis after epidermis/fat removal",
    "Decellularised pathways (e.g. Alloclean™) to reduce immune reactants",
    "Materials class used in reconstructive settings",
    "ECM chemistry closer to native dermis supplementation",
  ],
  hadmNote:
    "Source hADM holds FDA recognition for indicated uses; your plan must still be set in private medical consult.",
  structureTitle: "Structural notes",
  structureBody:
    "Preserves native collagen triple helix cues, fibrillises in tissue, uniform particles under ~100 µm for controlled mobility, bioactive domains for cell interaction.",
  structureFootnote: "Fibrillisation: splitting fibres into finer networks under physical/chemical cues.",
  structureBullets: [
    "Literature cites ~2.9× collagen and ~3.2× elastin distribution signals (individual results vary)",
    "Retention narratives favour longer persistence versus some synthetics",
  ],
  clinicalTitle: "Reported improvement trends",
  clinicalIntro: "Percentages below are averaged study figures; real outcomes depend on skin, sessions and healing.",
  stats: ko.stats,
  benefitsTitle: "Changes patients hope for",
  benefitsIntro: "Barrier to scar and pore concerns may improve while innate repair pathways engage.",
  benefits: [
    "Support innate repair cascades",
    "Collagen cues for fine lines",
    "Smoother texture",
    "Helpful adjunct for scars and pores",
    "Relatively quick perceived change for some",
    "Human-matrix safety framing in planning",
  ],
  idealTitle: "Often chosen when…",
  ideal: [
    "Laxity is the headline worry",
    "Pores and rough texture dominate",
    "You want regenerative tone with minimal synthetic load",
    "You hope for faster visible quality shifts",
    "Prevention plus correction matter together",
  ],
};

const ja: LitooPageContent = {
  ...en,
  title: "本物の肌に近づく、リトゥオ",
  pillarsSectionTitle: "コアバリュー",
  intro: [
    "コラーゲンとエラスチンを含むヒト真皮マトリックスを投与し、ハリ・小じわ・保湿ケアを目指すスキンブースターです。",
    "合成ポリマーのみとは異なり、**Real Human Skin** に近い補完コンセプトです。",
  ],
  pillars: [
    { kicker: "The FIRST", title: "真皮補完へのアプローチ", body: "ECM要素の補いを重視します。" },
    { kicker: "Safety & Stability", title: "生体適合性", body: "ヒト由来無細胞真皮の方向性。" },
    { kicker: "All-in-One", title: "複合的な悩み", body: "トーン・毛穴・キメ・たるみを計画できます。" },
  ],
  agingTitle: "老化とECM",
  agingIntro: en.agingIntro,
  aging: [
    "ECMのコラーゲン・エラスチンが減少します。",
    "合成・密度・ハリがともに低下します。",
    "小じわ・毛穴・内側乾燥が重なりがちです。",
  ],
  hadmTitle: "hADMトレンド",
  hadmIntro: en.hadmIntro,
  compareLegacyTitle: "従来のコラーゲンスティミュレーター",
  compareHadmTitle: "hADM",
  legacy: en.legacy,
  hadm: en.hadm,
  hadmNote: en.hadmNote,
  structureTitle: "構造的特徴",
  structureBody: en.structureBody,
  structureFootnote: en.structureFootnote,
  structureBullets: en.structureBullets,
  clinicalTitle: "報告された改善傾向",
  clinicalIntro: en.clinicalIntro,
  benefitsTitle: "期待しうる変化",
  benefitsIntro: en.benefitsIntro,
  benefits: en.benefits,
  idealTitle: "こんな方に",
  ideal: [
    "たるみが気になる方",
    "毛穴・ざらつきが気になる方",
    "刺激を抑えた再生ケアを望む方",
    "変化を早めに感じたい方",
    "予防と改善の両方を考えたい方",
  ],
};

const zh: LitooPageContent = {
  ...en,
  title: "Litoo — 更接近真实真皮的支持",
  pillarsSectionTitle: "核心价值",
  intro: [
    "含胶原与弹力蛋白的人真皮基质成分，用于支持弹性、细纹与保湿等目标。",
    "概念上接近 **Real Human Skin** 的补充，而非仅合成聚合物刺激。",
  ],
  pillars: [
    { kicker: "The FIRST", title: "真皮环境补充", body: "关注 ECM 要素的实际补足。" },
    { kicker: "Safety & Stability", title: "生物相容思路", body: "人源脱细胞真皮路径。" },
    { kicker: "All-in-One", title: "复合老化表现", body: "肤色、毛孔、质地与松弛可分期规划。" },
  ],
  agingTitle: "老化与 ECM",
  agingIntro: en.agingIntro,
  aging: [
    "ECM 中胶原与弹力纤维减少。",
    "合成、密度与回弹同步下降。",
    "细纹、毛孔与内层干燥常同时出现。",
  ],
  hadmTitle: "hADM 趋势",
  hadmIntro: en.hadmIntro,
  compareLegacyTitle: "传统胶原刺激类",
  compareHadmTitle: "hADM",
  legacy: en.legacy,
  hadm: en.hadm,
  hadmNote: en.hadmNote,
  structureTitle: "结构特点",
  structureBody: en.structureBody,
  structureFootnote: en.structureFootnote,
  structureBullets: en.structureBullets,
  clinicalTitle: "文献中的改善趋势",
  clinicalIntro: en.clinicalIntro,
  benefitsTitle: "可能的变化",
  benefitsIntro: en.benefitsIntro,
  benefits: en.benefits,
  idealTitle: "适合人群",
  ideal: [
    "松弛是主要困扰者",
    "毛孔与粗糙明显者",
    "希望低刺激再生护理者",
    "希望较快感知肤质变化者",
    "预防与改善并重者",
  ],
};

const ru: LitooPageContent = {
  ...en,
  title: "Litoo — поддержка, близкая к дерме",
  pillarsSectionTitle: "Ключевые ценности",
  intro: [
    "Человеческая дермальная матрица с коллагеном и эластином для упругости, мелких морщин и увлажнения.",
    "Концепция **Real Human Skin** вместо только синтетических полимеров.",
  ],
  pillars: [
    { kicker: "The FIRST", title: "Дополнение ECM", body: "Фокус на нативных структурах дермы." },
    { kicker: "Safety & Stability", title: "Биосовместимость", body: "Безклеточная человеческая матрица." },
    { kicker: "All-in-One", title: "Комплекс старения", body: "Тон, поры, рельеф и тонус в одном плане." },
  ],
  agingTitle: "Старение и ECM",
  agingIntro: en.agingIntro,
  aging: [
    "Коллаген и эластин ECM снижаются.",
    "Синтез, плотность и упругость падают вместе.",
    "Морщины, поры и внутренняя сухость часто сочетаются.",
  ],
  hadmTitle: "Тренд hADM",
  hadmIntro: en.hadmIntro,
  compareLegacyTitle: "Классические стимуляторы",
  compareHadmTitle: "hADM",
  legacy: en.legacy,
  hadm: en.hadm,
  hadmNote: en.hadmNote,
  structureTitle: "Структура",
  structureBody: en.structureBody,
  structureFootnote: en.structureFootnote,
  structureBullets: en.structureBullets,
  clinicalTitle: "Данные улучшений",
  clinicalIntro: en.clinicalIntro,
  benefitsTitle: "Ожидания",
  benefitsIntro: en.benefitsIntro,
  benefits: en.benefits,
  idealTitle: "Вам подойдёт, если…",
  ideal: en.ideal,
};

const byLocale: Record<Locale, LitooPageContent> = { ko, en, ja, zh, ru };

export function getLitooPageContent(locale: Locale): LitooPageContent {
  return byLocale[locale] ?? ko;
}
