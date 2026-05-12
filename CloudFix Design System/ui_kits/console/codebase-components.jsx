// codebase-components.jsx
// Atoms + chrome matching gleesonb-aurea/cloudfix-aws@qa cloudfix-ext/ui/apps/web
// Tailwind-class names from the repo are preserved as inline styles where helpful.

const { useState } = React;

/* ===================================================================
   MAIN HEADER
   Source: src/components/MainHeader/MainHeader.tsx
   - h-[70px] absolute, white, top-center nav, welcome+tenant+avatar right.
   =================================================================== */
function MainHeader({ name = "Bob Gleeson", role = "TENANT ADMIN", companyName = "Acme Cloud Operations", active = "dashboard", admin = false, hideRoutes = false }) {
  const items = admin
    ? [{ url: "admin/customers", title: "Customers" }]
    : [
        { url: "dashboard",            title: "Savings\u00A0&\u00A0Opportunities" },
        { url: "reports/recommendations", title: "Reports" },
        { url: "rightspend",           title: "RightSpend" },
        { url: "settings/finders",     title: "Settings" },
        { url: "https://support.cloudfix.com", title: "Help" },
      ];
  const formattedRole = role?.replace(/_/g, " ");

  return (
    <header style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 40,
      height: 70, display: "flex", alignItems: "center", justifyContent: "space-between",
      background: "#fff", padding: "0 20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 15, cursor: "pointer" }}>
        <img alt="CloudFix" src="../../assets/console/cloud_fix_logo_color.svg" height="40" style={{ height: 40, width: "auto" }} />
        {admin && <div style={{ fontSize: 18, color: "#037ADE" }}>Admin</div>}
      </div>

      {!hideRoutes && (
        <nav style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
          display: "flex", gap: 20, fontSize: 14, color: "#1B2A41",
        }}>
          {items.map(it => {
            const isActive = active === it.url || (active === "dashboard" && it.url === "dashboard");
            const isExternal = it.url.startsWith("http");
            return (
              <a key={it.url}
                href={isExternal ? it.url : `#${it.url}`}
                style={{
                  color: isActive ? "#1B2A41" : "#1B2A41",
                  textDecoration: "none",
                  paddingBottom: isActive ? 8 : 0,
                  borderBottom: isActive ? "2px solid #3B82F6" : "2px solid transparent",
                  fontWeight: isActive ? 500 : 400,
                  whiteSpace: "nowrap",
                }}>{it.title}</a>
            );
          })}
        </nav>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "none", fontSize: 12, color: "#474E5F", textAlign: "right" }} className="welcome-block">
          Welcome, <strong style={{ fontWeight: 600 }}>{name}</strong><br />
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#6B7280" }}>{formattedRole}</span>
            <span style={{ color: "#6B7280" }}>·</span>
            <span>{companyName}</span>
          </span>
        </div>
        <style>{`@media (min-width: 1280px) { .welcome-block { display: block !important; } }`}</style>

        <TenantSelector />

        <button style={{
          width: 32, height: 32, padding: 0, border: 0, background: "transparent", cursor: "pointer",
          borderRadius: "50%",
        }} title="Account">
          <img alt="user" src="../../assets/console/user.svg" width="32" height="32" />
        </button>
      </div>
    </header>
  );
}

/* ===================================================================
   TENANT SELECTOR — small cluster of orgs
   =================================================================== */
function TenantSelector() {
  return (
    <button style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "#F1F5FF", border: "1px solid #E5E9F2", borderRadius: 8,
      padding: "6px 10px 6px 8px", cursor: "pointer", fontFamily: "inherit", fontSize: 13, color: "#1B2A41",
    }}>
      <span style={{ width: 22, height: 22, borderRadius: 4, background: "#1C2E5B", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600 }}>AC</span>
      <span style={{ fontWeight: 500 }}>Acme Cloud Ops</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  );
}

/* ===================================================================
   PAGE CHROME — pt-[70px] for the absolute header
   =================================================================== */
function PageMain({ children, padX = 20, padY = 40 }) {
  return (
    <main style={{ paddingTop: 70, paddingLeft: padX, paddingRight: padX, paddingBottom: padY, minHeight: "calc(100vh - 41px)" }}>
      <div style={{ paddingTop: padY }}>{children}</div>
    </main>
  );
}

/* ===================================================================
   BUTTON — atoms/Button/Button.lib.ts
   styleType: glass | white | purple | green | grey | blue | darkBlue | yellow | red
   =================================================================== */
