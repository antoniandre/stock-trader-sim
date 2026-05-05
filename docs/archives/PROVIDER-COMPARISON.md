# Provider Comparison

## Purpose

This document helps decide whether the product should stay all-in on Alpaca for both execution and market data, add another broker, or separate execution from data provider.

The immediate pain point is that free-tier Alpaca market-data access can feel limited outside open-market conditions. That affects demos, off-hours UX, alerts, and eventually automation.

## Executive recommendation

Do **not** rush into adding a second execution broker just to solve off-hours market-data pain.

Instead:

1. keep Alpaca as the first execution broker
2. build broker + market-data abstraction first
3. evaluate adding a second **market data provider** before adding a second execution broker
4. only spend money where poor data quality is materially hurting product trust or conversion

## Why another broker may not solve the problem

Brokers and data vendors are different things.

A broker can have:

- good order APIs
- weak or restricted market data
- limited free-tier historical/off-hours access
- account requirements or entitlements that vary by user

Switching execution brokers does not guarantee the market-data experience becomes good.

## Product decision framework

Ask these questions before paying or integrating another provider.

### 1. What problem are we solving?

Possible real problems:

- stale quotes outside market hours
- weak intraday/historical coverage
- unreliable mover/volume surfaces
- poor demo quality for prospective customers
- weak alert quality because trigger data is incomplete

### 2. Is this an execution problem or data problem?

If the problem is quotes, bars, movers, or off-hours visibility, it is primarily a **data problem**.

If the problem is order types, buying power, fills, or account access, it is primarily a **broker/execution problem**.

### 3. Is the problem hurting product credibility right now?

If users see the app as broken or fake outside market hours, paying for better data may be worth it even before launch.

## Comparison categories

When evaluating providers, compare them on:

- execution support
- paper trading availability
- live trading availability
- stock market-data access
- off-hours quote quality
- historical bars quality
- streaming support
- rate limits
- pricing
- commercial usage terms
- implementation complexity

## Provider strategy options

### Option A — Alpaca only

**What it means**

- Alpaca handles execution and market data
- current code stays simplest

**Pros**

- fastest to maintain
- lowest architecture overhead today
- less vendor complexity

**Cons**

- product experience inherits Alpaca feed limitations
- off-hours experience may feel weak
- harder to tell a broker-agnostic product story

**Best for**

- early prototyping
- paper/live execution validation
- low-cost iteration before monetization is proven

---

### Option B — Alpaca execution + separate market data provider

**What it means**

- Alpaca remains order broker
- quotes/bars/movers can come from another source

**Pros**

- solves the actual off-hours data pain more directly
- improves charting, alerts, and demos
- creates the right long-term architecture
- less risky than switching order execution

**Cons**

- requires data normalization
- quotes and fills may not match perfectly across vendors
- some providers have licensing/commercial limits

**Best for**

- this product, if market-data quality is becoming a trust issue

---

### Option C — Add a second execution broker

**What it means**

- users can choose Alpaca or another broker for order routing

**Pros**

- strong long-term moat
- more user flexibility
- better commercial story later

**Cons**

- much more engineering work
- capability mismatches everywhere
- does not automatically fix data quality
- significantly more testing burden

**Best for**

- after abstraction stabilizes
- after the product has basic monetization proof

## Free vs paid: should you spend?

### When spending is probably worth it

Spend modestly if:

- off-hours experience makes the app feel broken
- alerts or charts are too weak to demo seriously
- you are close to charging early users
- better data would materially improve trust and conversion

### When spending is probably not worth it yet

Do not rush to spend if:

- auth / reliability / persistence are still missing
- you have not validated that people want the product
- the issue is annoying but not product-killing
- you are still changing the core product positioning

## Recommended budget posture

### Stage 1 — Minimal spend

Use current Alpaca setup while building:

- broker abstraction
- market-data abstraction
- alerts foundation
- auth and safety UX

### Stage 2 — Small validation spend

Choose one better market-data provider for evaluation if:

- you want better off-hours demos
- you need stronger alerts/history
- you are preparing a paid beta

Keep this small and reversible.

### Stage 3 — Production spend

Only commit to higher recurring costs once:

- your product direction is clear
- users are using it
- you know which data gaps matter most

## Practical recommendation for this repo

### Right now

Do this first:

1. implement broker abstraction
2. implement market-data-provider abstraction
3. add provider capability reporting to the API
4. keep Alpaca as default execution broker

### After that

Research 2–3 market data providers with these goals:

- off-hours quote coverage
- reliable historical bars
- commercial-friendly terms
- affordable early-stage pricing

### Only later

Add a second execution broker if:

- users actually ask for broker choice
- the business case is strong
- the abstraction layer has been battle-tested

## Evaluation checklist for any candidate provider

Before integrating, confirm:

- can it be used commercially?
- are off-hours quotes available?
- are historical bars reliable enough for charts and alerts?
- is streaming available?
- are rate limits acceptable?
- can symbols/exchanges be normalized cleanly?
- does the pricing scale reasonably for a small paid beta?

## Recommended product messaging while limitations exist

Be explicit. The product should say things like:

- "Market data availability varies by provider and session."
- "Off-hours quotes may be delayed or unavailable on current plan."
- "Execution broker and market-data provider may differ."

Honest messaging is better than hiding limitations.

## High-level provider direction

If choosing where to invest effort, the order should be:

1. execution/data abstraction
2. better market data provider evaluation
3. second data provider integration
4. second execution broker integration

That sequence gives the best payoff for the least architectural churn.

## Bottom line

- A free broker API may exist, but it is unlikely to solve every market-data problem cleanly.
- Paying a little for better data may be worth it if current feed limits make the app feel weak.
- The best long-term move is likely **Alpaca for execution + optional separate market data provider**, not immediate multi-broker execution complexity.
