"use client";

import { Fragment } from "react";
import Link from "next/link";
import { SIDEBAR_GROUPS } from "@/config/sidebar";
import { IconFa } from "./IconFa";

/**
 * 사이드바: sidebar-desk > sb-nav (sb-btn-link + sb-circle + sb-label, sb-divider)
 * PC: 좌측 고정 100px | 모바일: 하단 고정 가로 스크롤
 */
export default function Aside() {
  return (
    <>
      {/* PC: 레퍼런스 HTML 그대로 — aside.sidebar-desk > nav.sb-nav > sb-btn-link / sb-divider */}
      <aside
        className="sidebar-desk fixed left-0 top-0 z-[var(--z-sidebar)] hidden h-screen w-[100px] border-r border-[#f0f0f0] bg-white lg:block"
        aria-label="사이드바"
      >
        <nav className="sb-nav">
          {SIDEBAR_GROUPS.map((group, gi) => (
            <Fragment key={gi}>
              {group.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`sb-btn-link${item.highlight ? " highlight" : ""}`}
                  title={item.label}
                >
                  <div className="sb-circle">
                    <IconFa name={item.icon} className="sb-icon" />
                  </div>
                  <span className="sb-label">{item.label}</span>
                </Link>
              ))}
              {gi < SIDEBAR_GROUPS.length - 1 && <div className="sb-divider" />}
            </Fragment>
          ))}
        </nav>
      </aside>

      {/* 모바일: 왼쪽 2/3 너비만 차지 (화면 전체 가리지 않음) */}
      <aside
        className="sidebar-desk sidebar-mobile fixed left-0 top-0 z-[var(--z-sidebar)] h-screen w-2/3 max-w-[280px] border-r border-[#f0f0f0] bg-white/95 backdrop-blur-md lg:hidden"
        aria-label="사이드바"
      >
        <nav className="sb-nav sb-nav-mobile flex flex-col items-center justify-start gap-1 overflow-y-auto px-2 py-5">
          {SIDEBAR_GROUPS.map((group, gi) => (
            <Fragment key={gi}>
              {group.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`sb-btn-link${item.highlight ? " highlight" : ""}`}
                  title={item.label}
                >
                  <div className="sb-circle">
                    <IconFa name={item.icon} className="sb-icon" />
                  </div>
                  <span className="sb-label">{item.label}</span>
                </Link>
              ))}
              {gi < SIDEBAR_GROUPS.length - 1 && <div className="sb-divider" />}
            </Fragment>
          ))}
        </nav>
      </aside>
    </>
  );
}
