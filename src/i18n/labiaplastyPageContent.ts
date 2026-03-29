import type { Locale } from "@/i18n/messages";

export type LabiaplastyPageContent = {
  heroTitle: string;
  heroTitleKr: string;
  heroDescription: string;
  s2Label: string;
  s2Title: string;
  s2Paras: string[];
  s3Label: string;
  s3Title: string;
  s3Paras: string[];
  idealBoxTitle: string;
  idealBoxText: string;
  s4Label: string;
  s4Title: string;
  s4Paras: string[];
  s5Label: string;
  s5Title: string;
  s5Cards: { title: string; body: string }[];
  s6Label: string;
  s6Title: string;
  features: { title: string; desc: string }[];
  s7Label: string;
  s7Title: string;
  specialPoints: { title: string; desc: string }[];
  s8Label: string;
  s8Title: string;
  recommend: string[];
  processLabel: string;
  processTitle: string;
  steps: string[];
  directorLabel: string;
  directorTitle: string;
  directorParas: string[];
  directorKeywords: string;
  ctaTitle: string;
  ctaSub: string;
  ctaBook: string;
  ctaHome: string;
};

const ko: LabiaplastyPageContent = {
  heroTitle: "Laser Labiaplasty",
  heroTitleKr: "레이저 소음순성형",
  heroDescription:
    "기형적 소음순 모양을 간단하게 바꿀 방법. 아름다운 소음순으로 가꿔드리는 레이저 소음순성형",
  s2Label: "WOMEN'S HEALTH",
  s2Title: '"비대한 소음순, 심미적·기능적 콤플렉스 유발해..."',
  s2Paras: [
    "소음순이란 여성의 질 입구에 존재하는 한 쌍의 날개 모양의 구조물입니다. 소음순은 여성의 성기에서 미적으로 중요한 부위입니다. 연한 갈색이나 분홍빛을 띠며, 폭은 1.5cm 이내일 때 이상적인 소음순으로 보고 있습니다.",
    "소음순은 기능적으로도 아주 중요한 역할을 하는데 질이나 요도가 건조해지지 않도록 보호하고 외부의 세균이 침투되지 않도록 막아줍니다.",
    "그런데 선천적, 후천적 요인으로 인해 소음순이 비대해지는 경우가 많습니다. 선천적으로 모양이 비대칭이거나 잘못된 습관, 출산, 노화 등으로 인해 소음순이 늘어지면 생활에 불편함이 유발될 수 있습니다. 끼이는 옷을 입을 때 통증이 나타나기도 하며, 위생관리가 어려워 냄새가 나고 질 분비물 배출이 원활하지 않아 질염이나 방광염에 걸릴 확률도 높아집니다.",
  ],
  s3Label: "LASER LABIAPLASTY",
  s3Title: "균형잡힌 소음순 모양을 만들어주는 '레이저 소음순성형'",
  s3Paras: [
    "미관상 좋지 않은 소음순 모양일 뿐 아니라 일상에 불편함까지 생긴다면 '레이저 소음순성형'을 받아보는 것이 현명한 선택이 될 수 있습니다. 레이저 소음순성형은 기형적 소음순 모양을 예쁘게 바꿔주어 심미적·기능적 효과를 모두 거둘 수 있는 수술입니다.",
    "레이저 소음순성형은 단순히 소음순의 크기를 줄여주는 시술이 아닙니다. 이는 소음순 부근의 주름이나 전체적인 모양과 균형까지 맞춰주는 방법이라 할 수 있습니다. 이러한 시술을 진행하는데 있어 매우 섬세한 기술이 필요합니다. 소음순은 신경조직과 혈관이 풍부해 자극에 매우 민감한 조직이기 때문입니다.",
    "오마쥬클리닉은 레이저를 사용하여 표피부분만을 얇게 절제하고, 감각에 중요한 신경 및 혈관 등 내부 조직들은 보존하는 시술을 진행하고 있습니다. 신경과 혈관 손상을 최소화했기 때문에 통증이 적고, 부종과 출혈이 발생할 가능성도 낮습니다. 감각이 손실되는 부작용 걱정도 하지 않을 수 있습니다. 회복도 빨라 일상생활로 신속하게 복귀할 수 있습니다.",
  ],
  idealBoxTitle: "이상적인 소음순",
  idealBoxText:
    "비정상적인 소음순 형태: 일부비대 / 불균형 / 한쪽비대 / 하단주름 / 과대주름 소음순",
  s4Label: "VESALIUS",
  s4Title: "절개와 지혈을 동시에 '베살리우스'로 안전한 소음순성형을!",
  s4Paras: [
    "베살리우스는 여러 파형을 동시에 사용하는 QMR 즉, 분자공명기술로 분자를 진동시켜 절개하는 장비입니다. Telea 사의 특허 받은 분자공명기술로 4, 8, 12, 16 MHz의 주파수를 순차적이 아닌 동시에 발생시켜 시술 부위에 열 상승 없이 에너지를 전달합니다.",
    "기존의 레이저는 높은 열을 발생시켰기 때문에 각종 부작용에 노출되기 쉬웠습니다. 그러나 베살리우스는 50-60도 이내의 저온에서 절개가 가능하기 때문에 조직의 손상이 거의 없이 매끄럽게 절개가 됨과 동시에 지혈이 이루어집니다.",
    "때문에 시술부위나 그 주변 부위의 피부, 신경, 혈관 손상이 적어 화상이나 괴사가 최소화됩니다. 시술 후 피부 봉합 과정도 크게 필요하지 않습니다. 부종과 통증, 흉터 걱정 없이 다음날 출근이 가능할 정도로 회복도 빠릅니다.",
  ],
  s5Label: "CUSTOMIZED",
  s5Title: "모양부터 색깔까지, 맞춤 소음순성형이 이루어집니다",
  s5Cards: [
    {
      title: "베살리우스를 통한 3D 입체 디자인 소음순성형",
      body: "맞춤 소음순성형을 통해 지스팟 부위를 부풀려주면 성교 시 자극이 잘 전달되어 성감의 극대화될 수 있습니다. 평상시 느끼지 못했던 오르가즘에 도달할 확률이 급격하게 증가한다는 뜻입니다. 그만큼 성관계 중 질 수축력도 올라가게 되어 남성의 성감 역시 높아질 수 있습니다.",
    },
    {
      title: "칙칙한 소음순 색깔도 변화시켜줍니다",
      body: "소음순이 검게 색소 침착이 된 경우에 소음순미백 레이저를 적용합니다. 레이저를 이용해 소음순 색깔을 핑크빛으로 회복할 수 있습니다. 효과는 표면 마취 20분, 시술 15분으로 이루어지며, 반영구적으로 효과가 지속됩니다. 시술 후 1주일부턴 성생활이 가능합니다.",
    },
  ],
  s6Label: "HOMMAGE ADVANTAGE",
  s6Title: "오마쥬클리닉 레이저 소음순성형의 특징",
  features: [
    {
      title: "이상적인 소음순모양 형성",
      desc: "성감에 영향을 주지 않으면서 여성으로서의 자신감을 회복할 수 있습니다.",
    },
    {
      title: "여성건강에도 도움을 주는 수술",
      desc: "소음순 비대로 인한 질염, 방광염 등 질환까지 개선 가능해 여성건강에도 도움을 줍니다.",
    },
    {
      title: "티 나지 않은 자연스러움",
      desc: "수술 후 흉터가 적으며, 표시가 나지 않는 자연스러운 수술입니다.",
    },
    {
      title: "수술 부작용 NO",
      desc: "괴사, 출혈, 통증 등의 부작용이 거의 없는 안전성을 갖추고 있습니다.",
    },
    {
      title: "시술 후 신속한 일상복귀",
      desc: "회복이 빨라 시술 후 바로 일상생활이 가능합니다.",
    },
  ],
  s7Label: "WHY HOMMAGE",
  s7Title: "오마쥬만의 특별한 점",
  specialPoints: [
    {
      title: "베살리우스 소음순 수술",
      desc: "65도 낮은 온도와 특수 파장을 이용한 베살리우스를 통해 안전한 소음순 수술을 받을 수 있습니다. 일반 레이저 절개와 달리 조직 손상, 출혈, 붓기, 멍 등이 최소화되었기 때문입니다. 뿐만 아니라 수술시간과 회복기간 역시 단축된다는 장점까지 갖추었습니다.",
    },
    {
      title: "소음순 미세조각 주사",
      desc: "소음순 수술 후 약간의 비대칭이라도 발생했다면 오마쥬클리닉에서 책임지고 해결해드립니다. 오마쥬만의 특별한 비법인 주사요법 소음순 미세조각 주사를 통해 단 1mm의 차이까지 교정할 수 있습니다.",
    },
    {
      title: "산부인과 전문의가 총괄",
      desc: "소음순 수술이 이루어지는 처음부터 끝까지 오마쥬클리닉 원장님이 직접 진행합니다. 10년 경력의 산부인과 전문의가 상담은 물론 수술까지 전 과정 참여하기 때문에 환자가 먼저 만족할 수 있는 수준 높은 수술이 이루어질 수 있습니다.",
    },
  ],
  s8Label: "FOR YOU",
  s8Title: "레이저 소음순성형, 누가 받으면 좋을까요?",
  recommend: [
    "소음순 모양이 비대칭인 분",
    "소음순이 심하게 늘어진 분",
    "소음순 주름이 과하게 잡힌 분",
    "비대한 소음순으로 질염, 방광염에 자주 걸리는 분",
    "검게 색소침착이 된 소음순이 콤플렉스인 분",
    "소음순 변형으로 성관계 시 자신이 없는 분",
    "다른 병원에서의 치료 후 비대칭, 실밥자국, 색소침착이 남은 분",
  ],
  processLabel: "PROCESS",
  processTitle: "레이저 소음순성형 정보",
  steps: [
    "STEP 01: 예약 후 오마쥬클리닉 내원",
    "STEP 02: 의료진 상담, 소음순 상태 진단",
    "STEP 03: 시술 계획 결정",
    "STEP 04: 수면마취 or 국소마취 선택",
    "STEP 05: 40분 간 레이저 소음순 성형",
    "STEP 06: 회복 및 사후관리법 안내 후 귀가",
  ],
  directorLabel: "MEDICAL DIRECTOR",
  directorTitle: "10년 이상 경력을 가진 산부인과전문의니까!",
  directorParas: [
    "여성에게 적용되는 모든 치료는 여성을 잘 아는 여성의료진이 잘 할 수 있습니다. 또 10년 이상의 경험을 가진 산부인과전문의이기에 오마쥬클리닉은 더욱 신뢰 가능합니다.",
    "여기에 오마쥬클리닉만의 안전시스템과 치료 후 회복 & 관리 프로그램 등이 더해져 더 만족스러운 의료서비스를 경험하실 수 있습니다.",
  ],
  directorKeywords: "[키워드: 여성 의료진 / 산부인과 전문의 / 10년 경력 / 섬세한 기술]",
  ctaTitle: "소음순성형 상담",
  ctaSub: "오마쥬클리닉이 1:1로 맞춤 설계해 드립니다.",
  ctaBook: "상담 예약",
  ctaHome: "HOME",
};

