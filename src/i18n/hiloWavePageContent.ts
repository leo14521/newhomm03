import type { Locale } from "@/i18n/messages";

export type HiloWavePageContent = {
  titleKr: string;
  whatTitle: string;
  whatLead: string;
  whatNote: string;
  vsFillerTitle: string;
  vsFiller: { title: string; body: string }[];
  vsStimTitle: string;
  vsStimNote: string;
  vsStimRows: { label: string; hilo: string; legacy: string }[];
  tableColCat: string;
  tableColHilo: string;
  tableColLegacy: string;
  maintTitle: string;
  maintBody: string;
  maintBullets: string[];
  areasTitle: string;
  areasNote: string;
  areas: string[];
  areasFoot: string;
  safetyTitle: string;
  safetyBody: string;
  idealTitle: string;
  ideal: string[];
  costTitle: string;
  costBody: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
};

const ko: HiloWavePageContent = {
  titleKr: "힐로웨이브",
  whatTitle: "힐로웨이브란?",
  whatLead:
    "고분자와 저분자 히알루론산을 함께 사용한 바이오 스티뮬레이터 계열 시술로, 기존 콜라겐 부스터에 비해 자극 부담을 낮추면서도 **즉각적인 볼륨 개선과 장기 탄력 케어**를 함께 노릴 수 있습니다.",
  whatNote:
    "“히알루론산이면 필러 아닌가요?”라는 질문이 자주 나옵니다. 힐로웨이브는 가교 필러와 달리 듀얼 HA 구조로 즉각 볼륨과 저분자의 재생·수분 효과를 동시에 설계한 점이 다릅니다.",
  vsFillerTitle: "힐로웨이브 vs 필러",
  vsFiller: [
    {
      title: "일반 필러",
      body: "고분자 히알루론산을 BDDE 등 가교제로 단단히 연결해 함몰 부위를 메우고 형태를 오래 유지하도록 설계된 제품입니다.",
    },
    {
      title: "힐로웨이브",
      body: "고분자·저분자 HA가 결합된 듀얼 구조로, 시술 직후 볼륨감과 함께 저분자 HA가 수분·콜라겐 합성·탄력 개선을 유도합니다. 필요 시 히알라제로 조정 가능한 점이 특징입니다.",
    },
  ],
  vsStimTitle: "기존 콜라겐 스티뮬레이터와의 차이",
  vsStimNote:
    "PLA, PDO, CaHA 등 합성 고분자로 세포를 자극하는 방식은 효과까지 시간이 걸리거나, 과도한 자극으로 결절 우려가 보고되기도 했습니다. 힐로웨이브는 고분자 HA가 즉각 볼륨을 만들고 저분자 HA가 수분·콜라겐 합성을 돕는 구조로, 세포 자극 강도를 상대적으로 낮게 가져가는 방향입니다.",
  vsStimRows: [
    { label: "효과 시기", hilo: "비교적 빠른 볼륨 체감", legacy: "수개월 후 점진적" },
    { label: "결절 리스크", hilo: "상대적으로 낮게 보고됨", legacy: "제품·주입층에 따라 variable" },
    { label: "조정", hilo: "히알라제 용해 가능", legacy: "제품에 따라 제한적" },
  ],
  tableColCat: "구분",
  tableColHilo: "힐로웨이브",
  tableColLegacy: "기존 콜라겐 부스터",
  maintTitle: "유지·시술 간격 (참고)",
  maintBody:
    "가교 필러보다 유지는 다소 짧게 느껴질 수 있으나, 시간이 지나며 콜라겐·지방세포 반응으로 볼륨이 완전히 사라지지 않고 일정 수준에서 유지되는 경우가 보고됩니다. 정확한 간격·용량은 개인 해부와 목표에 따라 상담 시 결정합니다.",
  maintBullets: ["· 1회 시술 후 통상 약 6~9개월 전후(개인차)", "· 3개월 간격 3회 시 최대 18개월 이상 유지 사례가 보고됨"],
  areasTitle: "추천 부위",
  areasNote: "이마·코·입술처럼 형태를 세밀히 잡아야 하는 부위보다는, 꺼짐을 자연스럽게 채워야 하는 부위에 적합합니다.",
  areas: ["중안부(앞볼·앞광대)", "팔자 주름", "볼 꺼짐"],
  areasFoot: "보통 한 부위당 약 2cc 전후가 참고용으로 알려져 있으나, 실제 용량은 시술 의료진과 상담 후 결정합니다.",
  safetyTitle: "부작용·안전",
  safetyBody:
    "히알루론산 주입 시술이므로 혈관 이슈, 이물감, 드물게 결절 등은 이론적으로 가능하나, 듀얼 HA 입자 특성상 기존 시술 대비 각 리스크가 낮게 보고되는 편입니다. 마음에 들지 않을 경우 히알라제로 조정할 수 있는 점이 장점입니다.",
  idealTitle: "이런 분께 추천드립니다",
  ideal: [
    "필러는 부담스럽지만 꺼진 부위를 개선하고 싶은 분",
    "결절 등 부작용이 걱정되는 분",
    "자연스럽고 안전한 볼륨 시술을 원하는 분",
    "중안부·팔자·볼 꺼짐 개선이 목표인 분",
    "볼륨과 피부 탄력·속건조 개선을 함께 원하는 분",
  ],
  costTitle: "비용 안내",
  costBody: "시술 비용은 사용 cc·부위·병행 시술에 따라 달라집니다. 정확한 금액은 내원 상담 시 개인별 계획에 따라 안내드립니다.",
  faqTitle: "FAQ",
  faq: [
    {
      q: "이마나 눈밑에도 가능한가요?",
      a: "형태 유지가 중요한 부위는 필러 등 다른 시술이 더 적합한 경우가 많습니다. 부위별로 의료진과 상담이 필요합니다.",
    },
    {
      q: "시술 시 통증이 심한가요?",
      a: "캐뉼라 등을 활용하면 통증을 크게 줄일 수 있으며, 대부분 일상 회복이 가능한 수준입니다.",
    },
    {
      q: "바로 일상생활이 가능한가요?",
      a: "멍이 생기는 경우를 제외하면 대부분 지장이 적습니다. 음주·사우나·격한 운동은 약 일주일 정도 자제하는 것이 좋습니다.",
    },
    {
      q: "다른 시술과 병행할 수 있나요?",
      a: "가능한 경우가 많으나, 시술 간격·순서는 반드시 의료진 판단이 필요합니다.",
    },
  ],
};

