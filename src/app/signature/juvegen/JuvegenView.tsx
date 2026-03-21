"use client";

import Link from "next/link";
import { useState } from "react";

const TAGS = ["#자가진피재생술", "#새살이차오르는", "#쥬브젠", "#함몰흉터", "#깊은흉터", "#깊은주름"];

const EFFECTS = [
  { title: "주름·흉터 개선", en: "Wrinkle & Scar" },
  { title: "콜라겐 재생", en: "Collagen" },
  { title: "비교적 낮은 통증", en: "Low Discomfort" },
  { title: "자연스러운 효과", en: "Natural Result" },
];

const DEVICE_FEATURES = [
  {
    title: "기체와 액체를 하나의 주사기로",
    desc: "듀얼 챔버 시린지를 사용하여 기체와 액체를 하나의 주사 장치로 주입합니다. 동일한 부위에 두 개의 약물을 반복적으로 주입할 수 있습니다.",
  },
  {
    title: "극소량을 단속적으로 (0.001cc)",
    desc: "주입되는 약액의 양을 0.001cc로 조절하여 깊은 주름부터 함몰 흉터까지 다양한 시술이 가능합니다.",
  },
  {
    title: "자동화 기술로 균등한 결과",
    desc: "모니터를 통한 주사량 설정 및 자동 주입으로 보다 손쉽고 정교하게 시술이 가능합니다.",
  },
];

const RECOMMEND = [
  "깊은 흉터, 깊은 주름이 고민이신 분",
  "레이저로도 개선이 잘되지 않으셨던 분",
  "지속적으로 새살이 생성되길 원하시는 분",
  "1회 시술로 빠른 효과를 기대하시는 분",
  "통증이 무서워 시술이 두려우신 분",
  "자연스러운 오랜 시술 효과를 유지하고 싶으신 분",
];

const QNA = [
  {
    q: "쥬브젠 자가진피재생술과 쥬베룩의 차이점이 뭔가요?",
    a: "쥬베룩은 콜라겐 스킨부스터의 종류이며, 피부 탄력, 잔주름, 피부결 등 노화된 피부 개선에 효과적입니다. 반면, 쥬브젠 자가진피재생술은 수술로도 해결되지 않는 깊은 주름에 콜라겐 섬유 조직을 생성시켜 깊었던 주름이나 흉터 개선에 도움이 되는 시술입니다.",
  },
  {
    q: "흉터가 생기고 나서 언제부터 쥬브젠 치료가 가능한가요?",
    a: "흉터가 다 아물고 나서 치료가 가능합니다. 패인 흉터가 아물고 새살이 차오르는 데 시간이 걸리기 때문에, 상처 발생 후 6개월 이전에는 시술을 권해드리고 있지 않습니다.",
  },
  {
    q: "시술 진행 시 마취를 하나요?",
    a: "마취는 하지 않습니다. 매우 얇은 특수 주사기를 사용하여 시술이 진행되므로 통증 부담이 적습니다.",
  },
];

const CAUTIONS = [
  "시술 후 2일 뒤 소독을 받은 이후부터 바로 세안과 화장이 가능합니다.",
  "시술 후 과음, 사우나/찜질방 출입, 열탕 목욕, 격한 운동은 피해 주는 것이 좋습니다.",
  "시술 후 건조함이 동반될 수 있으므로 보습제를 자주 사용해 주시고, 외출 시 선크림을 반드시 바르는 것이 좋습니다.",
  "기타 불편한 사항이 있을 경우 지체 없이 오마쥬클리닉으로 연락 주시기 바랍니다.",
];

