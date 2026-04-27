# Bot Trade Report — 18 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:25:57.802Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $21.42 (-0.02%) over 18 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 18 |
| Win rate | 33.33% (6W / 12L) |
| Net P&L | $-21.42 (-0.02%) |
| Gross profit | $577.42 |
| Gross loss | $598.84 |
| Profit factor | 0.96 |
| Avg win | $96.24 |
| Avg loss | $49.9 |
| Payoff ratio | 1.93:1 |
| Expectancy | $-1.19 / trade |
| Max drawdown | 0.52% |
| Sharpe ratio (ann.) | -0.2 |
| Trades / active day | 1.06 |
| Avg confidence | 99.33% |
| Avg trade duration | 66 min |
| Avg risk ratio | 0.57R |
| Starting equity | $100,000 |
| Ending equity | $99,978.58 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 42.86% | $+321.6 | $45.94 |
| Mid  10:30–11:30 | 8 | 25% | $-376.05 | $-47.01 |
| Noon 11:30–13:00 | 3 | 33.33% | $+33.03 | $11.01 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 18 | 6 | 33.33% | $-21.42 | $-1.19 | 0.96 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 5 | 35.71% | $+138.78 | $+9.91 |
| breakout | 4 | 1 | 25% | $-160.2 | $-40.05 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 18 | 6 | 33.33% | $-21.42 | $-1.19 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 7 | 4.9 | $+45.94 | 0 | 0 | $+0 | 0% | 0 | watch |
| Setup | trend | 9 | 2.44 | $+24.6 | 5 | 0.41 | $-16.53 | 0.14% | 0.22 | watch |
| Symbol | GOOGL | 10 | 3.39 | $+36.74 | 8 | 0.13 | $-48.6 | 0.45% | 0.08 | watch |
| Behavior | neutral | 10 | 3.39 | $+36.74 | 8 | 0.13 | $-48.6 | 0.45% | 0.08 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-68.41 | 0.89 |
| +3 bps/side | $-162.4 | 0.77 |
| +5 bps/side | $-256.4 | 0.66 |
| +10 bps/side | $-491.4 | 0.47 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 5 |
| stagnation | 5 |
| early-reversal | 4 |
| breakeven-stop | 3 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 43 | 13956.94 | +78.26 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 2 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 43 | 13956.94 | +179.74 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 3 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.82 | 171.6 | 82 | 13925.24 | +145.96 | +1.05% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 4 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.16 | 171.77 | 81 | 13944.96 | -31.59 | -0.23% | 0.2R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 5 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.33 | 180.27 | 78 | 13987.74 | +73.32 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 6 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.92 | 200.91 | 69 | 13863.48 | -0.69 | 0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **LOSS** |
| 7 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.27 | 203.22 | 68 | 13890.36 | -71.4 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 8 | GOOGL | 08-15 14:10 | 08-15 15:00 | 206 | 205.42 | 68 | 14008 | -39.44 | -0.28% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 9 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.93 | 248.74 | 56 | 13940.08 | -10.64 | -0.08% | 0.08R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 10 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.87 | 271.73 | 51 | 13814.37 | +43.86 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 11 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.61 | 289.65 | 48 | 14045.28 | -142.08 | -1.01% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 12 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.31 | 304.74 | 45 | 13738.95 | -25.65 | -0.19% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 13 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 14 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.22 | 332.44 | 41 | 13703.02 | -72.98 | -0.53% | 0.63R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 15 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 16 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.25 | 313.59 | 44 | 13827 | -29.04 | -0.21% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 17 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.63 | 307.38 | 45 | 13843.35 | -11.25 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 18 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.81 | 332.15 | 42 | 13894.02 | +56.28 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |

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

- ⚠️ **Profit factor 0.96 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.57R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:25:57.802Z*
