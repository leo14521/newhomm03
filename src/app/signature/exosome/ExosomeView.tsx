"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const FEATURES = [
  {
    title: "줄기세포 엑소좀",
    sub: "STEM CELL EXOSOME",
    description: "줄기세포에서 추출한 엑소좀은 세포 간 신호 전달 물질을 포함하여 피부 재생을 촉진합니다.",
  },
  {
    title: "항노화 효과",
    sub: "ANTI-AGING",
    description: "세포 노화를 억제하고 젊은 세포의 기능을 활성화하여 항노화 효과를 제공합니다.",
  },
  {
    title: "피부 재생",
    sub: "SKIN REGENERATION",
    description: "손상된 피부 세포를 복구하고 새로운 세포 생성을 촉진하여 피부를 재생시킵니다.",
  },
  {
    title: "콜라겐 생성",
    sub: "COLLAGEN PRODUCTION",
    description: "콜라겐과 엘라스틴 생성을 촉진하여 피부 탄력과 주름 개선에 효과적입니다.",
  },
];

const RECOMMEND = [
  "잔주름·건조·탄력 저하가 함께 신경 쓰이는 분",
  "레이저·필링 후 붉은 기·장벽 회복을 돕고 싶은 분",
  "일반 스킨부스터만으로는 만족도가 아쉬워 재생 케어를 찾는 분",
  "자연스러운 광채·피부 질 개선을 단기 시술로 보완하고 싶은 분",
];

const FLOW = [
  "피부 타입·민감도·최근 시술 이력을 확인한 뒤, 농도와 주입 층·부위를 정합니다.",
  "세안·마취 크림(필요 시) 후 미세 주입 또는 디바이스에 맞춰 도포·전달합니다.",
  "시술 직후 홍조·미세 부기가 있을 수 있으며 당일 가벼운 세안·메이크업은 지침에 따릅니다.",
  "수일 내 건조함이 느껴질 수 있어 보습·자외선 차단을 권장하며, 코스 형태로 반복 시 효과가 누적되는 경우가 많습니다.",
];

export default function ExosomeView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Exosome"
        titleKr="엑소좀"
        description="줄기세포에서 추출한 엑소좀을 활용한 차세대 스킨부스터. 세포 노화를 억제하고 피부 재생을 촉진합니다."
        imageIndex={1}
      />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            About Exosome
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            엑소좀 케어란?
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            <p>
              엑소좀은 세포가 분비하는 <strong className="font-medium text-[#111]">나노 크기의 소포</strong>로, 성장인자·단백질·RNA 등
              정보 물질을 다른 세포로 전달합니다. 줄기세포 배양에서 정제한 엑소좀을 피부에 도입하면{" "}
              <strong className="font-medium text-[#111]">진피 재생·탄력·수분 장벽</strong>에 긍정적인 변화를 기대하는 케이스가 많습니다.
            </p>
            <p>
              히알루론산 단일 성분과 달리 <strong className="font-medium text-[#111]">‘세포 간 대화’</strong>에 가까운 접근이라,
              잔주름·칙칙한 톤·거친 결을 동시에 다루고 싶을 때 스킨부스터 라인업으로 선택되기도 합니다.
            </p>
            <p>
              오마쥬에서는 제품 특성과 피부 상태에 맞춰 <strong className="font-medium text-[#111]">주입 깊이·횟수·병합 시술</strong>을 조정하고,
              민감 피부는 테스트 패치와 완만한 도입으로 부담을 줄입니다.
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
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">엑소좀</span> 솔루션
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
            * 면역 질환 활동기·임신 수유 중·특정 알레르기는 시술이 제한될 수 있습니다. 복용 중인 약물은 상담 시 함께 알려 주세요.
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">엑소좀 상담</p>
          <p className="mt-2 text-[14px] text-[#999]">오마쥬 클리닉이 1:1로 맞춤 설계해 드립니다.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              시그니처 상담 문의
            </Link>
            <Link
              href="/signature/skin-booster"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              스킨부스터 전시 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