function Button({ children, styleType = "purple", fullSize = false, textSize = 14, icon, disabled = false, onClick }) {
  const variants = {
    glass:    { bg: "rgba(255,255,255,0.2)", color: "#fff", hover: "rgba(255,255,255,0.4)", border: "transparent", padX: 30 },
    white:    { bg: "#fff", color: "#7095F7", hover: "rgba(112,149,247,0.05)", border: "#7095F7", padX: 12 },
    purple:   { bg: "#1278E0", color: "#fff", hoverGrad: "linear-gradient(to right, #24D9BA, #127BE0)", border: "transparent", padX: 12 },
    green:    { bg: "#265A2C", color: "#fff", hover: "#1C4421", border: "transparent", padX: 12 },
    grey:     { bg: "#5E635F", color: "#fff", hover: "#444A44", border: "transparent", padX: 12 },
    blue:     { bg: "#7095F7", color: "#fff", hover: "#5C82E8", border: "transparent", padX: 12 },
    darkBlue: { bg: "#1C2E5B", color: "#fff", hover: "#29419F", border: "transparent", padX: 12 },
    yellow:   { bg: "#FFD614", color: "#000", hover: "#ECC100", border: "transparent", padX: 12 },
    red:      { bg: "#fff", color: "#EF4444", hover: "rgba(239,68,68,0.05)", border: "#EF4444", padX: 12 },
  };
  const v = variants[styleType] || variants.purple;
  const [hover, setHover] = useState(false);
  const bg = hover ? (v.hoverGrad || v.hover) : v.bg;

  return (
    <button onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 5, padding: `12px ${v.padX}px`,
        background: bg,
        color: v.color,
        border: `1px solid ${v.border}`,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "inherit", fontSize: textSize, fontWeight: 500,
        width: fullSize ? "100%" : "auto",
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
        transition: "background 150ms ease",
      }}>
      {icon}
      <span>{children}</span>
    </button>
  );
}

/* ===================================================================
   ALERT — atoms/Alert/Alert.tsx (success | error | info | warning)
   =================================================================== */
function Alert({ messages = [], type = "info", onClose }) {
  const palettes = {
    success: { bg: "#DEF6EA", fg: "#0F5132", border: "#A7E3C0", icon: "✓" },
    error:   { bg: "#FADCDC", fg: "#842029", border: "#F1B0B0", icon: "✕" },
    warning: { bg: "#FCEBD2", fg: "#664D03", border: "#F2CB80", icon: "!" },
    info:    { bg: "#DCEBFB", fg: "#084298", border: "#9EC5F1", icon: "i" },
  };
  const p = palettes[type] || palettes.info;
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      background: p.bg, color: p.fg, border: `1px solid ${p.border}`,
      borderRadius: 10, padding: "12px 16px", fontSize: 14, minWidth: 320,
    }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: p.fg, color: p.bg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>{p.icon}</span>
      <div style={{ flex: 1 }}>
        {messages.map((m, i) => <div key={i} style={{ marginBottom: i < messages.length - 1 ? 4 : 0 }}>{m}</div>)}
      </div>
      {onClose && <button onClick={onClose} style={{ background: "transparent", border: 0, color: p.fg, cursor: "pointer", fontSize: 18, lineHeight: 1 }}>×</button>}
    </div>
  );
}

/* ===================================================================
   LOADER — globals.css `.lds-default` (12-dot ring, #29417F)
   =================================================================== */
function LoadingIcon({ size = 80 }) {
  const dots = Array.from({ length: 12 });
  return (
    <div style={{ position: "relative", width: size, height: size, display: "inline-block" }} className="lds-default-mock">
      {dots.map((_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const r = size / 2 - 7;
        const cx = size / 2 + r * Math.cos(angle - Math.PI / 2) - 3.5;
        const cy = size / 2 + r * Math.sin(angle - Math.PI / 2) - 3.5;
        return <div key={i} style={{
          position: "absolute", width: 7, height: 7, borderRadius: "50%", background: "#29417F",
          left: cx, top: cy,
          animation: `lds-default-mock 1.2s linear infinite`,
          animationDelay: `${-i * 0.1}s`,
        }} />;
      })}
      <style>{`@keyframes lds-default-mock {
        0%, 20%, 80%, 100% { transform: scale(1); }
        50% { transform: scale(1.5); }
      }`}</style>
    </div>
  );
}

/* ===================================================================
   INPUT
   =================================================================== */
