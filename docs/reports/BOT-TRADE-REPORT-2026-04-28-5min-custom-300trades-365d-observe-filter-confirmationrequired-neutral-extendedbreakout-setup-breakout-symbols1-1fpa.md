# Bot Trade Report — 17 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:07:49.138Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $14.17 (+0.01%) over 17 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 17 |
| Win rate | 35.29% (6W / 11L) |
| Net P&L | $+14.17 (+0.01%) |
| Gross profit | $379.8 |
| Gross loss | $365.63 |
| Profit factor | 1.04 |
| Avg win | $63.3 |
| Avg loss | $33.24 |
| Payoff ratio | 1.9:1 |
| Expectancy | $+0.83 / trade |
| Max drawdown | 0.1% |
| Sharpe ratio (ann.) | 0.21 |
| Trades / active day | 1 |
| Avg confidence | 91.82% |
| Avg trade duration | 44 min |
| Avg planned R:R | 2.87:1 |
| Avg risk ratio | 0.89R |
| Starting equity | $100,000 |
| Ending equity | $100,014.17 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+14.17 | PASS |
| Win rate | 45-60% | 35.29% | MISS |
| Profit factor | >= 1.3 | 1.04 | MISS |
| Sharpe (ann.) | > 1.5 | 0.21 | MISS |
| R:R | 2:1 - 3:1 | 2.87:1 planned | PASS |
| Max drawdown | < 10% | 0.1% | PASS |
| Expectancy | positive | $+0.83 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 38.46% | $+115.64 | $8.9 |
| Mid  10:30–11:30 | 3 | 33.33% | $-66.72 | $-22.24 |
| Noon 11:30–13:00 | 1 | 0% | $-34.75 | $-34.75 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRM | 17 | 6 | 35.29% | $+14.17 | $+0.83 | 1.04 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 17 | 6 | 35.29% | $+14.17 | $+0.83 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 17 | 6 | 35.29% | $+14.17 | $+0.83 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 17 | 6 | 35.29% | $+14.17 | $+0.83 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 17 | 6 | 35.29% | $+14.17 | $+0.83 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 8 | 1.07 | $+1.06 | 5 | 1.98 | $+21.44 | 0.08% | 1.66 | reject |
| Symbol | CRM | 10 | 0.62 | $-8.41 | 7 | 1.68 | $+14.04 | 0.08% | 1.37 | reject |
| Behavior | confirmationRequired | 10 | 0.62 | $-8.41 | 7 | 1.68 | $+14.04 | 0.08% | 1.37 | reject |
| Trade state | confirmation-required | 10 | 0.62 | $-8.41 | 7 | 1.68 | $+14.04 | 0.08% | 1.37 | reject |
| Regime | trend | 10 | 0.62 | $-8.41 | 7 | 1.68 | $+14.04 | 0.08% | 1.37 | reject |
| Setup | breakout | 10 | 0.62 | $-8.41 | 7 | 1.68 | $+14.04 | 0.08% | 1.37 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-5.17 | 0.99 |
| +3 bps/side | $-43.85 | 0.89 |
| +5 bps/side | $-82.48 | 0.81 |
| +10 bps/side | $-179.15 | 0.64 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| stagnation | 3 |
| trailing-stop | 3 |
| timeout | 2 |
| stop-loss | 2 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CRM | 06-17 14:20 | 06-17 14:35 | 270.18 | 267.73 | 27 | 7294.86 | -66.15 | -0.91% | 0.96R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.87 | ↑267.08 | 1.4065 | 2.29 | **LOSS** |
| 2 | CRM | 06-24 13:35 | 06-24 15:20 | 267.6 | 270.56 | 17 | 4549.2 | +50.32 | +1.11% | 1.59R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 3 | CRM | 06-30 13:30 | 06-30 13:45 | 275.88 | 274.11 | 16 | 4414.08 | -28.32 | -0.64% | 0.91R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 92.59 | ↓275.49 | 0.3147 | 1.2 | **LOSS** |
| 4 | CRM | 07-03 13:30 | 07-03 14:35 | 272.29 | 272.12 | 17 | 4628.93 | -2.89 | -0.06% | 0.09R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 88.79 | ↓271.56 | 0.7389 | 1.97 | **LOSS** |
| 5 | CRM | 08-15 13:35 | 08-15 14:10 | 239.28 | 238.82 | 19 | 4546.32 | -8.74 | -0.19% | 0.27R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 86.24 | ↓237.54 | 0.34 | 2.03 | **LOSS** |
| 6 | CRM | 09-05 13:35 | 09-05 14:30 | 247.39 | 247.61 | 29 | 7174.31 | +6.38 | +0.09% | 0.11R | 55m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.66 | ↓246.29 | 0.5948 | 1.57 | **WIN** |
| 7 | CRM | 10-01 13:40 | 10-01 13:55 | 242.34 | 241.14 | 19 | 4604.46 | -22.8 | -0.5% | 0.63R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.61 | ↑240.56 | 0.5486 | 1.27 | **LOSS** |
| 8 | CRM | 10-21 14:20 | 10-21 16:00 | 260.43 | 263.31 | 28 | 7292.04 | +80.64 | +1.11% | 1.19R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 9 | CRM | 02-02 14:40 | 02-02 15:15 | 215.48 | 215.35 | 34 | 7326.32 | -4.42 | -0.06% | 0.07R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 10 | CRM | 02-12 14:35 | 02-12 14:45 | 187.75 | 185.49 | 39 | 7322.25 | -88.14 | -1.2% | 1.35R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.39 | ↓186.49 | 0.2956 | 2.11 | **LOSS** |
| 11 | CRM | 03-05 14:40 | 03-05 15:55 | 199.96 | 200.72 | 34 | 6798.64 | +25.84 | +0.38% | 0.35R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 74.66 | ↓197.95 | 0.4248 | 1.35 | **WIN** |
| 12 | CRM | 03-10 16:25 | 03-10 16:45 | 198.04 | 196.65 | 25 | 4951 | -34.75 | -0.7% | 0.7R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.96 | ↑193.64 | 0.9776 | 1.98 | **LOSS** |
| 13 | CRM | 04-13 13:30 | 04-13 14:05 | 166.76 | 170.98 | 44 | 7337.44 | +185.68 | +2.53% | 3.61R | 35m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 80 | ↑166.55 | 0.1636 | 2.04 | **WIN** |
| 14 | CRM | 04-14 13:35 | 04-14 13:45 | 176.77 | 174.85 | 26 | 4596.02 | -49.92 | -1.09% | 1.33R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 84.78 | ↓175.94 | 0.5126 | 1.82 | **LOSS** |
| 15 | CRM | 04-15 13:30 | 04-15 15:15 | 175.57 | 176.76 | 26 | 4564.82 | +30.94 | +0.68% | 0.85R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.22 | ↑174.7 | 0.1189 | 1.77 | **WIN** |
| 16 | CRM | 04-20 13:45 | 04-20 14:15 | 187.29 | 185.97 | 25 | 4682.25 | -33 | -0.7% | 0.7R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.98 | ↓185.41 | 0.8358 | 2.97 | **LOSS** |
| 17 | CRM | 04-27 13:50 | 04-27 14:05 | 183.08 | 182.02 | 25 | 4577 | -26.5 | -0.58% | 0.5R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.76 | ↑181.34 | 1.2979 | 2.23 | **LOSS** |

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

- ⚠️ **Profit factor 1.04 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.89R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:07:49.138Z*
