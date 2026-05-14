import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import { ImagePlaceholder } from '@open-slide/core';
import cloudfixLogo from './assets/cloudfix-logo-white.svg';
import screenshot20260513084648 from './assets/Screenshot 2026-05-13 084648.png';
import screenshot20260513084943 from './assets/Screenshot 2026-05-13 084943.png';
import screenshot20260513085024 from './assets/Screenshot 2026-05-13 085024.png';




export const design: DesignSystem = {
  palette: {
    bg: '#0F1B2D',
    text: '#F8FAFC',
    accent: '#2A8FEA',
  },
  fonts: {
    display: 'Raleway, "Helvetica Neue", Arial, sans-serif',
    body: '"Open Sans", "Helvetica Neue", Arial, sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 10,
};

// ── CloudFix design system ──
const navy = '#1F3A68';
const navy900 = '#142747';
const blue = '#2A8FEA';
const cyan = '#2AC1D6';
const cfTeal = '#2FCFB3';
const orange = '#ED8705';

// ── costexplorer.fast brand ──
const ceTeal = '#0b81a2';
const ceGold = '#f0c571';
const cePurple = '#7E4794';
const ceCoral = '#e25759';

// ── Neutrals ──
const ink = '#0F1B2D';
const fg1 = '#F8FAFC';
const fg2 = '#A9B5C7';
const fg3 = '#7A8AA3';

const gradCF = 'linear-gradient(95deg, #2AC1D6 0%, #2A8FEA 60%, #1F3A68 100%)';
const gradCE = 'linear-gradient(135deg, #0b81a2 0%, #7E4794 60%, #e25759 100%)';

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
} as const;

const cardBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 'var(--osd-radius)',
  padding: '40px 36px',
};

// ── Page 1: Cover ──
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      background: `linear-gradient(160deg, ${ink} 0%, ${navy} 50%, ${navy900} 100%)`,
      color: fg1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 160px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -300,
        right: -200,
        width: 900,
        height: 900,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(42,193,214,0.12) 0%, transparent 70%)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: -200,
        left: -100,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(11,129,162,0.10) 0%, transparent 70%)',
      }}
    />
    <div
      style={{
        fontSize: 22,
        color: blue,
        letterSpacing: '0.2em',
        fontWeight: 700,
        fontFamily: 'var(--osd-font-display)',
        textTransform: 'uppercase',
      }}
    >
      New from CloudFix
    </div>
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 900,
        margin: '40px 0 0',
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
      }}
    >
      costexplorer
      <span style={{ color: ceGold, fontWeight: 300 }}>.fast</span>
    </h1>
    <p
      style={{
        fontSize: 44,
        color: fg2,
        margin: '36px 0 0',
        lineHeight: 1.4,
        maxWidth: 1000,
      }}
    >
      AWS cost intelligence for complex estates.
    </p>
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        left: 160,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <img src={cloudfixLogo} style={{ height: 28, flexShrink: 0 }} />
      <span
        style={{
          fontSize: 22,
          color: fg3,
          fontFamily: 'var(--osd-font-display)',
          fontWeight: 600,
        }}
      >
        CloudFix Add-On
      </span>
    </div>
  </div>
);

