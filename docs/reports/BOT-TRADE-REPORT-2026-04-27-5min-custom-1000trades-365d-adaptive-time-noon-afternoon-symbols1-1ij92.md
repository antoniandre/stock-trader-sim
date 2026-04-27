# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:17:31.193Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Noon 11:30-13:00, afternoon | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $399.4 (-0.4%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 30.77% (4W / 9L) |
| Net P&L | $-399.4 (-0.4%) |
| Gross profit | $273.38 |
| Gross loss | $672.78 |
| Profit factor | 0.41 |
| Avg win | $68.35 |
| Avg loss | $74.75 |
| Payoff ratio | 0.91:1 |
| Expectancy | $-30.72 / trade |
| Max drawdown | 0.56% |
| Sharpe ratio (ann.) | -6.23 |
| Trades / active day | 1.08 |
| Avg confidence | 100% |
| Avg trade duration | 53 min |
| Avg risk ratio | 0.8R |
| Starting equity | $100,000 |
| Ending equity | $99,600.6 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Noon 11:30–13:00 | 13 | 30.77% | $-399.4 | $-30.72 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 13 | 4 | 30.77% | $-399.4 | $-30.72 | 0.41 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 4 | 33.33% | $-356.92 | $-29.74 |
| breakout | 1 | 0 | 0% | $-42.48 | $-42.48 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 0 | 0% | $-37.76 | $-37.76 |
| neutral | 12 | 4 | 33.33% | $-361.64 | $-30.14 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SHOP | 7 | 0.9 | $-4.19 | 6 | 0 | $-61.68 | 0.37% | 0 | reject |
| Time slot | Noon 11:30-13:00 | 7 | 0.9 | $-4.19 | 6 | 0 | $-61.68 | 0.37% | 0 | reject |
| Setup | trend | 7 | 0.9 | $-4.19 | 5 | 0 | $-65.52 | 0.33% | 0 | reject |
| Behavior | neutral | 7 | 0.9 | $-4.19 | 5 | 0 | $-66.46 | 0.33% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-431.55 | 0.38 |
| +3 bps/side | $-495.86 | 0.34 |
| +5 bps/side | $-560.17 | 0.3 |
| +10 bps/side | $-720.94 | 0.23 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| breakeven-stop | 2 |
| timeout | 2 |
| trim-profit-target | 1 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SHOP | 06-11 16:45 | 06-11 18:00 | 116.01 | 115.07 | 120 | 13921.2 | -112.8 | -0.81% | 0.91R | 75m | market | breakeven-stop | trend | trend | neutral | 67.55 | ↓114.59 | 0.1966 | 1 | **LOSS** |
| 2 | SHOP | 07-14 16:05 | 07-14 17:25 | 115.91 | 117.26 | 60 | 13909.2 | +81 | +1.16% | 1.66R | 80m | market | trim-profit-target | trend | trend | neutral | 74.17 | ↑114.24 | 0.5911 | 1.25 | **WIN** |
| 3 | SHOP | 07-14 16:05 | 07-14 17:50 | 115.91 | 116.89 | 60 | 13909.2 | +58.8 | +0.85% | 1.21R | 105m | market | timeout | trend | trend | neutral | 74.17 | ↑114.24 | 0.5911 | 1.25 | **WIN** |
| 4 | SHOP | 07-16 16:30 | 07-16 18:00 | 118.45 | 118.5 | 118 | 13977.1 | +5.9 | +0.04% | 0.03R | 90m | market | breakeven-stop | trend | trend | neutral | 64.3 | ↑116.4 | 0.6897 | 2.13 | **WIN** |
| 5 | SHOP | 07-17 16:05 | 07-17 17:50 | 124.65 | 125.79 | 112 | 13960.8 | +127.68 | +0.91% | 1.3R | 105m | market | timeout | trend | trend | neutral | 74.62 | ↑122.87 | 0.7982 | 1.17 | **WIN** |
| 6 | SHOP | 09-18 15:45 | 09-18 16:05 | 152.2 | 151.22 | 92 | 14002.4 | -90.16 | -0.64% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 70.23 | ↑150.7 | 0.7992 | 2 | **LOSS** |
| 7 | SHOP | 10-03 16:25 | 10-03 16:45 | 162.37 | 161.21 | 86 | 13963.82 | -99.76 | -0.71% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑159.39 | 0.8545 | 1.55 | **LOSS** |
| 8 | SHOP | 10-21 16:35 | 10-21 16:55 | 165.16 | 164.48 | 84 | 13873.44 | -57.12 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 78.71 | ↑162.87 | 0.6592 | 2.39 | **LOSS** |
| 9 | SHOP | 12-04 16:50 | 12-04 17:20 | 161.82 | 160.65 | 86 | 13916.52 | -100.62 | -0.72% | 1.03R | 30m | market | early-reversal | trend | trend | neutral | 72.13 | ↑159.24 | 0.3597 | 2.78 | **LOSS** |
| 10 | SHOP | 02-20 16:30 | 02-20 17:10 | 130.08 | 129.44 | 59 | 7674.72 | -37.76 | -0.49% | 0.34R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.08 | ↑128.04 | 1.5339 | 1.27 | **LOSS** |
| 11 | SHOP | 03-04 16:40 | 03-04 17:00 | 129.05 | 128.32 | 108 | 13937.4 | -78.84 | -0.57% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 60.92 | ↑127.33 | 1.3818 | 1.08 | **LOSS** |
| 12 | SHOP | 03-31 16:50 | 03-31 17:40 | 117.87 | 117.51 | 118 | 13908.66 | -42.48 | -0.31% | 0.23R | 50m | market | stagnation | breakout | breakout | neutral | 86.1 | ↑115.09 | 0.5733 | 2.49 | **LOSS** |
| 13 | SHOP | 04-13 16:15 | 04-13 16:45 | 115.11 | 114.67 | 121 | 13928.31 | -53.24 | -0.38% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 65.2 | ↑113.92 | 0.3511 | 2.68 | **LOSS** |

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

- ⚠️ **Profit factor 0.41 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.8R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:17:31.193Z*
