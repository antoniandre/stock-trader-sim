# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:08:02.331Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $88.58 (-0.09%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 23.08% (3W / 10L) |
| Net P&L | $-88.58 (-0.09%) |
| Gross profit | $338.04 |
| Gross loss | $426.62 |
| Profit factor | 0.79 |
| Avg win | $112.68 |
| Avg loss | $42.66 |
| Payoff ratio | 2.64:1 |
| Expectancy | $-6.81 / trade |
| Max drawdown | 0.27% |
| Sharpe ratio (ann.) | -1.44 |
| Trades / active day | 1 |
| Avg confidence | 96% |
| Avg trade duration | 30 min |
| Avg planned R:R | 3.05:1 |
| Avg risk ratio | 1.11R |
| Starting equity | $100,000 |
| Ending equity | $99,911.42 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-88.58 | MISS |
| Win rate | 45-60% | 23.08% | MISS |
| Profit factor | >= 1.3 | 0.79 | MISS |
| Sharpe (ann.) | > 1.5 | -1.44 | MISS |
| R:R | 2:1 - 3:1 | 3.05:1 planned | MISS |
| Max drawdown | < 10% | 0.27% | PASS |
| Expectancy | positive | $-6.81 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 18.18% | $-186.12 | $-16.92 |
| Mid  10:30–11:30 | 2 | 50% | $+97.54 | $48.77 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| PANW | 13 | 3 | 23.08% | $-88.58 | $-6.81 | 0.79 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 13 | 3 | 23.08% | $-88.58 | $-6.81 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 13 | 3 | 23.08% | $-88.58 | $-6.81 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 13 | 3 | 23.08% | $-88.58 | $-6.81 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 13 | 3 | 23.08% | $-88.58 | $-6.81 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | PANW | 7 | 0.11 | $-32.47 | 6 | 1.81 | $+23.12 | 0.09% | 1.5 | reject |
| Behavior | confirmationRequired | 7 | 0.11 | $-32.47 | 6 | 1.81 | $+23.12 | 0.09% | 1.5 | reject |
| Trade state | confirmation-required | 7 | 0.11 | $-32.47 | 6 | 1.81 | $+23.12 | 0.09% | 1.5 | reject |
| Regime | trend | 7 | 0.11 | $-32.47 | 6 | 1.81 | $+23.12 | 0.09% | 1.5 | reject |
| Setup | breakout | 7 | 0.11 | $-32.47 | 6 | 1.81 | $+23.12 | 0.09% | 1.5 | reject |
| Time slot | Open 9:30-10:30 | 7 | 0.11 | $-32.47 | 4 | 1.31 | $+10.29 | 0.09% | 1.1 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-106.12 | 0.76 |
| +3 bps/side | $-141.15 | 0.7 |
| +5 bps/side | $-176.21 | 0.64 |
| +10 bps/side | $-263.86 | 0.53 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| timeout | 2 |
| stop-loss | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 13:55 | 184.92 | 183.93 | 36 | 6657.12 | -35.64 | -0.54% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | PANW | 05-12 13:45 | 05-12 15:30 | 190.56 | 191.38 | 35 | 6669.6 | +28.7 | +0.43% | 0.52R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 3 | PANW | 06-02 13:30 | 06-02 13:50 | 193.75 | 192.12 | 37 | 7168.75 | -60.31 | -0.84% | 1.11R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 4 | PANW | 06-06 13:45 | 06-06 14:00 | 200.23 | 199.44 | 36 | 7208.28 | -28.44 | -0.39% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.26 | ↓199.43 | 0.4794 | 1.19 | **LOSS** |
| 5 | PANW | 08-08 13:35 | 08-08 13:50 | 170.03 | 168.42 | 27 | 4590.81 | -43.47 | -0.95% | 1.23R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 6 | PANW | 09-05 13:40 | 09-05 13:55 | 196.22 | 195.18 | 37 | 7260.14 | -38.48 | -0.53% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 7 | PANW | 10-06 13:45 | 10-06 14:00 | 212.12 | 210.66 | 34 | 7212.08 | -49.64 | -0.69% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.8 | ↓211.14 | 0.8134 | 1.23 | **LOSS** |
| 8 | PANW | 11-10 14:30 | 11-10 14:45 | 214.68 | 213.54 | 34 | 7299.12 | -38.76 | -0.53% | 0.7R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.12 | ↓214.67 | 0.7707 | 1.71 | **LOSS** |
| 9 | PANW | 02-20 14:35 | 02-20 16:20 | 153.93 | 156.83 | 47 | 7234.71 | +136.3 | +1.88% | 2.11R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.72 | ↑152.67 | 0.2261 | 1.64 | **WIN** |
| 10 | PANW | 03-12 13:35 | 03-12 13:50 | 167.74 | 166.43 | 28 | 4696.72 | -36.68 | -0.78% | 1.11R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.63 | ↓166.67 | 0.568 | 1.46 | **LOSS** |
| 11 | PANW | 04-14 13:30 | 04-14 13:45 | 164.5 | 163.38 | 44 | 7238 | -49.28 | -0.68% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.18 | ↓164.2 | 0.3177 | 1.89 | **LOSS** |
| 12 | PANW | 04-21 13:35 | 04-21 14:00 | 171.77 | 175.89 | 42 | 7214.34 | +173.04 | +2.4% | 3.43R | 25m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 69.78 | ↑171.51 | 0.1873 | 1.51 | **WIN** |
| 13 | PANW | 04-24 13:45 | 04-24 14:00 | 176.31 | 175.19 | 41 | 7228.71 | -45.92 | -0.64% | 0.7R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.59 | ↓175.45 | 0.9406 | 2.14 | **LOSS** |

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
- ✅ **Avg R = 1.11R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:08:02.331Z*
