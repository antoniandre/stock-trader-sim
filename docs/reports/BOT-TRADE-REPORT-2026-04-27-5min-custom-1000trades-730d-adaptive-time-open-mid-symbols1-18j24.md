# Bot Trade Report — 45 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:39.100Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $229.36 (-0.23%) over 45 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 45 |
| Win rate | 31.11% (14W / 31L) |
| Net P&L | $-229.36 (-0.23%) |
| Gross profit | $1955.05 |
| Gross loss | $2184.41 |
| Profit factor | 0.9 |
| Avg win | $139.65 |
| Avg loss | $70.46 |
| Payoff ratio | 1.98:1 |
| Expectancy | $-5.1 / trade |
| Max drawdown | 0.83% |
| Sharpe ratio (ann.) | -0.67 |
| Trades / active day | 1.05 |
| Avg confidence | 99.73% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $99,770.64 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 18 | 22.22% | $-663.62 | $-36.87 |
| Mid  10:30–11:30 | 27 | 37.04% | $+434.26 | $16.08 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRWD | 45 | 14 | 31.11% | $-229.36 | $-5.1 | 0.9 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 32 | 8 | 25% | $-675.9 | $-21.12 |
| breakout | 13 | 6 | 46.15% | $+446.54 | $+34.35 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 3 | 1 | 33.33% | $-64.38 | $-21.46 |
| neutral | 42 | 13 | 30.95% | $-164.98 | $-3.93 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 17 | 1.59 | $+28.33 | 10 | 0.87 | $-4.74 | 0.17% | 0.63 | watch |
| Setup | breakout | 6 | 4.4 | $+113.38 | 7 | 0.4 | $-33.39 | 0.39% | 0.31 | watch |
| Setup | trend | 21 | 0.59 | $-23.91 | 11 | 0.54 | $-15.79 | 0.2% | 0.36 | reject |
| Behavior | neutral | 25 | 1.12 | $+6.69 | 17 | 0.52 | $-19.54 | 0.55% | 0.36 | reject |
| Symbol | CRWD | 27 | 1.13 | $+6.59 | 18 | 0.47 | $-22.63 | 0.55% | 0.33 | reject |
| Time slot | Open 9:30-10:30 | 10 | 0.49 | $-30.36 | 8 | 0.08 | $-45 | 0.39% | 0.04 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-343.82 | 0.85 |
| +3 bps/side | $-572.66 | 0.76 |
| +5 bps/side | $-801.54 | 0.69 |
| +10 bps/side | $-1373.78 | 0.54 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 17 |
| timeout | 11 |
| stagnation | 8 |
| stop-loss | 3 |
| breakeven-stop | 3 |
| trim-profit-target | 2 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CRWD | 05-21 14:30 | 05-21 15:30 | 349.12 | 348.61 | 40 | 13964.8 | -20.4 | -0.15% | 0.12R | 60m | market | stagnation | trend | trend | neutral | 52 | ↑345.6 | 0.3984 | 1.17 | **LOSS** |
| 2 | CRWD | 05-24 14:15 | 05-24 15:35 | 348.17 | 353.32 | 20 | 13926.8 | +103 | +1.48% | 1.74R | 80m | market | trim-profit-target | trend | trend | neutral | 69.97 | ↑345.63 | 0.8419 | 1.04 | **WIN** |
| 3 | CRWD | 05-24 14:15 | 05-24 16:00 | 348.17 | 354.05 | 20 | 13926.8 | +117.6 | +1.69% | 1.99R | 105m | market | timeout | trend | trend | neutral | 69.97 | ↑345.63 | 0.8419 | 1.04 | **WIN** |
| 4 | CRWD | 07-03 14:15 | 07-03 14:35 | 389.27 | 387.32 | 36 | 14013.72 | -70.2 | -0.5% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 61.39 | ↑385.85 | 0.3785 | 1.49 | **LOSS** |
| 5 | CRWD | 07-12 14:00 | 07-12 14:20 | 373.89 | 372.18 | 37 | 13833.93 | -63.27 | -0.46% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 73.52 | ↑371.76 | 0.9257 | 2.78 | **LOSS** |
| 6 | CRWD | 07-15 13:55 | 07-15 15:40 | 378.19 | 380.06 | 37 | 13993.03 | +69.19 | +0.49% | 0.35R | 105m | market | timeout | breakout | breakout | neutral | 63.23 | ↑371.42 | 1.0256 | 1.54 | **WIN** |
| 7 | CRWD | 08-05 15:20 | 08-05 15:40 | 222.78 | 219.55 | 62 | 13812.36 | -200.26 | -1.45% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑215.85 | 1.025 | 1.15 | **LOSS** |
| 8 | CRWD | 08-23 14:00 | 08-23 14:15 | 273.23 | 270.36 | 51 | 13934.73 | -146.37 | -1.05% | 1.33R | 15m | market | stop-loss | trend | trend | neutral | 74.42 | ↓270.88 | 0.3966 | 1.49 | **LOSS** |
| 9 | CRWD | 09-12 14:15 | 09-12 14:45 | 256.31 | 254.93 | 54 | 13840.74 | -74.52 | -0.54% | 0.56R | 30m | market | early-reversal | trend | trend | neutral | 69.64 | ↓254.67 | 0.7525 | 1.3 | **LOSS** |
| 10 | CRWD | 09-25 14:10 | 09-25 14:30 | 291.55 | 288.64 | 47 | 13702.85 | -136.77 | -1% | 1.43R | 20m | market | stop-loss | trend | trend | neutral | 69.2 | ↓289.91 | 0.2117 | 1.18 | **LOSS** |
| 11 | CRWD | 10-28 14:00 | 10-28 14:50 | 302.48 | 302.07 | 46 | 13914.08 | -18.86 | -0.14% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 62.38 | ↑299.22 | 0.9414 | 1.19 | **LOSS** |
| 12 | CRWD | 11-18 14:45 | 11-18 16:35 | 339.42 | 346.23 | 41 | 13916.22 | +279.21 | +2.01% | 2.68R | 110m | market | timeout | trend | trend | neutral | 71.03 | ↑338.74 | 1.1731 | 2.05 | **WIN** |
| 13 | CRWD | 12-11 14:30 | 12-11 16:15 | 351.18 | 355.64 | 39 | 13696.02 | +173.94 | +1.27% | 1.81R | 105m | market | timeout | trend | breakout | neutral | 63.27 | ↑350.29 | -0.741 | 1.71 | **WIN** |
| 14 | CRWD | 12-16 15:00 | 12-16 15:20 | 374.71 | 371.99 | 37 | 13864.27 | -100.64 | -0.73% | 0.59R | 20m | market | early-reversal | breakout | trend | neutral | 67.47 | ↑370.75 | 1.8003 | 1.22 | **LOSS** |
| 15 | CRWD | 01-02 14:55 | 01-02 15:20 | 348.76 | 345.13 | 40 | 13950.4 | -145.2 | -1.04% | 0.83R | 25m | market | early-reversal | breakout | trend | neutral | 66.2 | ↓346.14 | 1.0719 | 1.02 | **LOSS** |
| 16 | CRWD | 01-14 14:30 | 01-14 16:15 | 345.75 | 347.96 | 40 | 13830 | +88.4 | +0.64% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 81.07 | ↑344.97 | 1.3892 | 1.83 | **WIN** |
| 17 | CRWD | 01-27 15:25 | 01-27 16:05 | 378.17 | 377.38 | 36 | 13614.12 | -28.44 | -0.21% | 0.11R | 40m | market | breakeven-stop | trend | trend | neutral | 54.27 | ↑370.24 | 0.076 | 1.22 | **LOSS** |
| 18 | CRWD | 01-28 14:55 | 01-28 15:30 | 386.94 | 398.67 | 36 | 13929.84 | +422.28 | +3.03% | 2.02R | 35m | market | profit-target | breakout | breakout | neutral | 85.18 | ↑381.29 | 3.413 | 3.16 | **WIN** |
| 19 | CRWD | 02-10 14:30 | 02-10 16:15 | 427.02 | 430.98 | 32 | 13664.64 | +126.72 | +0.93% | 1.33R | 105m | market | timeout | breakout | breakout | neutral | 65.84 | ↑426.25 | -0.5709 | 1.97 | **WIN** |
| 20 | CRWD | 03-06 15:20 | 03-06 16:00 | 368.88 | 366 | 20 | 7377.6 | -57.6 | -0.78% | 0.39R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 57.31 | ↑362.69 | 0.5337 | 1.16 | **LOSS** |
| 21 | CRWD | 04-01 15:05 | 04-01 16:25 | 360.22 | 359.24 | 38 | 13688.36 | -37.24 | -0.27% | 0.31R | 80m | market | stagnation | trend | trend | neutral | 70.05 | ↑356.15 | 1.7146 | 1.22 | **LOSS** |
| 22 | CRWD | 04-02 15:20 | 04-02 16:40 | 369.57 | 372.14 | 18 | 13674.09 | +46.26 | +0.7% | 0.71R | 80m | market | trim-profit-target | trend | trend | neutral | 58.96 | ↑367.02 | 2.3856 | 2.5 | **WIN** |
| 23 | CRWD | 04-02 15:20 | 04-02 17:05 | 369.57 | 374.75 | 19 | 13674.09 | +98.42 | +1.4% | 1.41R | 105m | market | timeout | trend | trend | neutral | 58.96 | ↑367.02 | 2.3856 | 2.5 | **WIN** |
| 24 | CRWD | 04-15 14:30 | 04-15 16:15 | 392.39 | 395.99 | 19 | 7455.41 | +68.4 | +0.92% | 0.72R | 105m | market | timeout | trend | trend | noisyHighBeta | 78.54 | ↑388.79 | 3.4996 | 1.08 | **WIN** |
| 25 | CRWD | 04-23 14:40 | 04-23 15:00 | 396.03 | 391.89 | 35 | 13861.05 | -144.9 | -1.05% | 0.8R | 20m | market | stop-loss | trend | trend | neutral | 78.7 | ↑391.21 | 7.9582 | 2.22 | **LOSS** |
| 26 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.3 | 439.61 | 31 | 13711.3 | -83.39 | -0.61% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 27 | CRWD | 05-23 14:35 | 05-23 15:05 | 452.96 | 450.05 | 30 | 13588.8 | -87.3 | -0.64% | 0.6R | 30m | market | early-reversal | trend | trend | neutral | 74.01 | ↑446.5 | 0.9714 | 1.22 | **LOSS** |
| 28 | CRWD | 06-11 14:20 | 06-11 16:05 | 474.75 | 475.82 | 29 | 13767.75 | +31.03 | +0.23% | 0.29R | 105m | market | timeout | trend | trend | neutral | 69.44 | ↑472.37 | 1.3192 | 3.22 | **WIN** |
| 29 | CRWD | 06-26 14:20 | 06-26 14:50 | 502.8 | 501.3 | 27 | 13575.6 | -40.5 | -0.3% | 0.33R | 30m | market | early-reversal | trend | trend | neutral | 79.42 | ↑498.72 | 1.914 | 2.24 | **LOSS** |
| 30 | CRWD | 07-21 14:00 | 07-21 14:20 | 488.15 | 482.8 | 28 | 13668.2 | -149.8 | -1.1% | 1.08R | 20m | market | early-reversal | breakout | breakout | neutral | 77.39 | ↓482.72 | 2.7767 | 1.57 | **LOSS** |
| 31 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.96 | 444.21 | 31 | 13824.76 | -54.25 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 32 | CRWD | 08-22 14:05 | 08-22 14:20 | 419.91 | 419.34 | 33 | 13857.03 | -18.81 | -0.14% | 0.2R | 15m | market | breakeven-stop | breakout | breakout | neutral | 77.34 | ↑417.75 | 0.6993 | 2.81 | **LOSS** |
| 33 | CRWD | 09-08 15:10 | 09-08 15:35 | 425.7 | 423.18 | 32 | 13622.4 | -80.64 | -0.59% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 66.74 | ↑421.55 | 2.0221 | 1.65 | **LOSS** |
| 34 | CRWD | 09-29 14:00 | 09-29 14:45 | 488.5 | 486.86 | 28 | 13678 | -45.92 | -0.34% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 74.94 | ↓486.63 | 1.4939 | 2.13 | **LOSS** |
| 35 | CRWD | 10-13 14:00 | 10-13 14:40 | 506.06 | 503.62 | 27 | 13663.62 | -65.88 | -0.48% | 0.49R | 40m | market | early-reversal | breakout | breakout | neutral | 71.4 | ↓504.12 | 1.8703 | 3.05 | **LOSS** |
| 36 | CRWD | 10-23 14:35 | 10-23 15:25 | 517.88 | 517.36 | 26 | 13464.88 | -13.52 | -0.1% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 72.51 | ↑514.96 | 5.4162 | 1.1 | **LOSS** |
| 37 | CRWD | 12-02 14:35 | 12-02 15:25 | 515.15 | 512.87 | 27 | 13909.05 | -61.56 | -0.44% | 0.55R | 50m | market | stagnation | breakout | breakout | neutral | 81.95 | ↓512.99 | 1.1955 | 1.3 | **LOSS** |
| 38 | CRWD | 01-13 14:35 | 01-13 14:45 | 471.92 | 471.42 | 29 | 13685.68 | -14.5 | -0.11% | 0.16R | 10m | market | breakeven-stop | trend | trend | neutral | 78.1 | ↑468.36 | 0.9225 | 1.25 | **LOSS** |
| 39 | CRWD | 01-26 15:00 | 01-26 16:45 | 461.09 | 466.85 | 30 | 13832.7 | +172.8 | +1.25% | 1.17R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑459.32 | 1.7389 | 1.25 | **WIN** |
| 40 | CRWD | 02-02 14:50 | 02-02 15:40 | 446.03 | 444.7 | 31 | 13826.93 | -41.23 | -0.3% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | 68.88 | ↑442.27 | -0.228 | 1.24 | **LOSS** |
| 41 | CRWD | 02-13 14:30 | 02-13 16:15 | 418.68 | 423.94 | 30 | 12560.4 | +157.8 | +1.26% | 1.42R | 105m | market | timeout | breakout | breakout | neutral | 67.08 | ↑417.18 | 1.4772 | 1.29 | **WIN** |
| 42 | CRWD | 02-24 15:20 | 02-24 16:05 | 356.69 | 353.11 | 21 | 7490.49 | -75.18 | -1% | 0.5R | 45m | market | early-reversal | breakout | trend | noisyHighBeta | 66.2 | ↓353.15 | 2.5161 | 2.52 | **LOSS** |
| 43 | CRWD | 03-09 14:50 | 03-09 15:40 | 437.34 | 435.83 | 31 | 13557.54 | -46.81 | -0.35% | 0.2R | 50m | market | stagnation | breakout | trend | neutral | 62.2 | ↑432.21 | 1.2945 | 1.17 | **LOSS** |
| 44 | CRWD | 03-23 15:00 | 03-23 15:25 | 416.77 | 415.42 | 33 | 13753.41 | -44.55 | -0.32% | 0.38R | 25m | market | early-reversal | trend | trend | neutral | 70.39 | ↑413.25 | 2.5289 | 2.4 | **LOSS** |
| 45 | CRWD | 04-22 14:00 | 04-22 15:00 | 460.25 | 459.72 | 30 | 13807.5 | -15.9 | -0.12% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 72.28 | ↑457.45 | 2.517 | 1.81 | **LOSS** |

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

- ⚠️ **Profit factor 0.9 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:39.100Z*
