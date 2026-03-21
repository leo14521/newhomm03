'use client';

import Link from 'next/link';
import { useState } from 'react';

const painPoints = [
    '리프팅 레이저는 받고 싶은데, 통증이 너무 두려워요.',
    '중요한 일정을 앞두고 있어서 붉어지거나 붓는 시술은 부담스러워요.',
    '피부가 얇아지고 건조해져서, 피부 장벽부터 튼튼하게 만들고 싶어요.',
    '푸석푸석하고 생기 없는 피부에 자연스러운 광채가 필요해요.',
];

const principles = [
    { title: '세포 활성화 (Cell-Fitness)', desc: '공명 에너지가 노화된 세포를 깨워 스스로 운동하게 만듭니다.' },
    { title: '콜라겐 & 엘라스틴 재생', desc: '인위적인 손상 없이 진피층의 탄력 인자들을 자발적으로 증식시킵니다.' },
    { title: '피부 장벽 강화', desc: '세포의 대사를 촉진해 표피와 진피를 동시에 건강하게 재건합니다.' },
];

const benefits = [
    { en: 'Comfort', title: '무통증 · 무손상 노다운타임', desc: '통증, 붓기, 멍이 거의 없어 시술 직후 즉시 일상생활과 메이크업이 가능합니다.' },
    { en: 'Glow', title: '즉각적인 수분 광채 (Cell-Glow)', desc: '시술 직후 속에서부터 차오르는 맑고 투명한 물광 피부를 경험할 수 있습니다.' },
    { en: 'Custom', title: '맞춤형 3 Step 어플리케이터', desc: '플라즈마 롤러, 스킨 글러브, 도자 등 피부 상태와 부위에 맞는 맞춤형 팁을 사용합니다.' },
    { en: 'Barrier', title: '얇고 예민한 피부도 안심', desc: '피부를 예민하게 만들지 않고, 오히려 받을수록 장벽이 두꺼워지고 튼튼해집니다.' },
];

const processes = [
    { step: '01', title: '1:1 맞춤 상담', desc: '원장님과의 심층 상담을 통해 피부 상태 진단' },
    { step: '02', title: '딥 클렌징', desc: '자극 없는 클렌징으로 피부결 정돈' },
    { step: '03', title: '코레지셀핏 맞춤 시술', desc: '플라즈마 롤러, 스킨 글러브, 도자를 이용한 맞춤형 에너지 전달' },
    { step: '04', title: '프리미엄 진정 케어', desc: '맞춤형 앰플 침투 및 모델링 팩으로 수분 잠금' },
    { step: '05', title: '애프터 케어 안내', desc: '시술 후 주의사항 및 홈케어 가이드 제공' },
];

const whyUs = [
    { title: '1:1 피부 주치의 진단', desc: '공장형 시술이 아닌, 원장님이 직접 피부 두께, 노화 정도, 수분량을 꼼꼼히 체크하여 맞춤 플랜을 세웁니다.' },
    { title: '전용 프로토콜', desc: '단순한 기기 관리를 넘어, 오마쥬만의 시너지 앰플과 진정 스킨케어를 결합한 프리미엄 코스를 제공합니다.' },
    { title: '프라이빗 릴렉싱 케어', desc: '통증 없이 편안한 코레지 시술의 장점을 극대화하기 위해, 안락하고 프라이빗한 1인실 환경을 제공합니다.' },
];

const faqs = [
    { q: '시술 시 통증은 어느 정도인가요?', a: '따뜻한 열감과 기분 좋은 떨림(진동) 정도만 느껴지며, 마취가 필요 없을 정도로 통증이 거의 없습니다. 편안하게 휴식하듯 시술받으실 수 있습니다.' },
    { q: '일상생활은 바로 가능한가요?', a: '네, 인위적인 흉터나 딱지가 생기지 않아 시술 직후 바로 세안과 메이크업이 가능합니다. 중요한 일정을 앞두고 받기 매우 좋은 시술입니다.' },
    {
        q: '몇 회 정도 받아야 효과가 있나요?',
        a: '1회 시술만으로도 맑아지는 피부결과 수분감을 느낄 수 있지만, 세포의 지속적인 재생과 탄력 개선을 위해 1~2주 간격으로 3~5회 이상 꾸준히 받으시는 것을 권장해 드립니다.',
    },
];

