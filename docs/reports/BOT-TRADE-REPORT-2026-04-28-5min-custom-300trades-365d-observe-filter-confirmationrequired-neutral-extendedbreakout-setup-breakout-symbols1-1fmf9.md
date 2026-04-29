# Bot Trade Report — 17 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:08:02.346Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $287.58 (+0.29%) over 17 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 17 |
| Win rate | 41.18% (7W / 10L) |
| Net P&L | $+287.58 (+0.29%) |
| Gross profit | $620.72 |
| Gross loss | $333.14 |
| Profit factor | 1.86 |
| Avg win | $88.67 |
| Avg loss | $33.31 |
| Payoff ratio | 2.66:1 |
| Expectancy | $+16.92 / trade |
| Max drawdown | 0.2% |
| Sharpe ratio (ann.) | 3.71 |
| Trades / active day | 1 |
| Avg confidence | 93.88% |
| Avg trade duration | 46 min |
| Avg planned R:R | 2.89:1 |
| Avg risk ratio | 1.04R |
| Starting equity | $100,000 |
| Ending equity | $100,287.58 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+287.58 | PASS |
| Win rate | 45-60% | 41.18% | MISS |
| Profit factor | >= 1.3 | 1.86 | PASS |
| Sharpe (ann.) | > 1.5 | 3.71 | PASS |
| R:R | 2:1 - 3:1 | 2.89:1 planned | PASS |
| Max drawdown | < 10% | 0.2% | PASS |
| Expectancy | positive | $+16.92 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 38.46% | $+119.6 | $9.2 |
| Mid  10:30–11:30 | 4 | 50% | $+167.98 | $42 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 17 | 7 | 41.18% | $+287.58 | $+16.92 | 1.86 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 17 | 7 | 41.18% | $+287.58 | $+16.92 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 17 | 7 | 41.18% | $+287.58 | $+16.92 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 15 | 6 | 40% | $+207.64 | $+13.84 |
| neutral | 2 | 1 | 50% | $+79.94 | $+39.97 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 15 | 6 | 40% | $+207.64 | $+13.84 |
| neutral | 2 | 1 | 50% | $+79.94 | $+39.97 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NVDA | 10 | 0.82 | $-4.72 | 7 | 5.69 | $+47.83 | 0.03% | 4.25 | reject |
| Regime | trend | 10 | 0.82 | $-4.72 | 7 | 5.69 | $+47.83 | 0.03% | 4.25 | reject |
| Setup | breakout | 10 | 0.82 | $-4.72 | 7 | 5.69 | $+47.83 | 0.03% | 4.25 | reject |
| Time slot | Open 9:30-10:30 | 9 | 0.92 | $-1.97 | 4 | 3.6 | $+34.33 | 0.03% | 2.71 | reject |
| Behavior | confirmationRequired | 9 | 1.18 | $+3.71 | 6 | 3.44 | $+29.05 | 0.03% | 2.55 | reject |
| Trade state | confirmation-required | 9 | 1.18 | $+3.71 | 6 | 3.44 | $+29.05 | 0.03% | 2.55 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+265.75 | 1.77 |
| +3 bps/side | $+222.07 | 1.6 |
| +5 bps/side | $+178.37 | 1.45 |
| +10 bps/side | $+69.21 | 1.15 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| timeout | 4 |
| profit-target | 1 |
| breakeven-stop | 1 |
| stop-loss | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.57 | 130.09 | 37 | 4683.09 | +130.24 | +2.78% | 3.97R | 80m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 2 | NVDA | 05-22 14:00 | 05-22 14:15 | 133.8 | 132.97 | 55 | 7359 | -45.65 | -0.62% | 0.6R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 3 | NVDA | 06-02 13:35 | 06-02 13:50 | 137.73 | 136.67 | 76 | 10467.48 | -80.56 | -0.77% | 0.69R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 4 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.92 | 141.49 | 52 | 7275.84 | +81.64 | +1.12% | 1.4R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 5 | NVDA | 06-24 13:40 | 06-24 13:55 | 147.74 | 147.03 | 32 | 4727.68 | -22.72 | -0.48% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 6 | NVDA | 09-08 13:45 | 09-08 14:00 | 170.57 | 169.89 | 27 | 4605.39 | -18.36 | -0.4% | 0.53R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.03 | ↑169.5 | 0.8155 | 2.31 | **LOSS** |
| 7 | NVDA | 09-29 13:40 | 09-29 13:55 | 183.69 | 182.99 | 25 | 4592.25 | -17.5 | -0.38% | 0.41R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 97.23 | ↑182.52 | 1.2549 | 3.87 | **LOSS** |
| 8 | NVDA | 10-08 13:30 | 10-08 15:10 | 187.91 | 187.98 | 39 | 7328.49 | +2.73 | +0.04% | 0.06R | 100m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 9 | NVDA | 10-28 13:30 | 10-28 13:45 | 195.4 | 193.42 | 24 | 4689.6 | -47.52 | -1.01% | 1.35R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 10 | NVDA | 12-02 14:35 | 12-02 14:50 | 185.41 | 184.23 | 25 | 4635.25 | -29.5 | -0.64% | 0.65R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 11 | NVDA | 01-15 14:40 | 01-15 15:00 | 188.87 | 188.13 | 25 | 4721.75 | -18.5 | -0.39% | 0.41R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 12 | NVDA | 02-09 14:35 | 02-09 14:55 | 189.6 | 191.06 | 38 | 7204.8 | +55.48 | +0.77% | 0.75R | 20m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 13 | NVDA | 03-13 13:40 | 03-13 13:55 | 185.64 | 184.79 | 39 | 7239.96 | -33.15 | -0.46% | 0.56R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.73 | ↓185.18 | 0.3317 | 1.13 | **LOSS** |
| 14 | NVDA | 04-10 13:40 | 04-10 15:25 | 185.93 | 189.42 | 39 | 7251.27 | +136.11 | +1.88% | 2.69R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.43 | ↑185.58 | 0.4573 | 1.7 | **WIN** |
| 15 | NVDA | 04-14 13:30 | 04-14 14:00 | 192.31 | 191.49 | 24 | 4615.44 | -19.68 | -0.43% | 0.61R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 87.34 | ↓192.17 | 0.6125 | 5.29 | **LOSS** |
| 16 | NVDA | 04-15 13:30 | 04-15 15:15 | 198.13 | 199.59 | 37 | 7330.81 | +54.02 | +0.74% | 1.06R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 69.07 | ↑197.63 | 0.3965 | 4.04 | **WIN** |
| 17 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ✅ **Profit factor 1.86** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.04R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:08:02.346Z*
