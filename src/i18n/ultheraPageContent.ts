import type { Locale } from "@/i18n/messages";

export type UltheraDepthRow = { title: string; sub: string; desc: string };
export type UltheraZone = {
  num: string;
  title: string;
  sub: string;
  desc: string;
  list: string[];
};
export type UltheraProcessStep = {
  step: string;
  title: string;
  sub: string;
  desc: string;
  highlight?: boolean;
};
export type UltheraFaq = { q: string; a: string };

type UltheraStrings = {
  dotNavAria: string;
  introBold1: string;
  introAfter1: string;
  introLine2: string;
  introBefore3: string;
  introBold3: string;
  introAfter3: string;
  consultCta: string;
  discoverTech: string;
  heroAlt: string;
  badgeAuth: string;
  badgeGold: string;
  techKicker: string;
  techTitle1: string;
  techTitleItalic: string;
  techLead: string;
  deepSeeTitle: string;
  deepSeeBody: string;
  deepSeeBullets: string[];
  scanCaption: string;
  tempTitle: string;
  tempLead: string;
  depthRows: UltheraDepthRow[];
  authLead: string;
  authAmpBody: string;
  authTipTitle: string;
  authTipBody: string;
  authCertTitle: string;
  authCertBody: string;
  authCertLink: string;
  areaKicker: string;
  areaTitle: string;
  areaLeadLine1: string;
  areaLeadLine2: string;
  mapTip1: string;
  mapTip2: string;
  mapTip3: string;
  zones: UltheraZone[];
  ritualKicker: string;
  ritualLead: string;
  processMapAlt: string;
  processSteps: UltheraProcessStep[];
  faqKicker: string;
  faqTitle: string;
  faqs: UltheraFaq[];
  bookKicker: string;
  bookLeadLine1: string;
  bookLeadLine2: string;
  hoursLine: string;
  formNamePh: string;
  formContactPh: string;
  formInquiryDefault: string;
  formOptUlthera: string;
  formOptCombo: string;
  formOptOther: string;
  formPrivacy: string;
  formLabelName: string;
  formLabelContact: string;
  formLabelInquiry: string;
  formSubmitCta: string;
  footerClinicStrong: string;
  footerDirectorLabel: string;
  footerBizRegLabel: string;
  footerMedicalFacilityLabel: string;
  footerMedicalFacilityNo: string;
  footerDisclaimer: string;
};

const dotNav = [
  { href: "#intro", label: "INTRO" },
  { href: "#technology", label: "TECH" },
  { href: "#authenticity", label: "GENUINE" },
  { href: "#process", label: "PROCESS" },
] as const;

const marquee = [
  "HOMMAGE ULTHERAPY",
  "Deep Visualization",
  "Precision Lifting",
  "Authentic Standard",
  "HOMMAGE ULTHERAPY",
  "Deep Visualization",
] as const;

