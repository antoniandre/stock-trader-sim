# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:44:18.145Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $102.8 (-0.1%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 16.67% (2W / 10L) |
| Net P&L | $-102.8 (-0.1%) |
| Gross profit | $182.26 |
| Gross loss | $285.06 |
| Profit factor | 0.64 |
| Avg win | $91.13 |
| Avg loss | $28.51 |
| Payoff ratio | 3.2:1 |
| Expectancy | $-8.57 / trade |
| Max drawdown | 0.28% |
| Sharpe ratio (ann.) | -2.72 |
| Trades / active day | 1 |
| Avg confidence | 93.17% |
| Avg trade duration | 30 min |
| Avg planned R:R | 2.53:1 |
| Avg risk ratio | 0.63R |
| Starting equity | $100,000 |
| Ending equity | $99,897.2 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-102.8 | MISS |
| Win rate | 45-60% | 16.67% | MISS |
| Profit factor | >= 1.3 | 0.64 | MISS |
| Sharpe (ann.) | > 1.5 | -2.72 | MISS |
| R:R | 2:1 - 3:1 | 2.53:1 planned | PASS |
| Max drawdown | < 10% | 0.28% | PASS |
| Expectancy | positive | $-8.57 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 14.29% | $-74.86 | $-10.69 |
| Mid  10:30–11:30 | 4 | 0% | $-117.24 | $-29.31 |
| PM   13:00–14:00 | 1 | 100% | $+89.3 | $89.3 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRVL | 12 | 2 | 16.67% | $-102.8 | $-8.57 | 0.64 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 12 | 2 | 16.67% | $-102.8 | $-8.57 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 2 | 16.67% | $-102.8 | $-8.57 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 1 | 0 | 0% | $-28.82 | $-28.82 |
| confirmationRequired | 11 | 2 | 18.18% | $-73.98 | $-6.73 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 1 | 0 | 0% | $-28.82 | $-28.82 |
| confirmation-required | 11 | 2 | 18.18% | $-73.98 | $-6.73 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | MRVL | 7 | 1.51 | $+8.75 | 5 | 0 | $-32.81 | 0.16% | 0 | watch |
| Regime | trend | 7 | 1.51 | $+8.75 | 5 | 0 | $-32.81 | 0.16% | 0 | watch |
| Setup | breakout | 7 | 1.51 | $+8.75 | 5 | 0 | $-32.81 | 0.16% | 0 | watch |
| Behavior | confirmationRequired | 7 | 1.51 | $+8.75 | 4 | 0 | $-33.8 | 0.14% | 0 | watch |
| Trade state | confirmation-required | 7 | 1.51 | $+8.75 | 4 | 0 | $-33.8 | 0.14% | 0 | watch |
| Time slot | Open 9:30-10:30 | 6 | 0.77 | $-4.68 | 1 | 0 | $-46.8 | 0.05% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-118.22 | 0.6 |
| +3 bps/side | $-149.06 | 0.54 |
| +5 bps/side | $-179.89 | 0.48 |
| +10 bps/side | $-256.98 | 0.37 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| stagnation | 3 |
| trailing-stop | 2 |
| timeout | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.59 | 66.42 | 112 | 7346.08 | +92.96 | +1.27% | 1.13R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 2 | MRVL | 06-17 17:05 | 06-17 17:30 | 70.34 | 71.28 | 95 | 6682.3 | +89.3 | +1.34% | 1.51R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.71 | ↑70.03 | -0.1539 | 2.74 | **WIN** |
| 3 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.32 | 77.3 | 61 | 4716.52 | -1.22 | -0.03% | 0.04R | 10m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 86.82 | ↓77.02 | 0.2956 | 2.31 | **LOSS** |
| 4 | MRVL | 08-05 13:45 | 08-05 14:00 | 77.83 | 77.09 | 94 | 7316.02 | -69.56 | -0.95% | 0.98R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 5 | MRVL | 08-07 13:40 | 08-07 14:00 | 77 | 76.68 | 61 | 4697 | -19.52 | -0.42% | 0.44R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.56 | ↓76.76 | 0.4182 | 1.91 | **LOSS** |
| 6 | MRVL | 09-08 13:35 | 09-08 14:15 | 64.19 | 64.03 | 114 | 7317.66 | -18.24 | -0.25% | 0.26R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.09 | ↓63.84 | 0.2539 | 1.42 | **LOSS** |
| 7 | MRVL | 10-08 13:45 | 10-08 14:35 | 89.33 | 89.09 | 52 | 4645.16 | -12.48 | -0.27% | 0.25R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.79 | ↓88.74 | 0.4263 | 1.3 | **LOSS** |
| 8 | MRVL | 10-28 13:30 | 10-28 13:45 | 89.69 | 88.79 | 52 | 4663.88 | -46.8 | -1% | 1.35R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.81 | ↓89.49 | 0.1548 | 2.61 | **LOSS** |
| 9 | MRVL | 11-26 14:40 | 11-26 14:55 | 85.67 | 85.45 | 54 | 4626.18 | -11.88 | -0.26% | 0.23R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.74 | ↑84.94 | 0.6685 | 1.83 | **LOSS** |
| 10 | MRVL | 12-30 14:45 | 12-30 15:10 | 87.27 | 86.84 | 84 | 7330.68 | -36.12 | -0.49% | 0.59R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.65 | ↓86.44 | 0.3119 | 1.45 | **LOSS** |
| 11 | MRVL | 01-28 14:35 | 01-28 14:50 | 85.05 | 84.58 | 86 | 7314.3 | -40.42 | -0.55% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 12 | MRVL | 02-20 15:00 | 02-20 15:30 | 80.04 | 79.82 | 131 | 10485.24 | -28.82 | -0.27% | 0.2R | 30m | market | stagnation | trend | breakout | neutral | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |

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

- ⚠️ **Profit factor 0.64 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.63R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:44:18.145Z*
