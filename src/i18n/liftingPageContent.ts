import type { Locale } from "@/i18n/messages";

export type LiftingFusionStep = { title: string; method: string; description: string };
export type LiftingSpeciality = { title: string; sub: string; description: string };
export type LiftingFeature = { num: string; title: string; sub: string; description: string; link: string };

export type LiftingPageContent = {
  heroDesc: string;
  introLine1: string;
  introLine2: string;
  fusionLabel: string;
  fusionHeadline: string;
  fusionLead: string;
  fusionSteps: LiftingFusionStep[];
  fusionCompleteKicker: string;
  fusionCompleteTitle: string;
  fusionCompleteLead: string;
  aboutLabel: string;
  aboutH2: string;
  aboutP1: string;
  aboutP2: string;
  tagsLabel: string;
  tags: string[];
  solutionKicker: string;
  solutionH2: string;
  featuresSectionKicker: string;
  featuresSectionH2: string;
  specialityItems: LiftingSpeciality[];
  featureItems: LiftingFeature[];
};

const featureLinks = [
  "/signature/ulthera-pro-prime",
  "/signature/onda",
  "/signature/tune-face",
  "/signature/correction-fit",
  "/signature/mint-thread",
  "/signature/silhouette-soft",
] as const;

function featuresFor(
  rows: { num: string; title: string; sub: string; description: string }[]
): LiftingFeature[] {
  return rows.map((r, i) => ({ ...r, link: featureLinks[i] }));
}

const ko: LiftingPageContent = {
  heroDesc:
    "아름다운 라인을 만드는 FIGURE MAKING을 모토로 탄생한 오마쥬의 TOP 시그니처 시술. 고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만듭니다.",
  introLine1:
    "고주파, 초음파, 레이저, 실 등을 이용한 최적의 리프팅 컴비네이션으로, 기술적 융합을 통해 단 1일만에 원하는 리프팅 효과를 구현합니다.",
  introLine2:
    "원데이 익스트림 리프팅 또는 조각주사와의 컴바인으로 더욱 효과적인 라인을 만드는 오마쥬만의 시그니처 경험입니다.",
  fusionLabel: "Fusion Approach",
  fusionHeadline: "리프팅은 한가지로 완성되지 않습니다",
  fusionLead: "당김은 실로, 탄력은 레이저로. 결과는 융합으로 완성됩니다.",
  fusionSteps: [
    { title: "당김", method: "실", description: "실리프팅으로 근본적인 당김 효과를 구현합니다." },
    { title: "탄력", method: "레이저", description: "레이저 에너지로 콜라겐 생성을 촉진하여 탄력을 개선합니다." },
    { title: "결과", method: "융합", description: "실과 레이저의 융합으로 완벽한 리프팅 결과를 완성합니다." },
  ],
  fusionCompleteKicker: "Complete Fusion",
  fusionCompleteTitle: "완벽한 융합의 결과",
  fusionCompleteLead:
    "실의 당김과 레이저의 탄력이 융합되어, 단일 시술로는 불가능한 완벽한 리프팅 결과를 만들어냅니다.",
  aboutLabel: "About Lifting",
  aboutH2: "리프팅이란?",
  aboutP1:
    "고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만들기 위한 최적의 리프팅 컴비네이션입니다. 각 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다.",
  aboutP2: "",
  tagsLabel: "주요 시술:",
  tags: ["울쎄라피 프라임", "온다", "튠페이스", "코레지셀핏", "실리프팅", "V라인 리프팅"],
  solutionKicker: "Hommage Solution",
  solutionH2: "오마쥬 클리닉 리프팅 솔루션",
  featuresSectionKicker: "Lifting Features",
  featuresSectionH2: "시술별 특징",
  specialityItems: [
    {
      title: "높은 고정력과 리프팅효과",
      sub: "STRONG FIXATION",
      description: "각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다.",
    },
    {
      title: "빠른 시술 속도",
      sub: "FAST PROCEDURE",
      description: "효율적인 시술 방법으로 바쁜 시간 중에도 편안하게 부담없이 받으실 수 있습니다.",
    },
    {
      title: "시술 후 통증 최소화",
      sub: "MINIMAL DISCOMFORT",
      description: "정확한 피부층에 에너지를 전달하면서 빠르게 완성하여 붓기와 멍, 통증이 거의 없는 방법으로 시술하고 있습니다.",
    },
    {
      title: "얼굴형 맞춤시술",
      sub: "CUSTOMIZED DESIGN",
      description: "개인의 골격, 피부 두께, 근육의 움직임까지 분석하여 가장 이상적인 리프팅 벡터를 설계합니다.",
    },
    {
      title: "편안한 시술",
      sub: "COMFORTABLE",
      description: "리프팅에 대한 걱정과 두려움을 최소화하여 편안하게 시술 받으실 수 있습니다.",
    },
  ],
  featureItems: featuresFor([
    {
      num: "01",
      title: "울쎄라피 프라임",
      sub: "ULTHERAPY PRIME",
      description: "마이크로포커스 초음파 기술로 SMAS층까지 에너지를 전달하는 FDA 승인 리프팅 시술",
    },
    {
      num: "02",
      title: "온다",
      sub: "ONDA",
      description: "고주파를 활용한 비침습 바디 컨투어링·리프팅 시술",
    },
    {
      num: "03",
      title: "튠페이스",
      sub: "TUNE FACE",
      description: "멀티 고주파를 활용한 페이스리프팅 시술로 3단계 깊이 조절이 가능",
    },
    {
      num: "04",
      title: "코레지셀핏",
      sub: "CORRECTION FIT",
      description: "고주파와 초음파를 결합한 종합 리프팅 시술",
    },
    {
      num: "05",
      title: "민트 실",
      sub: "MINT THREAD",
      description: "돌기가 달린 몰딩실을 사용한 비절개 리프팅 시술",
    },
    {
      num: "06",
      title: "실루엣소프트",
      sub: "SILHOUETTE SOFT",
      description: "부드러운 실을 사용한 자연스러운 리프팅 시술",
    },
  ]),
};

