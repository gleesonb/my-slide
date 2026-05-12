# CloudFix Design System

A working design system for **CloudFix** — assets, foundations, components, and reference UIs for designing on-brand interfaces, slides, and marketing material.

> **Source provenance.** This system was assembled from (1) official RGB + CMYK logo packs supplied by the CloudFix team, (2) public material on **cloudfix.com** (homepage, product page, success stories), and (3) public app screenshots embedded on cloudfix.com/product/. The login-gated app at `app.cloudfix.com` was not directly accessible; the Console UI Kit is reconstructed from those public screenshots and product copy. Original brand-guideline PDFs and font files were not provided — see *Caveats* below.

---

## What is CloudFix?

CloudFix is an **AWS cost-optimization platform**: it scans a customer's AWS estate, finds waste, and — with the customer's approval — automatically implements the fixes via AWS Systems Manager Change Manager. Customers typically save **15–60% per AWS service** with no service interruption. The product line includes:

| Product | What it does |
|---|---|
| **CloudFix** | Continuous cost-optimization "fixers" for EBS, S3, RDS, EC2, CloudTrail, CloudFront, etc. |
| **RightSpend** | AWS discount-program optimization (Reserved Instances, Savings Plans). |
| **QueryLens** | Database upgrade assistant. |
| **CloudFix Pro Services** | Hands-on cost optimization engagements for enterprise. |

The brand sits adjacent to AWS — same visual register (cool blues, structured tables, big-number savings call-outs) but warmer and more direct in tone.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | You're here. Brand overview, content & visual rules, iconography. |
| `SKILL.md` | Skill manifest — entry point when this folder is loaded as an Agent Skill. |
| `colors_and_type.css` | All design tokens (colors, type, spacing, radii, shadow). The single source of truth. |
| `assets/` | Logos (RGB + CMYK print), AWS partner badges, product screenshots, raw icons. |
| `assets/refs/` | Public-site product screenshots used as fidelity references. |
| `fonts/` | (empty) — fonts are loaded from Google Fonts; see *Typography* below. |
| `preview/` | Small HTML cards rendered into the Design System tab (one concept per card). |
| `ui_kits/marketing/` | UI kit recreating cloudfix.com (homepage, product page). |
| `ui_kits/console/` | UI kit recreating the in-product app (onboarding, recommendations, fix detail). |
| `slides/` | 16:9 slide templates using the brand foundations. |

---

## Typography

| Role | Family | Weights | Notes |
|---|---|---|---|
| Display / headings / wordmark-feel | **Raleway** | 700 / 800 / 900 | Confirmed by CloudFix as primary brand typeface. Used for H1–H4, big stats, eyebrows. |
| Body / UI / tables | **Open Sans** | 400 / 500 / 600 / 700 | Workhorse for prose, form labels, table cells. |
| Mono | system mono | — | Numbers in tables, code, IDs. |

Both families load from Google Fonts via `colors_and_type.css`. **Original `.ttf` / `.otf` files were not provided** — if a self-hosted production font is required, drop the files into `fonts/` and replace the `@import` in `colors_and_type.css`.

---

## Colors

See `colors_and_type.css` for tokens. High-level palette:

- **Navy `#1F3A68`** — primary headline + nav color, appears in the wordmark.
- **Blue `#2A8FEA`** — primary action color, hyperlinks, "blue button" UI.
- **Cyan `#2AC1D6`** + **Teal `#2FCFB3`** — accent / gradient origin (the orb in the logomark, onboarding background).
- **Orange `#ED8705`** — sparing highlight (matches the meta theme color and AWS visual register; used for status pings and occasional CTA).
- **Navy `#142747`** — extra-dark UI surface.
- **Neutral ramp** from `#0F1B2D` ink down through cool greys to `#FBFCFE`.

The signature gradient is **cyan → blue → navy**, used on the logo orb and on full-bleed onboarding/login backgrounds — not on broad page backgrounds.

---

## Content fundamentals

