import type { Locale } from "@/i18n/messages";

export type StemCellPageContent = {
  heroTitleKr: string;
  heroDesc: string;
  aboutH2: string;
  aboutParas: string[];
  equipmentH2: string;
  equipmentParas: string[];
  keyPointTitle: string;
  keyPointParas: string[];
  customizedH2: string;
  customizedHighlight: string;
  customizedParas: string[];
  forYouH2: string;
  recommend: string[];
  aftercareH2: string;
  aftercare: string[];
};

const ko: StemCellPageContent = {
  heroTitleKr: "줄기세포치료",
  heroDesc:
    "노화로 급격히 떨어진 자연치유력을 크게 올려주는 방법. 성기능·활력·탈모·체형 등에 탁월한 개선 효과를 위한 '줄기세포치료'",
  aboutH2: "줄기세포",
  aboutParas: [
    "인체 안에 존재하고 있는 세포 및 조직이 원래의 기능으로 회복하게 만드는 재생능력을 지닌 세포입니다.",
    "현재 가장 안전하게 사용할 수 있는 줄기세포는 지금 내 몸 안에 존재하는 성체 줄기세포입니다. 혈액줄기세포는 채취가 가장 쉽고, 경증치료 또는 미용목적으로 사용이 적합합니다.",
    "골수줄기세포는 가장 튼튼한 골반 뼈에서 비교적 어렵지 않게 채취하며, 중증치료에 사용 될 만큼 많은 양의 줄기세포와 성장인자를 포함합니다.",
  ],
  equipmentH2: "미라셀(Miracell) · MCT(메타셀)",
  equipmentParas: [
    "미라셀(Miracell)은 미국 하버드의과대학 면역연구소에서 연구개발한 세포분리기로, 전혈과 골수에서 우수한 양의 세포들을 추출·농축하는 시스템입니다.",
    "기존의 PRP 제품보다 혈소판 활성화를 50%이하로 감소시켜 혈소판을 약 800%이상 회복시켜 주며, Floating Shelf, Decanting, Double Spin 기술로 세포용 원심분리를 해서 혈소판을 기저선의 4배 이상까지 농축이 가능합니다.",
    "미국 FDA, 영국 BSI와 국내 식품의약품안전청(KFDA)에서 체내에서 진행되는 IN Vivo로 승인이 되어 그 안정성과 유효성을 검증합니다. 하버드(Harvard), 스탠포드(Stanford), UCLA 등 해외 유명대학에서 논문으로 발표된 미라셀은 조기활성화 되지 않은 혈소판의 양이 많아 염증 및 유착을 유발시키지 않고, 기존 PRP보다 농축혈소판이 기준치에서 2.5배에서 최대 10배로 증가해 미분화 세포가 기하급수적으로 증가한다는 것이 장점입니다.",
    "또한, 기존의 PRP 제품보다 4배 이상의 성장 인자(growth factor)를 농축할 수 있어 확실한 치료 효과와 치료기간 단축으로 인한 의료비 절감됩니다.",
    "오마쥬클리닉은 줄기세포 시술 시 **MCT(메타셀)** 프로토콜을 함께 적용해, 세포 생존율과 활성 환경을 더욱 안정적으로 확보합니다. MCT는 주입 환경의 균질도를 높이고 유효 성분 전달력을 보완해 개인별 반응 편차를 줄이는 데 도움을 줍니다.",
    "그 결과, 동일한 줄기세포 시술이라도 **초기 회복 체감 속도**와 **유지력** 측면에서 더 일관된 임상 만족도를 기대할 수 있습니다.",
  ],
  keyPointTitle: "key point",
  keyPointParas: [
    "오마쥬클리닉에서는 FDA와 KFDA의 허가를 받은 미라셀(Miracell)만을 사용하고 있습니다. 다수의 특허기술로 배양하지 않아도 감염의 위험이 적고 많은 줄기세포, 성장인자, 백혈구 등 재생에 필수적인 세포의 양을 추출할 수 있어 이식되었을 때, 더 빠르고 탁월한 효과를 볼 수 있습니다.",
    "특허기술로 배양하지 않고 시술받을 수 있어 감염의 위험이 적으며 체내에 이식되었을 때 더 빠르고 탁월한 효과를 얻을 수 있는 재생에 필수적인 5가지의 세포를 모두 함께 추출하여 이식을 진행합니다.",
    "여기에 MCT(메타셀) 프로토콜을 병행하여 줄기세포 활성 환경을 정밀하게 맞춤 설계함으로써, 면역·순환·항노화 목적의 치료에서 보다 안정적이고 예측 가능한 결과를 목표로 합니다.",
  ],
  customizedH2: "오마쥬클리닉 줄기세포 맞춤 시술입니다.",
  customizedHighlight: "당일 바로 시술 가능합니다.",
  customizedParas: [
    "배양없이 농축된 줄기세포를 혈관주사 (정맥주사)를 통해 주입하는 방법으로 피로감을 줄여주고 활력을 높여주며, 면역력을 증강을 해줍니다.",
    "혈관으로 이식된 줄기세포는 혈관을 타고 우리 몸을 돌며 재생이 필요한 곳에 더욱 집중하고 혈액공급이 부족한 곳은 새로운 혈관을 신생하여 원활하게 산소와 영양소를 공급합니다.",
  ],
  forYouH2: "줄기세포치료, 누가 받아야 할까요?",
  recommend: [
    "잦은 잔병치레, 면역력이 떨어져 있는 경우",
    "쉽게 피로를 느끼고 체력이 약한 경우",
    "고혈압, 당뇨, 고지혈증, 만성폐질환 및 간질환, 난치성질환자",
    "뇌·심혈관 질환, 수족냉증 / 손발저림 등 순환개선이 필요한 경우",
    "남녀 갱년기, 성기능 개선이 필요한 경우",
    "현재 불편함은 없으나 건강증진 및 항노화 치매 예방 목적",
  ],
  aftercareH2: "시술 후 주의사항",
  aftercare: [
    "혈류를 방해하는 아스피린계열 약물복용 금지",
    "원활한 혈액순환을 위해 몸을 따뜻하게 유지",
    "시술의 최상의 효과를 위해 최소 2주간 금주 & 금연",
    "줄기세포의 재생을 방해하는 스테로이드, 소염제, 파스는 최소 2주간 금지",
    "개인 몸 상태에 따라 시술 후 하루에서 이틀, 몸살증상(근육통)이 발생",
    "통증이 심할 시 타이레놀 진통제를 복용",
    "한약은 원장과 상의 후 복용",
  ],
};

