"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const METHODS = [
  {
    title: "엠보싱 질 성형술",
    description:
      "질 입구에서부터 자궁입구까지 조여 주는 시술입니다. 늘어진 질 점막을 활용하여 질 후벽에 엠보싱 돌기를 만들어 본인은 물론 파트너의 성감을 극대화시켜줍니다. 질 점막을 자르지 않기 때문에 질 건조증, 신경손상 문제는 최소화됐습니다.",
  },
  {
    title: "회음부 성형술",
    description:
      "출산 후 질 이완 뿐 아니라 회음부 부위가 손상되어 질 일부가 겉에서 보이거나, 질 입구와 항문 사이의 간격이 좁거나, 늘어지고 검게 주름져 있는 등의 외관상 문제가 생겼을 때 적용합니다. 이를 통해 회음부 모양을 아름답게 개선하는 동시에 탄력적으로 가꿀 수 있습니다.",
  },
  {
    title: "골반 근육 재건술",
    description:
      "손상된 골반근육을 섬세하고 정교하게 복원시켜주는 방법입니다. 골반근육이 질 근육을 한 번 더 받쳐주어 질을 더욱 단단하게 조일 수 있습니다. 따라서 남녀 모두의 성감이 높아지는 효과를 얻을 수 있습니다.",
  },
  {
    title: "질필러",
    description:
      "질 점막의 위축·건조로 인한 불편감이 있을 때 부족한 볼륨을 섬세하게 보강하는 비수술 주사 시술입니다. 질벽 컨디션 개선과 촉감 향상을 함께 고려해 개인 상태에 맞춰 용량과 주입 층을 정밀 설계합니다.",
  },
];

const FEATURES = [
  "정밀한 검사 시행: 충분한 상담과 질압 측정 등 정밀한 진단을 거쳐 맞춤 시술이 이루어집니다.",
  "노하우가 풍부한 의료진: 진단부터 시술까지 전 과정을 실력 있는 의료진이 직접 진행합니다.",
  "여성 건강을 위한 시술: 질 이완으로 나타나는 다양한 여성 질환까지 해결할 수 있습니다.",
  "안전하고 부담 없는 시술: 신경과 혈관의 손상이 최소화되었으며, 통증 역시 적습니다.",
  "빠른 회복기간: 다음 날부터 일상생활이 가능할 만큼 회복이 빠릅니다.",
];

const RECOMMEND_LIST = [
  "강력한 질 축소 효과를 얻고 싶은 분",
  "본인 뿐 아니라 상대의 성감까지 향상시키고 싶은 분",
  "성관계 시 성기에서 바람 빠지는 소리가 나는 분",
  "출산 후 변형된 회음부 모양을 개선하고 싶은 분",
  "질염, 요실금 등 여성 질환에 시달리고 있는 분",
  "빠르게 일상으로 돌아갈 수 있는 시술을 원하는 분",
];

const STEPS = [
  "STEP 01: 예약 후 오마쥬클리닉 내원",
  "STEP 02: 의료진 상담, 질압측정 등 정밀 진단",
  "STEP 03: 시술 계획 결정",
  "STEP 04: 수면마취 시행",
  "STEP 05: 1시간 동안 레이저 질성형",
  "STEP 06: 회복 및 사후관리법 안내 후 귀가",
];

