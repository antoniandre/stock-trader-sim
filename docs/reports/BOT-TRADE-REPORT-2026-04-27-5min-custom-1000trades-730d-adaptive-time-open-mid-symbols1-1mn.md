# Bot Trade Report — 48 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:39.448Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $196.38 (+0.2%) over 48 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 48 |
| Win rate | 37.5% (18W / 30L) |
| Net P&L | $+196.38 (+0.2%) |
| Gross profit | $2281.59 |
| Gross loss | $2085.21 |
| Profit factor | 1.09 |
| Avg win | $126.76 |
| Avg loss | $69.51 |
| Payoff ratio | 1.82:1 |
| Expectancy | $+4.09 / trade |
| Max drawdown | 0.83% |
| Sharpe ratio (ann.) | 0.51 |
| Trades / active day | 1.07 |
| Avg confidence | 98.52% |
| Avg trade duration | 53 min |
| Avg risk ratio | 0.9R |
| Starting equity | $100,000 |
| Ending equity | $100,196.38 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 30.77% | $+468.88 | $36.07 |
| Mid  10:30–11:30 | 35 | 40% | $-272.5 | $-7.79 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| BA | 48 | 18 | 37.5% | $+196.38 | $+4.09 | 1.09 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 33 | 13 | 39.39% | $+42.37 | $+1.28 |
| breakout | 15 | 5 | 33.33% | $+154.01 | $+10.27 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 47 | 18 | 38.3% | $+214.83 | $+4.57 |
| noisyHighBeta | 1 | 0 | 0% | $-18.45 | $-18.45 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 7 | 1.78 | $+24.59 | 6 | 2.46 | $+49.46 | 0.14% | 1.82 | promote |
| Setup | breakout | 11 | 1.58 | $+25.45 | 4 | 0.03 | $-31.49 | 0.13% | 0 | watch |
| Setup | trend | 17 | 0.88 | $-4.25 | 16 | 1.13 | $+7.17 | 0.71% | 0.9 | reject |
| Symbol | BA | 28 | 1.19 | $+7.42 | 20 | 0.99 | $-0.56 | 0.84% | 0.76 | reject |
| Behavior | neutral | 27 | 1.21 | $+8.38 | 20 | 0.99 | $-0.56 | 0.84% | 0.76 | reject |
| Time slot | Mid 10:30-11:30 | 21 | 1.04 | $+1.69 | 14 | 0.61 | $-22 | 0.78% | 0.45 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+72.83 | 1.03 |
| +3 bps/side | $-174.21 | 0.93 |
| +5 bps/side | $-421.29 | 0.83 |
| +10 bps/side | $-1038.97 | 0.65 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 19 |
| timeout | 9 |
| stagnation | 8 |
| profit-target | 4 |
| breakeven-stop | 3 |
| trim-profit-target | 3 |
| stop-loss | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | BA | 05-09 14:15 | 05-09 15:05 | 181.34 | 180.94 | 77 | 13963.18 | -30.8 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 77.01 | ↑180.36 | 0.3339 | 1.25 | **LOSS** |
| 2 | BA | 05-20 14:05 | 05-20 15:50 | 187.43 | 188.32 | 74 | 13869.82 | +65.86 | +0.47% | 0.67R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑186.11 | 0.5791 | 2.35 | **WIN** |
| 3 | BA | 06-17 15:20 | 06-17 15:45 | 179.43 | 178.73 | 78 | 13995.54 | -54.6 | -0.39% | 0.56R | 25m | market | early-reversal | trend | trend | neutral | 77.34 | ↑177.61 | 0.4497 | 1.89 | **LOSS** |
| 4 | BA | 06-24 14:40 | 06-24 15:25 | 179.94 | 179.16 | 77 | 13855.38 | -60.06 | -0.43% | 0.54R | 45m | market | early-reversal | trend | trend | neutral | 71.39 | ↑178.48 | 0.7501 | 2.82 | **LOSS** |
| 5 | BA | 07-08 14:45 | 07-08 15:05 | 191.38 | 190.67 | 73 | 13970.74 | -51.83 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 67.61 | ↑189.95 | 1.6959 | 1.07 | **LOSS** |
| 6 | BA | 07-23 14:20 | 07-23 15:50 | 181.2 | 185.46 | 77 | 13952.4 | +328.02 | +2.35% | 3.36R | 90m | market | profit-target | trend | trend | neutral | 77.08 | ↑180.44 | 0.7222 | 1.14 | **WIN** |
| 7 | BA | 08-13 15:15 | 08-13 15:55 | 166.11 | 166.18 | 84 | 13953.24 | +5.88 | +0.04% | 0.06R | 40m | market | breakeven-stop | breakout | breakout | neutral | 82.65 | ↑163.98 | 0.1657 | 2.12 | **WIN** |
| 8 | BA | 08-15 15:15 | 08-15 15:35 | 173.3 | 172.65 | 80 | 13864 | -52 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.07 | ↑172.04 | 0.9815 | 2.33 | **LOSS** |
| 9 | BA | 08-16 14:10 | 08-16 14:30 | 178.81 | 178.13 | 78 | 13947.18 | -53.04 | -0.38% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 76.57 | ↑177.73 | 0.9905 | 1.46 | **LOSS** |
| 10 | BA | 08-29 15:20 | 08-29 16:30 | 173.12 | 174.84 | 40 | 13849.6 | +68.8 | +0.99% | 1.41R | 70m | market | trim-profit-target | trend | trend | neutral | 73.52 | ↑171.68 | 0.3524 | 1.25 | **WIN** |
| 11 | BA | 08-29 15:20 | 08-29 17:05 | 173.12 | 173.89 | 40 | 13849.6 | +30.8 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 73.52 | ↑171.68 | 0.3524 | 1.25 | **WIN** |
| 12 | BA | 09-13 14:40 | 09-13 16:00 | 161.69 | 160.44 | 86 | 13905.34 | -107.5 | -0.77% | 0.63R | 80m | market | early-reversal | breakout | breakout | neutral | 57.07 | ↓159.78 | -0.6947 | 1.29 | **LOSS** |
| 13 | BA | 10-01 15:00 | 10-01 15:20 | 154.27 | 153.48 | 90 | 13884.3 | -71.1 | -0.51% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 69.43 | ↑152.14 | 0.4164 | 1.73 | **LOSS** |
| 14 | BA | 10-15 15:05 | 10-15 15:55 | 151.57 | 151.39 | 92 | 13944.44 | -16.56 | -0.12% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 67.19 | ↑150.01 | 0.5046 | 1.16 | **LOSS** |
| 15 | BA | 11-22 14:45 | 11-22 16:30 | 146.06 | 147.02 | 95 | 13875.7 | +91.2 | +0.66% | 0.89R | 105m | market | timeout | breakout | breakout | neutral | 82.61 | ↑144.74 | 0.3908 | 1.92 | **WIN** |
| 16 | BA | 11-29 15:15 | 11-29 16:10 | 155.33 | 156.48 | 42 | 13203.05 | +48.3 | +0.74% | 0.89R | 55m | market | trim-profit-target | trend | trend | neutral | 78.11 | ↑154.87 | 0.8356 | 1.35 | **WIN** |
| 17 | BA | 11-29 15:15 | 11-29 16:55 | 155.33 | 155.23 | 43 | 13203.05 | -4.3 | -0.06% | 0.07R | 100m | market | breakeven-stop | trend | trend | neutral | 78.11 | ↓154.87 | 0.8356 | 1.35 | **LOSS** |
| 18 | BA | 12-09 14:40 | 12-09 15:55 | 156.34 | 160.27 | 89 | 13914.26 | +349.77 | +2.51% | 3.26R | 75m | market | profit-target | breakout | breakout | neutral | 71.26 | ↑155.57 | 0.1577 | 1.61 | **WIN** |
| 19 | BA | 12-10 14:30 | 12-10 15:35 | 160.77 | 164.67 | 81 | 13022.37 | +315.9 | +2.43% | 2.51R | 65m | market | profit-target | breakout | breakout | neutral | 67.28 | ↑160.51 | -0.3697 | 3.91 | **WIN** |
| 20 | BA | 12-11 14:30 | 12-11 15:20 | 168.15 | 167.7 | 77 | 12947.55 | -34.65 | -0.27% | 0.24R | 50m | market | stagnation | breakout | breakout | neutral | 63.18 | ↓167.31 | 0.1878 | 1.65 | **LOSS** |
| 21 | BA | 12-17 14:40 | 12-17 15:10 | 175.7 | 174.38 | 73 | 12826.1 | -96.36 | -0.75% | 0.97R | 30m | market | early-reversal | breakout | breakout | neutral | 74.31 | ↓174.67 | 0.0763 | 1.8 | **LOSS** |
| 22 | BA | 01-17 14:35 | 01-17 15:25 | 171.21 | 170.86 | 82 | 14039.22 | -28.7 | -0.2% | 0.29R | 50m | market | stagnation | breakout | breakout | neutral | 74.84 | ↓170.42 | 0.1709 | 1.87 | **LOSS** |
| 23 | BA | 01-24 14:40 | 01-24 15:00 | 179.82 | 178.72 | 78 | 14025.96 | -85.8 | -0.61% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 67.31 | ↑177.8 | 0.1715 | 1.86 | **LOSS** |
| 24 | BA | 01-27 14:40 | 01-27 15:00 | 178.02 | 176.96 | 79 | 14063.58 | -83.74 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↓176.94 | 0.2054 | 1.24 | **LOSS** |
| 25 | BA | 02-24 14:40 | 02-24 14:50 | 179.43 | 177.79 | 78 | 13995.54 | -127.92 | -0.91% | 1.25R | 10m | market | stop-loss | trend | breakout | neutral | 77.07 | ↓178.58 | 0.4755 | 1.44 | **LOSS** |
| 26 | BA | 03-19 14:20 | 03-19 15:10 | 172.29 | 171.84 | 41 | 7063.89 | -18.45 | -0.26% | 0.13R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 71.08 | ↑170.41 | 2.8303 | 1.02 | **LOSS** |
| 27 | BA | 05-01 14:25 | 05-01 14:45 | 184.46 | 183.77 | 76 | 14018.96 | -52.44 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 28 | BA | 05-14 14:10 | 05-14 15:00 | 206.79 | 205.79 | 67 | 13854.93 | -67 | -0.48% | 0.33R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 29 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 68 | 13859.08 | +346.8 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 30 | BA | 06-09 14:45 | 06-09 16:30 | 214.81 | 216.26 | 65 | 13962.65 | +94.25 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 31 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 69 | 14063.58 | -61.41 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 32 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 69 | 13913.85 | -11.73 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 33 | BA | 07-02 15:10 | 07-02 16:55 | 212.25 | 212.56 | 66 | 14008.5 | +20.46 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 34 | BA | 07-23 15:05 | 07-23 16:30 | 231.62 | 233.85 | 30 | 13897.2 | +66.9 | +0.96% | 1.37R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 35 | BA | 07-23 15:05 | 07-23 16:50 | 231.62 | 233.86 | 30 | 13897.2 | +67.2 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 36 | BA | 08-12 14:10 | 08-12 14:30 | 231.06 | 229.93 | 61 | 14094.66 | -68.93 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 37 | BA | 10-06 14:10 | 10-06 15:55 | 218.49 | 220.89 | 64 | 13983.36 | +153.6 | +1.1% | 1.33R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 38 | BA | 11-03 14:30 | 11-03 16:15 | 202.63 | 204.84 | 69 | 13981.47 | +152.49 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 39 | BA | 12-08 14:30 | 12-08 16:15 | 204.21 | 205.25 | 69 | 14090.49 | +71.76 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 40 | BA | 12-12 14:30 | 12-12 14:50 | 203.31 | 202.42 | 69 | 14028.39 | -61.41 | -0.44% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 41 | BA | 12-16 14:50 | 12-16 15:10 | 208.63 | 207.81 | 67 | 13978.21 | -54.94 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 42 | BA | 01-06 15:20 | 01-06 15:40 | 231.31 | 229.57 | 61 | 14109.91 | -106.14 | -0.75% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 77.53 | ↓230.25 | 0.5498 | 1.27 | **LOSS** |
| 43 | BA | 01-09 14:35 | 01-09 15:35 | 231.46 | 231.24 | 60 | 13887.6 | -13.2 | -0.1% | 0.14R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 44 | BA | 01-22 14:30 | 01-22 14:55 | 252.81 | 251.66 | 55 | 13904.55 | -63.25 | -0.45% | 0.64R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 45 | BA | 02-03 14:30 | 02-03 14:50 | 237.28 | 235.31 | 59 | 13999.52 | -116.23 | -0.83% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 46 | BA | 02-24 14:40 | 02-24 15:30 | 233.05 | 233.11 | 60 | 13983 | +3.6 | +0.03% | 0.04R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 47 | BA | 03-10 14:55 | 03-10 15:00 | 225.81 | 219.85 | 62 | 14000.22 | -369.52 | -2.64% | 3.72R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 48 | BA | 03-25 14:00 | 03-25 14:20 | 200.31 | 199.43 | 70 | 14021.7 | -61.6 | -0.44% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |

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

- ⚠️ **Profit factor 1.09 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.9R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:39.448Z*