const en: StemCellPageContent = {
  heroTitleKr: "Stem cell therapy",
  heroDesc:
    "A protocol focused on supporting your body’s repair capacity—vitality, circulation, anti-ageing goals and more, planned in private consultation.",
  aboutH2: "Stem cells",
  aboutParas: [
    "Stem cells are specialised cells that help tissues return toward normal function through regeneration.",
    "The safest practical source for many protocols is **your own adult stem cells**. Peripheral blood harvest is relatively easy and suits milder or wellness-oriented plans.",
    "Bone-marrow harvest from the iliac crest yields a richer pool of stem cells and growth factors when a stronger signal is clinically appropriate.",
  ],
  equipmentH2: "Miracell · MCT (MetaCell)",
  equipmentParas: [
    "Miracell is a Harvard-linked separation system that concentrates cells from whole blood or marrow with controlled centrifugation.",
    "Compared with many classic PRP workflows it limits premature platelet activation while recovering platelet yield, using decanting and double-spin steps to reach high concentration factors.",
    "It carries regulatory clearance pathways (e.g. FDA/KFDA context per local labelling) and is described in peer literature from major universities.",
    "Growth-factor enrichment can exceed many older PRP kits, potentially shortening the treatment course for some indications.",
    "Hommage pairs stem-cell sessions with the **MCT (MetaCell)** protocol to stabilise the delivery environment and even out ingredient distribution.",
    "Patients often report more consistent **early recovery feel** and **durability perception** when the same cellular dose is supported by optimised carrier technique.",
  ],
  keyPointTitle: "Key point",
  keyPointParas: [
    "We use FDA/KFDA–cleared Miracell technology with patented separation—no culture step, aiming to lower infection risk while harvesting stem cells, growth factors and leukocytes together.",
    "Five regenerative cell types are concentrated in one pass for intravenous reinfusion when your plan indicates.",
    "MCT is layered on to tailor the activation milieu for immune, circulatory and anti-ageing-oriented goals.",
  ],
  customizedH2: "Hommage customised stem-cell care",
  customizedHighlight: "Same-day treatment is available when medically appropriate.",
  customizedParas: [
    "Concentrated autologous cells are reinfused intravenously without culture to support energy, resilience and immune balance.",
    "Cells circulate systemically, homing toward stressed tissues and supporting microvascular supply where repair is needed.",
  ],
  forYouH2: "Who might consider stem-cell therapy?",
  recommend: [
    "Frequent minor illness or feeling run-down",
    "Fatigue and low stamina",
    "Metabolic or chronic organ issues (evaluation required)",
    "Brain/circulation symptoms or cold extremities needing vascular support",
    "Menopause-related goals including vitality support",
    "Wellness and healthy-ageing objectives without acute disease",
  ],
  aftercareH2: "Aftercare",
  aftercare: [
    "Avoid aspirin-class drugs that impair platelet function unless your physician advises otherwise.",
    "Keep warm to support circulation.",
    "No alcohol or smoking for at least two weeks for best effect.",
    "Avoid steroids, NSAIDs and plasters that blunt regeneration for at least two weeks.",
    "Mild flu-like soreness for 1–2 days can be normal.",
    "Use acetaminophen for pain if approved by your doctor.",
    "Discuss herbal medicine with your physician before use.",
  ],
};