export default function VaginalPlastyView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* 섹션 1: 질성형 도입부 */}
      <SignatureHero
        title="Vaginal Plasty"
        titleKr="질성형"
        description="출산·노화·이완으로 저하된 질 탄력과 기능을 회복하기 위한 오마쥬 질성형 프로그램"
        showBackgroundImage={false}
        imageIndex={0}
      />

      {/* 섹션 2: 성생활 고민과 해결책 */}
      <section
        className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]"
      >
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">WOMEN&apos;S HEALTH</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            만족스럽지 못한 성관계 때문에 이혼까지?
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              기혼 남녀들이 많은 인터넷 커뮤니티를 보면 부부간의 성생활 고민들을 심심찮게 볼 수 있습니다. 그만큼 성관계 시 문제를 겪는 중년부부들이 많다는 의미입니다. 그러나 성생활 문제는 단순히 쉬쉬한다고 해결될 문제가 아닙니다.
            </p>
            <p>
              건강한 성생활이 이루어지지 않으면 부부간의 사이도 틀어지게 될 수 있습니다. 실제 만족스럽지 못한 성관계로 이혼을 선택하는 이들도 적지 않습니다. 또한 성관계 시 여성들의 자신감 저하를 초래하며, 넘어서 우울증으로까지 발전할 수 있습니다.
            </p>
            <p>
              다행인 것은 사회가 점차 개방되고, 정보를 얻기 쉬워지게 되면서 부부관계 문제를 해결하고자 하는 움직임이 활발해졌다는 것입니다. &apos;레이저 질성형&apos;을 선택하는 것으로 부부생활의 만족도를 높여줄 뿐 아니라 여성의 자신감 회복에 도움을 얻는 이들이 많아지고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 3: 3D 입체 레이저 질성형 소개 */}
      <section
        className="section-block relative bg-[var(--bg-card)]"
      >
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">3D LASER</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            &apos;3D 입체 레이저 질성형&apos;으로 질 성형의 완성도를 높이다
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              임신과 출산, 잦은 성관계, 노화 등의 요인으로 인해 여성의 질은 쉽게 탄력을 잃게 됩니다. 질이 밑으로 처지고 늘어져서 질 속이 비어있는 느낌이나 성관계 시 바람 빠지는 소리가 들리게 되는 것입니다.
            </p>
            <p>
              한번 넓어진 질 근육은 자연스럽게 회복되지 않습니다. 그렇다면 오마쥬클리닉의 &apos;레이저 질성형&apos;을 받는 것이 현명할 수 있습니다. 레이저를 이용해 이완된 질 벽과 주위 구조를 복원할 수 있습니다. 이를 통해 늘어난 질을 처녀 때처럼 좁고 탄력 있는 상태로 만드는 게 가능합니다.
            </p>
            <p>
              특히 오마쥬클리닉에서는 3D 입체 레이저 질성형을 실시하고 있습니다. 기존 질성형은 질후벽만을 교정하는 방식으로 이루어졌습니다. 그러나 3D 입체 레이저 질성형은 질후벽 뿐 아니라 질전벽도 교정할 수 있어 수술 효과가 극대화 됩니다.
            </p>
            <p>
              오마쥬클리닉의 레이저 질성형은 당일 퇴원이 가능하며, 수술 다음 날과 2주 후에만 내원하면 됩니다. 수술 직후 바로 활동이 가능할 만큼 회복이 빨라 일상생활에 지장을 주지 않습니다. 6주 후부터는 성관계도 이루어질 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 4: 나에게 맞는 질성형 방법 */}
      <section
        className="section-block relative bg-[var(--bg-page)]"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="sec-head text-center">
            <span className="sec-label block">TREATMENT OPTIONS</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              나에게 맞는 질성형 방법
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {METHODS.map((item, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[0_8px_28px_rgba(44,43,42,0.06)]"
              >
                <h3 className="font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 5: 시술의 효과 */}
      <section
        className="section-block relative bg-[var(--bg-card)]"
      >
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">BENEFITS</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            성적 만족감과 건강, 두 가지를 동시에 이룰 수 있습니다.
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              오마쥬클리닉의 레이저 질성형을 통해 처지고 늘어진 질이 복원할 수 있습니다. 그러면 쌍방향 성적 만족감이 높아지는 효과를 경험할 수 있게 됩니다. 또한 여성으로서의 자신감을 회복할 수 있으며, 신혼 때와 같이 부부관계가 긴밀해지는 효과도 얻을 수 있습니다.
            </p>
            <p>
              여성 건강증진을 위한 수단이 되기도 합니다. 노화와 출산 등 각종 이유로 이완된 질근육 때문에 요실금, 자궁하수증, 질염, 질방귀 등의 증상에 노출되기 쉬워집니다. 레이저 질성형을 통해 이러한 증상까지 개선할 수 있어 1석 2조의 효과를 거둘 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 6: 오마쥬클리닉 시술의 특징 */}
      <section
        className="section-block relative bg-[var(--bg-page)]"
      >
        <div className="mx-auto max-w-[900px]">
          <div className="sec-head text-center">
            <span className="sec-label block">HOMMAGE ADVANTAGE</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              오마쥬클리닉 레이저 질성형의 특징
            </h2>
          </div>
          <ul className="space-y-4">
            {FEATURES.map((text, i) => {
              const colonIndex = text.indexOf(":");
              const title = colonIndex >= 0 ? text.slice(0, colonIndex).trim() : "";
              const desc = colonIndex >= 0 ? text.slice(colonIndex + 1).trim() : text;
              return (
                <li
                  key={i}
                  className="flex flex-col rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-start sm:gap-5"
                >
                  <span className="mb-2 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] sm:mb-0 sm:w-[160px] sm:flex-shrink-0">
                    {title}
                  </span>
                  <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)]">{desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 섹션 7: 시술 추천 대상 */}
      <section
        className="section-block relative bg-[var(--bg-card)]"
      >
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">FOR YOU</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              레이저 질성형, 누가 받으면 좋을까요?
            </h2>
          </div>
          <ul className="mt-10 space-y-3">
            {RECOMMEND_LIST.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] px-5 py-4"
              >
                <span className="font-[family-name:var(--font-en-display)] text-[18px] font-normal text-[var(--text-primary)] flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 섹션 8: 시술 진행 과정 */}
      <section
        className="section-block relative bg-[var(--bg-page)]"
      >
        <div className="mx-auto max-w-[700px]">
          <div className="sec-head text-center">
            <span className="sec-label block">PROCESS</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              레이저 질성형 정보
            </h2>
          </div>
          <ol className="mt-10 space-y-4">
            {STEPS.map((step, i) => (
              <li
                key={i}
                className="flex items-center gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-5 py-4"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] font-[family-name:var(--font-en-display)] text-[14px] font-medium text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] font-medium text-[var(--text-primary)]">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 섹션 9: 의료진 소개 */}
      <section
        className="section-block relative bg-[var(--bg-card)]"
      >
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">MEDICAL DIRECTOR</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            15년 이상 경력을 가진 산부인과전문의니까!
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              여성에게 적용되는 모든 치료는 여성을 잘 아는 여성의료진이 잘 할 수 있습니다. 또 15년 이상의 경험을 가진 산부인과전문의이기에 오마쥬클리닉은 더욱 신뢰 가능합니다.
            </p>
            <p className="text-[14px] text-[var(--text-secondary)]/90">
              [키워드: 여성 의료진 / 산부인과 전문의 / 15년 경력 / 섬세한 기술]
            </p>
            <p>
              여기에 오마쥬클리닉만의 안전시스템과 치료 후 회복 & 관리 프로그램 등이 더해져 더 만족스러운 의료서비스를 경험하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">질성형 상담</p>
          <p className="mt-2 text-[14px] text-white/60">오마쥬클리닉이 1:1로 맞춤 설계해 드립니다.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#curation"
              className="inline-block rounded-sm border border-white bg-white px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-[var(--text-primary)] transition-colors hover:bg-transparent hover:text-white"
            >
              상담 예약
            </Link>
            <Link
              href="/"
              className="inline-block rounded-sm border border-white/30 px-8 py-3.5 text-[13px] font-medium tracking-[0.1em] text-white transition-colors hover:border-white"
            >
              HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
