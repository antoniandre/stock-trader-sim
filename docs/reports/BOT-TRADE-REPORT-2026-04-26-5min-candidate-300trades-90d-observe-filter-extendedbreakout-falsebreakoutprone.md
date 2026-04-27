# Bot Trade Report — 23 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T03:26:33.573Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** candidate | **Symbols scanned:** 4 | **Behavior classifier:** observe
> **Behavior entry filter:** extendedBreakout, falseBreakoutProne

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $489.89 (+0.49%) over 23 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 23 |
| Win rate | 39.13% (9W / 14L) |
| Net P&L | $+489.89 (+0.49%) |
| Gross profit | $1530.68 |
| Gross loss | $1040.79 |
| Profit factor | 1.47 |
| Avg win | $170.08 |
| Avg loss | $74.34 |
| Payoff ratio | 2.29:1 |
| Expectancy | $+21.3 / trade |
| Max drawdown | 0.57% |
| Sharpe ratio (ann.) | 2.8 |
| Trades / active day | 1.15 |
| Avg confidence | 99.43% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.94R |
| Starting equity | $100,000 |
| Ending equity | $100,489.89 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 37.5% | $+359.42 | $22.46 |
| Mid  10:30–11:30 | 7 | 42.86% | $+130.47 | $18.64 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 8 | 5 | 62.5% | $+683.78 | $+85.47 | 4.18 | eligible |
| GOOGL | 2 | 2 | 100% | $+248.64 | $+124.32 | ∞ | watch |
| AMZN | 8 | 2 | 25% | $+60.18 | $+7.52 | 1.19 | throttle |
| META | 5 | 0 | 0% | $-502.71 | $-100.54 | 0 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 23 | 9 | 39.13% | $+489.89 | $+21.3 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 16 | 6 | 37.5% | $+359.42 | $+22.46 |
| extendedBreakout | 7 | 3 | 42.86% | $+130.47 | $+18.64 |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+426.2 | 1.39 |
| +3 bps/side | $+298.85 | 1.26 |
| +5 bps/side | $+171.49 | 1.14 |
| +10 bps/side | $-146.91 | 0.9 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| timeout | 8 |
| stagnation | 2 |
| breakeven-stop | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 02-06 15:25 | 02-06 17:10 | 182.64 | 183.59 | 76 | 13880.64 | +72.2 | +0.52% | 0.3R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.09 | ↑179.95 | 2.4413 | 1.64 | **WIN** |
| 2 | NVDA | 02-09 14:40 | 02-09 15:35 | 190.96 | 190.8 | 67 | 12794.32 | -10.72 | -0.08% | 0.07R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 70.42 | ↑188 | 0.8227 | 1.91 | **LOSS** |
| 3 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 68 | 13850.92 | +189.72 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 4 | AMZN | 02-20 15:10 | 02-20 15:30 | 209.96 | 208.23 | 66 | 13857.36 | -114.18 | -0.82% | 0.67R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 80.43 | ↑207.76 | 1.1209 | 2.49 | **LOSS** |
| 5 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 6 | META | 02-26 14:40 | 02-26 15:00 | 660.83 | 656.3 | 21 | 13877.43 | -95.13 | -0.69% | 0.84R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 72.73 | ↓655.58 | 1.4234 | 2.3 | **LOSS** |
| 7 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 65 | 13828.1 | +193.7 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 8 | NVDA | 03-13 13:30 | 03-13 14:00 | 185.35 | 184.03 | 75 | 13901.25 | -99 | -0.71% | 1R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.44 | ↓185.35 | 0.1277 | 3.05 | **LOSS** |
| 9 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 22 | 13962.96 | -48.18 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 10 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 66 | 14019.06 | -62.7 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 11 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 69 | 13953.87 | -54.51 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 12 | AMZN | 03-31 13:30 | 03-31 14:40 | 205.4 | 205.24 | 68 | 13967.2 | -10.88 | -0.08% | 0.1R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 87.99 | ↓205.07 | 0.5023 | 1.53 | **LOSS** |
| 13 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 14 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 15 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 23 | 13400.49 | -143.06 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 16 | META | 04-06 13:30 | 04-06 14:00 | 581.44 | 577.99 | 24 | 13954.56 | -82.8 | -0.59% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.03 | ↓579.82 | 1.2555 | 1.54 | **LOSS** |
| 17 | META | 04-09 13:40 | 04-09 14:00 | 630.4 | 624.33 | 22 | 13868.8 | -133.54 | -0.96% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.5 | ↓626.73 | 2.8031 | 2.95 | **LOSS** |
| 18 | AMZN | 04-10 13:35 | 04-10 14:00 | 238.38 | 237.24 | 58 | 13826.04 | -66.12 | -0.48% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.44 | ↓237.43 | 1.1799 | 2.17 | **LOSS** |
| 19 | NVDA | 04-10 13:40 | 04-10 15:25 | 185.9 | 189.45 | 75 | 13942.5 | +266.25 | +1.91% | 2.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.43 | ↑185.58 | 0.4573 | 1.7 | **WIN** |
| 20 | NVDA | 04-14 13:30 | 04-14 15:15 | 192.27 | 193.1 | 72 | 13843.44 | +59.76 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.34 | ↑192.17 | 0.6125 | 5.29 | **WIN** |
| 21 | NVDA | 04-15 13:30 | 04-15 15:15 | 198.09 | 199.63 | 70 | 13866.3 | +107.8 | +0.78% | 1.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.07 | ↑197.63 | 0.3965 | 4.04 | **WIN** |
| 22 | AMZN | 04-21 13:40 | 04-21 14:45 | 252.58 | 252.31 | 55 | 13891.9 | -14.85 | -0.11% | 0.12R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |
| 23 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |

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
| 10 | **Slippage model** | 0.03 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 1.47 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.94R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T03:26:33.573Z*
