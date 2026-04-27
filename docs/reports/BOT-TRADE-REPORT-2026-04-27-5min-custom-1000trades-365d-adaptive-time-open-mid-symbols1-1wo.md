# Bot Trade Report — 22 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:19:32.504Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $347.69 (-0.35%) over 22 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 22 |
| Win rate | 36.36% (8W / 14L) |
| Net P&L | $-347.69 (-0.35%) |
| Gross profit | $1042.98 |
| Gross loss | $1390.67 |
| Profit factor | 0.75 |
| Avg win | $130.37 |
| Avg loss | $99.33 |
| Payoff ratio | 1.31:1 |
| Expectancy | $-15.8 / trade |
| Max drawdown | 0.94% |
| Sharpe ratio (ann.) | -1.43 |
| Trades / active day | 1.05 |
| Avg confidence | 98.86% |
| Avg trade duration | 51 min |
| Avg risk ratio | 0.85R |
| Starting equity | $100,000 |
| Ending equity | $99,652.31 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 71.43% | $+803.38 | $114.77 |
| Mid  10:30–11:30 | 15 | 20% | $-1151.07 | $-76.74 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MU | 22 | 8 | 36.36% | $-347.69 | $-15.8 | 0.75 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 7 | 5 | 71.43% | $+386.14 | $+55.16 |
| trend | 15 | 3 | 20% | $-733.83 | $-48.92 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 19 | 8 | 42.11% | $-148.05 | $-7.79 |
| noisyHighBeta | 3 | 0 | 0% | $-199.64 | $-66.55 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 5 | 9.69 | $+152.68 | 2 | 1.67 | $+19.98 | 0.06% | 1.28 | watch |
| Symbol | MU | 13 | 1.68 | $+28.15 | 9 | 0.17 | $-79.29 | 0.81% | 0.12 | watch |
| Behavior | neutral | 13 | 1.68 | $+28.15 | 6 | 0.22 | $-85.66 | 0.61% | 0.16 | watch |
| Time slot | Mid 10:30-11:30 | 8 | 0.11 | $-49.69 | 7 | 0.05 | $-107.65 | 0.75% | 0.03 | reject |
| Setup | trend | 9 | 1.14 | $+8.08 | 6 | 0 | $-134.43 | 0.81% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-404.56 | 0.72 |
| +3 bps/side | $-518.34 | 0.65 |
| +5 bps/side | $-632.11 | 0.6 |
| +10 bps/side | $-916.52 | 0.48 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 10 |
| timeout | 5 |
| trailing-stop | 2 |
| stagnation | 2 |
| profit-target | 1 |
| breakeven-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MU | 05-13 13:30 | 05-13 15:15 | 93.9 | 95.72 | 138 | 12958.2 | +251.16 | +1.94% | 2.52R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 2 | MU | 05-13 15:25 | 05-13 17:10 | 96.05 | 96.37 | 146 | 14023.3 | +46.72 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 3 | MU | 05-22 15:05 | 05-22 15:25 | 97.06 | 96.47 | 144 | 13976.64 | -84.96 | -0.61% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 4 | MU | 06-09 13:55 | 06-09 15:40 | 110.3 | 110.49 | 127 | 14008.1 | +24.13 | +0.17% | 0.16R | 105m | market | trailing-stop | breakout | breakout | neutral | 64.04 | ↓109.47 | 0.1484 | 1.54 | **WIN** |
| 5 | MU | 06-16 14:40 | 06-16 15:25 | 120.48 | 119.85 | 116 | 13975.68 | -73.08 | -0.52% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 73.04 | ↑119.28 | 1.2965 | 1.19 | **LOSS** |
| 6 | MU | 06-18 14:30 | 06-18 14:50 | 122.52 | 121.58 | 114 | 13967.28 | -107.16 | -0.77% | 0.88R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 7 | MU | 07-02 14:45 | 07-02 15:40 | 122.16 | 122.08 | 114 | 13926.24 | -9.12 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 8 | MU | 07-24 15:00 | 07-24 15:30 | 112.61 | 111.83 | 124 | 13963.64 | -96.72 | -0.69% | 0.78R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 9 | MU | 08-08 14:15 | 08-08 15:20 | 113.83 | 118.33 | 122 | 13887.26 | +549 | +3.95% | 4.16R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 10 | MU | 08-22 14:40 | 08-22 15:10 | 120.35 | 119.69 | 116 | 13960.6 | -76.56 | -0.55% | 0.33R | 30m | market | early-reversal | trend | trend | neutral | 70.7 | ↑119.08 | 1.0606 | 1.19 | **LOSS** |
| 11 | MU | 09-12 14:20 | 09-12 16:05 | 156.13 | 156.43 | 90 | 14051.7 | +27 | +0.19% | 0.1R | 105m | market | timeout | breakout | breakout | neutral | 81.48 | ↑154.74 | 0.9647 | 1.91 | **WIN** |
| 12 | MU | 09-17 14:15 | 09-17 14:35 | 160.29 | 159.28 | 87 | 13945.23 | -87.87 | -0.63% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 65 | ↑158.53 | 0.4402 | 1.01 | **LOSS** |
| 13 | MU | 09-22 15:15 | 09-22 15:45 | 166.02 | 166.06 | 84 | 13945.68 | +3.36 | +0.02% | 0.03R | 30m | market | breakeven-stop | trend | trend | neutral | 64.13 | ↑164.32 | 0.7393 | 1.55 | **WIN** |
| 14 | MU | 10-03 15:15 | 10-03 15:35 | 191.22 | 190.15 | 73 | 13959.06 | -78.11 | -0.56% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑188.7 | 1.7074 | 1.12 | **LOSS** |
| 15 | MU | 11-13 14:30 | 11-13 14:40 | 246.97 | 238.92 | 56 | 13830.32 | -450.8 | -3.26% | 3.84R | 10m | market | stop-loss | breakout | trend | neutral | 69.78 | ↓245.61 | 0.1631 | 5.26 | **LOSS** |
| 16 | MU | 11-28 15:00 | 11-28 15:20 | 236.88 | 234.13 | 32 | 7580.16 | -88 | -1.16% | 0.76R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.65 | ↓236.4 | 1.4354 | 1.2 | **LOSS** |
| 17 | MU | 12-17 14:35 | 12-17 15:30 | 235.23 | 233.61 | 32 | 7527.36 | -51.84 | -0.69% | 0.58R | 55m | market | stagnation | trend | trend | noisyHighBeta | 74.36 | ↓235.12 | 0.4878 | 2.15 | **LOSS** |
| 18 | MU | 01-27 14:35 | 01-27 16:20 | 405.02 | 406.37 | 31 | 12555.62 | +41.85 | +0.33% | 0.2R | 105m | market | timeout | breakout | breakout | neutral | 79.1 | ↓404.15 | 1.3266 | 1.73 | **WIN** |
| 19 | MU | 02-24 14:35 | 02-24 14:50 | 425.84 | 424.32 | 32 | 13626.88 | -48.64 | -0.36% | 0.25R | 15m | market | trailing-stop | breakout | breakout | neutral | 78.66 | ↓424.99 | 0.7161 | 4.48 | **LOSS** |
| 20 | MU | 03-18 15:05 | 03-18 15:25 | 469.95 | 467.26 | 29 | 13628.55 | -78.01 | -0.57% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 63.87 | ↑464.63 | 1.5325 | 1.45 | **LOSS** |
| 21 | MU | 03-31 14:15 | 03-31 14:45 | 327.85 | 325.25 | 23 | 7540.55 | -59.8 | -0.79% | 0.4R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 58.31 | ↑321.41 | 0.828 | 1.21 | **LOSS** |
| 22 | MU | 04-22 14:25 | 04-22 16:10 | 474.56 | 478 | 29 | 13762.24 | +99.76 | +0.72% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 78.4 | ↑467.04 | 5.021 | 2.8 | **WIN** |

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

- ⚠️ **Profit factor 0.75 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.85R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:19:32.504Z*
