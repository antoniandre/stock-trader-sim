# Bot Trade Report — 22 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:14:34.722Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $351.84 (-0.35%) over 22 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 22 |
| Win rate | 27.27% (6W / 16L) |
| Net P&L | $-351.84 (-0.35%) |
| Gross profit | $1007.69 |
| Gross loss | $1359.53 |
| Profit factor | 0.74 |
| Avg win | $167.95 |
| Avg loss | $84.97 |
| Payoff ratio | 1.98:1 |
| Expectancy | $-15.99 / trade |
| Max drawdown | 0.75% |
| Sharpe ratio (ann.) | -1.81 |
| Trades / active day | 1 |
| Avg confidence | 98.82% |
| Avg trade duration | 48 min |
| Avg risk ratio | 0.81R |
| Starting equity | $100,000 |
| Ending equity | $99,648.16 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 12.5% | $-445.21 | $-55.65 |
| Mid  10:30–11:30 | 14 | 35.71% | $+93.37 | $6.67 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 22 | 6 | 27.27% | $-351.84 | $-15.99 | 0.74 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 13 | 3 | 23.08% | $-137.96 | $-10.61 |
| breakout | 9 | 3 | 33.33% | $-213.88 | $-23.76 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 2 | 0 | 0% | $-37.28 | $-18.64 |
| neutral | 20 | 6 | 30% | $-314.56 | $-15.73 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 7 | 2.52 | $+44.49 | 7 | 0.67 | $-31.15 | 0.67% | 0.58 | watch |
| Symbol | SHOP | 13 | 1.03 | $+1.22 | 9 | 0.55 | $-40.86 | 0.75% | 0.47 | reject |
| Behavior | neutral | 12 | 1.1 | $+4.16 | 8 | 0.55 | $-45.56 | 0.75% | 0.47 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.12 | $-49.26 | 2 | 0 | $-74.83 | 0.15% | 0 | reject |
| Setup | trend | 10 | 1.25 | $+10.36 | 3 | 0 | $-80.53 | 0.24% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-410.19 | 0.71 |
| +3 bps/side | $-526.9 | 0.65 |
| +5 bps/side | $-643.61 | 0.59 |
| +10 bps/side | $-935.35 | 0.48 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 10 |
| timeout | 4 |
| stop-loss | 3 |
| breakeven-stop | 2 |
| stagnation | 1 |
| trailing-stop | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SHOP | 05-13 14:15 | 05-13 15:05 | 108.31 | 107.83 | 71 | 7690.01 | -34.08 | -0.44% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.98 | ↑107.45 | 0.7682 | 1.11 | **LOSS** |
| 2 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 132 | 13959 | -60.72 | -0.43% | 0.36R | 20m | market | early-reversal | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 3 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.73 | 110.91 | 126 | 13951.98 | +22.68 | +0.16% | 0.2R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 4 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.52 | 107.99 | 128 | 13890.56 | -67.84 | -0.49% | 0.35R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 5 | SHOP | 06-24 15:20 | 06-24 15:40 | 114.85 | 114.46 | 121 | 13896.85 | -47.19 | -0.34% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 72.99 | ↑113.56 | 1.1687 | 1.34 | **LOSS** |
| 6 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.44 | 117.74 | 121 | 13968.24 | +278.3 | +1.99% | 2.84R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 7 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.92 | 116.26 | 120 | 13910.4 | +40.8 | +0.29% | 0.2R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 8 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.08 | 124.98 | 113 | 13908.04 | +214.7 | +1.54% | 1.35R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 9 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.88 | 127.5 | 109 | 14047.92 | -150.42 | -1.07% | 1.49R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 10 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.58 | 124.4 | 112 | 13952.96 | -20.16 | -0.14% | 0.19R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 11 | SHOP | 08-18 15:05 | 08-18 15:45 | 142.83 | 142.38 | 98 | 13997.34 | -44.1 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 67.34 | ↑141.46 | 0.2534 | 2.03 | **LOSS** |
| 12 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.05 | 145.5 | 95 | 13874.75 | -52.25 | -0.38% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 13 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.57 | 165.81 | 84 | 13991.88 | -63.84 | -0.46% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 14 | SHOP | 10-24 14:00 | 10-24 14:45 | 173.13 | 172.32 | 80 | 13850.4 | -64.8 | -0.47% | 0.34R | 45m | market | early-reversal | breakout | breakout | neutral | 76.93 | ↑171.31 | 1.4345 | 1.27 | **LOSS** |
| 15 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.35 | 144.81 | 97 | 13904.95 | +141.62 | +1.02% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 16 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.41 | 158.14 | 83 | 12816.03 | +309.59 | +2.42% | 2.1R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 17 | SHOP | 12-17 15:10 | 12-17 15:50 | 168.49 | 167.07 | 83 | 13984.67 | -117.86 | -0.84% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 76.11 | ↓167.77 | 1.7597 | 1.13 | **LOSS** |
| 18 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.08 | 160.87 | 86 | 14024.88 | -190.06 | -1.36% | 1.94R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 19 | SHOP | 01-13 14:30 | 01-13 14:50 | 169.5 | 168.03 | 82 | 13899 | -120.54 | -0.87% | 1.24R | 20m | market | early-reversal | trend | trend | neutral | 74.12 | ↓168.93 | 0.7858 | 1.09 | **LOSS** |
| 20 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.16 | 140.52 | 90 | 12884.4 | -237.6 | -1.84% | 1.28R | 20m | market | stop-loss | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 21 | SHOP | 02-24 15:20 | 02-24 16:10 | 118.7 | 118.65 | 64 | 7596.8 | -3.2 | -0.04% | 0.02R | 50m | market | breakeven-stop | trend | trend | noisyHighBeta | 60.89 | ↓118.6 | 0.502 | 1.53 | **LOSS** |
| 22 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.19 | 112.5 | 123 | 13922.37 | -84.87 | -0.61% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |

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

- ⚠️ **Profit factor 0.74 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.81R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:14:34.722Z*
