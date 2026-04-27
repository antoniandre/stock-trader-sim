# Bot Trade Report — 15 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:47:30.009Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Noon 11:30-13:00, afternoon | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $168.71 (-0.17%) over 15 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 15 |
| Win rate | 33.33% (5W / 10L) |
| Net P&L | $-168.71 (-0.17%) |
| Gross profit | $177.55 |
| Gross loss | $346.26 |
| Profit factor | 0.51 |
| Avg win | $35.51 |
| Avg loss | $34.63 |
| Payoff ratio | 1.03:1 |
| Expectancy | $-11.25 / trade |
| Max drawdown | 0.18% |
| Sharpe ratio (ann.) | -4.08 |
| Trades / active day | 1.07 |
| Avg confidence | 92.13% |
| Avg trade duration | 15 min |
| Avg risk ratio | 0.73R |
| Starting equity | $100,000 |
| Ending equity | $99,831.29 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Noon 11:30–13:00 | 15 | 33.33% | $-168.71 | $-11.25 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| META | 6 | 4 | 66.67% | $+134.18 | $+22.36 | 5.89 | eligible |
| NVDA | 5 | 1 | 20% | $-85.78 | $-17.16 | 0.16 | throttle |
| GOOGL | 2 | 0 | 0% | $-99.07 | $-49.53 | 0 | watch |
| AMZN | 2 | 0 | 0% | $-118.04 | $-59.02 | 0 | watch |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| MSFT | Alpaca 429 for MSFT: {"message": "too many requests."}
 |
| AAPL | Alpaca 429 for AAPL: {"message": "too many requests."}
 |
| AMD | Alpaca 429 for AMD: {"message": "too many requests."}
 |
| TSLA | Alpaca 429 for TSLA: {"message": "too many requests."}
 |
| AVGO | Alpaca 429 for AVGO: {"message": "too many requests."}
 |
| NFLX | Alpaca 429 for NFLX: {"message": "too many requests."}
 |
| CRM | Alpaca 429 for CRM: {"message": "too many requests."}
 |
| ORCL | Alpaca 429 for ORCL: {"message": "too many requests."}
 |
| ADBE | Alpaca 429 for ADBE: {"message": "too many requests."}
 |
| QCOM | Alpaca 429 for QCOM: {"message": "too many requests."}
 |
| INTC | Alpaca 429 for INTC: {"message": "too many requests."}
 |
| MU | Alpaca 429 for MU: {"message": "too many requests."}
 |
| ARM | Alpaca 429 for ARM: {"message": "too many requests."}
 |
| TSM | Alpaca 429 for TSM: {"message": "too many requests."}
 |
| ASML | Alpaca 429 for ASML: {"message": "too many requests."}
 |
| PLTR | Alpaca 429 for PLTR: {"message": "too many requests."}
 |
| COIN | Alpaca 429 for COIN: {"message": "too many requests."}
 |
| SMCI | Alpaca 429 for SMCI: {"message": "too many requests."}
 |
| SHOP | Alpaca 429 for SHOP: {"message": "too many requests."}
 |
| UBER | Alpaca 429 for UBER: {"message": "too many requests."}
 |
| ABNB | Alpaca 429 for ABNB: {"message": "too many requests."}
 |
| PANW | Alpaca 429 for PANW: {"message": "too many requests."}
 |
| CRWD | Alpaca 429 for CRWD: {"message": "too many requests."}
 |
| NOW | Alpaca 429 for NOW: {"message": "too many requests."}
 |
| DDOG | Alpaca 429 for DDOG: {"message": "too many requests."}
 |
| SNOW | Alpaca 429 for SNOW: {"message": "too many requests."}
 |
| NET | Alpaca 429 for NET: {"message": "too many requests."}
 |
| MDB | Alpaca 429 for MDB: {"message": "too many requests."}
 |
| SQ | insufficient OHLC bars (0 < 360) |
| PYPL | Alpaca 429 for PYPL: {"message": "too many requests."}
 |
| JPM | Alpaca 429 for JPM: {"message": "too many requests."}
 |
| BAC | Alpaca 429 for BAC: {"message": "too many requests."}
 |
| GS | Alpaca 429 for GS: {"message": "too many requests."}
 |
| XOM | Alpaca 429 for XOM: {"message": "too many requests."}
 |
