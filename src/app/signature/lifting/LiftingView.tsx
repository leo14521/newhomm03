"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";
import { LiftingFusionBlock } from "./LiftingFusionBlock";

// --- [데이터 정의] ---
const SPECIALITY_ITEMS = [
  {
    title: "높은 고정력과 리프팅효과",
    sub: "STRONG FIXATION",
    description: "각 리프팅 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다.",
  },
  {
    title: "빠른 시술 속도",
    sub: "FAST PROCEDURE",
    description: "효율적인 시술 방법으로 바쁜 시간 중에도 편안하게 부담없이 받으실 수 있습니다.",
  },
  {
    title: "시술 후 통증 최소화",
    sub: "MINIMAL DISCOMFORT",
    description: "정확한 피부층에 에너지를 전달하면서 빠르게 완성하여 붓기와 멍, 통증이 거의 없는 방법으로 시술하고 있습니다.",
  },
  {
    title: "얼굴형 맞춤시술",
    sub: "CUSTOMIZED DESIGN",
    description: "개인의 골격, 피부 두께, 근육의 움직임까지 분석하여 가장 이상적인 리프팅 벡터를 설계합니다.",
  },
  {
    title: "편안한 시술",
    sub: "COMFORTABLE",
    description: "리프팅에 대한 걱정과 두려움을 최소화하여 편안하게 시술 받으실 수 있습니다.",
  },
];

const FEATURE_ITEMS = [
  {
    num: "01",
    title: "울쎄라 프로 프라임",
    sub: "ULTHERA PRO PRIME",
    description: "마이크로포커스 초음파 기술로 SMAS층까지 에너지를 전달하는 FDA 승인 리프팅 시술",
    link: "/signature/ulthera-pro-prime",
  },
  {
    num: "02",
    title: "온다",
    sub: "ONDA",
    description: "고주파를 활용한 비침습 바디 컨투어링·리프팅 시술",
    link: "/signature/onda",
  },
  {
    num: "03",
    title: "튠페이스",
    sub: "TUNE FACE",
    description: "멀티 고주파를 활용한 페이스리프팅 시술로 3단계 깊이 조절이 가능",
    link: "/signature/tune-face",
  },
  {
    num: "04",
    title: "코레지셀핏",
    sub: "CORRECTION FIT",
    description: "고주파와 초음파를 결합한 종합 리프팅 시술",
    link: "/signature/correction-fit",
  },
  {
    num: "05",
    title: "민트 실",
    sub: "MINT THREAD",
    description: "돌기가 달린 몰딩실을 사용한 비절개 리프팅 시술",
    link: "/signature/mint-thread",
  },
  {
    num: "06",
    title: "실루엣소프트",
    sub: "SILHOUETTE SOFT",
    description: "부드러운 실을 사용한 자연스러운 리프팅 시술",
    link: "/signature/silhouette-soft",
  },
];

