# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:10:25.333Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $264.3 (-0.26%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 7.69% (1W / 12L) |
| Net P&L | $-264.3 (-0.26%) |
| Gross profit | $75.48 |
| Gross loss | $339.78 |
| Profit factor | 0.22 |
| Avg win | $75.48 |
| Avg loss | $28.32 |
| Payoff ratio | 2.67:1 |
| Expectancy | $-20.33 / trade |
| Max drawdown | 0.26% |
| Sharpe ratio (ann.) | -8.47 |
| Trades / active day | 1 |
| Avg confidence | 96% |
| Avg trade duration | 38 min |
| Avg planned R:R | 2.67:1 |
| Avg risk ratio | 0.5R |
| Starting equity | $100,000 |
| Ending equity | $99,735.7 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-264.3 | MISS |
| Win rate | 45-60% | 7.69% | MISS |
| Profit factor | >= 1.3 | 0.22 | MISS |
| Sharpe (ann.) | > 1.5 | -8.47 | MISS |
| R:R | 2:1 - 3:1 | 2.67:1 planned | PASS |
| Max drawdown | < 10% | 0.26% | PASS |
| Expectancy | positive | $-20.33 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 0% | $-167.84 | $-18.65 |
| Mid  10:30–11:30 | 4 | 25% | $-96.46 | $-24.11 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| UBER | 13 | 1 | 7.69% | $-264.3 | $-20.33 | 0.22 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 13 | 1 | 7.69% | $-264.3 | $-20.33 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 13 | 1 | 7.69% | $-264.3 | $-20.33 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 13 | 1 | 7.69% | $-264.3 | $-20.33 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 13 | 1 | 7.69% | $-264.3 | $-20.33 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 7 | 0 | $-18.85 | 2 | 0 | $-17.96 | 0.04% | 0 | reject |
| Symbol | UBER | 7 | 0 | $-18.85 | 6 | 0.36 | $-22.06 | 0.14% | 0.28 | reject |
| Behavior | confirmationRequired | 7 | 0 | $-18.85 | 6 | 0.36 | $-22.06 | 0.14% | 0.28 | reject |
| Trade state | confirmation-required | 7 | 0 | $-18.85 | 6 | 0.36 | $-22.06 | 0.14% | 0.28 | reject |
| Regime | trend | 7 | 0 | $-18.85 | 6 | 0.36 | $-22.06 | 0.14% | 0.28 | reject |
| Setup | breakout | 7 | 0 | $-18.85 | 6 | 0.36 | $-22.06 | 0.14% | 0.28 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-281.58 | 0.21 |
| +3 bps/side | $-316.14 | 0.18 |
| +5 bps/side | $-350.71 | 0.16 |
| +10 bps/side | $-437.1 | 0.12 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| stagnation | 3 |
| trailing-stop | 2 |
| timeout | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | UBER | 05-02 13:35 | 05-02 13:55 | 83.08 | 82.73 | 88 | 7311.04 | -30.8 | -0.42% | 0.47R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.99 | ↓82.61 | 0.2144 | 1.45 | **LOSS** |
| 2 | UBER | 06-04 13:35 | 06-04 13:50 | 84.33 | 84.04 | 87 | 7336.71 | -25.23 | -0.34% | 0.48R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.43 | ↓83.86 | 0.1937 | 2.77 | **LOSS** |
| 3 | UBER | 06-09 13:45 | 06-09 14:00 | 87.45 | 87.1 | 54 | 4722.3 | -18.9 | -0.4% | 0.43R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 4 | UBER | 07-24 13:35 | 07-24 15:20 | 92.37 | 92.1 | 79 | 7297.23 | -21.33 | -0.29% | 0.32R | 105m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 5 | UBER | 08-15 14:15 | 08-15 14:50 | 93.4 | 93.11 | 78 | 7285.2 | -22.62 | -0.31% | 0.29R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 72.71 | ↑92.37 | 0.3724 | 1.4 | **LOSS** |
| 6 | UBER | 09-08 13:35 | 09-08 14:10 | 92.16 | 92.08 | 79 | 7280.64 | -6.32 | -0.09% | 0.1R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.45 | ↓92 | 0.2383 | 1.12 | **LOSS** |
| 7 | UBER | 10-03 13:40 | 10-03 14:15 | 97.55 | 97.41 | 48 | 4682.4 | -6.72 | -0.14% | 0.2R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.19 | ↓97.35 | 0.4561 | 1.5 | **LOSS** |
| 8 | UBER | 11-03 14:30 | 11-03 15:00 | 97.93 | 97.51 | 74 | 7246.82 | -31.08 | -0.43% | 0.61R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.2 | ↓97.66 | 0.2553 | 1.69 | **LOSS** |
| 9 | UBER | 12-03 14:35 | 12-03 15:05 | 90.97 | 90.5 | 74 | 6731.78 | -34.78 | -0.52% | 0.5R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.86 | ↓90.4 | 0.4109 | 1.65 | **LOSS** |
| 10 | UBER | 02-18 14:35 | 02-18 16:20 | 71.74 | 72.48 | 102 | 7317.48 | +75.48 | +1.03% | 1.11R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.27 | ↑71.21 | 0.1884 | 1.29 | **WIN** |
| 11 | UBER | 02-24 14:35 | 02-24 14:50 | 71.9 | 70.86 | 102 | 7333.8 | -106.08 | -1.45% | 1.42R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 77.3 | ↓71.41 | 0.1245 | 2.76 | **LOSS** |
| 12 | UBER | 03-23 13:35 | 03-23 14:05 | 74.99 | 74.83 | 97 | 7274.03 | -15.52 | -0.21% | 0.2R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.32 | ↓74.93 | 0.0485 | 1.5 | **LOSS** |
| 13 | UBER | 04-17 14:00 | 04-17 14:20 | 78.59 | 78.25 | 60 | 4715.4 | -20.4 | -0.43% | 0.42R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.13 | ↑77.61 | 0.3587 | 1.45 | **LOSS** |

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

- ⚠️ **Profit factor 0.22 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.5R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:10:25.333Z*
