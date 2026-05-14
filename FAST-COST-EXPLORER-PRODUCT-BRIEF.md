# Fast AWS Cost Explorer — Product Brief & Designer Directions

**Product:** costexplorer.fast  
**Repo:** trilogy-group/cost-explorer-fast  
**Date:** May 12, 2026  
**Purpose:** Position this tool as a new product to sell to existing and new Cloudfix customers

---

## PART 1: PRODUCT DESCRIPTION

### The Problem

Every company spending over $100K/month on AWS faces the same painful reality:

1. **AWS Cost Explorer is slow and shallow.** Clicking through the console to understand a cost spike means navigating dozens of pages, applying filters one at a time, and waiting for each page to load. There is no way to drill from a high-level trend all the way down to a specific usage type in one flow.

2. **AWS costs are distorted by lump-sum charges.** Support fees hit on the 1st of the month. Reserved Instance upfront payments spike a single day. Savings Plan allocations shift between accounts without warning. Without amortization, daily cost charts are noise — spikes that have nothing to do with actual usage changes.

3. **Cost data doesn't map to how the business thinks.** Finance teams think in Business Units, Products, and Owners. AWS thinks in Account IDs, Regions, and Services. Bridging that gap requires manual spreadsheets that rot immediately.

4. **Variance analysis is a manual slog.** Comparing this week's spend to last week, or this month to three months ago, requires exporting data, aligning dates, and building formulas. By the time the analysis is done, the spike is old news.

5. **Sharing findings is impossible.** "Look at the EC2 spike in us-east-1 for the Khoros account" means sending a screenshot and hoping the recipient can find the same view. There is no linkable, reproducible view in the AWS console.

### The Solution: costexplorer.fast

**costexplorer.fast** is a self-service AWS cost intelligence dashboard that turns raw Cost Explorer data into immediately actionable insights. It requires only read-only access to a customer's AWS management (payer) account, and it starts delivering value within 60 seconds of connecting.

It is **not** a general-purpose BI tool. It is an opinionated, purpose-built FinOps instrument designed by practitioners who manage hundreds of millions of dollars in AWS spend.

### Core Capabilities

#### 1. One-Click Drill-Down Across 9 Dimensions

Users start from a top-level cost chart and drill down by clicking — no filters to configure, no pages to navigate. The hierarchy is:

**BU → Product → Account → Owner → Service → Charge Type → Region → AI Workloads → Usage Type**

Each click narrows the view and opens the next dimension. A user can go from "why did our total AWS spend spike on Tuesday?" to "it's BoxUsage:t3.xlarge in the Khoros prod account in us-east-1" in under 10 seconds.

The system uses a stacked bar chart by default, with the top 7 values shown individually and all others aggregated into "Other." Users can switch the grouping dimension at any time using buttons above the chart.

#### 2. Period-over-Period Variance Comparison

A single toggle switches from absolute cost view to variance view, comparing the current period against:

- **7 days ago** (day-to-day operations)
- **1 month ago** (month-over-month trend)
- **3 months ago** (quarterly comparison)

The variance is shown as a line chart overlay, making it immediately obvious where costs deviated from the baseline. No exports, no spreadsheets, no waiting.

#### 3. Corporate Taxonomy Mapping

The system maintains a mapping file that translates AWS Account IDs into the customer's organizational structure:

- **Account Name** (e.g., "Khoros Production")
- **Business Unit** (e.g., "SaaS Platform")
- **Product** (e.g., "Khoros")
- **Owner** (e.g., "jane@company.com")

This mapping is applied automatically so that every chart, every drill-down, every shared link shows costs in business terms — not raw 12-digit account numbers.

#### 4. Cost Amortization

The system runs a full amortization pipeline that corrects AWS's raw cost data:

- **Support fees** (charged lump-sum on the 1st) are spread evenly across all days and proportionally across all member accounts
- **Reserved Instance and Savings Plan** allocations are smoothed
- **Marketplace upfront purchases** are amortized over their contract term
- **Monthly-priced resources** (EBS, EFS, RDS storage) are normalized for month length (February costs more per day than March)

