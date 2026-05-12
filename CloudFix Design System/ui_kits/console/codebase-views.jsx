// codebase-views.jsx — corrected against real customer screenshots
// Sources: 6 screenshots from CloudFix Support (exiger.com tenant)

const TIER = {
  Easy:        { color: "#19CDA2", subtitle: "Safe, fully automatable savings." },
  Medium:      { color: "#F7CD52", subtitle: "Best performed in an off-peak time." },
  Advanced:    { color: "#D04C49", subtitle: "Best performed in a maintenance window." },
  "Best Practice": { color: "#7940F2", subtitle: "Incorporates best practices to achieve optimal solutions." },
  Reservation: { color: "#BA9EBA", subtitle: "Applies reservations from fully utilized resources to lower the cost." },
  "Manual Fixes": { color: "#14C0FA", subtitle: "Manual remediation steps with CloudFix guidance." },
  Monitoring:  { color: "#0096FF", subtitle: "Visibility-only finders for ongoing monitoring." },
};

/* =====================================================================
   STAT BANNER — full-bleed gradient with three donut KPIs
   Matches Screenshot 121032: $77.8K Reservation, $54.09K Completed, $44.82K Realized
   ===================================================================== */
function StatBanner({ kpis }) {
  return (
    <div style={{
      background: "linear-gradient(to right, #04BCC6 0%, #0686D9 100%)",
      padding: "32px 24px",
      marginLeft: -20, marginRight: -20, // bleed past page padding
      marginBottom: 0,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1400, margin: "0 auto" }}>
        {kpis.map((k, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative" }}>
            <KpiDonut value={k.value} label={k.label} segments={k.segments} />
            <button title={k.tooltip} style={{
              background: "transparent", border: "1.5px solid rgba(255,255,255,.6)",
              borderRadius: "50%", width: 18, height: 18, color: "#fff", fontSize: 11,
              display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "help",
            }}>i</button>
            {i < kpis.length - 1 && <div style={{ position: "absolute", right: -12, top: "20%", bottom: "20%", width: 1, background: "rgba(255,255,255,.25)" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}
function KpiDonut({ value, label, segments }) {
  const size = 180;
  const total = segments.reduce((s, x) => s + x.value, 0);
  let cum = 0;
  const cx = size / 2, cy = size / 2;
  const r = 78, innerR = 64;
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
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size}>{arcs}</svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: 28, fontWeight: 600, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 13, marginTop: 4, opacity: 0.95 }}>{label}</div>
      </div>
    </div>
  );
}

/* =====================================================================
   FILTER BAR — OU / Accounts / Regions / Tags / Apply / Clear
   ===================================================================== */
function FilterBar() {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "16px 0" }}>
      <FilterSelect label="All OUs" />
      <FilterSelect label="All Accounts" />
      <FilterSelect label="All Regions" />
      <FilterSelect label="All Tags" />
      <button style={{ background: "#3B82F6", color: "#fff", border: 0, borderRadius: 6, padding: "8px 18px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Apply Filters</button>
      <button style={{ background: "#fff", color: "#3B82F6", border: "1px solid #3B82F6", borderRadius: 6, padding: "8px 18px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Clear Filters</button>
    </div>
  );
}
function FilterSelect({ label }) {
  return (
    <button style={{
      display: "inline-flex", alignItems: "center", justifyContent: "space-between", gap: 8,
      background: "#fff", border: "1px solid #D1D5DB", borderRadius: 6,
      padding: "8px 12px", fontSize: 13, color: "#374151", cursor: "pointer", fontFamily: "inherit", minWidth: 140,
    }}>
      <span>{label}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  );
}

/* =====================================================================
   TIER ROW — single-line: color edge | name+count+subtitle | 4 metric cols | chevron
   Matches Screenshot 121032 exactly
   ===================================================================== */
function TierRow({ name, count, potential, completed, realized, available, onClick }) {
  const t = TIER[name];
  // Some rows show only Potential + Available (Best Practice) — handle that with nulls
  const showAllMetrics = completed !== null;
  return (
    <div onClick={onClick} style={{
      display: "grid",
      gridTemplateColumns: showAllMetrics
        ? "8px 1fr 130px 130px 130px 200px 24px"
        : "8px 1fr 130px 130px 130px 200px 24px",
      alignItems: "center", gap: 16,
      borderBottom: "1px solid #E5E7EB", padding: "20px 0", cursor: "pointer",
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = "#FAFBFD"}
    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
      <div style={{ width: 4, height: 48, background: t.color, borderRadius: 2, marginLeft: 4 }} />
      <div style={{ paddingLeft: 12 }}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "#1B2A41" }}>
          {name} <span style={{ color: "#6B7280", fontWeight: 400 }}>({count})</span>
        </div>
        <div style={{ fontSize: 13, color: "#6B7280", marginTop: 2 }}>{t.subtitle}</div>
      </div>
      <Metric value={potential} label="Potential Savings" />
      <Metric value={showAllMetrics ? completed : ""} label={showAllMetrics ? "Completed Savings" : ""} />
      <Metric value={showAllMetrics ? realized : ""} label={showAllMetrics ? "Realized Savings" : ""} />
      <Metric value={available} label="Recommendations Available" />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>
  );
}
function Metric({ value, label }) {
  if (!value) return <div />;
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 20, fontWeight: 600, color: "#1B2A41", fontVariantNumeric: "tabular-nums" }}>{value}</div>
      <div style={{ fontSize: 11, color: "#6B7280", marginTop: 2 }}>{label}</div>
    </div>
  );
}

