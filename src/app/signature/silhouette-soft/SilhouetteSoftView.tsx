"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const FEATURES = [
  {
    title: "콘 형태 돌기",
    sub: "CONE CUSP",
    description: "콘 형태의 돌기 구조로 높은 고정력을 제공하여 효과적인 리프팅을 구현합니다.",
  },
  {
    title: "자연스러운 흡수",
    sub: "NATURAL ABSORPTION",
    description: "PDO 재질로 자연스럽게 흡수되며 흡수 과정에서 콜라겐 생성을 촉진합니다.",
  },
  {
    title: "부드러운 시술",
    sub: "SOFT PROCEDURE",
    description: "소프트한 재질로 시술 시 통증이 적고 회복이 빠릅니다.",
  },
  {
    title: "지속적인 효과",
    sub: "LONG-LASTING",
    description: "콜라겐 생성으로 실이 흡수된 후에도 지속적인 리프팅 효과를 제공합니다.",
  },
];

const RECOMMEND = [
  "중안면·턱선 처짐을 실로 끌어올리되, 과한 당김 없이 자연스러운 라인을 원하시는 분",
  "바디 실보다 얼굴용으로 검증된 콘 실 구조의 고정감을 기대하시는 분",
  "절개 없이 회복 부담을 줄이면서 V라인·이중턱 라인을 정리하고 싶은 분",
  "다른 에너지 리프팅과 병행해 유지력을 높이고 싶은 분(상태에 따라 제안)",
];

const FLOW = [
  "상담에서 처짐 방향·피부 두께·표정선을 반영해 실의 경로와 수를 설계합니다.",
  "국소 마취 후 설계된 벡터로 실루엣 소프트 실을 삽입·고정합니다.",
  "시술 직후 당김·붓기·멍이 있을 수 있으며 대부분 며칠 내 완화됩니다.",
  "실 흡수와 콜라겐 반응이 이어지므로 경과 방문 시 상태를 점검합니다.",
];

export default function SilhouetteSoftView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Silhouette Soft"
        titleKr="실루엣 소프트"
        description="콘 형태의 돌기로 높은 고정력을 제공하는 프리미엄 실리프팅 시술. 소프트한 재질로 통증이 적고 회복이 빠릅니다."
        imageIndex={1}
      />

      <section className="relative border-t border-[#e8e8e8] bg-white px-6 py-16 lg:px-[var(--pad-global)] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-3 text-center font-[family-name:var(--font-display)] text-[11px] tracking-[0.35em] uppercase text-[#888]">
            About Silhouette
          </p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(20px,2.5vw,26px)] tracking-[0.06em] text-[#111]">
            실루엣 소프트란?
          </h2>
          <div className="mt-8 space-y-5 text-left text-[15px] leading-[1.85] text-[#555]">
            <p>
              실루엣 소프트(Silhouette Soft)는 실 본체에 <strong className="font-medium text-[#111]">양방향 콘(cusp)</strong>이
              박힌 PDO 실로, 조직을 한 방향으로 미끄러지지 않게 잡아 주는 구조가 특징입니다. 민트 실의 360° 돌기와 달리
              콘이 비대칭으로 배열되어 <strong className="font-medium text-[#111]">벡터 조절과 고정</strong>에 유리한 경우가 많습니다.
            </p>
            <p>
              시술 후에는 즉각적인 당김감과 함께, 실이 서서히 흡수되는 동안{" "}
              <strong className="font-medium text-[#111]">콜라겐·섬유조직 반응</strong>이 일어나 라인이 유지되는 데 도움을 줍니다.
              재질이 상대적으로 부드러워 통증·이물감에 민감한 분들도 상담에서 조율할 수 있습니다.
            </p>
            <p>
              오마쥬에서는 <strong className="font-medium text-[#111]">과도한 과장 V라인</strong>보다 나이·골격에 맞는 자연스러운 윤곽을
              지향하며, 필요 시 초음파·고주파 리프팅과의 간격·순서를 안내합니다.
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
            오마쥬 클리닉 <span className="text-[var(--hip-accent-dark)]">실루엣 소프트</span> 솔루션
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
            * 비대칭·과한 당김·감각 이상 등은 대부분 일시적이나 지속 시 내원이 필요합니다. 출혈 경향·항응고제 복용 여부는
            반드시 상담 시 알려 주세요.
          </p>
        </div>
      </section>

      <section className="relative border-t border-[#e8e8e8] bg-[#0f0f0f] px-6 py-16 lg:px-[var(--pad-global)] lg:py-20">
        <span className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--hip-accent)] to-transparent opacity-50" aria-hidden />
        <div className="mx-auto max-w-[560px] text-center">
          <p className="font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.06em] text-white">실루엣 소프트 상담</p>
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
