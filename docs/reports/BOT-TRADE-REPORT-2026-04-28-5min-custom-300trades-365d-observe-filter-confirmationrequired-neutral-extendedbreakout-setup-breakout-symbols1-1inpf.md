# Bot Trade Report — 17 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:08:02.291Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $255.08 (-0.26%) over 17 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 17 |
| Win rate | 29.41% (5W / 12L) |
| Net P&L | $-255.08 (-0.26%) |
| Gross profit | $246.95 |
| Gross loss | $502.03 |
| Profit factor | 0.49 |
| Avg win | $49.39 |
| Avg loss | $41.84 |
| Payoff ratio | 1.18:1 |
| Expectancy | $-15 / trade |
| Max drawdown | 0.29% |
| Sharpe ratio (ann.) | -4.05 |
| Trades / active day | 1 |
| Avg confidence | 91.65% |
| Avg trade duration | 44 min |
| Avg planned R:R | 2.75:1 |
| Avg risk ratio | 0.86R |
| Starting equity | $100,000 |
| Ending equity | $99,744.92 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-255.08 | MISS |
| Win rate | 45-60% | 29.41% | MISS |
| Profit factor | >= 1.3 | 0.49 | MISS |
| Sharpe (ann.) | > 1.5 | -4.05 | MISS |
| R:R | 2:1 - 3:1 | 2.75:1 planned | PASS |
| Max drawdown | < 10% | 0.29% | PASS |
| Expectancy | positive | $-15 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 23.08% | $-80.66 | $-6.2 |
| Mid  10:30–11:30 | 4 | 50% | $-174.42 | $-43.6 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SNOW | 17 | 5 | 29.41% | $-255.08 | $-15 | 0.49 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 17 | 5 | 29.41% | $-255.08 | $-15 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 17 | 5 | 29.41% | $-255.08 | $-15 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 1 | 0 | 0% | $-34.58 | $-34.58 |
| confirmationRequired | 16 | 5 | 31.25% | $-220.5 | $-13.78 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extended-chase | 1 | 0 | 0% | $-34.58 | $-34.58 |
| confirmation-required | 16 | 5 | 31.25% | $-220.5 | $-13.78 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 10 | 0.33 | $-15.52 | 3 | 3.55 | $+24.86 | 0.03% | 2.24 | reject |
| Symbol | SNOW | 10 | 0.33 | $-15.52 | 7 | 0.63 | $-14.26 | 0.24% | 0.5 | reject |
| Behavior | confirmationRequired | 9 | 0.38 | $-13.41 | 7 | 0.63 | $-14.26 | 0.24% | 0.5 | reject |
| Trade state | confirmation-required | 9 | 0.38 | $-13.41 | 7 | 0.63 | $-14.26 | 0.24% | 0.5 | reject |
| Regime | trend | 10 | 0.33 | $-15.52 | 7 | 0.63 | $-14.26 | 0.24% | 0.5 | reject |
| Setup | breakout | 10 | 0.33 | $-15.52 | 7 | 0.63 | $-14.26 | 0.24% | 0.5 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-275.29 | 0.47 |
| +3 bps/side | $-315.69 | 0.42 |
| +5 bps/side | $-356.09 | 0.38 |
| +10 bps/side | $-457.09 | 0.29 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| stagnation | 4 |
| trailing-stop | 4 |
| stop-loss | 2 |
| timeout | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SNOW | 05-27 13:45 | 05-27 14:15 | 205.96 | 205.44 | 35 | 7208.6 | -18.2 | -0.25% | 0.23R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.97 | ↑204.39 | 0.6946 | 1.93 | **LOSS** |
| 2 | SNOW | 06-02 13:35 | 06-02 13:50 | 210.01 | 206.93 | 22 | 4620.22 | -67.76 | -1.47% | 1.81R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 92.36 | ↓208.68 | 1.298 | 1.72 | **LOSS** |
| 3 | SNOW | 06-04 13:35 | 06-04 13:55 | 212.67 | 210.93 | 22 | 4678.74 | -38.28 | -0.82% | 1R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.1 | ↓212.45 | 0.5645 | 2.03 | **LOSS** |
| 4 | SNOW | 06-12 13:50 | 06-12 14:05 | 211.63 | 211.03 | 22 | 4655.86 | -13.2 | -0.28% | 0.4R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.71 | ↑210.84 | 0.5133 | 3.96 | **LOSS** |
| 5 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.2 | 222.04 | 21 | 4624.2 | +38.64 | +0.84% | 1.2R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 6 | SNOW | 07-31 13:45 | 07-31 15:25 | 224.43 | 226.18 | 21 | 4713.03 | +36.75 | +0.78% | 0.72R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 86.39 | ↓223.01 | 0.3172 | 1.1 | **WIN** |
| 7 | SNOW | 08-22 14:05 | 08-22 14:20 | 199.29 | 197.96 | 26 | 5181.54 | -34.58 | -0.67% | 0.86R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 8 | SNOW | 09-08 13:35 | 09-08 14:30 | 228.52 | 228.38 | 20 | 4570.4 | -2.8 | -0.06% | 0.09R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 82.91 | ↓227.54 | 0.5413 | 1.34 | **LOSS** |
| 9 | SNOW | 09-10 13:40 | 09-10 14:10 | 231.14 | 228.99 | 20 | 4622.8 | -43 | -0.93% | 0.94R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.75 | ↓229.59 | 1.1173 | 1.39 | **LOSS** |
| 10 | SNOW | 10-01 13:40 | 10-01 14:15 | 228.57 | 228.17 | 32 | 7314.24 | -12.8 | -0.18% | 0.21R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.88 | ↑227.33 | 0.6648 | 1.58 | **LOSS** |
| 11 | SNOW | 10-23 13:35 | 10-23 15:25 | 246.29 | 249.87 | 29 | 7142.41 | +103.82 | +1.45% | 1.77R | 110m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.12 | ↑245.55 | 1.2385 | 1.44 | **WIN** |
| 12 | SNOW | 11-06 14:35 | 11-06 14:50 | 274.1 | 270.57 | 24 | 6578.4 | -84.72 | -1.29% | 1.08R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.15 | ↓272.22 | 0.7218 | 2.19 | **LOSS** |
| 13 | SNOW | 01-06 14:35 | 01-06 14:50 | 228.89 | 223.97 | 32 | 7324.48 | -157.44 | -2.15% | 2.76R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 80.82 | ↓228 | 0.5362 | 1.36 | **LOSS** |
| 14 | SNOW | 01-28 14:40 | 01-28 15:30 | 219.09 | 219.43 | 31 | 6791.79 | +10.54 | +0.16% | 0.14R | 50m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.59 | ↓218.65 | 1.3781 | 1.32 | **WIN** |
| 15 | SNOW | 02-20 14:30 | 02-20 15:10 | 180.23 | 181.66 | 40 | 7209.2 | +57.2 | +0.79% | 0.96R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 75.64 | ↓179.63 | 0.3307 | 1.34 | **WIN** |
| 16 | SNOW | 04-20 13:35 | 04-20 14:15 | 148.47 | 148.29 | 45 | 6681.15 | -8.1 | -0.12% | 0.11R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.18 | ↑147.74 | 0.3906 | 1.61 | **LOSS** |
| 17 | SNOW | 04-21 13:40 | 04-21 14:45 | 153.5 | 153.05 | 47 | 7214.5 | -21.15 | -0.29% | 0.32R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.23 | ↓152.71 | 0.3355 | 1.25 | **LOSS** |

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

- ⚠️ **Profit factor 0.49 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.86R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:08:02.291Z*
