"use client";

import { useState } from "react";

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 10000, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[520px] mx-4 p-8 md:p-10"
        style={{
          background: "#111",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white text-xl transition-colors cursor-pointer"
        >
          ✕
        </button>

        <h3 className="text-white text-[24px] font-medium tracking-[-0.02em] mb-2">Start a project</h3>
        <p className="text-white/40 text-[14px] mb-8">Tell us about your idea and we&apos;ll get back within 24 hours.</p>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your name"
            className="w-full h-[44px] px-4 bg-white/[0.04] border border-white/10 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-[#FF623B] transition-colors"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full h-[44px] px-4 bg-white/[0.04] border border-white/10 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-[#FF623B] transition-colors"
          />
          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 text-white text-[14px] placeholder:text-white/20 outline-none focus:border-[#FF623B] transition-colors resize-none"
          />
          <button
            type="submit"
            className="btn-slide h-[44px] bg-[#FF623B] hover:bg-white mt-2"
          >
            <span className="btn-text-default text-white">send message →</span>
            <span className="btn-text-hover text-black">send message →</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