const en: LiftingPageContent = {
  heroDesc:
    "Hommage’s flagship lifting line, built around Figure Making—combining RF, ultrasound, laser and threads for a firmer, refined contour.",
  introLine1:
    "We layer proven lifting modalities so vectors, depth and recovery work together—often achieving a visible lift in a single intensive visit.",
  introLine2:
    "Signature combinations with one-day extreme lifting or adjunct protocols are available when your plan calls for maximum contour refinement.",
  fusionLabel: "Fusion Approach",
  fusionHeadline: "One modality alone rarely tells the whole story",
  fusionLead: "Lift with threads, firmness with energy devices—the finish is in how they fuse.",
  fusionSteps: [
    { title: "Lift", method: "Threads", description: "Vectors that anchor and elevate sagging tissue." },
    { title: "Elasticity", method: "Laser / energy", description: "Collagen-friendly heating for bounce and tone." },
    { title: "Outcome", method: "Fusion", description: "Combined planning completes what a single tool cannot." },
  ],
  fusionCompleteKicker: "Complete Fusion",
  fusionCompleteTitle: "The fused result",
  fusionCompleteLead:
    "Thread tension plus laser-driven tightening work together for a lift that feels more complete than either step alone.",
  aboutLabel: "About Lifting",
  aboutH2: "What is lifting?",
  aboutP1:
    "Lifting at Hommage means RF, ultrasound, laser and threads orchestrated in one plan—sometimes condensed into an intensive same-day protocol when appropriate.",
  aboutP2: "",
  tagsLabel: "Key modalities:",
  tags: ["Ultherapy Prime", "Onda", "Tune Face", "Corège Cell-Fit", "Thread lifting", "V-line contouring"],
  solutionKicker: "Hommage Solution",
  solutionH2: "Hommage lifting solutions",
  featuresSectionKicker: "Lifting Features",
  featuresSectionH2: "Treatment highlights",
  specialityItems: [
    {
      title: "Strong fixation & lift",
      sub: "STRONG FIXATION",
      description: "Technical combining of modalities to reach the lift you want—often within a focused visit.",
    },
    {
      title: "Efficient sessions",
      sub: "FAST PROCEDURE",
      description: "Streamlined protocols so even busy schedules can fit treatment comfortably.",
    },
    {
      title: "Minimal downtime focus",
      sub: "MINIMAL DISCOMFORT",
      description: "Precise depth targeting and refined technique to limit swelling, bruising and pain.",
    },
    {
      title: "Face-by-face design",
      sub: "CUSTOMIZED DESIGN",
      description: "Vectors shaped to your bone structure, skin thickness and muscle movement.",
    },
    {
      title: "Comfort-led care",
      sub: "COMFORTABLE",
      description: "We reduce anxiety around lifting with clear counselling and gentle pacing.",
    },
  ],
  featureItems: featuresFor([
    {
      num: "01",
      title: "Ultherapy Prime",
      sub: "ULTHERAPY PRIME",
      description: "Micro-focused ultrasound cleared for lifting down to the SMAS plane.",
    },
    {
      num: "02",
      title: "Onda",
      sub: "ONDA",
      description: "Non-invasive body contouring and tightening using Coolwaves RF.",
    },
    {
      num: "03",
      title: "Tune Face",
      sub: "TUNE FACE",
      description: "Multi-RF face lifting with three selectable depth levels.",
    },
    {
      num: "04",
      title: "Corège Cell-Fit",
      sub: "CORRECTION FIT",
      description: "Combined RF and ultrasound for holistic tightening.",
    },
    {
      num: "05",
      title: "Mint thread",
      sub: "MINT THREAD",
      description: "Non-surgical lift using molded PDO threads with cogs.",
    },
    {
      num: "06",
      title: "Silhouette Soft",
      sub: "SILHOUETTE SOFT",
      description: "Softer PDO threads for natural vector lifts.",
    },
  ]),
};

