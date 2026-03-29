import type { Locale } from "@/i18n/messages";
import type { ThreadLiftPageContent } from "@/i18n/threadLiftTypes";

const ko: ThreadLiftPageContent = {
  featureGridClass: "lg:grid-cols-3",
  solutionUlId: "body-filler",
  heroTitleKr: "링크프리 바디",
  heroDesc:
    "실 없이 바디 라인을 개선하는 혁신적인 바디 컨투어링. 고주파와 초음파 에너지로 근막층을 자극하고 지방을 분해합니다.",
  aboutKicker: "About Link-Free",
  aboutH2: "Link-Free Body",
  aboutParas: [
    "**링크프리 바디**는 실 삽입 없이 **리뉴비온**·고주파·초음파 등 에너지를 활용해 처진 피부를 당기고 지방 라인을 정리하는 오마쥬의 바디 시그니처 축입니다. 얼굴 실리프팅과 달리 바디는 면적이 넓어 **장비 선택·출력·횟수**를 체형에 맞게 조합하는 것이 중요합니다.",
    "라인만 줄이는 것이 아니라 어깨·골반·힙 등 **볼륨이 비는 부위**는 **바디필러**로 밸런스를 맞추어 실루엣이 자연스럽게 보이도록 설계합니다.",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "오마쥬 클리닉 ",
  solutionAccent: "링크프리 바디",
  solutionAfter: " 솔루션",
  features: [
    {
      title: "리뉴비온 바디 타이트닝",
      sub: "RENUVION",
      description:
        "리뉴비온은 절개 없이 플라즈마 에너지로 피부를 수축·타이트닝하는 바디 리프팅 시술입니다. 늘어진 피부와 군살을 정리하여 매끄러운 바디 라인을 만듭니다.",
    },
    {
      title: "실 없는 바디 리프팅",
      sub: "THREAD-FREE LIFTING",
      description:
        "기존 실리프팅과 달리 실을 사용하지 않고 고주파와 초음파 에너지로 근막층을 자극하여 자연스러운 리프팅 효과를 구현합니다.",
    },
    {
      title: "바디필러",
      sub: "BODY FILLER",
      description:
        "어깨 라인의 꺼짐, 골반·힙 볼륨 부족을 통합 분석해 체형 밸런스에 맞는 1:1 바디필러 플랜을 설계합니다.",
      anchorId: "body-filler-item",
    },
    {
      title: "윤곽·지방 분해",
      sub: "CONTOUR & FAT REDUCTION",
      description:
        "팔뚝, 허벅지, 복부 등 원하는 부위의 지방을 선택적으로 분해하고 윤곽을 개선하여 탄력 있고 아름다운 바디 라인을 만들어줍니다.",
    },
    {
      title: "통증 최소화",
      sub: "MINIMAL DISCOMFORT",
      description: "비침습적 시술로 통증과 회복 기간을 최소화하여 일상생활에 지장 없이 시술받을 수 있습니다.",
    },
  ],
  recommend: [
    "실리프팅 부담은 있으나 팔·허벅지·복부 라인을 타이트하게 잡고 싶은 분",
    "리뉴비온 등 에너지 기반 바디 타이트닝과 볼륨(어깨·골반)을 함께 설계하고 싶은 분",
    "운동·식이로 한계가 있는 군살·처진 피부를 비절개로 정리하고 싶은 분",
    "시술 후 빠른 일상 복귀를 우선하는 분(부위·강도는 상담에서 조정)",
  ],
  flow: [
    "체형 사진·촉진으로 지방·피부 탄력·볼륨 부족 부위를 함께 평가합니다.",
    "리뉴비온·인모드 계열 등 선택한 장비로 부위별 시술 계획을 세웁니다. 바디필러는 별도 상담 후 진행합니다.",
    "시술 직후 붉은 기·부기·감각 변화가 있을 수 있으며 부위별로 회복 일정이 다릅니다.",
    "코스 형태로 간격을 두고 진행하면 라인 유지에 유리합니다.",
  ],
  forYouKicker: "For You",
  forYouH2: "이런 분께 추천합니다",
  flowKicker: "Flow",
  flowH2: "시술 흐름 · 유의사항",
  footnote:
    "* 시술 가능 여부·회복은 개인·부위에 따라 다릅니다. 임신·수유, 혈전 위험, 특정 약물 복용 시 제한될 수 있으니 상담 시 알려 주세요.",
};

const en: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "Link-Free Body",
  heroDesc:
    "Thread-free body contouring using RF and ultrasound to stimulate fascia and refine fat—without sutures.",
  aboutParas: [
    "**Link-Free Body** combines **Renuvion**, RF and ultrasound to tighten lax skin and contour fat—body areas need tailored **device choice, energy and sessions**.",
    "Where volume is lost at shoulders, hips or pelvis, **body filler** can rebalance the silhouette naturally.",
  ],
  solutionBefore: "Hommage Clinic ",
  solutionAccent: "Link-Free Body",
  solutionAfter: " programme",
  features: [
    {
      title: "Renuvion body tightening",
      sub: "RENUVION",
      description:
        "Minimally invasive plasma tightening to refine lax skin and smooth body lines without large excision.",
    },
    {
      title: "Thread-free lifting",
      sub: "THREAD-FREE LIFTING",
      description: "RF and ultrasound stimulate fascia for lift without thread insertion.",
    },
    {
      title: "Body filler",
      sub: "BODY FILLER",
      description: "1:1 plans for shoulder hollows or hip volume tailored to your frame.",
      anchorId: "body-filler-item",
    },
    {
      title: "Contour & fat reduction",
      sub: "CONTOUR & FAT REDUCTION",
      description: "Targeted fat reduction for arms, thighs, abdomen and smoother contours.",
    },
    {
      title: "Minimal discomfort",
      sub: "MINIMAL DISCOMFORT",
      description: "Non- or minimally invasive options with lighter downtime for daily life.",
    },
  ],
  recommend: [
    "You want tighter arms, thighs or abdomen but prefer to avoid threads",
    "You want to pair energy tightening with strategic volume (shoulders, hips)",
    "Diet and exercise plateau; you seek non-surgical refinement",
    "Fast return to routine matters (zones and intensity set in consult)",
  ],
  flow: [
    "Assessment of fat, skin elasticity and volume gaps.",
    "Plan with Renuvion, InMode-class devices; body filler after separate consult.",
    "Redness, swelling or sensory changes vary by area.",
    "Series visits often help maintain the line.",
  ],
  footnote:
    "* Eligibility and recovery vary. Disclose pregnancy, lactation, clot risk and medications at consultation.",
};

