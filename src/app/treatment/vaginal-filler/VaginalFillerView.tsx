"use client";

import TreatmentExhibitionPage from "@/components/treatment/TreatmentExhibitionPage";
import { VAGINAL_FILLER_COPY } from "@/config/i18n/exhibition/womensPrograms";
import { pickLocale } from "@/i18n/pickLocale";
import { useLocale } from "@/i18n/LocaleProvider";

export default function VaginalFillerView() {
  const { locale, t } = useLocale();
  const c = pickLocale(locale, VAGINAL_FILLER_COPY);
  return (
    <TreatmentExhibitionPage
      {...c}
      primaryLabel={t("pages.consultBook")}
      secondaryLabel={t("pages.directions")}
    />
  );
}
