"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen bg-white pt-14 lg:pt-0">
      {/* 섹션 1: OUR PHILOSOPHY — 왼쪽 이미지, 오른쪽 텍스트 */}
      <section className="section-philo relative overflow-hidden" id="about">
        <div className="philo-wrap relative mx-auto flex max-w-[1200px] flex-col gap-16 px-6 py-16 lg:flex-row lg:items-center lg:gap-20 lg:px-[var(--pad-global)] lg:py-24">
          <div className="art-frame philo-visual relative flex-shrink-0 w-full aspect-[3/4] overflow-hidden rounded-sm bg-[var(--bg-card)] shadow-[var(--shadow-card)] lg:w-[420px] order-2 lg:order-1">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5c2949b92714e521cd53b557/1697724972854-3C0ZDJ2MTJY6MOFN0T73/LA+MONTAGNE+SE+LEVE+AUX+AURORES+IX+-Maxime+Bellaunay+-+2023+-+Credit+photo+Studio+Villa+Monica.jpg?format=1000w"
              alt="오마쥬 철학 비주얼"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
          </div>
          <div className="philo-text-wrap reveal-text relative flex-1 min-w-0 order-1 lg:order-2">
            <span className="sec-sub philo-sub block">OUR PHILOSOPHY</span>
            <h2 className="philo-tit font-[family-name:var(--font-kr-cinematic-serif)] tracking-tight">
              아름다움은 만들어내는 것이 아니라,
              <br />
              당신 안에 숨겨진 <span className="highlight">빛</span>을 발견하는 것입니다.
            </h2>
            <div className="philo-desc space-y-6 font-[family-name:var(--font-kr-body)] mt-10">
              <p>오마쥬 의원은 진부한 공장형 시술을 단호히 거부합니다. 우리는 당신의 고유한 얼굴이 지닌 서사에 집중합니다.</p>
              <p>
                마치 갤러리에서 유일한 예술 작품을 감상하듯,
                <br />
                오직 당신만을 위한 프라이빗하고 깊이 있는 의학적 큐레이션을 경험해 보세요.
              </p>
              <p>
                시간이 흘러도 변치 않는 가치,
                <br />
                본연의 우아함을 찾아드리는 여정을 약속합니다.
              </p>
            </div>
            <div className="philo-footer flex flex-wrap items-center gap-6 mt-12">
              <div className="official-seal">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </div>
              <div className="doctor-sign">Park Yuna, Representative Director, Hommage Clinic</div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-6 py-12">
        <Link
          href="/"
          className="inline-block font-[family-name:var(--font-en-display)] text-sm tracking-widest text-[var(--text-primary)] hover:underline"
        >
          ← HOME
        </Link>
      </div>
    </main>
  );
}