const ja: LiftingPageContent = {
  heroDesc:
    "FIGURE MAKINGをモットーにしたオマージュのトップシグネチャー。高周波・超音波・レーザー・糸などでハリのあるラインをデザインします。",
  introLine1:
    "最適なリフティングの組み合わせと技術的融合により、希望に近い引き上げを短期間で実現するプランをご提案します。",
  introLine2:
    "ワンデイ集中リフティングや併用プログラムなど、オマージュならではのシグネチャー体験です。",
  fusionLabel: "Fusion Approach",
  fusionHeadline: "リフティングはひとつの施術だけでは完成しません",
  fusionLead: "引き上げは糸、ハリはレーザー。仕上がりは融合で決まります。",
  fusionSteps: [
    { title: "引き上げ", method: "糸", description: "糸リフトでベクトル引き上げを設計します。" },
    { title: "ハリ", method: "レーザー", description: "レーザーでコラーゲン生成を後押しします。" },
    { title: "結果", method: "融合", description: "糸とエネルギー機器の融合でバランスを整えます。" },
  ],
  fusionCompleteKicker: "Complete Fusion",
  fusionCompleteTitle: "融合の結果",
  fusionCompleteLead: "糸の牽引とレーザーによる締まり感が組み合わさり、単独では難しい仕上がりに近づけます。",
  aboutLabel: "About Lifting",
  aboutH2: "リフティングとは？",
  aboutP1:
    "高周波・超音波・レーザー・糸を組み合わせ、Vラインとハリを目指すオーダーメイドプログラムです。状態に応じて同日集中プランも検討します。",
  aboutP2: "",
  tagsLabel: "主なメニュー:",
  tags: ["ウルセラプライム", "オンダ", "チューンフェイス", "コレジセルフィット", "糸リフト", "Vライン"],
  solutionKicker: "Hommage Solution",
  solutionH2: "オマージュクリニックのリフティングソリューション",
  featuresSectionKicker: "Lifting Features",
  featuresSectionH2: "施術ごとの特徴",
  specialityItems: [
    {
      title: "高い固定力とリフト感",
      sub: "STRONG FIXATION",
      description: "各施術を技術的に組み合わせ、短期間で引き上げ感を狙います。",
    },
    {
      title: "スピーディーな施術",
      sub: "FAST PROCEDURE",
      description: "効率的な手技で、お忙しい方も負担を抑えて受けやすくします。",
    },
    {
      title: "術後の痛み・腫れに配慮",
      sub: "MINIMAL DISCOMFORT",
      description: "正確な層へのエネルギー伝達で、腫れ・内出血・痛みを抑えます。",
    },
    {
      title: "顔型に合わせた設計",
      sub: "CUSTOMIZED DESIGN",
      description: "骨格・皮膚厚・筋運動を踏まえ、理想のベクトルを設計します。",
    },
    {
      title: "安心して受けられるケア",
      sub: "COMFORTABLE",
      description: "不安を減らす説明とペース配分で、リラックスして施術いただけます。",
    },
  ],
  featureItems: featuresFor([
    {
      num: "01",
      title: "ウルセラプライム",
      sub: "ULTHERAPY PRIME",
      description: "マイクロフォーカス超音波でSMAS層まで届くFDA承認リフティング。",
    },
    { num: "02", title: "オンダ", sub: "ONDA", description: "クールウェーブ高周波による非侵襲ボディケア。" },
    {
      num: "03",
      title: "チューンフェイス",
      sub: "TUNE FACE",
      description: "マルチRFで3段階の深さ調整が可能なフェイスリフト。",
    },
    {
      num: "04",
      title: "コレジセルフィット",
      sub: "CORRECTION FIT",
      description: "高周波と超音波を組み合わせた総合リフティング。",
    },
    { num: "05", title: "ミント糸", sub: "MINT THREAD", description: "突起付きPDO糸による非切開リフト。" },
    {
      num: "06",
      title: "シルエットソフト",
      sub: "SILHOUETTE SOFT",
      description: "やわらかい糸で自然な引き上げを実現。",
    },
  ]),
};

