# Bot Trade Report — 19 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:39:15.999Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1044.73 (+1.04%) over 19 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 19 |
| Win rate | 57.89% (11W / 8L) |
| Net P&L | $+1044.73 (+1.04%) |
| Gross profit | $1516.13 |
| Gross loss | $471.4 |
| Profit factor | 3.22 |
| Avg win | $137.83 |
| Avg loss | $58.93 |
| Payoff ratio | 2.34:1 |
| Expectancy | $+54.99 / trade |
| Max drawdown | 0.14% |
| Sharpe ratio (ann.) | 6.72 |
| Trades / active day | 1.19 |
| Avg confidence | 98.63% |
| Avg trade duration | 67 min |
| Avg risk ratio | 0.85R |
| Starting equity | $100,000 |
| Ending equity | $101,044.73 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 19 | 57.89% | $+1044.73 | $54.99 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ARM | 19 | 11 | 57.89% | $+1044.73 | $+54.99 | 3.22 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 15 | 10 | 66.67% | $+1118.05 | $+74.54 |
| breakout | 4 | 1 | 25% | $-73.32 | $-18.33 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 15 | 7 | 46.67% | $+624.38 | $+41.63 |
| noisyHighBeta | 4 | 4 | 100% | $+420.35 | $+105.09 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 9 | 9.53 | $+102.43 | 6 | 2.3 | $+32.69 | 0.14% | 1.65 | promote |
| Symbol | ARM | 11 | 6.1 | $+88.88 | 8 | 1.24 | $+8.38 | 0.14% | 0.91 | watch |
| Behavior | neutral | 7 | 3.91 | $+79.62 | 8 | 1.24 | $+8.38 | 0.14% | 0.91 | watch |
| Time slot | Open 9:30-10:30 | 11 | 6.1 | $+88.88 | 8 | 1.24 | $+8.38 | 0.14% | 0.91 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1003.7 | 3.03 |
| +3 bps/side | $+921.65 | 2.71 |
| +5 bps/side | $+839.59 | 2.44 |
| +10 bps/side | $+634.48 | 1.91 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| timeout | 4 |
| trim-profit-target | 3 |
| breakeven-stop | 2 |
| trailing-stop | 2 |
| profit-target | 2 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ARM | 06-10 14:25 | 06-10 15:55 | 139.87 | 139.85 | 100 | 13987 | -2 | -0.01% | 0.01R | 90m | market | breakeven-stop | breakout | trend | neutral | 63.23 | ↑135.28 | 0.5967 | 1.43 | **LOSS** |
| 2 | ARM | 06-11 14:05 | 06-11 15:45 | 143.34 | 145.32 | 24 | 7023.66 | +47.52 | +1.38% | 0.72R | 100m | market | trim-profit-target | breakout | trend | noisyHighBeta | 71.45 | ↑141.47 | 0.6171 | 1.49 | **WIN** |
| 3 | ARM | 06-11 14:05 | 06-11 15:50 | 143.34 | 145.41 | 25 | 7023.66 | +51.75 | +1.44% | 0.75R | 105m | market | timeout | breakout | trend | noisyHighBeta | 71.45 | ↑141.47 | 0.6171 | 1.49 | **WIN** |
| 4 | ARM | 06-18 14:15 | 06-18 15:30 | 164.98 | 166.82 | 46 | 7589.08 | +84.64 | +1.12% | 0.56R | 75m | market | trailing-stop | breakout | trend | noisyHighBeta | 61.42 | ↑162.59 | 0.68 | 1.11 | **WIN** |
| 5 | ARM | 07-23 14:05 | 07-23 15:15 | 166.91 | 172.05 | 46 | 7677.86 | +236.44 | +3.08% | 2.35R | 70m | market | profit-target | trend | trend | noisyHighBeta | 74.93 | ↑165.54 | 0.4865 | 1.04 | **WIN** |
| 6 | ARM | 10-11 14:15 | 10-11 14:40 | 151.51 | 150.6 | 92 | 13938.92 | -83.72 | -0.6% | 0.63R | 25m | market | early-reversal | breakout | breakout | neutral | 68.97 | ↑149.9 | 0.1466 | 1.39 | **LOSS** |
| 7 | ARM | 10-28 14:10 | 10-28 15:45 | 146.94 | 151.58 | 95 | 13959.3 | +440.8 | +3.16% | 3.4R | 95m | market | profit-target | trend | trend | neutral | 76.34 | ↑145.93 | 0.5947 | 1.17 | **WIN** |
| 8 | ARM | 10-29 14:25 | 10-29 15:35 | 152.32 | 153.65 | 46 | 14013.44 | +61.18 | +0.87% | 0.69R | 70m | market | trim-profit-target | trend | trend | neutral | 63.41 | ↑150.36 | 0.4804 | 1.34 | **WIN** |
| 9 | ARM | 10-29 14:25 | 10-29 16:10 | 152.32 | 154.66 | 46 | 14013.44 | +107.64 | +1.54% | 1.22R | 105m | market | timeout | trend | trend | neutral | 63.41 | ↑150.36 | 0.4804 | 1.34 | **WIN** |
| 10 | ARM | 05-16 14:15 | 05-16 14:35 | 135.19 | 134.17 | 104 | 14059.76 | -106.08 | -0.75% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 73.79 | ↓134.56 | 0.5053 | 1.34 | **LOSS** |
| 11 | ARM | 06-03 13:40 | 06-03 15:25 | 128.4 | 129.68 | 109 | 13995.6 | +139.52 | +1% | 1.2R | 105m | market | timeout | trend | breakout | neutral | 61.42 | ↑127.89 | 0.1096 | 1.79 | **WIN** |
| 12 | ARM | 06-23 14:00 | 06-23 15:05 | 147.17 | 147.06 | 96 | 14128.32 | -10.56 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 13 | ARM | 07-11 14:00 | 07-11 15:20 | 149.21 | 149.15 | 94 | 14025.74 | -5.64 | -0.04% | 0.03R | 80m | market | breakeven-stop | breakout | trend | neutral | 64.05 | ↓147.38 | 0.2988 | 1.26 | **LOSS** |
| 14 | ARM | 07-21 14:10 | 07-21 15:15 | 161.58 | 163.11 | 43 | 14057.46 | +65.79 | +0.95% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 15 | ARM | 07-21 14:10 | 07-21 15:55 | 161.58 | 162.81 | 44 | 14057.46 | +54.12 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 16 | ARM | 08-08 14:15 | 08-08 14:35 | 137.65 | 136.73 | 102 | 14040.3 | -93.84 | -0.67% | 0.75R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑136.69 | 0.5552 | 3.19 | **LOSS** |
| 17 | ARM | 08-26 14:20 | 08-26 14:55 | 141.14 | 140.63 | 100 | 14114 | -51 | -0.36% | 0.34R | 35m | market | early-reversal | trend | trend | neutral | 79.01 | ↑139.99 | 0.7246 | 1.43 | **LOSS** |
| 18 | ARM | 10-27 14:20 | 10-27 14:35 | 177.31 | 180.18 | 79 | 14007.49 | +226.73 | +1.62% | 0.93R | 15m | market | trailing-stop | trend | trend | neutral | 74.37 | ↑176.02 | 1.2808 | 1.8 | **WIN** |
| 19 | ARM | 04-21 14:05 | 04-21 14:40 | 179.36 | 177.84 | 78 | 13990.08 | -118.56 | -0.85% | 0.43R | 35m | market | early-reversal | breakout | breakout | neutral | 65.25 | ↑176.94 | 1.123 | 1.28 | **LOSS** |

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

- ✅ **Profit factor 3.22** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.85R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:39:15.999Z*
