"use client";

/** 3단계: 실제 클리닉 이미지 */
const BG = "/images/clinic/interior/02.jpg";

export default function Stage3Section() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-bg-dark)]"
      data-stage="3"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      {/* 투명한 문자가 횡으로 통과 (마퀴 - outline 스타일) */}
      <div className="absolute inset-0 flex items-center overflow-hidden opacity-30">
        <div
          className="marquee-track flex w-max shrink-0 gap-0 text-white"
          style={{
            animation: "marquee 35s linear infinite",
            WebkitTextStroke: "1px rgba(255,255,255,0.5)",
            color: "transparent",
          }}
        >
          <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(4rem,15vw,12rem)]">
            ENERGY — MY TRUST — HOMMAGE —
          </span>
          <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(4rem,15vw,12rem)]">
            ENERGY — MY TRUST — HOMMAGE —
          </span>
        </div>
      </div>
      {/* 흰색 카피 + 로고 디졸브로 등장 (GSAP에서 opacity/scale 트리거) */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 text-white"
        data-stage3-content
      >
        <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] tracking-wide">
          NOT
          <br />
          JUST CLINIC
        </h2>
        <p className="mt-6 font-[family-name:var(--font-kr)] text-sm text-white/90">
          오마쥬, 에너지를 얻고 리프레쉬할 수 있는 곳
          <br />
          오히려 아름다움은 덤
        </p>
        {/* 로고 심볼 (Draw SVG 영역) */}
        <div className="mt-10" data-stage3-logo>
          <LogoSymbol className="h-24 w-24 text-white md:h-32 md:w-32" />
        </div>
      </div>
    </section>
  );
}

function LogoSymbol({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="42" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1.2" />
      <path d="M60 36v48M36 60h48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
