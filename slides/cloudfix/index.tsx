import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import logo from './assets/logo.png';
import logoNavy from './assets/logo-navy.png';
import logoWhite from './assets/logo-white.png';
import awsPartner from './assets/aws-partner.svg';
import riskFreeIcon from './assets/risk-free.svg';
import zeroDowntimeIcon from './assets/zero-downtime.svg';
import leastPrivilegeIcon from './assets/least-privilege.svg';

// ─── CloudFix Design System tokens (marketing surface) ─────────────────────
export const design: DesignSystem = {
  palette: {
    bg: '#FFFFFF',
    text: '#1B2A41',
    accent: '#2A8FEA',
  },
  fonts: {
    display:
      "'Raleway', 'Helvetica Neue', Arial, sans-serif",
    body:
      "'Open Sans', 'Helvetica Neue', Arial, sans-serif",
  },
  typeScale: { hero: 140, body: 32 },
  radius: 10,
};

// ─── Local palette ──────────────────────────────────────────────────────────
const cf = {
  navy:        '#1F3A68',
  navy900:     '#142747',
  navy700:     '#25467a',
  blue:        '#2A8FEA',
  blue600:     '#1F7BD0',
  blue100:     '#DCEBFB',
  cyan:        '#2AC1D6',
  teal:        '#2FCFB3',
  orange:      '#ED8705',
  success:     '#1FB36B',
  ink:         '#0F1B2D',
  fg1:         '#1B2A41',
  fg2:         '#4A5A75',
  fg3:         '#7A8AA3',
  fg4:         '#A9B5C7',
  divider:     '#E4EAF1',
  border:      '#D5DDE8',
  surface2:    '#F5F8FB',
  surface1:    '#FBFCFE',
  bg:          '#FFFFFF',
  gradLogo:    'linear-gradient(95deg, #2AC1D6 0%, #2A8FEA 60%, #1F3A68 100%)',
  gradOnboard: 'linear-gradient(135deg, #1F8FBE 0%, #1F5FAA 60%, #1F3A68 100%)',
  gradHero:    'linear-gradient(180deg, #FFFFFF 0%, #F2F8FE 100%)',
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

/** Logo header bar — navy logo on light, white logo on dark */
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
    <img
      src={dark ? logoWhite : logoNavy}
      alt="CloudFix"
      style={{ height: 40, width: 'auto' }}
    />
    <img
      src={awsPartner}
      alt="AWS Partner"
      style={{ height: 36, width: 'auto', opacity: dark ? 0.5 : 0.4 }}
    />
  </div>
);

/** SVG icons as inline components */
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

