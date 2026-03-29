import type { Locale } from "@/i18n/messages";
import type { ThreadLiftPageContent } from "@/i18n/threadLiftTypes";

const ko: ThreadLiftPageContent = {
  heroTitleKr: "리커버리",
  heroDesc:
    "피부 재생과 회복을 위한 종합 케어 프로그램. 줄기세포 재생, 프리미엄 스킨부스터, 레이저 재생을 통해 피부의 자연스러운 재생 능력을 촉진합니다.",
  aboutKicker: "About Recovery",
  aboutH2: "리커버리 프로그램이란?",
  aboutParas: [
    "리커버리(Recovery)는 단일 시술이 아니라 **피부가 스스로 회복·재생할 시간과 자극**을 설계해 주는 **통합 케어**에 가깝습니다. 시술 직후 붉은 기, 건조, 각질 들뜸 등이 길어질 때 ‘한 방에 해결’보다 **장벽 회복 → 영양 공급 → 질감 개선** 순으로 가는 경우가 많습니다.",
    "오마쥬에서는 줄기세포·고급 부스터·저자극 레이저 등을 **피부 타입과 시기**에 맞게 배치합니다. 같은 장비라도 출력·간격·병합 여부를 달리해 과자극을 피합니다.",
    "이미 다른 클리닉에서 시술을 받으신 분도, **현재 피부 컨디션만 가지고 오셔도** 다음 스텝을 정리해 드립니다. ‘당장 화장이 먹지 않는다’는 고민부터 시작해도 좋습니다.",
  ],
  solutionKicker: "HOMMAGE Solution",
  solutionBefore: "오마쥬 클리닉 ",
  solutionAccent: "리커버리",
  solutionAfter: " 솔루션",
  features: [
    {
      title: "줄기세포 재생",
      sub: "STEM CELL REGENERATION",
      description: "자체 지방 유래 줄기세포를 활용한 피부 재생 프로그램으로 콜라겐과 엘라스틴 생성을 촉진합니다.",
    },
    {
      title: "프리미엄 스킨부스터",
      sub: "PREMIUM SKIN BOOSTER",
      description: "고농도 영양 성분을 피부 깊숙이 전달하여 피부 장벽을 강화하고 수분을 공급합니다.",
    },
    {
      title: "레이저 재생",
      sub: "LASER REGENERATION",
      description: "비침습 레이저로 피부 재생을 촉진하고 모공과 잔주름을 개선합니다.",
    },
    {
      title: "종합 관리",
      sub: "COMPREHENSIVE CARE",
      description: "개인의 피부 상태에 맞춘 맞춤형 재생 프로그램으로 최적의 결과를 도출합니다.",
    },
  ],
  recommend: [
    "시술·레이저 후 붉은 기·건조·각질이 오래 가시는 분",
    "피부 장벽이 약해진 느낌이 들어 ‘회복 전용’ 케어를 원하시는 분",
    "탄력·모공·톤을 한 번에 끌어올리기보다 단계적 재생을 선호하시는 분",
    "바쁜 일정 속에서도 큰 다운타임 없이 컨디션을 끌어올리고 싶은 분",
  ],
  flow: [
    "피부 진단(상태·민감도·최근 시술) 후 회복 목표에 맞춰 프로그램을 조합합니다.",
    "선택한 시술(부스터·레이저·관리 등)을 일정 간격으로 진행하며 반응을 기록합니다.",
    "홈케어·자외선·자극 최소화 지침을 안내해 드리며, 필요 시 간격·강도를 조정합니다.",
    "코스 중간·종료 시점에 피부 지표와 만족도를 함께 확인합니다.",
  ],
  forYouKicker: "For You",
  forYouH2: "이런 분께 추천합니다",
  flowKicker: "Flow",
  flowH2: "시술 흐름 · 유의사항",
  footnote:
    "* 멍·붓기·일시적 홍반은 흔합니다. 면역 치료·특정 피부 질환·임신 수유 시 제한될 수 있으니 상담 시 알려 주세요.",
};

