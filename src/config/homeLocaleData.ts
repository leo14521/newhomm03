import type { Locale } from "@/i18n/messages";
import { pickLocale } from "@/i18n/pickLocale";
import { CONTENT_SECTIONS } from "@/config/homeContent";
import type { HomeDoctor } from "@/config/homeDoctors";
import { CONTENT_SECTIONS_EN } from "@/config/homeContent.en";
import { CONTENT_SECTIONS_JA } from "@/config/homeContent.ja";
import { CONTENT_SECTIONS_ZH } from "@/config/homeContent.zh";
import { CONTENT_SECTIONS_RU } from "@/config/homeContent.ru";
import { HOME_DOCTORS } from "@/config/homeDoctors";
import { HOME_DOCTORS_EN } from "@/config/homeDoctors.en";
import { HOME_DOCTORS_JA } from "@/config/homeDoctors.ja";
import { HOME_DOCTORS_ZH } from "@/config/homeDoctors.zh";
import { HOME_DOCTORS_RU } from "@/config/homeDoctors.ru";
import { CURATION_WOMEN, CURATION_SKIN, YT_MAIN_DISPLAY_CAPTION, YT_VIDEOS } from "@/config/homePage";
import { CURATION_WOMEN_EN, CURATION_SKIN_EN, YT_MAIN_DISPLAY_CAPTION_EN, YT_VIDEOS_EN } from "@/config/homePage.en";
import {
  CURATION_WOMEN_JA,
  CURATION_SKIN_JA,
  YT_MAIN_DISPLAY_CAPTION_JA,
  YT_VIDEOS_JA,
} from "@/config/homePage.ja";
import {
  CURATION_WOMEN_ZH,
  CURATION_SKIN_ZH,
  YT_MAIN_DISPLAY_CAPTION_ZH,
  YT_VIDEOS_ZH,
} from "@/config/homePage.zh";
import {
  CURATION_WOMEN_RU,
  CURATION_SKIN_RU,
  YT_MAIN_DISPLAY_CAPTION_RU,
  YT_VIDEOS_RU,
} from "@/config/homePage.ru";
import type { CurationCard, YtListItem } from "@/config/homePage";

type HomeContentSections = typeof CONTENT_SECTIONS;

export function getHomeContentSections(locale: Locale): HomeContentSections {
  return pickLocale(locale, {
    ko: CONTENT_SECTIONS,
    en: CONTENT_SECTIONS_EN as unknown as HomeContentSections,
    ja: CONTENT_SECTIONS_JA as unknown as HomeContentSections,
    zh: CONTENT_SECTIONS_ZH as unknown as HomeContentSections,
    ru: CONTENT_SECTIONS_RU as unknown as HomeContentSections,
  });
}

export function getHomeDoctors(locale: Locale): HomeDoctor[] {
  return pickLocale(locale, {
    ko: HOME_DOCTORS,
    en: HOME_DOCTORS_EN,
    ja: HOME_DOCTORS_JA,
    zh: HOME_DOCTORS_ZH,
    ru: HOME_DOCTORS_RU,
  }) as HomeDoctor[];
}

export function getCurationWomen(locale: Locale): CurationCard[] {
  return pickLocale(locale, {
    ko: CURATION_WOMEN,
    en: CURATION_WOMEN_EN,
    ja: CURATION_WOMEN_JA,
    zh: CURATION_WOMEN_ZH,
    ru: CURATION_WOMEN_RU,
  }) as CurationCard[];
}

export function getCurationSkin(locale: Locale): CurationCard[] {
  return pickLocale(locale, {
    ko: CURATION_SKIN,
    en: CURATION_SKIN_EN,
    ja: CURATION_SKIN_JA,
    zh: CURATION_SKIN_ZH,
    ru: CURATION_SKIN_RU,
  }) as CurationCard[];
}

export function getYtVideos(locale: Locale): YtListItem[] {
  return pickLocale(locale, {
    ko: YT_VIDEOS,
    en: YT_VIDEOS_EN,
    ja: YT_VIDEOS_JA,
    zh: YT_VIDEOS_ZH,
    ru: YT_VIDEOS_RU,
  }) as YtListItem[];
}

export function getYtMainDisplayCaption(locale: Locale): string {
  return pickLocale(locale, {
    ko: YT_MAIN_DISPLAY_CAPTION,
    en: YT_MAIN_DISPLAY_CAPTION_EN,
    ja: YT_MAIN_DISPLAY_CAPTION_JA,
    zh: YT_MAIN_DISPLAY_CAPTION_ZH,
    ru: YT_MAIN_DISPLAY_CAPTION_RU,
  });
}
