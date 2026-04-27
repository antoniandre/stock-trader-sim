# Bot Trade Report — 10 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T13:40:27.240Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 10 | **Lookback:** 90 days | **Universe:** custom | **Symbols scanned:** 3 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $346.01 (+0.35%) over 10 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 10 |
| Win rate | 50% (5W / 5L) |
| Net P&L | $+346.01 (+0.35%) |
| Gross profit | $568.19 |
| Gross loss | $222.18 |
| Profit factor | 2.56 |
| Avg win | $113.64 |
| Avg loss | $44.44 |
| Payoff ratio | 2.56:1 |
| Expectancy | $+34.6 / trade |
| Max drawdown | 0.07% |
| Sharpe ratio (ann.) | 5.13 |
| Trades / active day | 1.25 |
| Avg confidence | 100% |
| Avg trade duration | 72 min |
| Avg risk ratio | 1.05R |
| Starting equity | $100,000 |
| Ending equity | $100,346.01 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 4 | 50% | $+152.06 | $38.02 |
| Noon 11:30–13:00 | 5 | 60% | $+263.25 | $52.65 |
| PM   13:00–14:00 | 1 | 0% | $-69.3 | $-69.3 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| META | 4 | 3 | 75% | $+285.23 | $+71.31 | 5.12 | watch |
| AMZN | 3 | 2 | 66.67% | $+157.8 | $+52.6 | 3.82 | watch |
| GOOGL | 3 | 0 | 0% | $-97.02 | $-32.34 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 3 | 42.86% | $+101.03 | $+14.43 |
| breakout | 3 | 2 | 66.67% | $+244.98 | $+81.66 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 1 | 1 | 100% | $+189.72 | $+189.72 |
| neutral | 9 | 4 | 44.44% | $+156.29 | $+17.37 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 6 | 1.7 | $+15.17 | 3 | 1.71 | $+21.75 | 0.09% | 1.26 | promote |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+321.05 | 2.36 |
| +3 bps/side | $+271.12 | 2.03 |
| +5 bps/side | $+221.23 | 1.76 |
| +10 bps/side | $+96.45 | 1.26 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| early-reversal | 3 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 2 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 3 | AMZN | 02-02 15:15 | 02-02 15:45 | 245.23 | 244.25 | 57 | 13978.11 | -55.86 | -0.4% | 0.34R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 4 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 5 | META | 02-06 17:30 | 02-06 18:05 | 664.12 | 660.82 | 21 | 13946.52 | -69.3 | -0.5% | 0.67R | 35m | market | early-reversal | trend | trend | neutral | 64.21 | ↑656.89 | 1.4376 | 1.26 | **LOSS** |
| 6 | META | 02-09 15:55 | 02-09 17:35 | 666.47 | 680.17 | 10 | 13995.87 | +137 | +2.06% | 2.94R | 100m | market | trim-profit-target | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 7 | META | 02-09 15:55 | 02-09 17:40 | 666.47 | 680.7 | 11 | 13995.87 | +156.53 | +2.14% | 3.06R | 105m | market | timeout | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 8 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 9 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 68 | 13850.92 | +189.72 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 10 | GOOGL | 02-19 16:20 | 02-19 16:40 | 305.43 | 303.91 | 45 | 13744.35 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↑303.29 | 0.5567 | 3.82 | **LOSS** |

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
| 10 | **Slippage model** | 0.03 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ✅ **Profit factor 2.56** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.05R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T13:40:27.240Z*
