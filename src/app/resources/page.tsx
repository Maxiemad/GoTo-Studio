import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Resources() {
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
                <span style={{ fontFamily: "var(--font-azeret-mono)", fontSize: "11px", color: "rgba(231, 231, 231, 0.6)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Resources</span>
              </div>
              <h1 style={{ position: "relative", fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "rgb(231, 231, 231)", textTransform: "none", letterSpacing: "-0.02em", lineHeight: "1.1", margin: "0 0 24px 0", maxWidth: "900px" }}>
                Free Resources
              </h1>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6", maxWidth: "600px", margin: "0 0 32px 0" }}>
                Free Tools & Guides<br />
                Get instant access to our marketing audit and retreat marketing guide - completely free.
              </p>
            </div>
          </section>

          {/* Growth Ecosystem Section */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", marginBottom: "24px" }}>
                Your Growth Ecosystem Awaits
              </h2>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6", marginBottom: "40px" }}>
                Your All-in-One<br />Business, Content, & AI<br />Growth Ecosystem Is Here.
              </p>
              
              <div style={{ background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", padding: "60px", borderRadius: "12px", textAlign: "center" }}>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "white", marginBottom: "16px" }}>
                  Unlock your free 14-day trial - available only after a call. Limited spots available.
                </h3>
                
                <div style={{ background: "rgba(0, 0, 0, 0.2)", padding: "16px 24px", borderRadius: "8px", display: "inline-block", marginBottom: "32px" }}>
                  <span style={{ fontSize: "16px", color: "white" }}>Free Trial Locked - Unlockable Through Call Only</span>
                </div>
                
                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-white hover:bg-transparent transition-colors duration-200 cursor-pointer border border-white px-8">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call to Unlock Free Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Book a Call to Unlock Free Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call to Unlock Free Trial</span>
                  </button>
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-transparent hover:bg-white transition-colors duration-200 cursor-pointer border border-white px-8">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">See Plans</span>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">See Plans</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">See Plans</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Free Tools Section */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(10, 10, 10)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "60px" }}>
                Get a Free AI Marketing Report, Instantly!
              </h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}>
                {/* AI Marketing Report */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
                  <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", borderRadius: "50%", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "32px", color: "white" }}>AI</span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>
                    Free AI Marketing Report
                  </h3>
                  <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6", marginBottom: "32px" }}>
                    Get instant insights into your marketing performance with our AI-powered analysis tool. Discover opportunities and optimize your strategy.
                  </p>
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] w-full bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Free Download</span>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Free Download</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Free Download</span>
                  </button>
                </div>

                {/* Retreat Marketing Guide */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
                  <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #FF623B 0%, #FF8C42 100%)", borderRadius: "50%", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "32px", color: "white" }}>R</span>
                  </div>
                  <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>
                    Retreat Marketing Guide
                  </h3>
                  <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6", marginBottom: "32px" }}>
                    Unlock proven strategies to fill your retreats, attract ideal participants, and maximize your marketing ROI.
                  </p>
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] w-full bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Get Your Free Guide</span>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Get Your Free Guide</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Get Your Free Guide</span>
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div style={{ marginTop: "60px", textAlign: "center" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
                  {[
                    "No Credit Card Required",
                    "Cancel Anytime", 
                    "24/7 Support"
                  ].map((trust, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B" }}></div>
                      <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{trust}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", textAlign: "center", marginBottom: "60px" }}>
                More Free Resources
              </h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                {[
                  {
                    title: "Marketing Checklist",
                    description: "Complete checklist to audit your current marketing strategy and identify gaps.",
                    category: "Tools"
                  },
                  {
                    title: "Content Calendar Template",
                    description: "Ready-to-use content planning template to organize your marketing efforts.",
                    category: "Templates"
                  },
                  {
                    title: "SEO Starter Guide",
                    description: "Step-by-step guide to improve your search engine rankings and visibility.",
                    category: "Guides"
                  },
                  {
                    title: "Sales Funnel Templates",
                    description: "Pre-built funnel templates for coaches, consultants, and service businesses.",
                    category: "Templates"
                  },
                  {
                    title: "Email Marketing Playbook",
                    description: "Complete email marketing strategies for service-based businesses.",
                    category: "Playbooks"
                  },
                  {
                    title: "Social Media Content Ideas",
                    description: "100+ content ideas specifically for wellness and service businesses.",
                    category: "Content"
                  }
                ].map((resource, index) => (
                  <div key={index} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "8px", padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <span style={{ fontSize: "12px", color: "#FF623B", textTransform: "uppercase", letterSpacing: "0.05em" }}>{resource.category}</span>
                    </div>
                    <h3 style={{ fontSize: "18px", color: "rgb(231, 231, 231)", marginBottom: "12px" }}>{resource.title}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)", lineHeight: "1.6", marginBottom: "16px" }}>{resource.description}</p>
                    <button style={{ background: "none", border: "1px solid rgba(255, 255, 255, 0.2)", borderRadius: "4px", padding: "8px 16px", cursor: "pointer", fontSize: "12px", color: "rgba(231, 231, 231, 0.8)", textTransform: "uppercase", letterSpacing: "0.05em", transition: "all 0.2s" }}>
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(10, 10, 10)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)", border: "1px solid rgba(255, 98, 59, 0.3)", borderRadius: "12px", padding: "60px" }}>
                <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "rgb(231, 231, 231)", marginBottom: "24px" }}>
                  Ready to Transform Your Business?
                </h2>
                <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6", marginBottom: "40px" }}>
                  Start with our free resources and unlock the full potential of your business with GoToStudio AI.
                </p>
                <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white px-8" style={{ width: "fit-content", margin: "0 auto" }}>
                  <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Get Started Free</span>
                  <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Get Started Free</span>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Get Started Free</span>
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
