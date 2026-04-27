# Bot Trade Report — 11 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:14:57.149Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $360.62 (+0.36%) over 11 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 11 |
| Win rate | 54.55% (6W / 5L) |
| Net P&L | $+360.62 (+0.36%) |
| Gross profit | $627.88 |
| Gross loss | $267.26 |
| Profit factor | 2.35 |
| Avg win | $104.65 |
| Avg loss | $53.45 |
| Payoff ratio | 1.96:1 |
| Expectancy | $+32.78 / trade |
| Max drawdown | 0.14% |
| Sharpe ratio (ann.) | 4.72 |
| Trades / active day | 1 |
| Avg confidence | 97.64% |
| Avg trade duration | 71 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $100,360.62 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 3 | 66.67% | $+131.04 | $43.68 |
| Mid  10:30–11:30 | 8 | 50% | $+229.58 | $28.7 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| WMT | 11 | 6 | 54.55% | $+360.62 | $+32.78 | 2.35 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 9 | 4 | 44.44% | $+20.8 | $+2.31 |
| breakout | 2 | 2 | 100% | $+339.82 | $+169.91 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 11 | 6 | 54.55% | $+360.62 | $+32.78 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | WMT | 6 | 1.13 | $+4.29 | 5 | 5.95 | $+66.98 | 0.07% | 3.92 | reject |
| Behavior | neutral | 6 | 1.13 | $+4.29 | 5 | 5.95 | $+66.98 | 0.07% | 3.92 | reject |
| Setup | trend | 6 | 1.13 | $+4.29 | 3 | 0.93 | $-1.64 | 0.07% | 0.5 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+330.33 | 2.17 |
| +3 bps/side | $+269.73 | 1.84 |
| +5 bps/side | $+209.14 | 1.58 |
| +10 bps/side | $+57.64 | 1.13 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| early-reversal | 3 |
| stagnation | 2 |
| breakeven-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | WMT | 05-14 14:20 | 05-14 15:10 | 96.97 | 96.85 | 144 | 13963.68 | -17.28 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 79.19 | ↑96.45 | 0.207 | 1.13 | **LOSS** |
| 2 | WMT | 05-16 14:05 | 05-16 15:20 | 98.4 | 98.41 | 142 | 13972.8 | +1.42 | +0.01% | 0.01R | 75m | market | breakeven-stop | trend | trend | neutral | 77.46 | ↑97.31 | 0.4845 | 1.01 | **WIN** |
| 3 | WMT | 10-14 14:30 | 10-14 15:20 | 105.03 | 104.93 | 133 | 13968.99 | -13.3 | -0.1% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 64.76 | ↑104.03 | 0.7487 | 1.82 | **LOSS** |
| 4 | WMT | 01-20 14:30 | 01-20 14:50 | 121.21 | 120.14 | 106 | 12848.26 | -113.42 | -0.88% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 75.65 | ↓120.96 | 0.5126 | 1.2 | **LOSS** |
| 5 | WMT | 02-02 14:30 | 02-02 16:15 | 119.98 | 121.91 | 116 | 13917.68 | +223.88 | +1.61% | 2.3R | 105m | market | timeout | trend | trend | neutral | 66.44 | ↑119.64 | 0.2594 | 1.15 | **WIN** |
| 6 | WMT | 02-04 14:30 | 02-04 15:15 | 128.37 | 127.86 | 109 | 13992.33 | -55.59 | -0.4% | 0.57R | 45m | market | early-reversal | trend | trend | neutral | 74.11 | ↓128.24 | 0.2366 | 1.22 | **LOSS** |
| 7 | WMT | 02-12 14:35 | 02-12 16:20 | 131.56 | 133.38 | 106 | 13945.36 | +192.92 | +1.38% | 1.97R | 105m | market | timeout | breakout | breakout | neutral | 79.39 | ↑130.67 | 0.2757 | 1.2 | **WIN** |
| 8 | WMT | 02-26 14:30 | 02-26 14:50 | 127.37 | 126.7 | 101 | 12864.37 | -67.67 | -0.53% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 71.58 | ↓126.84 | 0.0625 | 1.62 | **LOSS** |
| 9 | WMT | 02-27 14:35 | 02-27 16:20 | 126.58 | 127.12 | 110 | 13923.8 | +59.4 | +0.43% | 0.59R | 105m | market | timeout | breakout | trend | neutral | 72.02 | ↑126.4 | 0.2009 | 1.93 | **WIN** |
| 10 | WMT | 03-12 15:10 | 03-12 16:50 | 124.26 | 124.29 | 112 | 13917.12 | +3.36 | +0.02% | 0.03R | 100m | market | breakeven-stop | trend | trend | neutral | 74.81 | ↑123.1 | 0.1543 | 1.09 | **WIN** |
| 11 | WMT | 04-08 13:35 | 04-08 15:20 | 123.88 | 125.18 | 113 | 13998.44 | +146.9 | +1.05% | 1.24R | 105m | market | timeout | breakout | breakout | neutral | 73.08 | ↑123.06 | 0.0288 | 1.74 | **WIN** |

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

- ✅ **Profit factor 2.35** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:14:57.149Z*
