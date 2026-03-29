import type { Locale } from "@/i18n/messages";

export type CorrectionFitPageContent = {
  heroTagline: string;
  heroNameKr: string;
  heroLeadLine1: string;
  heroLeadLine2: string;
  breadcrumbCurrent: string;
  concernLabel: string;
  concernTitle: string;
  painPoints: string[];
  approachLabel: string;
  approachTitle: string;
  approachBeforeEm: string;
  approachEmName: string;
  approachAfterEm: string;
  qmrLabel: string;
  qmrTitle: string;
  qmrLead: string;
  principles: { title: string; desc: string }[];
  benefitsLabel: string;
  benefitsTitle: string;
  benefits: { en: string; title: string; desc: string }[];
  whyHommageLabel: string;
  whyHommageTitle: string;
  whyHommageLead: string;
  whyUs: { title: string; desc: string }[];
  processLabel: string;
  processTitle: string;
  processes: { step: string; title: string; desc: string }[];
  faqLabel: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
};

const ko: CorrectionFitPageContent = {
  heroTagline: "아프지 않게, 세포부터 깨우는 진짜 안티에이징",
  heroNameKr: "오마쥬 코레지셀핏",
  heroLeadLine1: "인위적인 열 손상 없이, 16가지 공명 에너지로 피부 세포를 운동시킵니다.",
  heroLeadLine2: "오마쥬클리닉에서 당신의 잃어버린 피부 본연의 빛을 되찾아드립니다.",
  breadcrumbCurrent: "코레지셀핏",
  concernLabel: "Concern",
  concernTitle: "이런 고민, 해보신 적 있으신가요?",
  painPoints: [
    "리프팅 레이저는 받고 싶은데, 통증이 너무 두려워요.",
    "중요한 일정을 앞두고 있어서 붉어지거나 붓는 시술은 부담스러워요.",
    "피부가 얇아지고 건조해져서, 피부 장벽부터 튼튼하게 만들고 싶어요.",
    "푸석푸석하고 생기 없는 피부에 자연스러운 광채가 필요해요.",
  ],
  approachLabel: "OUR APPROACH",
  approachTitle: "오마쥬클리닉의 해답",
  approachBeforeEm: "억지로 피부를 깎거나 태우지 마세요. 이제 세포를 스스로 운동하게 만드는 ",
  approachEmName: "Corage Cell-Fit",
  approachAfterEm: "이 필요할 때입니다.",
  qmrLabel: "QMR Technology",
  qmrTitle: "피부 세포를 위한 퍼스널 트레이닝",
  qmrLead:
    "고주파(열 발생) 방식이 아닌 QMR(양자 분자 공명) 기술로 1초에 최대 6,400만 번 세포를 진동시킵니다.",
  principles: [
    { title: "세포 활성화 (Cell-Fitness)", desc: "공명 에너지가 노화된 세포를 깨워 스스로 운동하게 만듭니다." },
    { title: "콜라겐 & 엘라스틴 재생", desc: "인위적인 손상 없이 진피층의 탄력 인자들을 자발적으로 증식시킵니다." },
    { title: "피부 장벽 강화", desc: "세포의 대사를 촉진해 표피와 진피를 동시에 건강하게 재건합니다." },
  ],
  benefitsLabel: "Why Cell-Fit",
  benefitsTitle: "오마쥬 코레지셀핏의 네 가지 특별함",
  benefits: [
    { en: "Comfort", title: "무통증 · 무손상 노다운타임", desc: "통증, 붓기, 멍이 거의 없어 시술 직후 즉시 일상생활과 메이크업이 가능합니다." },
    { en: "Glow", title: "즉각적인 수분 광채 (Cell-Glow)", desc: "시술 직후 속에서부터 차오르는 맑고 투명한 물광 피부를 경험할 수 있습니다." },
    { en: "Custom", title: "맞춤형 3 Step 어플리케이터", desc: "플라즈마 롤러, 스킨 글러브, 도자 등 피부 상태와 부위에 맞는 맞춤형 팁을 사용합니다." },
    { en: "Barrier", title: "얇고 예민한 피부도 안심", desc: "피부를 예민하게 만들지 않고, 오히려 받을수록 장벽이 두꺼워지고 튼튼해집니다." },
  ],
  whyHommageLabel: "Hommage Only",
  whyHommageTitle: "왜 오마쥬클리닉이어야 할까요",
  whyHommageLead: "같은 장비라도, 누가 어떻게 시술하느냐에 따라 결과는 다릅니다.",
  whyUs: [
    { title: "1:1 피부 주치의 진단", desc: "공장형 시술이 아닌, 원장님이 직접 피부 두께, 노화 정도, 수분량을 꼼꼼히 체크하여 맞춤 플랜을 세웁니다." },
    { title: "전용 프로토콜", desc: "단순한 기기 관리를 넘어, 오마쥬만의 시너지 앰플과 진정 스킨케어를 결합한 프리미엄 코스를 제공합니다." },
    { title: "프라이빗 릴렉싱 케어", desc: "통증 없이 편안한 코레지 시술의 장점을 극대화하기 위해, 안락하고 프라이빗한 1인실 환경을 제공합니다." },
  ],
  processLabel: "Process",
  processTitle: "시술 진행 과정",
  processes: [
    { step: "01", title: "1:1 맞춤 상담", desc: "원장님과의 심층 상담을 통해 피부 상태 진단" },
    { step: "02", title: "딥 클렌징", desc: "자극 없는 클렌징으로 피부결 정돈" },
    { step: "03", title: "코레지셀핏 맞춤 시술", desc: "플라즈마 롤러, 스킨 글러브, 도자를 이용한 맞춤형 에너지 전달" },
    { step: "04", title: "프리미엄 진정 케어", desc: "맞춤형 앰플 침투 및 모델링 팩으로 수분 잠금" },
    { step: "05", title: "애프터 케어 안내", desc: "시술 후 주의사항 및 홈케어 가이드 제공" },
  ],
  faqLabel: "Q&A",
  faqTitle: "자주 묻는 질문",
  faqs: [
    { q: "시술 시 통증은 어느 정도인가요?", a: "따뜻한 열감과 기분 좋은 떨림(진동) 정도만 느껴지며, 마취가 필요 없을 정도로 통증이 거의 없습니다. 편안하게 휴식하듯 시술받으실 수 있습니다." },
    { q: "일상생활은 바로 가능한가요?", a: "네, 인위적인 흉터나 딱지가 생기지 않아 시술 직후 바로 세안과 메이크업이 가능합니다. 중요한 일정을 앞두고 받기 매우 좋은 시술입니다." },
    {
      q: "몇 회 정도 받아야 효과가 있나요?",
      a: "1회 시술만으로도 맑아지는 피부결과 수분감을 느낄 수 있지만, 세포의 지속적인 재생과 탄력 개선을 위해 1~2주 간격으로 3~5회 이상 꾸준히 받으시는 것을 권장해 드립니다.",
    },
  ],
};

