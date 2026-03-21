import type { Locale } from "@/i18n/messages";

/** ko / en / ja / zh / ru 중 현재 로케일에 맞는 객체 선택 (없으면 en) */
export function pickLocale<T>(locale: Locale, packs: Record<Locale, T>): T {
  if (locale === "ko") return packs.ko;
  const v = packs[locale];
  return v ?? packs.en;
}
