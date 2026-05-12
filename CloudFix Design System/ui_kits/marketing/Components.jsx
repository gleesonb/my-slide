// Components.jsx — CloudFix marketing site components
// Loads after React + Babel. Exports to window for the index page.

const { useState } = React;

// ============== HEADER ==============
function MarketingHeader({ active = "home" }) {
  const links = [
    { id: "solutions", label: "Solutions", dropdown: ["CloudFix — Cost Optimization", "RightSpend — Discount Optimization", "QueryLens — Database Upgrade"] },
    { id: "pricing", label: "Pricing" },
    { id: "assessment", label: "Assessment" },
    { id: "partnerships", label: "Partnerships", dropdown: ["AWS Partnership", "Become a Referral Partner"] },
    { id: "resources", label: "Resources", dropdown: ["All Resources", "Savings Calculator", "Blog", "Success Stories"] },
  ];
  return (
    <header style={mhStyles.header}>
      <div style={mhStyles.inner}>
        <a href="#" style={mhStyles.logoLink}>
          <img src="../../assets/logo-full-color.png" alt="CloudFix" style={{ height: 32 }} />
        </a>
        <nav style={mhStyles.nav}>
          {links.map(l => (
            <div key={l.id} style={mhStyles.navItem}>
              <span style={{ ...mhStyles.navLink, color: active === l.id ? "var(--cf-blue)" : "var(--cf-fg-1)" }}>
                {l.label}{l.dropdown && <span style={mhStyles.caret}>▾</span>}
              </span>
            </div>
          ))}
        </nav>
        <div style={mhStyles.cta}>
          <a href="#" style={mhStyles.login}>Login</a>
          <button style={mhStyles.ctaBtn}>Start free assessment</button>
        </div>
      </div>
    </header>
  );
}
const mhStyles = {
  header: { background: "#fff", borderBottom: "1px solid var(--cf-divider)", position: "sticky", top: 0, zIndex: 50 },
  inner: { maxWidth: 1280, margin: "0 auto", padding: "14px 32px", display: "flex", alignItems: "center", gap: 32 },
  logoLink: { display: "flex", alignItems: "center", flexShrink: 0 },
  nav: { display: "flex", gap: 26, flex: 1 },
  navItem: { position: "relative" },
  navLink: { fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4 },
  caret: { fontSize: 9, opacity: 0.6 },
  cta: { display: "flex", alignItems: "center", gap: 16 },
  login: { fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "var(--cf-fg-2)" },
  ctaBtn: { background: "var(--cf-navy)", color: "#fff", border: "none", borderRadius: 6, padding: "10px 18px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, cursor: "pointer" },
};

// ============== HERO ==============
function Hero() {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.inner}>
        <h1 style={heroStyles.h1}>Cut your AWS bill by <span style={{ color: "var(--cf-blue)" }}>20–35%</span> — safely</h1>
        <p style={heroStyles.lede}>Trusted Advisor gives you alerts. CloudFix gives you detailed reports on every optimization — what changes, why it's safe, and what you'll save. You decide what we fix.</p>
        <div style={heroStyles.ctas}>
          <button style={heroStyles.primary}>Start free savings assessment</button>
          <span style={heroStyles.or}>or</span>
          <button style={heroStyles.secondary}>Estimate savings first</button>
        </div>
        <div style={heroStyles.proof}>
          <span>✓ Takes 5 minutes</span>
          <span>✓ You approve everything</span>
          <span>✓ Results in 24 hours</span>
        </div>
      </div>
      <div style={heroStyles.visual}>
        <img src="../../assets/refs/screenshot-recommendations.png" alt="Recommendations dashboard" style={heroStyles.shot} />
      </div>
    </section>
  );
}
const heroStyles = {
  section: { background: "linear-gradient(180deg, #FFFFFF 0%, #F2F8FE 100%)", padding: "72px 32px 64px" },
  inner: { maxWidth: 1280, margin: "0 auto", textAlign: "center" },
  h1: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05, color: "var(--cf-navy)", letterSpacing: "-0.02em", maxWidth: 920, margin: "0 auto 20px" },
  lede: { fontSize: 19, lineHeight: 1.65, color: "var(--cf-fg-2)", maxWidth: 720, margin: "0 auto 32px" },
  ctas: { display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap" },
  primary: { background: "var(--cf-navy)", color: "#fff", border: "none", borderRadius: 8, padding: "16px 28px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "var(--shadow-2)" },
  secondary: { background: "#fff", color: "var(--cf-navy)", border: "1.5px solid var(--cf-navy)", borderRadius: 8, padding: "14.5px 28px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, cursor: "pointer" },
  or: { color: "var(--cf-fg-3)", fontStyle: "italic", fontSize: 14 },
  proof: { display: "flex", justifyContent: "center", gap: 24, marginTop: 28, fontSize: 14, color: "var(--cf-fg-2)", flexWrap: "wrap" },
  visual: { maxWidth: 1100, margin: "56px auto 0", padding: "0 16px" },
  shot: { width: "100%", borderRadius: 12, boxShadow: "var(--shadow-4)", border: "1px solid var(--cf-divider)" },
};

// ============== STAT BANNER ==============
function StatBanner() {
  return (
    <section style={sbStyles.section}>
      <div style={sbStyles.inner}>
        <p style={sbStyles.lead}>CloudFix manages over <strong style={{ color: "var(--cf-navy)" }}>$2 Billion</strong> in AWS spend for <strong style={{ color: "var(--cf-navy)" }}>500+</strong> industry leaders</p>
        <div style={sbStyles.logoRow}>
          {["western_digital", "moodys", "bcg", "ryanair", "mastercard", "pearson", "rbi"].map(l => (
            <div key={l} style={sbStyles.logo}>{l.replace(/_/g, " ").toUpperCase()}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
const sbStyles = {
  section: { background: "#fff", padding: "48px 32px", borderTop: "1px solid var(--cf-divider)", borderBottom: "1px solid var(--cf-divider)" },
  inner: { maxWidth: 1280, margin: "0 auto", textAlign: "center" },
  lead: { fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "var(--cf-fg-2)", margin: "0 0 32px" },
  logoRow: { display: "flex", justifyContent: "center", alignItems: "center", gap: 56, flexWrap: "wrap", opacity: 0.55 },
  logo: { fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, letterSpacing: "0.08em", color: "var(--cf-fg-2)" },
};

// ============== TRUST TRIO ==============
function TrustTrio() {
  const items = [
    { icon: "../../assets/icons/risk-free.svg", title: "Risk-Free", body: "Every fixer follows AWS advisories and is extensively tested across thousands of accounts. You stay in complete control." },
    { icon: "../../assets/icons/zero-downtime.svg", title: "Zero Downtime", body: "CloudFix only runs the optimization opportunities that require no service interruptions. Ever." },
    { icon: "../../assets/icons/least-privilege.svg", title: "Least Privilege", body: "Read access by default. Every fix happens through AWS Change Manager — your rules, your approvals." },
  ];
  return (
    <section style={ttStyles.section}>
      <div style={ttStyles.inner}>
        <p style={ttStyles.eyebrow}>Built for trust</p>
        <h2 style={ttStyles.h2}>You stay in control. Every step.</h2>
        <div style={ttStyles.grid}>
          {items.map(i => (
            <div key={i.title} style={ttStyles.cell}>
              <img src={i.icon} alt="" style={{ height: 88, marginBottom: 20 }} />
              <h3 style={ttStyles.cellTitle}>{i.title}</h3>
              <p style={ttStyles.cellBody}>{i.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const ttStyles = {
  section: { background: "var(--cf-surface-2)", padding: "88px 32px" },
  inner: { maxWidth: 1200, margin: "0 auto", textAlign: "center" },
  eyebrow: { fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--cf-blue)", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px" },
  h2: { fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 800, color: "var(--cf-navy)", margin: "0 0 56px", letterSpacing: "-0.015em" },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 },
  cell: { background: "#fff", padding: "40px 32px", borderRadius: 12, boxShadow: "var(--shadow-2)", borderLeft: "3px solid var(--cf-teal)" },
  cellTitle: { fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--cf-navy)", margin: "0 0 12px" },
  cellBody: { fontSize: 15, lineHeight: 1.6, color: "var(--cf-fg-2)", margin: 0 },
};

// ============== SPLIT FEATURE ==============
function SplitFeature({ flip = false, eyebrow, title, body, stat, statLabel, image }) {
  return (
    <section style={sfStyles.section}>
      <div style={{ ...sfStyles.inner, flexDirection: flip ? "row-reverse" : "row" }}>
        <div style={sfStyles.copy}>
          <p style={sfStyles.eyebrow}>{eyebrow}</p>
          <h2 style={sfStyles.h2}>{title}</h2>
          <p style={sfStyles.body}>{body}</p>
          {stat && (
            <div style={sfStyles.stat}>
              <div style={sfStyles.statNum}>{stat}</div>
              <div style={sfStyles.statLabel}>{statLabel}</div>
            </div>
          )}
        </div>
        <div style={sfStyles.visual}>
          <img src={image} alt="" style={sfStyles.img} />
        </div>
      </div>
    </section>
  );
}
const sfStyles = {
  section: { background: "#fff", padding: "88px 32px" },
  inner: { maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 64 },
  copy: { flex: 1 },
  visual: { flex: 1.1 },
  eyebrow: { fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--cf-blue)", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 14px" },
  h2: { fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 800, color: "var(--cf-navy)", margin: "0 0 18px", letterSpacing: "-0.015em", lineHeight: 1.1 },
  body: { fontSize: 17, lineHeight: 1.65, color: "var(--cf-fg-2)", margin: 0 },
  stat: { marginTop: 32, paddingTop: 24, borderTop: "3px solid var(--cf-teal)", maxWidth: 280 },
  statNum: { fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800, color: "var(--cf-navy)", lineHeight: 1, letterSpacing: "-0.02em" },
  statLabel: { fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cf-fg-3)", marginTop: 8 },
  img: { width: "100%", borderRadius: 12, boxShadow: "var(--shadow-3)", border: "1px solid var(--cf-divider)" },
};

// ============== CTA STRIP ==============
function CTAStrip() {
  return (
    <section style={ctaStyles.section}>
      <div style={ctaStyles.inner}>
        <h2 style={ctaStyles.h2}>Find. Fix. Save. Repeat.</h2>
        <p style={ctaStyles.body}>See your actual savings in 24 hours. No commitment, no card, no installation.</p>
        <div style={ctaStyles.ctas}>
          <button style={ctaStyles.primary}>Start free savings assessment</button>
          <button style={ctaStyles.outline}>Estimate savings first</button>
        </div>
      </div>
    </section>
  );
}
const ctaStyles = {
  section: { background: "linear-gradient(135deg, #1F8FBE 0%, #1F5FAA 60%, #1F3A68 100%)", padding: "88px 32px", color: "#fff" },
  inner: { maxWidth: 900, margin: "0 auto", textAlign: "center" },
  h2: { fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 800, margin: "0 0 16px", letterSpacing: "-0.02em" },
  body: { fontSize: 18, lineHeight: 1.6, margin: "0 0 36px", opacity: 0.92 },
  ctas: { display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" },
  primary: { background: "var(--cf-orange)", color: "#fff", border: "none", borderRadius: 8, padding: "16px 28px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "var(--shadow-3)" },
  outline: { background: "transparent", color: "#fff", border: "1.5px solid rgba(255,255,255,0.6)", borderRadius: 8, padding: "14.5px 28px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, cursor: "pointer" },
};

// ============== FOOTER ==============
function Footer() {
  const cols = [
    { h: "Why CloudFix", links: ["Why CloudFix", "Cost Optimization", "Discount Management", "Pricing"] },
    { h: "Company", links: ["AWS Partnership", "Leadership", "About us", "News & Events"] },
    { h: "Resources", links: ["Savings Calculator", "Optimization Checklist", "Blog", "Success Stories", "Podcast"] },
    { h: "Get help", links: ["Contact us", "Support", "Login"] },
  ];
  return (
    <footer style={fStyles.footer}>
      <div style={fStyles.inner}>
        <div style={fStyles.brandCol}>
          <img src="../../assets/logo-white.png" alt="CloudFix" style={{ height: 30, marginBottom: 16 }} />
          <p style={fStyles.tag}>The automatic, always-running way to optimize AWS cost and performance.</p>
          <div style={fStyles.badges}>
            <img src="../../assets/aws-partner.svg" alt="AWS Partner" style={{ height: 56 }} />
            <img src="../../assets/finops-premier.png" alt="FinOps Foundation Premier" style={{ height: 56 }} />
          </div>
        </div>
        {cols.map(c => (
          <div key={c.h} style={fStyles.col}>
            <h4 style={fStyles.colHead}>{c.h}</h4>
            {c.links.map(l => <a key={l} href="#" style={fStyles.link}>{l}</a>)}
          </div>
        ))}
      </div>
      <div style={fStyles.bottom}>
        <span>2028 E Ben White Blvd., Ste 240-2650, Austin, TX 78741</span>
        <span style={{ marginLeft: "auto", display: "flex", gap: 18 }}>
          <a href="#" style={fStyles.bLink}>Privacy Policy</a>
          <a href="#" style={fStyles.bLink}>Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}
const fStyles = {
  footer: { background: "var(--cf-navy-900)", color: "rgba(255,255,255,0.78)", padding: "64px 32px 28px" },
  inner: { maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: 40 },
  brandCol: {},
  tag: { fontSize: 14, lineHeight: 1.6, opacity: 0.75, margin: "0 0 24px", maxWidth: 280 },
  badges: { display: "flex", gap: 16, alignItems: "center", background: "#fff", padding: "10px 14px", borderRadius: 6, width: "fit-content" },
  col: { display: "flex", flexDirection: "column", gap: 10 },
  colHead: { fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#fff", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px" },
  link: { color: "rgba(255,255,255,0.72)", fontSize: 14, textDecoration: "none" },
  bottom: { maxWidth: 1280, margin: "48px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", fontSize: 12, color: "rgba(255,255,255,0.55)" },
  bLink: { color: "rgba(255,255,255,0.65)", fontSize: 12 },
};

Object.assign(window, { MarketingHeader, Hero, StatBanner, TrustTrio, SplitFeature, CTAStrip, Footer });
