"use client";

/** 6단계: 로고 문양 인터랙션 + HOMMAGE 강조 */
export default function Stage6Section() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#1a1918]"
      data-stage="6"
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-6" data-stage6-content>
        <div data-stage6-symbol className="opacity-90">
          <LogoSymbolInteractive className="h-48 w-48 md:h-64 md:w-64" />
        </div>
        <p className="mt-8 font-[family-name:var(--font-display)] text-2xl tracking-[0.3em] text-white md:text-3xl">
          HOMMAGE
        </p>
        <p className="mt-2 font-[family-name:var(--font-kr)] text-sm text-white/70">
          The Private Masterpiece
        </p>
      </div>
    </section>
  );
}

function LogoSymbolInteractive({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      data-symbol-svg
    >
      <circle cx="100" cy="100" r="92" stroke="rgba(255,255,255,0.9)" strokeWidth="2" data-symbol-ring />
      <circle cx="100" cy="100" r="72" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" data-symbol-ring />
      <circle cx="100" cy="100" r="52" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" data-symbol-ring />
      <circle cx="100" cy="100" r="32" stroke="rgba(255,255,255,0.9)" strokeWidth="2" data-symbol-ring />
      <path
        d="M100 68v64M68 100h64"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth="2.5"
        strokeLinecap="round"
        data-symbol-cross
      />
    </svg>
  );
}