/* =====================================================================
   DASHBOARD — Savings & Opportunities (Screenshot 121032 + 121042)
   ===================================================================== */
function DashboardView() {
  return (
    <>
      <MainHeader active="dashboard" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <main style={{ paddingTop: 70, paddingLeft: 20, paddingRight: 20, paddingBottom: 40, minHeight: "calc(100vh - 41px)" }}>
        <StatBanner kpis={[
          { value: "$77.8K",  label: "Reservation", segments: [{ value: 30, color: "#19CDA2" }, { value: 60, color: "#BA9EBA" }, { value: 10, color: "#D04C49" }] },
          { value: "$54.09K", label: "Completed",   segments: [{ value: 70, color: "#D04C49" }, { value: 8,  color: "#F7CD52" }, { value: 22, color: "#19CDA2" }] },
          { value: "$44.82K", label: "Realized",    segments: [{ value: 65, color: "#D04C49" }, { value: 5,  color: "#F7CD52" }, { value: 30, color: "#19CDA2" }] },
        ]} />

        <div style={{ background: "#fff", padding: "0 24px 12px", marginLeft: -20, marginRight: -20 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: "#1B2A41", margin: 0, paddingTop: 24 }}>Recommendations</h2>
          <FilterBar />
        </div>

        <div style={{ background: "#fff", padding: "0 24px", marginLeft: -20, marginRight: -20 }}>
          <TierRow name="Easy"        count={18} potential="$208.3K" completed="$2.7K"  realized="$2.7K"  available={277} />
          <TierRow name="Medium"      count={28} potential="$13.1K"  completed="$2.1K"  realized="$1.3K"  available={168} />
          <TierRow name="Advanced"    count={41} potential="$204.1K" completed="$49.3K" realized="$40.9K" available={375} />
          <TierRow name="Best Practice" count={11} potential="" completed={null} realized="" available={933} />
          <TierRow name="Reservation" count={14} potential="$77.8K"  completed="$0"     realized="$0"     available={28} />
          <TierRow name="Manual Fixes" count={6} potential="$2.4K"   completed="$0"     realized="$0"     available={42} />
          <TierRow name="Monitoring"  count={9}  potential="" completed={null} realized="" available={156} />
        </div>
      </main>
    </>
  );
}

/* =====================================================================
   RECOMMENDATION DETAIL — Screenshot 121104
   "EBS Optimize IO and Throughput" with Generate Runbooks / Available to Execute / Finished tabs
   ===================================================================== */
