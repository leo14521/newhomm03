"use client";

import { LegalArticlePage } from "@/components/legal/LegalArticlePage";
import { getTermsDocument } from "@/config/legal/termsDocument";
import { useLocale } from "@/i18n/LocaleProvider";

export default function TermsOfServicePage() {
  const { locale, t } = useLocale();
  const doc = getTermsDocument(locale);
  return <LegalArticlePage doc={doc} backLabel={t("pages.homeLink")} />;
}
