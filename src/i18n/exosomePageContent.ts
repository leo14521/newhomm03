import type { Locale } from "@/i18n/messages";

export type ExosomeFeature = { title: string; sub: string; description: string };

export type ExosomePageContent = {
  heroTitleKr: string;
  heroDesc: string;
  aboutKicker: string;
  aboutH2: string;
  aboutParas: string[];
  solutionKicker: string;
  solutionBefore: string;
  solutionAccent: string;
  solutionAfter: string;
  features: ExosomeFeature[];
  recommend: string[];
  flow: string[];
  forYouKicker: string;
  forYouH2: string;
  flowKicker: string;
  flowH2: string;
  footnote: string;
};

const ko: ExosomePageContent = {
  heroTitleKr: "엑소좀",
  heroDesc:
    "줄기세포에서 추출한 엑소좀을 활용한 차세대 스킨부스터. 세포 노화를 억제하고 피부 재생을 촉진합니다.",
  aboutKicker: "About Exosome",
  aboutH2: "엑소좀 케어란?",
  aboutParas: [
    "엑소좀은 세포가 분비하는 **나노 크기의 소포**로, 성장인자·단백질·RNA 등 정보 물질을 다른 세포로 전달합니다. 줄기세포 배양에서 정제한 엑소좀을 피부에 도입하면 **진피 재생·탄력·수분 장벽**에 긍정적인 변화를 기대하는 케이스가 많습니다.",
    "히알루론산 단일 성분과 달리 **‘세포 간 대화’**에 가까운 접근이라, 잔주름·칙칙한 톤·거친 결을 동시에 다루고 싶을 때 스킨부스터 라인업으로 선택되기도 합니다.",
    "오마쥬에서는 제품 특성과 피부 상태에 맞춰 **주입 깊이·횟수·병합 시술**을 조정하고, 민감 피부는 테스트 패치와 완만한 도입으로 부담을 줄입니다.",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "오마쥬 클리닉 ",
  solutionAccent: "엑소좀",
  solutionAfter: " 솔루션",
  features: [
    {
      title: "줄기세포 엑소좀",
      sub: "STEM CELL EXOSOME",
      description: "줄기세포에서 추출한 엑소좀은 세포 간 신호 전달 물질을 포함하여 피부 재생을 촉진합니다.",
    },
    {
      title: "항노화 효과",
      sub: "ANTI-AGING",
      description: "세포 노화를 억제하고 젊은 세포의 기능을 활성화하여 항노화 효과를 제공합니다.",
    },
    {
      title: "피부 재생",
      sub: "SKIN REGENERATION",
      description: "손상된 피부 세포를 복구하고 새로운 세포 생성을 촉진하여 피부를 재생시킵니다.",
    },
    {
      title: "콜라겐 생성",
      sub: "COLLAGEN PRODUCTION",
      description: "콜라겐과 엘라스틴 생성을 촉진하여 피부 탄력과 주름 개선에 효과적입니다.",
    },
  ],
  recommend: [
    "잔주름·건조·탄력 저하가 함께 신경 쓰이는 분",
    "레이저·필링 후 붉은 기·장벽 회복을 돕고 싶은 분",
    "일반 스킨부스터만으로는 만족도가 아쉬워 재생 케어를 찾는 분",
    "자연스러운 광채·피부 질 개선을 단기 시술로 보완하고 싶은 분",
  ],
  flow: [
    "피부 타입·민감도·최근 시술 이력을 확인한 뒤, 농도와 주입 층·부위를 정합니다.",
    "세안·마취 크림(필요 시) 후 미세 주입 또는 디바이스에 맞춰 도포·전달합니다.",
    "시술 직후 홍조·미세 부기가 있을 수 있으며 당일 가벼운 세안·메이크업은 지침에 따릅니다.",
    "수일 내 건조함이 느껴질 수 있어 보습·자외선 차단을 권장하며, 코스 형태로 반복 시 효과가 누적되는 경우가 많습니다.",
  ],
  forYouKicker: "For You",
  forYouH2: "이런 분께 추천합니다",
  flowKicker: "Flow",
  flowH2: "시술 흐름 · 유의사항",
  footnote:
    "* 면역 질환 활동기·임신 수유 중·특정 알레르기는 시술이 제한될 수 있습니다. 복용 중인 약물은 상담 시 함께 알려 주세요.",
};

const en: ExosomePageContent = {
  heroTitleKr: "Exosome",
  heroDesc:
    "Next-generation skin booster using stem-cell–derived exosomes to support renewal and soften signs of ageing.",
  aboutKicker: "About Exosome",
  aboutH2: "What is exosome care?",
  aboutParas: [
    "Exosomes are **nano-sized vesicles** packed with growth factors, proteins and RNA that cells use to signal each other. Purified exosomes from stem-cell culture are introduced to support **dermal repair, elasticity and barrier function**.",
    "Unlike single-ingredient HA, this is closer to **cell-to-cell messaging**—often chosen when fine lines, dull tone and texture need to be addressed together.",
    "At Hommage we adjust **depth, passes and combination treatments** to your skin; sensitive skin may start with a test patch and a gentle ramp-up.",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "Hommage Clinic ",
  solutionAccent: "exosome",
  solutionAfter: " programme",
  features: [
    {
      title: "Stem-cell exosomes",
      sub: "STEM CELL EXOSOME",
      description: "Signalling-rich particles from stem-cell sources to encourage skin renewal.",
    },
    {
      title: "Anti-ageing focus",
      sub: "ANTI-AGING",
      description: "Aims to calm stress markers in skin and support a fresher cellular environment.",
    },
    {
      title: "Regeneration",
      sub: "SKIN REGENERATION",
      description: "Helps repair pathways and turnover for smoother, healthier-looking skin.",
    },
    {
      title: "Collagen support",
      sub: "COLLAGEN PRODUCTION",
      description: "Fibroblast-friendly signalling for elasticity and line softening over time.",
    },
  ],
  recommend: [
    "Fine lines plus dryness or laxity bother you together",
    "You want help calming skin after laser or peeling",
    "Classic boosters felt too shallow and you want regenerative care",
    "You want glow and texture polish without heavy downtime",
  ],
  flow: [
    "We review skin type, sensitivity and recent procedures, then plan layer, dose and area.",
    "After cleansing (and topical anaesthetic if needed), product is delivered by micro-injection or device.",
    "Mild redness or swelling may appear; same-day light cleansing/makeup per written advice.",
    "Dryness can follow for a few days—moisturise and use SPF; courses often build cumulative change.",
  ],
  forYouKicker: "For You",
  forYouH2: "You might love this if…",
  flowKicker: "Flow",
  flowH2: "Visit flow & notes",
  footnote:
    "* Active immune disease, pregnancy/breastfeeding or some allergies may limit treatment—list all medications at consultation.",
};

const ja: ExosomePageContent = {
  heroTitleKr: "エクソソーム",
  heroDesc:
    "幹細胞由来エクソソームを用いた次世代スキンブースター。再生とエイジングケアをサポートします。",
  aboutKicker: "About Exosome",
  aboutH2: "エクソソームケアとは？",
  aboutParas: [
    "エクソソームは細胞が分泌する**ナノサイズの小胞**で、成長因子やタンパク質、RNAなどの情報を運びます。培養由来エクソソームで**真皮再生・ハリ・バリア**の改善を目指します。",
    "単一のヒアルロン酸とは異なり**細胞間シグナル**に近いアプローチで、小じわ・くすみ・キメを同時にケアしたい方に選ばれます。",
    "オマージュでは肌状態に合わせ**注入深度・回数・併用**を調整し、敏感肌はパッチテストと段階的導入で負担を抑えます。",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "オマージュクリニック ",
  solutionAccent: "エクソソーム",
  solutionAfter: " ソリューション",
  features: [
    {
      title: "幹細胞エクソソーム",
      sub: "STEM CELL EXOSOME",
      description: "幹細胞由来のシグナル物質で肌再生を後押しします。",
    },
    {
      title: "エイジングケア",
      sub: "ANTI-AGING",
      description: "若々しい細胞機能のサポートを目指します。",
    },
    {
      title: "肌再生",
      sub: "SKIN REGENERATION",
      description: "損傷修復とターンオーバーのサポート。",
    },
    {
      title: "コラーゲン",
      sub: "COLLAGEN PRODUCTION",
      description: "弾力・しわケアに寄与するコラーゲン環境をサポート。",
    },
  ],
  recommend: [
    "小じわ・乾燥・ハリ低下が同時に気になる方",
    "レーザー・ピーリング後の赤みやバリアケアを整えたい方",
    "従来ブースターでは物足りず再生ケアを求める方",
    "自然なツヤとキメを短時間施術で補いたい方",
  ],
  flow: [
    "肌タイプ・敏感さ・既往を確認し、濃度・層・部位を決めます。",
    "洗顔・麻酔クリーム（必要時）後、微細注入または機器で導入します。",
    "直後の赤み・軽い腫れがあり得ます。当日のケアは指示に従ってください。",
    "数日乾燥を感じることがあり保湿・UVケアを。コースで変化が積み上がることがあります。",
  ],
  forYouKicker: "For You",
  forYouH2: "こんな方におすすめ",
  flowKicker: "Flow",
  flowH2: "施術の流れ・注意",
  footnote:
    "* 免疫疾患活動期・妊娠授乳・特定アレルギーでは制限がある場合があります。内服中のお薬はご相談時にお知らせください。",
};

const zh: ExosomePageContent = {
  heroTitleKr: "外泌体",
  heroDesc: "干细胞来源外泌体的新一代皮肤助推疗程，侧重再生与抗老护理。",
  aboutKicker: "About Exosome",
  aboutH2: "什么是外泌体护理？",
  aboutParas: [
    "外泌体是细胞分泌的**纳米级囊泡**，携带生长因子、蛋白与 RNA 等信息。**真皮修护、弹性与屏障**常作为护理目标。",
    "相较单一透明质酸，更接近**细胞间通讯**，适合同时在意细纹、暗沉与粗糙的人群。",
    "Hommage 会按肤质调整**注射层次、次数与联合方案**；敏感肌可先小范围测试并逐步加强。",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "Hommage 诊所 ",
  solutionAccent: "外泌体",
  solutionAfter: " 方案",
  features: [
    {
      title: "干细胞外泌体",
      sub: "STEM CELL EXOSOME",
      description: "富含细胞间信号物质，支持皮肤更新。",
    },
    { title: "抗老导向", sub: "ANTI-AGING", description: "帮助维持更年轻的细胞环境。" },
    { title: "皮肤再生", sub: "SKIN REGENERATION", description: "支持修护与角质更新。" },
    { title: "胶原支持", sub: "COLLAGEN PRODUCTION", description: "促进弹性与细纹改善的胶原环境。" },
  ],
  recommend: [
    "细纹、干燥、松弛同时困扰",
    "激光或焕肤后希望舒缓泛红、修护屏障",
    "传统水光/助推觉得不够，想要再生型护理",
    "想用较短恢复期补充光泽与肤质",
  ],
  flow: [
    "评估肤质、敏感史与近期疗程，确定浓度、层次与部位。",
    "洁面后（必要时表麻），以微针/设备导入。",
    "术后可有泛红或轻微肿胀，当日护理遵医嘱。",
    "数日内可能干燥，需保湿防晒；疗程常可叠加效果。",
  ],
  forYouKicker: "For You",
  forYouH2: "适合人群",
  flowKicker: "Flow",
  flowH2: "流程与注意",
  footnote: "* 免疫疾病活动期、妊娠哺乳、部分过敏情况可能不宜；请将用药告知医师。",
};

const ru: ExosomePageContent = {
  heroTitleKr: "Экзосомы",
  heroDesc:
    "Современный skin-boostер на основе экзосом из культуры стволовых клеток для обновления кожи.",
  aboutKicker: "About Exosome",
  aboutH2: "Что такое уход с экзосомами?",
  aboutParas: [
    "Экзомы — **нано-везикулы** с факторами роста, белками и РНК. Очищенные экзосомы помогают **дерме, упругости и барьеру**.",
    "Это ближе к **клеточным сигналам**, чем к одному HA — удобно при сочетании мелких морщин, тусклого тона и рельефа.",
    "В Hommage подбираем **глубину, проходы и комбинации**; чувствительной коже — тест и мягкий старт.",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "Клиника Hommage — ",
  solutionAccent: "экзосомы",
  solutionAfter: "",
  features: [
    {
      title: "Экзосомы СК",
      sub: "STEM CELL EXOSOME",
      description: "Сигнальные молекулы для поддержки обновления кожи.",
    },
    {
      title: "Анти-эйдж",
      sub: "ANTI-AGING",
      description: "Поддержка более «свежей» клеточной среды.",
    },
    {
      title: "Регенерация",
      sub: "SKIN REGENERATION",
      description: "Помощь репарации и обновлению.",
    },
    {
      title: "Коллаген",
      sub: "COLLAGEN PRODUCTION",
      description: "Сигналы для упругости и смягчения линий.",
    },
  ],
  recommend: [
    "Мелкие морщины вместе с сухостью или потерей тонуса",
    "Нужна поддержка после лазера или пилинга",
    "Классических бустеров мало — хотите регенеративный уход",
    "Нужен здоровый блеск без долгого простоя",
  ],
  flow: [
    "Оцениваем тип кожи, чувствительность и недавние процедуры, планируем слой и зону.",
    "После очищения (и при необходимости ЭМА) — микроинъекции или аппарат.",
    "Лёгкий румянец/отёк возможны; уход в день процедуры — по памятке.",
    "Сухость несколько дней — увлажнение и SPF; курс даёт накопительный эффект.",
  ],
  forYouKicker: "For You",
  forYouH2: "Вам подойдёт, если…",
  flowKicker: "Flow",
  flowH2: "Этапы и заметки",
  footnote:
    "* При активных аутоиммунных процессах, беременности/ГВ и части аллергий возможны ограничения — сообщите о препаратах.",
};

const byLocale: Record<Locale, ExosomePageContent> = { ko, en, ja, zh, ru };

export function getExosomePageContent(locale: Locale): ExosomePageContent {
  return byLocale[locale] ?? ko;
}
