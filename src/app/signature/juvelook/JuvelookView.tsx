"use client";

import Link from "next/link";
import { InlineBold } from "@/components/i18n/InlineBold";
import { useLocale } from "@/i18n/LocaleProvider";
import { getJuvelookPageContent } from "@/i18n/juvelookPageContent";

export default function JuvelookView() {
  const { t, locale } = useLocale();
  const c = getJuvelookPageContent(locale);

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2.5rem)]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <nav className="mb-8 text-[12px] text-[var(--text-secondary)]">
          <Link href="/signature/boosting" className="hover:text-[var(--accent-terracotta-dark)]">
            {t("boosting.hub.back")}
          </Link>
        </nav>

        <p className="sec-label text-[10px] tracking-[0.28em] text-[var(--text-secondary)]">JUVELOOK</p>
        <h1 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(26px,4vw,36px)] font-medium leading-tight">
          {c.titleKr}
        </h1>
        <p className="mt-6 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
          <InlineBold text={c.lead} />
        </p>

        <section className="mt-14 space-y-8">
          {c.points.map((p) => (
            <div key={p.title} className="border-b border-[var(--border-page)] pb-8 last:border-0">
              <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(17px,2vw,20px)] font-medium">{p.title}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">{p.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-8">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.guideTitle}</h2>
          <ul className="mt-4 space-y-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">
            {c.guideLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.idealTitle}</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-[var(--text-secondary)]">
            {c.ideal.map((x) => (
              <li key={x}>· {x}</li>
            ))}
          </ul>
        </section>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/#consult"
            className="inline-flex rounded-sm bg-[var(--text-primary)] px-6 py-3.5 text-[13px] font-medium text-white hover:opacity-90"
          >
            {t("pages.consultBook")}
          </Link>
          <Link href="/signature/juvegen" className="inline-flex text-[13px] text-[var(--accent-terracotta-dark)] underline underline-offset-4">
            {t("boosting.juveCompare")}
          </Link>
        </div>
      </div>
    </main>
  );
}
