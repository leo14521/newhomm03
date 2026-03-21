"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";
import { SKIN_BOOSTER_COPY } from "@/config/i18n/exhibition/skinBooster";
import { pickLocale } from "@/i18n/pickLocale";
import { useLocale } from "@/i18n/LocaleProvider";

export default function SkinBoosterView() {
  const { locale, t } = useLocale();
  const c = pickLocale(locale, SKIN_BOOSTER_COPY);
  return (
    <TreatmentExhibitionPage
      {...c}
      primaryLabel={t("pages.consultBook")}
      secondaryLabel={t("pages.directions")}
    />
  );
}
