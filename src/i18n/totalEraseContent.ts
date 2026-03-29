import type { Locale } from "@/i18n/messages";

export type TotalEraseZone = {
  id: string;
  label: string;
  sub: string;
  desc: string;
  wrinkle: "horizontal" | "vertical" | "curve" | "marionette" | "neck";
};

export type TotalEraseSolution = { title: string; sub: string; desc: string };

export type TotalEraseContent = {
  heroAriaLabel: string;
  titleKr: string;
  taglineL1: string;
  taglineL2Start: string;
  taglineHighlight: string;
  taglineL2End: string;
  heroBodyLine1: string;
  heroBodyLine2: string;
  introBody: string;
  solutionKicker: string;
  solutionHeadingBefore: string;
  solutionHeadingAccent: string;
  solutionHeadingAfter: string;
  solutions: TotalEraseSolution[];
  interactiveKicker: string;
  interactiveTitle: string;
  interactiveLead: string;
  interactiveHintDrag: string;
  interactiveHintErasing: string;
  interactiveHintDone: string;
  zonesKicker: string;
  zonesTitleBefore: string;
  zonesTitleAccent: string;
  zonesTitleAfter: string;
  zonesLead: string;
  zones: TotalEraseZone[];
};

const ko: TotalEraseContent = {
  heroAriaLabel: "토탈 이레이즈",
  titleKr: "토탈 이레이즈",
  taglineL1: "아름다움은 만들어내는 것이 아니라,",
  taglineL2Start: "당신 안에 숨겨진 ",
  taglineHighlight: "빛",
  taglineL2End: "을 발견하는 것입니다.",
  heroBodyLine1: "미간, 이마, 팔자, 마리오넷, 목주름 —",
  heroBodyLine2: "오마쥬 클리닉만의 노하우로 노화의 상징인 주름을 탁월하게 개선합니다.",
  introBody:
    "쥬브젠 자가진피 재생술, 실리프팅, 필러, 콜라겐 주사, 레이저, 줄기세포주사, 보톡스 등을 이용한 오마쥬 클리닉만의 노하우로 노화의 상징인 주름을 탁월하게 개선합니다.",
  solutionKicker: "HOMMAGE Solution",
  solutionHeadingBefore: "오마쥬 클리닉 ",
  solutionHeadingAccent: "토탈 이레이즈",
  solutionHeadingAfter: " 솔루션",
  solutions: [
    {
      title: "쥬브젠 자가진피 재생술",
      sub: "JUVGEN",
      desc: "물리적·화학적·생물학적 자극이 동시에 같은 장소에 미세한 크기로 많이 일어나게 하여 다량의 콜라겐 조직이 생기도록 유도하여 피부를 재생합니다. 오마쥬 클리닉에서는 균일한 시술로 자연스러운 결과를 추구합니다.",
    },
    {
      title: "실리프팅",
      sub: "THREAD LIFTING",
      desc: "잼버실, 테스넷, 실루엣 소프트, 민트실 리프팅을 사용하여 콜라겐 생성을 촉진시켜 피부 주름과 얼굴 윤곽을 동시에 개선합니다. 녹는실을 사용하여 이물감이 적으며 일상 복귀가 빠릅니다.",
    },
    {
      title: "필러",
      sub: "FILLER",
      desc: "필러 시술은 의료진의 미적 감각과 섬세함이 가장 많이 반영되는 시술입니다. 오마쥬 클리닉에서는 개인 맞춤 디자인으로 고유의 이미지와 조화롭게 볼륨을 채우고, 표정을 고려하여 자연스럽게 시술합니다.",
    },
    {
      title: "콜라겐 주사",
      sub: "INJECTION OF COLLAGEN",
      desc: "쥬베룩볼륨, 울트라콜100, 콜라움, 레디어스를 사용하여 섬유아세포를 자극하고 콜라겐 생성을 촉진합니다. 주름 완화와 탄력 증가를 목표로 합니다.",
    },
    {
      title: "레이저",
      sub: "LASER",
      desc: "울쎄라피 프라임, 온다, 튠페이스, 코레지셀핏 등을 사용하여 잔주름과 탄력을 개선합니다. 비침습적 방식으로 통증을 최소화한 리프팅 시술입니다.",
    },
    {
      title: "줄기세포주사",
      sub: "STEM CELL INJECTION",
      desc: "자가 줄기세포를 이용하여 피부 세포를 활성화하고, 콜라겐 합성 및 손상된 조직을 복구하여 주름을 개선하며 피부 두께와 탄력을 강화합니다.",
    },
    {
      title: "보톡스",
      sub: "BOTOX",
      desc: "보툴리늄 톡신이 주성분인 의약품으로 시술 부위 근육의 수축을 억제합니다. 잔주름 예방과 근육 볼륨 조절 효과를 기대할 수 있으며, 지속적인 효과를 원하시면 3~4개월 이내 재시술을 권장합니다.",
    },
  ],
  interactiveKicker: "INTERACTIVE",
  interactiveTitle: "주름을 펴 보세요",
  interactiveLead: "바를 드래그하면 주름이 사라지는 토탈 이레이즈의 개념을 체험해 보세요.",
  interactiveHintDrag: "← 바를 드래그해 보세요",
  interactiveHintErasing: "주름이 사라지고 있어요",
  interactiveHintDone: "토탈 이레이즈 완료",
  zonesKicker: "TOTAL ERASE ZONES",
  zonesTitleBefore: "토탈 이레이즈 ",
  zonesTitleAccent: "대상 부위",
  zonesTitleAfter: "",
  zonesLead: "부위를 클릭하면 주름의 특징과 형태를 확인할 수 있습니다.",
  zones: [
    {
      id: "forehead",
      label: "이마",
      sub: "Forehead",
      desc: "표정 시 생기는 가로 주름. 반복적인 이마 찡그림으로 깊어집니다.",
      wrinkle: "horizontal",
    },
    {
      id: "glabella",
      label: "미간",
      sub: "Glabella",
      desc: "눈썹 사이 세로 주름. 집중·스트레스 시 찡그리며 생깁니다.",
      wrinkle: "vertical",
    },
    {
      id: "nasolabial",
      label: "팔자",
      sub: "Nasolabial",
      desc: "코와 입술 바깥을 잇는 굴곡. 웃을 때 두드러지는 주름.",
      wrinkle: "curve",
    },
    {
      id: "marionette",
      label: "마리오넷",
      sub: "Marionette",
      desc: "입가에서 턱으로 내려가는 라인. 얼굴 처짐과 함께 깊어집니다.",
      wrinkle: "marionette",
    },
    {
      id: "neck",
      label: "목주름",
      sub: "Neck",
      desc: "목의 가로 띠 형태 주름. 턱을 자주 당기거나 노화로 나타납니다.",
      wrinkle: "neck",
    },
  ],
};

