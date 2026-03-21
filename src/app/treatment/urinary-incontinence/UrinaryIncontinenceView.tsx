"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";
import { URINARY_INCONTINENCE_COPY } from "@/config/i18n/exhibition/urinaryIncontinence";
import { pickLocale } from "@/i18n/pickLocale";
import { useLocale } from "@/i18n/LocaleProvider";

export default function UrinaryIncontinenceView() {
  const { locale, t } = useLocale();
  const c = pickLocale(locale, URINARY_INCONTINENCE_COPY);
  return (
    <TreatmentExhibitionPage
      {...c}
      primaryLabel={t("pages.consultBook")}
      secondaryLabel={t("pages.directions")}
    />
  );
}
