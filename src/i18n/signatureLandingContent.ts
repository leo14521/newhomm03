import type { Locale } from "@/i18n/messages";

type Feature = { title: string; description: string };

export type RejuranLanding = {
  heroSub: string;
  intro: string;
  benefits: Feature[];
  areas: string[];
  ctaLead: string;
};

export type TuneBodyLanding = {
  heroSub: string;
  intro: string;
  features: Feature[];
  areas: string[];
  ctaLead: string;
};

export type TuneFaceLanding = {
  heroSub: string;
  intro: string;
  features: Feature[];
  depthHeading: string;
  depths: { depth: string; target: string; effect: string }[];
  recNote: string;
  ctaLead: string;
};

export type ShrinkLanding = {
  heroSub: string;
  intro: string;
  features: Feature[];
  areas: string[];
  ctaLead: string;
};

const rejuran: Record<Locale, RejuranLanding> = {
  ko: {
    heroSub: "리쥬란 힐러 · PDRN 기반\n프리미엄 스킨부스터",
    intro:
      "리쥬란 힐러는 DNA 핵산 성분인 PDRN(Polydeoxyribonucleotide)을 함유한 프리미엄 스킨부스터입니다. PDRN은 피부 세포 재생을 촉진하고 콜라겐 생성을 활성화하여 피부 탄력과 주름 개선에 효과적입니다. 손상된 피부 조직을 복구하고 새로운 세포 생성을 촉진하여 자연스러운 피부 재생을 돕습니다.",
    benefits: [
      { title: "PDRN 성분", description: "DNA 핵산 성분인 PDRN이 피부 세포 재생을 촉진하고 콜라겐 생성을 활성화합니다." },
      { title: "피부 재생", description: "손상된 피부 조직을 복구하고 새로운 세포 생성을 촉진하여 피부를 재생시킵니다." },
      { title: "탄력 개선", description: "콜라겐과 엘라스틴 생성을 촉진하여 피부 탄력을 개선하고 주름을 완화합니다." },
      { title: "수분 공급", description: "피부 깊숙이 수분을 공급하여 건조함을 개선하고 피부 장벽을 강화합니다." },
    ],
    areas: ["얼굴 전반", "목", "손등", "가슴"],
    ctaLead: "리쥬란 시술에 대한 자세한 상담을 원하시면",
  },
  en: {
    heroSub: "Rejuran Healer · PDRN-based\npremium skin booster",
    intro:
      "Rejuran Healer is a premium skin booster containing PDRN (polydeoxyribonucleotide). PDRN supports cell renewal and collagen activity for elasticity and fine lines. It helps repair damaged tissue and encourages natural skin regeneration.",
    benefits: [
      { title: "PDRN", description: "Nucleotide-derived PDRN supports skin renewal and collagen activity." },
      { title: "Regeneration", description: "Helps repair damaged tissue and encourage new cell turnover." },
      { title: "Elasticity", description: "Supports collagen and elastin for firmer, smoother skin." },
      { title: "Hydration", description: "Deep moisture to relieve dryness and support the skin barrier." },
    ],
    areas: ["Full face", "Neck", "Dorsal hands", "Décolleté"],
    ctaLead: "For a detailed consultation on Rejuran,",
  },
  ja: {
    heroSub: "リジュラン ヒーラー · PDRN\nプレミアムスキンブースター",
    intro:
      "リジュラン ヒーラーはPDRN（ポリデオキシリボヌクレオチド）を配合したプレミアムスキンブースターです。細胞の再生やコラーゲン生成のサポートにより、ハリや小じわのケアに役立ちます。損傷した組織の修復と自然な再生を後押しします。",
    benefits: [
      { title: "PDRN", description: "核酸由来成分PDRNが肌の再生とコラーゲン生成をサポートします。" },
      { title: "肌再生", description: "損傷組織の修復と新しい細胞のターンオーバーを助けます。" },
      { title: "弾力", description: "コラーゲン・エラスチン生成を後押しし、ハリとしわをケアします。" },
      { title: "保湿", description: "深くうるおいを補い、乾燥やバリア機能のサポートに。" },
    ],
    areas: ["顔全体", "首", "手の甲", "デコルテ"],
    ctaLead: "リジュランについて詳しくご相談されたい方は",
  },
  zh: {
    heroSub: "丽珠兰黑盒 · 基于PDRN的\n高端皮肤助推疗程",
    intro:
      "丽珠兰黑盒是含PDRN（多聚脱氧核糖核苷酸）的高端皮肤助推疗程。PDRN有助于细胞更新与胶原活力，改善弹性与细纹，并支持受损组织修复与自然再生。",
    benefits: [
      { title: "PDRN 成分", description: "核酸类成分PDRN支持细胞更新与胶原生成。" },
      { title: "皮肤再生", description: "帮助修护受损组织并促进细胞更替。" },
      { title: "改善弹性", description: "促进胶原与弹力纤维，紧致平滑。" },
      { title: "深层补水", description: "深层滋润，缓解干燥并强韧屏障。" },
    ],
    areas: ["全面部", "颈部", "手背", "胸前"],
    ctaLead: "若希望详细了解丽珠兰疗程，",
  },
  ru: {
    heroSub: "Rejuran Healer · премиальный\nскин-бустер на основе PDRN",
    intro:
      "Rejuran Healer — премиальный скин-бустер с PDRN. PDRN поддерживает обновление клеток и синтез коллагена для упругости и сглаживания мелких заломов, помогает восстановлению повреждённых тканей.",
    benefits: [
      { title: "PDRN", description: "PDRN поддерживает обновление клеток и активность коллагена." },
      { title: "Регенерация", description: "Помогает восстановлению тканей и обновлению клеток." },
      { title: "Упругость", description: "Поддержка коллагена и эластина для более плотной кожи." },
      { title: "Увлажнение", description: "Глубокое увлажнение и поддержка барьера кожи." },
    ],
    areas: ["Все лицо", "Шея", "Тыльная сторона курок", "Зона декольте"],
    ctaLead: "Если вы хотите подробную консультацию по Rejuran,",
  },
};