const en: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "Recovery",
  heroDesc:
    "Integrated skin recovery: stem-cell support, premium boosters and gentle laser to encourage natural renewal.",
  aboutParas: [
    "Recovery is **integrated care** that schedules **barrier repair → nourishment → texture** rather than one aggressive fix when redness, dryness or flaking linger.",
    "Hommage sequences stem-cell options, advanced boosters and low-stimulus lasers by **skin type and timing**, adjusting energy, spacing and combinations to avoid overload.",
    "Even after treatments elsewhere, bring your **current skin state**—we can map the next step, including when makeup no longer sits well.",
  ],
  solutionBefore: "Hommage Clinic ",
  solutionAccent: "Recovery",
  solutionAfter: " programme",
  features: [
    {
      title: "Stem-cell regeneration",
      sub: "STEM CELL REGENERATION",
      description: "Autologous fat-derived approaches to support collagen and elastin activity.",
    },
    {
      title: "Premium skin booster",
      sub: "PREMIUM SKIN BOOSTER",
      description: "Concentrated nutrients deep in the skin to reinforce barrier and hydration.",
    },
    {
      title: "Laser regeneration",
      sub: "LASER REGENERATION",
      description: "Non-invasive laser courses to support renewal, pores and fine lines.",
    },
    {
      title: "Comprehensive care",
      sub: "COMPREHENSIVE CARE",
      description: "Personalised stacked programmes for your skin goals.",
    },
  ],
  recommend: [
    "Prolonged redness, dryness or peeling after procedures or laser",
    "You want a dedicated recovery track for a fragile barrier",
    "You prefer staged renewal over one aggressive lift-all",
    "You need meaningful improvement without long downtime",
  ],
  flow: [
    "Consult maps sensitivity, recent care and recovery goals.",
    "Boosters, laser and facials on a planned rhythm with notes on response.",
    "Home care, UV protection and irritant avoidance; adjust intensity if needed.",
    "Review progress mid-course and at completion.",
  ],
  footnote:
    "* Bruising, swelling or transient flush are common. Disclose immune therapy, skin disease, pregnancy or lactation.",
};

const ja: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "リカバリー",
  heroDesc: "幹細胞・プレミアムブースター・低刺激レーザーで肌の自然な再生を支える統合ケア。",
  aboutParas: [
    "リカバリーは単発ではなく、赤み・乾燥・粉ふきが続くときに**バリア回復→栄養→質感**の順で設計する**統合ケア**です。",
    "オマージュは肌タイプと時期に合わせ幹細胞・ブースター・低刺激レーザーを組み、出力・間隔で過刺激を避けます。",
    "他院施術後でも**今の肌状態**だけで次のステップを整理できます。",
  ],
  solutionBefore: "オマージュクリニック ",
  solutionAccent: "リカバリー",
  solutionAfter: " ソリューション",
  features: ko.features.map((f, i) => ({
    ...f,
    title: ["幹細胞再生", "プレミアムスキンブースター", "レーザー再生", "総合管理"][i]!,
    description: [
      "自家脂肪由来アプローチでコラーゲン・エラスチン環境をサポート。",
      "高濃度栄養でバリアと水分を補います。",
      "非侵襲レーザーで再生・毛穴・小じわをケア。",
      "目的に合わせた組み合わせプログラム。",
    ][i]!,
  })),
  recommend: [
    "施術・レーザー後の赤み・乾燥・角質が長引く方",
    "バリア専用ケアを求める方",
    "一度に攻めず段階的再生を好む方",
    "ダウンタイムを抑えつつコンディションを上げたい方",
  ],
  flow: [
    "状態・敏感さ・最近の施術から目標を設定。",
    "ブースター・レーザー等を間隔を空けて実施し経過を記録。",
    "ホームケア・UV・刺激回避を指導、必要に応じ強度調整。",
    "コース中間・終了で確認。",
  ],
  footnote: "* 内出血・腫れ・一時的紅潮はよくあります。免疫治療・皮膚疾患・妊娠授乳はご相談時にお伝えください。",
};