const ja: StemCellPageContent = {
  heroTitleKr: "幹細胞治療",
  heroDesc:
    "自然治癒力のサポートを目指すオマージュのプログラム。活力・循環・エイジングケアなどを医師と相談のうえ設計します。",
  aboutH2: "幹細胞とは",
  aboutParas: [
    "組織の機能回復を助ける再生能力をもつ細胞です。",
    "安全性の観点から多くは**自家成体幹細胞**を用います。末梢血採取は比較的容易で、軽度〜ウェルネス目的に適します。",
    "骨髄採取はより多くの幹細胞と成長因子が得られ、重症度に応じて選択されます。",
  ],
  equipmentH2: "ミラセル（Miracell）· MCT（メタセル）",
  equipmentParas: [
    "ミラセル（Miracell）はハーバード関連研究由来の分離濃縮システムで、全血・骨髄から細胞を精製します。",
    "従来PRPより血小板の早期活性化を抑え、デカンティングと二段遠心で高濃度化を狙います。",
    "各国の規制に適合した使用で安全性・有効性が検証されています。",
    "成長因子の濃縮により治療期間短縮の可能性があります。",
    "オマージュでは**MCT（メタセル）**を併用し、注入環境の均一化と成分伝達を補います。",
    "同じ細胞量でも**初期の体感回復**と**持続感**が安定しやすいと報告されることがあります。",
  ],
  keyPointTitle: "Key point",
  keyPointParas: [
    "FDA/KFDA認可のミラセル（Miracell）と特許技術を使用。培養なしで感染リスクを抑え、幹細胞・成長因子・白血球などを同時に濃縮します。",
    "再生に関わる5種の細胞を一度に回収し、計画に応じて静脈還流します。",
    "MCTで活性環境を精密に設計し、免疫・循環・エイジング目的の結果の再現性を高めます。",
  ],
  customizedH2: "オマージュのオーダーメイド幹細胞ケア",
  customizedHighlight: "医師判断で当日施術が可能な場合があります。",
  customizedParas: [
    "培養なしの濃縮細胞を静脈投与し、疲労感軽減や活力・免疫バランスをサポートします。",
    "全身循環後、再生が必要な部位へ働きかけ、血流不足には血管新生のサポートが期待されます。",
  ],
  forYouH2: "どんな方におすすめ？",
  recommend: [
    "風邪を繰り返し免疫力が気になる方",
    "疲れやすく体力が落ちたと感じる方",
    "生活習慣病や慢性疾患で相談したい方（要評価）",
    "冷えや血行不良が気になる方",
    "更年期の活力サポートを考える方",
    "不調はないが健康増進・エイジングケアを希望する方",
  ],
  aftercareH2: "術後の注意",
  aftercare: [
    "血流に影響するアスピリン系は医師指示なく服用しない",
    "体温を保ち血行をサポート",
    "最低2週間は禁煙禁酒",
    "再生を妨げるステロイド・NSAIDs・湿布は2週間避ける",
    "1〜2日の筋肉痛様症状があり得る",
    "痛みは医師の指示でアセトアミノフェン",
    "漢方は必ず医師に相談",
  ],
};

