"use client";

import { SignatureHero } from "@/components/sections/SignatureHero";
import { ThreadLiftStandardSections } from "@/components/signature/ThreadLiftStandardSections";
import { useLocale } from "@/i18n/LocaleProvider";
import { getMintThreadPageContent } from "@/i18n/threadMintContent";

export default function MintThreadView() {
  const { t, locale } = useLocale();
  const c = getMintThreadPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero title="Mint Thread" titleKr={c.heroTitleKr} description={c.heroDesc} imageIndex={2} />
      <ThreadLiftStandardSections c={c} consultTitle={t("signatureCommon.consultTitleMint")} />
    </main>
  );
}
