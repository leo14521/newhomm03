"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";

interface MobileHeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

/** 모바일 전용: 로고 + 햄버거 (PC에서는 미노출) */
export default function MobileHeader({ onMenuToggle, menuOpen }: MobileHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] flex h-14 items-center justify-between border-b border-[color-mix(in_srgb,var(--accent-terracotta)_18%,transparent)] bg-white/95 px-4 backdrop-blur-md lg:hidden">
      <Logo href="/" tone="dark" className="w-[52px]" />
      <button
        type="button"
        onClick={onMenuToggle}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={menuOpen}
      >
        <span
          className={`block h-0.5 w-5 bg-[var(--color-text-primary)] transition-transform ${
            menuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-[var(--color-text-primary)] transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-[var(--color-text-primary)] transition-transform ${
            menuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>
    </header>
  );
}