const ko: UltheraStrings = {
  dotNavAria: "섹션 네비게이션",
  introBold1: "오마쥬 울쎄라",
  introAfter1: "는 단순한 리프팅이 아닙니다.",
  introLine2: "당신의 고유한 골격과 근막층 깊이를 시각화하여 설계하는,",
  introBefore3: "세상에 단 하나뿐인 ",
  introBold3: "초개인화 리프팅 의식(Ritual)",
  introAfter3: "입니다.",
  consultCta: "프라이빗 상담 예약",
  discoverTech: "DISCOVER TECHNOLOGY",
  heroAlt: "Hommage Ultherapy Mood",
  badgeAuth: "Authenticated",
  badgeGold: "Gold Standard",
  techKicker: "Core Technology",
  techTitle1: "See Deep,",
  techTitleItalic: "Lift High",
  techLead:
    "보이지 않는 곳을 보는 기술. 실시간 초음파 영상 기술(DeepSee™)로 피부 속 4.5mm SMAS층까지 직접 확인하며, 오차 없는 정밀함을 약속합니다.",
  deepSeeTitle: "DeepSee™ 초음파 시각화",
  deepSeeBody:
    "사람마다 피부 두께와 구조는 다릅니다. 오마쥬는 특허받은 실시간 초음파 기술로 피부 속 구조를 눈으로 직접 확인(See)하고, 필요한 부위에 정확히 에너지를 전달(Treat)합니다.",
  deepSeeBullets: ["혈관 및 신경 손상 방지", "타겟층(SMAS) 정확한 타격", "개인별 맞춤 에너지 조절"],
  scanCaption: "REAL-TIME ULTRASOUND VISUALIZATION",
  tempTitle: "최적의 온도 60-70°C",
  tempLead: "콜라겐 재생에 가장 효과적인 60~70°C의 열에너지를 피부 표면 손상 없이 전달합니다.",
  depthRows: [
    { title: "1.5mm Dermis", sub: "잔주름/모공", desc: "진피 상부를 자극하여 피부결과 미세 주름을 개선합니다." },
    { title: "3.0mm Subcutaneous", sub: "지방/탄력", desc: "진피 하부와 지방층을 타겟팅하여 콜라겐을 생성합니다." },
    { title: "4.5mm SMAS", sub: "강력 리프팅", desc: "노화의 원인인 근막층을 수축시켜 안면거상 효과를 냅니다." },
  ],
  authLead:
    "오마쥬는 멀츠(Merz)사가 인증한 정품 울쎄라 시술 병원입니다.\n불법 재생 팁 사용은 절대 용납하지 않으며, 시술 전 과정을 투명하게 공개합니다.",
  authAmpBody:
    "최신 소프트웨어 업그레이드가 완료된 정품 장비만을 사용합니다. 더욱 안정된 에너지 출력과 선명해진 영상 기술을 경험하세요.",
  authTipTitle: "정품 팁 현장 개봉",
  authTipBody:
    "시술 직전, 고객님 눈앞에서 미개봉 정품 팁을 확인시켜 드리고 개봉합니다. 사용된 팁은 시술 후 폐기 원칙을 준수합니다.",
  authCertTitle: "정품 인증서 발급",
  authCertBody: "시술 후 사용된 샷 수(Shot)와 팁의 일련번호가 기재된 멀츠 공식 정품 인증서를 발급해 드립니다.",
  authCertLink: "VIEW VERIFICATION PROCESS",
  areaKicker: "Personalized Design",
  areaTitle: "당신의 선을 재정의하다",
  areaLeadLine1: "획일화된 시술이 아닌, 부위별 피부 두께와 처짐 정도를 고려한",
  areaLeadLine2: "정교한 커스텀 디자인을 제안합니다.",
  mapTip1: "이마/미간",
  mapTip2: "팔자/심부볼",
  mapTip3: "이중턱/턱선",
  zones: [
    {
      num: "01",
      title: "Upper Face",
      sub: "Forehead & Eyes",
      desc: "피부가 얇고 예민한 눈가와 이마는 1.5mm 팁을 사용하여 섬세하게 시술합니다. 처진 눈꺼풀을 리프팅하여 시원한 눈매를 완성하고, 이마의 잔주름을 개선합니다.",
      list: ["눈썹 리프팅 효과", "눈가 잔주름 개선"],
    },
    {
      num: "02",
      title: "Mid Face",
      sub: "Cheeks & Nasolabial Folds",
      desc: "노안의 주범인 팔자주름과 심부볼 지방을 타겟팅합니다. 3.0mm와 4.5mm 팁을 교차 사용하여 깊은 곳에서부터 차오르는 볼륨감과 탄력을 선사합니다.",
      list: ["팔자주름 완화", "앞광대 볼륨 회복"],
    },
    {
      num: "03",
      title: "Lower Face",
      sub: "Jawline & Double Chin",
      desc: "무너진 턱선을 날렵하게 정리합니다. 불필요한 지방을 수축시키고 근막층을 당겨주어, 어느 각도에서 보아도 완벽한 V라인을 디자인합니다.",
      list: ["이중턱 지방 감소", "날렵한 턱선 윤곽"],
    },
    {
      num: "04",
      title: "Neck Line",
      sub: "Neck & Decollete",
      desc: "나이테처럼 깊어진 목주름을 개선합니다. 얼굴 리프팅과 함께 진행하여 경계 없는 우아함을 완성합니다.",
      list: [],
    },
  ],
  ritualKicker: "The Ritual",
  ritualLead:
    "오마쥬의 시술 과정은 단순한 의료 행위가 아닙니다. 가장 편안하고 안전한 결과를 위한 당신만의 의식입니다.",
  processMapAlt: "Ultherapy Process Step 1-8",
  processSteps: [
    {
      step: "01",
      title: "맞춤 상담",
      sub: "Consultation",
      desc: "3D 얼굴 분석기를 통해 골격, 지방 분포, 비대칭을 정밀 진단하고 개인별 맞춤 샷 수와 디자인을 설계합니다.",
    },
    {
      step: "02-03",
      title: "클렌징 & 사진촬영",
      sub: "Preparation",
      desc: "프라이빗 룸에서 편안하게 딥 클렌징을 진행한 후, 시술 전후 비교를 위한 정밀 사진 촬영을 진행합니다.",
    },
    {
      step: "04",
      title: "3단계 통증 케어",
      sub: "Anesthesia",
      desc: "오마쥬만의 트리플 마취 시스템으로 통증을 최소화합니다. 아프지 않은 울쎄라를 경험해보세요.",
      highlight: true,
    },
    {
      step: "05-06",
      title: "초음파 젤 도포 & 시술",
      sub: "Procedure",
      desc: "전용 초음파 젤을 도포 후, 실시간 모니터링을 통해 정해진 샷 수를 정확한 타겟층에 조사합니다.",
    },
    {
      step: "07",
      title: "진정 관리 & 마무리",
      sub: "After Care",
      desc: "자극받은 피부를 위해 LDM 물방울 리프팅 또는 크라이오 진정 관리로 붉은 기와 열감을 빠르게 진정시킵니다.",
    },
    {
      step: "08",
      title: "정품 인증서 발급",
      sub: "Certificate",
      desc: "시술이 끝난 후 사용된 샷 수와 팁의 일련번호가 적힌 정품 인증서를 발급해 드리며, 정품 확인 앱 사용법을 안내해 드립니다.",
    },
  ],
  faqKicker: "Q&A Advisory",
  faqTitle: "자주 묻는 질문",
  faqs: [
    {
      q: "Q. 시술 효과는 언제부터 나타나나요?",
      a: "시술 직후 즉각적인 타이트닝 효과를 느낄 수 있으나, 콜라겐 재생이 본격화되는 1개월 후부터 효과가 더욱 뚜렷해집니다. 개인의 피부 상태에 따라 다르지만, 평균적으로 1년에서 1년 6개월 정도 효과가 유지됩니다.",
    },
    {
      q: "Q. 통증이 심한가요?",
      a: '개인차가 있으나, 오마쥬 클리닉만의 3단계 마취 시스템(연고, 국소, 진통제)을 통해 통증을 최소화했습니다. 대부분의 고객님께서 "생각보다 참을 만했다"고 말씀하시니 크게 걱정하지 않으셔도 됩니다.',
    },
    {
      q: "Q. 일상생활은 바로 가능한가요?",
      a: "네, 울쎄라는 피부 표면(상피)에 손상을 주지 않는 비침습 시술입니다. 시술 직후 세안 및 메이크업이 가능하며, 약간의 붉은 기나 붓기는 수 시간 내 자연스럽게 사라집니다.",
    },
    {
      q: "Q. 써마지와 울쎄라의 차이점은 무엇인가요?",
      a: "울쎄라는 근막층(SMAS)을 수축시켜 처진 살을 끌어올리는(Lifting) 데 효과적이며, 써마지는 진피층의 콜라겐을 재생시켜 피부를 쫀쫀하게 조여주는(Tightening) 데 효과적입니다. 두 가지 고민이 복합적이라면 '울써마지' 병행 시술을 추천해 드립니다.",
    },
  ],
  bookKicker: "Private Booking",
  bookLeadLine1: "오마쥬의 모든 시술은 100% 예약제로 운영됩니다.",
  bookLeadLine2: "아래 양식을 남겨주시면, 전담 컨시어지가 가장 편안한 시간대에 연락드리겠습니다.",
  hoursLine: "Mon - Fri : 10:00 - 20:00",
  formNamePh: "성함을 입력해주세요",
  formContactPh: "연락처를 입력해주세요",
  formInquiryDefault: "관심 시술 선택 (Ultherapy)",
  formOptUlthera: "울쎄라 리프팅",
  formOptCombo: "울써마지 (울쎄라+써마지)",
  formOptOther: "기타 안티에이징 상담",
  formPrivacy:
    "* 보내주신 정보는 상담 예약 목적으로만 활용되며,\n개인정보보호법에 따라 안전하게 관리됩니다.",
  formLabelName: "성함",
  formLabelContact: "연락처",
  formLabelInquiry: "문의",
  formSubmitCta: "상담 요청",
  footerClinicStrong: "오마쥬 의원",
  footerDirectorLabel: "대표원장:",
  footerBizRegLabel: "사업자등록번호:",
  footerMedicalFacilityLabel: "의료기관개설신고증:",
  footerMedicalFacilityNo: "제 2023-서울강남-0000호",
  footerDisclaimer: "※ 시술 후 개인에 따라 멍, 붓기, 통증 등이 발생할 수 있습니다.",
};

