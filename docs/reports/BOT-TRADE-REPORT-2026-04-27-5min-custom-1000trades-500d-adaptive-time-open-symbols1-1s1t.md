# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T10:58:43.022Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 500 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $889.22 (+0.89%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 66.67% (6W / 3L) |
| Net P&L | $+889.22 (+0.89%) |
| Gross profit | $966.46 |
| Gross loss | $77.24 |
| Profit factor | 12.51 |
| Avg win | $161.08 |
| Avg loss | $25.75 |
| Payoff ratio | 6.26:1 |
| Expectancy | $+98.8 / trade |
| Max drawdown | 0.05% |
| Sharpe ratio (ann.) | 15.54 |
| Trades / active day | 1.29 |
| Avg confidence | 98.56% |
| Avg trade duration | 81 min |
| Avg risk ratio | 0.95R |
| Starting equity | $100,000 |
| Ending equity | $100,889.22 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 66.67% | $+889.22 | $98.8 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TGT | 9 | 6 | 66.67% | $+889.22 | $+98.8 | 12.51 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 6 | 75% | $+936.58 | $+117.07 |
| breakout | 1 | 0 | 0% | $-47.36 | $-47.36 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 8 | 5 | 62.5% | $+480.59 | $+60.07 |
| cleanTrend | 1 | 1 | 100% | $+408.63 | $+408.63 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 5 | 19.38 | $+75.64 | 3 | 61.04 | $+186.12 | 0.01% | 22.97 | promote |
| Symbol | TGT | 5 | 19.38 | $+75.64 | 4 | 10.02 | $+127.75 | 0.05% | 6.43 | promote |
| Time slot | Open 9:30-10:30 | 5 | 19.38 | $+75.64 | 4 | 10.02 | $+127.75 | 0.05% | 6.43 | promote |
| Behavior | neutral | 5 | 19.38 | $+75.64 | 3 | 2.81 | $+34.13 | 0.06% | 1.73 | promote |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+866.52 | 11.14 |
| +3 bps/side | $+821.14 | 9.07 |
| +5 bps/side | $+775.76 | 7.57 |
| +10 bps/side | $+662.33 | 5.17 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| stagnation | 2 |
| trim-profit-target | 1 |
| early-reversal | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TGT | 03-20 14:15 | 03-20 16:00 | 105.74 | 106.48 | 132 | 13957.68 | +97.68 | +0.7% | 0.85R | 105m | market | timeout | trend | trend | neutral | 58.04 | ↑105.16 | 0.2114 | 1.98 | **WIN** |
| 2 | TGT | 05-15 14:10 | 05-15 15:45 | 95.89 | 96.65 | 73 | 13999.94 | +55.48 | +0.79% | 0.65R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 3 | TGT | 05-15 14:10 | 05-15 15:55 | 95.89 | 96.68 | 73 | 13999.94 | +57.67 | +0.82% | 0.68R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 4 | TGT | 05-22 14:00 | 05-22 15:10 | 94.97 | 94.83 | 147 | 13960.59 | -20.58 | -0.15% | 0.12R | 70m | market | stagnation | trend | trend | neutral | 72.49 | ↓94.31 | 0.3681 | 1.3 | **LOSS** |
| 5 | TGT | 06-03 14:20 | 06-03 16:05 | 94.75 | 96.02 | 148 | 14023 | +187.96 | +1.34% | 1.65R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 6 | TGT | 07-01 13:40 | 07-01 14:00 | 100.55 | 100.18 | 128 | 12870.4 | -47.36 | -0.37% | 0.48R | 20m | market | early-reversal | breakout | breakout | neutral | 81.53 | ↑99.85 | 0.3703 | 1.85 | **LOSS** |
| 7 | TGT | 07-01 14:10 | 07-01 15:10 | 101.18 | 103.75 | 159 | 16087.62 | +408.63 | +2.54% | 2.49R | 60m | market | profit-target | trend | trend | cleanTrend | 75.8 | ↑100.15 | 0.6252 | 1.05 | **WIN** |
| 8 | TGT | 10-15 14:00 | 10-15 15:05 | 90.94 | 90.88 | 155 | 14095.7 | -9.3 | -0.07% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 79.92 | ↑90.36 | 0.4165 | 1.06 | **LOSS** |
| 9 | TGT | 04-17 14:05 | 04-17 15:50 | 125.11 | 126.53 | 112 | 14012.32 | +159.04 | +1.14% | 1.52R | 105m | market | timeout | trend | trend | neutral | 71.66 | ↑124.36 | 0.3054 | 1.2 | **WIN** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio fixed** | Balanced stop 1.7%→1.2%, target 1.5%→2.4% — now a true 2R trade |
| 2 | **Trailing stop** | Exits once price retraces 0.8% from the session high-watermark |
| 3 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 4 | **Market session gate** | New entries blocked outside 13:30–19:30 UTC (9:30–3:30 PM ET) — eliminates extended-hours overnight holds |
| 5 | **RSI > 80 hard block (trend)** | RSI > 80 in a trend setup = chasing overbought momentum; entry blocked (breakout setup exempt) |
| 6 | **Higher buy threshold** | Balanced buyThreshold raised 52→55 — filters marginal entries |
| 7 | **Break-even stop** | Once position reaches 1R (highWatermark ≥ entry×1.012), exit if price returns to entry — stops winners from turning losers |
| 8 | **dailyLossesPct auto-injected** | REST API injects live daily-loss % from server tradeState when client omits it |
| 9 | **VWAP in entry scoring** | +5 pts above VWAP, −8 pts significantly below, +4 pts below VWAP for mean-revert |
| 10 | **Slippage model** | 0.05 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ✅ **Profit factor 12.51** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.95R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T10:58:43.022Z*
