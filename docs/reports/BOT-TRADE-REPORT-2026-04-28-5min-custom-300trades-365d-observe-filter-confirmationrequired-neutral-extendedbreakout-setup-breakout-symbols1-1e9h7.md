# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:45:25.705Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $89.78 (+0.09%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 41.67% (5W / 7L) |
| Net P&L | $+89.78 (+0.09%) |
| Gross profit | $298.15 |
| Gross loss | $208.37 |
| Profit factor | 1.43 |
| Avg win | $59.63 |
| Avg loss | $29.77 |
| Payoff ratio | 2:1 |
| Expectancy | $+7.48 / trade |
| Max drawdown | 0.14% |
| Sharpe ratio (ann.) | 2.04 |
| Trades / active day | 1 |
| Avg confidence | 88.08% |
| Avg trade duration | 45 min |
| Avg planned R:R | 2.66:1 |
| Avg risk ratio | 0.82R |
| Starting equity | $100,000 |
| Ending equity | $100,089.78 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+89.78 | PASS |
| Win rate | 45-60% | 41.67% | MISS |
| Profit factor | >= 1.3 | 1.43 | PASS |
| Sharpe (ann.) | > 1.5 | 2.04 | PASS |
| R:R | 2:1 - 3:1 | 2.66:1 planned | PASS |
| Max drawdown | < 10% | 0.14% | PASS |
| Expectancy | positive | $+7.48 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 50% | $+179.18 | $22.4 |
| Mid  10:30–11:30 | 4 | 25% | $-89.4 | $-22.35 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LRCX | 12 | 5 | 41.67% | $+89.78 | $+7.48 | 1.43 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 12 | 5 | 41.67% | $+89.78 | $+7.48 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 5 | 41.67% | $+89.78 | $+7.48 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 12 | 5 | 41.67% | $+89.78 | $+7.48 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 12 | 5 | 41.67% | $+89.78 | $+7.48 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | LRCX | 7 | 1.41 | $+5.39 | 5 | 1.45 | $+10.41 | 0.08% | 1.21 | promote |
| Behavior | confirmationRequired | 7 | 1.41 | $+5.39 | 5 | 1.45 | $+10.41 | 0.08% | 1.21 | promote |
| Trade state | confirmation-required | 7 | 1.41 | $+5.39 | 5 | 1.45 | $+10.41 | 0.08% | 1.21 | promote |
| Regime | trend | 7 | 1.41 | $+5.39 | 5 | 1.45 | $+10.41 | 0.08% | 1.21 | promote |
| Setup | breakout | 7 | 1.41 | $+5.39 | 5 | 1.45 | $+10.41 | 0.08% | 1.21 | promote |
| Time slot | Open 9:30-10:30 | 6 | 1.52 | $+7.38 | 2 | ∞ | $+67.45 | 0% | ∞ | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+77.24 | 1.36 |
| +3 bps/side | $+52.18 | 1.23 |
| +5 bps/side | $+27.12 | 1.11 |
| +10 bps/side | $-35.55 | 0.87 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| early-reversal | 3 |
| trailing-stop | 3 |
| stop-loss | 2 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LRCX | 06-16 13:35 | 06-16 15:20 | 91.91 | 93.12 | 79 | 7260.89 | +95.59 | +1.32% | 1.21R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 76.5 | ↑91.63 | 0.1251 | 2.86 | **WIN** |
| 2 | LRCX | 06-23 14:00 | 06-23 14:30 | 92.45 | 92.4 | 51 | 4714.95 | -2.55 | -0.05% | 0.05R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 3 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.41 | 101.56 | 46 | 4710.86 | -39.1 | -0.83% | 1.19R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 4 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.91 | 97.51 | 48 | 4699.68 | -19.2 | -0.41% | 0.51R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 5 | LRCX | 08-11 13:40 | 08-11 13:55 | 103.92 | 103.38 | 45 | 4676.4 | -24.3 | -0.52% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.19 | ↓103.53 | 0.3151 | 2.26 | **LOSS** |
| 6 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.41 | 100.13 | 47 | 4672.27 | +33.84 | +0.72% | 0.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 7 | LRCX | 12-15 14:30 | 12-15 15:25 | 163.76 | 163.6 | 41 | 6714.16 | -6.56 | -0.1% | 0.09R | 55m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 69.82 | ↓163.27 | -0.1389 | 2.51 | **LOSS** |
| 8 | LRCX | 01-28 14:40 | 01-28 14:55 | 241.24 | 237.39 | 19 | 4583.56 | -73.15 | -1.6% | 1.42R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 82.17 | ↓240.15 | 0.4073 | 1.72 | **LOSS** |
| 9 | LRCX | 02-20 14:35 | 02-20 15:05 | 240.25 | 242.03 | 19 | 4564.75 | +33.82 | +0.74% | 0.96R | 30m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 91.22 | ↑239.23 | 1.1614 | 1.84 | **WIN** |
| 10 | LRCX | 02-23 14:30 | 02-23 14:45 | 247.31 | 245.02 | 19 | 4698.89 | -43.51 | -0.93% | 1.33R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.35 | ↓247.41 | 0.5848 | 2.69 | **LOSS** |
| 11 | LRCX | 04-01 13:35 | 04-01 15:20 | 219.14 | 223.3 | 31 | 6793.34 | +128.96 | +1.9% | 1.58R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.92 | ↑218.06 | 1.4175 | 1.96 | **WIN** |
| 12 | LRCX | 04-09 13:35 | 04-09 14:15 | 251.65 | 251.98 | 18 | 4529.7 | +5.94 | +0.13% | 0.13R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 96.68 | ↓250.44 | 0.844 | 1.44 | **WIN** |

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

- ⚠️ **Profit factor 1.43 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.82R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:45:25.705Z*
