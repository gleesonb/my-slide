import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

import logoNavy from './assets/logo-navy.png';
import logoWhite from './assets/logo-white.png';
import awsPartner from './assets/aws-partner.svg';

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
  typeScale: { hero: 96, body: 28 },
  radius: 10,
};

// ─── Palette ────────────────────────────────────────────────────────────────
const cf = {
  navy: '#1F3A68', navy900: '#142747', blue: '#2A8FEA', blue100: '#DCEBFB',
  cyan: '#2AC1D6', teal: '#2FCFB3', orange: '#ED8705', success: '#1FB36B',
  fg1: '#1B2A41', fg2: '#4A5A75', fg3: '#7A8AA3', fg4: '#A9B5C7',
  divider: '#E4EAF1', surface2: '#F5F8FB', surface1: '#FBFCFE',
  gradLogo: 'linear-gradient(95deg, #2AC1D6 0%, #2A8FEA 60%, #1F3A68 100%)',
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
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .cf-fadeUp { opacity: 0; animation: cf-fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; }
  `}</style>
);

const LogoBar = ({ dark = false }: { dark?: boolean }) => (
  <div className="cf-fadeUp" style={{
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    animationDelay: '0.05s',
  }}>
    <img src={dark ? logoWhite : logoNavy} alt="CloudFix RightSpend" style={{ height: 36 }} />
    <img src={awsPartner} alt="AWS Partner" style={{ height: 28, opacity: dark ? 0.5 : 0.35 }} />
  </div>
);

// ─── Page 1: Cover ──────────────────────────────────────────────────────────
const Cover: Page = () => (
  <div style={{ ...fill, background: cf.navy900, color: '#FFFFFF' }}>
    <FontLoader /><Styles />
    <div style={{
      position: 'absolute', inset: 0, padding: '120px 160px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <LogoBar dark />

      <div>
        <div className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 700,
          letterSpacing: '0.14em', textTransform: 'uppercase', color: cf.cyan,
          animationDelay: '0.1s',
        }}>
          RightSpend billing statement
        </div>
        <h1 className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 'var(--osd-size-hero)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em',
          color: '#FFFFFF', margin: '24px 0', maxWidth: 1200, animationDelay: '0.2s',
        }}>
          Ellucian
        </h1>
        <p className="cf-fadeUp" style={{
          fontSize: 26, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)',
          animationDelay: '0.3s',
        }}>
          April 01, 2026 — May 01, 2026
        </p>
      </div>

      <div className="cf-fadeUp" style={{
        animationDelay: '0.45s', display: 'flex', gap: 40, fontSize: 18, color: cf.fg4,
      }}>
        <span>Statement date: May 05, 2026</span>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
        <span>CloudFix RightSpend</span>
      </div>
    </div>
  </div>
);

// ─── Page 2: Executive summary ──────────────────────────────────────────────
const Summary: Page = () => (
  <div style={{ ...fill, background: '#FFFFFF', padding: 100 }}>
    <FontLoader /><Styles />
    <LogoBar />

    <div style={{ marginTop: 40 }}>
      <div className="cf-fadeUp" style={{
        fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 700,
        letterSpacing: '0.12em', textTransform: 'uppercase', color: cf.blue, animationDelay: '0.1s',
      }}>
        Executive summary
      </div>
      <h2 className="cf-fadeUp" style={{
        fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 800,
        lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.15s',
      }}>
        Your savings this period.
      </h2>
    </div>

    <div style={{ display: 'flex', gap: 32, marginTop: 48, flex: 1, minHeight: 0 }}>
      {/* Net savings — hero card */}
      <div className="cf-fadeUp" style={{
        flex: 1.2, background: cf.success, borderRadius: 'var(--osd-radius)',
        padding: '48px 44px', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', boxShadow: '0 12px 40px rgba(31,179,107,0.25)',
        animationDelay: '0.25s',
      }}>
        <div style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 16, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
        }}>
          Your net savings
        </div>
        <div style={{
          fontFamily: 'var(--osd-font-display)', fontWeight: 800,
          fontSize: 80, lineHeight: 1, letterSpacing: '-0.02em',
          color: '#FFFFFF', marginTop: 16,
        }}>
          $1,023,987
        </div>
        <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.65)', marginTop: 12 }}>
          After EDP discount and CloudFix fee
        </div>
      </div>

      {/* Right column — gross + fee */}
      <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div className="cf-fadeUp" style={{
          flex: 1, background: cf.surface2, borderRadius: 'var(--osd-radius)',
          padding: '36px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          border: `1px solid ${cf.divider}`, animationDelay: '0.35s',
        }}>
          <div style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase', color: cf.fg3,
          }}>
            Gross savings (EDP-adjusted)
          </div>
          <div style={{
            fontFamily: 'var(--osd-font-display)', fontWeight: 800,
            fontSize: 52, lineHeight: 1, letterSpacing: '-0.02em',
            color: cf.navy, marginTop: 12,
          }}>
            $1,365,316
          </div>
        </div>
        <div className="cf-fadeUp" style={{
          flex: 1, background: '#FFFFFF', borderRadius: 'var(--osd-radius)',
          padding: '36px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          border: `1px solid ${cf.divider}`, boxShadow: '0 2px 8px rgba(15,27,45,0.04)',
          animationDelay: '0.45s',
        }}>
          <div style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 14, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase', color: cf.fg3,
          }}>
            CloudFix RightSpend fee (25%)
          </div>
          <div style={{
            fontFamily: 'var(--osd-font-display)', fontWeight: 800,
            fontSize: 52, lineHeight: 1, letterSpacing: '-0.02em',
            color: cf.fg2, marginTop: 12,
          }}>
            $341,329
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Page 3: Cost breakdown ─────────────────────────────────────────────────
const Breakdown: Page = () => {
  const rows = [
    { category: 'Savings Plans', amortized: '$221,586', onDemand: '$456,834' },
    { category: 'Reserved Instances', amortized: '$1,812,461', onDemand: '$3,242,233' },
    { category: 'On-Demand Usage', amortized: '—', onDemand: '$202,515' },
  ];

  return (
    <div style={{ ...fill, background: '#FFFFFF', padding: 100 }}>
      <FontLoader /><Styles />
      <LogoBar />

      <div style={{ marginTop: 40 }}>
        <div className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: cf.blue, animationDelay: '0.1s',
        }}>
          AWS Cost Explorer data
        </div>
        <h2 className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 800,
          lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.15s',
        }}>
          Where the numbers come from.
        </h2>
      </div>

      {/* Table */}
      <div style={{ marginTop: 44 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 240px 240px',
          gap: 24, paddingBottom: 16, borderBottom: `2px solid ${cf.divider}`,
          fontSize: 16, fontWeight: 600, color: cf.fg3,
          textTransform: 'uppercase', letterSpacing: '0.06em',
        }}>
          <span>Category</span>
          <span style={{ textAlign: 'right' }}>Amortized commitment</span>
          <span style={{ textAlign: 'right' }}>On-demand equivalent</span>
        </div>
        {rows.map((r, i) => (
          <div key={r.category} className="cf-fadeUp" style={{
            animationDelay: `${0.25 + i * 0.08}s`,
            display: 'grid', gridTemplateColumns: '1fr 240px 240px',
            gap: 24, padding: '22px 0', borderBottom: `1px solid ${cf.divider}`,
            fontSize: 28, color: cf.fg1, alignItems: 'center',
          }}>
            <span style={{ fontWeight: 600 }}>{r.category}</span>
            <span style={{ textAlign: 'right', fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: cf.navy }}>{r.amortized}</span>
            <span style={{ textAlign: 'right', fontFamily: 'var(--osd-font-display)', fontWeight: 700, color: cf.navy }}>{r.onDemand}</span>
          </div>
        ))}
        {/* Total */}
        <div className="cf-fadeUp" style={{
          animationDelay: '0.55s',
          display: 'grid', gridTemplateColumns: '1fr 240px 240px',
          gap: 24, padding: '22px 0 0', fontSize: 28, alignItems: 'center',
          borderTop: `3px solid ${cf.navy}`, marginTop: 8,
        }}>
          <span style={{ fontWeight: 800 }}>Total</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>$2,236,562</span>
          <span style={{ textAlign: 'right', fontFamily: 'var(--osd-font-display)', fontWeight: 800, color: cf.navy }}>$3,901,581</span>
        </div>
      </div>

      {/* ESR callout */}
      <div className="cf-fadeUp" style={{
        animationDelay: '0.65s', marginTop: 40, padding: '28px 36px',
        borderRadius: 'var(--osd-radius)', background: cf.blue100,
        borderLeft: `4px solid ${cf.blue}`,
        display: 'flex', gap: 36, alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 600, color: cf.fg3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Enterprise Savings Rate
          </div>
          <div style={{
            fontFamily: 'var(--osd-font-display)', fontSize: 56, fontWeight: 800,
            color: cf.blue, lineHeight: 1, marginTop: 8,
          }}>
            42.7%
          </div>
        </div>
        <div style={{ fontSize: 22, color: cf.fg2, lineHeight: 1.5, flex: 1 }}>
          1 - ($2,236,562 actual / $3,901,581 on-demand equivalent). All CloudFix savings are calculated above your 0% Base ESR.
        </div>
      </div>
    </div>
  );
};

// ─── Page 4: How it's calculated ────────────────────────────────────────────
const Calculation: Page = () => {
  const steps = [
    { label: 'Billable savings', formula: 'On-demand equivalent x Delta ESR', value: '$1,665,020' },
    { label: 'Your EDP discount (18%)', formula: 'Billable savings x (1 - 0.18)', value: '$1,365,316' },
    { label: 'CloudFix fee (25%)', formula: 'EDP-adjusted x 0.25', value: '$341,329' },
    { label: 'Your net savings', formula: 'EDP-adjusted - CloudFix fee', value: '$1,023,987', highlight: true },
  ];

  return (
    <div style={{ ...fill, background: cf.surface2, padding: 100 }}>
      <FontLoader /><Styles />
      <LogoBar />

      <div style={{ marginTop: 40 }}>
        <div className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: cf.blue, animationDelay: '0.1s',
        }}>
          Savings calculation
        </div>
        <h2 className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 800,
          lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.15s',
        }}>
          How your savings are calculated.
        </h2>
        <p className="cf-fadeUp" style={{
          fontSize: 24, lineHeight: 1.5, color: cf.fg2, marginTop: 12, animationDelay: '0.2s',
        }}>
          We only bill on savings above your Base ESR. Your EDP discount is applied before our fee.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 44 }}>
        {steps.map((s, i) => (
          <div key={s.label} className="cf-fadeUp" style={{
            animationDelay: `${0.3 + i * 0.1}s`,
            display: 'grid', gridTemplateColumns: '320px 1fr 240px',
            gap: 24, padding: '28px 36px', borderRadius: 'var(--osd-radius)',
            background: s.highlight ? cf.success : '#FFFFFF',
            color: s.highlight ? '#FFFFFF' : cf.fg1,
            border: s.highlight ? 'none' : `1px solid ${cf.divider}`,
            boxShadow: s.highlight ? '0 8px 24px rgba(31,179,107,0.2)' : '0 2px 6px rgba(15,27,45,0.04)',
            alignItems: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--osd-font-display)', fontSize: 24, fontWeight: 700,
            }}>
              {s.label}
            </div>
            <div style={{
              fontSize: 22, color: s.highlight ? 'rgba(255,255,255,0.7)' : cf.fg3,
              fontFamily: 'ui-monospace, Menlo, monospace',
            }}>
              {s.formula}
            </div>
            <div style={{
              fontFamily: 'var(--osd-font-display)', fontSize: 32, fontWeight: 800,
              textAlign: 'right',
            }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 5: How to verify ──────────────────────────────────────────────────
const Verify: Page = () => {
  const sections = [
    {
      title: 'Savings Plans',
      steps: [
        'Cost Explorer > Savings Plans > Savings Plans utilization',
        'Date range: April 01 - May 01, 2026',
        'Filter: ComputeSavingsPlans + EC2InstanceSavingsPlans',
        'Look for AmortizedCommitment and OnDemandCostEquivalent',
      ],
    },
    {
      title: 'Reserved Instances',
      steps: [
        'Cost Explorer > Reservations > Reservation utilization',
        'Date range: April 01 - May 01, 2026',
        'Look for TotalAmortizedFee and OnDemandCostOfRIHoursUsed',
      ],
    },
    {
      title: 'On-Demand Usage',
      steps: [
        'Cost Explorer > Savings Plans > Savings Plans coverage',
        'Filter services: EC2, Lambda, ECS, EKS',
        'Look for OnDemandCost',
      ],
    },
  ];

  return (
    <div style={{ ...fill, background: '#FFFFFF', padding: 100 }}>
      <FontLoader /><Styles />
      <LogoBar />

      <div style={{ marginTop: 40 }}>
        <div className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: cf.blue, animationDelay: '0.1s',
        }}>
          Verification
        </div>
        <h2 className="cf-fadeUp" style={{
          fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 800,
          lineHeight: 1.1, color: cf.navy, margin: '12px 0 0', animationDelay: '0.15s',
        }}>
          How to verify in AWS Cost Explorer.
        </h2>
      </div>

      <div style={{ display: 'flex', gap: 32, marginTop: 44, flex: 1, minHeight: 0 }}>
        {sections.map((s, i) => (
          <div key={s.title} className="cf-fadeUp" style={{
            animationDelay: `${0.3 + i * 0.1}s`, flex: 1, display: 'flex',
            flexDirection: 'column', borderRadius: 'var(--osd-radius)', background: cf.surface1,
            border: `1px solid ${cf.divider}`, overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(15,27,45,0.06)',
          }}>
            <div style={{
              padding: '20px 28px', borderBottom: `3px solid ${cf.blue}`,
              background: cf.surface2,
            }}>
              <div style={{
                fontFamily: 'var(--osd-font-display)', fontSize: 24, fontWeight: 800, color: cf.navy,
              }}>
                {s.title}
              </div>
            </div>
            <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {s.steps.map((step, j) => (
                <div key={j} style={{
                  display: 'flex', gap: 10, fontSize: 18, color: cf.fg2,
                  lineHeight: 1.45, alignItems: 'flex-start',
                }}>
                  <span style={{ color: cf.blue, fontSize: 14, marginTop: 5, flexShrink: 0 }}>{j + 1}.</span>
                  {step}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Page 6: What RightSpend does ───────────────────────────────────────────
const WhatRightSpend: Page = () => (
  <div style={{ ...fill, background: cf.navy, padding: 100, color: '#FFFFFF' }}>
    <FontLoader /><Styles />
    <div style={{
      position: 'absolute', inset: 0, padding: 100,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      alignItems: 'center', textAlign: 'center',
    }}>
      <div className="cf-fadeUp" style={{ animationDelay: '0.05s' }}>
        <img src={logoWhite} alt="CloudFix" style={{ height: 36, marginBottom: 40 }} />
      </div>

      <div className="cf-fadeUp" style={{
        fontFamily: 'var(--osd-font-display)', fontSize: 18, fontWeight: 700,
        letterSpacing: '0.14em', textTransform: 'uppercase', color: cf.cyan,
        animationDelay: '0.1s',
      }}>
        How RightSpend works
      </div>
      <h1 className="cf-fadeUp" style={{
        fontFamily: 'var(--osd-font-display)', fontSize: 72, fontWeight: 800,
        lineHeight: 1.1, letterSpacing: '-0.015em', color: '#FFFFFF',
        margin: '20px 0 0', maxWidth: 1100, animationDelay: '0.2s',
      }}>
        You only pay for results.
      </h1>

      <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
        {[
          { num: '01', text: 'We calculate savings above your Base ESR' },
          { num: '02', text: 'Your EDP discount is applied first' },
          { num: '03', text: 'We take 25% of the remaining savings' },
          { num: '04', text: 'You keep the rest' },
        ].map((step, i) => (
          <div key={step.num} className="cf-fadeUp" style={{
            animationDelay: `${0.35 + i * 0.1}s`,
            padding: '28px 28px', borderRadius: 'var(--osd-radius)',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            width: 260, textAlign: 'left',
          }}>
            <div style={{
              fontFamily: 'var(--osd-font-display)', fontSize: 32, fontWeight: 800,
              color: cf.cyan, marginBottom: 12,
            }}>
              {step.num}
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.45, color: 'rgba(255,255,255,0.7)' }}>
              {step.text}
            </div>
          </div>
        ))}
      </div>

      <div className="cf-fadeUp" style={{
        animationDelay: '0.75s', marginTop: 48, fontSize: 20,
        color: 'rgba(255,255,255,0.4)',
      }}>
        Questions? Contact your CloudFix RightSpend account manager or visit support.cloudfix.com
      </div>
    </div>
  </div>
);

// ─── Export ──────────────────────────────────────────────────────────────────
export const meta: SlideMeta = { title: 'RightSpend Billing — Ellucian — April 2026' };

export default [
  Cover,
  Summary,
  Breakdown,
  Calculation,
  Verify,
  WhatRightSpend,
] satisfies Page[];
