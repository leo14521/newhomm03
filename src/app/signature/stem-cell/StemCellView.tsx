"use client";

import Link from "next/link";
import { SignatureHero } from "@/components/sections/SignatureHero";

const RECOMMEND_LIST = [
  "잦은 잔병치레, 면역력이 떨어져 있는 경우",
  "쉽게 피로를 느끼고 체력이 약한 경우",
  "고혈압, 당뇨, 고지혈증, 만성폐질환 및 간질환, 난치성질환자",
  "뇌·심혈관 질환, 수족냉증 / 손발저림 등 순환개선이 필요한 경우",
  "남녀 갱년기, 성기능 개선이 필요한 경우",
  "현재 불편함은 없으나 건강증진 및 항노화 치매 예방 목적",
];

const AFTERCARE_ITEMS = [
  "혈류를 방해하는 아스피린계열 약물복용 금지",
  "원활한 혈액순환을 위해 몸을 따뜻하게 유지",
  "시술의 최상의 효과를 위해 최소 2주간 금주 & 금연",
  "줄기세포의 재생을 방해하는 스테로이드, 소염제, 파스는 최소 2주간 금지",
  "개인 몸 상태에 따라 시술 후 하루에서 이틀, 몸살증상(근육통)이 발생",
  "통증이 심할 시 타이레놀 진통제를 복용",
  "한약은 원장과 상의 후 복용",
];

