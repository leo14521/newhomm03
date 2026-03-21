'use client';

import Link from 'next/link';
import { getLandingImage } from '@/utils/landingImages';
import { CLINIC_ADDRESS_KR, CLINIC_DIRECTOR_NAME_KR } from '@/config/brand';

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
    return (
        <main data-page="ulthera" className="min-h-screen bg-[var(--hm-beige)] pt-[var(--header-height)] text-[#111] overflow-x-hidden">
            {/* Dot nav */}
            <nav className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-6 mix-blend-difference text-[var(--hm-black)]" aria-label="섹션 네비게이션">
                {[
                    { href: '#intro', label: 'INTRO' },
                    { href: '#technology', label: 'TECH' },
                    { href: '#authenticity', label: 'GENUINE' },
                    { href: '#process', label: 'PROCESS' },
                ].map(({ href, label }) => (
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
                                <strong>오마쥬 울쎄라</strong>는 단순한 리프팅이 아닙니다.
                                <br />
                                당신의 고유한 골격과 근막층 깊이를 시각화하여 설계하는,
                                <br />
                                세상에 단 하나뿐인 <strong>초개인화 리프팅 의식(Ritual)</strong>입니다.
                            </p>
                        </div>

                        <div className="mt-16 reveal-text delay-500 flex flex-wrap gap-6">
                            <Link
                                href="/#curation"
                                className="inline-flex items-center justify-center px-12 py-5 border border-[var(--hm-black)]/20 bg-transparent text-[#111] text-sm font-medium tracking-wider overflow-hidden transition-all duration-500 hover:text-white hover:border-[#111] group"
                            >
                                <span>프라이빗 상담 예약</span>
                                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <a href="#technology" className="flex items-center gap-3 text-[var(--hm-charcoal)] px-6 py-4 hover:text-[var(--hm-gold)] transition-colors">
                                <span className="text-sm font-medium tracking-wider border-b border-current pb-1">DISCOVER TECHNOLOGY</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full group">
                        <div className="absolute inset-0 overflow-hidden shadow-2xl bg-gray-200 rounded-sm">
                            <img
                                src={IMG.hero}
                                alt="Hommage Ultherapy Mood"
                                className="w-full h-[120%] object-cover object-center scale-110 transition-transform duration-[2s] group-hover:scale-100"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur p-6 shadow-xl border border-white/40 hidden lg:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[var(--hm-gold)] rounded-full flex items-center justify-center text-white">
                                    <span className="text-lg">★</span>
                                </div>
                                <div>
                                    <span className="block text-[10px] text-[var(--hm-gray)] uppercase tracking-widest mb-1">Authenticated</span>
                                    <span className="block font-[family-name:var(--font-display)] text-xl text-[var(--hm-black)]">Gold Standard</span>
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
                    <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">HOMMAGE ULTHERAPY</span>
                    <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">Deep Visualization</span>
                    <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">Precision Lifting</span>
                    <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">Authentic Standard</span>
                    <span className="font-[family-name:var(--font-display)] text-6xl lg:text-8xl text-[var(--hm-beige)]/10">HOMMAGE ULTHERAPY</span>
                    <span className="font-[family-name:var(--font-philo)] text-6xl lg:text-8xl text-[var(--hm-gold)] italic">Deep Visualization</span>
                </div>
            </div>

            {/* Technology */}
            <section id="technology" className="py-32 lg:py-40 bg-white">
                <div className="max-w-[1600px] mx-auto px-[6vw]">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 pb-8 border-b border-[var(--hm-line)]">
                        <div className="mb-8 lg:mb-0 reveal-text">
                            <span className="block text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4">Core Technology</span>
                            <h2 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl text-[var(--hm-black)]">
                                See Deep, <br />
                                <span className="font-[family-name:var(--font-philo)] italic text-[var(--hm-gray)]">Lift High</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-gray-600 text-lg leading-relaxed text-right lg:text-left break-keep reveal-text delay-100">
                            보이지 않는 곳을 보는 기술. 실시간 초음파 영상 기술(DeepSee™)로 피부 속 4.5mm SMAS층까지 직접 확인하며, 오차 없는 정밀함을 약속합니다.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                        <div className="order-2 lg:order-1 reveal-text space-y-8">
                            <div className="flex items-start gap-4">
                                <span className="font-[family-name:var(--font-philo)] text-4xl text-[var(--hm-gold)] italic">01</span>
                                <div>
                                    <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-bold text-[var(--hm-black)] mb-2">DeepSee™ 초음파 시각화</h3>
                                    <p className="text-gray-600 leading-7 break-keep">
                                        사람마다 피부 두께와 구조는 다릅니다. 오마쥬는 특허받은 실시간 초음파 기술로 피부 속 구조를 눈으로 직접 확인(See)하고, 필요한 부위에 정확히 에너지를
                                        전달(Treat)합니다.
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-3 text-sm text-gray-500 font-light pl-12">
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--hm-gold)] text-xs">✓</span> 혈관 및 신경 손상 방지
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--hm-gold)] text-xs">✓</span> 타겟층(SMAS) 정확한 타격
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-[var(--hm-gold)] text-xs">✓</span> 개인별 맞춤 에너지 조절
                                </li>
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
                            <p className="mt-4 text-xs text-center text-gray-400 font-mono tracking-widest">REAL-TIME ULTRASOUND VISUALIZATION</p>
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
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl font-bold text-[var(--hm-black)]">최적의 온도 60-70°C</h3>
                                <p className="text-gray-600 mt-4 leading-7 text-sm break-keep">콜라겐 재생에 가장 효과적인 60~70°C의 열에너지를 피부 표면 손상 없이 전달합니다.</p>
                            </div>
                            <div className="space-y-2">
                                {[
                                    { title: '1.5mm Dermis', sub: '잔주름/모공', desc: '진피 상부를 자극하여 피부결과 미세 주름을 개선합니다.' },
                                    { title: '3.0mm Subcutaneous', sub: '지방/탄력', desc: '진피 하부와 지방층을 타겟팅하여 콜라겐을 생성합니다.' },
                                    { title: '4.5mm SMAS', sub: '강력 리프팅', desc: '노화의 원인인 근막층을 수축시켜 안면거상 효과를 냅니다.' },
                                ].map((item) => (
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
                        <p className="text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
                            오마쥬는 멀츠(Merz)사가 인증한 정품 울쎄라 시술 병원입니다.
                            <br />
                            불법 재생 팁 사용은 절대 용납하지 않으며, 시술 전 과정을 투명하게 공개합니다.
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
                                <p className="text-white/70 font-light leading-7">
                                    최신 소프트웨어 업그레이드가 완료된 정품 장비만을 사용합니다. 더욱 안정된 에너지 출력과 선명해진 영상 기술을 경험하세요.
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-8 group hover:border-[var(--hm-gold)] transition-colors">
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl text-white group-hover:text-[var(--hm-gold)] transition-colors mb-4">정품 팁 현장 개봉</h3>
                                <p className="text-white/70 font-light leading-7">
                                    시술 직전, 고객님 눈앞에서 미개봉 정품 팁을 확인시켜 드리고 개봉합니다. 사용된 팁은 시술 후 폐기 원칙을 준수합니다.
                                </p>
                            </div>
                            <div className="border-l border-white/10 pl-8 group hover:border-[var(--hm-gold)] transition-colors">
                                <h3 className="font-[family-name:var(--font-kr-serif)] text-2xl text-white group-hover:text-[var(--hm-gold)] transition-colors mb-4">정품 인증서 발급</h3>
                                <p className="text-white/70 font-light leading-7">시술 후 사용된 샷 수(Shot)와 팁의 일련번호가 기재된 멀츠 공식 정품 인증서를 발급해 드립니다.</p>
                                <a
                                    href="#process"
                                    className="inline-block mt-6 text-xs tracking-widest text-[var(--hm-gold)] border-b border-[var(--hm-gold)] pb-1 hover:text-white hover:border-white transition-colors"
                                >
                                    VIEW VERIFICATION PROCESS
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
                        <span className="text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-4 block">Personalized Design</span>
                        <h2 className="font-[family-name:var(--font-kr-serif)] text-4xl lg:text-5xl text-[var(--hm-black)]">당신의 선을 재정의하다</h2>
                        <p className="mt-6 text-gray-500 font-light max-w-lg mx-auto">
                            획일화된 시술이 아닌, 부위별 피부 두께와 처짐 정도를 고려한
                            <br />
                            정교한 커스텀 디자인을 제안합니다.
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
                                            이마/미간
                                        </div>
                                    </div>
                                    <div className="absolute top-[45%] left-[25%] group cursor-pointer">
                                        <div className="w-3 h-3 bg-[var(--hm-gold)] rounded-full relative z-10 border border-white shadow-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            팔자/심부볼
                                        </div>
                                    </div>
                                    <div className="absolute top-[65%] right-[30%] group cursor-pointer">
                                        <div className="w-3 h-3 bg-[var(--hm-gold)] rounded-full relative z-10 border border-white shadow-sm" />
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            이중턱/턱선
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-20 pt-10">
                            {[
                                {
                                    num: '01',
                                    title: 'Upper Face',
                                    sub: 'Forehead & Eyes',
                                    desc: '피부가 얇고 예민한 눈가와 이마는 1.5mm 팁을 사용하여 섬세하게 시술합니다. 처진 눈꺼풀을 리프팅하여 시원한 눈매를 완성하고, 이마의 잔주름을 개선합니다.',
                                    list: ['눈썹 리프팅 효과', '눈가 잔주름 개선'],
                                },
                                {
                                    num: '02',
                                    title: 'Mid Face',
                                    sub: 'Cheeks & Nasolabial Folds',
                                    desc: '노안의 주범인 팔자주름과 심부볼 지방을 타겟팅합니다. 3.0mm와 4.5mm 팁을 교차 사용하여 깊은 곳에서부터 차오르는 볼륨감과 탄력을 선사합니다.',
                                    list: ['팔자주름 완화', '앞광대 볼륨 회복'],
                                },
                                {
                                    num: '03',
                                    title: 'Lower Face',
                                    sub: 'Jawline & Double Chin',
                                    desc: '무너진 턱선을 날렵하게 정리합니다. 불필요한 지방을 수축시키고 근막층을 당겨주어, 어느 각도에서 보아도 완벽한 V라인을 디자인합니다.',
                                    list: ['이중턱 지방 감소', '날렵한 턱선 윤곽'],
                                },
                                {
                                    num: '04',
                                    title: 'Neck Line',
                                    sub: 'Neck & Decollete',
                                    desc: '나이테처럼 깊어진 목주름을 개선합니다. 얼굴 리프팅과 함께 진행하여 경계 없는 우아함을 완성합니다.',
                                    list: [] as string[],
                                },
                            ].map((zone) => (
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
                                <span className="block text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-6 reveal-text">The Ritual</span>
                                <h2 className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl leading-tight mb-8 reveal-text">
                                    Steps to <br />
                                    <span className="text-[var(--hm-gold)] italic font-[family-name:var(--font-philo)]">Perfection</span>
                                </h2>
                                <p className="text-white/60 text-lg leading-relaxed max-w-sm mb-12 reveal-text delay-100">
                                    오마쥬의 시술 과정은 단순한 의료 행위가 아닙니다. 가장 편안하고 안전한 결과를 위한 당신만의 의식입니다.
                                </p>
                                <div className="rounded-lg overflow-hidden border border-white/10 relative group reveal-text delay-200">
                                    <img src={IMG.processMap} alt="Ultherapy Process Step 1-8" className="w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-10 lg:pt-0">
                            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-white/10 hidden lg:block" />
                            <div className="space-y-0">
                                {[
                                    {
                                        step: '01',
                                        title: '맞춤 상담',
                                        sub: 'Consultation',
                                        desc: '3D 얼굴 분석기를 통해 골격, 지방 분포, 비대칭을 정밀 진단하고 개인별 맞춤 샷 수와 디자인을 설계합니다.',
                                    },
                                    {
                                        step: '02-03',
                                        title: '클렌징 & 사진촬영',
                                        sub: 'Preparation',
                                        desc: '프라이빗 룸에서 편안하게 딥 클렌징을 진행한 후, 시술 전후 비교를 위한 정밀 사진 촬영을 진행합니다.',
                                    },
                                    {
                                        step: '04',
                                        title: '3단계 통증 케어',
                                        sub: 'Anesthesia',
                                        desc: '오마쥬만의 트리플 마취 시스템으로 통증을 최소화합니다. 아프지 않은 울쎄라를 경험해보세요.',
                                        highlight: true,
                                    },
                                    {
                                        step: '05-06',
                                        title: '초음파 젤 도포 & 시술',
                                        sub: 'Procedure',
                                        desc: '전용 초음파 젤을 도포 후, 실시간 모니터링을 통해 정해진 샷 수를 정확한 타겟층에 조사합니다.',
                                    },
                                    {
                                        step: '07',
                                        title: '진정 관리 & 마무리',
                                        sub: 'After Care',
                                        desc: '자극받은 피부를 위해 LDM 물방울 리프팅 또는 크라이오 진정 관리로 붉은 기와 열감을 빠르게 진정시킵니다.',
                                    },
                                    {
                                        step: '08',
                                        title: '정품 인증서 발급',
                                        sub: 'Certificate',
                                        desc: '시술이 끝난 후 사용된 샷 수와 팁의 일련번호가 적힌 정품 인증서를 발급해 드리며, 정품 확인 앱 사용법을 안내해 드립니다.',
                                    },
                                ].map((item) => (
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
                        <span className="text-[var(--hm-gold)] text-xs tracking-[0.3em] uppercase mb-4 block">Q&A Advisory</span>
                        <h2 className="font-[family-name:var(--font-kr-serif)] text-3xl lg:text-4xl text-[var(--hm-black)]">자주 묻는 질문</h2>
                    </div>
                    <div className="border-t border-[var(--hm-black)]">
                        {[
                            {
                                q: 'Q. 시술 효과는 언제부터 나타나나요?',
                                a: '시술 직후 즉각적인 타이트닝 효과를 느낄 수 있으나, 콜라겐 재생이 본격화되는 1개월 후부터 효과가 더욱 뚜렷해집니다. 개인의 피부 상태에 따라 다르지만, 평균적으로 1년에서 1년 6개월 정도 효과가 유지됩니다.',
                            },
                            {
                                q: 'Q. 통증이 심한가요?',
                                a: '개인차가 있으나, 오마쥬 클리닉만의 3단계 마취 시스템(연고, 국소, 진통제)을 통해 통증을 최소화했습니다. 대부분의 고객님께서 "생각보다 참을 만했다"고 말씀하시니 크게 걱정하지 않으셔도 됩니다.',
                            },
                            {
                                q: 'Q. 일상생활은 바로 가능한가요?',
                                a: '네, 울쎄라는 피부 표면(상피)에 손상을 주지 않는 비침습 시술입니다. 시술 직후 세안 및 메이크업이 가능하며, 약간의 붉은 기나 붓기는 수 시간 내 자연스럽게 사라집니다.',
                            },
                            {
                                q: 'Q. 써마지와 울쎄라의 차이점은 무엇인가요?',
                                a: "울쎄라는 근막층(SMAS)을 수축시켜 처진 살을 끌어올리는(Lifting) 데 효과적이며, 써마지는 진피층의 콜라겐을 재생시켜 피부를 쫀쫀하게 조여주는(Tightening) 데 효과적입니다. 두 가지 고민이 복합적이라면 '울써마지' 병행 시술을 추천해 드립니다.",
                            },
                        ].map((faq) => (
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
                            <span className="text-[var(--hm-gold)] text-xs tracking-[0.4em] uppercase mb-8 block">Private Booking</span>
                            <h2 className="font-[family-name:var(--font-display)] text-6xl lg:text-7xl leading-tight mb-10">
                                Begin Your <br />
                                <span className="text-[var(--hm-gold)] italic font-[family-name:var(--font-philo)]">Journey</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md break-keep">
                                오마쥬의 모든 시술은 100% 예약제로 운영됩니다.
                                <br />
                                아래 양식을 남겨주시면, 전담 컨시어지가 가장 편안한 시간대에 연락드리겠습니다.
                            </p>
                            <div className="space-y-6 text-sm text-white/40 font-light pl-2 border-l border-[var(--hm-gold)]/20">
                                <p className="flex items-center gap-4">
                                    <span className="w-4 text-[var(--hm-gold)]">📍</span> {CLINIC_ADDRESS_KR}
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="w-4 text-[var(--hm-gold)]">📞</span> 02-543-4842
                                </p>
                                <p className="flex items-center gap-4">
                                    <span className="w-4 text-[var(--hm-gold)]">🕐</span> Mon - Fri : 10:00 - 20:00
                                </p>
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-10 lg:p-16 border border-white/10 reveal-text delay-200 shadow-2xl">
                            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="성함을 입력해주세요"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors placeholder-white/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Contact</label>
                                    <input
                                        type="tel"
                                        placeholder="연락처를 입력해주세요"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors placeholder-white/30"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-[var(--hm-gold)] tracking-widest uppercase ml-1">Inquiry</label>
                                    <select className="w-full bg-transparent border-b border-white/20 py-4 text-xl text-white focus:border-[var(--hm-gold)] outline-none transition-colors cursor-pointer appearance-none rounded-none">
                                        <option value="">관심 시술 선택 (Ultherapy)</option>
                                        <option value="ulthera">울쎄라 리프팅</option>
                                        <option value="ulthermage">울써마지 (울쎄라+써마지)</option>
                                        <option value="consult">기타 안티에이징 상담</option>
                                    </select>
                                </div>
                                <div className="pt-8">
                                    <Link
                                        href="/#curation"
                                        className="inline-flex items-center justify-center w-full py-5 border border-white/30 text-white hover:bg-white hover:text-[var(--hm-black)] hover:border-white transition-all duration-500"
                                    >
                                        REQUEST CONSULTATION
                                    </Link>
                                </div>
                                <p className="text-[10px] text-white/30 text-center leading-relaxed">
                                    * 보내주신 정보는 상담 예약 목적으로만 활용되며,
                                    <br />
                                    개인정보보호법에 따라 안전하게 관리됩니다.
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
                                <strong>오마쥬 의원</strong> | 대표원장: {CLINIC_DIRECTOR_NAME_KR}
                                <br />
                                사업자등록번호: 123-45-67890 | 의료기관개설신고증: 제 2023-서울강남-0000호
                                <br />
                                {CLINIC_ADDRESS_KR}
                            </p>
                            <p className="text-[10px] text-white/30">※ 시술 후 개인에 따라 멍, 붓기, 통증 등이 발생할 수 있습니다.</p>
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
