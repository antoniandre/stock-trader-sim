# Bot Trade Report — 16 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:54:04.025Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $670.93 (+0.67%) over 16 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 16 |
| Win rate | 50% (8W / 8L) |
| Net P&L | $+670.93 (+0.67%) |
| Gross profit | $993.87 |
| Gross loss | $322.94 |
| Profit factor | 3.08 |
| Avg win | $124.23 |
| Avg loss | $40.37 |
| Payoff ratio | 3.08:1 |
| Expectancy | $+41.93 / trade |
| Max drawdown | 0.22% |
| Sharpe ratio (ann.) | 6.18 |
| Trades / active day | 1.14 |
| Avg confidence | 99.19% |
| Avg trade duration | 66 min |
| Avg risk ratio | 0.7R |
| Starting equity | $100,000 |
| Ending equity | $100,670.93 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 50% | $+670.93 | $41.93 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TGT | 16 | 8 | 50% | $+670.93 | $+41.93 | 3.08 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 15 | 8 | 53.33% | $+718.29 | $+47.89 |
| breakout | 1 | 0 | 0% | $-47.36 | $-47.36 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 1 | 1 | 100% | $+408.63 | $+408.63 |
| neutral | 15 | 7 | 46.67% | $+262.3 | $+17.49 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 9 | 0.74 | $-7.1 | 6 | 27.23 | $+130.37 | 0.02% | 13.17 | reject |
| Symbol | TGT | 9 | 0.74 | $-7.1 | 7 | 10.52 | $+104.98 | 0.05% | 6.45 | reject |
| Time slot | Open 9:30-10:30 | 9 | 0.74 | $-7.1 | 7 | 10.52 | $+104.98 | 0.05% | 6.45 | reject |
| Behavior | neutral | 9 | 0.74 | $-7.1 | 6 | 5.23 | $+54.37 | 0.06% | 3.12 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+628.84 | 2.82 |
| +3 bps/side | $+544.69 | 2.38 |
| +5 bps/side | $+460.54 | 2.03 |
| +10 bps/side | $+250.18 | 1.44 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| timeout | 5 |
| stagnation | 3 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TGT | 05-30 14:05 | 05-30 14:25 | 149.27 | 148.26 | 93 | 13882.11 | -93.93 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 70 | ↓148.54 | 0.4338 | 1.01 | **LOSS** |
| 2 | TGT | 05-31 14:25 | 05-31 16:10 | 151.4 | 151.7 | 92 | 13928.8 | +27.6 | +0.2% | 0.24R | 105m | market | timeout | trend | trend | neutral | 67.26 | ↑150.38 | 0.3447 | 1.17 | **WIN** |
| 3 | TGT | 07-12 14:20 | 07-12 15:10 | 152.83 | 152.61 | 91 | 13907.53 | -20.02 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 61.13 | ↑151.92 | 0.1744 | 1.54 | **LOSS** |
| 4 | TGT | 09-09 14:15 | 09-09 14:45 | 152.81 | 152.33 | 91 | 13905.71 | -43.68 | -0.31% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 78.52 | ↑152.09 | 0.3573 | 1.05 | **LOSS** |
| 5 | TGT | 09-13 14:05 | 09-13 15:00 | 151.36 | 151.38 | 92 | 13925.12 | +1.84 | +0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 69.88 | ↑150.47 | 0.5989 | 1.05 | **WIN** |
| 6 | TGT | 10-10 14:10 | 10-10 14:45 | 155.4 | 154.88 | 89 | 13830.6 | -46.28 | -0.33% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | 65.37 | ↑153.92 | 0.2794 | 1.92 | **LOSS** |
| 7 | TGT | 10-24 14:05 | 10-24 14:40 | 149.92 | 149.47 | 93 | 13942.56 | -41.85 | -0.3% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 67.81 | ↑149.37 | 0.4359 | 1.17 | **LOSS** |
| 8 | TGT | 03-20 14:15 | 03-20 16:00 | 105.74 | 106.48 | 132 | 13957.68 | +97.68 | +0.7% | 0.85R | 105m | market | timeout | trend | trend | neutral | 58.04 | ↑105.16 | 0.2114 | 1.98 | **WIN** |
| 9 | TGT | 05-15 14:10 | 05-15 15:45 | 95.89 | 96.65 | 72 | 13904.05 | +54.72 | +0.79% | 0.65R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 10 | TGT | 05-15 14:10 | 05-15 15:55 | 95.89 | 96.68 | 73 | 13904.05 | +57.67 | +0.82% | 0.68R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 11 | TGT | 05-22 14:00 | 05-22 15:10 | 94.97 | 94.83 | 147 | 13960.59 | -20.58 | -0.15% | 0.12R | 70m | market | stagnation | trend | trend | neutral | 72.49 | ↓94.31 | 0.3681 | 1.3 | **LOSS** |
| 12 | TGT | 06-03 14:20 | 06-03 16:05 | 94.75 | 96.02 | 147 | 13928.25 | +186.69 | +1.34% | 1.65R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 13 | TGT | 07-01 13:40 | 07-01 14:00 | 100.55 | 100.18 | 128 | 12870.4 | -47.36 | -0.37% | 0.48R | 20m | market | early-reversal | breakout | breakout | neutral | 81.53 | ↑99.85 | 0.3703 | 1.85 | **LOSS** |
| 14 | TGT | 07-01 14:10 | 07-01 15:10 | 101.18 | 103.75 | 159 | 16087.62 | +408.63 | +2.54% | 2.49R | 60m | market | profit-target | trend | trend | cleanTrend | 75.8 | ↑100.15 | 0.6252 | 1.05 | **WIN** |
| 15 | TGT | 10-15 14:00 | 10-15 15:05 | 90.94 | 90.88 | 154 | 14004.76 | -9.24 | -0.07% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 79.92 | ↑90.36 | 0.4165 | 1.06 | **LOSS** |
| 16 | TGT | 04-17 14:05 | 04-17 15:50 | 125.11 | 126.53 | 112 | 14012.32 | +159.04 | +1.14% | 1.52R | 105m | market | timeout | trend | trend | neutral | 71.66 | ↑124.36 | 0.3054 | 1.2 | **WIN** |

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

- ✅ **Profit factor 3.08** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.7R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:54:04.025Z*
