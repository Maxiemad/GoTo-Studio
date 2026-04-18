"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect, useState } from "react";

// Add CSS animations
const style = `
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes slideInLeft {
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeInUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-section {
  position: relative;
}

.feature-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(255, 98, 59, 0.2);
}

.feature-icon {
  transition: all 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: rotate(360deg) scale(1.1);
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #FF623B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
            height: "60vh", 
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
                Everything You Need<br />In One Platform
              </h1>
              <p style={{ 
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                color: "rgba(231, 231, 231, 0.9)", 
                lineHeight: "1.6", 
                maxWidth: "600px", 
                margin: "0 0 32px 0",
                transform: visibleSections.has('hero') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('hero') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
              }}>
                Software, services, and AI - combined into a single growth engine for your service business.
              </p>
              <button 
                className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-all duration-300 cursor-pointer border border-[#FF623B] hover:border-black/10 px-8 rounded-full shadow-lg hover:shadow-xl hover:shadow-[#FF623B]/30 transform hover:scale-105" 
                style={{ 
                  width: "fit-content",
                  transform: visibleSections.has('hero') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                  opacity: visibleSections.has('hero') ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
                }}
              >
                <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call</span>
                <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:-translate-y-full">Book a Call</span>
                <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call</span>
              </button>
            </div>
          </section>

          {/* Two Worlds Section */}
          <section className="animate-section" id="two-worlds" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(15, 15, 15)",
            transform: visibleSections.has('two-worlds') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('two-worlds') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                color: "rgb(231, 231, 231)", 
                textAlign: "center", 
                marginBottom: "16px",
                background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: visibleSections.has('two-worlds') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('two-worlds') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}>
                Two Worlds, One Platform
              </h2>
              <p style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
                color: "rgba(231, 231, 231, 0.9)", 
                textAlign: "center", 
                marginBottom: "60px",
                transform: visibleSections.has('two-worlds') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('two-worlds') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}>
                Lead Generation, SEO & Content Tools in One
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
                <div 
                  className="feature-card"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)", 
                    border: "1px solid rgba(255, 98, 59, 0.3)", 
                    borderRadius: "16px", 
                    padding: "40px",
                    position: "relative",
                    overflow: "hidden",
                    transform: visibleSections.has('two-worlds') ? 'translateX(0) scale(1)' : 'translateX(-50px) scale(0.9)',
                    opacity: visibleSections.has('two-worlds') ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255, 98, 59, 0.1) 0%, transparent 70%)',
                    animation: visibleSections.has('two-worlds') ? 'float 6s ease-in-out infinite' : 'none'
                  }}></div>
                  <div className="feature-icon" style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", 
                    borderRadius: "12px", 
                    marginBottom: "20px",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: '0 10px 30px rgba(255, 98, 59, 0.3)'
                  }}>
                    <span style={{ fontSize: "24px", color: "white" }}>S</span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>The Software</h3>
                  <p style={{ color: "rgba(231, 231, 231, 0.8)", marginBottom: "24px", lineHeight: "1.6" }}>
                    A complete SaaS operating system. Everything you need to run your business.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                    {[
                      "CRM & Pipelines", "Sales Funnels", "Calendar Booking", "Automations & Workflows",
                      "Email & SMS", "Website Builder", "Client Portal", "Courses & Communities",
                      "AI Assistant", "Prospecting Engine", "Analytics", "Affiliate Software"
                    ].map((feature, index) => (
                      <div key={index} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "8px",
                        transform: visibleSections.has('two-worlds') ? 'translateX(0)' : 'translateX(-20px)',
                        opacity: visibleSections.has('two-worlds') ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.8 + index * 0.05}s`
                      }}>
                        <div style={{ 
                          width: "6px", 
                          height: "6px", 
                          borderRadius: "50%", 
                          background: "#FF623B",
                          boxShadow: '0 0 10px rgba(255, 98, 59, 0.5)'
                        }}></div>
                        <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.9)" }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div 
                  className="feature-card"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)", 
                    border: "1px solid rgba(255, 255, 255, 0.1)", 
                    borderRadius: "16px", 
                    padding: "40px",
                    position: "relative",
                    overflow: "hidden",
                    transform: visibleSections.has('two-worlds') ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
                    opacity: visibleSections.has('two-worlds') ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
                    animation: visibleSections.has('two-worlds') ? 'float 6s ease-in-out infinite 3s' : 'none'
                  }}></div>
                  <div className="feature-icon" style={{ 
                    width: "60px", 
                    height: "60px", 
                    background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)", 
                    borderRadius: "12px", 
                    marginBottom: "20px",
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)'
                  }}>
                    <span style={{ fontSize: "24px", color: "#FF623B" }}>G</span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>Growth Services</h3>
                  <p style={{ color: "rgba(231, 231, 231, 0.8)", marginBottom: "24px", lineHeight: "1.6" }}>
                    Done-for-you creative services. Expert execution, zero effort from you.
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                    {[
                      "Reels", "Carousels", "Blogs", "SEO", "Content Calendar", "Strategy Calls",
                      "Prospecting", "AI-Powered Research", "Publishing & Scheduling", "Full Setup & Branding",
                      "Zero Commission", "AI Outreach"
                    ].map((service, index) => (
                      <div key={index} style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "8px",
                        transform: visibleSections.has('two-worlds') ? 'translateX(0)' : 'translateX(20px)',
                        opacity: visibleSections.has('two-worlds') ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.8 + index * 0.05}s`
                      }}>
                        <div style={{ 
                          width: "6px", 
                          height: "6px", 
                          borderRadius: "50%", 
                          background: "#ffffff",
                          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                        }}></div>
                        <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.9)" }}>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="animate-section" id="comparison" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(10, 10, 10)",
            transform: visibleSections.has('comparison') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('comparison') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                color: "rgb(231, 231, 231)", 
                textAlign: "center", 
                marginBottom: "60px",
                background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: visibleSections.has('comparison') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('comparison') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}>
                The Old Way vs. The New Way
              </h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "40px", alignItems: "center" }}>
                <div style={{
                  transform: visibleSections.has('comparison') ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: visibleSections.has('comparison') ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}>
                  <h3 style={{ fontSize: "1.2rem", color: "rgba(231, 231, 231, 0.6)", marginBottom: "24px" }}>Your Current Stack</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginBottom: "24px" }}>
                    {["HubSpot", "ClickFunnels", "Kajabi", "Mailchimp", "Calendly", "Zapier", "Typeform", "DocuSign", "Skool", "Circle", "Teachable", "Asana", "Buffer", "Notion", "Canva"].map((tool, index) => (
                      <div key={index} style={{ 
                        background: "rgba(255, 255, 255, 0.05)", 
                        padding: "8px 12px", 
                        borderRadius: "6px", 
                        fontSize: "14px", 
                        color: "rgba(231, 231, 231, 0.7)",
                        transform: visibleSections.has('comparison') ? 'translateY(0)' : 'translateY(20px)',
                        opacity: visibleSections.has('comparison') ? 1 : 0,
                        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.03}s`,
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}>
                        {tool}
                      </div>
                    ))}
                  </div>
                  <div style={{ 
                    fontSize: "2rem", 
                    color: "#FF623B", 
                    fontWeight: "bold",
                    textShadow: '0 0 20px rgba(255, 98, 59, 0.5)',
                    animation: visibleSections.has('comparison') ? 'pulse 2s infinite' : 'none'
                  }}>$2,500+</div>
                  <div style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.6)" }}>Monthly Cost</div>
                </div>
                
                <div style={{ 
                  fontSize: "2rem", 
                  color: "#FF623B", 
                  fontWeight: "bold",
                  transform: visibleSections.has('comparison') ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(180deg)',
                  opacity: visibleSections.has('comparison') ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s',
                  textShadow: '0 0 30px rgba(255, 98, 59, 0.8)'
                }}>VS</div>
                
                <div style={{
                  transform: visibleSections.has('comparison') ? 'translateX(0)' : 'translateX(50px)',
                  opacity: visibleSections.has('comparison') ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}>
                  <h3 style={{ fontSize: "1.2rem", color: "rgba(231, 231, 231, 0.6)", marginBottom: "24px" }}>GoToStudio</h3>
                  <div style={{ 
                    background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", 
                    padding: "24px", 
                    borderRadius: "12px", 
                    marginBottom: "24px",
                    transform: visibleSections.has('comparison') ? 'scale(1)' : 'scale(0.9)',
                    opacity: visibleSections.has('comparison') ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s',
                    boxShadow: '0 20px 40px rgba(255, 98, 59, 0.3)'
                  }}>
                    <div style={{ 
                      fontSize: "2rem", 
                      color: "white", 
                      fontWeight: "bold", 
                      marginBottom: "8px",
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                    }}>$147</div>
                    <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.9)" }}>Starting Price</div>
                  </div>
                </div>
              </div>
              
              <div style={{ 
                marginTop: "60px", 
                padding: "40px", 
                background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)", 
                border: "1px solid rgba(255, 98, 59, 0.3)", 
                borderRadius: "16px",
                transform: visibleSections.has('comparison') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleSections.has('comparison') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s',
                boxShadow: '0 20px 40px rgba(255, 98, 59, 0.1)'
              }}>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  color: "rgb(231, 231, 231)", 
                  marginBottom: "24px",
                  background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>+ Freelancer Team With One Platform.</h3>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "32px" }}>
                  {[
                    { icon: "Video Editor", cost: "$3,000+" },
                    { icon: "SEO Expert", cost: "" },
                    { icon: "Content Writer", cost: "" },
                    { icon: "Outreach Specialist", cost: "" },
                    { icon: "Funnel Builder", cost: "" },
                    { icon: "Social Media Manager", cost: "" }
                  ].map((person, index) => (
                    <div key={index} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "12px",
                      transform: visibleSections.has('comparison') ? 'translateY(0)' : 'translateY(20px)',
                      opacity: visibleSections.has('comparison') ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${1.2 + index * 0.05}s`
                    }}>
                      <div style={{ 
                        width: "40px", 
                        height: "40px", 
                        background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", 
                        borderRadius: "8px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "white",
                        fontSize: "14px",
                        fontWeight: "bold",
                        boxShadow: '0 5px 15px rgba(255, 98, 59, 0.3)'
                      }}>
                        {person.icon.split(" ").map(word => word[0]).join("")}
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.9)" }}>{person.icon}</div>
                        {person.cost && <div style={{ fontSize: "12px", color: "#FF623B", fontWeight: "bold" }}>{person.cost}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "1fr 1fr", 
                  gap: "40px", 
                  padding: "32px", 
                  background: "rgba(255, 255, 255, 0.05)", 
                  borderRadius: "12px",
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    transform: visibleSections.has('comparison') ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: visibleSections.has('comparison') ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1.4s'
                  }}>
                    <div style={{ fontSize: "1.2rem", color: "rgba(231, 231, 231, 0.6)", marginBottom: "8px" }}>Total Monthly Cost</div>
                    <div style={{ 
                      fontSize: "2rem", 
                      color: "#FF623B", 
                      fontWeight: "bold",
                      textShadow: '0 0 20px rgba(255, 98, 59, 0.5)',
                      animation: visibleSections.has('comparison') ? 'pulse 2s infinite' : 'none'
                    }}>$5,500+</div>
                  </div>
                  <div style={{
                    transform: visibleSections.has('comparison') ? 'translateX(0)' : 'translateX(20px)',
                    opacity: visibleSections.has('comparison') ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1.4s'
                  }}>
                    <div style={{ fontSize: "1.2rem", color: "rgba(231, 231, 231, 0.6)", marginBottom: "8px" }}>GoToStudio Starts At</div>
                    <div style={{ 
                      fontSize: "2rem", 
                      color: "white", 
                      fontWeight: "bold",
                      textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                    }}>$147/mo</div>
                  </div>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "24px" }}>
                  {["Save $5,000+/month", "One login, zero chaos", "Expert team included"].map((benefit, index) => (
                    <div key={index} style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      gap: "8px",
                      transform: visibleSections.has('comparison') ? 'translateY(0)' : 'translateY(20px)',
                      opacity: visibleSections.has('comparison') ? 1 : 0,
                      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${1.6 + index * 0.1}s`
                    }}>
                      <div style={{ 
                        width: "6px", 
                        height: "6px", 
                        borderRadius: "50%", 
                        background: "#FF623B",
                        boxShadow: '0 0 10px rgba(255, 98, 59, 0.5)'
                      }}></div>
                      <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.9)" }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Stats */}
          <section className="animate-section" id="enterprise" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(15, 15, 15)",
            transform: visibleSections.has('enterprise') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('enterprise') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                color: "rgb(231, 231, 231)", 
                marginBottom: "16px",
                background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: visibleSections.has('enterprise') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('enterprise') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}>
                Enterprise-Grade Power
              </h2>
              <p style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
                color: "rgba(231, 231, 231, 0.9)", 
                marginBottom: "60px",
                transform: visibleSections.has('enterprise') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('enterprise') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}>
                Growth Tools That Were Earlier Only Available to Big Companies.
              </p>
              <p style={{ 
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
                color: "rgba(231, 231, 231, 0.8)", 
                marginBottom: "60px", 
                maxWidth: "800px", 
                margin: "0 auto 60px",
                transform: visibleSections.has('enterprise') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('enterprise') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
              }}>
                Now finally accessible to creators, coaches, consultants, and small businesses - in one powerful platform.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "60px" }}>
                {[
                  { value: "$50M+", label: "Revenue Generated" },
                  { value: "10K+", label: "Businesses Powered" },
                  { value: "500+", label: "Active Creators" },
                  { value: "99.9%", label: "Uptime Guaranteed" }
                ].map((stat, index) => (
                  <div key={index} style={{
                    transform: visibleSections.has('enterprise') ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                    opacity: visibleSections.has('enterprise') ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${0.8 + index * 0.1}s`
                  }}>
                    <div style={{ 
                      fontSize: "clamp(2rem, 3vw, 3rem)", 
                      color: "#FF623B", 
                      fontWeight: "bold", 
                      marginBottom: "8px",
                      textShadow: '0 0 30px rgba(255, 98, 59, 0.5)',
                      animation: visibleSections.has('enterprise') ? `float 3s ease-in-out infinite ${index * 0.5}s` : 'none'
                    }}>{stat.value}</div>
                    <div style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div style={{
                background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)",
                border: "1px solid rgba(255, 98, 59, 0.3)",
                borderRadius: "16px",
                padding: "40px",
                transform: visibleSections.has('enterprise') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleSections.has('enterprise') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s',
                boxShadow: '0 20px 40px rgba(255, 98, 59, 0.1)'
              }}>
                <blockquote style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                  color: "rgba(231, 231, 231, 0.9)", 
                  fontStyle: "italic", 
                  maxWidth: "600px", 
                  margin: "0 auto",
                  position: 'relative'
                }}>
                  <span style={{ 
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    fontSize: '60px',
                    color: 'rgba(255, 98, 59, 0.2)',
                    fontFamily: 'serif'
                  }}>"</span>
                  "The same tools that power Fortune 500 growth engines - now in your hands, at a fraction of the cost."
                  <span style={{ 
                    position: 'absolute',
                    bottom: '-40px',
                    right: '-20px',
                    fontSize: '60px',
                    color: 'rgba(255, 98, 59, 0.2)',
                    fontFamily: 'serif'
                  }}>"</span>
                </blockquote>
              </div>
            </div>
          </section>

          {/* Target Audience */}
          <section className="animate-section" id="audience" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(10, 10, 10)",
            transform: visibleSections.has('audience') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('audience') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ 
                fontSize: "clamp(2rem, 4vw, 3rem)", 
                color: "rgb(231, 231, 231)", 
                marginBottom: "60px",
                background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: visibleSections.has('audience') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('audience') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}>
                The Growth Ecosystem
              </h2>
              <p style={{ 
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
                color: "rgba(231, 231, 231, 0.9)", 
                marginBottom: "60px",
                transform: visibleSections.has('audience') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('audience') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
              }}>
                Built for:
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", marginBottom: "60px" }}>
                {[
                  "All Service Businesses", "Creators", "Coaches", "Consultants", 
                  "Agencies", "SaaS Founders", "Course Creators", "E-commerce"
                ].map((audience, index) => (
                  <div key={index} className="feature-card" style={{ 
                    background: "rgba(255, 255, 255, 0.03)", 
                    border: "1px solid rgba(255, 255, 255, 0.07)", 
                    padding: "24px", 
                    borderRadius: "12px",
                    transform: visibleSections.has('audience') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    opacity: visibleSections.has('audience') ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.05}s`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, #FF623B, transparent)',
                      transform: visibleSections.has('audience') ? 'translateX(0)' : 'translateX(-100%)',
                      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s'
                    }}></div>
                    <span style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.9)" }}>{audience}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ 
                background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", 
                padding: "40px", 
                borderRadius: "16px", 
                textAlign: "center",
                transform: visibleSections.has('audience') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleSections.has('audience') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s',
                boxShadow: '0 20px 40px rgba(255, 98, 59, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                  animation: visibleSections.has('audience') ? 'float 6s ease-in-out infinite' : 'none'
                }}></div>
                <h3 style={{ 
                  fontSize: "clamp(1.5rem, 3vw, 2rem)", 
                  color: "white", 
                  marginBottom: "16px",
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
                  transform: visibleSections.has('audience') ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleSections.has('audience') ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
                }}>
                  Ready to Replace Your Entire Stack?
                </h3>
                <p style={{ 
                  fontSize: "16px", 
                  color: "rgba(255, 255, 255, 0.9)", 
                  marginBottom: "24px",
                  transform: visibleSections.has('audience') ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleSections.has('audience') ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1.4s'
                }}>
                  Book a Discovery Call
                </p>
                <button 
                  className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-white hover:bg-transparent transition-all duration-300 cursor-pointer border border-white rounded-full px-8 transform hover:scale-105" 
                  style={{ 
                    width: "fit-content", 
                    margin: "0 auto",
                    transform: visibleSections.has('audience') ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                    opacity: visibleSections.has('audience') ? 1 : 0,
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 1.6s',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call</span>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out group-hover:-translate-y-full">Book a Call</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call</span>
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
