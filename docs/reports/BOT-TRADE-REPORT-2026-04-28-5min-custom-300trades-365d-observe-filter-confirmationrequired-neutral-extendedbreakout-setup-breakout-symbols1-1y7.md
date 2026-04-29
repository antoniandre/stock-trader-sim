# Bot Trade Report — 10 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:11:50.427Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $124.98 (+0.12%) over 10 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 10 |
| Win rate | 40% (4W / 6L) |
| Net P&L | $+124.98 (+0.12%) |
| Gross profit | $229.85 |
| Gross loss | $104.87 |
| Profit factor | 2.19 |
| Avg win | $57.46 |
| Avg loss | $17.48 |
| Payoff ratio | 3.29:1 |
| Expectancy | $+12.5 / trade |
| Max drawdown | 0.06% |
| Sharpe ratio (ann.) | 4.7 |
| Trades / active day | 1.11 |
| Avg confidence | 92% |
| Avg trade duration | 66 min |
| Avg planned R:R | 2.39:1 |
| Avg risk ratio | 0.54R |
| Starting equity | $100,000 |
| Ending equity | $100,124.98 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+124.98 | PASS |
| Win rate | 45-60% | 40% | MISS |
| Profit factor | >= 1.3 | 2.19 | PASS |
| Sharpe (ann.) | > 1.5 | 4.7 | PASS |
| R:R | 2:1 - 3:1 | 2.39:1 planned | PASS |
| Max drawdown | < 10% | 0.06% | PASS |
| Expectancy | positive | $+12.5 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 57.14% | $+149.35 | $21.34 |
| Mid  10:30–11:30 | 3 | 0% | $-24.37 | $-8.12 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ON | 10 | 4 | 40% | $+124.98 | $+12.5 | 2.19 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 10 | 4 | 40% | $+124.98 | $+12.5 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 4 | 40% | $+124.98 | $+12.5 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 10 | 4 | 40% | $+124.98 | $+12.5 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 10 | 4 | 40% | $+124.98 | $+12.5 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ON | 6 | 3.29 | $+15.64 | 4 | 1.49 | $+7.78 | 0.06% | 1.12 | promote |
| Behavior | confirmationRequired | 6 | 3.29 | $+15.64 | 4 | 1.49 | $+7.78 | 0.06% | 1.12 | promote |
| Trade state | confirmation-required | 6 | 3.29 | $+15.64 | 4 | 1.49 | $+7.78 | 0.06% | 1.12 | promote |
| Regime | trend | 6 | 3.29 | $+15.64 | 4 | 1.49 | $+7.78 | 0.06% | 1.12 | promote |
| Setup | breakout | 6 | 3.29 | $+15.64 | 4 | 1.49 | $+7.78 | 0.06% | 1.12 | promote |
| Time slot | Open 9:30-10:30 | 5 | 3.5 | $+19.27 | 2 | 2.26 | $+26.5 | 0.04% | 1.83 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+113.46 | 2.02 |
| +3 bps/side | $+90.43 | 1.72 |
| +5 bps/side | $+67.39 | 1.49 |
| +10 bps/side | $+9.8 | 1.06 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| stagnation | 2 |
| trailing-stop | 2 |
| early-reversal | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ON | 06-10 14:00 | 06-10 15:45 | 53.5 | 53.98 | 137 | 7329.5 | +65.76 | +0.9% | 0.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 68.04 | ↑52.84 | 0.1061 | 1.13 | **WIN** |
| 2 | ON | 07-08 13:35 | 07-08 14:05 | 55.8 | 55.66 | 131 | 7309.8 | -18.34 | -0.25% | 0.24R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.4 | ↓55.68 | 0.141 | 1.34 | **LOSS** |
| 3 | ON | 07-08 14:40 | 07-08 15:25 | 57.1 | 57.07 | 83 | 4739.3 | -2.49 | -0.05% | 0.04R | 45m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.32 | ↑56.1 | 0.6476 | 1.3 | **LOSS** |
| 4 | ON | 07-10 14:10 | 07-10 15:55 | 59.16 | 59.58 | 124 | 7335.84 | +52.08 | +0.71% | 0.65R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 81.19 | ↑58.35 | 0.2428 | 1.23 | **WIN** |
| 5 | ON | 07-28 13:35 | 07-28 15:20 | 57.91 | 58.12 | 81 | 4690.71 | +17.01 | +0.36% | 0.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.16 | ↑57.74 | 0.2332 | 1.2 | **WIN** |
| 6 | ON | 09-05 13:45 | 09-05 14:15 | 49.06 | 48.85 | 96 | 4709.76 | -20.16 | -0.43% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.92 | ↓48.82 | 0.2536 | 1.21 | **LOSS** |
| 7 | ON | 10-08 14:20 | 10-08 16:05 | 49.76 | 50.76 | 95 | 4727.2 | +95 | +2.01% | 1.79R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.45 | ↑49.17 | 0.3481 | 1.41 | **WIN** |
| 8 | ON | 01-27 14:40 | 01-27 15:00 | 62.84 | 62.58 | 74 | 4650.16 | -19.24 | -0.41% | 0.42R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.29 | ↓62.42 | 0.3466 | 1.83 | **LOSS** |
| 9 | ON | 02-24 14:35 | 02-24 16:00 | 71.07 | 71.03 | 66 | 4690.62 | -2.64 | -0.06% | 0.07R | 85m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 94.15 | ↓70.6 | 0.3352 | 1.97 | **LOSS** |
| 10 | ON | 03-24 14:05 | 03-24 14:35 | 61.23 | 60.88 | 120 | 7347.6 | -42 | -0.57% | 0.5R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 71.18 | ↑60.41 | 0.0599 | 1.32 | **LOSS** |

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

- ✅ **Profit factor 2.19** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.54R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:11:50.427Z*
