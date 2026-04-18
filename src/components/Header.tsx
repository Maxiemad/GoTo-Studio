"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  const navLinks = siteConfig.nav;

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="md:hidden fixed inset-0 pointer-events-none transition-all duration-300"
        style={{
          zIndex: 99,
          backdropFilter: mobileOpen ? "blur(6px)" : "blur(0px)",
          WebkitBackdropFilter: mobileOpen ? "blur(6px)" : "blur(0px)",
          background: mobileOpen ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Top Bar ──────────────────────────────────── */}
      <header
        className="fixed top-0 left-0 right-0 flex flex-col justify-center w-full px-4 sm:px-6 md:px-10"
        style={{
          zIndex: 100,
          background: "#0A0A0A",
          boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.07)",
          transform: scrolled ? "translateY(-100%)" : "translateY(0)",
          opacity: scrolled ? 0 : 1,
          pointerEvents: scrolled ? "none" : "auto",
          transition: "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s",
        }}
      >
        <div className="flex items-center justify-between w-full mx-auto py-2" style={{ maxWidth: 1200 }}>
          <Link href="/" className="flex items-center shrink-0">
            <Image src={siteConfig.logo.white} alt={siteConfig.logo.alt} width={28} height={24} style={{ width: "auto", height: 24 }} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 shrink-0">
            <nav className="flex items-center gap-8">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-white text-[15px] font-normal leading-[1.4em] tracking-[-0.01em] hover:opacity-70 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </nav>
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B]">
              <span className="btn-text-default text-black">Book a Call →</span>
              <span className="btn-text-hover text-white">Book a Call →</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[6px] w-8 h-8"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className="block w-5 h-px bg-white transition-all duration-200 origin-center"
              style={{ transform: mobileOpen ? "rotate(45deg) translateY(3.5px)" : "none" }}
            />
            <span
              className="block w-5 h-px bg-white transition-all duration-200 origin-center"
              style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-3.5px)" : "none" }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            borderTop: mobileOpen ? "1px solid rgba(255,255,255,0.05)" : "none",
            maxHeight: mobileOpen ? 400 : 0,
          }}
        >
          <nav className="flex flex-col px-1 py-3 gap-0">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-white text-[15px] font-normal py-3 border-b border-white/5 hover:opacity-70 transition-opacity">
                {l.label}
              </Link>
            ))}
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-3 mb-1 w-full h-[40px] bg-white text-black text-[10px] font-medium tracking-[0.03em] uppercase hover:bg-[#FF623B] hover:text-white transition-colors flex items-center justify-center">
              Book a Call →
            </a>
          </nav>
        </div>
      </header>

      {/* ── Floating Pill Nav ────────────────────────── */}
      <div className={`pill-nav hidden md:flex items-center gap-6 ${scrolled ? "visible-pill" : "hidden-pill"}`}>
        <Link href="/" className="flex items-center shrink-0">
          <Image src={siteConfig.logo.white} alt={siteConfig.logo.alt} width={26} height={22} style={{ width: "auto", height: 22 }} />
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-white text-[14px] font-normal hover:opacity-70 transition-opacity">
              {l.label}
            </Link>
          ))}
        </nav>
        <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-slide h-[34px] rounded-full bg-white hover:bg-[#FF623B]">
          <span className="invisible px-5 text-[11px] font-medium tracking-[0.03em] uppercase">Book a Call →</span>
          <span className="btn-text-default text-black text-[11px] font-medium tracking-[0.03em] uppercase">Book a Call →</span>
          <span className="btn-text-hover text-white text-[11px] font-medium tracking-[0.03em] uppercase">Book a Call →</span>
        </a>
      </div>
    </>
  );
}
