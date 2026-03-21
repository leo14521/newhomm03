"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const FEATURES = [
  {
    title: "PDO 재질",
    sub: "PDO MATERIAL",
    description: "안전한 PDO 재질로 만들어져 인체에 무해하며 자연스럽게 흡수됩니다.",
  },
  {
    title: "높은 고정력",
    sub: "STRONG FIXATION",
    description: "돌기 구조로 높은 고정력을 제공하여 효과적인 리프팅을 구현합니다.",
  },
  {
    title: "콜라겐 생성",
    sub: "COLLAGEN PRODUCTION",
    description: "실이 흡수되는 과정에서 콜라겐 생성을 촉진하여 지속적인 효과를 제공합니다.",
  },
  {
    title: "빠른 회복",
    sub: "FAST RECOVERY",
    description: "비수술 시술로 회복 기간이 짧고 일상생활에 지장이 없습니다.",
  },
];

const RECOMMEND = [
  "V라인·볼·팔자 라인 등 얼굴 처짐을 실로 개선하고 싶은 분",
  "절개 없이 당일 일상 복귀에 가까운 리프팅을 원하시는 분",
  "피부 탄력과 윤곽을 동시에 다듬고 싶은 분",
  "이전 실리프팅 경험은 있으나 유지력·고정감을 높이고 싶은 분",
];

const FLOW = [
  "상담 시 처짐 방향·피부 두께·원하는 라인을 반영해 실의 배치와 수를 설계합니다.",
  "국소 마취 후 설계된 경로로 민트 실을 삽입·고정합니다.",
  "시술 직후 당김감·경미한 붓기가 있을 수 있으며 멍은 며칠 내 완화되는 경우가 많습니다.",
  "실 흡수와 콜라겐 재생이 진행되므로, 경과에 맞춘 경과 관리를 안내해 드립니다.",
];

export default function MintThreadView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Mint Thread"
        titleKr="민트 실"
        description="PDO 재질의 안전하고 효과적인 실리프팅 시술. 돌기 구조로 높은 고정력을 제공하며 콜라겐 생성을 촉진합니다."
        imageIndex={2}
      />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            About Mint
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            민트 실리프팅이란?
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            <p>
              민트(MINT) 실은 <strong className="font-medium text-[#111]">360° 입체 돌기</strong>가 박혀 있는 PDO 실로,
              조직과의 접촉 면적이 넓어 일반 매끈 실에 비해 <strong className="font-medium text-[#111]">당김·고정력</strong>이
              뛰어난 것이 특징입니다. 중안면·턱선·이중턱 등 처짐이 뚜렷한 부위에 자주 활용됩니다.
            </p>
            <p>
              실은 시간이 지나며 흡수되면서 진피를 자극, <strong className="font-medium text-[#111]">콜라겐 리모델링</strong>을
              유도합니다. 시술 직후의 당김뿐 아니라 실이 사라진 이후에도 피부결이 조여진 느낌이 이어지는 경우가 많습니다.
            </p>
            <p>
              오마쥬에서는 표정 근육 움직임을 고려해 <strong className="font-medium text-[#111]">과도한 당김 없이 자연스러운 라인</strong>이
              나오도록 벡터를 조정합니다. 다른 에너지 기기 리프팅과의 병합 여부도 상태에 따라 제안드립니다.
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
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">민트 실</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((item, i) => (
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
          <h3 className="font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.4vw,26px)] text-[#111]">시술 흐름 · 유의사항</h3>
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
            * 멍·붓기·감각 이상 등은 대부분 일시적입니다. 켈로이드 체질·혈전 위험·특정 약물 복용 시 시술 제한이 있을 수 있으니
            상담 시 알려 주세요.
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">민트 실 상담</p>
          <p className="mt-2 text-[14px] text-[#999]">오마쥬 클리닉이 1:1로 맞춤 설계해 드립니다.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              시그니처 상담 문의
            </Link>
            <Link
              href="/signature/lifting"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              리프팅 전체 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
