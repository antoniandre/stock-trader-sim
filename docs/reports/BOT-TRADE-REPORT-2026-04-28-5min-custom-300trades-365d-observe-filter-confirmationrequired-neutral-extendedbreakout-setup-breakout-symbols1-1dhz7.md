# Bot Trade Report — 8 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:45:25.658Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $102.4 (-0.1%) over 8 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 8 |
| Win rate | 12.5% (1W / 7L) |
| Net P&L | $-102.4 (-0.1%) |
| Gross profit | $54.15 |
| Gross loss | $156.55 |
| Profit factor | 0.35 |
| Avg win | $54.15 |
| Avg loss | $22.36 |
| Payoff ratio | 2.42:1 |
| Expectancy | $-12.8 / trade |
| Max drawdown | 0.14% |
| Sharpe ratio (ann.) | -6.87 |
| Trades / active day | 1 |
| Avg confidence | 95% |
| Avg trade duration | 34 min |
| Avg planned R:R | 3.06:1 |
| Avg risk ratio | 0.68R |
| Starting equity | $100,000 |
| Ending equity | $99,897.6 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-102.4 | MISS |
| Win rate | 45-60% | 12.5% | MISS |
| Profit factor | >= 1.3 | 0.35 | MISS |
| Sharpe (ann.) | > 1.5 | -6.87 | MISS |
| R:R | 2:1 - 3:1 | 3.06:1 planned | MISS |
| Max drawdown | < 10% | 0.14% | PASS |
| Expectancy | positive | $-12.8 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 0% | $-148.25 | $-24.71 |
| Mid  10:30–11:30 | 2 | 50% | $+45.85 | $22.92 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| KLAC | 8 | 1 | 12.5% | $-102.4 | $-12.8 | 0.35 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 8 | 1 | 12.5% | $-102.4 | $-12.8 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 1 | 12.5% | $-102.4 | $-12.8 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 8 | 1 | 12.5% | $-102.4 | $-12.8 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 8 | 1 | 12.5% | $-102.4 | $-12.8 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-111.77 | 0.32 |
| +3 bps/side | $-130.49 | 0.28 |
| +5 bps/side | $-149.21 | 0.25 |
| +10 bps/side | $-196.04 | 0.19 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 3 |
| stagnation | 3 |
| stop-loss | 1 |
| timeout | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | KLAC | 08-11 13:45 | 08-11 14:05 | 932.16 | 923.34 | 5 | 4660.8 | -44.1 | -0.95% | 1.36R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 85.96 | ↓930.7 | 3.6648 | 1.37 | **LOSS** |
| 2 | KLAC | 08-13 13:40 | 08-13 14:00 | 948.01 | 944.98 | 7 | 6636.07 | -21.21 | -0.32% | 0.46R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.26 | ↓944.47 | 2.7277 | 2.09 | **LOSS** |
| 3 | KLAC | 09-05 13:35 | 09-05 14:10 | 886.67 | 884.38 | 8 | 7093.36 | -18.32 | -0.26% | 0.37R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 4 | KLAC | 09-11 13:45 | 09-11 14:00 | 958.69 | 950.12 | 4 | 3834.76 | -34.28 | -0.89% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.69 | ↓951.79 | 6.3552 | 1.93 | **LOSS** |
| 5 | KLAC | 10-27 13:50 | 10-27 14:20 | 1216.42 | 1214.83 | 6 | 7298.52 | -9.54 | -0.13% | 0.14R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.73 | ↓1211.37 | 6.0844 | 2.17 | **LOSS** |
| 6 | KLAC | 12-05 14:45 | 12-05 15:15 | 1234.53 | 1232.87 | 5 | 6172.65 | -8.3 | -0.13% | 0.15R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.46 | ↑1228 | 4.7797 | 1.44 | **LOSS** |
| 7 | KLAC | 01-06 14:35 | 01-06 16:20 | 1384.72 | 1402.77 | 3 | 4154.16 | +54.15 | +1.3% | 1.53R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.33 | ↑1376.66 | 3.5174 | 1.79 | **WIN** |
| 8 | KLAC | 04-10 13:45 | 04-10 14:00 | 1753.43 | 1748.23 | 4 | 7013.72 | -20.8 | -0.3% | 0.43R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.65 | ↓1748.65 | 5.208 | 1.61 | **LOSS** |

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

- ⚠️ **Profit factor 0.35 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.68R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:45:25.658Z*
