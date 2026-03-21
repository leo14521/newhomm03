'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { CLINIC_DIRECTOR_NAME_KR } from '@/config/brand';

const TECH_LIST = [
    {
        num: '01',
        en: 'Visual',
        title: '눈으로 확인하는 명확한 시술 계획, DEEP SEE 기술',
        sub: '심층 구조를 교차 검증하고 정밀하게 전달',
        imgPc: 'https://skinab.com/img/page/ultherapy-prime/tech-01.png',
        imgWebp: 'https://skinab.com/img/page/ultherapy-prime/tech-01.webp',
    },
    {
        num: '02',
        en: 'Long-lasting',
        title: '최대 8mm까지 초음파 관찰로 맞춤 리프팅 설계',
        sub: '오래 유지되는 탄력과 리프팅 효과',
        imgPc: 'https://skinab.com/img/page/ultherapy-prime/tech-02.png',
        imgWebp: 'https://skinab.com/img/page/ultherapy-prime/tech-02.webp',
    },
    {
        num: '03',
        en: 'Speedy-Comfort',
        title: '빠른 피드백으로 통증·불편감 완화에 초점',
        sub: '시술 만족도와 편안함을 동시에',
        imgPc: 'https://skinab.com/img/page/ultherapy-prime/tech-03.png',
        imgWebp: 'https://skinab.com/img/page/ultherapy-prime/tech-03.webp',
    },
];

const TWOSPT_LIST = [
    { label: '각도·초음파 정밀 진단', strong: '정밀' },
    { label: '맞춤 시술 계획', strong: '맞춤' },
    { label: '맞춤 초음파 리프팅 시술', strong: '시술' },
];

const BNA_ITEMS = [
    { b: 'https://skinab.com/img/page/ultherapy-prime/bna-b-01.png', a: 'https://skinab.com/img/page/ultherapy-prime/bna-a-01.png' },
    { b: 'https://skinab.com/img/page/ultherapy-prime/bna-b-02.png', a: 'https://skinab.com/img/page/ultherapy-prime/bna-a-02.png' },
    { b: 'https://skinab.com/img/page/ultherapy-prime/bna-b-03.png', a: 'https://skinab.com/img/page/ultherapy-prime/bna-a-03.png' },
];

const KEYPOINT_ITEMS = [
    {
        num: 'KEY POINT 01',
        titleLeft: '부위별 ',
        titleBold: '맞춤 분배',
        desc: ['지방층 견인·리프팅으로', '지방재배치 효과와 볼 패임 방지를 동시에'],
        imgB: 'https://skinab.com/img/page/ultherapy-prime/keypoint-01.png',
        imgA: 'https://skinab.com/img/page/ultherapy-prime/keypoint-02.png',
    },
    {
        num: 'KEY POINT 02',
        titleLeft: '',
        titleBold: '선명한 라인 리프팅',
        desc: ['비순 리프팅과 차원이 다른 밀도', '근막 1cm까지 꼼꼼하게 밀도 시술'],
        imgB: 'https://skinab.com/img/page/ultherapy-prime/keypoint-03.png',
        imgA: 'https://skinab.com/img/page/ultherapy-prime/keypoint-04.png',
    },
];

const DIFFERENCE_ITEMS = [
    {
        title: ' 프로세스',
        desc: '정밀진단과 계획·맞춤 리프팅 시술로 차별화된 효과와 유지력',
    },
    {
        title: '1:1 맞춤 상담 디자인',
        desc: '1:1 맞춤 상담 디자인 구성으로 시술 부위·깊이를 세밀하게 조절',
    },
    {
        title: '맞춤 마취·전문의 주치',
        desc: '맞춤 마취 프로토콜과 전문의 주치로 통증 부담을 줄입니다',
    },
];

const PAINCARE_STEPS = [
    { step: 'Step 01', label: '마취 크림' },
    { step: 'Step 02', label: '실시간 모니터링' },
    { step: 'Step 03', label: '시술 후 진정' },
];

const PAINCARE_ANE = [
    {
        title: '표면 마취',
        desc: '마취 크림을 도포해 피부 표면 감각을 둔화시키고 시술 전 표면 준비를 돕습니다.',
        icon: 'https://skinab.com/img/page/ane-icon-04.svg',
    },
    {
        title: '에어로솔 마취',
        desc: '긴장이나 이완 상태에 따라 민감도를 조절하며 산화질소(N₂O) 흡입으로 긴장 완화에 도움을 줄 수 있습니다.',
        icon: 'https://skinab.com/img/page/ane-icon-03.svg',
    },
    {
        title: '리드 마취',
        desc: '리도카인 마취 성분이 시술 부위에 작용해 국소 면의 감각을 완화하는 데 활용됩니다.',
        icon: 'https://skinab.com/img/page/ane-icon-02.svg',
    },
    {
        title: '아이스 마취',
        desc: '냉감으로 일시적으로 감각을 낮추는 방법으로 간단한 보조 시술에 병행될 수 있습니다.',
        icon: 'https://skinab.com/img/page/ane-icon-01.svg',
    },
];

