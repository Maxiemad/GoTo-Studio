"use client";

import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="flex justify-center w-full bg-[#0A0A0A] px-4 sm:px-6 md:px-10 pt-[105px] pb-[80px]">
      <div className="flex flex-col items-start w-full max-w-[1200px] gap-10">
        <h1
          className="text-white font-normal w-full max-w-[1000px]"
          style={{
            fontSize: "clamp(2rem, 1.4rem + 2.5vw, 3.5rem)",
            lineHeight: "1.15em",
            letterSpacing: "-0.03em",
          }}
        >
          {heroContent.headline.map((part, i) =>
            part.accent ? (
              <span key={i} style={{ fontFamily: "var(--font-lora)", fontStyle: "italic", color: "#FF623B" }}>
                {part.text}
              </span>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h1>

        <div className="flex items-center gap-2 flex-wrap">
          <a
            href={heroContent.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-slide bg-[#FF623B] hover:bg-white backdrop-blur-[6px]"
            style={{ height: 30, padding: "0 20px" }}
          >
            <span className="invisible px-1 text-[10px] font-medium tracking-[0.03em] uppercase whitespace-nowrap">{heroContent.cta.label}</span>
            <span className="btn-text-default text-white whitespace-nowrap">{heroContent.cta.label}</span>
            <span className="btn-text-hover text-black whitespace-nowrap">{heroContent.cta.label}</span>
          </a>

          <a
            href={heroContent.secondary.href}
            className="flex items-center justify-center bg-[rgba(255,255,255,0.04)] backdrop-blur-[6px] text-white text-[10px] font-medium leading-[1.4em] tracking-[0.03em] uppercase px-5"
            style={{ height: 30 }}
          >
            {heroContent.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