const zh: LiftingPageContent = {
  heroDesc:
    "以 Figure Making 为理念打造的 Hommage 招牌提拉项目，结合射频、超声、激光与线材，塑造紧致轮廓。",
  introLine1: "通过多种提拉方式的科学组合与技术融合，在可控时间内更接近您期望的提升效果。",
  introLine2: "亦可搭配一日强化提拉或联合方案，呈现 Hommage 独有的整合体验。",
  fusionLabel: "Fusion Approach",
  fusionHeadline: "单一项目往往无法完成全部目标",
  fusionLead: "提拉靠线材，紧致靠能量；最终质感来自融合设计。",
  fusionSteps: [
    { title: "提拉", method: "线雕", description: "以线材建立支撑与向量。" },
    { title: "紧致", method: "激光", description: "以激光能量促进胶原更新。" },
    { title: "结果", method: "融合", description: "联合方案弥补单一治疗的局限。" },
  ],
  fusionCompleteKicker: "Complete Fusion",
  fusionCompleteTitle: "融合后的整体效果",
  fusionCompleteLead: "线的牵拉与激光紧致相辅相成，更接近您想要的整体提升感。",
  aboutLabel: "About Lifting",
  aboutH2: "什么是提拉？",
  aboutP1:
    "综合运用射频、超声、激光与线材，针对 V 脸与紧致需求制定方案；必要时可安排同日集中治疗。",
  aboutP2: "",
  tagsLabel: "主要项目：",
  tags: ["Ultherapy Prime", "Onda", "Tune Face", "Corège Cell-Fit", "线雕提拉", "V 脸轮廓"],
  solutionKicker: "Hommage Solution",
  solutionH2: "Hommage 诊所提拉方案",
  featuresSectionKicker: "Lifting Features",
  featuresSectionH2: "各项目特点",
  specialityItems: [
    {
      title: "强固定与提升感",
      sub: "STRONG FIXATION",
      description: "多技术组合，在集中疗程内更接近目标提升。",
    },
    {
      title: "高效施术",
      sub: "FAST PROCEDURE",
      description: "流程优化，便于在紧凑日程中完成治疗。",
    },
    {
      title: "减轻术后不适",
      sub: "MINIMAL DISCOMFORT",
      description: "精准层次与能量传递，减少肿、淤与疼痛。",
    },
    {
      title: "按脸型定制",
      sub: "CUSTOMIZED DESIGN",
      description: "结合骨骼、皮肤厚度与表情肌设计向量。",
    },
    {
      title: "舒适体验",
      sub: "COMFORTABLE",
      description: "充分沟通与节奏安排，缓解对提拉的紧张感。",
    },
  ],
  featureItems: featuresFor([
    {
      num: "01",
      title: "Ultherapy Prime",
      sub: "ULTHERAPY PRIME",
      description: "微聚焦超声，能量可达 SMAS 层次。",
    },
    { num: "02", title: "Onda", sub: "ONDA", description: "Coolwaves 射频非侵入体雕与紧致。" },
    {
      num: "03",
      title: "Tune Face",
      sub: "TUNE FACE",
      description: "多极射频面部提拉，可三档调深。",
    },
    {
      num: "04",
      title: "Corège Cell-Fit",
      sub: "CORRECTION FIT",
      description: "射频联合超声的综合紧致方案。",
    },
    { num: "05", title: "Mint 线", sub: "MINT THREAD", description: "带刺 PDO 线非手术提拉。" },
    {
      num: "06",
      title: "Silhouette Soft",
      sub: "SILHOUETTE SOFT",
      description: "柔软线材打造自然提拉。",
    },
  ]),
};

