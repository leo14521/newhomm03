"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getLandingImage } from "@/utils/landingImages";
import { useLocale } from "@/i18n/LocaleProvider";

gsap.registerPlugin(ScrollTrigger);

interface SignatureHeroProps {
  title: string;
  titleKr?: string;
  description: string;
  /** false면 배경 인물·스톡 이미지 없이 톤만 사용 (여성성형 등) */
  showBackgroundImage?: boolean;
  imageIndex?: number;
}

/**
 * 시그니처 페이지 공통 히어로 — 토탈이레이즈 스타일
 */
export function SignatureHero({
  title,
  titleKr,
  description,
  showBackgroundImage = true,
  imageIndex = 0,
}: SignatureHeroProps) {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      if (showBackgroundImage && bgRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.set(bgRef.current, { y: self.progress * 80 });
          },
        });
      }
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 10 },
          { y: 0, duration: 0.35, ease: "power2.out", delay: 0.02, clearProps: "transform" }
        );
      }
    },
    { scope: sectionRef, dependencies: [showBackgroundImage] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[75vh] items-end overflow-hidden bg-[var(--bg-page)] lg:min-h-[85vh]"
      aria-label={title}
    >
      {showBackgroundImage ? (
        <>
          <div
            ref={bgRef}
            className="absolute inset-0 -top-[15%] h-[130%] w-full bg-cover bg-center bg-no-repeat opacity-[0.12] grayscale"
            style={{
              backgroundImage: `url(${getLandingImage(imageIndex)})`,
            }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-[var(--bg-page)]/95 to-transparent" aria-hidden />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 bg-[var(--bg-card)]"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_75%_-10%,rgba(217,164,135,0.14),transparent_50%),radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(45,42,38,0.04),transparent_45%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent opacity-90" />
        </div>
      )}

      <div ref={textRef} className="relative z-10 w-full px-6 pb-20 pt-28 lg:px-[var(--pad-global)] lg:pb-28 lg:pt-36">
        <div className="max-w-[900px]">
          <span className="sec-label mb-4 block uppercase">
            {t("pages.signatureBadge")}
          </span>
          <h1 className="sec-title font-[family-name:var(--font-en-display)] text-[clamp(36px,5.5vw,56px)] font-light leading-[1.2] tracking-tight">
            {title}
          </h1>
          {titleKr && (
            <p className="mt-2 font-[family-name:var(--font-heading-kr)] text-[clamp(18px,2.2vw,22px)] tracking-[0.02em] text-[var(--text-primary)]">
              {titleKr}
            </p>
          )}
          <p className="mt-6 max-w-[520px] text-[15px] leading-relaxed text-[var(--text-secondary)] lg:text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