| CVX | Alpaca 429 for CVX: {"message": "too many requests."}
 |
| CAT | Alpaca 429 for CAT: {"message": "too many requests."}
 |
| GE | Alpaca 429 for GE: {"message": "too many requests."}
 |
| BA | Alpaca 429 for BA: {"message": "too many requests."}
 |
| LMT | Alpaca 429 for LMT: {"message": "too many requests."}
 |
| UNH | Alpaca 429 for UNH: {"message": "too many requests."}
 |
| LLY | Alpaca 429 for LLY: {"message": "too many requests."}
 |
| NVO | Alpaca 429 for NVO: {"message": "too many requests."}
 |
| COST | Alpaca 429 for COST: {"message": "too many requests."}
 |
| WMT | Alpaca 429 for WMT: {"message": "too many requests."}
 |
| HD | Alpaca 429 for HD: {"message": "too many requests."}
 |
| MCD | Alpaca 429 for MCD: {"message": "too many requests."}
 |
| DIS | Alpaca 429 for DIS: {"message": "too many requests."}
 |
| V | Alpaca 429 for V: {"message": "too many requests."}
 |
| MA | Alpaca 429 for MA: {"message": "too many requests."}
 |
| ADP | Alpaca 429 for ADP: {"message": "too many requests."}
 |
| INTU | Alpaca 429 for INTU: {"message": "too many requests."}
 |
| TXN | Alpaca 429 for TXN: {"message": "too many requests."}
 |
| AMAT | Alpaca 429 for AMAT: {"message": "too many requests."}
 |
| LRCX | Alpaca 429 for LRCX: {"message": "too many requests."}
 |
| KLAC | Alpaca 429 for KLAC: {"message": "too many requests."}
 |
| MRVL | Alpaca 429 for MRVL: {"message": "too many requests."}
 |
| DELL | Alpaca 429 for DELL: {"message": "too many requests."}
 |
| HPE | Alpaca 429 for HPE: {"message": "too many requests."}
 |
| IBM | Alpaca 429 for IBM: {"message": "too many requests."}
 |
| SBUX | Alpaca 429 for SBUX: {"message": "too many requests."}
 |
| NKE | Alpaca 429 for NKE: {"message": "too many requests."}
 |
| TGT | Alpaca 429 for TGT: {"message": "too many requests."}
 |
| LOW | Alpaca 429 for LOW: {"message": "too many requests."}
 |
| ELF | Alpaca 429 for ELF: {"message": "too many requests."}
 |
| CELH | Alpaca 429 for CELH: {"message": "too many requests."}
 |
| RIVN | Alpaca 429 for RIVN: {"message": "too many requests."}
 |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 6 | 2 | 33.33% | $-90.87 | $-15.14 |
