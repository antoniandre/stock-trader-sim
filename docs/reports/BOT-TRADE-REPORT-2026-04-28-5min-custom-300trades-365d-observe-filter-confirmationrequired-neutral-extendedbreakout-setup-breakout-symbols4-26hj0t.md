# Bot Trade Report — 37 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:09:01.915Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 4 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $76.23 (-0.08%) over 37 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 37 |
| Win rate | 29.73% (11W / 26L) |
| Net P&L | $-76.23 (-0.08%) |
| Gross profit | $585.09 |
| Gross loss | $661.32 |
| Profit factor | 0.88 |
| Avg win | $53.19 |
| Avg loss | $25.44 |
| Payoff ratio | 2.09:1 |
| Expectancy | $-2.06 / trade |
| Max drawdown | 0.35% |
| Sharpe ratio (ann.) | -0.73 |
| Trades / active day | 1.12 |
| Avg confidence | 91.49% |
| Avg trade duration | 45 min |
| Avg planned R:R | 2.78:1 |
| Avg risk ratio | 0.67R |
| Starting equity | $100,000 |
| Ending equity | $99,923.77 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-76.23 | MISS |
| Win rate | 45-60% | 29.73% | MISS |
| Profit factor | >= 1.3 | 0.88 | MISS |
| Sharpe (ann.) | > 1.5 | -0.73 | MISS |
| R:R | 2:1 - 3:1 | 2.78:1 planned | PASS |
| Max drawdown | < 10% | 0.35% | PASS |
| Expectancy | positive | $-2.06 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 26 | 30.77% | $+24.83 | $0.96 |
| Mid  10:30–11:30 | 11 | 27.27% | $-101.06 | $-9.19 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ON | 10 | 4 | 40% | $+124.98 | $+12.5 | 2.19 | eligible |
| LRCX | 12 | 5 | 41.67% | $+89.78 | $+7.48 | 1.43 | eligible |
| KLAC | 8 | 1 | 12.5% | $-102.4 | $-12.8 | 0.35 | throttle |
| QCOM | 7 | 1 | 14.29% | $-188.59 | $-26.94 | 0.02 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 37 | 11 | 29.73% | $-76.23 | $-2.06 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 37 | 11 | 29.73% | $-76.23 | $-2.06 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 37 | 11 | 29.73% | $-76.23 | $-2.06 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 37 | 11 | 29.73% | $-76.23 | $-2.06 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | LRCX | 6 | 1.52 | $+7.38 | 6 | 1.37 | $+7.58 | 0.09% | 1.1 | promote |
| Symbol | ON | 7 | 5.61 | $+26.98 | 3 | 0 | $-21.29 | 0.06% | 0 | watch |
| Symbol | KLAC | 5 | 0 | $-25.49 | 3 | 1.86 | $+8.35 | 0.02% | 1.18 | reject |
| Time slot | Open 9:30-10:30 | 21 | 1.12 | $+1.86 | 5 | 0.9 | $-2.86 | 0.13% | 0.72 | reject |
| Behavior | confirmationRequired | 22 | 1.11 | $+1.67 | 15 | 0.67 | $-7.52 | 0.23% | 0.5 | reject |
| Trade state | confirmation-required | 22 | 1.11 | $+1.67 | 15 | 0.67 | $-7.52 | 0.23% | 0.5 | reject |
| Regime | trend | 22 | 1.11 | $+1.67 | 15 | 0.67 | $-7.52 | 0.23% | 0.5 | reject |
| Setup | breakout | 22 | 1.11 | $+1.67 | 15 | 0.67 | $-7.52 | 0.23% | 0.5 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-117.76 | 0.83 |
| +3 bps/side | $-200.8 | 0.73 |
| +5 bps/side | $-283.83 | 0.65 |
| +10 bps/side | $-491.44 | 0.49 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 12 |
| timeout | 8 |
| stagnation | 7 |
| trailing-stop | 6 |
| stop-loss | 4 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ON | 06-10 14:00 | 06-10 15:45 | 53.5 | 53.98 | 137 | 7329.5 | +65.76 | +0.9% | 0.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 68.04 | ↑52.84 | 0.1061 | 1.13 | **WIN** |
| 2 | LRCX | 06-16 13:35 | 06-16 15:20 | 91.91 | 93.12 | 79 | 7260.89 | +95.59 | +1.32% | 1.21R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 76.5 | ↑91.63 | 0.1251 | 2.86 | **WIN** |
| 3 | LRCX | 06-23 14:00 | 06-23 14:30 | 92.45 | 92.4 | 51 | 4714.95 | -2.55 | -0.05% | 0.05R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 4 | QCOM | 06-24 13:45 | 06-24 14:00 | 155.83 | 154.92 | 30 | 4674.9 | -27.3 | -0.58% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 5 | ON | 07-08 13:35 | 07-08 14:05 | 55.8 | 55.66 | 131 | 7309.8 | -18.34 | -0.25% | 0.24R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.4 | ↓55.68 | 0.141 | 1.34 | **LOSS** |
| 6 | ON | 07-08 14:40 | 07-08 15:25 | 57.1 | 57.07 | 83 | 4739.3 | -2.49 | -0.05% | 0.04R | 45m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.32 | ↑56.1 | 0.6476 | 1.3 | **LOSS** |
| 7 | ON | 07-10 14:10 | 07-10 15:55 | 59.16 | 59.58 | 124 | 7335.84 | +52.08 | +0.71% | 0.65R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 81.19 | ↑58.35 | 0.2428 | 1.23 | **WIN** |
| 8 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.41 | 101.56 | 46 | 4710.86 | -39.1 | -0.83% | 1.19R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 9 | ON | 07-28 13:35 | 07-28 15:20 | 57.91 | 58.12 | 81 | 4690.71 | +17.01 | +0.36% | 0.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.16 | ↑57.74 | 0.2332 | 1.2 | **WIN** |
| 10 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.91 | 97.51 | 48 | 4699.68 | -19.2 | -0.41% | 0.51R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 11 | LRCX | 08-11 13:40 | 08-11 13:55 | 103.92 | 103.38 | 45 | 4676.4 | -24.3 | -0.52% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.19 | ↓103.53 | 0.3151 | 2.26 | **LOSS** |
| 12 | QCOM | 08-11 13:45 | 08-11 14:00 | 150.88 | 150.19 | 31 | 4677.28 | -21.39 | -0.46% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 13 | KLAC | 08-11 13:45 | 08-11 14:05 | 932.16 | 923.34 | 5 | 4660.8 | -44.1 | -0.95% | 1.36R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 85.96 | ↓930.7 | 3.6648 | 1.37 | **LOSS** |
| 14 | QCOM | 08-12 14:15 | 08-12 14:35 | 152.21 | 151.74 | 31 | 4718.51 | -14.57 | -0.31% | 0.41R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.67 | ↑150.77 | 0.7869 | 1.48 | **LOSS** |
| 15 | KLAC | 08-13 13:40 | 08-13 14:00 | 948.01 | 944.98 | 7 | 6636.07 | -21.21 | -0.32% | 0.46R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.26 | ↓944.47 | 2.7277 | 2.09 | **LOSS** |
| 16 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.41 | 100.13 | 47 | 4672.27 | +33.84 | +0.72% | 0.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 17 | KLAC | 09-05 13:35 | 09-05 14:10 | 886.67 | 884.38 | 8 | 7093.36 | -18.32 | -0.26% | 0.37R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 18 | ON | 09-05 13:45 | 09-05 14:15 | 49.06 | 48.85 | 96 | 4709.76 | -20.16 | -0.43% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.92 | ↓48.82 | 0.2536 | 1.21 | **LOSS** |
| 19 | KLAC | 09-11 13:45 | 09-11 14:00 | 958.69 | 950.12 | 4 | 3834.76 | -34.28 | -0.89% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.69 | ↓951.79 | 6.3552 | 1.93 | **LOSS** |
| 20 | QCOM | 09-16 13:30 | 09-16 14:05 | 163.09 | 162.89 | 29 | 4729.61 | -5.8 | -0.12% | 0.17R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.94 | ↓162.52 | 0.2241 | 2.43 | **LOSS** |
| 21 | ON | 10-08 14:20 | 10-08 16:05 | 49.76 | 50.76 | 95 | 4727.2 | +95 | +2.01% | 1.79R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.45 | ↑49.17 | 0.3481 | 1.41 | **WIN** |
| 22 | KLAC | 10-27 13:50 | 10-27 14:20 | 1216.42 | 1214.83 | 6 | 7298.52 | -9.54 | -0.13% | 0.14R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.73 | ↓1211.37 | 6.0844 | 2.17 | **LOSS** |
| 23 | QCOM | 11-11 14:35 | 11-11 15:50 | 173.6 | 173.67 | 42 | 7291.2 | +2.94 | +0.04% | 0.06R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.51 | ↓172.92 | 0.4108 | 1.33 | **WIN** |
| 24 | KLAC | 12-05 14:45 | 12-05 15:15 | 1234.53 | 1232.87 | 5 | 6172.65 | -8.3 | -0.13% | 0.15R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.46 | ↑1228 | 4.7797 | 1.44 | **LOSS** |
| 25 | LRCX | 12-15 14:30 | 12-15 15:25 | 163.76 | 163.6 | 41 | 6714.16 | -6.56 | -0.1% | 0.09R | 55m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 69.82 | ↓163.27 | -0.1389 | 2.51 | **LOSS** |
| 26 | QCOM | 12-18 14:30 | 12-18 14:45 | 176.25 | 175.37 | 41 | 7226.25 | -36.08 | -0.5% | 0.57R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.21 | ↓176.12 | 0.3365 | 2.66 | **LOSS** |
| 27 | KLAC | 01-06 14:35 | 01-06 16:20 | 1384.72 | 1402.77 | 3 | 4154.16 | +54.15 | +1.3% | 1.53R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.33 | ↑1376.66 | 3.5174 | 1.79 | **WIN** |
| 28 | ON | 01-27 14:40 | 01-27 15:00 | 62.84 | 62.58 | 74 | 4650.16 | -19.24 | -0.41% | 0.42R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.29 | ↓62.42 | 0.3466 | 1.83 | **LOSS** |
| 29 | LRCX | 01-28 14:40 | 01-28 14:55 | 241.24 | 237.39 | 19 | 4583.56 | -73.15 | -1.6% | 1.42R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 82.17 | ↓240.15 | 0.4073 | 1.72 | **LOSS** |
| 30 | LRCX | 02-20 14:35 | 02-20 15:05 | 240.25 | 242.03 | 19 | 4564.75 | +33.82 | +0.74% | 0.96R | 30m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 91.22 | ↑239.23 | 1.1614 | 1.84 | **WIN** |
| 31 | LRCX | 02-23 14:30 | 02-23 14:45 | 247.31 | 245.02 | 19 | 4698.89 | -43.51 | -0.93% | 1.33R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.35 | ↓247.41 | 0.5848 | 2.69 | **LOSS** |
| 32 | ON | 02-24 14:35 | 02-24 16:00 | 71.07 | 71.03 | 66 | 4690.62 | -2.64 | -0.06% | 0.07R | 85m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 94.15 | ↓70.6 | 0.3352 | 1.97 | **LOSS** |
| 33 | QCOM | 03-11 13:35 | 03-11 13:45 | 137.92 | 136.29 | 53 | 7309.76 | -86.39 | -1.18% | 1.46R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 74.78 | ↓137.17 | 0.0641 | 1.53 | **LOSS** |
| 34 | ON | 03-24 14:05 | 03-24 14:35 | 61.23 | 60.88 | 120 | 7347.6 | -42 | -0.57% | 0.5R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 71.18 | ↑60.41 | 0.0599 | 1.32 | **LOSS** |
| 35 | LRCX | 04-01 13:35 | 04-01 15:20 | 219.14 | 223.3 | 31 | 6793.34 | +128.96 | +1.9% | 1.58R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.92 | ↑218.06 | 1.4175 | 1.96 | **WIN** |
| 36 | LRCX | 04-09 13:35 | 04-09 14:15 | 251.65 | 251.98 | 18 | 4529.7 | +5.94 | +0.13% | 0.13R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 96.68 | ↓250.44 | 0.844 | 1.44 | **WIN** |
| 37 | KLAC | 04-10 13:45 | 04-10 14:00 | 1753.43 | 1748.23 | 4 | 7013.72 | -20.8 | -0.3% | 0.43R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.65 | ↓1748.65 | 5.208 | 1.61 | **LOSS** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio** | Balanced stop 1.2%, target 2.4% — true 2R trade |
| 2 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 3 | **Market session gate** | New entries blocked outside 13:30–18:00 UTC — no extended-hours or late entries |
| 4 | **RSI > 80 hard block (trend)** | RSI > 80 on a trend setup = chasing overbought momentum; blocked (breakout exempt) |
| 5 | **Breakout quality threshold** | `breakoutThresholdAdj` -5 → breakout entry bar is 50 (raised from 50 to filter weak breakouts) |
| 6 | **Break-even stop** | Once position reaches 1R, exit on any return to entry — prevents winner turning loser |
| 7 | **Trailing stop** | 1% for trend, 1.2% for breakout — exits when price retraces from high-watermark |
| 8 | **Stagnation exit** | 25 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −30% of stop after 12 min — pre-stop cut for entries that go wrong immediately |
| 11 | **Rolling symbol throttle** | Pause symbol for 20 days after 4 consecutive bad trades |
| 12 | **Fake-breakout MACD gate** | Blocks: MACD line < 0.04 + VolR ≥ 3.5 + RSI > 66 — near-zero MACD on high-volume "breakout" = false momentum burst |
| 13 | **Double-breakout gate** | Blocks breakout setup when regime is already "breakout" — chasing an extended move; trend regime + breakout setup is profitable, breakout regime + breakout setup is not |
| 14 | **ATR expansion gate (breakout)** | Per-bar ATR must exceed 20-bar baseline by 5%+ — no expansion = false breakout risk |
| 15 | **Trend entry quality** | Trend threshold 75 (boost +20); trend position 80% of standard |
| 16 | **VWAP + ORB + TF15 scoring** | VWAP position, opening-range breakout, and 15-min HTF trend each score entry quality |
| 17 | **MACD histogram** | Bullish histogram: +7 entry; bearish: −7. Both line and histogram confirm: ±3 bonus |
| 18 | **SPY breadth + vol-regime** | SPY trend penalises individual stock risk; volatile ATR regime suppresses trend entries |
| 19 | **Slippage model** | 0.05 bps/side on every fill — realistic market-order cost |
| 20 | **Daily loss limit** | 5% account equity — session blocked after limit reached |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0.88 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.67R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:09:01.915Z*
