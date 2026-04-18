import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function WhyUs() {
  const soulfulPillars = [
    {
      letter: "S",
      title: "Storytelling",
      description: "Brand identity, websites, content, print & digital assets"
    },
    {
      letter: "O", 
      title: "Online Presence",
      description: "Listings, landing pages, social profiles, reviews, YouTube"
    },
    {
      letter: "U",
      title: "User Trust", 
      description: "Reputation strategy, monitoring, review generation systems"
    },
    {
      letter: "L",
      title: "Love & Engage",
      description: "Social engagement, email nurturing, blog content"
    },
    {
      letter: "F",
      title: "Findability",
      description: "SEO, keyword research, ranking optimization, search management"
    },
    {
      letter: "U",
      title: "Unveil",
      description: "Campaigns: social ads, content marketing, omnichannel, email"
    },
    {
      letter: "L",
      title: "Longevity",
      description: "Community hub, academy, courses/programs, LTV growth"
    }
  ];

  const caseStudies = [
    {
      title: "Wellness Retreat Center",
      problem: "Struggling with inconsistent bookings and low online visibility despite a premium offering.",
      solution: "Implemented complete SOULFUL framework: brand refresh, SEO optimization, review system, and automated nurture sequences.",
      outcome: "3x increase in organic traffic, 65% boost in direct bookings, and 4.9-star average review rating."
    },
    {
      title: "Life Coach Practice",
      problem: "Relying solely on referrals with no scalable lead generation system.",
      solution: "Built authority content strategy, email funnel, and targeted social campaigns aligned with authentic messaging.",
      outcome: "200+ qualified leads in 90 days, 45% email open rate, and waitlist for 1:1 coaching."
    }
  ];

  const testimonials = [
    {
      initials: "S",
      name: "Sarah Mitchell",
      role: "Yoga Studio Owner",
      quote: "GoToStudio transformed how we connect with our community. Our bookings increased by 40% in just three months."
    },
    {
      initials: "D", 
      name: "Dr. James Chen",
      role: "Holistic Health Practitioner",
      quote: "Finally, a marketing partner who understands wellness. They respect our values while driving real results."
    }
  ];

  return (
    <>
      <Header />
      <div className="pt-[72px] lg:pt-[44px]">
        <main style={{ background: "rgb(10, 10, 10)", minHeight: "100vh" }}>
          {/* Hero Section */}
          <section style={{ position: "relative", height: "50vh", overflow: "hidden", background: "rgb(10, 10, 10)", display: "flex", flexDirection: "column", padding: "clamp(40px, 8vw, 80px) 0" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(231, 231, 231, 0.18) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(80% 80% at 70% 50%, black 30%, transparent 100%)", pointerEvents: "none" }}></div>
            <div style={{ flex: "1 1 0%", display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "rgba(231, 231, 231, 0.6)", flexShrink: 0 }}></div>
                <span style={{ fontFamily: "var(--font-azeret-mono)", fontSize: "11px", color: "rgba(231, 231, 231, 0.6)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Why Us</span>
              </div>
              <h1 style={{ position: "relative", fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "rgb(231, 231, 231)", textTransform: "none", letterSpacing: "-0.02em", lineHeight: "1.1", margin: "0 0 24px 0", maxWidth: "900px" }}>
                For Wellness Businesses<br />SOULFUL Marketing for Wellness Brands
              </h1>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6", maxWidth: "600px", margin: "0 0 32px 0" }}>
                Our SOULFUL framework integrates strategy, communication, and design to optimize your brand's performance - so you reduce wasted spend and gain more clients through a consistent lead-nurturing engine.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white px-8">
                  <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Get a Complimentary Audit Report</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Get a Complimentary Audit Report</span>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Get a Complimentary Audit Report</span>
                </button>
                <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-transparent hover:bg-white transition-colors duration-200 cursor-pointer border border-white px-8">
                  <span className="invisible text-[11px] font-semibold uppercase tracking-wider">See the SOULFUL Framework</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">See the SOULFUL Framework</span>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">See the SOULFUL Framework</span>
                </button>
              </div>
            </div>
          </section>

          {/* Built For Section */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", marginBottom: "24px" }}>
                Built for:
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "40px" }}>
                {[
                  "Yoga Studios", "Coaches", "Healers", "Retreat Leaders", "Holistic Clinics"
                ].map((type, index) => (
                  <div key={index} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", padding: "16px", borderRadius: "8px" }}>
                    <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.9)" }}>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Soulful Marketing */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(10, 10, 10)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "40px" }}>
                Why Soulful Marketing Works
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", textAlign: "center", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto 60px" }}>
                Wellness marketing requires integrity and trust - not gimmicks. Your audience can feel when something is authentic. We build marketing systems that honor your values while delivering measurable results.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                {[
                  {
                    title: "Clarity",
                    description: "Define your brand's unique voice, audience, and positioning so every message resonates with purpose."
                  },
                  {
                    title: "Consistency", 
                    description: "Build a cohesive presence across all channels that nurtures trust and keeps your brand top of mind."
                  },
                  {
                    title: "Conversion",
                    description: "Turn aligned prospects into loyal clients through authentic engagement and care-driven journeys."
                  }
                ].map((value, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <div style={{ width: "60px", height: "60px", background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}>{value.title[0]}</span>
                    </div>
                    <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>{value.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6" }}>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOULFUL Framework */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "24px" }}>
                Our Methodology
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", textAlign: "center", marginBottom: "20px" }}>
                The SOULFUL Framework
              </p>
              <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.6)", textAlign: "center", marginBottom: "60px" }}>
                Seven interconnected pillars that create a complete marketing ecosystem for your wellness brand.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", marginBottom: "60px" }}>
                {soulfulPillars.map((pillar, index) => (
                  <div key={index} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "8px", padding: "24px", display: "flex", gap: "16px" }}>
                    <div style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "18px", color: "white", fontWeight: "bold" }}>{pillar.letter}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "8px" }}>{pillar.title}</h3>
                      <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6" }}>{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div style={{ textAlign: "center", color: "rgba(231, 231, 231, 0.6)", fontSize: "14px" }}>
                Hover over each letter to see what it stands for. Each pillar works together as one system.
              </div>
            </div>
          </section>

          {/* Journey */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(10, 10, 10)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "40px" }}>
                What This Looks Like
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", textAlign: "center", marginBottom: "60px" }}>
                A clear four-step journey from brand clarity to sustainable growth.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                {[
                  {
                    step: "1",
                    title: "Align Brand",
                    description: "Clarify your story, values, and visual identity"
                  },
                  {
                    step: "2", 
                    title: "Get Discoverable",
                    description: "Optimize your online presence and SEO"
                  },
                  {
                    step: "3",
                    title: "Convert with Care",
                    description: "Nurture leads through authentic touchpoints"
                  },
                  {
                    step: "4",
                    title: "Scale with Longevity",
                    description: "Build community and lifetime value"
                  }
                ].map((journey, index) => (
                  <div key={index} style={{ textAlign: "center" }}>
                    <div style={{ width: "60px", height: "60px", background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}>{journey.step}</span>
                    </div>
                    <h3 style={{ fontSize: "1.3rem", color: "rgb(231, 231, 231)", marginBottom: "12px" }}>{journey.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6" }}>{journey.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Packages */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "40px" }}>
                What You Get
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", textAlign: "center", marginBottom: "60px" }}>
                Choose the level of partnership that fits your stage of growth. Think of it as an operating system, not random services.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
                {[
                  {
                    title: "Foundation",
                    subtitle: "Establish Your Presence",
                    features: [
                      "Brand identity & messaging clarity",
                      "Website design & development", 
                      "Core SEO setup & optimization",
                      "Google Business Profile setup",
                      "Social media foundation",
                      "Review generation system"
                    ],
                    badge: null
                  },
                  {
                    title: "Growth",
                    subtitle: "Accelerate Your Reach", 
                    features: [
                      "Everything in Foundation",
                      "Content marketing strategy",
                      "Email nurturing sequences",
                      "Social media management",
                      "Paid advertising campaigns",
                      "Monthly performance reporting"
                    ],
                    badge: "Most Popular"
                  },
                  {
                    title: "Expansion",
                    subtitle: "Scale Your Impact",
                    features: [
                      "Everything in Growth",
                      "Community hub development",
                      "Course/program creation support",
                      "Advanced automation workflows",
                      "Omnichannel campaign management",
                      "Strategic growth consulting"
                    ],
                    badge: null
                  }
                ].map((pkg, index) => (
                  <div key={index} style={{ 
                    background: pkg.badge ? "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)" : "rgba(255, 255, 255, 0.03)", 
                    border: pkg.badge ? "1px solid rgba(255, 98, 59, 0.3)" : "1px solid rgba(255, 255, 255, 0.07)", 
                    borderRadius: "12px", 
                    padding: "40px", 
                    position: "relative" 
                  }}>
                    {pkg.badge && (
                      <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#FF623B", padding: "4px 16px", borderRadius: "20px" }}>
                        <span style={{ fontSize: "12px", color: "white", fontWeight: "bold" }}>{pkg.badge}</span>
                      </div>
                    )}
                    
                    <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "8px", marginTop: pkg.badge ? "12px" : "0" }}>{pkg.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)", marginBottom: "24px" }}>{pkg.subtitle}</p>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B" }}></div>
                          <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="group relative overflow-hidden flex items-center justify-center h-[44px] w-full bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white">
                      <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Learn More</span>
                      <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Learn More</span>
                      <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Learn More</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Advantage */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(10, 10, 10)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "40px" }}>
                Our Advantage
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", textAlign: "center", marginBottom: "60px" }}>
                Soulful Strategy -<br />Powered by Automation
              </p>
              
              <div style={{ background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)", border: "1px solid rgba(255, 98, 59, 0.3)", borderRadius: "12px", padding: "60px", textAlign: "center" }}>
                <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.9)", lineHeight: "1.8", marginBottom: "40px" }}>
                  We install a calm, steady marketing system that works for you around the clock. No more scattered efforts or missed opportunities.
                </p>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                  {[
                    "Lead capture that feels welcoming, not pushy",
                    "Nurturing sequences that build genuine connection",
                    "Booking workflows that respect everyone's time",
                    "Review engine that amplifies happy clients",
                    "Reactivation campaigns for dormant leads"
                  ].map((advantage, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B", flexShrink: 0 }}></div>
                      <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Real Results */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "40px" }}>
                Real Results
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", textAlign: "center", marginBottom: "60px" }}>
                See how wellness businesses like yours have grown with the SOULFUL framework.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginBottom: "60px" }}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "12px", padding: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                      <div style={{ width: "50px", height: "50px", background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}>{testimonial.initials}</span>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "4px" }}>{testimonial.name}</h4>
                        <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.6)" }}>{testimonial.role}</p>
                      </div>
                    </div>
                    <blockquote style={{ fontSize: "15px", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6", fontStyle: "italic", margin: 0 }}>
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(10, 10, 10)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "60px" }}>
                Mini Case Studies
              </h2>
              
              <div style={{ display: "grid", gap: "40px" }}>
                {caseStudies.map((study, index) => (
                  <div key={index} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "12px", padding: "40px" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "24px" }}>{study.title}</h3>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
                      <div>
                        <h4 style={{ fontSize: "14px", color: "#FF623B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Problem</h4>
                        <p style={{ fontSize: "15px", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6" }}>{study.problem}</p>
                      </div>
                      
                      <div>
                        <h4 style={{ fontSize: "14px", color: "#FF623B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>What We Did</h4>
                        <p style={{ fontSize: "15px", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6" }}>{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 style={{ fontSize: "14px", color: "#FF623B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>Outcome</h4>
                        <p style={{ fontSize: "15px", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6" }}>{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", marginBottom: "40px" }}>
                Get Your Complimentary Audit
              </h2>
              
              <div style={{ background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)", border: "1px solid rgba(255, 98, 59, 0.3)", borderRadius: "12px", padding: "60px" }}>
                <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "32px" }}>
                  Frequently Asked Questions
                </h3>
                
                <div style={{ display: "grid", gap: "24px", marginBottom: "40px", textAlign: "left" }}>
                  {[
                    "Do you only work with wellness businesses?",
                    "Do you provide strategy or also handle implementation?",
                    "What if I already have a website?",
                    "How long before I see results?",
                    "What's the first step?"
                  ].map((question, index) => (
                    <div key={index} style={{ background: "rgba(255, 255, 255, 0.05)", padding: "20px", borderRadius: "8px" }}>
                      <h4 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "8px" }}>{question}</h4>
                      <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.6)", lineHeight: "1.6" }}>
                        Answer would go here providing detailed information about this specific question.
                      </p>
                    </div>
                  ))}
                </div>
                
                <div style={{ marginBottom: "40px" }}>
                  <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#FF623B", marginBottom: "16px" }}>
                    Ready to grow -<br />without losing your integrity?
                  </h3>
                  <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.8)", marginBottom: "24px" }}>
                    Book a complimentary audit call. We'll show you what's working, what's missing, and what to do next.
                  </p>
                </div>
                
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white px-8">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Get My Complimentary Audit</span>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Get My Complimentary Audit</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Get My Complimentary Audit</span>
                  </button>
                </div>
                
                <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.6)", marginTop: "24px" }}>
                  No pressure. Just clarity on your next steps.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