export default function StemCellView() {
  return (
    <main className="min-h-screen pt-[var(--header-height)] lg:pt-[var(--header-h)]">
      {/* 섹션 1: 줄기세포치료 도입부 */}
      <SignatureHero
        title="Stem Cell Therapy"
        titleKr="줄기세포치료"
        description="노화로 급격히 떨어진 자연치유력을 크게 올려주는 방법. 성기능·활력·탈모·체형 등에 탁월한 개선 효과를 위한 '줄기세포치료'"
        imageIndex={0}
      />

      {/* 섹션 2: 줄기세포란? */}
      <section className="section-block relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">ABOUT</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            줄기세포
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              인체 안에 존재하고 있는 세포 및 조직이 원래의 기능으로 회복하게 만드는 재생능력을 지닌 세포입니다.
            </p>
            <p>
              현재 가장 안전하게 사용할 수 있는 줄기세포는 지금 내 몸 안에 존재하는 성체 줄기세포입니다. 혈액줄기세포는 채취가 가장 쉽고, 경증치료 또는 미용목적으로 사용이 적합합니다.
            </p>
            <p>
              골수줄기세포는 가장 튼튼한 골반 뼈에서 비교적 어렵지 않게 채취하며, 중증치료에 사용 될 만큼 많은 양의 줄기세포와 성장인자를 포함합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 3: 스마트프렙 2 (SmartPReP 2) + MCT(메타셀) 소개 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">EQUIPMENT</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            스마트프렙 2 (SmartPReP 2) · MCT(메타셀)
          </h2>
          <div className="philo-desc mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p>
              미국 하버드의과대학 면역연구소에서 연구개발한 세포분리기 전혈과 골수에서 우수한 양의 세포들을 추출 및 농축하는 시스템입니다.
            </p>
            <p>
              기존의 PRP 제품보다 혈소판 활성화를 50%이하로 감소시켜 혈소판을 약 800%이상 회복시켜 주며, Floating Shelf, Decanting, Double Spin 기술로 세포용 원심분리를 해서 혈소판을 기저선의 4배 이상까지 농축이 가능합니다.
            </p>
            <p>
              미국 FDA, 영국 BSI와 국내 식품의약품안전청(KFDA)에서 체내에서 진행되는 IN Vivo로 승인이 되어 그 안정성과 유효성을 검증합니다. 하버드(Harvard), 스탠포드(Stanford), UCLA 등 해외 유명대학에서 논문으로 발표된 스마트프렙2는 조기활성화 되지 않은 혈소판의 양이 많아 염증 및 유착을 유발시키지 않고, 기존 PRP보다 농축혈소판이 기준치에서 2.5배에서 최대 10배로 증가해 미분화 세포가 기하급수적으로 증가한다는 것이 장점입니다.
            </p>
            <p>
              또한, 기존의 PRP 제품보다 4배 이상의 성장 인자(growth factor)를 농축할 수 있어 확실한 치료 효과와 치료기간 단축으로 인한 의료비 절감됩니다.
            </p>
            <p>
              오마쥬클리닉은 줄기세포 시술 시 <strong className="text-[var(--text-primary)]">MCT(메타셀)</strong> 프로토콜을 함께 적용해, 세포 생존율과 활성 환경을 더욱 안정적으로 확보합니다.
              MCT는 주입 환경의 균질도를 높이고 유효 성분 전달력을 보완해 개인별 반응 편차를 줄이는 데 도움을 줍니다.
            </p>
            <p>
              그 결과, 동일한 줄기세포 시술이라도 <strong className="text-[var(--text-primary)]">초기 회복 체감 속도</strong>와 <strong className="text-[var(--text-primary)]">유지력</strong> 측면에서 더 일관된 임상 만족도를 기대할 수 있습니다.
            </p>
          </div>
          <div className="mt-10 rounded-lg border border-[var(--text-primary)]/20 bg-[var(--bg-page)] p-6">
            <h4 className="font-[family-name:var(--font-kr-heading)] text-[15px] font-medium text-[var(--text-primary)] uppercase tracking-wide">
              key point
            </h4>
            <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              오마쥬클리닉에서는 FDA와 KFDA의 허가를 받은 Smart M-cell2만을 사용하고 있습니다. 다수의 특허기술로 배양하지 않아도 감염의 위험이 적고 많은 줄기세포, 성장인자, 백혈구 등 재생에 필수적인 세포의 양을 추출할 수 있어 이식되었을 때, 더 빠르고 탁월한 효과를 볼 수 있습니다.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              특허기술로 배양하지 않고 시술받을 수 있어 감염의 위험이 적으며 체내에 이식되었을 때 더 빠르고 탁월한 효과를 얻을 수 있는 재생에 필수적인 5가지의 세포를 모두 함께 추출하여 이식을 진행합니다.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              여기에 MCT(메타셀) 프로토콜을 병행하여 줄기세포 활성 환경을 정밀하게 맞춤 설계함으로써, 면역·순환·항노화 목적의 치료에서 보다 안정적이고 예측 가능한 결과를 목표로 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 4: 오마쥬클리닉 맞춤 시술 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <span className="sec-label block">CUSTOMIZED</span>
          <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
            오마쥬클리닉 줄기세포 맞춤 시술입니다.
          </h2>
          <div className="mt-8 space-y-6 font-[family-name:var(--font-kr-body)] text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            <p className="font-medium text-[var(--text-primary)]">당일 바로 시술 가능합니다.</p>
            <p>
              배양없이 농축된 줄기세포를 혈관주사 (정맥주사)를 통해 주입하는 방법으로 피로감을 줄여주고 활력을 높여주며, 면역력을 증강을 해줍니다.
            </p>
            <p>
              혈관으로 이식된 줄기세포는 혈관을 타고 우리 몸을 돌며 재생이 필요한 곳에 더욱 집중하고 혈액공급이 부족한 곳은 새로운 혈관을 신생하여 원활하게 산소와 영양소를 공급합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 섹션 5: 시술 추천 대상 */}
      <section className="section-block relative bg-[var(--bg-card)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">FOR YOU</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              줄기세포치료, 누가 받아야 할까요?
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

      {/* 섹션 6: 시술 후 주의사항 */}
      <section className="section-block relative bg-[var(--bg-page)]">
        <div className="mx-auto max-w-[800px]">
          <div className="sec-head text-center">
            <span className="sec-label block">AFTERCARE</span>
            <h2 className="sec-title mt-3 text-[clamp(24px,3.5vw,32px)]">
              시술 후 주의사항
            </h2>
          </div>
          <ul className="mt-10 space-y-3">
            {AFTERCARE_ITEMS.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 rounded-lg border border-[var(--border-page)] bg-[var(--bg-card)] px-5 py-4"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)]/10 font-[family-name:var(--font-en-display)] text-[13px] font-medium text-[var(--text-primary)]">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-[1.7] text-[var(--text-secondary)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-block section-dark relative">
        <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
        <div className="relative mx-auto max-w-[560px] text-center">
          <p className="sec-title text-[clamp(18px,2.2vw,22px)] text-white">줄기세포치료 상담</p>
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