const en: UltheraStrings = {
  dotNavAria: "Section navigation",
  introBold1: "Hommage Ultherapy",
  introAfter1: " is more than a standard lift.",
  introLine2: "We visualise your unique bone structure and SMAS depth to design",
  introBefore3: "a one-of-one ",
  introBold3: "personalised lifting ritual",
  introAfter3: ".",
  consultCta: "Private consult",
  discoverTech: "DISCOVER TECHNOLOGY",
  heroAlt: "Hommage Ultherapy mood",
  badgeAuth: "Authenticated",
  badgeGold: "Gold Standard",
  techKicker: "Core Technology",
  techTitle1: "See Deep,",
  techTitleItalic: "Lift High",
  techLead:
    "See what others cannot. DeepSee™ real-time ultrasound lets us verify the ~4.5 mm SMAS plane and deliver energy with controlled precision.",
  deepSeeTitle: "DeepSee™ ultrasound mapping",
  deepSeeBody:
    "Skin thickness varies by person. Patented live imaging helps us see before we treat—placing energy where it belongs.",
  deepSeeBullets: ["Reduce guesswork near vessels/nerves", "Accurate SMAS targeting", "Personalised energy mapping"],
  scanCaption: "REAL-TIME ULTRASOUND VISUALIZATION",
  tempTitle: "Target coagulation ~60–70°C",
  tempLead: "Collagen remodelling favours this thermal window—delivered without ablating the surface.",
  depthRows: [
    { title: "1.5mm Dermis", sub: "Texture / fine lines", desc: "Upper dermal pass for polish and micro-lines." },
    { title: "3.0mm Subcutaneous", sub: "Fat / firmness", desc: "Deeper dermal–subcutaneous tightening and collagen response." },
    { title: "4.5mm SMAS", sub: "Structural lift", desc: "SMAS-focused contraction for surgical-grade vector when planned." },
  ],
  authLead:
    "Hommage is a Merz-authenticated Ultherapy provider.\nWe do not tolerate counterfeit tips—and we keep the journey transparent.",
  authAmpBody:
    "Only upgraded genuine systems with stable output and sharper imaging—experience the difference of authentic hardware.",
  authTipTitle: "Sealed tips opened with you",
  authTipBody: "We confirm unused genuine cartridges before treatment and dispose of them after use per protocol.",
  authCertTitle: "Official authenticity certificate",
  authCertBody: "Receive Merz documentation listing shots delivered and cartridge serials.",
  authCertLink: "VIEW VERIFICATION PROCESS",
  areaKicker: "Personalized Design",
  areaTitle: "Redefine your line",
  areaLeadLine1: "Not one-template lifting—we map thickness, laxity and vector",
  areaLeadLine2: "for a bespoke design.",
  mapTip1: "Forehead / glabella",
  mapTip2: "Smile lines / mid-cheek",
  mapTip3: "Double chin / jawline",
  zones: [
    {
      num: "01",
      title: "Upper Face",
      sub: "Forehead & Eyes",
      desc: "Thin, sensitive periorbital skin often uses a 1.5 mm depth for finesse—brow vector and fine creases.",
      list: ["Brow lift vector", "Fine periorbital lines"],
    },
    {
      num: "02",
      title: "Mid Face",
      sub: "Cheeks & Nasolabial Folds",
      desc: "Targets heavy smile lines and medial cheek bulk with crossed 3.0 / 4.5 mm planning for deep support.",
      list: ["Softer nasolabial focus", "Anterior cheek support"],
    },
    {
      num: "03",
      title: "Lower Face",
      sub: "Jawline & Double Chin",
      desc: "Sharpens jaw silhouette—contracts tissue and SMAS vectors toward a clean V-line from multiple angles.",
      list: ["Submental tightening", "Defined jaw contour"],
    },
    {
      num: "04",
      title: "Neck Line",
      sub: "Neck & Decollete",
      desc: "Improves necklace lines; often paired with face vectors for seamless elegance.",
      list: [],
    },
  ],
  ritualKicker: "The Ritual",
  ritualLead:
    "Our flow is not a rushed procedure—it is your calm, safety-first pathway to an elevated outcome.",
  processMapAlt: "Ultherapy process steps 1–8",
  processSteps: [
    {
      step: "01",
      title: "Custom consult",
      sub: "Consultation",
      desc: "3D facial analysis maps bone, fat and asymmetry—shots and vectors are personalised.",
    },
    {
      step: "02-03",
      title: "Cleanse & photography",
      sub: "Preparation",
      desc: "Private suite deep cleanse plus standardized before/after capture.",
    },
    {
      step: "04",
      title: "Triple comfort care",
      sub: "Anesthesia",
      desc: "Hommage layering for comfort—many patients say it was easier than expected.",
      highlight: true,
    },
    {
      step: "05-06",
      title: "Gel & treatment",
      sub: "Procedure",
      desc: "Ultrasound gel, live monitoring, shots delivered to planned depths.",
    },
    {
      step: "07",
      title: "Calming finish",
      sub: "After Care",
      desc: "LDM droplet lifting or cryo-calming to settle warmth or redness quickly.",
    },
    {
      step: "08",
      title: "Certificate",
      sub: "Certificate",
      desc: "Authenticity paperwork plus app guidance for verification.",
    },
  ],
  faqKicker: "Q&A Advisory",
  faqTitle: "FAQ",
  faqs: [
    {
      q: "Q. When will I see results?",
      a: "Some immediate tightening is common; collagen remodelling often peaks from ~1 month, with many enjoying ~12–18 months of benefit—individual variation applies.",
    },
    {
      q: "Q. How painful is it?",
      a: "Comfort varies; our triple-modality pathway (topical, local adjuncts, analgesia when needed) keeps most visits manageable.",
    },
    {
      q: "Q. Can I return to routine immediately?",
      a: "Yes—non-ablative ultrasound means makeup and cleansing are usually fine the same day; mild pinkness or swell often fades within hours.",
    },
    {
      q: "Q. Ultherapy vs Thermage?",
      a: "Ultherapy classically targets SMAS lift vectors; Thermage emphasises dermal tightening. Combined “Ulthermage” may suit layered concerns—discuss in consult.",
    },
  ],
  bookKicker: "Private Booking",
  bookLeadLine1: "Hommage operates by appointment to protect your time and privacy.",
  bookLeadLine2: "Leave your details—our concierge will reach out at a comfortable window.",
  hoursLine: "Mon - Fri : 10:00 - 20:00",
  formNamePh: "Full name",
  formContactPh: "Phone or messaging ID",
  formInquiryDefault: "Interest (Ultherapy)",
  formOptUlthera: "Ultherapy lifting",
  formOptCombo: "Ulthermage (Ultherapy + Thermage)",
  formOptOther: "Other anti-aging consult",
  formPrivacy:
    "* Details are used only to arrange consults and handled per applicable privacy law.",
  formLabelName: "Name",
  formLabelContact: "Contact",
  formLabelInquiry: "Inquiry",
  formSubmitCta: "REQUEST CONSULTATION",
  footerClinicStrong: "Hommage Clinic",
  footerDirectorLabel: "Medical director:",
  footerBizRegLabel: "Business registration no.:",
  footerMedicalFacilityLabel: "Medical facility registration:",
  footerMedicalFacilityNo: "제 2023-서울강남-0000호",
  footerDisclaimer: "※ Temporary swelling, bruising or tenderness may occur depending on the individual.",
};