const tuneBody: Record<Locale, TuneBodyLanding> = {
  ko: {
    heroSub: "고주파를 활용한\n바디 컨투어링 시술",
    intro:
      "튠바디는 고주파를 활용한 바디 컨투어링 시술로, 지방 분해와 탄력 개선에 효과적입니다. 고주파 에너지를 이용하여 지방 세포를 분해하고 제거하여 바디 라인을 개선하며, 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다.",
    features: [
      { title: "지방 분해", description: "고주파 에너지를 이용하여 지방 세포를 분해하고 제거하여 바디 라인을 개선합니다." },
      { title: "탄력 개선", description: "콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다." },
      { title: "비수술 시술", description: "수술 없이 고주파를 활용하여 안전하고 효과적인 바디 컨투어링을 제공합니다." },
      { title: "회복 기간 단축", description: "비수술 시술로 회복 기간이 짧고 일상생활에 지장이 없습니다." },
    ],
    areas: ["복부", "허벅지", "팔뚝", "옆구리", "등"],
    ctaLead: "튠바디 시술에 대한 자세한 상담을 원하시면",
  },
  en: {
    heroSub: "RF-assisted\nbody contouring",
    intro:
      "Tune Body uses radiofrequency body contouring to target fat reduction and skin tightening. RF energy helps break down fat cells while stimulating collagen for firmer, smoother contours—non-surgical, with minimal downtime.",
    features: [
      { title: "Fat reduction", description: "RF energy targets fat cells to refine body lines." },
      { title: "Skin tightening", description: "Collagen stimulation helps lift lax skin." },
      { title: "Non-surgical", description: "No surgery—RF-based contouring with a comfortable protocol." },
      { title: "Quick recovery", description: "Typically easy return to daily activities." },
    ],
    areas: ["Abdomen", "Thighs", "Upper arms", "Flanks", "Back"],
    ctaLead: "For a detailed Tune Body consultation,",
  },
  ja: {
    heroSub: "高周波を用いた\nボディコンタリング",
    intro:
      "チューンボディは高周波を用いたボディコンタリングで、脂肪のケアと引き締めを目指します。高周波エネルギーで脂肪細胞にアプローチしつつ、コラーゲン生成をサポートして肌のハリを高めます。非手術で、日常生活への負担が少ないのが特徴です。",
    features: [
      { title: "脂肪ケア", description: "高周波エネルギーでラインをすっきり見せるサポート。" },
      { title: "ハリ改善", description: "コラーゲン生成を後押しし、たるみをケア。" },
      { title: "非手術", description: "切らずに高周波でボディラインを整えるアプローチ。" },
      { title: "ダウンタイム軽減", description: "比較的短い回復で日常に戻りやすい。" },
    ],
    areas: ["お腹", "太もも", "二の腕", "脇腹", "背中"],
    ctaLead: "チューンボディについて詳しくご相談されたい方は",
  },
  zh: {
    heroSub: "射频\n身体轮廓管理",
    intro:
      "Tune Body 以射频进行身体轮廓管理，针对减脂与紧致。射频能量作用于脂肪细胞并刺激胶原生成，改善松弛，非手术方式，恢复相对轻松。",
    features: [
      { title: "溶脂塑形", description: "射频能量帮助改善身体线条。" },
      { title: "紧致提升", description: "促进胶原，改善松弛。" },
      { title: "非手术", description: "无需手术，以射频完成轮廓管理。" },
      { title: "恢复较快", description: "非手术治疗，便于回归日常。" },
    ],
    areas: ["腹部", "大腿", "上臂", "侧腰", "背部"],
    ctaLead: "若希望详细了解 Tune Body，",
  },
  ru: {
    heroSub: "RF-контурирование\nтела",
    intro:
      "Tune Body — программа RF-контурирования для коррекции объёма и упругости кожи. Энергия ВЧ воздействует на жировые клетки и стимулирует коллаген; без операции, с мягким периодом восстановления.",
    features: [
      { title: "Жировой слой", description: "ВЧ-энергия помогает скорректировать контуры." },
      { title: "Упругость", description: "Стимуляция коллагена для более плотной кожи." },
      { title: "Без операции", description: "Нехирургический RF-протокол." },
      { title: "Быстрый возврат", description: "Обычно удобно вписывается в ритм жизни." },
    ],
    areas: ["Живот", "Бёдра", "Плечи", "Фланки", "Спина"],
    ctaLead: "Если вы хотите подробную консультацию по Tune Body,",
  },
};

