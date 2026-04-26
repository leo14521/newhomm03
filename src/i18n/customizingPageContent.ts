import type { Locale } from "@/i18n/messages";
import {
  customizingCategoriesJa,
  customizingCategoriesRu,
  customizingCategoriesZh,
} from "@/i18n/customizingCategoriesJaZhRu";
import type { CustomizingCategory } from "@/i18n/customizingTypes";

export type { CustomizingCategory, CustomizingTreatment } from "@/i18n/customizingTypes";

export type CustomizingPageContent = {
  introSlides: { text: string }[];
  categories: CustomizingCategory[];
  bgAlt1: string;
  bgAlt2: string;
  bgAlt3: string;
  scrollAlt: string;
};

const categoriesKo: CustomizingCategory[] = [
  {
    id: "lifting",
    title: "Lifting",
    description: {
      dt: "고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만들기 위한 최적의 리프팅 컴비네이션.",
      dd: "각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있는 원데이익스트림리프팅, 또는 과도한 지방을 분해하고 배출하여 윤곽을 개선해주는 조각주사와 함께 컴바인한 '조각술'은 더욱 효과적인 라인을 만들어주는 오마쥬만의 차별화된 특별한 경험이 될 것입니다.",
    },
    treatments: [
      {
        name: "울쎄라 (Ulthera)",
        description:
          "울쎄라는 마이크로포커스 초음파(MFUS) 기술을 사용하여 피부 표면에 손상을 주지 않으면서 SMAS층(근건막층)까지 에너지를 전달하는 FDA 승인 시술입니다. DeepSEE™ 기술로 실시간 초음파 영상을 통해 피부 깊이를 확인하며 정확하게 시술합니다. 순간적으로 60~70°C의 열응고점을 만들어 콜라겐을 변성·수축시키고, 이후 상처 치유 과정에서 새로운 콜라겐이 재생됩니다. 시술 직후 즉각적인 수축 효과가 나타나며, 3개월부터 점차 효과가 증가합니다. 최장 6개월~1년간 리프팅 효과가 유지됩니다.",
      },
      {
        name: "슈링크 유니버스 (Shrink Universe)",
        description:
          "슈링크 유니버스는 고강도 집속 초음파(HIFU) 에너지를 이용한 2세대 리프팅 시술입니다. 돋보기로 햇빛을 모아 종이를 태우듯, 초음파 에너지를 피부 속 진피층과 근막층(SMAS)에 집중시켜 65~75℃의 열응고점을 만들어 콜라겐 재생을 촉진합니다. MP 모드와 Normal(도트) 모드 두 가지 모드로 시술이 가능하며, 총 7가지 카트리지로 깊이 맞춤화(1.5mm~4.5mm)가 가능합니다. 시술 속도가 기존 대비 2.5배 빨라지고 통증이 크게 감소했습니다. 이중턱, 처진 볼살, 불분명한 턱선 개선 및 V라인 효과를 제공하며, 효과는 일반적으로 6개월~1년 유지됩니다.",
      },
      {
        name: "튠페이스 (Tune Face)",
        description:
          "튠페이스는 이스라엘 ALMA사에서 개발한 멀티 고주파를 활용한 페이스리프팅 시술로, 공식명칭은 악센트 프라임(Accent Prime)입니다. 40.68MHz의 이상적인 주파수 에너지를 사용하여 피부 속 물분자를 회전시키고, 이로 인한 마찰열로 콜라겐을 자극하고 재생합니다. 기존 고주파 시술(10MHz 이하)에 비해 더 깊고 강력한 치료가 가능하며, 아이스 컨택트 쿨링으로 통증을 최소화합니다. 3단계(5mm, 8mm, 11mm) 깊이 조절이 가능하여 피부층별 맞춤 시술이 가능합니다. 시술 직후 즉시 피부가 당겨지고 얼굴라인이 정리되는 효과가 나타나며, 1개월 간격으로 3회 이상 시술 권장되며, 3회 기준 1년 정도 유지됩니다.",
      },
    ],
  },
  {
    id: "brightening",
    title: "Brightening",
    description: {
      dt: "맑고 환하게 윤기나게, 결점 없는 투명한 피부는 퓨어한 아름다움의 시작",
      dd: "기미, 주근깨, 잡티, 오타모반, 흑자 등의 색소질환은 자외선 노출이나 노화, 유전적요인 등 다양한 원인으로 발생하기 때문에 정확한 분석과 진단으로 원인에 맞는 치료법을 적용하는 것이 중요합니다. 피부 톤과 피부 결 개선. 탄력 및 영양까지 고려한 복합 솔루션으로 병변과 피부상태에 맞게 커스텀을 제공합니다.",
    },
  },
  {
    id: "skin",
    title: "Skin Rejuvenation",
    description: {
      dt: "콜라겐 생성을 촉진하고, 피부 균형의 복원, 세포 재생을 통해 피부장벽을 강화하고 건강한 상태로 리뉴얼.",
      dd: "스킨부스터를 이용하여 피부에 필요한 영양소와 약물을 직접 주사하고 피부를 재생하여 피부 속 환경이 복원되도록 촉진해주는 시술입니다. 피부결 개선, 모공, 타이트닝, 탄력, 미백, 잔주름, 여드름 흉터, 유수분 밸런스 등에 효과적인 다양한 스킨부스터를 피부상태와 원인에 맞게 선택하여 효과적인 침투장비와 함께 커스터마이징 하여 시술합니다.",
    },
  },
  {
    id: "pore",
    title: "Pore / Scar",
    description: {
      dt: "모공과 흉터의 종류와 원인, 상태를 분석하여 다양하게 적용하는 시술 방법과 기술",
      dd: "각각의 모공과 흉터의 원인을 파악하여 손상된 피부상태를 확인하고 시술의 방법과 방향을 세웁니다. 치료방법은 매우 다양하고, 효과가 점진적으로 나타나기 때문에 커스텀 플랜을 세밀하게 세팅하는 것이 중요하며, 꾸준히 변화를 체크하고 팔로업 해야합니다. 콜라겐부스터를 직접 피부에 주입하여 진피가 재생될 수 있는 환경을 만들고 피부의 손상을 회복하도록 돕는 콜라겐진피재생술이 대표적인 시술입니다.",
    },
  },
  {
    id: "contouring",
    title: "Body Contouring",
    description: {
      dt: "군살, 늘어진 탄력 등에 적용하는 바디리프팅, 라인을 개선하는 바디슬리밍에 더불어 코어근육까지 단단하게 강화하는 Full contouring.",
      dd: "꾸준한 운동과 식단조절이 바디 컨투어링의 기본이지만, 보다 시너지 효과를 원하거나 다이어트 후 특정 부위만 고민이 될 경우, 추가로 도움을 받을 수 있는 메디컬 프로그램입니다. 전체적인 라인을 정리하고 리프팅 또는 탄력을 증대하거나, 지방을 분해하여 사이즈를 감소하기 위한 다양한 시술 방법들이 있으며, 복부, 팔, 엉덩이, 허벅지 등의 근육을 강화시켜 더욱 건강하고 아름다운 라인을 만들어주는 풀 컨투어링 프로그램입니다.",
    },
  },
  {
    id: "skincare",
    title: "Medical Skin Care Program",
    description: {
      dt: "탄력 / 재생 / 화이트닝 / 수분 / 주름 / 여드름 / 트러블진정 등 피부상태를 개선하는 다양한 솔루션과 장비를 이용하여 건강한 피부장벽을 만들어주는 메디컬 에스테틱 스킨 케어 프로그램",
      dd: "시술의 효과를 증대 시키거나, 또는 개개인의 피부상태를 건강하게 개선하기 위해 의사의 정확한 진단을 통해 의학적으로 접근하는 스킨 케어 방법으로서, 일반 피부관리실의 에스테틱의 프로그램과는 차별화 되며, 메디컬적인 전문 치료 방향을 세워 커스텀 플랜을 제공합니다.",
    },
  },
  {
    id: "circulation",
    title: "Medical Circulation",
    description: {
      dt: "혈액순환과 림프순환을 촉진하여 노폐물 및 독소를 배출하고 부종을 완화하여 생체 균형을 회복.",
      dd: "몸속 노폐물과 독소, 분해된 지방까지 림프관을 통해 잘 배출되도록 림프순환을 돕고 신진대사를 활성화시켜주는 프로그램입니다. 림프는 신체의 면역시스템과 체액의 균형을 유지하는 중요한 역할을 하고 있기 때문에 혈액순환, 부종, 면역력저하, 피로, 피부트러블 등의 질병으로부터 회복력을 유지할 수 있도록 다양한 림프 순환 관리 방법으로 컴바인하여 도움을 드립니다.",
    },
  },
  {
    id: "stem",
    title: "Stem cell",
    description: {
      dt: "고농도의 신선한 줄기세포를 혈관에 투여하여 재생효과와 더불어 면역을 강화하고 노화를 지연하는데 도움을 주는 항노화 안티에이징 시술",
      dd: "노화된 신체 부위의 세포들을 다시 젊은 세포로 재생시켜주며, 혈액순환을 촉진하여 피부 세포 증식 및 재생 능력을 향상시키고 피부 결손 조직을 보완하여 더욱 건강하고 탄력 있는 피부를 유지하는 데 도움을 줍니다. 미라셀(Miracell): 미국 하버드 대학교에서 개발한 고급 줄기세포 추출·농축 시스템으로, 전혈액과 골수에서 CD34+ 줄기세포, 성장인자(PDGF, EGF, VEGF), 혈소판, 단핵세포를 분리·농축합니다. 일반 혈액 대비 CD34+ 및 성장인자가 크게 향상되어 조직 재생·항노화에 효과적이며, 화상·관절염·탈모 등 다양한 분야에 활용됩니다. (참고: 예다여성의원 줄기세포클리닉 https://www.yedaclinic.com/mn08/mn08_01.html) MCT 메타셀(Meta Cell Technology): PRP·SVF·줄기세포 농축액 등을 활성화하는 재생의학 솔루션으로, 환자 자신의 혈장 1ml당 약 299.3억 개의 자가 엑소좀을 활성화합니다. 광열 생물조절(Photothermal Biomodulation) 기술로 성장인자 방출 증가, 미토콘드리아 ATP 생산 증대, 혈소판 성능 개선, 염증성 사이토킨 감소 효과를 제공하며, 자가 기반으로 면역 거부반응을 최소화합니다.",
    },
  },
  {
    id: "petit",
    title: "Petit",
    description: {
      dt: "주름개선, 근육축소, 볼륨증대, 지방분해, 윤곽개선 등 간단하게 주사로 개선되는 비수술적 성형 시술",
      dd: "보톡스, 필러, 조각주사 등 절개 없이 주사를 이용하여 시술하는 방법으로 시술 후 빠르게 효과를 볼 수 있으며, 긴 회복기간이나 흉터에 대한 부담이 없는 간단한 성형 시술입니다. 다양한 부위에 적용이 가능하며 주름을 개선하거나 근육을 축소, 꺼진 부위의 볼륨증대, 안면부위의 지방 분해 및 윤곽개선에 도움을 주는 솔루션으로 개개인의 얼굴에 맞게 커스터마이징합니다.",
    },
  },
];

