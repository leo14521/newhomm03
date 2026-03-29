'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getCorrectionFitPageContent } from '@/i18n/correctionFitPageContent';
import { useLocale } from '@/i18n/LocaleProvider';

export default function CorrectionFitView() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { t, locale } = useLocale();
    const c = getCorrectionFitPageContent(locale);

    return (
        <main className="min-h-screen bg-[var(--bg-page)] pt-[var(--header-height)] text-[var(--text-primary)] lg:pt-[var(--header-h)]">
            {/* Sub hero */}
            <section className="relative overflow-hidden bg-[var(--text-primary)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,164,135,0.18),transparent)]" aria-hidden />
                <div className="relative z-10 px-6 py-20 text-center lg:px-[var(--pad-global)] lg:py-28">
                    <strong className="flex items-center justify-center gap-2 text-white/90">
                        <span className="font-[family-name:var(--font-en-display)] text-[11px] font-normal tracking-[0.35em]">HOMMAGE CLINIC</span>
                    </strong>
                    <p className="mt-4 font-[family-name:var(--font-kr-cinematic-serif)] text-[15px] font-normal leading-relaxed text-white/75 md:text-[16px]">
                        {c.heroTagline}
                    </p>
                    <h1 className="mt-5 font-[family-name:var(--font-en-display)] text-[clamp(26px,4vw,40px)] font-light tracking-[0.08em] text-white">CORAGE CELL-FIT</h1>
                    <p className="mt-3 font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.8vw,28px)] font-medium tracking-tight text-white/95">{c.heroNameKr}</p>
                    <p className="mx-auto mt-6 max-w-[34rem] text-[14px] leading-[1.85] text-white/70 md:text-[15px]">
                        {c.heroLeadLine1}
                        <br className="hidden sm:block" />
                        <span className="sm:ml-1">{c.heroLeadLine2}</span>
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="border-b border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4 lg:px-[var(--pad-global)]">
                <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
                    <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                        <li>
                            <Link href="/" className="transition-colors hover:text-[var(--text-primary)]">
                                {t('signatureCommon.navHome')}
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li>
                            <Link href="/signature/lifting" className="transition-colors hover:text-[var(--text-primary)]">
                                {t('signatureCommon.navLifting')}
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li className="font-medium text-[var(--text-primary)]">{c.breadcrumbCurrent}</li>
                    </ol>
                </div>
            </section>

            {/* Concerns */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[900px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">{c.concernLabel}</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">{c.concernTitle}</h2>
                    </div>
                    <ul className="mt-10 space-y-4">
                        {c.painPoints.map((point, idx) => (
                            <li
                                key={idx}
                                className="border-l-2 border-[var(--accent-terracotta)]/40 bg-[var(--bg-card)] py-4 pl-5 pr-4 transition-[box-shadow] hover:shadow-[var(--shadow-card)] md:pl-6 md:pr-6"
                            >
                                <p className="text-[15px] leading-relaxed text-[var(--text-primary)] break-keep">{point}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-12 border border-[var(--border-page)] bg-[var(--text-primary)] px-6 py-10 text-center md:px-10">
                        <p className="font-[family-name:var(--font-en-display)] text-[11px] tracking-[0.3em] text-white/50">{c.approachLabel}</p>
                        <h3 className="mt-4 font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium text-white">{c.approachTitle}</h3>
                        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.85] text-white/75 break-keep">
                            {c.approachBeforeEm}
                            <em className="font-[family-name:var(--font-en-display)] not-italic text-[var(--hip-accent-light)]">{c.approachEmName}</em>
                            {c.approachAfterEm}
                        </p>
                    </div>
                </div>
            </section>

            {/* QMR / Principles */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[1000px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">{c.qmrLabel}</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">{c.qmrTitle}</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)] break-keep">
                            {c.qmrLead}
                        </p>
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                        {c.principles.map((item, idx) => (
                            <li
                                key={idx}
                                className="flex flex-col border border-[var(--border-page)] bg-[var(--bg-page)] p-8 text-center transition-[box-shadow,border-color] hover:border-[var(--text-primary)]/15 hover:shadow-[var(--shadow-soft)]"
                            >
                                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-page)] font-[family-name:var(--font-en-display)] text-[15px] text-[var(--text-primary)]">
                                    {idx + 1}
                                </span>
                                <h3 className="mt-6 font-[family-name:var(--font-kr-heading)] text-[17px] font-medium text-[var(--text-primary)]">{item.title}</h3>
                                <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)] break-keep">{item.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[1000px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">{c.benefitsLabel}</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">{c.benefitsTitle}</h2>
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {c.benefits.map((b, idx) => (
                            <li
                                key={idx}
                                className="group flex gap-6 border border-[var(--border-page)] bg-[var(--bg-card)] p-6 md:p-8 transition-[box-shadow,border-color] hover:border-[var(--accent-terracotta)]/25 hover:shadow-[var(--shadow-card)]"
                            >
                                <div className="flex-shrink-0">
                                    <p className="font-[family-name:var(--font-en-display)] text-[12px] tracking-[0.2em] text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent-terracotta-dark)]">
                                        {b.en}
                                    </p>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-[family-name:var(--font-kr-heading)] text-[17px] font-medium text-[var(--text-primary)]">{b.title}</h3>
                                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)] break-keep">{b.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why Hommage */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[900px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">{c.whyHommageLabel}</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">{c.whyHommageTitle}</h2>
                        <p className="mt-4 text-[15px] text-[var(--text-secondary)]">{c.whyHommageLead}</p>
                    </div>
                    <div className="mt-10 overflow-hidden border border-[var(--border-page)] bg-[var(--bg-page)]">
                        {c.whyUs.map((row, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-4 border-b border-[var(--border-page)] p-6 last:border-b-0 md:flex-row md:items-center md:gap-10 md:p-8"
                            >
                                <div className="md:w-[32%]">
                                    <h3 className="font-[family-name:var(--font-kr-heading)] text-[17px] font-medium text-[var(--text-primary)]">{row.title}</h3>
                                </div>
                                <p className="md:flex-1 text-[14px] leading-relaxed text-[var(--text-secondary)] break-keep">{row.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[800px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">{c.processLabel}</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">{c.processTitle}</h2>
                    </div>
                    <div className="relative mt-6">
                        <div className="absolute left-[21px] top-8 bottom-8 w-px bg-[var(--border-page)] md:left-6" aria-hidden />
                        {c.processes.map((process, idx) => (
                            <div key={idx} className="relative flex gap-5 pb-10 last:pb-0 md:gap-8">
                                <div className="relative z-[1] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[var(--text-primary)] bg-[var(--bg-page)] font-[family-name:var(--font-en-display)] text-[13px] text-[var(--text-primary)] md:h-12 md:w-12 md:text-[14px]">
                                    {process.step}
                                </div>
                                <div className="min-w-0 pt-1">
                                    <h3 className="font-[family-name:var(--font-kr-heading)] text-[17px] font-medium text-[var(--text-primary)]">{process.title}</h3>
                                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)] break-keep">{process.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[800px]">
                    <div className="sec-head text-center md:text-left">
                        <span className="sec-label">{c.faqLabel}</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,2.5vw,28px)]">{c.faqTitle}</h2>
                    </div>
                    <ul className="mt-8 space-y-3">
                        {c.faqs.map((faq, idx) => {
                            const open = openFaq === idx;
                            return (
                                <li key={idx} className="overflow-hidden rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)]">
                                    <button
                                        type="button"
                                        onClick={() => setOpenFaq(open ? null : idx)}
                                        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--bg-card)]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)] md:px-6 md:py-5"
                                        aria-expanded={open}
                                    >
                                        <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] break-keep pr-2">
                                            {faq.q}
                                        </span>
                                        <span
                                            className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border-page)] font-[family-name:var(--font-en-display)] text-[18px] leading-none text-[var(--accent-terracotta-dark)]"
                                            aria-hidden
                                        >
                                            {open ? '−' : '+'}
                                        </span>
                                    </button>
                                    {open && (
                                        <div className="border-t border-[var(--border-page)] px-5 pb-5 pt-4 md:px-6">
                                            <p className="text-[14px] leading-[1.85] text-[var(--text-secondary)] break-keep">{faq.a}</p>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section-block section-dark">
                <div className="mx-auto max-w-[560px] text-center">
                    <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(17px,2.2vw,21px)] font-normal leading-snug text-white/90">
                        {t('signatureCommon.correctionFitCtaLead')}
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/55">{t('signatureCommon.correctionFitCtaSub')}</p>
                    <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                        <Link
                            href="/#curation"
                            className="inline-flex items-center justify-center rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
                        >
                            {t('signatureCommon.consultAndBook')}
                        </Link>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-sm border border-[#FEE500]/90 bg-[#FEE500] px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-[#191919] transition-opacity hover:opacity-90"
                        >
                            {t('signatureCommon.consultKakao1on1')}
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
                        >
                            {t('signatureCommon.navHome')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