The result: daily cost charts that actually reflect usage, not billing artifacts. This alone eliminates 80% of false-positive cost spike investigations.

#### 5. Projected Annual (PA) View

Any time period can be annualized with one click. This lets users compare run-rates across services and BUs without doing mental math. "Is this product on track to cost $2M this year?" becomes a single button press.

#### 6. Shareable Deep Links

Every view — every combination of filters, dimensions, time ranges, and variance mode — is captured in a URL. Paste it in Slack, email, or a Jira ticket, and anyone with access sees exactly the same chart. Example:

```
https://costexplorer.fast/view/730335654448?service=Amazon+EC2&region=us-east-1&breakdown=account&range=daily&mode=variance
```

#### 7. Self-Service Account Connection

New customers connect their AWS account through a guided flow:

1. Click "Connect AWS Account"
2. Redirected to AWS CloudFormation (in their own AWS account)
3. A read-only IAM role is created (zero access to applications, data, or resources — only Cost Explorer read)
4. Return to the dashboard — data appears within minutes

No sales calls, no professional services, no infrastructure changes. The CloudFormation template creates a single IAM role with `ce:GetCostAndUsage` and `organizations:ListAccounts` permissions.

#### 8. Flexible Time Ranges

Four granularity levels, selectable with one click:

- **Daily** — default, shows individual days
- **Weekly** — ISO week aggregation
- **Monthly** — calendar month aggregation
- **Quarterly** — calendar quarter aggregation

Plus a custom date range picker for ad-hoc investigations.

#### 9. AI Workload Tagging

A dedicated "AI" dimension filters and groups costs related to AI/ML workloads (Bedrock, SageMaker, etc.), letting customers track their AI spend trajectory separately.

#### 10. LLM-Powered Cost Attribution

The reporting module uses LLM analysis (via Amazon Bedrock) to automatically match cost variances to Jira tickets and change requests. This closes the loop between "cost changed" and "who approved the change that caused it."

### Technical Architecture

| Component | Technology |
|-----------|-----------|
| Backend API | AWS Lambda (Python 3.13, ARM64, 10GB ephemeral storage) |
| Data Storage | S3 (gzipped CSV files, partitioned by account/year/month) |
| Metadata | DynamoDB (account registration, presigned URL cache) |
| Frontend | Vanilla JS with Chart.js, Tailwind CSS, bundled via esbuild |
| CDN | CloudFront (static assets + API proxy) |
| Authentication | Google OAuth (OIDC) with JWT cookies |
| Account Connection | CloudFormation custom resources + SNS + DynamoDB |
| Data Pipeline | Daily Lambda cron (11:35 PM UTC) collects all accounts |
| Reporting | Google Sheets integration via gspread, LLM attribution via Bedrock |
| Infrastructure | AWS SAM (serverless Application Model) |

**Deployment model:** Fully hosted SaaS. Customer connects their AWS payer account via read-only role. No agents, no collectors, no VPC peering.

### What Makes This Different

| Feature | AWS Cost Explorer | costexplorer.fast |
|---------|-------------------|-------------------|
| Drill-down depth | 2 dimensions max | 9 dimensions, unlimited depth |
| Cost amortization | Separate report, not integrated | Built-in, automatic, applied by default |
| Corporate taxonomy | Manual tags, inconsistent | Upload a mapping file, instant |
| Variance comparison | Export to Excel | One-click, in-chart overlay |
| Shareable views | Not possible | URL captures exact state |
| Account connection | N/A (native) | Self-service, read-only role |
| Projected annual | Manual calculation | One-click toggle |
| AI workload tracking | Manual filtering | Dedicated dimension |
| Speed | 5-30 seconds per view | < 1 second (client-side aggregation) |

### Target Customers

**Primary:** Trilogy/Cloudfix portfolio companies running multi-account AWS organizations spending $50K-$5M+/month on AWS. These companies already have Cloudfix deployed for cost optimization and need better visibility into *why* costs are changing.