export default function JuvegenView() {
  const [openQna, setOpenQna] = useState<number | null>(null);

  return (
    <main
      data-page="juvegen"
      className="min-h-screen overflow-x-hidden bg-[var(--bg-page)] pt-[var(--header-height)] text-[var(--text-primary)] lg:pt-[var(--header-h)]"
    >
      {/* ========== Section 1: Hero ========== */}
      <section
        id="intro"
        className="relative flex min-h-[100vh] flex-col justify-end overflow-hidden bg-[var(--bg-card)] pb-24 pt-28 lg:flex-row lg:items-center lg:justify-between lg:pb-32 lg:pt-32 lg:px-[var(--pad-global)]"
      >
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:grid lg:grid-cols-12 lg:gap-16 lg:px-0">
          <div className="lg:col-span-7">
            <p className="mb-6 font-[family-name:var(--font-en-display)] text-[11px] uppercase tracking-[0.25em] text-[var(--text-secondary)]" data-reveal-line>
              Autologous Dermis Regeneration
            </p>
            <h1 className="mb-6 font-[family-name:var(--font-kr-heading)] text-[clamp(36px,7vw,72px)] font-medium leading-[1.15] tracking-tight">
              <span className="block overflow-hidden">
                <span data-reveal-line className="block">피부 속부터 채워주는</span>
              </span>
              <span className="block overflow-hidden">
                <span data-reveal-line className="block">자가 진피 재생술</span>
              </span>
              <span className="mt-2 block overflow-hidden">
                <span data-reveal-line className="inline-block font-[family-name:var(--font-en-display)] italic text-[var(--text-primary)]">&apos;JUVGEN(쥬브젠)&apos;</span>
              </span>
            </h1>
            <p data-reveal-sub className="max-w-lg border-l-2 border-[var(--text-primary)]/20 pl-6 text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              의료진 1:1 개인상담 진행 후
              <br />
              맞춤 컨설팅이 진행됩니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3" data-reveal-tag>
              {TAGS.map((tag, i) => (
                <span key={i} className="rounded-full border border-[var(--text-primary)]/20 bg-[var(--bg-page)] px-4 py-2 text-[12px] text-[var(--text-secondary)]" data-reveal-tag>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-6">
              <Link href="/#curation" className="inline-flex items-center gap-2 rounded-sm border border-[var(--text-primary)] bg-[var(--text-primary)] px-8 py-4 text-[13px] font-medium tracking-[0.12em] text-white transition-colors hover:bg-[var(--text-primary)]/90">
                프라이빗 상담 예약
                <span aria-hidden>→</span>
              </Link>
              <a href="#effects" className="text-[13px] font-medium tracking-wider text-[var(--text-secondary)] underline underline-offset-4 hover:text-[var(--text-primary)]">
                쥬브젠 효과 보기
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-[45vh] min-h-[320px] w-full overflow-hidden lg:col-span-5 lg:mt-0 lg:h-[70vh]">
            <div className="absolute inset-0 -top-[10%] h-[120%] w-full">
              <img
                src="/images/sub/play1_1.jpg"
                alt="쥬브젠 자가진피재생술"
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x600?text=JUVGEN";
                }}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-card)] to-transparent pointer-events-none" aria-hidden />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">Scroll</span>
          <div className="h-12 w-px overflow-hidden rounded-full bg-[var(--text-primary)]/20">
            <div className="h-1/2 w-full rounded-full bg-[var(--text-primary)]/50" style={{ animation: "movedown 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* Marquee tags */}
      <div className="relative z-20 overflow-hidden border-y border-[var(--border-page)] bg-[var(--text-primary)] py-5">
        <div
          className="flex w-max gap-16 whitespace-nowrap text-[var(--bg-page)]"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {[...TAGS, ...TAGS].map((tag, i) => (
            <span key={i} className="font-[family-name:var(--font-en-display)] text-[clamp(18px,2.5vw,28px)] italic opacity-90">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ========== Section 2: 4가지 주요 효과 ========== */}
      <section id="effects" className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1200px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">Key Effects</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,42px)]">쥬브젠의 4가지 주요 효과</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EFFECTS.map((item, i) => (
              <div
                key={i}
                data-sec-card
                className="group flex flex-col items-center rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-8 text-center transition-colors hover:border-[var(--text-primary)]/30"
              >
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--text-primary)]/8 font-[family-name:var(--font-en-display)] text-[18px] text-[var(--text-primary)] transition-colors group-hover:bg-[var(--text-primary)]/15">
                  {i + 1}
                </span>
                <p className="font-[family-name:var(--font-en-display)] text-[11px] uppercase tracking-wider text-[var(--text-secondary)]">{item.en}</p>
                <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Section 3: 쥬브젠이란? ========== */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">What is it?</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">자가진피재생술 쥬브젠이란?</h2>
          </div>
          <div data-sec-card className="space-y-6 text-[15px] leading-[1.9] text-[var(--text-secondary)]">
            <p>
              쥬브젠은 전용 주사 장치로 약 <strong className="text-[var(--text-primary)]">0.001cc~0.003cc 극미량</strong>의 히알루론산을 이산화탄소 가스와 교대로 같은 피부 위치에 주입하여, 물리적, 화학적, 생물학적 반응으로 다량의 콜라겐 생성을 유도합니다.
            </p>
            <p>이 작용으로 피부의 새살이 돋아나 주름과 상처가 채워지는 효과를 기대할 수 있습니다.</p>
            <p className="pt-4 font-medium text-[var(--text-primary)]">시술 시간: 20~30분 소요</p>
          </div>
        </div>
      </section>

      {/* ========== Section 4: 오마쥬클리닉 전용 의료기기 ========== */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1000px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">Medical Device</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">오마쥬클리닉 쥬브젠 전용 의료기기의 특별함</h2>
            <p className="mt-4 text-[15px] text-[var(--text-secondary)]">오마쥬클리닉에서는 쥬브젠 자가 진피 재생술 전용 의료기기를 사용합니다.</p>
          </div>
          <ul className="space-y-8">
            {DEVICE_FEATURES.map((item, i) => (
              <li key={i} data-sec-card className="flex flex-col gap-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-8 lg:flex-row lg:items-start lg:gap-8">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] font-[family-name:var(--font-en-display)] text-[18px] font-medium text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[18px] font-medium text-[var(--text-primary)]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.8] text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 5: 추천 ========== */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[1000px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">For You</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">쥬브젠, 이런 분께 추천합니다!</h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RECOMMEND.map((text, i) => (
              <li key={i} data-sec-card className="flex items-start gap-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] p-6">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 font-[family-name:var(--font-en-display)] text-[14px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 6: Q&A ========== */}
      <section className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[720px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">FAQ</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">시술 Q&A</h2>
          </div>
          <ul className="space-y-3">
            {QNA.map((item, i) => (
              <li key={i} data-sec-card className="overflow-hidden rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)]">
                <button
                  type="button"
                  onClick={() => setOpenQna(openQna === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-page)]"
                >
                  <span className="text-[15px]">Q. {item.q}</span>
                  <span className={`flex-shrink-0 text-[var(--text-secondary)] transition-transform duration-300 ${openQna === i ? "rotate-180" : ""}`} aria-hidden>▼</span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: openQna === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[var(--border-page)] px-6 py-4 text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                      A. {item.a}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== Section 7: 주의사항 ========== */}
      <section className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[720px]">
          <div data-sec-head className="sec-head text-center">
            <span className="sec-label block">Cautions</span>
            <h2 className="sec-title mt-2 text-[clamp(26px,3.5vw,38px)]">시술 후 주의사항</h2>
            <p className="mt-4 text-[15px] text-[var(--text-secondary)]">관리만큼이나 셀프케어도 효과에 큰 영향을 줍니다. 주의사항을 꼼꼼히 읽은 후, 잘 지켜주세요.</p>
          </div>
          <ul className="space-y-4">
            {CAUTIONS.map((text, i) => (
              <li key={i} data-sec-card className="flex items-start gap-4 rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--text-primary)]/40" aria-hidden />
                <p className="text-[15px] leading-[1.8] text-[var(--text-secondary)]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="section-block section-dark">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">쥬브젠 자가진피재생술 상담</p>
          <p className="mt-2 text-[14px] text-white/60">의료진 1:1 맞춤 컨설팅으로 설계해 드립니다.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/#curation" className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white">
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