export default function LiftingView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)] bg-[var(--bg-page)] text-[var(--text-primary)]">
      
      {/* 1. Hero Section */}
      <SignatureHero
        title="Lifting"
        titleKr="리프팅"
        description="아름다운 라인을 만드는 FIGURE MAKING을 모토로 탄생한 오마쥬의 TOP 시그니처 시술. 고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만듭니다."
        imageIndex={0}
      />

      {/* 2. Intro Section */}
      <section className="relative py-20 lg:py-32 border-t border-[var(--border-page)] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
            Lifting
          </span>
          <p className="text-[15px] lg:text-[16px] leading-relaxed text-[var(--text-secondary)] break-keep">
            고주파, 초음파, 레이저, 실 등을 이용한 최적의 리프팅 컴비네이션으로, 기술적 융합을 통해 단 1일만에 원하는 리프팅 효과를 구현합니다. <br className="hidden md:block" />
            원데이 익스트림 리프팅 또는 조각주사와의 컴바인으로 더욱 효과적인 라인을 만드는 오마쥬만의 시그니처 경험입니다.
          </p>
        </div>
      </section>

      {/* 3. Fusion Block Component */}
      <LiftingFusionBlock />

      {/* 4. About Section (이미지 제거 및 텍스트 중심 레이아웃) */}
      <section className="relative py-20 lg:py-32 bg-[var(--bg-card)] px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              About Lifting
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-3xl lg:text-4xl font-medium mb-8">
              리프팅이란?
            </h3>
            <div className="bg-[var(--bg-page)] border border-[var(--border-page)] p-8 lg:p-12 rounded-2xl shadow-sm">
              <p className="text-base lg:text-lg leading-relaxed text-[var(--text-secondary)] break-keep mb-6">
                고주파, 초음파, 레이저, 실 등을 이용하여 탄력 있는 V라인을 만들기 위한 최적의 리프팅 컴비네이션입니다. 
                각 시술을 기술적으로 컴바인하여 단 1일만에 원하는 리프팅 효과를 나타낼 수 있습니다.
              </p>
              <div className="inline-flex flex-wrap justify-center items-center gap-2 pt-6 border-t border-[var(--border-page)]">
                <span className="font-medium text-[var(--text-primary)] mr-2">주요 시술:</span>
                {["울쎄라 프로 프라임", "온다", "튠페이스", "코레지셀핏", "실리프팅", "V라인 리프팅"].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[var(--bg-card)] border border-[var(--border-page)] text-[13px] text-[var(--text-secondary)] rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Solution Section */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              Hommage Solution
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-2xl lg:text-3xl font-medium">
              오마쥬 클리닉 리프팅 솔루션
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALITY_ITEMS.map((item, i) => (
              <li
                key={i}
                className="group flex flex-col rounded-xl border border-[var(--border-page)] bg-[var(--bg-card)] p-8 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <span className="mb-4 font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.25em] text-[var(--text-secondary)] uppercase">
                  {item.sub}
                </span>
                <h4 className="font-[family-name:var(--font-kr-heading)] text-xl font-medium text-[var(--text-primary)] mb-3">
                  {item.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] break-keep">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Features Section */}
      <section className="relative py-20 lg:py-32 bg-[var(--bg-card)] px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="block font-[family-name:var(--font-en-title)] text-xs tracking-[0.3em] uppercase text-[var(--text-secondary)] mb-4">
              Lifting Features
            </span>
            <h3 className="font-[family-name:var(--font-kr-heading)] text-2xl lg:text-3xl font-medium">
              시술별 특징
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURE_ITEMS.map((item) => (
              <Link
                key={item.num}
                href={item.link}
                className="group flex flex-col rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] p-8 transition-all duration-300 shadow-sm hover:border-[var(--text-primary)] hover:shadow-md"
              >
                <span className="mb-3 font-[family-name:var(--font-en-title)] text-[11px] font-light tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                  {item.sub}
                </span>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-[family-name:var(--font-en-display)] text-2xl font-light text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {item.num}
                  </span>
                  <h4 className="font-[family-name:var(--font-kr-heading)] text-lg font-medium text-[var(--text-primary)]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] flex-grow break-keep">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[12px] font-medium tracking-wider text-[var(--text-primary)] opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <span>VIEW MORE</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA / Contact Section */}
      <section className="relative py-24 bg-[#111] text-white px-6">
        <div className="absolute top-0 left-0 w-full h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="font-[family-name:var(--font-kr-heading)] text-2xl lg:text-3xl mb-3">
            리프팅 상담
          </h2>
          <p className="text-[15px] text-white/60 mb-10">
            오마쥬 클리닉이 1:1로 맞춤 설계해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#curation" 
              className="w-full sm:w-auto rounded-sm border border-white bg-white px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-black transition-colors hover:bg-transparent hover:text-white"
            >
              시그니처 상담 문의
            </Link>
            <Link 
              href="/" 
              className="w-full sm:w-auto rounded-sm border border-white/30 px-8 py-4 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}