const FAQ_ITEMS = [
    {
        q: '울쎄라 시술 원리가 어떻게 되나요?',
        a: '초음파 에너지를 SMAS층까지 전달해 조직을 수축·리모델링하고, 시간이 지나며 콜라겐 생성이 촉진되어 탄력 개선을 기대할 수 있습니다. 시술 직후 당김·붓기 등 일시적 반응이 있을 수 있습니다.',
    },
    {
        q: '울쎄라 리프팅 효과는 어떤가요?',
        a: '처짐과 주름 개선, 턱선·이중턱 라인 정리 등에 도움이 될 수 있습니다. 개인차가 있으며 권장 샷 수·깊이는 상담 후 결정합니다.',
    },
    {
        q: '효과는 언제부터인가요?',
        a: '즉각적인 당김감과 함께 1~2개월 전후로 점진적 개선이 나타나는 경우가 많으며, 수개월에 걸쳐 리프팅 효과가 유지·보강되는 경우가 있습니다.',
    },
    {
        q: '볼 패임이 걱정돼요.',
        a: '얼굴 구조와 지방 분포에 따라 시술 깊이·에너지를 조절하는 것이 중요합니다. 1:1 상담에서 골격·지방층을 고려해 개인별 맞춤 시술을 설계합니다.',
    },
    {
        q: '시술 시간은 얼마나 걸리나요?',
        a: '부위·샷 수에 따라 다르며, 상담 후 대략 1시간 전후에서 1시간 30분 내외까지 소요되는 경우가 많습니다.',
    },
    {
        q: '통증은 어느 정도인가요?',
        a: '개인차가 큽니다. 초음파 리프팅 특성상 순간적인 따끔함·온열감이 있을 수 있으며, 마취·쿨링 등으로 편안함을 높이도록 안내드립니다.',
    },
];

const YT_VIDEO_ID = 'b3dzy7nKFjM';

