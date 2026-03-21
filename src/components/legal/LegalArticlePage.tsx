"use client";

import Link from "next/link";
import type { LegalDocument } from "@/config/legal/types";

export function LegalArticlePage({ doc, backLabel }: { doc: LegalDocument; backLabel: string }) {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] pb-16 pl-6 pr-6 pt-[calc(var(--header-height)+1.5rem)] lg:px-[var(--pad-global)]">
      <div className="mx-auto max-w-[720px]">
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(22px,4vw,30px)] text-[var(--text-primary)]">
          {doc.title}
        </h1>
        <p className="mt-2 text-[13px] text-[var(--text-secondary)]">{doc.updatedLine}</p>
        <div className="mt-10 space-y-10 text-[15px] leading-relaxed text-[var(--text-secondary)]">
          {doc.sections.map((s, i) => (
            <section key={i}>
              <h2 className="mb-3 text-[16px] font-semibold text-[var(--text-primary)]">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="mb-3 whitespace-pre-line last:mb-0">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
        <Link
          href="/"
          className="mt-14 inline-block text-[13px] tracking-widest text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--accent-terracotta)]"
        >
          {backLabel}
        </Link>
      </div>
    </main>
  );
}
