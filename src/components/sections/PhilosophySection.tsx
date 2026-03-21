"use client";

/** Philosophy 섹션 — 로컬 클리닉 이미지 (디자인: bg-cover + 오버레이) */
const PHILO_IMAGE = "/images/clinic/interior/01.jpg";

export default function PhilosophySection() {
  return (
    <section
      id="about"
      className="grid min-h-screen w-full grid-cols-1 overflow-hidden bg-[#f9f8f7] lg:grid-cols-2"
      data-philo-section
    >
      {/* Fixed image side */}
      <div
        className="relative min-h-[50vh] w-full lg:min-h-screen"
        data-philo-image-wrap
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${PHILO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden />
      </div>
      {/* Text side - mask reveal */}
      <div
        className="relative flex flex-col justify-center overflow-hidden px-8 py-16 lg:px-20 lg:py-24"
        data-philo-text-wrap
      >
        <div className="philo-mask relative overflow-hidden" data-philo-mask>
          <div className="space-y-6" data-philo-content>
            <span className="block font-[family-name:var(--font-display)] text-xs tracking-[0.3em] text-[var(--color-accent)]">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-[family-name:var(--font-kr-serif)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-light leading-snug text-[var(--color-text-primary)]">
              아름다움은 만들어내는 것이 아니라,
              <br />
              당신 안에 숨겨진{" "}
              <span className="font-[family-name:var(--font-display)] italic text-[var(--color-accent)] underline underline-offset-2">
                빛
              </span>
              을 발견하는 것입니다.
            </h2>
            <div className="max-w-xl space-y-5 font-[family-name:var(--font-kr)] text-[17px] font-light leading-relaxed text-[#444]">
              <p>
                오마쥬 의원은 진부한 공장형 시술을 단호히 거부합니다. 우리는
                당신의 고유한 얼굴이 지닌 서사에 집중합니다.
              </p>
              <p>
                마치 갤러리에서 유일한 예술 작품을 감상하듯,
                <br />
                오직 당신만을 위한 프라이빗하고 깊이 있는 의학적 큐레이션을
                경험해 보세요.
              </p>
              <p>
                시간이 흘러도 변치 않는 가치,
                <br />
                본연의 우아함을 찾아드리는 여정을 약속합니다.
              </p>
            </div>
            <div className="flex items-center gap-5 pt-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-accent)]/5 text-[var(--color-accent)]">
                <span className="text-lg">✒</span>
              </div>
              <span className="font-[family-name:var(--font-display)] text-xl text-[#111]">
                Medical Director. Hong Gil Dong
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
