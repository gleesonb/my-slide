# Console UI Kit

Recreates the in-product **CloudFix app** UI based on the public product-page screenshots (login-gated app was not directly accessible).

## Three demo views (toggle in the page bar)
- **Recommendations** — landing dashboard with stat tiles + grouped Easy / Medium / Hard panels and the teal-rule recommendation card.
- **Recommendation detail** — drill-down with the four-state tab strip (Pending Approval / Available / Finished / Outdated) and the resource table with EXECUTE / RELOAD / EXPORT toolbar.
- **Onboarding** — the cyan→navy split-screen first-run experience with frosted step cards.

## Files
- `index.html` — full app shell with view switcher
- `Components.jsx` — `ConsoleTopBar`, `Sidebar`, `StatTile`, `RecommendationGroup`, `StatusTabs`, `ActionToolbar`, `ResourceTable`, `StatusPill`, `OnboardingSplit`

## Fidelity notes
- All numbers, fixer names, and table layout mirror the public screenshots.
- Sidebar nav items are educated guesses (Dashboard / Recommendations / Savings / Accounts / Fixers / Reports / Settings). Confirm against the real app.
- App-level button uppercase styling (`EXECUTE`, `RELOAD`, `EXPORT`) is preserved from the screenshot.
- The teal `#2FCFB3` left-rule on recommendation cards is observed in the live screenshot — it's a load-bearing brand element in the dashboard.
