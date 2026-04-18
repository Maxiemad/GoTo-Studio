"use client";

import { useState, useRef, useEffect } from "react";
import { projectsContent } from "@/data/content";

const VIDEO_URL =
  "https://assets.cdn.filesafe.space/gnnsnJtVqzaXD5459s7S/media/69bd12ad0879ee71dc6f3e06.mp4";

export default function FeaturedWork() {
  const [current, setCurrent] = useState(0);
  const projects = projectsContent.projects;
  const total = projects.length;
  const project = projects[current];

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  const next = () => setCurrent((p) => (p + 1) % total);
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  // Auto-play when section enters viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoPlayed && videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
            setHasAutoPlayed(true);
          }).catch(() => {
            // Autoplay blocked — try muted
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().then(() => {
                setIsPlaying(true);
                setHasAutoPlayed(true);
              }).catch(() => {});
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [hasAutoPlayed]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#0A0A0A] px-4 py-20 sm:px-6 lg:px-10">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div className="flex flex-col gap-3">
            <span
              className="text-white uppercase tracking-[0.03em] font-medium opacity-40"
              style={{ fontSize: 10, lineHeight: "1.4em" }}
            >
              {projectsContent.sectionLabel}
            </span>
            <h2
              className="text-white font-normal"
              style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}
            >
              {projectsContent.sectionTitle}
            </h2>
          </div>
          <a
            href="#platforms"
            className="btn-slide h-[30px] w-[148px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]"
          >
            <span className="btn-text-default text-black">see all features →</span>
            <span className="btn-text-hover text-white">see all features →</span>
          </a>
        </div>

        {/* Project Card */}
        <div className="glass-card flex flex-col md:flex-row items-stretch p-3" style={{ gap: 0 }}>
          {/* ── Video (persistent across slides) ────── */}
          <div className="w-full md:flex-1 flex items-center">
            <div className="w-full overflow-hidden relative" style={{ borderRadius: 12 }}>
              <video
                ref={videoRef}
                src={VIDEO_URL}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                style={{
                  aspectRatio: "16/10",
                  borderRadius: 12,
                  display: "block",
                  background: "#000",
                }}
              />

              {/* Play/Pause + Mute controls — bottom left */}
              <div
                className="absolute bottom-4 left-4 flex items-center gap-2"
                style={{ zIndex: 10 }}
              >
                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="flex items-center justify-center rounded-full transition-all hover:scale-105 cursor-pointer"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    /* Pause icon — two bars */
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <rect x="3" y="2" width="3.5" height="12" rx="1" />
                      <rect x="9.5" y="2" width="3.5" height="12" rx="1" />
                    </svg>
                  ) : (
                    /* Play icon — triangle */
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                      <path d="M4 2.5v11l9-5.5z" />
                    </svg>
                  )}
                </button>

                {/* Mute / Unmute */}
                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center rounded-full transition-all hover:scale-105 cursor-pointer"
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(0,0,0,0.55)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    /* Speaker muted icon */
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" stroke="none" />
                      <line x1="23" y1="9" x2="17" y2="15" />
                      <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                  ) : (
                    /* Speaker unmuted icon */
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" stroke="none" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ── Details (changes per slide) ──────── */}
          <div className="flex flex-col justify-between w-full md:w-[380px] min-w-0 gap-6 md:gap-0 p-5 md:p-8">
            <div className="flex flex-col gap-6">
              <span
                className="text-white w-fit"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  padding: "5px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  opacity: 0.8,
                }}
              >
                {project.category}
              </span>
              <h3
                className="text-white font-normal break-words"
                style={{
                  fontSize: "clamp(2rem, 1.5rem + 2.5vw, 4rem)",
                  lineHeight: "1em",
                  letterSpacing: "-0.04em",
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {project.title}
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              <span
                className="text-white"
                style={{ fontSize: 11, letterSpacing: "0.08em", opacity: 0.35 }}
              >
                {project.services}
              </span>
              <p
                className="text-white font-normal"
                style={{
                  fontSize: 17,
                  lineHeight: "1.5em",
                  letterSpacing: "-0.02em",
                  opacity: 0.85,
                }}
              >
                {project.description}
              </p>

              <div className="flex items-center justify-between pt-2">
                <button
                  className="group relative overflow-hidden inline-flex items-center justify-center cursor-pointer"
                  style={{
                    fontSize: 13,
                    letterSpacing: "-0.01em",
                    height: 34,
                    padding: "0 16px",
                    borderRadius: 0,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                  }}
                >
                  <span
                    className="relative flex items-center overflow-hidden"
                    style={{ height: 34 }}
                  >
                    <span className="block transition-transform duration-150 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
                      Learn more →
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-150 ease-in-out translate-y-full group-hover:translate-y-0 whitespace-nowrap">
                      Learn more →
                    </span>
                  </span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{
                      width: 34,
                      height: 34,
                      border: "none",
                      background: "#fff",
                      cursor: "pointer",
                      borderRadius: "50%",
                      color: "#000",
                    }}
                  >
                    ↑
                  </button>
                  <button
                    onClick={next}
                    className="flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{
                      width: 34,
                      height: 34,
                      border: "none",
                      background: "#fff",
                      cursor: "pointer",
                      borderRadius: "50%",
                      color: "#000",
                    }}
                  >
                    ↓
                  </button>
                  <span
                    className="text-white opacity-25 ml-1"
                    style={{ fontSize: 11, letterSpacing: "0.04em" }}
                  >
                    {String(current + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="block md:hidden text-center text-white/30 mt-6"
        style={{ fontSize: 10, letterSpacing: "0.1em" }}
      >
        Keep Scrolling
      </p>
    </section>
  );
}