function Input({ label, placeholder, type = "text", value, onChange, error, helper, leadingIcon, fullWidth = true }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, width: fullWidth ? "100%" : "auto" }}>
      {label && <label style={{ fontSize: 13, color: "#374151", fontWeight: 500 }}>{label}</label>}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#fff", border: `1px solid ${error ? "#EF4444" : "#D1D5DB"}`, borderRadius: 6,
        padding: "0 12px", height: 40,
      }}>
        {leadingIcon && <span style={{ color: "#9CA3AF" }}>{leadingIcon}</span>}
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}
          style={{ flex: 1, border: 0, outline: "none", fontFamily: "inherit", fontSize: 14, background: "transparent", color: "#111827" }} />
      </div>
      {error && <div style={{ fontSize: 12, color: "#EF4444" }}>{error}</div>}
      {!error && helper && <div style={{ fontSize: 12, color: "#6B7280" }}>{helper}</div>}
    </div>
  );
}

/* ===================================================================
   SWITCH BUTTON — atoms/SwitchButton
   =================================================================== */
function SwitchButton({ on, onToggle, label }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
      <span style={{
        width: 36, height: 20, borderRadius: 999, background: on ? "#1278E0" : "#D1D5DB",
        position: "relative", transition: "background 150ms ease",
      }} onClick={() => onToggle && onToggle(!on)}>
        <span style={{
          position: "absolute", top: 2, left: on ? 18 : 2,
          width: 16, height: 16, borderRadius: "50%", background: "#fff",
          transition: "left 150ms ease", boxShadow: "0 1px 2px rgba(0,0,0,.2)",
        }} />
      </span>
      {label && <span style={{ fontSize: 14, color: "#374151" }}>{label}</span>}
    </label>
  );
}

/* ===================================================================
   PAGE TITLE — atoms/Title (text-4xl font-light 2xl:text-5xl)
   =================================================================== */
function Title({ children, className = "" }) {
  return <h1 style={{ fontSize: 36, fontWeight: 300, margin: 0, color: "#1B2A41", letterSpacing: "-0.01em" }} className={className}>{children}</h1>;
}

/* ===================================================================
   STAT CARD — used in dashboard charts row
   =================================================================== */
function StatBlock({ label, value, sub, accent = "#1C2E5B" }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 10, padding: "20px 24px",
      border: "1px solid #E5E7EB", minWidth: 0,
    }}>
      <div style={{ fontSize: 12, color: "#6B7280", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 30, fontWeight: 600, color: accent, lineHeight: 1.1, fontVariantNumeric: "tabular-nums" }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "#6B7280", marginTop: 6 }}>{sub}</div>}
    </div>
  );
}

/* ===================================================================
   RECOMMENDATION ROW (table)
   =================================================================== */