const ChartIcon = ({ color = '#fff', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const CpuIcon = ({ color = cf.blue, size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const RefreshIcon = ({ color = cf.teal, size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const UsersIcon = ({ color = cf.orange, size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ShieldIcon = ({ color = '#fff', size = 28 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckIcon = ({ color = cf.success }: { color?: string }) => (
  <span
    style={{
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: `${cf.success}18`,
      color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 700,
      flexShrink: 0,
    }}
  >
    ✓
  </span>
);

// ─── Page 1: Cover ──────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...fill, background: cf.bg }}>
    <FontLoader />
    <Styles />

    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 320, background: cf.gradHero, zIndex: 0 }} />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: '100px 140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex: 1,
      }}
    >
      <LogoBar />

      <div>
        <div
          className="cf-fadeUp"
          style={{
            animationDelay: '0.15s',
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cf.blue,
          }}
        >
          AWS cost optimization
        </div>
        <h1
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 'var(--osd-size-hero)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            color: cf.navy,
            margin: '32px 0',
            maxWidth: 1400,
            animationDelay: '0.25s',
          }}
        >
          Cut your AWS bill
          <br />
          <span style={{ background: cf.gradLogo, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            by 20–35% — safely.
          </span>
        </h1>
        <p
          className="cf-fadeUp"
          style={{
            fontSize: 'var(--osd-size-body)',
            lineHeight: 1.6,
            color: cf.fg2,
            maxWidth: 900,
            animationDelay: '0.4s',
          }}
        >
          CloudFix scans your AWS estate, finds waste, and automatically implements
          the fixes — with your approval. No service interruption.
        </p>
      </div>

      <div
        className="cf-fadeUp"
        style={{ animationDelay: '0.55s', display: 'flex', gap: 48, fontSize: 22, color: cf.fg3 }}
      >
        <span style={{ color: cf.fg2 }}>
          <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>$2B+</span>{' '}
          AWS spend managed
        </span>
        <span style={{ color: cf.divider }}>|</span>
        <span style={{ color: cf.fg2 }}>
          <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>500+</span>{' '}
          industry leaders
        </span>
        <span style={{ color: cf.divider }}>|</span>
        <span style={{ color: cf.fg2 }}>
          <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>15–60%</span>{' '}
          savings per service
        </span>
      </div>
    </div>
  </div>
);

// ─── Page 2: How it works ───────────────────────────────────────────────────
const WhatIsCloudFix: Page = () => {
  const pillars = [
    {
      title: 'Find',
      body: 'Continuous scanning across your AWS estate — EBS, S3, RDS, EC2, CloudTrail, CloudFront, and more.',
      accent: cf.cyan,
      icon: <SearchIcon color={cf.cyan} size={32} />,
    },
    {
      title: 'Fix',
      body: 'Automatic implementation via AWS Systems Manager Change Manager. You approve everything.',
      accent: cf.blue,
      icon: <WrenchIcon color={cf.blue} size={32} />,
    },
    {
      title: 'Save',
      body: 'Customers typically save 15–60% per AWS service with no service interruption.',
      accent: cf.teal,
      icon: <DollarIcon color={cf.teal} size={32} />,
    },
  ];

  return (
    <div style={{ ...fill, background: cf.bg, padding: 100 }}>
      <FontLoader />
      <Styles />

      <LogoBar />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', marginTop: 36 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cf.blue,
          }}
        >
          How it works
        </div>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
            color: cf.navy,
            margin: '16px 0 0',
          }}
        >
          Find. Fix. Save. Repeat.
        </h2>
        <p style={{ fontSize: 28, lineHeight: 1.5, color: cf.fg2, maxWidth: 900, marginTop: 12 }}>
          CloudFix is the only platform that automatically fixes AWS waste — not just alerts, real remediation.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 36, marginTop: 44, flex: 1, minHeight: 0 }}>
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className="cf-fadeUp"
            style={{
              animationDelay: `${0.3 + i * 0.12}s`,
              flex: 1,
              background: cf.surface1,
              borderRadius: 'var(--osd-radius)',
              border: `1px solid ${cf.divider}`,
              padding: '36px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              boxShadow: '0 4px 12px rgba(15, 27, 45, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: `${p.accent}14`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 36,
                  fontWeight: 800,
                  color: cf.navy,
                  margin: 0,
                }}
              >
                {p.title}
              </h3>
            </div>
            <p style={{ fontSize: 26, lineHeight: 1.55, color: cf.fg2, margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 3: Big numbers ────────────────────────────────────────────────────
const BigNumbers: Page = () => {
  const stats = [
    { value: '$2B+', label: 'AWS spend managed', desc: 'Across hundreds of enterprise accounts.' },
    { value: '500+', label: 'Industry leaders', desc: 'Trust CloudFix with their AWS optimization.' },
    { value: '15–60%', label: 'Savings per service', desc: 'EBS, S3, RDS, EC2, CloudFront, and more.' },
    { value: '$144K', label: 'Saved in months', desc: 'Typical customer outcome in the first engagement.' },
  ];

  return (
    <div style={{ ...fill, background: cf.navy900, padding: 100, color: '#FFFFFF' }}>
      <FontLoader />
      <Styles />

      <LogoBar dark />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', marginTop: 36 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cf.cyan,
          }}
        >
          The numbers
        </div>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            color: '#FFFFFF',
            margin: '16px 0 0',
            maxWidth: 1000,
          }}
        >
          Proven results at scale.
        </h2>
      </div>

      <div style={{ display: 'flex', gap: 36, marginTop: 48, flex: 1, minHeight: 0, alignItems: 'flex-start' }}>
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="cf-fadeUp"
            style={{
              animationDelay: `${0.3 + i * 0.1}s`,
              flex: 1,
              padding: '36px 32px',
              borderRadius: 'var(--osd-radius)',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontWeight: 800,
                fontSize: 64,
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: cf.fg4,
                marginTop: 16,
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(255,255,255,0.5)', marginTop: 12 }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 4: Products ───────────────────────────────────────────────────────
const Products: Page = () => {
  const products = [
    {
      name: 'CloudFix',
      tag: 'Continuous optimization',
      desc: 'Automatic fixers for EBS, S3, RDS, EC2, CloudTrail, CloudFront, and more.',
      color: cf.blue,
      icon: <CpuIcon color={cf.blue} size={28} />,
    },
    {
      name: 'RightSpend',
      tag: 'Discount programs',
      desc: 'Reserved Instance and Savings Plan optimization for maximum coverage.',
      color: cf.cyan,
      icon: <ChartIcon color={cf.cyan} size={28} />,
    },
    {
      name: 'QueryLens',
      tag: 'Database upgrades',
      desc: 'Intelligent database upgrade assistant for seamless version migration.',
      color: cf.teal,
      icon: <RefreshIcon color={cf.teal} size={28} />,
    },
    {
      name: 'Pro Services',
      tag: 'Hands-on engagement',
      desc: 'Enterprise cost optimization with dedicated CloudFix expertise.',
      color: cf.orange,
      icon: <UsersIcon color={cf.orange} size={28} />,
    },
  ];

  return (
    <div style={{ ...fill, background: cf.bg, padding: 100 }}>
      <FontLoader />
      <Styles />

      <LogoBar />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', marginTop: 36 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cf.blue,
          }}
        >
          Product suite
        </div>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            color: cf.navy,
            margin: '16px 0 0',
          }}
        >
          One platform, four solutions.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginTop: 44, flex: 1, minHeight: 0 }}>
        {products.map((p, i) => (
          <div
            key={p.name}
            className="cf-fadeUp"
            style={{
              animationDelay: `${0.3 + i * 0.1}s`,
              padding: '32px 32px',
              borderRadius: 'var(--osd-radius)',
              border: `1px solid ${cf.divider}`,
              background: cf.surface1,
              boxShadow: '0 4px 12px rgba(15, 27, 45, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              borderLeft: `4px solid ${p.color}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {p.icon}
              <div
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: p.color,
                }}
              >
                {p.tag}
              </div>
            </div>
            <h3 style={{ fontFamily: 'var(--osd-font-display)', fontSize: 36, fontWeight: 800, color: cf.navy, margin: 0 }}>
              {p.name}
            </h3>
            <p style={{ fontSize: 24, lineHeight: 1.5, color: cf.fg2, margin: 0 }}>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 5: Why CloudFix ───────────────────────────────────────────────────
const WhyCloudFix: Page = () => {
  const checks = [
    'Takes 5 minutes to set up',
    'You approve everything',
    'Results in 24 hours',
  ];

  const comparison = [
    { tool: 'Trusted Advisor', what: 'Gives you alerts' },
    { tool: 'Cost Explorer', what: 'Shows you charts' },
    { tool: 'CloudFix', what: 'Automatically fixes it', highlight: true },
  ];

  return (
    <div style={{ ...fill, background: cf.bg, padding: 100 }}>
      <FontLoader />
      <Styles />

      <LogoBar />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', marginTop: 36 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cf.blue,
          }}
        >
          Why CloudFix
        </div>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            color: cf.navy,
            margin: '16px 0 0',
            maxWidth: 1200,
          }}
        >
          Most tools make recommendations.
          <br />
          <span style={{ color: cf.blue }}>CloudFix automatically fixes.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 44, flex: 1, minHeight: 0 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {comparison.map((c, i) => (
            <div
              key={c.tool}
              className="cf-fadeUp"
              style={{
                animationDelay: `${0.3 + i * 0.12}s`,
                padding: '28px 32px',
                borderRadius: 'var(--osd-radius)',
                background: c.highlight ? cf.blue : cf.surface2,
                color: c.highlight ? '#FFFFFF' : cf.fg1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: c.highlight ? '0 10px 30px rgba(42, 143, 234, 0.25)' : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {c.highlight && <ShieldIcon color="#fff" size={24} />}
                <span style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, fontWeight: 700 }}>
                  {c.tool}
                </span>
              </div>
              <span style={{ fontSize: 26, color: c.highlight ? 'rgba(255,255,255,0.85)' : cf.fg2 }}>
                {c.what}
              </span>
            </div>
          ))}
        </div>

        <div
          className="cf-fadeUp"
          style={{
            animationDelay: '0.5s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 28,
            padding: 48,
            borderRadius: 'var(--osd-radius)',
            background: cf.surface2,
          }}
        >
          <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, fontWeight: 700, color: cf.navy }}>
            Zero risk. Zero downtime.
          </div>
          {checks.map((c) => (
            <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 28, color: cf.fg1 }}>
              <CheckIcon />
              {c}
            </div>
          ))}
          <div style={{ marginTop: 16, fontSize: 22, color: cf.fg3, lineHeight: 1.5 }}>
            CloudFix operates with least-privilege access through AWS Systems
            Manager. Nothing happens without your explicit approval.
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Page 6: Trust row (with real icons from design system) ─────────────────
const Trust: Page = () => {
  const items = [
    {
      title: 'Risk-free',
      desc: 'Every fix requires your approval. Nothing runs without consent.',
      color: cf.cyan,
      icon: riskFreeIcon,
    },
    {
      title: 'Zero-downtime',
      desc: 'Optimizations execute with no impact on running workloads.',
      color: cf.blue,
      icon: zeroDowntimeIcon,
    },
    {
      title: 'Least-privilege',
      desc: 'Operates through AWS Systems Manager with minimum required permissions.',
      color: cf.teal,
      icon: leastPrivilegeIcon,
    },
  ];

  return (
    <div style={{ ...fill, background: cf.gradOnboard, padding: 100, color: '#FFFFFF' }}>
      <FontLoader />
      <Styles />

      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: 100, justifyContent: 'center' }}>
        <LogoBar dark style={{ position: 'absolute', top: 100, left: 140, right: 140 }} />

        <div style={{ marginTop: 60 }}>
          <div
            className="cf-fadeUp"
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            Built for enterprise trust
          </div>
          <h2
            className="cf-fadeUp"
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
              color: '#FFFFFF',
              margin: '16px 0 0',
              animationDelay: '0.1s',
            }}
          >
            Safe by design.
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 36, marginTop: 52 }}>
          {items.map((item, i) => (
            <div
              key={item.title}
              className="cf-fadeUp"
              style={{
                animationDelay: `${0.3 + i * 0.12}s`,
                flex: 1,
                padding: '36px 32px',
                borderRadius: 'var(--osd-radius)',
                background: 'rgba(255,255,255,0.10)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <img
                src={item.icon}
                alt={item.title}
                style={{ width: 56, height: 56, marginBottom: 20 }}
              />
              <h3
                style={{
                  fontFamily: 'var(--osd-font-display)',
                  fontSize: 32,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: '0 0 12px',
                }}
              >
                {item.title}
              </h3>
              <p style={{ fontSize: 24, lineHeight: 1.5, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─── Page 7: Fixers table ───────────────────────────────────────────────────
const Fixers: Page = () => {
  const fixers = [
    { name: 'Amazon EBS IO1/IO2 to GP3', effort: 'Easy', savings: 'Up to 55%' },
    { name: 'Duplicate AWS CloudTrail', effort: 'Easy', savings: 'Per-account' },
    { name: 'Amazon CloudFront Compression', effort: 'Easy', savings: 'Bandwidth' },
    { name: 'Amazon S3 Intelligent Tiering', effort: 'Medium', savings: 'Up to 40%' },
    { name: 'Amazon RDS Right-sizing', effort: 'Medium', savings: 'Up to 50%' },
    { name: 'EC2 Instance Schedule', effort: 'Easy', savings: 'Non-prod' },
  ];

  const effortColor = (e: string) =>
    e === 'Easy' ? cf.success : e === 'Medium' ? cf.orange : cf.blue;

  return (
    <div style={{ ...fill, background: cf.bg, padding: 100 }}>
      <FontLoader />
      <Styles />

      <LogoBar />

      <div className="cf-fadeUp" style={{ animationDelay: '0.1s', marginTop: 36 }}>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: cf.blue,
          }}
        >
          Real fixers, real savings
        </div>
        <h2
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.015em',
            color: cf.navy,
            margin: '16px 0 0',
          }}
        >
          Concrete fixes. Not just alerts.
        </h2>
      </div>

      <div
        className="cf-fadeUp"
        style={{
          animationDelay: '0.2s',
          display: 'grid',
          gridTemplateColumns: '1fr 160px 180px',
          gap: 24,
          marginTop: 40,
          paddingBottom: 16,
          borderBottom: `2px solid ${cf.divider}`,
          fontSize: 18,
          fontWeight: 600,
          color: cf.fg3,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        <span>Fixer</span>
        <span>Effort</span>
        <span>Savings</span>
      </div>

      {fixers.map((f, i) => (
        <div
          key={f.name}
          className="cf-fadeUp"
          style={{
            animationDelay: `${0.3 + i * 0.08}s`,
            display: 'grid',
            gridTemplateColumns: '1fr 160px 180px',
            gap: 24,
            padding: '18px 0',
            borderBottom: `1px solid ${cf.divider}`,
            fontSize: 26,
            color: cf.fg1,
            alignItems: 'center',
          }}
        >
          <span style={{ fontWeight: 500 }}>{f.name}</span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 20,
              fontWeight: 600,
              color: effortColor(f.effort),
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: effortColor(f.effort) }} />
            {f.effort}
          </span>
          <span style={{ color: cf.fg2 }}>{f.savings}</span>
        </div>
      ))}
    </div>
  );
};

// ─── Page 8: Closing ────────────────────────────────────────────────────────
const Closing: Page = () => (
  <div style={{ ...fill, background: cf.navy, padding: 100, color: '#FFFFFF' }}>
    <FontLoader />
    <Styles />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div className="cf-fadeUp" style={{ animationDelay: '0.05s' }}>
        <img src={logoWhite} alt="CloudFix" style={{ height: 48, width: 'auto', marginBottom: 48 }} />
      </div>

      <h1
        className="cf-fadeUp"
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 120,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
          color: '#FFFFFF',
          margin: 0,
          animationDelay: '0.15s',
        }}
      >
        Start saving today.
      </h1>
      <p
        className="cf-fadeUp"
        style={{
          fontSize: 36,
          lineHeight: 1.5,
          color: 'rgba(255,255,255,0.6)',
          maxWidth: 800,
          marginTop: 32,
          animationDelay: '0.3s',
        }}
      >
        Takes 5 minutes. You approve everything. Results in 24 hours.
      </p>

      <a
        href="https://cloudfix.com/assessment"
        target="_blank"
        rel="noopener noreferrer"
        className="cf-fadeUp"
        style={{
          animationDelay: '0.5s',
          marginTop: 56,
          padding: '20px 56px',
          borderRadius: 8,
          background: cf.orange,
          color: '#FFFFFF',
          fontFamily: 'var(--osd-font-display)',
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: '0.02em',
          boxShadow: '0 8px 24px rgba(237, 135, 5, 0.3)',
          textDecoration: 'none',
          display: 'inline-block',
        }}
      >
        Get started free
      </a>

      <div
        className="cf-fadeUp"
        style={{ animationDelay: '0.65s', marginTop: 32, fontSize: 22, color: 'rgba(255,255,255,0.4)' }}
      >
        cloudfix.com/assessment
      </div>
    </div>
  </div>
);

// ─── Export ──────────────────────────────────────────────────────────────────
export const meta: SlideMeta = { title: 'CloudFix — AWS Cost Optimization' };

export default [
  Cover,
  WhatIsCloudFix,
  BigNumbers,
  Products,
  WhyCloudFix,
  Trust,
  Fixers,
  Closing,
] satisfies Page[];
