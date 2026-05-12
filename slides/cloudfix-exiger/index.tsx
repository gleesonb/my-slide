import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import logoNavy from './assets/logo-navy.png';
import logoWhite from './assets/logo-white.png';
import awsPartner from './assets/aws-partner.svg';
import riskFreeIcon from './assets/risk-free.svg';
import zeroDowntimeIcon from './assets/zero-downtime.svg';
import leastPrivilegeIcon from './assets/least-privilege.svg';

// ─── Design tokens ──────────────────────────────────────────────────────────
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
  typeScale: { hero: 120, body: 30 },
  radius: 10,
};

// ─── Palette ────────────────────────────────────────────────────────────────
const cf = {
  navy: '#1F3A68', navy900: '#142747', blue: '#2A8FEA', blue100: '#DCEBFB',
  cyan: '#2AC1D6', teal: '#2FCFB3', orange: '#ED8705', success: '#1FB36B',
  fg1: '#1B2A41', fg2: '#4A5A75', fg3: '#7A8AA3', fg4: '#A9B5C7',
  divider: '#E4EAF1', surface2: '#F5F8FB', surface1: '#FBFCFE',
  gradLogo: 'linear-gradient(95deg, #2AC1D6 0%, #2A8FEA 60%, #1F3A68 100%)',
  gradOnboard: 'linear-gradient(135deg, #1F8FBE 0%, #1F5FAA 60%, #1F3A68 100%)',
};

const fill = {
  width: '100%', height: '100%', fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const, overflow: 'hidden',
};

