"use client";

import { useEffect, useRef } from "react";
import { scrollTextContent } from "@/data/content";

export default function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const words = scrollTextContent.split(" ");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Progress: 0 when top of container hits bottom of viewport, 1 when bottom hits top
      const scrollDistance = containerHeight + viewportHeight;
      const scrolled = viewportHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollDistance));

      wordsRef.current.forEach((el, i) => {
        if (!el) return;
        const wordProgress = Math.max(0, Math.min(1, (progress * words.length - i) / 3));
        const x = (1 - wordProgress) * (200 + (i % 5) * 80);
        const opacity = wordProgress;
        el.style.transform = `translateX(${x}px)`;
        el.style.opacity = `${opacity}`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [words.length]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "220vh" }}>
      <div className="sticky top-0 flex h-screen w-full items-center overflow-y-hidden bg-[#0A0A0A]">
        <div className="w-full overflow-x-hidden px-4 sm:px-6 md:px-10">
          <div className="w-full max-w-[1200px] mx-auto">
            <p style={{ fontSize: "clamp(2rem, 3vw, 3.8rem)", lineHeight: "1.4em", letterSpacing: "-0.03em" }}>
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => { if (el) wordsRef.current[i] = el; }}
                  className="inline-block text-white"
                  style={{
                    marginRight: "0.28em",
                    transform: `translateX(${200 + (i % 5) * 80}px)`,
                    opacity: 0,
                    willChange: "transform, opacity",
                  }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