const en: HiloWavePageContent = {
  ...ko,
  titleKr: "Hilo Wave",
  whatTitle: "What is Hilo Wave?",
  whatLead:
    "A dual high- and low-molecular HA bio-stimulator line aiming for **early volume with lighter stimulator feel** versus some classic collagen boosters.",
  whatNote:
    "Unlike cross-linked fillers built for rigid shape hold, dual HA targets immediate volume plus low-MW hydration and renewal signalling.",
  vsFillerTitle: "Hilo Wave vs filler",
  vsFiller: [
    {
      title: "Typical filler",
      body: "Cross-linked HA (e.g. BDDE) designed to fill and hold shape for extended periods.",
    },
    {
      title: "Hilo Wave",
      body: "Dual HA gives early volume while low-MW fraction supports hydration and collagen cues; hyaluronidase can adjust if needed.",
    },
  ],
  vsStimTitle: "Versus classic stimulators",
  vsStimNote:
    "Synthetic polymers like PLA, PDO or CaHA can be slower or carry higher nodularity signal for some patients; dual HA lowers stim intensity while still supporting volume and skin quality goals.",
  vsStimRows: [
    { label: "When you feel it", hilo: "Earlier volume perception", legacy: "Often gradual over months" },
    { label: "Nodule signal", hilo: "Relatively lower in reports", legacy: "Varies by product and plane" },
    { label: "Adjustability", hilo: "Hyaluronidase option", legacy: "Often limited" },
  ],
  tableColCat: "Item",
  tableColHilo: "Hilo Wave",
  tableColLegacy: "Classic boosters",
  maintTitle: "Maintenance (reference)",
  maintBody:
    "Duration may feel shorter than heavily cross-linked filler, yet some volume persistence is described as collagen and fat respond. Intervals and dose are decided in consult.",
  maintBullets: ["· Often ~6–9 months after one session (individual)", "· Protocols such as three sessions 12 weeks apart reported up to ~18+ months in some data"],
  areasTitle: "Common zones",
  areasNote: "Better for global mid-face hollowing than ultra-precision sculpting areas like lips or radix.",
  areas: ["Mid-face (anterior cheek)", "Nasolabial region", "Lateral cheek hollowing"],
  areasFoot: "~2 cc per zone is a rough reference; your clinician sets the plan.",
  safetyTitle: "Safety notes",
  safetyBody:
    "Injection risks (vessel, nodules, palpable product) exist theoretically; dual-particle HA is often reported friendlier, and hyaluronidase remains a safety valve.",
  idealTitle: "Often chosen when…",
  ideal: [
    "You fear filler but want hollowing improved",
    "Nodule worry is high on your list",
    "You want adjustable, HA-based volume",
    "Mid-face, nasolabial or cheek volume is the goal",
    "You want volume plus elasticity and inner hydration",
  ],
  costTitle: "Pricing",
  costBody: "Depends on cc, zones and combinations—final quote after private planning.",
  faqTitle: "FAQ",
  faq: [
    {
      q: "Forehead or under-eyes?",
      a: "Precision shape zones often suit other tools better—discuss vectors with your doctor.",
    },
    {
      q: "Pain?",
      a: "Cannula techniques usually keep discomfort mild; most resume routine quickly.",
    },
    {
      q: "Downtime?",
      a: "Aside from possible bruising, impact is usually light; avoid alcohol, sauna and hard workouts ~1 week.",
    },
    {
      q: "Combine with other care?",
      a: "Often yes—spacing and order need medical judgement.",
    },
  ],
};