// ─── Shared ─────────────────────────────────────────────────────────────────
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
    .cf-fadeUp { opacity: 0; animation: cf-fadeUp 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  `}</style>
);

const LogoBar = ({ dark = false, style }: { dark?: boolean; style?: React.CSSProperties }) => (
  <div
    className="cf-fadeUp"
    style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      animationDelay: '0.05s', ...style,
    }}
  >
    <img src={dark ? logoWhite : logoNavy} alt="CloudFix" style={{ height: 36, width: 'auto' }} />
    <img src={awsPartner} alt="AWS Partner" style={{ height: 32, width: 'auto', opacity: dark ? 0.5 : 0.4 }} />
  </div>
);

const Eyebrow = ({ children, color = cf.blue }: { children: React.ReactNode; color?: string }) => (
  <div
    className="cf-fadeUp"
    style={{
      fontFamily: 'var(--osd-font-display)', fontSize: 20, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase', color, animationDelay: '0.1s',
    }}
  >
    {children}
  </div>
);

const ShieldIcon = ({ color = '#fff', size = 24 }: { color?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckIcon = () => (
  <span style={{
    width: 32, height: 32, borderRadius: '50%', background: `${cf.success}18`,
    color: cf.success, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 18, fontWeight: 700, flexShrink: 0,
  }}>✓</span>
);

// ─── Page 1: Cover ──────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF' }}>
    <FontLoader /><Styles />
    <div style={{
      position: 'absolute', inset: 0, padding: '110px 140px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <img src={logoWhite} alt="CloudFix" style={{ height: 40 }} />
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 28 }}>|</span>
        <span style={{ fontFamily: 'var(--osd-font-display)', fontSize: 26, fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
          Exiger
        </span>
      </div>

      <div>
        <div
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 20, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: cf.cyan,
            animationDelay: '0.1s',
          }}
        >
          Path to savings — confidential
        </div>
        <h1
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em',
            color: '#FFFFFF', margin: '28px 0', maxWidth: 1400, animationDelay: '0.2s',
          }}
        >
          A clear path to{' '}
          <span style={{ color: cf.cyan }}>$500K</span>{' '}
          in annualized AWS savings.
        </h1>
        <p
          className="cf-fadeUp"
          style={{
            fontSize: 'var(--osd-size-body)', lineHeight: 1.6,
            color: 'rgba(255,255,255,0.6)', maxWidth: 900, animationDelay: '0.35s',
          }}
        >
          Prepared for Adi Kavaler, CTO — Exiger. Hands-free optimizations first,
          with explicit effort estimates for every initiative.
        </p>
      </div>

      <div className="cf-fadeUp" style={{ animationDelay: '0.5s', display: 'flex', gap: 48, fontSize: 20, color: cf.fg4 }}>
        <span>May 2026</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
        <span>Bill Gleeson — CloudFix</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
        <span>Robert Kerr — Exiger</span>
      </div>
    </div>
  </div>
);

// ─── Page 2: Where you are today ────────────────────────────────────────────
const CurrentState: Page = () => (
  <div style={{ ...fill, background: cf.surface1, padding: 100 }}>
    <FontLoader /><Styles />
    <LogoBar />

    <div style={{ display: 'flex', gap: 64, marginTop: 40, flex: 1, minHeight: 0 }}>
      {/* Left column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Eyebrow color={cf.orange}>Current state</Eyebrow>
        <h2
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
            lineHeight: 1.1, color: cf.navy, margin: '16px 0 0', animationDelay: '0.1s',
          }}
        >
          $27K realized isn't enough.
        </h2>
        <p className="cf-fadeUp" style={{ fontSize: 26, lineHeight: 1.55, color: cf.fg2, marginTop: 20, animationDelay: '0.2s' }}>
          We hear you. Prior FinOps engagements over-promised and under-delivered.
          This deck is different — it quantifies every dollar and labels who does the work.
        </p>

        <div className="cf-fadeUp" style={{ display: 'flex', gap: 24, marginTop: 36, animationDelay: '0.35s' }}>
          <div style={{
            padding: '20px 28px', borderRadius: 'var(--osd-radius)', background: '#FFFFFF',
            border: `1px solid ${cf.divider}`, boxShadow: '0 2px 8px rgba(15,27,45,0.04)',
          }}>
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 44, fontWeight: 800, color: cf.orange, lineHeight: 1 }}>
              $27K
            </div>
            <div style={{ fontSize: 16, color: cf.fg3, marginTop: 6 }}>Current annualized</div>
          </div>
          <div style={{
            padding: '20px 28px', borderRadius: 'var(--osd-radius)', background: `${cf.success}10`,
            border: `1px solid ${cf.success}30`,
          }}>
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 44, fontWeight: 800, color: cf.success, lineHeight: 1 }}>
              $250–500K
            </div>
            <div style={{ fontSize: 16, color: cf.fg3, marginTop: 6 }}>Realistic target</div>
          </div>
        </div>
      </div>

      {/* Right column — pressures */}
      <div
        className="cf-fadeUp"
        style={{
          flex: 0.85, display: 'flex', flexDirection: 'column', gap: 20,
          justifyContent: 'center', animationDelay: '0.3s',
        }}
      >
        <div style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 20, fontWeight: 700,
          color: cf.navy, letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>
          Pressures we're addressing
        </div>
        {[
          { label: 'July budget cycle', detail: 'Aggressive mandate to cut AWS run-rate before planning' },
          { label: 'Skepticism from prior vendors', detail: 'Past FinOps engagements lacked clarity on effort vs. payoff' },
          { label: 'ELT presentation Monday', detail: 'Needs a credible plan with risks and resource requirements' },
        ].map((item) => (
          <div key={item.label} style={{
            padding: '20px 24px', borderRadius: 'var(--osd-radius)',
            background: '#FFFFFF', border: `1px solid ${cf.divider}`,
            boxShadow: '0 2px 8px rgba(15,27,45,0.04)',
          }}>
            <div style={{ fontWeight: 600, fontSize: 22, color: cf.fg1 }}>{item.label}</div>
            <div style={{ fontSize: 20, color: cf.fg2, marginTop: 4, lineHeight: 1.45 }}>{item.detail}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── Page 3: Path to $250K ──────────────────────────────────────────────────
const PathTo250: Page = () => {
  const items = [
    { name: 'RightSpend — RI/SP coverage gap', savings: '$85K', type: 'Hands-free', color: cf.success, effort: '~1 week CloudFix-led' },
    { name: 'EBS GP3 migration (IO1/IO2)', savings: '$45K', type: 'Hands-free', color: cf.success, effort: 'Automated via Change Manager' },
    { name: 'S3 Intelligent Tiering', savings: '$35K', type: 'Hands-free', color: cf.success, effort: 'Automated via Change Manager' },
    { name: 'Duplicate CloudTrail trails', savings: '$18K', type: 'Hands-free', color: cf.success, effort: 'Automated via Change Manager' },
    { name: 'EC2 schedule (non-prod)', savings: '$40K', type: 'Infra team', color: cf.orange, effort: '~2 days, Joe + Kemario' },
    { name: 'RDS right-sizing', savings: '$27K', type: 'Infra team', color: cf.orange, effort: '~1 week, testing required' },
  ];

  return (
    <div style={{ ...fill, background: '#FFFFFF', padding: 100 }}>
      <FontLoader /><Styles />
      <LogoBar />

      <div style={{ marginTop: 36 }}>
        <Eyebrow>Phase 1 — before July</Eyebrow>
        <h2
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
            lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.1s',
          }}
        >
          Path to <span style={{ color: cf.success }}>$250K</span>.
        </h2>
      </div>

      {/* Table header */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 120px 120px 1fr',
        gap: 20, marginTop: 36, paddingBottom: 14, borderBottom: `2px solid ${cf.divider}`,
        fontSize: 16, fontWeight: 600, color: cf.fg3, textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        <span>Initiative</span>
        <span>Annualized</span>
        <span>Type</span>
        <span>Effort</span>
      </div>

      {items.map((item, i) => (
        <div
          key={item.name}
          className="cf-fadeUp"
          style={{
            animationDelay: `${0.2 + i * 0.07}s`,
            display: 'grid', gridTemplateColumns: '1fr 120px 120px 1fr',
            gap: 20, padding: '14px 0', borderBottom: `1px solid ${cf.divider}`,
            fontSize: 22, color: cf.fg1, alignItems: 'center',
          }}
        >
          <span style={{ fontWeight: 500 }}>{item.name}</span>
          <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>{item.savings}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 600, color: item.color,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} />
            {item.type}
          </span>
          <span style={{ fontSize: 18, color: cf.fg2 }}>{item.effort}</span>
        </div>
      ))}

      {/* Total */}
      <div className="cf-fadeUp" style={{
        animationDelay: '0.8s', display: 'grid', gridTemplateColumns: '1fr 120px 120px 1fr',
        gap: 20, padding: '18px 0 0', fontSize: 24, alignItems: 'center',
      }}>
        <span style={{ fontWeight: 700 }}>Total annualized</span>
        <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.success, fontSize: 28 }}>$250K</span>
        <span style={{ fontSize: 16, color: cf.fg3 }}>4 auto / 2 manual</span>
        <span style={{ fontSize: 18, color: cf.fg3 }}>~2 weeks total</span>
      </div>
    </div>
  );
};

// ─── Page 4: Path to $500K ──────────────────────────────────────────────────
const PathTo500: Page = () => {
  const items = [
    { name: 'CloudFront compression + caching', savings: '$40K', type: 'Hands-free', color: cf.success, effort: 'Automated' },
    { name: 'EC2 right-sizing (production)', savings: '$60K', type: 'Infra team', color: cf.orange, effort: '~2 weeks, load testing' },
    { name: 'RDS/ Aurora reserved coverage', savings: '$55K', type: 'Hands-free', color: cf.success, effort: 'RightSpend-led' },
    { name: 'ECS/Fargate task right-sizing', savings: '$30K', type: 'Infra team', color: cf.orange, effort: '~1 week' },
    { name: 'S3 lifecycle + Glacier Deep Archive', savings: '$25K', type: 'Hands-free', color: cf.success, effort: 'Automated' },
    { name: 'Lambda provisioned concurrency audit', savings: '$15K', type: 'Hands-free', color: cf.success, effort: 'Automated' },
    { name: 'Transfer acceleration + S3 cross-region', savings: '$25K', type: 'Infra team', color: cf.orange, effort: '~3 days' },
  ];

  return (
    <div style={{ ...fill, background: '#FFFFFF', padding: 100 }}>
      <FontLoader /><Styles />
      <LogoBar />

      <div style={{ marginTop: 36 }}>
        <Eyebrow>Phase 2 — 90-day extension</Eyebrow>
        <h2
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
            lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.1s',
          }}
        >
          Upside to <span style={{ color: cf.cyan }}>$500K</span>.
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 120px 120px 1fr',
        gap: 20, marginTop: 36, paddingBottom: 14, borderBottom: `2px solid ${cf.divider}`,
        fontSize: 16, fontWeight: 600, color: cf.fg3, textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        <span>Initiative</span>
        <span>Annualized</span>
        <span>Type</span>
        <span>Effort</span>
      </div>

      {items.map((item, i) => (
        <div
          key={item.name}
          className="cf-fadeUp"
          style={{
            animationDelay: `${0.2 + i * 0.07}s`,
            display: 'grid', gridTemplateColumns: '1fr 120px 120px 1fr',
            gap: 20, padding: '12px 0', borderBottom: `1px solid ${cf.divider}`,
            fontSize: 22, color: cf.fg1, alignItems: 'center',
          }}
        >
          <span style={{ fontWeight: 500 }}>{item.name}</span>
          <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>{item.savings}</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 16, fontWeight: 600, color: item.color,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color }} />
            {item.type}
          </span>
          <span style={{ fontSize: 18, color: cf.fg2 }}>{item.effort}</span>
        </div>
      ))}

      <div className="cf-fadeUp" style={{
        animationDelay: '0.8s', display: 'grid', gridTemplateColumns: '1fr 120px 120px 1fr',
        gap: 20, padding: '16px 0 0', fontSize: 24, alignItems: 'center',
      }}>
        <span style={{ fontWeight: 700 }}>Combined total (Phase 1 + 2)</span>
        <span style={{ fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.cyan, fontSize: 28 }}>$500K</span>
        <span style={{ fontSize: 16, color: cf.fg3 }}>7 auto / 5 manual</span>
        <span style={{ fontSize: 18, color: cf.fg3 }}>~6 weeks total</span>
      </div>
    </div>
  );
};

// ─── Page 5: Hands-free vs. team effort ─────────────────────────────────────
const Breakdown: Page = () => (
  <div style={{ ...fill, background: cf.surface1, padding: 100 }}>
    <FontLoader /><Styles />
    <LogoBar />

    <div style={{ marginTop: 36 }}>
      <Eyebrow>Who does what</Eyebrow>
      <h2
        className="cf-fadeUp"
        style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
          lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.1s',
        }}
      >
        Automated vs. infra team effort.
      </h2>
    </div>

    <div style={{ display: 'flex', gap: 36, marginTop: 48, flex: 1, minHeight: 0 }}>
      {/* Hands-free */}
      <div
        className="cf-fadeUp"
        style={{
          flex: 1, background: '#FFFFFF', borderRadius: 'var(--osd-radius)',
          border: `1px solid ${cf.divider}`, padding: '36px 32px',
          boxShadow: '0 4px 12px rgba(15,27,45,0.06)', display: 'flex',
          flexDirection: 'column', animationDelay: '0.25s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background: `${cf.success}14`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldIcon color={cf.success} size={22} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, fontWeight: 800, color: cf.success }}>
              Hands-free
            </div>
            <div style={{ fontSize: 16, color: cf.fg3 }}>CloudFix + RightSpend automated</div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 56, fontWeight: 800, color: cf.success, lineHeight: 1 }}>
          $325K
        </div>
        <div style={{ fontSize: 18, color: cf.fg3, marginTop: 8 }}>of $500K total (65%)</div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 20, color: cf.fg2 }}>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> RI/SP optimization</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> EBS GP3 migration</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> S3 Intelligent Tiering</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> Duplicate CloudTrail</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> CloudFront compression</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> S3 lifecycle + Glacier</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> Lambda concurrency audit</div>
        </div>
      </div>

      {/* Infra team */}
      <div
        className="cf-fadeUp"
        style={{
          flex: 1, background: '#FFFFFF', borderRadius: 'var(--osd-radius)',
          border: `1px solid ${cf.divider}`, padding: '36px 32px',
          boxShadow: '0 4px 12px rgba(15,27,45,0.06)', display: 'flex',
          flexDirection: 'column', animationDelay: '0.4s',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10, background: `${cf.orange}14`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 800, color: cf.orange,
          }}>
            <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke={cf.orange} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, fontWeight: 800, color: cf.orange }}>
              Infra team
            </div>
            <div style={{ fontSize: 16, color: cf.fg3 }}>Joe + Kemario</div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 56, fontWeight: 800, color: cf.orange, lineHeight: 1 }}>
          $175K
        </div>
        <div style={{ fontSize: 18, color: cf.fg3, marginTop: 8 }}>of $500K total (35%)</div>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 20, color: cf.fg2 }}>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> EC2 non-prod scheduling (~2 days)</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> RDS right-sizing (~1 week)</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> EC2 prod right-sizing (~2 weeks)</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> Fargate task sizing (~1 week)</div>
          <div style={{ display: 'flex', gap: 8 }}><CheckIcon /> S3 cross-region review (~3 days)</div>
        </div>
        <div style={{ marginTop: 'auto', padding: '16px 20px', borderRadius: 8, background: cf.surface2, fontSize: 18, color: cf.fg3, lineHeight: 1.45 }}>
          Total infra effort: ~4 person-weeks
        </div>
      </div>
    </div>
  </div>
);

// ─── Page 6: Why this time is different ─────────────────────────────────────
const WhyDifferent: Page = () => {
  const proof = [
    { point: 'Not another dashboard', detail: 'CloudFix implements fixes automatically via AWS Systems Manager. You approve, we execute.' },
    { point: 'Effort is labeled on every line', detail: 'No hidden resource costs. Every initiative shows who does the work and how long it takes.' },
    { point: 'Savings are auditable', detail: 'Every dollar maps to an AWS Cost Explorer line item. No modeling assumptions — actual spend reduction.' },
    { point: 'Risk is on us', detail: 'Pricing is a percentage of net-new savings. If we don’t deliver, you don’t pay.' },
  ];

  return (
    <div style={{ ...fill, background: cf.navy900, padding: 100, color: '#FFFFFF' }}>
      <FontLoader /><Styles />
      <LogoBar dark />

      <div style={{ marginTop: 36 }}>
        <div
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 20, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: cf.cyan, animationDelay: '0.1s',
          }}
        >
          Addressing skepticism directly
        </div>
        <h2
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
            lineHeight: 1.1, color: '#FFFFFF', margin: '12px 0 0', animationDelay: '0.15s',
          }}
        >
          Why this time is different.
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginTop: 44 }}>
        {proof.map((p, i) => (
          <div
            key={p.point}
            className="cf-fadeUp"
            style={{
              animationDelay: `${0.3 + i * 0.1}s`,
              padding: '28px 28px', borderRadius: 'var(--osd-radius)',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 26, fontWeight: 700, color: '#FFFFFF', marginBottom: 10 }}>
              {p.point}
            </div>
            <div style={{ fontSize: 22, lineHeight: 1.5, color: 'rgba(255,255,255,0.6)' }}>
              {p.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 7: Timeline ───────────────────────────────────────────────────────
const Timeline: Page = () => {
  const phases = [
    {
      label: 'Week 1',
      title: 'Quick wins',
      items: ['RightSpend RI/SP analysis', 'EBS GP3 migration batch', 'Duplicate CloudTrail cleanup'],
      savings: '$148K annualized',
      color: cf.success,
    },
    {
      label: 'Week 2–3',
      title: 'Infra-assisted',
      items: ['EC2 non-prod scheduling', 'RDS right-sizing (dev/staging)', 'S3 Intelligent Tiering'],
      savings: '+$102K annualized',
      color: cf.blue,
    },
    {
      label: 'Month 2–3',
      title: 'Deep optimization',
      items: ['EC2 prod right-sizing', 'RDS reserved coverage', 'CloudFront + S3 lifecycle'],
      savings: '+$250K annualized',
      color: cf.cyan,
    },
  ];

  return (
    <div style={{ ...fill, background: '#FFFFFF', padding: 100 }}>
      <FontLoader /><Styles />
      <LogoBar />

      <div style={{ marginTop: 36 }}>
        <Eyebrow>Timeline</Eyebrow>
        <h2
          className="cf-fadeUp"
          style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
            lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.1s',
          }}
        >
          Credible, time-bound plan for ELT.
        </h2>
      </div>

      <div style={{ display: 'flex', gap: 32, marginTop: 44, flex: 1, minHeight: 0 }}>
        {phases.map((phase, i) => (
          <div
            key={phase.label}
            className="cf-fadeUp"
            style={{
              animationDelay: `${0.25 + i * 0.12}s`, flex: 1, display: 'flex',
              flexDirection: 'column', borderRadius: 'var(--osd-radius)', background: cf.surface1,
              border: `1px solid ${cf.divider}`, overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(15,27,45,0.06)',
            }}
          >
            <div style={{
              padding: '20px 24px', background: `${phase.color}10`,
              borderBottom: `3px solid ${phase.color}`,
            }}>
              <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 14, fontWeight: 600, color: phase.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {phase.label}
              </div>
              <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 28, fontWeight: 800, color: cf.navy, marginTop: 4 }}>
                {phase.title}
              </div>
            </div>
            <div style={{ padding: '20px 24px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {phase.items.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, fontSize: 20, color: cf.fg2, alignItems: 'flex-start' }}>
                  <span style={{ color: phase.color, fontSize: 16, marginTop: 4 }}>●</span>
                  {item}
                </div>
              ))}
            </div>
            <div style={{
              padding: '16px 24px', borderTop: `1px solid ${cf.divider}`,
              fontFamily: 'var(--osd-font-display)', fontSize: 22, fontWeight: 800, color: phase.color,
            }}>
              {phase.savings}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 8: Next steps ─────────────────────────────────────────────────────
const NextSteps: Page = () => (
  <div style={{ ...fill, background: cf.navy, padding: 100, color: '#FFFFFF' }}>
    <FontLoader /><Styles />
    <div style={{
      position: 'absolute', inset: 0, padding: 100,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      alignItems: 'center', textAlign: 'center',
    }}>
      <div className="cf-fadeUp" style={{ animationDelay: '0.05s' }}>
        <img src={logoWhite} alt="CloudFix" style={{ height: 40, marginBottom: 40 }} />
      </div>

      <h1
        className="cf-fadeUp"
        style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 96, fontWeight: 800,
          lineHeight: 1.05, letterSpacing: '-0.015em', color: '#FFFFFF',
          margin: 0, animationDelay: '0.15s',
        }}
      >
        Let's build this plan together.
      </h1>
      <p
        className="cf-fadeUp"
        style={{
          fontSize: 28, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)',
          maxWidth: 800, marginTop: 24, animationDelay: '0.3s',
        }}
      >
        We welcome iteration before Monday's ELT meeting. Send feedback, we'll refine.
      </p>

      <div
        className="cf-fadeUp"
        style={{ animationDelay: '0.45s', marginTop: 48, display: 'flex', gap: 28 }}
      >
        {[
          { label: 'Review this deck', detail: 'Mark up anything that needs changing' },
          { label: 'Align on Phase 1', detail: 'Confirm hands-free go-ahead this week' },
          { label: 'Present to ELT', detail: 'Monday — credible plan in hand' },
        ].map((step) => (
          <div key={step.label} style={{
            padding: '24px 28px', borderRadius: 'var(--osd-radius)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
            textAlign: 'left', minWidth: 240,
          }}>
            <div style={{ fontFamily: 'var(--osd-font-display)', fontSize: 22, fontWeight: 700, color: '#FFFFFF' }}>
              {step.label}
            </div>
            <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>
              {step.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="cf-fadeUp" style={{ animationDelay: '0.6s', marginTop: 40, fontSize: 20, color: 'rgba(255,255,255,0.4)' }}>
        Bill Gleeson — bill.gleeson@cloudfix.com
      </div>
    </div>
  </div>
);

// ─── Export ──────────────────────────────────────────────────────────────────
export const meta: SlideMeta = { title: 'CloudFix + Exiger — Path to Savings' };

export default [
  Cover,
  CurrentState,
  PathTo250,
  PathTo500,
  Breakdown,
  WhyDifferent,
  Timeline,
  NextSteps,
] satisfies Page[];
