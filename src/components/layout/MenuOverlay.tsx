"use client";

import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { getMenuOverlayItems, MENU_FOOTER_SOCIAL } from "@/config/menuOverlay";
import Logo from "@/components/ui/Logo";
import { useLocale } from "@/i18n/LocaleProvider";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const { locale, t } = useLocale();
  const menuItems = getMenuOverlayItems(locale);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);
  const [mobileSubVisible, setMobileSubVisible] = useState(false);

  const activeItem = activeIndex !== null ? menuItems[activeIndex] : null;
  const hasChildren = Boolean(activeItem?.children && activeItem.children.length > 0);
  const activeSub =
    hasChildren && activeSubIndex !== null ? activeItem?.children?.[activeSubIndex] ?? null : null;
  const hasGrandChildren = Boolean(activeSub?.children && activeSub.children.length > 0);

  /* 닫을 때·열 때마다 단계 상태 초기화 — 닫은 뒤 다시 열면 이전 2·3단이 남는 문제 방지 */
  useLayoutEffect(() => {
    setActiveIndex(null);
    setActiveSubIndex(null);
    setMobileSubVisible(false);
  }, [open]);

  const handleItemClick = (index: number) => {
    const item = menuItems[index];
    if (item.children?.length) {
      setActiveIndex(index);
      setActiveSubIndex(null);
      setMobileSubVisible(true);
    } else {
      onClose();
    }
  };

  const handleBack = () => {
    setMobileSubVisible(false);
    setActiveIndex(null);
    setActiveSubIndex(null);
  };

  const handleTierBack = () => {
    setActiveSubIndex(null);
  };

  return (
    <div
      className={`menu-overlay ${open ? "menu-open" : ""}`}
      aria-hidden={!open}
      role="dialog"
      aria-label="메뉴"
    >
      <div className="menu-overlay-header">
        <Logo href="/" className="logo-link w-[70px]" tone="dark" />
        <button type="button" className="menu-overlay-close" onClick={onClose} aria-label="메뉴 닫기">
          <CloseIcon />
        </button>
      </div>

      <div className="menu-overlay-content relative">
        <div className={`menu-list flex flex-col gap-4 ${mobileSubVisible ? "max-md:hidden" : ""}`}>
          <button type="button" className="menu-back-btn" onClick={handleBack}>
            <span aria-hidden>←</span>
            <span>{t("signatureCommon.menuOverlayBack")}</span>
          </button>
          {menuItems.map((item, i) =>
            item.children?.length ? (
              <div
                key={`${item.link}-${i}`}
                role="button"
                tabIndex={0}
                className={`menu-item ${activeIndex === i ? "active" : ""}`}
                onClick={() => handleItemClick(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleItemClick(i);
                  }
                }}
              >
                <div className="flex flex-col gap-0.5">
                  <span className={`menu-item-title ${item.title === "시그니처" || item.title === "Signature" ? "font-bold" : ""}`}>
                    {item.title}
                  </span>
                  <span className="menu-item-subtitle">{item.subtitle}</span>
                </div>
                <span className="text-[#ccc] text-xs" aria-hidden>
                  →
                </span>
              </div>
            ) : (
              <Link key={`${item.link}-${i}`} href={item.link} className="menu-item" onClick={onClose}>
                <div className="flex flex-col gap-0.5">
                  <span className={`menu-item-title ${item.title === "시그니처" || item.title === "Signature" ? "font-bold" : ""}`}>
                    {item.title}
                  </span>
                  <span className="menu-item-subtitle">{item.subtitle}</span>
                </div>
                <span className="text-[#ccc] text-xs" aria-hidden>
                  →
                </span>
              </Link>
            )
          )}
        </div>

        <div className="menu-overlay-line" aria-hidden />

        {/* 서브: 한 열에서 2단 ↔ 3단 전환 (데스크톱에서 동일 목록이 두 열에 중복되지 않음) */}
        <div
          key={activeIndex ?? "none"}
          className={`menu-list menu-sub-list flex flex-col gap-4 ${!hasChildren ? "hidden" : ""} ${
            hasChildren && !mobileSubVisible ? "max-md:hidden" : ""
          }`}
        >
          {hasChildren && activeItem?.children && (
            <>
              {hasGrandChildren && activeSub?.children ? (
                <>
                  <button type="button" className="menu-tier-back" onClick={handleTierBack}>
                    <span aria-hidden>←</span>
                    {t("signatureCommon.parentMenu")}
                  </button>
                  {activeSub.children.map((sub3) => (
                    <Link key={sub3.link} href={sub3.link} className="menu-item" onClick={onClose}>
                      <div className="flex flex-col gap-0.5">
                        <span className="menu-item-title">{sub3.title}</span>
                        {sub3.subtitle ? (
                          <span className="menu-item-subtitle">{sub3.subtitle}</span>
                        ) : null}
                      </div>
                      <span className="text-[#ccc] text-xs" aria-hidden>
                        →
                      </span>
                    </Link>
                  ))}
                </>
              ) : (
                activeItem.children.map((sub, subIndex) =>
                  sub.children?.length ? (
                    <div
                      key={sub.link}
                      role="button"
                      tabIndex={0}
                      className={`menu-item ${activeSubIndex === subIndex ? "active" : ""}`}
                      onClick={() => setActiveSubIndex(subIndex)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveSubIndex(subIndex);
                        }
                      }}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="menu-item-title">{sub.title}</span>
                        {sub.subtitle ? <span className="menu-item-subtitle">{sub.subtitle}</span> : null}
                      </div>
                      <span className="text-[#ccc] text-xs" aria-hidden>
                        →
                      </span>
                    </div>
                  ) : (
                    <Link key={sub.link} href={sub.link} className="menu-item" onClick={onClose}>
                      <div className="flex flex-col gap-0.5">
                        <span className="menu-item-title">{sub.title}</span>
                        {sub.subtitle ? <span className="menu-item-subtitle">{sub.subtitle}</span> : null}
                      </div>
                      <span className="text-[#ccc] text-xs" aria-hidden>
                        →
                      </span>
                    </Link>
                  )
                )
              )}
            </>
          )}
        </div>
      </div>

      <div className="menu-overlay-footer">
        {MENU_FOOTER_SOCIAL.map((s) => (
          <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[#333]">
            {s.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