const tuneFace: Record<Locale, TuneFaceLanding> = {
  ko: {
    heroSub: "멀티 고주파를 활용한\n페이스리프팅 시술",
    intro:
      "튠페이스는 이스라엘 ALMA사에서 개발한 멀티 고주파를 활용한 페이스리프팅 시술로, 공식명칭은 악센트 프라임(Accent Prime)입니다. 40.68MHz의 이상적인 주파수 에너지를 사용하여 피부 속 물분자를 회전시키고, 이로 인한 마찰열로 콜라겐을 자극하고 재생합니다.",
    features: [
      { title: "멀티 고주파 기술", description: "40.68MHz의 이상적인 주파수 에너지를 사용하여 피부 속 물분자를 회전시키고, 이로 인한 마찰열로 콜라겐을 자극하고 재생합니다." },
      { title: "3단계 깊이 조절", description: "5mm, 8mm, 11mm 깊이 조절이 가능하여 피부층별 맞춤 시술이 가능합니다." },
      { title: "아이스 컨택트 쿨링", description: "통증을 최소화하는 아이스 컨택트 쿨링 시스템으로 편안한 시술이 가능합니다." },
      { title: "즉시 효과", description: "시술 직후 즉시 피부가 당겨지고 얼굴라인이 정리되는 효과가 나타납니다." },
    ],
    depthHeading: "3단계 깊이 조절",
    depths: [
      { depth: "5mm", target: "표피층", effect: "표면 탄력 개선" },
      { depth: "8mm", target: "진피층", effect: "콜라겐 재생" },
      { depth: "11mm", target: "근막층", effect: "리프팅 효과" },
    ],
    recNote:
      "권장 시술: 1개월 간격으로 3회 이상 시술 권장되며, 3회 기준 1년 정도 유지됩니다.",
    ctaLead: "튠페이스 시술에 대한 자세한 상담을 원하시면",
  },
  en: {
    heroSub: "Multi-RF\nface lifting protocol",
    intro:
      "Tune Face (Accent Prime by Alma) uses multi-radiofrequency around 40.68 MHz. It rotates dermal water molecules; frictional heat stimulates collagen renewal for a lifted, refined look.",
    features: [
      { title: "Multi-RF", description: "40.68 MHz energy rotates water molecules; heat cues collagen renewal." },
      { title: "Three depths", description: "5 / 8 / 11 mm options for layer-specific treatment." },
      { title: "Ice contact cooling", description: "Cooling helps keep treatment comfortable." },
      { title: "Visible tightening", description: "Many patients notice an immediate “snap” and cleaner lines." },
    ],
    depthHeading: "Three depth levels",
    depths: [
      { depth: "5 mm", target: "Epidermis", effect: "Surface firmness" },
      { depth: "8 mm", target: "Dermis", effect: "Collagen renewal" },
      { depth: "11 mm", target: "SMAS plane", effect: "Lifting vector" },
    ],
    recNote: "Typical plan: 3+ sessions about a month apart; effects may last around a year after three sessions (individual results vary).",
    ctaLead: "For a detailed Tune Face consultation,",
  },
  ja: {
    heroSub: "マルチ高周波による\nフェイスリフト施術",
    intro:
      "チューンフェイス（アルマ社アクセントプライム）はマルチ高周波を用いたフェイスリフト施術です。約40.68MHzのエネルギーで真皮内の水分子を動かし、摩擦熱でコラーゲン再生を促します。",
    features: [
      { title: "マルチ高周波", description: "40.68MHzで水分子を動かし、コラーゲン再生をサポート。" },
      { title: "3段階の深さ", description: "5/8/11mmで層に合わせた照射が可能。" },
      { title: "アイスコンタクト冷却", description: "冷却で施術中の負担を軽減。" },
      { title: "即時感", description: "施術直後から引き締まりとラインの整いを実感しやすい。" },
    ],
    depthHeading: "3段階の深さ調整",
    depths: [
      { depth: "5mm", target: "表皮側", effect: "表面のハリ" },
      { depth: "8mm", target: "真皮", effect: "コラーゲン再生" },
      { depth: "11mm", target: "筋膜寄り", effect: "リフト方向のサポート" },
    ],
    recNote: "目安：1ヶ月間隔で3回以上。3回後は約1年程度の維持を目安に（個人差あり）。",
    ctaLead: "チューンフェイスについて詳しくご相談されたい方は",
  },
  zh: {
    heroSub: "多极射频\n面部提拉",
    intro:
      "Tune Face（Alma Accent Prime）采用多极射频，约40.68MHz能量带动真皮内水分子运动，以摩擦热刺激胶原更新，帮助轮廓更清晰。",
    features: [
      { title: "多极射频", description: "40.68MHz 能量促进胶原更新。" },
      { title: "三档深度", description: "5/8/11mm，分层治疗。" },
      { title: "接触式冰感冷却", description: "减轻术中不适。" },
      { title: "即时紧致感", description: "不少求美者术后即可感受提拉与线条整理。" },
    ],
    depthHeading: "三档深度调节",
    depths: [
      { depth: "5mm", target: "表皮侧", effect: "表层紧致" },
      { depth: "8mm", target: "真皮", effect: "胶原新生" },
      { depth: "11mm", target: "筋膜方向", effect: "提拉支撑" },
    ],
    recNote: "建议：间隔约1个月，3次以上；三次后维持约一年（因人而异）。",
    ctaLead: "若希望详细了解 Tune Face，",
  },
  ru: {
    heroSub: "Мульти-RF\nлифтинг лица",
    intro:
      "Tune Face (Accent Prime, Alma) — мульти-RF-протокол ~40,68 МГц: вращение молекул воды в дерме и мягкое тепло для стимуляции коллагена и более чёткого овала.",
    features: [
      { title: "Мульти-RF", description: "Энергия 40,68 МГц и поддержка обновления коллагена." },
      { title: "Три глубины", description: "5 / 8 / 11 мм для послойной работы." },
      { title: "Контактное охлаждение", description: "Повышает комфорт во время процедуры." },
      { title: "Быстрый эффект", description: "Часто отмечают мгновенное ощущение подтяжки." },
    ],
    depthHeading: "Три уровня глубины",
    depths: [
      { depth: "5 мм", target: "Эпидермис", effect: "Поверхностная упругость" },
      { depth: "8 мм", target: "Дерма", effect: "Обновление коллагена" },
      { depth: "11 мм", target: "SMAS-зона", effect: "Лифтинг-вектор" },
    ],
    recNote: "Обычно 3+ сеанса с интервалом около месяца; после трёх — до ~года у многих пациентов (индивидуально).",
    ctaLead: "Если вы хотите подробную консультацию по Tune Face,",
  },
};

