"use client";

import { statsContent } from "@/data/content";

export default function StatsBar() {
  return (
    <section className="flex justify-center w-full bg-[#0A0A0A] px-4 sm:px-6 md:px-10 pt-2 pb-2">
      <div className="flex flex-col w-full max-w-[1200px] gap-1">
        <div className="flex flex-col md:flex-row md:items-end w-full gap-3 md:gap-1">
          {/* Left column: Free trial info */}
          <div className="opacity-50 md:w-[683px]">
            <p className="text-white font-normal leading-[1.35em] tracking-[-0.01em]" style={{ fontSize: 13 }}>
              + {statsContent[0].text}
            </p>
            <p className="text-white font-normal leading-[1.35em] tracking-[-0.01em]" style={{ fontSize: 13 }}>
              + {statsContent[1].text}
            </p>
          </div>

          {/* Right column: Metrics */}
          <div className="flex flex-col gap-2 md:gap-1 md:w-[513px]">
            {statsContent.slice(2).map((s, i) => (
              <p key={i} className="text-white font-normal leading-[1.35em] tracking-[-0.01em] opacity-50" style={{ fontSize: 13 }}>
                + {s.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
