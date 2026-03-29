import type { Locale } from "@/i18n/messages";

export type RenewvionPageContent = {
  heroTitleKr: string;
  heroDesc: string;
  keyLabel: string;
  keyTitle: string;
  keyLead: string;
  situationsTitle: string;
  situations: string[];
  diffSectionTitle: string;
  diffs: { title: string; desc: string }[];
  guideTitle: string;
  guideP1: string;
  guideP2: string;
  bgLabel: string;
  bgTitle: string;
  bgLead: string;
  liftLimitTitle: string;
  liftItems: { strong: string; rest: string }[];
  faceliftReluctTitle: string;
  faceliftItems: { strong: string; rest: string }[];
  deviceLabel: string;
  deviceTitle: string;
  deviceLead: string;
  deviceListTitle: string;
  deviceList: { strong: string; rest: string }[];
  principleTitle: string;
  principleList: { strong: string; rest: string }[];
  forYouLabel: string;
  forYouTitle: string;
  forYouLead: string;
  recTitle: string;
  targets: { title: string; desc: string }[];
  totalLabel: string;
  totalTitle: string;
  totalLead: string;
  stretchTitle: string;
  stretchP1Strong: string;
  stretchP1Body: string;
  stretchP2: string;
  stretchStepsTitle: string;
  tunaeal: { step: number; title: string; desc: string }[];
  surgeryTitle: string;
  surgeryItems: { strong: string; rest: string }[];
  faqLabel: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const ko: RenewvionPageContent = {
  heroTitleKr: "리뉴비온",
  heroDesc: "피부처짐을 위한 차세대 리프팅",
  keyLabel: "KEY TAKEAWAYS",
  keyTitle: "리뉴비온은 피부처짐 치료의 새로운 대안입니다",
  keyLead:
    "기존 리프팅 시술의 제한적인 효과와 거상술의 흉터 부담 사이에서 고민하는 분들을 위한 차세대 리프팅 솔루션입니다.",
  situationsTitle: "이 글이 도움이 되는 3가지 상황",
  situations: [
    "지방흡입 후 피부처짐이 걱정되어 수술을 망설이는 경우",
    "고주파·초음파·실리프팅 등 기존 시술로 만족스러운 결과를 얻지 못한 경우",
    "안면거상술이나 복부성형 같은 절개 수술의 흉터와 회복기간이 부담스러운 경우",
  ],
  diffSectionTitle: "리뉴비온의 핵심 차별점",
  diffs: [
    { title: "최적 온도 85°C 도달", desc: "헬륨 플라즈마 기술로 피부 수축 최적 온도에 빠르게 도달하여 주변 조직 손상 없이 효과적인 피부 탄력 개선" },
    { title: "FDA 승인 검증", desc: "미국 FDA로부터 피부 수축 및 탄력 개선 효과를 공식 승인받은 의료기기" },
    { title: "최소 절개창", desc: "거상술 대비 훨씬 작은 절개창으로 수술하여 흉터가 거의 눈에 띄지 않음" },
    { title: "다양한 부위 적용", desc: "얼굴(턱선, 이중턱, 볼, 목)부터 바디(복부, 팔, 허벅지, 등)까지 전신 피부처짐 개선 가능" },
  ],
  guideTitle: "치료 선택 가이드",
  guideP1: "경미한 처짐은 고주파·초음파 리프팅, 중등도 처짐은 리뉴비온, 심각한 처짐은 거상술이 적합합니다.",
  guideP2: "오마쥬클리닉은 환자 상태에 맞춘 맞춤 피부처짐 치료 로드맵을 제공합니다.",
  bgLabel: "BACKGROUND",
  bgTitle: "피부처짐 치료의 딜레마: 거상술 vs 리프팅 시술",
  bgLead:
    "리뉴비온을 소개하기에 앞서, 기존 피부처짐 치료법의 한계를 먼저 짚어봅니다. 현재 피부처짐 치료는 크게 세 가지 방식으로 나뉩니다. 피부를 절개하여 확실한 효과를 내는 거상술과, 절개 없이 받을 수 있는 리프팅 시술입니다.",
  liftLimitTitle: "리프팅 시술이 주는 한계",
  liftItems: [
    {
      strong: "고주파·초음파 리프팅의 한계:",
      rest: "피부 탄력 개선 효과를 내기 위한 최적 온도는 85°C입니다. 그러나 기존 장비가 이 온도에 도달하는 과정에서 불필요한 피부조직 손상이 발생할 수 있어 안전을 위해 40~60°C에서만 작동합니다. 그래서 피부 수축 효과가 제한적일 수밖에 없습니다.",
    },
    {
      strong: "실리프팅의 한계:",
      rest: "실은 주로 피부나 진피층에 작용하며, 깊은 조직과 근육층에 대한 중등도 이상의 처짐을 해결하는 데는 한계가 있습니다.",
    },
  ],
  faceliftReluctTitle: "거상술을 주저하는 이유",
  faceliftItems: [
    { strong: "눈에 띄는 흉터:", rest: "거상술은 피부를 절개하는 수술이기 때문에 흉터가 남습니다." },
    { strong: "피부 절개에 대한 심리적 부담:", rest: "젊은 피부 자체를 직접 잘라내는 방식이라 수술 후 피부 회복에 대한 심리적 부담이 큽니다." },
  ],
  deviceLabel: "DEVICE",
  deviceTitle: "차세대 리프팅 기기! 리뉴비온(Renuvion)이란?",
  deviceLead:
    "거상술의 짙은 흉터 없이 리프팅 시술만으로는 부족한 효과를 보완하는 방법이 리뉴비온(Renuvion)입니다. 헬륨 플라즈마로 피부 수축 최적 온도에 도달하면서도, 거상술과 달리 최소의 절개창만으로 피부 탄력을 끌어올리는 치료법입니다.",
  deviceListTitle: "해외에서 검증된 치료법 리뉴비온",
  deviceList: [
    { strong: "FDA 승인:", rest: "미국 FDA로부터 피부 수축 및 탄력 개선 효과를 공식 승인받은 의료기기입니다." },
    { strong: "해외에서 검증된 의료 기기:", rest: "거상술과 기존 리프팅 시술 사이의 공간을 채우는 대안으로 널리 사용 중입니다. 오마쥬클리닉에서도 도입하여 맞춤 치료를 제공합니다." },
  ],
  principleTitle: "리뉴비온 원리: 피부 조직 수축 최적 온도 85°C 도달",
  principleList: [
    { strong: "주변조직 손상 최소:", rest: "헬륨 플라즈마 기술로 85°C에 빠르게 도달하고 1초 이내로 급속 냉각하여 목표 부위만 선택적으로 수축시킵니다." },
    { strong: "흉터 최소:", rest: "거상술에 비해 훨씬 작은 절개창을 사용하여 시술 후 흉터가 거의 눈에 띄지 않습니다." },
  ],
  forYouLabel: "FOR YOU",
  forYouTitle: "리뉴비온 시술 과정 및 추천 대상",
  forYouLead: "리뉴비온은 단순한 피부처짐뿐 아니라, 지방흡입 후 발생할 수 있는 피부처짐까지 효과적으로 개선합니다.",
  recTitle: "리뉴비온 추천 대상",
  targets: [
    { title: "지방흡입 후 피부처짐이 걱정되는 분", desc: "지방흡입 + 리뉴비온 동시 진행이 가장 이상적인 조합입니다." },
    { title: "중등도 피부처짐으로 고민 중인 분", desc: "고주파, 초음파, 실리프팅으로 효과가 부족했거나, 거상술의 흉터 및 회복기간이 부담스러운 분." },
    { title: "다양한 부위의 피부처짐으로 고민하는 분들", desc: "얼굴(턱선, 이중턱, 볼, 팔자주름, 목 주름 등)부터 바디(복부, 팔, 허벅지, 등·브래지어 라인 등)까지 적용 가능합니다." },
  ],
  totalLabel: "TOTAL SOLUTION",
  totalTitle: "오마쥬클리닉의 피부처짐 토탈 솔루션",
  totalLead:
    "피부처짐으로 고민하는 환자분들의 상태는 모두 다릅니다. 오마쥬클리닉은 이러한 다양한 상황에 맞출 수 있도록 피부처짐 토탈 솔루션을 갖추고 있습니다.",
  stretchTitle: "피부처짐으로 동반되는 튼살·오마쥬클리닉 치료방법은?",
  stretchP1Strong: "튼살 원인:",
  stretchP1Body:
    "급격한 체중 증가, 임신 등으로 피부가 늘어났다가 수축하는 과정에서 생기며 피부처짐과 함께 나타나는 경우가 많습니다.",
  stretchP2: "오마쥬클리닉 튼살 치료 순서",
  stretchStepsTitle: "",
  tunaeal: [
    { step: 1, title: "줄기세포 치료", desc: "성장인자가 흉터 부위에 새살을 채워 원래 피부로 회복시킵니다." },
    { step: 2, title: "미라젯", desc: "진피 깊숙한 곳까지 약물을 침투시켜 오래된 튼살을 개선합니다." },
    { step: 3, title: "고주파 치료", desc: "단일 파장이 아닌 16가지 파장으로 세포활동을 촉진시켜 피부재생을 원활하게 만듭니다." },
  ],
  surgeryTitle: "리뉴비온으로 해결하기 어려운 피부처짐은 거상 수술",
  surgeryItems: [
    { strong: "거상술:", rest: "심각한 피부처짐의 경우 안면, 미니, 복부 성형 등 처짐 정도에 따라 절개 범위가 달리 적용됩니다." },
    { strong: "절개 면적이 크기 때문에 오마쥬클리닉 거상술:", rest: "복부 성형 절개선을 최소화하기 위해 설계하며, 피부 한쪽에서 봉합하여 흉터를 최소화합니다." },
  ],
  faqLabel: "FAQ",
  faqTitle: "리뉴비온 FAQ",
  faq: [
    { q: "리뉴비온은 반드시 지방흡입과 같이 받아야 하나요?", a: "반드시 그렇지는 않습니다. 지방흡입과 함께 받아 체형 개선과 탄력 향상을 동시에 얻을 수도 있고, 피하지방은 적으나 피부처짐만 있는 경우 단독으로도 효과적입니다." },
    { q: "리뉴비온과 기존 리프팅 시술(고주파/초음파/실리프팅)과 어떻게 다른가요?", a: "핵심 차이는 '온도'입니다. 기존 리프팅은 안전을 위해 40~60°C에서 작동하지만, 리뉴비온은 헬륨 플라즈마의 빠른 가열과 급속 냉각으로 피부 수축 최적 온도인 85°C에 도달해 강력한 수축 효과를 냅니다." },
    { q: "리뉴비온과 거상술과 비교하면 어떤가요?", a: "거상술의 중간 단계 대안입니다. 피부 탄력 개선 효과는 확실하게 가져가면서도, 최소 절개창을 사용해 흉터와 회복 기간을 대폭 줄였습니다. 중등도 피부처짐에 이상적입니다." },
    { q: "리뉴비온은 미국, 한국에서 모두 승인받은 기기인가요?", a: "네, 미국 FDA와 한국 KFDA를 동시에 승인받아 효과와 안전성을 인증받은 기기입니다." },
    { q: "해외의 아르곤 가스 플라즈마 리프팅 기기와의 차이점은 무엇인가요?", a: "정밀성의 차이입니다. 아르곤 가스는 상대적으로 정밀성이 떨어져 주변 화상 우려가 있는 반면, 리뉴비온(헬륨 가스)은 정밀한 타겟팅과 급속 냉각을 통해 원하는 리프팅 결과만을 안전하게 구현해 냅니다." },
  ],
};

const en: RenewvionPageContent = {
  heroTitleKr: "Renuvion",
  heroDesc: "Next-generation tightening for skin laxity",
  keyLabel: "KEY TAKEAWAYS",
  keyTitle: "Renuvion as a new option for lax skin",
  keyLead:
    "For patients caught between modest results from energy devices and the scars or downtime of facelift-style surgery.",
  situationsTitle: "Three situations this page speaks to",
  situations: [
    "You hesitate about liposuction because of post-laxity worry",
    "RF, ultrasound or threads have under-delivered for you",
    "Facelift-level scars or recovery feel too heavy right now",
  ],
  diffSectionTitle: "Key differentiators",
  diffs: [
    { title: "Targeting ~85°C shrink window", desc: "Helium plasma aims for the thermal profile linked to contraction while limiting collateral thermal spread." },
    { title: "FDA-cleared indications", desc: "US FDA recognition for skin contraction and tightening where cleared." },
    { title: "Smaller entry than facelift", desc: "Tiny ports versus long excisional scars in classic lifting." },
    { title: "Face and body zones", desc: "From jaw and neck to abdomen, arms, thighs and back when clinically appropriate." },
  ],
  guideTitle: "How clinicians stage laxity",
  guideP1: "Mild laxity may suit RF/US; moderate may include Renuvion; severe may still need excisional surgery.",
  guideP2: "Hommage maps a personalised roadmap to your pattern of laxity.",
  bgLabel: "BACKGROUND",
  bgTitle: "The dilemma: facelift versus non-surgical lifting",
  bgLead:
    "Energy devices often stay below the shrink-temperature window for safety, while excisional surgery trades scars for power.",
  liftLimitTitle: "Limits of classic energy lifting",
  liftItems: [
    {
      strong: "RF / ultrasound ceiling:",
      rest: "Optimal contraction temperatures are debated near ~85°C, yet many devices cap near 40–60°C to protect surface tissue—so shrink vectors can be modest.",
    },
    {
      strong: "Thread limits:",
      rest: "Threads often engage dermis or superficial planes and may not fully address deeper moderate laxity.",
    },
  ],
  faceliftReluctTitle: "Why patients delay facelift",
  faceliftItems: [
    { strong: "Visible scars:", rest: "Excision leaves lines that must be accepted." },
    { strong: "Psychological load:", rest: "Removing skin feels irreversible compared with energy passes." },
  ],
  deviceLabel: "DEVICE",
  deviceTitle: "What Renuvion adds",
  deviceLead:
    "Helium plasma with rapid on/off heating aims to reach contraction-relevant temperatures through small access points.",
  deviceListTitle: "Regulatory context",
  deviceList: [
    { strong: "FDA:", rest: "Cleared claims for contraction/tightening in indicated uses." },
    { strong: "Global use:", rest: "Widely positioned between pure energy and excisional lifts; Hommage adopts it within bespoke plans." },
  ],
  principleTitle: "Mechanics at a glance",
  principleList: [
    { strong: "Selective heating:", rest: "Rapid heat plus quick cooling aims to spare adjacent tissue while contracting targets." },
    { strong: "Port size:", rest: "Much smaller than classic lift incisions when applicable." },
  ],
  forYouLabel: "FOR YOU",
  forYouTitle: "Candidates and pairing",
  forYouLead: "Useful after lipo-induced laxity or for moderate laxity when excision feels excessive.",
  recTitle: "Who often benefits",
  targets: [
    { title: "Post-liposuction skin worry", desc: "Lipo plus Renuvion is a common pairing when planned together." },
    { title: "Moderate laxity", desc: "When RF/US/threads felt insufficient but you resist facelift scars." },
    { title: "Multiple zones", desc: "Face and selected body areas depending on assessment." },
  ],
  totalLabel: "TOTAL SOLUTION",
  totalTitle: "Hommage laxity roadmap",
  totalLead: "We match severity, tolerance and goals—not one template for everyone.",
  stretchTitle: "Stretch marks alongside laxity",
  stretchP1Strong: "Why striae appear:",
  stretchP1Body: "Rapid stretch cycles (e.g. weight swing, pregnancy) may leave marks that cluster with laxity.",
  stretchP2: "Example staged pathways in clinic (consult-only):",
  stretchStepsTitle: "",
  tunaeal: [
    { step: 1, title: "Regenerative support", desc: "Growth-factor pathways to improve scar texture when indicated." },
    { step: 2, title: "Microneedle drug delivery", desc: "Deeper dermal penetration for mature striae." },
    { step: 3, title: "Multi-RF support", desc: "Broad-spectrum RF to encourage orderly remodelling." },
  ],
  surgeryTitle: "When excision still wins",
  surgeryItems: [
    { strong: "Facelift family:", rest: "Severe laxity may still need classic excision with vector planning." },
    { strong: "Hommage excisional philosophy:", rest: "Minimise incision length where anatomy allows and close with tension control." },
  ],
  faqLabel: "FAQ",
  faqTitle: "Renuvion FAQ",
  faq: [
    { q: "Must it be with liposuction?", a: "No—combination is common, but isolated laxity can be treated alone when appropriate." },
    { q: "Versus RF, ultrasound or threads?", a: "Temperature profile and tissue engagement differ; your plan should compare goals and tolerance." },
    { q: "Versus facelift?", a: "Often described as a middle step—meaningful tightening with smaller ports; severe cases may still need excision." },
    { q: "US and Korea clearance?", a: "Devices in this class carry FDA recognition and Korean regulatory clearance for stated indications—verify locally with your team." },
    { q: "Argon plasma devices abroad?", a: "Precision and cooling curves differ; helium-based systems are marketed for tighter thermal control—discuss peer data in consult." },
  ],
};

const ja: RenewvionPageContent = {
  ...en,
  heroTitleKr: "リニュービオン",
  heroDesc: "たるみ肌のための次世代アプローチ",
  keyTitle: "リニュービオンはたるみ治療の新しい選択肢",
  keyLead: "エネルギー機器の限界と切開リフトの負担の間で迷う方向けのソリューションです。",
  situationsTitle: "このページが役立つ3つの状況",
  situations: [
    "脂肪吸引後のたるみが心配で踏み切れない",
    "高周波・超音波・糸で物足りなさを感じた",
    "切開の傷や回復が負担に感じる",
  ],
  diffSectionTitle: "主な特徴",
  forYouTitle: "対象と組み合わせ",
  recTitle: "こんな方に",
  faqTitle: "リニュービオン FAQ",
};

const zh: RenewvionPageContent = {
  ...en,
  heroTitleKr: "Renuvion 锐诺温",
  heroDesc: "针对皮肤松弛的新一代紧致方案",
  keyTitle: "Renuvion 作为松弛治疗的新选择",
  keyLead: "在能量设备效果有限与拉皮手术瘢痕/恢复期之间寻找折衷的人群。",
  situationsTitle: "三种常见情境",
  situations: ["顾虑吸脂后松弛", "光电/线雕效果不足", "难以接受大切口拉皮"],
  diffSectionTitle: "核心差异",
  forYouTitle: "适应人群与组合",
  recTitle: "适合人群",
  faqTitle: "Renuvion 常见问题",
};

const ru: RenewvionPageContent = {
  ...en,
  heroTitleKr: "Renuvion",
  heroDesc: "Новое поколение укрепления при тяже кожи",
  keyTitle: "Renuvion как новый вариант при тяже",
  keyLead: "Между скромным эффектом аппаратов и шрамами подтяжки.",
  situationsTitle: "Три ситуации",
  situations: [
    "Страшитесь липосакции из‑за тяжа кожи",
    "RF/УЗ/нити не дали цели",
    "Разрезная подтяжка психологически тяжела",
  ],
  diffSectionTitle: "Отличия",
  forYouTitle: "Кому и в связке",
  recTitle: "Кому подходит",
  faqTitle: "FAQ по Renuvion",
};

const byLocale: Record<Locale, RenewvionPageContent> = { ko, en, ja, zh, ru };

export function getRenewvionPageContent(locale: Locale): RenewvionPageContent {
  return byLocale[locale] ?? ko;
}
