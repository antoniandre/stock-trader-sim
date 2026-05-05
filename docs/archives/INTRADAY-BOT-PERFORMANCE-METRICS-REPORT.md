# Intraday Trading Bot — Performance Metrics Report

Educational reference only; not investment advice.

## 1. Win rate (don’t obsess)

- **What it is:** % of profitable trades.
- **Context:** Intraday can work at **~40–55%** if R:R is strong; many solid styles land **45–65%** depending on edge type.
- **Fragile pattern:** high win rate + **tiny** average win.
- **Always pair with R:R** (§2, profiles below). The **fee-killing middle** (~**50%** win rate + ~**1:1** R:R) often dies after costs unless fills and commissions are unrealistically good.

## 2. Risk–reward (R:R)

- Average win vs average loss per trade (or per R unit).
- **Loose “healthy” band:** **~1.2:1 – 2:1+** — interpret using your style (momentum vs mean reversion).
- **Usually matters more than win rate** for long-run survival.

## 3. Profit factor

- **Gross profit ÷ gross loss.**
- **> ~1.5:** common “bare minimum” once costs exist.
- **~2.0+:** strong; “good” live-ish ranges are often quoted **~1.7–2.3** (sometimes **~1.7–2.5**) after spreads/friction.
- **~1.0:** ~breakeven **before** realistic slippage/fees.

## 4. Max drawdown (where many bots fail)

- Largest **peak → trough** loss on equity.
- **Good:** **<10%** · **Aggressive but sane:** **10–20%** (depends on leverage/size/sizing) · **Above ~20%:** often **one bad day** from serious damage; discipline here beats “clever” entries.
- **Track intraday DD** (session peak-to-trough), not only end-of-day equity — gaps, halts, and chop matter.

## 5. Sharpe (consistency / risk-adjusted return)

- Return per unit of volatility.
- **Good:** **>1.5** · **Strong:** **>2**.
- **Low Sharpe:** can still be green, but often an **emotional rollercoaster** curve — fix sizing/regime/frequency before scaling.

## 6. Trade frequency & consistency

- Prefer a **stable** trades/day distribution, not random bursts.
- **Consistency > lottery spikes**; steady small gains beat rare jackpots.
- **Overtrading:** more trades ≠ more profit — usually **more fees + more slippage**.

## 7. Average holding time

- Must match the design (seconds / minutes / hours).
- **Drift** toward random lengths → often **noise chasing**, not signal.

## 8. Slippage & costs (make-or-break)

- Measure: **expected vs actual fill**, **net** PnL after fees, stress on **small caps** and **fast breakouts** (liquidity/spread jumps).
- Many “profitable” systems die here; **ignoring fees** (incl. borrow/data/platform where relevant) is a classic trap.

## 9. Expectancy (true edge)

- **Average $ per trade** over a large sample; must be **positive** and **stable**.
- Stocks: **$0.02–$0.10/share** can be viable **if volume + turnover** support it.
- **Wild swings** in expectancy → likely **regime-dependent** (trend vs chop) — monitor regime or risk bleed periods.

## 10. Equity curve

- **Want:** smooth **stair-step** up = repeatable edge.
- **Bad:** **flat → spike → crash → repeat**; **spiky** → **overfitting**, **luck**, or unmanaged risk.
- **Smooth curve + solid profit factor** often beats a “pretty” backtest alone.

## Win rate + R:R (read together)

| Style | Win rate | R:R |
| --- | --- | --- |
| **A — Momentum / breakout** | **40–50%** | **1.8:1 – 3:1** |
| **B — Mean reversion / scalper** | **55–70%** | **0.8:1 – 1.3:1** |

Awkward middle (**~50%** + **~1:1**) → usually **fee death** unless costs are negligible.

## Volume & liquidity

- Trade only when you can **exit** as cleanly as you **enter**.
- **RVOL** often **> 1.5–2×** “normal” (define baseline per name/timeframe).
- **Tight spreads**; without filters you often **donate edge to market makers** each round trip.

## Time-of-day

- **Open (first 30–60 min):** volatile — common for **momentum** if you tolerate variance.
- **Midday:** slow/choppy — frequent **bot killer**.
- **Power hour:** cleaner directional moves for some setups.
- **Track PnL by time block**; many systems **skip or down-weight midday**.

## Benchmarks at a glance (“good” intraday, rough)

| Metric | Typical “good” band / notes |
| --- | --- |
| Profit factor | **~1.7–2.3** (often **>1.5** floor; **2.0+** strong); some cite **~1.7–2.5** “after costs” |
| Win rate | **45–65%** style-dependent — never optimize WR alone |
| Max DD | **<10%** calm · **10–20%** aggressive · **>~20%** high blow-up risk; also watch **intraday** DD |
| Sharpe | **~1.5–2+** |
| Returns profile | **Consistent daily/weekly** progress, not jackpot dependence |

**Core trio (stocks):** (1) **profit factor** non-negotiable — spreads/commissions eat weak edges; (2) **expectancy** positive + stable; (3) **win rate + R:R** from the table — avoid the middle.

## Common traps

- **Backtest hero:** great history, poor live (**slippage**, partials, impact).
- **Overtrading** (volume ≠ edge).
- **Ignoring fees** and other frictions.
- **No regime awareness:** prints in **trends**, **bleeds in chop** — segment stats by regime/vol if possible.

## Big picture

- **Survival:** **expectancy + cost control + drawdown discipline.**
- **Durability signal:** **profit factor + smooth equity curve.**
- Failures cluster around **costs**, **overfitting**, and **risk control** — on fast names, **execution ≈ strategy**.

## Know your lane

Name the style up front — **momentum**, **VWAP / intraday structure**, **mean reversion**, etc. — each implies different acceptable WR, R:R, hold time, and execution bar.
