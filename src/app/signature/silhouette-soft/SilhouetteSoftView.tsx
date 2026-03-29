"use client";

import { SignatureHero } from "@/components/sections/SignatureHero";
import { ThreadLiftStandardSections } from "@/components/signature/ThreadLiftStandardSections";
import { useLocale } from "@/i18n/LocaleProvider";
import { getSilhouetteThreadPageContent } from "@/i18n/threadSilhouetteContent";

export default function SilhouetteSoftView() {
  const { t, locale } = useLocale();
  const c = getSilhouetteThreadPageContent(locale);

  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero title="Silhouette Soft" titleKr={c.heroTitleKr} description={c.heroDesc} imageIndex={1} />
      <ThreadLiftStandardSections c={c} consultTitle={t("signatureCommon.consultTitleSilhouette")} />
    </main>
  );
}