export default function CorrectionFitView() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
                        아프지 않게, 세포부터 깨우는 진짜 안티에이징
                    </p>
                    <h1 className="mt-5 font-[family-name:var(--font-en-display)] text-[clamp(26px,4vw,40px)] font-light tracking-[0.08em] text-white">CORAGE CELL-FIT</h1>
                    <p className="mt-3 font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.8vw,28px)] font-medium tracking-tight text-white/95">오마쥬 코레지셀핏</p>
                    <p className="mx-auto mt-6 max-w-[34rem] text-[14px] leading-[1.85] text-white/70 md:text-[15px]">
                        인위적인 열 손상 없이, 16가지 공명 에너지로 피부 세포를 운동시킵니다.
                        <br className="hidden sm:block" />
                        <span className="sm:ml-1">오마쥬클리닉에서 당신의 잃어버린 피부 본연의 빛을 되찾아드립니다.</span>
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="border-b border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4 lg:px-[var(--pad-global)]">
                <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
                    <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                        <li>
                            <Link href="/" className="transition-colors hover:text-[var(--text-primary)]">
                                HOME
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li>
                            <Link href="/signature/lifting" className="transition-colors hover:text-[var(--text-primary)]">
                                리프팅
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li className="font-medium text-[var(--text-primary)]">코레지셀핏</li>
                    </ol>
                </div>
            </section>

            {/* Concerns */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[900px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">Concern</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">이런 고민, 해보신 적 있으신가요?</h2>
                    </div>
                    <ul className="mt-10 space-y-4">
                        {painPoints.map((point, idx) => (
                            <li
                                key={idx}
                                className="border-l-2 border-[var(--accent-terracotta)]/40 bg-[var(--bg-card)] py-4 pl-5 pr-4 transition-[box-shadow] hover:shadow-[var(--shadow-card)] md:pl-6 md:pr-6"
                            >
                                <p className="text-[15px] leading-relaxed text-[var(--text-primary)] break-keep">{point}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-12 border border-[var(--border-page)] bg-[var(--text-primary)] px-6 py-10 text-center md:px-10">
                        <p className="font-[family-name:var(--font-en-display)] text-[11px] tracking-[0.3em] text-white/50">OUR APPROACH</p>
                        <h3 className="mt-4 font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium text-white">오마쥬클리닉의 해답</h3>
                        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.85] text-white/75 break-keep">
                            억지로 피부를 깎거나 태우지 마세요. 이제 세포를 스스로 운동하게 만드는{' '}
                            <em className="font-[family-name:var(--font-en-display)] not-italic text-[var(--hip-accent-light)]">Corage Cell-Fit</em>이 필요할 때입니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* QMR / Principles */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[1000px]">
                    <div className="sec-head text-center">
                        <span className="sec-label">QMR Technology</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">피부 세포를 위한 퍼스널 트레이닝</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)] break-keep">
                            고주파(열 발생) 방식이 아닌 QMR(양자 분자 공명) 기술로 1초에 최대 6,400만 번 세포를 진동시킵니다.
                        </p>
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                        {principles.map((item, idx) => (
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
                        <span className="sec-label">Why Cell-Fit</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">오마쥬 코레지셀핏의 네 가지 특별함</h2>
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                        {benefits.map((b, idx) => (
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
                        <span className="sec-label">Hommage Only</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">왜 오마쥬클리닉이어야 할까요</h2>
                        <p className="mt-4 text-[15px] text-[var(--text-secondary)]">같은 장비라도, 누가 어떻게 시술하느냐에 따라 결과는 다릅니다.</p>
                    </div>
                    <div className="mt-10 overflow-hidden border border-[var(--border-page)] bg-[var(--bg-page)]">
                        {whyUs.map((row, idx) => (
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
                        <span className="sec-label">Process</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,3vw,30px)]">시술 진행 과정</h2>
                    </div>
                    <div className="relative mt-6">
                        <div className="absolute left-[21px] top-8 bottom-8 w-px bg-[var(--border-page)] md:left-6" aria-hidden />
                        {processes.map((process, idx) => (
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
                        <span className="sec-label">Q&amp;A</span>
                        <h2 className="sec-title mt-3 text-[clamp(22px,2.5vw,28px)]">자주 묻는 질문</h2>
                    </div>
                    <ul className="mt-8 space-y-3">
                        {faqs.map((faq, idx) => {
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
                        잠들어 있는 당신의 피부 세포를 깨울 시간
                    </p>
                    <p className="mt-4 text-[14px] leading-relaxed text-white/55">이제 오마쥬클리닉에서 건강하게 차오르는 코레지 광채를 경험해 보세요.</p>
                    <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
                        <Link
                            href="/#curation"
                            className="inline-flex items-center justify-center rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
                        >
                            상담 및 예약
                        </Link>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-sm border border-[#FEE500]/90 bg-[#FEE500] px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-[#191919] transition-opacity hover:opacity-90"
                        >
                            카카오톡 1:1 문의
                        </a>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
                        >
                            HOME
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