function RecRow({ name, potential, completed, realized, available, status, onClick }) {
  const ready = available > 0;
  return (
    <tr onClick={onClick} style={{ cursor: "pointer", borderBottom: "1px solid #F3F4F6" }}
      onMouseEnter={(e) => e.currentTarget.style.background = "#F9FAFB"}
      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
      <td style={{ padding: "14px 16px", fontSize: 14, color: "#111827", fontWeight: 500 }}>{name}</td>
      <td style={{ padding: "14px 16px", fontSize: 14, color: ready ? "#19CDA2" : "#9CA3AF", fontWeight: 600, textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{potential}</td>
      <td style={{ padding: "14px 16px", fontSize: 14, color: "#1B2A41", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{completed}</td>
      <td style={{ padding: "14px 16px", fontSize: 14, color: "#1B2A41", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{realized}</td>
      <td style={{ padding: "14px 16px", fontSize: 14, color: ready ? "#1C2E5B" : "#6B7280", textAlign: "center", fontWeight: ready ? 600 : 400 }}>{available}</td>
    </tr>
  );
}

/* ===================================================================
   EFFORT-TIER GROUP — header row + body
   =================================================================== */
function EffortGroup({ tier, subtitle, count, totals, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const TIER_COLOR = { Easy: "#19CDA2", Medium: "#F7CD52", Advanced: "#D04C49", Reservations: "#BA9EBA", "Best Practices": "#7940F2", "Manual Fixes": "#14C0FA", Monitoring: "#0096FF" };
  const c = TIER_COLOR[tier] || "#232F3E";

  return (
    <section style={{ background: "#fff", borderRadius: 10, border: "1px solid #E5E7EB", marginBottom: 16, overflow: "hidden" }}>
      <header onClick={() => setOpen(!open)} style={{
        display: "flex", alignItems: "center", padding: "16px 20px", cursor: "pointer",
        borderBottom: open ? "1px solid #F3F4F6" : "none",
      }}>
        <div style={{ width: 8, height: 28, borderRadius: 2, background: c, marginRight: 14 }} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#1B2A41" }}>{tier}</h2>
            <span style={{ fontSize: 12, color: "#6B7280" }}>{count} finders</span>
          </div>
          <div style={{ fontSize: 13, color: "#6B7280", marginTop: 2 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <Tot label="Potential"  value={totals.potential}  color="#19CDA2" />
          <Tot label="Completed"  value={totals.completed}  color="#1B2A41" />
          <Tot label="Realized"   value={totals.realized}   color="#1B2A41" />
          <Tot label="Available"  value={totals.available}  color="#1C2E5B" />
          <span style={{ fontSize: 18, color: "#9CA3AF", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 150ms" }}>⌄</span>
        </div>
      </header>
      {open && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#FAFBFD" }}>
              <th style={th}>Recommendation</th>
              <th style={{ ...th, textAlign: "right" }}>Potential</th>
              <th style={{ ...th, textAlign: "right" }}>Completed</th>
              <th style={{ ...th, textAlign: "right" }}>Realized</th>
              <th style={{ ...th, textAlign: "center" }}>Available</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      )}
    </section>
  );
}
const th = { padding: "10px 16px", fontSize: 11, fontWeight: 500, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.04em", textAlign: "left", borderBottom: "1px solid #E5E7EB" };
function Tot({ label, value, color }) {
  return (
    <div style={{ textAlign: "right", minWidth: 80 }}>
      <div style={{ fontSize: 11, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color, fontVariantNumeric: "tabular-nums" }}>{value}</div>
    </div>
  );
}

/* ===================================================================
   STATUS PILL
   =================================================================== */
function StatusPill({ status }) {
  const map = {
    Ready:     { bg: "#DCEBFB", fg: "#1C2E5B" },
    Pending:   { bg: "#FCEBD2", fg: "#664D03" },
    Running:   { bg: "#DCEBFB", fg: "#0F5C8A" },
    Completed: { bg: "#DEF6EA", fg: "#0F5132" },
    Failed:    { bg: "#FADCDC", fg: "#842029" },
    Postponed: { bg: "#F3F4F6", fg: "#374151" },
  };
  const p = map[status] || map.Ready;
  return <span style={{ display: "inline-flex", alignItems: "center", padding: "3px 10px", borderRadius: 999, background: p.bg, color: p.fg, fontSize: 12, fontWeight: 500 }}>{status}</span>;
}

/* ===================================================================
   DONUT CHART (svg) — for Charts row, cycles through tier colors
   =================================================================== */
function Donut({ size = 140, segments }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  let cum = 0;
  const cx = size / 2, cy = size / 2;
  const r = size / 2 - 12;
  const innerR = r - 22;
  const arcs = segments.map((s, i) => {
    const a0 = (cum / total) * Math.PI * 2 - Math.PI / 2;
    cum += s.value;
    const a1 = (cum / total) * Math.PI * 2 - Math.PI / 2;
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const ix1 = cx + innerR * Math.cos(a1), iy1 = cy + innerR * Math.sin(a1);
    const ix0 = cx + innerR * Math.cos(a0), iy0 = cy + innerR * Math.sin(a0);
    return <path key={i} d={`M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${large} 0 ${ix0} ${iy0} Z`} fill={s.color} />;
  });
  return <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>{arcs}</svg>;
}

/* ===================================================================
   SIDE PANEL HEADER — used in Recommendation detail
   =================================================================== */
function DashHeaderBanner({ title, subtitle }) {
  return (
    <div style={{
      background: "linear-gradient(to right, #039EA8, #0473B8)",
      color: "#fff", borderRadius: 10, padding: "20px 24px", marginBottom: 20,
    }}>
      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.85, marginBottom: 4 }}>{subtitle}</div>
      <div style={{ fontSize: 24, fontWeight: 600 }}>{title}</div>
    </div>
  );
}

/* ===================================================================
   Expose to window so views file can use them
   =================================================================== */
Object.assign(window, {
  MainHeader, TenantSelector, PageMain,
  Button, Alert, LoadingIcon, Input, SwitchButton, Title,
  StatBlock, RecRow, EffortGroup, Tot, StatusPill, Donut, DashHeaderBanner,
});
