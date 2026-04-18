"use client";

import { domainsContent } from "@/data/content";

export default function Domains() {
  const { sectionLabel, sectionTitle, domains } = domainsContent;

  return (
    <div id="platforms">
      <section className="relative bg-[#0A0A0A]" style={{ zIndex: 30, isolation: "isolate" }}>
        {/* Section header */}
        <div
          className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
          style={{ zIndex: 60 }}
        >
          <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
            <div className="flex flex-col gap-3">
              <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                {sectionLabel}
              </span>
              <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                {sectionTitle}
              </h2>
            </div>
            <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
              <span className="btn-text-default text-black">start a project →</span>
              <span className="btn-text-hover text-white">start a project →</span>
            </button>
          </div>
        </div>

        {/* Sticky cards */}
        {domains.map((domain, idx) => (
          <div
            key={idx}
            className="sticky top-0 flex w-full items-center justify-center px-4 sm:px-6 lg:px-10"
            style={{ zIndex: 30 + idx, height: "100svh" }}
          >
            <div
              className="relative flex flex-col md:flex-row w-full max-w-[1200px] overflow-hidden"
              style={{
                height: "clamp(480px, 92svh, 680px)",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0A0A0A",
              }}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at ${idx % 2 === 0 ? "30%" : "70%"} 50%, rgba(255,98,59,0.06) 0%, transparent 60%)`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col p-6 md:p-8 xl:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium uppercase" style={{ fontSize: 11, letterSpacing: "0.08em", opacity: 0.35 }}>
                    ({domain.tag})
                  </span>
                  <span className="text-white font-normal" style={{ fontSize: 13, letterSpacing: "0.02em", opacity: 0.25 }}>
                    {String(idx + 1).padStart(2, "0")} / {String(domains.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-8 mb-auto flex flex-col gap-6 md:mt-10 xl:mt-12">
                  <div className="flex flex-col gap-4">
                    <h3
                      className="text-white font-normal"
                      style={{
                        fontSize: "clamp(1.8rem, 1.2rem + 3vw, 4.2rem)",
                        lineHeight: "1.08em",
                        letterSpacing: "-0.04em",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {domain.title}
                    </h3>

                    <div className="flex items-center gap-2 flex-wrap">
                      {domain.pills.map((pill) => (
                        <span key={pill} className="tag-pill">{pill}</span>
                      ))}
                    </div>

                    <p
                      className="text-white font-normal"
                      style={{ fontSize: 15, lineHeight: "1.65em", letterSpacing: "-0.01em", opacity: 0.35, maxWidth: 420 }}
                    >
                      {domain.description}
                    </p>
                  </div>

                  <div className="mt-2 hidden md:block">
                    <a
                      href="#contact"
                      className="group relative overflow-hidden inline-flex items-center justify-center font-medium"
                      style={{ fontSize: 13, letterSpacing: "-0.01em", height: 44, padding: "0 24px", borderRadius: 0, background: "#fff", color: "#000", width: "fit-content" }}
                    >
                      <div className="relative flex items-center justify-center w-full h-full">
                        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-12">
                          {domain.ctaLabel}
                        </span>
                        <span className="absolute block transition-transform duration-300 ease-out translate-y-12 group-hover:translate-y-0">
                          {domain.ctaLabel}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Device image area */}
              <div className="relative z-10 shrink-0 flex items-end justify-center w-full h-[200px] md:h-full md:w-[clamp(240px,28vw,420px)]">
                <div className="w-full h-full flex items-center justify-center opacity-10">
                  <span className="text-white text-6xl font-bold">{domain.tag}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div style={{ height: 1 }} />
      </section>
    </div>
  );
}
