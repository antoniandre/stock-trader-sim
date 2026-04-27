# Bot Trade Report — 40 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:37:54.897Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $43.27 (+0.04%) over 40 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 40 |
| Win rate | 35% (14W / 26L) |
| Net P&L | $+43.27 (+0.04%) |
| Gross profit | $1425.75 |
| Gross loss | $1382.48 |
| Profit factor | 1.03 |
| Avg win | $101.84 |
| Avg loss | $53.17 |
| Payoff ratio | 1.92:1 |
| Expectancy | $+1.08 / trade |
| Max drawdown | 0.41% |
| Sharpe ratio (ann.) | 0.2 |
| Trades / active day | 1.05 |
| Avg confidence | 99.68% |
| Avg trade duration | 65 min |
| Avg risk ratio | 0.59R |
| Starting equity | $100,000 |
| Ending equity | $100,043.27 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 28.57% | $-201.7 | $-28.81 |
| Mid  10:30–11:30 | 33 | 36.36% | $+244.97 | $7.42 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSM | 40 | 14 | 35% | $+43.27 | $+1.08 | 1.03 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 14 | 4 | 28.57% | $-166.45 | $-11.89 |
| trend | 26 | 10 | 38.46% | $+209.72 | $+8.07 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 38 | 13 | 34.21% | $+78.29 | $+2.06 |
| noisyHighBeta | 2 | 1 | 50% | $-35.02 | $-17.51 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 23 | 1.32 | $+10.68 | 15 | 0.69 | $-11.16 | 0.31% | 0.46 | watch |
| Symbol | TSM | 24 | 1.39 | $+12.4 | 16 | 0.59 | $-15.9 | 0.38% | 0.41 | watch |
| Time slot | Mid 10:30-11:30 | 20 | 1.92 | $+24.15 | 13 | 0.54 | $-18.31 | 0.36% | 0.38 | watch |
| Setup | trend | 17 | 3.35 | $+31.73 | 9 | 0.21 | $-36.63 | 0.33% | 0.14 | watch |
| Setup | breakout | 7 | 0.55 | $-34.54 | 7 | 1.37 | $+10.76 | 0.16% | 0.92 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-59.58 | 0.96 |
| +3 bps/side | $-265.32 | 0.83 |
| +5 bps/side | $-471.07 | 0.73 |
| +10 bps/side | $-985.37 | 0.53 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 12 |
| stagnation | 7 |
| breakeven-stop | 3 |
| trim-profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSM | 05-08 13:45 | 05-08 14:35 | 143.27 | 142.92 | 97 | 13897.19 | -33.95 | -0.24% | 0.34R | 50m | market | stagnation | breakout | breakout | neutral | 79.73 | ↓142.04 | 0.1438 | 2.09 | **LOSS** |
| 2 | TSM | 06-05 15:10 | 06-05 16:00 | 163.11 | 162.97 | 85 | 13864.35 | -11.9 | -0.09% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 75.81 | ↑161.1 | 2.6345 | 1.01 | **LOSS** |
| 3 | TSM | 06-10 15:05 | 06-10 16:10 | 168.18 | 168.14 | 83 | 13958.94 | -3.32 | -0.02% | 0.03R | 65m | market | breakeven-stop | trend | trend | neutral | 79.69 | ↑166.23 | 1.173 | 1.14 | **LOSS** |
| 4 | TSM | 06-25 14:00 | 06-25 14:40 | 170.86 | 169.89 | 81 | 13839.66 | -78.57 | -0.57% | 0.58R | 40m | market | early-reversal | trend | trend | neutral | 74.22 | ↓170.02 | 0.7102 | 1.33 | **LOSS** |
| 5 | TSM | 07-03 15:15 | 07-03 15:35 | 181.49 | 180.84 | 77 | 13974.73 | -50.05 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 74.94 | ↑179.41 | 0.9855 | 1.09 | **LOSS** |
| 6 | TSM | 07-23 15:10 | 07-23 16:30 | 170.5 | 170.35 | 81 | 13810.5 | -12.15 | -0.09% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 70.24 | ↑169.1 | 0.0765 | 1.74 | **LOSS** |
| 7 | TSM | 08-06 14:05 | 08-06 15:50 | 153.23 | 154.36 | 46 | 7048.58 | +51.98 | +0.74% | 0.37R | 105m | market | timeout | breakout | trend | noisyHighBeta | 74.35 | ↑150.8 | 1.3555 | 1.07 | **WIN** |
| 8 | TSM | 08-23 14:00 | 08-23 14:45 | 172.03 | 170.49 | 81 | 13934.43 | -124.74 | -0.9% | 0.76R | 45m | market | early-reversal | breakout | breakout | neutral | 83.6 | ↓169.37 | 0.7171 | 1.29 | **LOSS** |
| 9 | TSM | 10-03 14:45 | 10-03 15:55 | 179.87 | 179.77 | 77 | 13849.99 | -7.7 | -0.06% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 66.25 | ↑178.7 | 0.9317 | 1.22 | **LOSS** |
| 10 | TSM | 10-23 14:40 | 10-23 15:30 | 201.1 | 201 | 69 | 13875.9 | -6.9 | -0.05% | 0.05R | 50m | market | breakeven-stop | trend | trend | neutral | 68.46 | ↑198.7 | 0.2717 | 2.09 | **LOSS** |
| 11 | TSM | 11-07 14:55 | 11-07 16:40 | 200.02 | 200.99 | 69 | 13801.38 | +66.93 | +0.48% | 0.38R | 105m | market | timeout | trend | trend | neutral | 78.58 | ↑198.58 | 1.5655 | 1.02 | **WIN** |
| 12 | TSM | 11-14 14:55 | 11-14 15:40 | 191.05 | 190.24 | 73 | 13946.65 | -59.13 | -0.42% | 0.44R | 45m | market | early-reversal | trend | trend | neutral | 76.35 | ↓189.95 | 0.6929 | 2.15 | **LOSS** |
| 13 | TSM | 12-04 15:10 | 12-04 16:45 | 199.98 | 201.48 | 34 | 13798.62 | +51 | +0.75% | 0.88R | 95m | market | trim-profit-target | trend | trend | neutral | 67.48 | ↑199.33 | 0.6336 | 1.09 | **WIN** |
| 14 | TSM | 12-04 15:10 | 12-04 16:55 | 199.98 | 201.38 | 35 | 13798.62 | +49 | +0.7% | 0.82R | 105m | market | timeout | trend | trend | neutral | 67.48 | ↑199.33 | 0.6336 | 1.09 | **WIN** |
| 15 | TSM | 12-11 14:45 | 12-11 15:35 | 194.78 | 193.86 | 71 | 13829.38 | -65.32 | -0.47% | 0.64R | 50m | market | early-reversal | breakout | breakout | neutral | 81.02 | ↓194.24 | 0.522 | 1.35 | **LOSS** |
| 16 | TSM | 12-16 14:45 | 12-16 15:10 | 204.95 | 202.38 | 68 | 13936.6 | -174.76 | -1.25% | 1.19R | 25m | market | early-reversal | breakout | breakout | neutral | 74.09 | ↓204.51 | 0.9766 | 1.48 | **LOSS** |
| 17 | TSM | 01-02 14:40 | 01-02 16:25 | 200.58 | 202.62 | 69 | 13840.02 | +140.76 | +1.02% | 1.13R | 105m | market | timeout | breakout | breakout | neutral | 67.83 | ↑199.02 | 0.3484 | 2.52 | **WIN** |
| 18 | TSM | 01-06 15:10 | 01-06 16:55 | 218.51 | 219.47 | 63 | 13766.13 | +60.48 | +0.44% | 0.22R | 105m | market | timeout | trend | trend | neutral | 79.41 | ↑218.39 | 2.651 | 1.2 | **WIN** |
| 19 | TSM | 01-15 14:35 | 01-15 16:20 | 203 | 205.19 | 68 | 13804 | +148.92 | +1.08% | 0.94R | 105m | market | timeout | breakout | breakout | neutral | 63.79 | ↑201.41 | 0.3458 | 2.55 | **WIN** |
| 20 | TSM | 01-22 15:00 | 01-22 16:45 | 222.25 | 224.17 | 62 | 13779.5 | +119.04 | +0.86% | 0.63R | 105m | market | timeout | trend | trend | neutral | 62.31 | ↑221.41 | 0.5388 | 1.4 | **WIN** |
| 21 | TSM | 01-31 14:50 | 01-31 16:30 | 210.5 | 214.14 | 33 | 13893 | +120.12 | +1.73% | 1.66R | 100m | market | trim-profit-target | trend | trend | neutral | 62.33 | ↑209.29 | 0.4434 | 1.05 | **WIN** |
| 22 | TSM | 01-31 14:50 | 01-31 16:35 | 210.5 | 213.54 | 33 | 13893 | +100.32 | +1.44% | 1.38R | 105m | market | timeout | trend | trend | neutral | 62.33 | ↑209.29 | 0.4434 | 1.05 | **WIN** |
| 23 | TSM | 02-05 14:55 | 02-05 16:40 | 206.45 | 208.66 | 68 | 14038.6 | +150.28 | +1.07% | 1.51R | 105m | market | timeout | trend | trend | neutral | 74.89 | ↑205.4 | 0.415 | 1.31 | **WIN** |
| 24 | TSM | 02-10 14:30 | 02-10 14:50 | 209.63 | 207.65 | 67 | 14045.21 | -132.66 | -0.94% | 1.21R | 20m | market | early-reversal | breakout | breakout | neutral | 69.7 | ↓209.12 | 0.195 | 5.04 | **LOSS** |
| 25 | TSM | 02-26 14:35 | 02-26 16:20 | 193.37 | 195.08 | 72 | 13922.64 | +123.12 | +0.88% | 0.88R | 105m | market | timeout | breakout | breakout | neutral | 81.03 | ↑192.61 | 0.4355 | 1.17 | **WIN** |
| 26 | TSM | 04-08 14:25 | 04-08 14:45 | 152.27 | 150.53 | 50 | 7613.5 | -87 | -1.14% | 0.57R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.18 | ↓151.12 | 2.0861 | 1.57 | **LOSS** |
| 27 | TSM | 06-05 15:20 | 06-05 16:05 | 205.75 | 204.75 | 68 | 13991 | -68 | -0.49% | 0.7R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 28 | TSM | 06-27 14:05 | 06-27 15:50 | 226.78 | 228.18 | 61 | 13833.58 | +85.4 | +0.62% | 0.89R | 105m | market | timeout | trend | trend | neutral | 79.84 | ↑225.67 | 0.5609 | 1.03 | **WIN** |
| 29 | TSM | 07-25 14:00 | 07-25 14:50 | 244.4 | 244.14 | 57 | 13930.8 | -14.82 | -0.11% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 67.09 | ↑242.6 | 0.4724 | 1.57 | **LOSS** |
| 30 | TSM | 09-03 14:40 | 09-03 15:15 | 231.94 | 231.21 | 60 | 13916.4 | -43.8 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 79.01 | ↑230.25 | 0.9671 | 1.22 | **LOSS** |
| 31 | TSM | 10-03 14:45 | 10-03 15:20 | 295.49 | 294.56 | 47 | 13888.03 | -43.71 | -0.31% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 63.62 | ↑292.97 | 1.7178 | 1.08 | **LOSS** |
| 32 | TSM | 10-20 14:55 | 10-20 15:15 | 303.65 | 302.72 | 46 | 13967.9 | -42.78 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 70.38 | ↑301.77 | 1.5315 | 1.05 | **LOSS** |
| 33 | TSM | 11-19 14:50 | 11-19 16:00 | 281.74 | 281.52 | 49 | 13805.26 | -10.78 | -0.08% | 0.09R | 70m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓279.69 | 0.3004 | 1.73 | **LOSS** |
| 34 | TSM | 12-02 14:35 | 12-02 15:25 | 292.41 | 291.7 | 47 | 13743.27 | -33.37 | -0.24% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 69.75 | ↓291.8 | 0.3957 | 6.95 | **LOSS** |
| 35 | TSM | 01-15 14:50 | 01-15 16:35 | 346.2 | 350.16 | 40 | 13848 | +158.4 | +1.14% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 81.51 | ↑342.43 | 5.1387 | 1.6 | **WIN** |
| 36 | TSM | 01-16 14:30 | 01-16 14:50 | 348.85 | 347.26 | 40 | 13954 | -63.6 | -0.46% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 72.94 | ↓348.22 | 0.1862 | 2.97 | **LOSS** |
| 37 | TSM | 02-06 14:40 | 02-06 15:50 | 344.91 | 344.4 | 40 | 13796.4 | -20.4 | -0.15% | 0.09R | 70m | market | stagnation | breakout | breakout | neutral | 78.24 | ↑341.86 | 3.0464 | 2.15 | **LOSS** |
| 38 | TSM | 02-23 14:50 | 02-23 15:40 | 373.07 | 370.96 | 37 | 13803.59 | -78.07 | -0.57% | 0.57R | 50m | market | early-reversal | breakout | breakout | neutral | 57.09 | ↓370.54 | -0.1838 | 3.07 | **LOSS** |
| 39 | TSM | 03-24 15:20 | 03-24 16:00 | 344.69 | 342.94 | 40 | 13787.6 | -70 | -0.51% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 67.07 | ↑340.33 | 1.6085 | 1.45 | **LOSS** |
| 40 | TSM | 04-23 15:00 | 04-23 15:20 | 388.33 | 387.08 | 36 | 13979.88 | -45 | -0.32% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 58.02 | ↑385.5 | 0.6401 | 1.27 | **LOSS** |

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

- ⚠️ **Profit factor 1.03 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.59R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:37:54.897Z*
