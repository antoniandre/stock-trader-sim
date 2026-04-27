# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:41:44.105Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $54.49 (-0.05%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 22.22% (2W / 7L) |
| Net P&L | $-54.49 (-0.05%) |
| Gross profit | $269.28 |
| Gross loss | $323.77 |
| Profit factor | 0.83 |
| Avg win | $134.64 |
| Avg loss | $46.25 |
| Payoff ratio | 2.91:1 |
| Expectancy | $-6.05 / trade |
| Max drawdown | 0.2% |
| Sharpe ratio (ann.) | -1.13 |
| Trades / active day | 1 |
| Avg confidence | 98.56% |
| Avg trade duration | 49 min |
| Avg risk ratio | 0.58R |
| Starting equity | $100,000 |
| Ending equity | $99,945.51 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 5 | 40% | $+132.92 | $26.58 |
| Noon 11:30–13:00 | 2 | 0% | $-69.84 | $-34.92 |
| PM   13:00–14:00 | 2 | 0% | $-117.57 | $-58.78 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| HON | 9 | 2 | 22.22% | $-54.49 | $-6.05 | 0.83 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 1 | 14.29% | $-147.37 | $-21.05 |
| breakout | 2 | 1 | 50% | $+92.88 | $+46.44 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 2 | 22.22% | $-54.49 | $-6.05 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | HON | 5 | 2.22 | $+29.59 | 4 | 0 | $-50.61 | 0.2% | 0 | watch |
| Behavior | neutral | 5 | 2.22 | $+29.59 | 4 | 0 | $-50.61 | 0.2% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-79.19 | 0.77 |
| +3 bps/side | $-128.6 | 0.66 |
| +5 bps/side | $-177.98 | 0.58 |
| +10 bps/side | $-301.5 | 0.42 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| stagnation | 2 |
| timeout | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | HON | 11-21 17:10 | 11-21 17:30 | 190.49 | 189.8 | 73 | 13905.77 | -50.37 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 67.96 | ↑189.46 | 0.3094 | 1.2 | **LOSS** |
| 2 | HON | 01-13 15:20 | 01-13 16:20 | 210.24 | 210.02 | 66 | 13875.84 | -14.52 | -0.1% | 0.14R | 60m | market | stagnation | trend | trend | neutral | 76.02 | ↑209.27 | 0.4518 | 1.03 | **LOSS** |
| 3 | HON | 01-16 14:40 | 01-16 16:25 | 218.39 | 219.89 | 64 | 13976.96 | +96 | +0.69% | 0.8R | 105m | market | timeout | breakout | trend | neutral | 74.56 | ↑218.23 | 0.6451 | 1.04 | **WIN** |
| 4 | HON | 01-22 16:05 | 01-22 16:25 | 222.47 | 221.56 | 62 | 13793.14 | -56.42 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 63.28 | ↑220.96 | 0.5898 | 1.53 | **LOSS** |
| 5 | HON | 01-29 14:30 | 01-29 16:15 | 222.66 | 225.7 | 57 | 12691.62 | +173.28 | +1.37% | 1.13R | 105m | market | timeout | breakout | breakout | neutral | 66.41 | ↑222.96 | -0.285 | 1.17 | **WIN** |
| 6 | HON | 02-03 14:40 | 02-03 15:00 | 230.57 | 229.23 | 60 | 13834.2 | -80.4 | -0.58% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 81.94 | ↓229.59 | 0.6262 | 1.56 | **LOSS** |
| 7 | HON | 03-02 15:05 | 03-02 15:50 | 246.08 | 245.34 | 56 | 13780.48 | -41.44 | -0.3% | 0.42R | 45m | market | early-reversal | trend | trend | neutral | 65.58 | ↑244.1 | 0.3399 | 2.65 | **LOSS** |
| 8 | HON | 03-03 17:25 | 03-03 17:45 | 246.68 | 245.48 | 56 | 13814.08 | -67.2 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 71.6 | ↑243.95 | 0.6845 | 1.26 | **LOSS** |
| 9 | HON | 03-25 15:50 | 03-25 16:40 | 227.15 | 226.93 | 61 | 13856.15 | -13.42 | -0.1% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 69.4 | ↑225.38 | 0.9548 | 1.51 | **LOSS** |

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

- ⚠️ **Profit factor 0.83 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.58R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:41:44.105Z*
