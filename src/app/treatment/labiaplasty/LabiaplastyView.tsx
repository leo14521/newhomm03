"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const FEATURES = [
  "이상적인 소음순모양 형성: 성감에 영향을 주지 않으면서 여성으로서의 자신감을 회복할 수 있습니다.",
  "여성건강에도 도움을 주는 수술: 소음순 비대로 인한 질염, 방광염 등 질환까지 개선 가능해 여성건강에도 도움을 줍니다.",
  "티 나지 않은 자연스러움: 수술 후 흉터가 적으며, 표시가 나지 않는 자연스러운 수술입니다.",
  "수술 부작용 NO: 괴사, 출혈, 통증 등의 부작용이 거의 없는 안전성을 갖추고 있습니다.",
  "시술 후 신속한 일상복귀: 회복이 빨라 시술 후 바로 일상생활이 가능합니다.",
];

const SPECIAL_POINTS = [
  {
    title: "베살리우스 소음순 수술",
    desc: "65도 낮은 온도와 특수 파장을 이용한 베살리우스를 통해 안전한 소음순 수술을 받을 수 있습니다. 일반 레이저 절개와 달리 조직 손상, 출혈, 붓기, 멍 등이 최소화되었기 때문입니다. 뿐만 아니라 수술시간과 회복기간 역시 단축된다는 장점까지 갖추었습니다.",
  },
  {
    title: "소음순 미세조각 주사",
    desc: "소음순 수술 후 약간의 비대칭이라도 발생했다면 오마쥬클리닉에서 책임지고 해결해드립니다. 오마쥬만의 특별한 비법인 주사요법 소음순 미세조각 주사를 통해 단 1mm의 차이까지 교정할 수 있습니다.",
  },
  {
    title: "산부인과 전문의가 총괄",
    desc: "소음순 수술이 이루어지는 처음부터 끝까지 오마쥬클리닉 원장님이 직접 진행합니다. 10년 경력의 산부인과 전문의가 상담은 물론 수술까지 전 과정 참여하기 때문에 환자가 먼저 만족할 수 있는 수준 높은 수술이 이루어질 수 있습니다.",
  },
];

const RECOMMEND_LIST = [
  "소음순 모양이 비대칭인 분",
  "소음순이 심하게 늘어진 분",
  "소음순 주름이 과하게 잡힌 분",
  "비대한 소음순으로 질염, 방광염에 자주 걸리는 분",
  "검게 색소침착이 된 소음순이 콤플렉스인 분",
  "소음순 변형으로 성관계 시 자신이 없는 분",
  "다른 병원에서의 치료 후 비대칭, 실밥자국, 색소침착이 남은 분",
];

const STEPS = [
  "STEP 01: 예약 후 오마쥬클리닉 내원",
  "STEP 02: 의료진 상담, 소음순 상태 진단",
  "STEP 03: 시술 계획 결정",
  "STEP 04: 수면마취 or 국소마취 선택",
  "STEP 05: 40분 간 레이저 소음순 성형",
  "STEP 06: 회복 및 사후관리법 안내 후 귀가",
];

