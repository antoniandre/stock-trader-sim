# Bot Trade Report — 16 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:39:10.779Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $541.52 (+0.54%) over 16 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 16 |
| Win rate | 37.5% (6W / 10L) |
| Net P&L | $+541.52 (+0.54%) |
| Gross profit | $1028.04 |
| Gross loss | $486.52 |
| Profit factor | 2.11 |
| Avg win | $171.34 |
| Avg loss | $48.65 |
| Payoff ratio | 3.52:1 |
| Expectancy | $+33.85 / trade |
| Max drawdown | 0.25% |
| Sharpe ratio (ann.) | 4.04 |
| Trades / active day | 1.07 |
| Avg confidence | 99.19% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.96R |
| Starting equity | $100,000 |
| Ending equity | $100,541.52 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 37.5% | $+541.52 | $33.85 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| BA | 16 | 6 | 37.5% | $+541.52 | $+33.85 | 2.11 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 16 | 6 | 37.5% | $+541.52 | $+33.85 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 15 | 6 | 40% | $+559.97 | $+37.33 |
| noisyHighBeta | 1 | 0 | 0% | $-18.45 | $-18.45 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | BA | 9 | 2.43 | $+34.52 | 7 | 1.86 | $+32.98 | 0.14% | 1.39 | promote |
| Behavior | neutral | 8 | 2.66 | $+41.14 | 7 | 1.86 | $+32.98 | 0.14% | 1.39 | promote |
| Time slot | Open 9:30-10:30 | 9 | 2.43 | $+34.52 | 7 | 1.86 | $+32.98 | 0.14% | 1.39 | promote |
| Setup | trend | 9 | 2.43 | $+34.52 | 7 | 1.86 | $+32.98 | 0.14% | 1.39 | promote |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+501.02 | 1.98 |
| +3 bps/side | $+420.03 | 1.74 |
| +5 bps/side | $+339.04 | 1.55 |
| +10 bps/side | $+136.52 | 1.18 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| stagnation | 4 |
| timeout | 3 |
| profit-target | 2 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | BA | 05-09 14:15 | 05-09 15:05 | 181.34 | 180.94 | 77 | 13963.18 | -30.8 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 77.01 | ↑180.36 | 0.3339 | 1.25 | **LOSS** |
| 2 | BA | 05-20 14:05 | 05-20 15:50 | 187.43 | 188.32 | 74 | 13869.82 | +65.86 | +0.47% | 0.67R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑186.11 | 0.5791 | 2.35 | **WIN** |
| 3 | BA | 07-16 14:00 | 07-16 14:50 | 181.96 | 183.56 | 38 | 13828.96 | +60.8 | +0.88% | 1.26R | 50m | market | trim-profit-target | trend | trend | neutral | 78.47 | ↑180.63 | 0.3491 | 1.04 | **WIN** |
| 4 | BA | 07-16 14:00 | 07-16 15:45 | 181.96 | 183.88 | 38 | 13828.96 | +72.96 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 78.47 | ↑180.63 | 0.3491 | 1.04 | **WIN** |
| 5 | BA | 07-23 14:20 | 07-23 15:50 | 181.2 | 185.46 | 77 | 13952.4 | +328.02 | +2.35% | 3.36R | 90m | market | profit-target | trend | trend | neutral | 77.08 | ↑180.44 | 0.7222 | 1.14 | **WIN** |
| 6 | BA | 08-16 14:10 | 08-16 14:30 | 178.81 | 178.13 | 78 | 13947.18 | -53.04 | -0.38% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 76.57 | ↑177.73 | 0.9905 | 1.46 | **LOSS** |
| 7 | BA | 03-19 14:20 | 03-19 15:10 | 172.29 | 171.84 | 41 | 7063.89 | -18.45 | -0.26% | 0.13R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 71.08 | ↑170.41 | 2.8303 | 1.02 | **LOSS** |
| 8 | BA | 05-01 14:25 | 05-01 14:45 | 184.46 | 183.77 | 76 | 14018.96 | -52.44 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 9 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 75 | 14020.5 | -62.25 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 10 | BA | 05-14 14:10 | 05-14 15:00 | 206.79 | 205.79 | 67 | 13854.93 | -67 | -0.48% | 0.33R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 11 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 68 | 13859.08 | +346.8 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 12 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 69 | 14063.58 | -61.41 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 13 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 69 | 13913.85 | -11.73 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 14 | BA | 08-12 14:10 | 08-12 14:30 | 231.06 | 229.93 | 60 | 13863.6 | -67.8 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 15 | BA | 10-06 14:10 | 10-06 15:55 | 218.49 | 220.89 | 64 | 13983.36 | +153.6 | +1.1% | 1.33R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 16 | BA | 03-25 14:00 | 03-25 14:20 | 200.31 | 199.43 | 70 | 14021.7 | -61.6 | -0.44% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |

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

- ✅ **Profit factor 2.11** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.96R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:39:10.779Z*
