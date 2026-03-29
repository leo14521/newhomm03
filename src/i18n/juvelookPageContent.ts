import type { Locale } from "@/i18n/messages";

export type JuvelookPageContent = {
  titleKr: string;
  lead: string;
  points: { title: string; body: string }[];
  guideTitle: string;
  guideLines: string[];
  idealTitle: string;
  ideal: string[];
};

const ko: JuvelookPageContent = {
  titleKr: "쥬베룩",
  lead:
    "쥬베룩(Juvelook)은 PLLA 마이크로스피어와 히알루론산이 결합된 콜라겐 리모델링 스킨부스터입니다. 즉각적인 볼륨 메우기보다는 **시간에 따라 진피층의 콜라겐 환경을 정돈**하는 데 초점을 둡니다.",
  points: [
    {
      title: "콜라겐 리모델링",
      body: "PLLA(Poly-L-lactic acid) 마이크로스피어가 진피에서 콜라겐 생성을 점진적으로 유도해, 시간이 지날수록 피부 밀도와 탄력 개선을 목표로 합니다.",
    },
    {
      title: "HA와의 시너지",
      body: "히알루론산이 함께 배합되어 초기 수분감과 주입감을 완화하고, 장기적인 섬유화 반응과의 균형을 고려한 제형입니다.",
    },
    {
      title: "적용 포인트",
      body: "잔주름, 모공·피부결, 탄력 저하 등 복합 노화 징후에 단독 또는 다른 시술과 병행해 설계할 수 있습니다.",
    },
  ],
  guideTitle: "시술 안내",
  guideLines: [
    "· 시술 후 멍·붓기·붉은기 등은 일시적으로 나타날 수 있으며 대부분 수일 내 완화됩니다.",
    "· 효과는 보통 몇 주~수개월에 걸쳐 점진적으로 나타나며, 피부 상태와 횟수에 따라 다릅니다.",
    "· 임신·수유, 특정 피부 질환, 면역 치료 중인 경우 시술이 제한될 수 있습니다.",
  ],
  idealTitle: "이런 분께",
  ideal: [
    "잔주름·칙칙한 피부결이 동시에 신경 쓰이는 분",
    "과한 볼륨보다 자연스러운 피부 질 개선을 원하는 분",
    "콜라겐 부스터 경험이 있거나 장기 케어를 계획 중인 분",
  ],
};

const en: JuvelookPageContent = {
  titleKr: "Juvelook",
  lead:
    "Juvelook pairs PLLA microspheres with hyaluronic acid for **gradual dermal collagen remodelling** rather than instant volumising alone.",
  points: [
    {
      title: "Collagen remodelling",
      body: "PLLA microspheres encourage progressive collagen activity for density and elasticity over time.",
    },
    {
      title: "Synergy with HA",
      body: "Hyaluronic acid softens early feel and hydration while balancing longer-term fibrotic response.",
    },
    {
      title: "Where it fits",
      body: "Fine lines, pores, texture and laxity—alone or combined with other modalities when planned.",
    },
  ],
  guideTitle: "Treatment notes",
  guideLines: [
    "· Bruising, swelling or redness often ease within days.",
    "· Visible change usually builds over weeks to months; sessions vary by skin state.",
    "· Pregnancy, lactation, some skin diseases or immune therapy may limit care.",
  ],
  idealTitle: "You might choose this if…",
  ideal: [
    "Fine lines and dull texture bother you together",
    "You want quality-focused improvement more than heavy volume",
    "You are planning longer-term collagen booster care",
  ],
};

const ja: JuvelookPageContent = {
  titleKr: "ジュベルック",
  lead:
    "ジュベルックはPLLAマイクロスフィアとヒアルロン酸を組み合わせ、**時間をかけて真皮のコラーゲン環境を整える**スキンブースターです。",
  points: [
    {
      title: "コラーゲンリモデリング",
      body: "PLLAが真皮でコラーゲン生成を段階的に後押しし、ハリと密度の改善を目指します。",
    },
    {
      title: "HAとの相乗",
      body: "初期のうるおいと注入感を和らげ、長期的な線維化とのバランスを考えた処方です。",
    },
    {
      title: "適用",
      body: "小じわ・毛穴・キメ・たるみなど、単独または他施術との併用で設計できます。",
    },
  ],
  guideTitle: "施術のご案内",
  guideLines: [
    "· 内出血・腫れ・赤みは一時的なことが多く数日で軽減しやすいです。",
    "· 効果は数週間〜数か月かけて現れ、回数・肌状態によります。",
    "· 妊娠・授乳、特定の皮膚疾患、免疫治療中は制限される場合があります。",
  ],
  idealTitle: "こんな方に",
  ideal: [
    "小じわとくすみ・キメが同時に気になる方",
    "過度なボリュームより自然な肌質改善を望む方",
    "中長期のブースターケアを考えている方",
  ],
};

const zh: JuvelookPageContent = {
  titleKr: "Juvelook 珠贝朗",
  lead:
    "Juvelook 将 PLLA 微球与透明质酸结合，侧重**随时间重塑真皮胶原环境**，而非单纯即刻填充。",
  points: [
    {
      title: "胶原重塑",
      body: "PLLA 微球在真皮中逐步促进胶原生成，目标提升密度与弹性。",
    },
    {
      title: "与 HA 协同",
      body: "透明质酸缓和早期水润感与注射感，并兼顾长期纤维化平衡。",
    },
    {
      title: "适用方向",
      body: "细纹、毛孔、肤质与松弛可单独或联合其他方案设计。",
    },
  ],
  guideTitle: "施术提示",
  guideLines: [
    "· 淤青、肿胀或泛红多为暂时性，多在数日内缓解。",
    "· 效果常于数周至数月逐步显现，因皮肤状态与次数而异。",
    "· 妊娠哺乳、部分皮肤病或免疫治疗期可能不适合。",
  ],
  idealTitle: "适合人群",
  ideal: [
    "细纹与暗沉、粗糙同时困扰者",
    "更在意肤质自然改善而非夸张容量者",
    "规划长期胶原类护理者",
  ],
};

const ru: JuvelookPageContent = {
  titleKr: "Juvelook",
  lead:
    "Juvelook сочетает микросферы PLLA и гиалуроновую кислоту для **постепенного ремоделирования коллагена** в дерме.",
  points: [
    {
      title: "Ремоделирование коллагена",
      body: "Микросферы PLLA поддерживают постепенную активность коллагена для плотности и упругости.",
    },
    {
      title: "Синергия с ГК",
      body: "ГК смягчает ранние ощущения и увлажнение, балансируя долгосрочный фиброзный ответ.",
    },
    {
      title: "Показания",
      body: "Мелкие морщины, поры, рельеф и тонус — моно или в комбинации по плану врача.",
    },
  ],
  guideTitle: "Рекомендации",
  guideLines: [
    "· Синяки и отёк обычно проходят за несколько дней.",
    "· Эффект нарастает неделями и месяцами; курс индивидуален.",
    "· Беременность, лактация, некоторые дерматозы или иммунотерапия могут быть ограничением.",
  ],
  idealTitle: "Вам может подойти, если…",
  ideal: [
    "Волнуют мелкие морщины и тусклая текстура",
    "Важнее качество кожи, чем сильный объём",
    "Планируете длительный уход-бустер",
  ],
};

const byLocale: Record<Locale, JuvelookPageContent> = { ko, en, ja, zh, ru };

export function getJuvelookPageContent(locale: Locale): JuvelookPageContent {
  return byLocale[locale] ?? ko;
}