const en: LabiaplastyPageContent = {
  heroTitle: "Laser Labiaplasty",
  heroTitleKr: "Laser labiaplasty",
  heroDescription:
    "A refined approach to reshaping asymmetric or enlarged labia—laser labiaplasty for comfort and confidence.",
  s2Label: "WOMEN'S HEALTH",
  s2Title: '"Enlarged labia can affect both aesthetics and daily life…"',
  s2Paras: [
    "The labia are paired structures at the vaginal entrance and matter both aesthetically and functionally. An ideal width is often considered within about 1.5 cm, with even tone.",
    "They help protect moisture balance and reduce bacterial ingress.",
    "Congenital shape, habits, childbirth or aging can enlarge or stretch tissue—causing friction, hygiene issues, odor, discharge problems and higher risk of irritation or infection.",
  ],
  s3Label: "LASER LABIAPLASTY",
  s3Title: "Laser labiaplasty for balanced, natural contour",
  s3Paras: [
    "When appearance and comfort are both affected, laser labiaplasty can address shape while preserving sensitivity-focused anatomy.",
    "It is not only reduction—wrinkles and overall symmetry are considered, requiring delicate technique in highly innervated tissue.",
    "We prioritize thin epithelial trimming with preservation of key neurovascular structures when appropriate—aiming for less pain, swelling and bleeding, faster recovery, and preserved sensation.",
  ],
  idealBoxTitle: "Ideal labial contour",
  idealBoxText: "Examples of concerns: partial hypertrophy, asymmetry, unilateral enlargement, lower-edge folds, redundant tissue.",
  s4Label: "VESALIUS",
  s4Title: "Vesalius: incision with hemostasis at controlled low temperature",
  s4Paras: [
    "Vesalius uses QMR (quantum molecular resonance) to cut with multiple waveforms, delivering energy with minimal heat rise.",
    "Unlike older high-heat lasers, low-temperature cutting around 50–60°C can mean smoother incision with concurrent hemostasis.",
    "That can reduce burn/necrosis risk, limit suturing needs, and support quicker return to routine for many patients.",
  ],
  s5Label: "CUSTOMIZED",
  s5Title: "From shape to tone—personalized planning",
  s5Cards: [
    {
      title: "3D design with Vesalius",
      body: "Individualized contouring aims to support comfort and intimacy goals; your physician discusses expectations in consult.",
    },
    {
      title: "Addressing darker pigmentation",
      body: "When pigment is a concern, whitening laser options may be discussed after assessment. Typical visits include topical anaesthesia and a short procedure; intimacy timing follows clinic guidance.",
    },
  ],
  s6Label: "HOMMAGE ADVANTAGE",
  s6Title: "Why Hommage laser labiaplasty",
  features: [
    { title: "Contour goals", desc: "Aims to support confidence while respecting functional anatomy." },
    { title: "Women’s health angle", desc: "May reduce friction-related irritation linked to hypertrophy when clinically indicated." },
    { title: "Natural appearance", desc: "Designed for discreet, natural-looking results." },
    { title: "Safety focus", desc: "Protocols aim to limit major complications; candidacy is determined in person." },
    { title: "Recovery", desc: "Many patients resume routine quickly per plan." },
  ],
  s7Label: "WHY HOMMAGE",
  s7Title: "What makes Hommage different",
  specialPoints: [
    {
      title: "Vesalius protocol",
      desc: "Low-temperature resonance cutting is selected when appropriate to reduce thermal injury patterns vs some legacy lasers.",
    },
    {
      title: "Micro-sculpting injections",
      desc: "Minor asymmetry after healing may be addressed with clinic-specific adjunct techniques when suitable.",
    },
    {
      title: "OB-GYN specialist oversight",
      desc: "Consultation through recovery is led by an experienced women’s health physician.",
    },
  ],
  s8Label: "FOR YOU",
  s8Title: "Who often considers laser labiaplasty?",
  recommend: [
    "Noticeable asymmetry",
    "Significant laxity or elongation",
    "Prominent folds",
    "Recurrent irritation or infections linked to hypertrophy",
    "Pigmentation concerns",
    "Confidence issues during intimacy",
    "Revision after prior treatment elsewhere",
  ],
  processLabel: "PROCESS",
  processTitle: "Treatment overview",
  steps: [
    "STEP 01: Visit Hommage after booking",
    "STEP 02: Consultation and examination",
    "STEP 03: Plan confirmation",
    "STEP 04: General or local anaesthesia per plan",
    "STEP 05: Laser procedure (~40 minutes typical)",
    "STEP 06: Aftercare instructions and discharge",
  ],
  directorLabel: "MEDICAL DIRECTOR",
  directorTitle: "Board-certified OB-GYN with 10+ years’ experience",
  directorParas: [
    "Women’s procedures benefit from clinicians who understand women’s anatomy and concerns—our specialist-led pathway reflects that.",
    "Hommage safety systems and recovery guidance are added to support a reassuring experience.",
  ],
  directorKeywords: "[Keywords: women’s clinician / OB-GYN specialist / 10+ years / delicate technique]",
  ctaTitle: "Labiaplasty consult",
  ctaSub: "Hommage designs a 1:1 plan for you.",
  ctaBook: "Book consult",
  ctaHome: "HOME",
};

