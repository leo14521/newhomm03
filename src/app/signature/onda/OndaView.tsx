"use client";

import Link from "next/link";
import { useState } from "react";

const TECH_STEPS = [
  {
    num: "01",
    title: "쿨웨이브 고주파 기술",
    desc: "온다는 쿨웨이브(Coolwaves) 고주파 기술을 사용하여 지방 세포를 선택적으로 분해합니다. 피부 표면은 보호하면서 깊은 곳의 지방층에만 에너지를 전달하여 안전하고 효과적인 바디 컨투어링을 제공합니다.",
    bullets: ["선택적 지방 분해", "피부 표면 보호", "비침습 시술"],
  },
];

const EFFECT_CARDS = [
  { title: "지방 분해", sub: "Fat Reduction", desc: "선택적 지방 분해로 원하는 부위의 지방을 효과적으로 감소시킵니다." },
  { title: "탄력 개선", sub: "Skin Tightening", desc: "콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다." },
  { title: "비침습 시술", sub: "Non-Invasive", desc: "수술 없이 고주파를 활용하여 안전하고 효과적인 바디 컨투어링을 제공합니다." },
];

const PROCESS_STEPS = [
  { step: "01", title: "맞춤 상담", sub: "Consultation", desc: "개인의 바디 상태와 목표를 정밀 진단하고 개인별 맞춤 시술 계획을 설계합니다." },
  { step: "02", title: "시술 준비", sub: "Preparation", desc: "시술 부위를 깨끗이 정리하고 전용 젤을 도포하여 최적의 시술 환경을 만듭니다." },
  { step: "03", title: "고주파 시술", sub: "Procedure", desc: "쿨웨이브 고주파 기술로 지방 세포를 분해하고 콜라겐 생성을 촉진합니다." },
  { step: "04", title: "진정 관리", sub: "After Care", desc: "시술 후 진정 관리로 피부를 보호하고 최적의 회복을 돕습니다." },
];

const FAQ_ITEMS = [
  {
    q: "시술 효과는 언제부터 나타나나요?",
    a: "시술 직후 즉각적인 효과를 느낄 수 있으나, 지방 분해와 콜라겐 재생이 본격화되는 2~4주 후부터 효과가 더욱 뚜렷해집니다. 개인의 바디 상태에 따라 다르지만, 평균적으로 3~6개월 정도 효과가 유지됩니다.",
  },
  {
    q: "통증이 있나요?",
    a: "온다는 비침습 시술로 통증이 거의 없습니다. 시술 중 따뜻한 느낌이나 약간의 따끔함을 느낄 수 있으나 대부분의 고객님께서 편안하게 시술을 받으실 수 있습니다.",
  },
  {
    q: "일상생활은 바로 가능한가요?",
    a: "네, 온다는 피부 표면에 손상을 주지 않는 비침습 시술입니다. 시술 직후 바로 일상생활이 가능하며, 운동이나 샤워도 시술 당일부터 가능합니다.",
  },
  {
    q: "어떤 부위에 시술이 가능한가요?",
    a: "복부, 허벅지, 팔뚝, 옆구리, 등, 엉덩이 등 다양한 부위에 시술이 가능합니다. 개인의 상태와 목표에 따라 맞춤형 시술 계획을 수립합니다.",
  },
];