const en: TotalEraseContent = {
  heroAriaLabel: "Total Erase",
  titleKr: "Total Erase",
  taglineL1: "Beauty is not something you create —",
  taglineL2Start: "it is discovering the ",
  taglineHighlight: "light",
  taglineL2End: " hidden within you.",
  heroBodyLine1: "Glabella, forehead, nasolabial folds, marionette lines, neck —",
  heroBodyLine2:
    "Hommage Clinic’s integrated approach visibly improves the wrinkles that most often signal ageing.",
  introBody:
    "Juvegen autologous dermal regeneration, thread lifting, fillers, collagen boosters, lasers, stem-cell protocols and botulinum toxin — combined with Hommage’s clinical experience for comprehensive wrinkle care.",
  solutionKicker: "HOMMAGE Solution",
  solutionHeadingBefore: "Hommage Clinic ",
  solutionHeadingAccent: "Total Erase",
  solutionHeadingAfter: " solutions",
  solutions: [
    {
      title: "Juvegen (autologous dermal regeneration)",
      sub: "JUVGEN",
      desc: "Controlled physical, chemical and biological micro-stimulation encourages abundant new collagen in the treated area for skin renewal. We prioritise even delivery and a natural-looking outcome.",
    },
    {
      title: "Thread lifting",
      sub: "THREAD LIFTING",
      desc: "PDO and lifting threads (e.g. Mint, Silhouette Soft) support collagen remodelling while refining lines and contour. Absorbable threads mean less foreign-body sensation and quicker return to routine.",
    },
    {
      title: "Dermal fillers",
      sub: "FILLER",
      desc: "Fillers depend heavily on medical eye for proportion and balance. We design volume respectfully to your features and expressions for results that move naturally with you.",
    },
    {
      title: "Collagen-stimulating injections",
      sub: "INJECTION OF COLLAGEN",
      desc: "Protocols such as Juvelook Volume, UltraCol, Collaum and Radiesse engage fibroblasts to support collagen for softer lines and improved firmness.",
    },
    {
      title: "Laser & energy devices",
      sub: "LASER",
      desc: "Ultherapy Prime, Onda, Tune Face, Corège Cell-Fit and related options target fine lines and laxity with minimally invasive comfort-led protocols.",
    },
    {
      title: "Stem-cell injection therapy",
      sub: "STEM CELL INJECTION",
      desc: "Autologous stem-cell approaches aim to activate repair pathways, support collagen synthesis and improve thickness and resilience alongside wrinkle softening.",
    },
    {
      title: "Botulinum toxin",
      sub: "BOTOX",
      desc: "Botulinum toxin relaxes overactive muscles to soften dynamic lines and refine volume balance. Maintenance is typically discussed around every 3–4 months depending on goals.",
    },
  ],
  interactiveKicker: "INTERACTIVE",
  interactiveTitle: "Smooth the line",
  interactiveLead: "Drag the handle to experience how Total Erase softens visible wrinkles.",
  interactiveHintDrag: "← Drag the handle",
  interactiveHintErasing: "The line is softening…",
  interactiveHintDone: "Total Erase — complete",
  zonesKicker: "TOTAL ERASE ZONES",
  zonesTitleBefore: "Total Erase ",
  zonesTitleAccent: "target areas",
  zonesTitleAfter: "",
  zonesLead: "Tap a zone to see how each wrinkle type behaves.",
  zones: [
    {
      id: "forehead",
      label: "Forehead",
      sub: "Forehead",
      desc: "Horizontal lines from expression; often deepen with repeated brow movement.",
      wrinkle: "horizontal",
    },
    {
      id: "glabella",
      label: "Glabella",
      sub: "Glabella",
      desc: "Vertical lines between the brows, common with concentration or frowning.",
      wrinkle: "vertical",
    },
    {
      id: "nasolabial",
      label: "Nasolabial fold",
      sub: "Nasolabial",
      desc: "The groove from nose to mouth corner; more visible when smiling.",
      wrinkle: "curve",
    },
    {
      id: "marionette",
      label: "Marionette line",
      sub: "Marionette",
      desc: "Lines from mouth corners toward the jaw, often accentuated by laxity.",
      wrinkle: "marionette",
    },
    {
      id: "neck",
      label: "Neck lines",
      sub: "Neck",
      desc: "Horizontal bands on the neck from posture, tech-neck habits or ageing.",
      wrinkle: "neck",
    },
  ],
};