export default function UltheraProPrimeView() {
    const counterRef = useRef<HTMLDivElement>(null);
    const [counterVisible, setCounterVisible] = useState(false);

    useEffect(() => {
        const el = counterRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) setCounterVisible(true);
            },
            { threshold: 0.5 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

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
                        볼수록 단단해지는
                        <br className="sm:hidden" />
                        <span className="hidden sm:inline"> </span>
                        울쎄라 프라임 리프팅
                    </p>
                </div>
                <div className="relative h-[40vh] min-h-[240px] w-full lg:h-[50vh]">
                    <picture>
                        <source srcSet="https://skinab.com/img/page/ultherapy-prime/title-img.webp" type="image/webp" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://skinab.com/img/page/ultherapy-prime/title-img.png" alt="울쎄라 프라임 리프팅" className="h-full w-full object-cover object-center" />
                    </picture>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="border-b border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4 lg:px-[var(--pad-global)]">
                <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4">
                    <ol className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--text-secondary)]">
                        <li>
                            <Link href="/" className="hover:text-[var(--text-primary)]">
                                HOME
                            </Link>
                        </li>
                        <li aria-hidden>/</li>
                        <li>리프팅</li>
                        <li aria-hidden>/</li>
                        <li className="font-medium text-[var(--text-primary)]">울쎄라 프라임</li>
                    </ol>
                    <div className="flex flex-wrap gap-2 text-[13px]">
                        <Link
                            href="/signature/ulthera"
                            className="rounded border border-[var(--border-page)] px-3 py-1.5 text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                        >
                            울쎄라
                        </Link>
                        <Link
                            href="/signature/lifting"
                            className="rounded border border-[var(--border-page)] px-3 py-1.5 text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                        >
                            리프팅 전체
                        </Link>
                    </div>
                </div>
            </section>

            {/* Page Intro */}
            <section className="section-block bg-[var(--bg-page)]">
                <div className="mx-auto max-w-[900px] text-center">
                    <figure className="mb-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="" alt="오마쥬 X ULTHERAPY PRIME" className="mx-auto h-12 w-auto lg:h-14" />
                    </figure>
                    <h2 className="sec-title text-[clamp(22px,3vw,32px)]">
                        <span className="block font-normal italic text-[var(--text-secondary)]">
                            세계가 인정한 <b className="text-[var(--text-primary)]">정품</b>,<br className="md:hidden" />그 이상의 <b className="text-[var(--text-primary)]">강력함</b>
                        </span>
                        오마쥬 울쎄라
                    </h2>
                    <figure className="mt-12">
                        <picture>
                            <source srcSet="https://skinab.com/img/page/ultherapy-prime/ulthera-intro-img.webp" type="image/webp" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://skinab.com/img/page/ultherapy-prime/ulthera-intro-img.png"
                                alt="울쎄라 프라임 장비"
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
                        <span className="sec-label block">기존 울쎄라 대비 업그레이드된 기술</span>
                        <span className="sec-title mt-2 block">울쎄라 프라임</span>
                    </h2>
                    <ul className="mt-12 space-y-16">
                        {TECH_LIST.map((item, i) => (
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
                        <span className="sec-label block">피부 두께·탄력에 맞춘</span>
                        <span className="sec-title mt-2 block">나만을 위한 맞춤 TIP</span>
                    </h2>
                    <figure className="mt-10">
                        <picture>
                            <source srcSet="https://skinab.com/img/page/ultherapy-prime/customized-tip.webp" type="image/webp" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://skinab.com/img/page/ultherapy-prime/customized-tip.png" alt="트랜스듀서별 맞춤 시술" className="aspect-[5/3] w-full rounded-lg object-contain" />
                        </picture>
                        <figcaption className="sr-only">깊이별 에너지 분배 안내 이미지</figcaption>
                    </figure>
                    <h3 className="mt-8 text-center text-[18px] text-[var(--text-primary)] lg:text-[20px]">
                        <span className="block font-normal text-[var(--text-secondary)]">여러 가지 트랜스듀서로</span>
                        <mark className="mt-1 inline-block bg-[var(--text-primary)]/10 px-2 py-0.5">당신에게 맞는 깊이로 시술</mark>
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
                        <span className="sec-label block">결과의 차이를 보여주는</span>
                        <span className="sec-title mt-2 block">오마쥬 울쎄라</span>
                    </h2>
                    <ul className="mt-12 space-y-10">
                        {DIFFERENCE_ITEMS.map((item, i) => (
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
                        <span className="block">볼수록 단단해지는,</span>
                        보이는 초음파 리프팅
                    </h2>
                    <figure className="mt-6">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://skinab.com/img/page/ultherapy-prime/text-img-02.svg" alt="울쎄라도 오마쥬에서" className="mx-auto h-8 w-auto" />
                    </figure>
                </div>
                <div className="mx-auto mt-8 w-full max-w-[1600px]">
                    <picture>
                        <source media="(max-width: 800px)" srcSet="https://skinab.com/img/page/ultherapy-prime/banner-img-mo.webp" type="image/webp" />
                        <source media="(max-width: 800px)" srcSet="https://skinab.com/img/page/ultherapy-prime/banner-img-mo.png" type="image/png" />
                        <source srcSet="https://skinab.com/img/page/ultherapy-prime/banner-img.webp" type="image/webp" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://skinab.com/img/page/ultherapy-prime/banner-img.png" alt="울쎄라 프라임 배너" className="aspect-[16/6] w-full object-cover" />
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
                    <h2 className="sec-title mt-2 text-center text-[clamp(20px,2.5vw,26px)]">영상으로 만나는 오마쥬 클리닉 정보</h2>
                    <div className="mt-8 flex flex-wrap justify-center gap-6">
                        <Link
                            href="/#media"
                            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-6 py-3 text-[14px] text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
                        >
                            더 많은 영상 보기
                        </Link>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-6 py-3 text-[14px] text-[var(--text-primary)] transition-colors hover:border-[var(--text-primary)]"
                        >
                            유튜브 채널에서 확인
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-block bg-[var(--bg-card)]">
                <div className="mx-auto max-w-[800px]">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <h2 className="sec-title text-[clamp(22px,2.5vw,28px)]">
                            울쎄라 프라임 <span className="font-[family-name:var(--font-en-display)]">Q&amp;A</span>
                        </h2>
                    </div>
                    <ul className="space-y-4">
                        {FAQ_ITEMS.map((item, i) => (
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
                    <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">울쎄라 프라임 상담</p>
                    <p className="mt-2 text-[14px] text-white/60"> 환자와 1:1 맞춤 상담으로 설계해 드립니다.</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/#curation"
                            className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
                        >
                            상담 예약
                        </Link>
                        <Link href="/" className="inline-block rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white">
                            HOME
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
