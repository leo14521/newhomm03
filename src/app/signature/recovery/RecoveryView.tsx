"use client";

import { SignatureHero } from "@/components/sections/SignatureHero";
import { ThreadLiftStandardSections } from "@/components/signature/ThreadLiftStandardSections";
import { useLocale } from "@/i18n/LocaleProvider";
import { getRecoveryPageContent } from "@/i18n/recoveryPageContent";

export default function RecoveryView() {
  const { t, locale } = useLocale();
  const c = getRecoveryPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Recovery"
        titleKr={c.heroTitleKr}
        description={c.heroDesc}
        imageIndex={0}
      />
      <ThreadLiftStandardSections c={c} consultTitle={t("signatureCommon.consultTitleRecovery")} />
    </main>
  );
}
