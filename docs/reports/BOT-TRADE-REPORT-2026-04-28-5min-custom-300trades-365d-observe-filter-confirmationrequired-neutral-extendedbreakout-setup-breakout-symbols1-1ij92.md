# Bot Trade Report — 14 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:07:49.125Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $146.05 (+0.15%) over 14 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 14 |
| Win rate | 28.57% (4W / 10L) |
| Net P&L | $+146.05 (+0.15%) |
| Gross profit | $405.27 |
| Gross loss | $259.22 |
| Profit factor | 1.56 |
| Avg win | $101.32 |
| Avg loss | $25.92 |
| Payoff ratio | 3.91:1 |
| Expectancy | $+10.43 / trade |
| Max drawdown | 0.16% |
| Sharpe ratio (ann.) | 2.41 |
| Trades / active day | 1 |
| Avg confidence | 93.21% |
| Avg trade duration | 36 min |
| Avg planned R:R | 2.63:1 |
| Avg risk ratio | 0.81R |
| Starting equity | $100,000 |
| Ending equity | $100,146.05 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+146.05 | PASS |
| Win rate | 45-60% | 28.57% | MISS |
| Profit factor | >= 1.3 | 1.56 | PASS |
| Sharpe (ann.) | > 1.5 | 2.41 | PASS |
| R:R | 2:1 - 3:1 | 2.63:1 planned | PASS |
| Max drawdown | < 10% | 0.16% | PASS |
| Expectancy | positive | $+10.43 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 20% | $-95.14 | $-19.03 |
| Mid  10:30–11:30 | 7 | 28.57% | $+186.46 | $26.64 |
| PM   13:00–14:00 | 2 | 50% | $+54.73 | $27.37 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 14 | 4 | 28.57% | $+146.05 | $+10.43 | 1.56 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 14 | 4 | 28.57% | $+146.05 | $+10.43 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 4 | 28.57% | $+146.05 | $+10.43 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 13 | 4 | 30.77% | $+151.81 | $+11.68 |
| neutral | 1 | 0 | 0% | $-5.76 | $-5.76 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 13 | 4 | 30.77% | $+151.81 | $+11.68 |
| neutral | 1 | 0 | 0% | $-5.76 | $-5.76 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SHOP | 8 | 0.56 | $-8.92 | 6 | 3.24 | $+36.24 | 0.07% | 2.56 | reject |
| Behavior | confirmationRequired | 7 | 0.58 | $-9.37 | 6 | 3.24 | $+36.24 | 0.07% | 2.56 | reject |
| Trade state | confirmation-required | 7 | 0.58 | $-9.37 | 6 | 3.24 | $+36.24 | 0.07% | 2.56 | reject |
| Regime | trend | 8 | 0.56 | $-8.92 | 6 | 3.24 | $+36.24 | 0.07% | 2.56 | reject |
| Setup | breakout | 8 | 0.56 | $-8.92 | 6 | 3.24 | $+36.24 | 0.07% | 2.56 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+128.38 | 1.47 |
| +3 bps/side | $+93.03 | 1.31 |
| +5 bps/side | $+57.7 | 1.18 |
| +10 bps/side | $-30.71 | 0.92 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| trailing-stop | 5 |
| early-reversal | 3 |
| stagnation | 2 |
| stop-loss | 2 |
| breakeven-stop | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SHOP | 05-16 13:35 | 05-16 13:50 | 112.21 | 111.42 | 65 | 7293.65 | -51.35 | -0.7% | 0.81R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 2 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 48 | 5076 | -22.08 | -0.43% | 0.36R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 3 | SHOP | 07-02 14:30 | 07-02 15:15 | 115.95 | 115.78 | 40 | 4638 | -6.8 | -0.15% | 0.14R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 4 | SHOP | 07-14 17:05 | 07-14 17:15 | 118.48 | 117.55 | 39 | 4620.72 | -36.27 | -0.78% | 1.11R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.6 | ↑115.06 | 0.7675 | 2.8 | **LOSS** |
| 5 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.32 | 150.46 | 31 | 4690.92 | -26.66 | -0.57% | 0.76R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 6 | SHOP | 09-05 13:30 | 09-05 14:10 | 146.9 | 146.62 | 48 | 7051.2 | -13.44 | -0.19% | 0.27R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.03 | ↓147.02 | 0.1783 | 1.64 | **LOSS** |
| 7 | SHOP | 09-29 17:00 | 09-29 17:10 | 143.95 | 145.77 | 50 | 7197.5 | +91 | +1.26% | 1.64R | 10m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 76.28 | ↑142.05 | 0.3214 | 6.59 | **WIN** |
| 8 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 72 | 10440 | -5.76 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 9 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.41 | 158.14 | 43 | 6639.63 | +160.39 | +2.42% | 2.1R | 90m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 10 | SHOP | 01-13 14:35 | 01-13 14:45 | 169.95 | 168.42 | 43 | 7307.85 | -65.79 | -0.9% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.49 | ↓169.75 | 0.8873 | 4.45 | **LOSS** |
| 11 | SHOP | 02-26 14:35 | 02-26 15:15 | 123.85 | 123.71 | 55 | 6811.75 | -7.7 | -0.11% | 0.1R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 72.07 | ↓122.96 | 0.1889 | 1.96 | **LOSS** |
| 12 | SHOP | 03-05 14:30 | 03-05 15:05 | 131.7 | 134.14 | 55 | 7243.5 | +134.2 | +1.85% | 1.76R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 67.25 | ↑130.72 | 0.1716 | 2.19 | **WIN** |
| 13 | SHOP | 03-30 13:35 | 03-30 13:50 | 113.19 | 112.62 | 41 | 4640.79 | -23.37 | -0.5% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 14 | SHOP | 03-31 13:35 | 03-31 14:50 | 113.29 | 113.77 | 41 | 4644.89 | +19.68 | +0.42% | 0.4R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 82.02 | ↓112.67 | 0.1903 | 1.11 | **WIN** |

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

- ✅ **Profit factor 1.56** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.81R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:07:49.125Z*
