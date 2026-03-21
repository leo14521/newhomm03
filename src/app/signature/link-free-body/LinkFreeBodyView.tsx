"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const FEATURE_ITEMS = [
  {
    title: "리뉴비온 바디 타이트닝",
    sub: "RENUVION",
    description: "리뉴비온은 절개 없이 플라즈마 에너지로 피부를 수축·타이트닝하는 바디 리프팅 시술입니다. 늘어진 피부와 군살을 정리하여 매끄러운 바디 라인을 만듭니다.",
  },
  {
    title: "실 없는 바디 리프팅",
    sub: "THREAD-FREE LIFTING",
    description: "기존 실리프팅과 달리 실을 사용하지 않고 고주파와 초음파 에너지로 근막층을 자극하여 자연스러운 리프팅 효과를 구현합니다.",
  },
  {
    title: "바디필러",
    sub: "BODY FILLER",
    description: "어깨 라인의 꺼짐, 골반·힙 볼륨 부족을 통합 분석해 체형 밸런스에 맞는 1:1 바디필러 플랜을 설계합니다.",
  },
  {
    title: "윤곽·지방 분해",
    sub: "CONTOUR & FAT REDUCTION",
    description: "팔뚝, 허벅지, 복부 등 원하는 부위의 지방을 선택적으로 분해하고 윤곽을 개선하여 탄력 있고 아름다운 바디 라인을 만들어줍니다.",
  },
  {
    title: "통증 최소화",
    sub: "MINIMAL DISCOMFORT",
    description: "비침습적 시술로 통증과 회복 기간을 최소화하여 일상생활에 지장 없이 시술받을 수 있습니다.",
  },
];

const RECOMMEND = [
  "실리프팅 부담은 있으나 팔·허벅지·복부 라인을 타이트하게 잡고 싶은 분",
  "리뉴비온 등 에너지 기반 바디 타이트닝과 볼륨(어깨·골반)을 함께 설계하고 싶은 분",
  "운동·식이로 한계가 있는 군살·처진 피부를 비절개로 정리하고 싶은 분",
  "시술 후 빠른 일상 복귀를 우선하는 분(부위·강도는 상담에서 조정)",
];

const FLOW = [
  "체형 사진·촉진으로 지방·피부 탄력·볼륨 부족 부위를 함께 평가합니다.",
  "리뉴비온·인모드 계열 등 선택한 장비로 부위별 시술 계획을 세웁니다. 바디필러는 별도 상담 후 진행합니다.",
  "시술 직후 붉은 기·부기·감각 변화가 있을 수 있으며 부위별로 회복 일정이 다릅니다.",
  "코스 형태로 간격을 두고 진행하면 라인 유지에 유리합니다.",
];

export default function LinkFreeBodyView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Link-Free Body"
        titleKr="링크프리 바디"
        description="실 없이 바디 라인을 개선하는 혁신적인 바디 컨투어링. 고주파와 초음파 에너지로 근막층을 자극하고 지방을 분해합니다."
        imageIndex={4}
      />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            About Link-Free
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            Link-Free Body
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            <p>
              <strong className="font-medium text-[#111]">링크프리 바디</strong>는 실 삽입 없이{" "}
              <strong className="text-[var(--hip-accent-dark)]">리뉴비온</strong>·고주파·초음파 등 에너지를 활용해 처진 피부를 당기고
              지방 라인을 정리하는 오마쥬의 바디 시그니처 축입니다. 얼굴 실리프팅과 달리 바디는 면적이 넓어{" "}
              <strong className="font-medium text-[#111]">장비 선택·출력·횟수</strong>를 체형에 맞게 조합하는 것이 중요합니다.
            </p>
            <p>
              라인만 줄이는 것이 아니라 어깨·골반·힙 등 <strong className="font-medium text-[#111]">볼륨이 비는 부위</strong>는{" "}
              <strong>바디필러</strong>로 밸런스를 맞추어 실루엣이 자연스럽게 보이도록 설계합니다.
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
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">링크프리 바디</span> 솔루션
          </h3>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" id="body-filler">
            {FEATURE_ITEMS.map((item, i) => (
              <li
                key={i}
                id={item.sub === "BODY FILLER" ? "body-filler-item" : undefined}
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
                  {item.description}
                </p>
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
          <h3 className="font-[family-name:var(--font-heading-kr)] text-[clamp(20px,2.4vw,26px)] text-[#111]">진행 흐름 · 유의사항</h3>
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
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">
            링크프리 바디 상담
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
              href="/signature/renewvion"
              className="inline-block rounded-sm border border-[#555] px-8 py-4 text-[14px] font-medium tracking-[0.1em] text-[#999] transition-colors hover:border-[var(--hip-accent)] hover:text-[var(--hip-accent)]"
            >
              리뉴비온 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
