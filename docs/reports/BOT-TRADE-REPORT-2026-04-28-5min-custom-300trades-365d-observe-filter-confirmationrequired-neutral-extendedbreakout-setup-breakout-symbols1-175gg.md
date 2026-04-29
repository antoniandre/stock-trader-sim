# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:08:19.356Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $44.88 (-0.04%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 25% (3W / 9L) |
| Net P&L | $-44.88 (-0.04%) |
| Gross profit | $171.07 |
| Gross loss | $215.95 |
| Profit factor | 0.79 |
| Avg win | $57.02 |
| Avg loss | $23.99 |
| Payoff ratio | 2.38:1 |
| Expectancy | $-3.74 / trade |
| Max drawdown | 0.12% |
| Sharpe ratio (ann.) | -1.44 |
| Trades / active day | 1 |
| Avg confidence | 97.83% |
| Avg trade duration | 45 min |
| Avg planned R:R | 2.97:1 |
| Avg risk ratio | 0.64R |
| Starting equity | $100,000 |
| Ending equity | $99,955.12 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-44.88 | MISS |
| Win rate | 45-60% | 25% | MISS |
| Profit factor | >= 1.3 | 0.79 | MISS |
| Sharpe (ann.) | > 1.5 | -1.44 | MISS |
| R:R | 2:1 - 3:1 | 2.97:1 planned | PASS |
| Max drawdown | < 10% | 0.12% | PASS |
| Expectancy | positive | $-3.74 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 11.11% | $-165.13 | $-18.35 |
| Mid  10:30–11:30 | 3 | 66.67% | $+120.25 | $40.08 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMZN | 12 | 3 | 25% | $-44.88 | $-3.74 | 0.79 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 12 | 3 | 25% | $-44.88 | $-3.74 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 3 | 25% | $-44.88 | $-3.74 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 2 | 2 | 100% | $+153.91 | $+76.96 |
| confirmationRequired | 10 | 1 | 10% | $-198.79 | $-19.88 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extended-chase | 2 | 2 | 100% | $+153.91 | $+76.96 |
| confirmation-required | 10 | 1 | 10% | $-198.79 | $-19.88 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | AMZN | 7 | 0.77 | $-3.95 | 5 | 0.82 | $-3.45 | 0.1% | 0.59 | reject |
| Regime | trend | 7 | 0.77 | $-3.95 | 5 | 0.82 | $-3.45 | 0.1% | 0.59 | reject |
| Setup | breakout | 7 | 0.77 | $-3.95 | 5 | 0.82 | $-3.45 | 0.1% | 0.59 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.14 | $-17.25 | 3 | 0 | $-20.54 | 0.06% | 0 | reject |
| Behavior | confirmationRequired | 6 | 0.14 | $-17.25 | 4 | 0 | $-23.82 | 0.1% | 0 | reject |
| Trade state | confirmation-required | 6 | 0.14 | $-17.25 | 4 | 0 | $-23.82 | 0.1% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-60.66 | 0.73 |
| +3 bps/side | $-92.21 | 0.63 |
| +5 bps/side | $-123.76 | 0.55 |
| +10 bps/side | $-202.66 | 0.4 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 5 |
| early-reversal | 4 |
| timeout | 2 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMZN | 05-07 13:35 | 05-07 15:10 | 187.67 | 188.11 | 39 | 7319.13 | +17.16 | +0.23% | 0.33R | 95m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 2 | AMZN | 06-06 13:40 | 06-06 14:10 | 212.79 | 212.02 | 34 | 7234.86 | -26.18 | -0.36% | 0.31R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 68.63 | ↓211.6 | 0.1685 | 1.19 | **LOSS** |
| 3 | AMZN | 06-24 13:45 | 06-24 14:00 | 213.79 | 212.46 | 22 | 4703.38 | -29.26 | -0.62% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 4 | AMZN | 06-30 13:35 | 06-30 13:50 | 223.54 | 222.2 | 32 | 7153.28 | -42.88 | -0.6% | 0.53R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.68 | ↓222.76 | 1.0565 | 1.55 | **LOSS** |
| 5 | AMZN | 08-05 13:35 | 08-05 14:10 | 215.54 | 215.31 | 34 | 7328.36 | -7.82 | -0.11% | 0.14R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.14 | ↑214.64 | 0.2154 | 1.45 | **LOSS** |
| 6 | AMZN | 10-16 13:35 | 10-16 14:10 | 217.87 | 217.43 | 33 | 7189.71 | -14.52 | -0.2% | 0.29R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.07 | ↓217.2 | 0.579 | 2.4 | **LOSS** |
| 7 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.73 | 206.44 | 28 | 5704.44 | +75.88 | +1.33% | 1.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 8 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.78 | 215.67 | 27 | 5745.06 | +78.03 | +1.36% | 1.6R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 9 | AMZN | 03-05 14:35 | 03-05 14:50 | 219.89 | 218.87 | 33 | 7256.37 | -33.66 | -0.46% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.61 | ↓218.62 | 0.497 | 2.17 | **LOSS** |
| 10 | AMZN | 03-25 13:30 | 03-25 14:00 | 212.46 | 211.9 | 22 | 4674.12 | -12.32 | -0.26% | 0.36R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 11 | AMZN | 03-30 13:35 | 03-30 13:50 | 202.27 | 201.15 | 36 | 7281.72 | -40.32 | -0.55% | 0.71R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.85 | ↓201.76 | 0.1629 | 1.31 | **LOSS** |
| 12 | AMZN | 04-21 13:40 | 04-21 14:20 | 252.63 | 252.32 | 29 | 7326.27 | -8.99 | -0.12% | 0.13R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |

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

- ⚠️ **Profit factor 0.79 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.64R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:08:19.356Z*
