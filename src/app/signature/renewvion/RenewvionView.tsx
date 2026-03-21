"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const KEY_SITUATIONS = [
  "지방흡입 후 피부처짐이 걱정되어 수술을 망설이는 경우",
  "고주파·초음파·실리프팅 등 기존 시술로 만족스러운 결과를 얻지 못한 경우",
  "안면거상술이나 복부성형 같은 절개 수술의 흉터와 회복기간이 부담스러운 경우",
];

const KEY_DIFFERENCES = [
  {
    title: "최적 온도 85°C 도달",
    desc: "헬륨 플라즈마 기술로 피부 수축 최적 온도에 빠르게 도달하여 주변 조직 손상 없이 효과적인 피부 탄력 개선",
  },
  {
    title: "FDA 승인 검증",
    desc: "미국 FDA로부터 피부 수축 및 탄력 개선 효과를 공식 승인받은 의료기기",
  },
  {
    title: "최소 절개창",
    desc: "거상술 대비 훨씬 작은 절개창으로 수술하여 흉터가 거의 눈에 띄지 않음",
  },
  {
    title: "다양한 부위 적용",
    desc: "얼굴(턱선, 이중턱, 볼, 목)부터 바디(복부, 팔, 허벅지, 등)까지 전신 피부처짐 개선 가능",
  },
];

const RECOMMEND_TARGETS = [
  {
    title: "지방흡입 후 피부처짐이 걱정되는 분",
    desc: "지방흡입 + 리뉴비온 동시 진행이 가장 이상적인 조합입니다.",
  },
  {
    title: "중등도 피부처짐으로 고민 중인 분",
    desc: "고주파, 초음파, 실리프팅으로 효과가 부족했거나, 거상술의 흉터 및 회복기간이 부담스러운 분.",
  },
  {
    title: "다양한 부위의 피부처짐으로 고민하는 분들",
    desc: "얼굴(턱선, 이중턱, 볼, 팔자주름, 목 주름 등)부터 바디(복부, 팔, 허벅지, 등·브래지어 라인 등)까지 적용 가능합니다.",
  },
];

const TUNAEAL_RECIPE = [
  { step: 1, title: "줄기세포 치료", desc: "성장인자가 흉터 부위에 새살을 채워 원래 피부로 회복시킵니다." },
  { step: 2, title: "미라젯", desc: "진피 깊숙한 곳까지 약물을 침투시켜 오래된 튼살을 개선합니다." },
  { step: 3, title: "고주파 치료", desc: "단일 파장이 아닌 16가지 파장으로 세포활동을 촉진시켜 피부재생을 원활하게 만듭니다." },
];

const FAQ_ITEMS = [
  {
    q: "리뉴비온은 반드시 지방흡입과 같이 받아야 하나요?",
    a: "반드시 그렇지는 않습니다. 지방흡입과 함께 받아 체형 개선과 탄력 향상을 동시에 얻을 수도 있고, 피하지방은 적으나 피부처짐만 있는 경우 단독으로도 효과적입니다.",
  },
  {
    q: "리뉴비온과 기존 리프팅 시술(고주파/초음파/실리프팅)과 어떻게 다른가요?",
    a: "핵심 차이는 '온도'입니다. 기존 리프팅은 안전을 위해 40~60°C에서 작동하지만, 리뉴비온은 헬륨 플라즈마의 빠른 가열과 급속 냉각으로 피부 수축 최적 온도인 85°C에 도달해 강력한 수축 효과를 냅니다.",
  },
  {
    q: "리뉴비온과 거상술과 비교하면 어떤가요?",
    a: "거상술의 중간 단계 대안입니다. 피부 탄력 개선 효과는 확실하게 가져가면서도, 최소 절개창을 사용해 흉터와 회복 기간을 대폭 줄였습니다. 중등도 피부처짐에 이상적입니다.",
  },
  {
    q: "리뉴비온은 미국, 한국에서 모두 승인받은 기기인가요?",
    a: "네, 미국 FDA와 한국 KFDA를 동시에 승인받아 효과와 안전성을 인증받은 기기입니다.",
  },
  {
    q: "해외의 아르곤 가스 플라즈마 리프팅 기기와의 차이점은 무엇인가요?",
    a: "정밀성의 차이입니다. 아르곤 가스는 상대적으로 정밀성이 떨어져 주변 화상 우려가 있는 반면, 리뉴비온(헬륨 가스)은 정밀한 타겟팅과 급속 냉각을 통해 원하는 리프팅 결과만을 안전하게 구현해 냅니다.",
  },
];

