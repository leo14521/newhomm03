"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const RECOVERY_PROGRAMS = [
  {
    title: "줄기세포 재생",
    sub: "STEM CELL REGENERATION",
    description: "자체 지방 유래 줄기세포를 활용한 피부 재생 프로그램으로 콜라겐과 엘라스틴 생성을 촉진합니다.",
  },
  {
    title: "프리미엄 스킨부스터",
    sub: "PREMIUM SKIN BOOSTER",
    description: "고농도 영양 성분을 피부 깊숙이 전달하여 피부 장벽을 강화하고 수분을 공급합니다.",
  },
  {
    title: "레이저 재생",
    sub: "LASER REGENERATION",
    description: "비침습 레이저로 피부 재생을 촉진하고 모공과 잔주름을 개선합니다.",
  },
  {
    title: "종합 관리",
    sub: "COMPREHENSIVE CARE",
    description: "개인의 피부 상태에 맞춘 맞춤형 재생 프로그램으로 최적의 결과를 도출합니다.",
  },
];

const RECOMMEND = [
  "시술·레이저 후 붉은 기·건조·각질이 오래 가시는 분",
  "피부 장벽이 약해진 느낌이 들어 ‘회복 전용’ 케어를 원하시는 분",
  "탄력·모공·톤을 한 번에 끌어올리기보다 단계적 재생을 선호하시는 분",
  "바쁜 일정 속에서도 큰 다운타임 없이 컨디션을 끌어올리고 싶은 분",
];

const FLOW = [
  "피부 진단(상태·민감도·최근 시술) 후 회복 목표에 맞춰 프로그램을 조합합니다.",
  "선택한 시술(부스터·레이저·관리 등)을 일정 간격으로 진행하며 반응을 기록합니다.",
  "홈케어·자외선·자극 최소화 지침을 안내해 드리며, 필요 시 간격·강도를 조정합니다.",
  "코스 중간·종료 시점에 피부 지표와 만족도를 함께 확인합니다.",
];

export default function RecoveryView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Recovery"
        titleKr="리커버리"
        description="피부 재생과 회복을 위한 종합 케어 프로그램. 줄기세포 재생, 프리미엄 스킨부스터, 레이저 재생을 통해 피부의 자연스러운 재생 능력을 촉진합니다."
        imageIndex={0}
      />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            About Recovery
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            리커버리 프로그램이란?
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            <p>
              리커버리(Recovery)는 단일 시술이 아니라 <strong className="font-medium text-[#111]">피부가 스스로 회복·재생할 시간과 자극</strong>을
              설계해 주는 <strong className="font-medium text-[#111]">통합 케어</strong>에 가깝습니다. 시술 직후 붉은 기, 건조, 각질 들뜸 등이
              길어질 때 ‘한 방에 해결’보다 <strong className="font-medium text-[#111]">장벽 회복 → 영양 공급 → 질감 개선</strong> 순으로 가는 경우가 많습니다.
            </p>
            <p>
              오마쥬에서는 줄기세포·고급 부스터·저자극 레이저 등을 <strong className="font-medium text-[#111]">피부 타입과 시기</strong>에 맞게 배치합니다.
              같은 장비라도 출력·간격·병합 여부를 달리해 과자극을 피합니다.
            </p>
            <p>
              이미 다른 클리닉에서 시술을 받으신 분도, <strong className="font-medium text-[#111]">현재 피부 컨디션만 가지고 오셔도</strong> 다음 스텝을
              정리해 드립니다. ‘당장 화장이 먹지 않는다’는 고민부터 시작해도 좋습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            HOMMAGE Solution
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">리커버리</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RECOVERY_PROGRAMS.map((item, i) => (
              <li
                key={i}
                className="group relative flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-6 pl-8 transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
              >
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 transition-opacity group-hover:opacity-80" aria-hidden />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">For You</p>
          <h3 className="font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.4vw,26px)] text-[#111]">이런 분께 추천합니다</h3>
          <ul className="mt-8 space-y-3 text-[15px] leading-[1.75] text-[#555]">
            {RECOMMEND.map((t) => (
              <li key={t} className="flex gap-3 border-b border-[#eee] pb-3 last:border-0">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--hip-accent)]" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative bg-[#faf9f8] px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px]">
          <p className="mb-3 font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">Flow</p>
          <h3 className="font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.4vw,26px)] text-[#111]">프로그램 흐름 · 유의사항</h3>
          <ol className="mt-8 space-y-4 text-[15px] leading-[1.8] text-[#555]">
            {FLOW.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#111] font-[family-name:var(--font-display)] text-[12px] text-white">
                  {i + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-[13px] leading-relaxed text-[#888]">
            * 활동성 피부 질환·특정 약물 복용 시 일부 시술이 제한될 수 있습니다. 일광·사우나 등은 시술 직후 지침을 꼭 지켜 주세요.
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">리커버리 상담</p>
          <p className="mt-2 text-[14px] text-[#999]">오마쥬 클리닉이 1:1로 맞춤 설계해 드립니다.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              시그니처 상담 문의
            </Link>
            <Link
              href="/signature/stem-cell"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              줄기세포 시그니처 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