export default function OndaView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main
      data-page="onda"
      className="min-h-screen overflow-x-hidden bg-[var(--bg-page)] pt-[var(--header-height)] text-[var(--text-primary)] lg:pt-[var(--header-h)]"
    >
      {/* Section nav — 데스크톱 */}
      <nav
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex"
        aria-label="섹션 바로가기"
      >
        {[
          { href: "#intro", label: "INTRO" },
          { href: "#technology", label: "TECH" },
          { href: "#process", label: "PROCESS" },
          { href: "#faq", label: "Q&A" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} className="group flex cursor-pointer items-center gap-3 text-[var(--text-primary)]">
            <span className="translate-x-2 text-[10px] font-[family-name:var(--font-en-title)] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
              {label}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-25 transition-all group-hover:scale-150 group-hover:opacity-100" />
          </Link>
        ))}
      </nav>

      {/* Hero */}
      <section
        id="intro"
        className="relative flex min-h-[100svh] items-center overflow-hidden bg-[var(--bg-card)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_20%,rgba(217,164,135,0.12),transparent)]" aria-hidden />
        <div className="absolute right-[12%] top-0 z-0 h-full w-px bg-[var(--border-page)]" aria-hidden />
        <div className="absolute bottom-0 left-[8%] z-0 h-1/2 w-px bg-[var(--border-page)]" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-[var(--pad-global)]">
          <div className="max-w-4xl">
            <p className="mb-6 font-[family-name:var(--font-en-display)] text-[11px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">
              Laser Treatment
            </p>

            <h1 className="mb-8 font-[family-name:var(--font-kr-heading)] text-[clamp(3.5rem,12vw,8.125rem)] font-medium leading-[0.92] tracking-tight">
              <span className="block">Onda</span>
              <span className="mt-1 flex flex-wrap items-baseline gap-3 lg:gap-6">
                <span className="font-[family-name:var(--font-en-display)] text-[clamp(1.5rem,5vw,3rem)] font-light italic text-[var(--accent-terracotta-dark)]">
                  by
                </span>
                <span className="font-[family-name:var(--font-en-display)] text-[clamp(2.5rem,8vw,5rem)] font-light tracking-wide">
                  Coolwaves
                </span>
              </span>
            </h1>

            <div className="max-w-xl border-l-2 border-[var(--accent-terracotta)]/35 pl-6">
              <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[17px]">
                <strong className="font-medium text-[var(--text-primary)]">오마쥬 온다</strong>는 고주파를 활용한 비침습 바디 컨투어링 시술입니다. 쿨웨이브 기술로 지방 세포를 분해하고 피부 탄력을 개선하여, 수술 없이 안전하고 효과적인 바디 라인을 만들어드립니다.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 md:gap-6">
              <Link
                href="/#curation"
                className="inline-flex items-center justify-center rounded-sm border border-[var(--text-primary)] bg-[var(--text-primary)] px-8 py-4 text-[13px] font-medium tracking-[0.12em] text-white transition-colors hover:bg-[var(--text-primary)]/90"
              >
                프라이빗 상담 예약
                <span aria-hidden className="ml-2">
                  →
                </span>
              </Link>
              <a
                href="#technology"
                className="text-[13px] font-medium tracking-wider text-[var(--text-secondary)] underline-offset-4 transition-colors hover:text-[var(--text-primary)] hover:underline"
              >
                기술 안내 보기
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="relative h-14 w-px overflow-hidden bg-[var(--border-page)]">
            <div className="absolute left-0 top-0 h-1/2 w-full animate-[movedown_2s_ease-in-out_infinite] bg-[var(--text-primary)]/40" />
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="border-b border-[var(--border-page)] bg-[var(--bg-page)] px-6 py-4 lg:px-[var(--pad-global)]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2 text-[13px] text-[var(--text-secondary)]">
          <Link href="/" className="transition-colors hover:text-[var(--text-primary)]">
            HOME
          </Link>
          <span aria-hidden>/</span>
          <Link href="/signature/lifting" className="transition-colors hover:text-[var(--text-primary)]">
            리프팅
          </Link>
          <span aria-hidden>/</span>
          <span className="font-medium text-[var(--text-primary)]">온다</span>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-[var(--border-page)] bg-[var(--text-primary)] py-10">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-20 whitespace-nowrap">
          {[0, 1].map((dup) =>
            ["HOMMAGE ONDA", "Coolwaves", "Body Contouring", "Non-Invasive"].map((t, i) => (
              <span
                key={`${dup}-${t}-${i}`}
                className={`font-[family-name:var(--font-en-display)] text-[clamp(2.5rem,8vw,5rem)] ${
                  i % 2 === 0 ? "text-white/[0.08]" : "italic text-[var(--hip-accent-light)]/90"
                }`}
              >
                {t}
              </span>
            )),
          )}
        </div>
      </div>

      {/* Technology */}
      <section id="technology" className="section-block bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[1000px]">
          <div className="sec-head text-center lg:text-left">
            <span className="sec-label">Core Technology</span>
            <h2 className="sec-title mt-3 text-[clamp(26px,4vw,40px)]">
              Coolwaves
              <span className="mt-1 block font-[family-name:var(--font-en-display)] text-[clamp(18px,2.5vw,24px)] font-light italic text-[var(--text-secondary)]">
                RF Technology
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--text-secondary)] break-keep lg:mx-0">
              고주파 에너지로 지방 세포를 분해하고 피부 탄력을 개선하는 비침습 바디 컨투어링입니다. 수술 없이 안전하게 바디 라인을 설계합니다.
            </p>
          </div>

          {TECH_STEPS.map((block) => (
            <div key={block.num} className="mt-14 border border-[var(--border-page)] bg-[var(--bg-card)] p-6 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                <span className="font-[family-name:var(--font-en-display)] text-[clamp(28px,4vw,40px)] font-light italic text-[var(--accent-terracotta-dark)]">
                  {block.num}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium text-[var(--text-primary)]">
                    {block.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.85] text-[var(--text-secondary)] break-keep">{block.desc}</p>
                  <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                    {block.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[14px] text-[var(--text-secondary)]">
                        <span className="text-[var(--accent-terracotta-dark)]" aria-hidden>
                          ·
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10">
            <p className="mb-6 font-[family-name:var(--font-en-display)] text-[12px] tracking-[0.2em] text-[var(--text-secondary)]">02 · Collagen</p>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.2vw,22px)] font-medium text-[var(--text-primary)]">콜라겐 생성 촉진</h3>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[var(--text-secondary)] break-keep">
              고주파 에너지가 피부 깊숙이 전달되면서 콜라겐 생성을 촉진하여 피부 탄력을 개선하고 처진 피부를 타이트하게 만듭니다.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {EFFECT_CARDS.map((item) => (
                <li
                  key={item.title}
                  className="border border-[var(--border-page)] bg-[var(--bg-page)] p-6 transition-[box-shadow,border-color] hover:border-[var(--accent-terracotta)]/30 hover:shadow-[var(--shadow-card)]"
                >
                  <p className="font-[family-name:var(--font-kr-heading)] text-[17px] font-medium text-[var(--text-primary)]">{item.title}</p>
                  <p className="mt-1 font-[family-name:var(--font-en-display)] text-[11px] tracking-wider text-[var(--accent-terracotta-dark)]">{item.sub}</p>
                  <p className="mt-4 border-t border-[var(--border-page)] pt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-block bg-[var(--text-primary)] text-white">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-14 text-center lg:mb-16 lg:text-left">
            <span className="sec-label text-white/50">The Process</span>
            <h2 className="mt-3 font-[family-name:var(--font-kr-heading)] text-[clamp(26px,4vw,36px)] font-medium tracking-tight text-white">
              시술 흐름
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/60 break-keep lg:mx-0">
              오마쥬 온다 시술은 편안함과 안전을 우선한 단계별 프로토콜로 진행됩니다.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[21px] top-3 bottom-3 w-px bg-white/15 md:left-6" aria-hidden />
            <ul className="space-y-0">
              {PROCESS_STEPS.map((item) => (
                <li key={item.step} className="relative flex gap-5 pb-12 last:pb-0 md:gap-8">
                  <div className="relative z-[1] flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/25 bg-[var(--text-primary)] font-[family-name:var(--font-en-display)] text-[13px] text-white md:h-12 md:w-12 md:text-[14px]">
                    {item.step}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-[family-name:var(--font-en-display)] text-[11px] tracking-[0.25em] text-[var(--hip-accent-light)]">STEP {item.step}</p>
                    <h3 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-white md:text-[19px]">
                      {item.title}
                      <span className="ml-2 text-[14px] font-normal text-white/45">{item.sub}</span>
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/55 break-keep">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-block bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center md:text-left">
            <span className="sec-label">Q&amp;A</span>
            <h2 className="sec-title mt-3 text-[clamp(22px,2.5vw,28px)]">자주 묻는 질문</h2>
          </div>
          <ul className="mt-10 space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const open = openFaq === idx;
              return (
                <li key={faq.q} className="overflow-hidden rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : idx)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[var(--bg-card)]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)] md:px-6 md:py-5"
                    aria-expanded={open}
                  >
                    <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] break-keep pr-2">{faq.q}</span>
                    <span
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border-page)] font-[family-name:var(--font-en-display)] text-[18px] leading-none text-[var(--accent-terracotta-dark)]"
                      aria-hidden
                    >
                      {open ? "−" : "+"}
                    </span>
                  </button>
                  {open && <div className="border-t border-[var(--border-page)] px-5 pb-5 pt-4 md:px-6"><p className="text-[14px] leading-[1.85] text-[var(--text-secondary)] break-keep">{faq.a}</p></div>}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-block section-dark">
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(17px,2.2vw,21px)] text-white/90">온다 바디 컨투어링, 1:1 맞춤 상담으로 시작하세요.</p>
          <p className="mt-3 text-[14px] text-white/55">예약 및 문의는 큐레이션 섹션에서 이어집니다.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-flex items-center justify-center rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
            >
              상담 예약
            </Link>
            <Link
              href="/signature/lifting"
              className="inline-flex items-center justify-center rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
            >
              리프팅 전체 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
