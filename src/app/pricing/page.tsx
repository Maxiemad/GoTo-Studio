import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Pricing() {
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
                <span style={{ fontFamily: "var(--font-azeret-mono)", fontSize: "11px", color: "rgba(231, 231, 231, 0.6)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Pricing</span>
              </div>
              <h1 style={{ position: "relative", fontFamily: "var(--font-geist-sans), sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "rgb(231, 231, 231)", textTransform: "none", letterSpacing: "-0.02em", lineHeight: "1.1", margin: "0 0 24px 0", maxWidth: "900px" }}>
                Premium Plans
              </h1>
              <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.3rem)", color: "rgba(231, 231, 231, 0.8)", lineHeight: "1.6", maxWidth: "600px", margin: "0 0 32px 0" }}>
                Why GoToStudio AI Beats Stand-Alone Tools
              </p>
              <div style={{ background: "rgba(255, 98, 59, 0.1)", border: "1px solid rgba(255, 98, 59, 0.3)", padding: "16px 24px", borderRadius: "8px", display: "inline-block" }}>
                <span style={{ fontSize: "14px", color: "#FF623B" }}>All plans include a 14-day free trial - unlockable only after a call.</span>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          <section style={{ padding: "80px clamp(20px, 5vw, 40px)", background: "rgb(15, 15, 15)" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
                {/* Solo Builder */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "12px", padding: "40px", height: "fit-content" }}>
                  <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "8px" }}>Solo Builder</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>Pure SaaS Power</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px" }}>
                    <div style={{ fontSize: "2.5rem", color: "#FF623B", fontWeight: "bold", marginBottom: "8px" }}>$147<span style={{ fontSize: "1rem", color: "rgba(231, 231, 231, 0.6)" }}>/mo</span></div>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>Everything you need to build and manage your business</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px" }}>
                    <h4 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>Features:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {[
                        "Full GoToStudio platform",
                        "CRM & Pipelines",
                        "Sales Funnels",
                        "Automations & Workflows",
                        "Websites",
                        "Calendar Booking",
                        "Forms & Surveys",
                        "Email & SMS",
                        "Courses & Communities",
                        "Analytics Dashboard",
                        "Basic AI Assistant",
                        "Unlimited Contacts"
                      ].map((feature, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B" }}></div>
                          <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] w-full bg-white hover:bg-[#FF623B] transition-colors duration-200 cursor-pointer border border-white hover:border-[#FF623B]">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call to Unlock Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Book a Call to Unlock Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-[#FF623B] text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call to Unlock Trial</span>
                  </button>
                </div>

                {/* Growth Creator - Most Popular */}
                <div style={{ background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)", border: "1px solid rgba(255, 98, 59, 0.3)", borderRadius: "12px", padding: "40px", height: "fit-content", position: "relative" }}>
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#FF623B", padding: "4px 16px", borderRadius: "20px" }}>
                    <span style={{ fontSize: "12px", color: "white", fontWeight: "bold" }}>Most Popular</span>
                  </div>
                  
                  <div style={{ marginBottom: "24px", marginTop: "12px" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "8px" }}>Growth Creator</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>Software + Basic Execution</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px" }}>
                    <div style={{ fontSize: "2.5rem", color: "#FF623B", fontWeight: "bold", marginBottom: "8px" }}>$297<span style={{ fontSize: "1rem", color: "rgba(231, 231, 231, 0.6)" }}>/mo</span></div>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>SaaS power plus expert content creation</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px" }}>
                    <h4 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>Everything in Solo Builder +:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {[
                        "Basic Content Package",
                        "Strategic Content Planning",
                        "Foundational Brand Execution",
                        "SEO-Ready Content Support",
                        "Keyword Research",
                        "Full Setup & Onboarding",
                        "Monthly Content Plan",
                        "Basic Prospecting Engine",
                        "Priority Support"
                      ].map((feature, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B" }}></div>
                          <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] w-full bg-[#FF623B] hover:bg-white transition-colors duration-200 cursor-pointer border border-[#FF623B] hover:border-white">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call to Unlock Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Book a Call to Unlock Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call to Unlock Trial</span>
                  </button>
                </div>

                {/* Scale Master */}
                <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "12px", padding: "40px", height: "fit-content" }}>
                  <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "1.5rem", color: "rgb(231, 231, 231)", marginBottom: "8px" }}>Scale Master</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>Full Power Ecosystem</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px" }}>
                    <div style={{ fontSize: "2.5rem", color: "#FF623B", fontWeight: "bold", marginBottom: "8px" }}>$597<span style={{ fontSize: "1rem", color: "rgba(231, 231, 231, 0.6)" }}>/mo</span></div>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>Maximum execution + AI + VIP treatment</p>
                  </div>
                  
                  <div style={{ marginBottom: "32px" }}>
                    <h4 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "16px" }}>Everything in Growth Creator +:</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {[
                        "Advanced Content Package",
                        "High-Volume Content Execution",
                        "AI-Powered Content & SEO Engine",
                        "Custom Growth Strategy",
                        "Advanced AI Tools",
                        "AI Lead-Gen Bot",
                        "Full Prospecting Suite",
                        "Affiliate Software",
                        "Zero % GoToRetreats Commission",
                        "VIP Support",
                        "Strategy Calls",
                        "Dedicated Account Manager"
                      ].map((feature, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B" }}></div>
                          <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="group relative overflow-hidden flex items-center justify-center h-[44px] w-full bg-white hover:bg-[#FF623B] transition-colors duration-200 cursor-pointer border border-white hover:border-[#FF623B]">
                    <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Book a Call to Unlock Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Book a Call to Unlock Trial</span>
                    <span className="absolute inset-0 flex items-center justify-center text-[#FF623B] text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Book a Call to Unlock Trial</span>
                  </button>
                </div>
              </div>

              {/* Pricing Info */}
              <div style={{ marginTop: "60px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", color: "#FF623B", fontWeight: "bold", marginBottom: "16px" }}>Pricing starts from $147/mo</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
                  {["Cancel Anytime", "No Hidden Fees", "14-Day Free Trial", "High-Touch Implementation"].map((info, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#FF623B" }}></div>
                      <span style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.8)" }}>{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* AI Adoption Seminars */}
          <section style={{ padding: "80px 0", background: "rgb(10, 10, 10)" }}>
            <div
              className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
              style={{ zIndex: 60 }}
            >
              <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                    SEMINARS
                  </span>
                  <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                    AI Adoption Seminars<br />for Business Teams
                  </h2>
                  <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                    Hands-on. Live implementation. Fully customized to your business priorities.
                  </p>
                </div>
                <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                  <span className="btn-text-default text-black">book seminar</span>
                  <span className="btn-text-hover text-white">book seminar</span>
                </button>
              </div>
            </div>
            
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
              <div style={{ background: "linear-gradient(135deg, rgba(255, 98, 59, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)", border: "1px solid rgba(255, 98, 59, 0.3)", borderRadius: "12px", padding: "60px" }}>
                
                <div style={{ textAlign: "left", maxWidth: "700px", margin: "0 auto 40px" }}>
                  <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.8)", marginBottom: "24px" }}>
                    We sit with your team for one or multiple days and:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                      "Solve your biggest business bottlenecks live",
                      "Build AI workflows in real time inside your CRM",
                      "Create sales scripts, automations, and AI-assisted funnels together",
                      "Train your teams hands-on so they leave confident - not dependent",
                      "Prioritize outcomes based on what matters most to your business",
                      "Ship tangible AI solutions by the end of the seminar"
                    ].map((item, index) => (
                      <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FF623B", flexShrink: 0 }}></div>
                        <span style={{ fontSize: "15px", color: "rgba(231, 231, 231, 0.8)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "24px", borderRadius: "8px", marginBottom: "40px" }}>
                  <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.8)", fontStyle: "italic" }}>
                    No theory. No endless back-and-forth.<br />
                    Just clarity, builds, outcomes, and immediate ROI.
                  </p>
                </div>
                
                <div style={{ background: "rgba(255, 98, 59, 0.2)", padding: "24px", borderRadius: "8px", marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "1.2rem", color: "#FF623B", marginBottom: "12px" }}>Exclusive Benefit</h3>
                  <p style={{ fontSize: "16px", color: "rgba(231, 231, 231, 0.9)", marginBottom: "16px" }}>
                    Seminar Participants Unlock<br />
                    <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>30% OFF for 12 Months</span>
                  </p>
                  <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.7)" }}>
                    Unlock 30% off any recurring GoToStudio SaaS plan for 12 months after completing a custom seminar. This discount is a loyalty reward for teams who fast-track AI adoption and implementation.
                  </p>
                </div>
                
                <div style={{ marginBottom: "32px" }}>
                  <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.6)", marginBottom: "16px" }}>
                    Built by founders and AI architects. You bring the problems. We build the solutions live with your team.
                  </p>
                </div>
                
                <button className="group relative overflow-hidden flex items-center justify-center h-[44px] bg-white hover:bg-[#FF623B] transition-colors duration-200 cursor-pointer border border-white hover:border-[#FF623B] px-8" style={{ width: "fit-content", margin: "0 auto" }}>
                  <span className="invisible text-[11px] font-semibold uppercase tracking-wider">Schedule a Discovery Call</span>
                  <span className="absolute inset-0 flex items-center justify-center text-black text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out group-hover:-translate-y-full">Schedule a Discovery Call</span>
                  <span className="absolute inset-0 flex items-center justify-center text-[#FF623B] text-[11px] font-semibold uppercase tracking-wider transition-transform duration-200 ease-in-out translate-y-full group-hover:translate-y-0">Schedule a Discovery Call</span>
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{ padding: "80px 0", background: "rgb(15, 15, 15)" }}>
            <div
              className="relative flex w-full justify-center px-4 pt-14 pb-4 pointer-events-none sm:px-6 lg:px-10 mb-6 lg:mb-12 xl:mb-0 2xl:mb-[-6vh]"
              style={{ zIndex: 60 }}
            >
              <div className="w-full max-w-[1200px] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pointer-events-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-white uppercase tracking-[0.03em] font-medium opacity-40" style={{ fontSize: 10, lineHeight: "1.4em" }}>
                    FAQ
                  </span>
                  <h2 className="text-white font-normal" style={{ fontSize: 27, lineHeight: "1.2em", letterSpacing: "-0.03em" }}>
                    Frequently Asked Questions
                  </h2>
                  <p className="text-white font-normal" style={{ fontSize: 16, lineHeight: "1.4em", letterSpacing: "-0.01em", opacity: 0.7 }}>
                    Features, Benefits, Use Cases & FAQs<br />
                    Everything you need to know about GoToStudio AI and how it can transform your business.
                  </p>
                </div>
                <button className="btn-slide h-[30px] w-[138px] bg-white hover:bg-[#FF623B] backdrop-blur-[6px]">
                  <span className="btn-text-default text-black">learn more</span>
                  <span className="btn-text-hover text-white">learn more</span>
                </button>
              </div>
            </div>
            
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 40px)" }}>
              
              <div style={{ display: "grid", gap: "24px", maxWidth: "800px", margin: "0 auto" }}>
                {[
                  "What is GoToStudio AI?",
                  "How does AI marketing automation work in GoToStudio?",
                  "What's included in the free trial?",
                  "Can I cancel my subscription anytime?",
                  "Does GoToStudio AI integrate with other tools?",
                  "Is my data secure with GoToStudio AI?",
                  "Who is GoToStudio AI best suited for?"
                ].map((question, index) => (
                  <div key={index} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.07)", borderRadius: "8px", padding: "24px" }}>
                    <h3 style={{ fontSize: "16px", color: "rgb(231, 231, 231)", marginBottom: "12px" }}>{question}</h3>
                    <p style={{ fontSize: "14px", color: "rgba(231, 231, 231, 0.6)", lineHeight: "1.6" }}>
                      Detailed answer would go here. This is where you'd provide comprehensive information about each frequently asked question to help potential customers understand your platform better.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
