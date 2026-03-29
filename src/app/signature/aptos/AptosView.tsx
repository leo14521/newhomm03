"use client";

import { SignatureHero } from "@/components/sections/SignatureHero";
import { ThreadLiftStandardSections } from "@/components/signature/ThreadLiftStandardSections";
import { useLocale } from "@/i18n/LocaleProvider";
import { getAptosThreadPageContent } from "@/i18n/threadAptosContent";

export default function AptosView() {
  const { t, locale } = useLocale();
  const c = getAptosThreadPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero title="Aptos" titleKr={c.heroTitleKr} description={c.heroDesc} imageIndex={0} />
      <ThreadLiftStandardSections c={c} consultTitle={t("signatureCommon.consultTitleAptos")} />
    </main>
  );
}
