# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:58:57.486Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $39.46 (+0.04%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 50% (6W / 6L) |
| Net P&L | $+39.46 (+0.04%) |
| Gross profit | $566.11 |
| Gross loss | $526.65 |
| Profit factor | 1.07 |
| Avg win | $94.35 |
| Avg loss | $87.78 |
| Payoff ratio | 1.07:1 |
| Expectancy | $+3.29 / trade |
| Max drawdown | 0.3% |
| Sharpe ratio (ann.) | 0.47 |
| Trades / active day | 1.2 |
| Avg confidence | 98.92% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.98R |
| Starting equity | $100,000 |
| Ending equity | $100,039.46 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 50% | $+39.46 | $3.29 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LRCX | 12 | 6 | 50% | $+39.46 | $+3.29 | 1.07 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 5 | 50% | $+13.83 | $+1.38 |
| breakout | 2 | 1 | 50% | $+25.63 | $+12.81 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 5 | 55.56% | $+192.4 | $+21.38 |
| noisyHighBeta | 3 | 1 | 33.33% | $-152.94 | $-50.98 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 5 | 2.02 | $+33.38 | 4 | 1.16 | $+6.37 | 0.09% | 0.91 | watch |
| Symbol | LRCX | 7 | 1.27 | $+11.46 | 5 | 0.82 | $-8.15 | 0.13% | 0.66 | reject |
| Time slot | Open 9:30-10:30 | 7 | 1.27 | $+11.46 | 5 | 0.82 | $-8.15 | 0.13% | 0.66 | reject |
| Setup | trend | 5 | 1.22 | $+10.92 | 5 | 0.82 | $-8.15 | 0.13% | 0.66 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+15.76 | 1.03 |
| +3 bps/side | $-31.65 | 0.94 |
| +5 bps/side | $-79.05 | 0.87 |
| +10 bps/side | $-197.56 | 0.7 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| early-reversal | 4 |
| trim-profit-target | 2 |
| stagnation | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LRCX | 08-08 14:25 | 08-08 16:10 | 781.65 | 786.94 | 9 | 7034.85 | +47.61 | +0.68% | 0.37R | 105m | market | timeout | trend | trend | noisyHighBeta | 67.45 | ↑776.56 | 7.2109 | 1.76 | **WIN** |
| 2 | LRCX | 09-25 13:45 | 09-25 15:30 | 801.66 | 806.15 | 17 | 13628.22 | +76.33 | +0.56% | 0.8R | 105m | market | timeout | breakout | breakout | neutral | 80.58 | ↑796.29 | 0.3041 | 2.1 | **WIN** |
| 3 | LRCX | 03-12 13:30 | 03-12 14:30 | 76.07 | 75.77 | 169 | 12855.83 | -50.7 | -0.39% | 0.23R | 60m | market | stagnation | breakout | breakout | neutral | 58.28 | ↓75.8 | 0.265 | 1.28 | **LOSS** |
| 4 | LRCX | 04-15 14:05 | 04-15 14:25 | 69.39 | 68.18 | 111 | 7702.29 | -134.31 | -1.74% | 1.31R | 20m | market | stop-loss | trend | trend | noisyHighBeta | 67.42 | ↓68.88 | 0.2349 | 1.86 | **LOSS** |
| 5 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.85 | 83.17 | 166 | 13919.1 | -112.88 | -0.81% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 6 | LRCX | 08-12 14:10 | 08-12 15:25 | 103.02 | 104.53 | 67 | 13907.7 | +101.17 | +1.47% | 1.63R | 75m | market | trim-profit-target | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 7 | LRCX | 08-12 14:10 | 08-12 15:55 | 103.02 | 105.27 | 68 | 13907.7 | +153 | +2.18% | 2.42R | 105m | market | timeout | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 8 | LRCX | 09-17 14:10 | 09-17 14:30 | 122.82 | 121.99 | 114 | 14001.48 | -94.62 | -0.68% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 79.36 | ↓121.87 | 0.6937 | 1.95 | **LOSS** |
| 9 | LRCX | 10-01 14:10 | 10-01 14:55 | 134.7 | 135.98 | 51 | 13874.1 | +65.28 | +0.95% | 0.89R | 45m | market | trim-profit-target | trend | trend | neutral | 62.56 | ↑133.41 | 0.3217 | 1.06 | **WIN** |
| 10 | LRCX | 10-01 14:10 | 10-01 15:55 | 134.7 | 137.06 | 52 | 13874.1 | +122.72 | +1.75% | 1.64R | 105m | market | timeout | trend | trend | neutral | 62.56 | ↑133.41 | 0.3217 | 1.06 | **WIN** |
| 11 | LRCX | 10-15 14:00 | 10-15 14:50 | 144.22 | 143.52 | 97 | 13989.34 | -67.9 | -0.49% | 0.27R | 50m | market | early-reversal | trend | trend | neutral | 67.73 | ↓143.32 | 0.7586 | 1.18 | **LOSS** |
| 12 | LRCX | 03-24 14:00 | 03-24 14:35 | 236.76 | 234.69 | 32 | 7576.32 | -66.24 | -0.87% | 0.67R | 35m | market | early-reversal | breakout | trend | noisyHighBeta | 64.53 | ↑233.54 | -0.0563 | 1.05 | **LOSS** |

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

- ⚠️ **Profit factor 1.07 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.98R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:58:57.486Z*
