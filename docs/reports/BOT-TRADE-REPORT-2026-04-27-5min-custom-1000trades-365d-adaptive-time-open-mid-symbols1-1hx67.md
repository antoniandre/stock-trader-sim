# Bot Trade Report — 26 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:25:33.937Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $206.32 (-0.21%) over 26 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 26 |
| Win rate | 38.46% (10W / 16L) |
| Net P&L | $-206.32 (-0.21%) |
| Gross profit | $1427.91 |
| Gross loss | $1634.23 |
| Profit factor | 0.87 |
| Avg win | $142.79 |
| Avg loss | $102.14 |
| Payoff ratio | 1.4:1 |
| Expectancy | $-7.94 / trade |
| Max drawdown | 0.62% |
| Sharpe ratio (ann.) | -0.83 |
| Trades / active day | 1.04 |
| Avg confidence | 97.58% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.63R |
| Starting equity | $100,000 |
| Ending equity | $99,793.68 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 27.27% | $-215.02 | $-19.55 |
| Mid  10:30–11:30 | 15 | 46.67% | $+8.7 | $0.58 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| RIVN | 26 | 10 | 38.46% | $-206.32 | $-7.94 | 0.87 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 6 | 50% | $+192.54 | $+16.04 |
| breakout | 14 | 4 | 28.57% | $-398.86 | $-28.49 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 6 | 4 | 66.67% | $+300.28 | $+50.05 |
| neutral | 20 | 6 | 30% | $-506.6 | $-25.33 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 7 | 1.3 | $+7.67 | 8 | 0.93 | $-5.62 | 0.37% | 0.81 | watch |
| Setup | breakout | 7 | 1.44 | $+26.08 | 7 | 0.32 | $-83.06 | 0.58% | 0.28 | watch |
| Setup | trend | 8 | 0.8 | $-7.32 | 4 | 4.58 | $+62.77 | 0.07% | 3.6 | reject |
| Symbol | RIVN | 15 | 1.18 | $+8.27 | 11 | 0.64 | $-30.03 | 0.62% | 0.55 | reject |
| Behavior | neutral | 13 | 1.11 | $+5.75 | 7 | 0.32 | $-83.06 | 0.58% | 0.28 | reject |
| Time slot | Open 9:30-10:30 | 8 | 1.13 | $+8.79 | 3 | 0 | $-95.11 | 0.29% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-270.85 | 0.84 |
| +3 bps/side | $-399.92 | 0.77 |
| +5 bps/side | $-528.93 | 0.71 |
| +10 bps/side | $-851.6 | 0.59 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 12 |
| timeout | 7 |
| stagnation | 2 |
| trailing-stop | 2 |
| breakeven-stop | 2 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | RIVN | 05-01 14:25 | 05-01 15:20 | 14.07 | 14.06 | 547 | 7696.29 | -5.47 | -0.07% | 0.04R | 55m | market | stagnation | breakout | trend | noisyHighBeta | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 2 | RIVN | 05-09 14:50 | 05-09 15:10 | 14.27 | 14.38 | 497 | 7092.19 | +54.67 | +0.77% | 0.42R | 20m | market | trailing-stop | breakout | trend | noisyHighBeta | 76.29 | ↑14.01 | 0.0875 | 1.36 | **WIN** |
| 3 | RIVN | 06-11 13:30 | 06-11 13:55 | 14.65 | 14.53 | 887 | 12994.55 | -106.44 | -0.82% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 65.74 | ↓14.67 | 0.0171 | 1.11 | **LOSS** |
| 4 | RIVN | 06-16 13:45 | 06-16 15:30 | 13.76 | 14.02 | 1016 | 13980.16 | +264.16 | +1.89% | 1.78R | 105m | market | timeout | breakout | breakout | neutral | 85.19 | ↑13.66 | 0.0213 | 1.11 | **WIN** |
| 5 | RIVN | 06-18 14:40 | 06-18 16:25 | 13.71 | 13.78 | 1023 | 14025.33 | +71.61 | +0.51% | 0.48R | 105m | market | timeout | trend | trend | neutral | 72.82 | ↑13.6 | 0.0773 | 1.09 | **WIN** |
| 6 | RIVN | 06-26 13:45 | 06-26 15:30 | 13.94 | 13.95 | 1007 | 14037.58 | +10.07 | +0.07% | 0.06R | 105m | market | timeout | trend | breakout | neutral | 58.49 | ↓13.87 | 0.0226 | 2.31 | **WIN** |
| 7 | RIVN | 07-08 14:30 | 07-08 16:15 | 13.06 | 13.16 | 1075 | 14039.5 | +107.5 | +0.77% | 0.62R | 105m | market | timeout | trend | trend | neutral | 78.79 | ↑12.93 | 0.0926 | 1.14 | **WIN** |
| 8 | RIVN | 07-10 14:50 | 07-10 15:15 | 13.42 | 13.36 | 1047 | 14050.74 | -62.82 | -0.45% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 58.72 | ↑13.31 | 0.0564 | 1.04 | **LOSS** |
| 9 | RIVN | 07-17 15:20 | 07-17 15:45 | 13.25 | 13.22 | 1060 | 14045 | -31.8 | -0.23% | 0.15R | 25m | market | trailing-stop | breakout | trend | neutral | 72.22 | ↑12.97 | 0.1663 | 1.23 | **LOSS** |
| 10 | RIVN | 07-18 14:20 | 07-18 14:40 | 13.17 | 13.06 | 1066 | 14039.22 | -117.26 | -0.84% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 61.66 | ↑13.03 | 0.0348 | 2.41 | **LOSS** |
| 11 | RIVN | 07-18 15:05 | 07-18 16:25 | 13.35 | 13.34 | 1050 | 14017.5 | -10.5 | -0.07% | 0.04R | 80m | market | breakeven-stop | breakout | breakout | neutral | 73.05 | ↑13.08 | 0.084 | 1.59 | **LOSS** |
| 12 | RIVN | 08-07 13:55 | 08-07 14:20 | 12.15 | 12 | 1154 | 14021.1 | -173.1 | -1.23% | 0.81R | 25m | market | early-reversal | breakout | breakout | neutral | 81.56 | ↓11.98 | 0.087 | 1.28 | **LOSS** |
| 13 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.52 | 12.81 | 1118 | 13997.36 | +324.22 | +2.32% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 14 | RIVN | 09-05 14:25 | 09-05 14:45 | 14.39 | 14.25 | 899 | 12936.61 | -125.86 | -0.97% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 74.53 | ↑14.21 | 0.189 | 1.13 | **LOSS** |
| 15 | RIVN | 10-13 14:30 | 10-13 14:50 | 13.09 | 13.02 | 1071 | 14019.39 | -74.97 | -0.53% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 55.22 | ↑12.96 | 0.0376 | 4.35 | **LOSS** |
| 16 | RIVN | 10-23 14:20 | 10-23 15:10 | 13.04 | 13.01 | 1074 | 14004.96 | -32.22 | -0.23% | 0.14R | 50m | market | stagnation | trend | breakout | neutral | 55.73 | ↑12.89 | 0.0181 | 1.21 | **LOSS** |
| 17 | RIVN | 11-10 15:05 | 11-10 16:45 | 15.29 | 15.86 | 504 | 7706.16 | +287.28 | +3.73% | 1.87R | 100m | market | profit-target | trend | trend | noisyHighBeta | 48.26 | ↑15.22 | 0.0622 | 1.09 | **WIN** |
| 18 | RIVN | 11-28 14:45 | 11-28 16:30 | 16.86 | 16.94 | 425 | 7165.5 | +34 | +0.47% | 0.27R | 105m | market | timeout | breakout | trend | noisyHighBeta | 68.26 | ↑16.69 | 0.0984 | 1.05 | **WIN** |
| 19 | RIVN | 12-04 14:40 | 12-04 15:00 | 18.03 | 17.84 | 779 | 14045.37 | -148.01 | -1.05% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 68.81 | ↓17.9 | 0.1567 | 1.5 | **LOSS** |
| 20 | RIVN | 12-17 14:30 | 12-17 14:50 | 18.21 | 18.03 | 390 | 7101.9 | -70.2 | -0.99% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.48 | ↓18.19 | 0.0325 | 1.21 | **LOSS** |
| 21 | RIVN | 12-24 15:10 | 12-24 16:50 | 21.24 | 21.24 | 363 | 7710.12 | +0 | +0% | 0R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 66.06 | ↑21.08 | 0.0336 | 1.1 | **WIN** |
| 22 | RIVN | 01-21 14:35 | 01-21 14:55 | 16.35 | 16.17 | 857 | 14011.95 | -154.26 | -1.1% | 1.08R | 20m | market | early-reversal | breakout | breakout | neutral | 80.65 | ↓16.31 | 0.0604 | 1.29 | **LOSS** |
| 23 | RIVN | 02-06 15:20 | 02-06 17:05 | 14.28 | 14.56 | 980 | 13994.4 | +274.4 | +1.96% | 0.98R | 105m | market | timeout | breakout | breakout | neutral | 92.5 | ↑14.06 | 0.0477 | 1.16 | **WIN** |
| 24 | RIVN | 02-25 15:00 | 02-25 15:20 | 15.7 | 15.4 | 894 | 14035.8 | -268.2 | -1.91% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 73.3 | ↓15.56 | 0.0762 | 2.59 | **LOSS** |
| 25 | RIVN | 03-25 13:40 | 03-25 14:00 | 16.39 | 16.23 | 854 | 13997.06 | -136.64 | -0.98% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 77.2 | ↓16.37 | 0.2113 | 1.94 | **LOSS** |
| 26 | RIVN | 04-13 14:00 | 04-13 14:35 | 15.6 | 15.47 | 896 | 13977.6 | -116.48 | -0.83% | 0.71R | 35m | market | early-reversal | breakout | breakout | neutral | 69.09 | ↓15.41 | 0.0262 | 1.23 | **LOSS** |

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
- ⚠️ **Avg R = 0.63R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:25:33.937Z*
