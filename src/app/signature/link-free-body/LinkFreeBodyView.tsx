"use client";

import { SignatureHero } from "@/components/sections/SignatureHero";
import { ThreadLiftStandardSections } from "@/components/signature/ThreadLiftStandardSections";
import { useLocale } from "@/i18n/LocaleProvider";
import { getLinkFreeBodyPageContent } from "@/i18n/linkFreeBodyPageContent";

export default function LinkFreeBodyView() {
  const { t, locale } = useLocale();
  const c = getLinkFreeBodyPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Link-Free Body"
        titleKr={c.heroTitleKr}
        description={c.heroDesc}
        imageIndex={4}
      />
      <ThreadLiftStandardSections c={c} consultTitle={t("signatureCommon.consultTitleLinkFree")} />
    </main>
  );
}
