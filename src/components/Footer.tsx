"use client";

import Image from "next/image";
import { siteConfig, footerContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] w-full pt-16 md:pt-24 pb-8 px-5 sm:px-8 md:px-10 relative z-50 overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-between items-start mt-8 md:mt-16 gap-10 lg:gap-0">
          {/* Logo */}
          <div className="flex lg:flex-1 justify-start">
            <Image
              src={siteConfig.logo.dark}
              alt={`${siteConfig.name} Logo`}
              width={260}
              height={260}
              className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[260px] h-auto object-contain"
            />
          </div>

          {/* CTA + Contact */}
          <div className="flex flex-col w-full lg:flex-1 lg:max-w-[480px]">
            <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-[1.2] tracking-[-0.02em] text-[#111] mb-6 md:mb-8" style={{ whiteSpace: "pre-line" }}>
              {footerContent.heading}
            </h2>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-10 md:mb-16">
              <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-black/10">
                <span className="invisible px-8 text-[10px] md:text-[11px] font-semibold uppercase tracking-wider">
                  Book a Call →
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-black text-[10px] md:text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">
                  Book a Call →
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-black text-[10px] md:text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">
                  Book a Call →
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-white hover:bg-[#FF623B] transition-colors duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-black/5 hover:border-[#FF623B]"
              >
                <span className="invisible px-5 md:px-8 text-[9px] md:text-[11px] font-semibold uppercase tracking-wider">
                  {siteConfig.email} →
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-black text-[9px] md:text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">
                  {siteConfig.email}
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white text-[9px] md:text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">
                  {siteConfig.email} →
                </span>
              </a>
            </div>

            {/* Call info */}
            <div className="flex flex-col gap-2 text-[#111]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF623B]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF623B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-[16px] font-semibold tracking-[-0.01em]">30 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF623B]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF623B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[16px] font-semibold tracking-[-0.01em]">1-on-1 with a strategist</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF623B]/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF623B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="text-[16px] font-semibold tracking-[-0.01em]">Free, no strings attached</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-24 lg:mt-32 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[9px] sm:text-[10px] uppercase text-black/60 w-full pb-2">
          <div>{footerContent.copyright}</div>
          <div className="flex items-center gap-6 sm:gap-10 md:gap-16">
            <a className="hover:text-black transition-colors" href="/privacy-policy">PRIVACY POLICY</a>
            <a className="hover:text-black transition-colors" href="/terms-and-conditions">TERMS AND CONDITIONS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