export default function RenewvionView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      <SignatureHero
        title="Renuvion"
        titleKr="리뉴비온"
        description="피부처짐을 위한 차세대 리프팅"
        imageIndex={5}
      />

      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">KEY TAKEAWAYS</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            리뉴비온은 피부처짐 치료의 새로운 대안입니다
          </h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            기존 리프팅 시술의 제한적인 효과와 거상술의 흉터 부담 사이에서 고민하는 분들을 위한 차세대 리프팅 솔루션입니다.
          </p>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            이 글이 도움이 되는 3가지 상황
          </h3>
          <ul className="mt-4 space-y-2">
            {KEY_SITUATIONS.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 text-[12px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            리뉴비온의 핵심 차별점
          </h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {KEY_DIFFERENCES.map((item, i) => (
              <li key={i} className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-5">
                <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{item.title}</span>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.desc}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-lg border border-[var(--text-primary)]/20 bg-[var(--bg-card)] p-6">
            <h4 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
              치료 선택 가이드
            </h4>
            <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              경미한 처짐은 고주파·초음파 리프팅, 중등도 처짐은 리뉴비온, 심각한 처짐은 거상술이 적합합니다.
            </p>
            <p className="mt-2 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              오마쥬클리닉은 환자 상태에 맞춘 맞춤 피부처짐 치료 로드맵을 제공합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">BACKGROUND</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            피부처짐 치료의 딜레마: 거상술 vs 리프팅 시술
          </h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            리뉴비온을 소개하기에 앞서, 기존 피부처짐 치료법의 한계를 먼저 짚어봅니다. 현재 피부처짐 치료는 크게 세 가지 방식으로 나뉩니다. 피부를 절개하여 확실한 효과를 내는 거상술과, 절개 없이 받을 수 있는 리프팅 시술입니다.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">
                리프팅 시술이 주는 한계
              </h3>
              <ul className="mt-3 space-y-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">고주파·초음파 리프팅의 한계:</strong> 피부 탄력 개선 효과를 내기 위한 최적 온도는 85°C입니다. 그러나 기존 장비가 이 온도에 도달하는 과정에서 불필요한 피부조직 손상이 발생할 수 있어 안전을 위해 40~60°C에서만 작동합니다. 그래서 피부 수축 효과가 제한적일 수밖에 없습니다.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">실리프팅의 한계:</strong> 실은 주로 피부나 진피층에 작용하며, 깊은 조직과 근육층에 대한 중등도 이상의 처짐을 해결하는 데는 한계가 있습니다.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">
                거상술을 주저하는 이유
              </h3>
              <ul className="mt-3 space-y-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">눈에 띄는 흉터:</strong> 거상술은 피부를 절개하는 수술이기 때문에 흉터가 남습니다.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">피부 절개에 대한 심리적 부담:</strong> 젊은 피부 자체를 직접 잘라내는 방식이라 수술 후 피부 회복에 대한 심리적 부담이 큽니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">DEVICE</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            차세대 리프팅 기기! 리뉴비온(Renuvion)이란?
          </h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            거상술의 짙은 흉터 없이 리프팅 시술만으로는 부족한 효과를 보완하는 방법이 리뉴비온(Renuvion)입니다. 헬륨 플라즈마로 피부 수축 최적 온도에 도달하면서도, 거상술과 달리 최소의 절개창만으로 피부 탄력을 끌어올리는 치료법입니다.
          </p>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            해외에서 검증된 치료법 리뉴비온
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            <li>
              <strong className="text-[var(--text-primary)]">FDA 승인:</strong> 미국 FDA로부터 피부 수축 및 탄력 개선 효과를 공식 승인받은 의료기기입니다.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">해외에서 검증된 의료 기기:</strong> 거상술과 기존 리프팅 시술 사이의 공간을 채우는 대안으로 널리 사용 중입니다. 오마쥬클리닉에서도 도입하여 맞춤 치료를 제공합니다.
            </li>
          </ul>

          <h3 className="mt-10 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            리뉴비온 원리: 피부 조직 수축 최적 온도 85°C 도달
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            <li>
              <strong className="text-[var(--text-primary)]">주변조직 손상 최소:</strong> 헬륨 플라즈마 기술로 85°C에 빠르게 도달하고 1초 이내로 급속 냉각하여 목표 부위만 선택적으로 수축시킵니다.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">흉터 최소:</strong> 거상술에 비해 훨씬 작은 절개창을 사용하여 시술 후 흉터가 거의 눈에 띄지 않습니다.
            </li>
          </ul>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">FOR YOU</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">리뉴비온 시술 과정 및 추천 대상</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            리뉴비온은 단순한 피부처짐뿐 아니라, 지방흡입 후 발생할 수 있는 피부처짐까지 효과적으로 개선합니다.
          </p>
          <h3 className="mt-8 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium uppercase tracking-wide text-[var(--text-primary)]">
            리뉴비온 추천 대상
          </h3>
          <ul className="mt-4 space-y-4">
            {RECOMMEND_TARGETS.map((item, i) => (
              <li key={i} className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 font-[family-name:var(--font-en-display)] text-[14px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                <div>
                  <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{item.title}</span>
                  <p className="mt-1 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">TOTAL SOLUTION</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">오마쥬클리닉의 피부처짐 토탈 솔루션</h2>
          <p className="philo-desc mt-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            피부처짐으로 고민하는 환자분들의 상태는 모두 다릅니다. 오마쥬클리닉은 이러한 다양한 상황에 맞출 수 있도록 피부처짐 토탈 솔루션을 갖추고 있습니다.
          </p>

          <div className="mt-10 space-y-10">
            <div className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">
                피부처짐으로 동반되는 튼살·오마쥬클리닉 치료방법은?
              </h3>
              <p className="mt-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">튼살 원인:</strong> 급격한 체중 증가, 임신 등으로 피부가 늘어났다가 수축하는 과정에서 생기며 피부처짐과 함께 나타나는 경우가 많습니다.
              </p>
              <p className="mt-2 text-[15px] font-medium text-[var(--text-primary)]">오마쥬클리닉 튼살 치료 순서</p>
              <ul className="mt-3 space-y-3">
                {TUNAEAL_RECIPE.map((r) => (
                  <li key={r.step} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/15 text-[13px] font-medium text-[var(--text-primary)]">
                      {r.step}
                    </span>
                    <div>
                      <span className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">{r.title}:</span>
                      <span className="ml-1 text-[14px] leading-[1.75] text-[var(--text-secondary)]">{r.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] p-6">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">
                리뉴비온으로 해결하기 어려운 피부처짐은 거상 수술
              </h3>
              <ul className="mt-3 space-y-3 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                <li>
                  <strong className="text-[var(--text-primary)]">거상술:</strong> 심각한 피부처짐의 경우 안면, 미니, 복부 성형 등 처짐 정도에 따라 절개 범위가 달리 적용됩니다.
                </li>
                <li>
                  <strong className="text-[var(--text-primary)]">절개 면적이 크기 때문에 오마쥬클리닉 거상술:</strong> 복부 성형 절개선을 최소화하기 위해 설계하며, 피부 한쪽에서 봉합하여 흉터를 최소화합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">FAQ</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">리뉴비온 FAQ</h2>
          <ul className="mt-8 space-y-4">
            {FAQ_ITEMS.map((item, i) => (
              <li key={i} className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-5">
                <p className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)]">Q. {item.q}</p>
                <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-secondary)]">A. {item.a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">리뉴비온 상담</p>
          <p className="mt-2 text-[14px] text-white/60">피부처짐 맞춤 솔루션, 오마쥬클리닉이 설계해 드립니다.</p>
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