const ja: HiloWavePageContent = {
  ...en,
  titleKr: "ヒロウェーブ",
  whatTitle: "ヒロウェーブとは？",
  whatLead: en.whatLead,
  whatNote: en.whatNote,
  vsFillerTitle: "ヒロウェーブ vs フィラー",
  vsFiller: [
    { title: "一般的なフィラー", body: "架橋HAで形状保持を重視。" },
    { title: "ヒロウェーブ", body: "デュアルHAでボリュームと低分子のうるおい・再生サインを設計。ヒアルロニダーゼ調整可。" },
  ],
  vsStimTitle: "従来のコラーゲンブースターとの違い",
  vsStimNote: en.vsStimNote,
  vsStimRows: [
    { label: "実感の時期", hilo: "比較的早期のボリューム感", legacy: "数か月かけて漸進" },
    { label: "結節リスク", hilo: "報告上は相対的に低め", legacy: "製品・層により差" },
    { label: "調整", hilo: "ヒアルロニダーゼ可", legacy: "製品により限定" },
  ],
  tableColCat: "項目",
  tableColHilo: "ヒロウェーブ",
  tableColLegacy: "従来ブースター",
  maintTitle: "維持・間隔（参考）",
  maintBody: en.maintBody,
  maintBullets: en.maintBullets,
  areasTitle: "おすすめ部位",
  areasNote: en.areasNote,
  areas: ["中顔面（前頬）", "ほうれい線周辺", "頬のこけ"],
  areasFoot: en.areasFoot,
  safetyTitle: "副作用・安全性",
  safetyBody: en.safetyBody,
  idealTitle: "こんな方に",
  ideal: [
    "フィラーは不安だがこけを改善したい方",
    "結節が心配な方",
    "自然で調整しやすいボリュームを望む方",
    "中顔面・ほうれい・頬のこけが目標の方",
    "ボリュームとハリ・内側乾燥を同時に考えたい方",
  ],
  costTitle: "費用",
  costBody: en.costBody,
  faqTitle: "FAQ",
  faq: en.faq,
};

