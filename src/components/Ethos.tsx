"use client";

import { useState } from "react";
import { ethosContent } from "@/data/content";

export default function Ethos() {
  const { sectionLabel, sectionTitle, cards } = ethosContent;
  const [mobileIdx, setMobileIdx] = useState(0);

  const mobilePrev = () => setMobileIdx((p) => (p - 1 + cards.length) % cards.length);
  const mobileNext = () => setMobileIdx((p) => (p + 1) % cards.length);

  return (
    <section className="w-full bg-[#0A0A0A] px-4 pt-20 pb-6 sm:px-6 lg:px-10">
      {/* Header */}
      <div className="mx-auto w-full max-w-[1200px] mb-12">
        <div className="flex flex-col gap-3">
          <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
            {sectionLabel}
          </span>
          <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
            {sectionTitle}
          </h2>
        </div>
      </div>

      {/* ── Mobile: Card Stack ──────────────────────── */}
      <div className="md:hidden">
        <div className="relative mx-auto h-[540px] w-full overflow-hidden bg-[#0A0A0A]" style={{ clipPath: "inset(0)" }}>
          {cards.map((card, idx) => {
            const offset = (idx - mobileIdx + cards.length) % cards.length;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (offset !== 0) setMobileIdx(idx);
                }}
                className="card-stack-item"
                style={{
                  height: "100%",
                  transform: `translateY(${offset * 72}px) scale(${1 - offset * 0.05})`,
                  transformOrigin: "top center",
                  opacity: Math.max(0, 1 - offset * 0.22),
                  zIndex: cards.length - offset,
                  pointerEvents: "auto",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    background: card.bg,
                    borderRadius: 22,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    padding: 20,
                    boxShadow: offset === 0 ? "0 24px 60px rgba(0,0,0,0.28)" : "0 10px 30px rgba(0,0,0,0.18)",
                  }}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <h3
                      style={{
                        color: card.textColor,
                        fontSize: 28,
                        fontWeight: 700,
                        lineHeight: "0.98em",
                        letterSpacing: "-0.03em",
                        whiteSpace: "pre-line",
                        margin: 0,
                      }}
                    >
                      {card.title}
                    </h3>
                    <span style={{ color: card.numColor, fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", opacity: 0.55, paddingTop: 4 }}>
                      {String(idx + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 0, padding: "8px 0 14px" }}>
                    <div
                      className="w-full flex items-center justify-center"
                      style={{ maxWidth: 240, height: 220 }}
                    >
                      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="60" r="50" stroke={card.textColor} strokeWidth="1" opacity="0.3" />
                        <circle cx="60" cy="60" r="30" stroke={card.textColor} strokeWidth="1" opacity="0.2" />
                        <circle cx="60" cy="60" r="10" fill={card.textColor} opacity="0.15" />
                      </svg>
                    </div>
                  </div>

                  <p
                    style={{
                      color: card.textColor,
                      fontSize: 11,
                      fontWeight: 500,
                      lineHeight: "1.7em",
                      letterSpacing: "0.05em",
                      opacity: 0.74,
                      margin: 0,
                      maxWidth: 290,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={mobilePrev}
            className="flex h-11 flex-1 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[10px] font-medium uppercase tracking-[0.16em] text-white/72 transition-colors hover:bg-white/[0.08]"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={mobileNext}
            className="flex h-11 flex-1 items-center justify-center rounded-full bg-[#F3F3F3] text-[10px] font-medium uppercase tracking-[0.16em] text-black transition-colors hover:bg-[#FF623B] hover:text-white"
          >
            Next
          </button>
        </div>
      </div>

      {/* ── Desktop: Expandable Columns ─────────────── */}
      <div className="hidden md:flex w-full max-w-[1200px] mx-auto" style={{ gap: 4, height: "clamp(480px, 70vh, 620px)" }}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="ethos-col"
            style={{
              background: card.bg,
              padding: "clamp(16px, 2vw, 26px)",
            }}
          >
            <h3
              style={{
                color: card.textColor,
                fontSize: "clamp(15px, 1.8vw, 24px)",
                fontWeight: 700,
                lineHeight: "1.1em",
                letterSpacing: "-0.01em",
                whiteSpace: "pre-line",
                margin: 0,
                flexShrink: 0,
              }}
            >
              {card.title}
            </h3>

            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "8px 0", minHeight: 0 }}>
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke={card.textColor} strokeWidth="1" opacity="0.2" />
                <circle cx="100" cy="100" r="50" stroke={card.textColor} strokeWidth="1" opacity="0.15" />
                <circle cx="100" cy="100" r="20" fill={card.textColor} opacity="0.1" />
                <path d="M60 100 L100 60 L140 100 L100 140Z" stroke={card.textColor} strokeWidth="1" opacity="0.2" />
              </svg>
            </div>

            <div style={{ flexShrink: 0, textAlign: "center", display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ color: card.numColor, fontSize: 11, fontWeight: 400, letterSpacing: "0.06em", opacity: 0.5 }}>
                {String(idx + 1).padStart(2, "0")} / {String(cards.length).padStart(2, "0")}
              </span>
              <p
                style={{
                  color: card.textColor,
                  fontSize: 10.5,
                  fontWeight: 400,
                  lineHeight: "1.65em",
                  letterSpacing: "0.04em",
                  opacity: 0.75,
                  margin: 0,
                  maxWidth: 260,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