const ja: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "リンクフリーボディ",
  heroDesc: "糸を使わずRF・超音波で筋膜を刺激し、脂肪ラインを整えるボディコンター。",
  aboutParas: [
    "**リンクフリーボディ**は**リニュービオン**・高周波・超音波でたるみと脂肪を整えるオマージュのボディ軸。**機器・出力・回数**の組み合わせが重要です。",
    "肩・骨盤・ヒップの**ボリューム不足**には**ボディフィラー**でバランスを取ります。",
  ],
  solutionBefore: "オマージュクリニック ",
  solutionAccent: "リンクフリーボディ",
  solutionAfter: " ソリューション",
  features: ko.features.map((f, i) => ({
    ...f,
    title: ["リニュービオン ボディタイトニング", "糸なしボディリフト", "ボディフィラー", "輪郭・脂肪分解", "低負担"][i]!,
    description: [
      "切開を最小にプラズマで皮膚を引き締めラインを整えます。",
      "高周波・超音波で筋膜を刺激し自然なリフト感を目指します。",
      "肩の凹み・骨盤・ヒップのボリュームを1:1で設計します。",
      "二の腕・太もも・腹部などを選択的に整えます。",
      "非侵襲寄りで通院後の負担を抑えます。",
    ][i]!,
  })),
  recommend: [
    "糸は避けたいが腕・太もも・お腹を引き締めたい方",
    "エネルギー系タイトニングとボリュームを一緒に考えたい方",
    "運動・食事だけでは限界を感じる方",
    "日常復帰を優先したい方（部位・強度は相談）",
  ],
  flow: [
    "写真・触診で脂肪・弾力・ボリュームを評価。",
    "リニュービオン・インモード系で計画。フィラーは別相談。",
    "赤み・腫れ・感覚変化は部位で異なります。",
    "コースで間隔を空けると維持に有利です。",
  ],
  footnote: "* 適応・回復は個人差があります。妊娠・授乳・血栓リスク・内服はご相談時にお伝えください。",
};

