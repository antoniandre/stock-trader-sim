# Bot Trade Report — 28 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:26:04.365Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $148.89 (+0.15%) over 28 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 28 |
| Win rate | 35.71% (10W / 18L) |
| Net P&L | $+148.89 (+0.15%) |
| Gross profit | $1055.11 |
| Gross loss | $906.22 |
| Profit factor | 1.16 |
| Avg win | $105.51 |
| Avg loss | $50.35 |
| Payoff ratio | 2.1:1 |
| Expectancy | $+5.32 / trade |
| Max drawdown | 0.56% |
| Sharpe ratio (ann.) | 0.87 |
| Trades / active day | 1.04 |
| Avg confidence | 99.54% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.54R |
| Starting equity | $100,000 |
| Ending equity | $100,148.89 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 3 | 66.67% | $+110.23 | $36.74 |
| Mid  10:30–11:30 | 13 | 38.46% | $+4.19 | $0.32 |
| Noon 11:30–13:00 | 9 | 33.33% | $+222.46 | $24.72 |
| PM   13:00–14:00 | 3 | 0% | $-187.99 | $-62.66 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVO | 28 | 10 | 35.71% | $+148.89 | $+5.32 | 1.16 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 20 | 8 | 40% | $+320.04 | $+16 |
| breakout | 8 | 2 | 25% | $-171.15 | $-21.39 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 27 | 10 | 37.04% | $+190.71 | $+7.06 |
| noisyHighBeta | 1 | 0 | 0% | $-41.82 | $-41.82 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Noon 11:30-13:00 | 5 | 0.31 | $-25.03 | 4 | 6.31 | $+86.91 | 0.05% | 4.12 | reject |
| Setup | trend | 13 | 1.05 | $+1.23 | 7 | 2.16 | $+43.43 | 0.12% | 1.65 | reject |
| Symbol | NVO | 16 | 0.64 | $-11.19 | 12 | 1.81 | $+27.32 | 0.2% | 1.32 | reject |
| Behavior | neutral | 15 | 0.7 | $-9.15 | 12 | 1.81 | $+27.32 | 0.2% | 1.32 | reject |
| Time slot | Mid 10:30-11:30 | 7 | 0.48 | $-21.59 | 6 | 1.94 | $+25.89 | 0.08% | 1.34 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+72.12 | 1.08 |
| +3 bps/side | $-81.42 | 0.92 |
| +5 bps/side | $-234.97 | 0.8 |
| +10 bps/side | $-618.87 | 0.56 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 9 |
| early-reversal | 9 |
| stagnation | 6 |
| breakeven-stop | 2 |
| stop-loss | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVO | 05-15 15:15 | 05-15 17:00 | 65.6 | 66.08 | 213 | 13972.8 | +102.24 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 50.56 | ↑65.2 | 0.2221 | 1.13 | **WIN** |
| 2 | NVO | 05-19 16:25 | 05-19 16:45 | 66.71 | 66.51 | 210 | 14009.1 | -42 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 77.27 | ↑65.96 | 0.2627 | 1.17 | **LOSS** |
| 3 | NVO | 05-21 14:05 | 05-21 15:50 | 69.14 | 69.48 | 202 | 13966.28 | +68.68 | +0.49% | 0.54R | 105m | market | timeout | trend | trend | neutral | 71.49 | ↑68.69 | 0.1802 | 1.49 | **WIN** |
| 4 | NVO | 05-22 16:25 | 05-22 18:10 | 67.99 | 68.26 | 206 | 14005.94 | +55.62 | +0.4% | 0.57R | 105m | market | timeout | trend | trend | neutral | 75.27 | ↑67.24 | 0.1864 | 1.72 | **WIN** |
| 5 | NVO | 05-30 15:30 | 05-30 16:25 | 70.96 | 70.78 | 197 | 13979.12 | -35.46 | -0.25% | 0.36R | 55m | market | stagnation | trend | trend | neutral | 78.32 | ↑69.94 | 0.3909 | 1.52 | **LOSS** |
| 6 | NVO | 06-02 14:55 | 06-02 15:25 | 72.73 | 72.39 | 192 | 13964.16 | -65.28 | -0.47% | 0.59R | 30m | market | early-reversal | trend | trend | neutral | 71.35 | ↑71.96 | 0.2501 | 1.49 | **LOSS** |
| 7 | NVO | 06-09 17:25 | 06-09 18:40 | 75.44 | 75.37 | 185 | 13956.4 | -12.95 | -0.09% | 0.1R | 75m | market | stagnation | trend | trend | neutral | 73.82 | ↑74.91 | 0.1941 | 1.5 | **LOSS** |
| 8 | NVO | 06-10 14:50 | 06-10 15:40 | 79.44 | 79.33 | 176 | 13981.44 | -19.36 | -0.14% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 76.71 | ↑78.54 | 1.0801 | 2.14 | **LOSS** |
| 9 | NVO | 07-08 14:20 | 07-08 16:05 | 69.89 | 70.18 | 200 | 13978 | +58 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 78.57 | ↑69.52 | 0.1782 | 1.26 | **WIN** |
| 10 | NVO | 07-25 16:00 | 07-25 16:50 | 71.49 | 71.28 | 196 | 14012.04 | -41.16 | -0.29% | 0.41R | 50m | market | stagnation | trend | trend | neutral | 64.8 | ↑71.04 | 0.0861 | 6.75 | **LOSS** |
| 11 | NVO | 08-21 15:00 | 08-21 16:45 | 55.46 | 55.61 | 252 | 13975.92 | +37.8 | +0.27% | 0.39R | 105m | market | timeout | trend | trend | neutral | 74.11 | ↑55.06 | 0.2703 | 1.08 | **WIN** |
| 12 | NVO | 09-09 15:35 | 09-09 15:55 | 53.92 | 53.68 | 259 | 13965.28 | -62.16 | -0.45% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 67.34 | ↑53.19 | 0.0258 | 3.28 | **LOSS** |
| 13 | NVO | 09-10 14:30 | 09-10 15:20 | 54.96 | 54.77 | 254 | 13959.84 | -48.26 | -0.35% | 0.28R | 50m | market | stagnation | trend | trend | neutral | 68.11 | ↑54.39 | 0.1926 | 1.39 | **LOSS** |
| 14 | NVO | 09-18 14:30 | 09-18 14:50 | 62.15 | 61.81 | 123 | 7644.45 | -41.82 | -0.55% | 0.28R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 73.91 | ↑61.58 | 1.0802 | 1.4 | **LOSS** |
| 15 | NVO | 10-03 14:15 | 10-03 15:10 | 59.48 | 59.41 | 235 | 13977.8 | -16.45 | -0.12% | 0.14R | 55m | market | breakeven-stop | breakout | breakout | neutral | 66.19 | ↑58.84 | 0.0481 | 1.45 | **LOSS** |
| 16 | NVO | 11-04 15:25 | 11-04 15:45 | 49.22 | 48.81 | 284 | 13978.48 | -116.44 | -0.83% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 51.88 | ↓48.63 | -0.1481 | 2.41 | **LOSS** |
| 17 | NVO | 11-17 16:55 | 11-17 17:45 | 48.99 | 48.95 | 285 | 13962.15 | -11.4 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 72.22 | ↑48.48 | 0.1666 | 1.65 | **LOSS** |
| 18 | NVO | 11-28 17:00 | 11-28 17:15 | 49.67 | 49.28 | 281 | 13957.27 | -109.59 | -0.79% | 1.13R | 15m | market | stop-loss | trend | trend | neutral | 76.3 | ↑49.01 | 0.202 | 1.09 | **LOSS** |
| 19 | NVO | 12-10 14:50 | 12-10 16:35 | 48 | 48.03 | 290 | 13920 | +8.7 | +0.06% | 0.06R | 105m | market | timeout | breakout | breakout | neutral | 80.89 | ↑47.59 | 0.2635 | 2.17 | **WIN** |
| 20 | NVO | 12-24 14:30 | 12-24 14:50 | 53.15 | 52.83 | 262 | 13925.3 | -83.84 | -0.6% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 90.25 | ↓53.07 | 0.2167 | 1.8 | **LOSS** |
| 21 | NVO | 01-05 15:55 | 01-05 17:40 | 54.36 | 54.62 | 256 | 13916.16 | +66.56 | +0.48% | 0.42R | 105m | market | timeout | trend | trend | neutral | 52.73 | ↑53.97 | 0.449 | 1.06 | **WIN** |
| 22 | NVO | 01-16 15:55 | 01-16 16:55 | 60.27 | 61.77 | 231 | 13922.37 | +346.5 | +2.49% | 2.39R | 60m | market | profit-target | trend | trend | neutral | 68.8 | ↑59.76 | 0.8161 | 1.46 | **WIN** |
| 23 | NVO | 01-22 14:35 | 01-22 16:20 | 61.3 | 62.05 | 210 | 12873 | +157.5 | +1.22% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 77.31 | ↑61.24 | 0.6333 | 1.55 | **WIN** |
| 24 | NVO | 01-26 14:35 | 01-26 15:45 | 63.27 | 63.25 | 221 | 13982.67 | -4.42 | -0.03% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | neutral | 76.16 | ↓62.96 | 0.0318 | 1.61 | **LOSS** |
| 25 | NVO | 02-13 14:35 | 02-13 15:15 | 49.64 | 49.37 | 282 | 13998.48 | -76.14 | -0.54% | 0.64R | 40m | market | early-reversal | breakout | trend | neutral | 77.08 | ↓49.57 | 0.2263 | 1.08 | **LOSS** |
| 26 | NVO | 03-09 14:45 | 03-09 16:30 | 39.26 | 39.69 | 357 | 14015.82 | +153.51 | +1.1% | 0.87R | 105m | market | timeout | trend | trend | neutral | 61.98 | ↑38.87 | 0.1024 | 1.54 | **WIN** |
| 27 | NVO | 03-31 16:40 | 03-31 17:05 | 36.31 | 36.17 | 386 | 14015.66 | -54.04 | -0.39% | 0.56R | 25m | market | early-reversal | breakout | breakout | neutral | 72 | ↑35.92 | 0.0038 | 2.93 | **LOSS** |
| 28 | NVO | 03-31 17:15 | 03-31 17:35 | 36.35 | 36.18 | 385 | 13994.75 | -65.45 | -0.47% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 73.28 | ↑35.95 | 0.0951 | 1.69 | **LOSS** |

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

- ⚠️ **Profit factor 1.16 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.54R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:26:04.365Z*
