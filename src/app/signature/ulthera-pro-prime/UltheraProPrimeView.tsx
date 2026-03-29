'use client';

import Link from 'next/link';
import { getUltheraProPrimePageContent } from '@/i18n/ultheraProPrimePageContent';
import { useLocale } from '@/i18n/LocaleProvider';

export default function UltheraProPrimeView() {
    const { t, locale } = useLocale();
    const c = getUltheraProPrimePageContent(locale);

    return (
        <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
            {/* Sub Top */}
            <section className="relative overflow-hidden bg-[var(--text-primary)]">
                <div className="relative z-10 px-6 py-20 text-center lg:px-[var(--pad-global)] lg:py-28">
                    <strong className="flex items-center justify-center gap-2 text-white/90">
                        <i aria-hidden></i>
                        <span className="font-[family-name:var(--font-en-display)] tracking-widest">HOMMAGE CLINIC</span>
                    </strong>
                    <h1 className="mt-4 font-[family-name:var(--font-en-display)] text-[clamp(28px,4vw,42px)] font-light tracking-wide text-white">ULTHERAPY PRIME</h1>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/80 lg:text-[16px]">
                        {c.heroSubLine1}
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline"> </span>
                        {c.heroSubLine2}
                    </p>
                </div>
                <div className="relative h-[40vh] min-h-[240px] w-full lg:h-[50vh]">
                    <picture>
                        <source srcSet="https://skinab.com/img/page/ultherapy-prime/title-img.webp" type="image/webp" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://skinab.com/img/page/ultherapy-prime/title-img.png" alt={c.heroImageAlt} className="h-full w-full object-cover object-center" />
                    </picture>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="border-b border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4 lg:px-[var(--pad-global)]">
                <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
                    <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                        <li>
                            <Link href="/" className="hover:text-[var(--text-primary)]">
                                {t('signatureCommon.navHome')}
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li>{t('signatureCommon.navLifting')}</li>
                        <li aria-hidden>/</li>
                        <li className="font-medium text-[var(--text-primary)]">{t('signatureCommon.ultheraPrimeName')}</li>
                    </ol>
                    <div className="flex flex-wrap gap-2 text-[13px]">
                        <Link
                            href="/signature/ulthera"
                            className="rounded border border-[var(--border-page)] px-3 py-1.5 text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                        >
                            {t('signatureCommon.ultheraName')}
                        </Link>
                        <Link
                            href="/signature/lifting"
                            className="rounded border border-[var(--border-page)] px-3 py-1.5 text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                        >
                            {t('signatureCommon.liftingAllNav')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Page Intro */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[900px] text-center">
                    <figure className="mb-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="" alt={c.introLogoAlt} className="mx-auto h-12 w-auto lg:h-14" />
                    </figure>
                    <h2 className="sec-title text-[clamp(22px,3vw,32px)]">
                        <span className="block font-normal italic text-[var(--text-secondary)]">
                            {c.introItalicPart1}
                            <b className="text-[var(--text-primary)]">{c.introItalicBold1}</b>
                            <br className="md:hidden" />
                            {c.introItalicPart2}
                            <b className="text-[var(--text-primary)]">{c.introItalicBold2}</b>
                        </span>
                        {c.introTitleBold}
                    </h2>
                    <figure className="mt-12">
                        <picture>
                            <source srcSet="https://skinab.com/img/page/ultherapy-prime/ulthera-intro-img.webp" type="image/webp" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://skinab.com/img/page/ultherapy-prime/ulthera-intro-img.png"
                                alt={c.introDeviceAlt}
                                className="mx-auto aspect-[702/587] w-full max-w-[702px] object-contain"
                            />
                        </picture>
                        <figcaption className="mt-4 font-[family-name:var(--font-en-display)] text-[14px] tracking-widest text-[var(--text-secondary)]">ULTHERAPY PRIME</figcaption>
                    </figure>
                </div>
            </section>

            {/* Page Tech */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[900px]">
                    <h2 className="sec-head text-center">
                        <span className="sec-label block">{c.techKicker}</span>
                        <span className="sec-title mt-2 block">{c.techTitle}</span>
                    </h2>
                    <ul className="mt-12 space-y-16">
                        {c.techList.map((item, i) => (
                            <li key={i} className="space-y-4">
                                <div className="font-[family-name:var(--font-en-display)] text-[14px] tracking-wider text-[var(--text-secondary)]">
                                    <span>{item.num} | </span>
                                    <b className="text-[var(--text-primary)]">{item.en}</b>
                                </div>
                                <figure>
                                    <picture>
                                        <source srcSet={item.imgWebp} type="image/webp" />
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={item.imgPc} alt="" className="aspect-[747/420] w-full rounded-lg object-cover" />
                                    </picture>
                                    <figcaption className="mt-4 text-center text-[15px] leading-relaxed text-[var(--text-secondary)]">
                                        <span>{item.title}</span>
                                        <br className="sm:hidden" />
                                        <b className="text-[var(--text-primary)]"> {item.sub}</b>
                                    </figcaption>
                                </figure>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Counter &  & YouTube */}

            {/* B&A */}

            {/* Custom tip */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[1000px]">
                    <h2 className="sec-head text-center">
                        <span className="sec-label block">{c.customKicker}</span>
                        <span className="sec-title mt-2 block">{c.customTitle}</span>
                    </h2>
                    <figure className="mt-10">
                        <picture>
                            <source srcSet="https://skinab.com/img/page/ultherapy-prime/customized-tip.webp" type="image/webp" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://skinab.com/img/page/ultherapy-prime/customized-tip.png" alt={c.customImageAlt} className="aspect-[5/3] w-full rounded-lg object-contain" />
                        </picture>
                        <figcaption className="sr-only">{c.customFigcaptionSr}</figcaption>
                    </figure>
                    <h3 className="mt-8 text-center text-[18px] text-[var(--text-primary)] lg:text-[20px]">
                        <span className="block font-normal text-[var(--text-secondary)]">{c.customH3Line1}</span>
                        <mark className="mt-1 inline-block bg-[var(--text-primary)]/10 px-2 py-0.5">{c.customH3Highlight}</mark>
                    </h3>
                </div>
            </section>

            {/* Key Point */}

            {/* Article */}

            {/* Certificate */}

            {/* Difference */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[900px]">
                    <h2 className="sec-head text-center">
                        <span className="sec-label block">{c.differenceKicker}</span>
                        <span className="sec-title mt-2 block">{c.differenceTitle}</span>
                    </h2>
                    <ul className="mt-12 space-y-10">
                        {c.differenceItems.map((item, i) => (
                            <li key={i} className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
                                <span
                                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border-page)] font-[family-name:var(--font-en-display)] text-[18px] text-[var(--text-primary)]"
                                    aria-hidden
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="text-[18px] font-medium text-[var(--text-primary)]">{item.title}</h3>
                                    <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Banner */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[900px] text-center">
                    <h2 className="sec-title text-[clamp(22px,3vw,28px)]">
                        <span className="block">{c.bannerLine1}</span>
                        {c.bannerLine2}
                    </h2>
                    <figure className="mt-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://skinab.com/img/page/ultherapy-prime/text-img-02.svg" alt={c.bannerSvgAlt} className="mx-auto h-8 w-auto" />
                    </figure>
                </div>
                <div className="mx-auto mt-8 w-full max-w-[1600px]">
                    <picture>
                        <source media="(max-width: 800px)" srcSet="https://skinab.com/img/page/ultherapy-prime/banner-img-mo.webp" type="image/webp" />
                        <source media="(max-width: 800px)" srcSet="https://skinab.com/img/page/ultherapy-prime/banner-img-mo.png" type="image/png" />
                        <source srcSet="https://skinab.com/img/page/ultherapy-prime/banner-img.webp" type="image/webp" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://skinab.com/img/page/ultherapy-prime/banner-img.png" alt={c.bannerImageAlt} className="aspect-[16/6] w-full object-cover" />
                    </picture>
                </div>
            </section>

            {/* Pain Care */}

            {/* HOMMAGE TV */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[1000px]">
                    <div className="sec-head text-center">
                        <strong className="font-[family-name:var(--font-en-display)] text-[14px] tracking-widest text-[var(--text-secondary)]">HOMMAGE TV</strong>
                    </div>
                    <h2 className="sec-title mt-2 text-center text-[clamp(20px,2.5vw,26px)]">{t('signatureCommon.mediaHommageTvTitle')}</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <Link
                            href="/#media"
                            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-6 py-3 text-[14px] text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
                        >
                            {t('signatureCommon.mediaMoreVideos')}
                        </Link>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-6 py-3 text-[14px] text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
                        >
                            {t('signatureCommon.mediaYoutubeChannel')}
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[800px]">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <h2 className="sec-title text-[clamp(22px,2.5vw,28px)]">
                            {c.faqTitlePrefix}
                            <span className="font-[family-name:var(--font-en-display)]">{c.faqTitleSuffix}</span>
                        </h2>
                    </div>
                    <ul className="space-y-4">
                        {c.faqs.map((item, i) => (
                            <li key={i} className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-5">
                                <h3 className="font-medium text-[var(--text-primary)]">{item.q}</h3>
                                <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">{item.a}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* CTA */}
            <section className="section-block section-dark">
                <div className="mx-auto max-w-[560px] text-center">
                    <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">{t('signatureCommon.consultTitleUltheraPrime')}</p>
                    <p className="mt-2 text-[14px] text-white/60">{t('signatureCommon.consultLeadUltheraPrime')}</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/#curation"
                            className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
                        >
                            {t('signatureCommon.consultReserve')}
                        </Link>
                        <Link href="/" className="inline-block rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white">
                            {t('signatureCommon.navHome')}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
