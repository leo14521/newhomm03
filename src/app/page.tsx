"use client";

import { useState, useRef, useEffect, useCallback, useMemo, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { YT_MAIN_ID, YT_MAIN_CUSTOM_POSTER } from "@/config/homePage";
import {
  getBrandMessageLabel,
  getBrandSloganForLocale,
  getClinicAddressForLocale,
  CLINIC_MAP_QUERY,
  CLINIC_NAVER_PLACE_URL,
  CLINIC_TEL,
} from "@/config/brand";
import { IMAGE_POOL, SCROLL_ANIMATION } from "@/config/homeContent";
import {
  getCurationSkin,
  getCurationWomen,
  getHomeContentSections,
  getHomeDoctors,
  getYtMainDisplayCaption,
  getYtVideos,
} from "@/config/homeLocaleData";
import { REP_GRID_BY_LOCALE } from "@/config/homeRepItems";
import { localeToMapHl } from "@/i18n/localeHtml";
import { useLocale } from "@/i18n/LocaleProvider";
import HeroVideo from "@/components/ui/HeroVideo";
import Logo from "@/components/ui/Logo";
gsap.registerPlugin(ScrollTrigger);

type TourZone = {
  id: "exterior" | "desk" | "lounge" | "operation" | "recovery" | "powder";
  label: string;
  desc: string;
  images: readonly string[];
};

const HOSPITAL_TOUR_ZONES: readonly TourZone[] = [
  {
    id: "exterior",
    label: "외관/입구",
    desc: "클리닉의 첫 인상을 만드는 입구 및 진입 동선",
    images: [
      "/images/interior/079A4367-HDR.jpg",
      "/images/interior/079A4450.jpg",
      "/images/interior/079A4453.jpg",
      "/images/interior/079A4456.jpg",
      "/images/interior/079A4473.jpg",
    ],
  },
  {
    id: "desk",
    label: "데스크",
    desc: "도착 직후 맞이하는 프런트 리셉션 존",
    images: [
      "/images/interior/079A4342-HDR.jpg",
      "/images/interior/079A4345-HDR.jpg",
      "/images/interior/079A4348-HDR.jpg",
      "/images/interior/079A4370-HDR.jpg",
      "/images/interior/079A4455.jpg",
    ],
  },
  {
    id: "lounge",
    label: "대기실",
    desc: "상담 전후 편안히 머무는 라운지 공간",
    images: [
      "/images/interior/079A4351-HDR.jpg",
      "/images/interior/079A4361-HDR.jpg",
      "/images/interior/079A4364-HDR.jpg",
      "/images/interior/079A4452.jpg",
      "/images/interior/079A4466.jpg",
    ],
  },
  {
    id: "operation",
    label: "수술방",
    desc: "정밀 시술을 위한 프로시저 룸",
    images: [
      "/images/interior/079A4396-HDR.jpg",
      "/images/interior/079A4399-HDR.jpg",
      "/images/interior/079A4405-HDR.jpg",
      "/images/interior/079A4408-HDR-Pano.jpg",
      "/images/interior/079A4469.jpg",
    ],
  },
  {
    id: "recovery",
    label: "회복실",
    desc: "시술 후 안정적인 휴식을 위한 회복 존",
    images: [
      "/images/interior/079A4417-HDR.jpg",
      "/images/interior/079A4420-HDR.jpg",
      "/images/interior/079A4435-HDR.jpg",
      "/images/interior/079A4438-HDR.jpg",
      "/images/interior/079A4441-HDR.jpg",
    ],
  },
  {
    id: "powder",
    label: "파우더룸",
    desc: "프라이빗하게 정돈 가능한 파우더룸",
    images: [
      "/images/interior/079A4426-HDR.jpg",
      "/images/interior/079A4429-HDR.jpg",
      "/images/interior/079A4444-HDR.jpg",
      "/images/interior/079A4462.jpg",
      "/images/interior/079A4472.jpg",
    ],
  },
] as const;

export default function HomePage() {
  const { locale, t } = useLocale();
  const isKo = locale === "ko";
  const content = getHomeContentSections(locale);
  const doctors = getHomeDoctors(locale);
  const curationWomenList = getCurationWomen(locale);
  const curationSkinList = getCurationSkin(locale);
  const ytList = getYtVideos(locale);
  const repGrid = REP_GRID_BY_LOCALE[locale] ?? REP_GRID_BY_LOCALE.en;
  const doctorsVisible = useMemo(() => doctors.filter((doc) => doc.id !== "kim"), [doctors]);

  const [baWipOpen, setBaWipOpen] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cName, setCName] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cInterest, setCInterest] = useState("");
  const [cMessage, setCMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  /** null → 메인 영상(YT_MAIN_ID). 값 있음 → 사이드 목록에서 선택한 id */
  const [ytListPick, setYtListPick] = useState<string | null>(null);
  /** 메인 영상 ID를 바꾼 뒤에도 예전에 고른 사이드 id에 묶이지 않도록 초기화 */
  useEffect(() => {
    setYtListPick(null);
  }, [YT_MAIN_ID]);
  const ytActiveId = ytListPick ?? YT_MAIN_ID;
  const ytDisplayCaption = useMemo(() => {
    if (ytActiveId !== YT_MAIN_ID) return locale === "ko" ? "오마쥬 의원" : "Hommage Clinic";
    return getYtMainDisplayCaption(locale);
  }, [ytActiveId, locale]);
  const ytCustomPosterConfigured = useMemo(() => {
    if (ytActiveId === YT_MAIN_ID && YT_MAIN_CUSTOM_POSTER) return YT_MAIN_CUSTOM_POSTER;
    const row = ytList.find((v) => v.id === ytActiveId);
    return row?.posterSrc ?? null;
  }, [ytActiveId, ytList]);
  const [ytPlayerOpen, setYtPlayerOpen] = useState(false);
  const [ytPosterImgFailed, setYtPosterImgFailed] = useState(false);
  const [activeTourZoneId, setActiveTourZoneId] = useState<TourZone["id"]>("desk");
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  useEffect(() => {
    setYtPlayerOpen(false);
    setYtPosterImgFailed(false);
  }, [ytActiveId]);
  const activeTourZone =
    HOSPITAL_TOUR_ZONES.find((zone) => zone.id === activeTourZoneId) ?? HOSPITAL_TOUR_ZONES[0];
  const activeTourImages = activeTourZone.images;
  const safeActiveTourIndex = Math.min(activeTourIndex, Math.max(activeTourImages.length - 1, 0));
  useEffect(() => {
    setActiveTourIndex(0);
  }, [activeTourZoneId]);

  useEffect(() => {
    if (!baWipOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBaWipOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [baWipOpen]);

  const loaderRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const screenBgRef = useRef<HTMLDivElement>(null);
  const mainSectionsRef = useRef<HTMLDivElement>(null);
  const heroSequenceRef = useRef<HTMLDivElement>(null);
  const screenTxtRef = useRef<HTMLDivElement>(null);
  const doctorScrollRef = useRef<HTMLDivElement>(null);
  const philoRef = useRef<HTMLElement>(null);
  const repRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const curationRef = useRef<HTMLElement>(null);
  const knowhowRef = useRef<HTMLElement>(null);
  const careRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const heroAuroraRef = useRef<HTMLDivElement>(null);
  const tourRef = useRef<HTMLElement>(null);
  const tourStageRef = useRef<HTMLDivElement>(null);
  const [solutionChoice, setSolutionChoice] = useState<"women" | "skin" | null>(null);
  /** 로더 타임라인이 끝까지 도달하지 못할 때(React Strict Mode 등) 백지 방지 */
  const loaderFallbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearLoaderFallbackTimer = useCallback(() => {
    if (loaderFallbackTimerRef.current != null) {
      clearTimeout(loaderFallbackTimerRef.current);
      loaderFallbackTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    loaderFallbackTimerRef.current = setTimeout(() => {
      loaderFallbackTimerRef.current = null;
      setLoaderVisible(false);
    }, 3800);
    return () => {
      if (loaderFallbackTimerRef.current != null) {
        clearTimeout(loaderFallbackTimerRef.current);
        loaderFallbackTimerRef.current = null;
      }
    };
  }, []);

  // ---------- Loader: GSAP timeline 후 숨김 (ref 준비·null 타깃·Strict Mode cleanup) ----------
  useGSAP(
    () => {
      let cancelled = false;
      let activeTl: gsap.core.Timeline | null = null;
      const startId = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled) return;
          const loaderEl = loaderRef.current;
          if (!loaderEl) {
            clearLoaderFallbackTimer();
            setLoaderVisible(false);
            return;
          }
          const logo = loaderEl.querySelector(".loader-logo");
          const line = loaderEl.querySelector(".loader-line");
          activeTl?.kill();
          const tl = gsap.timeline();
          activeTl = tl;
          if (logo) tl.to(logo, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
          if (line) tl.to(line, { width: "100%", duration: 0.8 });
          tl.to(loaderEl, { y: "-100%", duration: 1.2, delay: 0.2, ease: "power4.inOut" }).call(() => {
            activeTl = null;
            clearLoaderFallbackTimer();
            setLoaderVisible(false);
          });
        });
      });
      return () => {
        cancelled = true;
        cancelAnimationFrame(startId);
        activeTl?.kill();
        activeTl = null;
      };
    },
    { dependencies: [clearLoaderFallbackTimer] }
  );

  // ---------- 메인 화면: 배경 패럴랙스 + 히어로 시퀀스 (이미지 → 텍스트 디졸브 → 중앙 이미지 → 카피) ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const bg = screenBgRef.current;
      const heroSeq = heroSequenceRef.current;
      if (!bg) return;

      const tweens: (gsap.core.Tween | gsap.core.Timeline)[] = [];

      const n1 = bg.querySelector<HTMLElement>(".screenBg-n1");
      const n2 = bg.querySelector<HTMLElement>(".screenBg-n2");
      const n3 = bg.querySelector<HTMLElement>(".screenBg-n3");
      [n1, n2, n3].forEach((layer, i) => {
        if (!layer) return;
        const y = (i + 1) * 12;
        const t = gsap.to(layer, {
          yPercent: -y,
          ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "bottom top", scrub: 1.2 },
        });
        tweens.push(t);
      });

      if (heroSeq) {
        const seqBg = heroSeq.querySelector<HTMLElement>("[data-seq-bg]");
        const seqText = heroSeq.querySelector<HTMLElement>("[data-seq-text]");
        const seqCopy = heroSeq.querySelector<HTMLElement>("[data-seq-copy]");
        const seqCopyLine1 = heroSeq.querySelector<HTMLElement>("[data-seq-copy-line1]");
        const seqCopyLine2 = heroSeq.querySelector<HTMLElement>("[data-seq-copy-line2]");
        const seqHint = heroSeq.querySelector<HTMLElement>("[data-seq-hint]");

        if (seqText) gsap.set(seqText, { opacity: 1 });
        if (seqCopy) gsap.set(seqCopy, { autoAlpha: 0 });
        if (seqCopyLine1) gsap.set(seqCopyLine1, { autoAlpha: 0, y: 20 });
        if (seqCopyLine2) gsap.set(seqCopyLine2, { autoAlpha: 0, y: 24 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSeq,
            start: "top top",
            /* 스크롤 양 절반 → 전환·2번째 메시지까지 체감 2배 빠르게 */
            end: "+=200%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        if (seqHint) tl.to(seqHint, { opacity: 0, duration: 0.1 }, 0);
        if (seqText) tl.to(seqText, { opacity: 0, duration: 0.2, ease: "power2.in" }, 0.15);
        if (seqBg) tl.to(seqBg, { opacity: 0, duration: 0.12 }, 0.35);
        if (seqCopy) tl.to(seqCopy, { autoAlpha: 1, duration: 0.5, ease: "power2.out" }, 0.4);
        if (seqCopyLine1) tl.to(seqCopyLine1, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0.42);
        if (seqCopyLine2) tl.to(seqCopyLine2, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out" }, 0.58);

        tweens.push(tl);
      }

      return () => {
        tweens.forEach((t) => t.kill());
      };
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 스크롤 다운 인디케이터 무한 바운스 ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const hint = document.querySelector<HTMLElement>(".scrollDown [data-bounce]");
      if (hint) {
        gsap.to(hint, {
          y: 8,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 히어로 오라 블롭 — 부드러운 플로팅 ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const root = heroAuroraRef.current;
      if (!root) return;
      const orbs = root.querySelectorAll<HTMLElement>(".home-hero-orb");
      if (!orbs.length) return;
      const tw = gsap.to(orbs, {
        y: (i) => (i % 2 === 0 ? -28 : 22),
        x: (i) => (i % 3 === 0 ? -18 : i % 3 === 1 ? 14 : 8),
        scale: (i) => (i === 0 ? 1.06 : i === 1 ? 0.94 : 1.03),
        duration: (i) => 4.2 + i * 1.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      return () => {
        tw.kill();
      };
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 히어로 지나가면 screenBg·screenTxt 숨김 (플로팅 이미지 해결) ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const bg = screenBgRef.current;
      const txt = screenTxtRef.current;
      const about = document.querySelector("#about");
      if (!bg || !txt || !about) return;
      const st = ScrollTrigger.create({
        trigger: about,
        start: "top top",
        onEnter: () => gsap.to([bg, txt], { opacity: 0, duration: 0.4 }),
        onLeaveBack: () => gsap.to([bg, txt], { opacity: 1, duration: 0.4 }),
      });
      return () => st.kill();
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- Scroll reveal (reveal-text) — 생성한 트리거만 정리 ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const els = document.querySelectorAll<HTMLElement>(".reveal-text");
      const triggers: ScrollTrigger[] = [];
      els.forEach((el) => {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          onEnter: () => {
            gsap.to(el, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
          },
        });
        triggers.push(st);
        gsap.set(el, { y: 50, opacity: 0 });
      });
      return () => triggers.forEach((t) => t.kill());
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 의료진: 섹션 헤더 → 원장 → 커넥터 → 부원장 (한 흐름의 스크롤 타임라인) ----------
  useGSAP(
    () => {
      if (loaderVisible) return;
      const root = doctorScrollRef.current;
      if (!root) return;

      const head = root.querySelector<HTMLElement>(".doctor-section-head");
      const connector = root.querySelector<HTMLElement>(".doctor-connector");
      const lineL = root.querySelector<HTMLElement>("[data-doctor-line='left']");
      const lineR = root.querySelector<HTMLElement>("[data-doctor-line='right']");
      const blocks = root.querySelectorAll<HTMLElement>(".doctor-block");

      const headEls = head ? [head] : [];
      const revealEls: HTMLElement[] = [];
      blocks.forEach((b) => {
        b.querySelectorAll<HTMLElement>(".doctor-reveal").forEach((el) => revealEls.push(el));
      });

      gsap.set(headEls, { autoAlpha: 0, y: 32 });
      gsap.set(revealEls, { autoAlpha: 0, y: 40 });
      if (connector) gsap.set(connector, { autoAlpha: 0, y: 12 });
      if (lineL) gsap.set(lineL, { scaleX: 0, transformOrigin: "100% 50%" });
      if (lineR) gsap.set(lineR, { scaleX: 0, transformOrigin: "0% 50%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 70%",
          once: true,
        },
      });

      if (head) tl.to(head, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power3.out" });

      const first = blocks[0];
      if (first) {
        const r = first.querySelectorAll<HTMLElement>(".doctor-reveal");
        tl.to(r, { autoAlpha: 1, y: 0, duration: 0.39, stagger: 0.075, ease: "power3.out" }, head ? "+=0.03" : 0);
      }

      if (connector) {
        tl.to(connector, { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }, "-=0.1");
      }
      if (lineL && lineR) {
        tl.to([lineL, lineR], { scaleX: 1, duration: 0.375, ease: "power2.inOut" }, "<0.025");
      }

      const second = blocks[1];
      if (second) {
        const r = second.querySelectorAll<HTMLElement>(".doctor-reveal");
        tl.to(r, { autoAlpha: 1, y: 0, duration: 0.39, stagger: 0.075, ease: "power3.out" }, "+=0.04");
      }

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { dependencies: [loaderVisible] }
  );

  // ---------- 섹션별 스크롤 리빌 (창의적·적절한 등장) ----------
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.philosophy.enabled) return;
      const wrap = philoRef.current?.querySelector(".philo-wrap");
      if (wrap) {
        gsap.fromTo(wrap, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.15, ease: "power3.out", scrollTrigger: { trigger: philoRef.current, start: "top 82%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.rep.enabled) return;
      const cards = repRef.current?.querySelectorAll<HTMLElement>(".rep-card");
      if (cards?.length) {
        gsap.fromTo(cards, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: repRef.current, start: "top 80%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible) return;
      const section = tourRef.current;
      if (!section) return;
      const revealTargets = section.querySelectorAll<HTMLElement>(".tour-reveal");
      const cardTargets = section.querySelectorAll<HTMLElement>(".tour-card");
      gsap.set(revealTargets, { autoAlpha: 0, y: 24 });
      gsap.set(cardTargets, { autoAlpha: 0, y: 16 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });
      tl.to(revealTargets, {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      }).to(
        cardTargets,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.5"
      );
      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { dependencies: [loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible) return;
      const stage = tourStageRef.current;
      if (!stage) return;
      const tl = gsap.timeline();
      tl.fromTo(stage, { autoAlpha: 0.55, scale: 1.04 }, { autoAlpha: 1, scale: 1, duration: 0.7, ease: "power3.out" });
      return () => tl.kill();
    },
    { dependencies: [activeTourIndex, loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.stats.enabled) return;
      const cards = statsRef.current?.querySelectorAll<HTMLElement>(".stats-card");
      if (cards?.length) {
        gsap.fromTo(cards, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)", scrollTrigger: { trigger: statsRef.current, start: "top 82%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );
  // 설문 결과 카드 등장 (solutionChoice 변경 시)
  useGSAP(
    () => {
      if (solutionChoice === null) return;
      const cards = curationRef.current?.querySelectorAll<HTMLElement>(".curation-result-card");
      if (cards?.length) {
        gsap.fromTo(cards, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out" });
      }
    },
    { dependencies: [solutionChoice] }
  );
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.knowhow.enabled) return;
      const cards = knowhowRef.current?.querySelectorAll<HTMLElement>(".kh-card");
      if (cards?.length) {
        gsap.fromTo(cards, { x: (i) => (i % 2 === 0 ? -32 : 32), opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", scrollTrigger: { trigger: knowhowRef.current, start: "top 80%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.care.enabled) return;
      const items = careRef.current?.querySelectorAll<HTMLElement>(".care-item");
      if (items?.length) {
        gsap.fromTo(items, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: careRef.current, start: "top 82%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.media.enabled) return;
      const container = mediaRef.current?.querySelector(".yt-container");
      if (container) {
        gsap.fromTo(container, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: mediaRef.current, start: "top 85%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );
  useGSAP(
    () => {
      if (loaderVisible || !SCROLL_ANIMATION.form.enabled) return;
      const wrap = formRef.current?.querySelector(".db-wrap");
      if (wrap) {
        gsap.fromTo(wrap, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: formRef.current, start: "top 88%" } });
      }
    },
    { dependencies: [loaderVisible] }
  );

  return (
    <>
      {/* Loader */}
      {loaderVisible && (
        <div
          ref={loaderRef}
          className="loader-wrap home-loader-vivid fixed inset-0 z-[9000] flex flex-col items-center justify-center"
          role="status"
          aria-live="polite"
          aria-label="로딩 중"
        >
          <Logo
            href={null}
            tone="dark"
            className="loader-logo w-[92px] opacity-0 translate-y-4 sm:w-[104px]"
          />
          <div className="mt-8 w-[120px]">
            <div className="loader-line h-px w-0 bg-[var(--accent-terracotta)]" />
          </div>
        </div>
      )}

      <main className="relative home-vivid" ref={contentWrapperRef}>
        {/* screenBg: 심플 다크 레이어 (히어로와 겹치지 않도록 부드럽게) */}
        <div className="screenBg fixed inset-0 z-0" ref={screenBgRef}>
          <div className="screenBg-n1 home-screen-bg-n1 absolute inset-0 bg-cover bg-center" />
          <div className="screenBg-n2 absolute inset-0 bg-cover bg-center opacity-0" style={{ background: "#241f1d" }} aria-hidden />
          <div className="screenBg-n3 absolute inset-0 bg-cover bg-center opacity-0" style={{ background: "#241f1d" }} aria-hidden />
        </div>

        {/* 마퀴 — 블랙앤화이트 갤러리 톤 */}
        <div className="screenTxt fixed left-0 right-0 bottom-10 z-[2] overflow-hidden pointer-events-none" ref={screenTxtRef}>
          <div className="marquee home-marquee-track flex w-max" style={{ animation: "marquee 28s linear infinite" }}>
            <span className="marquee-cont font-[family-name:var(--font-en-title)] text-[clamp(10px,1.8vw,13px)] tracking-[0.4em] whitespace-nowrap px-6 text-[#2d2a26]/[0.09] uppercase" style={{ fontWeight: 300 }}>
              THE PRIVATE MASTERPIECE — HOMMAGE —
            </span>
            <span className="marquee-cont font-[family-name:var(--font-en-title)] text-[clamp(10px,1.8vw,13px)] tracking-[0.4em] whitespace-nowrap px-6 text-[#2d2a26]/[0.09] uppercase" style={{ fontWeight: 300 }}>
              THE PRIVATE MASTERPIECE — HOMMAGE —
            </span>
          </div>
        </div>

        {/* 레퍼런스 인터랙션: 스크롤 시 이미지 → 텍스트 디졸브 → 중앙 이미지 → 카피 (핀 + scrub) */}
        <div id="smooth-content" className="relative z-10" ref={mainSectionsRef}>
          <div
            id="hero-sequence"
            ref={heroSequenceRef}
            className="hero-sequence relative h-screen w-full overflow-hidden"
          >
            {/* Phase 0: 메인 히어로 영상 (hero_2.mp4 우선, 실패 시 fallback) */}
            <HeroVideo vivid />

            <div
              ref={heroAuroraRef}
              className="home-hero-aurora pointer-events-none absolute inset-0 z-[5] overflow-hidden"
              aria-hidden
            >
              <div className="home-hero-orb absolute -left-[12%] -top-[8%] h-[min(58vw,440px)] w-[min(58vw,440px)] bg-[var(--accent-terracotta)] opacity-[0.2]" />
              <div className="home-hero-orb absolute -right-[8%] top-[18%] h-[min(48vw,380px)] w-[min(48vw,380px)] bg-[#f0d4c4] opacity-[0.22]" />
              <div className="home-hero-orb absolute bottom-[-12%] left-[18%] h-[min(52vw,400px)] w-[min(52vw,400px)] bg-[#faf4ef] opacity-[0.28]" />
            </div>

            {/* Phase 1: 메인 카피 — 팬톤 그레이지 타이포 */}
            <div className="hero-seq-text absolute inset-0 z-[11] flex items-center justify-center px-6" data-seq-text>
              <div className="text-center">
                <span className="hero-phase-label block font-[family-name:var(--font-en-title)] text-[11px] font-normal tracking-[0.42em] text-[var(--text-secondary)] uppercase mb-6 sm:text-[10px] sm:tracking-[0.4em]">
                  {getBrandMessageLabel(locale)}
                </span>
                <p className="hero-artisan-title home-hero-title text-[clamp(38px,8.5vw,76px)] font-normal uppercase leading-[1.05]">
                  HOMMAGE
                </p>
                <span className="hero-phase-rule mt-6 block h-px w-20 mx-auto bg-[var(--border-subtle)]" aria-hidden />
                <p className="hero-artisan-body hero-phase-slogan text-[clamp(15px,2.2vw,20px)] font-light leading-relaxed whitespace-pre-line text-[var(--text-primary)]">
                  {getBrandSloganForLocale(locale)}
                </p>
              </div>
            </div>

            {/* Phase 2: 시네마틱 문구 — 스크롤에 따라 투명→밝아지는 시네마틱 효과 */}
            <div className="hero-seq-copy absolute inset-0 z-[9] flex items-center justify-center px-6" data-seq-copy>
              <div className="hero-copy-inner home-hero-copy-glow relative z-10 mx-auto flex w-full max-w-[min(96vw,620px)] flex-col items-center justify-center text-center">
                {!isKo ? (
                  <>
                    <p
                      data-seq-copy-line1
                      className="max-w-[min(96vw,540px)] font-[family-name:var(--font-en-display)] text-[clamp(18px,3.6vw,34px)] font-normal leading-[1.45] tracking-tight text-[var(--text-primary)] md:text-[clamp(22px,4vw,40px)]"
                    >
                      {t("home.heroCopy1")}
                    </p>
                    <p
                      data-seq-copy-line2
                      className="home-hero-copy-line mt-4 max-w-[min(96vw,560px)] font-[family-name:var(--font-en-display)] text-[clamp(18px,3.6vw,34px)] font-normal leading-[1.45] tracking-tight text-[var(--text-primary)] md:mt-5 md:text-[clamp(22px,4vw,40px)]"
                    >
                      {t("home.heroCopy2")}
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      data-seq-copy-line1
                      className="whitespace-nowrap font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(20px,4vw,38px)] font-normal leading-[1.45] tracking-tight text-[var(--text-primary)] md:text-[clamp(26px,4.5vw,46px)]"
                    >
                      아름다움은 만들어내는 것이 아니라,
                    </p>
                    <p
                      data-seq-copy-line2
                      className="home-hero-copy-line mt-4 whitespace-nowrap font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(20px,4vw,38px)] font-normal leading-[1.45] tracking-tight text-[var(--text-primary)] md:mt-5 md:text-[clamp(26px,4.5vw,46px)]"
                    >
                      당신 안에 숨은 <span className="home-spark font-semibold">빛</span>을 발견하는 것입니다.
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* 스크롤 힌트 */}
            <div className="scrollDown absolute bottom-12 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2" data-seq-hint>
              <span data-bounce className="home-scroll-hint-bar block h-8 w-px" aria-hidden />
              <p className="hero-scroll-hint font-[family-name:var(--font-en-title)] text-[10px] font-light tracking-[0.35em] text-[var(--text-secondary)] uppercase">
                Scroll
              </p>
            </div>
          </div>

        {/* Philosophy */}
        <section id="about" ref={philoRef} className="section-block section-philo home-philo-section relative overflow-hidden border-t border-[var(--border-page)]">
          <div className="philo-wrap relative mx-auto flex max-w-[1200px] flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">
            <div className="art-frame philo-visual home-philo-frame relative order-2 flex w-full max-w-[min(100%,380px)] flex-shrink-0 overflow-hidden rounded-xl bg-[var(--bg-card)] shadow-[var(--shadow-card)] sm:max-w-[min(100%,420px)] lg:order-1 lg:mx-0 lg:max-w-[360px] aspect-[3/4]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/5c2949b92714e521cd53b557/1697724972854-3C0ZDJ2MTJY6MOFN0T73/LA+MONTAGNE+SE+LEVE+AUX+AURORES+IX+-Maxime+Bellaunay+-+2023+-+Credit+photo+Studio+Villa+Monica.jpg?format=1000w"
                alt={content.philosophy.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 360px"
                priority={false}
              />
            </div>
            <div className="philo-text-wrap relative order-1 min-w-0 flex-1 lg:order-2">
              <span className="sec-label mb-6 block">OUR PHILOSOPHY</span>
              <PhiloHeadline text={content.philosophy.headline} />
              <div className="philo-desc mt-8 mb-10 font-[family-name:var(--font-kr-body)] text-[15px] font-normal leading-[1.88] text-[var(--color-text-muted)] sm:text-[16px] sm:leading-[1.9] max-w-[min(100%,40rem)] text-pretty break-keep">
                {content.philosophy.paragraphs.map((para, i) => (
                  <p key={i} className="mb-5 last:mb-0 sm:mb-6">
                    <span className="lg:hidden">{para.compact}</span>
                    <span className="hidden lg:block">
                      {para.desktopLines[0]}
                      <br />
                      {para.desktopLines[1]}
                    </span>
                  </p>
                ))}
              </div>
              <p className="font-[family-name:var(--font-en-title)] text-[13px] tracking-[0.12em] text-[var(--color-text-light)] uppercase" style={{ fontWeight: 400 }}>
                Park Yuna, Representative Director, Hommage Clinic
              </p>
            </div>
          </div>
        </section>

        {/* 병원투어 — gallery rail + stage view */}
        <section
          id="hospital-tour"
          ref={tourRef}
          className="section-block relative overflow-hidden border-y border-[var(--border-page)] bg-[var(--bg-page)]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            aria-hidden
            style={{
              background:
                "radial-gradient(circle at 10% 10%, rgba(201,137,102,0.12), transparent 38%), radial-gradient(circle at 90% 85%, rgba(201,137,102,0.08), transparent 42%)",
            }}
          />
          <div className="relative mx-auto max-w-[1280px]">
            <div className="tour-reveal max-w-[760px]">
              <span className="sec-label block">HOSPITAL TOUR</span>
              <h3 className="mt-3 font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(24px,3.4vw,38px)] leading-[1.34] tracking-tight text-[var(--text-primary)]">
                공간을 감상하듯, 오마쥬를 걷다
              </h3>
              <p className="mt-4 max-w-[680px] font-[family-name:var(--font-kr-body)] text-[14px] leading-relaxed text-[var(--text-secondary)] sm:text-[15px]">
                상담부터 케어까지 이어지는 동선을 작품처럼 설계했습니다. 차분한 톤과 섬세한 디테일이 머무는 시간을 더욱 편안하게 만듭니다.
              </p>
            </div>

            <div className="tour-reveal mt-10 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-7">
              <div
                ref={tourStageRef}
                className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border-page)] bg-[var(--bg-card)] shadow-[0_30px_70px_rgba(45,42,38,0.12)]"
              >
                <Image
                  src={activeTourImages[safeActiveTourIndex]}
                  alt={`${activeTourZone.label} ${safeActiveTourIndex + 1}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 780px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(24,20,18,0.35)] via-transparent to-transparent"
                  aria-hidden
                />
                <p className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/15 px-3 py-1.5 font-[family-name:var(--font-en-title)] text-[10px] tracking-[0.18em] text-white/90 uppercase backdrop-blur">
                  {String(safeActiveTourIndex + 1).padStart(2, "0")} / {String(activeTourImages.length).padStart(2, "0")}
                </p>
              </div>

              <div className="relative rounded-2xl border border-[var(--border-page)] bg-[var(--bg-card)] p-4 shadow-[var(--shadow-card)] sm:p-5">
                <div className="mb-4 flex flex-wrap gap-2 px-1">
                  {HOSPITAL_TOUR_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      type="button"
                      onClick={() => setActiveTourZoneId(zone.id)}
                      className={`rounded-full border px-3 py-1.5 text-[12px] transition-all ${
                        activeTourZoneId === zone.id
                          ? "border-[var(--accent-terracotta)] bg-[color-mix(in_srgb,var(--accent-terracotta)_12%,white)] text-[var(--text-primary)]"
                          : "border-[var(--border-page)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]/30"
                      }`}
                    >
                      {zone.label}
                    </button>
                  ))}
                </div>
                <p className="mb-3 px-1 font-[family-name:var(--font-kr-body)] text-[12px] leading-relaxed text-[var(--text-secondary)]">
                  {activeTourZone.desc}
                </p>
                <div className="grid grid-cols-3 gap-3 px-1 pb-1 pt-0.5 sm:grid-cols-4">
                  {activeTourImages.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveTourIndex(idx)}
                      className={`tour-card group relative block aspect-[4/5] w-full overflow-hidden rounded-xl border transition-all duration-300 ${
                        safeActiveTourIndex === idx
                          ? "border-[var(--accent-terracotta)] shadow-[0_14px_30px_rgba(201,137,102,0.28)]"
                          : "border-[var(--border-page)] hover:border-[var(--text-primary)]/35"
                      }`}
                      aria-label={`${activeTourZone.label} ${idx + 1}`}
                      aria-pressed={safeActiveTourIndex === idx}
                    >
                      <Image
                        src={src}
                        alt={`${activeTourZone.label} 썸네일 ${idx + 1}`}
                        fill
                        className={`object-cover object-center transition duration-500 ${
                          safeActiveTourIndex === idx ? "scale-[1.04]" : "group-hover:scale-[1.04]"
                        }`}
                        sizes="165px"
                      />
                      <div
                        className={`absolute inset-0 transition ${
                          safeActiveTourIndex === idx
                            ? "bg-gradient-to-t from-black/25 via-transparent to-transparent"
                            : "bg-black/20 group-hover:bg-black/10"
                        }`}
                        aria-hidden
                      />
                      <span className="absolute bottom-2 left-2 rounded bg-black/25 px-2 py-1 font-[family-name:var(--font-en-title)] text-[9px] tracking-[0.16em] text-white/90 uppercase backdrop-blur-sm">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="mt-4 px-1 font-[family-name:var(--font-kr-body)] text-[12px] leading-relaxed text-[var(--text-secondary)]">
                  공간 카테고리를 선택하면 해당 영역 사진만 모아볼 수 있습니다. 썸네일을 누르면 메인 뷰로 크게 확인됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 대표 시술 — 텍스트만, 궁금증 유도 */}
        <section id="rep" ref={repRef} className="section-block section-rep home-rep-wash relative">
          <div className="mx-auto max-w-[1200px]">
            <div className="sec-head mb-14 text-center">
              <span className="sec-label block">{content.rep.subhead}</span>
              <h3 className="sec-title sec-title-gradient mt-3 text-[clamp(24px,3vw,34px)]">
                {!isKo ? (
                  content.rep.head
                ) : (
                  <>
                    오마쥬 <span className="font-semibold">대표 시술</span>
                  </>
                )}
              </h3>
              <p className="mt-4 font-[family-name:var(--font-kr-body)] text-[15px] text-[var(--color-text-muted)]">{content.rep.lead}</p>
            </div>
            <div className="rep-grid rep-text-only grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              {repGrid.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rep-card group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#EAE3DE] bg-[var(--bg-card)] py-8 px-5 text-center transition-all duration-300 shadow-[var(--shadow-card)] hover:border-[var(--hip-accent)] hover:shadow-[var(--shadow-hip)] hover:-translate-y-1"
                >
                  <span className="rep-card-num absolute left-4 top-4 font-[family-name:var(--font-en-display)] text-[32px] font-light leading-none text-[var(--text-primary)]/8 group-hover:text-[var(--hip-accent)]/25 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mb-2 font-[family-name:var(--font-en-title)] text-[10px] tracking-[0.25em] text-[var(--color-text-muted)] uppercase" style={{ fontWeight: 400 }}>
                    {item.lineUpper}
                  </span>
                  <h4 className="font-[family-name:var(--font-kr-body)] text-[15px] font-semibold tracking-tight text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)] lg:text-[16px]">
                    {item.lineMain}
                  </h4>
                  <span className="mt-3 inline-block text-[12px] text-[var(--color-text-muted)] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {t("home.repViewMore")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 의료진 — 섹션 헤더 + 단일 카드 흐름(원장 → 커넥터 → 부원장) */}
        <section id="doctor" ref={doctorScrollRef} className="section-block home-doctor-wash relative">
          <div className="doctor-section-head sec-head mx-auto mb-10 max-w-[1200px] text-center sm:mb-12">
            <span className="sec-label mb-3 block">MEDICAL TEAM</span>
            <h3 className="sec-title sec-title-gradient text-[clamp(22px,3vw,30px)]">
              {!isKo ? t("home.doctorHeadingFull") : (
                <>
                  오마쥬 <span className="font-semibold">의료진</span>
                </>
              )}
            </h3>
            <p className="mx-auto mt-4 max-w-[36rem] font-[family-name:var(--font-kr-body)] text-[15px] leading-relaxed text-[var(--color-text-muted)]">
              {t("home.doctorLead")}
            </p>
          </div>

          <div className="doctor-ensemble mx-auto max-w-[1080px] overflow-hidden rounded-2xl border border-[var(--border-page)] bg-[var(--bg-card)] shadow-[var(--shadow-card)] sm:rounded-3xl">
            {doctorsVisible.map((doc, docIndex) => (
              <div key={doc.id}>
                {docIndex > 0 ? (
                  <div className="doctor-connector border-y border-[color-mix(in_srgb,var(--border-page)_85%,transparent)] bg-[color-mix(in_srgb,var(--bg-page)_55%,var(--bg-card))] px-4 py-7 sm:py-9">
                    <div className="mx-auto flex max-w-lg flex-col items-center gap-3">
                      <div className="flex w-full items-center gap-3 sm:gap-4">
                        <div className="h-px min-h-px flex-1 overflow-hidden rounded-full bg-[var(--border-page)]">
                          <div
                            data-doctor-line="left"
                            className="doctor-connector-line-el h-full w-full bg-gradient-to-l from-[var(--accent-terracotta)]/55 via-[var(--accent-terracotta)]/35 to-transparent"
                            aria-hidden
                          />
                        </div>
                        <span className="shrink-0 rounded-full border border-[color-mix(in_srgb,var(--accent-terracotta)_28%,var(--border-page))] bg-[var(--bg-card)] px-3.5 py-1.5 font-[family-name:var(--font-en-title)] text-[9px] font-light tracking-[0.42em] text-[var(--text-secondary)] sm:px-4">
                          AND
                        </span>
                        <div className="h-px min-h-px flex-1 overflow-hidden rounded-full bg-[var(--border-page)]">
                          <div
                            data-doctor-line="right"
                            className="doctor-connector-line-el h-full w-full bg-gradient-to-r from-[var(--accent-terracotta)]/55 via-[var(--accent-terracotta)]/35 to-transparent"
                            aria-hidden
                          />
                        </div>
                      </div>
                      <p className="text-center font-[family-name:var(--font-kr-body)] text-[12px] tracking-tight text-[var(--text-secondary)] sm:text-[13px]">
                        {t("home.doctorConnector")}
                      </p>
                    </div>
                  </div>
                ) : null}
                <div
                  className="doctor-block relative grid w-full grid-cols-1 items-stretch gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-0 lg:px-10 lg:py-16"
                >
              <div className="doctor-reveal relative mx-auto flex w-full max-w-[240px] shrink-0 justify-center sm:max-w-[260px] lg:mx-0 lg:h-full lg:max-w-none lg:items-center">
                <div className="doctor-portrait-frame group/doctor relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(45,42,38,0.1)] ring-1 ring-[color-mix(in_srgb,var(--accent-terracotta)_22%,transparent)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform lg:max-h-[min(72vh,680px)] lg:w-full lg:max-w-[300px] hover:-translate-y-1 hover:shadow-[0_28px_64px_rgba(45,42,38,0.14)]">
                  <Image
                    src={doc.image}
                    alt={doc.nameKo}
                    fill
                    className="doctor-portrait-img object-cover object-[center_18%]"
                    sizes="(max-width: 1024px) 260px, 300px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/35 via-transparent to-white/20"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-90 mix-blend-soft-light bg-[radial-gradient(ellipse_90%_55%_at_30%_18%,rgba(255,248,240,0.45)_0%,transparent_55%)]"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-3 top-3 h-1/3 rounded-t-xl bg-gradient-to-b from-white/25 to-transparent opacity-60"
                    aria-hidden
                  />
                </div>
                <div
                  className="absolute -bottom-3 left-1/2 h-1 w-[40%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[var(--accent-terracotta)]/45 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="doctor-reveal doctor-copy relative flex min-h-0 flex-1 flex-col justify-center py-2 lg:h-full lg:justify-between lg:py-6">
                <p
                  className="doctor-deco pointer-events-none absolute bottom-4 right-0 z-0 select-none font-[family-name:var(--font-en-display)] text-[clamp(36px,8vw,64px)] font-light leading-none tracking-wide text-[color-mix(in_srgb,var(--text-primary)_6%,transparent)] lg:right-2"
                  aria-hidden
                >
                  {doc.id === "park" ? "Dr. Park" : "Dr. Kim"}
                </p>

                <div className="relative z-[1] flex flex-col gap-10 px-1 sm:px-2 lg:px-4 xl:pl-6">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] text-[var(--text-primary)]">{doc.position}</p>
                    <h2 className="mt-2 flex flex-wrap items-baseline gap-2">
                      <span className="font-[family-name:var(--font-kr-serif)] text-[clamp(26px,4vw,38px)] font-medium text-[var(--text-primary)]">{doc.nameKo}</span>
                      <span className="font-[family-name:var(--font-display)] text-base tracking-wide text-[var(--text-secondary)]">{doc.nameEn}</span>
                    </h2>
                    <ul className="mt-6 flex items-center gap-3">
                      <li className="text-[11px] text-[var(--text-secondary)]">SNS</li>
                      <li>
                        <a href={doc.instagram} target="_blank" rel="noopener noreferrer nofollow" className="text-[var(--text-primary)] hover:opacity-70" aria-label="Instagram">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={doc.youtube} target="_blank" rel="noopener noreferrer nofollow" className="text-[var(--text-primary)] hover:opacity-70" aria-label="Youtube">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-[var(--border-page)] pt-8">
                    <h3 className="font-[family-name:var(--font-kr-serif)] text-[clamp(17px,2.2vw,20px)] font-medium leading-relaxed text-[var(--text-primary)] whitespace-pre-line">{doc.catchCopy}</h3>
                    <ul className="mt-6 space-y-3 font-[family-name:var(--font-kr-body)] text-[15px] leading-relaxed text-[var(--text-secondary)]">
                      {doc.points.map((point, i) => (
                        <li key={i} className="relative pl-4 before:absolute before:left-0 before:top-[0.45em] before:h-0.5 before:w-0.5 before:rounded-full before:bg-[var(--text-primary)]">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link href="/doctor" className="inline-flex items-center rounded border border-[var(--text-primary)] px-4 py-2 font-[family-name:var(--font-display)] text-xs tracking-[0.1em] text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-white">
                        {t("home.doctorIntro")}
                      </Link>
                      <Link href="/blog" className="inline-flex items-center rounded border border-[var(--text-primary)] px-4 py-2 font-[family-name:var(--font-en-title)] text-xs tracking-[0.1em] text-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--text-primary)] hover:text-white uppercase" style={{ fontWeight: 300 }}>
                        {t("home.doctorBlog")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 당신에게 필요한 솔루션 — 설문형 인터랙션 (산부인과 vs 피부과) */}
        <section id="curation" ref={curationRef} className="section-block curation-survey home-curation-wash relative overflow-hidden">
          <div className="sec-head mx-auto mb-12 text-center">
            <span className="sec-label mb-3 block">PRIVATE CURATION</span>
            <h3 className="sec-title sec-title-gradient text-[clamp(22px,3vw,28px)]">{t("home.curationHead")}</h3>
          </div>

          {solutionChoice === null ? (
            <div className="curation-question mx-auto max-w-[720px] px-4">
              <p className="curation-question-text mb-12 text-center font-[family-name:var(--font-kr-heading)] text-[clamp(18px,2.5vw,24px)] font-medium leading-relaxed text-[var(--text-primary)]">
                {t("home.curationQuestion")}
              </p>
              <div className="curation-choices grid grid-cols-1 gap-6 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setSolutionChoice("women")}
                  className="curation-choice group relative flex flex-col items-center justify-center rounded-2xl border-2 border-[var(--border-page)] bg-[var(--bg-page)] py-14 px-8 text-center transition-all duration-500 hover:border-[var(--text-primary)] hover:shadow-[0_20px_50px_rgba(44,43,42,0.12)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:ring-offset-4"
                >
                  <span className="curation-choice-icon mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--text-primary)]/10 text-[28px] transition-colors group-hover:bg-[var(--text-primary)] group-hover:text-white">
                    ✦
                  </span>
                  <span className="font-[family-name:var(--font-en-title)] text-[12px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">Women&apos;s Care</span>
                  <h4 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-semibold text-[var(--text-primary)]">
                    {t("home.curWomenHead")}
                  </h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    {t("home.curWomenLead")}
                  </p>
                </button>
                <button
                  type="button"
                  onClick={() => setSolutionChoice("skin")}
                  className="curation-choice group relative flex flex-col items-center justify-center rounded-2xl border-2 border-[var(--border-page)] bg-[var(--bg-page)] py-14 px-8 text-center transition-all duration-500 hover:border-[var(--text-primary)] hover:shadow-[0_20px_50px_rgba(44,43,42,0.12)] hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] focus:ring-offset-4"
                >
                  <span className="curation-choice-icon mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--text-primary)]/10 text-[28px] transition-colors group-hover:bg-[var(--text-primary)] group-hover:text-white">
                    ◈
                  </span>
                  <span className="font-[family-name:var(--font-en-title)] text-[12px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">Aesthetic</span>
                  <h4 className="mt-2 font-[family-name:var(--font-kr-heading)] text-[clamp(20px,2.5vw,26px)] font-semibold text-[var(--text-primary)]">
                    {t("home.curSkinHead")}
                  </h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    {t("home.curSkinLead")}
                  </p>
                </button>
              </div>
              <p className="mt-8 text-center text-[13px] text-[var(--text-secondary)]">
                {t("home.curFooterHint")}
              </p>
            </div>
          ) : (
            <div className="curation-result mx-auto max-w-[1000px]">
              <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
                <span className="rounded-full bg-[var(--text-primary)]/10 px-4 py-2 font-[family-name:var(--font-kr-heading)] text-[14px] font-medium text-[var(--text-primary)]">
                  {solutionChoice === "women" ? t("home.curWomenHead") : t("home.curSkinHead")}
                </span>
                <button
                  type="button"
                  onClick={() => setSolutionChoice(null)}
                  className="text-[13px] text-[var(--text-secondary)] underline underline-offset-2 hover:text-[var(--text-primary)]"
                >
                  {t("home.curAgain")}
                </button>
              </div>
              <div className="card-grid grid grid-cols-1 gap-6 md:grid-cols-3">
                {(solutionChoice === "women" ? curationWomenList : curationSkinList).map((card, i) => (
                  <Link
                    key={i}
                    href={card.href ?? "#curation"}
                    className={`curation-result-card group relative flex flex-col rounded-xl border border-[var(--border-page)] bg-[var(--bg-page)] p-8 transition-all duration-300 hover:border-[var(--text-primary)]/30 hover:shadow-[0_16px_40px_rgba(44,43,42,0.08)] ${
                      card.highlight ? "border-l-4 border-l-[var(--text-primary)]" : ""
                    }`}
                  >
                    <span className="mb-3 font-[family-name:var(--font-en-display)] text-[12px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="c-tit mb-3 font-[family-name:var(--font-display)] text-[20px] font-medium tracking-tight text-[var(--text-primary)]">
                      {card.title}
                    </h4>
                    <p className="c-desc mb-6 flex-1 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {card.highlight && (
                        <span className="font-medium text-[var(--text-primary)]">{t("home.sigTag")}</span>
                      )}
                      {card.desc}
                    </p>
                    <div className="c-tags flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[var(--border-page)] px-3 py-1 text-[11px] text-[var(--text-secondary)] transition-colors group-hover:border-[var(--text-primary)] group-hover:text-[var(--text-primary)]">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 inline-block text-[13px] font-medium text-[var(--text-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                      {t("home.curViewMore")}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 숫자 인포 */}
        <section ref={statsRef} className="section-block section-dark section-stats relative">
          <span className="absolute left-0 right-0 top-0 h-px bg-white/10" aria-hidden />
          <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-10 lg:grid-cols-4">
            {content.stats.items.map((s, i) => (
              <div key={i} className="stats-card text-center">
                <p className="font-[family-name:var(--font-kr-heading)] text-[clamp(38px,5.5vw,56px)] font-medium tracking-tight text-white">
                  <span>
                    {s.num}
                    {s.unit}
                  </span>
                </p>
                <h4 className="mt-3 font-[family-name:var(--font-kr-heading)] text-[14px] font-medium tracking-[0.06em] text-white/90">
                  {s.label}
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/50">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Knowhow */}
        <section id="knowhow" ref={knowhowRef} className="section-block reveal-text section-knowhow relative overflow-hidden bg-[var(--bg-page)]">
          <div className="sec-head relative mx-auto mb-14 max-w-[640px] text-center">
            <span className="sec-label block">{content.knowhow.subhead}</span>
            <h3 className="sec-title sec-title-gradient mt-2 text-[clamp(20px,2.5vw,26px)]">{content.knowhow.head}</h3>
          </div>
          <div className="kh-container relative mx-auto grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-3">
            {content.knowhow.panels.map((panel, i) => (
              <div
                key={i}
                className="kh-card group relative flex flex-col rounded-lg border border-[#EAE3DE] bg-[var(--bg-card)] p-8 pl-10 transition-all duration-300 shadow-[var(--shadow-card)] hover:border-[var(--hip-accent)] hover:shadow-[var(--shadow-hip)] hover:-translate-y-1"
              >
                <span
                  className="absolute left-0 top-8 bottom-8 w-0.5 rounded-r bg-[var(--border-page)] transition-colors group-hover:bg-[var(--hip-accent)]"
                  aria-hidden
                />
                <span className="mb-4 font-[family-name:var(--font-en-title)] text-[12px] font-light tracking-[0.3em] text-[var(--text-secondary)] uppercase">{panel.num}</span>
                <h4 className="mb-4 font-[family-name:var(--font-kr-body)] text-[18px] font-semibold tracking-[0.06em] text-[var(--text-primary)]">
                  {panel.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {panel.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Care */}
        <section id="care" ref={careRef} className="section-block section-care relative overflow-hidden bg-[var(--bg-card)]">
          <div className="relative mx-auto max-w-[1000px]">
            <div className="sec-head mb-14 text-center">
              <span className="sec-label block">{content.care.subhead}</span>
              <h3 className="sec-title sec-title-gradient mt-2 text-[clamp(24px,3vw,34px)]">
                {!isKo ? (
                  content.care.head
                ) : (
                  <>
                    오마쥬 <span className="font-bold">케어</span> 시스템
                  </>
                )}
              </h3>
            </div>
            <ul className="care-list grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {content.care.items.map((c, i) => (
                <li
                  key={i}
                  className="care-item flex flex-col rounded-lg border border-[#EAE3DE] bg-[var(--bg-card)] p-6 pl-8 transition-all duration-300 shadow-[var(--shadow-card)] hover:border-[var(--hip-accent)] hover:shadow-[var(--shadow-hip)] hover:-translate-y-1"
                >
                  <span className="mb-3 font-[family-name:var(--font-en-title)] text-[12px] font-light tracking-[0.25em] text-[var(--text-secondary)] uppercase">{c.num}</span>
                  <h4 className="font-[family-name:var(--font-kr-body)] text-[16px] font-semibold tracking-[0.04em] text-[var(--text-primary)]">{c.title}</h4>
                  <p className="mt-2 font-[family-name:var(--font-kr-body)] text-[13px] leading-relaxed text-[var(--text-secondary)]">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* YouTube */}
        <section id="media" ref={mediaRef} className="section-block reveal-text section-yt bg-[var(--bg-page)]">
          <div className="mx-auto max-w-[1800px]">
            <div className="sec-head mb-16 text-center">
              <span className="sec-label block">{t("home.mediaSub")}</span>
              <h3 className="sec-title sec-title-gradient text-[clamp(28px,3.5vw,40px)]">{t("home.mediaHead")}</h3>
            </div>
            <div className="yt-container grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr] lg:items-stretch">
              <div className="yt-main-column flex flex-col">
                <div className="yt-main-frame home-yt-frame relative aspect-video w-full overflow-hidden rounded-xl bg-[var(--text-primary)] shadow-xl">
                  {ytPlayerOpen ? (
                    <div className="yt-main-player-wrap relative z-10 h-full w-full overflow-hidden rounded-[inherit] bg-[var(--text-primary)]">
                      <iframe
                        key={ytActiveId}
                        id="mainPlayer"
                        src={`https://www.youtube.com/embed/${ytActiveId}?rel=0&autoplay=1`}
                        title={`${ytDisplayCaption} — ${t("home.mediaHead")}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="h-full w-full border-0 bg-[var(--text-primary)]"
                      />
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setYtPlayerOpen(true)}
                      className="yt-poster-hit group absolute inset-0 z-20 flex cursor-pointer flex-col items-stretch justify-end border-0 bg-[var(--text-primary)] p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-terracotta)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-page)]"
                      aria-label={
                        !isKo
                          ? `${t("home.ytPlayAria")}: ${ytDisplayCaption}`
                          : `${ytDisplayCaption} ${t("home.ytPlayAria")}`
                      }
                    >
                      {ytCustomPosterConfigured && !ytPosterImgFailed ? (
                        <img
                          src={ytCustomPosterConfigured}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover"
                          onError={() => setYtPosterImgFailed(true)}
                        />
                      ) : (
                        <div
                          className="yt-main-poster absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(https://img.youtube.com/vi/${ytActiveId}/maxresdefault.jpg), url(https://img.youtube.com/vi/${ytActiveId}/sddefault.jpg)`,
                          }}
                          aria-hidden
                        />
                      )}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/55 via-[var(--text-primary)]/10 to-transparent"
                        aria-hidden
                      />
                      <div className="yt-play-fab absolute left-1/2 top-1/2 z-[1] flex h-[4.25rem] w-[4.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent-terracotta)_92%,#fff)] text-white shadow-[0_16px_40px_rgba(201,137,102,0.45)] ring-4 ring-white/25 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-active:scale-95 sm:h-[4.75rem] sm:w-[4.75rem]"
                        aria-hidden
                      >
                        <svg className="ml-1 h-8 w-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="relative z-[1] px-4 pb-4 pt-6 sm:px-5 sm:pb-5">
                        <p className="font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(15px,2.4vw,20px)] font-normal leading-snug tracking-tight text-white drop-shadow-sm">
                          {ytDisplayCaption}
                        </p>
                        <p className="mt-1 font-[family-name:var(--font-en-title)] text-[10px] font-light tracking-[0.28em] text-white/75">
                          TAP TO PLAY
                        </p>
                      </div>
                    </button>
                  )}
                </div>
              </div>
              <div className="yt-list flex flex-col justify-between gap-4">
                {ytList.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setYtListPick(v.id)}
                    className="yt-item flex flex-1 items-center gap-4 rounded border border-[var(--border-page)] bg-[var(--bg-card)] p-4 text-left transition-all hover:shadow-[0_4px_20px_rgba(44,43,42,0.04)]"
                  >
                    <div className="art-card yt-thumb relative w-[40%] flex-shrink-0 overflow-hidden rounded aspect-video bg-[var(--text-primary)]">
                      <img
                        src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="yt-info flex flex-col justify-center">
                      <h5 className="yt-tit line-clamp-2 text-[15px] font-medium leading-snug text-[var(--color-text-primary)]">
                        {v.title}
                      </h5>
                      <span className="yt-meta text-[12px] text-[var(--color-text-muted)]">{v.meta}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section id="ba" className="section-block reveal-text section-ba bg-[var(--bg-page)] text-center">
          <div className="sec-head mx-auto mb-12">
            <span className="sec-label block">REAL RESULTS</span>
            <h3 className="sec-title sec-title-gradient mt-2 text-[clamp(28px,3.5vw,40px)]">{t("home.baHead")}</h3>
            <p className="mt-2 text-[15px] text-[var(--color-text-muted)]">{t("home.baLead")}</p>
          </div>
          <div className="ba-lock-zone relative mx-auto max-w-[1100px] overflow-hidden rounded-lg locked">
            <div className="ba-guard-overlay absolute inset-0 z-50 flex items-center justify-center bg-[var(--bg-page)]/50 backdrop-blur-xl">
              <div className="login-dialog max-w-[400px] w-[90%] rounded border border-[var(--border-page)] bg-[var(--bg-card)] p-10 text-center shadow-xl backdrop-blur-md">
                <div className="mb-4 text-2xl text-[var(--text-secondary)]">🔒</div>
                <h4 className="font-[family-name:var(--font-kr-serif)] text-[22px] text-[var(--text-primary)] mb-2">
                  {t("home.baLoginTitle")}
                </h4>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed mb-6 whitespace-pre-line">
                  {t("home.baLoginDesc")}
                </p>
                <button
                  type="button"
                  onClick={() => setBaWipOpen(true)}
                  className="btn-login inline-block w-full bg-[var(--hip-accent)] py-4 px-6 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-[var(--hip-accent-dark)] hover:shadow-md"
                >
                  {t("home.baLoginCta")}
                </button>
                <p className="mt-4 text-[11px] text-[var(--text-secondary)]">
                  {t("home.baFootnote")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none relative blur-[15px] opacity-60 scale-[0.98] transition-all duration-500 select-none" aria-hidden>
              <div className="ba-case-wrap mx-auto max-w-[1000px] bg-[var(--bg-card)] p-5 shadow-[var(--shadow-card)]">
                <div className="ba-info mb-8 text-center">
                  <h4 className="font-[family-name:var(--font-display)] text-[32px] text-[#222]">Signature Lifting</h4>
                  <span className="text-[14px] text-[var(--text-secondary)]">울쎄라 + 튠페이스 복합 시술</span>
                </div>
                <BeforeAfterCompare />
              </div>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="consult" ref={formRef} className="section-block section-db relative border-t border-[var(--border-page)] bg-[var(--bg-page)]">
          <div className="db-wrap relative mx-auto max-w-[800px]">
            <div className="sec-head text-center">
              <span className="sec-label block">QUICK CONSULTATION</span>
              <h3 className="sec-title sec-title-gradient mt-2 text-[clamp(26px,3.5vw,38px)]">{t("home.consultHead")}</h3>
              <p className="mt-2 text-[14px] text-[var(--text-secondary)]">{t("home.consultLead")}</p>
            </div>
            <form
              className="db-form-grid mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"
              onSubmit={async (e) => {
                e.preventDefault();
                setFormError("");
                if (!privacyAgreed) {
                  setFormError(t("home.formPrivacyError"));
                  return;
                }
                try {
                  const res = await fetch("/api/consultations", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: cName.trim(),
                      phone: cPhone.trim(),
                      interest: cInterest,
                      message: cMessage.trim(),
                      privacyConsent: true,
                    }),
                  });
                  const data = (await res.json().catch(() => ({}))) as { error?: string };
                  if (!res.ok) {
                    setFormError(typeof data.error === "string" ? data.error : t("home.formError"));
                    return;
                  }
                  setFormSubmitted(true);
                } catch {
                  setFormError(t("home.formNetwork"));
                }
              }}
            >
              {formError ? (
                <p className="col-span-1 text-[13px] text-red-600 md:col-span-2">{formError}</p>
              ) : null}
              <input
                type="text"
                placeholder={t("home.formName")}
                required
                value={cName}
                onChange={(e) => setCName(e.target.value)}
                disabled={formSubmitted}
                className="form-field w-full border-b border-[var(--border-page)] bg-transparent py-4 text-[16px] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--hip-accent)] disabled:opacity-60"
              />
              <input
                type="tel"
                placeholder={t("home.formPhone")}
                required
                value={cPhone}
                onChange={(e) => setCPhone(e.target.value)}
                disabled={formSubmitted}
                className="form-field w-full border-b border-[var(--border-page)] bg-transparent py-4 text-[16px] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:border-[var(--hip-accent)] disabled:opacity-60"
              />
              <select
                value={cInterest}
                onChange={(e) => setCInterest(e.target.value)}
                className="form-field form-full col-span-1 w-full border-b border-[var(--border-page)] bg-transparent py-4 text-[16px] text-[var(--text-secondary)] md:col-span-2 focus:border-[var(--hip-accent)] disabled:opacity-60"
                disabled={formSubmitted}
              >
                <option value="">{t("home.formInterest")}</option>
                <option value="women">{t("home.formInterestWomen")}</option>
                <option value="skin">{t("home.formInterestSkin")}</option>
                <option value="etc">{t("home.formInterestEtc")}</option>
              </select>
              <textarea
                rows={3}
                placeholder={t("home.formMessage")}
                value={cMessage}
                onChange={(e) => setCMessage(e.target.value)}
                className="form-field form-full col-span-1 w-full border-b border-[var(--border-page)] bg-transparent py-4 text-[16px] text-[var(--text-primary)] md:col-span-2 focus:border-[var(--hip-accent)] disabled:opacity-60"
                disabled={formSubmitted}
              />
              <label className="form-full col-span-1 flex cursor-pointer items-start gap-3 md:col-span-2">
                <input
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={(e) => {
                    setPrivacyAgreed(e.target.checked);
                    if (e.target.checked) setFormError("");
                  }}
                  disabled={formSubmitted}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-[var(--border-page)] text-[var(--hip-accent)] focus:ring-[var(--hip-accent)] disabled:opacity-60"
                />
                <span className="text-left text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  <span className="text-[var(--text-primary)]">{t("home.formPrivacyAgree")}</span>{" "}
                  <Link href="/privacy" className="text-[var(--accent-terracotta)] underline underline-offset-2 hover:text-[var(--accent-terracotta-dark)]">
                    {t("footer.privacyPolicy")}
                  </Link>
                  <span className="mx-1 text-[var(--text-secondary)]/50">·</span>
                  <Link href="/terms" className="text-[var(--accent-terracotta)] underline underline-offset-2 hover:text-[var(--accent-terracotta-dark)]">
                    {t("footer.termsOfService")}
                  </Link>
                </span>
              </label>
              <button
                type="submit"
                disabled={formSubmitted || !privacyAgreed}
                className="btn-submit col-span-1 mt-6 w-full rounded-sm bg-[var(--hip-accent)] py-5 text-center text-[16px] font-semibold tracking-[0.1em] text-white transition-all duration-300 hover:bg-[var(--hip-accent-dark)] hover:shadow-lg disabled:opacity-60 disabled:cursor-default md:col-span-2"
              >
                {formSubmitted ? t("home.formDone") : t("home.formSubmit")}
              </button>
            </form>
          </div>
        </section>

        {/* 지도 · 오시는 길 */}
        <section id="map" className="map-section home-map-section relative">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,1fr)_1.6fr]">
            <div className="map-info flex flex-col justify-center px-6 py-12 lg:px-[var(--pad-global)] lg:py-16">
              <h3 className="mb-8 font-[family-name:var(--font-display)] text-[18px] tracking-[0.12em] text-white">{t("home.mapTitle")}</h3>
              <ul className="space-y-5 text-[14px] text-white/80">
                <li>
                  <span className="text-white/60">월 · 금</span>
                  <span className="ml-2">AM 10:00 ~ PM 08:00</span>
                  <br />
                  <small className="text-[12px] text-white/60">야간진료</small>
                </li>
                <li>
                  <span className="text-white/60">화 · 수 · 목</span>
                  <span className="ml-2">AM 10:00 ~ PM 07:00</span>
                </li>
                <li>
                  <span className="text-white/60">{t("home.mapSat")}</span>
                  <span className="ml-2">AM 10:00 ~ PM 03:00</span>
                  <br />
                  <small className="text-[12px] text-white/60">점심시간 없음</small>
                </li>
                <li>
                  <span className="text-white/70">Tel</span>
                  <span className="ml-2 text-white">{CLINIC_TEL}</span>
                </li>
                <li className="pt-2 text-[12px] text-white/60">{t("home.mapClosed")}</li>
              </ul>
              <p className="mt-8 text-[14px] leading-relaxed text-white/70">{getClinicAddressForLocale(locale)}</p>
            </div>
            <div className="relative h-[360px] w-full overflow-hidden bg-[var(--text-primary)] lg:h-[480px]">
              <div className="relative h-full w-full grayscale [&>iframe]:grayscale">
                <iframe
                  title={t("home.mapIframeTitle")}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(CLINIC_MAP_QUERY)}&output=embed&hl=${localeToMapHl(locale)}`}
                  className="absolute inset-0 h-full w-full border-0 grayscale"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 lg:left-6 lg:right-auto lg:justify-start">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_MAP_QUERY)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border-2 border-white/70 bg-[var(--text-primary)] px-5 py-3 text-sm tracking-[0.08em] text-white transition-all duration-300 hover:opacity-90 hover:border-white"
                  >
                    {t("home.mapOpen")}
                  </a>
                  <a
                    href={CLINIC_NAVER_PLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm border-2 border-[#03C75A] bg-[#03C75A] px-5 py-3 text-sm font-semibold tracking-[0.06em] text-white transition-all duration-300 hover:brightness-95"
                  >
                    NAVER PLACE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>

      </main>

      {baWipOpen ? (
        <div className="fixed inset-0 z-[10060] flex items-center justify-center p-4">
          <button
            type="button"
            className="absolute inset-0 bg-[rgba(28,24,22,0.45)] backdrop-blur-[6px]"
            aria-label={t("home.baWipBackdropAria")}
            onClick={() => setBaWipOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="ba-wip-heading"
            className="font-paperlogy relative z-10 w-full max-w-[min(100%,360px)] rounded-2xl border border-[var(--border-page)] bg-[var(--bg-card)] px-8 py-9 text-center shadow-[0_24px_64px_rgba(45,42,38,0.18)]"
          >
            <p className="text-[11px] font-semibold tracking-[0.28em] text-[var(--accent-terracotta-dark)]">HOMMAGE</p>
            <h4 id="ba-wip-heading" className="mt-3 text-[1.35rem] font-semibold tracking-tight text-[var(--text-primary)]">
              {t("home.baWipTitle")}
            </h4>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--text-secondary)]">{t("home.baWipBody")}</p>
            <button
              type="button"
              onClick={() => setBaWipOpen(false)}
              className="mt-8 w-full rounded-full bg-[var(--text-primary)] py-3.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {t("home.baWipClose")}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** 철학 헤드라인 내 「빛」만 웜 골드 그라데이션 */
function injectPhiloLightShine(text: string) {
  if (!text.includes("빛")) return text;
  const parts = text.split("빛");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 ? (
        <span className="philo-light-shine" lang="ko">
          빛
        </span>
      ) : null}
    </Fragment>
  ));
}

/** 철학 헤드라인 — 좁은 화면 3줄, sm 이상 2줄로 자연스럽게 */
function PhiloHeadline({ text }: { text: string }) {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const tit =
    "philo-tit font-[family-name:var(--font-kr-cinematic-serif)] text-[clamp(24px,4.2vw,40px)] font-normal leading-[1.38] tracking-tight text-[var(--color-text-primary)] text-balance break-keep max-w-[min(100%,42rem)]";

  if (lines.length < 2) {
    return <h2 className={tit}>{injectPhiloLightShine(text)}</h2>;
  }

  if (lines.length >= 3) {
    const [, second, third] = lines;
    const merged = `${second} ${third}`;
    return (
      <h2 className={tit}>
        <span className="block">{injectPhiloLightShine(lines[0])}</span>
        <span className="mt-1 block sm:hidden">{injectPhiloLightShine(second)}</span>
        <span className="block sm:hidden">{injectPhiloLightShine(third)}</span>
        <span className="mt-1 hidden text-balance sm:mt-2 sm:block">
          {injectPhiloLightShine(merged)}
        </span>
      </h2>
    );
  }

  return (
    <h2 className={tit}>
      <span className="block">{injectPhiloLightShine(lines[0])}</span>
      <span className="mt-1 block text-balance sm:mt-2">
        {injectPhiloLightShine(lines[1])}
      </span>
    </h2>
  );
}

function BeforeAfterCompare() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);

  const updateView = useCallback(
    (clientX: number) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      let pos = clientX - rect.left;
      if (pos < 0) pos = 0;
      if (pos > rect.width) pos = rect.width;
      setPercent((pos / rect.width) * 100);
    },
    []
  );

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const onMove = (e: MouseEvent) => {
      if (e.buttons === 1) updateView(e.clientX);
    };
    const onTouch = (e: TouchEvent) => {
      updateView(e.touches[0].clientX);
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("touchmove", onTouch);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("touchmove", onTouch);
    };
  }, [updateView]);

  return (
    <div
      ref={wrapRef}
      className="ba-compare-view relative h-[350px] w-full cursor-col-resize select-none overflow-hidden rounded bg-[#f0f0f0] lg:h-[600px]"
      onClick={(e) => updateView(e.clientX)}
    >
      <div
        className="ba-img after absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage:
            "url('https://www.braunps.co.kr/data/file/m09_01/file2/3543616225_KlEbe9uA_d87c6329890359ad02de72e1c6ad7a4616ba6fe1.jpg?q=80&w=1000')",
        }}
      />
      <div
        ref={beforeRef}
        className="ba-img before absolute inset-0 z-[2] bg-cover bg-center bg-no-repeat grayscale"
        style={{
          backgroundImage:
            "url('https://www.braunps.co.kr/data/file/m09_01/thumb-3543616225_SrNMu8R7_40660ca55d05ff2cc61b944ceabbce607646a5ef_600x600.jpg?q=80&w=1000')",
          clipPath: `inset(0 ${100 - percent}% 0 0)`,
        }}
      />
      <div
        ref={handleRef}
        className="ba-handle absolute top-0 bottom-0 z-[10] flex w-10 -translate-x-1/2 items-center justify-center"
        style={{ left: `${percent}%` }}
      >
        <div className="ba-circle flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-page)] bg-[var(--bg-card)] text-[var(--text-primary)] shadow-[var(--shadow-card)]">
          ↔
        </div>
      </div>
      <span className="badge b absolute bottom-5 left-5 z-[5] bg-black/30 px-2.5 py-1 text-[12px] text-white backdrop-blur-sm">
        BEFORE
      </span>
      <span className="badge a absolute bottom-5 right-5 z-[5] bg-black/30 px-2.5 py-1 text-[12px] text-white backdrop-blur-sm">
        AFTER
      </span>
    </div>
  );
}