const ru: LiftingPageContent = {
  heroDesc:
    "Флагманская линейка лифтинга Hommage в концепции Figure Making: РЧ, ультразвук, лазер и нити для чёткого овала.",
  introLine1:
    "Мы комбинируем проверенные методы так, чтобы вектор, глубина и восстановление работали вместе — часто заметный результат за один интенсивный визит.",
  introLine2:
    "Доступны фирменные программы с однодневным интенсивным лифтингом или сопутствующими протоколами.",
  fusionLabel: "Fusion Approach",
  fusionHeadline: "Одной технологии обычно недостаточно",
  fusionLead: "Подтяжка нитями, упругость — аппаратами; финал в их сочетании.",
  fusionSteps: [
    { title: "Подтяжка", method: "Нити", description: "Векторная фиксация и подъём тканей." },
    { title: "Упругость", method: "Лазер", description: "Мягкое нагревание для коллагена и тонуса." },
    { title: "Результат", method: "Синергия", description: "Совместный план закрывает то, что не даёт один метод." },
  ],
  fusionCompleteKicker: "Complete Fusion",
  fusionCompleteTitle: "Эффект синергии",
  fusionCompleteLead:
    "Натяжение нитей плюс аппаратное укрепление дают более цельный результат, чем каждый шаг по отдельности.",
  aboutLabel: "About Lifting",
  aboutH2: "Что такое лифтинг?",
  aboutP1:
    "В Hommage это РЧ, ультразвук, лазер и нити в одном плане — при показаниях возможен интенсивный протокол за один день.",
  aboutP2: "",
  tagsLabel: "Ключевые направления:",
  tags: ["Ultherapy Prime", "Onda", "Tune Face", "Corège Cell-Fit", "Нитевой лифтинг", "V-линия"],
  solutionKicker: "Hommage Solution",
  solutionH2: "Решения клиники Hommage",
  featuresSectionKicker: "Lifting Features",
  featuresSectionH2: "Особенности процедур",
  specialityItems: [
    {
      title: "Сильная фиксация",
      sub: "STRONG FIXATION",
      description: "Техническое сочетание процедур для выраженного подъёма за короткий срок.",
    },
    {
      title: "Эффективные сеансы",
      sub: "FAST PROCEDURE",
      description: "Оптимизированные протоколы для занятых пациентов.",
    },
    {
      title: "Минимум дискомфорта",
      sub: "MINIMAL DISCOMFORT",
      description: "Точная работа по слоям — меньше отёка и синяков.",
    },
    {
      title: "Индивидуальный дизайн",
      sub: "CUSTOMIZED DESIGN",
      description: "Векторы с учётом костей, толщины кожи и мимики.",
    },
    {
      title: "Спокойный приём",
      sub: "COMFORTABLE",
      description: "Подробная консультация снижает тревогу перед лифтингом.",
    },
  ],
  featureItems: featuresFor([
    {
      num: "01",
      title: "Ultherapy Prime",
      sub: "ULTHERAPY PRIME",
      description: "Микрофокусный ультразвук до уровня SMAS.",
    },
    { num: "02", title: "Onda", sub: "ONDA", description: "Неинвазивный RF-контуринг Coolwaves." },
    {
      num: "03",
      title: "Tune Face",
      sub: "TUNE FACE",
      description: "Мульти-RF с тремя уровнями глубины.",
    },
    {
      num: "04",
      title: "Corège Cell-Fit",
      sub: "CORRECTION FIT",
      description: "RF и ультразвук в одном протоколе.",
    },
    { num: "05", title: "Mint Thread", sub: "MINT THREAD", description: "PDO-нити с шипами." },
    {
      num: "06",
      title: "Silhouette Soft",
      sub: "SILHOUETTE SOFT",
      description: "Мягкие нити для естественного лифта.",
    },
  ]),
};

const byLocale: Record<Locale, LiftingPageContent> = { ko, en, ja, zh, ru };

export function getLiftingPageContent(locale: Locale): LiftingPageContent {
  return byLocale[locale] ?? ko;
}
