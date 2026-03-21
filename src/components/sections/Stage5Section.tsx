"use client";

/** 5단계: 실제 클리닉 이미지 */
const BG = "/images/clinic/interior/04.jpg";

export default function Stage5Section() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-bg-dark)]"
      data-stage="5"
    >
      <div
        className="absolute inset-0 origin-center scale-90 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
        data-stage5-bg
      />
      <div className="absolute inset-0 bg-black/35" />
      <div
        className="relative z-10 max-w-3xl px-6 text-center text-white"
        data-stage5-content
      >
        <p className="font-[family-name:var(--font-en)] text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium italic">
          FINALLY,
        </p>
        <p className="mt-1 font-[family-name:var(--font-kr)] text-sm text-white/80">
          결국,
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] tracking-wide">
          HOMMAGE
        </h2>
        <p className="mt-2 font-[family-name:var(--font-kr)] text-sm text-white/90">
          오마쥬입니다.
        </p>
      </div>
    </section>
  );
}