// ── Page 2: The Problem ──
const Problem: Page = () => (
  <div
    style={{
      ...fill,
      background: ink,
      color: fg1,
      padding: '100px 120px',
    }}
  >
    <div
      style={{
        fontSize: 22,
        color: blue,
        letterSpacing: '0.15em',
        fontWeight: 700,
        fontFamily: 'var(--osd-font-display)',
        textTransform: 'uppercase',
      }}
    >
      The Problem
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 76,
        fontWeight: 800,
        margin: '20px 0 0',
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
      }}
    >
      AWS cost investigation
      <br />
      is broken
    </h2>
    <div
      style={{
        display: 'flex',
        gap: 32,
        marginTop: 56,
        flex: 1,
      }}
    >
      {[
        {
          icon: '⏱',
          num: '01',
          title: 'Misleading defaults',
          body: 'AWS Cost Explorer defaults to unblended cost, giving a completely wrong impression of spend per account. Most people never change it — and make decisions on bad data.',
        },
        {
          icon: '📊',
          num: '02',
          title: 'Investigations are manual',
          body: 'Comparing this week\'s spend to last week means exporting data, aligning dates, and building formulas. By the time the analysis is done, the spike is old news.',
        },
        {
          icon: '🏢',
          num: '03',
          title: 'Costs in Account IDs',
          body: 'Finance thinks in Business Units and Products. AWS thinks in 12-digit account numbers. The gap is filled with spreadsheets.',
        },
      ].map((p) => (
        <div
          key={p.num}
          style={{
            ...cardBase,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 56,
              fontWeight: 900,
              color: ceCoral,
              opacity: 0.6,
              lineHeight: 1,
            }}
          >
            {p.num}
          </div>
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 36,
              fontWeight: 700,
              margin: '28px 0 16px',
              lineHeight: 1.2,
            }}
          >
            {p.title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: fg2,
              lineHeight: 1.6,
            }}
          >
            {p.body}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Page 3: The Solution ──