const ja: TotalEraseContent = {
  heroAriaLabel: "トータルイレイズ",
  titleKr: "トータルイレイズ",
  taglineL1: "美しさは「作る」ものではなく、",
  taglineL2Start: "あなたの内に秘めた",
  taglineHighlight: "光",
  taglineL2End: "を見つけることです。",
  heroBodyLine1: "眉間・額・ほうれい線・マリオネット・首のしわ —",
  heroBodyLine2:
    "オマージュクリニックのノウハウで、エイジングサインとして目立ちやすいしわを総合的に改善します。",
  introBody:
    "ジュベジェン（自家真皮再生）、糸リフト、フィラー、コラーゲン注射、レーザー、幹細胞注射、ボトックスなどを組み合わせ、オマージュクリニックならではのアプローチでしわ改善を図ります。",
  solutionKicker: "HOMMAGE Solution",
  solutionHeadingBefore: "オマージュクリニック ",
  solutionHeadingAccent: "トータルイレイズ",
  solutionHeadingAfter: " ソリューション",
  solutions: [
    {
      title: "ジュベジェン（自家真皮再生）",
      sub: "JUVGEN",
      desc: "物理・化学・生物学的な微細刺激を同じ部位に与え、コラーゲン組織の再生を促して肌をリニューアル。均一な施術で自然な仕上がりを目指します。",
    },
    {
      title: "糸リフト",
      sub: "THREAD LIFTING",
      desc: "溶ける糸を用い、コラーゲン生成を促しながらしわと輪郭を同時にケア。異物感が少なく、日常生活への復帰も速めです。",
    },
    {
      title: "フィラー",
      sub: "FILLER",
      desc: "医師の審美感と繊細さが色濃く反映される施術。個人のイメージに調和するボリューム設計と、表情を損なわない自然な仕上がりを大切にします。",
    },
    {
      title: "コラーゲン注射",
      sub: "INJECTION OF COLLAGEN",
      desc: "ジュベルックボリューム、ウルトラコル、コラーム、レディエスなどで線維芽細胞を刺激し、コラーゲン生成を後押し。しわ緩和とハリ改善を目指します。",
    },
    {
      title: "レーザー",
      sub: "LASER",
      desc: "ウルセラプライム、オンダ、チューンフェイス、コレジセルフィットなどで細かいしわとたるみをケア。低侵襲で痛み負担を抑えたリフティングをご提案します。",
    },
    {
      title: "幹細胞注射",
      sub: "STEM CELL INJECTION",
      desc: "自家幹細胞で細胞活性を高め、コラーゲン合成や損傷組織の修復をサポート。しわ改善に加え、肌の厚みと弾力の強化を目指します。",
    },
    {
      title: "ボトックス",
      sub: "BOTOX",
      desc: "ボツリヌス毒素製剤で筋肉の過剰収縮を抑え、表情じわの予防やボリュームバランスの調整に。持続的な効果をご希望の場合は3〜4か月以内の追加を目安にご相談ください。",
    },
  ],
  interactiveKicker: "INTERACTIVE",
  interactiveTitle: "しわを伸ばしてみる",
  interactiveLead: "バーをドラッグすると、ラインが和らぐトータルイレイズのイメージを体験できます。",
  interactiveHintDrag: "← バーをドラッグしてください",
  interactiveHintErasing: "しわが和らいでいます",
  interactiveHintDone: "トータルイレイズ 完了",
  zonesKicker: "TOTAL ERASE ZONES",
  zonesTitleBefore: "トータルイレイズ ",
  zonesTitleAccent: "対象部位",
  zonesTitleAfter: "",
  zonesLead: "部位をタップすると、しわの特徴とラインの形を確認できます。",
  zones: [
    {
      id: "forehead",
      label: "額",
      sub: "Forehead",
      desc: "表情でできる横じわ。眉間を寄せる癖で深くなりやすいです。",
      wrinkle: "horizontal",
    },
    {
      id: "glabella",
      label: "眉間",
      sub: "Glabella",
      desc: "眉間の縦じわ。集中やストレスで眉を寄せるとできやすいです。",
      wrinkle: "vertical",
    },
    {
      id: "nasolabial",
      label: "ほうれい線",
      sub: "Nasolabial",
      desc: "鼻と口元をつなぐ溝。笑うとより目立ちます。",
      wrinkle: "curve",
    },
    {
      id: "marionette",
      label: "マリオネットライン",
      sub: "Marionette",
      desc: "口角から顎に向かうライン。たるみとともに深くなりがちです。",
      wrinkle: "marionette",
    },
    {
      id: "neck",
      label: "首のしわ",
      sub: "Neck",
      desc: "首周りの横じわ。姿勢や加齢で現れやすくなります。",
      wrinkle: "neck",
    },
  ],
};

