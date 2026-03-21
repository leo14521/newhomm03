"use client";

const MARQUEE_TEXT = "THE PRIVATE MASTERPIECE — HOMMAGE — BLANC DE VIE — ";

export default function MarqueeSection() {
  const content = (
    <span
      className="whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(3rem,12vw,10rem)] font-normal tracking-tight text-[var(--color-text-primary)]"
      aria-hidden
    >
      {MARQUEE_TEXT.repeat(3)}
    </span>
  );
  return (
    <section
      id="marquee"
      className="relative z-10 flex h-screen w-full flex-col justify-center overflow-hidden bg-[var(--color-bg-deep)] py-8"
      data-marquee-section
    >
      <div className="flex w-full flex-1 items-center overflow-hidden">
        <div
          className="marquee-track flex w-max shrink-0 gap-0"
          data-marquee
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {content}
          {content}
        </div>
      </div>
    </section>
  );
}
