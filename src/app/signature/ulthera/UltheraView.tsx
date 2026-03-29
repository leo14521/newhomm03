'use client';

import Link from 'next/link';
import { getUltheraPageContent } from '@/i18n/ultheraPageContent';
import { useLocale } from '@/i18n/LocaleProvider';
import { getLandingImage } from '@/utils/landingImages';
import {
    CLINIC_ADDRESS_KR,
    CLINIC_BUSINESS_REG,
    CLINIC_DIRECTOR_NAME_KR,
    CLINIC_TEL,
} from '@/config/brand';

const IMG = {
    hero: getLandingImage(0),
    deepSee: getLandingImage(1),
    deepSeeFallback: getLandingImage(2),
    temp: getLandingImage(3),
    tempFallback: getLandingImage(4),
    device: getLandingImage(5),
    deviceFallback: getLandingImage(0),
    cert: getLandingImage(1),
    faceMap: getLandingImage(2),
    faceMapFallback: getLandingImage(3),
    processMap: getLandingImage(4),
};

export default function UltheraView() {
    const { locale } = useLocale();
    const c = getUltheraPageContent(locale);

    return (
        <main data-page="ulthera" className="min-h-screen bg-[var(--hm-beige)] pt-[var(--header-height)] text-[#111] overflow-x-hidden">
            {/* Dot nav */}
            <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-6 mix-blend-difference text-[var(--hm-black)]" aria-label={c.dotNavAria}>
                {c.dotNav.map(({ href, label }) => (
                    <Link key={href} href={href} className="group flex items-center gap-3 cursor-pointer">
                        <span className="text-[10px] font-[family-name:var(--font-display)] opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">{label}</span>
                        <div className="w-1.5 h-1.5 bg-current rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-transform" />
                    </Link>
                ))}
            </nav>

            {/* Intro */}
            <section id="intro" className="relative min-h-[100vh] flex items-center overflow-hidden bg-[var(--hm-beige)]">
                <div className="absolute top-0 right-[15%] w-px h-full bg-[var(--hm-line)] z-0" />
                <div className="absolute bottom-0 left-[10%] w-px h-1/2 bg-[var(--hm-line)] z-0" />

                <div className="w-full max-w-[1600px] mx-auto px-[6vw] relative z-10 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 relative z-20">
                        <div className="mb-8 overflow-hidden">
                            <span className="inline-block font-[family-name:var(--font-display)] text-[var(--hm-gold)] text-lg lg:text-xl tracking-[0.2em] uppercase reveal-text">
                                The Private Masterpiece
                            </span>
                        </div>

                        <h1 className="font-[family-name:var(--font-display)] text-[12vw] lg:text-[130px] leading-[0.9] text-[var(--hm-black)] mb-10">
                            <div className="overflow-hidden">
                                <span className="block reveal-text">Defined</span>
                            </div>
                            <div className="overflow-hidden flex items-center gap-4 lg:gap-8">
                                <span className="block font-[family-name:var(--font-philo)] italic font-light text-[var(--hm-gold)] text-[60%] translate-y-[-5%] reveal-text delay-100">by</span>
                                <span className="block reveal-text delay-200">Detail</span>
                            </div>
                        </h1>

                        <div className="max-w-xl pl-6 border-l-2 border-[var(--hm-gold)]/30 ml-2">
                            <p className="font-[family-name:var(--font-kr-serif)] text-[var(--hm-gray)] text-lg lg:text-xl leading-relaxed break-keep reveal-text delay-300">
                                <strong>{c.introBold1}</strong>
                                {c.introAfter1}
                                <br />
                                {c.introLine2}
                                <br />
                                {c.introBefore3}
                                <strong>{c.introBold3}</strong>
                                {c.introAfter3}
                            </p>
                        </div>

                        <div className="mt-16 reveal-text delay-500 flex flex-wrap gap-6">
                            <Link
                                href="/#curation"
                                className="inline-flex items-center justify-center px-12 py-5 border border-[var(--hm-black)]/20 bg-transparent text-[#111] text-sm font-medium tracking-wider overflow-hidden transition-all duration-500 hover:text-white hover:border-[#111] group"
                            >
                                <span>{c.consultCta}</span>
                                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <a href="#technology" className="flex items-center gap-3 text-[var(--hm-charcoal)] px-6 py-4 hover:text-[var(--hm-gold)] transition-colors">
                                <span className="text-sm font-medium tracking-wider border-b border-current pb-1">{c.discoverTech}</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full group">
                        <div className="absolute inset-0 overflow-hidden shadow-2xl bg-gray-200 rounded-sm">
                            <img
                                src={IMG.hero}
                                alt={c.heroAlt}
                                className="w-full h-[120%] object-cover object-center scale-110 transition-transform duration-[2s] group-hover:scale-100"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur p-6 shadow-xl border border-white/40 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[var(--hm-gold)] rounded-full flex items-center justify-center text-white">
                                    <span className="text-lg">★</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] text-[var(--hm-gray)] uppercase tracking-widest mb-1">{c.badgeAuth}</span>
                                    <span className="block font-[family-name:var(--font-display)] text-xl text-[var(--hm-black)]">{c.badgeGold}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                    <div className="w-px h-16 bg-[var(--hm-charcoal)]/20 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--hm-black)]" style={{ animation: 'movedown 2s infinite' }} />
                    </div>
                </div>
            </section>

            {/* Marquee */}
            <div className="py-12 bg-[var(--hm-charcoal)] overflow-hidden relative z-20 border-y border-white/5">
                <div className="flex gap-24 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
                    {c.marquee.map((text, i) => (
                        <span
                            key={`${text}-${i}`}
                            className={
                                i % 2 === 0
                                    ? 'font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10'
                                    : 'font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic'
                            }
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Technology */}
            <section id="technology" className="py-32 lg:py-40 bg-white">
                <div className="max-w-[1600px] mx-auto px-[6vw]">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-8 border-b border-[var(--hm-line)]">
                        <div className="mb-8 lg:mb-0 reveal-text">
                            <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">{c.techKicker}</span>
                            <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)]">
                                {c.techTitle1} <br />
                                <span className="font-[family-name:var(--font-philo)] italic text-[var(--hm-gray)]">{c.techTitleItalic}</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-gray-600 text-lg leading-relaxed text-right lg:text-left break-keep reveal-text delay-100">
                            {c.techLead}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                        <div className="order-2 lg:order-1 reveal-text space-y-8">
                            <div className="flex items-start gap-4">
                                <span className="font-[family-name:var(--font-philo)] text-4xl text-[var(--hm-gold)] italic">01</span>
                                <div>
                                    <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-bold text-[var(--hm-black)] mb-2">{c.deepSeeTitle}</h3>
                                    <p className="text-gray-600 leading-7 break-keep">{c.deepSeeBody}</p>
                                </div>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-500 font-light pl-12">
                                {c.deepSeeBullets.map((b) => (
                                    <li key={b} className="flex items-center gap-2">
                                        <span className="text-[var(--hm-gold)] text-xs">✓</span> {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 relative reveal-text delay-200">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl group border border-gray-100">
                                <img
                                    src={IMG.deepSee}
                                    alt="DeepSee Technology"
                                    className="w-full object-cover relative z-10"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = IMG.deepSeeFallback;
                                    }}
                                />
                                <div className="absolute inset-0 z-20 pointer-events-none">
                                    <div className="w-full h-[2px] bg-[var(--hm-gold)] shadow-[0_0_15px_rgba(191,164,127,1)] absolute top-0" style={{ animation: 'scanY 4s linear infinite' }} />
                                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur px-3 py-2 rounded text-[10px] font-mono text-[var(--hm-gold)]">
                                        <span className="block">DEPTH: 4.5mm</span>
                                        <span className="block">TARGET: SMAS</span>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-center text-gray-400 font-mono tracking-widest">{c.scanCaption}</p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center bg-[var(--hm-beige)] p-8 lg:p-12 rounded-xl">
                        <div className="lg:col-span-7 relative">
                            <img
                                src={IMG.temp}
                                alt="Temperature Mechanism"
                                className="w-full rounded shadow-lg mix-blend-multiply"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = IMG.tempFallback;
                                }}
                            />
                        </div>
                        <div className="lg:col-span-5 space-y-8">
                            <div className="mb-6">
                                <span className="font-[family-name:var(--font-philo)] text-4xl text-[var(--hm-gold)] italic block mb-2">02</span>
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-bold text-[var(--hm-black)]">{c.tempTitle}</h3>
                                <p className="text-gray-600 mt-4 leading-7 text-sm break-keep">{c.tempLead}</p>
                            </div>
                            <div className="space-y-2">
                                {c.depthRows.map((item) => (
                                    <div key={item.title} className="group border border-[var(--hm-charcoal)]/10 bg-white p-4 cursor-pointer hover:border-[var(--hm-gold)] transition-colors">
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-[var(--hm-charcoal)] text-sm">{item.title}</span>
                                            <span className="text-xs text-[var(--hm-gold)]">{item.sub}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authenticity */}
            <section id="authenticity" className="py-32 lg:py-40 bg-[var(--hm-charcoal)] text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(var(--hm-gold) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                    }}
                />
                <div className="max-w-[1600px] mx-auto px-[6vw] relative z-10">
                    <div className="text-center mb-20 reveal-text">
                        <div className="inline-flex items-center gap-3 border border-[var(--hm-gold)]/30 rounded-full px-4 py-1 mb-6">
                            <span className="text-[10px] tracking-[0.2em] text-[var(--hm-gold)] uppercase">Authentic Guarantee</span>
                        </div>
                        <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl mb-6">The Golden Standard</h2>
                        <p className="text-white/60 font-light max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
                            {c.authLead}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative group reveal-text">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <img
                                        src={IMG.device}
                                        alt="Ulthera Device"
                                        className="w-full rounded-lg shadow-2xl border border-white/10"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = IMG.deviceFallback;
                                        }}
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-1/2 max-w-[240px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20">
                                    <img src={IMG.cert} alt="Authenticity Certificate" className="w-full rounded-lg border-2 border-[var(--hm-gold)] bg-white p-1" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:pl-16 space-y-12 reveal-text delay-200">
                            <div className="border-l border-[var(--hm-gold)]/30 pl-8">
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl text-[var(--hm-gold)] mb-4">Amplify II™ Software</h3>
                                <p className="text-white/70 font-light leading-7">{c.authAmpBody}</p>
                            </div>
                            <div className="border-l border-white/10 pl-8 group hover:border-[var(--hm-gold)] transition-colors">
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl text-white group-hover:text-[var(--hm-gold)] transition-colors mb-4">{c.authTipTitle}</h3>
                                <p className="text-white/70 font-light leading-7">{c.authTipBody}</p>
                            </div>
                            <div className="border-l border-white/10 pl-8 group hover:border-[var(--hm-gold)] transition-colors">
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl text-white group-hover:text-[var(--hm-gold)] transition-colors mb-4">{c.authCertTitle}</h3>
                                <p className="text-white/70 font-light leading-7">{c.authCertBody}</p>
                                <a
                                    href="#process"
                                    className="inline-block mt-6 text-xs tracking-widest text-[var(--hm-gold)] border-b border-[var(--hm-gold)] pb-1 hover:text-white hover:border-white transition-colors"
                                >
                                    {c.authCertLink}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Area - Curated Zones */}
            <section id="area" className="py-32 lg:py-40 bg-[var(--hm-beige)] relative">
                <div className="absolute top-[5%] left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                    <span className="font-[family-name:var(--font-display)] text-[15vw] leading-none text-[var(--hm-charcoal)] whitespace-nowrap pl-[10vw]">CURATED ZONES</span>
                </div>
                <div className="max-w-[1600px] mx-auto px-[6vw] relative z-10">
                    <div className="mb-20 text-center reveal-text">
                        <span className="text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-4 block">{c.areaKicker}</span>
                        <h2 className="font-[family-name:var(--font-kr-serif)] text-4xl lg:text-5xl text-[var(--hm-black)]">{c.areaTitle}</h2>
                        <p className="mt-6 text-gray-500 font-light max-w-lg mx-auto">
                            {c.areaLeadLine1}
                            <br />
                            {c.areaLeadLine2}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-6 sticky top-[120px] mb-12 lg:mb-0">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-4 border border-white/50">
                                <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-xl bg-gray-50">
                                    <img
                                        src={IMG.faceMap}
                                        alt="Ultherapy Face Map"
                                        className="w-full h-full object-contain object-center scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = IMG.faceMapFallback;
                                        }}
                                    />
                                    <div className="absolute top-[28%] left-[50%] -translate-x-1/2 group cursor-pointer">
                                        <div className="w-3 h-3 bg-[var(--hm-gold)] rounded-full animate-ping absolute inset-0" />
                                        <div className="w-3 h-3 bg-[var(--hm-gold)] rounded-full relative z-10 border border-white shadow-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {c.mapTip1}
                                        </div>
                                    </div>
                                    <div className="absolute top-[45%] left-[25%] group cursor-pointer">
                                        <div className="w-3 h-3 bg-[var(--hm-gold)] rounded-full relative z-10 border border-white shadow-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {c.mapTip2}
                                        </div>
                                    </div>
                                    <div className="absolute top-[65%] right-[30%] group cursor-pointer">
                                        <div className="w-3 h-3 bg-[var(--hm-gold)] rounded-full relative z-10 border border-white shadow-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {c.mapTip3}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-20 pt-10">
                            {c.zones.map((zone) => (
                                <div key={zone.num} className="group reveal-text">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-5xl font-[family-name:var(--font-philo)] italic text-[var(--hm-gold)]/30 group-hover:text-[var(--hm-gold)] transition-colors">
                                            {zone.num}
                                        </span>
                                        <h3 className="text-2xl font-[family-name:var(--font-kr-serif)] text-[var(--hm-black)]">{zone.title}</h3>
                                    </div>
                                    <div className="pl-4 border-l border-[var(--hm-charcoal)]/10 group-hover:border-[var(--hm-gold)] transition-colors duration-500">
                                        <h4 className="text-sm font-bold text-[var(--hm-charcoal)] uppercase tracking-widest mb-3">{zone.sub}</h4>
                                        <p className="text-gray-600 leading-relaxed text-lg break-keep mb-4">{zone.desc}</p>
                                        {zone.list.length > 0 && (
                                            <ul className="text-sm text-gray-500 space-y-1">
                                                {zone.list.map((li) => (
                                                    <li key={li}>• {li}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section id="process" className="py-32 lg:py-40 bg-[var(--hm-charcoal)] text-[var(--hm-beige)] overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-[6vw]">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <div className="relative">
                            <div className="sticky top-[150px]">
                                <span className="block text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-6 reveal-text">{c.ritualKicker}</span>
                                <h2 className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl leading-tight mb-8 reveal-text">
                                    Steps to <br />
                                    <span className="text-[var(--hm-gold)] italic font-[family-name:var(--font-philo)]">Perfection</span>
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed max-w-sm mb-12 reveal-text delay-100">
                                    {c.ritualLead}
                                </p>
                                <div className="rounded-lg overflow-hidden border border-white/10 relative group reveal-text delay-200">
                                    <img src={IMG.processMap} alt={c.processMapAlt} className="w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-10 lg:pt-0">
                            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-white/10 hidden lg:block" />
                            <div className="space-y-0">
                                {c.processSteps.map((item) => (
                                    <div
                                        key={item.step}
                                        className={`group pl-0 lg:pl-16 py-8 relative border-b border-white/5 lg:border-none ${
                                            item.highlight
                                                ? 'bg-gradient-to-r from-[var(--hm-gold)]/10 to-transparent border-l-2 border-[var(--hm-gold)] rounded-r-xl'
                                                : 'hover:bg-white/5 transition-colors rounded-r-xl'
                                        }`}
                                    >
                                        <span className="hidden lg:block absolute left-[15px] top-[45px] w-[9px] h-[9px] bg-[var(--hm-charcoal)] border border-white/30 rounded-full group-hover:bg-[var(--hm-gold)] group-hover:border-[var(--hm-gold)] transition-all duration-300 z-10" />
                                        <span className="font-[family-name:var(--font-philo)] text-sm text-[var(--hm-gold)] tracking-widest mb-2 block">STEP {item.step}</span>
                                        <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-medium mb-3 text-white">
                                            {item.title} <span className="text-base font-light text-white/40 ml-2">{item.sub}</span>
                                        </h3>
                                        <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 lg:py-40 bg-white">
                <div className="max-w-[1000px] mx-auto px-[6vw]">
                    <div className="text-center mb-16 reveal-text">
                        <span className="text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4 block">{c.faqKicker}</span>
                        <h2 className="font-[family-name:var(--font-kr-serif)] text-3xl lg:text-4xl text-[var(--hm-black)]">{c.faqTitle}</h2>
                    </div>
                    <div className="border-t border-[var(--hm-black)]">
                        {c.faqs.map((faq) => (
                            <details key={faq.q} className="group border-b border-[var(--hm-line)]">
                                <summary className="flex justify-between items-center py-8 cursor-pointer list-none transition-colors hover:bg-gray-50 px-4">
                                    <span className="font-[family-name:var(--font-kr-serif)] text-xl text-[var(--hm-charcoal)] group-hover:text-[var(--hm-gold)] transition-colors">{faq.q}</span>
                                    <span className="text-2xl font-thin text-[var(--hm-gray)] group-open:rotate-45 transition-transform duration-300">+</span>
                                </summary>
                                <div className="pb-8 px-8 text-gray-600 leading-7 font-light" style={{ animation: 'fadeIn 0.5s ease-out' }}>
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reservation */}
            <section id="reservation" className="py-32 lg:py-40 bg-[var(--hm-charcoal)] text-white relative overflow-hidden">
                <div className="max-w-[1600px] mx-auto px-[6vw] relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 lg:gap-40">
                        <div className="flex flex-col justify-center reveal-text">
                            <span className="text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-8 block">{c.bookKicker}</span>
                            <h2 className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl leading-tight mb-10">
                                Begin Your <br />
                                <span className="text-[var(--hm-gold)] italic font-[family-name:var(--font-philo)]">Journey</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md break-keep">
                                {c.bookLeadLine1}
                                <br />
                                {c.bookLeadLine2}
                            </p>
                            <div className="space-y-6 text-sm text-white/40 font-light pl-2 border-l border-[var(--hm-gold)]/20">
                                <p className="flex items-center gap-4">
                                    <span className="w-4 text-[var(--hm-gold)]">📍</span> {CLINIC_ADDRESS_KR}
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="w-4 text-[var(--hm-gold)]">📞</span> {CLINIC_TEL}
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="w-4 text-[var(--hm-gold)]">🕐</span> {c.hoursLine}
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-10 lg:p-16 border border-white/10 reveal-text delay-200 shadow-2xl">
                            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">{c.formLabelName}</label>
                                    <input
                                        type="text"
                                        placeholder={c.formNamePh}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors placeholder-white/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Contact</label>
                                    <input
                                        type="tel"
                                        placeholder={c.formContactPh}
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors placeholder-white/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">{c.formLabelInquiry}</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors cursor-pointer appearance-none rounded-none">
                                        <option value="">{c.formInquiryDefault}</option>
                                        <option value="ulthera">{c.formOptUlthera}</option>
                                        <option value="ulthermage">{c.formOptCombo}</option>
                                        <option value="consult">{c.formOptOther}</option>
                                    </select>
                                </div>
                                <div className="pt-8">
                                    <Link
                                        href="/#curation"
                                        className="inline-flex items-center justify-center w-full py-5 border border-white/30 text-white hover:bg-white hover:text-[var(--hm-black)] hover:border-white transition-all duration-500"
                                    >
                                        {c.formSubmitCta}
                                    </Link>
                                </div>
                                <p className="text-[10px] text-white/30 text-center leading-relaxed whitespace-pre-line">
                                    {c.formPrivacy}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[var(--hm-black)] text-white/40 pt-20 pb-10 border-t border-white/5 text-xs font-light tracking-wide">
                <div className="max-w-[1600px] mx-auto px-[6vw]">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                        <div className="space-y-6 max-w-md">
                            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white tracking-widest">HOMMAGE</h2>
                            <p className="leading-relaxed text-white/50">
                                <strong>{c.footerClinicStrong}</strong> | {c.footerDirectorLabel} {CLINIC_DIRECTOR_NAME_KR}
                                <br />
                                {c.footerBizRegLabel} {CLINIC_BUSINESS_REG} | {c.footerMedicalFacilityLabel} {c.footerMedicalFacilityNo}
                                <br />
                                {CLINIC_ADDRESS_KR}
                            </p>
                            <p className="text-[10px] text-white/30">{c.footerDisclaimer}</p>
                        </div>
                        <div className="flex gap-16">
                            <ul className="space-y-3">
                                <li className="text-white uppercase tracking-widest text-[10px] mb-2 text-[var(--hm-gold)]">Brand</li>
                                <li>
                                    <Link href="/#about" className="hover:text-white transition-colors">
                                        Philosophy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#doctor" className="hover:text-white transition-colors">
                                        Doctors
                                    </Link>
                                </li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="text-white uppercase tracking-widest text-[10px] mb-2 text-[var(--hm-gold)]">Social</li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Youtube
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Kakao Talk
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4 pt-10 border-t border-white/5">
                        <p>COPYRIGHT © 2026 HOMMAGE CLINIC. ALL RIGHTS RESERVED.</p>
                        <p className="opacity-50">Designed by Luxury Creative</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
