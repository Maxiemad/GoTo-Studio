"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

// Add CSS animations
const style = `
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes slideInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.feature-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(255, 98, 59, 0.2);
}
`;

export default function Features() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which sections are visible
      const sections = document.querySelectorAll('.animate-section');
      const newVisible = new Set();
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isVisible) {
          newVisible.add(section.id);
        }
      });
      
      setVisibleSections(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{style}</style>
      <Header />
      <div className="pt-[72px] lg:pt-[44px]">
        <main style={{ background: "rgb(10, 10, 10)", minHeight: "100vh" }}>
          {/* Hero Section */}
          <section className="animate-section" id="hero" style={{ 
            position: "relative", 
            height: "70vh", 
            overflow: "hidden", 
            background: "rgb(10, 10, 10)", 
            display: "flex", 
            flexDirection: "column", 
            padding: "clamp(40px, 8vw, 80px) 0",
            transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('hero') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ 
              position: "absolute", 
              inset: 0, 
              backgroundImage: "radial-gradient(circle, rgba(231, 231, 231, 0.18) 1px, transparent 1px)", 
              backgroundSize: "32px 32px", 
              maskImage: "radial-gradient(80% 80% at 70% 50%, black 30%, transparent 100%)", 
              pointerEvents: "none",
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s linear'
            }}></div>
            <div style={{ 
              flex: "1 1 0%", 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              width: "100%", 
              maxWidth: "1200px", 
              margin: "0 auto", 
              padding: "0 clamp(20px, 5vw, 40px)", 
              position: "relative", 
              zIndex: 1 
            }}>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "8px", 
                marginBottom: "24px",
                transform: visibleSections.has('hero') ? 'translateX(0)' : 'translateX(-50px)',
                opacity: visibleSections.has('hero') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}>
                <div style={{ 
                  width: "6px", 
                  height: "6px", 
                  borderRadius: "50%", 
                  background: "#FF623B", 
                  flexShrink: 0,
                  boxShadow: '0 0 20px rgba(255, 98, 59, 0.6)',
                  animation: visibleSections.has('hero') ? 'pulse 2s infinite' : 'none'
                }}></div>
                <span style={{ 
                  fontFamily: "var(--font-azeret-mono)", 
                  fontSize: "11px", 
                  color: "rgba(231, 231, 231, 0.8)", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.12em" 
                }}>Features</span>
              </div>
              <h1 style={{ 
                position: "relative", 
                fontFamily: "var(--font-geist-sans), sans-serif", 
                fontSize: "clamp(2.5rem, 5vw, 4rem)", 
                fontWeight: 600, 
                color: "rgb(231, 231, 231)", 
                textTransform: "none", 
                letterSpacing: "-0.02em", 
                lineHeight: "1.1", 
                margin: "0 0 24px 0", 
                maxWidth: "900px",
                transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('hero') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s',
                background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Everything You Need to Scale Your Business
              </h1>
              <p style={{ 
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                color: "rgba(231, 231, 231, 0.8)", 
                lineHeight: "1.6", 
                margin: "0 0 32px 0", 
                maxWidth: "600px",
                transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('hero') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
              }}>
                Complete SaaS platform with done-for-you services. One solution for all your growth needs.
              </p>
              <button 
                className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-all duration-300 cursor-pointer border border-[#FF623B] hover:border-white rounded-full px-8 transform hover:scale-105" 
                style={{ 
                  width: "fit-content", 
                  transform: visibleSections.has('hero') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                  opacity: visibleSections.has('hero') ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
                  boxShadow: '0 10px 30px rgba(255, 98, 59, 0.3)'
                }}
              >
                <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call</span>
                <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:-translate-y-full">Book a Call</span>
                <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call</span>
              </button>
            </div>
          </section>

          {/* Two Worlds Section */}
          <div id="two-worlds">
            <section className="relative bg-[#0A0A0A]" style={{ zIndex: 30, isolation: "isolate" }}>
              {/* Section header */}
              <div
                className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
                style={{ zIndex: 60 }}
              >
                <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                  <div className="flex flex-col gap-3">
                    <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                      PLATFORM
                    </span>
                    <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                      Two Worlds, One Platform
                    </h2>
                    <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                      Lead Generation, SEO & Content Tools in One
                    </p>
                  </div>
                  <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                    <span className="btn-text-default text-black">start a project</span>
                    <span className="btn-text-hover text-white">start a project</span>
                  </button>
                </div>
              </div>

              {/* Sticky cards */}
              {[
                {
                  tag: "S",
                  title: "The Software",
                  description: "A complete SaaS operating system. Everything you need to run your business.",
                  features: [
                    "CRM & Pipelines", "Sales Funnels", "Calendar Booking", "Automations & Workflows",
                    "Email & SMS", "Website Builder", "Client Portal", "Courses & Communities",
                    "AI Assistant", "Prospecting Engine", "Analytics", "Affiliate Software"
                  ],
                  ctaLabel: "Explore Software",
                  color: "#FF623B"
                },
                {
                  tag: "G", 
                  title: "Growth Services",
                  description: "Done-for-you creative services. Expert execution, zero effort from you.",
                  features: [
                    "Reels", "Carousels", "Blogs", "SEO", "Content Calendar", "Strategy Calls",
                    "Prospecting", "AI-Powered Research", "Publishing & Scheduling", "Full Setup & Branding",
                    "Zero Commission", "AI Outreach"
                  ],
                  ctaLabel: "Get Services",
                  color: "#4E8B8B"
                }
              ].map((world, idx) => (
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
                        background: `radial-gradient(ellipse at ${idx % 2 === 0 ? "30%" : "70%"} 50%, ${world.color}15 0%, transparent 60%)`,
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-1 flex-col p-6 md:p-8 xl:p-10">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium uppercase" style={{ fontSize: 11, letterSpacing: "0.08em", opacity: 0.35 }}>
                          ({world.tag})
                        </span>
                        <span className="text-white font-normal" style={{ fontSize: 13, letterSpacing: "0.02em", opacity: 0.25 }}>
                          {String(idx + 1).padStart(2, "0")} / 02
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
                            {world.title}
                          </h3>

                          <p
                            className="text-white font-normal"
                            style={{ fontSize: 15, lineHeight: "1.65em", letterSpacing: "-0.01em", opacity: 0.35, maxWidth: 420 }}
                          >
                            {world.description}
                          </p>
                        </div>

                        {/* Feature Grid - Center Layout */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
                          {world.features.map((feature, featureIdx) => (
                            <div
                              key={featureIdx}
                              className="relative group"
                              style={{
                                transform: `rotate(${featureIdx % 2 === 0 ? -2 : 2}deg)`,
                                transition: 'all 0.3s ease'
                              }}
                              onMouseEnter={(e) => {
                                const target = e.currentTarget;
                                target.style.transform = 'rotate(0deg) scale(1.05)';
                                target.style.zIndex = '10';
                              }}
                              onMouseLeave={(e) => {
                                const target = e.currentTarget;
                                target.style.transform = `rotate(${featureIdx % 2 === 0 ? -2 : 2}deg) scale(1)`;
                                target.style.zIndex = '1';
                              }}
                            >
                              <div
                                className="px-3 py-2 text-center border rounded-lg transition-all duration-300"
                                style={{
                                  background: `${world.color}10`,
                                  borderColor: `${world.color}30`,
                                  color: "#fff",
                                  fontSize: "11px",
                                  fontWeight: "500",
                                  boxShadow: `0 4px 12px ${world.color}20`
                                }}
                              >
                                {feature}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 hidden md:block">
                          <a
                            href="#contact"
                            className="group relative overflow-hidden inline-flex items-center justify-center font-medium"
                            style={{ 
                              fontSize: 13, 
                              letterSpacing: "-0.01em", 
                              height: 44, 
                              padding: "0 24px", 
                              borderRadius: 0, 
                              background: world.color, 
                              color: "#fff", 
                              width: "fit-content" 
                            }}
                          >
                            <div className="relative flex items-center justify-center w-full h-full">
                              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-12">
                                {world.ctaLabel}
                              </span>
                              <span className="absolute block transition-transform duration-300 ease-out translate-y-12 group-hover:translate-y-0">
                                {world.ctaLabel}
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Visual area */}
                    <div className="relative z-10 shrink-0 flex items-end justify-center w-full h-[200px] md:h-full md:w-[clamp(240px,28vw,420px)]">
                      <div className="w-full h-full flex items-center justify-center">
                        <div 
                          className="text-6xl md:text-8xl font-bold opacity-20"
                          style={{ 
                            color: world.color,
                            textShadow: `0 0 40px ${world.color}40`
                          }}
                        >
                          {world.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ height: 1 }} />
            </section>
          </div>

          {/* Comparison Section */}
          <section className="animate-section" id="comparison" style={{ 
            padding: "80px 0", 
            background: "rgb(15, 15, 15)",
            transform: visibleSections.has('comparison') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('comparison') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div
              className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
              style={{ zIndex: 60 }}
            >
              <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                    COMPARISON
                  </span>
                  <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                    Why Choose GoToStudio?
                  </h2>
                  <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                    The all-in-one solution vs. piecing together multiple tools
                  </p>
                </div>
                <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                  <span className="btn-text-default text-black">learn more</span>
                  <span className="btn-text-hover text-white">learn more</span>
                </button>
              </div>
            </div>
            
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
                <div 
                  className="feature-card"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)", 
                    border: "1px solid rgba(255, 98, 59, 0.3)", 
                    borderRadius: "16px", 
                    padding: "32px",
                    position: "relative",
                    overflow: "hidden",
                    transform: visibleSections.has('comparison') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    opacity: visibleSections.has('comparison') ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s`
                  }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255, 98, 59, 0.1) 0%, transparent 70%)',
                    animation: visibleSections.has('comparison') ? `float 6s ease-in-out infinite` : 'none'
                  }}></div>
                  <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>Traditional Approach</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                      "Multiple subscriptions",
                      "Complex integrations", 
                      "Data silos",
                      "Higher costs",
                      "Steep learning curve",
                      "Inconsistent reporting"
                    ].map((item, index) => (
                      <div key={index} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "12px",
                        transform: visibleSections.has('comparison') ? 'translateX(0)' : 'translateX(-20px)',
                        opacity: visibleSections.has('comparison') ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.8 + index * 0.05}s`
                      }}>
                        <div style={{ 
                          width: "8px", 
                          height: "8px", 
                          borderRadius: "50%", 
                          background: "rgba(255, 98, 59, 0.5)", 
                          flexShrink: 0 
                        }}></div>
                        <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div 
                  className="feature-card"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(78, 139, 139, 0.1) 0%, rgba(78, 139, 139, 0.05) 100%)", 
                    border: "1px solid rgba(78, 139, 139, 0.3)", 
                    borderRadius: "16px", 
                    padding: "32px",
                    position: "relative",
                    overflow: "hidden",
                    transform: visibleSections.has('comparison') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    opacity: visibleSections.has('comparison') ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.8s`
                  }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(78, 139, 139, 0.1) 0%, transparent 70%)',
                    animation: visibleSections.has('comparison') ? `float 6s ease-in-out infinite 2s` : 'none'
                  }}></div>
                  <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>GoToStudio Solution</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {[
                      "All-in-one platform",
                      "Seamless integration", 
                      "Unified data",
                      "Cost-effective",
                      "Easy to use",
                      "Comprehensive analytics"
                    ].map((item, index) => (
                      <div key={index} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "12px",
                        transform: visibleSections.has('comparison') ? 'translateX(0)' : 'translateX(20px)',
                        opacity: visibleSections.has('comparison') ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.8 + index * 0.05}s`
                      }}>
                        <div style={{ 
                          width: "8px", 
                          height: "8px", 
                          borderRadius: "50%", 
                          background: "#4E8B8B", 
                          flexShrink: 0 
                        }}></div>
                        <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Freelancer Team Section */}
          <section className="animate-section" id="freelancer-team" style={{ 
            padding: "80px 0", 
            background: "rgb(10, 10, 10)",
            transform: visibleSections.has('freelancer-team') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('freelancer-team') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div
              className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
              style={{ zIndex: 60 }}
            >
              <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                    TARGET AUDIENCE
                  </span>
                  <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                    Perfect for Freelancers & Agencies
                  </h2>
                  <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                    Scale your client work without the overhead
                  </p>
                </div>
                <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                  <span className="btn-text-default text-black">get started</span>
                  <span className="btn-text-hover text-white">get started</span>
                </button>
              </div>
            </div>
              
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
                {[
                  {
                    title: "Client Management",
                    description: "Handle multiple clients seamlessly with dedicated workspaces",
                    icon: "people"
                  },
                  {
                    title: "White-Label Solutions", 
                    description: "Brand our platform as your own for client delivery",
                    icon: "brand"
                  },
                  {
                    title: "Revenue Sharing",
                    description: "Earn commissions on software and service referrals",
                    icon: "money"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index}
                    className="feature-card"
                    style={{ 
                      background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)", 
                      border: "1px solid rgba(255, 98, 59, 0.3)", 
                      borderRadius: "16px", 
                      padding: "32px",
                      position: "relative",
                      overflow: "hidden",
                      transform: visibleSections.has('freelancer-team') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                      opacity: visibleSections.has('freelancer-team') ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s`
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(255, 98, 59, 0.1) 0%, transparent 70%)',
                      animation: visibleSections.has('freelancer-team') ? `float 6s ease-in-out infinite ${index * 2}s` : 'none'
                    }}></div>
                    <div style={{ 
                      width: "60px", 
                      height: "60px", 
                      borderRadius: "12px", 
                      background: "rgba(255, 98, 59, 0.2)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      marginBottom: "20px",
                      fontSize: "24px",
                      color: "#FF623B"
                    }}>
                      {feature.icon === "people" && "team"}
                      {feature.icon === "brand" && "brand"}
                      {feature.icon === "money" && "payments"}
                    </div>
                    <h3 style={{ fontSize: "1.3rem", color: "rgb(231, 231, 231)", marginBottom: "12px" }}>{feature.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6" }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Enterprise Stats Section */}
          <section className="animate-section" id="enterprise-stats" style={{ 
            padding: "80px 0", 
            background: "rgb(15, 15, 15)",
            transform: visibleSections.has('enterprise-stats') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('enterprise-stats') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div
              className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
              style={{ zIndex: 60 }}
            >
              <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                    SCALE
                  </span>
                  <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                    Built for Scale
                  </h2>
                  <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                    Enterprise-grade features for growing businesses
                  </p>
                </div>
                <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                  <span className="btn-text-default text-black">view plans</span>
                  <span className="btn-text-hover text-white">view plans</span>
                </button>
              </div>
            </div>
            
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px" }}>
                {[
                  { number: "99.9%", label: "Uptime SLA", description: "Reliable infrastructure" },
                  { number: "10M+", label: "API Calls", description: "Per month capacity" },
                  { number: "24/7", label: "Support", description: "Dedicated assistance" },
                  { number: "SOC 2", label: "Compliant", description: "Security certified" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="feature-card"
                    style={{ 
                      background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)", 
                      border: "1px solid rgba(255, 98, 59, 0.3)", 
                      borderRadius: "16px", 
                      padding: "32px",
                      position: "relative",
                      overflow: "hidden",
                      textAlign: "center",
                      transform: visibleSections.has('enterprise-stats') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                      opacity: visibleSections.has('enterprise-stats') ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.1}s`
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      right: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'radial-gradient(circle, rgba(255, 98, 59, 0.1) 0%, transparent 70%)',
                      animation: visibleSections.has('enterprise-stats') ? `float 6s ease-in-out infinite ${index * 1.5}s` : 'none'
                    }}></div>
                    <div style={{ 
                      fontSize: "3rem", 
                      fontWeight: "bold", 
                      color: "#FF623B", 
                      marginBottom: "12px",
                      background: 'linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {stat.number}
                    </div>
                    <h3 style={{ fontSize: "1.2rem", color: "rgb(231, 231, 231)", marginBottom: "8px" }}>{stat.label}</h3>
                    <p style={{ fontSize: "13px", color: "rgba(231, 231, 231, 0.6)" }}>{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Target Audience Section */}
          <section className="animate-section" id="target-audience" style={{ 
            padding: "80px 0", 
            background: "rgb(10, 10, 10)",
            transform: visibleSections.has('target-audience') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('target-audience') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div
              className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
              style={{ zIndex: 60 }}
            >
              <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                    AUDIENCE
                  </span>
                  <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                    Who We Help
                  </h2>
                  <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                    Designed for businesses that want to grow smarter
                  </p>
                </div>
                <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                  <span className="btn-text-default text-black">Book a Call</span>
                  <span className="btn-text-hover text-white">Book a Call</span>
                </button>
              </div>
            </div>
            
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
              <div style={{ 
                background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)", 
                border: "1px solid rgba(255, 98, 59, 0.3)", 
                borderRadius: "20px", 
                padding: "60px",
                transform: visibleSections.has('target-audience') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleSections.has('target-audience') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
                boxShadow: '0 20px 40px rgba(255, 98, 59, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                  animation: visibleSections.has('target-audience') ? 'float 6s ease-in-out infinite' : 'none'
                }}></div>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "30px" }}>
                  {[
                    "Coaches & Consultants",
                    "Creators & Educators", 
                    "Wellness Professionals",
                    "Service-Based Businesses"
                  ].map((audience, index) => (
                    <div key={index} style={{ 
                      background: "rgba(255, 255, 255, 0.03)", 
                      border: "1px solid rgba(255, 255, 255, 0.08)", 
                      borderRadius: "12px", 
                      padding: "24px",
                      transform: visibleSections.has('target-audience') ? 'translateY(0)' : 'translateY(20px)',
                      opacity: visibleSections.has('target-audience') ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.8 + index * 0.1}s`
                    }}>
                      <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.9)" }}>{audience}</span>
                    </div>
                  ))}
                </div>
                
                <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.8)", marginBottom: "32px" }}>
                  Let's build systems that support your growth
                </p>
                
                <button 
                  className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-all duration-300 cursor-pointer border border-[#FF623B] hover:border-white rounded-full px-8 transform hover:scale-105" 
                  style={{ 
                    width: "fit-content", 
                    margin: "0 auto",
                    transform: visibleSections.has('target-audience') ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                    opacity: visibleSections.has('target-audience') ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
                    boxShadow: '0 10px 30px rgba(255, 98, 59, 0.3)'
                  }}
                >
                  <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:-translate-y-full">Book a Call</span>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
