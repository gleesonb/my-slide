// ConsoleComponents.jsx — CloudFix in-product app
const { useState } = React;

// ============== TOP BAR ==============
function ConsoleTopBar({ org = "Acme Corp" }) {
  return (
    <header style={ctbStyles.bar}>
      <div style={ctbStyles.left}>
        <img src="../../assets/logo-navy.png" alt="CloudFix" style={{ height: 22 }} />
      </div>
      <div style={ctbStyles.center}>
        <div style={ctbStyles.search}>
          <span style={{ opacity: 0.5, marginRight: 8 }}>⌕</span>
          <input placeholder="Search recommendations, accounts, resources…" style={ctbStyles.searchInput} />
        </div>
      </div>
      <div style={ctbStyles.right}>
        <span style={ctbStyles.org}>{org}</span>
        <span style={ctbStyles.bell}>🔔</span>
        <div style={ctbStyles.avatar}>JA</div>
      </div>
    </header>
  );
}
const ctbStyles = {
  bar: { background: "#fff", borderBottom: "1px solid var(--cf-divider)", height: 56, display: "flex", alignItems: "center", padding: "0 24px", gap: 24 },
  left: { display: "flex", alignItems: "center", gap: 12, flex: "0 0 240px" },
  center: { flex: 1, maxWidth: 520 },
  search: { background: "var(--cf-surface-2)", border: "1px solid var(--cf-divider)", borderRadius: 6, padding: "8px 12px", display: "flex", alignItems: "center" },
  searchInput: { border: "none", outline: "none", background: "transparent", flex: 1, fontSize: 13, fontFamily: "var(--font-body)" },
  right: { marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 },
  org: { fontSize: 13, fontWeight: 600, color: "var(--cf-fg-2)" },
  bell: { fontSize: 16, opacity: 0.7, cursor: "pointer" },
  avatar: { width: 32, height: 32, borderRadius: "50%", background: "var(--cf-navy)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700 },
};

// ============== SIDEBAR ==============
function Sidebar({ active = "recommendations", onNav }) {
  const items = [
    { id: "dashboard", label: "Dashboard", icon: "▦" },
    { id: "recommendations", label: "Recommendations", icon: "✓" },
    { id: "savings", label: "Savings", icon: "$" },
    { id: "accounts", label: "AWS Accounts", icon: "☁" },
    { id: "fixers", label: "Fixers", icon: "⚙" },
    { id: "reports", label: "Reports", icon: "▤" },
    { id: "settings", label: "Settings", icon: "⚒" },
  ];
  return (
    <aside style={sbStyles.aside}>
      {items.map(i => (
        <div key={i.id}
          onClick={() => onNav && onNav(i.id)}
          style={{ ...sbStyles.item, ...(active === i.id ? sbStyles.active : {}) }}>
          <span style={sbStyles.icon}>{i.icon}</span>
          <span>{i.label}</span>
        </div>
      ))}
      <div style={{ flex: 1 }} />
      <div style={sbStyles.help}>
        <div style={{ fontSize: 12, color: "var(--cf-fg-3)", marginBottom: 4 }}>Need help?</div>
        <a href="#" style={{ fontSize: 13, color: "var(--cf-blue)", fontWeight: 600 }}>Contact support →</a>
      </div>
    </aside>
  );
}
const sbStyles = {
  aside: { width: 220, background: "#fff", borderRight: "1px solid var(--cf-divider)", padding: "20px 12px", display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 },
  item: { display: "flex", alignItems: "center", gap: 12, padding: "9px 12px", borderRadius: 6, cursor: "pointer", fontSize: 14, fontWeight: 500, color: "var(--cf-fg-2)", fontFamily: "var(--font-body)" },
  active: { background: "var(--cf-blue-100)", color: "var(--cf-navy)", fontWeight: 700 },
  icon: { width: 18, textAlign: "center", fontSize: 14, opacity: 0.8 },
  help: { padding: "16px 12px", borderTop: "1px solid var(--cf-divider)" },
};

// ============== STAT TILE ==============
function StatTile({ label, value, delta, accent = "navy" }) {
  const accentColor = { navy: "var(--cf-navy)", blue: "var(--cf-blue)", success: "var(--cf-success)", orange: "var(--cf-orange)" }[accent];
  return (
    <div style={stStyles.tile}>
      <div style={stStyles.label}>{label}</div>
      <div style={{ ...stStyles.value, color: accentColor }}>{value}</div>
      {delta && <div style={stStyles.delta}>{delta}</div>}
    </div>
  );
}
const stStyles = {
  tile: { background: "#fff", borderRadius: 10, padding: "20px 22px", boxShadow: "var(--shadow-1)", border: "1px solid var(--cf-divider)" },
  label: { fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cf-fg-3)", marginBottom: 12 },
  value: { fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, lineHeight: 1, letterSpacing: "-0.015em" },
  delta: { fontSize: 12, color: "var(--cf-success)", marginTop: 8, fontWeight: 600 },
};

// ============== RECOMMENDATIONS GROUP ==============
function RecommendationGroup({ title, subtitle, count, potential, completed, realized, available, expanded = true, rows = [] }) {
  const [open, setOpen] = useState(expanded);
  return (
    <div style={rgStyles.wrap}>
      <div style={rgStyles.header} onClick={() => setOpen(!open)}>
        <div style={rgStyles.title}>
          <h3 style={rgStyles.h3}>{title} ({count})</h3>
          <p style={rgStyles.sub}>{subtitle}</p>
        </div>
        <div style={rgStyles.metric}><div style={rgStyles.mv}>{potential}</div><div style={rgStyles.ml}>Potential</div></div>
        <div style={rgStyles.metric}><div style={rgStyles.mv}>{completed}</div><div style={rgStyles.ml}>Completed</div></div>
        <div style={rgStyles.metric}><div style={{ ...rgStyles.mv, color: "var(--cf-success)" }}>{realized}</div><div style={rgStyles.ml}>Realized</div></div>
        <div style={rgStyles.metric}><div style={rgStyles.mv}>{available}</div><div style={rgStyles.ml}>Available</div></div>
        <div style={{ ...rgStyles.chev, transform: open ? "rotate(180deg)" : "none" }}>⌄</div>
      </div>
      {open && rows.length > 0 && (
        <div style={rgStyles.tableWrap}>
          <table style={rgStyles.table}>
            <thead>
              <tr>
                <th style={rgStyles.th}>RECOMMENDATION</th>
                <th style={{ ...rgStyles.th, textAlign: "right" }}>POTENTIAL</th>
                <th style={{ ...rgStyles.th, textAlign: "right" }}>COMPLETED</th>
                <th style={{ ...rgStyles.th, textAlign: "right" }}>REALIZED</th>
                <th style={{ ...rgStyles.th, textAlign: "right" }}>AVAILABLE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} style={rgStyles.tr}>
                  <td style={rgStyles.td}><span style={rgStyles.info}>ⓘ</span><a href="#" style={rgStyles.recLink}>{r.name}</a></td>
                  <td style={{ ...rgStyles.td, textAlign: "right" }}>{r.potential}</td>
                  <td style={{ ...rgStyles.td, textAlign: "right" }}>{r.completed}</td>
                  <td style={{ ...rgStyles.td, textAlign: "right", color: r.realized.startsWith("$-") ? "var(--cf-danger)" : "var(--cf-fg-1)" }}>{r.realized}</td>
                  <td style={{ ...rgStyles.td, textAlign: "right" }}>{r.available > 0 ? <a href="#" style={rgStyles.recLink}>{r.available}</a> : <span style={{ color: "var(--cf-fg-4)" }}>0</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
const rgStyles = {
  wrap: { background: "#fff", borderRadius: 10, boxShadow: "var(--shadow-1)", borderLeft: "3px solid var(--cf-teal)", overflow: "hidden", marginBottom: 16 },
  header: { display: "grid", gridTemplateColumns: "2fr repeat(4, 130px) 24px", gap: 24, alignItems: "center", padding: "20px 24px", cursor: "pointer", borderBottom: "1px solid var(--cf-divider)" },
  title: {},
  h3: { fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--cf-navy)", margin: "0 0 4px" },
  sub: { fontSize: 13, color: "var(--cf-fg-3)", margin: 0 },
  metric: { textAlign: "right" },
  mv: { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--cf-navy)", lineHeight: 1 },
  ml: { fontFamily: "var(--font-display)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cf-fg-3)", marginTop: 6, fontWeight: 600 },
  chev: { color: "var(--cf-fg-3)", fontSize: 18, transition: "transform 200ms ease" },
  tableWrap: { padding: "0 12px 12px" },
  table: { width: "100%", borderCollapse: "collapse" },
  th: { fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cf-fg-3)", fontWeight: 700, textAlign: "left", padding: "12px 16px", borderBottom: "1px solid var(--cf-divider)" },
  tr: { borderBottom: "1px solid var(--cf-divider)" },
  td: { padding: "14px 16px", fontSize: 14, color: "var(--cf-fg-1)" },
  info: { color: "var(--cf-fg-4)", marginRight: 8, fontSize: 13 },
  recLink: { color: "var(--cf-blue)", textDecoration: "none", fontWeight: 500 },
};

// ============== TAB BAR (Pending/Available/Finished/Outdated) ==============
function StatusTabs({ active, onChange }) {
  const tabs = [
    { id: "pending", label: "Pending Approval" },
    { id: "available", label: "Available to Execute" },
    { id: "finished", label: "Finished" },
    { id: "outdated", label: "Outdated" },
  ];
  return (
    <div style={tbStyles.row}>
      {tabs.map(t => (
        <button key={t.id} onClick={() => onChange(t.id)}
          style={{ ...tbStyles.tab, ...(active === t.id ? tbStyles.activeTab : {}) }}>
          {t.label}
        </button>
      ))}
    </div>
  );
}
const tbStyles = {
  row: { display: "flex", gap: 0, marginBottom: 20 },
  tab: { background: "var(--cf-blue)", color: "#fff", border: "none", padding: "16px 28px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, cursor: "pointer", flex: 1, opacity: 0.7, transition: "all 150ms" },
  activeTab: { background: "var(--cf-navy)", opacity: 1, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 4 },
};

// ============== ACTION TOOLBAR (EXECUTE / RELOAD / EXPORT) ==============
function ActionToolbar({ selected = 0 }) {
  return (
    <div style={atStyles.bar}>
      <div style={atStyles.left}>
        <span style={atStyles.count}>{selected} selected</span>
      </div>
      <div style={atStyles.right}>
        <button style={{ ...atStyles.btn, background: "#A9B5C7" }}>EXECUTE</button>
        <button style={{ ...atStyles.btn, background: "var(--cf-blue)" }}>RELOAD</button>
        <button style={{ ...atStyles.btn, background: "var(--cf-fg-2)" }}>EXPORT</button>
      </div>
    </div>
  );
}
const atStyles = {
  bar: { display: "flex", alignItems: "center", padding: "10px 0", marginBottom: 10 },
  left: { flex: 1 },
  count: { fontSize: 13, color: "var(--cf-fg-3)" },
  right: { display: "flex", gap: 8 },
  btn: { color: "#fff", border: "none", borderRadius: 4, padding: "8px 16px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11, letterSpacing: "0.06em", cursor: "pointer" },
};

// ============== RESOURCE TABLE ==============
function ResourceTable({ rows = [] }) {
  return (
    <table style={rtStyles.table}>
      <thead>
        <tr>
          <th style={{ ...rtStyles.th, width: 40 }}><input type="checkbox" /></th>
          <th style={rtStyles.th}>RESOURCE ⥯</th>
          <th style={rtStyles.th}>ACCOUNTS ⥯</th>
          <th style={rtStyles.th}>ORGANIZATIONAL UNIT ⥯</th>
          <th style={{ ...rtStyles.th, textAlign: "right" }}>COST ⥯</th>
          <th style={{ ...rtStyles.th, textAlign: "right" }}>POTENTIAL SAVINGS ⥯</th>
          <th style={rtStyles.th}>STATUS ⥯</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} style={rtStyles.tr}>
            <td style={rtStyles.td}><input type="checkbox" /></td>
            <td style={{ ...rtStyles.td, fontFamily: "var(--font-mono)", fontSize: 12 }}>{r.resource}</td>
            <td style={rtStyles.td}>{r.account}</td>
            <td style={rtStyles.td}>{r.ou}</td>
            <td style={{ ...rtStyles.td, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r.cost}</td>
            <td style={{ ...rtStyles.td, textAlign: "right", fontVariantNumeric: "tabular-nums", fontWeight: 600, color: "var(--cf-success)" }}>{r.savings}</td>
            <td style={rtStyles.td}><StatusPill status={r.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
const rtStyles = {
  table: { width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "var(--shadow-1)" },
  th: { fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--cf-fg-3)", fontWeight: 700, textAlign: "left", padding: "14px 16px", borderBottom: "1px solid var(--cf-divider)", background: "var(--cf-surface-2)" },
  tr: { borderBottom: "1px solid var(--cf-divider)" },
  td: { padding: "14px 16px", fontSize: 13, color: "var(--cf-fg-1)" },
};

function StatusPill({ status }) {
  const map = {
    Ready: { bg: "#DCEBFB", fg: "#2A8FEA" },
    Pending: { bg: "#FCEBD2", fg: "#C97000" },
    Running: { bg: "#DCEBFB", fg: "#2A8FEA" },
    Completed: { bg: "#DEF6EA", fg: "#1FB36B" },
    Failed: { bg: "#FADCDC", fg: "#D14545" },
  };
  const c = map[status] || { bg: "var(--cf-divider)", fg: "var(--cf-fg-2)" };
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 999, fontSize: 12, fontWeight: 600, background: c.bg, color: c.fg }}><span style={{ width: 6, height: 6, borderRadius: 999, background: c.fg }} />{status}</span>;
}

// ============== ONBOARDING SPLIT ==============
function OnboardingSplit() {
  return (
    <div style={obStyles.wrap}>
      <div style={obStyles.left}>
        <h1 style={obStyles.h1}>Just a few simple steps and you can start saving!</h1>
        <div style={obStyles.steps}>
          <Step n={1} title="Onboard your AWS Organization" done />
          <Step n={2} title="Allow read access" />
          <Step n={3} title="Approve recommendations" />
        </div>
      </div>
      <div style={obStyles.right}>
        <div style={obStyles.aws}>aws</div>
        <div style={obStyles.curve}>↗</div>
        <button style={obStyles.cta}>Sign in to your management AWS account</button>
        <p style={obStyles.alt}>Or try CloudFix on a <a href="#" style={obStyles.altLink}>single account</a></p>
      </div>
    </div>
  );
}
function Step({ n, title, done }) {
  return (
    <div style={{ ...stepStyles.step, ...(done ? stepStyles.active : {}) }}>
      <div style={{ ...stepStyles.bullet, ...(done ? stepStyles.bulletDone : {}) }}>
        {done ? "✓" : ""}
      </div>
      <div>
        <div style={stepStyles.label}>Step {n}</div>
        <div style={stepStyles.title}>{title}</div>
      </div>
    </div>
  );
}
const obStyles = {
  wrap: { display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 600, color: "#fff" },
  left: { background: "linear-gradient(135deg, #2AC1D6 0%, #1F8FBE 50%, #1F5FAA 100%)", padding: "56px 48px" },
  h1: { fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, lineHeight: 1.2, margin: "0 0 40px", maxWidth: 420 },
  steps: { display: "flex", flexDirection: "column", gap: 12 },
  right: { background: "linear-gradient(135deg, #1F8FBE 0%, #1F5FAA 60%, #1F3A68 100%)", padding: "56px 48px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  aws: { fontFamily: "var(--font-display)", fontSize: 96, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 },
  curve: { fontSize: 32, color: "var(--cf-orange)", marginTop: -12, marginBottom: 56 },
  cta: { background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 6, padding: "12px 22px", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, cursor: "pointer", backdropFilter: "blur(10px)" },
  alt: { fontSize: 13, marginTop: 16, opacity: 0.85 },
  altLink: { color: "#fff", fontWeight: 700, textDecoration: "underline" },
};
const stepStyles = {
  step: { display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", borderRadius: 10, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" },
  active: { background: "rgba(255,255,255,0.22)", border: "1px solid rgba(255,255,255,0.35)" },
  bullet: { width: 28, height: 28, borderRadius: 999, border: "2px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 },
  bulletDone: { background: "#fff", color: "var(--cf-navy)", border: "2px solid #fff" },
  label: { fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700 },
  title: { fontSize: 14, opacity: 0.9 },
};

Object.assign(window, { ConsoleTopBar, Sidebar, StatTile, RecommendationGroup, StatusTabs, ActionToolbar, ResourceTable, StatusPill, OnboardingSplit });
