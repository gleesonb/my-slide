import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import logoNavy from './assets/logo-navy.png';
import logoWhite from './assets/logo-white.png';
import awsCompetency from './assets/aws-competency.png';
import awsQualified from './assets/aws-qualified.svg';
import soc2Logo from './assets/soc2.png';
import finopsCertified from './assets/finops-certified.png';
import riskFreeIcon from './assets/risk-free.svg';
import zeroDowntimeIcon from './assets/zero-downtime.svg';
import leastPrivilegeIcon from './assets/least-privilege.svg';

// ─── CloudFix Design System tokens ──────────────────────────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#FFFFFF',
    text: '#1B2A41',
    accent: '#2A8FEA',
  },
  fonts: {
    display: "'Raleway', 'Helvetica Neue', Arial, sans-serif",
    body: "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
  },
  typeScale: { hero: 140, body: 32 },
  radius: 10,
};

// ─── Local palette ──────────────────────────────────────────────────────────
const cf = {
  navy: '#1F3A68',
  navy900: '#142747',
  navy700: '#25467a',
  blue: '#2A8FEA',
  blue600: '#1F7BD0',
  blue100: '#DCEBFB',
  cyan: '#2AC1D6',
  teal: '#2FCFB3',
  orange: '#ED8705',
  success: '#1FB36B',
  ink: '#0F1B2D',
  fg1: '#1B2A41',
  fg2: '#4A5A75',
  fg3: '#7A8AA3',
  fg4: '#A9B5C7',
  divider: '#E4EAF1',
  border: '#D5DDE8',
  surface2: '#F5F8FB',
  surface1: '#FBFCFE',
  bg: '#FFFFFF',
  gradLogo: 'linear-gradient(95deg, #2AC1D6 0%, #2A8FEA 60%, #1F3A68 100%)',
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const,
  overflow: 'hidden',
};