const zh: TotalEraseContent = {
  heroAriaLabel: "全层净肤 Total Erase",
  titleKr: "全层净肤",
  taglineL1: "美，不是靠「造」出来的，",
  taglineL2Start: "而是去发现你内心深处的",
  taglineHighlight: "光",
  taglineL2End: "。",
  heroBodyLine1: "眉间、额头、法令纹、木偶纹、颈纹 —",
  heroBodyLine2: "凭借 Hommage 诊所的综合经验，显著改善最具年龄感的皱纹表现。",
  introBody:
    "Juvegen 自体真皮再生、线雕、填充、胶原类注射、激光、干细胞注射与肉毒素等联合方案，由 Hommage 诊所统筹设计，系统改善皱纹问题。",
  solutionKicker: "HOMMAGE Solution",
  solutionHeadingBefore: "Hommage 诊所 ",
  solutionHeadingAccent: "全层净肤",
  solutionHeadingAfter: " 方案组合",
  solutions: [
    {
      title: "Juvegen 自体真皮再生",
      sub: "JUVGEN",
      desc: "在同一部位叠加温和而精准的物理、化学与生物微刺激，促进胶原新生与肤质更新；我们强调均匀施打与自然过渡。",
    },
    {
      title: "线雕提升",
      sub: "THREAD LIFTING",
      desc: "可吸收线材刺激胶原重塑，同时改善纹路轮廓；异物感相对较低，恢复日常较快。",
    },
    {
      title: "玻尿酸 / 填充",
      sub: "FILLER",
      desc: "填充高度依赖医生的比例感与细节处理；我们根据个人气质与表情动线，追求协调而自然的容积补充。",
    },
    {
      title: "胶原刺激类注射",
      sub: "INJECTION OF COLLAGEN",
      desc: "结合 Juvelook Volume、UltraCol、Collaum、Radiesse 等，激活成纤维细胞，淡化皱纹并提升紧致感。",
    },
    {
      title: "激光与能量设备",
      sub: "LASER",
      desc: "Ultherapy Prime、Onda、Tune Face、Corège Cell-Fit 等，针对细纹与松弛，以低创伤、舒适为导向制定疗程。",
    },
    {
      title: "干细胞注射",
      sub: "STEM CELL INJECTION",
      desc: "自体干细胞相关方案有助于激活修复、促进胶原合成，在改善皱纹的同时增厚真皮、提升弹性。",
    },
    {
      title: "肉毒素",
      sub: "BOTOX",
      desc: "放松过度收缩的表情肌，预防动态纹并微调轮廓比例；维持效果通常约 3–4 个月复诊评估。",
    },
  ],
  interactiveKicker: "INTERACTIVE",
  interactiveTitle: "试着「抚平」皱纹",
  interactiveLead: "拖动滑块，体验全层净肤如何柔化可见纹路。",
  interactiveHintDrag: "← 拖动滑块试试",
  interactiveHintErasing: "纹路正在柔化…",
  interactiveHintDone: "全层净肤 — 完成",
  zonesKicker: "TOTAL ERASE ZONES",
  zonesTitleBefore: "全层净肤 ",
  zonesTitleAccent: "目标部位",
  zonesTitleAfter: "",
  zonesLead: "点击部位，查看该处皱纹特点与线条形态。",
  zones: [
    {
      id: "forehead",
      label: "额头",
      sub: "Forehead",
      desc: "表情时出现的横纹，常因反复抬眉而加深。",
      wrinkle: "horizontal",
    },
    {
      id: "glabella",
      label: "眉间",
      sub: "Glabella",
      desc: "两眉之间的纵纹，多与专注或皱眉相关。",
      wrinkle: "vertical",
    },
    {
      id: "nasolabial",
      label: "法令纹",
      sub: "Nasolabial",
      desc: "鼻翼至嘴角的沟壑，微笑时更明显。",
      wrinkle: "curve",
    },
    {
      id: "marionette",
      label: "木偶纹",
      sub: "Marionette",
      desc: "自嘴角向下颌延伸的线条，常与松弛一并加重。",
      wrinkle: "marionette",
    },
    {
      id: "neck",
      label: "颈纹",
      sub: "Neck",
      desc: "颈部横向带状纹路，与姿势、低头习惯或衰老相关。",
      wrinkle: "neck",
    },
  ],
};

