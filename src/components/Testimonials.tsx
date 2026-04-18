"use client";

import { useRef } from "react";
import { testimonialsContent } from "@/data/content";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth ?? 400;
    scrollRef.current.scrollBy({ left: dir * (cardWidth + 6), behavior: "smooth" });
  };

  // Double the testimonials for infinite scroll illusion
  const items = [...testimonialsContent, ...testimonialsContent];

  return (
    <div id="testimonials">
      <section className="bg-[#0A0A0A] py-16 md:py-24 overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-10 max-w-[1240px] mx-auto mb-12">
          <div className="flex items-center gap-7">
            <span className="text-white font-medium uppercase" style={{ fontSize: 10, letterSpacing: "0.14em", opacity: 0.35 }}>
              Testimonials
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll(-1)}
                className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all text-[14px] cursor-pointer"
              >
                ‹
              </button>
              <button
                onClick={() => scroll(1)}
                className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all text-[14px] cursor-pointer"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-[6px] no-scrollbar px-4 sm:px-6 md:px-10 lg:px-20"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] sm:w-[45vw] md:w-[32vw] max-w-[440px] min-h-[285px] border bg-white/[0.03] border-white/[0.06] p-7 md:p-9 flex flex-col justify-between"
            >
              <p className="text-[14px] md:text-[14.5px] leading-[1.65em] tracking-[-0.01em] text-white m-0">
                <span className="opacity-40">{t.quote} </span>
                <span className="font-medium opacity-100">{t.highlight}</span>
              </p>

              <div className="flex items-center gap-4 mt-8">
                {/* Avatar pair */}
                <div className="relative w-14 h-9 flex-shrink-0">
                  <div className="absolute left-5 top-0 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] z-0">
                    <div
                      className="rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-white/[0.06]"
                      style={{ width: 36, height: 36 }}
                    >
                      <span className="font-semibold text-white/70 select-none" style={{ fontSize: 11.88 }}>
                        {t.initials[1]}
                      </span>
                    </div>
                  </div>
                  <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-white/10 border border-white/10 z-10 shadow-sm">
                    <div
                      className="rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 bg-white/10"
                      style={{ width: 36, height: 36 }}
                    >
                      <span className="font-semibold text-white/70 select-none" style={{ fontSize: 11.88 }}>
                        {t.initials[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-white text-[13px] font-medium tracking-tight">{t.name}</div>
                  <div className="text-white/30 text-[11px] tracking-tight mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