const zh: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "修护 RECOVERY",
  heroDesc: "干细胞支持、高端水光与温和激光，帮助皮肤自然修护与再生。",
  aboutParas: [
    "修护不是单次项目，而是在泛红、干燥、脱屑迁延时按**屏障修护→营养→肤质**节奏设计的**整合护理**。",
    "Hommage 按肤质与阶段安排干细胞、进阶水光与低刺激激光，用能量与间隔避免过度刺激。",
    "即使在他处做过项目，也可凭**当下皮肤状态**梳理下一步。",
  ],
  solutionBefore: "Hommage 诊所 ",
  solutionAccent: "修护",
  solutionAfter: " 方案",
  features: ko.features.map((f, i) => ({
    ...f,
    title: ["干细胞修护", "高端皮肤助推", "激光修护", "综合管理"][i]!,
    description: [
      "自体脂肪来源思路，支持胶原与弹力环境。",
      "高浓度营养深入，强化屏障与保湿。",
      "非侵入激光，辅助更新、毛孔与细纹。",
      "按目标个性化组合疗程。",
    ][i]!,
  })),
  recommend: [
    "光电或术后红、干、角质问题持续者",
    "希望有专门“修护向”护理者",
    "偏好分阶段再生而非一次猛攻者",
    "希望少停工却改善状态者",
  ],
  flow: [
    "评估敏感度、近期护理与修护目标。",
    "按计划间隔进行助推、激光等并记录反应。",
    "指导居家护理、防晒与减少刺激，必要时调整强度。",
    "疗程中与结束时复盘。",
  ],
  footnote: "* 淤青、肿胀或暂时性泛红较常见。免疫治疗、皮肤疾病、妊娠哺乳请提前说明。",
};

const ru: ThreadLiftPageContent = {
  ...ko,
  heroTitleKr: "Recovery",
  heroDesc:
    "Интегрированное восстановление: стволовые опции, бустеры и щадящий лазер.",
  aboutParas: [
    "Recovery — **интегрированный уход** с этапами **барьер → питание → рельеф**, если покраснение и шелушение затягиваются.",
    "Hommage комбинирует протоколы по **типу кожи и фазе**, избегая перегруза.",
    "Можно прийти с **текущим состоянием** после процедур в других клиниках.",
  ],
  solutionBefore: "Клиника Hommage — ",
  solutionAccent: "Recovery",
  solutionAfter: "",
  features: ko.features.map((f, i) => ({
    ...f,
    title: ["Стволовые", "Премиум-бустер", "Лазер", "Комплекс"][i]!,
    description: [
      "Поддержка коллагена и эластина аутологичными подходами.",
      "Концентрированное питание и барьер.",
      "Щадящий лазер для обновления и пор.",
      "Персональные комбинированные программы.",
    ][i]!,
  })),
  recommend: [
    "Долго не проходит покраснение или сухость после процедур",
    "Нужен отдельный «recovery»-трек",
    "Предпочитаете поэтапное обновление",
    "Важен короткий простой",
  ],
  flow: [
    "Диагностика чувствительности и целей.",
    "Бустеры и лазер по графику с учётом реакции.",
    "Домашний уход и SPF; корректировка интенсивности.",
    "Контроль в середине и в конце курса.",
  ],
  footnote:
    "* Синяки и отёк возможны. Сообщите об иммунотерапии, дерматозах, беременности и лактации.",
};

const byLocale: Record<Locale, ThreadLiftPageContent> = { ko, en, ja, zh, ru };

export function getRecoveryPageContent(locale: Locale): ThreadLiftPageContent {
  return byLocale[locale] ?? ko;
}
