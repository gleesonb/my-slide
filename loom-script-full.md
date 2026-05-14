# costexplorer.fast — Loom Demo Script (Full Cut)

**Audience:** Scale, Amgen, Ellucian, BCG AWS account owners
**Length:** ~3 minutes
**Setup:** Open costexplorer.fast in browser, logged into their account (or demo account)

---

## Hook (0:00–0:20)

**[Screen: AWS Cost Explorer console, showing a default unblended cost chart]**

"This is AWS Cost Explorer. This is what most people use to understand their AWS spend. The default view shows unblended cost — which gives you a completely wrong picture of what each account is actually costing you. And if you want to investigate a spike... you can group by one thing at a time. That's it."

**[Action: Click group-by dropdown, show only one option selectable. Try to drill into a service — show it resets the view]**

"You can't drill down. You can't go from 'which BU spiked?' to 'which account?' to 'which service?' to 'what usage type?' — you have to start over each time. And you definitely can't share what you're looking at."

---

## The Pivot (0:20–0:35)

**[Screen: Switch to costexplorer.fast — the same account's data, already loaded]**

"This is the same account. Same AWS data. But now you can actually do something with it."

---

## Demo: Drill-Down (0:35–1:15)

**[Screen: costexplorer.fast dashboard, daily cost, grouped by Business Unit]**

"Here's our total AWS spend, grouped by Business Unit. Let's say I notice SaaS Platform looks higher than usual this week."

**[Action: Click the SaaS Platform segment on the chart]**

"One click — now I'm looking at just SaaS Platform, broken down by Product."

**[Action: Click the top product segment]**

"Another click — now I'm inside that product, seeing spend by Account."

**[Action: Click the production account]**

"Down to the account level. Now by Service."

**[Action: Click EC2]**

"And now I can see exactly what's driving the cost — it's EC2, and I can go further to see the specific usage types."

**[Action: Click through to Usage Type]**

"From 'something looks off' to 'it's EC2 in us-east-1 in the prod account' — in under 10 seconds. No filters to configure. No pages to navigate. Just click."

---

## Demo: Variance (1:15–1:45)

**[Screen: Hit the back button to return to top-level view]**

"Now let me check if this is actually a change, or if it's normal. I'll turn on variance comparison."

**[Action: Click "vs 7d ago" toggle]**

"This compares every day to the same day last week. I can immediately see where costs deviated — and by how much."

**[Action: Switch to "vs 1mo ago"]**

"Or compare to a month ago. Or three months ago. No exporting to Excel. No aligning dates manually. One click."

---

## Demo: Share (1:45–2:05)

**[Screen: Stay on the variance view]**

"Now — the most important part. I want my colleague to see exactly what I'm seeing right now."

**[Action: Copy the URL from the browser address bar]**

"That's it. The URL captures everything — the filters, the dimension, the time range, the variance mode. I paste this in Slack..."

**[Action: Open Slack, paste URL in a message]**

"...and anyone who clicks it sees this exact chart. They don't even need AWS or Cost Explorer access — you're sharing the insight, not the console. One link."

---

## Demo: BU Breakdown (2:05–2:30)

**[Screen: Navigate to top-level, group by BU]**

"Finally — the thing that makes this actually useful for your finance team. This isn't Account IDs and service codes."

**[Action: Point to the BU labels — SaaS Platform, Infrastructure, Data & Analytics]**

"These are your Business Units. Your Products. Your Owners. You upload a mapping file once, and every chart speaks your language — not AWS's."

**[Action: Switch dimension to Owner]**

"Want to see costs by who owns what? One click. Try doing that in Cost Explorer."

---

## Close (2:30–2:50)

**[Screen: Return to the top-level dashboard view]**

"That's costexplorer.fast. Nine dimensions of drill-down. One-click variance. Shareable links. Costs in business terms. It connects to your AWS account in 60 seconds with a read-only IAM role — no agents, no infrastructure changes, no access to your data."

**[Action: Show the costexplorer.fast URL in the browser]**

"Try it yourself at costexplorer.fast. Free to connect. And if you're a CloudFix customer, talk to your account team about the enterprise add-on — SSO, corporate taxonomy mapping, and dedicated support."

---

**End card:** costexplorer.fast URL + "Free to try" + CloudFix logo
