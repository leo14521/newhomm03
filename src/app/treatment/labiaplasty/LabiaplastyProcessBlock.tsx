"use client";

import { LABIAPLASTY_PROCESS } from "@/config/labiaplastyPage";

function StepConnector() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center text-[var(--accent-terracotta-dark)]" aria-hidden>
      <svg className="h-8 w-8 sm:h-9" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M14 12v12l8-6-8-6z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ProcessStepCard({ item }: { item: (typeof LABIAPLASTY_PROCESS)[number] }) {
  return (
    <article className="min-w-[160px] max-w-[240px] flex-1 overflow-hidden rounded-sm border border-[var(--border-page)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-soft)]">
      <div
        className="relative flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br from-[var(--bg-page)] via-[var(--hip-bg-deep)] to-[var(--bg-card)]"
        aria-hidden
      >
        <span className="font-[family-name:var(--font-en-display)] text-[clamp(28px,6vw,40px)] font-light text-[var(--text-primary)]/25">
          {item.step}
        </span>
      </div>
      <div className="p-4">
        <span className="mb-1 block font-[family-name:var(--font-en-display)] text-[11px] tracking-[0.2em] text-[var(--accent-terracotta-dark)]">
          STEP {item.step}
        </span>
        <h4 className="font-[family-name:var(--font-heading-kr)] text-[16px] font-medium tracking-[0.02em] text-[var(--text-primary)]">{item.label}</h4>
        <p className="mt-1 text-[12px] leading-relaxed text-[var(--text-secondary)]">{item.sub}</p>
      </div>
    </article>
  );
}

/** 소음순 수술 과정 — 이미지 없이 단계 카드만 표시 */
export function LabiaplastyProcessBlock() {
  const topSteps = LABIAPLASTY_PROCESS.slice(0, 3);
  const bottomSteps = LABIAPLASTY_PROCESS.slice(3, 5);

  return (
    <section className="section-block border-t border-[var(--border-page)] bg-[var(--bg-page)]">
      <div className="mx-auto max-w-[1000px]">
        <p className="mb-2 text-center font-[family-name:var(--font-en-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--text-secondary)]">Process</p>
        <h3 className="mb-4 text-center font-[family-name:var(--font-kr-heading)] text-[clamp(22px,2.8vw,28px)] font-medium text-[var(--text-primary)]">소음순 수술 과정</h3>
        <p className="mb-14 text-center text-[14px] text-[var(--text-secondary)]">정밀한 설계부터 봉합까지 단계별로 진행됩니다.</p>

        <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-4">
          {topSteps.map((item, i) => (
            <div key={item.step} className="flex items-center gap-2 sm:gap-3">
              <ProcessStepCard item={item} />
              {i < topSteps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-stretch justify-center gap-3 sm:gap-4 md:mt-8">
          {bottomSteps.map((item, i) => (
            <div key={item.step} className="flex items-center gap-2 sm:gap-3">
              <ProcessStepCard item={item} />
              {i < bottomSteps.length - 1 && <StepConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
