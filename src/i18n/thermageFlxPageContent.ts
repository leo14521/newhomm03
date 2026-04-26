import type { Locale } from "@/i18n/messages";

export type ThermageFlxPageContent = {
  metaTitle: string;
  metaDescription: string;
  pillKr: string;
  pillEn: string;
  introParas: string[];
  detailTimeLabel: string;
  detailTimeValue: string;
  detailDurationLabel: string;
  detailDurationValue: string;
  aftercareTitle: string;
  aftercareItems: string[];
  heatNote: string;
  imageAlt: string;
};

const ko: ThermageFlxPageContent = {
  metaTitle: "써마지 FLX | 레이저 | HOMMAGE",
  metaDescription:
    "4세대 써마지 FLX — 넓어진 팁·자동 가이드로 탄력·모공·잔주름 개선. 시술 시간·유지기간·시술 후 주의사항 안내.",
  pillKr: "써마지 FLX",
  pillEn: "THERMAGE FLX",
  introParas: [
    "4세대 FLX 기술은 한층 넓어진 팁 면적으로 시술 시간을 단축했으며, 자동 가이드 알고리즘으로 피부 탄력 개선, 모공 축소, 잔주름 완화, 피부 결 개선(리텍스처링)에 효과적입니다.",
    "눈가 전용 팁으로 눈꺼풀 처짐과 눈가 잔주름 개선에 도움을 줄 수 있습니다.",
  ],
  detailTimeLabel: "시술 시간",
  detailTimeValue: "약 40분~1시간(샷 수에 따라 상이) · 당일 바로 일상생활 가능",
  detailDurationLabel: "유지기간",
  detailDurationValue: "약 10개월~1년 · 약 10개월 간격의 반복 시술을 권장합니다.",
  aftercareTitle: "시술 후 주의사항",
  aftercareItems: [
    "필링제·각질 제거 등 피부를 자극하는 관리는 7일간 삼가 주세요.",
    "음주·흡연은 최소 5일간 삼가 주세요.",
    "3일간은 미온수로 세안해 주세요. 냉찜질·냉팩은 5일간 삼가 주세요.",
    "사우나·찜질방·수영장은 7일간 삼가 주세요.",
    "격한 운동은 7일간 삼가 주세요.",
  ],
  heatNote:
    "시술 직후 얼굴에 따뜻한 감이 남을 수 있습니다. 이는 콜라겐 재생에 도움이 되는 유효 열감이므로 억지로 식히려 하지 않으셔도 됩니다.",
  imageAlt: "Thermage FLX 의료 기기",
};

const en: ThermageFlxPageContent = {
  metaTitle: "Thermage FLX | Laser | HOMMAGE",
  metaDescription:
    "Thermage FLX — RF tightening for elasticity, pores and fine lines. Duration, maintenance and aftercare.",
  pillKr: "Thermage FLX",
  pillEn: "THERMAGE FLX",
  introParas: [
    "Fourth-generation FLX uses a larger treatment tip to shorten session time, with an automatic guidance algorithm aimed at improving elasticity, refining pores, softening fine lines and skin texture.",
    "A dedicated periorbital tip can help with mild lid laxity and crow’s-feet—discuss suitability with your physician.",
  ],
  detailTimeLabel: "Session length",
  detailTimeValue: "About 40–60 minutes (varies by shot count) · Usually back to routine the same day.",
  detailDurationLabel: "Maintenance",
  detailDurationValue: "Often around 10–12 months · Repeat sessions are commonly planned on a similar interval.",
  aftercareTitle: "Aftercare",
  aftercareItems: [
    "Avoid peels and harsh scrubs for 7 days.",
    "No alcohol or smoking for at least 5 days.",
    "Lukewarm cleansing for 3 days; avoid cold packs for 5 days.",
    "Avoid sauna, bathhouse heat and swimming pools for 7 days.",
    "Avoid strenuous exercise for 7 days.",
  ],
  heatNote:
    "A warm feeling after treatment can be normal; it reflects therapeutic heating that supports collagen remodelling—no need to force-cool the skin.",
  imageAlt: "Thermage FLX device",
};

const ja: ThermageFlxPageContent = {
  ...en,
  metaTitle: "サーマクール FLX | レーザー | HOMMAGE",
  metaDescription: "サーマクール FLX — 弾力・毛穴・小じわケア。施術時間・維持・術後注意。",
  pillKr: "サーマクール FLX",
  pillEn: "THERMAGE FLX",
  aftercareTitle: "術後の注意",
};

const zh: ThermageFlxPageContent = {
  ...en,
  metaTitle: "热玛吉 FLX | 激光 | HOMMAGE",
  metaDescription: "第四代热玛吉 FLX — 紧致、毛孔与细纹护理。疗程时长、维持与术后注意事项。",
  pillKr: "热玛吉 FLX",
  pillEn: "THERMAGE FLX",
  aftercareTitle: "术后注意",
};

const ru: ThermageFlxPageContent = {
  ...en,
  metaTitle: "Thermage FLX | Лазер | HOMMAGE",
  metaDescription:
    "Thermage FLX — RF-лифтинг для упругости, пор и мелких морщин. Длительность, удержание эффекта и рекомендации.",
  pillKr: "Thermage FLX",
  pillEn: "THERMAGE FLX",
  aftercareTitle: "Рекомендации после процедуры",
};

const byLocale: Record<Locale, ThermageFlxPageContent> = { ko, en, ja, zh, ru };

export function getThermageFlxPageContent(locale: Locale): ThermageFlxPageContent {
  return byLocale[locale] ?? ko;
}