const zh: HiloWavePageContent = {
  ...en,
  titleKr: "Hilo Wave",
  whatTitle: "什么是 Hilo Wave？",
  whatLead: en.whatLead,
  whatNote: en.whatNote,
  vsFillerTitle: "Hilo Wave 与填充对比",
  vsFiller: [
    { title: "常规填充", body: "交联 HA 强调形态维持。" },
    { title: "Hilo Wave", body: "双相 HA：即刻容量 + 低分子水润与再生信号，可用透明质酸酶调整。" },
  ],
  vsStimTitle: "与传统胶原刺激剂",
  vsStimNote: en.vsStimNote,
  vsStimRows: [
    { label: "见效节奏", hilo: "容量感相对更快", legacy: "常需数月渐进" },
    { label: "结节风险", hilo: "报告相对较低", legacy: "因产品与层次而异" },
    { label: "可逆性", hilo: "可用透明质酸酶", legacy: "因产品受限" },
  ],
  tableColCat: "项目",
  tableColHilo: "Hilo Wave",
  tableColLegacy: "传统助推",
  maintTitle: "维持与间隔（参考）",
  maintBody: en.maintBody,
  maintBullets: en.maintBullets,
  areasTitle: "常见部位",
  areasNote: en.areasNote,
  areas: ["中面部（前颊）", "法令纹区域", "面颊凹陷"],
  areasFoot: en.areasFoot,
  safetyTitle: "副作用与安全",
  safetyBody: en.safetyBody,
  idealTitle: "适合人群",
  ideal: [
    "顾虑传统填充但想改善凹陷者",
    "担心结节者",
    "希望自然且可调整的容量方案者",
    "以中面部、法令、面颊为目标者",
    "希望同时改善容量、弹性与内层干燥者",
  ],
  costTitle: "费用",
  costBody: en.costBody,
  faqTitle: "FAQ",
  faq: en.faq,
};

const ru: HiloWavePageContent = {
  ...en,
  titleKr: "Hilo Wave",
  whatTitle: "Что такое Hilo Wave?",
  whatLead:
    "Двухфракционная HA-терапия: **ранний объём при более мягком стимулирующем профиле**, чем у части классических бустеров.",
  whatNote:
    "В отличие от плотно сшитого филлера, двойная HA-структура сочетает объём и сигналы увлажнения/обновления низкой ММ.",
  vsFillerTitle: "Hilo Wave и филлеры",
  vsFiller: [
    { title: "Классический филлер", body: "Сшитая HA для долгой фиксации формы." },
    { title: "Hilo Wave", body: "Двойная HA: объём + низкомолекулярная фракция; при необходимости гиалуронидаза." },
  ],
  vsStimTitle: "И классические стимуляторы",
  vsStimNote: en.vsStimNote,
  vsStimRows: [
    { label: "Срок ощущений", hilo: "Более ранний объём", legacy: "Часто месяцы прогрессии" },
    { label: "Узлы", hilo: "Ниже в отчётах", legacy: "Зависит от продукта" },
    { label: "Коррекция", hilo: "Гиалуронидаза", legacy: "Ограничено" },
  ],
  tableColCat: "Пункт",
  tableColHilo: "Hilo Wave",
  tableColLegacy: "Классика",
  maintTitle: "Интервалы",
  maintBody: en.maintBody,
  maintBullets: en.maintBullets,
  areasTitle: "Зоны",
  areasNote: en.areasNote,
  areas: ["Середина лица", "Носогубка", "Провалы скул"],
  areasFoot: en.areasFoot,
  safetyTitle: "Безопасность",
  safetyBody: en.safetyBody,
  idealTitle: "Подойдёт, если…",
  ideal: en.ideal,
  costTitle: "Стоимость",
  costBody: en.costBody,
  faqTitle: "FAQ",
  faq: en.faq,
};

const byLocale: Record<Locale, HiloWavePageContent> = { ko, en, ja, zh, ru };

export function getHiloWavePageContent(locale: Locale): HiloWavePageContent {
  return byLocale[locale] ?? ko;
}