const en: CorrectionFitPageContent = {
  heroTagline: "Pain-free anti-aging that wakes cells first",
  heroNameKr: "Hommage Corage Cell-Fit",
  heroLeadLine1: "Without aggressive thermal damage, 16 resonance modes train skin cells to move.",
  heroLeadLine2: "Hommage helps you recover your skin’s natural radiance.",
  breadcrumbCurrent: "Corage Cell-Fit",
  concernLabel: "Concern",
  concernTitle: "Sound familiar?",
  painPoints: [
    "You want lifting lasers but fear the pain.",
    "You have events coming up and want to avoid redness or swelling.",
    "Your barrier feels thin and dry—you want strength from the base.",
    "You want a natural glow, not a dull, tired surface.",
  ],
  approachLabel: "OUR APPROACH",
  approachTitle: "Our answer",
  approachBeforeEm: "Don’t scrape or burn the skin into change. Now you need ",
  approachEmName: "Corage Cell-Fit",
  approachAfterEm: "—so cells can train themselves.",
  qmrLabel: "QMR Technology",
  qmrTitle: "Personal training for skin cells",
  qmrLead:
    "QMR (quantum molecular resonance), not RF heat, vibrates cells up to tens of millions of times per second.",
  principles: [
    { title: "Cell fitness", desc: "Resonance wakes sluggish cells so they work again." },
    { title: "Collagen & elastin", desc: "Support renewal in the dermis without forced injury." },
    { title: "Barrier strength", desc: "Boost metabolism to rebuild epidermis and dermis together." },
  ],
  benefitsLabel: "Why Cell-Fit",
  benefitsTitle: "Four reasons to choose it",
  benefits: [
    { en: "Comfort", title: "Gentle, low downtime", desc: "Most people return to routine and makeup right after." },
    { en: "Glow", title: "Immediate hydration glow", desc: "A clearer, water-lit finish from within." },
    { en: "Custom", title: "3-step applicators", desc: "Plasma roller, skin glove, ceramic tips matched to zone and condition." },
    { en: "Barrier", title: "Sensitive skin welcome", desc: "Designed not to strip—barrier can feel thicker with care." },
  ],
  whyHommageLabel: "Hommage Only",
  whyHommageTitle: "Why Hommage",
  whyHommageLead: "Same device, different hands—outcomes change with protocol and judgement.",
  whyUs: [
    { title: "1:1 dermatology-style check", desc: "The physician maps thickness, aging and hydration—not a factory line." },
    { title: "Signature protocol", desc: "Synergy ampoules and calming steps beyond “machine only.”" },
    { title: "Private relaxing care", desc: "Quiet single rooms to match the comfort-first promise." },
  ],
  processLabel: "Process",
  processTitle: "Treatment flow",
  processes: [
    { step: "01", title: "1:1 consult", desc: "In-depth skin assessment with the physician." },
    { step: "02", title: "Deep cleanse", desc: "Gentle prep without harsh friction." },
    { step: "03", title: "Cell-Fit delivery", desc: "Custom energy with roller, glove and ceramic tips." },
    { step: "04", title: "Premium calming", desc: "Ampoule infusion and modeling pack to lock moisture." },
    { step: "05", title: "Aftercare guide", desc: "Home routine and precautions explained." },
  ],
  faqLabel: "Q&A",
  faqTitle: "FAQ",
  faqs: [
    { q: "How painful is it?", a: "Most feel only warmth and a pleasant vibration—anaesthesia is rarely needed." },
    { q: "Can I resume life immediately?", a: "Yes—no intentional scabbing; cleanse and makeup are usually fine the same day." },
    {
      q: "How many sessions?",
      a: "One visit can brighten hydration; for sustained renewal we often suggest 3–5+ visits every 1–2 weeks.",
    },
  ],
};