const categoriesEn: CustomizingCategory[] = [
  {
    id: "lifting",
    title: "Lifting",
    description: {
      dt: "RF, ultrasound, laser and threads—combined for a resilient V-line.",
      dd: "Hommage pairs technologies for one-day intensive lifting or sculpting protocols (e.g. contour injections) to refine lines with a differentiated, experience-led approach.",
    },
    treatments: [
      {
        name: "Ulthera",
        description:
          "Micro-focused ultrasound (MFUS) delivers energy to the SMAS without ablating the surface—FDA-cleared pathway. DeepSEE™ imaging helps verify depth in real time. Brief 60–70°C coagulation zones remodel collagen; tightening is often felt early with gradual build over ~3 months, lasting up to roughly 6–12 months for many patients.",
      },
      {
        name: "Shrink Universe",
        description:
          "High-intensity focused ultrasound (HIFU) targets dermis and SMAS (~65–75°C coagulation) to stimulate collagen. MP and dot modes with multiple cartridges (about 1.5–4.5 mm) allow depth tailoring; faster passes and improved comfort vs earlier generations. Commonly used for double chin, lax cheek and jaw definition—effects often ~6–12 months.",
      },
      {
        name: "Tune Face (Accent Prime)",
        description:
          "Multi-RF platform (ALMA) at ~40.68 MHz rotates dermal water molecules, generating frictional heat to stimulate collagen—deeper than many ≤10 MHz devices—with ice-contact cooling. Depth steps (~5 / 8 / 11 mm) support layered planning. Many notice immediate tightening; series (e.g. monthly ×3) may sustain ~1 year in select cases.",
      },
    ],
  },
  {
    id: "brightening",
    title: "Brightening",
    description: {
      dt: "Clear, luminous, even tone—pure beauty starts here.",
      dd: "Melasma, freckles, solar lentigines and more have mixed causes (UV, aging, genetics). We emphasize diagnosis-first protocols and layered plans for tone, texture, elasticity and nutrition.",
    },
  },
  {
    id: "skin",
    title: "Skin Rejuvenation",
    description: {
      dt: "Boost collagen, rebalance skin and renew the barrier for healthier skin.",
      dd: "Skin boosters deliver nutrients and actives where needed to support regeneration—customized by concern (pores, tightening, elasticity, pigment, fine lines, acne scars, oil–water balance) and paired with appropriate delivery devices.",
    },
  },
  {
    id: "pore",
    title: "Pore / Scar",
    description: {
      dt: "Analyze pore and scar type, cause and stage—then match technique.",
      dd: "Plans evolve gradually; follow-up matters. Collagen-booster protocols that support dermal remodeling (e.g. collagen dermal regeneration concepts) are representative options when indicated.",
    },
  },
  {
    id: "contouring",
    title: "Body Contouring",
    description: {
      dt: "Body lifting and slimming plus core strength—a full contour philosophy.",
      dd: "Lifestyle is foundational; medical programs can add synergy for stubborn zones after weight change—combining line refinement, tightening or focal fat reduction with muscle conditioning for abdomen, arms, glutes and thighs.",
    },
  },
  {
    id: "skincare",
    title: "Medical Skin Care Program",
    description: {
      dt: "Medical-grade devices and protocols for elasticity, renewal, brightening, hydration, wrinkles, acne and calming.",
      dd: "Physician-directed plans differ from salon aesthetics—goal is measurable skin health and barrier support, often amplifying procedural results.",
    },
  },
  {
    id: "circulation",
    title: "Medical Circulation",
    description: {
      dt: "Support blood and lymph flow to clear waste, ease swelling and rebalance the body.",
      dd: "Programs encourage lymphatic drainage and metabolism—relevant when addressing edema, fatigue, immunity stressors or skin flare patterns, combined as appropriate.",
    },
  },
  {
    id: "stem",
    title: "Stem cell",
    description: {
      dt: "Concentrated autologous protocols explored for regeneration, immunity support and healthy-aging goals—always individualized.",
      dd: "We discuss candidacy carefully. Technologies referenced in literature include systems that concentrate CD34+ cells, growth factors and platelets from whole blood or marrow, and adjunct activation platforms; claims vary by jurisdiction—your physician explains evidence and suitability in consult.",
    },
  },
  {
    id: "petit",
    title: "Petit",
    description: {
      dt: "Injectables for wrinkles, muscle balance, volume, fat contouring—minimal downtime.",
      dd: "Botulinum toxin, fillers and contour injections refine features without surgery; plans are customized to facial structure and goals.",
    },
  },
];

