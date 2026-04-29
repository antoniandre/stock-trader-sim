# Bot Trade Report — 22 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:08:38.551Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 2 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $498.04 (-0.5%) over 22 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 22 |
| Win rate | 9.09% (2W / 20L) |
| Net P&L | $-498.04 (-0.5%) |
| Gross profit | $103.59 |
| Gross loss | $601.63 |
| Profit factor | 0.17 |
| Avg win | $51.8 |
| Avg loss | $30.08 |
| Payoff ratio | 1.72:1 |
| Expectancy | $-22.64 / trade |
| Max drawdown | 0.5% |
| Sharpe ratio (ann.) | -11.4 |
| Trades / active day | 1 |
| Avg confidence | 93.5% |
| Avg trade duration | 32 min |
| Avg planned R:R | 3.1:1 |
| Avg risk ratio | 0.68R |
| Starting equity | $100,000 |
| Ending equity | $99,501.96 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-498.04 | MISS |
| Win rate | 45-60% | 9.09% | MISS |
| Profit factor | >= 1.3 | 0.17 | MISS |
| Sharpe (ann.) | > 1.5 | -11.4 | MISS |
| R:R | 2:1 - 3:1 | 3.1:1 planned | MISS |
| Max drawdown | < 10% | 0.5% | PASS |
| Expectancy | positive | $-22.64 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 9.09% | $-238.78 | $-21.71 |
| Mid  10:30–11:30 | 10 | 10% | $-242.86 | $-24.29 |
| PM   13:00–14:00 | 1 | 0% | $-16.4 | $-16.4 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NFLX | 12 | 1 | 8.33% | $-239.28 | $-19.94 | 0.15 | throttle |
| ADBE | 10 | 1 | 10% | $-258.76 | $-25.88 | 0.19 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 22 | 2 | 9.09% | $-498.04 | $-22.64 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 22 | 2 | 9.09% | $-498.04 | $-22.64 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 2 | 0 | 0% | $-59.08 | $-29.54 |
| confirmationRequired | 20 | 2 | 10% | $-438.96 | $-21.95 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 2 | 0 | 0% | $-59.08 | $-29.54 |
| confirmation-required | 20 | 2 | 10% | $-438.96 | $-21.95 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NFLX | 7 | 0.36 | $-10.9 | 5 | 0 | $-32.6 | 0.16% | 0 | reject |
| Time slot | Open 9:30-10:30 | 9 | 0.2 | $-18.72 | 2 | 0 | $-35.15 | 0.07% | 0 | reject |
| Behavior | confirmationRequired | 12 | 0.41 | $-12.36 | 8 | 0 | $-36.33 | 0.29% | 0 | reject |
| Trade state | confirmation-required | 12 | 0.41 | $-12.36 | 8 | 0 | $-36.33 | 0.29% | 0 | reject |
| Regime | trend | 13 | 0.39 | $-12.67 | 9 | 0 | $-37.03 | 0.33% | 0 | reject |
| Setup | breakout | 13 | 0.39 | $-12.67 | 9 | 0 | $-37.03 | 0.33% | 0 | reject |
| Symbol | ADBE | 6 | 0.41 | $-14.74 | 4 | 0 | $-42.57 | 0.17% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-524.84 | 0.16 |
| +3 bps/side | $-578.46 | 0.14 |
| +5 bps/side | $-632.07 | 0.13 |
| +10 bps/side | $-766.06 | 0.09 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| stagnation | 5 |
| stop-loss | 4 |
| timeout | 2 |
| breakeven-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NFLX | 05-16 13:45 | 05-16 14:00 | 1193.96 | 1188.76 | 6 | 7163.76 | -31.2 | -0.44% | 0.63R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 2 | NFLX | 08-08 14:20 | 08-08 14:35 | 1206.06 | 1201.02 | 3 | 3618.18 | -15.12 | -0.42% | 0.6R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 3 | ADBE | 08-19 13:45 | 08-19 13:50 | 362.66 | 359.7 | 13 | 4714.58 | -38.48 | -0.82% | 1.17R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 82.7 | ↓360.86 | 0.8616 | 1.66 | **LOSS** |
| 4 | ADBE | 08-22 14:00 | 08-22 14:40 | 360.94 | 360.71 | 13 | 4692.22 | -2.99 | -0.06% | 0.09R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 91.79 | ↑357.14 | 1.4333 | 2 | **LOSS** |
| 5 | NFLX | 08-25 13:35 | 08-25 15:20 | 1217.62 | 1224.68 | 6 | 7305.72 | +42.36 | +0.58% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79.12 | ↑1208.78 | 1.0376 | 1.21 | **WIN** |
| 6 | NFLX | 09-04 13:40 | 09-04 13:55 | 1245.28 | 1238.57 | 3 | 3735.84 | -20.13 | -0.54% | 0.77R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.16 | ↓1241.48 | 6.1692 | 2.12 | **LOSS** |
| 7 | ADBE | 09-05 13:45 | 09-05 14:10 | 353.66 | 349.72 | 13 | 4597.58 | -51.22 | -1.11% | 1.34R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.91 | ↓351.61 | 2.4674 | 1.27 | **LOSS** |
| 8 | ADBE | 09-15 13:30 | 09-15 13:50 | 353.78 | 351.75 | 20 | 7075.6 | -40.6 | -0.57% | 0.74R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 62.56 | ↓353.28 | 0.554 | 2.33 | **LOSS** |
| 9 | ADBE | 10-06 17:30 | 10-06 18:05 | 353.58 | 352.76 | 20 | 7071.6 | -16.4 | -0.23% | 0.33R | 35m | market | breakeven-stop | trend | breakout | neutral | neutral | 74.46 | ↑346.99 | 1.1142 | 3 | **LOSS** |
| 10 | NFLX | 10-09 13:45 | 10-09 14:00 | 1231.36 | 1227.66 | 3 | 3694.08 | -11.1 | -0.3% | 0.43R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.16 | ↑1224.14 | 2.8625 | 2.87 | **LOSS** |
| 11 | NFLX | 11-10 14:30 | 11-10 16:00 | 1119.11 | 1118 | 6 | 6714.66 | -6.66 | -0.1% | 0.14R | 90m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80.29 | ↓1113.99 | 3.63 | 1.25 | **LOSS** |
| 12 | NFLX | 11-18 14:55 | 11-18 15:25 | 112.32 | 111.79 | 65 | 7300.8 | -34.45 | -0.47% | 0.41R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 68.93 | ↑110.87 | 0.3727 | 2.45 | **LOSS** |
| 13 | ADBE | 12-05 14:50 | 12-05 16:35 | 341.15 | 345.86 | 13 | 4434.95 | +61.23 | +1.38% | 1.28R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 97.43 | ↑336.98 | 2.7329 | 1.87 | **WIN** |
| 14 | NFLX | 12-12 14:30 | 12-12 15:05 | 96.13 | 96.07 | 49 | 4710.37 | -2.94 | -0.06% | 0.07R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.21 | ↓95.89 | 0.217 | 2.44 | **LOSS** |
| 15 | NFLX | 01-13 14:35 | 01-13 14:40 | 91.03 | 90.17 | 80 | 7282.4 | -68.8 | -0.94% | 1.34R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 76.63 | ↓90.38 | 0.1609 | 2.33 | **LOSS** |
| 16 | ADBE | 01-23 14:30 | 01-23 14:50 | 303 | 302.15 | 24 | 7272 | -20.4 | -0.28% | 0.4R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.41 | ↓302.29 | 0.4992 | 1.19 | **LOSS** |
| 17 | NFLX | 02-02 14:35 | 02-02 15:05 | 84.74 | 84.52 | 86 | 7287.64 | -18.92 | -0.26% | 0.36R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 74.45 | ↓84.02 | 0.102 | 2.08 | **LOSS** |
| 18 | ADBE | 02-12 14:30 | 02-12 14:40 | 260.87 | 257.86 | 28 | 7304.36 | -84.28 | -1.15% | 1.6R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 66.71 | ↓260.15 | 0.0759 | 2.02 | **LOSS** |
| 19 | NFLX | 03-04 14:30 | 03-04 14:45 | 98.9 | 98.46 | 97 | 9593.3 | -42.68 | -0.44% | 0.48R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 20 | ADBE | 03-05 14:35 | 03-05 15:25 | 282.02 | 280.98 | 24 | 6768.48 | -24.96 | -0.37% | 0.35R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.26 | ↓280.23 | 0.5546 | 2.2 | **LOSS** |
| 21 | NFLX | 03-26 13:55 | 03-26 14:10 | 93.56 | 93.18 | 78 | 7297.68 | -29.64 | -0.41% | 0.4R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 67.77 | ↑92.38 | 0.1521 | 1.17 | **LOSS** |
| 22 | ADBE | 04-14 13:35 | 04-14 13:45 | 243.53 | 241.39 | 19 | 4627.07 | -40.66 | -0.88% | 1.26R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 85.94 | ↓242.6 | 0.7352 | 1.24 | **LOSS** |

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

- ⚠️ **Profit factor 0.17 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.68R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:08:38.551Z*
