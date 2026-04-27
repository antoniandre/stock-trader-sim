# Bot Trade Report — 17 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:18:53.087Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $419.72 (+0.42%) over 17 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 17 |
| Win rate | 35.29% (6W / 11L) |
| Net P&L | $+419.72 (+0.42%) |
| Gross profit | $869.95 |
| Gross loss | $450.23 |
| Profit factor | 1.93 |
| Avg win | $144.99 |
| Avg loss | $40.93 |
| Payoff ratio | 3.54:1 |
| Expectancy | $+24.69 / trade |
| Max drawdown | 0.35% |
| Sharpe ratio (ann.) | 3.56 |
| Trades / active day | 1.13 |
| Avg confidence | 99.24% |
| Avg trade duration | 64 min |
| Avg risk ratio | 0.66R |
| Starting equity | $100,000 |
| Ending equity | $100,419.72 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 62.5% | $+790.33 | $98.79 |
| Mid  10:30–11:30 | 9 | 11.11% | $-370.61 | $-41.18 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TGT | 17 | 6 | 35.29% | $+419.72 | $+24.69 | 1.93 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 13 | 5 | 38.46% | $+647.54 | $+49.81 |
| breakout | 4 | 1 | 25% | $-227.82 | $-56.95 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 1 | 1 | 100% | $+408.63 | $+408.63 |
| neutral | 16 | 5 | 31.25% | $+11.09 | $+0.69 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 9 | 4.62 | $+61.7 | 4 | 2.38 | $+23.07 | 0.07% | 1.33 | promote |
| Time slot | Open 9:30-10:30 | 6 | 10.43 | $+106.76 | 2 | 17.21 | $+74.9 | 0.01% | 6.24 | watch |
| Symbol | TGT | 10 | 3.53 | $+50.79 | 7 | 0.65 | $-12.6 | 0.25% | 0.44 | watch |
| Behavior | neutral | 9 | 1.5 | $+11.03 | 7 | 0.65 | $-12.6 | 0.25% | 0.44 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+374.7 | 1.78 |
| +3 bps/side | $+284.63 | 1.52 |
| +5 bps/side | $+194.59 | 1.32 |
| +10 bps/side | $-30.52 | 0.96 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 5 |
| early-reversal | 5 |
| timeout | 3 |
| breakeven-stop | 2 |
| trim-profit-target | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TGT | 05-15 14:10 | 05-15 15:45 | 95.89 | 96.65 | 73 | 13999.94 | +55.48 | +0.79% | 0.65R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 2 | TGT | 05-15 14:10 | 05-15 15:55 | 95.89 | 96.68 | 73 | 13999.94 | +57.67 | +0.82% | 0.68R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 3 | TGT | 05-20 14:45 | 05-20 15:35 | 99.1 | 98.9 | 141 | 13973.1 | -28.2 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 4 | TGT | 05-22 14:00 | 05-22 15:10 | 94.97 | 94.83 | 147 | 13960.59 | -20.58 | -0.15% | 0.12R | 70m | market | stagnation | trend | trend | neutral | 72.49 | ↓94.31 | 0.3681 | 1.3 | **LOSS** |
| 5 | TGT | 06-03 14:20 | 06-03 16:05 | 94.75 | 96.02 | 147 | 13928.25 | +186.69 | +1.34% | 1.65R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 6 | TGT | 07-01 13:40 | 07-01 14:00 | 100.55 | 100.18 | 128 | 12870.4 | -47.36 | -0.37% | 0.48R | 20m | market | early-reversal | breakout | breakout | neutral | 81.53 | ↑99.85 | 0.3703 | 1.85 | **LOSS** |
| 7 | TGT | 07-01 14:10 | 07-01 15:10 | 101.18 | 103.75 | 159 | 16087.62 | +408.63 | +2.54% | 2.49R | 60m | market | profit-target | trend | trend | cleanTrend | 75.8 | ↑100.15 | 0.6252 | 1.05 | **WIN** |
| 8 | TGT | 08-06 15:15 | 08-06 16:15 | 105.54 | 105.36 | 133 | 14036.82 | -23.94 | -0.17% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 9 | TGT | 08-18 14:45 | 08-18 15:05 | 106.04 | 105.55 | 132 | 13997.28 | -64.68 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 10 | TGT | 10-14 15:05 | 10-14 16:00 | 88.79 | 88.69 | 158 | 14028.82 | -15.8 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 71.23 | ↑87.83 | 0.3663 | 1.07 | **LOSS** |
| 11 | TGT | 10-15 14:00 | 10-15 15:05 | 90.94 | 90.88 | 154 | 14004.76 | -9.24 | -0.07% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 79.92 | ↑90.36 | 0.4165 | 1.06 | **LOSS** |
| 12 | TGT | 11-20 14:30 | 11-20 14:50 | 86.84 | 86.15 | 162 | 14068.08 | -111.78 | -0.79% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 77.91 | ↓86.54 | 0.0462 | 1.7 | **LOSS** |
| 13 | TGT | 01-02 14:35 | 01-02 15:00 | 99.03 | 98.66 | 141 | 13963.23 | -52.17 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 77.5 | ↑98.41 | 0.0437 | 1.78 | **LOSS** |
| 14 | TGT | 01-14 14:40 | 01-14 15:05 | 110.56 | 110 | 127 | 14041.12 | -71.12 | -0.51% | 0.67R | 25m | market | early-reversal | breakout | breakout | neutral | 80.73 | ↓109.85 | 0.2361 | 1.51 | **LOSS** |
| 15 | TGT | 01-30 15:20 | 01-30 17:05 | 104.09 | 104.05 | 134 | 13948.06 | -5.36 | -0.04% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 63.79 | ↑103.33 | 0.2133 | 2.24 | **LOSS** |
| 16 | TGT | 02-13 15:05 | 02-13 16:45 | 114.75 | 114.77 | 122 | 13999.5 | +2.44 | +0.02% | 0.02R | 100m | market | breakeven-stop | breakout | breakout | neutral | 65.91 | ↑113.6 | 0.3361 | 1.19 | **WIN** |
| 17 | TGT | 04-17 14:05 | 04-17 15:50 | 125.11 | 126.53 | 112 | 14012.32 | +159.04 | +1.14% | 1.52R | 105m | market | timeout | trend | trend | neutral | 71.66 | ↑124.36 | 0.3054 | 1.2 | **WIN** |

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

- ✅ **Profit factor 1.93** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.66R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:18:53.087Z*
