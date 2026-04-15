/**
 * 오마쥬 클리닉 브랜드 컨셉
 * — 미술관 전시회처럼 고급스럽고 깔끔한 흑·백·그레이 톤
 * — "미술품을 감상하듯 홈페이지를 감상할 수 있는" 경험
 */

import type { Locale } from "@/i18n/messages";

/** 브랜드 메시지 라벨 (상단 작은 표기) */
export const BRAND_MESSAGE_LABEL = "BRAND MESSAGE";

/** 슬로건 (한글) */
export const BRAND_SLOGAN_KR = "우리는 당신의 아름다움에\n경의를 표합니다";

/** 슬로건 (영문) */
export const BRAND_SLOGAN_EN = "We pay homage to your beauty";

/** 서비스 한줄 소개 (footer·메타용) */
export const BRAND_SERVICES_KR = "여성의학, 피부, 바디 클리닉";

/** 클리닉 주소 (표기용 한 줄) */
export const CLINIC_ADDRESS_KR = "서울 서초구 강남대로 509 오마쥬클리닉 A동 4층";

/** English address line (footer / map copy) */
export const CLINIC_ADDRESS_EN =
  "509 Gangnam-daero, Seocho-gu, Seoul — Hommage Clinic, Building A, 4F";

/** 구글맵 검색·임베드 쿼리 (임베드에서 장소 핀 인식 우선) */
export const CLINIC_MAP_QUERY = "강남산부인과 피부과 오마쥬의원";
/** 구글맵 임베드 중심 좌표 */
export const CLINIC_MAP_LAT = 37.5101996;
export const CLINIC_MAP_LNG = 127.0429674;
/** 구글 지도 외부 링크 */
export const CLINIC_GOOGLE_MAP_URL = "https://maps.app.goo.gl/u4kK5AntpeRqmFZM9";

/** 대표 전화 (표기용) */
export const CLINIC_TEL = "02-517-7125";

/** `tel:` 링크용 숫자만 */
export const CLINIC_TEL_DIGITS = CLINIC_TEL.replace(/\D/g, "");

/** 네이버 예약/플레이스 링크 */
export const CLINIC_NAVER_PLACE_URL = "https://naver.me/xQeKW87V";
/** 공식 SNS 및 외부 채널 */
export const CLINIC_INSTAGRAM_URL = "https://www.instagram.com/yedaclinic";
export const CLINIC_YOUTUBE_URL = "https://www.youtube.com/@user-zm4qk5wt9j";
export const CLINIC_KAKAO_TALK_URL = "https://pf.kakao.com/_xkiclxl";
/** 네이버 블로그 */
export const CLINIC_BLOG_URL = "https://blog.naver.com/yeda_clinic";

/** 사업자등록번호 (하이픈 표기) */
export const CLINIC_BUSINESS_REG = "141-19-00808";

/** 대표 원장 성함 */
export const CLINIC_DIRECTOR_NAME_KR = "박유나";

/** 푸터·안내 — 대중교통 (강남대로 509·신논현권) */
export const CLINIC_TRANSIT_HINT_KR =
  "지하철 9호선·신분당선 신논현역 인근 도보 · 강남대로 버스정류장 인근";

export const CLINIC_TRANSIT_HINT_EN =
  "Near Sinnonhyeon Station (Lines 9 & Shinbundang) · Gangnam-daero bus stops";

/** 일본어 */
export const BRAND_SLOGAN_JA = "私たちはあなたの美しさに\n敬意を表します";
export const BRAND_SERVICES_JA = "女性医療・皮膚・ボディクリニック";
export const CLINIC_ADDRESS_JA =
  "ソウル特別市瑞草区江南大路509 オマージュクリニック A棟 4階";
export const CLINIC_TRANSIT_HINT_JA =
  "地下鉄9号線・新盆唐線 新論峴駅 徒歩圏内 · 江南大路バス停周辺";

/** 简体中文 */
export const BRAND_SLOGAN_ZH = "我们向你的美\n致以敬意";
export const BRAND_SERVICES_ZH = "女性健康、皮肤与身体诊疗";
export const CLINIC_ADDRESS_ZH = "首尔瑞草区江南大路509号 Hommage 诊所 A栋 4层";
export const CLINIC_TRANSIT_HINT_ZH = "地铁9号线·新盆唐线新论岘站步行可达 · 江南大路公交站附近";

/** Русский */
export const BRAND_SLOGAN_RU = "Мы отдаём дань\nвашей красоте";
export const BRAND_SERVICES_RU = "Гинекология, дерматология, эстетика тела";
export const CLINIC_ADDRESS_RU =
  "Сеул, район Сочхо, Кангнам-даэро 509, клиника Hommage, корпус A, 4 этаж";
export const CLINIC_TRANSIT_HINT_RU =
  "Рядом со ст. Синнонхён (линии 9 и Shinbundang) · остановки у Кангнам-даэро";

const BRAND_MESSAGE_BY_LOCALE: Record<Locale, string> = {
  ko: BRAND_MESSAGE_LABEL,
  en: "BRAND MESSAGE",
  ja: "ブランドメッセージ",
  zh: "品牌理念",
  ru: "БРЕНД",
};

const SLOGAN_BY_LOCALE: Record<Locale, string> = {
  ko: BRAND_SLOGAN_KR,
  en: BRAND_SLOGAN_EN,
  ja: BRAND_SLOGAN_JA,
  zh: BRAND_SLOGAN_ZH,
  ru: BRAND_SLOGAN_RU,
};

const ADDRESS_BY_LOCALE: Record<Locale, string> = {
  ko: CLINIC_ADDRESS_KR,
  en: CLINIC_ADDRESS_EN,
  ja: CLINIC_ADDRESS_JA,
  zh: CLINIC_ADDRESS_ZH,
  ru: CLINIC_ADDRESS_RU,
};

const TRANSIT_BY_LOCALE: Record<Locale, string> = {
  ko: CLINIC_TRANSIT_HINT_KR,
  en: CLINIC_TRANSIT_HINT_EN,
  ja: CLINIC_TRANSIT_HINT_JA,
  zh: CLINIC_TRANSIT_HINT_ZH,
  ru: CLINIC_TRANSIT_HINT_RU,
};

const SERVICES_BY_LOCALE: Record<Locale, string> = {
  ko: BRAND_SERVICES_KR,
  en: "Women’s health, dermatology, and body aesthetics",
  ja: BRAND_SERVICES_JA,
  zh: BRAND_SERVICES_ZH,
  ru: BRAND_SERVICES_RU,
};

export function getBrandMessageLabel(locale: Locale): string {
  return BRAND_MESSAGE_BY_LOCALE[locale] ?? BRAND_MESSAGE_BY_LOCALE.en;
}

export function getBrandSloganForLocale(locale: Locale): string {
  return SLOGAN_BY_LOCALE[locale] ?? SLOGAN_BY_LOCALE.en;
}

export function getClinicAddressForLocale(locale: Locale): string {
  return ADDRESS_BY_LOCALE[locale] ?? ADDRESS_BY_LOCALE.en;
}

export function getClinicTransitHintForLocale(locale: Locale): string {
  return TRANSIT_BY_LOCALE[locale] ?? TRANSIT_BY_LOCALE.en;
}

export function getBrandServicesForLocale(locale: Locale): string {
  return SERVICES_BY_LOCALE[locale] ?? SERVICES_BY_LOCALE.en;
}
