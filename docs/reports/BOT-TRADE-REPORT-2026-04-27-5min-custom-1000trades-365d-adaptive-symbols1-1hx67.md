# Bot Trade Report — 40 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:26:20.021Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $400.72 (-0.4%) over 40 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 40 |
| Win rate | 32.5% (13W / 27L) |
| Net P&L | $-400.72 (-0.4%) |
| Gross profit | $2095.49 |
| Gross loss | $2496.21 |
| Profit factor | 0.84 |
| Avg win | $161.19 |
| Avg loss | $92.45 |
| Payoff ratio | 1.74:1 |
| Expectancy | $-10.02 / trade |
| Max drawdown | 1.3% |
| Sharpe ratio (ann.) | -1.06 |
| Trades / active day | 1.08 |
| Avg confidence | 97.78% |
| Avg trade duration | 51 min |
| Avg risk ratio | 0.8R |
| Starting equity | $100,000 |
| Ending equity | $99,599.28 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 12.5% | $-359.79 | $-44.97 |
| Mid  10:30–11:30 | 7 | 57.14% | $-13.86 | $-1.98 |
| Noon 11:30–13:00 | 13 | 53.85% | $+514.72 | $39.59 |
| PM   13:00–14:00 | 12 | 8.33% | $-541.79 | $-45.15 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| RIVN | 40 | 13 | 32.5% | $-400.72 | $-10.02 | 0.84 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 11 | 3 | 27.27% | $-442.28 | $-40.21 |
| trend | 29 | 10 | 34.48% | $+41.56 | $+1.43 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 18 | 7 | 38.89% | $+376.59 | $+20.92 |
| neutral | 22 | 6 | 27.27% | $-777.31 | $-35.33 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Noon 11:30-13:00 | 9 | 1.99 | $+45.76 | 4 | 1.55 | $+25.72 | 0.19% | 1.32 | promote |
| Behavior | noisyHighBeta | 8 | 4.5 | $+53.25 | 10 | 0.87 | $-4.94 | 0.34% | 0.71 | watch |
| Setup | trend | 16 | 1.92 | $+31.69 | 13 | 0.41 | $-35.81 | 0.75% | 0.34 | watch |
| Symbol | RIVN | 24 | 1.54 | $+26.02 | 16 | 0.24 | $-64.07 | 1.31% | 0.2 | watch |
| Time slot | PM 13:00-14:00 | 5 | 0.76 | $-10.33 | 7 | 0 | $-70.02 | 0.49% | 0 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.75 | $-18.48 | 2 | 0 | $-124.45 | 0.25% | 0 | reject |
| Behavior | neutral | 16 | 1.19 | $+12.4 | 6 | 0 | $-162.63 | 0.98% | 0 | reject |
| Setup | breakout | 8 | 1.2 | $+14.67 | 3 | 0 | $-186.55 | 0.56% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-489.27 | 0.81 |
| +3 bps/side | $-666.39 | 0.75 |
| +5 bps/side | $-843.49 | 0.7 |
| +10 bps/side | $-1286.3 | 0.59 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 7 |
| stop-loss | 5 |
| breakeven-stop | 4 |
| stagnation | 3 |
| profit-target | 3 |
| trailing-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | RIVN | 04-30 15:45 | 04-30 16:05 | 13.34 | 13.13 | 1049 | 13993.66 | -220.29 | -1.57% | 1.15R | 20m | market | stop-loss | breakout | breakout | neutral | 90.7 | ↑13.01 | 0.0536 | 1.7 | **LOSS** |
| 2 | RIVN | 04-30 17:30 | 04-30 19:15 | 13.32 | 13.48 | 1048 | 13959.36 | +167.68 | +1.2% | 1.3R | 105m | market | timeout | trend | trend | neutral | 74.7 | ↑13.09 | 0.0405 | 1.16 | **WIN** |
| 3 | RIVN | 05-01 14:25 | 05-01 15:20 | 14.07 | 14.06 | 546 | 7682.22 | -5.46 | -0.07% | 0.04R | 55m | market | stagnation | breakout | trend | noisyHighBeta | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 4 | RIVN | 05-08 15:40 | 05-08 17:00 | 13.34 | 13.74 | 966 | 12886.44 | +386.4 | +3% | 1.88R | 80m | market | profit-target | breakout | breakout | neutral | 53.57 | ↑13.09 | 0.0816 | 1.6 | **WIN** |
| 5 | RIVN | 05-09 14:50 | 05-09 15:10 | 14.27 | 14.38 | 499 | 7120.73 | +54.89 | +0.77% | 0.42R | 20m | market | trailing-stop | breakout | trend | noisyHighBeta | 76.29 | ↑14.01 | 0.0875 | 1.36 | **WIN** |
| 6 | RIVN | 05-14 16:35 | 05-14 18:20 | 14.74 | 14.97 | 524 | 7723.76 | +120.52 | +1.56% | 1.59R | 105m | market | timeout | trend | trend | noisyHighBeta | 63.73 | ↑14.48 | 0.0668 | 1.11 | **WIN** |
| 7 | RIVN | 05-15 15:40 | 05-15 17:25 | 15.33 | 15.31 | 504 | 7726.32 | -10.08 | -0.13% | 0.11R | 105m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.95 | ↑15.1 | 0.0711 | 1.98 | **LOSS** |
| 8 | RIVN | 05-19 16:10 | 05-19 17:55 | 15.96 | 16.23 | 881 | 14060.76 | +237.87 | +1.69% | 1.84R | 105m | market | timeout | trend | trend | neutral | 70.97 | ↑15.61 | 0.0869 | 2.2 | **WIN** |
| 9 | RIVN | 06-03 16:15 | 06-03 17:25 | 14.62 | 14.6 | 964 | 14093.68 | -19.28 | -0.14% | 0.18R | 70m | market | stagnation | trend | trend | neutral | 66.27 | ↑14.51 | 0.0195 | 3.39 | **LOSS** |
| 10 | RIVN | 06-05 15:55 | 06-05 16:05 | 14.28 | 14.11 | 987 | 14094.36 | -167.79 | -1.19% | 1.35R | 10m | market | stop-loss | trend | trend | neutral | 79 | ↑13.99 | 0.0763 | 2.11 | **LOSS** |
| 11 | RIVN | 06-11 13:30 | 06-11 13:55 | 14.65 | 14.53 | 892 | 13067.8 | -107.04 | -0.82% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 65.74 | ↓14.67 | 0.0171 | 1.11 | **LOSS** |
| 12 | RIVN | 06-23 17:35 | 06-23 17:55 | 13.88 | 13.82 | 1013 | 14060.44 | -60.78 | -0.43% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 73.11 | ↑13.75 | -0.0252 | 1.3 | **LOSS** |
| 13 | RIVN | 07-08 14:30 | 07-08 16:15 | 13.06 | 13.16 | 1076 | 14052.56 | +107.6 | +0.77% | 0.62R | 105m | market | timeout | trend | trend | neutral | 78.79 | ↑12.93 | 0.0926 | 1.14 | **WIN** |
| 14 | RIVN | 07-18 14:20 | 07-18 14:40 | 13.17 | 13.06 | 1068 | 14065.56 | -117.48 | -0.84% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 61.66 | ↑13.03 | 0.0348 | 2.41 | **LOSS** |
| 15 | RIVN | 08-07 13:55 | 08-07 14:20 | 12.15 | 12 | 1156 | 14045.4 | -173.4 | -1.23% | 0.81R | 25m | market | early-reversal | breakout | breakout | neutral | 81.56 | ↓11.98 | 0.087 | 1.28 | **LOSS** |
| 16 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.52 | 12.81 | 1120 | 14022.4 | +324.8 | +2.32% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 17 | RIVN | 08-22 16:40 | 08-22 17:25 | 12.85 | 12.85 | 1095 | 14070.75 | +0 | +0% | 0R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.6 | ↑12.6 | 0.0581 | 1.23 | **WIN** |
| 18 | RIVN | 08-28 17:35 | 08-28 17:55 | 13.44 | 13.39 | 1047 | 14071.68 | -52.35 | -0.37% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 75 | ↑13.24 | 0.0614 | 4.12 | **LOSS** |
| 19 | RIVN | 09-10 17:35 | 09-10 18:45 | 14.11 | 14.07 | 548 | 7732.28 | -21.92 | -0.28% | 0.35R | 70m | market | breakeven-stop | trend | trend | noisyHighBeta | 79.07 | ↑13.88 | 0.0588 | 1.2 | **LOSS** |
| 20 | RIVN | 09-15 17:40 | 09-15 18:00 | 13.76 | 13.61 | 562 | 7733.12 | -84.3 | -1.09% | 1.3R | 20m | market | stop-loss | trend | trend | noisyHighBeta | 71.76 | ↓13.6 | 0.0304 | 1.37 | **LOSS** |
| 21 | RIVN | 09-16 16:20 | 09-16 18:05 | 14.32 | 14.49 | 497 | 7117.04 | +84.49 | +1.19% | 1.03R | 105m | market | timeout | breakout | trend | noisyHighBeta | 79.84 | ↑14.01 | 0.0768 | 2.73 | **WIN** |
| 22 | RIVN | 10-13 14:30 | 10-13 14:50 | 13.09 | 13.02 | 1074 | 14058.66 | -75.18 | -0.53% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 55.22 | ↑12.96 | 0.0376 | 4.35 | **LOSS** |
| 23 | RIVN | 10-23 14:20 | 10-23 15:10 | 13.04 | 13.01 | 1077 | 14044.08 | -32.31 | -0.23% | 0.14R | 50m | market | stagnation | trend | breakout | neutral | 55.73 | ↑12.89 | 0.0181 | 1.21 | **LOSS** |
| 24 | RIVN | 11-10 15:05 | 11-10 16:45 | 15.29 | 15.86 | 505 | 7721.45 | +287.85 | +3.73% | 1.87R | 100m | market | profit-target | trend | trend | noisyHighBeta | 48.26 | ↑15.22 | 0.0622 | 1.09 | **WIN** |
| 25 | RIVN | 11-10 16:50 | 11-10 17:50 | 15.9 | 16.44 | 487 | 7743.3 | +262.98 | +3.4% | 1.76R | 60m | market | profit-target | breakout | trend | noisyHighBeta | 64.55 | ↑15.48 | 0.1513 | 1.2 | **WIN** |
| 26 | RIVN | 11-18 16:05 | 11-18 17:25 | 14.78 | 14.83 | 525 | 7759.5 | +26.25 | +0.34% | 0.18R | 80m | market | trailing-stop | trend | trend | noisyHighBeta | 59.12 | ↑14.63 | 0.0128 | 1.47 | **WIN** |
| 27 | RIVN | 11-21 17:45 | 11-21 18:05 | 14.92 | 14.83 | 520 | 7758.4 | -46.8 | -0.6% | 0.4R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.07 | ↑14.41 | 0.1911 | 1.35 | **LOSS** |
| 28 | RIVN | 11-25 17:30 | 11-25 18:10 | 15.49 | 15.41 | 501 | 7760.49 | -40.08 | -0.52% | 0.53R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.25 | ↑15.26 | 0.0589 | 1.22 | **LOSS** |
| 29 | RIVN | 11-28 14:45 | 11-28 16:30 | 16.86 | 16.94 | 427 | 7199.22 | +34.16 | +0.47% | 0.27R | 105m | market | timeout | breakout | trend | noisyHighBeta | 68.26 | ↑16.69 | 0.0984 | 1.05 | **WIN** |
| 30 | RIVN | 12-01 17:55 | 12-01 19:15 | 17.54 | 17.47 | 442 | 7752.68 | -30.94 | -0.4% | 0.51R | 80m | market | breakeven-stop | trend | trend | noisyHighBeta | 71.13 | ↑17.27 | 0.0633 | 1.4 | **LOSS** |
| 31 | RIVN | 12-02 17:25 | 12-02 17:45 | 17.58 | 17.47 | 407 | 7155.06 | -44.77 | -0.63% | 0.47R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 75 | ↑17.25 | 0.0773 | 1.34 | **LOSS** |
| 32 | RIVN | 12-15 17:40 | 12-15 18:20 | 19.27 | 19.09 | 402 | 7746.54 | -72.36 | -0.93% | 0.59R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 67.63 | ↑18.87 | 0.082 | 1.07 | **LOSS** |
| 33 | RIVN | 01-06 17:50 | 01-06 18:00 | 19.79 | 19.52 | 391 | 7737.89 | -105.57 | -1.36% | 1.27R | 10m | market | stop-loss | trend | trend | noisyHighBeta | 76.58 | ↑19.48 | 0.0998 | 1.26 | **LOSS** |
| 34 | RIVN | 01-21 14:35 | 01-21 14:55 | 16.35 | 16.17 | 861 | 14077.35 | -154.98 | -1.1% | 1.08R | 20m | market | early-reversal | breakout | breakout | neutral | 80.65 | ↓16.31 | 0.0604 | 1.29 | **LOSS** |
| 35 | RIVN | 02-04 15:55 | 02-04 16:15 | 14.59 | 14.43 | 963 | 14050.17 | -154.08 | -1.1% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 54.3 | ↓14.47 | 0.0956 | 1.38 | **LOSS** |
| 36 | RIVN | 02-25 15:00 | 02-25 15:20 | 15.7 | 15.4 | 894 | 14035.8 | -268.2 | -1.91% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 73.3 | ↓15.56 | 0.0762 | 2.59 | **LOSS** |
| 37 | RIVN | 03-09 17:10 | 03-09 17:25 | 15.9 | 15.73 | 880 | 13992 | -149.6 | -1.07% | 1.43R | 15m | market | stop-loss | trend | trend | neutral | 76.62 | ↑15.56 | 0.0847 | 1.01 | **LOSS** |
| 38 | RIVN | 03-25 13:40 | 03-25 14:00 | 16.39 | 16.23 | 853 | 13980.67 | -136.48 | -0.98% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 77.2 | ↓16.37 | 0.2113 | 1.94 | **LOSS** |
| 39 | RIVN | 04-09 16:05 | 04-09 16:30 | 15.36 | 15.29 | 461 | 7080.96 | -32.27 | -0.46% | 0.47R | 25m | market | early-reversal | breakout | trend | noisyHighBeta | 70.25 | ↑15.1 | 0.0627 | 1.04 | **LOSS** |
| 40 | RIVN | 04-21 14:05 | 04-21 14:55 | 17.38 | 17.24 | 803 | 13956.14 | -112.42 | -0.81% | 0.57R | 50m | market | early-reversal | trend | trend | neutral | 79.5 | ↓17.24 | 0.1028 | 4.4 | **LOSS** |

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

- ⚠️ **Profit factor 0.84 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.8R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:26:20.021Z*
