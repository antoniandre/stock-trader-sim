# Bot Trade Report — 21 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:21:15.005Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $570.56 (-0.57%) over 21 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 21 |
| Win rate | 14.29% (3W / 18L) |
| Net P&L | $-570.56 (-0.57%) |
| Gross profit | $361.63 |
| Gross loss | $932.19 |
| Profit factor | 0.39 |
| Avg win | $120.54 |
| Avg loss | $51.79 |
| Payoff ratio | 2.33:1 |
| Expectancy | $-27.17 / trade |
| Max drawdown | 0.68% |
| Sharpe ratio (ann.) | -5.81 |
| Trades / active day | 1 |
| Avg confidence | 99.43% |
| Avg trade duration | 49 min |
| Avg risk ratio | 0.48R |
| Starting equity | $100,000 |
| Ending equity | $99,429.44 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 10 | 10% | $-435.87 | $-43.59 |
| Mid  10:30–11:30 | 11 | 18.18% | $-134.69 | $-12.24 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRWD | 21 | 3 | 14.29% | $-570.56 | $-27.17 | 0.39 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 2 | 14.29% | $-336.83 | $-24.06 |
| breakout | 7 | 1 | 14.29% | $-233.73 | $-33.39 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 0 | 0% | $-75.18 | $-75.18 |
| neutral | 20 | 3 | 15% | $-495.38 | $-24.77 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 12 | 0.05 | $-50.12 | 8 | 1.47 | $+13.26 | 0.11% | 0.99 | reject |
| Symbol | CRWD | 12 | 0.05 | $-50.12 | 9 | 1.1 | $+3.43 | 0.18% | 0.78 | reject |
| Setup | trend | 8 | 0.09 | $-39.09 | 6 | 0.88 | $-4.02 | 0.18% | 0.61 | reject |
| Time slot | Open 9:30-10:30 | 9 | 0.07 | $-46.66 | 1 | 0 | $-15.9 | 0.02% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-626.63 | 0.36 |
| +3 bps/side | $-738.72 | 0.31 |
| +5 bps/side | $-850.84 | 0.27 |
| +10 bps/side | $-1131.15 | 0.2 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| stagnation | 6 |
| timeout | 3 |
| breakeven-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.3 | 439.61 | 31 | 13711.3 | -83.39 | -0.61% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 2 | CRWD | 05-23 14:35 | 05-23 15:05 | 452.96 | 450.05 | 30 | 13588.8 | -87.3 | -0.64% | 0.6R | 30m | market | early-reversal | trend | trend | neutral | 74.01 | ↑446.5 | 0.9714 | 1.22 | **LOSS** |
| 3 | CRWD | 05-27 14:25 | 05-27 15:15 | 473.09 | 472.06 | 29 | 13719.61 | -29.87 | -0.22% | 0.18R | 50m | market | stagnation | trend | trend | neutral | 77.19 | ↑469.22 | 3.9153 | 2.03 | **LOSS** |
| 4 | CRWD | 06-11 14:20 | 06-11 16:05 | 474.75 | 475.82 | 29 | 13767.75 | +31.03 | +0.23% | 0.29R | 105m | market | timeout | trend | trend | neutral | 69.44 | ↑472.37 | 1.3192 | 3.22 | **WIN** |
| 5 | CRWD | 06-17 14:10 | 06-17 15:45 | 484.86 | 484.75 | 28 | 13576.08 | -3.08 | -0.02% | 0.03R | 95m | market | breakeven-stop | trend | trend | neutral | 71.41 | ↑481.22 | 0.8725 | 1.47 | **LOSS** |
| 6 | CRWD | 07-21 14:00 | 07-21 14:20 | 488.15 | 482.8 | 28 | 13668.2 | -149.8 | -1.1% | 1.08R | 20m | market | early-reversal | breakout | breakout | neutral | 77.39 | ↓482.72 | 2.7767 | 1.57 | **LOSS** |
| 7 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.96 | 444.21 | 31 | 13824.76 | -54.25 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 8 | CRWD | 08-22 14:05 | 08-22 14:20 | 419.91 | 419.34 | 33 | 13857.03 | -18.81 | -0.14% | 0.2R | 15m | market | breakeven-stop | breakout | breakout | neutral | 77.34 | ↑417.75 | 0.6993 | 2.81 | **LOSS** |
| 9 | CRWD | 09-08 15:10 | 09-08 15:35 | 425.7 | 423.18 | 32 | 13622.4 | -80.64 | -0.59% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 66.74 | ↑421.55 | 2.0221 | 1.65 | **LOSS** |
| 10 | CRWD | 09-29 14:00 | 09-29 14:45 | 488.5 | 486.86 | 28 | 13678 | -45.92 | -0.34% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 74.94 | ↓486.63 | 1.4939 | 2.13 | **LOSS** |
| 11 | CRWD | 10-13 14:00 | 10-13 14:40 | 506.06 | 503.62 | 27 | 13663.62 | -65.88 | -0.48% | 0.49R | 40m | market | early-reversal | breakout | breakout | neutral | 71.4 | ↓504.12 | 1.8703 | 3.05 | **LOSS** |
| 12 | CRWD | 10-23 14:35 | 10-23 15:25 | 517.88 | 517.36 | 26 | 13464.88 | -13.52 | -0.1% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 72.51 | ↑514.96 | 5.4162 | 1.1 | **LOSS** |
| 13 | CRWD | 12-02 14:35 | 12-02 15:25 | 515.15 | 512.87 | 27 | 13909.05 | -61.56 | -0.44% | 0.55R | 50m | market | stagnation | breakout | breakout | neutral | 81.95 | ↓512.99 | 1.1955 | 1.3 | **LOSS** |
| 14 | CRWD | 01-13 14:35 | 01-13 14:45 | 471.92 | 471.42 | 29 | 13685.68 | -14.5 | -0.11% | 0.16R | 10m | market | breakeven-stop | trend | trend | neutral | 78.1 | ↑468.36 | 0.9225 | 1.25 | **LOSS** |
| 15 | CRWD | 01-26 15:00 | 01-26 16:45 | 461.09 | 466.85 | 30 | 13832.7 | +172.8 | +1.25% | 1.17R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑459.32 | 1.7389 | 1.25 | **WIN** |
| 16 | CRWD | 02-02 14:50 | 02-02 15:40 | 446.03 | 444.7 | 31 | 13826.93 | -41.23 | -0.3% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | 68.88 | ↑442.27 | -0.228 | 1.24 | **LOSS** |
| 17 | CRWD | 02-13 14:30 | 02-13 16:15 | 418.68 | 423.94 | 30 | 12560.4 | +157.8 | +1.26% | 1.42R | 105m | market | timeout | breakout | breakout | neutral | 67.08 | ↑417.18 | 1.4772 | 1.29 | **WIN** |
| 18 | CRWD | 02-24 15:20 | 02-24 16:05 | 356.69 | 353.11 | 21 | 7490.49 | -75.18 | -1% | 0.5R | 45m | market | early-reversal | breakout | trend | noisyHighBeta | 66.2 | ↓353.15 | 2.5161 | 2.52 | **LOSS** |
| 19 | CRWD | 03-09 14:50 | 03-09 15:40 | 437.34 | 435.83 | 31 | 13557.54 | -46.81 | -0.35% | 0.2R | 50m | market | stagnation | breakout | trend | neutral | 62.2 | ↑432.21 | 1.2945 | 1.17 | **LOSS** |
| 20 | CRWD | 03-23 15:00 | 03-23 15:25 | 416.77 | 415.42 | 33 | 13753.41 | -44.55 | -0.32% | 0.38R | 25m | market | early-reversal | trend | trend | neutral | 70.39 | ↑413.25 | 2.5289 | 2.4 | **LOSS** |
| 21 | CRWD | 04-22 14:00 | 04-22 15:00 | 460.25 | 459.72 | 30 | 13807.5 | -15.9 | -0.12% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 72.28 | ↑457.45 | 2.517 | 1.81 | **LOSS** |

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

- ⚠️ **Profit factor 0.39 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.48R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:21:15.005Z*
