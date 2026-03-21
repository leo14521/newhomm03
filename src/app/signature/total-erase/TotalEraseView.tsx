"use client";

import Link from "next/link";
import { TotalEraseHero } from "./TotalEraseHero";
import { WrinkleEraseBlock } from "./WrinkleEraseBlock";
import { FaceDiagramBlock } from "./FaceDiagramBlock";

const SOLUTION_ITEMS = [
  { title: "쥬브젠 자가진피 재생술", sub: "JUVGEN", desc: "물리적·화학적·생물학적 자극이 동시에 같은 장소에 미세한 크기로 많이 일어나게 하여 다량의 콜라겐 조직이 생기도록 유도하여 피부를 재생합니다. 오마쥬 클리닉에서는 균일한 시술로 자연스러운 결과를 추구합니다." },
  { title: "실리프팅", sub: "THREAD LIFTING", desc: "잼버실, 테스넷, 실루엣 소프트, 민트실 리프팅을 사용하여 콜라겐 생성을 촉진시켜 피부 주름과 얼굴 윤곽을 동시에 개선합니다. 녹는실을 사용하여 이물감이 적으며 일상 복귀가 빠릅니다." },
  { title: "필러", sub: "FILLER", desc: "필러 시술은 의료진의 미적 감각과 섬세함이 가장 많이 반영되는 시술입니다. 오마쥬 클리닉에서는 개인 맞춤 디자인으로 고유의 이미지와 조화롭게 볼륨을 채우고, 표정을 고려하여 자연스럽게 시술합니다." },
  { title: "콜라겐 주사", sub: "INJECTION OF COLLAGEN", desc: "쥬베룩볼륨, 울트라콜100, 콜라움, 레디어스를 사용하여 섬유아세포를 자극하고 콜라겐 생성을 촉진합니다. 주름 완화와 탄력 증가를 목표로 합니다." },
  { title: "레이저", sub: "LASER", desc: "울쎄라피 프라임, 온다, 튠페이스, 코레지셀핏 등을 사용하여 잔주름과 탄력을 개선합니다. 비침습적 방식으로 통증을 최소화한 리프팅 시술입니다." },
  { title: "줄기세포주사", sub: "STEM CELL INJECTION", desc: "자가 줄기세포를 이용하여 피부 세포를 활성화하고, 콜라겐 합성 및 손상된 조직을 복구하여 주름을 개선하며 피부 두께와 탄력을 강화합니다." },
  { title: "보톡스", sub: "BOTOX", desc: "보툴리늄 톡신이 주성분인 의약품으로 시술 부위 근육의 수축을 억제합니다. 잔주름 예방과 근육 볼륨 조절 효과를 기대할 수 있으며, 지속적인 효과를 원하시면 3~4개월 이내 재시술을 권장합니다." },
];

export default function TotalEraseView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <TotalEraseHero />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Total Erase
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            쥬브젠 자가진피 재생술, 실리프팅, 필러, 콜라겐 주사, 레이저, 줄기세포주사, 보톡스 등을 이용한
            오마쥬 클리닉만의 노하우로 노화의 상징인 주름을 탁월하게 개선합니다.
          </p>
        </div>
      </section>

      <WrinkleEraseBlock />
      <FaceDiagramBlock />

      <section className="hip-grain relative bg-[var(--hip-bg)] px-6 py-20 lg:px-[var(--pad-global)] lg:py-28">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-[var(--hip-accent)] to-transparent opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-[1200px]">
          <p className="mb-4 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[var(--hip-accent-dark)]">
            HOMMAGE Solution
          </p>
          <h3 className="mb-14 text-center font-[family-name:var(--font-heading-kr)] text-[clamp(22px,2.8vw,28px)] tracking-[0.06em] text-[#111]">
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">토탈 이레이즈</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUTION_ITEMS.map((item, i) => (
              <li
                key={i}
                className="group relative flex flex-col rounded-lg border border-[#e8e8e8] bg-white p-6 pl-8 transition-all duration-300 hover:border-[var(--hip-accent)]/30 hover:shadow-[var(--shadow-hip)]"
              >
                <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r bg-gradient-to-b from-[var(--hip-accent)] to-[var(--hip-accent-light)] opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden />
                <span className="mb-3 font-[family-name:var(--font-display)] text-[12px] tracking-[0.25em] text-[var(--hip-accent-dark)]">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-display)] text-[18px] font-normal tracking-[0.04em] text-[#111]">
                  {item.title}
                </h4>
                <p className="mt-3 text-[14px] leading-relaxed text-[#666]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">
            토탈 이레이즈 상담
          </p>
          <p className="mt-2 text-[14px] text-[#999]">
            오마쥬 클리닉이 1:1로 맞춤 설계해 드립니다.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm bg-[var(--hip-accent)] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-white transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-[var(--shadow-hip)]"
            >
              시그니처 상담 문의
            </Link>
            <Link
              href="/"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              ← HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