const Solution: Page = () => (
  <div
    style={{
      ...fill,
      background: ink,
      color: fg1,
      padding: '100px 120px',
    }}
  >
    <div
      style={{
        fontSize: 22,
        color: cfTeal,
        letterSpacing: '0.15em',
        fontWeight: 700,
        fontFamily: 'var(--osd-font-display)',
        textTransform: 'uppercase',
      }}
    >
      Built into CloudFix
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 800,
        margin: '20px 0 0',
        lineHeight: 1.1,
        letterSpacing: '-0.01em',
      }}
    >
      AWS cost intelligence for complex estates
    </h2>
    <p
      style={{
        fontSize: 32,
        color: fg2,
        margin: '24px 0 0',
        lineHeight: 1.6,
        maxWidth: 1100,
      }}
    >
      A CloudFix add-on that turns raw Cost Explorer data into immediately actionable insights.
      Purpose-built for customers with multi-account AWS organizations spending $50K+/month.
    </p>
    <div style={{ display: 'flex', gap: 32, marginTop: 52 }}>
      {[
        {
          title: 'One-click drill-down',
          body: '9 dimensions, unlimited depth. From total spend to a specific usage type in 10 seconds.',
          accent: blue,
        },
        {
          title: 'Variance comparison',
          body: 'Compare any period to 7 days, 1 month, or 3 months ago. Spikes surface instantly.',
          accent: ceTeal,
        },
        {
          title: 'Corporate taxonomy',
          body: 'Map Account IDs to your Business Units, Products, and Owners. Costs in business terms.',
          accent: cePurple,
        },
      ].map((f) => (
        <div
          key={f.title}
          style={{
            ...cardBase,
            flex: 1,
            borderTop: `3px solid ${f.accent}`,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {f.title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: fg2,
              lineHeight: 1.6,
              marginTop: 20,
            }}
          >
            {f.body}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ── Page 4: Drill-Down Deep Dive ──
const DrillDown: Page = () => {
  const dims = [
    'BU',
    'Product',
    'Account',
    'Owner',
    'Service',
    'Charge Type',
    'Region',
    'AI',
    'Usage Type',
  ];
  return (
    <div
      style={{
        ...fill,
        background: ink,
        color: fg1,
        padding: '100px 120px',
      }}
    >
      <div
        style={{
          fontSize: 22,
          color: blue,
          letterSpacing: '0.15em',
          fontWeight: 700,
          fontFamily: 'var(--osd-font-display)',
          textTransform: 'uppercase',
        }}
      >
        Feature Deep Dive
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 76,
          fontWeight: 800,
          margin: '20px 0 0',
          lineHeight: 1.1,
        }}
      >
        One click. Nine dimensions.
      </h2>
      {/* Dimension flow */}
      <div
        style={{
          display: 'flex',
          gap: 0,
          marginTop: 52,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {dims.map((d, i) => (
          <div
            key={d}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 24,
                fontWeight: 700,
                padding: '12px 20px',
                borderRadius: 8,
                background:
                  i === 0
                    ? blue
                    : 'rgba(255,255,255,0.06)',
                border: `1px solid ${i === 0 ? blue : 'rgba(255,255,255,0.12)'}`,
                color: i === 0 ? '#fff' : fg1,
                whiteSpace: 'nowrap',
              }}
            >
              {d}
            </div>
            {i < dims.length - 1 && (
              <div
                style={{
                  color: fg3,
                  fontSize: 20,
                  fontWeight: 700,
                  padding: '0 10px',
                }}
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Example callout */}
      <div
        style={{
          marginTop: 52,
          background: 'rgba(42,143,234,0.08)',
          border: '1px solid rgba(42,143,234,0.2)',
          margin: '52px auto 0',
          maxWidth: 1400,
          borderRadius: 'var(--osd-radius)',
          padding: '36px 44px',
          display: 'flex',
          alignItems: 'center',
          gap: 36,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: gradCE,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <span style={{ fontSize: 36 }}>⚡</span>
        </div>
        <div>
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 30,
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            From &quot;why did spend spike?&quot; to &quot;EC2 in us-east-1 in the prod account&quot;
          </div>
          <div
            style={{
              fontSize: 26,
              color: fg2,
              marginTop: 8,
              lineHeight: 1.5,
            }}
          >
            Under 10 seconds. No filters to configure. No pages to navigate. Just click.
          </div>
        </div>
      </div>
      {/* Stat row */}
      <div
        style={{
          display: 'flex',
          gap: 80,
          marginTop: 48,
          justifyContent: 'center',
        }}
      >
        {[
          { num: '9', label: 'Dimensions' },
          { num: '<1s', label: 'Per drill-down' },
          { num: '0', label: 'Filters to configure' },
        ].map((s) => (
          <div key={s.label}>
            <div
              style={{
                fontFamily: 'var(--osd-font-display)',
                fontSize: 56,
                fontWeight: 900,
                color: ceGold,
                lineHeight: 1,
              }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontSize: 24,
                color: fg3,
                marginTop: 8,
                fontFamily: 'var(--osd-font-display)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Page 5: Variance & Amortization ──
const VarianceAmortization: Page = () => (
  <div
    style={{
      ...fill,
      background: ink,
      color: fg1,
      padding: '100px 120px',
    }}
  >
    <div
      style={{
        fontSize: 22,
        color: blue,
        letterSpacing: '0.15em',
        fontWeight: 700,
        fontFamily: 'var(--osd-font-display)',
        textTransform: 'uppercase',
      }}
    >
      Feature Deep Dive
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 800,
        margin: '20px 0 0',
        lineHeight: 1.1,
      }}
    >
      Spot changes, share instantly
    </h2>
    <div style={{ display: 'flex', gap: 40, marginTop: 52, flex: 1 }}>
      {/* Variance */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            ...cardBase,
            flex: 1,
            borderTop: '3px solid #2A8FEA',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            Variance comparison
          </div>
          <div
            style={{
              fontSize: 28,
              color: fg2,
              lineHeight: 1.6,
              marginTop: 16,
            }}
          >
            One toggle switches to variance view, comparing current spend against 7 days, 1 month, or 3 months ago.
          </div>
          {/* Mock toggle buttons */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 28,
            }}
          >
            {['vs 7d ago', 'vs 1mo ago', 'vs 3mo ago'].map((t, i) => (
              <div
                key={t}
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  padding: '10px 20px',
                  borderRadius: 6,
                  background: i === 0 ? blue : 'rgba(255,255,255,0.06)',
                  border: `1px solid ${i === 0 ? blue : 'rgba(255,255,255,0.1)'}`,
                  color: i === 0 ? '#fff' : fg2,
                }}
              >
                {t}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 26,
              color: fg3,
              marginTop: 24,
              lineHeight: 1.5,
              fontStyle: 'italic',
            }}
          >
            No exports. No spreadsheets. No waiting.
          </div>
        </div>
      </div>
      {/* Shareable deep links */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            ...cardBase,
            flex: 1,
            borderTop: '3px solid #0b81a2',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            Shareable deep links
          </div>
          <div
            style={{
              fontSize: 28,
              color: fg2,
              lineHeight: 1.6,
              marginTop: 16,
            }}
          >
            Every chart is a URL. Copy the link, send it to a colleague — they see the exact same view.
          </div>
          {/* Mock URL bar */}
          <div
            style={{
              marginTop: 28,
              padding: '16px 20px',
              borderRadius: 8,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                fontSize: 14,
                color: cfTeal,
                fontWeight: 700,
                fontFamily: 'var(--osd-font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                flexShrink: 0,
              }}
            >
              URL
            </div>
            <div
              style={{
                fontFamily: 'ui-monospace, monospace',
                fontSize: 20,
                color: fg2,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              costexplorer.fast/view/730335654448?service=EC2&region=us-east-1&group=account
            </div>
          </div>
          <div
            style={{
              fontSize: 26,
              color: fg3,
              marginTop: 20,
              lineHeight: 1.5,
            }}
          >
            Works in Slack, email, Jira — anywhere you paste a link. Recipients don't need Cost Explorer access or AWS permissions to view shared charts.
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── Page 6: Taxonomy, Deep Links & Setup ──
const TaxonomySetup: Page = () => (
  <div
    style={{
      ...fill,
      background: ink,
      color: fg1,
      padding: '100px 120px',
    }}
  >
    <div
      style={{
        fontSize: 22,
        color: blue,
        letterSpacing: '0.15em',
        fontWeight: 700,
        fontFamily: 'var(--osd-font-display)',
        textTransform: 'uppercase',
      }}
    >
      Built for your workflow
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 800,
        margin: '20px 0 0',
        lineHeight: 1.1,
      }}
    >
      Costs in business terms
    </h2>
    <div style={{ display: 'flex', gap: 32, marginTop: 48 }}>
      {/* Corporate Taxonomy */}
      <div
        style={{
          ...cardBase,
          flex: 1.2,
          borderTop: `3px solid ${cePurple}`,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          Corporate taxonomy
        </div>
        <div
          style={{
            fontSize: 26,
            color: fg2,
            lineHeight: 1.5,
            marginTop: 16,
          }}
        >
          Upload a mapping file. Account IDs become Business Units, Products, and Owners instantly.
        </div>
        <div
          style={{
            marginTop: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {[
            {
              id: '201526351103',
              name: 'Production',
              bu: 'SaaS Platform',
              owner: 'jane@company.com',
            },
            {
              id: '887704487240',
              name: 'Central Network',
              bu: 'Infrastructure',
              owner: 'bob@company.com',
            },
          ].map((m) => (
            <div
              key={m.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '14px 18px',
                borderRadius: 8,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontSize: 22,
              }}
            >
              <code
                style={{
                  fontFamily: 'ui-monospace, monospace',
                  color: fg3,
                  fontSize: 20,
                }}
              >
                {m.id}
              </code>
              <span style={{ color: blue }}>→</span>
              <span style={{ fontWeight: 600 }}>{m.name}</span>
              <span
                style={{
                  color: cePurple,
                  fontSize: 18,
                  padding: '4px 12px',
                  borderRadius: 4,
                  background: 'rgba(126,71,148,0.15)',
                }}
              >
                {m.bu}
              </span>
              <span style={{ color: fg3, fontSize: 20 }}>{m.owner}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right column: Deep Links + Setup stacked */}
      <div
        style={{
          flex: 0.9,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        {/* Deep Links */}
        <div
          style={{
            ...cardBase,
            borderTop: `3px solid ${cfTeal}`,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            Shareable deep links
          </div>
          <div
            style={{
              fontSize: 26,
              color: fg2,
              lineHeight: 1.5,
              marginTop: 14,
            }}
          >
            Every view is a URL. Send a colleague the exact chart you're looking at — filters, dimensions, time range all preserved.
          </div>
        </div>
        {/* Setup */}
        <div
          style={{
            ...cardBase,
            borderTop: `3px solid ${orange}`,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            60-second setup
          </div>
          <div
            style={{
              fontSize: 26,
              color: fg2,
              lineHeight: 1.5,
              marginTop: 14,
            }}
          >
            Click &quot;Connect&quot; → CloudFormation creates a read-only IAM role → data appears in minutes. Enabled by your CloudFix account team.
          </div>
          <div
            style={{
              display: 'inline-block',
              marginTop: 14,
              fontSize: 18,
              color: orange,
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: 4,
              background: 'rgba(237,135,5,0.1)',
              border: '1px solid rgba(237,135,5,0.2)',
              fontFamily: 'var(--osd-font-display)',
              letterSpacing: '0.04em',
            }}
          >
            ✓ READ-ONLY · NO ACCESS TO APPLICATIONS OR DATA
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── Page 7: CloudFix Integration ──
const Integration: Page = () => {
  const steps = [
    { label: 'Spot anomaly', owner: 'ce' as const },
    { label: 'Investigate drill-down', owner: 'ce' as const },
    { label: 'Find optimization', owner: 'cf' as const },
    { label: 'Implement fix', owner: 'cf' as const },
    { label: 'Verify impact', owner: 'ce' as const },
  ];
  const stepColor = (owner: 'ce' | 'cf') => owner === 'ce' ? ceTeal : cfTeal;
  const stepBg = (owner: 'ce' | 'cf') => owner === 'ce'
    ? `linear-gradient(135deg, ${ceTeal}, ${ceTeal}88)`
    : `linear-gradient(135deg, ${cfTeal}, ${cfTeal}88)`;
  return (
    <div
      style={{
        ...fill,
        background: ink,
        color: fg1,
        padding: '100px 120px',
      }}
    >
      <div
        style={{
          fontSize: 22,
          color: cfTeal,
          letterSpacing: '0.15em',
          fontWeight: 700,
          fontFamily: 'var(--osd-font-display)',
          textTransform: 'uppercase',
        }}
      >
        One Platform
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 72,
          fontWeight: 800,
          margin: '20px 0 0',
          lineHeight: 1.1,
        }}
      >
        The FinOps loop, closed
      </h2>
      {/* Loop diagram */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 0,
          marginTop: 56,
        }}
      >
        {steps.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
                width: 200,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: stepBg(s.owner),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 32,
                  fontWeight: 900,
                  fontFamily: 'var(--osd-font-display)',
                  color: '#fff',
                  boxShadow: `0 0 24px ${stepColor(s.owner)}33`,
                }}
              >
                {i + 1}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  fontFamily: 'var(--osd-font-display)',
                  color: stepColor(s.owner),
                }}
              >
                {s.label}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  width: 48,
                  height: 3,
                  background: steps[i + 1]
                    ? `linear-gradient(90deg, ${stepColor(s.owner)}66, ${stepColor(steps[i + 1].owner)}66)`
                    : 'rgba(255,255,255,0.15)',
                  margin: '0 8px',
                  marginTop: 35,
                }}
              />
            )}
          </div>
        ))}
      </div>
      {/* Legend with logos */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 80,
          marginTop: 40,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 24px',
            borderRadius: 8,
            background: `rgba(11,129,162,0.1)`,
            border: `1px solid rgba(11,129,162,0.25)`,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: ceTeal,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 20,
              color: ceTeal,
              fontWeight: 700,
              fontFamily: 'var(--osd-font-display)',
            }}
          >
            costexplorer.fast
          </span>
          <span style={{ fontSize: 18, color: fg3 }}>Steps 1, 2, 5</span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 24px',
            borderRadius: 8,
            background: `rgba(47,207,179,0.1)`,
            border: `1px solid rgba(47,207,179,0.25)`,
          }}
        >
          <img src={cloudfixLogo} style={{ height: 20, flexShrink: 0 }} />
          <span
            style={{
              fontSize: 20,
              color: cfTeal,
              fontWeight: 700,
              fontFamily: 'var(--osd-font-display)',
            }}
          >
            CloudFix
          </span>
          <span style={{ fontSize: 18, color: fg3 }}>Steps 3, 4</span>
        </div>
      </div>
      {/* Quote */}
      <div
        style={{
          marginTop: 48,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 40,
            fontWeight: 700,
            lineHeight: 1.3,
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          CloudFix optimizes{' '}
          <span style={{ color: cfTeal }}>where you save</span>.
          <br />
          costexplorer.fast reveals{' '}
          <span style={{ color: ceTeal }}>where it goes</span>.
        </div>
      </div>
    </div>
  );
};

// ── Page 8: Comparison ──
const Comparison: Page = () => {
  const rows = [
    ['Drill-down depth', 'One dimension at a time; no sequential drill-down', '9 dimensions, sequential drill-down'],
    ['Shareable views', 'Saved reports & CSV; weak collaboration', 'Every view is a URL'],
    ['Corporate taxonomy', 'Requires configured tags & Cost Categories', 'Upload mapping file, instant'],
    ['Variance comparison', 'Cost Comparison exists; limited to monthly', 'One-click overlay vs 7d / 1mo / 3mo'],
    ['Projected annual', 'Forecasting exists; annualized view needs work', 'One-click toggle'],
    ['AI workload tracking', 'Manual taxonomy; Bedrock Projects partial', 'Dedicated AI dimension'],
    ['Speed per view', 'Good for standard views; slow for deep analysis', '< 1 second, client-side'],
    ['Self-service onboarding', 'Native but needs permissions setup', '60 seconds, read-only CloudFormation'],
  ];
  return (
    <div
      style={{
        ...fill,
        background: ink,
        color: fg1,
        padding: '80px 120px',
      }}
    >
      <div
        style={{
          fontSize: 22,
          color: blue,
          letterSpacing: '0.15em',
          fontWeight: 700,
          fontFamily: 'var(--osd-font-display)',
          textTransform: 'uppercase',
        }}
      >
        Why This
      </div>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 64,
          fontWeight: 800,
          margin: '16px 0 0',
          lineHeight: 1.1,
        }}
      >
        AWS Cost Explorer vs. costexplorer.fast
      </h2>
      {/* Table */}
      <div
        style={{
          marginTop: 40,
          borderRadius: 'var(--osd-radius)',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(255,255,255,0.06)',
            padding: '18px 32px',
            fontSize: 22,
            fontWeight: 700,
            fontFamily: 'var(--osd-font-display)',
          }}
        >
          <div style={{ flex: 1.2 }}>Feature</div>
          <div style={{ flex: 1, color: fg3, textAlign: 'center' }}>
            AWS Cost Explorer
          </div>
          <div style={{ flex: 1, color: ceGold, textAlign: 'center' }}>
            costexplorer.fast
          </div>
        </div>
        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row[0]}
            style={{
              display: 'flex',
              padding: '14px 32px',
              fontSize: 22,
              borderBottom:
                i < rows.length - 1
                  ? '1px solid rgba(255,255,255,0.04)'
                  : 'none',
              background:
                i % 2 === 0
                  ? 'rgba(255,255,255,0.01)'
                  : 'transparent',
            }}
          >
            <div
              style={{
                flex: 1.2,
                fontWeight: 600,
                color: fg2,
              }}
            >
              {row[0]}
            </div>
            <div
              style={{
                flex: 1,
                textAlign: 'center',
                color: fg3,
              }}
            >
              {row[1]}
            </div>
            <div
              style={{
                flex: 1,
                textAlign: 'center',
                color: cfTeal,
                fontWeight: 600,
              }}
            >
              {row[2]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ── Page 9: CTA ──
const CTA: Page = () => (
  <div
    style={{
      ...fill,
      background: `linear-gradient(160deg, ${ink} 0%, ${navy} 50%, ${navy900} 100%)`,
      color: fg1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 160px',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -200,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 800,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(42,143,234,0.08) 0%, transparent 70%)',
      }}
    />
    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 900,
        lineHeight: 1.1,
        textAlign: 'center',
        letterSpacing: '-0.01em',
      }}
    >
      Try it free. Connect your
      <br />
      AWS account in 60 seconds
    </h1>
    <p
      style={{
        fontSize: 32,
        color: fg2,
        marginTop: 32,
        lineHeight: 1.5,
        textAlign: 'center',
        maxWidth: 900,
      }}
    >
      Free self-service onboarding. SSO, corporate taxonomy, and enterprise features available in the CloudFix add-on.
    </p>
    {/* CTA area */}
    <div
      style={{
        marginTop: 48,
        display: 'flex',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <img src={cloudfixLogo} style={{ height: 40, flexShrink: 0 }} />
      <div
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 28,
          fontWeight: 700,
          color: ceGold,
          letterSpacing: '0.02em',
        }}
      >
        costexplorer.fast
      </div>
    </div>
    {/* Trust row */}
    <div
      style={{
        display: 'flex',
        gap: 48,
        marginTop: 48,
        fontSize: 22,
        color: fg3,
      }}
    >
      {[
        '✓ Read-only access',
        '✓ No infrastructure changes',
        '✓ Data in minutes',
      ].map((t) => (
        <span key={t} style={{ fontWeight: 500 }}>
          {t}
        </span>
      ))}
    </div>
    {/* CloudFix badge */}
    <div
      style={{
        position: 'absolute',
        bottom: 80,
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <img src={cloudfixLogo} style={{ height: 24, flexShrink: 0 }} />
      <span
        style={{
          fontSize: 20,
          color: fg3,
          fontFamily: 'var(--osd-font-display)',
          fontWeight: 600,
        }}
      >
        CloudFix Cost Intelligence
      </span>
    </div>
  </div>
);

// ── Page 9: Screenshots ──
const Screenshots: Page = () => (
  <div
    style={{
      ...fill,
      background: ink,
      color: fg1,
      padding: '100px 120px',
    }}
  >
    <div
      style={{
        fontSize: 22,
        color: blue,
        letterSpacing: '0.15em',
        fontWeight: 700,
        fontFamily: 'var(--osd-font-display)',
        textTransform: 'uppercase',
      }}
    >
      See it in action
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 72,
        fontWeight: 800,
        margin: '20px 0 0',
        lineHeight: 1.1,
      }}
    >
      Your account, live
    </h2>
    <p
      style={{
        fontSize: 28,
        color: fg2,
        margin: '20px 0 0',
        lineHeight: 1.5,
        maxWidth: 900,
      }}
    >
      A 3-minute walkthrough showing your AWS cost data — drill-down, variance, and BU breakdown — using a live demo account.
    </p>
    <div
      style={{
        marginTop: 20,
        padding: '14px 24px',
        borderRadius: 8,
        background: 'rgba(42,143,234,0.08)',
        border: '1px solid rgba(42,143,234,0.2)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: 'ui-monospace, monospace',
          fontSize: 26,
          color: blue,
          fontWeight: 600,
        }}
      >
        https://costexplorer.fast/
      </div>
      <span style={{ fontSize: 20, color: fg3 }}>— live demo, no login required</span>
    </div>
    <div style={{ display: 'flex', gap: 32, marginTop: 40 }}>
      <div style={{ flex: 1 }}>
        <img src={screenshot20260513084648} alt='Dashboard screenshot: stacked bar chart with BU breakdown' style={{ width: 800, height: 450, objectFit: 'cover', objectPosition: '50% 50%' }} />
        <div style={{ fontSize: 20, color: fg3, marginTop: 12, fontFamily: 'var(--osd-font-display)', fontWeight: 600 }}>
          Cost breakdown by Business Unit
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <img src={screenshot20260513085024} alt='Dashboard screenshot: variance comparison view' style={{ width: 800, height: 450, objectFit: 'cover', objectPosition: '50% 50%' }} />
        <div style={{ fontSize: 20, color: fg3, marginTop: 12, fontFamily: 'var(--osd-font-display)', fontWeight: 600 }}>
          Variance comparison vs. prior period
        </div>
      </div>
    </div>
  </div>
);

export const meta: SlideMeta = { title: 'costexplorer.fast' };
export default [
  Cover,
  Problem,
  Solution,
  DrillDown,
  VarianceAmortization,
  TaxonomySetup,
  Integration,
  Comparison,
  Screenshots,
  CTA,
] satisfies Page[];