const ru: TotalEraseContent = {
  heroAriaLabel: "Total Erase",
  titleKr: "Total Erase",
  taglineL1: "Красота — не то, что «создают».",
  taglineL2Start: "Это обнаружить ",
  taglineHighlight: "свет",
  taglineL2End: ", скрытый внутри вас.",
  heroBodyLine1: "Межбровье, лоб, носогубки, «марионетки», шея —",
  heroBodyLine2:
    "Комплексный подход клиники Hommage заметно смягчает морщины, которые чаще всего считываются как признаки старения.",
  introBody:
    "Juvegen (аутологичная регенерация дермы), нитевой лифтинг, филлеры, коллагенстимулирующие инъекции, лазеры и аппараты, протоколы со стволовыми клетками и ботулотоксин — в сочетании с опытом Hommage для системной коррекции морщин.",
  solutionKicker: "HOMMAGE Solution",
  solutionHeadingBefore: "Клиника Hommage — программа ",
  solutionHeadingAccent: "Total Erase",
  solutionHeadingAfter: "",
  solutions: [
    {
      title: "Juvegen (аутологичная регенерация дермы)",
      sub: "JUVGEN",
      desc: "Точечная микростимуляция физическими, химическими и биологическими сигналами стимулирует обновление коллагена. Делаем акцент на равномерности и естественном результате.",
    },
    {
      title: "Нитевой лифтинг",
      sub: "THREAD LIFTING",
      desc: "Резорбируемые нити поддерживают ремоделирование коллагена и контур. Меньше ощущения инородного тела и быстрее возврат к привычному ритму.",
    },
    {
      title: "Филлеры",
      sub: "FILLER",
      desc: "Объём и пропорции зависят от вкуса и точности врача. Подбираем наполнение под ваши черты и мимику, чтобы лицо оставалось «живым».",
    },
    {
      title: "Коллагенстимулирующие инъекции",
      sub: "INJECTION OF COLLAGEN",
      desc: "Препараты вроде Juvelook Volume, UltraCol, Collaum, Radiesse активируют фибробласты для мягких линий и упругости.",
    },
    {
      title: "Лазер и аппаратные методы",
      sub: "LASER",
      desc: "Ultherapy Prime, Onda, Tune Face, Corège Cell-Fit и др. — для мелких морщин и тонуса с акцентом на комфорт и малую инвазивность.",
    },
    {
      title: "Инъекции со стволовыми клетками",
      sub: "STEM CELL INJECTION",
      desc: "Аутологичные протоколы направлены на активацию репарации, синтез коллагена и утолщение дермы на фоне смягчения морщин.",
    },
    {
      title: "Ботулотоксин",
      sub: "BOTOX",
      desc: "Расслабляет гиперактивные мышцы, смягчает динамические заломы и балансирует объёмы. Поддерживающие визиты обычно обсуждают каждые 3–4 месяца.",
    },
  ],
  interactiveKicker: "INTERACTIVE",
  interactiveTitle: "Разгладьте линию",
  interactiveLead: "Потяните ползунок — так наглядно показано, как Total Erase смягчает видимые морщины.",
  interactiveHintDrag: "← Потяните ползунок",
  interactiveHintErasing: "Линия смягчается…",
  interactiveHintDone: "Total Erase — готово",
  zonesKicker: "TOTAL ERASE ZONES",
  zonesTitleBefore: "Total Erase — ",
  zonesTitleAccent: "зоны",
  zonesTitleAfter: "",
  zonesLead: "Нажмите зону, чтобы увидеть тип морщины и характер линии.",
  zones: [
    {
      id: "forehead",
      label: "Лоб",
      sub: "Forehead",
      desc: "Горизонтальные заломы от мимики; углубляются при частом движении бровями.",
      wrinkle: "horizontal",
    },
    {
      id: "glabella",
      label: "Межбровье",
      sub: "Glabella",
      desc: "Вертикальные складки между бровями при концентрации или хмурении.",
      wrinkle: "vertical",
    },
    {
      id: "nasolabial",
      label: "Носогубная складка",
      sub: "Nasolabial",
      desc: "Борозда от крыла носа к уголку рта; заметнее при улыбке.",
      wrinkle: "curve",
    },
    {
      id: "marionette",
      label: "«Марионетка»",
      sub: "Marionette",
      desc: "Линии от уголков рта к подбородку, часто усиливаются с птозом.",
      wrinkle: "marionette",
    },
    {
      id: "neck",
      label: "Кольца на шее",
      sub: "Neck",
      desc: "Горизонтальные полосы на шее из-за осанки, «техно-шеи» или возрастных изменений.",
      wrinkle: "neck",
    },
  ],
};

const byLocale: Record<Locale, TotalEraseContent> = {
  ko,
  en,
  ja,
  zh,
  ru,
};

export function getTotalEraseContent(locale: Locale): TotalEraseContent {
  return byLocale[locale] ?? ko;
}
