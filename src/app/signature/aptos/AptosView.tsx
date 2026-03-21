"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const FEATURES = [
  {
    title: "나선형 돌기",
    sub: "HELICAL CUSP",
    description: "나선형 돌기 구조로 높은 고정력을 제공하여 효과적인 리프팅을 구현합니다.",
  },
  {
    title: "강력한 고정력",
    sub: "STRONG FIXATION",
    description: "나선형 구조로 조직에 강하게 고정되어 오래 지속되는 리프팅 효과를 제공합니다.",
  },
  {
    title: "자연스러운 흡수",
    sub: "NATURAL ABSORPTION",
    description: "PDO 재질로 자연스럽게 흡수되며 흡수 과정에서 콜라겐 생성을 촉진합니다.",
  },
  {
    title: "지속적인 효과",
    sub: "LONG-LASTING",
    description: "콜라겐 생성으로 실이 흡수된 후에도 지속적인 리프팅 효과를 제공합니다.",
  },
];

const RECOMMEND = [
  "얼굴·바디 라인이 처지고 탄력이 떨어져 실리프팅을 고려 중이신 분",
  "기존 단순 실 시술만으로는 당김이나 지속력이 아쉬웠던 분",
  "절개 없이 회복이 빠른 리프팅을 원하시는 분",
  "표정이 자연스럽게 유지되는 리프팅을 원하시는 분",
];

const FLOW = [
  "1:1 상담으로 처짐 정도·피부 두께·원하는 라인을 함께 설계합니다.",
  "국소 마취 후, 설계된 벡터에 따라 압토스 실을 정밀하게 배치합니다.",
  "시술 직후 가벼운 붓기·멍이 있을 수 있으며, 일상 복귀 시점은 개인차가 있습니다.",
  "흡수와 콜라겐 재생이 진행되는 동안 주기적인 경과 확인을 권장합니다.",
];

export default function AptosView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Aptos"
        titleKr="압토스"
        description="나선형 돌기 구조로 높은 고정력을 제공하는 프리미엄 실리프팅 시술. 조직에 강하게 고정되어 오래 지속되는 리프팅 효과를 제공합니다."
        imageIndex={0}
      />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            About Aptos
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            압토스 실리프팅이란?
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            <p>
              압토스(Aptos)는 <strong className="font-medium text-[#111]">나선형 돌기(Helical cusp)</strong>가 실 표면에 입체적으로 배치된
              PDO 실리프팅입니다. 매끈한 실에 비해 조직과의 마찰·고정력이 높아, 중력과 표정에 의해 쉽게 풀리기 쉬운 부위에도
              비교적 안정적인 당김을 기대할 수 있습니다.
            </p>
            <p>
              실은 시간이 지나며 자연스럽게 흡수되고, 그 과정에서 진피 층의 섬유아세포가 자극되어{" "}
              <strong className="font-medium text-[#111]">콜라겐·엘라스틴 재생</strong>이 유도됩니다. 즉, “실이 당겨 주는 효과”와
              “실이 사라진 뒤에도 남는 피부 탄력”을 함께 노리는 시술로 이해하시면 됩니다.
            </p>
            <p>
              오마쥬 클리닉에서는 얼굴 윤곽·팔자·이중턱·목 라인 등 부위별로 필요한 벡터와 실의 종류·수를 달리하여,
              <strong className="font-medium text-[#111]"> 과한 당김 없이 자연스러운 표정</strong>이 유지되도록 설계합니다.
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
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">압토스</span> 솔루션
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
            * 시술 가능 여부·회복 기간은 개인 건강 상태와 부위에 따라 다릅니다. 혈액응고 장애, 임신·수유 중, 특정 약물 복용 등은
            상담 시 반드시 알려 주세요.
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">압토스 상담</p>
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
