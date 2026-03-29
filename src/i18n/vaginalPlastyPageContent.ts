import type { Locale } from "@/i18n/messages";

export type VaginalPlastyPageContent = {
  heroTitle: string;
  heroTitleKr: string;
  heroDescription: string;
  s2Label: string;
  s2Title: string;
  s2Paras: string[];
  s3Label: string;
  s3Title: string;
  s3Paras: string[];
  s4Label: string;
  s4Title: string;
  methods: { title: string; description: string }[];
  s5Label: string;
  s5Title: string;
  s5Paras: string[];
  s6Label: string;
  s6Title: string;
  features: { title: string; desc: string }[];
  s7Label: string;
  s7Title: string;
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

const ko: VaginalPlastyPageContent = {
  heroTitle: "Vaginal Plasty",
  heroTitleKr: "질성형",
  heroDescription: "출산·노화·이완으로 저하된 질 탄력과 기능을 회복하기 위한 오마쥬 질성형 프로그램",
  s2Label: "WOMEN'S HEALTH",
  s2Title: "만족스럽지 못한 성관계 때문에 이혼까지?",
  s2Paras: [
    "기혼 남녀들이 많은 인터넷 커뮤니티를 보면 부부간의 성생활 고민들을 심심찮게 볼 수 있습니다. 그만큼 성관계 시 문제를 겪는 중년부부들이 많다는 의미입니다. 그러나 성생활 문제는 단순히 쉬쉬한다고 해결될 문제가 아닙니다.",
    "건강한 성생활이 이루어지지 않으면 부부간의 사이도 틀어지게 될 수 있습니다. 실제 만족스럽지 못한 성관계로 이혼을 선택하는 이들도 적지 않습니다. 또한 성관계 시 여성들의 자신감 저하를 초래하며, 넘어서 우울증으로까지 발전할 수 있습니다.",
    "다행인 것은 사회가 점차 개방되고, 정보를 얻기 쉬워지게 되면서 부부관계 문제를 해결하고자 하는 움직임이 활발해졌다는 것입니다. '레이저 질성형'을 선택하는 것으로 부부생활의 만족도를 높여줄 뿐 아니라 여성의 자신감 회복에 도움을 얻는 이들이 많아지고 있습니다.",
  ],
  s3Label: "3D LASER",
  s3Title: "'3D 입체 레이저 질성형'으로 질 성형의 완성도를 높이다",
  s3Paras: [
    "임신과 출산, 잦은 성관계, 노화 등의 요인으로 인해 여성의 질은 쉽게 탄력을 잃게 됩니다. 질이 밑으로 처지고 늘어져서 질 속이 비어있는 느낌이나 성관계 시 바람 빠지는 소리가 들리게 되는 것입니다.",
    "한번 넓어진 질 근육은 자연스럽게 회복되지 않습니다. 그렇다면 오마쥬클리닉의 '레이저 질성형'을 받는 것이 현명할 수 있습니다. 레이저를 이용해 이완된 질 벽과 주위 구조를 복원할 수 있습니다. 이를 통해 늘어난 질을 처녀 때처럼 좁고 탄력 있는 상태로 만드는 게 가능합니다.",
    "특히 오마쥬클리닉에서는 3D 입체 레이저 질성형을 실시하고 있습니다. 기존 질성형은 질후벽만을 교정하는 방식으로 이루어졌습니다. 그러나 3D 입체 레이저 질성형은 질후벽 뿐 아니라 질전벽도 교정할 수 있어 수술 효과가 극대화 됩니다.",
    "오마쥬클리닉의 레이저 질성형은 당일 퇴원이 가능하며, 수술 다음 날과 2주 후에만 내원하면 됩니다. 수술 직후 바로 활동이 가능할 만큼 회복이 빨라 일상생활에 지장을 주지 않습니다. 6주 후부터는 성관계도 이루어질 수 있습니다.",
  ],
  s4Label: "TREATMENT OPTIONS",
  s4Title: "나에게 맞는 질성형 방법",
  methods: [
    {
      title: "엠보싱 질 성형술",
      description:
        "질 입구에서부터 자궁입구까지 조여 주는 시술입니다. 늘어진 질 점막을 활용하여 질 후벽에 엠보싱 돌기를 만들어 본인은 물론 파트너의 성감을 극대화시켜줍니다. 질 점막을 자르지 않기 때문에 질 건조증, 신경손상 문제는 최소화됐습니다.",
    },
    {
      title: "회음부 성형술",
      description:
        "출산 후 질 이완 뿐 아니라 회음부 부위가 손상되어 질 일부가 겉에서 보이거나, 질 입구와 항문 사이의 간격이 좁거나, 늘어지고 검게 주름져 있는 등의 외관상 문제가 생겼을 때 적용합니다. 이를 통해 회음부 모양을 아름답게 개선하는 동시에 탄력적으로 가꿀 수 있습니다.",
    },
    {
      title: "골반 근육 재건술",
      description:
        "손상된 골반근육을 섬세하고 정교하게 복원시켜주는 방법입니다. 골반근육이 질 근육을 한 번 더 받쳐주어 질을 더욱 단단하게 조일 수 있습니다. 따라서 남녀 모두의 성감이 높아지는 효과를 얻을 수 있습니다.",
    },
    {
      title: "질필러",
      description:
        "질 점막의 위축·건조로 인한 불편감이 있을 때 부족한 볼륨을 섬세하게 보강하는 비수술 주사 시술입니다. 질벽 컨디션 개선과 촉감 향상을 함께 고려해 개인 상태에 맞춰 용량과 주입 층을 정밀 설계합니다.",
    },
  ],
  s5Label: "BENEFITS",
  s5Title: "성적 만족감과 건강, 두 가지를 동시에 이룰 수 있습니다.",
  s5Paras: [
    "오마쥬클리닉의 레이저 질성형을 통해 처지고 늘어진 질이 복원할 수 있습니다. 그러면 쌍방향 성적 만족감이 높아지는 효과를 경험할 수 있게 됩니다. 또한 여성으로서의 자신감을 회복할 수 있으며, 신혼 때와 같이 부부관계가 긴밀해지는 효과도 얻을 수 있습니다.",
    "여성 건강증진을 위한 수단이 되기도 합니다. 노화와 출산 등 각종 이유로 이완된 질근육 때문에 요실금, 자궁하수증, 질염, 질방귀 등의 증상에 노출되기 쉬워집니다. 레이저 질성형을 통해 이러한 증상까지 개선할 수 있어 1석 2조의 효과를 거둘 수 있습니다.",
  ],
  s6Label: "HOMMAGE ADVANTAGE",
  s6Title: "오마쥬클리닉 레이저 질성형의 특징",
  features: [
    { title: "정밀한 검사 시행", desc: "충분한 상담과 질압 측정 등 정밀한 진단을 거쳐 맞춤 시술이 이루어집니다." },
    { title: "노하우가 풍부한 의료진", desc: "진단부터 시술까지 전 과정을 실력 있는 의료진이 직접 진행합니다." },
    { title: "여성 건강을 위한 시술", desc: "질 이완으로 나타나는 다양한 여성 질환까지 해결할 수 있습니다." },
    { title: "안전하고 부담 없는 시술", desc: "신경과 혈관의 손상이 최소화되었으며, 통증 역시 적습니다." },
    { title: "빠른 회복기간", desc: "다음 날부터 일상생활이 가능할 만큼 회복이 빠릅니다." },
  ],
  s7Label: "FOR YOU",
  s7Title: "레이저 질성형, 누가 받으면 좋을까요?",
  recommend: [
    "강력한 질 축소 효과를 얻고 싶은 분",
    "본인 뿐 아니라 상대의 성감까지 향상시키고 싶은 분",
    "성관계 시 성기에서 바람 빠지는 소리가 나는 분",
    "출산 후 변형된 회음부 모양을 개선하고 싶은 분",
    "질염, 요실금 등 여성 질환에 시달리고 있는 분",
    "빠르게 일상으로 돌아갈 수 있는 시술을 원하는 분",
  ],
  processLabel: "PROCESS",
  processTitle: "레이저 질성형 정보",
  steps: [
    "STEP 01: 예약 후 오마쥬클리닉 내원",
    "STEP 02: 의료진 상담, 질압측정 등 정밀 진단",
    "STEP 03: 시술 계획 결정",
    "STEP 04: 수면마취 시행",
    "STEP 05: 1시간 동안 레이저 질성형",
    "STEP 06: 회복 및 사후관리법 안내 후 귀가",
  ],
  directorLabel: "MEDICAL DIRECTOR",
  directorTitle: "15년 이상 경력을 가진 산부인과전문의니까!",
  directorParas: [
    "여성에게 적용되는 모든 치료는 여성을 잘 아는 여성의료진이 잘 할 수 있습니다. 또 15년 이상의 경험을 가진 산부인과전문의이기에 오마쥬클리닉은 더욱 신뢰 가능합니다.",
    "여기에 오마쥬클리닉만의 안전시스템과 치료 후 회복 & 관리 프로그램 등이 더해져 더 만족스러운 의료서비스를 경험하실 수 있습니다.",
  ],
  directorKeywords: "[키워드: 여성 의료진 / 산부인과 전문의 / 15년 경력 / 섬세한 기술]",
  ctaTitle: "질성형 상담",
  ctaSub: "오마쥬클리닉이 1:1로 맞춤 설계해 드립니다.",
  ctaBook: "상담 예약",
  ctaHome: "HOME",
};

const en: VaginalPlastyPageContent = {
  heroTitle: "Vaginal Plasty",
  heroTitleKr: "Vaginal laser program",
  heroDescription:
    "Hommage program to support tone and function after childbirth, aging or laxity—physician-led, personalized.",
  s2Label: "WOMEN'S HEALTH",
  s2Title: "Intimacy struggles can affect relationships deeply",
  s2Paras: [
    "Many couples quietly face intimacy concerns; ignoring them rarely fixes the underlying issues.",
    "When intimacy suffers, emotional distance can grow—and for some, separation becomes a path people consider.",
    "More open conversation and care options mean many now explore laser vaginal tightening and related therapies with specialist support.",
  ],
  s3Label: "3D LASER",
  s3Title: "3D laser vaginal tightening—broader tissue support",
  s3Paras: [
    "Pregnancy, aging and other factors can reduce vaginal tone—sometimes with sensation of laxity or air passage during intercourse.",
    "Muscles rarely “bounce back” fully on their own; laser protocols can support tissue remodeling alongside medical assessment.",
    "Our 3D approach addresses posterior and anterior vectors when indicated—beyond posterior-only techniques in some legacy plans.",
    "Same-day discharge is often possible with limited visits; your team explains activity and intimacy timelines individually.",
  ],
  s4Label: "TREATMENT OPTIONS",
  s4Title: "Options matched to your goals",
  methods: [
    {
      title: "Embossing vaginoplasty pattern",
      description:
        "A tightening concept using mucosal remodeling toward the posterior wall to support sensation goals while minimizing unnecessary excision when planned this way.",
    },
    {
      title: "Perineoplasty",
      description:
        "For perineal changes after delivery—appearance, scarring or laxity—this can be combined when clinically appropriate.",
    },
    {
      title: "Pelvic floor support repair",
      description:
        "Targets damaged pelvic support to reinforce tone alongside vaginal goals when indicated.",
    },
    {
      title: "Vaginal filler (non-surgical)",
      description:
        "Volume support for atrophy-related dryness or discomfort—dose and plane are individualized.",
    },
  ],
  s5Label: "BENEFITS",
  s5Title: "Intimacy confidence and wellness together",
  s5Paras: [
    "Restoring support can improve mutual satisfaction and confidence for some patients—results vary and require candidacy screening.",
    "Addressing laxity may also relate to symptoms like stress incontinence or irritation patterns for some women—your physician maps this carefully.",
  ],
  s6Label: "HOMMAGE ADVANTAGE",
  s6Title: "Why Hommage laser vaginal program",
  features: [
    { title: "Thorough workup", desc: "Consultation with pressure testing and planning when indicated." },
    { title: "Experienced team", desc: "Continuity from assessment through procedure." },
    { title: "Women’s-health lens", desc: "Holistic discussion of related symptoms." },
    { title: "Safety-minded technique", desc: "Aims to limit nerve/vascular injury patterns." },
    { title: "Recovery focus", desc: "Many return to routine quickly per plan." },
  ],
  s7Label: "FOR YOU",
  s7Title: "Who often explores laser vaginal tightening?",
  recommend: [
    "Desires stronger tightening effect",
    "Hopes to improve mutual sensation",
    "Notices air passage during intercourse",
    "Perineal appearance after delivery",
    "Recurrent infections or incontinence linked to support loss",
    "Needs a quicker return to daily life",
  ],
  processLabel: "PROCESS",
  processTitle: "Typical flow",
  steps: [
    "STEP 01: Book and visit Hommage",
    "STEP 02: Consultation and diagnostics",
    "STEP 03: Confirm plan",
    "STEP 04: Anaesthesia per protocol",
    "STEP 05: Laser session (~1 hour typical)",
    "STEP 06: Aftercare and discharge",
  ],
  directorLabel: "MEDICAL DIRECTOR",
  directorTitle: "OB-GYN specialist with 15+ years",
  directorParas: [
    "Women’s procedures deserve clinicians who specialize in women’s anatomy—our pathway is specialist-led.",
    "Hommage safety systems and recovery programs aim to make the journey reassuring.",
  ],
  directorKeywords: "[Keywords: women’s clinician / OB-GYN / 15+ years / refined technique]",
  ctaTitle: "Vaginal plasty consult",
  ctaSub: "Hommage designs a 1:1 plan for you.",
  ctaBook: "Book consult",
  ctaHome: "HOME",
};

const ja: VaginalPlastyPageContent = {
  ...en,
  heroTitleKr: "膣形成",
  heroDescription: "出産・加齢・ゆるみからのタイトニングをサポートするオマージュのプログラム。",
  s2Title: "満足いかない性生活が関係に影響することも",
  s3Title: "3Dレーザーによるアプローチ",
  s7Title: "こんな方におすすめ",
  ctaTitle: "ご相談",
  ctaSub: "オマージュが1対1でプランをご提案します。",
  ctaBook: "予約",
};

const zh: VaginalPlastyPageContent = {
  ...en,
  heroTitleKr: "阴道整形",
  heroDescription: "针对分娩、衰老、松弛的 Hommage 激光紧致方案。",
  s2Title: "亲密关系困扰可能影响关系",
  s3Title: "3D 激光阴道紧致",
  s7Title: "适合人群",
  ctaTitle: "咨询",
  ctaSub: "Hommage 一对一方案设计。",
  ctaBook: "预约咨询",
};

const ru: VaginalPlastyPageContent = {
  ...en,
  heroTitleKr: "Вагинопластика",
  s7Title: "Кому может подойти",
  ctaTitle: "Консультация",
  ctaSub: "Индивидуальный план в Hommage.",
  ctaBook: "Запись",
};

const byLocale: Record<Locale, VaginalPlastyPageContent> = { ko, en, ja, zh, ru };

export function getVaginalPlastyPageContent(locale: Locale): VaginalPlastyPageContent {
  return byLocale[locale] ?? ko;
}
