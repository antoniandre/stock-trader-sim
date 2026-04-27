# Bot Trade Report — 41 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:36.625Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1166.92 (-1.17%) over 41 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 41 |
| Win rate | 19.51% (8W / 33L) |
| Net P&L | $-1166.92 (-1.17%) |
| Gross profit | $1477.42 |
| Gross loss | $2644.34 |
| Profit factor | 0.56 |
| Avg win | $184.68 |
| Avg loss | $80.13 |
| Payoff ratio | 2.3:1 |
| Expectancy | $-28.46 / trade |
| Max drawdown | 2.14% |
| Sharpe ratio (ann.) | -3.09 |
| Trades / active day | 1.05 |
| Avg confidence | 97.68% |
| Avg trade duration | 42 min |
| Avg risk ratio | 0.59R |
| Starting equity | $100,000 |
| Ending equity | $98,833.08 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 46.15% | $+593.99 | $45.69 |
| Mid  10:30–11:30 | 28 | 7.14% | $-1760.91 | $-62.89 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SMCI | 41 | 8 | 19.51% | $-1166.92 | $-28.46 | 0.56 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 31 | 5 | 16.13% | $-1260.26 | $-40.65 |
| breakout | 10 | 3 | 30% | $+93.34 | $+9.33 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 25 | 6 | 24% | $-571.86 | $-22.87 |
| noisyHighBeta | 16 | 2 | 12.5% | $-595.06 | $-37.19 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 8 | 4.16 | $+76.76 | 5 | 0.87 | $-4.01 | 0.14% | 0.63 | watch |
| Behavior | neutral | 11 | 2.03 | $+42 | 14 | 0.11 | $-73.85 | 1.15% | 0.09 | watch |
| Setup | breakout | 6 | 4.82 | $+97.84 | 4 | 0 | $-123.42 | 0.49% | 0 | watch |
| Setup | trend | 18 | 0.54 | $-28.96 | 13 | 0.15 | $-56.85 | 0.77% | 0.12 | reject |
| Behavior | noisyHighBeta | 13 | 0.52 | $-30.48 | 3 | 0 | $-66.28 | 0.2% | 0 | reject |
| Symbol | SMCI | 24 | 1.05 | $+2.74 | 17 | 0.1 | $-72.51 | 1.26% | 0.08 | reject |
| Time slot | Mid 10:30-11:30 | 16 | 0.5 | $-34.27 | 12 | 0 | $-101.05 | 1.21% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1256.25 | 0.54 |
| +3 bps/side | $-1434.91 | 0.5 |
| +5 bps/side | $-1613.6 | 0.46 |
| +10 bps/side | $-2060.27 | 0.39 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 22 |
| stagnation | 5 |
| trailing-stop | 4 |
| profit-target | 3 |
| timeout | 3 |
| breakeven-stop | 2 |
| trim-profit-target | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SMCI | 05-08 14:50 | 05-08 15:10 | 840.75 | 835.77 | 9 | 7566.75 | -44.82 | -0.59% | 0.34R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 63.86 | ↑823.06 | 3.5839 | 1.19 | **LOSS** |
| 2 | SMCI | 05-14 14:05 | 05-14 14:45 | 797.68 | 807.75 | 17 | 13560.56 | +171.19 | +1.26% | 0.82R | 40m | market | trailing-stop | trend | trend | neutral | 62.4 | ↑785.14 | 0.691 | 2.75 | **WIN** |
| 3 | SMCI | 05-15 14:15 | 05-15 15:15 | 858.38 | 890.73 | 8 | 6867.04 | +258.8 | +3.77% | 2.01R | 60m | market | profit-target | breakout | trend | noisyHighBeta | 71.96 | ↑850.75 | 9.5601 | 1.06 | **WIN** |
| 4 | SMCI | 05-21 14:35 | 05-21 16:20 | 913.7 | 935.65 | 8 | 7309.6 | +175.6 | +2.4% | 1.34R | 105m | market | timeout | breakout | trend | noisyHighBeta | 56.73 | ↑895.89 | 2.2754 | 1.82 | **WIN** |
| 5 | SMCI | 05-24 14:45 | 05-24 15:20 | 889.18 | 877.38 | 8 | 7113.44 | -94.4 | -1.33% | 0.67R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 72.34 | ↑868.06 | 11.1563 | 1.11 | **LOSS** |
| 6 | SMCI | 06-05 14:55 | 06-05 15:30 | 812.79 | 807.07 | 17 | 13817.43 | -97.24 | -0.7% | 0.49R | 35m | market | early-reversal | breakout | breakout | neutral | 71.82 | ↑797.01 | 9.7392 | 1.43 | **LOSS** |
| 7 | SMCI | 06-10 14:20 | 06-10 15:55 | 785.32 | 788.16 | 17 | 13350.44 | +48.28 | +0.36% | 0.23R | 95m | market | trailing-stop | breakout | breakout | neutral | 61.14 | ↓771.25 | 1.937 | 1.16 | **WIN** |
| 8 | SMCI | 06-12 14:25 | 06-12 14:50 | 799.28 | 792.27 | 17 | 13587.76 | -119.17 | -0.88% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 76.96 | ↓793.66 | 4.9498 | 2.26 | **LOSS** |
| 9 | SMCI | 06-13 14:00 | 06-13 14:55 | 806.17 | 826.8 | 16 | 12898.72 | +330.08 | +2.56% | 1.28R | 55m | market | profit-target | breakout | breakout | neutral | 63.8 | ↑796.61 | 4.5052 | 2.43 | **WIN** |
| 10 | SMCI | 06-13 15:10 | 06-13 16:10 | 843.07 | 865.72 | 16 | 13489.12 | +362.4 | +2.69% | 1.35R | 60m | market | profit-target | breakout | breakout | neutral | 74.52 | ↑814.09 | 16.0611 | 1.57 | **WIN** |
| 11 | SMCI | 06-18 14:05 | 06-18 14:55 | 923.89 | 921.56 | 8 | 7391.12 | -18.64 | -0.25% | 0.13R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 56.64 | ↑908.44 | 0.1143 | 2.38 | **LOSS** |
| 12 | SMCI | 07-23 15:15 | 07-23 16:20 | 796.91 | 794.92 | 17 | 13547.47 | -33.83 | -0.25% | 0.26R | 65m | market | breakeven-stop | breakout | trend | neutral | 74.05 | ↑774.63 | 2.6544 | 1.15 | **LOSS** |
| 13 | SMCI | 08-23 13:45 | 08-23 14:40 | 617.44 | 617 | 22 | 13583.68 | -9.68 | -0.07% | 0.07R | 55m | market | stagnation | breakout | breakout | neutral | 69.2 | ↓611.41 | 0.9213 | 1.2 | **LOSS** |
| 14 | SMCI | 09-13 14:50 | 09-13 15:25 | 465.48 | 460.88 | 15 | 6982.2 | -69 | -0.99% | 0.5R | 35m | market | early-reversal | breakout | trend | noisyHighBeta | 74.23 | ↑458.2 | 5.7042 | 1.36 | **LOSS** |
| 15 | SMCI | 09-27 13:35 | 09-27 14:10 | 412.73 | 411.22 | 31 | 12794.63 | -46.81 | -0.37% | 0.21R | 35m | market | trailing-stop | breakout | breakout | neutral | 64.33 | ↓407.63 | 2.7998 | 1.85 | **LOSS** |
| 16 | SMCI | 10-09 15:15 | 10-09 15:35 | 48.89 | 48.31 | 146 | 7137.94 | -84.68 | -1.19% | 0.6R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 70.8 | ↑47.46 | 0.98 | 1.02 | **LOSS** |
| 17 | SMCI | 12-06 15:20 | 12-06 15:40 | 43.87 | 43.12 | 163 | 7150.81 | -122.25 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 75.7 | ↑42.69 | 0.5214 | 1.04 | **LOSS** |
| 18 | SMCI | 12-23 14:45 | 12-23 15:05 | 32.38 | 32.08 | 239 | 7738.82 | -71.7 | -0.93% | 0.47R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 54.46 | ↓32.14 | 0.0127 | 1.34 | **LOSS** |
| 19 | SMCI | 01-02 15:00 | 01-02 15:20 | 31.16 | 30.79 | 248 | 7727.68 | -91.76 | -1.19% | 0.6R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 68.33 | ↓30.98 | 0.2319 | 1.32 | **LOSS** |
| 20 | SMCI | 02-04 14:55 | 02-04 15:25 | 28.48 | 28.25 | 271 | 7718.08 | -62.33 | -0.81% | 0.41R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 67.9 | ↓28.14 | 0.2452 | 1.01 | **LOSS** |
| 21 | SMCI | 02-18 15:05 | 02-18 15:30 | 54.61 | 54.14 | 257 | 14034.77 | -120.79 | -0.86% | 0.43R | 25m | market | early-reversal | breakout | trend | neutral | 78.34 | ↑53.51 | 2.0127 | 1.08 | **LOSS** |
| 22 | SMCI | 03-14 15:25 | 03-14 15:45 | 41.9 | 41.46 | 184 | 7709.6 | -80.96 | -1.05% | 0.55R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 68.07 | ↑41.23 | 0.4405 | 1.1 | **LOSS** |
| 23 | SMCI | 05-01 15:25 | 05-01 15:45 | 33.31 | 32.92 | 231 | 7694.61 | -90.09 | -1.17% | 0.64R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 74.49 | ↑32.34 | 0.4172 | 1.01 | **LOSS** |
| 24 | SMCI | 06-12 15:00 | 06-12 15:50 | 43.74 | 43.67 | 320 | 13996.8 | -22.4 | -0.16% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 66.16 | ↑43.24 | 0.1179 | 1.27 | **LOSS** |
| 25 | SMCI | 06-26 14:30 | 06-26 15:15 | 48.73 | 48.16 | 158 | 7699.34 | -90.06 | -1.17% | 0.59R | 45m | market | early-reversal | breakout | trend | noisyHighBeta | 69.54 | ↑47.28 | 0.5854 | 1.04 | **LOSS** |
| 26 | SMCI | 07-21 14:00 | 07-21 15:35 | 53.28 | 53.23 | 262 | 13959.36 | -13.1 | -0.09% | 0.05R | 95m | market | breakeven-stop | trend | trend | neutral | 76.45 | ↓52.93 | 0.378 | 1.02 | **LOSS** |
| 27 | SMCI | 08-18 14:20 | 08-18 15:15 | 45.86 | 46.37 | 152 | 13987.3 | +77.52 | +1.11% | 0.9R | 55m | market | trim-profit-target | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 28 | SMCI | 08-18 14:20 | 08-18 16:05 | 45.86 | 46.21 | 153 | 13987.3 | +53.55 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 29 | SMCI | 09-04 14:35 | 09-04 14:55 | 40.75 | 40.54 | 343 | 13977.25 | -72.03 | -0.52% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑40.32 | 0.1624 | 1.17 | **LOSS** |
| 30 | SMCI | 09-19 14:00 | 09-19 14:20 | 46.4 | 46.14 | 301 | 13966.4 | -78.26 | -0.56% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 63.33 | ↑46.1 | 0.1307 | 1.4 | **LOSS** |
| 31 | SMCI | 09-29 14:40 | 09-29 15:10 | 47.23 | 46.73 | 296 | 13980.08 | -148 | -1.06% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 68.64 | ↑46.6 | 0.3472 | 1.85 | **LOSS** |
| 32 | SMCI | 10-15 14:25 | 10-15 14:45 | 55.04 | 54.61 | 139 | 7650.56 | -59.77 | -0.78% | 0.42R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.54 | ↑54.52 | 0.1897 | 1.5 | **LOSS** |
| 33 | SMCI | 11-03 14:45 | 11-03 15:15 | 52.63 | 52.2 | 244 | 12841.72 | -104.92 | -0.82% | 0.58R | 30m | market | early-reversal | breakout | trend | neutral | 79.6 | ↓52.43 | 0.262 | 1.12 | **LOSS** |
| 34 | SMCI | 11-26 14:40 | 11-26 14:55 | 33.33 | 32.65 | 418 | 13931.94 | -284.24 | -2.04% | 1.84R | 15m | market | stop-loss | breakout | breakout | neutral | 81.14 | ↓33.18 | 0.2153 | 1.27 | **LOSS** |
| 35 | SMCI | 12-08 14:30 | 12-08 15:20 | 35.11 | 34.93 | 396 | 13903.56 | -71.28 | -0.51% | 0.44R | 50m | market | stagnation | breakout | breakout | neutral | 70.34 | ↓35.16 | 0.0772 | 2.91 | **LOSS** |
| 36 | SMCI | 12-29 14:40 | 12-29 15:00 | 31.11 | 30.81 | 446 | 13875.06 | -133.8 | -0.96% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 65.7 | ↑30.55 | 0.0788 | 1.92 | **LOSS** |
| 37 | SMCI | 01-15 14:45 | 01-15 15:35 | 29.05 | 29.03 | 477 | 13856.85 | -9.54 | -0.07% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 75.51 | ↓29 | 0.2031 | 1.68 | **LOSS** |
| 38 | SMCI | 01-27 15:05 | 01-27 16:50 | 31.06 | 31.05 | 437 | 13573.22 | -4.37 | -0.03% | 0.02R | 105m | market | timeout | mixed | breakout | neutral | 57.21 | ↑30.37 | -0.1295 | 1.43 | **LOSS** |
| 39 | SMCI | 02-19 14:30 | 02-19 14:55 | 31.55 | 31.2 | 439 | 13850.45 | -153.65 | -1.11% | 0.56R | 25m | market | trailing-stop | trend | trend | neutral | 79.61 | ↓31.44 | 0.3964 | 9.57 | **LOSS** |
| 40 | SMCI | 03-31 15:00 | 03-31 15:35 | 21.72 | 21.58 | 350 | 7602 | -49 | -0.64% | 0.4R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 55.15 | ↓21.58 | 0.176 | 1.43 | **LOSS** |
| 41 | SMCI | 04-20 15:25 | 04-20 15:50 | 28.65 | 28.46 | 483 | 13837.95 | -91.77 | -0.66% | 0.48R | 25m | market | early-reversal | breakout | trend | neutral | 66.08 | ↑28.15 | 0.0548 | 1.73 | **LOSS** |

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

- ⚠️ **Profit factor 0.56 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.59R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:36.625Z*
