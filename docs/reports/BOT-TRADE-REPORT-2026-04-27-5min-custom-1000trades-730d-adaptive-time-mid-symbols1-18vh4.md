# Bot Trade Report — 35 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T11:02:02.780Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $191.75 (-0.19%) over 35 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 35 |
| Win rate | 37.14% (13W / 22L) |
| Net P&L | $-191.75 (-0.19%) |
| Gross profit | $1300.41 |
| Gross loss | $1492.16 |
| Profit factor | 0.87 |
| Avg win | $100.03 |
| Avg loss | $67.83 |
| Payoff ratio | 1.47:1 |
| Expectancy | $-5.48 / trade |
| Max drawdown | 0.53% |
| Sharpe ratio (ann.) | -0.87 |
| Trades / active day | 1.09 |
| Avg confidence | 99.6% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.69R |
| Starting equity | $100,000 |
| Ending equity | $99,808.25 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 35 | 37.14% | $-191.75 | $-5.48 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| DDOG | 35 | 13 | 37.14% | $-191.75 | $-5.48 | 0.87 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 27 | 11 | 40.74% | $-130.41 | $-4.83 |
| breakout | 8 | 2 | 25% | $-61.34 | $-7.67 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 33 | 13 | 39.39% | $-3.43 | $-0.1 |
| noisyHighBeta | 2 | 0 | 0% | $-188.32 | $-94.16 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 6 | 0.17 | $-46.29 | 2 | 3.47 | $+108.2 | 0.09% | 2.87 | reject |
| Behavior | neutral | 21 | 0.51 | $-21.27 | 12 | 2.13 | $+36.94 | 0.25% | 1.65 | reject |
| Symbol | DDOG | 21 | 0.51 | $-21.27 | 14 | 1.44 | $+18.21 | 0.36% | 1.15 | reject |
| Time slot | Mid 10:30-11:30 | 21 | 0.51 | $-21.27 | 14 | 1.44 | $+18.21 | 0.36% | 1.15 | reject |
| Setup | trend | 15 | 0.71 | $-11.26 | 12 | 1.08 | $+3.21 | 0.43% | 0.85 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-278 | 0.82 |
| +3 bps/side | $-450.5 | 0.73 |
| +5 bps/side | $-622.97 | 0.65 |
| +10 bps/side | $-1054.2 | 0.5 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 17 |
| timeout | 8 |
| trim-profit-target | 3 |
| breakeven-stop | 3 |
| stagnation | 2 |
| stop-loss | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | DDOG | 05-10 15:15 | 05-10 15:45 | 118.62 | 118.25 | 118 | 13997.16 | -43.66 | -0.31% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 70.83 | ↑117.49 | 0.4001 | 1.04 | **LOSS** |
| 2 | DDOG | 05-16 14:30 | 05-16 15:20 | 120.22 | 121.11 | 58 | 13945.52 | +51.62 | +0.74% | 0.87R | 50m | market | trim-profit-target | trend | trend | neutral | 67.21 | ↑119.27 | 0.2423 | 2.02 | **WIN** |
| 3 | DDOG | 05-16 14:30 | 05-16 16:15 | 120.22 | 121 | 58 | 13945.52 | +45.24 | +0.65% | 0.76R | 105m | market | timeout | trend | trend | neutral | 67.21 | ↑119.27 | 0.2423 | 2.02 | **WIN** |
| 4 | DDOG | 05-23 14:35 | 05-23 14:55 | 125.23 | 123.87 | 111 | 13900.53 | -150.96 | -1.09% | 1.02R | 20m | market | stop-loss | trend | trend | neutral | 71.53 | ↓124.18 | 0.7981 | 2.03 | **LOSS** |
| 5 | DDOG | 06-24 15:05 | 06-24 16:50 | 119.57 | 119.52 | 116 | 13870.12 | -5.8 | -0.04% | 0.06R | 105m | market | timeout | trend | trend | neutral | 64.67 | ↑118.66 | 0.6923 | 1.67 | **LOSS** |
| 6 | DDOG | 06-26 15:00 | 06-26 15:30 | 123.38 | 122.83 | 113 | 13941.94 | -62.15 | -0.45% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 77.91 | ↑121.55 | 0.9535 | 1.29 | **LOSS** |
| 7 | DDOG | 07-22 14:35 | 07-22 15:15 | 121.39 | 121.1 | 115 | 13959.85 | -33.35 | -0.24% | 0.2R | 40m | market | breakeven-stop | trend | trend | neutral | 67.88 | ↑120.51 | 0.5445 | 1.01 | **LOSS** |
| 8 | DDOG | 08-15 15:15 | 08-15 15:35 | 118.27 | 117.91 | 118 | 13955.86 | -42.48 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 70.91 | ↑117.31 | 0.918 | 1.47 | **LOSS** |
| 9 | DDOG | 09-12 14:30 | 09-12 14:50 | 110.83 | 110.17 | 126 | 13964.58 | -83.16 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 72.31 | ↓110.17 | 0.3762 | 1.69 | **LOSS** |
| 10 | DDOG | 10-04 15:00 | 10-04 16:45 | 120.28 | 121.67 | 116 | 13952.48 | +161.24 | +1.16% | 1.66R | 105m | market | timeout | trend | trend | neutral | 72.03 | ↑119.36 | 0.6786 | 1.52 | **WIN** |
| 11 | DDOG | 10-29 14:45 | 10-29 15:05 | 128.55 | 127.99 | 108 | 13883.4 | -60.48 | -0.44% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 77.12 | ↑127.67 | 0.6143 | 1.39 | **LOSS** |
| 12 | DDOG | 11-12 14:30 | 11-12 15:05 | 124.01 | 123.36 | 112 | 13889.12 | -72.8 | -0.52% | 0.65R | 35m | market | early-reversal | breakout | breakout | neutral | 83.13 | ↓123.18 | 0.0947 | 1.5 | **LOSS** |
| 13 | DDOG | 12-03 14:30 | 12-03 15:55 | 154.29 | 154.34 | 90 | 13886.1 | +4.5 | +0.03% | 0.04R | 85m | market | breakeven-stop | trend | trend | neutral | 75.18 | ↓153.66 | 0.2279 | 1.26 | **WIN** |
| 14 | DDOG | 12-06 14:35 | 12-06 15:00 | 166.84 | 165.99 | 83 | 13847.72 | -70.55 | -0.51% | 0.69R | 25m | market | early-reversal | breakout | breakout | neutral | 84.85 | ↓166.21 | 0.3208 | 1.2 | **LOSS** |
| 15 | DDOG | 01-02 14:55 | 01-02 15:20 | 144.51 | 143.48 | 96 | 13872.96 | -98.88 | -0.71% | 0.76R | 25m | market | early-reversal | trend | breakout | neutral | 63.51 | ↓143.71 | 0.2011 | 1.76 | **LOSS** |
| 16 | DDOG | 01-23 14:40 | 01-23 15:30 | 142.18 | 142.02 | 98 | 13933.64 | -15.68 | -0.11% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 73.65 | ↓142.17 | 0.5137 | 1.59 | **LOSS** |
| 17 | DDOG | 02-10 15:15 | 02-10 17:00 | 145.73 | 147.27 | 95 | 13844.35 | +146.3 | +1.06% | 0.92R | 105m | market | timeout | trend | trend | neutral | 76.99 | ↑145.47 | 0.8971 | 1.85 | **WIN** |
| 18 | DDOG | 02-26 14:35 | 02-26 14:55 | 116.91 | 116.27 | 119 | 13912.29 | -76.16 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 73.87 | ↓116.39 | 0.0515 | 1.99 | **LOSS** |
| 19 | DDOG | 04-24 15:10 | 04-24 16:05 | 98.76 | 98.59 | 141 | 13925.16 | -23.97 | -0.17% | 0.2R | 55m | market | stagnation | trend | trend | neutral | 67.71 | ↑97.87 | 1.001 | 2.93 | **LOSS** |
| 20 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.32 | 106.75 | 131 | 13927.92 | +56.33 | +0.4% | 0.21R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 21 | DDOG | 06-16 14:40 | 06-16 15:00 | 122.32 | 121.69 | 114 | 13944.48 | -71.82 | -0.52% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 58.58 | ↓121.71 | 0.393 | 1.13 | **LOSS** |
| 22 | DDOG | 06-18 14:55 | 06-18 16:25 | 128.89 | 128.93 | 108 | 13920.12 | +4.32 | +0.03% | 0.04R | 90m | market | breakeven-stop | trend | trend | neutral | 73.75 | ↑127.41 | 1.0241 | 1.07 | **WIN** |
| 23 | DDOG | 07-03 14:40 | 07-03 15:55 | 152.02 | 153.89 | 45 | 13833.82 | +84.15 | +1.23% | 0.75R | 75m | market | trim-profit-target | trend | trend | neutral | 74.85 | ↑149.79 | 5.0242 | 1.06 | **WIN** |
| 24 | DDOG | 07-03 14:40 | 07-03 16:25 | 152.02 | 154.33 | 46 | 13833.82 | +106.26 | +1.52% | 0.92R | 105m | market | timeout | trend | trend | neutral | 74.85 | ↑149.79 | 5.0242 | 1.06 | **WIN** |
| 25 | DDOG | 07-15 15:25 | 07-15 15:50 | 141.64 | 141.05 | 98 | 13880.72 | -57.82 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 58.22 | ↑140.3 | 0.4975 | 3.66 | **LOSS** |
| 26 | DDOG | 07-17 14:35 | 07-17 15:55 | 141.85 | 143.4 | 49 | 13901.3 | +75.95 | +1.09% | 1.45R | 80m | market | trim-profit-target | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 27 | DDOG | 07-17 14:35 | 07-17 16:20 | 141.85 | 143.88 | 49 | 13901.3 | +99.47 | +1.43% | 1.91R | 105m | market | timeout | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 28 | DDOG | 10-01 14:45 | 10-01 16:30 | 149.04 | 150.77 | 93 | 13860.72 | +160.89 | +1.16% | 1R | 105m | market | timeout | trend | trend | neutral | 70.2 | ↑147.76 | 2.1819 | 1.09 | **WIN** |
| 29 | DDOG | 10-31 14:45 | 10-31 15:05 | 162.9 | 162.02 | 85 | 13846.5 | -74.8 | -0.54% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 71.44 | ↑161.57 | 1.218 | 1.59 | **LOSS** |
| 30 | DDOG | 11-03 14:40 | 11-03 15:05 | 164.41 | 163.41 | 85 | 13974.85 | -85 | -0.61% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 62.79 | ↓164.35 | 0.7088 | 1.42 | **LOSS** |
| 31 | DDOG | 01-30 14:30 | 01-30 14:55 | 129.65 | 128.83 | 107 | 13872.55 | -87.74 | -0.63% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 72.66 | ↓128.99 | -0.2105 | 1.17 | **LOSS** |
| 32 | DDOG | 02-09 15:15 | 02-09 15:35 | 113.54 | 111.78 | 67 | 7607.18 | -117.92 | -1.55% | 0.78R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 59.73 | ↓113.26 | 0.4062 | 1.37 | **LOSS** |
| 33 | DDOG | 03-04 14:40 | 03-04 15:00 | 114.36 | 117.1 | 111 | 12693.96 | +304.14 | +2.4% | 1.63R | 20m | market | profit-target | breakout | breakout | neutral | 72.07 | ↑113.58 | 0.089 | 2.66 | **WIN** |
| 34 | DDOG | 03-30 15:00 | 03-30 15:25 | 119.02 | 118.28 | 117 | 13925.34 | -86.58 | -0.62% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.07 | ↑117.79 | 1.2144 | 1.32 | **LOSS** |
| 35 | DDOG | 04-15 15:15 | 04-15 15:35 | 119.46 | 118.36 | 64 | 7645.44 | -70.4 | -0.92% | 1.02R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 64.89 | ↑118.16 | 2.0268 | 1.23 | **LOSS** |

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

- ⚠️ **Profit factor 0.87 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.69R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T11:02:02.780Z*
