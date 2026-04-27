# Bot Trade Report — 26 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:25:09.298Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Noon 11:30-13:00, afternoon | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $943.77 (+0.94%) over 26 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 26 |
| Win rate | 46.15% (12W / 14L) |
| Net P&L | $+943.77 (+0.94%) |
| Gross profit | $1995.85 |
| Gross loss | $1052.08 |
| Profit factor | 1.9 |
| Avg win | $166.32 |
| Avg loss | $75.15 |
| Payoff ratio | 2.21:1 |
| Expectancy | $+36.3 / trade |
| Max drawdown | 0.29% |
| Sharpe ratio (ann.) | 3.49 |
| Trades / active day | 1.04 |
| Avg confidence | 97.88% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.82R |
| Starting equity | $100,000 |
| Ending equity | $100,943.77 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Noon 11:30–13:00 | 26 | 46.15% | $+943.77 | $36.3 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| RIVN | 26 | 12 | 46.15% | $+943.77 | $+36.3 | 1.9 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 7 | 4 | 57.14% | $+520.92 | $+74.42 |
| trend | 19 | 8 | 42.11% | $+422.85 | $+22.26 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 10 | 6 | 60% | $+517.81 | $+51.78 |
| neutral | 16 | 6 | 37.5% | $+425.96 | $+26.62 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | RIVN | 15 | 1.66 | $+29.51 | 11 | 2.32 | $+45.55 | 0.25% | 1.82 | promote |
| Time slot | Noon 11:30-13:00 | 15 | 1.66 | $+29.51 | 11 | 2.32 | $+45.55 | 0.25% | 1.82 | promote |
| Behavior | noisyHighBeta | 6 | 9.39 | $+73.37 | 4 | 2.16 | $+19.4 | 0.07% | 1.67 | promote |
| Setup | trend | 11 | 2.12 | $+35.05 | 8 | 1.1 | $+4.66 | 0.37% | 0.9 | watch |
| Behavior | neutral | 9 | 1 | $+0.28 | 7 | 2.36 | $+60.49 | 0.25% | 1.85 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+885.54 | 1.81 |
| +3 bps/side | $+769.09 | 1.66 |
| +5 bps/side | $+652.66 | 1.52 |
| +10 bps/side | $+361.51 | 1.25 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 8 |
| timeout | 5 |
| profit-target | 3 |
| breakeven-stop | 3 |
| stagnation | 3 |
| stop-loss | 2 |
| trailing-stop | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | RIVN | 04-30 15:45 | 04-30 16:05 | 13.34 | 13.13 | 1049 | 13993.66 | -220.29 | -1.57% | 1.15R | 20m | market | stop-loss | breakout | breakout | neutral | 90.7 | ↑13.01 | 0.0536 | 1.7 | **LOSS** |
| 2 | RIVN | 05-08 15:40 | 05-08 17:00 | 13.34 | 13.74 | 964 | 12859.76 | +385.6 | +3% | 1.88R | 80m | market | profit-target | breakout | breakout | neutral | 53.57 | ↑13.09 | 0.0816 | 1.6 | **WIN** |
| 3 | RIVN | 05-14 16:35 | 05-14 18:20 | 14.74 | 14.97 | 523 | 7709.02 | +120.29 | +1.56% | 1.59R | 105m | market | timeout | trend | trend | noisyHighBeta | 63.73 | ↑14.48 | 0.0668 | 1.11 | **WIN** |
| 4 | RIVN | 05-15 15:40 | 05-15 17:25 | 15.33 | 15.31 | 503 | 7710.99 | -10.06 | -0.13% | 0.11R | 105m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.95 | ↑15.1 | 0.0711 | 1.98 | **LOSS** |
| 5 | RIVN | 05-19 16:10 | 05-19 17:55 | 15.96 | 16.23 | 879 | 14028.84 | +237.33 | +1.69% | 1.84R | 105m | market | timeout | trend | trend | neutral | 70.97 | ↑15.61 | 0.0869 | 2.2 | **WIN** |
| 6 | RIVN | 06-03 16:15 | 06-03 17:25 | 14.62 | 14.6 | 962 | 14064.44 | -19.24 | -0.14% | 0.18R | 70m | market | stagnation | trend | trend | neutral | 66.27 | ↑14.51 | 0.0195 | 3.39 | **LOSS** |
| 7 | RIVN | 06-05 15:55 | 06-05 16:05 | 14.28 | 14.11 | 985 | 14065.8 | -167.45 | -1.19% | 1.35R | 10m | market | stop-loss | trend | trend | neutral | 79 | ↑13.99 | 0.0763 | 2.11 | **LOSS** |
| 8 | RIVN | 07-15 15:40 | 07-15 16:00 | 12.98 | 12.88 | 1082 | 14044.36 | -108.2 | -0.77% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 86.49 | ↑12.8 | 0.0351 | 3.24 | **LOSS** |
| 9 | RIVN | 08-22 16:40 | 08-22 17:25 | 12.85 | 12.85 | 1091 | 14019.35 | +0 | +0% | 0R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.6 | ↑12.6 | 0.0581 | 1.23 | **WIN** |
| 10 | RIVN | 09-16 16:20 | 09-16 18:05 | 14.32 | 14.49 | 496 | 7102.72 | +84.32 | +1.19% | 1.03R | 105m | market | timeout | breakout | trend | noisyHighBeta | 79.84 | ↑14.01 | 0.0768 | 2.73 | **WIN** |
| 11 | RIVN | 10-27 15:55 | 10-27 16:15 | 13.39 | 13.32 | 1048 | 14032.72 | -73.36 | -0.52% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 66.3 | ↑13.22 | 0.05 | 1.16 | **LOSS** |
| 12 | RIVN | 11-10 16:50 | 11-10 17:50 | 15.9 | 16.44 | 485 | 7711.5 | +261.9 | +3.4% | 1.76R | 60m | market | profit-target | breakout | trend | noisyHighBeta | 64.55 | ↑15.48 | 0.1513 | 1.2 | **WIN** |
| 13 | RIVN | 11-18 16:05 | 11-18 17:25 | 14.78 | 14.83 | 523 | 7729.94 | +26.15 | +0.34% | 0.18R | 80m | market | trailing-stop | trend | trend | noisyHighBeta | 59.12 | ↑14.63 | 0.0128 | 1.47 | **WIN** |
| 14 | RIVN | 12-09 15:40 | 12-09 16:30 | 17.64 | 17.6 | 797 | 14059.08 | -31.88 | -0.23% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 54.69 | ↑17.54 | 0.0225 | 1.63 | **LOSS** |
| 15 | RIVN | 12-17 16:40 | 12-17 17:25 | 18.22 | 18.12 | 424 | 7725.28 | -42.4 | -0.55% | 0.36R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 54.01 | ↑18.09 | 0.0195 | 1.63 | **LOSS** |
| 16 | RIVN | 12-19 16:20 | 12-19 17:30 | 21.94 | 22.3 | 176 | 7722.88 | +63.36 | +1.64% | 0.84R | 70m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.46 | ↑21.34 | 0.4397 | 1.09 | **WIN** |
| 17 | RIVN | 12-19 16:20 | 12-19 18:05 | 21.94 | 22.4 | 176 | 7722.88 | +80.96 | +2.1% | 1.08R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.46 | ↑21.34 | 0.4397 | 1.09 | **WIN** |
| 18 | RIVN | 01-21 15:55 | 01-21 16:15 | 16.52 | 16.41 | 852 | 14075.04 | -93.72 | -0.67% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 65.22 | ↑16.33 | 0.1027 | 1.05 | **LOSS** |
| 19 | RIVN | 02-04 15:55 | 02-04 16:15 | 14.59 | 14.43 | 964 | 14064.76 | -154.24 | -1.1% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 54.3 | ↓14.47 | 0.0956 | 1.38 | **LOSS** |
| 20 | RIVN | 03-03 15:40 | 03-03 17:05 | 14.95 | 15.51 | 845 | 12632.75 | +473.2 | +3.75% | 1.88R | 85m | market | profit-target | breakout | breakout | neutral | 60.62 | ↑14.73 | -0.0991 | 1.15 | **WIN** |
| 21 | RIVN | 03-17 16:15 | 03-17 16:35 | 15.88 | 15.81 | 488 | 7749.44 | -34.16 | -0.44% | 0.42R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 69.17 | ↑15.7 | 0.0376 | 1.83 | **LOSS** |
| 22 | RIVN | 03-31 16:40 | 03-31 17:40 | 15.02 | 15.01 | 939 | 14103.78 | -9.39 | -0.07% | 0.06R | 60m | market | stagnation | breakout | breakout | neutral | 63.79 | ↑14.7 | 0.0617 | 2.45 | **LOSS** |
| 23 | RIVN | 04-02 16:50 | 04-02 17:45 | 15.34 | 15.28 | 919 | 14097.46 | -55.14 | -0.39% | 0.49R | 55m | market | early-reversal | trend | trend | neutral | 71.23 | ↑15.09 | 0.0433 | 1.5 | **LOSS** |
| 24 | RIVN | 04-09 16:05 | 04-09 16:30 | 15.36 | 15.29 | 465 | 7142.4 | -32.55 | -0.46% | 0.47R | 25m | market | early-reversal | breakout | trend | noisyHighBeta | 70.25 | ↑15.1 | 0.0627 | 1.04 | **LOSS** |
| 25 | RIVN | 04-13 16:15 | 04-13 18:00 | 15.55 | 15.84 | 906 | 14088.3 | +262.74 | +1.86% | 2.09R | 105m | market | timeout | trend | trend | neutral | 60.4 | ↑15.46 | 0.0007 | 1.74 | **WIN** |
| 26 | RIVN | 04-22 15:45 | 04-22 16:50 | 17.78 | 17.78 | 794 | 14117.32 | +0 | +0% | 0R | 65m | market | breakeven-stop | breakout | breakout | neutral | 88.7 | ↑17.5 | 0.0738 | 2.35 | **WIN** |

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

- ✅ **Profit factor 1.9** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.82R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:25:09.298Z*