| mean-revert | 9 | 3 | 33.33% | $-77.84 | $-8.65 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| thinChop | 1 | 1 | 100% | $+6.51 | $+6.51 |
| noisyHighBeta | 1 | 0 | 0% | $-34.32 | $-34.32 |
| neutral | 13 | 4 | 30.77% | $-140.9 | $-10.84 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 7 | 0.59 | $-10.32 | 6 | 0.49 | $-11.44 | 0.12% | 0.26 | reject |
| Time slot | Noon 11:30-13:00 | 9 | 0.53 | $-11.12 | 6 | 0.49 | $-11.44 | 0.12% | 0.26 | reject |
| Setup | mean-revert | 5 | 0.97 | $-0.76 | 4 | 0.4 | $-18.51 | 0.12% | 0.26 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-196.02 | 0.46 |
| +3 bps/side | $-250.66 | 0.38 |
| +5 bps/side | $-305.29 | 0.32 |
| +10 bps/side | $-441.9 | 0.21 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stop-loss | 4 |
| timeout | 4 |
| stagnation | 3 |
| early-reversal | 2 |
| breakeven-stop | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | META | 09-15 16:07 | 09-15 16:12 | 770.13 | 770.42 | 14 | 10781.82 | +4.06 | +0.04% | 0.08R | 5m | market | breakeven-stop | trend | trend | neutral | 78.49 | ↑760.11 | 0.9494 | 3.28 | **WIN** |
| 2 | NVDA | 11-14 16:24 | 11-14 16:42 | 189.92 | 189.76 | 58 | 11015.36 | -9.28 | -0.08% | 0.16R | 18m | market | stagnation | trend | trend | neutral | 72.08 | ↑186.14 | 0.3954 | 1.61 | **LOSS** |
| 3 | AMZN | 12-02 16:04 | 12-02 16:12 | 238.35 | 236.53 | 46 | 10964.1 | -83.72 | -0.76% | 1.52R | 8m | market | stop-loss | trend | trend | neutral | 75.7 | ↑235.53 | 0.7298 | 1.81 | **LOSS** |
| 4 | NVDA | 12-03 15:39 | 12-03 15:55 | 181.42 | 180.88 | 46 | 8345.32 | -24.84 | -0.3% | 0.52R | 16m | market | early-reversal | mixed | mean-revert | neutral | 56.09 | ↑180.47 | 0.3162 | 0.86 | **LOSS** |
| 5 | NVDA | 12-04 15:36 | 12-04 15:50 | 182.12 | 182 | 61 | 11109.32 | -7.32 | -0.07% | 0.14R | 14m | market | trailing-stop | trend | trend | neutral | 73.81 | ↑181.39 | 0.2712 | 1.02 | **LOSS** |
| 6 | GOOGL | 01-12 15:30 | 01-12 15:43 | 329.79 | 327.82 | 27 | 8904.33 | -53.19 | -0.6% | 0.65R | 13m | market | stop-loss | mixed | mean-revert | neutral | 62.78 | ↓328.79 | 1.1023 | 1.07 | **LOSS** |
| 7 | META | 01-29 16:58 | 01-29 17:19 | 724.88 | 732.73 | 13 | 9423.44 | +102.05 | +1.08% | 2.08R | 21m | market | timeout | mixed | mean-revert | neutral | 51.3 | ↑724.58 | 1.2332 | 1.34 | **WIN** |
| 8 | AMZN | 02-06 15:50 | 02-06 15:54 | 205.38 | 204.06 | 26 | 5339.88 | -34.32 | -0.64% | 1.23R | 4m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.76 | ↑203.51 | 0.3854 | 1.55 | **LOSS** |
| 9 | META | 02-06 15:50 | 02-06 16:11 | 655.33 | 657.5 | 3 | 1965.99 | +6.51 | +0.33% | 0.66R | 21m | market | timeout | mixed | mean-revert | thinChop | 45.25 | ↑656.25 | 0.6409 | 0.92 | **WIN** |
| 10 | META | 02-09 16:59 | 02-09 17:20 | 679.05 | 682.55 | 14 | 9506.7 | +49 | +0.52% | 1.04R | 21m | market | timeout | mixed | mean-revert | neutral | 59.98 | ↑668.27 | 2.3565 | 0.95 | **WIN** |
| 11 | META | 02-11 16:00 | 02-11 16:16 | 670.31 | 669.01 | 13 | 8714.03 | -16.9 | -0.19% | 0.28R | 16m | market | stagnation | mixed | mean-revert | neutral | 62.68 | ↓669.39 | 2.0658 | 1.27 | **LOSS** |
| 12 | GOOGL | 02-12 16:46 | 02-12 17:02 | 314.32 | 312.84 | 31 | 9743.92 | -45.88 | -0.47% | 0.85R | 16m | market | early-reversal | mixed | mean-revert | neutral | 62.27 | ↑311.84 | 1.1898 | 0.89 | **LOSS** |
| 13 | NVDA | 02-13 15:38 | 02-13 15:46 | 184.14 | 182.91 | 49 | 9022.86 | -60.27 | -0.67% | 1.34R | 8m | market | stop-loss | mixed | mean-revert | neutral | 58.84 | ↓183.94 | 0.313 | 1.66 | **LOSS** |
| 14 | NVDA | 02-20 15:44 | 02-20 16:05 | 189.31 | 189.58 | 59 | 11169.29 | +15.93 | +0.14% | 0.28R | 21m | market | timeout | trend | trend | neutral | 75.09 | ↑187.81 | 0.2733 | 2.37 | **WIN** |
| 15 | META | 04-08 16:47 | 04-08 17:04 | 627.61 | 626.99 | 17 | 10669.37 | -10.54 | -0.1% | 0.16R | 17m | market | stagnation | trend | trend | neutral | 79.13 | ↑605.7 | 3.232 | 1.28 | **LOSS** |

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

- ⚠️ **Profit factor 0.51 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.73R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:47:30.009Z*
