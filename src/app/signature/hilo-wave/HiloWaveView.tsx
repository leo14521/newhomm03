"use client";

import Link from "next/link";
import { InlineBold } from "@/components/i18n/InlineBold";
import { useLocale } from "@/i18n/LocaleProvider";
import { getHiloWavePageContent } from "@/i18n/hiloWavePageContent";

export default function HiloWaveView() {
  const { t, locale } = useLocale();
  const c = getHiloWavePageContent(locale);

  return (
    <main className="min-h-screen bg-[var(--bg-page)] pt-[calc(var(--header-height)+2rem)] pb-24 text-[var(--text-primary)] lg:pt-[calc(var(--header-h)+2.5rem)]">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        <nav className="mb-8 text-[12px] text-[var(--text-secondary)]">
          <Link href="/signature/boosting" className="hover:text-[var(--accent-terracotta-dark)]">
            {t("boosting.hub.back")}
          </Link>
        </nav>

        <p className="sec-label text-[10px] tracking-[0.28em] text-[var(--text-secondary)]">HILO WAVE</p>
        <h1 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(26px,4vw,36px)] font-medium leading-tight">
          {c.titleKr}
        </h1>

        <section className="mt-10">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.whatTitle}</h2>
          <p className="mt-4 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            <InlineBold text={c.whatLead} />
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.whatNote}</p>
        </section>

        <section className="mt-14 space-y-10">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.vsFillerTitle}</h2>
          {c.vsFiller.map((b) => (
            <div key={b.title}>
              <h3 className="text-[13px] font-medium text-[var(--accent-terracotta-dark)]">{b.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)]">{b.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.vsStimTitle}</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.vsStimNote}</p>
          <div className="mt-8 overflow-x-auto rounded-sm border border-[var(--border-page)]">
            <table className="w-full min-w-[280px] text-left text-[12px]">
              <thead className="bg-[var(--bg-card)]">
                <tr>
                  <th className="border-b border-[var(--border-page)] px-4 py-3 font-medium">{c.tableColCat}</th>
                  <th className="border-b border-[var(--border-page)] px-4 py-3 font-medium">{c.tableColHilo}</th>
                  <th className="border-b border-[var(--border-page)] px-4 py-3 font-medium">{c.tableColLegacy}</th>
                </tr>
              </thead>
              <tbody className="text-[var(--text-secondary)]">
                {c.vsStimRows.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--border-page)] px-4 py-3 text-[var(--text-primary)]">{row.label}</td>
                    <td className="border-b border-[var(--border-page)] px-4 py-3">{row.hilo}</td>
                    <td className="border-b border-[var(--border-page)] px-4 py-3">{row.legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-8">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.maintTitle}</h2>
          <p className="mt-4 text-[13px] leading-relaxed text-[var(--text-secondary)]">{c.maintBody}</p>
          <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
            {c.maintBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.areasTitle}</h2>
          <p className="mt-3 text-[14px] text-[var(--text-secondary)]">{c.areasNote}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {c.areas.map((a) => (
              <li key={a} className="rounded-sm border border-[var(--border-page)] bg-white px-4 py-3 text-center text-[13px] text-[var(--text-secondary)]">
                {a}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12px] text-[var(--text-secondary)]">{c.areasFoot}</p>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.safetyTitle}</h2>
          <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.safetyBody}</p>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.idealTitle}</h2>
          <ul className="mt-4 space-y-2 text-[14px] text-[var(--text-secondary)]">
            {c.ideal.map((x) => (
              <li key={x}>· {x}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] p-8">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.costTitle}</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">{c.costBody}</p>
        </section>

        <section className="mt-14">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium">{c.faqTitle}</h2>
          <dl className="mt-6 space-y-6">
            {c.faq.map((f) => (
              <div key={f.q}>
                <dt className="text-[14px] font-medium text-[var(--text-primary)]">Q. {f.q}</dt>
                <dd className="mt-2 text-[13px] leading-relaxed text-[var(--text-secondary)]">A. {f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-14">
          <Link
            href="/#consult"
            className="inline-flex rounded-sm bg-[var(--text-primary)] px-6 py-3.5 text-[13px] font-medium text-white hover:opacity-90"
          >
            {t("pages.consultBook")}
          </Link>
        </div>
      </div>
    </main>
  );
}