**Secondary:** Any AWS customer who:
- Manages 10+ AWS accounts under a single payer
- Has a FinOps team or function
- Needs to report AWS costs by business unit
- Investigates cost anomalies weekly or daily
- Uses Jira or similar tools to track infrastructure changes

### Competitive Landscape

This tool sits between two extremes:

- **AWS Cost Explorer** (free, shallow, slow) — everyone has it, nobody loves it
- **FinOps platforms** (CloudHealth, Apptio, Vantage, $50K+/year) — powerful but heavy, require agents, long onboarding

costexplorer.fast is the **Goldilocks option**: more powerful than the native console, zero deployment friction, and purpose-built for the most common FinOps workflows (drill-down, variance, allocation).

---

## PART 2: POSITIONING FOR CLOUDFIX CUSTOMERS

### Why Cloudfix Customers Need This

Cloudfix tells customers *where to save money*. costexplorer.fast tells them *where money is going*. Together, they form a complete FinOps loop:

1. **costexplorer.fast** surfaces a cost anomaly (e.g., "EC2 spend up 23% this week in the Khoros account")
2. The team investigates the drill-down, finds the root cause, shares the deep link
3. **Cloudfix** identifies the optimization opportunities (right-sizing, reserved instances, etc.)
4. The team implements fixes, and **costexplorer.fast** shows the impact in the next variance cycle

### Upsell Motion

For existing Cloudfix customers, the pitch is:

> "You're already saving money with Cloudfix. Now see exactly where it's going — in real-time, with one-click drill-down, mapped to your business units. Connect your AWS account in 60 seconds."

### Pricing Considerations

Given the SaaS hosting model (Lambda + S3), marginal cost per customer is very low. Pricing could be:
- **Included** for Cloudfix Enterprise customers (differentiation vs. competitors)
- **Freemium** tier with demo mode (already built) to attract new customers
- **Standalone** subscription for non-Cloudfix customers

---

## PART 3: DESIGNER DIRECTIONS FOR SLIDER DECK

### Deck Structure (12-15 slides)

#### Slide 1: Title Slide
- **Logo:** costexplorer.fast wordmark (teal gradient `#0b81a2` → purple `#7E4794` → coral `#e25759`)
- **Tagline:** "Your AWS costs, explained in one click"
- **Visual:** The og-image (1200x630) showing the gradient logo with bar chart icon

#### Slide 2: The Problem (Before)
- **Headline:** "AWS cost investigation is broken"
- **Three pain points** in cards:
  1. "AWS Cost Explorer limits you to 2 dimensions" — show cluttered AWS console screenshot (blurred/frustrated)
  2. "Spikes that aren't real" — show a jagged daily cost chart with the 1st-of-month lump sum spike circled in red
  3. "Costs in Account IDs, not business terms" — show a table of 12-digit numbers

#### Slide 3: Introducing costexplorer.fast
- **Product screenshot** — the full dashboard showing the stacked bar chart with BU breakdown, the dimension buttons, and the gradient header
- **Three feature callouts** with icons:
  - One-click drill-down (cursor/click icon)
  - Variance comparison (trend line icon)
  - Corporate taxonomy (org chart icon)

#### Slide 4: Feature Deep-Dive — Drill-Down
- **Animated GIF or sequence of 3 screenshots** showing the drill-down flow:
  1. Total cost by BU (stacked bars)
  2. Click "SaaS Platform" BU → shows by Product
  3. Click "Khoros" Product → shows by Account
  4. Click "Khoros Prod" Account → shows by Service
- **Caption:** "9 dimensions. Unlimited depth. 10 seconds total."

#### Slide 5: Feature Deep-Dive — Variance Comparison
- **Screenshot** of variance mode showing a line chart with current vs. previous period
- **Callout boxes** highlighting:
  - The variance toggle buttons ("vs 7d ago" / "vs 1mo ago" / "vs 3mo ago")
  - A specific spike with annotation: "EC2 up 23% vs. last week"
- **Caption:** "Spikes surface immediately. No spreadsheet gymnastics."