const ja: CorrectionFitPageContent = {
  ...en,
  heroTagline: "痛みなく、細胞から目覚める本当のアンチエイジング",
  heroNameKr: "オマージュ コレジセルフィット",
  heroLeadLine1: "過度な熱損傷なく、16種の共鳴エネルギーで細胞を動かします。",
  heroLeadLine2: "オマージュで、失われた肌本来の輝きを取り戻します。",
  breadcrumbCurrent: "コレジセルフィット",
  concernTitle: "こんなお悩みはありませんか？",
  painPoints: en.painPoints,
  approachTitle: "オマージュの答え",
  approachBeforeEm: "無理に削らず焼かず、細胞が自ら動かす ",
  approachAfterEm: "が必要なときです。",
  qmrTitle: "肌細胞のパーソナルトレーニング",
  qmrLead: "高周波の熱ではなくQMRで、1秒に最大数千万回の細胞振動をかけます。",
  benefitsTitle: "4つの特長",
  whyHommageTitle: "なぜオマージュか",
  processTitle: "施術の流れ",
  faqTitle: "よくある質問",
  faqs: [
    { q: "痛みは？", a: "温かさと心地よい振動程度で、麻酔はほぼ不要な方が多いです。", },
    { q: "すぐ生活に戻れる？", a: "はい。意図的なかさぶたは出にくく、当日から洗顔・メイク可のことが多いです。", },
    { q: "何回？", a: "1回でも透明感を感じる方も。継続的な再生には1〜2週間隔で3〜5回以上を推奨します。", },
  ],
};

const zh: CorrectionFitPageContent = {
  ...en,
  heroTagline: "无痛、从细胞唤醒的真正抗老",
  heroNameKr: "Hommage Corage Cell-Fit",
  heroLeadLine1: "无粗暴热损伤，以 16 种共振能量驱动细胞运动。",
  heroLeadLine2: "在 Hommage 找回肌肤本真的光感。",
  breadcrumbCurrent: "Corage Cell-Fit",
  concernTitle: "您是否也有这些困扰？",
  approachTitle: "我们的答案",
  approachBeforeEm: "不要强行磨削或灼烧，现在需要的是让细胞自主运动的 ",
  approachAfterEm: "。",
  qmrTitle: "面向肌肤细胞的私人训练",
  qmrLead: "采用 QMR（量子分子共振）而非射频产热，每秒驱动海量级细胞振动。",
  benefitsTitle: "四大亮点",
  whyHommageTitle: "为何选择 Hommage",
  processTitle: "流程",
  faqTitle: "常见问题",
  faqs: [
    { q: "疼吗？", a: "多为温热与舒适振动，通常无需麻醉。", },
    { q: "能马上生活吗？", a: "可以，一般不刻意结痂，当天常可洁面化妆。", },
    { q: "要做几次？", a: "一次也能感受水润透亮；持续再生常建议每 1–2 周 3–5 次以上。", },
  ],
};

const ru: CorrectionFitPageContent = {
  ...en,
  heroTagline: "Без боли: омоложение с уровня клеток",
  heroNameKr: "Hommage Corage Cell-Fit",
  heroLeadLine1: "Без агрессивного теплового повреждения — 16 резонансных режимов «тренируют» клетки.",
  heroLeadLine2: "Hommage помогает вернуть естественное сияние кожи.",
  breadcrumbCurrent: "Corage Cell-Fit",
  concernTitle: "Знакомо?",
  approachTitle: "Наш ответ",
  approachBeforeEm: "Не стирайте и не «поджигайте» кожу — сейчас нужен ",
  approachAfterEm: ", чтобы клетки тренировались сами.",
  qmrTitle: "Персональный тренинг для клеток кожи",
  benefitsTitle: "Четыре причины",
  whyHommageTitle: "Почему Hommage",
  processTitle: "Этапы",
  faqTitle: "Вопросы",
};

const byLocale: Record<Locale, CorrectionFitPageContent> = { ko, en, ja, zh, ru };

export function getCorrectionFitPageContent(locale: Locale): CorrectionFitPageContent {
  return byLocale[locale] ?? ko;
}