const zh: StemCellPageContent = {
  heroTitleKr: "干细胞治疗",
  heroDesc: "在私人咨询中规划，侧重支持机体修复力、活力与循环等目标的综合方案。",
  aboutH2: "干细胞",
  aboutParas: [
    "干细胞是具有组织修复与再生潜能的细胞。",
    "临床常用**自体成体干细胞**。外周血采集相对简便，适合轻症或养护导向方案。",
    "骨髓采集可获得更多干细胞与生长因子，用于需要更强信号的情况。",
  ],
  equipmentH2: "米拉塞尔（Miracell）· MCT（MetaCell）",
  equipmentParas: [
    "米拉塞尔（Miracell）源自哈佛相关研究的分离浓缩系统，从全血或骨髓中富集细胞。",
    "相较传统 PRP，可抑制血小板过早激活，并通过分步离心提高浓度。",
    "符合当地监管路径，安全性与有效性经临床验证。",
    "生长因子富集有助于缩短部分疗程。",
    "Hommage 联合 **MCT（MetaCell）** 方案，稳定递送环境、提高成分均匀度。",
    "在相同细胞剂量下，**早期恢复感受**与**维持感**往往更一致。",
  ],
  keyPointTitle: "Key point",
  keyPointParas: [
    "采用获 FDA/KFDA 许可的 Miracell 专利技术，无需培养，降低感染风险，同时富集干细胞、生长因子与白细胞等。",
    "一次性富集五种再生相关细胞并按计划静脉回输。",
    "配合 MCT 精细调节激活环境，面向免疫、循环与抗老目标。",
  ],
  customizedH2: "Hommage 定制干细胞护理",
  customizedHighlight: "在医学评估允许时可当日治疗。",
  customizedParas: [
    "无培养浓缩细胞经静脉输注，帮助改善疲劳感、活力与免疫平衡。",
    "细胞随循环作用于需修复组织，并支持微循环与营养输送。",
  ],
  forYouH2: "谁适合考虑干细胞治疗？",
  recommend: [
    "反复小病痛、关注免疫力者",
    "易疲劳、体力下降者",
    "代谢或慢性问题需评估者",
    "脑血流或四肢冰冷等循环顾虑者",
    "更年期活力需求者",
    "以健康促进与抗老为目标者",
  ],
  aftercareH2: "术后注意",
  aftercare: [
    "勿擅自服用影响凝血的阿司匹林类药物",
    "注意保暖促进循环",
    "至少两周戒烟酒",
    "两周内避免抑制再生的激素、消炎药与膏药",
    "可能出现1–2天肌肉酸痛样不适",
    "疼痛请遵医嘱使用对乙酰氨基酚",
    "中药务必先咨询医师",
  ],
};

const ru: StemCellPageContent = {
  heroTitleKr: "Терапия стволовыми клетками",
  heroDesc:
    "Программа поддержки репаративных функций организма — энергия, кровообращение, антивозрастные цели; план составляется на консультации.",
  aboutH2: "Стволовые клетки",
  aboutParas: [
    "Клетки с высоким потенциалом участия в регенерации тканей.",
    "Часто используются **аутологичные взрослые СК**. Забор из периферической крови проще и подходит для мягких/wellness-протоколов.",
    "Костный мозг даёт больший пул СК и факторов роста при соответствующих показаниях.",
  ],
  equipmentH2: "Miracell · MCT (MetaCell)",
  equipmentParas: [
    "Miracell — система концентрирования клеток из крови/костного мозга по протоколам, связанным с исследованиями Гарварда.",
    "По сравнению с классическим PRP снижает раннюю активацию тромбоцитов и повышает концентрационный выход.",
    "Имеет регистрационный контекст FDA/KFDA в зависимости от региона.",
    "Большее обогащение факторами роста может сократить курс у части пациентов.",
    "В Hommage добавляется протокол **MCT** для однородности среды введения.",
    "Отмечают более ровные **ранние ощущения восстановления** и **ощущение устойчивости** при той же дозе клеток.",
  ],
  keyPointTitle: "Key point",
  keyPointParas: [
    "Только Miracell с разрешениями FDA/KFDA, без культивирования — ниже риск инфекции, выше выход СК, факторов роста и лейкоцитов.",
    "Пять типов клеток для регенерации концентрируются за один проход.",
    "MCT настраивает среду активации под иммунные, сосудистые и антивозрастные задачи.",
  ],
  customizedH2: "Индивидуальная программа Hommage",
  customizedHighlight: "Возможно лечение в день визита при медицинских показаниях.",
  customizedParas: [
    "Концентрат без культуры вводится венозно для энергии, иммунного баланса и самочувствия.",
    "Клетки циркулируют и поддерживают микроциркуляцию в зонах, где нужна репарация.",
  ],
  forYouH2: "Кому может подойти?",
  recommend: [
    "Частые простуды, снижение иммунитета",
    "Усталость и слабость",
    "Метаболические/хронические состояния — только после оценки врача",
    "Холодные конечности, запрос на улучшение кровообращения",
    "Цели в период менопаузы/андропаузы",
    "Wellness и профилактика старения без острой патологии",
  ],
  aftercareH2: "Рекомендации после процедуры",
  aftercare: [
    "Избегать аспирин-содержащих препаратов без указания врача",
    "Согреться для хорошего кровотока",
    "Минимум 2 недели без алкоголя и курения",
    "2 недели без стероидов, НПВП и пластырей, тормозящих регенерацию",
    "1–2 дня «гриппоподобной» ломоты возможны",
    "Обезболивание — парацетамол по согласованию с врачом",
    "Травяные средства — только после консультации",
  ],
};

const byLocale: Record<Locale, StemCellPageContent> = { ko, en, ja, zh, ru };

export function getStemCellPageContent(locale: Locale): StemCellPageContent {
  return byLocale[locale] ?? ko;
}
