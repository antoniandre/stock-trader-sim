# Bot Trade Report — 10 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T13:40:22.126Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 10 | **Lookback:** 90 days | **Universe:** custom | **Symbols scanned:** 3 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $403.03 (+0.4%) over 10 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 10 |
| Win rate | 50% (5W / 5L) |
| Net P&L | $+403.03 (+0.4%) |
| Gross profit | $563.55 |
| Gross loss | $160.52 |
| Profit factor | 3.51 |
| Avg win | $112.71 |
| Avg loss | $32.1 |
| Payoff ratio | 3.51:1 |
| Expectancy | $+40.3 / trade |
| Max drawdown | 0.12% |
| Sharpe ratio (ann.) | 6.19 |
| Trades / active day | 1.43 |
| Avg confidence | 100% |
| Avg trade duration | 74 min |
| Avg risk ratio | 0.56R |
| Starting equity | $100,000 |
| Ending equity | $100,403.03 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 8 | 62.5% | $+447.95 | $55.99 |
| Noon 11:30–13:00 | 2 | 0% | $-44.92 | $-22.46 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 6 | 4 | 66.67% | $+463.57 | $+77.26 | 7.1 | eligible |
| GOOGL | 2 | 0 | 0% | $-28.62 | $-14.31 | 0 | watch |
| AMZN | 2 | 1 | 50% | $-31.92 | $-15.96 | 0.43 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 4 | 57.14% | $+270.23 | $+38.6 |
| breakout | 3 | 1 | 33.33% | $+132.8 | $+44.27 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 4 | 44.44% | $+242.45 | $+26.94 |
| noisyHighBeta | 1 | 1 | 100% | $+160.58 | $+160.58 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 6 | 1.75 | $+14.35 | 3 | 4.48 | $+52.11 | 0.04% | 2.67 | promote |
| Time slot | Mid 10:30-11:30 | 6 | 1.75 | $+14.35 | 2 | ∞ | $+180.91 | 0% | ∞ | watch |
| Setup | trend | 5 | 1.84 | $+18.37 | 2 | 8.8 | $+89.18 | 0.02% | 5.29 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+377.91 | 3.17 |
| +3 bps/side | $+327.66 | 2.62 |
| +5 bps/side | $+277.42 | 2.21 |
| +10 bps/side | $+151.83 | 1.5 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| stagnation | 3 |
| breakeven-stop | 1 |
| early-reversal | 1 |
| trim-profit-target | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 2 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 3 | NVDA | 01-30 15:15 | 01-30 16:15 | 193.04 | 192.29 | 72 | 13898.88 | -54 | -0.39% | 0.4R | 60m | market | stagnation | trend | trend | neutral | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 4 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 5 | AMZN | 02-02 15:15 | 02-02 15:45 | 245.23 | 244.25 | 57 | 13978.11 | -55.86 | -0.4% | 0.34R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 6 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 7 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 8 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 74 | 14027.44 | +160.58 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 9 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 10 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |

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
| 10 | **Slippage model** | 0.03 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ✅ **Profit factor 3.51** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.56R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T13:40:22.126Z*
