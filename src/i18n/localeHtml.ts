import type { Locale } from "@/i18n/messages";

/** <html lang> */
export function localeToHtmlLang(locale: Locale): string {
  switch (locale) {
    case "ko":
      return "ko";
    case "en":
      return "en";
    case "ja":
      return "ja";
    case "zh":
      return "zh-Hans";
    case "ru":
      return "ru";
    default:
      return "ko";
  }
}

/** Google Maps embed `hl` */
export function localeToMapHl(locale: Locale): string {
  switch (locale) {
    case "ko":
      return "ko";
    case "en":
      return "en";
    case "ja":
      return "ja";
    case "zh":
      return "zh-CN";
    case "ru":
      return "ru";
    default:
      return "ko";
  }
}