CloudFix copy is **direct, plain-English, benefit-led, and quantified**. It explains a technical product to a finance-aware engineering audience without showing off.

**Voice and tone**
- **Person:** Second-person ("**you** decide what we fix"). The product is "we" / "CloudFix." Never first-person singular.
- **Tense:** Present, active. Verbs do the work.
- **Register:** Confident, not boastful. Specific numbers beat adjectives ("15–60% per AWS service" > "huge savings").
- **Casing:** Sentence case for headlines and buttons. Title Case is reserved for product names (CloudFix, RightSpend, QueryLens) and proper nouns (AWS, EBS, RDS).
- **No emoji in body or UI copy.** Occasional emoji appear in exit-intent popups only (`📋`, `💰`) — keep that contained.
- **Punctuation:** Em-dashes used freely for asides — like this. Periods, not exclamation marks.

**Structural patterns**
- **Big-number stats** as proof: "**$2 Billion** in AWS spend managed," "**500+** industry leaders," "**$144,000** saved in months."
- **Three-checkmark proof rows** under primary CTAs: `✓ Takes 5 minutes • ✓ You approve everything • ✓ Results in 24 hours`
- **Threes everywhere:** three-step flows ("Find. Fix. Save."), three-icon trust rows (Risk-Free / Zero-Downtime / Least-Privilege).
- **Negative-space framing:** describe what CloudFix *isn't* before what it is. "Trusted Advisor gives you alerts. CloudFix gives you detailed reports." "Most tools make recommendations. CloudFix is the only platform that automatically fixes."
- **Concrete fixer names** as detail: "Duplicate AWS CloudTrail," "Amazon CloudFront Compression," "Amazon EBS IO1/IO2 to GP3."

**Headline shapes that repeat**
- Imperative + outcome: *"Cut your AWS bill by 20–35% — safely."*
- Twin claim: *"Find. Fix. Save. Repeat."*
- Promise + proof: *"Achieve up to 55% more savings without restrictive commitments."*

**What to avoid**
- "Game-changing," "revolutionary," "best-in-class," "AI-powered" (not the brand register).
- Vague verbs: "leverage," "unlock," "empower."
- Long preambles. Get to the number.

---

## Visual foundations

**Layout & rhythm**
- Section padding is generous (`--space-9` = 96px on marketing pages). UI is denser (`--space-3`–`--space-5`).
- 12-column grid on marketing; 8-column or fluid on app.
- Content max-width ~1200px on marketing; the dashboard is fluid up to ~1440px.

**Backgrounds**
- Most marketing surfaces are **plain white** (`#FFFFFF`) or a very faint `#F5F8FB` panel.
- The signature **cyan→blue→navy gradient** appears on (a) the logo orb, (b) full-bleed onboarding/login splits, (c) hero divider strips. It is *not* used as a body background — keep it confined.
- No hand-drawn illustrations, no repeating patterns, no grain. The aesthetic is clean and engineered.

**Cards**
- White surface, `--radius-md` (10px) corners, `--shadow-2` for resting, `--shadow-3` on hover/lift.
- A subtle **teal `#2FCFB3` left-edge rule** (3–4px) appears on dashboard recommendation panels — borrowed from the actual app.
- 1px hairline border `--cf-divider` is acceptable when no shadow is appropriate (e.g. on tinted panels).

**Borders & dividers**
- Borders are 1px, `--cf-border` or `--cf-divider`. Never colored borders unless semantic.
- Tables use horizontal hairlines only — no vertical lines.

**Buttons**
- Primary: navy `#1F3A68` solid, white text, `--radius-sm`, **uppercase or sentence-case** (the app uses uppercase ALL CAPS in the recommendation toolbar — `EXECUTE`, `RELOAD`, `EXPORT` — but the marketing site uses sentence case).
- Secondary blue: `#2A8FEA` solid, white text.
- Tertiary: outline navy on white.
- The marketing site occasionally uses an **orange CTA** (`#ED8705`) for the highest-intent action. Reserve.

