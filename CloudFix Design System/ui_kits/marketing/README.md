# Marketing UI Kit

Recreates the **cloudfix.com** marketing surface — header, hero, stat banner, trust trio, alternating split features, gradient CTA strip, and footer.

## Files
- `index.html` — homepage composition
- `Components.jsx` — `MarketingHeader`, `Hero`, `StatBanner`, `TrustTrio`, `SplitFeature`, `CTAStrip`, `Footer`

## Notes
- All copy is lifted from cloudfix.com's homepage and product page so tone is on-brand.
- Customer logos in the trust strip are rendered as text placeholders — drop real monochrome logos into `assets/customers/` and swap in `StatBanner` if you have them.
- Real product screenshots from the public site are used in `SplitFeature` to keep visuals authentic.
- The orange CTA in `CTAStrip` is the only place we use orange on a primary action — matches site's high-intent placement.