const introKo = [
  { text: "인위적이고 자연스럽지 않은 아름다움은 진정한 아름다움이 아닙니다." },
  { text: "낮추고 줄여서 눈,코,입을 선명하게 만들고, 좌우의 비대칭을 교정하여 조화롭고 자연스럽게 보이도록 하는 것이 오마쥬의 가장 중요한 목표입니다." },
  { text: "오마쥬는 충분한 상담과 정확한 진단 및 디자인으로 가장 적합한 시술을 찾아 형태를 잡고, 아름다운 밸런스를 찾아가는 과정, 그 과정에서의 최적의 시술 조합을 세밀하고 숙련된 테크닉으로 적용합니다." },
];

const introEn = [
  { text: "Beauty that feels forced is not true beauty." },
  {
    text: "Hommage refines and balances—clarifying eyes, nose and lips while correcting asymmetry so results read natural, not exaggerated.",
  },
  {
    text: "Through thorough consultation, diagnosis and design, we map the right treatment combinations and execute them with meticulous, experienced technique.",
  },
];

const introJa = [
  { text: "不自然な美しさは、本当の美しさではありません。" },
  { text: "左右のバランスを整え、目・鼻・唇を自然に際立たせることがオマージュの大切な目標です。" },
  { text: "十分なカウンセリングと診断のうえ、最適な施術の組み合わせを熟練したテクニックで提供します。" },
];