**Hover & press**
- Hover: 6–10% darker fill on solid; underline on text links; `--shadow-3` lift on cards.
- Press: subtract 2% lightness (no scale-shrink).
- Focus: 3px outer ring `rgba(42,143,234, 0.35)` (`--shadow-focus`).

**Motion**
- Short and clean. `--dur-base` (200ms) for most transitions; `--ease-out` (`cubic-bezier(.22,1,.36,1)`) is the house ease.
- Fades and small position shifts. **No bouncy springs, no parallax.**
- Number tickers (counting up to a savings amount) are an on-brand flourish on the marketing site.

**Borders, radii**
- 10px is the default radius. Pills (`--radius-pill`) for chips, status badges, compact toggles.

**Imagery**
- Marketing photography is rare. The site leans on **product screenshots** as the primary visual, set in a faint browser-frame or dropped raw on white.
- When photography appears, it's cool-toned, well-lit office/data-center. Never warm filters, never grainy.
- Customer logos render as **monochrome black-on-white** in trust strips — never their original brand colors.

**Transparency & blur**
- Used sparingly. The onboarding screen has translucent step cards on a gradient — frosted glass, ~70% white over the gradient. That's the only place blur shows up.

---

## Iconography

CloudFix does **not** use a single packaged icon font in their public material. Observed patterns:

- **Custom flat SVGs** for trust-row concepts (Risk-Free, Zero-Downtime, Least-Privilege). These are filled, multi-color illustrations using the brand cyan/blue/navy palette. The originals are copied into `assets/icons/`.
- **Outline UI glyphs** at the dashboard level — info circles, sort arrows, filter funnels, checkboxes. These read as a thin-stroke (1.5px) outline set, very close to **Lucide** in feel. We standardize on **Lucide** as the substitute set; load from CDN: `https://unpkg.com/lucide@latest`. **Flagged as a substitution** since the originals were not supplied.
- **Brand orb** (the wordmark glyph — a stylized circular "C" with a notch) is the only mark-level icon and appears as the favicon and in app top bars.
- **AWS service icons** (EC2, S3, RDS, etc.) appear in app contexts. Use AWS's official icon set when needed — `https://aws.amazon.com/architecture/icons/` — and copy in only what's required.
- **No emoji in product UI**, ever. Marketing exit-intent popups are the only exception.
- **No unicode dingbats** used as load-bearing icons. The "✓" check is the one exception — it's used everywhere as a proof bullet.

Files in `assets/icons/`:
- `risk-free.svg`, `zero-downtime.svg`, `least-privilege.svg` — original CloudFix trust-row icons
- `play.svg` — video play icon

---

## Caveats / open questions

1. **Brand-guideline PDFs were not provided.** Spacing scale, exact named tints, and any restricted-use rules were inferred from the live site and logo pack. If an internal guidelines deck exists, drop it in and I'll align.
2. **Font files (`.ttf`/`.otf`) were not provided.** Raleway and Open Sans both ship from Google Fonts and are visually exact — but if production requires self-hosted variable fonts, supply the files.
3. **The `1920x1080_cloudfix_animation_V3.gif`** referenced in the original brief did not arrive. If you have it, drop it in `assets/refs/` and I'll add a "motion language" sub-section.
4. **Console UI kit fidelity** is reconstructed from the four public product screenshots. A codebase or Figma link would let me tighten exact paddings, edge cases, and dark-mode (if any).
5. **Iconography substitution.** Lucide replaces the unknown internal icon set. Confirm or supply originals.

---

## Using the system

```html
<link rel="stylesheet" href="/colors_and_type.css">
<!-- Now you have all CSS vars + element styles. -->
```

For Claude Code or any agent: read this README, then `colors_and_type.css`, then the relevant UI kit's `index.html`. Components are in `ui_kits/<product>/*.jsx`. `SKILL.md` is the entry point when this folder is loaded as an Agent Skill.
