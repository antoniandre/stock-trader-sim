# Bot Trade Report — 35 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:08:22.013Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 3 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $434.77 (-0.43%) over 35 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 35 |
| Win rate | 25.71% (9W / 26L) |
| Net P&L | $-434.77 (-0.43%) |
| Gross profit | $404.68 |
| Gross loss | $839.45 |
| Profit factor | 0.48 |
| Avg win | $44.96 |
| Avg loss | $32.29 |
| Payoff ratio | 1.39:1 |
| Expectancy | $-12.42 / trade |
| Max drawdown | 0.5% |
| Sharpe ratio (ann.) | -5.29 |
| Trades / active day | 1.09 |
| Avg confidence | 94% |
| Avg trade duration | 47 min |
| Avg planned R:R | 3.03:1 |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $99,565.23 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-434.77 | MISS |
| Win rate | 45-60% | 25.71% | MISS |
| Profit factor | >= 1.3 | 0.48 | MISS |
| Sharpe (ann.) | > 1.5 | -5.29 | MISS |
| R:R | 2:1 - 3:1 | 3.03:1 planned | MISS |
| Max drawdown | < 10% | 0.5% | PASS |
| Expectancy | positive | $-12.42 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 23 | 34.78% | $-237.05 | $-10.31 |
| Mid  10:30–11:30 | 12 | 8.33% | $-197.72 | $-16.48 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| META | 12 | 3 | 25% | $-71.61 | $-5.97 | 0.72 | throttle |
| MSFT | 6 | 2 | 33.33% | $-99.34 | $-16.56 | 0.41 | throttle |
| GOOGL | 17 | 4 | 23.53% | $-263.82 | $-15.52 | 0.37 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 35 | 9 | 25.71% | $-434.77 | $-12.42 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 35 | 9 | 25.71% | $-434.77 | $-12.42 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 2 | 1 | 50% | $+85.26 | $+42.63 |
| extendedBreakout | 1 | 0 | 0% | $-23.76 | $-23.76 |
| confirmationRequired | 32 | 8 | 25% | $-496.27 | $-15.51 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 2 | 1 | 50% | $+85.26 | $+42.63 |
| extended-chase | 1 | 0 | 0% | $-23.76 | $-23.76 |
| confirmation-required | 32 | 8 | 25% | $-496.27 | $-15.51 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | META | 9 | 1.46 | $+6.37 | 3 | 0 | $-42.99 | 0.13% | 0 | watch |
| Symbol | GOOGL | 11 | 0.16 | $-24.88 | 6 | 1.11 | $+1.64 | 0.09% | 0.78 | reject |
| Time slot | Open 9:30-10:30 | 19 | 0.53 | $-11.08 | 4 | 0.79 | $-6.62 | 0.13% | 0.63 | reject |
| Behavior | confirmationRequired | 19 | 0.33 | $-15.66 | 13 | 0.45 | $-15.29 | 0.2% | 0.35 | reject |
| Trade state | confirmation-required | 19 | 0.33 | $-15.66 | 13 | 0.45 | $-15.29 | 0.2% | 0.35 | reject |
| Regime | trend | 21 | 0.53 | $-10.11 | 14 | 0.43 | $-15.89 | 0.22% | 0.33 | reject |
| Setup | breakout | 21 | 0.53 | $-10.11 | 14 | 0.43 | $-15.89 | 0.22% | 0.33 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-477.99 | 0.45 |
| +3 bps/side | $-564.47 | 0.4 |
| +5 bps/side | $-650.91 | 0.35 |
| +10 bps/side | $-867.06 | 0.26 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 9 |
| stop-loss | 4 |
| stagnation | 3 |
| breakeven-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | META | 05-13 13:35 | 05-13 15:20 | 649.67 | 658.27 | 7 | 4547.69 | +60.2 | +1.32% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 2 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.35 | 159.89 | 45 | 7260.75 | -65.7 | -0.9% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 3 | GOOGL | 05-21 14:00 | 05-21 14:20 | 169.82 | 169 | 27 | 4585.14 | -22.14 | -0.48% | 0.42R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 94.29 | ↑167.05 | 0.9481 | 2.24 | **LOSS** |
| 4 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 14 | 9461.62 | +90.86 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 5 | GOOGL | 06-05 13:40 | 06-05 13:55 | 170.37 | 169.61 | 43 | 7325.91 | -32.68 | -0.45% | 0.54R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 6 | META | 06-24 13:45 | 06-24 14:00 | 712.03 | 705.9 | 6 | 4272.18 | -36.78 | -0.86% | 1.09R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 7 | GOOGL | 06-25 13:35 | 06-25 13:50 | 170.6 | 169.67 | 43 | 7335.8 | -39.99 | -0.55% | 0.71R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.83 | ↑169.46 | 0.3387 | 2.41 | **LOSS** |
| 8 | META | 07-09 13:35 | 07-09 15:20 | 729.76 | 734.89 | 6 | 4378.56 | +30.78 | +0.7% | 1R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 86.51 | ↑727.39 | 1.0668 | 4.23 | **WIN** |
| 9 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.85 | 533.35 | 8 | 4262.8 | +4 | +0.09% | 0.13R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 10 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.42 | 192.81 | 24 | 4618.08 | +9.36 | +0.2% | 0.29R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 11 | META | 08-04 13:35 | 08-04 14:00 | 764.16 | 761.57 | 6 | 4584.96 | -15.54 | -0.34% | 0.46R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.76 | ↓762.46 | 2.1693 | 3.3 | **LOSS** |
| 12 | META | 08-22 14:05 | 08-22 14:20 | 751.23 | 747.58 | 9 | 6761.07 | -32.85 | -0.49% | 0.6R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 13 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.83 | 211.14 | 34 | 7134.22 | +44.54 | +0.62% | 0.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 14 | GOOGL | 09-05 13:40 | 09-05 14:10 | 235 | 234.07 | 20 | 4700 | -18.6 | -0.4% | 0.57R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 15 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.7 | 247.21 | 18 | 4512.6 | -62.82 | -1.39% | 1.54R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 16 | META | 09-18 13:40 | 09-18 13:55 | 786 | 782.28 | 9 | 7074 | -33.48 | -0.47% | 0.48R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 17 | GOOGL | 09-26 13:30 | 09-26 13:45 | 248.85 | 247.6 | 29 | 7216.65 | -36.25 | -0.5% | 0.71R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 18 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 14 | 10065.58 | -5.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 19 | GOOGL | 10-16 13:40 | 10-16 13:55 | 256.12 | 254.41 | 28 | 7171.36 | -47.88 | -0.67% | 0.92R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.59 | ↓254.77 | 1.2913 | 2.99 | **LOSS** |
| 20 | GOOGL | 11-05 14:50 | 11-05 16:10 | 282.53 | 282.47 | 25 | 7063.25 | -1.5 | -0.02% | 0.02R | 80m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 75.59 | ↑279.55 | 0.6978 | 1.13 | **LOSS** |
| 21 | META | 11-10 14:35 | 11-10 15:50 | 628.71 | 628.69 | 11 | 6915.81 | -0.22 | 0% | 0R | 75m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 66.34 | ↓627.13 | 3.2793 | 2.32 | **LOSS** |
| 22 | GOOGL | 11-28 14:30 | 11-28 14:40 | 326.32 | 322.76 | 14 | 4568.48 | -49.84 | -1.09% | 1.56R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 92.91 | ↓325.19 | 1.0737 | 6.62 | **LOSS** |
| 23 | GOOGL | 12-23 14:40 | 12-23 15:00 | 313.05 | 311.69 | 23 | 7200.15 | -31.28 | -0.43% | 0.61R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 24 | GOOGL | 01-13 14:30 | 01-13 15:20 | 336.45 | 336.25 | 14 | 4710.3 | -2.8 | -0.06% | 0.09R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.34 | ↓336.02 | 1.0741 | 6.16 | **LOSS** |
| 25 | META | 01-22 14:30 | 01-22 14:45 | 634.28 | 631.31 | 8 | 5074.24 | -23.76 | -0.47% | 0.45R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 26 | MSFT | 01-23 15:05 | 01-23 16:50 | 461.98 | 468.51 | 10 | 4619.8 | +65.3 | +1.41% | 1.68R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 86.51 | ↑454.89 | 2.1043 | 1.11 | **WIN** |
| 27 | MSFT | 01-27 14:40 | 01-27 15:10 | 477.79 | 476.79 | 15 | 7166.85 | -15 | -0.21% | 0.3R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 67.32 | ↓476.53 | 0.8073 | 2.94 | **LOSS** |
| 28 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 21 | 7171.71 | -5.88 | -0.08% | 0.08R | 60m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 29 | MSFT | 02-09 14:35 | 02-09 14:50 | 408.71 | 406.11 | 11 | 4495.81 | -28.6 | -0.64% | 0.73R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.25 | ↑404.71 | 1.7001 | 1.61 | **LOSS** |
| 30 | MSFT | 02-24 14:40 | 02-24 14:55 | 389.06 | 384.9 | 18 | 7003.08 | -74.88 | -1.07% | 1.53R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.12 | ↓385.21 | -0.0585 | 1.57 | **LOSS** |
| 31 | META | 02-26 14:40 | 02-26 14:55 | 660.96 | 658.3 | 11 | 7270.56 | -29.26 | -0.4% | 0.49R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.73 | ↑655.58 | 1.4234 | 2.3 | **LOSS** |
| 32 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.99 | 281.38 | 26 | 7253.74 | +62.14 | +0.86% | 0.92R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 33 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.29 | 296.79 | 15 | 4414.35 | +37.5 | +0.85% | 1.04R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 34 | META | 04-01 13:30 | 04-01 13:45 | 582.75 | 576.42 | 12 | 6993 | -75.96 | -1.09% | 1.25R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 35 | MSFT | 04-13 14:00 | 04-13 14:15 | 377.64 | 375 | 19 | 7175.16 | -50.16 | -0.7% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.64 | ↑373.2 | 0.9255 | 2.22 | **LOSS** |

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

- ⚠️ **Profit factor 0.48 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:08:22.013Z*
