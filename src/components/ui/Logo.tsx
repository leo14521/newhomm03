"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
  href?: string | null;
  tone?: "dark" | "light";
  /**
   * 헤더 전용: PNG 실루엣(선·테두리)에만 그라데이션 — 바깥 사각 링/글로우 없음
   */
  variant?: "image" | "headerStrokeGradient";
}

const LOGO_MARK_SRC = "/logo-mark-terracotta.png";

/** 브랜드 로고 이미지 (테라코타 톤) */
export default function Logo({
  className = "",
  href = "/",
  tone = "dark",
  variant = "image",
}: LogoProps) {
  void tone;

  const mark =
    variant === "headerStrokeGradient" ? (
      <span
        className={`brand-logo brand-logo--header-mask ${className}`}
        aria-hidden
      />
    ) : (
      <img
        src={LOGO_MARK_SRC}
        alt="Hommage Clinic"
        className={`brand-logo h-auto w-[54px] object-contain sm:w-[60px] ${className}`}
        width={60}
        height={50}
      />
    );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex max-w-full shrink-0 items-center"
        aria-label="Hommage Clinic 홈"
      >
        {mark}
      </Link>
    );
  }
  return mark;
}