function RecommendationDetailView() {
  const [tab, setTab] = useState("available");
  return (
    <>
      <MainHeader active="dashboard" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <main style={{ paddingTop: 70, paddingLeft: 24, paddingRight: 24, paddingBottom: 40 }}>
        <div style={{ paddingTop: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#D04C49", letterSpacing: "0.08em", textTransform: "uppercase" }}>RECOMMENDATION</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: 4 }}>
            <h1 style={{ fontSize: 22, fontWeight: 600, color: "#1B2A41", margin: 0 }}>EBS Optimize Provisioned IO and Throughput</h1>
            <button style={{ background: "transparent", border: 0, fontSize: 22, color: "#9CA3AF", cursor: "pointer" }}>×</button>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 11, color: "#6B7280", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500 }}>POTENTIAL SAVINGS</div>
            <div style={{ fontSize: 20, fontWeight: 500, color: "#1B2A41", marginTop: 4 }}>$5,921</div>
          </div>

          {/* Three big tabs + Outdated pill */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24, gap: 12 }}>
            <div style={{ display: "flex", gap: 8, flex: 1 }}>
              {[
                ["runbooks", "Generate Runbooks", "#7095F7"],
                ["available", "Available to Execute", "#1C2E5B"],
                ["finished", "Finished", "#7095F7"],
              ].map(([k, l, c]) => (
                <button key={k} onClick={() => setTab(k)} style={{
                  flex: 1, padding: "14px 16px", borderRadius: "8px 8px 0 0",
                  border: 0, fontFamily: "inherit", fontSize: 14, fontWeight: 500, cursor: "pointer",
                  background: tab === k ? c : (k === "available" ? "#1C2E5B" : "#7095F7"),
                  color: "#fff",
                  opacity: tab === k ? 1 : 0.55,
                }}>{l}</button>
              ))}
            </div>
            <button style={{ background: "#7095F7", color: "#fff", border: 0, borderRadius: 4, padding: "8px 24px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", alignSelf: "flex-start" }}>Outdated</button>
          </div>

          {/* Action toolbar (Browse / Execute / Reload / Export) */}
          <div style={{ background: "#fff", padding: "12px 0", display: "flex", justifyContent: "flex-end", gap: 6, borderBottom: "1px solid #E5E7EB" }}>
            <ActionBtn>BROWSE</ActionBtn>
            <ActionBtn>EXECUTE</ActionBtn>
            <ActionBtn>RELOAD</ActionBtn>
            <ActionBtn variant="dark">EXPORT</ActionBtn>
          </div>

          {/* Resource table */}
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
            <thead>
              <tr>
                {["", "RESOURCE", "ACCOUNT", "ORGANIZATIONAL UNIT", "REGION", "COST", "POTENTIAL SAVINGS", "DETAILS", "STATUS", "SNOOZE"].map((h, i) => (
                  <th key={i} style={{ padding: "12px 12px", fontSize: 11, fontWeight: 600, color: "#1B2A41", textAlign: i === 0 ? "left" : (i === 5 || i === 6 ? "right" : "left"), borderBottom: "1px solid #E5E7EB", letterSpacing: "0.04em" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>{h} {h && <SortIcon />}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["vol-0xxx623ac155606", "Brightwave",  "Root/Capita Public Service/Learning Services",      "eu-west-2", "$123", "$58", "Ready"],
                ["ITHODFRORHVPRYHA - Data (vol-037d0cb22ed154b7b)", "IT Cloud", "Root/Capita Experience/Customer Solutions", "eu-west-1", "$673", "$55", "Ready"],
                ["ITRACSPMACVDARS - H drive (vol-085xcad2105578001)", "IT Cloud", "Root/Capita Experience/Customer Solutions", "eu-west-1", "$309", "$60", "Ready"],
                ["TeamEDV2_LIV_SQL_E Drive (vol-02xb0xxbxx04708ac6)", "Brightwave", "Root/Capita Public Service/Learning Services", "eu-west-2", "$260", "$31", "Ready"],
              ].map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #F3F4F6" }}>
                  <td style={{ padding: "12px 12px" }}><input type="checkbox" /></td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#3B82F6", fontWeight: 500 }}>{r[0]}</td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#1B2A41" }}>{r[1]}</td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#1B2A41" }}>{r[2]}</td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#1B2A41" }}>{r[3]}</td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#1B2A41", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r[4]}</td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#1B2A41", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r[5]}</td>
                  <td style={{ padding: "12px 12px" }}>
                    <button style={{ background: "#3B82F6", color: "#fff", border: 0, borderRadius: 4, padding: "5px 14px", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Details</button>
                  </td>
                  <td style={{ padding: "12px 12px", fontSize: 13, color: "#D04C49", fontWeight: 500 }}>{r[6]}</td>
                  <td style={{ padding: "12px 12px", color: "#9CA3AF", fontSize: 16 }}>🔔</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
function SortIcon() {
  return <svg width="10" height="10" viewBox="0 0 12 12" fill="#9CA3AF"><path d="M6 0l4 4H2zM6 12l-4-4h8z"/></svg>;
}
function ActionBtn({ children, variant }) {
  const dark = variant === "dark";
  return (
    <button style={{
      background: dark ? "#374151" : "#19CDA2",
      color: "#fff", border: 0, borderRadius: 4,
      padding: "6px 18px", fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
      cursor: "pointer", fontFamily: "inherit",
    }}>{children}</button>
  );
}

/* =====================================================================
   RESOURCE DETAIL MODAL — Screenshot 121116
   EBS Volume Optimize Provisioned IOPS and Throughput
   ===================================================================== */
function ResourceDetailView() {
  return (
    <>
      <MainHeader active="dashboard" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <main style={{ paddingTop: 70, background: "#FAFBFD", minHeight: "calc(100vh - 70px)" }}>
        {/* Modal-style sheet */}
        <div style={{ background: "#fff", padding: "24px 32px", maxWidth: 1100, margin: "20px auto 0", borderRadius: 8, border: "1px solid #E5E7EB", position: "relative" }}>
          <button style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: 0, fontSize: 22, color: "#9CA3AF", cursor: "pointer" }}>×</button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 }}>
            <img src="../../assets/console/cloud_fix_icon.svg" alt="" height="22" />
            <h1 style={{ fontSize: 18, fontWeight: 600, color: "#1B2A41", margin: 0 }}>EBS Volume Optimize Provisioned IOPS and Throughput</h1>
          </div>
          <p style={{ fontSize: 13, color: "#1B2A41", textAlign: "left", margin: "16px 0 24px" }}>
            CloudFix has identified an opportunity to optimize the EBS volume configuration for the following volume: vol-0e1e0820aac159416
          </p>

          <button style={{ background: "#fff", color: "#3B82F6", border: "1px solid #3B82F6", borderRadius: 6, padding: "8px 16px", fontSize: 13, fontWeight: 500, cursor: "pointer", fontFamily: "inherit", marginBottom: 16 }}>Recommendation</button>

          <table style={{ width: "100%", maxWidth: 700, margin: "0 auto", borderCollapse: "collapse", border: "1px solid #E5E7EB" }}>
            <thead>
              <tr style={{ background: "#F1F5FF" }}>
                {["Configuration", "Current", "Optimized"].map(h => (
                  <th key={h} style={{ padding: "10px 16px", fontSize: 13, fontWeight: 600, color: "#1B2A41", textAlign: "left", border: "1px solid #E5E7EB" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Volume ID", "vol-0e1e0820aac159416", "vol-0e1e0820aac159416"],
                ["Volume Type", "gp3", "gp3"],
                ["Volume Size", "500 GB", "500 GB"],
                ["Provisioned IOPS", "3000", "3000"],
                ["Provisioned Throughput", "250 MB/s", "125 MB/s"],
                ["Annual Cost", "$522.87", "$464.78"],
              ].map(r => (
                <tr key={r[0]}>
                  <td style={tdC}>{r[0]}</td>
                  <td style={tdC}>{r[1]}</td>
                  <td style={tdC}>{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ fontSize: 14, fontWeight: 600, color: "#1B2A41", margin: "32px 0 12px" }}>Volume Throughput Analysis</h3>
          <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 6, padding: 20 }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 12, justifyContent: "center" }}>
              {["1","2","3","4","6","8","12","24"].map(d => (
                <button key={d} style={{
                  width: 32, height: 28, fontSize: 12, fontWeight: 500,
                  background: d === "24" ? "#3B82F6" : "#fff",
                  color: d === "24" ? "#fff" : "#374151",
                  border: "1px solid #D1D5DB", borderRadius: 4, cursor: "pointer", fontFamily: "inherit",
                }}>{d}</button>
              ))}
            </div>
            <div style={{ textAlign: "center", fontSize: 14, fontWeight: 600, color: "#1B2A41", marginBottom: 12 }}>Volume Throughput Analysis</div>
            <ThroughputChart />
            <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 12, fontSize: 12, color: "#6B7280" }}>
              <Lgnd c="#19CDA2" l="Current Throughput" />
              <Lgnd c="#D04C49" l="Recommended Throughput" />
              <Lgnd c="#3B82F6" l="Actual Usage" />
            </div>
          </div>

          {/* Resource Tags strip */}
          <div style={{
            background: "linear-gradient(to right, #7095F7, #BA9EBA)",
            color: "#fff", padding: "12px 16px", marginTop: 24, borderRadius: 4,
            display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", fontSize: 12,
          }}>
            <span style={{ fontWeight: 600, marginRight: 4 }}>Resource Tags</span>
            {[
              ["cloudfixexecutionDate", "2025-12-04"],
              ["Service", "Bitv3"],
              ["cloudfixfixerid", "Gp2Gp3"],
              ["cloudfixoriginalResourceid", "vol-0e1e0820aac159416"],
              ["Client", "LED"],
              ["Author", "DHJ"],
              ["Type", "ssd-gp2"],
              ["cloudfix_account_owner", "dattatray.pawar@capita.com"],
              ["cloudfix_l4t", "Brightwave"],
              ["cloudfix_l5t", "Project Fin Ops"],
            ].map(([k, v]) => (
              <span key={k} style={{ background: "rgba(255,255,255,.18)", padding: "3px 8px", borderRadius: 999 }}>
                {k}: <strong style={{ fontWeight: 600 }}>{v}</strong>
              </span>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 12, color: "#9CA3AF", fontStyle: "italic" }}>
            This report was generated by CloudFix to help you optimize your AWS resources and reduce costs
          </div>
        </div>
      </main>
    </>
  );
}
const tdC = { padding: "8px 16px", fontSize: 13, color: "#1B2A41", border: "1px solid #E5E7EB" };
function Lgnd({ c, l }) {
  return <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
    <span style={{ width: 12, height: 12, background: c, borderRadius: 2 }} /> {l}
  </span>;
}
function ThroughputChart() {
  // Mimic the flat-line chart from the screenshot
  return (
    <svg viewBox="0 0 600 200" width="100%" height="200">
      {/* grid */}
      {[0, 1, 2, 3, 4, 5, 6].map(i => (
        <line key={i} x1="40" x2="580" y1={20 + i * 25} y2={20 + i * 25} stroke="#E5E7EB" strokeDasharray="2 4" />
      ))}
      {/* y labels */}
      {["275","225","200","150","100","50","0"].map((v, i) => (
        <text key={i} x="35" y={24 + i * 25} fontSize="10" fill="#6B7280" textAnchor="end">{v}</text>
      ))}
      <text x="20" y="110" fontSize="10" fill="#6B7280" textAnchor="middle" transform="rotate(-90 20 110)">Throughput (MB/s)</text>
      {/* current — green */}
      <line x1="40" x2="580" y1="45" y2="45" stroke="#19CDA2" strokeWidth="2.5" />
      {/* recommended — red */}
      <line x1="40" x2="580" y1="120" y2="120" stroke="#D04C49" strokeWidth="2.5" />
      {/* x axis labels */}
      {["0820","0827","0903","0910","0917","0924","1001","1008","1015","1022"].map((t, i) => (
        <text key={i} x={60 + i * 58} y={195} fontSize="9" fill="#6B7280" textAnchor="middle" transform={`rotate(-30 ${60 + i * 58} 195)`}>{t}</text>
      ))}
      <text x="310" y="200" fontSize="10" fill="#1B2A41" textAnchor="middle" fontWeight="600">Days</text>
    </svg>
  );
}

/* =====================================================================
   REPORTS / SAVINGS — Screenshot 121143
   Tabbed view, gradient bg, big Savings stacked area chart
   ===================================================================== */
function ReportsView() {
  const [tab, setTab] = useState("savings");
  return (
    <>
      <MainHeader active="reports/recommendations" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <main style={{ paddingTop: 70, background: "linear-gradient(to right, #04BCC6, #0686D9)", minHeight: "calc(100vh - 70px)" }}>
        <div style={{ padding: "24px 24px 40px", maxWidth: 1400, margin: "0 auto" }}>
          {/* Tab strip */}
          <div style={{ display: "flex", gap: 4, marginBottom: 0 }}>
            {[
              ["recs", "Recommendations"],
              ["bench", "Benchmark"],
              ["savings", "Savings"],
              ["realized", "Realized Savings"],
              ["budget", "Budget Alignment"],
              ["all", "All Recommendations"],
            ].map(([k, l]) => (
              <button key={k} onClick={() => setTab(k)} style={{
                background: tab === k ? "#fff" : "rgba(255,255,255,.7)",
                color: "#1B2A41",
                border: 0, padding: "12px 20px",
                borderRadius: "8px 8px 0 0",
                fontFamily: "inherit", fontSize: 13, fontWeight: 500,
                cursor: "pointer",
                opacity: tab === k ? 1 : 0.85,
              }}>{l}</button>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: "0 8px 8px 8px", padding: 24 }}>
            {/* Filters */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr) auto auto", gap: 12, marginBottom: 24, alignItems: "end" }}>
              <FilterField label="Organizational Units" value="All OUs" />
              <FilterField label="Accounts" value="All Accounts" />
              <FilterField label="Finders" value="All Finders" />
              <FilterField label="Start Date" value="Start Date" placeholder />
              <FilterField label="End Date" value="End Date" placeholder />
              <button style={{ background: "#7095F7", color: "#fff", border: 0, borderRadius: 4, padding: "9px 16px", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Reset Filters</button>
              <button style={{ background: "#374151", color: "#fff", border: 0, borderRadius: 4, padding: "9px 16px", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit" }}>Export to CSV</button>
            </div>

            {/* Stacked area chart */}
            <SavingsAreaChart />

            <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 16, fontSize: 12, color: "#1B2A41" }}>
              <Lgnd c="#A4D4B4" l="Potential Savings" />
              <Lgnd c="#7095F7" l="Completed Savings" />
            </div>
          </div>

          {/* Monthly Results */}
          <div style={{ background: "#fff", borderRadius: 8, padding: 24, marginTop: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 600, color: "#1B2A41", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 6 }}>
              Monthly Results
              <span style={{ width: 16, height: 16, borderRadius: "50%", border: "1px solid #6B7280", color: "#6B7280", fontSize: 10, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>i</span>
            </h3>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #E5E7EB" }}>
                  <th style={{ padding: "10px 8px", fontSize: 11, fontWeight: 600, color: "#1B2A41", textAlign: "left", letterSpacing: "0.04em" }}>MONTH ↑↓</th>
                  <th style={{ padding: "10px 8px", fontSize: 11, fontWeight: 600, color: "#1B2A41", textAlign: "right", letterSpacing: "0.04em" }}>POTENTIAL SAVINGS ↑↓</th>
                  <th style={{ padding: "10px 8px", fontSize: 11, fontWeight: 600, color: "#1B2A41", textAlign: "right", letterSpacing: "0.04em" }}>COMPLETED SAVINGS ↑↓</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["May 2026", "$15,247", "$8,231"],
                  ["Apr 2026", "$22,108", "$12,640"],
                  ["Mar 2026", "$18,540", "$9,872"],
                  ["Feb 2026", "$31,420", "$22,150"],
                  ["Jan 2026", "$42,810", "$31,200"],
                ].map(r => (
                  <tr key={r[0]} style={{ borderBottom: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "10px 8px", fontSize: 13, color: "#1B2A41" }}>{r[0]}</td>
                    <td style={{ padding: "10px 8px", fontSize: 13, color: "#1B2A41", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r[1]}</td>
                    <td style={{ padding: "10px 8px", fontSize: 13, color: "#1B2A41", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
function FilterField({ label, value, placeholder }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: "#1B2A41", letterSpacing: "0.02em" }}>{label}</label>
      <button style={{
        display: "inline-flex", alignItems: "center", justifyContent: "space-between",
        background: "#fff", border: "1px solid #D1D5DB", borderRadius: 4,
        padding: "7px 10px", fontSize: 12,
        color: placeholder ? "#9CA3AF" : "#374151",
        cursor: "pointer", fontFamily: "inherit",
      }}>
        <span>{value}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
    </div>
  );
}
function SavingsAreaChart() {
  // Two stacked areas, completed (purple/blue) below, potential (green) above
  const W = 1200, H = 320, PL = 60, PR = 20, PT = 20, PB = 60;
  const months = 26;
  const completed = Array.from({ length: months }, (_, i) => i < 6 ? 5 : i < 12 ? 30 + i * 4 : 80 + i * 4);
  const potential = Array.from({ length: months }, (_, i) => i < 6 ? 8 : i < 12 ? 50 + i * 5 : 130 + i * 8);
  const xStep = (W - PL - PR) / (months - 1);
  const yScale = (v) => H - PB - (v / 400) * (H - PT - PB);
  const xAt = (i) => PL + i * xStep;

  const path = (vals) => {
    let d = `M ${xAt(0)} ${H - PB}`;
    vals.forEach((v, i) => d += ` L ${xAt(i)} ${yScale(v)}`);
    d += ` L ${xAt(vals.length - 1)} ${H - PB} Z`;
    return d;
  };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ height: 320 }}>
      {/* y axis */}
      {["$0","$100,000","$200,000","$300,000","$400,000"].map((v, i) => {
        const y = H - PB - (i * 100 / 400) * (H - PT - PB);
        return (
          <g key={v}>
            <line x1={PL} x2={W - PR} y1={y} y2={y} stroke="#E5E7EB" strokeDasharray="2 4" />
            <text x={PL - 8} y={y + 4} fontSize="11" fill="#6B7280" textAnchor="end" fontVariantNumeric="tabular-nums">{v}</text>
          </g>
        );
      })}
      {/* areas */}
      <path d={path(potential)} fill="rgba(164, 212, 180, .65)" />
      <path d={path(completed)} fill="rgba(112, 149, 247, .65)" />
      {/* x labels */}
      {Array.from({ length: months }, (_, i) => i).filter(i => i % 2 === 0).map(i => (
        <text key={i} x={xAt(i)} y={H - PB + 14} fontSize="9" fill="#6B7280" textAnchor="end" transform={`rotate(-50 ${xAt(i)} ${H - PB + 14})`}>
          {`${String((i % 12) + 1).padStart(2, "0")}/01/${i < 12 ? "2025" : "2026"}`}
        </text>
      ))}
    </svg>
  );
}

/* =====================================================================
   RIGHTSPEND — Screenshot 121157
   Daily Compute Spend Trend + Commitment Coverage Analysis
   ===================================================================== */
function RightSpendView() {
  return (
    <>
      <MainHeader active="rightspend" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <main style={{ paddingTop: 70, background: "linear-gradient(to right, #04BCC6, #0686D9)", minHeight: "calc(100vh - 70px)" }}>
        <div style={{ padding: "24px 24px 40px", maxWidth: 1400, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

          <div style={{ background: "#fff", borderRadius: 8, padding: 24 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "#1B2A41", margin: "0 0 8px" }}>Daily Compute Spend Trend</h2>
            <DailyTrendChart />
            <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 8, fontSize: 12, color: "#1B2A41" }}>
              <Lgnd c="#3B82F6" l="On-Demand Cost" />
              <Lgnd c="#D04C49" l="Trend Line" />
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 8, padding: 24 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "#1B2A41", margin: "0 0 8px" }}>Commitment Coverage Analysis</h2>
            <CoverageChart />
            <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 8, fontSize: 11, color: "#1B2A41", flexWrap: "wrap" }}>
              <Lgnd c="#19CDA2" l="SP EC2 Covered" />
              <Lgnd c="#7095F7" l="SP Fargate Covered" />
              <Lgnd c="#BA9EBA" l="SP Lambda Covered" />
              <Lgnd c="#F7CD52" l="SP Waste" />
              <Lgnd c="#1278E0" l="RI Covered" />
              <Lgnd c="#D04C49" l="RI Waste" />
              <Lgnd c="#FFA500" l="EC2 On-Demand" />
              <Lgnd c="#A8DADC" l="Fargate On-Demand" />
              <Lgnd c="#9F86C0" l="Lambda On-Demand" />
              <Lgnd c="#94A3B8" l="All Undiscounted" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
function DailyTrendChart() {
  const W = 1200, H = 280, PL = 60, PR = 20, PT = 20, PB = 60;
  // Spiky blue line that drops mid-chart, plus red trend line
  const days = 100;
  const data = Array.from({ length: days }, (_, i) => {
    const base = i < 35 ? 1450 : i < 50 ? 1180 : i < 60 ? 1080 : 1100;
    return base + (Math.sin(i * 1.7) * 30) + (Math.sin(i * 3.1) * 20);
  });
  const yScale = (v) => H - PB - (v / 1600) * (H - PT - PB);
  const xStep = (W - PL - PR) / (days - 1);
  const linePath = data.map((v, i) => `${i === 0 ? "M" : "L"} ${PL + i * xStep} ${yScale(v)}`).join(" ");
  const trendPath = `M ${PL} ${yScale(1380)} L ${W - PR} ${yScale(1140)}`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ height: 280 }}>
      {[0, 400, 800, 1200, 1600].map(v => {
        const y = yScale(v);
        return <g key={v}>
          <line x1={PL} x2={W - PR} y1={y} y2={y} stroke="#E5E7EB" strokeDasharray="2 4" />
          <text x={PL - 6} y={y + 4} fontSize="10" fill="#6B7280" textAnchor="end">${v}</text>
        </g>;
      })}
      <path d={linePath} fill="none" stroke="#3B82F6" strokeWidth="1.2" />
      <path d={trendPath} fill="none" stroke="#D04C49" strokeWidth="1.5" />
    </svg>
  );
}
function CoverageChart() {
  const W = 1200, H = 280, PL = 60, PR = 20, PT = 20, PB = 60;
  const days = 100;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ height: 280 }}>
      {[0, 20, 40, 60, 80].map(v => {
        const y = H - PB - (v / 80) * (H - PT - PB);
        return <g key={v}>
          <line x1={PL} x2={W - PR} y1={y} y2={y} stroke="#E5E7EB" strokeDasharray="2 4" />
          <text x={PL - 6} y={y + 4} fontSize="10" fill="#6B7280" textAnchor="end">${v}</text>
        </g>;
      })}
      {/* Lambda layer (purple, bottom) */}
      <path d={areaPath(days, i => 4 + Math.sin(i*0.4) * 1.5, i => 0, W, H, PL, PR, PT, PB, 80)} fill="#BA9EBA" opacity="0.75" />
      {/* Fargate */}
      <path d={areaPath(days, i => 14 + Math.sin(i*0.5) * 2, i => 4, W, H, PL, PR, PT, PB, 80)} fill="#A8DADC" opacity="0.75" />
      {/* RI Covered (yellow spikes) */}
      <path d={areaPath(days, i => 38 + Math.abs(Math.sin(i*0.9) * 18), i => 14, W, H, PL, PR, PT, PB, 80)} fill="#F7CD52" opacity="0.85" />
      {/* On-Demand top line in dark */}
      <path d={lnPath(days, i => 60 + Math.sin(i*0.6) * 5, W, H, PL, PR, PT, PB, 80)} fill="none" stroke="#1B2A41" strokeWidth="1.2" />
    </svg>
  );
}
function areaPath(n, top, bot, W, H, PL, PR, PT, PB, vMax) {
  const xStep = (W - PL - PR) / (n - 1);
  const y = (v) => H - PB - (v / vMax) * (H - PT - PB);
  let d = `M ${PL} ${y(bot(0))}`;
  for (let i = 0; i < n; i++) d += ` L ${PL + i * xStep} ${y(top(i))}`;
  for (let i = n - 1; i >= 0; i--) d += ` L ${PL + i * xStep} ${y(bot(i))}`;
  return d + " Z";
}
function lnPath(n, fn, W, H, PL, PR, PT, PB, vMax) {
  const xStep = (W - PL - PR) / (n - 1);
  const y = (v) => H - PB - (v / vMax) * (H - PT - PB);
  return Array.from({ length: n }).map((_, i) => `${i === 0 ? "M" : "L"} ${PL + i * xStep} ${y(fn(i))}`).join(" ");
}

/* =====================================================================
   SETTINGS / LOGIN / ATOMS — keep prior implementations
   ===================================================================== */
function SettingsView() {
  return (
    <>
      <MainHeader active="settings/finders" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <PageMain>
        <Title>Settings</Title>
        <p style={{ color: "#6B7280", fontSize: 14, marginTop: 8, marginBottom: 24 }}>Configure finders, fixers, integrations and access.</p>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24 }}>
          <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {[["Finders", true], ["Fixers", false], ["Integrations", false], ["Webhooks", false], ["Notifications", false], ["Users & roles", false], ["API tokens", false], ["Excluded accounts", false]].map(([l, active]) => (
              <a key={l} href="#" style={{ padding: "8px 12px", borderRadius: 6, fontSize: 14, color: active ? "#1B2A41" : "#6B7280", fontWeight: active ? 600 : 400, background: active ? "#F1F5FF" : "transparent", textDecoration: "none" }}>{l}</a>
            ))}
          </nav>
          <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #E5E7EB", overflow: "hidden" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #E5E7EB" }}>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: "#1B2A41" }}>Finder configuration</h2>
              <div style={{ fontSize: 13, color: "#6B7280", marginTop: 2 }}>Toggle finders and adjust thresholds.</div>
            </div>
            {[
              ["EBS Optimize Provisioned IO and Throughput", "Easy", "Right-size GP3 IOPS and throughput.", true, "#19CDA2"],
              ["QuickSight Remove Idle Users", "Easy", "Remove users with no activity in 90 days.", true, "#19CDA2"],
              ["RDS to Graviton", "Medium", "Migrate eligible MySQL/Postgres to ARM.", true, "#F7CD52"],
              ["S3 Intelligent Tiering", "Easy", "Enable Intelligent-Tiering on cold prefixes.", false, "#19CDA2"],
              ["EC2 Reserved Instance refresh", "Advanced", "Restructure expiring RIs to current generation.", true, "#D04C49"],
            ].map(([name, tier, desc, on, color]) => (
              <div key={name} style={{ padding: "14px 20px", borderBottom: "1px solid #F3F4F6", display: "grid", gridTemplateColumns: "1fr 100px 60px", gap: 16, alignItems: "center" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
                    <span style={{ fontWeight: 500, color: "#111827", fontSize: 14 }}>{name}</span>
                  </div>
                  <div style={{ fontSize: 13, color: "#6B7280", marginTop: 2, marginLeft: 16 }}>{desc}</div>
                </div>
                <span style={{ fontSize: 12, color: "#6B7280" }}>{tier}</span>
                <SwitchButton on={on} />
              </div>
            ))}
          </div>
        </div>
      </PageMain>
    </>
  );
}

function LoginView() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 41px)" }}>
      <div style={{ background: "linear-gradient(to right, #04BCC6, #0686D9)", color: "#fff", padding: "60px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <img src="../../assets/console/cloud_fix_logo_white.svg" alt="CloudFix" style={{ height: 44, alignSelf: "flex-start" }} />
        <div>
          <h1 style={{ fontSize: 44, fontWeight: 300, lineHeight: 1.1, margin: 0, letterSpacing: "-0.01em" }}>Find waste in your AWS estate. Fix it automatically.</h1>
          <p style={{ fontSize: 16, opacity: 0.9, marginTop: 20, lineHeight: 1.6, maxWidth: 460 }}>CloudFix scans your AWS accounts continuously and runs approved, reversible fixers via AWS Systems Manager Change Manager.</p>
        </div>
        <div style={{ fontSize: 12, opacity: 0.75 }}>© CloudFix · An AWS Premier Tier Partner</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 60, background: "#fff" }}>
        <div style={{ width: "100%", maxWidth: 380 }}>
          <h2 style={{ fontSize: 28, fontWeight: 300, color: "#1B2A41", margin: 0 }}>Sign in</h2>
          <p style={{ fontSize: 14, color: "#6B7280", marginTop: 8, marginBottom: 28 }}>Use your CloudFix account or single sign-on.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Input label="Email" placeholder="you@company.com" type="email" />
            <Input label="Password" placeholder="••••••••" type="password" />
            <a href="#" style={{ fontSize: 13, color: "#7095F7", alignSelf: "flex-end" }}>Forgot password?</a>
            <Button styleType="purple" fullSize>Sign in</Button>
            <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#9CA3AF", fontSize: 12 }}>
              <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
              <span>OR</span>
              <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />
            </div>
            <Button styleType="white" fullSize>Continue with SSO</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AtomsView() {
  return (
    <>
      <MainHeader active="dashboard" companyName="exiger.com" name="CloudFix Support" role="TENANT ADMIN" />
      <PageMain>
        <Title>Atoms</Title>
        <p style={{ color: "#6B7280", fontSize: 14, marginTop: 8, marginBottom: 24 }}>From <code style={{ background: "#F3F4F6", padding: "2px 6px", borderRadius: 4 }}>cloudfix-ext/ui/apps/web/src/components/atoms/</code> + verified against live screenshots.</p>
        <Section title="Button styleType (Button.lib.ts)">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Button styleType="purple">Primary action</Button>
            <Button styleType="darkBlue">Dark blue</Button>
            <Button styleType="blue">Blue</Button>
            <Button styleType="white">Secondary</Button>
            <Button styleType="green">Success</Button>
            <Button styleType="yellow">Yellow</Button>
            <Button styleType="grey">Grey</Button>
            <Button styleType="red">Destructive</Button>
            <Button styleType="purple" disabled>Disabled</Button>
          </div>
          <div style={{ marginTop: 16, padding: "16px 20px", background: "linear-gradient(to right, #04BCC6, #0686D9)", borderRadius: 10 }}>
            <Button styleType="glass">Glass on gradient</Button>
          </div>
        </Section>
        <Section title="Real-app action buttons (recommendation toolbar)">
          <div style={{ display: "flex", gap: 8 }}>
            <ActionBtn>BROWSE</ActionBtn>
            <ActionBtn>EXECUTE</ActionBtn>
            <ActionBtn>RELOAD</ActionBtn>
            <ActionBtn variant="dark">EXPORT</ActionBtn>
          </div>
        </Section>
        <Section title="Alerts (atoms/Alert)">
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 540 }}>
            <Alert type="success" messages={["Successfully updated your details."]} />
            <Alert type="info"    messages={["Last scan completed 12 minutes ago. 3 new opportunities found."]} />
            <Alert type="warning" messages={["Central template approval is required before fixers can run."]} />
            <Alert type="error"   messages={["Failed to update your details.", "Please try again or contact support."]} />
          </div>
        </Section>
        <Section title="Loader (.lds-default)">
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <LoadingIcon size={80} />
            <LoadingIcon size={48} />
            <LoadingIcon size={32} />
            <span style={{ fontSize: 13, color: "#6B7280" }}>12-dot ring · animation 1.2s linear infinite · #29417F</span>
          </div>
        </Section>
        <Section title="Tier color tokens (verified against live console)">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {[
              ["Easy",         "#19CDA2"],
              ["Medium",       "#F7CD52"],
              ["Advanced",     "#D04C49"],
              ["Best Practice", "#7940F2"],
              ["Reservation",  "#BA9EBA"],
              ["Manual Fixes", "#14C0FA"],
              ["Monitoring",   "#0096FF"],
              ["AWS-default",  "#232F3E"],
            ].map(([name, hex]) => (
              <div key={name} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, padding: 12, display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 6, background: hex }} />
                <div>
                  <div style={{ fontSize: 12, color: "#6B7280" }}>{name}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1B2A41", fontFamily: "ui-monospace, monospace" }}>{hex}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </PageMain>
    </>
  );
}
function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 14, color: "#6B7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>{title}</h3>
      {children}
    </div>
  );
}

Object.assign(window, { DashboardView, RecommendationDetailView, ResourceDetailView, ReportsView, RightSpendView, SettingsView, LoginView, AtomsView });
