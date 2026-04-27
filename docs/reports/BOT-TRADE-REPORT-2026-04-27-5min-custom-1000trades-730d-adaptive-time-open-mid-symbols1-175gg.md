# Bot Trade Report — 48 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:44.790Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $37.05 (-0.04%) over 48 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 48 |
| Win rate | 39.58% (19W / 29L) |
| Net P&L | $-37.05 (-0.04%) |
| Gross profit | $1709.48 |
| Gross loss | $1746.53 |
| Profit factor | 0.98 |
| Avg win | $89.97 |
| Avg loss | $60.23 |
| Payoff ratio | 1.49:1 |
| Expectancy | $-0.77 / trade |
| Max drawdown | 0.57% |
| Sharpe ratio (ann.) | -0.13 |
| Trades / active day | 1.02 |
| Avg confidence | 99.88% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.66R |
| Starting equity | $100,000 |
| Ending equity | $99,962.95 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 15 | 26.67% | $-545.1 | $-36.34 |
| Mid  10:30–11:30 | 33 | 45.45% | $+508.05 | $15.4 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMZN | 48 | 19 | 39.58% | $-37.05 | $-0.77 | 0.98 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 35 | 14 | 40% | $-321.77 | $-9.19 |
| breakout | 13 | 5 | 38.46% | $+284.72 | $+21.9 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 47 | 19 | 40.43% | $+1.2 | $+0.03 |
| noisyHighBeta | 1 | 0 | 0% | $-38.25 | $-38.25 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 9 | 1.82 | $+18.49 | 4 | 1.73 | $+29.58 | 0.16% | 1.33 | promote |
| Time slot | Mid 10:30-11:30 | 20 | 2.28 | $+31.46 | 13 | 0.77 | $-9.32 | 0.48% | 0.53 | watch |
| Symbol | AMZN | 28 | 1.42 | $+12.81 | 20 | 0.55 | $-19.79 | 0.53% | 0.38 | watch |
| Behavior | neutral | 27 | 1.48 | $+14.7 | 20 | 0.55 | $-19.79 | 0.53% | 0.38 | watch |
| Setup | trend | 19 | 1.29 | $+10.12 | 16 | 0.29 | $-32.13 | 0.61% | 0.18 | reject |
| Time slot | Open 9:30-10:30 | 8 | 0.27 | $-33.82 | 7 | 0.25 | $-39.22 | 0.27% | 0.17 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-166.39 | 0.91 |
| +3 bps/side | $-425.11 | 0.79 |
| +5 bps/side | $-683.8 | 0.68 |
| +10 bps/side | $-1330.57 | 0.49 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 19 |
| timeout | 16 |
| stagnation | 8 |
| breakeven-stop | 3 |
| stop-loss | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMZN | 05-09 15:25 | 05-09 16:30 | 190.66 | 190.55 | 73 | 13918.18 | -8.03 | -0.06% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 78.91 | ↑189.09 | 0.6054 | 1.09 | **LOSS** |
| 2 | AMZN | 05-29 14:15 | 05-29 15:05 | 183.5 | 183.08 | 76 | 13946 | -31.92 | -0.23% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 75.14 | ↑182.7 | 0.4864 | 1.91 | **LOSS** |
| 3 | AMZN | 06-24 14:20 | 06-24 14:40 | 190.86 | 188.03 | 73 | 13932.78 | -206.59 | -1.48% | 1.4R | 20m | market | stop-loss | trend | trend | neutral | 74.27 | ↓189.58 | 1.004 | 1.3 | **LOSS** |
| 4 | AMZN | 06-25 14:10 | 06-25 15:55 | 187.93 | 188.45 | 74 | 13906.82 | +38.48 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 64.56 | ↑186.92 | 0.3443 | 1.23 | **WIN** |
| 5 | AMZN | 06-27 13:30 | 06-27 13:50 | 195.77 | 194.89 | 71 | 13899.67 | -62.48 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 79.42 | ↓195.51 | 0.1538 | 3.67 | **LOSS** |
| 6 | AMZN | 08-07 14:45 | 08-07 15:10 | 167.49 | 166.64 | 45 | 7537.05 | -38.25 | -0.51% | 0.49R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 60.36 | ↑166.08 | 0.7285 | 1.77 | **LOSS** |
| 7 | AMZN | 08-30 13:35 | 08-30 14:55 | 173.96 | 173.84 | 77 | 13394.92 | -9.24 | -0.07% | 0.09R | 80m | market | breakeven-stop | breakout | breakout | neutral | 80.6 | ↓173.43 | -0.128 | 2.25 | **LOSS** |
| 8 | AMZN | 11-06 15:05 | 11-06 16:50 | 202.4 | 205.38 | 68 | 13763.2 | +202.64 | +1.47% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.03 | ↑200.63 | 0.6038 | 1.36 | **WIN** |
| 9 | AMZN | 11-07 14:30 | 11-07 16:15 | 208.56 | 210.72 | 67 | 13973.52 | +144.72 | +1.04% | 1.41R | 105m | market | timeout | breakout | breakout | neutral | 76.63 | ↑208.07 | 0.4212 | 1.57 | **WIN** |
| 10 | AMZN | 11-18 14:35 | 11-18 14:55 | 204.06 | 203.16 | 68 | 13876.08 | -61.2 | -0.44% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 75.87 | ↓203.7 | 0.6013 | 1.2 | **LOSS** |
| 11 | AMZN | 11-26 14:30 | 11-26 16:15 | 203.95 | 206.12 | 68 | 13868.6 | +147.56 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | neutral | 78.41 | ↑203.19 | 0.2945 | 4.11 | **WIN** |
| 12 | AMZN | 12-06 14:45 | 12-06 16:30 | 223.7 | 224.94 | 62 | 13869.4 | +76.88 | +0.55% | 0.7R | 105m | market | timeout | trend | breakout | neutral | 69.64 | ↑222.25 | 0.41 | 1.17 | **WIN** |
| 13 | AMZN | 12-24 14:45 | 12-24 15:10 | 228.47 | 227.75 | 61 | 13936.67 | -43.92 | -0.32% | 0.38R | 25m | market | early-reversal | breakout | breakout | neutral | 76.51 | ↑227.29 | 0.5611 | 1.19 | **LOSS** |
| 14 | AMZN | 01-02 15:10 | 01-02 15:30 | 225.01 | 222.58 | 62 | 13950.62 | -150.66 | -1.08% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 72.12 | ↓222.51 | 1.009 | 1.27 | **LOSS** |
| 15 | AMZN | 01-06 15:00 | 01-06 16:45 | 226.58 | 228.15 | 61 | 13821.38 | +95.77 | +0.69% | 0.78R | 105m | market | timeout | trend | trend | neutral | 73.69 | ↑226.06 | 0.5481 | 1.04 | **WIN** |
| 16 | AMZN | 01-14 14:35 | 01-14 14:55 | 221.12 | 220.22 | 63 | 13930.56 | -56.7 | -0.41% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 73.93 | ↓220.48 | 0.2992 | 1.21 | **LOSS** |
| 17 | AMZN | 01-15 14:45 | 01-15 15:35 | 222.82 | 222.61 | 62 | 13814.84 | -13.02 | -0.09% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 83.51 | ↓222.52 | 0.7062 | 1.5 | **LOSS** |
| 18 | AMZN | 01-28 14:30 | 01-28 15:40 | 235.06 | 239.41 | 29 | 13868.54 | +126.15 | +1.85% | 2.47R | 70m | market | trim-profit-target | trend | trend | neutral | 72.7 | ↑234.86 | 0.3872 | 1.89 | **WIN** |
| 19 | AMZN | 01-28 14:30 | 01-28 16:15 | 235.06 | 240.53 | 30 | 13868.54 | +164.1 | +2.33% | 3.11R | 105m | market | timeout | trend | trend | neutral | 72.7 | ↑234.86 | 0.3872 | 1.89 | **WIN** |
| 20 | AMZN | 01-31 14:35 | 01-31 15:25 | 238.33 | 238.03 | 58 | 13823.14 | -17.4 | -0.13% | 0.16R | 50m | market | stagnation | trend | breakout | neutral | 66.23 | ↓237.8 | 0.385 | 2.66 | **LOSS** |
| 21 | AMZN | 02-04 14:55 | 02-04 16:40 | 239.9 | 241.98 | 58 | 13914.2 | +120.64 | +0.87% | 1.24R | 105m | market | timeout | trend | trend | neutral | 74.04 | ↑239 | 0.317 | 1.31 | **WIN** |
| 22 | AMZN | 02-10 15:05 | 02-10 16:15 | 232.17 | 232.25 | 60 | 13930.2 | +4.8 | +0.03% | 0.04R | 70m | market | breakeven-stop | trend | trend | neutral | 73.79 | ↑230.8 | 0.5745 | 1.38 | **WIN** |
| 23 | AMZN | 02-26 14:55 | 02-26 16:00 | 216.94 | 216.78 | 64 | 13884.16 | -10.24 | -0.07% | 0.08R | 65m | market | stagnation | trend | trend | neutral | 77.95 | ↑215.32 | 1.2365 | 1.26 | **LOSS** |
| 24 | AMZN | 03-07 14:50 | 03-07 15:15 | 201.8 | 200.49 | 69 | 13924.2 | -90.39 | -0.65% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 64.04 | ↓200.55 | 0.2946 | 1.3 | **LOSS** |
| 25 | AMZN | 03-20 14:00 | 03-20 15:35 | 197.38 | 197.47 | 71 | 14013.98 | +6.39 | +0.05% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 70.35 | ↑195.27 | 0.7574 | 1.08 | **WIN** |
| 26 | AMZN | 04-01 15:10 | 04-01 16:55 | 192.27 | 192.76 | 73 | 14035.71 | +35.77 | +0.25% | 0.3R | 105m | market | timeout | trend | trend | neutral | 76.63 | ↑189.96 | 0.4285 | 1.03 | **WIN** |
| 27 | AMZN | 04-24 14:25 | 04-24 16:10 | 183.8 | 184.53 | 76 | 13968.8 | +55.48 | +0.4% | 0.36R | 105m | market | timeout | trend | trend | neutral | 72.9 | ↑182.09 | 0.3426 | 1.32 | **WIN** |
| 28 | AMZN | 05-07 14:10 | 05-07 14:55 | 189.7 | 188.88 | 74 | 14037.8 | -60.68 | -0.43% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 79.85 | ↑187.68 | 0.7723 | 2.79 | **LOSS** |
| 29 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.4 | 202.32 | 69 | 14034.6 | -74.52 | -0.53% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 30 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.9 | 204.6 | 68 | 13933.2 | -20.4 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 31 | AMZN | 06-06 13:35 | 06-06 14:25 | 212.19 | 210.93 | 66 | 14004.54 | -83.16 | -0.59% | 0.51R | 50m | market | early-reversal | breakout | breakout | neutral | 63.62 | ↓211.45 | -0.0705 | 2.2 | **LOSS** |
| 32 | AMZN | 06-30 13:35 | 06-30 13:55 | 223.54 | 222.27 | 62 | 13859.48 | -78.74 | -0.57% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 81.68 | ↓222.76 | 1.0565 | 1.55 | **LOSS** |
| 33 | AMZN | 08-06 14:40 | 08-06 16:25 | 216.51 | 218.54 | 64 | 13856.64 | +129.92 | +0.94% | 1.34R | 105m | market | timeout | trend | trend | neutral | 78.64 | ↑214.9 | 0.5168 | 1.27 | **WIN** |
| 34 | AMZN | 08-22 14:10 | 08-22 15:55 | 225.23 | 226.68 | 62 | 13964.26 | +89.9 | +0.64% | 0.72R | 105m | market | timeout | breakout | breakout | neutral | 75.23 | ↑222.99 | 0.5119 | 1.94 | **WIN** |
| 35 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.38 | 232.33 | 60 | 13882.8 | +57 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 36 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.46 | 236.54 | 59 | 13951.14 | +4.72 | +0.03% | 0.04R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 37 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.5 | 232.75 | 60 | 14010 | -45 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 38 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.18 | 234.28 | 59 | 13875.62 | -53.1 | -0.38% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 39 | AMZN | 11-03 14:30 | 11-03 14:50 | 258.44 | 254.79 | 54 | 13955.76 | -197.1 | -1.41% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 76.99 | ↓257.17 | 2.7097 | 5.92 | **LOSS** |
| 40 | AMZN | 12-01 14:30 | 12-01 14:50 | 234.91 | 233.9 | 59 | 13859.69 | -59.59 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓234.07 | 0.3701 | 2.96 | **LOSS** |
| 41 | AMZN | 12-17 14:30 | 12-17 14:50 | 224.62 | 223.43 | 62 | 13926.44 | -73.78 | -0.53% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↓224.55 | 0.3606 | 1.62 | **LOSS** |
| 42 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.62 | 241.94 | 57 | 13772.34 | +18.24 | +0.13% | 0.15R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 43 | AMZN | 02-20 14:30 | 02-20 14:50 | 206.49 | 205.78 | 67 | 13834.83 | -47.57 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 79.64 | ↓205.54 | 0.2565 | 2.14 | **LOSS** |
| 44 | AMZN | 03-05 14:30 | 03-05 15:05 | 218.97 | 218 | 63 | 13795.11 | -61.11 | -0.44% | 0.63R | 35m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 45 | AMZN | 03-30 15:00 | 03-30 15:55 | 203.4 | 203.21 | 68 | 13831.2 | -12.92 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 76.66 | ↑201.58 | 0.6445 | 1.46 | **LOSS** |
| 46 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.94 | 231.06 | 61 | 13904.34 | +190.32 | +1.37% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 47 | AMZN | 04-10 14:15 | 04-10 14:40 | 239.75 | 238.81 | 58 | 13905.5 | -54.52 | -0.39% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.96 | ↑237.96 | 1.945 | 1.08 | **LOSS** |
| 48 | AMZN | 04-23 14:35 | 04-23 15:50 | 257.01 | 256.56 | 54 | 13878.54 | -24.3 | -0.18% | 0.21R | 75m | market | stagnation | trend | trend | neutral | 66.63 | ↑255.44 | 0.4717 | 1.03 | **LOSS** |

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

- ⚠️ **Profit factor 0.98 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.66R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:44.790Z*
