---
name: cloudfix-design
description: Use this skill to generate well-branded interfaces and assets for CloudFix (AWS cost optimization), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand voice, content rules, visual foundations, iconography
- `colors_and_type.css` — all design tokens (colors, type, spacing, radii, shadow). Single source of truth.
- `assets/` — logos (RGB + CMYK), AWS partner badges, real product screenshots
- `ui_kits/marketing/` — cloudfix.com homepage components (Hero, TrustTrio, SplitFeature, etc.)
- `ui_kits/console/` — in-product app components (Sidebar, RecommendationGroup, ResourceTable, OnboardingSplit, etc.)
- `preview/` — small HTML cards demonstrating individual tokens/components

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files that link `colors_and_type.css`. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick brand cheatsheet:
- **Primary colors**: navy `#1F3A68`, blue `#2A8FEA`, cyan `#2AC1D6`, teal `#2FCFB3`, orange `#ED8705` (sparing)
- **Fonts**: Raleway (display/headings), Open Sans (body/UI) — load from Google Fonts
- **Tone**: direct, plain-English, benefit-led, numerical proof, no emoji in product copy
- **Signature gradient**: cyan → blue → navy, used on logo orb and onboarding splits only
- **Cards**: white, `--radius-md` (10px), `--shadow-2`, optional teal left rule on dashboard panels