const zh: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "无切口身体线条",
  heroDesc: "无需埋线，以射频与超声波刺激筋膜、改善脂肪线条的身体轮廓方案。",
  aboutParas: [
    "**无切口身体线条**结合**Renuvion**、射频与超声波收紧松弛皮肤并塑形；身体区域需按体型搭配**设备、能量与次数**。",
    "肩、骨盆、臀部**容量不足**时，以**身体填充**平衡轮廓。",
  ],
  solutionBefore: "Hommage 诊所 ",
  solutionAccent: "无切口身体线条",
  solutionAfter: " 方案",
  features: ko.features.map((f, i) => ({
    ...f,
    title: ["Renuvion 身体紧致", "无线提拉", "身体填充", "轮廓与减脂", "低不适"][i]!,
    description: [
      "以等离子能量在少切开前提下收紧皮肤、整理线条。",
      "射频与超声波刺激筋膜，追求自然提拉感。",
      "针对肩线凹陷与臀髋容量做一对一设计。",
      "手臂、大腿、腹部等选择性塑形。",
      "偏非侵入，减轻恢复负担。",
    ][i]!,
  })),
  recommend: [
    "不想用线但希望收紧手臂、大腿、腹部线条者",
    "希望能量紧致与肩髋容量一起规划者",
    "运动饮食遇到平台期、倾向非手术者",
    "重视快速恢复者（强度与部位面诊决定）",
  ],
  flow: [
    "影像与触诊评估脂肪、弹性与容量缺口。",
    "以 Renuvion、InMode 等制定计划；填充另议。",
    "泛红、肿胀或感觉变化因部位而异。",
    "按疗程间隔更有利于维持。",
  ],
  footnote: "* 是否适合及恢复因人而异。妊娠哺乳、血栓风险及用药请提前说明。",
};

const ru: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "Link-Free Body",
  heroDesc:
    "Контурирование без нитей: РЧ и ультразвук для фасции и жира.",
  aboutParas: [
    "**Link-Free Body** сочетает **Renuvion**, РЧ и ультразвук для подтяжки и контура; для тела важны **аппарат, мощность и курс**.",
    "Дефицит объёма в зонах плеч/таза корректируем **филлерами** для баланса силуэта.",
  ],
  solutionBefore: "Клиника Hommage — ",
  solutionAccent: "Link-Free Body",
  solutionAfter: "",
  features: ko.features.map((f, i) => ({
    ...f,
    title: ["Renuvion body", "Лифтинг без нитей", "Филлер тела", "Контур и жир", "Минимум дискомфорта"][i]!,
    description: [
      "Плазменное укрепление кожи без крупных разрезов.",
      "РЧ и УЗ стимулируют фасцию без введения нитей.",
      "Индивидуальные планы объёма плеч и бёдер.",
      "Селективная работа с жиром на руках, бёдрах, животе.",
      "Щадящие методики для быстрого возврата к делам.",
    ][i]!,
  })),
  recommend: [
    "Хотите подтянуть руки/бёдра/живот без нитей",
    "Нужен тандем энергетического лифтинга и объёма",
    "Плато диеты/спорта; ищете нехирургический вариант",
    "Важен короткий простой",
  ],
  flow: [
    "Оценка жира, эластичности и дефицита объёма.",
    "План на Renuvion/InMode; филлер — отдельная консультация.",
    "Покраснение и отёк зависят от зоны.",
    "Серия процедур помогает удержанию результата.",
  ],
  footnote:
    "* Показания индивидуальны. Сообщите о беременности, лактации, риске тромбоза и препаратах.",
};

const byLocale: Record<Locale, ThreadLiftPageContent> = { ko, en, ja, zh, ru };

export function getLinkFreeBodyPageContent(locale: Locale): ThreadLiftPageContent {
  return byLocale[locale] ?? ko;
}
