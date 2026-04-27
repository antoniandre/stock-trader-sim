# Bot Trade Report — 342 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:47:24.486Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1104.94 (-1.1%) over 342 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 342 |
| Win rate | 45.03% (154W / 188L) |
| Net P&L | $-1104.94 (-1.1%) |
| Gross profit | $6025.06 |
| Gross loss | $7130 |
| Profit factor | 0.85 |
| Avg win | $39.12 |
| Avg loss | $37.93 |
| Payoff ratio | 1.03:1 |
| Expectancy | $-3.23 / trade |
| Max drawdown | 1.51% |
| Sharpe ratio (ann.) | -1.22 |
| Trades / active day | 1.98 |
| Avg confidence | 88.6% |
| Avg trade duration | 13 min |
| Avg risk ratio | 0.7R |
| Starting equity | $100,000 |
| Ending equity | $98,895.06 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 155 | 46.45% | $-813.9 | $-5.25 |
| Mid  10:30–11:30 | 187 | 43.85% | $-291.04 | $-1.56 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 41 | 21 | 51.22% | $+104.51 | $+2.55 | 1.12 | eligible |
| AMD | 147 | 72 | 48.98% | $+94.66 | $+0.64 | 1.03 | eligible |
| MSFT | 18 | 8 | 44.44% | $-31.05 | $-1.73 | 0.91 | throttle |
| AMZN | 28 | 13 | 46.43% | $-123.2 | $-4.4 | 0.66 | throttle |
| AAPL | 17 | 6 | 35.29% | $-322.13 | $-18.95 | 0.33 | throttle |
| META | 33 | 9 | 27.27% | $-376.17 | $-11.4 | 0.51 | throttle |
| NVDA | 58 | 25 | 43.1% | $-451.56 | $-7.79 | 0.65 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
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
| trend | 102 | 41 | 40.2% | $-841.92 | $-8.25 |
| mean-revert | 240 | 113 | 47.08% | $-263.02 | $-1.1 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 1 | 0 | 0% | $-19.78 | $-19.78 |
| falseBreakoutProne | 4 | 2 | 50% | $-36.58 | $-9.14 |
| thinChop | 17 | 5 | 29.41% | $-90.35 | $-5.31 |
| noisyHighBeta | 34 | 14 | 41.18% | $-307.26 | $-9.04 |
| neutral | 286 | 133 | 46.5% | $-650.97 | $-2.28 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | GOOGL | 27 | 1.4 | $+7.67 | 14 | 0.71 | $-7.32 | 0.3% | 0.5 | watch |
| Symbol | AMD | 96 | 0.9 | $-1.99 | 51 | 1.29 | $+5.61 | 0.36% | 0.9 | reject |
| Setup | mean-revert | 156 | 0.82 | $-3.57 | 84 | 1.23 | $+3.49 | 0.38% | 0.8 | reject |
| Time slot | Open 9:30-10:30 | 120 | 0.67 | $-7.24 | 35 | 1.08 | $+1.56 | 0.25% | 0.73 | reject |
| Behavior | neutral | 174 | 0.87 | $-2.62 | 112 | 0.93 | $-1.74 | 0.84% | 0.62 | reject |
| Symbol | AMZN | 16 | 0.61 | $-4.26 | 12 | 0.71 | $-4.58 | 0.11% | 0.37 | reject |
| Time slot | Mid 10:30-11:30 | 85 | 1.15 | $+2.42 | 102 | 0.8 | $-4.87 | 0.84% | 0.54 | reject |
| Symbol | NVDA | 31 | 0.5 | $-9.86 | 27 | 0.79 | $-5.4 | 0.45% | 0.51 | reject |
| Behavior | thinChop | 10 | 0.32 | $-4.97 | 7 | 0.47 | $-5.81 | 0.06% | 0.35 | reject |
| Behavior | noisyHighBeta | 17 | 0.59 | $-7.08 | 17 | 0.49 | $-10.99 | 0.21% | 0.35 | reject |
| Setup | trend | 49 | 0.88 | $-2.17 | 53 | 0.6 | $-13.88 | 0.85% | 0.42 | reject |
| Symbol | AAPL | 12 | 0.31 | $-17.54 | 5 | 0.35 | $-22.33 | 0.11% | 0.23 | reject |
| Symbol | META | 20 | 0.92 | $-1.29 | 13 | 0.21 | $-26.96 | 0.44% | 0.16 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1679.28 | 0.77 |
| +3 bps/side | $-2828.34 | 0.65 |
| +5 bps/side | $-3977.1 | 0.55 |
| +10 bps/side | $-6849.23 | 0.37 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| trailing-stop | 103 |
| stop-loss | 80 |
| timeout | 53 |
| stagnation | 44 |
| early-reversal | 24 |
| profit-target | 22 |
| trim-profit-target | 12 |
| breakeven-stop | 4 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | META | 04-29 14:07 | 04-29 14:12 | 555.13 | 551.89 | 20 | 11102.6 | -64.8 | -0.58% | 1.16R | 5m | market | stop-loss | trend | trend | neutral | 79.08 | ↑549.14 | 1.3499 | 2.04 | **LOSS** |
| 2 | NVDA | 04-30 14:35 | 04-30 14:50 | 105.81 | 105.86 | 25 | 2645.25 | +1.25 | +0.05% | 0.1R | 15m | market | trailing-stop | mixed | mean-revert | thinChop | 47.17 | ↑105.1 | 0.1483 | 0.92 | **WIN** |
| 3 | NVDA | 05-01 13:30 | 05-01 13:31 | 113.01 | 112.85 | 76 | 8588.76 | -12.16 | -0.14% | 0.28R | 1m | market | trailing-stop | bearish | mean-revert | neutral | 29.18 | ↓113.04 | 0.821 | 18.05 | **LOSS** |
| 4 | AAPL | 05-01 13:39 | 05-01 13:52 | 211.26 | 211.35 | 39 | 8239.14 | +3.51 | +0.04% | 0.04R | 13m | market | breakeven-stop | mixed | mean-revert | neutral | 38.63 | ↑210.92 | 0.0144 | 0.96 | **WIN** |
| 5 | META | 05-02 14:06 | 05-02 14:23 | 590.01 | 590.93 | 18 | 10620.18 | +16.56 | +0.16% | 0.28R | 17m | market | trailing-stop | trend | trend | neutral | 78.18 | ↑583.47 | 2.0486 | 1.67 | **WIN** |
| 6 | META | 05-02 14:40 | 05-02 15:01 | 593.91 | 596.48 | 16 | 9502.56 | +41.12 | +0.43% | 0.83R | 21m | market | timeout | mixed | mean-revert | neutral | 55.43 | ↑588.22 | 1.3168 | 1.57 | **WIN** |
| 7 | AMZN | 05-02 15:20 | 05-02 15:33 | 190.03 | 188.92 | 49 | 9311.47 | -54.39 | -0.58% | 1.16R | 13m | market | stop-loss | mixed | mean-revert | neutral | 54.33 | ↓189 | 0.3964 | 2.38 | **LOSS** |
| 8 | META | 05-05 14:06 | 05-05 14:24 | 598.28 | 597.47 | 16 | 9572.48 | -12.96 | -0.14% | 0.28R | 18m | market | stagnation | mixed | mean-revert | neutral | 65.91 | ↑595.25 | 1.5181 | 1.58 | **LOSS** |
| 9 | NVDA | 05-08 13:30 | 05-08 13:46 | 118.07 | 117.67 | 81 | 9563.67 | -32.4 | -0.34% | 0.68R | 16m | market | early-reversal | bearish | mean-revert | neutral | 26.34 | ↓118.23 | 0.4655 | 17.27 | **LOSS** |
| 10 | AMD | 05-08 13:48 | 05-08 14:05 | 104.21 | 104.18 | 90 | 9378.9 | -2.7 | -0.03% | 0.03R | 17m | market | trailing-stop | mixed | mean-revert | neutral | 59.59 | ↑104.06 | 1.0198 | 0.98 | **LOSS** |
| 11 | GOOGL | 05-12 13:58 | 05-12 14:19 | 157.04 | 157.74 | 60 | 9422.4 | +42 | +0.45% | 0.9R | 21m | market | timeout | mixed | mean-revert | neutral | 47.68 | ↑157.54 | 0.4239 | 1.26 | **WIN** |
| 12 | AAPL | 05-12 14:28 | 05-12 14:49 | 208.97 | 209.8 | 46 | 9612.62 | +38.18 | +0.4% | 0.8R | 21m | market | timeout | mixed | mean-revert | neutral | 32.68 | ↑208.58 | 0.2154 | 2.29 | **WIN** |
| 13 | AMD | 05-13 14:12 | 05-13 14:33 | 110.08 | 110.26 | 85 | 9356.8 | +15.3 | +0.16% | 0.29R | 21m | market | timeout | mixed | mean-revert | neutral | 48.5 | ↑110.01 | 0.1815 | 1.22 | **WIN** |
| 14 | AMD | 05-13 14:57 | 05-13 15:06 | 111.37 | 111.55 | 100 | 11137 | +18 | +0.16% | 0.32R | 9m | market | trailing-stop | trend | trend | neutral | 77.84 | ↑110.13 | 0.1371 | 3.14 | **WIN** |
| 15 | NVDA | 05-13 15:05 | 05-13 15:26 | 129.82 | 130.06 | 75 | 9736.5 | +18 | +0.18% | 0.36R | 21m | market | timeout | mixed | mean-revert | neutral | 46.23 | ↑128.13 | 0.2114 | 1.14 | **WIN** |
| 16 | AMD | 05-14 13:39 | 05-14 13:47 | 121.33 | 119.26 | 80 | 9706.4 | -165.6 | -1.71% | 0.9R | 8m | market | stop-loss | mixed | mean-revert | neutral | 57.08 | ↓120.9 | 1.5809 | 0.92 | **LOSS** |
| 17 | NVDA | 05-14 13:41 | 05-14 13:48 | 133.79 | 132.58 | 71 | 9499.09 | -85.91 | -0.9% | 0.97R | 7m | market | stop-loss | mixed | mean-revert | neutral | 51.35 | ↓133.72 | 0.2222 | 1.51 | **LOSS** |
| 18 | GOOGL | 05-14 13:45 | 05-14 13:48 | 160.71 | 159.68 | 61 | 9803.31 | -62.83 | -0.64% | 1.1R | 3m | market | stop-loss | mixed | mean-revert | neutral | 51.55 | ↓160.98 | 0.4637 | 1.32 | **LOSS** |
| 19 | GOOGL | 05-14 14:51 | 05-14 15:08 | 164.29 | 164.13 | 68 | 11171.72 | -10.88 | -0.1% | 0.2R | 17m | market | stagnation | trend | trend | neutral | 69.68 | ↑161.64 | 0.3955 | 1.51 | **LOSS** |
| 20 | AMZN | 05-15 15:18 | 05-15 15:22 | 203.97 | 204.09 | 43 | 8770.71 | +5.16 | +0.06% | 0.12R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 34.45 | ↓204.75 | 0.0843 | 3 | **WIN** |
| 21 | AMZN | 05-15 15:23 | 05-15 15:44 | 204.03 | 205.4 | 31 | 6324.93 | +42.47 | +0.67% | 1.08R | 21m | market | timeout | mixed | mean-revert | neutral | 41.73 | ↑204.72 | 0.019 | 2.69 | **WIN** |
| 22 | AMZN | 05-16 13:30 | 05-16 13:46 | 205.33 | 204.84 | 43 | 8829.19 | -21.07 | -0.24% | 0.48R | 16m | market | early-reversal | mixed | mean-revert | neutral | 54.1 | ↓205.73 | 0.3359 | 0.99 | **LOSS** |
| 23 | NVDA | 05-16 13:31 | 05-16 13:47 | 135.87 | 135.59 | 72 | 9782.64 | -20.16 | -0.21% | 0.42R | 16m | market | stagnation | mixed | mean-revert | neutral | 30.22 | ↓136.05 | 0.1725 | 8.8 | **LOSS** |
| 24 | AMD | 05-16 14:19 | 05-16 14:24 | 118.26 | 117.6 | 94 | 11116.44 | -62.04 | -0.56% | 1.12R | 5m | market | stop-loss | trend | trend | neutral | 71.77 | ↑117.3 | 0.2443 | 1.41 | **LOSS** |
| 25 | GOOGL | 05-20 13:30 | 05-20 13:44 | 165.91 | 166.74 | 59 | 9788.69 | +48.97 | +0.5% | 1R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 46.74 | ↑165.96 | 0.1475 | 5.96 | **WIN** |
| 26 | GOOGL | 05-21 14:56 | 05-21 15:17 | 171.34 | 172.85 | 65 | 11137.1 | +98.15 | +0.88% | 1.76R | 21m | market | timeout | trend | trend | neutral | 69.6 | ↑168.39 | 0.4223 | 1.55 | **WIN** |
| 27 | NVDA | 05-22 13:33 | 05-22 13:36 | 132.16 | 132.39 | 68 | 8986.88 | +15.64 | +0.17% | 0.31R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 54.13 | ↓132.56 | 0.1646 | 0.99 | **WIN** |
| 28 | AMD | 05-27 14:04 | 05-27 14:20 | 114.71 | 114.47 | 97 | 11126.87 | -23.28 | -0.21% | 0.42R | 16m | market | stagnation | trend | trend | neutral | 69.23 | ↑113.5 | 0.4342 | 1.52 | **LOSS** |
| 29 | NVDA | 05-29 13:31 | 05-29 13:39 | 141.69 | 142.3 | 69 | 9776.61 | +42.09 | +0.43% | 0.74R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 39.6 | ↓141.98 | 0.3373 | 8.95 | **WIN** |
| 30 | GOOGL | 05-29 13:31 | 05-29 13:44 | 173.18 | 173.19 | 52 | 9005.36 | +0.52 | +0.01% | 0.02R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 61.83 | ↓173.54 | 0.2818 | 1.88 | **WIN** |
| 31 | AAPL | 05-29 13:31 | 05-29 13:47 | 202.59 | 201.69 | 36 | 7293.24 | -32.4 | -0.44% | 0.88R | 16m | market | early-reversal | bearish | mean-revert | neutral | 8.75 | ↓203.29 | 0.466 | 2.99 | **LOSS** |
| 32 | AMZN | 05-29 13:41 | 05-29 13:58 | 207.1 | 206.91 | 31 | 6420.1 | -5.89 | -0.09% | 0.12R | 17m | market | stagnation | bearish | mean-revert | neutral | 67.45 | ↓207.79 | 0.6372 | 1.1 | **LOSS** |
| 33 | NVDA | 06-02 13:42 | 06-02 13:58 | 136.83 | 136.2 | 71 | 9714.93 | -44.73 | -0.46% | 0.59R | 16m | market | early-reversal | mixed | mean-revert | neutral | 69.68 | ↓136.94 | 0.5315 | 1.62 | **LOSS** |
| 34 | AMD | 06-02 13:46 | 06-02 14:00 | 112.58 | 112.37 | 86 | 9681.88 | -18.06 | -0.19% | 0.27R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 48.2 | ↓112.73 | 0.4295 | 1.12 | **LOSS** |
| 35 | AMD | 06-03 14:08 | 06-03 14:29 | 115.28 | 116.01 | 74 | 8530.72 | +54.02 | +0.63% | 1.24R | 21m | market | timeout | bearish | mean-revert | neutral | 41.69 | ↑114.97 | 0.2018 | 1.84 | **WIN** |
| 36 | META | 06-04 14:15 | 06-04 14:31 | 685.87 | 683.26 | 16 | 10973.92 | -41.76 | -0.38% | 0.76R | 16m | market | early-reversal | trend | trend | neutral | 68.03 | ↑678.48 | 1.2933 | 1.42 | **LOSS** |
| 37 | NVDA | 06-05 13:34 | 06-05 13:50 | 141.82 | 141.61 | 69 | 9785.58 | -14.49 | -0.15% | 0.25R | 16m | market | stagnation | mixed | mean-revert | neutral | 53.42 | ↓142.46 | 0.1255 | 1.27 | **LOSS** |
| 38 | NVDA | 06-06 13:55 | 06-06 14:11 | 142.17 | 142.07 | 68 | 9667.56 | -6.8 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | neutral | 37.84 | ↓142.51 | 0.2331 | 1.29 | **LOSS** |
| 39 | AMD | 06-06 13:55 | 06-06 14:16 | 117.25 | 117.51 | 20 | 2345 | +5.2 | +0.22% | 0.44R | 21m | market | timeout | mixed | mean-revert | thinChop | 38.4 | ↓117.83 | 0.1574 | 0.96 | **WIN** |
| 40 | AMZN | 06-06 14:05 | 06-06 14:21 | 212.13 | 211.89 | 40 | 8485.2 | -9.6 | -0.11% | 0.22R | 16m | market | stagnation | mixed | mean-revert | neutral | 31.79 | ↓212.24 | 0.2229 | 1.62 | **LOSS** |
| 41 | AMZN | 06-09 13:34 | 06-09 13:46 | 213.58 | 213.81 | 45 | 9611.1 | +10.35 | +0.11% | 0.21R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 47.75 | ↓213.83 | 0.0926 | 2.07 | **WIN** |
| 42 | NVDA | 06-09 13:37 | 06-09 13:56 | 143.83 | 143.67 | 63 | 9061.29 | -10.08 | -0.11% | 0.2R | 19m | market | stagnation | mixed | mean-revert | neutral | 55.4 | ↓143.89 | 0.2536 | 0.96 | **LOSS** |
| 43 | AMD | 06-09 13:41 | 06-09 14:01 | 119.45 | 120.85 | 50 | 5972.5 | +70 | +1.17% | 0.81R | 20m | market | profit-target | mixed | mean-revert | neutral | 72.81 | ↑120.28 | 0.8884 | 1.06 | **WIN** |
| 44 | AMD | 06-09 14:30 | 06-09 14:45 | 122.14 | 121.38 | 91 | 11114.74 | -69.16 | -0.62% | 1.24R | 15m | market | stop-loss | trend | trend | neutral | 67.4 | ↑120.63 | 0.2921 | 2.06 | **LOSS** |
| 45 | AMD | 06-10 13:57 | 06-10 14:18 | 122.34 | 123.17 | 79 | 9664.86 | +65.57 | +0.68% | 1R | 21m | market | timeout | mixed | mean-revert | neutral | 52.32 | ↑121.99 | 0.2066 | 1.14 | **WIN** |
| 46 | AMD | 06-11 13:32 | 06-11 13:43 | 123.71 | 122.78 | 79 | 9773.09 | -73.47 | -0.75% | 1.5R | 11m | market | stop-loss | mixed | mean-revert | neutral | 60.8 | ↓124.07 | 0.2671 | 1.45 | **LOSS** |
| 47 | AAPL | 06-11 13:38 | 06-11 13:54 | 203.4 | 202.68 | 48 | 9763.2 | -34.56 | -0.35% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 61.79 | ↓203.57 | 0.2901 | 0.89 | **LOSS** |
| 48 | AMD | 06-16 14:14 | 06-16 14:33 | 124.28 | 125.25 | 44 | 11060.92 | +42.68 | +0.78% | 1.1R | 19m | market | trim-profit-target | trend | trend | neutral | 69.01 | ↑121.58 | 0.7036 | 1.13 | **WIN** |
| 49 | AMD | 06-16 14:14 | 06-16 14:35 | 124.28 | 125.45 | 45 | 11060.92 | +52.65 | +0.94% | 1.32R | 21m | market | timeout | trend | trend | neutral | 69.01 | ↑121.58 | 0.7036 | 1.13 | **WIN** |
| 50 | AMD | 06-16 14:48 | 06-16 14:56 | 126.73 | 126.69 | 88 | 11152.24 | -3.52 | -0.03% | 0.05R | 8m | market | trailing-stop | trend | trend | neutral | 77.6 | ↑123.39 | 0.5243 | 1.67 | **LOSS** |
| 51 | AMD | 06-17 14:16 | 06-17 14:33 | 130.26 | 130.15 | 85 | 11072.1 | -9.35 | -0.08% | 0.11R | 17m | market | stagnation | trend | trend | neutral | 63.53 | ↑128.69 | 0.3237 | 3.05 | **LOSS** |
| 52 | AMD | 06-20 13:47 | 06-20 13:58 | 131.89 | 131.97 | 74 | 9759.86 | +5.92 | +0.06% | 0.06R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 68.37 | ↑131.02 | 1.2594 | 1.84 | **WIN** |
| 53 | AMD | 06-20 14:08 | 06-20 14:17 | 131.96 | 130.89 | 60 | 7917.6 | -64.2 | -0.81% | 1.16R | 9m | market | stop-loss | bearish | mean-revert | neutral | 49.85 | ↓131.41 | 0.3508 | 1.68 | **LOSS** |
| 54 | AMD | 06-24 14:24 | 06-24 14:40 | 136.65 | 136.19 | 69 | 9428.85 | -31.74 | -0.34% | 0.58R | 16m | market | early-reversal | bearish | mean-revert | neutral | 49.37 | ↑135.65 | 0.3303 | 3.72 | **LOSS** |
| 55 | GOOGL | 06-25 13:45 | 06-25 13:49 | 170.2 | 168.98 | 57 | 9701.4 | -69.54 | -0.72% | 1.01R | 4m | market | stop-loss | mixed | mean-revert | neutral | 68.28 | ↓169.72 | 0.8668 | 0.91 | **LOSS** |
| 56 | AMD | 06-25 14:50 | 06-25 15:06 | 142.73 | 142.05 | 57 | 8135.61 | -38.76 | -0.48% | 0.76R | 16m | market | early-reversal | bearish | mean-revert | neutral | 40.74 | ↑141.33 | 0.4352 | 1.01 | **LOSS** |
| 57 | AMD | 06-26 13:33 | 06-26 13:36 | 143.86 | 143.68 | 45 | 6473.7 | -8.1 | -0.13% | 0.12R | 3m | market | trailing-stop | mixed | mean-revert | falseBreakoutProne | 52.82 | ↓144.5 | 0.3514 | 0.89 | **LOSS** |
| 58 | META | 06-26 14:08 | 06-26 14:29 | 715.71 | 721.81 | 13 | 9304.23 | +79.3 | +0.85% | 1.7R | 21m | market | timeout | mixed | mean-revert | neutral | 57.4 | ↑714.36 | 1.2035 | 0.93 | **WIN** |
| 59 | AMD | 06-27 13:47 | 06-27 13:53 | 146.37 | 145.01 | 66 | 9660.42 | -89.76 | -0.93% | 1.07R | 6m | market | stop-loss | mixed | mean-revert | neutral | 55.95 | ↓146.17 | 0.7063 | 0.89 | **LOSS** |
| 60 | AAPL | 07-01 15:13 | 07-01 15:29 | 208.58 | 207.85 | 46 | 9594.68 | -33.58 | -0.35% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 41.33 | ↓208.49 | 0.1102 | 1.89 | **LOSS** |
| 61 | AMD | 07-08 14:32 | 07-08 14:48 | 138.43 | 138.11 | 80 | 11074.4 | -25.6 | -0.23% | 0.46R | 16m | market | early-reversal | trend | trend | neutral | 71.57 | ↑136.83 | 0.3421 | 1.33 | **LOSS** |
| 62 | AMD | 07-09 13:49 | 07-09 14:04 | 139.16 | 139.83 | 22 | 6262.2 | +14.74 | +0.48% | 0.83R | 15m | market | trim-profit-target | bearish | mean-revert | neutral | 41.84 | ↑139.54 | 0.2673 | 1.44 | **WIN** |
| 63 | AMD | 07-09 13:49 | 07-09 14:10 | 139.16 | 140.1 | 23 | 6262.2 | +21.62 | +0.68% | 1.17R | 21m | market | timeout | bearish | mean-revert | neutral | 41.84 | ↑139.54 | 0.2673 | 1.44 | **WIN** |
| 64 | GOOGL | 07-09 14:04 | 07-09 14:25 | 178.08 | 178.66 | 62 | 11040.96 | +35.96 | +0.33% | 0.66R | 21m | market | timeout | trend | trend | neutral | 74.36 | ↑176.09 | 0.584 | 1.07 | **WIN** |
| 65 | AMD | 07-10 14:46 | 07-10 14:54 | 144.71 | 144.6 | 65 | 9406.15 | -7.15 | -0.08% | 0.16R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 48.57 | ↑143.77 | 0.3318 | 1.41 | **LOSS** |
| 66 | AMD | 07-15 13:51 | 07-15 13:58 | 157.81 | 155.71 | 61 | 9626.41 | -128.1 | -1.33% | 1.21R | 7m | market | stop-loss | mixed | mean-revert | neutral | 54 | ↓156.65 | 1.0855 | 1.23 | **LOSS** |
| 67 | AMD | 07-17 13:33 | 07-17 13:50 | 159.75 | 159.55 | 51 | 8147.25 | -10.2 | -0.13% | 0.17R | 17m | market | stagnation | mixed | mean-revert | neutral | 45.28 | ↓160.55 | 0.3103 | 0.96 | **LOSS** |
| 68 | AMD | 07-21 13:38 | 07-21 13:50 | 157.91 | 157.75 | 40 | 6316.4 | -6.4 | -0.1% | 0.14R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 57.92 | ↓158.68 | 0.3059 | 1.14 | **LOSS** |
| 69 | META | 07-24 13:36 | 07-24 13:58 | 716.79 | 719.42 | 13 | 9318.27 | +34.19 | +0.37% | 0.6R | 22m | market | timeout | mixed | mean-revert | neutral | 55.94 | ↓719.42 | 1.5935 | 1.3 | **WIN** |
| 70 | GOOGL | 07-24 13:42 | 07-24 13:49 | 194.29 | 194.44 | 43 | 8354.47 | +6.45 | +0.08% | 0.06R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 32.81 | ↓195.85 | 1.0894 | 1.01 | **WIN** |
| 71 | AMD | 07-24 14:00 | 07-24 14:09 | 160.84 | 159.61 | 60 | 9650.4 | -73.8 | -0.76% | 1.19R | 9m | market | stop-loss | mixed | mean-revert | neutral | 41.33 | ↓160.6 | 0.3675 | 1.61 | **LOSS** |
| 72 | AMD | 07-25 14:01 | 07-25 14:13 | 165.54 | 166.27 | 67 | 11091.18 | +48.91 | +0.44% | 0.67R | 12m | market | trailing-stop | trend | trend | neutral | 69.18 | ↑163.85 | 0.5496 | 2.41 | **WIN** |
| 73 | AMD | 07-29 13:50 | 07-29 14:03 | 178.11 | 179.37 | 27 | 9617.94 | +34.02 | +0.71% | 0.96R | 13m | market | trim-profit-target | mixed | mean-revert | neutral | 49.86 | ↑177.6 | 0.976 | 3.29 | **WIN** |
| 74 | AMD | 07-29 13:50 | 07-29 14:07 | 178.11 | 179.21 | 27 | 9617.94 | +29.7 | +0.62% | 0.84R | 17m | market | trailing-stop | mixed | mean-revert | neutral | 49.86 | ↑177.6 | 0.976 | 3.29 | **WIN** |
| 75 | AMD | 07-29 14:38 | 07-29 14:53 | 181.55 | 180.48 | 61 | 11074.55 | -65.27 | -0.59% | 1.18R | 15m | market | stop-loss | trend | trend | neutral | 76.68 | ↑178.89 | 0.4004 | 2.62 | **LOSS** |
| 76 | AMD | 07-31 13:32 | 07-31 13:48 | 180.3 | 179.16 | 54 | 9736.2 | -61.56 | -0.63% | 0.85R | 16m | market | early-reversal | mixed | mean-revert | neutral | 59.59 | ↓180.92 | 0.5672 | 3.78 | **LOSS** |
| 77 | AAPL | 08-01 13:35 | 08-01 13:44 | 211.32 | 208.11 | 43 | 9086.76 | -138.03 | -1.52% | 1.01R | 9m | market | stop-loss | mixed | mean-revert | neutral | 39.61 | ↓211.71 | 0.225 | 1.72 | **LOSS** |
| 78 | AMD | 08-01 14:40 | 08-01 14:48 | 171.56 | 171.58 | 49 | 8406.44 | +0.98 | +0.01% | 0.01R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 47.56 | ↑169.64 | 0.5906 | 1.02 | **WIN** |
| 79 | NVDA | 08-04 13:31 | 08-04 13:41 | 174.79 | 175.82 | 19 | 6816.81 | +19.57 | +0.59% | 1.18R | 10m | market | trim-profit-target | bearish | mean-revert | neutral | 19.35 | ↑175.19 | 0.1629 | 9.51 | **WIN** |
| 80 | NVDA | 08-04 13:31 | 08-04 13:46 | 174.79 | 176.91 | 20 | 6816.81 | +42.4 | +1.21% | 2.42R | 15m | market | profit-target | bearish | mean-revert | neutral | 19.35 | ↑175.19 | 0.1629 | 9.51 | **WIN** |
| 81 | AMD | 08-04 13:34 | 08-04 13:46 | 174.3 | 176.83 | 34 | 5926.2 | +86.02 | +1.45% | 1.91R | 12m | market | profit-target | bearish | mean-revert | neutral | 33.47 | ↑174.56 | 0.6389 | 1.18 | **WIN** |
| 82 | AMD | 08-04 13:52 | 08-04 14:10 | 175.7 | 176.31 | 51 | 8960.7 | +31.11 | +0.35% | 0.5R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 55.82 | ↑175.37 | 0.5711 | 0.94 | **WIN** |
| 83 | AAPL | 08-04 14:52 | 08-04 15:13 | 206.41 | 206.56 | 33 | 6811.53 | +4.95 | +0.07% | 0.14R | 21m | market | timeout | bearish | mean-revert | neutral | 23.32 | ↑206.28 | 0.0803 | 1.91 | **WIN** |
| 84 | AMD | 08-05 13:30 | 08-05 13:31 | 177.21 | 174.83 | 55 | 9746.55 | -130.9 | -1.34% | 2R | 1m | market | stop-loss | mixed | mean-revert | neutral | 53.14 | ↓177.32 | 0.3547 | 3.63 | **LOSS** |
| 85 | AAPL | 08-05 13:31 | 08-05 13:52 | 202.58 | 203.13 | 48 | 9723.84 | +26.4 | +0.27% | 0.54R | 21m | market | timeout | mixed | mean-revert | neutral | 48.92 | ↑203.33 | 0.205 | 1.34 | **WIN** |
| 86 | AMD | 08-06 14:09 | 08-06 14:17 | 164.06 | 162.31 | 56 | 9187.36 | -98 | -1.07% | 1.32R | 8m | market | stop-loss | mixed | mean-revert | neutral | 43.24 | ↓164.12 | -0.0688 | 3.13 | **LOSS** |
| 87 | AMD | 08-07 15:09 | 08-07 15:25 | 173.38 | 174.44 | 32 | 11096.32 | +33.92 | +0.61% | 1.2R | 16m | market | trim-profit-target | trend | trend | neutral | 71.65 | ↑170.69 | 0.2704 | 2.65 | **WIN** |
| 88 | AMD | 08-07 15:09 | 08-07 15:27 | 173.38 | 174.12 | 32 | 11096.32 | +23.68 | +0.43% | 0.84R | 18m | market | trailing-stop | trend | trend | neutral | 71.65 | ↑170.69 | 0.2704 | 2.65 | **WIN** |
| 89 | AMD | 08-11 14:09 | 08-11 14:16 | 174.59 | 174.55 | 63 | 10999.17 | -2.52 | -0.02% | 0.04R | 7m | market | breakeven-stop | trend | trend | neutral | 76.19 | ↑172.12 | 0.4888 | 1.18 | **LOSS** |
| 90 | GOOGL | 08-12 13:45 | 08-12 13:48 | 203.14 | 201.81 | 48 | 9750.72 | -63.84 | -0.65% | 1.3R | 3m | market | stop-loss | mixed | mean-revert | neutral | 61.48 | ↓203.47 | 0.633 | 1.07 | **LOSS** |
| 91 | META | 08-12 13:49 | 08-12 13:57 | 785.62 | 781.3 | 12 | 9427.44 | -51.84 | -0.55% | 0.9R | 8m | market | stop-loss | mixed | mean-revert | neutral | 46.74 | ↓784.67 | 4.2182 | 1.03 | **LOSS** |
| 92 | AMD | 08-13 14:06 | 08-13 14:22 | 185.44 | 185.6 | 60 | 11126.4 | +9.6 | +0.09% | 0.11R | 16m | market | trailing-stop | trend | trend | neutral | 59.86 | ↑183.72 | 0.6577 | 1.13 | **WIN** |
| 93 | AAPL | 08-13 14:57 | 08-13 15:12 | 233.41 | 232.02 | 41 | 9569.81 | -56.99 | -0.6% | 1.2R | 15m | market | stop-loss | mixed | mean-revert | neutral | 49.31 | ↓232.19 | 0.3532 | 2.07 | **LOSS** |
| 94 | AMD | 08-14 14:51 | 08-14 15:05 | 181.86 | 180.74 | 35 | 6365.1 | -39.2 | -0.62% | 1.24R | 14m | market | stop-loss | mixed | mean-revert | neutral | 57.58 | ↓182.82 | 0.1123 | 1.12 | **LOSS** |
| 95 | AMZN | 08-15 13:38 | 08-15 13:54 | 232.29 | 231.89 | 42 | 9756.18 | -16.8 | -0.17% | 0.25R | 16m | market | stagnation | mixed | mean-revert | neutral | 58.5 | ↓232.79 | 0.3711 | 3.14 | **LOSS** |
| 96 | AMD | 08-19 14:01 | 08-19 14:16 | 170.3 | 170.04 | 37 | 6301.1 | -9.62 | -0.15% | 0.25R | 15m | market | trailing-stop | mixed | mean-revert | neutral | 50 | ↓170.51 | -0.3835 | 0.99 | **LOSS** |
| 97 | NVDA | 08-21 13:45 | 08-21 13:53 | 175.35 | 175.39 | 50 | 8767.5 | +2 | +0.02% | 0.03R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 48.63 | ↓175.86 | 0.2545 | 2.78 | **WIN** |
| 98 | AMD | 08-22 14:06 | 08-22 14:17 | 166.62 | 167 | 66 | 10996.92 | +25.08 | +0.23% | 0.26R | 11m | market | trailing-stop | trend | trend | neutral | 72.7 | ↑164.1 | 0.6625 | 1.49 | **WIN** |
| 99 | AMD | 08-22 14:19 | 08-22 14:22 | 166.65 | 165.3 | 58 | 9665.7 | -78.3 | -0.81% | 1.16R | 3m | market | stop-loss | mixed | mean-revert | neutral | 55 | ↑164.9 | 0.7298 | 0.87 | **LOSS** |
| 100 | NVDA | 08-22 14:22 | 08-22 14:27 | 176.05 | 175.9 | 44 | 7746.2 | -6.6 | -0.09% | 0.16R | 5m | market | trailing-stop | bearish | mean-revert | neutral | 35.64 | ↑174.95 | 0.433 | 0.98 | **LOSS** |
| 101 | AMZN | 08-22 14:35 | 08-22 14:51 | 226.77 | 226.35 | 49 | 11111.73 | -20.58 | -0.19% | 0.38R | 16m | market | stagnation | trend | trend | neutral | 77.29 | ↑223.79 | 0.5795 | 1.07 | **LOSS** |
| 102 | AMD | 08-22 14:51 | 08-22 15:07 | 167.76 | 167.79 | 58 | 9730.08 | +1.74 | +0.02% | 0.04R | 16m | market | breakeven-stop | mixed | mean-revert | neutral | 51.96 | ↑165.6 | 0.3872 | 0.85 | **WIN** |
| 103 | NVDA | 08-28 13:34 | 08-28 13:49 | 181.03 | 179.33 | 47 | 8508.41 | -79.9 | -0.94% | 0.81R | 15m | market | stop-loss | mixed | mean-revert | neutral | 57.81 | ↓182.75 | 1.1888 | 2.02 | **LOSS** |
| 104 | AMZN | 08-28 13:45 | 08-28 14:04 | 229.2 | 228.97 | 26 | 5959.2 | -5.98 | -0.1% | 0.2R | 19m | market | stagnation | bearish | mean-revert | neutral | 40.32 | ↓230 | 0.1502 | 2.31 | **LOSS** |
| 105 | AMD | 09-03 13:30 | 09-03 13:51 | 161.54 | 163.08 | 58 | 9369.32 | +89.32 | +0.95% | 1.9R | 21m | market | timeout | mixed | mean-revert | neutral | 48.26 | ↑161.55 | 0.1662 | 3.05 | **WIN** |
| 106 | GOOGL | 09-03 14:06 | 09-03 14:15 | 229.21 | 227.64 | 39 | 8939.19 | -61.23 | -0.68% | 1.05R | 9m | market | stop-loss | mixed | mean-revert | neutral | 55.13 | ↓228.14 | 1.1381 | 1.03 | **LOSS** |
| 107 | AMD | 09-03 14:12 | 09-03 14:33 | 162.64 | 162.94 | 59 | 9595.76 | +17.7 | +0.18% | 0.36R | 21m | market | timeout | mixed | mean-revert | neutral | 48.14 | ↑162.22 | 0.1788 | 0.99 | **WIN** |
| 108 | NVDA | 09-03 14:13 | 09-03 14:34 | 170.57 | 171.49 | 34 | 5799.38 | +31.28 | +0.54% | 1.06R | 21m | market | timeout | bearish | mean-revert | neutral | 41.46 | ↑170.68 | 0.0534 | 1.91 | **WIN** |
| 109 | MSFT | 09-05 13:33 | 09-05 13:37 | 507.08 | 502.67 | 5 | 2535.4 | -22.05 | -0.87% | 1.74R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 52.39 | ↓509.3 | 0.3898 | 1.65 | **LOSS** |
| 110 | MSFT | 09-10 13:34 | 09-10 13:46 | 500.29 | 497.42 | 15 | 7504.35 | -43.05 | -0.57% | 0.89R | 12m | market | stop-loss | mixed | mean-revert | falseBreakoutProne | 56.97 | ↓501.81 | 0.8686 | 1.04 | **LOSS** |
| 111 | NVDA | 09-11 13:36 | 09-11 13:52 | 178.15 | 177.84 | 35 | 6235.25 | -10.85 | -0.17% | 0.27R | 16m | market | stagnation | mixed | mean-revert | neutral | 46.7 | ↓179.31 | 0.4569 | 1.58 | **LOSS** |
| 112 | AMD | 09-15 13:33 | 09-15 13:43 | 158.8 | 158.87 | 39 | 6193.2 | +2.73 | +0.04% | 0.05R | 10m | market | trailing-stop | mixed | mean-revert | falseBreakoutProne | 53.31 | ↓159.2 | 0.2655 | 1.09 | **WIN** |
| 113 | GOOGL | 09-15 13:43 | 09-15 14:04 | 248.54 | 250.33 | 38 | 9444.52 | +68.02 | +0.72% | 0.85R | 21m | market | timeout | mixed | mean-revert | neutral | 72.72 | ↑248.26 | 1.9698 | 1.56 | **WIN** |
| 114 | AMD | 09-15 14:49 | 09-15 15:10 | 159.26 | 159.88 | 58 | 9237.08 | +35.96 | +0.39% | 0.78R | 21m | market | timeout | mixed | mean-revert | neutral | 43.2 | ↑158.86 | 0.2523 | 0.88 | **WIN** |
| 115 | AMZN | 09-16 14:10 | 09-16 14:31 | 234.7 | 234.96 | 47 | 11030.9 | +12.22 | +0.11% | 0.22R | 21m | market | timeout | trend | trend | neutral | 71.14 | ↑233.27 | 0.3021 | 2.08 | **WIN** |
| 116 | AMD | 09-23 14:53 | 09-23 15:14 | 161.46 | 162.11 | 60 | 9687.6 | +39 | +0.4% | 0.8R | 21m | market | timeout | mixed | mean-revert | neutral | 47.27 | ↑161.29 | 0.1609 | 0.88 | **WIN** |
| 117 | MSFT | 09-24 13:34 | 09-24 13:50 | 509.56 | 508.71 | 4 | 2038.24 | -3.4 | -0.17% | 0.34R | 16m | market | stagnation | mixed | mean-revert | thinChop | 50.22 | ↓510.96 | 0.3804 | 1.15 | **LOSS** |
| 118 | NVDA | 09-26 13:30 | 09-26 13:39 | 177.39 | 177.66 | 45 | 7982.55 | +12.15 | +0.15% | 0.3R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 48.12 | ↓177.56 | 0.2004 | 4.7 | **WIN** |
| 119 | GOOGL | 09-29 14:00 | 09-29 14:18 | 249.69 | 249.58 | 26 | 6491.94 | -2.86 | -0.04% | 0.08R | 18m | market | trailing-stop | bearish | mean-revert | neutral | 39.41 | ↓249.44 | 0.5009 | 1.6 | **LOSS** |
| 120 | NVDA | 09-30 14:02 | 09-30 14:18 | 184.42 | 184.29 | 60 | 11065.2 | -7.8 | -0.07% | 0.14R | 16m | market | stagnation | trend | trend | neutral | 64.5 | ↑182.88 | 0.3678 | 2.71 | **LOSS** |
| 121 | AMD | 09-30 14:05 | 09-30 14:26 | 160.35 | 161.22 | 60 | 9621 | +52.2 | +0.54% | 1.08R | 21m | market | timeout | mixed | mean-revert | neutral | 57.5 | ↑160.08 | 0.0913 | 2.52 | **WIN** |
| 122 | AMD | 10-01 13:37 | 10-01 13:48 | 161.33 | 161.74 | 60 | 9679.8 | +24.6 | +0.25% | 0.41R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 47.63 | ↑161.59 | 0.2057 | 1.62 | **WIN** |
| 123 | AMD | 10-01 14:03 | 10-01 14:19 | 163.59 | 163.23 | 68 | 11124.12 | -24.48 | -0.22% | 0.35R | 16m | market | stagnation | trend | trend | neutral | 72.56 | ↑161.97 | 0.3725 | 2.71 | **LOSS** |
| 124 | NVDA | 10-02 13:38 | 10-02 13:54 | 189.38 | 188.81 | 49 | 9279.62 | -27.93 | -0.3% | 0.49R | 16m | market | early-reversal | mixed | mean-revert | neutral | 42.98 | ↓190.23 | 0.3156 | 1.35 | **LOSS** |
| 125 | GOOGL | 10-06 13:38 | 10-06 13:59 | 246.01 | 246.52 | 32 | 7872.32 | +16.32 | +0.21% | 0.36R | 21m | market | timeout | mixed | mean-revert | neutral | 55.62 | ↑246.89 | 0.5745 | 0.89 | **WIN** |
| 126 | META | 10-06 14:10 | 10-06 14:28 | 702.03 | 700.76 | 12 | 8424.36 | -15.24 | -0.18% | 0.36R | 18m | market | stagnation | mixed | mean-revert | neutral | 66.79 | ↑696.87 | 1.2984 | 1.16 | **LOSS** |
| 127 | AMD | 10-06 14:31 | 10-06 14:50 | 208.31 | 212.55 | 46 | 9582.26 | +195.04 | +2.04% | 1.62R | 19m | market | profit-target | mixed | mean-revert | neutral | 40.83 | ↓214.74 | 0.0321 | 1.86 | **WIN** |
| 128 | AMD | 10-06 14:55 | 10-06 15:09 | 210.94 | 208.64 | 41 | 8648.54 | -94.3 | -1.09% | 1.05R | 14m | market | stop-loss | mixed | mean-revert | neutral | 57.73 | ↓214.02 | 0.8761 | 1.28 | **LOSS** |
| 129 | AMD | 10-07 13:58 | 10-07 14:15 | 214.29 | 214 | 11 | 2357.19 | -3.19 | -0.14% | 0.16R | 17m | market | stagnation | mixed | mean-revert | thinChop | 33.87 | ↓216.37 | 0.5313 | 0.86 | **LOSS** |
| 130 | AMD | 10-07 14:36 | 10-07 14:52 | 214.38 | 214.26 | 45 | 9647.1 | -5.4 | -0.06% | 0.09R | 16m | market | trailing-stop | mixed | mean-revert | neutral | 56.31 | ↓215.51 | 0.252 | 0.88 | **LOSS** |
| 131 | AMD | 10-08 15:00 | 10-08 15:16 | 224.1 | 223.89 | 27 | 6050.7 | -5.67 | -0.09% | 0.16R | 16m | market | stagnation | trend | trend | noisyHighBeta | 68.31 | ↑220.02 | 0.5646 | 1.28 | **LOSS** |
| 132 | AMD | 10-09 13:33 | 10-09 13:38 | 234.84 | 234.52 | 22 | 5166.48 | -7.04 | -0.14% | 0.11R | 5m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 51.69 | ↓236.82 | 0.8252 | 2.24 | **LOSS** |
| 133 | NVDA | 10-09 13:34 | 10-09 13:51 | 191.85 | 194.11 | 41 | 7865.85 | +92.66 | +1.18% | 2.31R | 17m | market | profit-target | bearish | mean-revert | neutral | 35.11 | ↑192.26 | 0.6038 | 2.12 | **WIN** |
| 134 | META | 10-13 13:34 | 10-13 13:56 | 710.09 | 715.67 | 13 | 9231.17 | +72.54 | +0.79% | 1.58R | 22m | market | timeout | mixed | mean-revert | neutral | 55.61 | ↑712.22 | 0.5118 | 1.37 | **WIN** |
| 135 | NVDA | 10-13 13:36 | 10-13 13:57 | 187.93 | 189.12 | 14 | 2631.02 | +16.66 | +0.63% | 0.81R | 21m | market | timeout | mixed | mean-revert | thinChop | 50.95 | ↑188.37 | 0.3966 | 1.72 | **WIN** |
| 136 | AMD | 10-15 14:10 | 10-15 14:28 | 232.35 | 233.37 | 48 | 11152.8 | +48.96 | +0.44% | 0.64R | 18m | market | trailing-stop | trend | trend | neutral | 60.93 | ↑227.45 | 1.5687 | 1.48 | **WIN** |
| 137 | AMD | 10-15 15:07 | 10-15 15:20 | 238.38 | 236.6 | 25 | 5959.5 | -44.5 | -0.75% | 1.06R | 13m | market | stop-loss | trend | trend | noisyHighBeta | 73.21 | ↑231.5 | 0.9608 | 1.43 | **LOSS** |
| 138 | AMD | 10-16 14:18 | 10-16 14:26 | 240.68 | 238.18 | 25 | 6017 | -62.5 | -1.04% | 1.33R | 8m | market | stop-loss | trend | trend | noisyHighBeta | 77.39 | ↑237.6 | 0.7433 | 1.39 | **LOSS** |
| 139 | AMD | 10-17 14:30 | 10-17 14:36 | 234.01 | 232.47 | 22 | 5148.22 | -33.88 | -0.66% | 1.14R | 6m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 46.2 | ↓232.53 | 0.3803 | 1.55 | **LOSS** |
| 140 | AMD | 10-27 13:34 | 10-27 13:41 | 254.42 | 254.54 | 34 | 8650.28 | +4.08 | +0.05% | 0.04R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 54.3 | ↓255.65 | 0.8313 | 2.64 | **WIN** |
| 141 | AMD | 10-27 13:45 | 10-27 14:00 | 253.77 | 253.67 | 34 | 8628.18 | -3.4 | -0.04% | 0.04R | 15m | market | trailing-stop | mixed | mean-revert | neutral | 38.79 | ↓255.26 | 0.0396 | 2.09 | **LOSS** |
| 142 | AMD | 10-28 13:30 | 10-28 13:33 | 258.34 | 259.22 | 34 | 8783.56 | +29.92 | +0.34% | 0.64R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 45.32 | ↑258.57 | 0.2759 | 1.35 | **WIN** |
| 143 | NVDA | 10-28 13:38 | 10-28 13:47 | 194.5 | 193.34 | 49 | 9530.5 | -56.84 | -0.6% | 1.03R | 9m | market | stop-loss | mixed | mean-revert | neutral | 70.54 | ↓194.53 | 0.8544 | 1.19 | **LOSS** |
| 144 | AMD | 10-28 14:02 | 10-28 14:09 | 262.78 | 262.56 | 42 | 11036.76 | -9.24 | -0.08% | 0.13R | 7m | market | trailing-stop | trend | trend | neutral | 74.89 | ↑260.09 | 0.4807 | 1.36 | **LOSS** |
| 145 | NVDA | 10-29 13:39 | 10-29 13:51 | 210.13 | 210.29 | 46 | 9665.98 | +7.36 | +0.08% | 0.09R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 65.4 | ↑209.71 | 1.8412 | 1.62 | **WIN** |
| 146 | AMD | 10-29 13:59 | 10-29 14:15 | 265.55 | 265.08 | 36 | 9559.8 | -16.92 | -0.18% | 0.33R | 16m | market | stagnation | mixed | mean-revert | neutral | 47.81 | ↓265.48 | 0.7556 | 1.16 | **LOSS** |
| 147 | AAPL | 10-30 13:34 | 10-30 13:52 | 271.51 | 271.35 | 34 | 9231.34 | -5.44 | -0.06% | 0.09R | 18m | market | stagnation | mixed | mean-revert | neutral | 56.98 | ↓272.74 | 0.9161 | 2.28 | **LOSS** |
| 148 | META | 10-30 14:01 | 10-30 14:16 | 668.4 | 662.96 | 4 | 2673.6 | -21.76 | -0.81% | 0.89R | 15m | market | stop-loss | mixed | mean-revert | thinChop | 55.74 | ↓663.28 | -2.6092 | 0.97 | **LOSS** |
| 149 | GOOGL | 10-31 13:31 | 10-31 13:42 | 284.57 | 281.49 | 34 | 9675.38 | -104.72 | -1.08% | 0.97R | 11m | market | stop-loss | mixed | mean-revert | neutral | 53.63 | ↓284.85 | 0.4165 | 1.29 | **LOSS** |
| 150 | AMD | 10-31 13:45 | 10-31 13:56 | 258.27 | 260.51 | 12 | 6456.75 | +26.88 | +0.87% | 1.24R | 11m | market | trim-profit-target | mixed | mean-revert | neutral | 46.7 | ↑259.3 | 0.4839 | 1.33 | **WIN** |
| 151 | AMD | 10-31 13:45 | 10-31 13:57 | 258.27 | 259.7 | 13 | 6456.75 | +18.59 | +0.55% | 0.79R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 46.7 | ↑259.3 | 0.4839 | 1.33 | **WIN** |
| 152 | NVDA | 11-03 14:33 | 11-03 14:35 | 209.39 | 207.42 | 53 | 11097.67 | -104.41 | -0.94% | 1.54R | 2m | market | stop-loss | trend | trend | neutral | 75.14 | ↓208.73 | 1.2224 | 1.6 | **LOSS** |
| 153 | AMD | 11-03 14:33 | 11-03 14:48 | 258.21 | 256.2 | 35 | 9037.35 | -70.35 | -0.78% | 0.9R | 15m | market | stop-loss | mixed | mean-revert | neutral | 50.73 | ↓259.64 | 0.2736 | 0.93 | **LOSS** |
| 154 | NVDA | 11-03 14:37 | 11-03 14:53 | 208.08 | 207.86 | 46 | 9571.68 | -10.12 | -0.11% | 0.16R | 16m | market | stagnation | mixed | mean-revert | neutral | 48.89 | ↓208.57 | 0.8929 | 1.47 | **LOSS** |
| 155 | AMZN | 11-03 14:37 | 11-03 14:46 | 256.34 | 256.23 | 38 | 9740.92 | -4.18 | -0.04% | 0.04R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 42.47 | ↓256.77 | 1.4216 | 1.3 | **LOSS** |
| 156 | META | 11-03 15:15 | 11-03 15:22 | 655.48 | 651.81 | 12 | 7865.76 | -44.04 | -0.56% | 1.12R | 7m | market | stop-loss | mixed | mean-revert | neutral | 48.87 | ↓655.44 | 0.6429 | 1.01 | **LOSS** |
| 157 | META | 11-04 15:00 | 11-04 15:12 | 637.92 | 637.89 | 4 | 2551.68 | -0.12 | 0% | 0R | 12m | market | trailing-stop | mixed | mean-revert | thinChop | 63.22 | ↑633.66 | 1.0956 | 1.22 | **LOSS** |
| 158 | AMD | 11-04 15:06 | 11-04 15:27 | 254.36 | 256.51 | 38 | 9665.68 | +81.7 | +0.85% | 1.7R | 21m | market | timeout | mixed | mean-revert | neutral | 36.43 | ↑251.72 | 0.291 | 2.18 | **WIN** |
| 159 | GOOGL | 11-05 14:39 | 11-05 15:00 | 280.26 | 283.82 | 39 | 10930.14 | +138.84 | +1.27% | 2.19R | 21m | market | timeout | trend | trend | neutral | 74.2 | ↑278.53 | 0.4499 | 1.13 | **WIN** |
| 160 | AMD | 11-05 14:44 | 11-05 14:54 | 246.77 | 251.55 | 38 | 9377.26 | +181.64 | +1.94% | 1.02R | 10m | market | profit-target | mixed | mean-revert | neutral | 52.32 | ↑246.22 | -0.0989 | 1.03 | **WIN** |
| 161 | AMD | 11-05 15:03 | 11-05 15:07 | 250.08 | 251.26 | 30 | 7502.4 | +35.4 | +0.47% | 0.5R | 4m | market | trailing-stop | bearish | mean-revert | neutral | 50.85 | ↑247.88 | 1.0077 | 1.36 | **WIN** |
| 162 | GOOGL | 11-06 14:30 | 11-06 14:35 | 284.86 | 285.46 | 34 | 9685.24 | +20.4 | +0.21% | 0.28R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 49.89 | ↓285.08 | 0.5585 | 4.46 | **WIN** |
| 163 | AMZN | 11-06 14:35 | 11-06 14:50 | 248.79 | 248.82 | 28 | 6966.12 | +0.84 | +0.01% | 0.02R | 15m | market | breakeven-stop | mixed | mean-revert | neutral | 37.18 | ↓249.53 | 0.0709 | 0.93 | **WIN** |
| 164 | NVDA | 11-06 14:41 | 11-06 14:51 | 195.89 | 194.1 | 11 | 2154.79 | -19.69 | -0.91% | 0.88R | 10m | market | stop-loss | mixed | mean-revert | thinChop | 49.83 | ↓196.45 | 0.0179 | 1.38 | **LOSS** |
| 165 | AAPL | 11-06 15:19 | 11-06 15:37 | 271.73 | 271.59 | 41 | 11140.93 | -5.74 | -0.05% | 0.1R | 18m | market | trailing-stop | trend | trend | neutral | 74.55 | ↑269.33 | 0.4611 | 1.12 | **LOSS** |
| 166 | AMD | 11-07 15:03 | 11-07 15:18 | 230.92 | 231.56 | 15 | 3463.8 | +9.6 | +0.28% | 0.34R | 15m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 62.53 | ↑230.8 | -0.1955 | 1.77 | **WIN** |
| 167 | META | 11-10 14:34 | 11-10 14:48 | 625.83 | 628.68 | 7 | 9387.45 | +19.95 | +0.46% | 0.67R | 14m | market | trim-profit-target | mixed | mean-revert | neutral | 65.04 | ↑628.66 | 2.3097 | 1.06 | **WIN** |
| 168 | META | 11-10 14:34 | 11-10 14:55 | 625.83 | 630.43 | 8 | 9387.45 | +36.8 | +0.74% | 1.07R | 21m | market | timeout | mixed | mean-revert | neutral | 65.04 | ↑628.66 | 2.3097 | 1.06 | **WIN** |
| 169 | AMD | 11-10 14:44 | 11-10 15:05 | 244.89 | 246.26 | 25 | 6122.25 | +34.25 | +0.56% | 0.55R | 21m | market | timeout | trend | trend | noisyHighBeta | 74.45 | ↑243.12 | 2.8436 | 1.48 | **WIN** |
| 170 | GOOGL | 11-11 15:05 | 11-11 15:23 | 289.4 | 288.9 | 22 | 6366.8 | -11 | -0.17% | 0.34R | 18m | market | stagnation | mixed | mean-revert | neutral | 50.41 | ↓289.31 | 0.1067 | 1.13 | **LOSS** |
| 171 | AMD | 11-12 14:27 | 11-12 14:30 | 253.6 | 254.17 | 24 | 6086.4 | +13.68 | +0.22% | 0.2R | 3m | market | trailing-stop | trend | trend | noisyHighBeta | 77.81 | ↓252.71 | 3.1262 | 1.24 | **WIN** |
| 172 | NVDA | 11-12 14:31 | 11-12 14:40 | 194.49 | 193.28 | 50 | 9724.5 | -60.5 | -0.62% | 1.15R | 9m | market | stop-loss | mixed | mean-revert | neutral | 62.14 | ↓195.01 | 0.4199 | 0.96 | **LOSS** |
| 173 | AMD | 11-12 14:40 | 11-12 14:44 | 254.7 | 253.98 | 38 | 9678.6 | -27.36 | -0.28% | 0.21R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 56.99 | ↓255.82 | 2.7092 | 1.24 | **LOSS** |
| 174 | AMD | 11-12 15:16 | 11-12 15:22 | 260.99 | 261.29 | 23 | 6002.77 | +6.9 | +0.11% | 0.09R | 6m | market | trailing-stop | trend | trend | noisyHighBeta | 77.14 | ↑255.21 | 2.0067 | 1.64 | **WIN** |
| 175 | AMD | 11-13 15:02 | 11-13 15:13 | 253.7 | 257.58 | 18 | 4566.6 | +69.84 | +1.53% | 1.55R | 11m | market | profit-target | mixed | mean-revert | noisyHighBeta | 62.09 | ↑252.63 | 0.3375 | 1.14 | **WIN** |
| 176 | AMD | 11-13 15:14 | 11-13 15:22 | 258.94 | 256.62 | 23 | 5955.62 | -53.36 | -0.9% | 0.98R | 8m | market | stop-loss | trend | trend | noisyHighBeta | 65.28 | ↑253.49 | 1.1304 | 1.6 | **LOSS** |
| 177 | GOOGL | 11-17 14:35 | 11-17 14:55 | 291.38 | 292.48 | 38 | 11072.44 | +41.8 | +0.38% | 0.31R | 20m | market | trailing-stop | trend | trend | neutral | 78.82 | ↑288.51 | 2.9906 | 2.3 | **WIN** |
| 178 | GOOGL | 11-18 14:30 | 11-18 14:35 | 285.74 | 285.84 | 28 | 8000.72 | +2.8 | +0.03% | 0.04R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 50.35 | ↓286.71 | 0.6882 | 2.22 | **WIN** |
| 179 | AMD | 11-19 15:15 | 11-19 15:31 | 234.74 | 234.47 | 26 | 6103.24 | -7.02 | -0.12% | 0.18R | 16m | market | stagnation | trend | trend | noisyHighBeta | 76.33 | ↑230.57 | 0.9191 | 1.66 | **LOSS** |
| 180 | AMZN | 11-19 15:19 | 11-19 15:35 | 220.81 | 219.84 | 37 | 8169.97 | -35.89 | -0.44% | 0.88R | 16m | market | early-reversal | mixed | mean-revert | neutral | 37.63 | ↓220.72 | 0.2019 | 1.16 | **LOSS** |
| 181 | AMD | 11-20 14:36 | 11-20 14:40 | 231.03 | 230.58 | 21 | 4851.63 | -9.45 | -0.19% | 0.17R | 4m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 60.04 | ↓231.79 | 1.6352 | 1.11 | **LOSS** |
| 182 | AAPL | 11-20 14:40 | 11-20 15:01 | 274.05 | 274.63 | 40 | 10962 | +23.2 | +0.21% | 0.26R | 21m | market | timeout | trend | trend | neutral | 78.72 | ↑272.94 | 1.065 | 1.09 | **WIN** |
| 183 | GOOGL | 11-21 14:39 | 11-21 14:42 | 297.66 | 297.56 | 32 | 9525.12 | -3.2 | -0.03% | 0.02R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 56.01 | ↓298.53 | 2.1647 | 2.54 | **LOSS** |
| 184 | GOOGL | 11-21 14:56 | 11-21 15:01 | 299.58 | 296.91 | 32 | 9586.56 | -85.44 | -0.89% | 1.11R | 5m | market | stop-loss | mixed | mean-revert | neutral | 60.7 | ↓298.83 | 1.2925 | 0.86 | **LOSS** |
| 185 | GOOGL | 11-24 14:36 | 11-24 14:50 | 315.9 | 316.19 | 35 | 11056.5 | +10.15 | +0.09% | 0.11R | 14m | market | trailing-stop | trend | trend | neutral | 71.25 | ↑313.28 | 2.5418 | 1.27 | **WIN** |
| 186 | AMD | 11-24 14:44 | 11-24 14:49 | 209.92 | 211.22 | 25 | 5248 | +32.5 | +0.62% | 0.49R | 5m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 73.39 | ↑209.72 | 1.4626 | 2.89 | **WIN** |
| 187 | AMD | 11-24 14:50 | 11-24 14:53 | 210.8 | 210.53 | 25 | 5270 | -6.75 | -0.13% | 0.11R | 3m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 52.69 | ↑210.07 | 1.3655 | 0.89 | **LOSS** |
| 188 | META | 11-24 14:53 | 11-24 15:11 | 608.6 | 607.69 | 18 | 10954.8 | -16.38 | -0.15% | 0.21R | 18m | market | stagnation | trend | trend | neutral | 73.67 | ↑602.23 | 2.275 | 1.22 | **LOSS** |
| 189 | GOOGL | 11-25 14:32 | 11-25 14:37 | 320.52 | 324.77 | 21 | 6730.92 | +89.25 | +1.33% | 0.85R | 5m | market | profit-target | mixed | mean-revert | neutral | 53.54 | ↑322.88 | 1.3917 | 2.06 | **WIN** |
| 190 | GOOGL | 11-25 14:45 | 11-25 14:49 | 322.48 | 322.77 | 23 | 7417.04 | +6.67 | +0.09% | 0.07R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 53.14 | ↓323.91 | 0.5085 | 1.22 | **WIN** |
| 191 | GOOGL | 11-25 15:02 | 11-25 15:19 | 324.14 | 327.91 | 27 | 8751.78 | +101.79 | +1.16% | 1.32R | 17m | market | profit-target | mixed | mean-revert | neutral | 51.24 | ↑324.07 | 0.3837 | 1.15 | **WIN** |
| 192 | META | 11-25 15:02 | 11-25 15:21 | 624.11 | 624.15 | 15 | 9361.65 | +0.6 | +0.01% | 0.02R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 49.8 | ↑622.81 | 1.4337 | 1.24 | **WIN** |
| 193 | NVDA | 11-26 14:30 | 11-26 14:34 | 181.86 | 182 | 33 | 6001.38 | +4.62 | +0.08% | 0.11R | 4m | market | trailing-stop | trend | trend | noisyHighBeta | 77.24 | ↓181.49 | 1.0932 | 4.31 | **WIN** |
| 194 | AMD | 11-26 14:38 | 11-26 14:51 | 209.58 | 209.9 | 37 | 7754.46 | +11.84 | +0.15% | 0.1R | 13m | market | trailing-stop | mixed | mean-revert | falseBreakoutProne | 58.18 | ↓210.53 | 1.3837 | 1.08 | **WIN** |
| 195 | AMZN | 11-28 14:33 | 11-28 14:54 | 231.24 | 231.75 | 48 | 11099.52 | +24.48 | +0.22% | 0.39R | 21m | market | timeout | trend | trend | neutral | 69.69 | ↑231.28 | 0.3297 | 1.47 | **WIN** |
| 196 | AMD | 11-28 14:34 | 11-28 14:40 | 216.66 | 214.46 | 28 | 6066.48 | -61.6 | -1.02% | 1.59R | 6m | market | stop-loss | trend | trend | noisyHighBeta | 79.91 | ↓215.59 | 0.2192 | 1.9 | **LOSS** |
| 197 | META | 11-28 14:43 | 11-28 15:04 | 641.36 | 640.54 | 17 | 10903.12 | -13.94 | -0.13% | 0.26R | 21m | market | stagnation | trend | trend | neutral | 74.62 | ↑638.21 | 1.2937 | 1.81 | **LOSS** |
| 198 | AMZN | 12-01 14:41 | 12-01 15:02 | 234.32 | 234.58 | 41 | 9607.12 | +10.66 | +0.11% | 0.14R | 21m | market | timeout | mixed | mean-revert | neutral | 57.49 | ↑234.25 | 0.6121 | 3.16 | **WIN** |
| 199 | AMD | 12-01 14:47 | 12-01 15:03 | 219.15 | 217.94 | 51 | 11176.65 | -61.71 | -0.55% | 0.63R | 16m | market | early-reversal | breakout | trend | neutral | 76.32 | ↑215.6 | 0.3213 | 1.1 | **LOSS** |
| 200 | META | 12-02 14:30 | 12-02 14:46 | 642.16 | 638.98 | 13 | 8348.08 | -41.34 | -0.5% | 1R | 16m | market | early-reversal | mixed | mean-revert | neutral | 53.66 | ↓642.5 | 0.6494 | 1.67 | **LOSS** |
| 201 | AMD | 12-02 14:53 | 12-02 15:03 | 224.22 | 224.27 | 43 | 9641.46 | +2.15 | +0.02% | 0.03R | 10m | market | trailing-stop | mixed | mean-revert | neutral | 51.36 | ↑223.41 | 0.8616 | 2.44 | **WIN** |
| 202 | GOOGL | 12-03 14:36 | 12-03 14:52 | 316.35 | 314.88 | 31 | 9806.85 | -45.57 | -0.46% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 54.18 | ↓316.77 | 0.4128 | 1.21 | **LOSS** |
| 203 | META | 12-04 15:12 | 12-04 15:28 | 665.03 | 664.16 | 3 | 1995.09 | -2.61 | -0.13% | 0.26R | 16m | market | stagnation | mixed | mean-revert | thinChop | 53.73 | ↓664.99 | 1.336 | 1.01 | **LOSS** |
| 204 | AMD | 12-05 14:40 | 12-05 15:01 | 217.99 | 219.66 | 31 | 6757.69 | +51.77 | +0.77% | 0.76R | 21m | market | timeout | mixed | mean-revert | neutral | 60.94 | ↑219.72 | 0.9221 | 1.17 | **WIN** |
| 205 | AMD | 12-05 15:07 | 12-05 15:19 | 222.33 | 222.46 | 50 | 11116.5 | +6.5 | +0.06% | 0.1R | 12m | market | trailing-stop | trend | trend | neutral | 77.8 | ↑219.72 | 0.948 | 1.86 | **WIN** |
| 206 | NVDA | 12-08 14:38 | 12-08 14:52 | 185.28 | 183.9 | 60 | 11116.8 | -82.8 | -0.74% | 0.97R | 14m | market | stop-loss | trend | trend | neutral | 78.62 | ↓184.75 | 0.847 | 1.07 | **LOSS** |
| 207 | AMD | 12-08 14:47 | 12-08 15:03 | 221.54 | 221.38 | 44 | 9747.76 | -7.04 | -0.07% | 0.08R | 16m | market | stagnation | mixed | mean-revert | neutral | 48.55 | ↓221.4 | 0.9182 | 0.9 | **LOSS** |
| 208 | AMD | 12-09 15:05 | 12-09 15:22 | 222.17 | 221.99 | 50 | 11108.5 | -9 | -0.08% | 0.12R | 17m | market | stagnation | trend | trend | neutral | 67 | ↑219.73 | 0.4542 | 2.58 | **LOSS** |
| 209 | AMD | 12-09 15:29 | 12-09 15:38 | 223.62 | 223.72 | 49 | 10957.38 | +4.9 | +0.04% | 0.08R | 9m | market | trailing-stop | trend | trend | neutral | 62.65 | ↑220.56 | 0.4491 | 1.5 | **WIN** |
| 210 | AMD | 12-15 14:49 | 12-15 14:56 | 215.26 | 212.64 | 51 | 10978.26 | -133.62 | -1.22% | 1.3R | 7m | market | stop-loss | trend | trend | neutral | 66.24 | ↓213.28 | 0.7228 | 1.14 | **LOSS** |
| 211 | GOOGL | 12-16 15:03 | 12-16 15:17 | 309.29 | 307.28 | 9 | 2783.61 | -18.09 | -0.65% | 1.3R | 14m | market | stop-loss | mixed | mean-revert | thinChop | 65.35 | ↓307.2 | 0.7704 | 0.93 | **LOSS** |
| 212 | AMZN | 12-18 14:55 | 12-18 15:11 | 226.43 | 225.77 | 49 | 11095.07 | -32.34 | -0.29% | 0.58R | 16m | market | early-reversal | trend | trend | neutral | 74.03 | ↓225.63 | 0.5423 | 1.45 | **LOSS** |
| 213 | NVDA | 12-19 14:30 | 12-19 14:37 | 177.04 | 177.51 | 63 | 11153.52 | +29.61 | +0.27% | 0.47R | 7m | market | trailing-stop | breakout | trend | neutral | 75.86 | ↓176.77 | 0.2995 | 1.33 | **WIN** |
| 214 | META | 12-22 14:44 | 12-22 14:52 | 672.82 | 669.12 | 16 | 10765.12 | -59.2 | -0.55% | 0.83R | 8m | market | stop-loss | trend | trend | neutral | 76.32 | ↑667.58 | 1.7177 | 3.9 | **LOSS** |
| 215 | GOOGL | 12-30 14:36 | 12-30 14:52 | 314.57 | 314.4 | 9 | 2831.13 | -1.53 | -0.05% | 0.09R | 16m | market | stagnation | mixed | mean-revert | thinChop | 56.59 | ↓315.3 | 0.5145 | 1.89 | **LOSS** |
| 216 | NVDA | 12-31 14:36 | 12-31 14:46 | 189.27 | 188.1 | 50 | 9463.5 | -58.5 | -0.62% | 1.24R | 10m | market | stop-loss | mixed | mean-revert | neutral | 54.68 | ↓189.88 | 0.4061 | 2.02 | **LOSS** |
| 217 | AMD | 12-31 14:49 | 12-31 14:57 | 217.14 | 215.45 | 51 | 11074.14 | -86.19 | -0.78% | 1.39R | 8m | market | stop-loss | trend | trend | neutral | 59.62 | ↓215.81 | 0.2661 | 1.43 | **LOSS** |
| 218 | NVDA | 01-02 14:33 | 01-02 14:39 | 190.79 | 190.89 | 58 | 11065.82 | +5.8 | +0.05% | 0.07R | 6m | market | trailing-stop | trend | trend | neutral | 79.61 | ↑190.43 | 0.745 | 1.83 | **WIN** |
| 219 | NVDA | 01-02 14:50 | 01-02 14:59 | 192.93 | 191.64 | 57 | 10997.01 | -73.53 | -0.67% | 1.22R | 9m | market | stop-loss | trend | trend | neutral | 67.25 | ↑191.34 | 1.0206 | 1.75 | **LOSS** |
| 220 | NVDA | 01-05 14:35 | 01-05 14:40 | 192.36 | 190.71 | 50 | 9618 | -82.5 | -0.86% | 1.54R | 5m | market | stop-loss | mixed | mean-revert | neutral | 52.32 | ↓192.79 | 0.6449 | 1.49 | **LOSS** |
| 221 | AMZN | 01-05 14:44 | 01-05 15:00 | 231.35 | 231.05 | 48 | 11104.8 | -14.4 | -0.13% | 0.2R | 16m | market | stagnation | trend | trend | neutral | 74.71 | ↑229.14 | 1.1033 | 1.05 | **LOSS** |
| 222 | MSFT | 01-07 14:35 | 01-07 14:56 | 483.15 | 483.63 | 23 | 11112.45 | +11.04 | +0.1% | 0.2R | 21m | market | timeout | trend | trend | neutral | 79.35 | ↑480.78 | 1.0836 | 1.31 | **WIN** |
| 223 | NVDA | 01-07 14:56 | 01-07 15:17 | 190.03 | 190.33 | 58 | 11021.74 | +17.4 | +0.16% | 0.32R | 21m | market | timeout | trend | trend | neutral | 77.57 | ↑188.08 | 0.47 | 1.93 | **WIN** |
| 224 | GOOGL | 01-07 14:58 | 01-07 15:14 | 320.15 | 319.95 | 24 | 7683.6 | -4.8 | -0.06% | 0.1R | 16m | market | stagnation | bearish | mean-revert | neutral | 42.81 | ↑319.07 | 1.0936 | 1.24 | **LOSS** |
| 225 | GOOGL | 01-08 14:32 | 01-08 14:44 | 326.28 | 323.32 | 34 | 11093.52 | -100.64 | -0.91% | 1.07R | 12m | market | stop-loss | breakout | trend | neutral | 71.06 | ↓326.76 | 1.1513 | 1.76 | **LOSS** |
| 226 | AMZN | 01-08 14:34 | 01-08 14:45 | 242.74 | 242.46 | 40 | 9709.6 | -11.2 | -0.12% | 0.24R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 57.65 | ↓243.33 | 0.2382 | 1.48 | **LOSS** |
| 227 | GOOGL | 01-09 14:44 | 01-09 14:52 | 330.17 | 328.24 | 33 | 10895.61 | -63.69 | -0.58% | 0.83R | 8m | market | stop-loss | trend | trend | neutral | 67.42 | ↓328.03 | 0.9821 | 1.32 | **LOSS** |
| 228 | AMD | 01-12 15:00 | 01-12 15:20 | 206.19 | 208.73 | 14 | 2886.66 | +35.56 | +1.23% | 2.05R | 20m | market | profit-target | mixed | mean-revert | thinChop | 58.33 | ↑204.52 | 0.5855 | 0.91 | **WIN** |
| 229 | AMD | 01-13 14:41 | 01-13 14:50 | 221.27 | 221.04 | 50 | 11063.5 | -11.5 | -0.1% | 0.06R | 9m | market | trailing-stop | trend | trend | neutral | 77.69 | ↑219.13 | 2.6577 | 1.48 | **LOSS** |
| 230 | GOOGL | 01-13 14:42 | 01-13 14:55 | 340.08 | 337.61 | 32 | 10882.56 | -79.04 | -0.73% | 0.82R | 13m | market | stop-loss | trend | trend | neutral | 79.38 | ↓337.15 | 1.931 | 1.08 | **LOSS** |
| 231 | AAPL | 01-14 14:37 | 01-14 14:53 | 260.34 | 259.12 | 10 | 2603.4 | -12.2 | -0.47% | 0.94R | 16m | market | early-reversal | mixed | mean-revert | thinChop | 42.07 | ↓260.46 | 0.2189 | 0.9 | **LOSS** |
| 232 | AMD | 01-14 15:00 | 01-14 15:14 | 216.33 | 219.41 | 45 | 9734.85 | +138.6 | +1.42% | 2.54R | 14m | market | profit-target | mixed | mean-revert | neutral | 49.63 | ↑216.65 | -0.3601 | 2.1 | **WIN** |
| 233 | MSFT | 01-15 14:30 | 01-15 14:46 | 461.08 | 459.15 | 21 | 9682.68 | -40.53 | -0.42% | 0.79R | 16m | market | early-reversal | mixed | mean-revert | neutral | 56.2 | ↓461.87 | 1.0754 | 1.96 | **LOSS** |
| 234 | AMD | 01-15 14:41 | 01-15 14:48 | 231.44 | 235.29 | 41 | 9489.04 | +157.85 | +1.66% | 0.83R | 7m | market | profit-target | mixed | mean-revert | neutral | 74.72 | ↑232.19 | 2.3767 | 0.96 | **WIN** |
| 235 | NVDA | 01-15 14:43 | 01-15 14:59 | 188.51 | 188.26 | 59 | 11122.09 | -14.75 | -0.13% | 0.18R | 16m | market | stagnation | trend | trend | neutral | 79.89 | ↑187.1 | 1.1092 | 1.08 | **LOSS** |
| 236 | AMD | 01-15 14:57 | 01-15 15:10 | 235.09 | 236.65 | 20 | 9638.69 | +31.2 | +0.66% | 0.73R | 13m | market | trim-profit-target | mixed | mean-revert | neutral | 62.76 | ↑233.77 | 1.736 | 2.63 | **WIN** |
| 237 | AMD | 01-15 14:57 | 01-15 15:11 | 235.09 | 236.32 | 21 | 9638.69 | +25.83 | +0.52% | 0.57R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 62.76 | ↑233.77 | 1.736 | 2.63 | **WIN** |
| 238 | AMD | 01-20 15:18 | 01-20 15:27 | 234.32 | 237.19 | 41 | 9607.12 | +117.67 | +1.22% | 1.77R | 9m | market | profit-target | mixed | mean-revert | neutral | 52.82 | ↑231.9 | 0.7589 | 1.2 | **WIN** |
| 239 | AMD | 01-21 14:53 | 01-21 15:01 | 242.47 | 245.6 | 46 | 11153.62 | +143.98 | +1.29% | 1.68R | 8m | market | profit-target | trend | trend | neutral | 79.77 | ↑239.73 | 1.6886 | 1.45 | **WIN** |
| 240 | NVDA | 01-22 14:30 | 01-22 14:35 | 185.92 | 184.45 | 59 | 10969.28 | -86.73 | -0.79% | 1.58R | 5m | market | stop-loss | trend | trend | neutral | 77.25 | ↓185.44 | 0.2485 | 2.84 | **LOSS** |
| 241 | MSFT | 01-22 14:32 | 01-22 14:48 | 447.89 | 447.48 | 18 | 8062.02 | -7.38 | -0.09% | 0.18R | 16m | market | trailing-stop | mixed | mean-revert | neutral | 42.76 | ↓447.42 | 0.929 | 3.2 | **LOSS** |
| 242 | AMD | 01-22 14:32 | 01-22 14:34 | 250.34 | 249.96 | 38 | 9512.92 | -14.44 | -0.15% | 0.19R | 2m | market | trailing-stop | mixed | mean-revert | neutral | 53.82 | ↓250.44 | 0.2987 | 1.32 | **LOSS** |
| 243 | AMZN | 01-22 14:33 | 01-22 14:49 | 232.98 | 231.64 | 39 | 9086.22 | -52.26 | -0.58% | 1R | 16m | market | stop-loss | mixed | mean-revert | neutral | 68.1 | ↓233.56 | 0.6977 | 0.88 | **LOSS** |
| 244 | META | 01-22 14:48 | 01-22 15:01 | 633.33 | 629.41 | 15 | 9499.95 | -58.8 | -0.62% | 0.93R | 13m | market | stop-loss | mixed | mean-revert | neutral | 46.53 | ↓633.51 | 4.23 | 1.28 | **LOSS** |
| 245 | NVDA | 01-23 14:34 | 01-23 14:47 | 187.5 | 187.19 | 51 | 9562.5 | -15.81 | -0.17% | 0.27R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 58.76 | ↓188.42 | 0.5723 | 1.74 | **LOSS** |
| 246 | AMZN | 01-23 14:36 | 01-23 14:57 | 235.13 | 236.08 | 41 | 9640.33 | +38.95 | +0.4% | 0.74R | 21m | market | timeout | mixed | mean-revert | neutral | 59.16 | ↑235.9 | 0.4675 | 1.62 | **WIN** |
| 247 | AMD | 01-23 15:13 | 01-23 15:30 | 263.83 | 263.47 | 36 | 9497.88 | -12.96 | -0.14% | 0.18R | 17m | market | stagnation | mixed | mean-revert | neutral | 49.49 | ↑263.03 | 0.7195 | 1.21 | **LOSS** |
| 248 | MSFT | 01-27 14:31 | 01-27 14:52 | 476.45 | 475.77 | 23 | 10958.35 | -15.64 | -0.14% | 0.28R | 21m | market | stagnation | trend | trend | neutral | 76.48 | ↓474.65 | 0.5718 | 1.28 | **LOSS** |
| 249 | AMD | 01-28 14:48 | 01-28 14:57 | 255.33 | 254.9 | 38 | 9702.54 | -16.34 | -0.17% | 0.2R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 52.84 | ↓255.46 | 0.8258 | 1.01 | **LOSS** |
| 250 | AAPL | 01-29 14:30 | 01-29 14:35 | 258.96 | 257.21 | 43 | 11135.28 | -75.25 | -0.68% | 1.36R | 5m | market | stop-loss | trend | trend | neutral | 76.58 | ↓258.66 | 0.3545 | 2.74 | **LOSS** |
| 251 | META | 01-29 14:31 | 01-29 14:34 | 731.02 | 730.42 | 13 | 9503.26 | -7.8 | -0.08% | 0.06R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 38.94 | ↓735.02 | 4.2221 | 9.97 | **LOSS** |
| 252 | AMD | 01-29 14:37 | 01-29 14:41 | 254.43 | 255.29 | 36 | 9159.48 | +30.96 | +0.34% | 0.24R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 54.77 | ↓257.99 | 1.1336 | 1.19 | **WIN** |
| 253 | MSFT | 01-30 14:30 | 01-30 14:44 | 436.22 | 433.13 | 22 | 9596.84 | -67.98 | -0.71% | 1.16R | 14m | market | stop-loss | mixed | mean-revert | neutral | 64.26 | ↓437.17 | 1.7907 | 1.33 | **LOSS** |
| 254 | AMD | 02-02 14:36 | 02-02 14:51 | 242.89 | 244.58 | 46 | 11172.94 | +77.74 | +0.7% | 0.57R | 15m | market | trailing-stop | trend | trend | neutral | 78.69 | ↑240.33 | 1.4773 | 1.46 | **WIN** |
| 255 | AMD | 02-02 15:05 | 02-02 15:23 | 246.7 | 249.73 | 45 | 11101.5 | +136.35 | +1.23% | 2.05R | 18m | market | profit-target | trend | trend | neutral | 66.55 | ↑242.5 | 0.9839 | 2.91 | **WIN** |
| 256 | NVDA | 02-03 14:32 | 02-03 14:40 | 185.18 | 183.54 | 42 | 7777.56 | -68.88 | -0.89% | 1.16R | 8m | market | stop-loss | mixed | mean-revert | neutral | 48.47 | ↓185.62 | 0.0456 | 5.65 | **LOSS** |
| 257 | AMD | 02-03 14:38 | 02-03 14:44 | 248.77 | 245.8 | 14 | 3482.78 | -41.58 | -1.19% | 1.09R | 6m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 27.47 | ↓250.21 | 0.349 | 0.95 | **LOSS** |
| 258 | META | 02-03 14:43 | 02-03 14:56 | 709.67 | 705.16 | 7 | 4967.69 | -31.57 | -0.64% | 0.73R | 13m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.98 | ↓710.35 | 1.0528 | 0.85 | **LOSS** |
| 259 | GOOGL | 02-03 14:57 | 02-03 15:01 | 344.98 | 342.47 | 8 | 2759.84 | -20.08 | -0.73% | 1.28R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 62.36 | ↓346.17 | 0.2625 | 0.88 | **LOSS** |
| 260 | GOOGL | 02-04 14:31 | 02-04 14:37 | 340.84 | 341.18 | 28 | 9543.52 | +9.52 | +0.1% | 0.19R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 57.93 | ↓341.51 | 0.5273 | 2.65 | **WIN** |
| 261 | GOOGL | 02-05 14:59 | 02-05 15:06 | 321.21 | 318.14 | 8 | 2569.68 | -24.56 | -0.96% | 1.04R | 7m | market | stop-loss | mixed | mean-revert | thinChop | 39.68 | ↑317.04 | -0.6121 | 0.9 | **LOSS** |
| 262 | AAPL | 02-06 14:30 | 02-06 14:51 | 278.66 | 280.15 | 40 | 11146.4 | +59.6 | +0.53% | 0.84R | 21m | market | timeout | trend | trend | neutral | 63.63 | ↑278.03 | 0.1415 | 2.07 | **WIN** |
| 263 | AMD | 02-06 14:32 | 02-06 14:39 | 200.33 | 202.89 | 30 | 6009.9 | +76.8 | +1.28% | 0.64R | 7m | market | profit-target | trend | trend | noisyHighBeta | 74.74 | ↑198.36 | 1.7155 | 2.46 | **WIN** |
| 264 | NVDA | 02-06 14:34 | 02-06 14:44 | 177.58 | 179.84 | 62 | 11009.96 | +140.12 | +1.27% | 1.67R | 10m | market | profit-target | trend | trend | neutral | 60.18 | ↑176.11 | 1.072 | 3.49 | **WIN** |
| 265 | AMD | 02-06 15:10 | 02-06 15:14 | 204.68 | 203.02 | 30 | 6140.4 | -49.8 | -0.81% | 1.07R | 4m | market | stop-loss | trend | trend | noisyHighBeta | 48.51 | ↑202.34 | 0.3931 | 1.6 | **LOSS** |
| 266 | AMD | 02-06 15:29 | 02-06 15:50 | 204.94 | 205.38 | 26 | 5328.44 | +11.44 | +0.21% | 0.22R | 21m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 54.53 | ↑202.95 | 0.5444 | 0.97 | **WIN** |
| 267 | NVDA | 02-09 15:11 | 02-09 15:17 | 191.33 | 191.52 | 50 | 9566.5 | +9.5 | +0.1% | 0.14R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 53.18 | ↑190.07 | 0.4215 | 1.24 | **WIN** |
| 268 | AMD | 02-10 14:30 | 02-10 14:36 | 218.32 | 218.12 | 28 | 6112.96 | -5.6 | -0.09% | 0.16R | 6m | market | trailing-stop | trend | trend | noisyHighBeta | 78.53 | ↑217.28 | 0.3551 | 2.97 | **LOSS** |
| 269 | NVDA | 02-10 14:33 | 02-10 14:42 | 190.97 | 189.24 | 26 | 4965.22 | -44.98 | -0.91% | 1.65R | 9m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 48.67 | ↓191.64 | 0.3062 | 2.14 | **LOSS** |
| 270 | MSFT | 02-10 14:36 | 02-10 14:57 | 415.42 | 420.15 | 21 | 8723.82 | +99.33 | +1.14% | 1.56R | 21m | market | timeout | mixed | mean-revert | neutral | 55.15 | ↑417.14 | 0.8242 | 2.09 | **WIN** |
| 271 | AMZN | 02-10 15:13 | 02-10 15:34 | 210.68 | 211.82 | 22 | 4634.96 | +25.08 | +0.54% | 0.96R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 58.5 | ↑208.69 | 0.8283 | 1.16 | **WIN** |
| 272 | AAPL | 02-11 14:31 | 02-11 14:32 | 276.78 | 275.18 | 40 | 11071.2 | -64 | -0.58% | 1.16R | 1m | market | stop-loss | trend | trend | neutral | 74.6 | ↓276.13 | 0.3267 | 2.35 | **LOSS** |
| 273 | NVDA | 02-11 14:45 | 02-11 14:52 | 193.33 | 191.77 | 57 | 11019.81 | -88.92 | -0.81% | 1R | 7m | market | stop-loss | trend | trend | neutral | 55.91 | ↓192.1 | 0.4851 | 1.26 | **LOSS** |
| 274 | AMD | 02-11 14:47 | 02-11 14:52 | 219.31 | 217.06 | 28 | 6140.68 | -63 | -1.03% | 1.11R | 5m | market | stop-loss | trend | trend | noisyHighBeta | 74.31 | ↓217.45 | 1.1115 | 1.83 | **LOSS** |
| 275 | NVDA | 02-12 14:41 | 02-12 14:57 | 191.93 | 191.46 | 50 | 9596.5 | -23.5 | -0.24% | 0.31R | 16m | market | early-reversal | mixed | mean-revert | neutral | 43.79 | ↓192.52 | 0.2942 | 1.86 | **LOSS** |
| 276 | AMD | 02-13 14:50 | 02-13 14:53 | 207.09 | 206.83 | 22 | 4555.98 | -5.72 | -0.13% | 0.1R | 3m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 42.07 | ↓207.72 | 0.3405 | 0.89 | **LOSS** |
| 277 | AMD | 02-19 14:30 | 02-19 14:38 | 199.53 | 200.1 | 31 | 6185.43 | +17.67 | +0.29% | 0.58R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 51.89 | ↓199.81 | 0.3115 | 1.43 | **WIN** |
| 278 | AMD | 02-19 14:55 | 02-19 15:13 | 202.27 | 202.07 | 55 | 11124.85 | -11 | -0.1% | 0.12R | 18m | market | trailing-stop | trend | trend | neutral | 68.65 | ↑200.47 | 0.4775 | 3.78 | **LOSS** |
| 279 | GOOGL | 02-20 14:30 | 02-20 14:38 | 305.63 | 309.86 | 36 | 11002.68 | +152.28 | +1.38% | 2.46R | 8m | market | profit-target | trend | trend | neutral | 65.55 | ↑305.12 | 0.3954 | 2.45 | **WIN** |
| 280 | AMZN | 02-20 14:36 | 02-20 14:48 | 206.49 | 206.64 | 54 | 11150.46 | +8.1 | +0.07% | 0.12R | 12m | market | trailing-stop | trend | trend | neutral | 69.54 | ↑205.57 | 0.439 | 1.63 | **WIN** |
| 281 | META | 02-20 15:10 | 02-20 15:15 | 656.54 | 652.59 | 17 | 11161.18 | -67.15 | -0.6% | 0.97R | 5m | market | stop-loss | trend | trend | neutral | 69.77 | ↑649.83 | 1.6189 | 1.81 | **LOSS** |
| 282 | AMZN | 02-20 15:11 | 02-20 15:27 | 210.16 | 208.86 | 53 | 11138.48 | -68.9 | -0.62% | 0.77R | 16m | market | early-reversal | trend | trend | neutral | 79.91 | ↑207.36 | 0.9656 | 1.18 | **LOSS** |
| 283 | AAPL | 02-24 14:46 | 02-24 15:02 | 274.25 | 273.82 | 46 | 12615.5 | -19.78 | -0.16% | 0.24R | 16m | market | stagnation | trend | trend | cleanTrend | 77.14 | ↑271.92 | 1.7262 | 1.18 | **LOSS** |
| 284 | MSFT | 02-26 14:30 | 02-26 14:36 | 405.04 | 401.43 | 27 | 10936.08 | -97.47 | -0.89% | 1.78R | 6m | market | stop-loss | trend | trend | neutral | 77.09 | ↓404.54 | 0.4024 | 3.79 | **LOSS** |
| 285 | META | 02-26 14:41 | 02-26 14:58 | 659.24 | 658.41 | 16 | 10547.84 | -13.28 | -0.13% | 0.16R | 17m | market | stagnation | trend | trend | neutral | 60.91 | ↑653.2 | 1.0125 | 1.35 | **LOSS** |
| 286 | AMD | 03-02 15:24 | 03-02 15:33 | 194.42 | 193.19 | 31 | 6027.02 | -38.13 | -0.63% | 1.17R | 9m | market | stop-loss | mixed | mean-revert | neutral | 31.64 | ↓193.95 | -0.0999 | 2.43 | **LOSS** |
| 287 | META | 03-03 14:30 | 03-03 14:33 | 651.74 | 651.4 | 14 | 9124.36 | -4.76 | -0.05% | 0.1R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 43.92 | ↓649.43 | 0.3545 | 1.05 | **LOSS** |
| 288 | NVDA | 03-04 14:33 | 03-04 14:38 | 181.27 | 181.14 | 53 | 9607.31 | -6.89 | -0.07% | 0.09R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 59.23 | ↓180.77 | 0.2553 | 1.55 | **LOSS** |
| 289 | AMD | 03-04 14:47 | 03-04 15:03 | 194.93 | 195.41 | 57 | 11111.01 | +27.36 | +0.25% | 0.28R | 16m | market | trailing-stop | trend | trend | neutral | 71.36 | ↑192.73 | 0.5592 | 1.04 | **WIN** |
| 290 | AMZN | 03-04 14:51 | 03-04 15:04 | 213.68 | 214.87 | 26 | 11111.36 | +30.94 | +0.56% | 0.84R | 13m | market | trim-profit-target | trend | trend | neutral | 76.87 | ↑211.93 | 0.7737 | 1.09 | **WIN** |
| 291 | AMZN | 03-04 14:51 | 03-04 15:05 | 213.68 | 214.64 | 26 | 11111.36 | +24.96 | +0.45% | 0.67R | 14m | market | trailing-stop | trend | trend | neutral | 76.87 | ↑211.93 | 0.7737 | 1.09 | **WIN** |
| 292 | META | 03-04 15:00 | 03-04 15:16 | 668.35 | 666.13 | 16 | 10693.6 | -35.52 | -0.33% | 0.63R | 16m | market | early-reversal | trend | trend | neutral | 77.37 | ↑662.85 | 2.0618 | 2.94 | **LOSS** |
| 293 | AMD | 03-05 14:31 | 03-05 14:35 | 201.31 | 200.78 | 46 | 9260.26 | -24.38 | -0.26% | 0.26R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 51.1 | ↓200.66 | -0.1763 | 1.08 | **LOSS** |
| 294 | AMZN | 03-05 14:35 | 03-05 14:45 | 219.02 | 219.19 | 51 | 11170.02 | +8.67 | +0.08% | 0.14R | 10m | market | trailing-stop | trend | trend | neutral | 78.29 | ↑217.98 | 0.4031 | 1.14 | **WIN** |
| 295 | AMD | 03-05 14:59 | 03-05 15:17 | 201.87 | 202.04 | 32 | 6459.84 | +5.44 | +0.08% | 0.1R | 18m | market | trailing-stop | bearish | mean-revert | neutral | 59.97 | ↑201.33 | 0.451 | 1.01 | **WIN** |
| 296 | GOOGL | 03-09 14:27 | 03-09 14:48 | 297.02 | 299.08 | 33 | 9801.66 | +67.98 | +0.69% | 1.35R | 21m | market | timeout | mixed | mean-revert | neutral | 56.96 | ↑296.16 | 0.4407 | 1.14 | **WIN** |
| 297 | AMD | 03-10 13:45 | 03-10 13:52 | 204.45 | 204.47 | 13 | 2657.85 | +0.26 | +0.01% | 0.01R | 7m | market | trailing-stop | mixed | mean-revert | thinChop | 54.05 | ↓204.53 | 0.8313 | 0.92 | **WIN** |
| 298 | AMD | 03-11 13:49 | 03-11 14:02 | 206.66 | 207.1 | 47 | 9713.02 | +20.68 | +0.21% | 0.27R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 52.94 | ↓207.31 | 0.7404 | 1.16 | **WIN** |
| 299 | GOOGL | 03-11 14:35 | 03-11 14:56 | 309.73 | 310.26 | 30 | 9291.9 | +15.9 | +0.17% | 0.34R | 21m | market | timeout | mixed | mean-revert | neutral | 38.39 | ↑308.77 | 0.2733 | 0.9 | **WIN** |
| 300 | AMD | 03-18 14:08 | 03-18 14:14 | 200.68 | 199.29 | 55 | 11037.4 | -76.45 | -0.69% | 1.23R | 6m | market | stop-loss | trend | trend | neutral | 71.75 | ↑198.22 | 0.6906 | 1.41 | **LOSS** |
| 301 | AMD | 03-18 15:10 | 03-18 15:17 | 199.79 | 198.61 | 49 | 9789.71 | -57.82 | -0.59% | 1.18R | 7m | market | stop-loss | mixed | mean-revert | neutral | 62.43 | ↓198.86 | 0.3748 | 2.32 | **LOSS** |
| 302 | AMD | 03-19 14:38 | 03-19 14:59 | 197.82 | 198.66 | 49 | 9693.18 | +41.16 | +0.42% | 0.84R | 21m | market | timeout | mixed | mean-revert | neutral | 54.23 | ↑195.67 | 0.3216 | 1.67 | **WIN** |
| 303 | NVDA | 03-23 13:30 | 03-23 13:35 | 176.13 | 176.64 | 52 | 9158.76 | +26.52 | +0.29% | 0.58R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 44.6 | ↓176.39 | 0.6439 | 18.24 | **WIN** |
| 304 | AMD | 03-24 14:50 | 03-24 14:59 | 201.87 | 201.68 | 41 | 8276.67 | -7.79 | -0.09% | 0.18R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 51.41 | ↓202.7 | 0.142 | 1.23 | **LOSS** |
| 305 | MSFT | 03-25 13:32 | 03-25 13:48 | 375.36 | 374.15 | 26 | 9759.36 | -31.46 | -0.32% | 0.64R | 16m | market | early-reversal | mixed | mean-revert | neutral | 50.87 | ↓375.76 | 0.6279 | 1.18 | **LOSS** |
| 306 | GOOGL | 03-25 13:40 | 03-25 13:45 | 294.54 | 292.9 | 28 | 8247.12 | -45.92 | -0.56% | 0.67R | 5m | market | stop-loss | mixed | mean-revert | neutral | 70.18 | ↓294.23 | 1.006 | 0.9 | **LOSS** |
| 307 | AMD | 03-25 13:59 | 03-25 14:10 | 215.54 | 218.2 | 45 | 9699.3 | +119.7 | +1.23% | 1.92R | 11m | market | profit-target | mixed | mean-revert | neutral | 38.39 | ↑215.86 | 0.8844 | 1.19 | **WIN** |
| 308 | META | 03-30 13:33 | 03-30 13:49 | 533.49 | 532.74 | 18 | 9602.82 | -13.5 | -0.14% | 0.17R | 16m | market | stagnation | mixed | mean-revert | neutral | 67.65 | ↓534.89 | 2.3165 | 1.03 | **LOSS** |
| 309 | AMD | 03-31 14:00 | 03-31 14:06 | 201.08 | 199.64 | 30 | 6032.4 | -43.2 | -0.72% | 1.26R | 6m | market | stop-loss | trend | trend | noisyHighBeta | 76.12 | ↑198.92 | 0.8382 | 1.3 | **LOSS** |
| 310 | NVDA | 03-31 14:18 | 03-31 14:35 | 170.87 | 170.68 | 65 | 11106.55 | -12.35 | -0.11% | 0.22R | 17m | market | stagnation | trend | trend | neutral | 70.84 | ↑168.99 | 0.3899 | 1.06 | **LOSS** |
| 311 | AMD | 03-31 14:18 | 03-31 14:25 | 201.76 | 200.55 | 30 | 6052.8 | -36.3 | -0.6% | 1.2R | 7m | market | stop-loss | trend | trend | noisyHighBeta | 64.73 | ↑199.33 | 0.4473 | 1.03 | **LOSS** |
| 312 | META | 04-01 13:43 | 04-01 13:46 | 580 | 575.58 | 16 | 9280 | -70.72 | -0.76% | 0.96R | 3m | market | stop-loss | mixed | mean-revert | neutral | 64.29 | ↓580.67 | 2.5338 | 1.22 | **LOSS** |
| 313 | AMD | 04-01 13:43 | 04-01 14:04 | 208.44 | 209.04 | 22 | 4585.68 | +13.2 | +0.29% | 0.28R | 21m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 64.1 | ↓209.28 | 1.4559 | 0.85 | **WIN** |
| 314 | AMD | 04-02 14:49 | 04-02 15:01 | 212.04 | 212.46 | 25 | 5301 | +10.5 | +0.2% | 0.24R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 56.77 | ↑207.62 | 0.8926 | 1.15 | **WIN** |
| 315 | NVDA | 04-02 14:50 | 04-02 15:02 | 175.38 | 175.7 | 55 | 9645.9 | +17.6 | +0.18% | 0.28R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 37.43 | ↑173.82 | 0.3024 | 2 | **WIN** |
| 316 | META | 04-02 14:51 | 04-02 15:07 | 571.47 | 569.94 | 17 | 9714.99 | -26.01 | -0.27% | 0.48R | 16m | market | early-reversal | mixed | mean-revert | neutral | 24.94 | ↑567.76 | 0.6098 | 1.39 | **LOSS** |
| 317 | AMD | 04-02 15:02 | 04-02 15:15 | 212.3 | 213.8 | 12 | 5307.5 | +18 | +0.71% | 1.18R | 13m | market | trim-profit-target | mixed | mean-revert | noisyHighBeta | 47.29 | ↑208.37 | 0.4887 | 1.39 | **WIN** |
| 318 | AMD | 04-02 15:02 | 04-02 15:23 | 212.3 | 213.97 | 13 | 5307.5 | +21.71 | +0.79% | 1.32R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 47.29 | ↑208.37 | 0.4887 | 1.39 | **WIN** |
| 319 | AMD | 04-06 13:52 | 04-06 13:59 | 224.56 | 222.74 | 23 | 5164.88 | -41.86 | -0.81% | 0.96R | 7m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 51.39 | ↓224.17 | 1.2739 | 1.07 | **LOSS** |
| 320 | NVDA | 04-08 13:39 | 04-08 13:55 | 183.29 | 183.16 | 42 | 7698.18 | -5.46 | -0.07% | 0.13R | 16m | market | stagnation | bearish | mean-revert | neutral | 31.89 | ↓184.02 | 1.1473 | 2.56 | **LOSS** |
| 321 | AMD | 04-08 13:53 | 04-08 13:58 | 229.19 | 229.13 | 41 | 9396.79 | -2.46 | -0.03% | 0.05R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 42.92 | ↓230.07 | 0.7839 | 1.29 | **LOSS** |
| 322 | MSFT | 04-10 13:43 | 04-10 13:59 | 373.22 | 372.76 | 23 | 8584.06 | -10.58 | -0.12% | 0.2R | 16m | market | stagnation | mixed | mean-revert | neutral | 43.78 | ↓374.29 | 0.2809 | 0.94 | **LOSS** |
| 323 | NVDA | 04-10 14:01 | 04-10 14:22 | 186.5 | 187.44 | 44 | 8206 | +41.36 | +0.5% | 1R | 21m | market | timeout | mixed | mean-revert | neutral | 39.93 | ↑186.31 | 0.4297 | 0.98 | **WIN** |
| 324 | META | 04-13 14:08 | 04-13 14:16 | 630.66 | 626.9 | 15 | 9459.9 | -56.4 | -0.6% | 1.2R | 8m | market | stop-loss | mixed | mean-revert | neutral | 60.26 | ↓628.44 | 1.09 | 1.35 | **LOSS** |
| 325 | MSFT | 04-13 14:11 | 04-13 14:32 | 376 | 376.91 | 26 | 9776 | +23.66 | +0.24% | 0.48R | 21m | market | timeout | mixed | mean-revert | neutral | 63.69 | ↑374.24 | 1.2159 | 1.47 | **WIN** |
| 326 | MSFT | 04-14 13:30 | 04-14 13:32 | 388.25 | 390.01 | 7 | 5823.75 | +12.32 | +0.45% | 0.9R | 2m | market | trim-profit-target | bearish | mean-revert | neutral | 38.97 | ↑387.86 | 1.4758 | 4.99 | **WIN** |
| 327 | MSFT | 04-14 13:30 | 04-14 13:39 | 388.25 | 393.01 | 8 | 5823.75 | +38.08 | +1.23% | 2.46R | 9m | market | profit-target | bearish | mean-revert | neutral | 38.97 | ↑387.86 | 1.4758 | 4.99 | **WIN** |
| 328 | AMD | 04-14 13:34 | 04-14 13:47 | 247.22 | 247.08 | 33 | 8158.26 | -4.62 | -0.06% | 0.07R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 49.59 | ↓249.5 | 0.3453 | 0.91 | **LOSS** |
| 329 | NVDA | 04-15 13:44 | 04-15 14:05 | 196.99 | 198.44 | 31 | 6106.69 | +44.95 | +0.74% | 1.07R | 21m | market | timeout | bearish | mean-revert | neutral | 56.99 | ↑197.64 | 0.3088 | 1.58 | **WIN** |
| 330 | AMD | 04-16 14:49 | 04-16 14:52 | 271.32 | 271.08 | 41 | 11124.12 | -9.84 | -0.09% | 0.17R | 3m | market | trailing-stop | trend | trend | neutral | 78.17 | ↑266.07 | 1.1249 | 1.31 | **LOSS** |
| 331 | META | 04-17 13:31 | 04-17 13:46 | 676.63 | 685.2 | 11 | 7442.93 | +94.27 | +1.27% | 2.54R | 15m | market | profit-target | mixed | mean-revert | neutral | 51.61 | ↑677.81 | 0.8933 | 1.15 | **WIN** |
| 332 | NVDA | 04-17 13:33 | 04-17 13:54 | 199.48 | 201.1 | 40 | 7979.2 | +64.8 | +0.81% | 1.27R | 21m | market | timeout | mixed | mean-revert | neutral | 58.29 | ↑200 | 0.434 | 1.04 | **WIN** |
| 333 | AMD | 04-21 13:42 | 04-21 13:51 | 279.03 | 276.74 | 35 | 9766.05 | -80.15 | -0.82% | 0.89R | 9m | market | stop-loss | mixed | mean-revert | neutral | 58.61 | ↓279.25 | 1.0567 | 0.92 | **LOSS** |
| 334 | MSFT | 04-22 13:30 | 04-22 13:50 | 424.8 | 427.61 | 10 | 8496 | +28.1 | +0.66% | 1.32R | 20m | market | trim-profit-target | mixed | mean-revert | neutral | 52.82 | ↑425.37 | 0.3196 | 1.66 | **WIN** |
| 335 | MSFT | 04-22 13:30 | 04-22 13:51 | 424.8 | 428.14 | 10 | 8496 | +33.4 | +0.79% | 1.58R | 21m | market | timeout | mixed | mean-revert | neutral | 52.82 | ↑425.37 | 0.3196 | 1.66 | **WIN** |
| 336 | GOOGL | 04-23 13:36 | 04-23 13:57 | 339.43 | 339.94 | 20 | 6788.6 | +10.2 | +0.15% | 0.3R | 21m | market | timeout | mixed | mean-revert | neutral | 46.94 | ↑340.02 | 0.1468 | 0.99 | **WIN** |
| 337 | MSFT | 04-24 13:30 | 04-24 13:51 | 417.88 | 420.6 | 23 | 9611.24 | +62.56 | +0.65% | 0.97R | 21m | market | timeout | mixed | mean-revert | neutral | 54.23 | ↑417.29 | 0.937 | 3.03 | **WIN** |
| 338 | AMZN | 04-24 13:42 | 04-24 13:58 | 259.05 | 258.7 | 36 | 9325.8 | -12.6 | -0.14% | 0.18R | 16m | market | stagnation | mixed | mean-revert | neutral | 44.73 | ↓259.84 | 0.9149 | 1.24 | **LOSS** |
| 339 | NVDA | 04-24 13:43 | 04-24 13:51 | 201.97 | 202.07 | 46 | 9290.62 | +4.6 | +0.05% | 0.05R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 63.93 | ↓202.19 | 0.7316 | 1.22 | **WIN** |
| 340 | AMD | 04-24 14:16 | 04-24 14:23 | 349.26 | 345.89 | 32 | 11176.32 | -107.84 | -0.96% | 0.86R | 7m | market | stop-loss | trend | trend | neutral | 73.94 | ↑341.56 | 1.6841 | 1.68 | **LOSS** |
| 341 | NVDA | 04-24 14:39 | 04-24 14:55 | 204.81 | 207.27 | 54 | 11059.74 | +132.84 | +1.2% | 2.4R | 16m | market | profit-target | trend | trend | neutral | 77.96 | ↑202.51 | 0.4424 | 2.11 | **WIN** |
| 342 | NVDA | 04-24 14:59 | 04-24 15:18 | 208.8 | 208.51 | 53 | 11066.4 | -15.37 | -0.14% | 0.25R | 19m | market | trailing-stop | trend | trend | neutral | 77.49 | ↑204.21 | 1.1357 | 1.17 | **LOSS** |

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

- ⚠️ **Profit factor 0.85 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.7R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:47:24.486Z*
