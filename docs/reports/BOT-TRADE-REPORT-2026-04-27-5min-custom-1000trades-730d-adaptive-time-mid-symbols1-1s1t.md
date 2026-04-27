# Bot Trade Report — 25 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:45:27.211Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $346.2 (-0.35%) over 25 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 25 |
| Win rate | 28% (7W / 18L) |
| Net P&L | $-346.2 (-0.35%) |
| Gross profit | $609.49 |
| Gross loss | $955.69 |
| Profit factor | 0.64 |
| Avg win | $87.07 |
| Avg loss | $53.09 |
| Payoff ratio | 1.64:1 |
| Expectancy | $-13.85 / trade |
| Max drawdown | 0.65% |
| Sharpe ratio (ann.) | -2.67 |
| Trades / active day | 1.04 |
| Avg confidence | 100% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $99,653.8 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 25 | 28% | $-346.2 | $-13.85 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TGT | 25 | 7 | 28% | $-346.2 | $-13.85 | 0.64 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 15 | 4 | 26.67% | $-164.4 | $-10.96 |
| breakout | 10 | 3 | 30% | $-181.8 | $-18.18 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 25 | 7 | 28% | $-346.2 | $-13.85 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 8 | 1.54 | $+13.3 | 7 | 0 | $-38.69 | 0.27% | 0 | watch |
| Symbol | TGT | 15 | 1.21 | $+6.92 | 10 | 0.01 | $-45 | 0.45% | 0 | reject |
| Behavior | neutral | 15 | 1.21 | $+6.92 | 10 | 0.01 | $-45 | 0.45% | 0 | reject |
| Time slot | Mid 10:30-11:30 | 15 | 1.21 | $+6.92 | 10 | 0.01 | $-45 | 0.45% | 0 | reject |
| Setup | breakout | 7 | 0.99 | $-0.37 | 3 | 0.01 | $-59.74 | 0.18% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-413.1 | 0.59 |
| +3 bps/side | $-546.9 | 0.51 |
| +5 bps/side | $-680.73 | 0.44 |
| +10 bps/side | $-1015.17 | 0.32 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| timeout | 5 |
| stagnation | 4 |
| breakeven-stop | 2 |
| stop-loss | 1 |
| trim-profit-target | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TGT | 05-31 14:30 | 05-31 16:15 | 151.55 | 151.72 | 92 | 13942.6 | +15.64 | +0.11% | 0.13R | 105m | market | timeout | trend | trend | neutral | 70.65 | ↑150.62 | 0.4156 | 2.05 | **WIN** |
| 2 | TGT | 09-24 14:30 | 09-24 15:20 | 157.39 | 156.96 | 88 | 13850.32 | -37.84 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 78.02 | ↑156.53 | 0.4209 | 1.71 | **LOSS** |
| 3 | TGT | 11-01 14:55 | 11-01 15:20 | 151.8 | 151.18 | 92 | 13965.6 | -57.04 | -0.41% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 69.57 | ↑150.83 | 0.2449 | 1.14 | **LOSS** |
| 4 | TGT | 11-11 14:40 | 11-11 16:25 | 152.36 | 153.53 | 91 | 13864.76 | +106.47 | +0.77% | 1.1R | 105m | market | timeout | breakout | breakout | neutral | 79.17 | ↑151.52 | 0.1724 | 1.5 | **WIN** |
| 5 | TGT | 11-12 14:35 | 11-12 14:45 | 155.39 | 154.05 | 90 | 13985.1 | -120.6 | -0.86% | 1.23R | 10m | market | stop-loss | breakout | breakout | neutral | 79.62 | ↓154.97 | 0.2562 | 1.4 | **LOSS** |
| 6 | TGT | 11-18 14:50 | 11-18 16:35 | 155.16 | 155.83 | 90 | 13964.4 | +60.3 | +0.43% | 0.61R | 105m | market | timeout | trend | trend | neutral | 74.13 | ↑154.37 | 0.4237 | 1.64 | **WIN** |
| 7 | TGT | 11-22 14:30 | 11-22 16:15 | 123.06 | 124.82 | 113 | 13905.78 | +198.88 | +1.43% | 1.86R | 105m | market | timeout | breakout | breakout | neutral | 82.75 | ↑122.52 | 0.0777 | 2.23 | **WIN** |
| 8 | TGT | 11-27 14:30 | 11-27 14:50 | 128.45 | 127.65 | 109 | 14001.05 | -87.2 | -0.62% | 0.89R | 20m | market | early-reversal | trend | breakout | neutral | 62.64 | ↓128.19 | -0.0787 | 3.05 | **LOSS** |
| 9 | TGT | 12-26 14:30 | 12-26 16:10 | 133.21 | 135.33 | 52 | 13987.05 | +110.24 | +1.59% | 2.27R | 100m | market | trim-profit-target | trend | trend | neutral | 69.25 | ↑132.98 | 0.2186 | 1.82 | **WIN** |
| 10 | TGT | 12-26 14:30 | 12-26 16:15 | 133.21 | 135.39 | 53 | 13987.05 | +115.54 | +1.64% | 2.34R | 105m | market | timeout | trend | trend | neutral | 69.25 | ↑132.98 | 0.2186 | 1.82 | **WIN** |
| 11 | TGT | 02-18 14:45 | 02-18 15:05 | 129.81 | 129.21 | 108 | 14019.48 | -64.8 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 77.43 | ↑129.05 | 0.2816 | 1.95 | **LOSS** |
| 12 | TGT | 02-19 15:10 | 02-19 15:45 | 131.24 | 130.82 | 106 | 13911.44 | -44.52 | -0.32% | 0.46R | 35m | market | early-reversal | trend | trend | neutral | 72.14 | ↓130.57 | 0.2354 | 2 | **LOSS** |
| 13 | TGT | 03-03 14:40 | 03-03 15:45 | 126.13 | 126.04 | 111 | 14000.43 | -9.99 | -0.07% | 0.06R | 65m | market | stagnation | breakout | breakout | neutral | 75.85 | ↓126.15 | 0.7713 | 1.64 | **LOSS** |
| 14 | TGT | 03-24 15:05 | 03-24 15:25 | 107.29 | 106.86 | 130 | 13947.7 | -55.9 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 72.65 | ↑106.05 | 0.6502 | 1.76 | **LOSS** |
| 15 | TGT | 04-04 15:05 | 04-04 15:30 | 93.77 | 93.6 | 149 | 13971.73 | -25.33 | -0.18% | 0.12R | 25m | market | trailing-stop | breakout | breakout | neutral | 60.31 | ↑92.14 | -0.4096 | 2.28 | **LOSS** |
| 16 | TGT | 04-24 15:10 | 04-24 15:40 | 94.24 | 93.83 | 148 | 13947.52 | -60.68 | -0.44% | 0.57R | 30m | market | early-reversal | trend | trend | neutral | 78.6 | ↑92.97 | 0.5455 | 1.16 | **LOSS** |
| 17 | TGT | 05-15 15:05 | 05-15 15:35 | 96.78 | 96.44 | 144 | 13936.32 | -48.96 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 79.81 | ↑95.59 | 0.3793 | 1.3 | **LOSS** |
| 18 | TGT | 08-06 15:15 | 08-06 16:15 | 105.54 | 105.36 | 132 | 13931.28 | -23.76 | -0.17% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 19 | TGT | 08-18 14:45 | 08-18 15:05 | 106.04 | 105.55 | 131 | 13891.24 | -64.19 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 20 | TGT | 10-14 15:05 | 10-14 16:00 | 88.79 | 88.69 | 157 | 13940.03 | -15.7 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 71.23 | ↑87.83 | 0.3663 | 1.07 | **LOSS** |
| 21 | TGT | 11-20 14:30 | 11-20 14:50 | 86.84 | 86.15 | 161 | 13981.24 | -111.09 | -0.79% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 77.91 | ↓86.54 | 0.0462 | 1.7 | **LOSS** |
| 22 | TGT | 01-02 14:35 | 01-02 15:00 | 99.03 | 98.66 | 141 | 13963.23 | -52.17 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 77.5 | ↑98.41 | 0.0437 | 1.78 | **LOSS** |
| 23 | TGT | 01-14 14:40 | 01-14 15:05 | 110.56 | 110 | 126 | 13930.56 | -70.56 | -0.51% | 0.67R | 25m | market | early-reversal | breakout | breakout | neutral | 80.73 | ↓109.85 | 0.2361 | 1.51 | **LOSS** |
| 24 | TGT | 01-30 15:20 | 01-30 17:05 | 104.09 | 104.05 | 134 | 13948.06 | -5.36 | -0.04% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 63.79 | ↑103.33 | 0.2133 | 2.24 | **LOSS** |
| 25 | TGT | 02-13 15:05 | 02-13 16:45 | 114.75 | 114.77 | 121 | 13884.75 | +2.42 | +0.02% | 0.02R | 100m | market | breakeven-stop | breakout | breakout | neutral | 65.91 | ↑113.6 | 0.3361 | 1.19 | **WIN** |

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

- ⚠️ **Profit factor 0.64 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:45:27.211Z*
