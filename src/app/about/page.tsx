"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.image-trail {
  display: flex;
  animation: scroll 20s linear infinite;
  width: fit-content;
}

.image-trail:hover {
  animation-play-state: paused;
}

.image-card {
  flex-shrink: 0;
  margin: 0 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.image-card:hover {
  transform: scale(1.05) translateY(-10px);
  z-index: 10;
}
`;

const founder = {
  name: "Kamal Saini",
  role: "Founder & AI Systems Architect",
  image: "/kamal-saini.avif",
  description: "Kamal is the visionary behind GoToStudio. After years of building teams in global technology companies and exploring the intersection of consciousness, systems, and human creativity, he founded GoToStudio to help businesses scale without losing their soul."
};

const teamMembers = [
  {
    name: "Avi Sharma", 
    role: "Head of Marketing & Operations",
    image: "/avi-sharma.jpeg",
    work: "Marketing Strategy",
    description: "Avi is the Head of Marketing and Operations at GoToStudio, where he leads growth strategy and operational systems that help founders build strong digital foundations. Passionate about storytelling and brand visibility, he focuses on creating marketing strategies that turn great ideas into impactful digital brands."
  },
  {
    name: "Cody",
    role: "Head of Sales",
    image: "/cody.webp",
    work: "Sales Growth",
    description: "With extensive experience in sales and marketing, Cody has built teams, closed deals, and scaled an advertising agency from the ground up. He turns ambitious visions into thriving businesses and drives the kind of growth that changes trajectories."
  },
  {
    name: "Jade Vine",
    role: "Communications Lead",
    image: "/jade-vine.jpg",
    work: "Digital Communications",
    description: "Jade is the Communications Lead at GoToStudio, working to connect creators, communities, and platforms through thoughtful communication and digital engagement that fosters collaboration and growth."
  },
  {
    name: "Sayani Bhattacharjee",
    role: "Content Production & Outreach",
    image: "/sayani-bhattacharjee.png",
    work: "Content Strategy",
    description: "Sayani Bhattacharjee is the Content Lead at GoToStudio AI, leading content strategy and producing educational content that helps founders build strong digital foundations. With 4+ years of experience, she focuses on simplifying websites, branding, and digital growth for entrepreneurs and wellness businesses."
  },
  {
    name: "Nico",
    role: "Creative Systems & AI Automation",
    image: "/nico.jpeg",
    work: "Creative & AI Systems",
    description: "Nico bridges creative and technical systems. He crafts compelling media through video storytelling and web design, while architecting AI-powered automations and overseeing systems building. With a degree in Film & Media from UC Berkeley, Nico brings fresh thinking and technological fluency to building a new paradigm of conscious, heart-centered business."
  },
  {
    name: "Sparsh Srivastava",
    role: "Digital Marketer",
    image: "/sparsh-srivastava.jpeg",
    work: "Performance Marketing",
    description: "Sparsh Srivastava is a Digital Marketer at GoToStudio, specializing in performance marketing, marketing automation, email campaigns, and social media growth strategies. He focuses on building data-driven systems that help brands increase visibility, generate qualified leads, and convert online attention into measurable revenue."
  },
  {
    name: "Key Ko",
    role: "Partnerships & Business Development",
    image: "/key-ko.png",
    work: "Business Development",
    description: "Focuses on networking, partnerships, and growth opportunities for GoToStudio."
  },
  {
    name: "Akanksha Sharma",
    role: "Website Developer",
    image: "/akanksha-sharma.jpeg",
    work: "Web Development",
    description: "Akanksha is a Website Developer at GoToStudio, crafting responsive, high-performance websites that bring brand visions to life. She combines clean code with thoughtful design to deliver seamless digital experiences that engage users and drive results."
  }
];

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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
                }}>About</span>
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
                The Origin Story
              </h1>
            </div>
          </section>

          {/* Origin Story */}
          <section className="animate-section" id="origin" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(10, 10, 10)",
            transform: visibleSections.has('origin') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('origin') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <div style={{
                background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)",
                border: "1px solid rgba(255, 98, 59, 0.3)",
                borderRadius: "16px",
                padding: "40px",
                transform: visibleSections.has('origin') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleSections.has('origin') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                boxShadow: '0 20px 40px rgba(255, 98, 59, 0.1)'
              }}>
                <blockquote style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                  color: "rgba(231, 231, 231, 0.9)", 
                  lineHeight: "1.8", 
                  fontStyle: "italic", 
                  borderLeft: "4px solid #FF623B", 
                  paddingLeft: "24px", 
                  marginBottom: "0",
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
                  "GoToStudio was born from a question our founder had asked himself for decades:<br /><br />
                  'How do we scale impact without losing the soul of the work?'<br /><br />
                  After building and leading teams in global tech, and walking a deep personal transformation journey through meditation, insight, and conscious living, he realized the answer wasn't more technology or more people alone - it was the bridge between the two. AI today, when used wisely, gives us the immense possibility to achieve this dream.<br /><br />
                  And, this is what forms our core philosophy:<br /><br />
                  Let humans be the pilots of their soulful work.<br />
                  Let AI become the engine that amplifies their soulful work.<br /><br />
                  GoToStudio was built so businesses can grow faster, but also wiser - keeping human creativity, connection, and care at the center of everything we build and ship."
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

          {/* Founder Section */}
          <section className="animate-section" id="founder" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(15, 15, 15)",
            transform: visibleSections.has('founder') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('founder') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "60px", 
                alignItems: "center" 
              }}>
                <div style={{
                  transform: visibleSections.has('founder') ? 'translateX(0)' : 'translateX(-50px)',
                  opacity: visibleSections.has('founder') ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                }}>
                  <div style={{
                    width: "300px",
                    height: "300px",
                    backgroundImage: `url(${founder.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    border: "4px solid rgba(255, 98, 59, 0.3)",
                    boxShadow: '0 20px 40px rgba(255, 98, 59, 0.2)',
                    margin: "0 auto",
                    position: "relative",
                    transform: visibleSections.has('founder') ? 'scale(1)' : 'scale(0.8)',
                    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: -4,
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, transparent, rgba(255, 98, 59, 0.3), transparent)',
                      animation: visibleSections.has('founder') ? 'pulse 3s infinite' : 'none'
                    }}></div>
                  </div>
                </div>
                
                <div style={{
                  transform: visibleSections.has('founder') ? 'translateX(0)' : 'translateX(50px)',
                  opacity: visibleSections.has('founder') ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                }}>
                  <h2 style={{ 
                    fontSize: "clamp(2rem, 4vw, 3rem)", 
                    color: "rgb(231, 231, 231)", 
                    marginBottom: "16px",
                    background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {founder.name}
                  </h2>
                  <p style={{ 
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)", 
                    color: "#FF623B", 
                    marginBottom: "24px",
                    fontWeight: "bold"
                  }}>
                    {founder.role}
                  </p>
                  <p style={{ 
                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
                    color: "rgba(231, 231, 231, 0.8)", 
                    lineHeight: "1.8" 
                  }}>
                    {founder.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Horizontal Image Trail Section */}
          <section className="animate-section" id="image-trail" style={{ 
            padding: "80px 0 40px 0", 
            background: "rgb(15, 15, 15)",
            overflow: "hidden",
            transform: visibleSections.has('image-trail') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('image-trail') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p style={{ 
                fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                color: "rgba(231, 231, 231, 0.8)", 
                marginBottom: "40px",
                transform: visibleSections.has('image-trail') ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleSections.has('image-trail') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
              }}>
                Click on any team member to learn more about their work
              </p>
            </div>

            {/* Selected Member Details */}
            {selectedMember && (
              <div style={{ 
                textAlign: "center", 
                marginBottom: "40px",
                background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)",
                border: "1px solid rgba(255, 98, 59, 0.3)",
                borderRadius: "16px",
                padding: "40px",
                margin: "0 auto 40px",
                maxWidth: "600px",
                transform: 'translateY(0) scale(1)',
                opacity: 1,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 20px 40px rgba(255, 98, 59, 0.1)'
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                  <div style={{
                    width: "80px",
                    height: "80px",
                    backgroundImage: `url(${selectedMember.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "50%",
                    border: "3px solid rgba(255, 98, 59, 0.3)",
                    flexShrink: 0
                  }}></div>
                  <div style={{ textAlign: "left" }}>
                    <h3 style={{ fontSize: "1.3rem", color: "rgb(231, 231, 231)", marginBottom: "4px" }}>{selectedMember.name}</h3>
                    <p style={{ fontSize: "14px", color: "#FF623B", marginBottom: "4px" }}>{selectedMember.role}</p>
                    <p style={{ fontSize: "12px", color: "rgba(231, 231, 231, 0.7)" }}>{selectedMember.work}</p>
                  </div>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6" }}>
                  {selectedMember.description}
                </p>
                <button 
                  onClick={() => {
                    setSelectedMember(null);
                    setIsPaused(false);
                  }}
                  style={{
                    marginTop: "20px",
                    padding: "8px 16px",
                    background: "rgba(255, 98, 59, 0.2)",
                    border: "1px solid rgba(255, 98, 59, 0.5)",
                    borderRadius: "8px",
                    color: "rgb(231, 231, 231)",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = "rgba(255, 98, 59, 0.3)";
                    target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = "rgba(255, 98, 59, 0.2)";
                    target.style.transform = "scale(1)";
                  }}
                >
                  Close & Resume Scrolling
                </button>
              </div>
            )}

            {/* Infinite Scrolling Image Trail */}
            <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
              <div className="image-trail" style={{ 
                display: "flex", 
                width: "fit-content",
                animationPlayState: isPaused ? 'paused' : 'running'
              }}>
                {/* First set of images */}
                {teamMembers.map((member, index) => (
                  <div key={`first-${index}`} className="image-card" style={{
                    width: "200px",
                    height: "250px",
                    background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)",
                    border: "1px solid rgba(255, 98, 59, 0.3)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    transform: visibleSections.has('image-trail') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    opacity: visibleSections.has('image-trail') ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.05}s`,
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    setSelectedMember(member);
                    setIsPaused(true);
                  }}>
                    <div style={{ 
                      width: "100%", 
                      height: "60%", 
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative"
                    }}>
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background: "linear-gradient(to top, rgba(10, 10, 10, 0.9), transparent)"
                      }}></div>
                    </div>
                    <div style={{ padding: "12px" }}>
                      <h3 style={{ fontSize: "14px", color: "rgb(231, 231, 231)", marginBottom: "4px", fontWeight: "bold" }}>{member.name}</h3>
                      <p style={{ fontSize: "12px", color: "#FF623B", marginBottom: "4px" }}>{member.role}</p>
                      <p style={{ fontSize: "11px", color: "rgba(231, 231, 231, 0.7)" }}>{member.work}</p>
                    </div>
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #FF623B, transparent)",
                      transform: visibleSections.has('image-trail') ? 'translateX(0)' : 'translateX(-100%)',
                      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s'
                    }}></div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {teamMembers.map((member, index) => (
                  <div key={`second-${index}`} className="image-card" style={{
                    width: "200px",
                    height: "250px",
                    background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.05) 100%)",
                    border: "1px solid rgba(255, 98, 59, 0.3)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    transform: visibleSections.has('image-trail') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                    opacity: visibleSections.has('image-trail') ? 1 : 0,
                    transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.05}s`,
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    setSelectedMember(member);
                    setIsPaused(true);
                  }}>
                    <div style={{ 
                      width: "100%", 
                      height: "60%", 
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative"
                    }}>
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "50%",
                        background: "linear-gradient(to top, rgba(10, 10, 10, 0.9), transparent)"
                      }}></div>
                    </div>
                    <div style={{ padding: "12px" }}>
                      <h3 style={{ fontSize: "14px", color: "rgb(231, 231, 231)", marginBottom: "4px", fontWeight: "bold" }}>{member.name}</h3>
                      <p style={{ fontSize: "12px", color: "#FF623B", marginBottom: "4px" }}>{member.role}</p>
                      <p style={{ fontSize: "11px", color: "rgba(231, 231, 231, 0.7)" }}>{member.work}</p>
                    </div>
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, transparent, #FF623B, transparent)",
                      transform: visibleSections.has('image-trail') ? 'translateX(0)' : 'translateX(-100%)',
                      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s'
                    }}></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="animate-section" id="cta" style={{ 
            padding: "80px clamp(20px, 5vw, 40px)", 
            background: "rgb(10, 10, 10)",
            transform: visibleSections.has('cta') ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.has('cta') ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ 
                background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)", 
                border: "1px solid rgba(255, 98, 59, 0.3)", 
                borderRadius: "16px", 
                padding: "60px",
                transform: visibleSections.has('cta') ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                opacity: visibleSections.has('cta') ? 1 : 0,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
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
                  animation: visibleSections.has('cta') ? 'float 6s ease-in-out infinite' : 'none'
                }}></div>
                <h2 style={{ 
                  fontSize: "clamp(2rem, 4vw, 3rem)", 
                  color: "rgb(231, 231, 231)", 
                  marginBottom: "24px",
                  background: 'linear-gradient(135deg, #ffffff 0%, #FF623B 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  transform: visibleSections.has('cta') ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleSections.has('cta') ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                }}>
                  Join Our Journey
                </h2>
                <p style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)", 
                  color: "rgba(231, 231, 231, 0.8)", 
                  lineHeight: "1.6", 
                  marginBottom: "32px",
                  transform: visibleSections.has('cta') ? 'translateY(0)' : 'translateY(20px)',
                  opacity: visibleSections.has('cta') ? 1 : 0,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                }}>
                  Let's build systems that support your growth with soul and intelligence.
                </p>
                <button 
                  className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-all duration-300 cursor-pointer border border-[#FF623B] hover:border-white rounded-full px-8 transform hover:scale-105" 
                  style={{ 
                    width: "fit-content", 
                    margin: "0 auto",
                    transform: visibleSections.has('cta') ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                    opacity: visibleSections.has('cta') ? 1 : 0,
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
