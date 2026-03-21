"use client";

import { LegalArticlePage } from "@/components/legal/LegalArticlePage";
import { getPrivacyDocument } from "@/config/legal/privacyDocument";
import { useLocale } from "@/i18n/LocaleProvider";

export default function PrivacyPolicyPage() {
  const { locale, t } = useLocale();
  const doc = getPrivacyDocument(locale);
  return <LegalArticlePage doc={doc} backLabel={t("pages.homeLink")} />;
}