// ─── Shared components ──────────────────────────────────────────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@400;500;600;700&display=swap');
  `}</style>
);

const Styles = () => (
  <style>{`
    @keyframes cf-fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes cf-fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    .cf-fadeUp  { opacity: 0; animation: cf-fadeUp 0.8s cubic-bezier(.22,1,.36,1) forwards; }
    .cf-fadeIn  { opacity: 0; animation: cf-fadeIn 1s ease forwards; }
  `}</style>
);

const LogoBar = ({ dark = false, style }: { dark?: boolean; style?: React.CSSProperties }) => (
  <div
    className="cf-fadeUp"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      animationDelay: '0.05s',
      ...style,
    }}
  >
    <img src={dark ? logoWhite : logoNavy} alt="CloudFix" style={{ height: 40, width: 'auto' }} />
  </div>
);

const SearchIcon = ({ color = cf.blue, size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const WrenchIcon = ({ color = cf.blue, size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const DollarIcon = ({ color = cf.blue, size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ShieldIcon = ({ color = '#fff', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckIcon = ({ color = cf.success }: { color?: string }) => (
  <span style={{
    width: 36, height: 36, borderRadius: '50%',
    background: `${cf.success}18`, color,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 20, fontWeight: 700, flexShrink: 0,
  }}>✓</span>
);

// ─── Page 1: Title ──────────────────────────────────────────────────────────
// Budget: padding 100px top/bottom = 880px usable
// Logo bar ~56px, gap 40px, pill ~36px, gap 36px, title 80*1.05*2=168px, gap 36px, subtitle 44*1.3*2=114px, gap 40px, bottom stats ~56px = ~582px ✓
const Cover: Page = () => (
  <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF' }}>
    <FontLoader />
    <Styles />

    <div style={{ position: 'absolute', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,207,179,0.12) 0%, transparent 70%)', right: -200, top: -200, pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,143,234,0.12) 0%, transparent 70%)', left: -100, bottom: -100, pointerEvents: 'none' }} />

    <div style={{ position: 'absolute', inset: 0, padding: '100px 140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div className="cf-fadeUp" style={{ animationDelay: '0.05s', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={logoWhite} alt="CloudFix" style={{ height: 44, width: 'auto' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, maxWidth: 1100 }}>
        <div
          className="cf-fadeUp"
          style={{
            animationDelay: '0.15s',
            display: 'inline-block',
            padding: '6px 20px',
            borderRadius: 100,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
            background: 'rgba(47,207,179,0.15)',
            color: cf.teal,
            width: 'fit-content',
          }}
        >
          Free Assessment
        </div>
        <h1
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            margin: 0,
            animationDelay: '0.25s',
          }}
        >
          Free AWS Savings<br />Assessment
        </h1>
        <p
          className="cf-fadeUp"
          style={{
            fontSize: 44,
            fontWeight: 400,
            lineHeight: 1.3,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 820,
            margin: 0,
            animationDelay: '0.4s',
          }}
        >
          Quantify your AWS optimization opportunity before making infrastructure or commercial commitments.
        </p>
      </div>

      <div className="cf-fadeUp" style={{ animationDelay: '0.55s', display: 'flex', gap: 60, alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: cf.fg4 }}>
            Typical scan finding
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
            <span style={{ fontFamily: 'var(--osd-font-display)', fontSize: 88, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: cf.teal }}>
              12–25%
            </span>
            <span style={{ fontSize: 44, fontWeight: 500, color: 'rgba(255,255,255,0.4)' }}>
              savings identified
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Page 2: The Opportunity ────────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Label+title ~180px, gap 52px, 3 cards ~440px, gap 28px, footer ~28px = ~728px ✓
const Opportunity: Page = () => (
  <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF', padding: '100px 100px 80px' }}>
    <FontLoader />
    <Styles />

    <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,207,179,0.1) 0%, transparent 70%)', right: -150, bottom: -150, pointerEvents: 'none' }} />

    <LogoBar dark style={{ marginBottom: 32 }} />

    <div className="cf-fadeUp" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.teal, opacity: 0.6 }}>
        The opportunity
      </div>
      <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}>
        Even modest percentage gains<br />translate to significant savings.
      </h2>
      <div style={{ width: 72, height: 5, background: cf.teal, borderRadius: 3 }} />
    </div>

    <div style={{ display: 'flex', gap: 40, marginTop: 52, flex: 1, minHeight: 0, alignItems: 'center' }}>
      {[
        {
          label: 'Annual AWS spend',
          value: '$1M+',
          desc: 'The larger the estate, the more substantial the optimization ROI.',
          bg: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          valueColor: cf.teal,
        },
        {
          label: 'Typical scan finding',
          value: '12–25%',
          desc: 'Savings identified in initial scans of enterprise AWS estates.',
          bg: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          valueColor: '#5589D8',
        },
        {
          label: 'Your potential savings',
          value: 'Validated',
          desc: 'Concrete dollar savings validated against your actual AWS usage and configuration data.',
          bg: 'rgba(47,207,179,0.1)',
          border: '2px solid rgba(47,207,179,0.3)',
          valueColor: cf.teal,
        },
      ].map((c, i) => (
        <div
          key={c.label}
          className="cf-fadeUp"
          style={{
            animationDelay: `${0.3 + i * 0.12}s`,
            flex: 1,
            background: c.bg,
            border: c.border,
            borderRadius: 16,
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: cf.fg4 }}>
            {c.label}
          </div>
          <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: c.valueColor }}>
            {c.value}
          </div>
          <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>
            {c.desc}
          </div>
        </div>
      ))}
    </div>

    <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.35)', marginTop: 28 }}>
      A 1% validated savings opportunity can mean hundreds of thousands per year — the free scan costs nothing to find out.
    </div>
  </div>
);

// ─── Page 3: How It Works ───────────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Label+title ~130px, gap 52px, 3 cards ~480px, gap 28px, footer ~28px = ~718px ✓
const HowItWorks: Page = () => (
  <div style={{ ...fill, background: cf.bg, padding: '100px 100px 80px' }}>
    <FontLoader />
    <Styles />

    <LogoBar style={{ marginBottom: 24 }} />

    <div className="cf-fadeUp" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.blue }}>
        How CloudFix works
      </div>
      <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: cf.navy, margin: 0 }}>
        Scan. Recommend. Execute.
      </h2>
      <div style={{ width: 72, height: 5, background: cf.blue, borderRadius: 3 }} />
    </div>

    <div style={{ display: 'flex', gap: 40, marginTop: 52, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
      {[
        {
          step: '1',
          title: 'Scan',
          color: cf.teal,
          textColor: cf.navy,
          body: 'CloudFix reads AWS cost and resource metadata — no credentials stored. Analyzes CUR data, CloudWatch metrics, EC2, RDS, S3, EBS, NAT gateways, and more across the full org.',
        },
        {
          step: '2',
          title: 'Recommend',
          color: cf.blue,
          textColor: '#FFFFFF',
          body: 'Recommendations are grouped by tier: Easy (unused EBS, snapshots), Medium (storage tiering, idle NAT), and Advanced (EC2/RDS right-sizing).',
        },
        {
          step: '3',
          title: 'Execute',
          color: '#7B5EA7',
          textColor: '#FFFFFF',
          body: 'CloudFix generates controlled automation through AWS-native SSM workflows. Teams approve before anything runs — no manual remediation.',
        },
      ].map((c, i) => (
        <div
          key={c.title}
          className="cf-fadeUp"
          style={{
            animationDelay: `${0.3 + i * 0.12}s`,
            flex: 1,
            background: cf.surface2,
            borderRadius: 16,
            padding: '48px 44px',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            borderTop: `5px solid ${c.color}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 12, background: c.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, fontWeight: 700, color: c.textColor,
            }}>
              {c.step}
            </div>
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 44, fontWeight: 700, color: cf.navy }}>
              {c.title}
            </div>
          </div>
          <div style={{ fontSize: 34, color: cf.fg2, lineHeight: 1.45 }}>
            {c.body}
          </div>
        </div>
      ))}
    </div>

    <div style={{ fontSize: 28, color: cf.fg3, marginTop: 28 }}>
      The biggest gap in AWS cost optimization is execution, not identification — CloudFix closes both.
    </div>
  </div>
);