const ja: LabiaplastyPageContent = {
  ...en,
  heroTitleKr: "レーザー小陰唇形成",
  heroDescription:
    "形の崩れや過大な小陰唇を、レーザーで整えるオマージュの小陰唇形成。",
  s2Title: "「過大な小陰唇は見た目と生活の両方に影響することが…」",
  s3Title: "バランスの取れた形へ—レーザー小陰唇形成",
  s8Title: "こんな方におすすめ",
  ctaTitle: "ご相談",
  ctaSub: "オマージュが1対1でプランをご提案します。",
  ctaBook: "予約",
};

const zh: LabiaplastyPageContent = {
  ...en,
  heroTitleKr: "激光小阴唇整形",
  heroDescription: "改善形态与不适的激光小阴唇整形方案。",
  s2Title: "“小阴唇肥大可能影响外观与日常…”",
  s3Title: "激光小阴唇整形，重塑平衡轮廓",
  s8Title: "适合人群",
  ctaTitle: "咨询",
  ctaSub: "Hommage 提供一对一方案设计。",
  ctaBook: "预约咨询",
};

const ru: LabiaplastyPageContent = {
  ...en,
  heroTitleKr: "Лазерная лабиопластика",
  s8Title: "Кому может подойти",
  ctaTitle: "Консультация",
  ctaSub: "Hommage — индивидуальный план.",
  ctaBook: "Запись",
};

const byLocale: Record<Locale, LabiaplastyPageContent> = { ko, en, ja, zh, ru };

export function getLabiaplastyPageContent(locale: Locale): LabiaplastyPageContent {
  return byLocale[locale] ?? ko;
}
