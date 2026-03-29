"use client";

import { useRef, useEffect, useState } from "react";
import { getCustomizingPageContent } from "@/i18n/customizingPageContent";
import { useLocale } from "@/i18n/LocaleProvider";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function CustomizingView() {
  const { locale } = useLocale();
  const page = getCustomizingPageContent(locale);
  const mainRef = useRef<HTMLElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [slide01, setSlide01] = useState(true);
  const [slide02, setSlide02] = useState(true);
  const [slide03, setSlide03] = useState(true);

  useGSAP(
    () => {
      // 헤더 색상 변경
      ScrollTrigger.create({
        trigger: "._customizing .s2",
        start: "top top",
        onEnter: () => {
          document.querySelector("header")?.classList.add("white");
        },
        onLeaveBack: () => {
          document.querySelector("header")?.classList.remove("white");
        },
      });

      // 섹션1 핀 애니메이션 (데스크톱)
      ScrollTrigger.matchMedia({
        "(min-width: 821px)": () => {
          gsap.from("._customizing .s1 h1", { y: 40, opacity: 0, duration: 0.8 });

          gsap.to("._customizing .s1 .scrolls", {
            scrollTrigger: {
              trigger: "._customizing .s1 .pins",
              start: "top top",
              end: "bottom bottom-=50%",
              pin: true,
            },
          });

          gsap.timeline({
            scrollTrigger: {
              trigger: "._customizing .s1 .scrolls .scrollH1",
              start: "top top",
              scrub: 1,
            },
          })
            .from("._customizing .bg", {
              clipPath: "polygon(12.5% 40%, 87.5% 40%, 87.5% 100%, 12.5% 100%)",
            })
            .from("._customizing .s1 h1", { height: "45vh" }, "-=100%")
            .to("._customizing .scrollcircle", { opacity: 0 }, "-=100%")
            .to("._customizing .s1 h1", { opacity: 0 })
            .to("._customizing .s1 .swiper", { opacity: 1 }, "-=100%");

          gsap.timeline({
            scrollTrigger: {
              trigger: "._customizing .s1 .scrolls",
              start: "top+=5px top",
              toggleActions: "play none none reverse",
            },
          }).from("._customizing .bg .max", { scale: 1.2, duration: 1.5 });

          gsap.timeline({
            scrollTrigger: {
              trigger: "._customizing .s1 .scrolls .scrollH2",
              start: "top top",
              scrub: 1,
              fastScrollEnd: true,
              onUpdate: (self) => {
                if (self.progress < 0.33 && slide01 && swiperInstance) {
                  swiperInstance.slideTo(0);
                  setSlide01(false);
                  setSlide02(true);
                }
                if (self.progress > 0.32 && slide02 && swiperInstance) {
                  swiperInstance.slideTo(1);
                  setSlide01(true);
                  setSlide02(false);
                  setSlide03(true);
                }
                if (self.progress > 0.85 && slide03 && swiperInstance) {
                  swiperInstance.slideTo(2);
                  setSlide02(true);
                  setSlide03(false);
                }
              },
              onEnter: () => {
                setSlide01(true);
              },
              onEnterBack: () => {
                setSlide03(true);
              },
            },
          });
        },
        "(max-width: 820px)": () => {
          gsap.timeline()
            .from("._customizing .s1 .bg", {
              clipPath: "polygon(12.5% 40%, 87.5% 40%, 87.5% 100%, 12.5% 100%)",
              duration: 0.8,
            })
            .from("._customizing .s1 h1", { opacity: 0, y: 40, duration: 0.8 }, "-=100%");
        },
      });

      // 섹션2 배경 이미지 전환
      const backImgs = document.querySelectorAll("._customizing .s2 .back img");
      if (backImgs.length > 0) {
        gsap.timeline({
          scrollTrigger: {
            trigger: "._customizing .s2 .back",
            start: "top top",
            endTrigger: "._customizing .s2",
            end: "bottom bottom",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onEnter: () => {
              backImgs[0]?.classList.add("on");
            },
            onLeaveBack: () => {
              backImgs[0]?.classList.remove("on");
            },
            onUpdate: (self) => {
              if (self.progress < 0.33) {
                backImgs[0]?.classList.add("on");
                backImgs[1]?.classList.remove("on");
                backImgs[2]?.classList.remove("on");
              } else if (self.progress > 0.32 && self.progress <= 0.65) {
                backImgs[0]?.classList.remove("on");
                backImgs[1]?.classList.add("on");
                backImgs[2]?.classList.remove("on");
              } else if (self.progress > 0.65) {
                backImgs[0]?.classList.remove("on");
                backImgs[1]?.classList.remove("on");
                backImgs[2]?.classList.add("on");
              }
            },
          },
        });
      }

      // 카테고리 활성화 애니메이션
      const categoryItems = document.querySelectorAll("._customizing .s2 > ul li");
      categoryItems.forEach((item, idx) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center",
            toggleActions: "play none none reverse",
            onEnter: () => {
              item.classList.add("on");
              categoryItems.forEach((sibling, i) => {
                if (i !== idx) sibling.classList.remove("on");
              });
            },
            onLeaveBack: () => {
              item.classList.remove("on");
              if (idx > 0) {
                categoryItems[idx - 1]?.classList.add("on");
              }
            },
          },
        });
      });
    },
    { scope: mainRef, dependencies: [swiperInstance, slide01, slide02, slide03, locale] }
  );

  useEffect(() => {
    // 해시 링크 처리
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const target = document.querySelector(`#${hash}`);
      if (target) {
        const windowHeight = window.innerHeight / 3;
        const offset = window.innerWidth > 820 ? 100 : windowHeight;
        setTimeout(() => {
          gsap.to(window, {
            duration: 0.5,
            ease: "power2.out",
            scrollTo: { y: target, offsetY: offset },
          });
        }, 100);
      }
    }
  }, []);

  return (
    <main
      ref={mainRef}
      className="_customizing _s min-h-screen bg-[#fafafa] text-[#111]"
    >
      {/* 섹션 1: 히어로 */}
      <section className="s1 relative">
        <div className="pins relative">
          <div className="bg absolute inset-0 overflow-hidden">
            <div
              className="max absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url(/asset/img/sub/customizing/se01bg.jpg)",
              }}
            />
          </div>
          <h1 className="relative z-10 text-center text-[clamp(60px,12vw,120px)] font-light tracking-[0.1em] text-white">
            CUSTOMIZING
          </h1>
          <div className="scrollcircle absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
            <div className="rel relative">
              <img src="/asset/img/sub/scroll_circle.png" alt={page.scrollAlt} />
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  id="arrow_down"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128.66 218.52"
                  className="w-8 h-8"
                >
                  <path
                    className="stroke-white stroke-[6] fill-none"
                    d="M-546.63,408.4a61.33,61.33,0,0,1,61.33-61.33"
                    transform="translate(610.96 -192.89)"
                  />
                  <path
                    className="stroke-white stroke-[6] fill-none"
                    d="M-546.63,195.89V408.4A61.33,61.33,0,0,0-608,347.07"
                    transform="translate(610.96 -192.89)"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="swiper mySwiper opacity-0 relative z-10 mt-20">
            <Swiper
              modules={[Pagination]}
              slidesPerView={1.2}
              spaceBetween={20}
              centeredSlides={true}
              pagination={{ clickable: true }}
              breakpoints={{
                821: {
                  slidesPerView: 1.6,
                  allowTouchMove: false,
                },
                0: {
                  allowTouchMove: true,
                },
              }}
              onSwiper={setSwiperInstance}
              className="!pb-12"
            >
              {page.introSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="_inn p-8 text-center">
                    <p className="text-lg md:text-xl text-white leading-relaxed">{slide.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="scrolls">
          <div className="scrollH1" style={{ height: "150vh" }} />
          <div className="scrollH2" style={{ height: "200vh" }} />
          <div className="scrollH3" style={{ height: "200vh" }} />
        </div>
      </section>

      {/* 섹션 2: 카테고리 */}
      <section className="s2 relative min-h-screen">
        <div className="back absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <img
            className="extra act absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000 on"
            src="/asset/img/sub/customizing/se02bg1.jpg"
            alt={page.bgAlt1}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            src="/asset/img/sub/customizing/se02bg2.jpg"
            alt={page.bgAlt2}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-1000"
            src="/asset/img/sub/customizing/se02bg3.jpg"
            alt={page.bgAlt3}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <ul className="relative z-10 space-y-[100vh] py-[50vh]">
          {page.categories.map((category, idx) => (
            <li
              key={category.id}
              id={category.id}
              className={`${category.id} ${idx === 0 ? "on" : ""} min-h-[50vh] flex items-center px-8 md:px-16`}
            >
              <div className="t max-w-4xl">
                <strong className="block text-[clamp(32px,5vw,48px)] font-light mb-6 text-white">
                  {category.title}
                </strong>
                <dl className="space-y-4">
                  <dt className="text-[clamp(16px,2vw,20px)] font-light leading-relaxed text-white/90">
                    {category.description.dt}
                  </dt>
                  <dd className="text-[clamp(14px,1.5vw,16px)] font-light leading-relaxed text-white/80">
                    {category.description.dd}
                  </dd>
                </dl>

                {/* 리프팅 섹션에만 세부 시술 추가 */}
                {category.id === "lifting" && category.treatments && (
                  <div className="treatments mt-12 space-y-8">
                    {category.treatments.map((treatment, tIdx) => (
                      <div 
                        key={tIdx} 
                        className="treatment-item bg-white/15 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-lg"
                        style={{ opacity: 1, visibility: 'visible' }}
                      >
                        <h4 className="text-xl font-medium mb-3 text-white">{treatment.name}</h4>
                        <p className="text-sm leading-relaxed text-white/90">{treatment.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