// ─── Page 4: Why Now ────────────────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Label+title ~140px, gap 52px, two columns with bullets + table = ~540px ✓
const WhyNow: Page = () => {
  const bullets = [
    'Review findings and ROI before any paid commitment',
    'Use scan results to support internal AWS commercial negotiation',
    'Reservation and Savings Plan opportunities surfaced after cleanup',
  ];

  const scanCovers = [
    ['EBS volumes & snapshots', 'Unused resources, cleanup opportunities'],
    ['GP2 to GP3 migration', 'Storage upgrade with immediate cost reduction'],
    ['S3 Intelligent-Tiering', 'Automate object lifecycle for variable access patterns'],
    ['CloudTrail duplication', 'Eliminate redundant trail costs'],
    ['CloudFront compression', 'Transfer cost reduction via compression gaps'],
    ['EC2 & RDS right-sizing', 'Instance retyping opportunities'],
    ['SageMaker / Bedrock', 'Runtime and usage pattern optimizations'],
  ];

  return (
    <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF', padding: '100px 100px 80px' }}>
      <FontLoader />
      <Styles />

      <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,143,234,0.15) 0%, transparent 70%)', left: -200, top: -200, pointerEvents: 'none' }} />

      <LogoBar dark style={{ marginBottom: 24 }} />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.teal, opacity: 0.6 }}>
          Why timing matters
        </div>
        <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}>
          Clean up waste before making<br />AWS reservations or commitments.
        </h2>
        <div style={{ width: 72, height: 5, background: cf.teal, borderRadius: 3 }} />
      </div>

      <div style={{ display: 'flex', gap: 60, marginTop: 52, flex: 1, minHeight: 0, alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 34, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
            Committing to Savings Plans, EDPs, or reservations <em>before</em> removing waste means locking in capacity that should have been reduced first.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 8 }}>
            {bullets.map((b, i) => (
              <div
                key={i}
                className="cf-fadeUp"
                style={{ animationDelay: `${0.3 + i * 0.1}s`, display: 'flex', alignItems: 'center', gap: 20, fontSize: 28, color: 'rgba(255,255,255,0.65)' }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: cf.teal, flexShrink: 0 }} />
                {b}
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: cf.fg4, paddingBottom: 20 }}>
            What the scan covers (examples)
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 28 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '0 32px 20px 0', fontSize: 24, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: cf.teal, borderBottom: `2px solid rgba(255,255,255,0.08)` }}>Service</th>
                <th style={{ textAlign: 'left', padding: '0 32px 20px 0', fontSize: 24, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: cf.teal, borderBottom: `2px solid rgba(255,255,255,0.08)` }}>Opportunity</th>
              </tr>
            </thead>
            <tbody>
              {scanCovers.map(([svc, opp], i) => (
                <tr key={i} style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                  <td style={{ padding: '14px 32px 14px 0', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap', lineHeight: 1.3, verticalAlign: 'top' }}>{svc}</td>
                  <td style={{ padding: '14px 32px 14px 0', color: 'rgba(255,255,255,0.5)', lineHeight: 1.3, verticalAlign: 'top' }}>{opp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// ─── Page 5: Onboarding ─────────────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Label+title ~130px, gap 52px, two columns ~600px ✓
const Onboarding: Page = () => {
  const steps = [
    { num: '1', color: cf.blue, text: <><strong style={{ color: cf.navy }}>Create CloudFix tenant</strong> — takes minutes</> },
    { num: '2', color: cf.blue, text: <><strong style={{ color: cf.navy }}>Review & deploy CloudFormation template</strong> — IAM roles are readable and auditable</> },
    { num: '3', color: cf.blue, text: <><strong style={{ color: cf.navy }}>Select account scope</strong> — full org or subset</> },
    { num: '4', color: cf.teal, text: <><strong style={{ color: cf.navy }}>Scan runs over a few days</strong> — initial recommendations visible in app</> },
  ];

  const resources = [
    'CloudFormation parent stack and service-managed StackSet',
    'Finder role for identifying savings opportunities',
    'CUR, S3, Athena, Glue, and Lambda resources for Cost and Usage Report analysis',
    'SSM roles for approved Fixer workflows (optional)',
  ];

  return (
    <div style={{ ...fill, background: cf.bg, padding: '100px 100px 80px' }}>
      <FontLoader />
      <Styles />

      <LogoBar style={{ marginBottom: 24 }} />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.blue }}>
          For the AWS admin
        </div>
        <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: cf.navy, margin: 0 }}>
          One CloudFormation deployment<br />in the payer account.
        </h2>
        <div style={{ width: 72, height: 5, background: cf.blue, borderRadius: 3 }} />
      </div>

      <div style={{ display: 'flex', gap: 80, marginTop: 52, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ fontSize: 28, color: cf.fg2, lineHeight: 1.5 }}>
            The CloudFormation stack creates the roles and resources needed to analyze cost and configuration data:
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
            {resources.map((r, i) => (
              <li key={i} style={{ display: 'flex', gap: 20, fontSize: 26, color: cf.fg2, lineHeight: 1.4 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: cf.blue, flexShrink: 0, marginTop: 10 }} />
                {r}
              </li>
            ))}
          </ul>
          <div style={{ fontSize: 26, color: cf.fg3, paddingTop: 4 }}>
            Scan can run across the full AWS organization or a subset of accounts as a validation step.
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: cf.blue }}>
            Setup sequence
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {steps.map((s, i) => (
              <div key={i} className="cf-fadeUp" style={{ animationDelay: `${0.3 + i * 0.1}s`, display: 'flex', gap: 40, alignItems: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', background: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, fontWeight: 700, color: s.color === cf.teal ? cf.navy : '#FFFFFF', flexShrink: 0,
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 30, lineHeight: 1.35, color: cf.fg2 }}>
                  {s.text}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 26, color: cf.fg3, marginTop: 8 }}>
            CloudFix can join onboarding and sit with the team through initial setup.
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Page 6: Security ───────────────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Label+title ~140px, gap 52px, two columns ~500px ✓
const Security: Page = () => {
  const rows = [
    ['Credentials', 'No AWS credentials stored — temporary role credentials only'],
    ['Transport & storage', 'Encrypted in transit and at rest'],
    ['Data access', 'Cost and resource metadata only — no database contents or application data'],
    ['Finder role', 'Read-only for recommendations; can apply cloudfix: prefixed tags'],
    ['Fixer workflows', 'Separate from assessment; require explicit approval via SSM'],
    ['Scope control', 'Recommendation and fixer areas can be switched on or off per your preference'],
  ];

  return (
    <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF', padding: '100px 100px 80px' }}>
      <FontLoader />
      <Styles />

      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,207,179,0.1) 0%, transparent 70%)', right: -100, bottom: -100, pointerEvents: 'none' }} />

      <LogoBar dark style={{ marginBottom: 24 }} />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.teal, opacity: 0.6 }}>
          Security & data privacy
        </div>
        <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#FFFFFF', margin: 0 }}>
          Read-only assessment. No credentials<br />stored. SOC 2 Type 2 audited.
        </h2>
        <div style={{ width: 72, height: 5, background: cf.teal, borderRadius: 3 }} />
      </div>

      <div style={{ display: 'flex', gap: 60, marginTop: 52, flex: 1, minHeight: 0, alignItems: 'stretch' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 26 }}>
            <tbody>
              {rows.map(([label, desc], i) => (
                <tr key={i} style={{ borderBottom: `1px solid rgba(255,255,255,0.06)` }}>
                  <td style={{ padding: '14px 32px 14px 0', fontWeight: 600, color: '#FFFFFF', whiteSpace: 'nowrap', lineHeight: 1.3, verticalAlign: 'top', width: 220 }}>
                    {label}
                  </td>
                  <td style={{ padding: '14px 32px 14px 0', color: 'rgba(255,255,255,0.5)', lineHeight: 1.3, verticalAlign: 'top' }}>
                    {desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ flex: 0.9, display: 'flex', flexDirection: 'column', gap: 24, justifyContent: 'center' }}>
          <div className="cf-fadeUp" style={{ animationDelay: '0.3s', display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <img src={awsCompetency} alt="AWS Cloud Operations Competency" style={{ height: 72, width: 'auto' }} />
            <img src={soc2Logo} alt="SOC 2 Type 2 Certified" style={{ height: 72, width: 'auto' }} />
            <img src={finopsCertified} alt="FinOps Certified Solution" style={{ height: 72, width: 'auto' }} />
          </div>
          <div
            className="cf-fadeUp"
            style={{
              animationDelay: '0.4s',
              background: 'rgba(47,207,179,0.1)',
              border: '2px solid rgba(47,207,179,0.3)',
              borderRadius: 16,
              padding: '32px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 32, fontWeight: 700, color: cf.teal }}>
              SOC 2 Type 2
            </div>
            <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              Independently audited. Report available on request.
            </div>
          </div>
          <div
            className="cf-fadeUp"
            style={{
              animationDelay: '0.5s',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '28px 36px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, fontWeight: 700, color: '#FFFFFF' }}>
              Removal
            </div>
            <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              Delete the CloudFormation stack to remove CloudFix. No lock-in.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Page 7: Commercial Model ───────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Label+title ~130px, gap 52px, two columns ~560px ✓
const Commercial: Page = () => {
  const tiers = [
    { name: 'Starter', price: '$149/mo', spend: 'Up to $250K/yr', highlight: false },
    { name: 'Growth', price: '$499/mo', spend: '$250K–$1M/yr', highlight: false },
    { name: 'Scale', price: '$1,499/mo', spend: '$1M–$5M/yr', highlight: false },
    { name: 'Enterprise', price: 'From $2,999/mo', spend: '$5M+/yr', highlight: true },
  ];

  const steps = [
    { num: '1', color: cf.teal, textColor: cf.navy, text: <><strong style={{ color: cf.navy }}>Run the free scan</strong> — no commitment required</> },
    { num: '2', color: cf.teal, textColor: cf.navy, text: <><strong style={{ color: cf.navy }}>Review the savings report and ROI case</strong> — see exactly what was found</> },
    { num: '3', color: cf.teal, textColor: cf.navy, text: <><strong style={{ color: cf.navy }}>Decide if savings justify proceeding</strong> — you make the call</> },
  ];

  return (
    <div style={{ ...fill, background: cf.bg, padding: '100px 100px 80px' }}>
      <FontLoader />
      <Styles />

      <LogoBar style={{ marginBottom: 24 }} />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.blue }}>
          Commercial model
        </div>
        <h2 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: cf.navy, margin: 0 }}>
          The scan is free. Pay only if<br />the savings justify it.
        </h2>
        <div style={{ width: 72, height: 5, background: cf.blue, borderRadius: 3 }} />
      </div>

      <div style={{ display: 'flex', gap: 60, marginTop: 48, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: cf.fg3 }}>
            Plans — billed via AWS Marketplace
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className="cf-fadeUp"
                style={{
                  animationDelay: `${0.3 + i * 0.08}s`,
                  flex: 1,
                  background: t.highlight ? `${cf.blue}12` : cf.surface2,
                  border: t.highlight ? `2px solid ${cf.blue}` : `1px solid ${cf.divider}`,
                  borderRadius: 12,
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color: cf.navy, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
                  {t.name}
                </div>
                <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 38, fontWeight: 700, color: cf.blue, letterSpacing: '-0.02em' }}>
                  {t.price}
                </div>
                <div style={{ fontSize: 20, color: cf.fg3 }}>
                  {t.spend}
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 22, color: cf.fg3, marginTop: 4 }}>
            Annual billing available at a discount. Supports EDP and private offers for enterprise.
          </div>
        </div>

        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: cf.blue }}>
            Recommended path
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {steps.map((s, i) => (
              <div key={i} className="cf-fadeUp" style={{ animationDelay: `${0.4 + i * 0.1}s`, display: 'flex', gap: 36, alignItems: 'center' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%', background: s.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 26, fontWeight: 700, color: s.textColor, flexShrink: 0,
                }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 28, lineHeight: 1.35, color: cf.fg2 }}>
                  {s.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Page 8: Next Steps ─────────────────────────────────────────────────────
// Budget: padding 100px top, 80px bottom = 900px
// Logo 44px, gap 60px, two-col section ~740px ✓
const NextSteps: Page = () => {
  const questions = [
    'Who owns AWS payer / management account access?',
    'Who owns AWS commercial and reservation strategy?',
    'Is this type of optimization already being done internally?',
    'Full org scan or subset of accounts for validation?',
  ];

  return (
    <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF' }}>
      <FontLoader />
      <Styles />

      <div style={{ position: 'absolute', width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(47,207,179,0.13) 0%, transparent 70%)', right: -200, top: -200, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,143,234,0.12) 0%, transparent 70%)', left: -100, bottom: -100, pointerEvents: 'none' }} />

      <div style={{ position: 'absolute', inset: 0, padding: '100px 140px', display: 'flex', flexDirection: 'column' }}>
        <div className="cf-fadeUp" style={{ animationDelay: '0.05s' }}>
          <img src={logoWhite} alt="CloudFix" style={{ height: 44, width: 'auto' }} />
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 80, marginTop: 60 }}>
          <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: 36 }}>
            <div className="cf-fadeUp" style={{ animationDelay: '0.1s', fontSize: 24, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: cf.teal, opacity: 0.6 }}>
              Recommended next steps
            </div>
            <h2
              className="cf-fadeUp"
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: 0,
                animationDelay: '0.2s',
              }}
            >
              Run the free scan — or forward<br />to your FinOps / infra owner.
            </h2>

            <div className="cf-fadeUp" style={{ animationDelay: '0.6s', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
              <a
                href="https://cloudfix.com/assessment"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  background: cf.teal,
                  color: cf.navy,
                  fontSize: 34,
                  fontWeight: 700,
                  padding: '28px 52px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                }}
              >
                Run the free scan
              </a>
              <a
                href="https://cloudfix.com/assessment"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 12,
                  border: `3px solid #5589D8`,
                  color: '#5589D8',
                  fontSize: 28,
                  fontWeight: 600,
                  padding: '20px 44px',
                  borderRadius: 12,
                  textDecoration: 'none',
                }}
              >
                Forward to FinOps / infra owner
              </a>
            </div>
          </div>

          <div style={{ flex: 0.85 }}>
            <div
              className="cf-fadeUp"
              style={{
                animationDelay: '0.35s',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                padding: '44px 48px',
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 600, color: cf.teal, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 28 }}>
                Questions to answer internally
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {questions.map((q, i) => (
                  <div key={i} className="cf-fadeUp" style={{ animationDelay: `${0.45 + i * 0.08}s`, display: 'flex', gap: 16, alignItems: 'flex-start', fontSize: 26, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                    <div style={{ color: cf.teal, fontWeight: 700, flexShrink: 0, fontSize: 22 }}>&#x2022;</div>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Export ──────────────────────────────────────────────────────────────────
export const meta: SlideMeta = { title: 'CloudFix — Free AWS Savings Assessment' };

export default [
  Cover,
  Opportunity,
  HowItWorks,
  WhyNow,
  Onboarding,
  Security,
  Commercial,
  NextSteps,
] satisfies Page[];
