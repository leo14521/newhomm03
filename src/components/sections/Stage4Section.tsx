"use client";

/** 4단계: 추가 카피 + 이미지 사라지고 중앙 컨셉 카피 */
const BG =
  "https://images.squarespace-cdn.com/content/v1/5c2949b92714e521cd53b557/1697724972854-3C0ZDJ2MTJY6MOFN0T73/LA+MONTAGNE+SE+LEVE+AUX+AURORES+IX.jpg?format=1000w&q=80&w=2000";

export default function Stage4Section() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#e8e6e3]"
      data-stage="4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{ backgroundImage: `url(${BG})` }}
        data-stage4-bg
      />
      <div className="absolute inset-0 bg-black/20" data-stage4-overlay />
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 text-center"
        data-stage4-content
      >
        <p className="vertical-text absolute left-10 top-1/2 -translate-y-1/2 font-[family-name:var(--font-display)] text-2xl tracking-widest text-[var(--color-text-primary)] md:left-16 md:text-3xl">
          MY PRIDE
        </p>
        <h2 className="font-[family-name:var(--font-kr-serif)] text-[clamp(1.5rem,3vw,2.25rem)] font-light text-[var(--color-text-primary)]">
          오마쥬,
          <br />
          나의 자부심이 되는 곳
        </h2>
      </div>
    </section>
  );
}