#### Slide 6: Feature Deep-Dive — Cost Amortization
- **Before/After comparison:**
  - BEFORE: Jagged daily chart with huge spike on the 1st (labeled "Support fee + RI upfront")
  - AFTER: Smooth daily chart showing actual usage patterns
- **Callout:** "Support fees, RIs, Savings Plans, Marketplace purchases — all smoothed automatically."

#### Slide 7: Feature Deep-Dive — Corporate Taxonomy
- **Visual:** A mapping diagram showing:
  ```
  AWS Account 201526351103 → Khoros Production → SaaS Platform BU → Owned by @jane
  AWS Account 887704487240 → Central Network → Infrastructure BU → Owned by @bob
  ```
- **Screenshot** of the dashboard showing costs grouped by BU with human-readable names
- **Caption:** "See costs the way your finance team thinks."

#### Slide 8: Feature Deep-Dive — Shareable Deep Links
- **Visual:** A Slack message showing a shared link
- **Screenshot:** The exact view that opens when clicking the link
- **Callout:** "Every view is a URL. Paste it in Slack, email, or a ticket."

#### Slide 9: Self-Service Setup
- **Three-step flow** (numbered cards):
  1. "Click Connect" — screenshot of the Connect button
  2. "CloudFormation creates a read-only role" — screenshot of the CFN template in AWS console
  3. "Data appears in minutes" — screenshot of the dashboard loading
- **Security callout badge:** "Read-only. No access to your applications, data, or resources."

#### Slide 10: Multi-Account & Access Control
- **Screenshot** of the Account Management page showing connected accounts
- **Callouts:**
  - Google SSO authentication
  - Per-user account access (each user sees only their payer accounts)
  - One-click data refresh with progress indicator

#### Slide 11: Cloudfix Integration Story
- **Diagram:** A loop showing:
  ```
  costexplorer.fast → Spot anomaly → Investigate drill-down → Cloudfix → Find optimization → Implement fix → costexplorer.fast → Verify impact
  ```
- **Headline:** "Cloudfix shows you where to save. costexplorer.fast shows you where it's going."

#### Slide 12: Demo / CTA
- **Screenshot** of the demo dashboard (available at costexplorer.fast without login)
- **QR code** linking to the live demo
- **CTA:** "Try it free with your own AWS account" — button mockup
- **URL:** costexplorer.fast

#### Slide 13 (Optional): Pricing / Packaging
- Placeholder for pricing tiers
- Suggested: "Included with Cloudfix Enterprise" badge

### Design System Reference

**Colors (from the product):**

| Role | Hex | Usage |
|------|-----|-------|
| Primary Teal | `#0b81a2` | Buttons, links, active states |
| Secondary Sage | `#59a89c` | Gradients, secondary actions |
| Accent Purple | `#7E4794` | Gradients, taxonomy dimension |
| Accent Coral | `#e25759` | Alerts, gradients |
| Accent Gold | `#f0c571` | Logo icon, highlights |
| Dark BG | `#0a0f1a` | Account management page dark theme |
| Light BG | `#f8fafc` | Dashboard page light theme |
| Chart palette | `#003f5c`, `#2f4b7c`, `#665191`, `#a05195`, `#d45087`, `#f95d6a`, `#ff7c43`, `#ffa600` | Stacked bar segments |

**Typography:**
- Product uses: Space Grotesk (dark theme pages), system-ui (light theme pages)
- Deck should use: A clean geometric sans-serif (Space Grotesk, Inter, or similar)

**Logo:**
- Wordmark: **costexplorer** (bold) **.fast** (light weight, gold `#f0c571` color)
- Icon: Rounded square with gradient (teal → purple → coral) containing a bar chart silhouette in gold

**Visual language:**
- Rounded corners (xl/2xl = 12-16px)
- Subtle shadows
- Glassmorphism effects on dark theme (backdrop-blur)
- Clean white cards on light theme with colored top borders
- Gradient accents (never flat primary color fills for hero sections)

### Screenshot Capture Instructions

The designer should capture these specific views from the live product at **costexplorer.fast**:

1. **Dashboard default view** — Daily cost with BU breakdown, showing the stacked bar chart
2. **Variance mode** — After clicking "vs 7d ago" toggle
3. **Drill-down sequence** — Click through BU → Product → Account → Service
4. **Dimension buttons** — Close-up of the BU/Product/Account/Owner/Service buttons row
5. **Account Management page** — The dark-themed accounts.html page
6. **Connect flow** — The "Connect AWS Account" modal
7. **Login page** — Google Sign In page with gradient background
8. **No accounts state** — The empty state with "Connect AWS Account" CTA
9. **Product info section** — The feature cards below the chart (demo mode)
10. **Deep link example** — A filtered view with URL visible in browser address bar

### Key Screenshots to Annotate

For the deck, the most impactful screenshots to annotate with callouts are:

1. **The main chart** with arrows showing: dimension buttons (top), active filters (below title), stacked bars (main area), drill-down categories (bottom)
2. **Variance overlay** with a red circle around a spike and annotation showing the comparison period
3. **The dimension button row** with each button labeled: "BU", "Product", "Account", "Owner", "Service", "Charge Type", "Region", "AI", "Usage Type"

---

## PART 4: APPENDIX — FEATURE INVENTORY

### Complete Feature List

| # | Feature | Status | Notes |
|---|---------|--------|-------|
| 1 | Stacked bar chart with top-7 + Other | Production | Chart.js |
| 2 | 9 dimension breakdowns | Production | BU, Product, Account, Owner, Service, Charge Type, Region, AI, Usage Type |
| 3 | One-click drill-down | Production | Click any segment to filter |
| 4 | Variance comparison (7d, 1mo, 3mo) | Production | Line chart overlay |
| 5 | Cost amortization pipeline | Production | Support fees, RIs, SPs, Marketplace |
| 6 | Projected Annual view | Production | Toggle between Cost and PA |
| 7 | Daily/Weekly/Monthly/Quarterly granularity | Production | One-click switch |
| 8 | Custom date range | Production | Double-click on chart to set range |
| 9 | Shareable deep links | Production | Full URL state capture |
| 10 | Corporate taxonomy mapping | Production | Upload account-names JSON |
| 11 | Global search | Production | Search accounts, services, BUs, regions |
| 12 | Google OAuth authentication | Production | JWT cookies, OIDC flow |
| 13 | Self-service account connection | Production | CloudFormation + SNS + DynamoDB |
| 14 | Demo mode (no login) | Production | Obfuscated sample data |
| 15 | Multi-account per user | Production | Per-user access control |
| 16 | Daily auto-refresh | Production | Lambda cron at 23:35 UTC |
| 17 | Manual data refresh | Production | Per-month with progress indicator |
| 18 | Account management page | Production | Dark-themed, separate page |
| 19 | Responsive design | Production | Mobile-friendly |
| 20 | LLM cost attribution | Beta | Bedrock + Jira ticket matching |
| 21 | Google Sheets reporting | Beta | Automated daily report generation |
| 22 | Budget projections | Internal | Used for internal portfolio management |
| 23 | AI workload dimension | Production | Dedicated filter for AI/ML services |
| 24 | Presigned URL caching | Production | DynamoDB-backed, ETag-aware |
| 25 | Batch URL generation | Production | Parallel presigned URL generation |

### Data Dimensions Available

| Dimension | Source | Example Values |
|-----------|--------|----------------|
| BU | Account mapping file | "SaaS Platform", "Infrastructure" |
| Product | Account mapping file | "Khoros", "CentralNetwork" |
| Account | AWS Account ID + name | "Khoros Production (201526351103)" |
| Owner | Account mapping file | "jane@company.com" |
| Service | AWS Cost Explorer | "Amazon EC2", "Amazon S3", "Amazon RDS" |
| Charge Type | AWS Cost Explorer | "Usage", "Credit", "Fee", "DiscountedUsage" |
| Region | AWS Cost Explorer | "us-east-1", "eu-west-1" |
| AI | Tag-based filter | Bedrock, SageMaker, Comprehend, etc. |
| Usage Type | AWS Cost Explorer | "BoxUsage:t3.xlarge", "TimedStorage-ByteHrs" |