export type UltheraPageContent = UltheraStrings & {
  dotNav: readonly { href: string; label: string }[];
  marquee: readonly string[];
};

const ja: UltheraStrings = {
  ...en,
  dotNavAria: "セクションナビ",
  formNamePh: "お名前",
  formContactPh: "連絡先",
  faqTitle: "よくある質問",
  formLabelName: "お名前",
  formLabelContact: "連絡先",
  formLabelInquiry: "ご相談内容",
  formSubmitCta: "カウンセリングを申し込む",
  footerDirectorLabel: "院長:",
  footerBizRegLabel: "事業者登録番号:",
  footerMedicalFacilityLabel: "医療機関開設届:",
  footerMedicalFacilityNo: "제 2023-서울강남-0000호",
  footerClinicStrong: "オマージュクリニック",
};

const zh: UltheraStrings = {
  ...en,
  dotNavAria: "页面导航",
  formNamePh: "姓名",
  formContactPh: "联系方式",
  faqTitle: "常见问题",
  formLabelName: "姓名",
  formLabelContact: "联系方式",
  formLabelInquiry: "咨询内容",
  formSubmitCta: "预约咨询",
  footerDirectorLabel: "代表院长:",
  footerBizRegLabel: "营业执照注册号:",
  footerMedicalFacilityLabel: "医疗机构开设申报:",
  footerMedicalFacilityNo: "제 2023-서울강남-0000호",
  footerClinicStrong: "Hommage 诊所",
};

const ru: UltheraStrings = {
  ...en,
  dotNavAria: "Навигация по разделам",
  formNamePh: "Имя",
  formContactPh: "Контакт",
  faqTitle: "Вопросы",
  formLabelName: "Имя",
  formLabelContact: "Контакт",
  formLabelInquiry: "Запрос",
  formSubmitCta: "ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ",
  footerDirectorLabel: "Главный врач:",
  footerBizRegLabel: "Рег. номер:",
  footerMedicalFacilityLabel: "Регистрация медучреждения:",
  footerMedicalFacilityNo: "제 2023-서울강남-0000호",
  footerClinicStrong: "Клиника Hommage",
};

const byLocale: Record<Locale, UltheraStrings> = { ko, en, ja, zh, ru };

export function getUltheraPageContent(locale: Locale): UltheraPageContent {
  const s = byLocale[locale] ?? ko;
  return { ...s, dotNav, marquee };
}
