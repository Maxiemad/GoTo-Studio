"use client";

import { techStackContent } from "@/data/content";

export default function TechGrid() {
  return (
    <section id="clients" className="w-full bg-[#0A0A0A] px-4 py-18 sm:px-6 md:py-24 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 max-w-[620px] md:mb-10">
          <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
            {techStackContent.title}
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-1 sm:grid-cols-4 md:grid-cols-7">
          {techStackContent.icons.map((icon) => (
            <div key={icon} className="tech-cell group flex aspect-square items-center justify-center overflow-hidden bg-white/[0.01] px-4 transition-colors duration-200 hover:bg-white/[0.03] sm:px-5">
              <div className="glow" />
              <div className="flex items-center justify-center opacity-[0.58] transition-opacity duration-200 group-hover:opacity-[0.92]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${icon}/white`}
                  alt={icon}
                  width={28}
                  height={28}
                  loading="lazy"
                  className="h-6 w-6 shrink-0 object-contain sm:h-7 sm:w-7"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