export default function LabiaplastyView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* 섹션 1: 레이저 소음순성형 도입부 */}
      <SignatureHero
        title="Laser Labiaplasty"
        titleKr="레이저 소음순성형"
        description="기형적 소음순 모양을 간단하게 바꿀 방법. 아름다운 소음순으로 가꿔드리는 레이저 소음순성형"
        showBackgroundImage={false}
        imageIndex={0}
      />

      {/* 섹션 2: 소음순 비대로 인한 콤플렉스 */}
      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">WOMEN&apos;S HEALTH</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            &quot;비대한 소음순, 심미적·기능적 콤플렉스 유발해...&quot;
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              소음순이란 여성의 질 입구에 존재하는 한 쌍의 날개 모양의 구조물입니다. 소음순은 여성의 성기에서 미적으로 중요한 부위입니다. 연한 갈색이나 분홍빛을 띠며, 폭은 1.5cm 이내일 때 이상적인 소음순으로 보고 있습니다.
            </p>
            <p>
              소음순은 기능적으로도 아주 중요한 역할을 하는데 질이나 요도가 건조해지지 않도록 보호하고 외부의 세균이 침투되지 않도록 막아줍니다.
            </p>
            <p>
              그런데 선천적, 후천적 요인으로 인해 소음순이 비대해지는 경우가 많습니다. 선천적으로 모양이 비대칭이거나 잘못된 습관, 출산, 노화 등으로 인해 소음순이 늘어지면 생활에 불편함이 유발될 수 있습니다. 끼이는 옷을 입을 때 통증이 나타나기도 하며, 위생관리가 어려워 냄새가 나고 질 분비물 배출이 원활하지 않아 질염이나 방광염에 걸릴 확률도 높아집니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 3: 균형잡힌 소음순 모양 만들기 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">LASER LABIAPLASTY</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            균형잡힌 소음순 모양을 만들어주는 &apos;레이저 소음순성형&apos;
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              미관상 좋지 않은 소음순 모양일 뿐 아니라 일상에 불편함까지 생긴다면 &apos;레이저 소음순성형&apos;을 받아보는 것이 현명한 선택이 될 수 있습니다. 레이저 소음순성형은 기형적 소음순 모양을 예쁘게 바꿔주어 심미적·기능적 효과를 모두 거둘 수 있는 수술입니다.
            </p>
            <p>
              레이저 소음순성형은 단순히 소음순의 크기를 줄여주는 시술이 아닙니다. 이는 소음순 부근의 주름이나 전체적인 모양과 균형까지 맞춰주는 방법이라 할 수 있습니다. 이러한 시술을 진행하는데 있어 매우 섬세한 기술이 필요합니다. 소음순은 신경조직과 혈관이 풍부해 자극에 매우 민감한 조직이기 때문입니다.
            </p>
            <p>
              오마쥬클리닉은 레이저를 사용하여 표피부분만을 얇게 절제하고, 감각에 중요한 신경 및 혈관 등 내부 조직들은 보존하는 시술을 진행하고 있습니다. 신경과 혈관 손상을 최소화했기 때문에 통증이 적고, 부종과 출혈이 발생할 가능성도 낮습니다. 감각이 손실되는 부작용 걱정도 하지 않을 수 있습니다. 회복도 빨라 일상생활로 신속하게 복귀할 수 있습니다.
            </p>
          </div>
          <div className="mt-10 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-6">
            <h4 className="font-[family-name:var(--font-kr-heading)] text-[17px] font-medium text-[var(--text-primary)]">이상적인 소음순</h4>
            <p className="mt-2 text-[14px] text-[var(--text-secondary)]">
              비정상적인 소음순 형태: 일부비대 / 불균형 / 한쪽비대 / 하단주름 / 과대주름 소음순
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 4: 베살리우스 장비 소개 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">VESALIUS</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            절개와 지혈을 동시에 &apos;베살리우스&apos;로 안전한 소음순성형을!
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              베살리우스는 여러 파형을 동시에 사용하는 QMR 즉, 분자공명기술로 분자를 진동시켜 절개하는 장비입니다. Telea 사의 특허 받은 분자공명기술로 4, 8, 12, 16 MHz의 주파수를 순차적이 아닌 동시에 발생시켜 시술 부위에 열 상승 없이 에너지를 전달합니다.
            </p>
            <p>
              기존의 레이저는 높은 열을 발생시켰기 때문에 각종 부작용에 노출되기 쉬웠습니다. 그러나 베살리우스는 50-60도 이내의 저온에서 절개가 가능하기 때문에 조직의 손상이 거의 없이 매끄럽게 절개가 됨과 동시에 지혈이 이루어집니다.
            </p>
            <p>
              때문에 시술부위나 그 주변 부위의 피부, 신경, 혈관 손상이 적어 화상이나 괴사가 최소화됩니다. 시술 후 피부 봉합 과정도 크게 필요하지 않습니다. 부종과 통증, 흉터 걱정 없이 다음날 출근이 가능할 정도로 회복도 빠릅니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 5: 맞춤 소음순성형 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">CUSTOMIZED</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            모양부터 색깔까지, 맞춤 소음순성형이 이루어집니다
          </h2>
          <div className="mt-8 space-y-8">
            <div className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-6">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">
                베살리우스를 통한 3D 입체 디자인 소음순성형
              </h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                맞춤 소음순성형을 통해 지스팟 부위를 부풀려주면 성교 시 자극이 잘 전달되어 성감의 극대화될 수 있습니다. 평상시 느끼지 못했던 오르가즘에 도달할 확률이 급격하게 증가한다는 뜻입니다. 그만큼 성관계 중 질 수축력도 올라가게 되어 남성의 성감 역시 높아질 수 있습니다.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-6">
              <h3 className="font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">
                칙칙한 소음순 색깔도 변화시켜줍니다
              </h3>
              <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                소음순이 검게 색소 침착이 된 경우에 소음순미백 레이저를 적용합니다. 레이저를 이용해 소음순 색깔을 핑크빛으로 회복할 수 있습니다. 효과는 표면 마취 20분, 시술 15분으로 이루어지며, 반영구적으로 효과가 지속됩니다. 시술 후 1주일부턴 성생활이 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 6: 오마쥬클리닉 시술의 특징 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[900px]">
          <div className="sec-head text-center">
            <span className="sec-label block">HOMMAGE ADVANTAGE</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              오마쥬클리닉 레이저 소음순성형의 특징
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
                  <span className="mb-2 font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] sm:mb-0 sm:w-[200px] sm:flex-shrink-0">
                    {title}
                  </span>
                  <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)]">{desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 섹션 7: 오마쥬만의 특별한 점 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[900px]">
          <div className="sec-head text-center">
            <span className="sec-label block">WHY HOMMAGE</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              오마쥬만의 특별한 점
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-1">
            {SPECIAL_POINTS.map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="font-[family-name:var(--font-kr-heading)] text-[18px] font-medium text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 섹션 8: 시술 추천 대상 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">FOR YOU</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              레이저 소음순성형, 누가 받으면 좋을까요?
            </h2>
          </div>
          <ul className="mt-10 space-y-3">
            {RECOMMEND_LIST.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-5 py-4"
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

      {/* 섹션 9: 시술 진행 과정 + 의료진 소개 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px] space-y-16">
          <div>
            <div className="sec-head text-center">
              <span className="sec-label block">PROCESS</span>
              <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
                레이저 소음순성형 정보
              </h2>
            </div>
            <ol className="mt-10 space-y-4">
              {STEPS.map((step, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-page)] px-5 py-4"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] font-[family-name:var(--font-en-display)] text-[14px] font-medium text-white">
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-medium text-[var(--text-primary)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-t border-[var(--border-page)] pt-14">
            <span className="sec-label block">MEDICAL DIRECTOR</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              10년 이상 경력을 가진 산부인과전문의니까!
            </h2>
            <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
              <p>
                여성에게 적용되는 모든 치료는 여성을 잘 아는 여성의료진이 잘 할 수 있습니다. 또 10년 이상의 경험을 가진 산부인과전문의이기에 오마쥬클리닉은 더욱 신뢰 가능합니다.
              </p>
              <p className="text-[14px] text-[var(--text-secondary)]/90">
                [키워드: 여성 의료진 / 산부인과 전문의 / 10년 경력 / 섬세한 기술]
              </p>
              <p>
                여기에 오마쥬클리닉만의 안전시스템과 치료 후 회복 & 관리 프로그램 등이 더해져 더 만족스러운 의료서비스를 경험하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">소음순성형 상담</p>
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
