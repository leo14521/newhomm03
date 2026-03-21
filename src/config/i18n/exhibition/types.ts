import type { Locale } from "@/i18n/messages";

export type ExhibitionFeature = { title: string; description: string };

/** TreatmentExhibitionPage 본문 (CTA 라벨은 t("pages.*")로 전달) */
export type ExhibitionCopy = {
  heroTitle: string;
  heroTitleKr: string;
  heroDescription: string;
  showHeroBackground?: boolean;
  imageIndex?: number;
  introTitle: string;
  introBody: string;
  exhibitionLabel: string;
  exhibitionHeadline: string;
  exhibitionBody: string;
  keywords: string[];
  programNote?: string;
  featuresTitle: string;
  features: ExhibitionFeature[];
  ctaTitle: string;
  ctaBody: string;
  primaryHref: string;
  secondaryHref?: string;
};

export type ExhibitionCopyByLocale = Record<Locale, ExhibitionCopy>;
