# Bot Trade Report — 14 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:39:14.633Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $303.34 (+0.3%) over 14 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 14 |
| Win rate | 50% (7W / 7L) |
| Net P&L | $+303.34 (+0.3%) |
| Gross profit | $781.07 |
| Gross loss | $477.73 |
| Profit factor | 1.63 |
| Avg win | $111.58 |
| Avg loss | $68.25 |
| Payoff ratio | 1.63:1 |
| Expectancy | $+21.67 / trade |
| Max drawdown | 0.35% |
| Sharpe ratio (ann.) | 2.8 |
| Trades / active day | 1.08 |
| Avg confidence | 100% |
| Avg trade duration | 65 min |
| Avg risk ratio | 0.93R |
| Starting equity | $100,000 |
| Ending equity | $100,303.34 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 14 | 50% | $+303.34 | $21.67 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRM | 14 | 7 | 50% | $+303.34 | $+21.67 | 1.63 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 6 | 3 | 50% | $+337.13 | $+56.19 |
| trend | 8 | 4 | 50% | $-33.79 | $-4.22 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 14 | 7 | 50% | $+303.34 | $+21.67 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | CRM | 8 | 0.09 | $-43.93 | 6 | 8.24 | $+109.13 | 0.09% | 6.62 | reject |
| Behavior | neutral | 8 | 0.09 | $-43.93 | 6 | 8.24 | $+109.13 | 0.09% | 6.62 | reject |
| Time slot | Open 9:30-10:30 | 8 | 0.09 | $-43.93 | 6 | 8.24 | $+109.13 | 0.09% | 6.62 | reject |
| Setup | trend | 5 | 0.26 | $-20.14 | 3 | 1.74 | $+22.3 | 0.09% | 1.38 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+267.29 | 1.54 |
| +3 bps/side | $+195.16 | 1.36 |
| +5 bps/side | $+123.01 | 1.21 |
| +10 bps/side | $-57.32 | 0.92 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| timeout | 5 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CRM | 07-26 13:55 | 07-26 14:40 | 262.43 | 260.92 | 53 | 13908.79 | -80.03 | -0.58% | 0.7R | 45m | market | early-reversal | breakout | breakout | neutral | 66.95 | ↓260.65 | 0.0215 | 1.88 | **LOSS** |
| 2 | CRM | 07-31 14:00 | 07-31 14:45 | 260.76 | 259.24 | 53 | 13820.28 | -80.56 | -0.58% | 0.63R | 45m | market | early-reversal | breakout | breakout | neutral | 74.39 | ↑257.86 | 0.5212 | 1.46 | **LOSS** |
| 3 | CRM | 08-09 14:00 | 08-09 15:45 | 251.16 | 251.58 | 55 | 13813.8 | +23.1 | +0.17% | 0.2R | 105m | market | timeout | trend | trend | neutral | 64.81 | ↑249.86 | 0.58 | 1.4 | **WIN** |
| 4 | CRM | 10-29 14:05 | 10-29 15:50 | 297.08 | 297.35 | 47 | 13962.76 | +12.69 | +0.09% | 0.13R | 105m | market | timeout | trend | trend | neutral | 76.68 | ↑295.35 | 0.5754 | 2.07 | **WIN** |
| 5 | CRM | 11-01 14:25 | 11-01 15:55 | 294.8 | 294.71 | 47 | 13855.6 | -4.23 | -0.03% | 0.04R | 90m | market | breakeven-stop | trend | trend | neutral | 61.63 | ↑293.15 | 0.7853 | 1.76 | **LOSS** |
| 6 | CRM | 04-08 13:55 | 04-08 14:40 | 255.26 | 253.59 | 54 | 13784.04 | -90.18 | -0.65% | 0.33R | 45m | market | early-reversal | breakout | breakout | neutral | 75.49 | ↓252.52 | 2.3499 | 1.11 | **LOSS** |
| 7 | CRM | 06-17 14:15 | 06-17 14:40 | 268.63 | 266.94 | 52 | 13968.76 | -87.88 | -0.63% | 0.75R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 8 | CRM | 06-27 14:00 | 06-27 14:20 | 273.34 | 272.47 | 51 | 13940.34 | -44.37 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.17 | ↓271.92 | 0.56 | 1.33 | **LOSS** |
| 9 | CRM | 07-08 14:00 | 07-08 14:55 | 271.8 | 275.1 | 25 | 13861.8 | +82.5 | +1.21% | 1.73R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 10 | CRM | 07-08 14:00 | 07-08 15:45 | 271.8 | 274.68 | 26 | 13861.8 | +74.88 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 11 | CRM | 07-21 14:00 | 07-21 14:20 | 264.29 | 262.55 | 52 | 13743.08 | -90.48 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 12 | CRM | 10-21 14:20 | 10-21 16:05 | 260.43 | 263.14 | 53 | 13802.79 | +143.63 | +1.04% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 13 | CRM | 04-13 13:30 | 04-13 14:05 | 166.76 | 170.98 | 83 | 13841.08 | +350.26 | +2.53% | 3.61R | 35m | market | profit-target | breakout | breakout | neutral | 80 | ↑166.55 | 0.1636 | 2.04 | **WIN** |
| 14 | CRM | 04-15 13:30 | 04-15 15:15 | 175.57 | 176.76 | 79 | 13870.03 | +94.01 | +0.68% | 0.85R | 105m | market | timeout | breakout | breakout | neutral | 92.22 | ↑174.7 | 0.1189 | 1.77 | **WIN** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio fixed** | Balanced stop 1.7%→1.2%, target 1.5%→2.4% — now a true 2R trade |
| 2 | **Trailing stop** | Exits once price retraces 0.8% from the session high-watermark |
| 3 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 4 | **Market session gate** | New entries blocked outside 13:30–19:30 UTC (9:30–3:30 PM ET) — eliminates extended-hours overnight holds |
| 5 | **RSI > 80 hard block (trend)** | RSI > 80 in a trend setup = chasing overbought momentum; entry blocked (breakout setup exempt) |
| 6 | **Higher buy threshold** | Balanced buyThreshold raised 52→55 — filters marginal entries |
| 7 | **Break-even stop** | Once position reaches 1R (highWatermark ≥ entry×1.012), exit if price returns to entry — stops winners from turning losers |
| 8 | **dailyLossesPct auto-injected** | REST API injects live daily-loss % from server tradeState when client omits it |
| 9 | **VWAP in entry scoring** | +5 pts above VWAP, −8 pts significantly below, +4 pts below VWAP for mean-revert |
| 10 | **Slippage model** | 0.05 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ✅ **Profit factor 1.63** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.93R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:39:14.633Z*
