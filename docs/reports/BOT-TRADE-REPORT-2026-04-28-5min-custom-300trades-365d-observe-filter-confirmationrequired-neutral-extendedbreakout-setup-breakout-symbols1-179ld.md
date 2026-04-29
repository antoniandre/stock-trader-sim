# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:44:18.075Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $72.32 (+0.07%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 41.67% (5W / 7L) |
| Net P&L | $+72.32 (+0.07%) |
| Gross profit | $329.86 |
| Gross loss | $257.54 |
| Profit factor | 1.28 |
| Avg win | $65.97 |
| Avg loss | $36.79 |
| Payoff ratio | 1.79:1 |
| Expectancy | $+6.03 / trade |
| Max drawdown | 0.08% |
| Sharpe ratio (ann.) | 1.53 |
| Trades / active day | 1 |
| Avg confidence | 91.33% |
| Avg trade duration | 55 min |
| Avg planned R:R | 2.81:1 |
| Avg risk ratio | 1.06R |
| Starting equity | $100,000 |
| Ending equity | $100,072.32 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+72.32 | PASS |
| Win rate | 45-60% | 41.67% | MISS |
| Profit factor | >= 1.3 | 1.28 | MISS |
| Sharpe (ann.) | > 1.5 | 1.53 | PASS |
| R:R | 2:1 - 3:1 | 2.81:1 planned | PASS |
| Max drawdown | < 10% | 0.08% | PASS |
| Expectancy | positive | $+6.03 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 20% | $-58.37 | $-11.67 |
| Mid  10:30–11:30 | 7 | 57.14% | $+130.69 | $18.67 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ASML | 12 | 5 | 41.67% | $+72.32 | $+6.03 | 1.28 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 12 | 5 | 41.67% | $+72.32 | $+6.03 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 5 | 41.67% | $+72.32 | $+6.03 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 12 | 5 | 41.67% | $+72.32 | $+6.03 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 12 | 5 | 41.67% | $+72.32 | $+6.03 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 5 | 1.65 | $+10.06 | 2 | 2.36 | $+40.2 | 0.06% | 2 | watch |
| Symbol | ASML | 7 | 0.99 | $-0.09 | 5 | 1.56 | $+14.6 | 0.07% | 1.3 | reject |
| Behavior | confirmationRequired | 7 | 0.99 | $-0.09 | 5 | 1.56 | $+14.6 | 0.07% | 1.3 | reject |
| Trade state | confirmation-required | 7 | 0.99 | $-0.09 | 5 | 1.56 | $+14.6 | 0.07% | 1.3 | reject |
| Regime | trend | 7 | 0.99 | $-0.09 | 5 | 1.56 | $+14.6 | 0.07% | 1.3 | reject |
| Setup | breakout | 7 | 0.99 | $-0.09 | 5 | 1.56 | $+14.6 | 0.07% | 1.3 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+59.24 | 1.22 |
| +3 bps/side | $+33.01 | 1.12 |
| +5 bps/side | $+6.81 | 1.02 |
| +10 bps/side | $-58.69 | 0.83 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| timeout | 4 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ASML | 09-22 13:40 | 09-22 14:15 | 958.91 | 954.46 | 7 | 6712.37 | -31.15 | -0.46% | 0.51R | 35m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.19 | ↓959.19 | 4.1997 | 1.66 | **LOSS** |
| 2 | ASML | 10-20 13:35 | 10-20 13:50 | 1041.25 | 1036.3 | 4 | 4165 | -19.8 | -0.48% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.08 | ↓1039.15 | 2.9202 | 1.67 | **LOSS** |
| 3 | ASML | 11-17 14:30 | 11-17 16:00 | 1017.27 | 1017.68 | 7 | 7120.89 | +2.87 | +0.04% | 0.06R | 90m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 69.98 | ↓1013.35 | 0.2463 | 2.9 | **WIN** |
| 4 | ASML | 11-19 14:55 | 11-19 15:20 | 1032.15 | 1028.53 | 4 | 4128.6 | -14.48 | -0.35% | 0.48R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.13 | ↑1022.52 | 4.1618 | 1.58 | **LOSS** |
| 5 | ASML | 01-09 14:50 | 01-09 16:35 | 1245.14 | 1260.61 | 3 | 3735.42 | +46.41 | +1.24% | 1.12R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 96.16 | ↑1236.7 | 12.3098 | 1.63 | **WIN** |
| 6 | ASML | 01-16 14:35 | 01-16 14:55 | 1369.03 | 1356.51 | 5 | 6845.15 | -62.6 | -0.91% | 0.98R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.2 | ↓1363.72 | 1.928 | 1.36 | **LOSS** |
| 7 | ASML | 01-27 14:35 | 01-27 16:20 | 1434.24 | 1460.27 | 3 | 4302.72 | +78.09 | +1.81% | 2.59R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 90.67 | ↑1429.34 | 1.8778 | 3.59 | **WIN** |
| 8 | ASML | 02-05 14:40 | 02-05 14:55 | 1363.13 | 1351.27 | 5 | 6815.65 | -59.3 | -0.87% | 0.84R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 66.64 | ↓1349.73 | 4.9221 | 2.54 | **LOSS** |
| 9 | ASML | 02-18 14:35 | 02-18 16:20 | 1438.81 | 1466.75 | 5 | 7194.05 | +139.7 | +1.94% | 2.77R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 71.43 | ↑1434.56 | 1.9464 | 1.25 | **WIN** |
| 10 | ASML | 03-10 13:35 | 03-10 15:20 | 1376.18 | 1397.11 | 3 | 4128.54 | +62.79 | +1.52% | 1.31R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 90.29 | ↑1374.24 | 11.3377 | 2.51 | **WIN** |
| 11 | ASML | 04-10 13:45 | 04-10 14:05 | 1494.66 | 1485.27 | 3 | 4483.98 | -28.17 | -0.63% | 0.66R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.83 | ↓1483.39 | 9.1835 | 1.99 | **LOSS** |
| 12 | ASML | 04-17 13:35 | 04-17 13:50 | 1459.72 | 1449.21 | 4 | 5838.88 | -42.04 | -0.72% | 0.72R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.95 | ↓1457.65 | 5.6105 | 1.16 | **LOSS** |

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

- ⚠️ **Profit factor 1.28 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ✅ **Avg R = 1.06R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:44:18.075Z*
