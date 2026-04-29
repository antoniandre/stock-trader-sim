# Bot Trade Report — 16 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:45:25.796Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $346.28 (-0.35%) over 16 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 16 |
| Win rate | 12.5% (2W / 14L) |
| Net P&L | $-346.28 (-0.35%) |
| Gross profit | $152.64 |
| Gross loss | $498.92 |
| Profit factor | 0.31 |
| Avg win | $76.32 |
| Avg loss | $35.64 |
| Payoff ratio | 2.14:1 |
| Expectancy | $-21.64 / trade |
| Max drawdown | 0.39% |
| Sharpe ratio (ann.) | -7.45 |
| Trades / active day | 1 |
| Avg confidence | 95.19% |
| Avg trade duration | 34 min |
| Avg planned R:R | 3.18:1 |
| Avg risk ratio | 0.83R |
| Starting equity | $100,000 |
| Ending equity | $99,653.72 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-346.28 | MISS |
| Win rate | 45-60% | 12.5% | MISS |
| Profit factor | >= 1.3 | 0.31 | MISS |
| Sharpe (ann.) | > 1.5 | -7.45 | MISS |
| R:R | 2:1 - 3:1 | 3.18:1 planned | MISS |
| Max drawdown | < 10% | 0.39% | PASS |
| Expectancy | positive | $-21.64 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 9.09% | $-306.43 | $-27.86 |
| Mid  10:30–11:30 | 4 | 25% | $-36.05 | $-9.01 |
| Noon 11:30–13:00 | 1 | 0% | $-3.8 | $-3.8 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRWD | 16 | 2 | 12.5% | $-346.28 | $-21.64 | 0.31 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 16 | 2 | 12.5% | $-346.28 | $-21.64 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 16 | 2 | 12.5% | $-346.28 | $-21.64 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 16 | 2 | 12.5% | $-346.28 | $-21.64 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 16 | 2 | 12.5% | $-346.28 | $-21.64 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | CRWD | 9 | 0.31 | $-23 | 7 | 0.31 | $-19.9 | 0.14% | 0.23 | reject |
| Behavior | confirmationRequired | 9 | 0.31 | $-23 | 7 | 0.31 | $-19.9 | 0.14% | 0.23 | reject |
| Trade state | confirmation-required | 9 | 0.31 | $-23 | 7 | 0.31 | $-19.9 | 0.14% | 0.23 | reject |
| Regime | trend | 9 | 0.31 | $-23 | 7 | 0.31 | $-19.9 | 0.14% | 0.23 | reject |
| Setup | breakout | 9 | 0.31 | $-23 | 7 | 0.31 | $-19.9 | 0.14% | 0.23 | reject |
| Time slot | Open 9:30-10:30 | 8 | 0.31 | $-25.39 | 3 | 0 | $-34.42 | 0.1% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-366.2 | 0.29 |
| +3 bps/side | $-406.1 | 0.26 |
| +5 bps/side | $-445.97 | 0.24 |
| +10 bps/side | $-545.7 | 0.19 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| stagnation | 5 |
| stop-loss | 2 |
| timeout | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CRWD | 05-01 13:30 | 05-01 13:55 | 432.03 | 428.98 | 17 | 7344.51 | -51.85 | -0.71% | 1.01R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 2 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.22 | 440.93 | 16 | 6963.52 | +91.36 | +1.31% | 1.87R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 3 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.5 | 437.12 | 10 | 4375 | -3.8 | -0.09% | 0.13R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 4 | CRWD | 05-21 16:05 | 05-21 17:10 | 447.68 | 447.3 | 10 | 4476.8 | -3.8 | -0.08% | 0.11R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 90.09 | ↑438.66 | 1.4315 | 2.85 | **LOSS** |
| 5 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.61 | 466.7 | 15 | 7089.15 | -88.65 | -1.25% | 1.79R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 6 | CRWD | 06-25 13:35 | 06-25 14:20 | 495.11 | 494.03 | 14 | 6931.54 | -15.12 | -0.22% | 0.31R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.8 | ↓494.13 | 1.7125 | 2.89 | **LOSS** |
| 7 | CRWD | 07-21 13:45 | 07-21 14:20 | 484.3 | 482.8 | 15 | 7264.5 | -22.5 | -0.31% | 0.39R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 8 | CRWD | 08-11 13:35 | 08-11 13:45 | 429.75 | 425.15 | 17 | 7305.75 | -78.2 | -1.07% | 1.53R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 78.91 | ↓427.46 | 0.7366 | 1.46 | **LOSS** |
| 9 | CRWD | 09-10 13:35 | 09-10 13:50 | 432.93 | 430.78 | 16 | 6926.88 | -34.4 | -0.5% | 0.7R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78 | ↓431.46 | 1.2313 | 2.23 | **LOSS** |
| 10 | CRWD | 10-10 13:30 | 10-10 14:00 | 514.4 | 512.97 | 9 | 4629.6 | -12.87 | -0.28% | 0.4R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.5 | ↓513.46 | 0.1029 | 2.54 | **LOSS** |
| 11 | CRWD | 12-02 14:35 | 12-02 15:15 | 515.15 | 514.81 | 14 | 7212.1 | -4.76 | -0.07% | 0.09R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.95 | ↓512.99 | 1.1955 | 1.3 | **LOSS** |
| 12 | CRWD | 01-13 14:40 | 01-13 15:05 | 474.16 | 469.73 | 9 | 4267.44 | -39.87 | -0.93% | 1.33R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.31 | ↓470.18 | 1.339 | 1.29 | **LOSS** |
| 13 | CRWD | 02-13 14:30 | 02-13 15:05 | 418.68 | 422.51 | 16 | 6698.88 | +61.28 | +0.91% | 1.02R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 67.08 | ↑417.18 | 1.4772 | 1.29 | **WIN** |
| 14 | CRWD | 02-20 15:00 | 02-20 15:15 | 431.77 | 426.5 | 10 | 4317.7 | -52.7 | -1.22% | 1.1R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.57 | ↑425.22 | 1.9612 | 1.71 | **LOSS** |
| 15 | CRWD | 03-12 13:35 | 03-12 13:50 | 447.18 | 444.11 | 16 | 7154.88 | -49.12 | -0.69% | 0.99R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.96 | ↓445.53 | 1.4145 | 1.14 | **LOSS** |
| 16 | CRWD | 04-20 13:50 | 04-20 14:05 | 432.38 | 429.8 | 16 | 6918.08 | -41.28 | -0.6% | 0.57R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.06 | ↑427.57 | 1.2688 | 1.4 | **LOSS** |

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

- ⚠️ **Profit factor 0.31 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.83R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:45:25.796Z*