const introZh = [
  { text: "刻意而不自然的美，并非真正的美。" },
  { text: "通过适度调整使眼、鼻、唇更清晰，并矫正不对称，以和谐自然为目标。" },
  { text: "Hommage 以充分咨询与精准设计，匹配最佳方案并以娴熟技术落实。" },
];

const introRu = [
  { text: "Искусственная красота — не подлинная красота." },
  { text: "Мы стремимся к гармонии: мягкая коррекция и симметрия без «перегруза»." },
  { text: "После консультации и диагностики подбираем сочетания процедур и выполняем их аккуратно." },
];

function alts(locale: Locale): Pick<CustomizingPageContent, "bgAlt1" | "bgAlt2" | "bgAlt3" | "scrollAlt"> {
  if (locale === "ko") {
    return { bgAlt1: "배경이미지1", bgAlt2: "배경이미지2", bgAlt3: "배경이미지3", scrollAlt: "스크롤" };
  }
  if (locale === "ja") {
    return { bgAlt1: "背景画像1", bgAlt2: "背景画像2", bgAlt3: "背景画像3", scrollAlt: "スクロール" };
  }
  if (locale === "zh") {
    return { bgAlt1: "背景图1", bgAlt2: "背景图2", bgAlt3: "背景图3", scrollAlt: "滚动" };
  }
  if (locale === "ru") {
    return { bgAlt1: "Фон 1", bgAlt2: "Фон 2", bgAlt3: "Фон 3", scrollAlt: "Прокрутка" };
  }
  return {
    bgAlt1: "Background image 1",
    bgAlt2: "Background image 2",
    bgAlt3: "Background image 3",
    scrollAlt: "Scroll",
  };
}

const categoriesByLocale: Record<Locale, CustomizingCategory[]> = {
  ko: categoriesKo,
  en: categoriesEn,
  ja: customizingCategoriesJa,
  zh: customizingCategoriesZh,
  ru: customizingCategoriesRu,
};

export function getCustomizingPageContent(locale: Locale): CustomizingPageContent {
  const categories = categoriesByLocale[locale] ?? categoriesKo;
  const introMap: Record<Locale, { text: string }[]> = {
    ko: introKo,
    en: introEn,
    ja: introJa,
    zh: introZh,
    ru: introRu,
  };
  const introSlides = introMap[locale] ?? (locale === "ko" ? introKo : introEn);
  return { categories, introSlides, ...alts(locale) };
}