const shrink: Record<Locale, ShrinkLanding> = {
  ko: {
    heroSub: "고강도 집속 초음파(HIFU) 에너지를 이용한\n2세대 리프팅 시술",
    intro:
      "슈링크 유니버스는 고강도 집속 초음파(HIFU) 에너지를 이용한 2세대 리프팅 시술입니다. 돋보기로 햇빛을 모아 종이를 태우듯, 초음파 에너지를 피부 속 진피층과 근막층(SMAS)에 집중시켜 65~75℃의 열응고점을 만들어 콜라겐 재생을 촉진합니다.",
    features: [
      { title: "MP 모드 & Normal 모드", description: "두 가지 모드로 시술이 가능하며, 총 7가지 카트리지로 깊이 맞춤화(1.5mm~4.5mm)가 가능합니다." },
      { title: "빠른 시술 속도", description: "시술 속도가 기존 대비 2.5배 빨라지고 통증이 크게 감소했습니다." },
      { title: "이중턱 & V라인", description: "이중턱, 처진 볼살, 불분명한 턱선 개선 및 V라인 효과를 제공합니다." },
      { title: "장기 지속 효과", description: "효과는 일반적으로 6개월~1년 유지됩니다." },
    ],
    areas: ["이중턱", "처진 볼살", "불분명한 턱선", "V라인", "목주름"],
    ctaLead: "슈링크 유니버스 시술에 대한 자세한 상담을 원하시면",
  },
  en: {
    heroSub: "Second-generation lifting\nwith focused ultrasound (HIFU)",
    intro:
      "Shrink Universe delivers focused ultrasound to dermis and SMAS, creating thermal coagulation points around 65–75°C to stimulate collagen remodelling—like sunlight focused through a lens.",
    features: [
      { title: "MP & Normal modes", description: "Two modes with multiple cartridges for depth customisation (~1.5–4.5 mm)." },
      { title: "Faster sessions", description: "Often quicker than earlier devices, with less discomfort for many patients." },
      { title: "Jawline & V-line", description: "Targets double chin, lax cheeks, and undefined jawlines." },
      { title: "Durable effect", description: "Results commonly last about 6–12 months (varies by individual)." },
    ],
    areas: ["Double chin", "Sagging cheeks", "Undefined jawline", "V-line", "Neck lines"],
    ctaLead: "For a detailed Shrink Universe consultation,",
  },
  ja: {
    heroSub: "高密度焦点式超音波(HIFU)による\n第2世代リフティング",
    intro:
      "シュリンクユニバースはHIFUを用いた第2世代リフティングです。真皮〜筋膜方向へエネルギーを集中し、約65〜75℃の熱凝固点でコラーゲン再生を促します。",
    features: [
      { title: "MP & ノーマル", description: "2モード、7種のカートリッジで深さを調整（約1.5〜4.5mm）。" },
      { title: "スピード・快適性", description: "従来より速く、痛みの軽減を目指した設計。" },
      { title: "二重あご・Vライン", description: "頬のたるみ、あご下、ラインの整いをサポート。" },
      { title: "持続", description: "効果の目安は約6〜12ヶ月（個人差あり）。" },
    ],
    areas: ["二重あご", "たるんだ頬", "ぼやけた顎ライン", "Vライン", "首の横ジワ"],
    ctaLead: "シュリンクユニバースについて詳しくご相談されたい方は",
  },
  zh: {
    heroSub: "高能聚焦超声(HIFU)\n第二代提拉",
    intro:
      "Shrink Universe 以HIFU将能量聚焦于真皮与筋膜层，形成约65–75°C热凝固点，促进胶原重塑。",
    features: [
      { title: "MP 与 Normal 模式", description: "双模式，多种治疗头，深度约1.5–4.5mm可调。" },
      { title: "更快更舒适", description: "相较早期设备，速度提升、痛感常更低。" },
      { title: "双下巴与V脸", description: "针对松弛面颊、轮廓不清、下颌线。" },
      { title: "维持时间", description: "一般约6–12个月（因人而异）。" },
    ],
    areas: ["双下巴", "面颊松弛", "下颌线模糊", "V脸", "颈纹"],
    ctaLead: "若希望详细了解 Shrink Universe，",
  },
  ru: {
    heroSub: "Лифтинг II поколения\nна сфокусированном УЗИ (HIFU)",
    intro:
      "Shrink Universe направляет HIFU в дерму и зону SMAS, формируя точки коагуляции ~65–75°C для стимуляции коллагена.",
    features: [
      { title: "Режимы MP и Normal", description: "Два режима и несколько насадок, глубина ~1,5–4,5 мм." },
      { title: "Скорость и комфорт", description: "Быстрее многих предыдущих систем, меньше дискомфорта." },
      { title: "Овал и V-линия", description: "Второй подбородок, нависание щёк, нечёткая линия челюсти." },
      { title: "Длительность эффекта", description: "Обычно около 6–12 месяцев (индивидуально)." },
    ],
    areas: ["Второй подбородок", "Опущенные щёки", "Неясная линия челюсти", "V-линия", "Кольца на шее"],
    ctaLead: "Если вы хотите подробную консультацию по Shrink Universe,",
  },
};

export function getRejuranLanding(locale: Locale): RejuranLanding {
  return rejuran[locale] ?? rejuran.en;
}
export function getTuneBodyLanding(locale: Locale): TuneBodyLanding {
  return tuneBody[locale] ?? tuneBody.en;
}
export function getTuneFaceLanding(locale: Locale): TuneFaceLanding {
  return tuneFace[locale] ?? tuneFace.en;
}
export function getShrinkUniverseLanding(locale: Locale): ShrinkLanding {
  return shrink[locale] ?? shrink.en;
}
