# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T06:07:26.842Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $2521.07 (-2.52%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 33.4% (334W / 666L) |
| Net P&L | $-2521.07 (-2.52%) |
| Gross profit | $43915.98 |
| Gross loss | $46437.05 |
| Profit factor | 0.95 |
| Avg win | $131.48 |
| Avg loss | $69.73 |
| Payoff ratio | 1.89:1 |
| Expectancy | $-2.52 / trade |
| Max drawdown | 6.41% |
| Sharpe ratio (ann.) | -0.66 |
| Trades / active day | 10.64 |
| Avg confidence | 98.69% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $97,478.93 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 596 | 35.91% | $+1443.66 | $2.42 |
| Mid  10:30–11:30 | 163 | 38.04% | $+558.37 | $3.43 |
| Noon 11:30–13:00 | 169 | 23.67% | $-3113.87 | $-18.43 |
| PM   13:00–14:00 | 72 | 25% | $-1409.23 | $-19.57 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| RIVN | 39 | 17 | 43.59% | $+835.95 | $+21.43 | 1.39 | eligible |
| NET | 28 | 14 | 50% | $+816.73 | $+29.17 | 1.72 | eligible |
| GOOGL | 17 | 10 | 58.82% | $+796.62 | $+46.86 | 2.46 | eligible |
| UNH | 15 | 8 | 53.33% | $+752.74 | $+50.18 | 2.05 | eligible |
| GS | 13 | 9 | 69.23% | $+737.02 | $+56.69 | 6.04 | eligible |
| ORCL | 19 | 8 | 42.11% | $+639.74 | $+33.67 | 1.81 | eligible |
| HD | 9 | 4 | 44.44% | $+600.75 | $+66.75 | 5.17 | eligible |
| SHOP | 24 | 12 | 50% | $+589.35 | $+24.56 | 1.69 | eligible |
| BA | 20 | 8 | 40% | $+498.16 | $+24.91 | 1.62 | eligible |
| MRVL | 23 | 11 | 47.83% | $+401.08 | $+17.44 | 1.5 | eligible |
| TGT | 19 | 8 | 42.11% | $+364.76 | $+19.2 | 1.72 | eligible |
| NVDA | 19 | 7 | 36.84% | $+288.74 | $+15.2 | 1.46 | throttle |
| TSLA | 24 | 9 | 37.5% | $+239.45 | $+9.98 | 1.2 | throttle |
| MU | 25 | 8 | 32% | $+235.92 | $+9.44 | 1.2 | throttle |
| PLTR | 22 | 7 | 31.82% | $+221.04 | $+10.05 | 1.15 | throttle |
| TSM | 13 | 5 | 38.46% | $+203.76 | $+15.67 | 1.51 | throttle |
| MA | 4 | 2 | 50% | $+199.39 | $+49.85 | 22.74 | watch |
| ADP | 3 | 2 | 66.67% | $+168.76 | $+56.25 | 4.47 | watch |
| GE | 15 | 8 | 53.33% | $+142.94 | $+9.53 | 1.3 | eligible |
| IBM | 8 | 4 | 50% | $+129.04 | $+16.13 | 1.88 | eligible |
| INTC | 25 | 8 | 32% | $+128.12 | $+5.12 | 1.09 | throttle |
| MDB | 20 | 4 | 20% | $+126.34 | $+6.32 | 1.13 | throttle |
| SBUX | 15 | 7 | 46.67% | $+125.74 | $+8.38 | 1.25 | eligible |
| COIN | 22 | 6 | 27.27% | $+118.42 | $+5.38 | 1.07 | throttle |
| SNOW | 19 | 5 | 26.32% | $+103.42 | $+5.44 | 1.13 | throttle |
| BAC | 10 | 4 | 40% | $+72.71 | $+7.27 | 1.24 | eligible |
| NKE | 18 | 7 | 38.89% | $+66.56 | $+3.7 | 1.08 | throttle |
| AMAT | 13 | 4 | 30.77% | $+42.14 | $+3.24 | 1.13 | throttle |
| AAPL | 13 | 4 | 30.77% | $+41.08 | $+3.16 | 1.08 | throttle |
| COST | 10 | 2 | 20% | $+12.5 | $+1.25 | 1.06 | throttle |
| JPM | 7 | 3 | 42.86% | $+9.64 | $+1.38 | 1.06 | eligible |
| NVO | 22 | 7 | 31.82% | $-12.03 | $-0.55 | 0.98 | throttle |
| V | 4 | 1 | 25% | $-18.64 | $-4.66 | 0.76 | watch |
| AMZN | 15 | 7 | 46.67% | $-32.39 | $-2.16 | 0.92 | throttle |
| ASML | 7 | 2 | 28.57% | $-52.37 | $-7.48 | 0.65 | throttle |
| KLAC | 11 | 4 | 36.36% | $-63.11 | $-5.74 | 0.85 | throttle |
| QCOM | 11 | 3 | 27.27% | $-65.8 | $-5.98 | 0.84 | throttle |
| CRM | 12 | 3 | 25% | $-86.72 | $-7.23 | 0.79 | throttle |
| ELF | 22 | 8 | 36.36% | $-127.71 | $-5.81 | 0.86 | throttle |
| XOM | 7 | 2 | 28.57% | $-129.43 | $-18.49 | 0.46 | throttle |
| MSFT | 7 | 4 | 57.14% | $-149.26 | $-21.32 | 0.37 | throttle |
| ARM | 17 | 4 | 23.53% | $-160.43 | $-9.44 | 0.74 | throttle |
| DDOG | 20 | 8 | 40% | $-193.58 | $-9.68 | 0.84 | throttle |
| WMT | 6 | 1 | 16.67% | $-219.2 | $-36.53 | 0.03 | throttle |
| LOW | 6 | 0 | 0% | $-226.89 | $-37.81 | 0 | throttle |
| LLY | 19 | 8 | 42.11% | $-245.54 | $-12.92 | 0.73 | throttle |
| PYPL | 13 | 4 | 30.77% | $-247.95 | $-19.07 | 0.43 | throttle |
| UBER | 19 | 5 | 26.32% | $-288.41 | $-15.18 | 0.72 | throttle |
| ABNB | 10 | 1 | 10% | $-307.47 | $-30.75 | 0.29 | throttle |
| SMCI | 23 | 5 | 21.74% | $-323.42 | $-14.06 | 0.84 | throttle |
| DELL | 19 | 4 | 21.05% | $-334.08 | $-17.58 | 0.68 | throttle |
| NFLX | 12 | 3 | 25% | $-342.59 | $-28.55 | 0.35 | throttle |
| LRCX | 10 | 2 | 20% | $-344.33 | $-34.43 | 0.34 | throttle |
| DIS | 10 | 2 | 20% | $-346.85 | $-34.68 | 0.33 | throttle |
| CVX | 11 | 4 | 36.36% | $-351.44 | $-31.95 | 0.45 | throttle |
| INTU | 6 | 0 | 0% | $-362.74 | $-60.46 | 0 | throttle |
| LMT | 7 | 1 | 14.29% | $-365.65 | $-52.24 | 0.01 | throttle |
| TXN | 10 | 2 | 20% | $-365.85 | $-36.58 | 0.3 | throttle |
| CAT | 13 | 3 | 23.08% | $-366.43 | $-28.19 | 0.28 | throttle |
| AMD | 19 | 6 | 31.58% | $-393.49 | $-20.71 | 0.7 | throttle |
| META | 15 | 2 | 13.33% | $-459.71 | $-30.65 | 0.43 | throttle |
| AVGO | 15 | 3 | 20% | $-486.58 | $-32.44 | 0.33 | throttle |
| NOW | 10 | 1 | 10% | $-492.61 | $-49.26 | 0.1 | throttle |
| HPE | 13 | 4 | 30.77% | $-536.42 | $-41.26 | 0.25 | throttle |
| ADBE | 8 | 2 | 25% | $-578.51 | $-72.31 | 0.08 | throttle |
| CRWD | 15 | 1 | 6.67% | $-741.25 | $-49.42 | 0.2 | throttle |
| PANW | 12 | 1 | 8.33% | $-916.77 | $-76.4 | 0.06 | throttle |
| CELH | 13 | 1 | 7.69% | $-1494.03 | $-114.93 | 0.09 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 539 | 192 | 35.62% | $+1685.78 | $+3.13 |
| trend | 461 | 142 | 30.8% | $-4206.85 | $-9.13 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 60 | 23 | 38.33% | $+858.13 | $+14.3 |
| falseBreakoutProne | 401 | 141 | 35.16% | $+407.46 | $+1.02 |
| cleanTrend | 1 | 0 | 0% | $-49.5 | $-49.5 |
| thinChop | 24 | 8 | 33.33% | $-66.26 | $-2.76 |
| noisyHighBeta | 33 | 12 | 36.36% | $-399.26 | $-12.1 |
| neutral | 481 | 150 | 31.19% | $-3271.64 | $-6.8 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | GS | 8 | 5.63 | $+53.85 | 5 | 6.77 | $+61.25 | 0.05% | 4.54 | promote |
| Symbol | BA | 14 | 1.49 | $+19.55 | 6 | 1.92 | $+37.4 | 0.17% | 1.49 | promote |
| Symbol | SHOP | 14 | 1.59 | $+18.76 | 10 | 1.78 | $+32.67 | 0.33% | 1.38 | promote |
| Symbol | NET | 16 | 1.8 | $+33.51 | 12 | 1.62 | $+23.38 | 0.27% | 1.26 | promote |
| Symbol | RIVN | 21 | 1.76 | $+35.95 | 18 | 1.07 | $+4.5 | 0.45% | 0.87 | watch |
| Symbol | MRVL | 10 | 1.82 | $+34.56 | 13 | 1.14 | $+4.27 | 0.33% | 0.83 | watch |
| Symbol | MU | 17 | 1.47 | $+15.57 | 8 | 0.95 | $-3.6 | 0.52% | 0.8 | watch |
| Symbol | UNH | 10 | 2.94 | $+81.28 | 5 | 0.8 | $-12 | 0.3% | 0.64 | watch |
| Symbol | TSM | 8 | 2.2 | $+33.83 | 5 | 0.61 | $-13.38 | 0.12% | 0.41 | watch |
| Time slot | Open 9:30-10:30 | 332 | 1.31 | $+15.14 | 264 | 0.75 | $-13.57 | 4.39% | 0.58 | watch |
| Setup | breakout | 302 | 1.32 | $+17.1 | 237 | 0.74 | $-14.68 | 4.58% | 0.57 | watch |
| Symbol | GOOGL | 9 | 5.51 | $+102.87 | 8 | 0.62 | $-16.15 | 0.25% | 0.41 | watch |
| Symbol | AMAT | 10 | 1.41 | $+10.28 | 3 | 0 | $-20.21 | 0.06% | 0 | watch |
| Behavior | falseBreakoutProne | 228 | 1.34 | $+17.41 | 173 | 0.65 | $-20.59 | 4.14% | 0.5 | watch |
| Symbol | NVDA | 15 | 1.73 | $+24.82 | 4 | 0.27 | $-20.88 | 0.08% | 0.11 | watch |
| Symbol | TGT | 14 | 2.29 | $+35.22 | 5 | 0 | $-25.67 | 0.13% | 0 | watch |
| Symbol | GE | 10 | 2.6 | $+28.25 | 5 | 0.53 | $-27.9 | 0.17% | 0.41 | watch |
| Symbol | TSLA | 14 | 2.07 | $+41.6 | 10 | 0.46 | $-34.29 | 0.4% | 0.36 | watch |
| Symbol | COST | 7 | 2.2 | $+17.07 | 3 | 0 | $-35.65 | 0.11% | 0 | watch |
| Symbol | PLTR | 14 | 1.62 | $+42.2 | 8 | 0.35 | $-46.23 | 0.57% | 0.27 | watch |
| Symbol | UBER | 11 | 1.31 | $+10.24 | 8 | 0.39 | $-50.13 | 0.66% | 0.32 | watch |
| Symbol | KLAC | 8 | 1.36 | $+11.75 | 3 | 0 | $-52.36 | 0.16% | 0 | watch |
| Behavior | thinChop | 17 | 1.86 | $+24.33 | 7 | 0.23 | $-68.55 | 0.48% | 0.18 | watch |
| Symbol | COIN | 16 | 1.47 | $+37.93 | 6 | 0.01 | $-81.42 | 0.49% | 0 | watch |
| Symbol | ORCL | 14 | 6.49 | $+86.16 | 5 | 0 | $-113.3 | 0.57% | 0 | watch |
| Symbol | MDB | 7 | 0 | $-63.97 | 13 | 2.11 | $+44.17 | 0.21% | 1.62 | reject |
| Symbol | AMZN | 10 | 0.43 | $-21.2 | 5 | 4.26 | $+35.93 | 0.06% | 2.36 | reject |
| Symbol | BAC | 5 | 0.51 | $-20.15 | 5 | 2.84 | $+34.69 | 0.05% | 1.85 | reject |
| Symbol | SNOW | 8 | 0.32 | $-32.2 | 11 | 1.83 | $+32.82 | 0.23% | 1.39 | reject |
| Symbol | AAPL | 6 | 0.26 | $-29.44 | 7 | 1.75 | $+31.1 | 0.17% | 1.35 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-5216.57 | 0.89 |
| +3 bps/side | $-10607.77 | 0.8 |
| +5 bps/side | $-15998.85 | 0.71 |
| +10 bps/side | $-29476.99 | 0.55 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 412 |
| timeout | 255 |
| stagnation | 170 |
| stop-loss | 53 |
| breakeven-stop | 43 |
| profit-target | 32 |
| trim-profit-target | 22 |
| trailing-stop | 13 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 14:20 | 184.89 | 183.83 | 69 | 12757.41 | -73.14 | -0.57% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | PANW | 04-29 14:50 | 04-29 15:35 | 185.7 | 185.07 | 75 | 13927.5 | -47.25 | -0.34% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 3 | COST | 04-29 14:50 | 04-29 16:30 | 987.94 | 986.89 | 14 | 13831.16 | -14.7 | -0.11% | 0.16R | 100m | market | stagnation | trend | trend | neutral | 70.56 | ↑982.51 | 3.3386 | 1.01 | **LOSS** |
| 4 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.64 | 109.53 | 127 | 13924.28 | -13.97 | -0.1% | 0.14R | 70m | market | stagnation | trend | trend | neutral | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 5 | META | 04-29 17:45 | 04-29 19:00 | 554.95 | 554.66 | 25 | 13873.75 | -7.25 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 6 | NFLX | 04-29 17:45 | 04-29 18:05 | 1121.77 | 1118.55 | 12 | 13461.24 | -38.64 | -0.29% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑1108.08 | 2.0405 | 2.45 | **LOSS** |
| 7 | ARM | 04-29 17:45 | 04-29 18:50 | 113.04 | 112.95 | 123 | 13903.92 | -11.07 | -0.08% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 63.58 | ↑112.34 | 0.0897 | 2.32 | **LOSS** |
| 8 | DIS | 04-29 17:45 | 04-29 18:35 | 91.59 | 91.51 | 152 | 13921.68 | -12.16 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 66.22 | ↑90.8 | 0.0806 | 1.42 | **LOSS** |
| 9 | MRVL | 04-29 17:45 | 04-29 18:50 | 59.32 | 59.34 | 236 | 13999.52 | +4.72 | +0.03% | 0.04R | 65m | market | breakeven-stop | trend | trend | neutral | 70.89 | ↑58.64 | 0.105 | 1 | **WIN** |
| 10 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.62 | 187.55 | 74 | 13883.88 | -5.18 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 11 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 12 | SMCI | 04-30 15:30 | 04-30 16:20 | 30.71 | 30.52 | 455 | 13973.05 | -86.45 | -0.62% | 0.31R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.16 | ↑29.86 | 0.2995 | 1.82 | **LOSS** |
| 13 | RIVN | 04-30 15:45 | 04-30 16:05 | 13.34 | 13.13 | 1049 | 13993.66 | -220.29 | -1.57% | 1.15R | 20m | market | stop-loss | breakout | breakout | neutral | 90.7 | ↑13.01 | 0.0536 | 1.7 | **LOSS** |
| 14 | RIVN | 04-30 17:30 | 04-30 19:15 | 13.31 | 13.49 | 1049 | 13962.19 | +188.82 | +1.35% | 1.47R | 105m | market | timeout | trend | trend | neutral | 74.7 | ↑13.09 | 0.0405 | 1.16 | **WIN** |
| 15 | SBUX | 04-30 17:35 | 04-30 18:30 | 79.63 | 79.28 | 175 | 13935.25 | -61.25 | -0.44% | 0.53R | 55m | market | early-reversal | trend | trend | neutral | 68.31 | ↑78.49 | 0.1342 | 1.17 | **LOSS** |
| 16 | AMD | 04-30 17:40 | 04-30 19:25 | 96.01 | 96.16 | 145 | 13921.45 | +21.75 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 72 | ↑94.23 | 0.1572 | 1.14 | **WIN** |
| 17 | CRWD | 05-01 13:30 | 05-01 13:55 | 431.94 | 429.06 | 32 | 13822.08 | -92.16 | -0.67% | 0.96R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 18 | MSFT | 05-01 13:40 | 05-01 14:00 | 434.46 | 429.69 | 32 | 13902.72 | -152.64 | -1.1% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.46 | ↓433.92 | 10.8676 | 2.55 | **LOSS** |
| 19 | AVGO | 05-01 13:40 | 05-01 15:25 | 197.94 | 198.86 | 65 | 12866.1 | +59.8 | +0.46% | 0.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.09 | ↑197.41 | 1.5614 | 3.56 | **WIN** |
| 20 | CAT | 05-01 13:40 | 05-01 14:30 | 316.73 | 316.26 | 44 | 13936.12 | -20.68 | -0.15% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 21 | DELL | 05-01 13:40 | 05-01 14:10 | 94.58 | 94.03 | 137 | 12957.46 | -75.35 | -0.58% | 0.49R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.36 | ↓93.91 | 0.7297 | 1.37 | **LOSS** |
| 22 | ORCL | 05-01 13:45 | 05-01 15:20 | 148.07 | 147.98 | 87 | 12882.09 | -7.83 | -0.06% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.11 | ↑146.73 | 1.7074 | 3.12 | **LOSS** |
| 23 | NOW | 05-01 13:45 | 05-01 15:30 | 967.44 | 971.23 | 14 | 13544.16 | +53.06 | +0.39% | 0.38R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 24 | DDOG | 05-01 13:45 | 05-01 14:10 | 104.91 | 103.96 | 133 | 13953.03 | -126.35 | -0.91% | 0.64R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 96.82 | ↓104.51 | 0.7912 | 1.4 | **LOSS** |
| 25 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 26 | UBER | 05-01 14:05 | 05-01 15:20 | 81.59 | 81.5 | 171 | 13951.89 | -15.39 | -0.11% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 27 | GE | 05-01 14:15 | 05-01 16:00 | 203.55 | 204 | 68 | 13841.4 | +30.6 | +0.22% | 0.24R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 28 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 29 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 30 | RIVN | 05-01 14:25 | 05-01 15:30 | 14.06 | 14.03 | 995 | 13989.7 | -29.85 | -0.21% | 0.11R | 65m | market | stagnation | breakout | trend | noisyHighBeta | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 31 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 32 | INTU | 05-01 14:30 | 05-01 15:55 | 631.54 | 630.89 | 22 | 13893.88 | -14.3 | -0.1% | 0.13R | 85m | market | stagnation | trend | trend | neutral | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 33 | ARM | 05-01 14:35 | 05-01 15:30 | 118.54 | 118.43 | 118 | 13987.72 | -12.98 | -0.09% | 0.05R | 55m | market | stagnation | trend | trend | neutral | 75.1 | ↑117.29 | 1.6688 | 1.2 | **LOSS** |
| 34 | CELH | 05-01 15:00 | 05-01 15:30 | 35.4 | 35.22 | 395 | 13983 | -71.1 | -0.51% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 35 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 36 | TXN | 05-01 15:10 | 05-01 15:55 | 161.4 | 160.32 | 86 | 13880.4 | -92.88 | -0.67% | 0.96R | 45m | market | early-reversal | trend | trend | neutral | 67.92 | ↓160.37 | 0.479 | 1.95 | **LOSS** |
| 37 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 38 | AMD | 05-01 15:15 | 05-01 15:35 | 100.12 | 99.46 | 139 | 13916.68 | -91.74 | -0.66% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 39 | AMAT | 05-01 15:15 | 05-01 15:35 | 152.11 | 151.52 | 92 | 13994.12 | -54.28 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.7 | ↑150.67 | 0.4148 | 1.49 | **LOSS** |
| 40 | LRCX | 05-01 15:15 | 05-01 15:35 | 73.4 | 73.05 | 190 | 13946 | -66.5 | -0.48% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 41 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 42 | SMCI | 05-01 15:25 | 05-01 15:45 | 33.3 | 32.93 | 420 | 13986 | -155.4 | -1.11% | 0.6R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 74.49 | ↑32.34 | 0.4172 | 1.01 | **LOSS** |
| 43 | JPM | 05-01 15:25 | 05-01 16:15 | 247.1 | 246.78 | 56 | 13837.6 | -17.92 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 44 | ELF | 05-01 16:35 | 05-01 16:55 | 62.76 | 62.36 | 223 | 13995.48 | -89.2 | -0.64% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 68.38 | ↑62.07 | 0.0812 | 2.71 | **LOSS** |
| 45 | AMD | 05-02 13:30 | 05-02 13:50 | 99.11 | 98.46 | 131 | 12983.41 | -85.15 | -0.66% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.68 | ↓98.89 | -0.2 | 4.18 | **LOSS** |
| 46 | QCOM | 05-02 13:30 | 05-02 13:50 | 138.54 | 137.88 | 93 | 12884.22 | -61.38 | -0.48% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.14 | ↓138.11 | -0.0013 | 1.64 | **LOSS** |
| 47 | MU | 05-02 13:30 | 05-02 13:50 | 80.33 | 79.31 | 174 | 13977.42 | -177.48 | -1.27% | 1.13R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 48 | BAC | 05-02 13:30 | 05-02 13:50 | 41.03 | 40.75 | 341 | 13991.23 | -95.48 | -0.68% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 49 | COST | 05-02 13:30 | 05-02 14:30 | 1014.3 | 1012.4 | 13 | 13185.9 | -24.7 | -0.19% | 0.27R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.19 | ↓1013.58 | 1.0251 | 1.56 | **LOSS** |
| 50 | V | 05-02 13:30 | 05-02 14:00 | 349.39 | 348.13 | 37 | 12927.43 | -46.62 | -0.36% | 0.44R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 51 | CRM | 05-02 13:35 | 05-02 14:40 | 274.03 | 273.85 | 51 | 13975.53 | -9.18 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 63.96 | ↓273.42 | 0.0846 | 1.78 | **LOSS** |
| 52 | ORCL | 05-02 13:35 | 05-02 15:20 | 150.35 | 151.08 | 86 | 12930.1 | +62.78 | +0.49% | 0.5R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 53 | UBER | 05-02 13:35 | 05-02 15:20 | 83.06 | 84.22 | 168 | 13954.08 | +194.88 | +1.4% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.99 | ↑82.61 | 0.2144 | 1.45 | **WIN** |
| 54 | CAT | 05-02 13:35 | 05-02 13:55 | 321.91 | 319.92 | 43 | 13842.13 | -85.57 | -0.62% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 55 | LMT | 05-02 13:35 | 05-02 14:35 | 488.67 | 487.66 | 28 | 13682.76 | -28.28 | -0.21% | 0.3R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.17 | ↓487.17 | 2.1118 | 1.82 | **LOSS** |
| 56 | HD | 05-02 13:35 | 05-02 14:00 | 364.83 | 363.44 | 38 | 13863.54 | -52.82 | -0.38% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.2 | ↓363.45 | 0.7376 | 1.2 | **LOSS** |
| 57 | PLTR | 05-02 13:40 | 05-02 15:25 | 120.89 | 121.87 | 115 | 13902.35 | +112.7 | +0.81% | 0.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.82 | ↑120.31 | 0.4497 | 4.08 | **WIN** |
| 58 | NOW | 05-02 13:40 | 05-02 14:35 | 984.61 | 976.55 | 14 | 13784.54 | -112.84 | -0.82% | 0.75R | 55m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.34 | ↓980.72 | 1.7513 | 1.42 | **LOSS** |
| 59 | IBM | 05-02 13:40 | 05-02 15:25 | 243.65 | 244.01 | 57 | 13888.05 | +20.52 | +0.15% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.98 | ↑243.37 | 0.8439 | 1.31 | **WIN** |
| 60 | WMT | 05-02 13:45 | 05-02 14:35 | 99.07 | 98.86 | 141 | 13968.87 | -29.61 | -0.21% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.07 | ↓98.63 | 0.3215 | 1.32 | **LOSS** |
| 61 | MSFT | 05-02 13:50 | 05-02 14:40 | 436.72 | 435.55 | 32 | 13975.04 | -37.44 | -0.27% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 62 | NFLX | 05-02 14:00 | 05-02 15:45 | 1146.25 | 1152.26 | 12 | 13755 | +72.12 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 69.31 | ↑1141.22 | 1.1408 | 1.12 | **WIN** |
| 63 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.21 | 439.7 | 31 | 13708.51 | -77.81 | -0.57% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 64 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 65 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 66 | HPE | 05-02 14:10 | 05-02 14:40 | 16.96 | 16.88 | 825 | 13992 | -66 | -0.47% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 72.33 | ↓16.84 | 0.0808 | 1.74 | **LOSS** |
| 67 | SBUX | 05-02 14:25 | 05-02 14:55 | 83.89 | 83.52 | 166 | 13925.74 | -61.42 | -0.44% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 68 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.73 | 140.91 | 50 | 13973 | +59 | +0.84% | 1.15R | 85m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 69 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.73 | 141.17 | 50 | 13973 | +72 | +1.03% | 1.41R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 70 | COIN | 05-02 15:00 | 05-02 15:10 | 208.43 | 205.65 | 67 | 13964.81 | -186.26 | -1.33% | 1.25R | 10m | market | stop-loss | trend | trend | neutral | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 71 | ELF | 05-02 15:50 | 05-02 16:55 | 66.44 | 67.19 | 105 | 13952.4 | +78.75 | +1.13% | 1.61R | 65m | market | trim-profit-target | trend | trend | neutral | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 72 | ELF | 05-02 15:50 | 05-02 17:40 | 66.44 | 67.14 | 105 | 13952.4 | +73.5 | +1.05% | 1.5R | 110m | market | timeout | trend | trend | neutral | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 73 | INTC | 05-02 16:00 | 05-02 16:20 | 20.72 | 20.64 | 675 | 13986 | -54 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 71.08 | ↑20.52 | 0.0779 | 3.2 | **LOSS** |
| 74 | PLTR | 05-02 16:00 | 05-02 17:15 | 123.19 | 122.85 | 113 | 13920.47 | -38.42 | -0.28% | 0.3R | 75m | market | stagnation | trend | trend | neutral | 63.93 | ↑121.73 | 0.4969 | 1.64 | **LOSS** |
| 75 | CVX | 05-02 16:00 | 05-02 16:20 | 139.31 | 138.66 | 100 | 13931 | -65 | -0.47% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 77.72 | ↑137.37 | 0.5221 | 2.96 | **LOSS** |
| 76 | TXN | 05-02 16:00 | 05-02 16:25 | 166.05 | 165.32 | 84 | 13948.2 | -61.32 | -0.44% | 0.63R | 25m | market | early-reversal | trend | trend | neutral | 77.57 | ↑164.11 | 0.8117 | 1.71 | **LOSS** |
| 77 | KLAC | 05-02 16:00 | 05-02 16:35 | 706.72 | 702.15 | 19 | 13427.68 | -86.83 | -0.65% | 0.93R | 35m | market | early-reversal | trend | trend | neutral | 65.3 | ↑701.75 | 5.0071 | 1.1 | **LOSS** |
| 78 | COIN | 05-02 16:05 | 05-02 17:05 | 207.55 | 207.44 | 67 | 13905.85 | -7.37 | -0.05% | 0.05R | 60m | market | stagnation | trend | trend | neutral | 54.22 | ↑205.93 | 0.7587 | 1.57 | **LOSS** |
| 79 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 72 | 13850.64 | -52.56 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 80 | CVX | 05-02 16:30 | 05-02 16:50 | 139.48 | 138.34 | 100 | 13948 | -114 | -0.82% | 1.05R | 20m | market | stop-loss | trend | trend | neutral | 78.83 | ↑137.61 | 0.673 | 1.66 | **LOSS** |
| 81 | TSLA | 05-02 16:35 | 05-02 18:20 | 291.7 | 293.1 | 47 | 13709.9 | +65.8 | +0.48% | 0.46R | 105m | market | timeout | trend | trend | noisyHighBeta | 77.09 | ↑285.22 | 1.7688 | 1.53 | **WIN** |
| 82 | SBUX | 05-02 16:40 | 05-02 17:45 | 84.55 | 84.43 | 165 | 13950.75 | -19.8 | -0.14% | 0.2R | 65m | market | stagnation | trend | trend | neutral | 79.76 | ↑83.49 | 0.2297 | 1.08 | **LOSS** |
| 83 | ARM | 05-02 16:45 | 05-02 17:05 | 123.09 | 122.59 | 113 | 13909.17 | -56.5 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 73.23 | ↑121.01 | 0.6264 | 1.76 | **LOSS** |
| 84 | AMD | 05-05 13:35 | 05-05 14:30 | 100.58 | 100.31 | 127 | 12773.66 | -34.29 | -0.27% | 0.27R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 85 | NOW | 05-05 13:55 | 05-05 14:20 | 991.57 | 985.66 | 14 | 13881.98 | -82.74 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 86 | UNH | 05-05 14:00 | 05-05 15:45 | 403.9 | 406.51 | 34 | 13732.6 | +88.74 | +0.65% | 0.86R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 87 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.81 | 126.33 | 110 | 13949.1 | -52.8 | -0.38% | 0.25R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 88 | PANW | 05-05 15:00 | 05-05 15:50 | 190.31 | 190.22 | 73 | 13892.63 | -6.57 | -0.05% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 89 | PLTR | 05-05 16:20 | 05-05 16:50 | 124.97 | 124.47 | 112 | 13996.64 | -56 | -0.4% | 0.57R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 71.09 | ↑123.14 | 0.4883 | 1.54 | **LOSS** |
| 90 | CELH | 05-05 17:40 | 05-05 18:40 | 34.6 | 34.58 | 404 | 13978.4 | -8.08 | -0.06% | 0.09R | 60m | market | breakeven-stop | trend | trend | neutral | 73.03 | ↑34.17 | 0.073 | 1.31 | **LOSS** |
| 91 | CELH | 05-06 13:30 | 05-06 13:35 | 34.78 | 32.56 | 370 | 12868.6 | -821.4 | -6.38% | 3.19R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 53.83 | ↓34.4 | -0.1172 | 3.69 | **LOSS** |
| 92 | XOM | 05-06 14:10 | 05-06 15:55 | 104.94 | 105.38 | 133 | 13957.02 | +58.52 | +0.42% | 0.49R | 105m | market | timeout | trend | trend | neutral | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 93 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.3 | 106.77 | 131 | 13925.3 | +61.57 | +0.44% | 0.23R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 94 | SMCI | 05-06 15:35 | 05-06 15:55 | 32.8 | 32.49 | 425 | 13940 | -131.75 | -0.95% | 0.7R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.16 | ↑32.21 | 0.1398 | 1.06 | **LOSS** |
| 95 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 74 | 13885.36 | +43.66 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 96 | PLTR | 05-07 13:35 | 05-07 14:25 | 111.05 | 110.75 | 116 | 12881.8 | -34.8 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.66 | ↑109.39 | 0.0881 | 2.76 | **LOSS** |
| 97 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 146 | 13964.9 | -90.52 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 98 | NKE | 05-07 13:35 | 05-07 15:10 | 58.01 | 58.05 | 241 | 13980.41 | +9.64 | +0.07% | 0.1R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 99 | RIVN | 05-07 13:35 | 05-07 13:55 | 13.64 | 13.44 | 945 | 12889.8 | -189 | -1.47% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.43 | ↓13.35 | 0.0225 | 1.69 | **LOSS** |
| 100 | DIS | 05-07 13:40 | 05-07 14:00 | 102.17 | 100.79 | 137 | 13997.29 | -189.06 | -1.35% | 0.68R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.06 | ↓101.44 | 2.2882 | 2.62 | **LOSS** |
| 101 | NVO | 05-07 13:45 | 05-07 14:35 | 68.74 | 68.35 | 189 | 12991.86 | -73.71 | -0.57% | 0.35R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.89 | ↓68.58 | 0.4826 | 1.91 | **LOSS** |
| 102 | NFLX | 05-07 14:15 | 05-07 15:00 | 1152.23 | 1152.71 | 12 | 13826.76 | +5.76 | +0.04% | 0.06R | 45m | market | breakeven-stop | trend | trend | neutral | 71.5 | ↑1144.48 | 1.5134 | 1.89 | **WIN** |
| 103 | MU | 05-07 15:55 | 05-07 17:35 | 81.52 | 81.44 | 171 | 13939.92 | -13.68 | -0.1% | 0.14R | 100m | market | stagnation | trend | trend | thinChop | 64.67 | ↑80.85 | 0.1015 | 1.86 | **LOSS** |
| 104 | LMT | 05-07 16:25 | 05-07 18:10 | 472 | 472.16 | 29 | 13688 | +4.64 | +0.03% | 0.04R | 105m | market | timeout | trend | trend | thinChop | 65.62 | ↑470.02 | 0.8808 | 1.5 | **WIN** |
| 105 | AVGO | 05-07 16:45 | 05-07 17:35 | 203.07 | 202.41 | 68 | 13808.76 | -44.88 | -0.33% | 0.47R | 50m | market | early-reversal | trend | trend | neutral | 60.83 | ↑200.88 | 0.4076 | 1.16 | **LOSS** |
| 106 | NOW | 05-07 16:45 | 05-07 17:35 | 983.47 | 981.52 | 14 | 13768.58 | -27.3 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 59.34 | ↑976.15 | 2.811 | 2.11 | **LOSS** |
| 107 | INTU | 05-07 16:45 | 05-07 18:05 | 637.45 | 633.25 | 21 | 13386.45 | -88.2 | -0.66% | 0.94R | 80m | market | early-reversal | trend | trend | neutral | 66.87 | ↓632.73 | 1.306 | 1.48 | **LOSS** |
| 108 | MRVL | 05-07 17:10 | 05-07 17:30 | 55.45 | 55.08 | 252 | 13973.4 | -93.24 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 109 | AMD | 05-08 13:35 | 05-08 14:25 | 103.84 | 103.6 | 134 | 13914.56 | -32.16 | -0.23% | 0.12R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.36 | ↓103.31 | 1.2511 | 1.96 | **LOSS** |
| 110 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 111 | PLTR | 05-08 13:40 | 05-08 15:25 | 115.79 | 117.88 | 112 | 12968.48 | +234.08 | +1.8% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.5 | ↑114.31 | 1.5125 | 2.37 | **WIN** |
| 112 | PYPL | 05-08 13:40 | 05-08 14:45 | 69.74 | 69.66 | 200 | 13948 | -16 | -0.11% | 0.11R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 113 | XOM | 05-08 13:40 | 05-08 14:10 | 106.28 | 105.67 | 131 | 13922.68 | -79.91 | -0.57% | 0.74R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 114 | GE | 05-08 13:40 | 05-08 14:35 | 212.97 | 212.74 | 65 | 13843.05 | -14.95 | -0.11% | 0.14R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.61 | ↑212.15 | 0.4951 | 1.58 | **LOSS** |
| 115 | ELF | 05-08 14:25 | 05-08 14:55 | 68.07 | 67.55 | 205 | 13954.35 | -106.6 | -0.76% | 0.72R | 30m | market | early-reversal | breakout | breakout | neutral | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 116 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 73 | 13944.46 | +215.35 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 117 | BAC | 05-08 15:15 | 05-08 17:00 | 41.74 | 42.05 | 335 | 13982.9 | +103.85 | +0.74% | 1.06R | 105m | market | timeout | trend | trend | neutral | 65.76 | ↑41.48 | 0.1338 | 1.15 | **WIN** |
| 118 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 119 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 120 | GE | 05-08 15:25 | 05-08 17:10 | 215.07 | 215.89 | 65 | 13979.55 | +53.3 | +0.38% | 0.54R | 105m | market | timeout | trend | trend | neutral | 77.33 | ↑213.22 | 1.1311 | 2.13 | **WIN** |
| 121 | HD | 05-08 15:25 | 05-08 17:10 | 366.72 | 367.52 | 38 | 13935.36 | +30.4 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 60.48 | ↑363.87 | 0.5541 | 2.42 | **WIN** |
| 122 | AMZN | 05-08 15:30 | 05-08 17:10 | 191.85 | 193.49 | 36 | 13813.2 | +59.04 | +0.85% | 1.1R | 100m | market | trim-profit-target | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 123 | AMZN | 05-08 15:30 | 05-08 17:15 | 191.85 | 193.46 | 36 | 13813.2 | +57.96 | +0.84% | 1.09R | 105m | market | timeout | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 124 | MSFT | 05-08 15:35 | 05-08 17:20 | 441.66 | 443.25 | 31 | 13691.46 | +49.29 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | thinChop | 68.73 | ↑438.74 | 1.0933 | 1.31 | **WIN** |
| 125 | CAT | 05-08 15:35 | 05-08 17:20 | 326.79 | 327.48 | 42 | 13725.18 | +28.98 | +0.21% | 0.3R | 105m | market | timeout | trend | trend | neutral | 73.35 | ↑324.49 | 1.3771 | 1.33 | **WIN** |
| 126 | CRM | 05-08 15:40 | 05-08 16:30 | 282.56 | 281.98 | 49 | 13845.44 | -28.42 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 68.45 | ↑280.2 | 0.8715 | 1.79 | **LOSS** |
| 127 | ORCL | 05-08 15:40 | 05-08 16:00 | 151.36 | 150.73 | 92 | 13925.12 | -57.96 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | thinChop | 58.09 | ↑149.8 | 0.4766 | 1.35 | **LOSS** |
| 128 | TSM | 05-08 15:40 | 05-08 16:00 | 176.65 | 175.93 | 79 | 13955.35 | -56.88 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 69.52 | ↑174.95 | 0.5299 | 1.65 | **LOSS** |
| 129 | ABNB | 05-08 15:40 | 05-08 17:25 | 127.05 | 126.94 | 110 | 13975.5 | -12.1 | -0.09% | 0.13R | 105m | market | stagnation | trend | trend | neutral | 68.8 | ↑125.05 | 0.7853 | 1.35 | **LOSS** |
| 130 | DDOG | 05-08 15:40 | 05-08 17:25 | 108.12 | 109.06 | 129 | 13947.48 | +121.26 | +0.87% | 1.14R | 105m | market | timeout | trend | trend | neutral | 55.15 | ↑107.26 | 0.2842 | 2.14 | **WIN** |
| 131 | XOM | 05-08 15:40 | 05-08 16:35 | 107.02 | 106.98 | 130 | 13912.6 | -5.2 | -0.04% | 0.06R | 55m | market | stagnation | trend | trend | neutral | 62.66 | ↑106.2 | 0.402 | 2.46 | **LOSS** |
| 132 | CVX | 05-08 15:40 | 05-08 16:10 | 138.7 | 138.22 | 100 | 13870 | -48 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 67.16 | ↑137.56 | 0.4712 | 2.23 | **LOSS** |
| 133 | TXN | 05-08 15:40 | 05-08 16:00 | 167.83 | 167.06 | 83 | 13929.89 | -63.91 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 68.66 | ↑165.91 | 0.5807 | 1.49 | **LOSS** |
| 134 | HPE | 05-08 15:40 | 05-08 16:00 | 17.06 | 17 | 820 | 13989.2 | -49.2 | -0.35% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 52.94 | ↑16.92 | 0.0935 | 2.02 | **LOSS** |
| 135 | TGT | 05-08 15:40 | 05-08 17:25 | 97.76 | 97.99 | 143 | 13979.68 | +32.89 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 59.46 | ↑96.87 | 0.2971 | 1.92 | **WIN** |
| 136 | ELF | 05-08 15:40 | 05-08 17:25 | 68.5 | 68.63 | 204 | 13974 | +26.52 | +0.19% | 0.2R | 105m | market | timeout | trend | trend | neutral | 63.78 | ↑67.84 | 0.3917 | 5.89 | **WIN** |
| 137 | RIVN | 05-08 15:40 | 05-08 17:00 | 13.34 | 13.74 | 964 | 12859.76 | +385.6 | +3% | 1.88R | 80m | market | profit-target | breakout | breakout | neutral | 53.57 | ↑13.09 | 0.0816 | 1.6 | **WIN** |
| 138 | MU | 05-08 15:45 | 05-08 17:30 | 85.51 | 85.81 | 163 | 13938.13 | +48.9 | +0.35% | 0.35R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.41 | ↑84.19 | 0.5086 | 2.02 | **WIN** |
| 139 | MDB | 05-08 15:45 | 05-08 16:05 | 179.19 | 178.48 | 78 | 13976.82 | -55.38 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | thinChop | 69.85 | ↑176.79 | 0.8866 | 1.28 | **LOSS** |
| 140 | NKE | 05-08 15:45 | 05-08 16:05 | 60.01 | 59.65 | 233 | 13982.33 | -83.88 | -0.6% | 0.78R | 20m | market | early-reversal | trend | trend | neutral | 68.07 | ↑59.34 | 0.2597 | 2.09 | **LOSS** |
| 141 | LOW | 05-08 15:50 | 05-08 17:25 | 225.64 | 225.52 | 62 | 13989.68 | -7.44 | -0.05% | 0.07R | 95m | market | stagnation | trend | trend | neutral | 66.48 | ↑223.99 | 0.4304 | 1.27 | **LOSS** |
| 142 | QCOM | 05-08 16:15 | 05-08 17:45 | 146.7 | 146.55 | 95 | 13936.5 | -14.25 | -0.1% | 0.14R | 90m | market | stagnation | trend | trend | neutral | 77.38 | ↑144.96 | 0.5208 | 1.95 | **LOSS** |
| 143 | NKE | 05-08 16:15 | 05-08 17:10 | 59.96 | 59.9 | 233 | 13970.68 | -13.98 | -0.1% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 77.2 | ↑59.44 | 0.1923 | 2.09 | **LOSS** |
| 144 | DIS | 05-08 16:20 | 05-08 17:05 | 105.97 | 105.65 | 131 | 13882.07 | -41.92 | -0.3% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 73.03 | ↑105.03 | 0.2034 | 1.01 | **LOSS** |
| 145 | NET | 05-08 16:55 | 05-08 17:45 | 124.94 | 124.84 | 111 | 13868.34 | -11.1 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 64.23 | ↑123.24 | 0.5628 | 2.76 | **LOSS** |
| 146 | TXN | 05-08 16:55 | 05-08 17:15 | 168.43 | 167.47 | 82 | 13811.26 | -78.72 | -0.57% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 67.9 | ↑166.36 | 0.6834 | 1.66 | **LOSS** |
| 147 | MDB | 05-08 17:00 | 05-08 18:00 | 179.87 | 179.54 | 77 | 13849.99 | -25.41 | -0.18% | 0.26R | 60m | market | stagnation | trend | trend | neutral | 67.48 | ↑177.39 | 0.7506 | 1.43 | **LOSS** |
| 148 | UBER | 05-09 13:30 | 05-09 13:50 | 84.04 | 83.4 | 154 | 12942.16 | -98.56 | -0.76% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.62 | ↓83.64 | -0.0738 | 1.81 | **LOSS** |
| 149 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 72 | 14002.56 | -77.76 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 150 | SMCI | 05-09 13:35 | 05-09 14:00 | 32.7 | 32.48 | 426 | 13930.2 | -93.72 | -0.67% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.56 | ↓32.57 | 0.0095 | 1.51 | **LOSS** |
| 151 | TXN | 05-09 13:35 | 05-09 13:55 | 171.76 | 170.88 | 74 | 12710.24 | -65.12 | -0.51% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.12 | ↓171.21 | 0.6463 | 2.59 | **LOSS** |
| 152 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 153 | COIN | 05-09 13:45 | 05-09 14:05 | 212.76 | 210.15 | 65 | 13829.4 | -169.65 | -1.23% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.46 | ↑207.08 | 0.0494 | 1.49 | **LOSS** |
| 154 | RIVN | 05-09 14:45 | 05-09 15:15 | 14.25 | 14.29 | 983 | 14007.75 | +39.32 | +0.28% | 0.15R | 30m | market | trailing-stop | breakout | breakout | noisyHighBeta | 67.59 | ↑13.98 | 0.0712 | 1.82 | **WIN** |
| 155 | CELH | 05-09 15:00 | 05-09 15:15 | 37.35 | 36.64 | 371 | 13856.85 | -263.41 | -1.9% | 1.38R | 15m | market | stop-loss | trend | trend | neutral | 72.88 | ↓36.76 | 0.4745 | 1.11 | **LOSS** |
| 156 | ABNB | 05-09 17:55 | 05-09 18:15 | 126.24 | 125.89 | 110 | 13886.4 | -38.5 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 68.09 | ↑124.73 | 0.3196 | 1.95 | **LOSS** |
| 157 | PANW | 05-12 13:45 | 05-12 15:30 | 190.52 | 191.42 | 67 | 12764.84 | +60.3 | +0.47% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 158 | NKE | 05-12 14:00 | 05-12 14:25 | 63.24 | 62.62 | 221 | 13976.04 | -137.02 | -0.98% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓62.7 | 1.0815 | 1.41 | **LOSS** |
| 159 | COIN | 05-12 14:40 | 05-12 15:00 | 213.01 | 209.55 | 60 | 12780.6 | -207.6 | -1.62% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 56.92 | ↓210.41 | 2.3802 | 2.39 | **LOSS** |
| 160 | UBER | 05-12 14:55 | 05-12 16:25 | 85.19 | 86.3 | 82 | 13971.16 | +91.02 | +1.3% | 0.91R | 90m | market | trim-profit-target | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 161 | UBER | 05-12 14:55 | 05-12 16:40 | 85.19 | 86.19 | 82 | 13971.16 | +82 | +1.17% | 0.82R | 105m | market | timeout | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 162 | KLAC | 05-12 15:50 | 05-12 17:35 | 752.87 | 759.71 | 18 | 13551.66 | +123.12 | +0.91% | 1.3R | 105m | market | timeout | trend | trend | neutral | 72 | ↑748.33 | 7.4136 | 2.75 | **WIN** |
| 163 | ARM | 05-12 16:10 | 05-12 16:30 | 124.72 | 124.17 | 112 | 13968.64 | -61.6 | -0.44% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.27 | ↑122.91 | 0.4147 | 2.75 | **LOSS** |
| 164 | LLY | 05-12 16:40 | 05-12 17:40 | 759.49 | 759.83 | 18 | 13670.82 | +6.12 | +0.04% | 0.06R | 60m | market | breakeven-stop | trend | trend | neutral | 74.57 | ↑741.47 | 4.7499 | 2.96 | **WIN** |
| 165 | AMAT | 05-12 16:55 | 05-12 18:10 | 168.91 | 168.83 | 82 | 13850.62 | -6.56 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 79.55 | ↑167.17 | 0.4777 | 1.74 | **LOSS** |
| 166 | MRVL | 05-12 17:05 | 05-12 17:25 | 65.11 | 64.8 | 214 | 13933.54 | -66.34 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑64.06 | 0.2549 | 1.05 | **LOSS** |
| 167 | INTC | 05-12 17:35 | 05-12 17:50 | 22.6 | 22.36 | 618 | 13966.8 | -148.32 | -1.06% | 1.38R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 168 | UBER | 05-12 17:35 | 05-12 18:40 | 86.86 | 86.81 | 161 | 13984.46 | -8.05 | -0.06% | 0.08R | 65m | market | stagnation | trend | trend | neutral | 61.52 | ↑85.07 | 0.2097 | 1.36 | **LOSS** |
| 169 | MU | 05-13 13:30 | 05-13 15:15 | 93.88 | 95.74 | 138 | 12955.44 | +256.68 | +1.98% | 2.57R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 170 | TSM | 05-13 13:30 | 05-13 15:15 | 189.87 | 192.63 | 73 | 13860.51 | +201.48 | +1.45% | 2.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 171 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 121 | 12911.91 | +183.92 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 172 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 173 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 21 | 13640.34 | +186.06 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 174 | NFLX | 05-13 13:35 | 05-13 15:20 | 1128.54 | 1137.39 | 12 | 13542.48 | +106.2 | +0.78% | 1.05R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.1 | ↑1120.51 | 0.5982 | 2.23 | **WIN** |
| 175 | ARM | 05-13 13:35 | 05-13 14:40 | 125.86 | 125.44 | 111 | 13970.46 | -46.62 | -0.33% | 0.43R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.18 | ↓125.69 | 0.1399 | 1.61 | **LOSS** |
| 176 | COIN | 05-13 13:35 | 05-13 15:20 | 238.38 | 245.36 | 53 | 12634.14 | +369.94 | +2.93% | 1.47R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 96.92 | ↑236.46 | 6.9211 | 4.45 | **WIN** |
| 177 | NET | 05-13 13:35 | 05-13 15:20 | 145.85 | 147.81 | 95 | 13855.75 | +186.2 | +1.34% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 178 | CAT | 05-13 13:35 | 05-13 13:55 | 351.7 | 349.52 | 36 | 12661.2 | -78.48 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.35 | ↓350.65 | 1.0052 | 1.12 | **LOSS** |
| 179 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 69 | 13960.08 | +78.66 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 180 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 181 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.13 | 441.02 | 32 | 13924.16 | +188.48 | +1.35% | 1.93R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 182 | DELL | 05-13 13:50 | 05-13 15:35 | 106.05 | 107.59 | 131 | 13892.55 | +201.74 | +1.45% | 1.84R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 183 | SMCI | 05-13 13:55 | 05-13 14:40 | 36.04 | 37.8 | 386 | 13911.44 | +679.36 | +4.88% | 2.44R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 89.53 | ↑35.38 | 0.5657 | 1.49 | **WIN** |
| 184 | SNOW | 05-13 14:00 | 05-13 15:10 | 182.84 | 182.71 | 76 | 13895.84 | -9.88 | -0.07% | 0.1R | 70m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 185 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 610 | 13956.8 | -176.9 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 186 | UBER | 05-13 14:20 | 05-13 14:40 | 90.93 | 90.18 | 154 | 14003.22 | -115.5 | -0.82% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 76.51 | ↑89.22 | 0.9267 | 1.1 | **LOSS** |
| 187 | PLTR | 05-13 14:45 | 05-13 15:45 | 125.01 | 128.46 | 112 | 14001.12 | +386.4 | +2.76% | 1.97R | 60m | market | profit-target | breakout | breakout | extendedBreakout | 65.77 | ↑123 | 1.5757 | 1.67 | **WIN** |
| 188 | AVGO | 05-13 15:00 | 05-13 15:20 | 231.88 | 230.96 | 60 | 13912.8 | -55.2 | -0.4% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.02 | ↑227.92 | 2.7447 | 1.3 | **LOSS** |
| 189 | KLAC | 05-13 15:05 | 05-13 16:50 | 786.24 | 795.9 | 17 | 13366.08 | +164.22 | +1.23% | 1.73R | 105m | market | timeout | breakout | trend | neutral | 79.1 | ↑779.46 | 6.7608 | 3.34 | **WIN** |
| 190 | AMAT | 05-13 15:10 | 05-13 16:55 | 172.54 | 173.69 | 81 | 13975.74 | +93.15 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 73.42 | ↑170.64 | 1.0363 | 1.7 | **WIN** |
| 191 | META | 05-13 15:25 | 05-13 16:00 | 660.24 | 658.17 | 21 | 13865.04 | -43.47 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 192 | MU | 05-13 15:25 | 05-13 17:10 | 96.03 | 96.39 | 145 | 13924.35 | +52.2 | +0.37% | 0.47R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 193 | ORCL | 05-13 15:40 | 05-13 17:00 | 162.13 | 162 | 86 | 13943.18 | -11.18 | -0.08% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 76.6 | ↑160.23 | 0.952 | 1.11 | **LOSS** |
| 194 | DELL | 05-13 15:40 | 05-13 16:15 | 107.83 | 107.5 | 129 | 13910.07 | -42.57 | -0.31% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 66.67 | ↑106.87 | 0.8481 | 6.04 | **LOSS** |
| 195 | HPE | 05-13 15:40 | 05-13 16:00 | 18.03 | 17.95 | 775 | 13973.25 | -62 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 67.86 | ↑17.91 | 0.0585 | 2.64 | **LOSS** |
| 196 | UBER | 05-13 15:45 | 05-13 16:05 | 91.38 | 90.95 | 153 | 13981.14 | -65.79 | -0.47% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 72.58 | ↑89.85 | 0.6691 | 1.01 | **LOSS** |
| 197 | NET | 05-13 15:45 | 05-13 17:10 | 148.96 | 150.24 | 47 | 14002.24 | +60.16 | +0.86% | 1.23R | 85m | market | trim-profit-target | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 198 | NET | 05-13 15:45 | 05-13 17:30 | 148.96 | 150.67 | 47 | 14002.24 | +80.37 | +1.15% | 1.64R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 199 | MRVL | 05-13 15:45 | 05-13 16:05 | 66.86 | 66.43 | 209 | 13973.74 | -89.87 | -0.64% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 60.31 | ↑66.15 | 0.4147 | 1.03 | **LOSS** |
| 200 | MDB | 05-13 15:55 | 05-13 16:55 | 196.61 | 196.23 | 71 | 13959.31 | -26.98 | -0.19% | 0.27R | 60m | market | stagnation | trend | trend | neutral | 71.52 | ↑194.9 | 1.4222 | 1.68 | **LOSS** |
| 201 | AVGO | 05-13 16:25 | 05-13 17:00 | 233.89 | 232.93 | 59 | 13799.51 | -56.64 | -0.41% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 67.87 | ↑229.28 | 1.4154 | 1.08 | **LOSS** |
| 202 | ELF | 05-13 16:25 | 05-13 17:50 | 76.9 | 77.71 | 91 | 13995.8 | +73.71 | +1.05% | 1.4R | 85m | market | trim-profit-target | trend | trend | neutral | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 203 | ELF | 05-13 16:25 | 05-13 18:10 | 76.9 | 77.49 | 91 | 13995.8 | +53.69 | +0.77% | 1.03R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 204 | CELH | 05-13 16:30 | 05-13 17:10 | 37.77 | 37.52 | 366 | 13823.82 | -91.5 | -0.66% | 0.94R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 75 | ↑37.37 | 0.0887 | 2.45 | **LOSS** |
| 205 | SMCI | 05-13 17:15 | 05-13 19:00 | 38.5 | 38.73 | 364 | 14014 | +83.72 | +0.6% | 0.51R | 105m | market | timeout | trend | trend | noisyHighBeta | 55.3 | ↑37.34 | 0.1012 | 1.7 | **WIN** |
| 206 | SBUX | 05-13 17:25 | 05-13 19:10 | 86.6 | 86.74 | 161 | 13942.6 | +22.54 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑85.89 | 0.1051 | 1.56 | **WIN** |
| 207 | LLY | 05-14 13:30 | 05-14 13:50 | 756.77 | 749.68 | 18 | 13621.86 | -127.62 | -0.94% | 1.34R | 20m | market | stop-loss | trend | breakout | falseBreakoutProne | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 208 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 209 | NET | 05-14 13:35 | 05-14 13:45 | 153.78 | 152.05 | 91 | 13993.98 | -157.43 | -1.12% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 210 | NVO | 05-14 13:35 | 05-14 13:50 | 66.64 | 65.97 | 209 | 13927.76 | -140.03 | -1.01% | 1.38R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 211 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.19 | 72.92 | 191 | 13979.29 | -51.57 | -0.37% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 212 | ELF | 05-14 14:00 | 05-14 14:20 | 79.79 | 78.98 | 175 | 13963.25 | -141.75 | -1.02% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 77.94 | ↓79.24 | 0.4534 | 1.39 | **LOSS** |
| 213 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 214 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 215 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 216 | WMT | 05-14 14:20 | 05-14 15:10 | 96.95 | 96.87 | 144 | 13960.8 | -11.52 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 79.19 | ↑96.45 | 0.207 | 1.13 | **LOSS** |
| 217 | BA | 05-14 15:45 | 05-14 16:05 | 208.69 | 207.45 | 67 | 13982.23 | -83.08 | -0.59% | 0.59R | 20m | market | early-reversal | trend | breakout | neutral | 52.56 | ↑206.7 | 0.617 | 2.45 | **LOSS** |
| 218 | NVDA | 05-14 16:30 | 05-14 16:55 | 135.37 | 134.67 | 103 | 13943.11 | -72.1 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 79.63 | ↑133.5 | 0.5884 | 1.36 | **LOSS** |
| 219 | RIVN | 05-14 16:35 | 05-14 18:20 | 14.74 | 14.97 | 951 | 14017.74 | +218.73 | +1.56% | 1.59R | 105m | market | timeout | trend | trend | noisyHighBeta | 63.73 | ↑14.48 | 0.0668 | 1.11 | **WIN** |
| 220 | SMCI | 05-15 13:30 | 05-15 13:45 | 45.23 | 44.03 | 286 | 12935.78 | -343.2 | -2.65% | 1.33R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 56.34 | ↓44.77 | -0.3135 | 2.34 | **LOSS** |
| 221 | JPM | 05-15 13:40 | 05-15 13:45 | 269.12 | 267.07 | 52 | 13994.24 | -106.6 | -0.76% | 1.09R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 76.67 | ↓268.38 | 0.6217 | 2.74 | **LOSS** |
| 222 | V | 05-15 13:40 | 05-15 14:35 | 361.12 | 360.93 | 38 | 13722.56 | -7.22 | -0.05% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.5 | ↓359.87 | 0.8029 | 4.46 | **LOSS** |
| 223 | ADP | 05-15 13:40 | 05-15 15:25 | 314.09 | 315.41 | 44 | 13819.96 | +58.08 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.29 | ↑312.99 | 1.5099 | 1.22 | **WIN** |
| 224 | RIVN | 05-15 14:00 | 05-15 14:25 | 15.28 | 15.09 | 919 | 14042.32 | -174.61 | -1.24% | 0.62R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.73 | ↓15.06 | 0.0463 | 1.62 | **LOSS** |
| 225 | TGT | 05-15 14:10 | 05-15 15:45 | 95.87 | 96.67 | 73 | 13997.02 | +58.4 | +0.83% | 0.69R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 226 | TGT | 05-15 14:10 | 05-15 15:55 | 95.87 | 96.7 | 73 | 13997.02 | +60.59 | +0.87% | 0.72R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 227 | COST | 05-15 14:50 | 05-15 16:40 | 1004.1 | 1008.18 | 13 | 13053.3 | +53.04 | +0.41% | 0.59R | 110m | market | timeout | trend | trend | neutral | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 228 | NFLX | 05-15 14:55 | 05-15 15:30 | 1169.64 | 1165.81 | 11 | 12866.04 | -42.13 | -0.33% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 66.91 | ↑1158.19 | 5.2118 | 1.19 | **LOSS** |
| 229 | NVO | 05-15 15:15 | 05-15 17:00 | 65.59 | 66.1 | 212 | 13905.08 | +108.12 | +0.78% | 1.11R | 105m | market | timeout | trend | trend | neutral | 50.56 | ↑65.2 | 0.2221 | 1.13 | **WIN** |
| 230 | INTU | 05-15 15:20 | 05-15 16:15 | 663.15 | 662.43 | 21 | 13926.15 | -15.12 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 78.63 | ↑657.44 | 1.4672 | 1.73 | **LOSS** |
| 231 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 648 | 13932 | +38.88 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 232 | RIVN | 05-15 15:40 | 05-15 17:25 | 15.33 | 15.32 | 915 | 14026.95 | -9.15 | -0.07% | 0.06R | 105m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.95 | ↑15.1 | 0.0711 | 1.98 | **LOSS** |
| 233 | NVDA | 05-15 16:35 | 05-15 18:05 | 135.76 | 135.7 | 103 | 13983.28 | -6.18 | -0.04% | 0.06R | 90m | market | stagnation | trend | trend | neutral | 78.33 | ↑133.93 | 0.4857 | 1.64 | **LOSS** |
| 234 | MU | 05-15 16:35 | 05-15 18:15 | 94.88 | 94.82 | 147 | 13947.36 | -8.82 | -0.06% | 0.09R | 100m | market | stagnation | trend | trend | neutral | 75.72 | ↑93.29 | 0.4705 | 1.32 | **LOSS** |
| 235 | SMCI | 05-15 16:45 | 05-15 17:05 | 45.31 | 44.96 | 308 | 13955.48 | -107.8 | -0.77% | 0.45R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 75.08 | ↑43.61 | 0.5857 | 1.26 | **LOSS** |
| 236 | DELL | 05-15 16:45 | 05-15 17:35 | 111.15 | 111.02 | 126 | 14004.9 | -16.38 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 78.02 | ↑109.77 | 0.3998 | 1.5 | **LOSS** |
| 237 | MU | 05-16 13:30 | 05-16 15:15 | 96.43 | 97.42 | 145 | 13982.35 | +143.55 | +1.03% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.53 | ↑96.22 | 0.1541 | 1.16 | **WIN** |
| 238 | SMCI | 05-16 13:30 | 05-16 14:20 | 46.05 | 47.21 | 303 | 13953.15 | +351.48 | +2.52% | 1.29R | 50m | market | profit-target | breakout | breakout | falseBreakoutProne | 76.48 | ↑45.7 | 0.3935 | 4.7 | **WIN** |
| 239 | TGT | 05-16 13:30 | 05-16 15:15 | 97.91 | 98.32 | 143 | 14001.13 | +58.63 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑97.78 | 0.0772 | 1.29 | **WIN** |
| 240 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 124 | 13910.32 | -73.16 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 241 | NET | 05-16 13:35 | 05-16 15:20 | 155.17 | 156.49 | 90 | 13965.3 | +118.8 | +0.85% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 242 | LLY | 05-16 13:35 | 05-16 15:20 | 744.36 | 748.04 | 18 | 13398.48 | +66.24 | +0.49% | 0.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 243 | NFLX | 05-16 13:45 | 05-16 14:30 | 1193.72 | 1186.56 | 11 | 13130.92 | -78.76 | -0.6% | 0.86R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 244 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.41 | 437.21 | 32 | 13997.12 | -6.4 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 245 | DELL | 05-16 13:45 | 05-16 14:40 | 112.55 | 112.41 | 124 | 13956.2 | -17.36 | -0.12% | 0.17R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 246 | ADBE | 05-16 13:55 | 05-16 14:15 | 420.4 | 418.5 | 33 | 13873.2 | -62.7 | -0.45% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↑415.86 | 3.7059 | 1.35 | **LOSS** |
| 247 | WMT | 05-16 14:05 | 05-16 15:20 | 98.38 | 98.43 | 142 | 13969.96 | +7.1 | +0.05% | 0.05R | 75m | market | breakeven-stop | trend | trend | neutral | 77.46 | ↑97.31 | 0.4845 | 1.01 | **WIN** |
| 248 | NKE | 05-16 14:10 | 05-16 15:00 | 63.36 | 63.31 | 220 | 13939.2 | -11 | -0.08% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑63.01 | 0.2723 | 2.19 | **LOSS** |
| 249 | UNH | 05-16 16:35 | 05-16 17:05 | 281.98 | 288.87 | 45 | 12689.1 | +310.05 | +2.44% | 1.33R | 30m | market | profit-target | breakout | breakout | noisyHighBeta | 64.26 | ↑276.57 | -0.1336 | 1.97 | **WIN** |
| 250 | ELF | 05-16 17:40 | 05-16 18:45 | 79.35 | 79.26 | 176 | 13965.6 | -15.84 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 76.47 | ↑77.91 | 0.2957 | 1.37 | **LOSS** |
| 251 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 252 | BAC | 05-19 14:05 | 05-19 14:25 | 45.04 | 44.88 | 310 | 13962.4 | -49.6 | -0.36% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.47 | ↑44.72 | 0.0448 | 1.85 | **LOSS** |
| 253 | UNH | 05-19 15:25 | 05-19 16:55 | 308.12 | 313.87 | 22 | 13865.4 | +126.5 | +1.87% | 1.42R | 90m | market | trim-profit-target | breakout | trend | thinChop | 75.83 | ↑303.04 | 2.7425 | 1 | **WIN** |
| 254 | UNH | 05-19 15:25 | 05-19 17:05 | 308.12 | 315.49 | 23 | 13865.4 | +169.51 | +2.39% | 1.81R | 100m | market | profit-target | breakout | trend | thinChop | 75.83 | ↑303.04 | 2.7425 | 1 | **WIN** |
| 255 | RIVN | 05-19 16:00 | 05-19 17:45 | 15.91 | 16.22 | 881 | 14016.71 | +273.11 | +1.95% | 2.47R | 105m | market | timeout | trend | trend | thinChop | 72.22 | ↑15.58 | 0.067 | 1.21 | **WIN** |
| 256 | NVO | 05-19 16:25 | 05-19 17:10 | 66.7 | 66.47 | 209 | 13940.3 | -48.07 | -0.34% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 77.27 | ↑65.96 | 0.2627 | 1.17 | **LOSS** |
| 257 | MU | 05-19 17:00 | 05-19 17:20 | 98.94 | 98.65 | 141 | 13950.54 | -40.89 | -0.29% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 70.97 | ↑97.51 | 0.245 | 1.21 | **LOSS** |
| 258 | SMCI | 05-19 17:05 | 05-19 17:25 | 45.73 | 45.54 | 306 | 13993.38 | -58.14 | -0.42% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.65 | ↑45.44 | 0.0211 | 2.11 | **LOSS** |
| 259 | TSLA | 05-19 17:10 | 05-19 17:50 | 341.82 | 340.67 | 40 | 13672.8 | -46 | -0.34% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 75.57 | ↑338.16 | 0.3835 | 2.23 | **LOSS** |
| 260 | NET | 05-19 17:35 | 05-19 18:15 | 158.57 | 157.57 | 88 | 13954.16 | -88 | -0.63% | 0.9R | 40m | market | early-reversal | trend | trend | neutral | 75.75 | ↑156.75 | 0.3478 | 1.69 | **LOSS** |
| 261 | NVO | 05-20 13:40 | 05-20 14:40 | 69.14 | 69.09 | 186 | 12860.04 | -9.3 | -0.07% | 0.06R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 94.03 | ↓69.09 | 0.5109 | 2.82 | **LOSS** |
| 262 | RIVN | 05-20 13:55 | 05-20 14:45 | 16.96 | 16.9 | 829 | 14059.84 | -49.74 | -0.35% | 0.18R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.21 | ↑16.69 | 0.1387 | 1.39 | **LOSS** |
| 263 | TGT | 05-20 14:45 | 05-20 15:35 | 99.08 | 98.92 | 141 | 13970.28 | -22.56 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 264 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.94 | 43.65 | 293 | 12874.42 | -84.97 | -0.66% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 265 | DELL | 05-21 13:40 | 05-21 14:00 | 115.7 | 114.94 | 111 | 12842.7 | -84.36 | -0.66% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 83.42 | ↓114.5 | 0.108 | 1.17 | **LOSS** |
| 266 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 77 | 12899.04 | +407.33 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 267 | ASML | 05-21 14:00 | 05-21 14:45 | 751.93 | 749.81 | 18 | 13534.74 | -38.16 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 73.36 | ↓750.62 | 1.4433 | 2.48 | **LOSS** |
| 268 | HPE | 05-21 14:00 | 05-21 14:35 | 17.97 | 17.9 | 777 | 13962.69 | -54.39 | -0.39% | 0.48R | 35m | market | early-reversal | trend | trend | neutral | 74.38 | ↓17.88 | 0.0552 | 2.42 | **LOSS** |
| 269 | META | 05-21 14:55 | 05-21 15:45 | 644.78 | 642.74 | 21 | 13540.38 | -42.84 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 270 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 271 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 272 | AVGO | 05-21 15:05 | 05-21 16:50 | 234.64 | 236.19 | 59 | 13843.76 | +91.45 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 78 | ↑231.9 | 0.9065 | 1.44 | **WIN** |
| 273 | NFLX | 05-21 15:05 | 05-21 15:45 | 1210.01 | 1206.17 | 11 | 13310.11 | -42.24 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 78.26 | ↑1201.77 | 5.443 | 1.67 | **LOSS** |
| 274 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 275 | QCOM | 05-21 15:20 | 05-21 17:05 | 155.08 | 154.93 | 90 | 13957.2 | -13.5 | -0.1% | 0.14R | 105m | market | stagnation | trend | trend | neutral | 77.16 | ↑153.6 | 0.4341 | 1.07 | **LOSS** |
| 276 | CRWD | 05-21 16:05 | 05-21 17:10 | 447.59 | 447.39 | 31 | 13875.29 | -6.2 | -0.04% | 0.06R | 65m | market | stagnation | breakout | breakout | neutral | 90.09 | ↑438.66 | 1.4315 | 2.85 | **LOSS** |
| 277 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 278 | DDOG | 05-22 13:35 | 05-22 14:40 | 115.75 | 115.73 | 121 | 14005.75 | -2.42 | -0.02% | 0.03R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 67.5 | ↓115.09 | -0.0783 | 1.65 | **LOSS** |
| 279 | SNOW | 05-22 13:35 | 05-22 14:10 | 198.02 | 195.85 | 65 | 12871.3 | -141.05 | -1.1% | 0.55R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 88.83 | ↓196.38 | 3.2399 | 3.05 | **LOSS** |
| 280 | TGT | 05-22 13:35 | 05-22 15:15 | 94.43 | 94.48 | 148 | 13975.64 | +7.4 | +0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 58.78 | ↓93.74 | 0.1907 | 1.41 | **WIN** |
| 281 | MDB | 05-22 13:45 | 05-22 14:35 | 188.54 | 187.95 | 74 | 13951.96 | -43.66 | -0.31% | 0.25R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.82 | ↓188.33 | 0.1922 | 1.41 | **LOSS** |
| 282 | PLTR | 05-22 13:50 | 05-22 15:35 | 123.52 | 125.85 | 114 | 14081.28 | +265.62 | +1.89% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑122.43 | 0.1249 | 1.77 | **WIN** |
| 283 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 21 | 13467.51 | -45.36 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 284 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 285 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.36 | 202.36 | 68 | 13828.48 | -68 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 286 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.83 | 83.19 | 166 | 13915.78 | -106.24 | -0.76% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 287 | AVGO | 05-22 15:05 | 05-22 15:35 | 232.88 | 232.08 | 60 | 13972.8 | -48 | -0.34% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 65.02 | ↑229.61 | 0.7526 | 1.13 | **LOSS** |
| 288 | MU | 05-22 15:05 | 05-22 15:25 | 97.04 | 96.49 | 144 | 13973.76 | -79.2 | -0.57% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 289 | GS | 05-22 15:35 | 05-22 16:25 | 600.8 | 599.84 | 23 | 13818.4 | -22.08 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | thinChop | 66.16 | ↑596.54 | 1.2402 | 1.06 | **LOSS** |
| 290 | TGT | 05-22 16:10 | 05-22 16:30 | 95.71 | 95.4 | 146 | 13973.66 | -45.26 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 58.73 | ↑94.91 | 0.2533 | 1.01 | **LOSS** |
| 291 | AMZN | 05-22 17:55 | 05-22 18:15 | 205.09 | 204.23 | 68 | 13946.12 | -58.48 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 75.28 | ↑202.98 | 0.1344 | 9.58 | **LOSS** |
| 292 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.05 | 122.46 | 113 | 13904.65 | -66.67 | -0.48% | 0.38R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 293 | CRWD | 05-23 14:35 | 05-23 15:05 | 452.87 | 450.14 | 30 | 13586.1 | -81.9 | -0.6% | 0.56R | 30m | market | early-reversal | trend | trend | neutral | 74.01 | ↑446.5 | 0.9714 | 1.22 | **LOSS** |
| 294 | CELH | 05-23 14:45 | 05-23 15:05 | 35.9 | 35.73 | 385 | 13821.5 | -65.45 | -0.47% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 69.81 | ↑35.52 | 0.0118 | 1.57 | **LOSS** |
| 295 | AMD | 05-23 17:15 | 05-23 19:00 | 110.49 | 110.55 | 126 | 13921.74 | +7.56 | +0.05% | 0.07R | 105m | market | timeout | trend | trend | neutral | 72.27 | ↑109.17 | 0.2445 | 1.47 | **WIN** |
| 296 | LRCX | 05-23 17:15 | 05-23 18:15 | 81.1 | 81.05 | 172 | 13949.2 | -8.6 | -0.06% | 0.09R | 60m | market | stagnation | trend | trend | thinChop | 76.92 | ↑80.4 | 0.1356 | 1.21 | **LOSS** |
| 297 | MU | 05-23 17:20 | 05-23 17:40 | 93.74 | 93.43 | 149 | 13967.26 | -46.19 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 75.14 | ↑91.96 | 0.3904 | 1.38 | **LOSS** |
| 298 | QCOM | 05-23 17:25 | 05-23 18:20 | 146.01 | 145.62 | 95 | 13870.95 | -37.05 | -0.27% | 0.39R | 55m | market | stagnation | trend | trend | neutral | 77.07 | ↑143.59 | 0.547 | 1.78 | **LOSS** |
| 299 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 300 | INTU | 05-27 13:30 | 05-27 13:45 | 733.66 | 726.5 | 17 | 12472.22 | -121.72 | -0.98% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.5 | ↓730.5 | 1.0404 | 1.38 | **LOSS** |
| 301 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.85 | 161.78 | 87 | 13906.95 | +167.91 | +1.21% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 302 | TSM | 05-27 13:35 | 05-27 15:20 | 194.92 | 195.86 | 71 | 13839.32 | +66.74 | +0.48% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 303 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 304 | GE | 05-27 13:35 | 05-27 15:20 | 236.41 | 240.04 | 59 | 13948.19 | +214.17 | +1.54% | 2.2R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 305 | SBUX | 05-27 13:35 | 05-27 14:10 | 86.19 | 85.74 | 162 | 13962.78 | -72.9 | -0.52% | 0.74R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 306 | NKE | 05-27 13:35 | 05-27 15:20 | 61.13 | 62.17 | 228 | 13937.64 | +237.12 | +1.7% | 2.02R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.78 | ↑61.11 | 0.1357 | 1.57 | **WIN** |
| 307 | DIS | 05-27 13:40 | 05-27 15:25 | 111.1 | 112.1 | 125 | 13887.5 | +125 | +0.9% | 1.29R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 70.72 | ↑110.71 | 0.0835 | 1.89 | **WIN** |
| 308 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.73 | 161.56 | 87 | 13983.51 | +72.21 | +0.52% | 0.67R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 309 | SNOW | 05-27 13:45 | 05-27 14:20 | 205.92 | 204.84 | 67 | 13796.64 | -72.36 | -0.52% | 0.48R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.97 | ↓204.39 | 0.6946 | 1.93 | **LOSS** |
| 310 | MDB | 05-27 13:45 | 05-27 14:55 | 188.84 | 188.48 | 74 | 13974.16 | -26.64 | -0.19% | 0.22R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 70 | ↓188.58 | 0.8834 | 1.35 | **LOSS** |
| 311 | META | 05-27 14:00 | 05-27 14:45 | 638.74 | 636.98 | 21 | 13413.54 | -36.96 | -0.28% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 312 | LLY | 05-27 14:00 | 05-27 14:20 | 723.09 | 718.62 | 19 | 13738.71 | -84.93 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 313 | DELL | 05-27 14:00 | 05-27 14:35 | 114.72 | 114.28 | 121 | 13881.12 | -53.24 | -0.38% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 74.08 | ↓114.02 | 0.4954 | 1.46 | **LOSS** |
| 314 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.86 | 204.64 | 68 | 13930.48 | -14.96 | -0.11% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 315 | UBER | 05-27 14:25 | 05-27 15:10 | 89.25 | 88.95 | 156 | 13923 | -46.8 | -0.34% | 0.28R | 45m | market | early-reversal | trend | trend | neutral | 71.73 | ↑88.52 | 0.2599 | 1.56 | **LOSS** |
| 316 | CRWD | 05-27 14:25 | 05-27 15:15 | 473 | 472.15 | 29 | 13717 | -24.65 | -0.18% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 77.19 | ↑469.22 | 3.9153 | 2.03 | **LOSS** |
| 317 | ARM | 05-27 15:05 | 05-27 16:50 | 134.86 | 135.49 | 103 | 13890.58 | +64.89 | +0.47% | 0.54R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 318 | HPE | 05-27 15:10 | 05-27 15:35 | 17.94 | 17.88 | 778 | 13957.32 | -46.68 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 71.64 | ↑17.8 | 0.1144 | 1.43 | **LOSS** |
| 319 | ELF | 05-27 15:25 | 05-27 15:45 | 88.99 | 88.64 | 157 | 13971.43 | -54.95 | -0.39% | 0.35R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.1 | ↑86.86 | 1.2357 | 2.42 | **LOSS** |
| 320 | AAPL | 05-27 15:55 | 05-27 16:45 | 200.15 | 199.92 | 69 | 13810.35 | -15.87 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 76.64 | ↑198.52 | 0.6872 | 1.42 | **LOSS** |
| 321 | LLY | 05-27 16:40 | 05-27 17:00 | 730.66 | 727.63 | 19 | 13882.54 | -57.57 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 66.22 | ↑721.17 | 1.7683 | 1.5 | **LOSS** |
| 322 | SNOW | 05-27 16:45 | 05-27 17:05 | 207.56 | 206.87 | 67 | 13906.52 | -46.23 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 80.24 | ↑205.3 | 0.3425 | 4.2 | **LOSS** |
| 323 | META | 05-28 13:30 | 05-28 13:50 | 649.52 | 646.01 | 21 | 13639.92 | -73.71 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.02 | ↓647.61 | 0.5383 | 4.4 | **LOSS** |
| 324 | PLTR | 05-28 13:30 | 05-28 13:55 | 124.91 | 123.28 | 112 | 13989.92 | -182.56 | -1.3% | 1.37R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.9 | ↓124.82 | 0.285 | 3.59 | **LOSS** |
| 325 | UNH | 05-28 13:30 | 05-28 15:15 | 297.36 | 300.96 | 47 | 13975.92 | +169.2 | +1.21% | 1.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 326 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 214 | 13980.62 | -29.96 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 327 | SHOP | 05-28 17:15 | 05-28 19:00 | 107.67 | 107.93 | 130 | 13997.1 | +33.8 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑106.48 | 0.2939 | 4.58 | **WIN** |
| 328 | UNH | 05-29 13:35 | 05-29 14:15 | 301.96 | 299.83 | 46 | 13890.16 | -97.98 | -0.71% | 0.84R | 40m | market | early-reversal | trend | breakout | falseBreakoutProne | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 329 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 330 | DDOG | 05-29 16:25 | 05-29 17:15 | 117.96 | 117.54 | 118 | 13919.28 | -49.56 | -0.36% | 0.51R | 50m | market | early-reversal | trend | trend | neutral | 69.89 | ↑117.17 | 0.2742 | 2.36 | **LOSS** |
| 331 | COST | 05-30 13:35 | 05-30 15:20 | 1029.36 | 1042.12 | 13 | 13381.68 | +165.88 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑1018.28 | 1.9104 | 1.79 | **WIN** |
| 332 | UNH | 05-30 13:50 | 05-30 15:35 | 300.94 | 302.3 | 46 | 13843.24 | +62.56 | +0.45% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 333 | PLTR | 05-30 14:10 | 05-30 15:05 | 126.37 | 131.25 | 111 | 14027.07 | +541.68 | +3.86% | 2.27R | 55m | market | profit-target | breakout | breakout | neutral | 71.23 | ↑124.6 | 0.6822 | 2.16 | **WIN** |
| 334 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 335 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.12 | 203.97 | 68 | 13880.16 | -10.2 | -0.07% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 336 | NVO | 05-30 15:30 | 05-30 16:25 | 70.95 | 70.8 | 197 | 13977.15 | -29.55 | -0.21% | 0.3R | 55m | market | stagnation | trend | trend | neutral | 78.32 | ↑69.94 | 0.3909 | 1.52 | **LOSS** |
| 337 | COST | 05-30 15:35 | 05-30 16:25 | 1045.22 | 1044.8 | 13 | 13587.86 | -5.46 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 51.58 | ↑1033.4 | 7.9373 | 1.86 | **LOSS** |
| 338 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 339 | PANW | 06-02 13:30 | 06-02 13:50 | 193.71 | 192.16 | 72 | 13947.12 | -111.6 | -0.8% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 340 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.51 | 466.79 | 29 | 13702.79 | -165.88 | -1.21% | 1.73R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 341 | AMD | 06-02 13:35 | 06-02 14:15 | 113.4 | 112.7 | 123 | 13948.2 | -86.1 | -0.62% | 0.65R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.29 | ↓112.74 | 0.6463 | 2.28 | **LOSS** |
| 342 | AVGO | 06-02 13:35 | 06-02 13:55 | 248.6 | 246.46 | 52 | 12927.2 | -111.28 | -0.86% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓247 | 1.9006 | 1.18 | **LOSS** |
| 343 | PLTR | 06-02 13:35 | 06-02 13:45 | 133.98 | 132.08 | 105 | 14067.9 | -199.5 | -1.42% | 1.16R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.42 | ↓133.08 | 1.5619 | 1.85 | **LOSS** |
| 344 | COIN | 06-02 13:35 | 06-02 13:40 | 249.41 | 245.44 | 56 | 13966.96 | -222.32 | -1.59% | 2.21R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 345 | XOM | 06-02 13:35 | 06-02 14:00 | 103.25 | 102.78 | 135 | 13938.75 | -63.45 | -0.46% | 0.66R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.3 | ↓103.11 | 0.2555 | 2 | **LOSS** |
| 346 | UNH | 06-02 13:35 | 06-02 13:55 | 312.06 | 306.66 | 41 | 12794.46 | -221.4 | -1.73% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.75 | ↓309.2 | 1.2285 | 6.95 | **LOSS** |
| 347 | RIVN | 06-03 13:40 | 06-03 14:30 | 14.55 | 14.54 | 897 | 13051.35 | -8.97 | -0.07% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.82 | ↑14.4 | 0.1001 | 1.24 | **LOSS** |
| 348 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 349 | CVX | 06-03 14:05 | 06-03 15:50 | 138.94 | 140.36 | 100 | 13894 | +142 | +1.02% | 1.46R | 105m | market | timeout | trend | trend | neutral | 64.13 | ↑138.16 | 0.3444 | 1.99 | **WIN** |
| 350 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 698 | 13932.08 | +202.42 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 351 | CAT | 06-03 14:20 | 06-03 16:05 | 348.62 | 349.92 | 40 | 13944.8 | +52 | +0.37% | 0.53R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 352 | DIS | 06-03 14:20 | 06-03 16:05 | 114.12 | 114.51 | 122 | 13922.64 | +47.58 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑113.51 | 0.3433 | 1.91 | **WIN** |
| 353 | TGT | 06-03 14:20 | 06-03 16:05 | 94.73 | 96.04 | 148 | 14020.04 | +193.88 | +1.38% | 1.7R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 354 | SMCI | 06-03 14:35 | 06-03 16:20 | 42.89 | 43.81 | 326 | 13982.14 | +299.92 | +2.15% | 1.17R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.02 | ↑41.83 | 0.4437 | 1.21 | **WIN** |
| 355 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.12 | 133.33 | 105 | 13872.6 | +127.05 | +0.92% | 1.08R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 356 | CELH | 06-03 15:15 | 06-03 15:40 | 39.08 | 38.87 | 353 | 13795.24 | -74.13 | -0.54% | 0.34R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 60.03 | ↑38.54 | 0.1264 | 1.25 | **LOSS** |
| 357 | KLAC | 06-03 15:35 | 06-03 17:20 | 775.88 | 776.92 | 18 | 13965.84 | +18.72 | +0.13% | 0.19R | 105m | market | timeout | trend | trend | neutral | 72.85 | ↑772.22 | 4.3454 | 1.28 | **WIN** |
| 358 | TGT | 06-03 16:10 | 06-03 16:35 | 96.12 | 95.83 | 146 | 14033.52 | -42.34 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 70.86 | ↑94.87 | 0.5013 | 1.5 | **LOSS** |
| 359 | RIVN | 06-03 16:15 | 06-03 17:25 | 14.62 | 14.61 | 961 | 14049.82 | -9.61 | -0.07% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 66.27 | ↑14.51 | 0.0195 | 3.39 | **LOSS** |
| 360 | TSM | 06-04 13:30 | 06-04 14:00 | 202.09 | 200.74 | 69 | 13944.21 | -93.15 | -0.67% | 0.96R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 361 | UNH | 06-04 13:30 | 06-04 13:55 | 305.69 | 303.54 | 46 | 14061.74 | -98.9 | -0.7% | 1R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 362 | TXN | 06-04 13:30 | 06-04 14:00 | 190.13 | 189.57 | 73 | 13879.49 | -40.88 | -0.29% | 0.41R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 363 | DDOG | 06-04 13:40 | 06-04 14:00 | 120.72 | 119.73 | 115 | 13882.8 | -113.85 | -0.82% | 1.15R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 364 | AAPL | 06-04 14:00 | 06-04 14:20 | 205.57 | 204.82 | 68 | 13978.76 | -51 | -0.36% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑204.52 | 0.5322 | 2.23 | **LOSS** |
| 365 | SMCI | 06-04 15:00 | 06-04 15:30 | 44.02 | 43.82 | 319 | 14042.38 | -63.8 | -0.45% | 0.3R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 56.72 | ↓43.81 | 0.0529 | 1.49 | **LOSS** |
| 366 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 66 | 13890.36 | -82.5 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 367 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 83 | 14137.39 | -58.93 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 368 | PLTR | 06-05 13:40 | 06-05 14:00 | 132.23 | 130.35 | 106 | 14016.38 | -199.28 | -1.42% | 1.25R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.64 | ↓130.89 | 0.0474 | 2.28 | **LOSS** |
| 369 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 370 | DDOG | 06-05 14:10 | 06-05 15:55 | 122.63 | 123.26 | 114 | 13979.82 | +71.82 | +0.51% | 0.53R | 105m | market | timeout | breakout | trend | neutral | 79.22 | ↑121.62 | 0.6152 | 1.19 | **WIN** |
| 371 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 372 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 373 | NOW | 06-05 15:15 | 06-05 16:05 | 1030.8 | 1029.87 | 13 | 13400.4 | -12.09 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.07 | ↑1025.79 | 3.1614 | 3.46 | **LOSS** |
| 374 | TSM | 06-05 15:20 | 06-05 16:05 | 205.71 | 204.79 | 68 | 13988.28 | -62.56 | -0.45% | 0.64R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 375 | LRCX | 06-05 15:30 | 06-05 16:15 | 86.03 | 85.58 | 162 | 13936.86 | -72.9 | -0.52% | 0.74R | 45m | market | early-reversal | trend | trend | neutral | 72.75 | ↑85.24 | 0.2421 | 1.62 | **LOSS** |
| 376 | MU | 06-05 15:35 | 06-05 16:15 | 108.57 | 108.16 | 129 | 14005.53 | -52.89 | -0.38% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 74.3 | ↑107.28 | 0.9372 | 1.41 | **LOSS** |
| 377 | RIVN | 06-05 15:55 | 06-05 16:05 | 14.27 | 14.12 | 985 | 14055.95 | -147.75 | -1.05% | 1.19R | 10m | market | stop-loss | trend | trend | neutral | 79 | ↑13.99 | 0.0763 | 2.11 | **LOSS** |
| 378 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 379 | AAPL | 06-06 13:30 | 06-06 13:50 | 205.12 | 204.16 | 62 | 12717.44 | -59.52 | -0.47% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.95 | ↓204.58 | -0.1146 | 2.13 | **LOSS** |
| 380 | PYPL | 06-06 13:30 | 06-06 13:50 | 73.47 | 73.13 | 190 | 13959.3 | -64.6 | -0.46% | 0.61R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 65.18 | ↓73.38 | 0.0047 | 2.35 | **LOSS** |
| 381 | JPM | 06-06 13:30 | 06-06 15:15 | 265.14 | 265.79 | 52 | 13787.28 | +33.8 | +0.25% | 0.36R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.37 | ↑264.86 | -0.1276 | 1.75 | **WIN** |
| 382 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 383 | TGT | 06-06 13:30 | 06-06 15:15 | 95.3 | 95.92 | 136 | 12960.8 | +84.32 | +0.65% | 0.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 384 | XOM | 06-06 13:35 | 06-06 15:20 | 103.75 | 104.13 | 134 | 13902.5 | +50.92 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 385 | CAT | 06-06 13:35 | 06-06 14:00 | 356.89 | 355.6 | 39 | 13918.71 | -50.31 | -0.36% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.5 | ↓356.13 | 0.6147 | 3.19 | **LOSS** |
| 386 | ABNB | 06-06 13:40 | 06-06 14:05 | 142.7 | 141.59 | 90 | 12843 | -99.9 | -0.78% | 0.53R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.75 | ↓141.78 | 0.8906 | 2.3 | **LOSS** |
| 387 | NET | 06-06 13:40 | 06-06 14:05 | 180.77 | 179.57 | 71 | 12834.67 | -85.2 | -0.66% | 0.48R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.41 | ↓178.82 | -0.3706 | 1.46 | **LOSS** |
| 388 | GE | 06-06 13:40 | 06-06 14:00 | 256.88 | 256.1 | 54 | 13871.52 | -42.12 | -0.3% | 0.42R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.73 | ↓255.21 | 0.6662 | 1.5 | **LOSS** |
| 389 | DELL | 06-06 14:25 | 06-06 16:10 | 114.24 | 114.8 | 122 | 13937.28 | +68.32 | +0.49% | 0.53R | 105m | market | timeout | trend | trend | neutral | 72.16 | ↑113.92 | 0.3493 | 2.63 | **WIN** |
| 390 | QCOM | 06-06 15:05 | 06-06 15:25 | 150.64 | 149.92 | 92 | 13858.88 | -66.24 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 67.5 | ↑149.8 | 0.5055 | 1.61 | **LOSS** |
| 391 | ARM | 06-06 15:05 | 06-06 15:25 | 134.97 | 134.28 | 103 | 13901.91 | -71.07 | -0.51% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 392 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 393 | RIVN | 06-06 17:55 | 06-06 19:40 | 14 | 14 | 1002 | 14028 | +0 | +0% | 0R | 105m | market | breakeven-stop | trend | trend | thinChop | 64.44 | ↑13.88 | 0.0114 | 1.19 | **WIN** |
| 394 | KLAC | 06-09 13:35 | 06-09 14:25 | 823.92 | 823.55 | 17 | 14006.64 | -6.29 | -0.04% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.74 | ↑822.65 | 1.4407 | 1.17 | **LOSS** |
| 395 | ORCL | 06-09 13:40 | 06-09 15:25 | 176.72 | 177.4 | 79 | 13960.88 | +53.72 | +0.38% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.66 | ↓175.24 | 0.4223 | 1.33 | **WIN** |
| 396 | TGT | 06-09 13:40 | 06-09 13:45 | 99.19 | 97.77 | 141 | 13985.79 | -200.22 | -1.43% | 2.04R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 397 | UBER | 06-09 13:45 | 06-09 15:05 | 87.44 | 87.33 | 160 | 13990.4 | -17.6 | -0.13% | 0.14R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 398 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 197 | 13927.9 | -114.26 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 399 | SMCI | 06-09 14:25 | 06-09 14:50 | 43.26 | 42.9 | 324 | 14016.24 | -116.64 | -0.83% | 0.49R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 85.71 | ↑42.68 | 0.393 | 1.46 | **LOSS** |
| 400 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 97 | 14043.66 | -57.23 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 401 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 402 | KLAC | 06-09 15:10 | 06-09 15:30 | 834.83 | 831.29 | 16 | 13357.28 | -56.64 | -0.42% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 68.82 | ↑826.47 | 6.4471 | 1.67 | **LOSS** |
| 403 | BA | 06-09 17:20 | 06-09 17:40 | 218.58 | 217.52 | 64 | 13989.12 | -67.84 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.61 | ↑215.54 | 0.7142 | 1.49 | **LOSS** |
| 404 | NVO | 06-09 17:25 | 06-09 18:40 | 75.42 | 75.39 | 185 | 13952.7 | -5.55 | -0.04% | 0.04R | 75m | market | stagnation | trend | trend | neutral | 73.82 | ↑74.91 | 0.1941 | 1.5 | **LOSS** |
| 405 | TSLA | 06-09 17:45 | 06-09 19:30 | 299.07 | 304.63 | 46 | 13757.22 | +255.76 | +1.86% | 2.66R | 105m | market | timeout | trend | trend | noisyHighBeta | 75.72 | ↑292.64 | 0.7899 | 1.88 | **WIN** |
| 406 | XOM | 06-10 13:30 | 06-10 13:50 | 106.55 | 106.15 | 121 | 12892.55 | -48.4 | -0.38% | 0.54R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.37 | ↓106.33 | -0.0398 | 1.25 | **LOSS** |
| 407 | TSLA | 06-10 13:35 | 06-10 14:40 | 313.47 | 313.35 | 44 | 13792.68 | -5.28 | -0.04% | 0.02R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.25 | ↓313.22 | 3.6775 | 1.35 | **LOSS** |
| 408 | TSM | 06-10 13:35 | 06-10 15:15 | 211.65 | 211.44 | 66 | 13968.9 | -13.86 | -0.1% | 0.14R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.36 | ↓211.23 | 0.7821 | 2.35 | **LOSS** |
| 409 | LLY | 06-10 13:40 | 06-10 15:30 | 786.05 | 794.64 | 17 | 13362.85 | +146.03 | +1.09% | 1.49R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 67.08 | ↑785.26 | 1.6434 | 1.19 | **WIN** |
| 410 | NVO | 06-10 13:40 | 06-10 15:05 | 77.75 | 79.67 | 165 | 12828.75 | +316.8 | +2.47% | 2.25R | 85m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.51 | ↑77.77 | 0.4269 | 1.56 | **WIN** |
| 411 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.69 | 121.92 | 113 | 13976.97 | -200.01 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 412 | ELF | 06-10 13:45 | 06-10 14:45 | 119.1 | 119.75 | 117 | 13934.7 | +76.05 | +0.55% | 0.68R | 60m | market | trailing-stop | breakout | breakout | neutral | 64.5 | ↓117.77 | -0.04 | 1.19 | **WIN** |
| 413 | CVX | 06-10 14:10 | 06-10 15:45 | 143.43 | 144.53 | 48 | 13912.71 | +52.8 | +0.77% | 0.97R | 95m | market | trim-profit-target | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 414 | CVX | 06-10 14:10 | 06-10 15:55 | 143.43 | 144.4 | 49 | 13912.71 | +47.53 | +0.68% | 0.86R | 105m | market | timeout | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 415 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.3 | 203.48 | 68 | 13892.4 | -55.76 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 416 | TSLA | 06-10 15:10 | 06-10 15:30 | 319.65 | 316.82 | 43 | 13744.95 | -121.69 | -0.89% | 0.72R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 62.06 | ↑314.58 | 3.2784 | 1.13 | **LOSS** |
| 417 | LRCX | 06-10 15:55 | 06-10 17:40 | 90.64 | 91.1 | 154 | 13958.56 | +70.84 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 62.65 | ↑89.75 | 0.3895 | 1.04 | **WIN** |
| 418 | NVO | 06-10 16:05 | 06-10 17:00 | 80.05 | 80 | 175 | 14008.75 | -8.75 | -0.06% | 0.08R | 55m | market | stagnation | trend | trend | neutral | 64.19 | ↑79.02 | 0.5594 | 2.57 | **LOSS** |
| 419 | PYPL | 06-10 16:45 | 06-10 17:05 | 75.16 | 74.84 | 186 | 13979.76 | -59.52 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 77.2 | ↑74.32 | 0.1754 | 1.91 | **LOSS** |
| 420 | SBUX | 06-11 13:35 | 06-11 15:20 | 94.03 | 94.64 | 137 | 12882.11 | +83.57 | +0.65% | 0.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 94.98 | ↑93.45 | 0.5126 | 2.05 | **WIN** |
| 421 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 122 | 13953.14 | +26.84 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 422 | GE | 06-11 14:05 | 06-11 15:50 | 245.07 | 246.25 | 57 | 13968.99 | +67.26 | +0.48% | 0.48R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 423 | IBM | 06-11 14:30 | 06-11 16:15 | 278.03 | 279.58 | 50 | 13901.5 | +77.5 | +0.56% | 0.8R | 105m | market | timeout | trend | trend | neutral | 69.81 | ↑276.91 | 0.552 | 1.29 | **WIN** |
| 424 | ELF | 06-11 14:45 | 06-11 16:30 | 122.63 | 123.85 | 114 | 13979.82 | +139.08 | +0.99% | 0.96R | 105m | market | timeout | breakout | breakout | neutral | 71.72 | ↑121.03 | 1.2031 | 1.35 | **WIN** |
| 425 | SHOP | 06-11 16:45 | 06-11 18:00 | 115.98 | 115.1 | 120 | 13917.6 | -105.6 | -0.76% | 0.85R | 75m | market | breakeven-stop | trend | trend | neutral | 67.55 | ↓114.59 | 0.1966 | 1 | **LOSS** |
| 426 | ORCL | 06-12 13:35 | 06-12 14:30 | 194.6 | 200.82 | 66 | 12843.6 | +410.52 | +3.2% | 1.6R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.33 | ↑192.33 | 3.8358 | 2.56 | **WIN** |
| 427 | CRWD | 06-12 13:40 | 06-12 14:00 | 485.52 | 481.2 | 28 | 13594.56 | -120.96 | -0.89% | 1R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.82 | ↓482.32 | 1.0978 | 3.04 | **LOSS** |
| 428 | SNOW | 06-12 13:50 | 06-12 14:10 | 211.59 | 210.21 | 65 | 13753.35 | -89.7 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.71 | ↓210.84 | 0.5133 | 3.96 | **LOSS** |
| 429 | AVGO | 06-12 14:10 | 06-12 15:15 | 257.08 | 256.27 | 54 | 13882.32 | -43.74 | -0.32% | 0.32R | 65m | market | early-reversal | breakout | breakout | neutral | 97.71 | ↓254.35 | 0.8364 | 1.87 | **LOSS** |
| 430 | AMAT | 06-12 14:20 | 06-12 15:10 | 174.86 | 174.35 | 80 | 13988.8 | -40.8 | -0.29% | 0.39R | 50m | market | early-reversal | trend | trend | neutral | 78.24 | ↓173.92 | 0.7901 | 1.88 | **LOSS** |
| 431 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 97 | 14044.63 | -37.83 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 432 | BA | 06-12 17:10 | 06-12 17:30 | 205.84 | 204.34 | 68 | 13997.12 | -102 | -0.73% | 0.99R | 20m | market | early-reversal | trend | trend | neutral | 72.85 | ↑203.8 | 0.4887 | 1.35 | **LOSS** |
| 433 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.58 | 210.87 | 68 | 13911.44 | +427.72 | +3.07% | 2.62R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 434 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 679 | 13953.45 | -156.17 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 435 | LMT | 06-13 13:35 | 06-13 13:55 | 486.43 | 481.29 | 26 | 12647.18 | -133.64 | -1.06% | 1.34R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 98.1 | ↓481.73 | 2.6569 | 1.69 | **LOSS** |
| 436 | ORCL | 06-13 15:30 | 06-13 17:10 | 211.37 | 213.39 | 33 | 13950.42 | +66.66 | +0.96% | 0.84R | 100m | market | trim-profit-target | trend | trend | neutral | 70.64 | ↑207.37 | 2.4525 | 1.65 | **WIN** |
| 437 | ORCL | 06-13 15:30 | 06-13 17:15 | 211.37 | 213.04 | 33 | 13950.42 | +55.11 | +0.79% | 0.69R | 105m | market | timeout | trend | trend | neutral | 70.64 | ↑207.37 | 2.4525 | 1.65 | **WIN** |
| 438 | NET | 06-13 15:55 | 06-13 16:25 | 172.36 | 171.78 | 81 | 13961.16 | -46.98 | -0.34% | 0.49R | 30m | market | early-reversal | trend | trend | thinChop | 79.54 | ↑169.74 | 0.688 | 1.05 | **LOSS** |
| 439 | TSLA | 06-13 16:30 | 06-13 18:15 | 326.39 | 328.29 | 42 | 13708.38 | +79.8 | +0.58% | 0.5R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 74.81 | ↑318.34 | 1.9969 | 1.47 | **WIN** |
| 440 | COIN | 06-13 17:40 | 06-13 18:00 | 241.28 | 240.23 | 57 | 13752.96 | -59.85 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 62.13 | ↑238.38 | 0.7294 | 1.21 | **LOSS** |
| 441 | MU | 06-16 13:30 | 06-16 15:15 | 118.58 | 120.68 | 118 | 13992.44 | +247.8 | +1.77% | 1.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 442 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 443 | TXN | 06-16 13:30 | 06-16 15:15 | 197.68 | 199.27 | 55 | 10872.4 | +87.45 | +0.8% | 1.03R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 444 | AMD | 06-16 13:35 | 06-16 14:15 | 120.5 | 124.26 | 115 | 13857.5 | +432.4 | +3.12% | 2.17R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.82 | ↑119.69 | 0.9613 | 2.52 | **WIN** |
| 445 | NFLX | 06-16 13:35 | 06-16 13:55 | 1225.49 | 1221.94 | 11 | 13480.39 | -39.05 | -0.29% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 62.3 | ↑1221.24 | 0.5118 | 2.21 | **LOSS** |
| 446 | PLTR | 06-16 13:35 | 06-16 14:15 | 143.59 | 142.35 | 98 | 14071.82 | -121.52 | -0.86% | 0.55R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓142.51 | 0.9574 | 3.22 | **LOSS** |
| 447 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 129 | 13910.07 | +148.35 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 448 | MA | 06-16 13:35 | 06-16 15:10 | 572.36 | 572.16 | 24 | 13736.64 | -4.8 | -0.03% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.16 | ↑569.61 | 1.3516 | 1.19 | **LOSS** |
| 449 | WMT | 06-16 13:40 | 06-16 14:35 | 95.34 | 95.12 | 146 | 13919.64 | -32.12 | -0.23% | 0.33R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 72.52 | ↓95.1 | 0.094 | 1.49 | **LOSS** |
| 450 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.49 | 175.83 | 80 | 13959.2 | +107.2 | +0.77% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 451 | RIVN | 06-16 13:45 | 06-16 14:50 | 13.75 | 14.08 | 1020 | 14025 | +336.6 | +2.4% | 2.26R | 65m | market | profit-target | breakout | breakout | neutral | 85.19 | ↑13.66 | 0.0213 | 1.11 | **WIN** |
| 452 | ASML | 06-16 13:50 | 06-16 15:35 | 771.19 | 776.38 | 15 | 11567.85 | +77.85 | +0.67% | 0.96R | 105m | market | timeout | mixed | breakout | falseBreakoutProne | 69.1 | ↑769.38 | -0.9416 | 1.54 | **WIN** |
| 453 | ADBE | 06-16 14:00 | 06-16 14:20 | 404.62 | 399.13 | 34 | 13757.08 | -186.66 | -1.36% | 1.24R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.04 | ↓399.94 | 2.3777 | 1.36 | **LOSS** |
| 454 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 68 | 13857.04 | -55.08 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 455 | AMD | 06-16 14:20 | 06-16 16:05 | 125.11 | 126.93 | 112 | 14012.32 | +203.84 | +1.45% | 0.87R | 105m | market | timeout | breakout | breakout | extendedBreakout | 97.1 | ↑122.36 | 2.3391 | 2.66 | **WIN** |
| 456 | PANW | 06-16 15:45 | 06-16 16:15 | 199.68 | 199.12 | 69 | 13777.92 | -38.64 | -0.28% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 76.38 | ↑198.29 | 0.5704 | 1.4 | **LOSS** |
| 457 | ELF | 06-16 16:20 | 06-16 16:45 | 128.08 | 127.71 | 109 | 13960.72 | -40.33 | -0.29% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 66.23 | ↑126.87 | 0.5356 | 2.55 | **LOSS** |
| 458 | CELH | 06-16 17:25 | 06-16 17:45 | 44.13 | 43.89 | 312 | 13768.56 | -74.88 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 73.27 | ↑43.73 | 0.0051 | 1.35 | **LOSS** |
| 459 | MU | 06-17 13:35 | 06-17 14:40 | 122.27 | 122.08 | 105 | 12838.35 | -19.95 | -0.16% | 0.17R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.63 | ↓121.29 | 0.3381 | 1.18 | **LOSS** |
| 460 | CVX | 06-17 13:35 | 06-17 15:00 | 148.37 | 148.27 | 86 | 12759.82 | -8.6 | -0.07% | 0.1R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.21 | ↓147.77 | 0.4112 | 1.42 | **LOSS** |
| 461 | ORCL | 06-17 13:45 | 06-17 14:35 | 214.46 | 214 | 60 | 12867.6 | -27.6 | -0.21% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.6 | ↓213.02 | 0.5016 | 1.44 | **LOSS** |
| 462 | ARM | 06-17 13:45 | 06-17 14:40 | 145.39 | 146.49 | 87 | 12648.93 | +95.7 | +0.76% | 0.61R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 75.74 | ↓143.64 | 0.4938 | 1.52 | **WIN** |
| 463 | KLAC | 06-17 13:50 | 06-17 15:35 | 904.08 | 907.72 | 14 | 12657.12 | +50.96 | +0.4% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.69 | ↑896.95 | 2.6145 | 2.48 | **WIN** |
| 464 | DELL | 06-17 13:55 | 06-17 15:40 | 115.5 | 117.44 | 121 | 13975.5 | +234.74 | +1.68% | 2.15R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.82 | ↑114.57 | 0.3272 | 1.65 | **WIN** |
| 465 | AMAT | 06-17 14:10 | 06-17 14:30 | 178.09 | 177.45 | 78 | 13891.02 | -49.92 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.62 | ↑176.88 | 0.4141 | 2.9 | **LOSS** |
| 466 | AMD | 06-17 14:15 | 06-17 14:35 | 130.46 | 129.28 | 107 | 13959.22 | -126.26 | -0.9% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 54.5 | ↑128.73 | 0.7912 | 1.62 | **LOSS** |
| 467 | CRM | 06-17 14:15 | 06-17 14:40 | 268.58 | 266.99 | 52 | 13966.16 | -82.68 | -0.59% | 0.7R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 468 | GE | 06-17 15:10 | 06-17 15:30 | 238.77 | 236.71 | 58 | 13848.66 | -119.48 | -0.86% | 1.23R | 20m | market | stop-loss | breakout | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 469 | AMAT | 06-17 16:00 | 06-17 16:20 | 178.28 | 177.46 | 78 | 13905.84 | -63.96 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | thinChop | 68 | ↑177.11 | 0.2299 | 1.04 | **LOSS** |
| 470 | ELF | 06-17 17:25 | 06-17 17:45 | 125.3 | 124.77 | 111 | 13908.3 | -58.83 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑123.49 | 0.2864 | 1.57 | **LOSS** |
| 471 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 472 | JPM | 06-18 13:35 | 06-18 15:20 | 273.13 | 274.76 | 51 | 13929.63 | +83.13 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.43 | ↓271.81 | 0.4584 | 1.47 | **WIN** |
| 473 | RIVN | 06-18 13:35 | 06-18 15:20 | 13.6 | 13.75 | 1035 | 14076 | +155.25 | +1.1% | 1.39R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.57 | ↑13.5 | 0.0001 | 1.78 | **WIN** |
| 474 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 475 | AMD | 06-18 14:00 | 06-18 14:50 | 128.82 | 127.76 | 108 | 13912.56 | -114.48 | -0.82% | 0.65R | 50m | market | early-reversal | breakout | breakout | neutral | 63.53 | ↓127.83 | 0.278 | 2.49 | **LOSS** |
| 476 | BAC | 06-18 14:00 | 06-18 14:50 | 44.88 | 44.86 | 311 | 13957.68 | -6.22 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 78.5 | ↑44.66 | 0.1465 | 1.35 | **LOSS** |
| 477 | MU | 06-18 14:30 | 06-18 14:50 | 122.5 | 121.6 | 114 | 13965 | -102.6 | -0.73% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 478 | PYPL | 06-18 14:30 | 06-18 15:20 | 71.26 | 70.98 | 196 | 13966.96 | -54.88 | -0.39% | 0.56R | 50m | market | early-reversal | trend | trend | neutral | 63.08 | ↑70.6 | 0.1065 | 1.01 | **LOSS** |
| 479 | CRM | 06-20 13:30 | 06-20 13:50 | 262.21 | 260.67 | 53 | 13897.13 | -81.62 | -0.59% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.75 | ↓261.57 | 0.2649 | 2.17 | **LOSS** |
| 480 | AAPL | 06-20 13:35 | 06-20 13:55 | 200.52 | 199.72 | 69 | 13835.88 | -55.2 | -0.4% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.2 | ↓199.57 | 0.7936 | 2.76 | **LOSS** |
| 481 | AMD | 06-20 13:35 | 06-20 14:15 | 131.72 | 130.62 | 98 | 12908.56 | -107.8 | -0.84% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.04 | ↓130.29 | 0.6851 | 2.57 | **LOSS** |
| 482 | MDB | 06-20 13:35 | 06-20 13:55 | 211.21 | 207.96 | 60 | 12672.6 | -195 | -1.54% | 1.35R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.66 | ↓210.8 | 1.5576 | 1.88 | **LOSS** |
| 483 | WMT | 06-20 13:35 | 06-20 13:50 | 96.32 | 95.55 | 145 | 13966.4 | -111.65 | -0.8% | 1.14R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.9 | ↓95.99 | 0.1675 | 1.81 | **LOSS** |
| 484 | DELL | 06-20 13:40 | 06-20 14:20 | 118.44 | 117.74 | 118 | 13975.92 | -82.6 | -0.59% | 0.5R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.74 | ↓118.56 | 0.2368 | 1.28 | **LOSS** |
| 485 | SMCI | 06-20 14:00 | 06-20 14:20 | 45.94 | 44.91 | 305 | 14011.7 | -314.15 | -2.24% | 1.85R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 73.08 | ↓45.64 | 0.281 | 1.71 | **LOSS** |
| 486 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 653 | 13941.55 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 487 | CAT | 06-23 13:35 | 06-23 14:25 | 365.58 | 364.35 | 38 | 13892.04 | -46.74 | -0.34% | 0.49R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.36 | ↓363.99 | 0.6127 | 2.8 | **LOSS** |
| 488 | COST | 06-23 13:35 | 06-23 14:00 | 992.3 | 988.88 | 14 | 13892.2 | -47.88 | -0.34% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 75.81 | ↓989.29 | 0.6317 | 3.16 | **LOSS** |
| 489 | TSLA | 06-23 13:40 | 06-23 14:10 | 334.51 | 343.84 | 38 | 12711.38 | +354.54 | +2.79% | 1.68R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 86.87 | ↑333.01 | 1.9842 | 2.83 | **WIN** |
| 490 | IBM | 06-23 13:40 | 06-23 15:25 | 284.45 | 286.18 | 49 | 13938.05 | +84.77 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 86.53 | ↑283.69 | 0.428 | 1.9 | **WIN** |
| 491 | RIVN | 06-23 13:50 | 06-23 15:35 | 13.72 | 13.84 | 1028 | 14104.16 | +123.36 | +0.87% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.44 | ↑13.58 | -0.0091 | 1.76 | **WIN** |
| 492 | ARM | 06-23 14:00 | 06-23 15:05 | 147.14 | 147.09 | 95 | 13978.3 | -4.75 | -0.03% | 0.04R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 493 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.51 | 213.36 | 65 | 13878.15 | -9.75 | -0.07% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 494 | LRCX | 06-23 14:00 | 06-23 14:50 | 92.43 | 92.28 | 151 | 13956.93 | -22.65 | -0.16% | 0.17R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 495 | AMD | 06-23 14:05 | 06-23 14:30 | 133.17 | 131.62 | 105 | 13982.85 | -162.75 | -1.16% | 0.59R | 25m | market | early-reversal | breakout | trend | neutral | 71.93 | ↓131.31 | 0.9482 | 1.01 | **LOSS** |
| 496 | DDOG | 06-23 14:05 | 06-23 15:50 | 128.99 | 129.57 | 108 | 13930.92 | +62.64 | +0.45% | 0.5R | 105m | market | timeout | trend | trend | neutral | 67.14 | ↑127.72 | 0.218 | 1.29 | **WIN** |
| 497 | KLAC | 06-23 14:05 | 06-23 14:25 | 859.3 | 852.22 | 16 | 13748.8 | -113.28 | -0.82% | 1.17R | 20m | market | stop-loss | trend | trend | neutral | 78.91 | ↓855.15 | 2.4106 | 1.28 | **LOSS** |
| 498 | ADBE | 06-23 14:10 | 06-23 14:55 | 379.45 | 378.03 | 36 | 13660.2 | -51.12 | -0.37% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 71.37 | ↑376.74 | 0.8389 | 1.76 | **LOSS** |
| 499 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 500 | TSLA | 06-23 14:20 | 06-23 16:05 | 350 | 354.81 | 40 | 14000 | +192.4 | +1.37% | 0.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.3 | ↑339.94 | 6.6463 | 2.31 | **WIN** |
| 501 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 502 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 503 | CRWD | 06-23 15:40 | 06-23 16:05 | 485.17 | 483.82 | 28 | 13584.76 | -37.8 | -0.28% | 0.4R | 25m | market | early-reversal | trend | trend | thinChop | 73.68 | ↑476.66 | 2.2235 | 1.07 | **LOSS** |
| 504 | AVGO | 06-23 17:15 | 06-23 19:00 | 251.83 | 253.45 | 55 | 13850.65 | +89.1 | +0.64% | 0.78R | 105m | market | timeout | trend | trend | neutral | 62.92 | ↑249.22 | 0.4843 | 1.7 | **WIN** |
| 505 | MSFT | 06-23 17:20 | 06-23 19:05 | 485.05 | 485.4 | 28 | 13581.4 | +9.8 | +0.07% | 0.1R | 105m | market | timeout | trend | trend | neutral | 75.4 | ↑478.25 | 1.5633 | 2.81 | **WIN** |
| 506 | NKE | 06-23 17:20 | 06-23 19:05 | 60.57 | 61.23 | 231 | 13991.67 | +152.46 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 70.13 | ↑60.07 | 0.0505 | 1.51 | **WIN** |
| 507 | SHOP | 06-23 17:30 | 06-23 18:35 | 109.25 | 109.11 | 128 | 13984 | -17.92 | -0.13% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 62.06 | ↑107.69 | 0.1283 | 1.34 | **LOSS** |
| 508 | RIVN | 06-23 17:35 | 06-23 17:55 | 13.87 | 13.82 | 1018 | 14119.66 | -50.9 | -0.36% | 0.35R | 20m | market | early-reversal | breakout | breakout | neutral | 73.11 | ↑13.75 | -0.0252 | 1.3 | **LOSS** |
| 509 | NET | 06-23 17:40 | 06-23 19:25 | 182.46 | 184 | 76 | 13866.96 | +117.04 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑180.39 | 0.1582 | 1.81 | **WIN** |
| 510 | CRM | 06-24 13:35 | 06-24 15:20 | 267.55 | 270.62 | 52 | 13912.6 | +159.64 | +1.15% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 511 | ORCL | 06-24 13:35 | 06-24 15:20 | 211.58 | 214.33 | 66 | 13964.28 | +181.5 | +1.3% | 1.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 97.77 | ↑210.26 | 1.0072 | 1.16 | **WIN** |
| 512 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 642 | 13924.98 | +417.3 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 513 | TSM | 06-24 13:35 | 06-24 15:20 | 216.56 | 218.87 | 60 | 12993.6 | +138.6 | +1.07% | 1.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.51 | ↑215.78 | 0.9191 | 7.36 | **WIN** |
| 514 | COIN | 06-24 13:35 | 06-24 14:10 | 316.44 | 332.75 | 44 | 13923.36 | +717.64 | +5.15% | 4.36R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.79 | ↑314.31 | 1.6507 | 1.32 | **WIN** |
| 515 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 115 | 12982.35 | +215.05 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 516 | NOW | 06-24 13:35 | 06-24 13:55 | 990.35 | 986.17 | 14 | 13864.9 | -58.52 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.89 | ↓989.94 | 2.4193 | 3.67 | **LOSS** |
| 517 | BAC | 06-24 13:35 | 06-24 13:55 | 47.13 | 46.95 | 296 | 13950.48 | -53.28 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.98 | ↓46.98 | 0.2285 | 1.12 | **LOSS** |
| 518 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 177 | 12906.84 | +338.07 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 519 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 520 | AVGO | 06-24 13:40 | 06-24 14:35 | 263.22 | 262.61 | 48 | 12634.56 | -29.28 | -0.23% | 0.16R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.46 | ↓263.33 | 2.0874 | 1.24 | **LOSS** |
| 521 | MU | 06-24 13:40 | 06-24 15:25 | 125.72 | 126.39 | 111 | 13954.92 | +74.37 | +0.53% | 0.42R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.94 | ↓125.52 | 0.6157 | 1.59 | **WIN** |
| 522 | AMAT | 06-24 13:40 | 06-24 15:25 | 177.14 | 178.29 | 73 | 12931.22 | +83.95 | +0.65% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑176.74 | 1.0258 | 1.39 | **WIN** |
| 523 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 65 | 13893.1 | -91 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 524 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 19 | 13525.91 | -146.68 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 525 | QCOM | 06-24 13:45 | 06-24 14:05 | 155.8 | 155 | 89 | 13866.2 | -71.2 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 526 | UBER | 06-24 14:20 | 06-24 16:05 | 90.55 | 91.28 | 154 | 13944.7 | +112.42 | +0.81% | 0.44R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.99 | ↑89.24 | 1.5565 | 1.94 | **WIN** |
| 527 | COIN | 06-24 14:35 | 06-24 15:40 | 335.6 | 334.35 | 41 | 13759.6 | -51.25 | -0.37% | 0.19R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 90.01 | ↑327.78 | 7.3187 | 1.13 | **LOSS** |
| 528 | ARM | 06-24 14:50 | 06-24 15:45 | 154.64 | 154.52 | 90 | 13917.6 | -10.8 | -0.08% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 63.25 | ↑153.56 | 1.6211 | 1.47 | **LOSS** |
| 529 | DELL | 06-24 15:20 | 06-24 15:40 | 121.61 | 121.02 | 115 | 13985.15 | -67.85 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 73.49 | ↑120.69 | 0.8721 | 1.35 | **LOSS** |
| 530 | COIN | 06-24 16:00 | 06-24 16:20 | 338.09 | 335.66 | 41 | 13861.69 | -99.63 | -0.72% | 0.52R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 51.17 | ↑330.92 | 4.2825 | 1.47 | **LOSS** |
| 531 | INTC | 06-24 16:15 | 06-24 17:20 | 22.53 | 22.45 | 621 | 13991.13 | -49.68 | -0.36% | 0.38R | 65m | market | early-reversal | trend | trend | neutral | 48.55 | ↑22.18 | 0.1503 | 1.16 | **LOSS** |
| 532 | ARM | 06-24 16:35 | 06-24 17:05 | 156.03 | 155.48 | 89 | 13886.67 | -48.95 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 58.55 | ↑154.35 | 0.4636 | 1.45 | **LOSS** |
| 533 | AMAT | 06-24 16:35 | 06-24 17:05 | 179.25 | 178.76 | 78 | 13981.5 | -38.22 | -0.27% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 66.17 | ↑177.73 | 0.3206 | 2.28 | **LOSS** |
| 534 | COIN | 06-24 16:50 | 06-24 18:35 | 339.45 | 346.04 | 41 | 13917.45 | +270.19 | +1.94% | 2.06R | 105m | market | timeout | trend | trend | thinChop | 70.47 | ↑331.51 | 1.2126 | 1.04 | **WIN** |
| 535 | ABNB | 06-24 17:35 | 06-24 17:55 | 132.66 | 132.25 | 105 | 13929.3 | -43.05 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.13 | ↑131.36 | 0.2275 | 1.86 | **LOSS** |
| 536 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 537 | LLY | 06-25 16:30 | 06-25 16:50 | 797.72 | 795.36 | 17 | 13561.24 | -40.12 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 66.11 | ↑787.37 | 3.6999 | 1.52 | **LOSS** |
| 538 | ELF | 06-25 17:45 | 06-25 18:35 | 125.1 | 124.98 | 111 | 13886.1 | -13.32 | -0.1% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 65.41 | ↑122.45 | 0.7257 | 1.33 | **LOSS** |
| 539 | PLTR | 06-26 13:30 | 06-26 14:05 | 145.33 | 144.8 | 96 | 13951.68 | -50.88 | -0.36% | 0.42R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 84.83 | ↓145.5 | 0.3745 | 5.23 | **LOSS** |
| 540 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 541 | JPM | 06-26 13:35 | 06-26 15:25 | 287.46 | 288.37 | 48 | 13798.08 | +43.68 | +0.32% | 0.46R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 89.74 | ↑286.59 | 0.5538 | 1.77 | **WIN** |
| 542 | GE | 06-26 13:45 | 06-26 15:30 | 253.76 | 254.02 | 55 | 13956.8 | +14.3 | +0.1% | 0.14R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.54 | ↓252.51 | 0.7105 | 1.44 | **WIN** |
| 543 | RIVN | 06-26 13:45 | 06-26 15:30 | 13.93 | 13.96 | 1013 | 14111.09 | +30.39 | +0.22% | 0.18R | 105m | market | timeout | trend | breakout | neutral | 58.49 | ↓13.87 | 0.0226 | 2.31 | **WIN** |
| 544 | PANW | 06-26 14:10 | 06-26 14:40 | 206.44 | 205.54 | 67 | 13831.48 | -60.3 | -0.44% | 0.59R | 30m | market | early-reversal | trend | trend | neutral | 69.17 | ↓205.5 | 0.5917 | 1.33 | **LOSS** |
| 545 | DELL | 06-26 14:40 | 06-26 15:05 | 126.76 | 126.31 | 110 | 13943.6 | -49.5 | -0.36% | 0.33R | 25m | market | early-reversal | trend | trend | cleanTrend | 68.67 | ↑125.39 | 1.5224 | 3.95 | **LOSS** |
| 546 | COIN | 06-26 16:20 | 06-26 18:05 | 370.72 | 379.27 | 37 | 13716.64 | +316.35 | +2.31% | 2.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 55.55 | ↑367.22 | -0.0756 | 2.81 | **WIN** |
| 547 | CAT | 06-26 16:20 | 06-26 17:45 | 381.17 | 381.04 | 36 | 13722.12 | -4.68 | -0.03% | 0.04R | 85m | market | stagnation | trend | trend | neutral | 76.99 | ↑378.66 | 0.9477 | 2.68 | **LOSS** |
| 548 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 605 | 13981.55 | -30.25 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 549 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 550 | TSM | 06-27 14:05 | 06-27 15:50 | 226.74 | 228.22 | 61 | 13831.14 | +90.28 | +0.65% | 0.93R | 105m | market | timeout | trend | trend | neutral | 79.84 | ↑225.67 | 0.5609 | 1.03 | **WIN** |
| 551 | ADP | 06-27 14:15 | 06-27 14:55 | 305.99 | 304.91 | 45 | 13769.55 | -48.6 | -0.35% | 0.5R | 40m | market | early-reversal | trend | trend | neutral | 75.07 | ↑304.09 | 0.7715 | 1.37 | **LOSS** |
| 552 | COST | 06-27 14:50 | 06-27 15:45 | 988.8 | 988.32 | 14 | 13843.2 | -6.72 | -0.05% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 65.72 | ↑984.9 | 1.9502 | 1.59 | **LOSS** |
| 553 | GE | 06-27 15:05 | 06-27 16:30 | 257.65 | 259.41 | 27 | 13913.1 | +47.52 | +0.68% | 0.97R | 85m | market | trim-profit-target | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 554 | GE | 06-27 15:05 | 06-27 16:50 | 257.65 | 258.83 | 27 | 13913.1 | +31.86 | +0.46% | 0.66R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 555 | NKE | 06-27 15:45 | 06-27 16:30 | 73.21 | 73.19 | 191 | 13983.11 | -3.82 | -0.03% | 0.03R | 45m | market | breakeven-stop | trend | trend | neutral | 76.06 | ↑71.92 | 1.3669 | 1.23 | **LOSS** |
| 556 | TGT | 06-27 16:05 | 06-27 16:55 | 99.74 | 99.57 | 140 | 13963.6 | -23.8 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 73.29 | ↑98.99 | 0.2903 | 2.76 | **LOSS** |
| 557 | CELH | 06-27 16:05 | 06-27 16:40 | 45.88 | 45.75 | 300 | 13764 | -39 | -0.28% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | 62.55 | ↑45.45 | 0.0746 | 1.96 | **LOSS** |
| 558 | HD | 06-27 16:10 | 06-27 17:00 | 369.31 | 368.48 | 37 | 13664.47 | -30.71 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 75.19 | ↑366.27 | 0.9883 | 2.68 | **LOSS** |
| 559 | LOW | 06-27 16:20 | 06-27 17:05 | 224.86 | 224.22 | 62 | 13941.32 | -39.68 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 69.77 | ↑223.24 | 0.6804 | 2.22 | **LOSS** |
| 560 | JPM | 06-30 13:30 | 06-30 15:10 | 290.6 | 290.47 | 48 | 13948.8 | -6.24 | -0.04% | 0.06R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.05 | ↓291.04 | 0.1761 | 1.84 | **LOSS** |
| 561 | SMCI | 06-30 13:35 | 06-30 14:20 | 48.94 | 50.1 | 285 | 13947.9 | +330.6 | +2.37% | 1.49R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.88 | ↑48.67 | 0.1708 | 1.8 | **WIN** |
| 562 | SBUX | 06-30 13:35 | 06-30 13:50 | 94.11 | 93.25 | 148 | 13928.28 | -127.28 | -0.91% | 1.28R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 91.25 | ↓93.5 | 0.2684 | 1.26 | **LOSS** |
| 563 | HPE | 06-30 14:00 | 06-30 15:45 | 20.75 | 20.89 | 672 | 13944 | +94.08 | +0.67% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.86 | ↑20.6 | 0.6063 | 1.37 | **WIN** |
| 564 | TGT | 07-01 13:35 | 07-01 14:40 | 100.2 | 102.92 | 139 | 13927.8 | +378.08 | +2.71% | 3.87R | 65m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.07 | ↑99.62 | 0.2691 | 3.39 | **WIN** |
| 565 | UNH | 07-01 13:50 | 07-01 15:35 | 317.13 | 324.05 | 44 | 13953.72 | +304.48 | +2.18% | 2.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 566 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.21 | 95.18 | 149 | 13888.29 | +293.53 | +2.11% | 2.81R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 567 | HD | 07-01 14:20 | 07-01 16:05 | 370.12 | 378.88 | 37 | 13694.44 | +324.12 | +2.37% | 3.39R | 105m | market | timeout | trend | trend | neutral | 68.85 | ↑367.25 | 0.617 | 1.07 | **WIN** |
| 568 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 617 | 13993.56 | +277.65 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 569 | ELF | 07-01 14:55 | 07-01 16:20 | 128.31 | 128.29 | 109 | 13985.79 | -2.18 | -0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 71.03 | ↑127.52 | 0.7983 | 2.72 | **LOSS** |
| 570 | LMT | 07-01 15:10 | 07-01 16:20 | 467.63 | 467.27 | 29 | 13561.27 | -10.44 | -0.08% | 0.11R | 70m | market | stagnation | trend | trend | neutral | 73.98 | ↑463.76 | 0.9874 | 1.1 | **LOSS** |
| 571 | PYPL | 07-01 15:30 | 07-01 15:50 | 75.22 | 75.01 | 185 | 13915.7 | -38.85 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 73.25 | ↑74.55 | 0.2107 | 1.37 | **LOSS** |
| 572 | NVO | 07-01 15:55 | 07-01 16:25 | 70.27 | 70.06 | 199 | 13983.73 | -41.79 | -0.3% | 0.43R | 30m | market | early-reversal | trend | trend | thinChop | 73.06 | ↑69.16 | 0.4151 | 1.08 | **LOSS** |
| 573 | TGT | 07-01 15:55 | 07-01 16:40 | 104.9 | 104.55 | 134 | 14056.6 | -46.9 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 79.63 | ↑102.68 | 1.3228 | 1.32 | **LOSS** |
| 574 | TXN | 07-01 16:05 | 07-01 16:55 | 210.19 | 209.26 | 66 | 13872.54 | -61.38 | -0.44% | 0.63R | 50m | market | early-reversal | trend | trend | neutral | 79.71 | ↑207.49 | 0.5542 | 1.76 | **LOSS** |
| 575 | SMCI | 07-01 16:20 | 07-01 16:40 | 48.47 | 48.12 | 289 | 14007.83 | -101.15 | -0.72% | 0.56R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 89.72 | ↑47.5 | 0.1262 | 1.32 | **LOSS** |
| 576 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 181 | 13982.25 | +240.73 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 577 | AAPL | 07-02 13:35 | 07-02 15:20 | 211.12 | 212.04 | 66 | 13933.92 | +60.72 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.68 | ↑209.91 | 0.3049 | 2.56 | **WIN** |
| 578 | NKE | 07-02 13:35 | 07-02 14:40 | 74.45 | 73.65 | 188 | 13996.6 | -150.4 | -1.07% | 1.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.55 | ↓74.03 | 0.2479 | 1.6 | **LOSS** |
| 579 | COIN | 07-02 13:45 | 07-02 14:05 | 343.25 | 341 | 41 | 14073.25 | -92.25 | -0.66% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↓342.46 | 0.8493 | 1.99 | **LOSS** |
| 580 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 121 | 14026.32 | -37.51 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 581 | MU | 07-02 14:45 | 07-02 15:45 | 122.14 | 122.08 | 114 | 13923.96 | -6.84 | -0.05% | 0.04R | 60m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 582 | DELL | 07-02 14:45 | 07-02 15:35 | 123.62 | 123.51 | 113 | 13969.06 | -12.43 | -0.09% | 0.12R | 50m | market | stagnation | breakout | breakout | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 583 | COIN | 07-02 14:50 | 07-02 16:35 | 346.33 | 351.65 | 40 | 13853.2 | +212.8 | +1.54% | 1.02R | 105m | market | timeout | trend | trend | noisyHighBeta | 62.7 | ↑342.5 | 2.1416 | 1.1 | **WIN** |
| 584 | COIN | 07-02 16:40 | 07-02 17:15 | 352.75 | 351.44 | 40 | 14110 | -52.4 | -0.37% | 0.48R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 77.32 | ↑345.11 | 2.1426 | 1.13 | **LOSS** |
| 585 | COIN | 07-02 17:20 | 07-02 17:35 | 353.7 | 350.33 | 39 | 13794.3 | -131.43 | -0.95% | 1.2R | 15m | market | stop-loss | trend | trend | thinChop | 66.75 | ↑345.8 | 1.7317 | 1.07 | **LOSS** |
| 586 | ELF | 07-03 13:30 | 07-03 13:50 | 131.64 | 130.7 | 98 | 12900.72 | -92.12 | -0.71% | 0.91R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.39 | ↓131.51 | 0.1655 | 1.85 | **LOSS** |
| 587 | MU | 07-03 13:35 | 07-03 14:40 | 123.14 | 123.05 | 114 | 14037.96 | -10.26 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 71.69 | ↓122.92 | 0.0328 | 1.24 | **LOSS** |
| 588 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.15 | 222.08 | 63 | 13869.45 | +121.59 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 589 | ORCL | 07-03 13:40 | 07-03 14:25 | 234.01 | 232.2 | 60 | 14040.6 | -108.6 | -0.77% | 0.57R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.78 | ↓233.12 | 1.936 | 1.41 | **LOSS** |
| 590 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 627 | 14025.99 | -31.35 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 591 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 65 | 13953.55 | +84.5 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 592 | RIVN | 07-03 13:45 | 07-03 14:20 | 13.27 | 13.17 | 1064 | 14119.28 | -106.4 | -0.75% | 0.56R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.03 | ↓13.12 | 0.0389 | 1.15 | **LOSS** |
| 593 | DDOG | 07-03 13:50 | 07-03 15:20 | 149.1 | 154.06 | 93 | 13866.3 | +461.28 | +3.33% | 1.67R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.86 | ↑148.07 | 3.5654 | 2.04 | **WIN** |
| 594 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 595 | CRWD | 07-03 14:00 | 07-03 14:55 | 513.6 | 512.11 | 27 | 13867.2 | -40.23 | -0.29% | 0.32R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 97.66 | ↓507.58 | 5.0394 | 2.52 | **LOSS** |
| 596 | MDB | 07-03 14:10 | 07-03 14:35 | 212.49 | 211.34 | 65 | 13811.85 | -74.75 | -0.54% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 79.14 | ↓211.58 | 1.9351 | 1.05 | **LOSS** |
| 597 | NFLX | 07-03 14:15 | 07-03 14:35 | 1298.86 | 1293.98 | 10 | 12988.6 | -48.8 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↑1289.95 | 3.4993 | 1.68 | **LOSS** |
| 598 | ORCL | 07-03 15:30 | 07-03 16:50 | 236.32 | 236.21 | 59 | 13942.88 | -6.49 | -0.05% | 0.06R | 80m | market | stagnation | trend | trend | neutral | 72.01 | ↑233.21 | 1.5604 | 1.29 | **LOSS** |
| 599 | INTC | 07-03 15:30 | 07-03 15:50 | 22.56 | 22.41 | 621 | 14009.76 | -93.15 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 66.29 | ↑22.37 | 0.0956 | 1.24 | **LOSS** |
| 600 | DDOG | 07-03 15:35 | 07-03 15:55 | 155.5 | 153.92 | 90 | 13995 | -142.2 | -1.02% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 75.11 | ↑151.32 | 3.9925 | 1.62 | **LOSS** |
| 601 | UBER | 07-07 13:40 | 07-07 15:25 | 95.11 | 96.88 | 147 | 13981.17 | +260.19 | +1.86% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.15 | ↑94.96 | 0.3361 | 3.29 | **WIN** |
| 602 | COIN | 07-07 13:45 | 07-07 14:05 | 360.81 | 358.22 | 36 | 12989.16 | -93.24 | -0.72% | 0.61R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↑354.92 | 0.4228 | 2.85 | **LOSS** |
| 603 | DELL | 07-07 14:00 | 07-07 14:25 | 126.89 | 126.25 | 110 | 13957.9 | -70.4 | -0.5% | 0.71R | 25m | market | early-reversal | trend | trend | neutral | 71 | ↑125.88 | 0.2141 | 1.42 | **LOSS** |
| 604 | META | 07-07 14:20 | 07-07 14:50 | 726.87 | 724.48 | 19 | 13810.53 | -45.41 | -0.33% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 605 | PLTR | 07-07 15:40 | 07-07 17:25 | 137.16 | 138.19 | 102 | 13990.32 | +105.06 | +0.75% | 0.72R | 105m | market | timeout | trend | trend | noisyHighBeta | 72.14 | ↑134.9 | 0.6198 | 2.31 | **WIN** |
| 606 | ORCL | 07-08 13:35 | 07-08 13:55 | 240.1 | 237.77 | 54 | 12965.4 | -125.82 | -0.97% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.32 | ↓238.93 | 0.6439 | 4.21 | **LOSS** |
| 607 | AMD | 07-08 13:40 | 07-08 15:25 | 136.53 | 137.45 | 102 | 13926.06 | +93.84 | +0.67% | 0.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.27 | ↓136.57 | 0.3518 | 1.3 | **WIN** |
| 608 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 613 | 13994.79 | +343.28 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 609 | LLY | 07-08 13:45 | 07-08 15:30 | 784.33 | 787.74 | 17 | 13333.61 | +57.97 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↑779.99 | 2.7967 | 1.18 | **WIN** |
| 610 | CRM | 07-08 14:00 | 07-08 14:55 | 271.74 | 275.16 | 25 | 13858.74 | +85.5 | +1.26% | 1.8R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 611 | CRM | 07-08 14:00 | 07-08 15:45 | 271.74 | 274.73 | 26 | 13858.74 | +77.74 | +1.1% | 1.57R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 612 | NVO | 07-08 14:20 | 07-08 16:05 | 69.88 | 70.19 | 200 | 13976 | +62 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 78.57 | ↑69.52 | 0.1782 | 1.26 | **WIN** |
| 613 | RIVN | 07-08 14:30 | 07-08 16:15 | 13.06 | 13.16 | 1080 | 14104.8 | +108 | +0.77% | 0.62R | 105m | market | timeout | trend | trend | neutral | 78.79 | ↑12.93 | 0.0926 | 1.14 | **WIN** |
| 614 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 192 | 14046.72 | -53.76 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 615 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.01 | 95.11 | 147 | 13966.47 | +14.7 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 616 | LRCX | 07-08 15:05 | 07-08 15:25 | 99.86 | 99.26 | 139 | 13880.54 | -83.4 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 64.24 | ↓99.26 | 0.4218 | 2.7 | **LOSS** |
| 617 | LOW | 07-08 15:05 | 07-08 15:25 | 226.65 | 225.1 | 61 | 13825.65 | -94.55 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 77.33 | ↓225.28 | 0.5327 | 2.06 | **LOSS** |
| 618 | HD | 07-08 15:10 | 07-08 16:00 | 369.73 | 369.32 | 37 | 13680.01 | -15.17 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 619 | INTC | 07-08 17:25 | 07-08 18:55 | 23.64 | 23.58 | 594 | 14042.16 | -35.64 | -0.25% | 0.29R | 90m | market | stagnation | trend | trend | neutral | 79.1 | ↑23.15 | 0.0633 | 2 | **LOSS** |
| 620 | PANW | 07-08 17:35 | 07-08 18:50 | 203.63 | 203.39 | 68 | 13846.84 | -16.32 | -0.12% | 0.17R | 75m | market | stagnation | trend | trend | neutral | 76.01 | ↑202.22 | 0.3858 | 1.29 | **LOSS** |
| 621 | RIVN | 07-08 17:45 | 07-08 18:20 | 13.29 | 13.25 | 1062 | 14113.98 | -42.48 | -0.3% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 73.33 | ↑13.11 | 0.0158 | 1.55 | **LOSS** |
| 622 | MSFT | 07-09 13:30 | 07-09 14:45 | 502.19 | 502.49 | 27 | 13559.13 | +8.1 | +0.06% | 0.09R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 91.2 | ↓501.53 | 0.5456 | 7.73 | **WIN** |
| 623 | LLY | 07-09 13:30 | 07-09 13:50 | 792.72 | 788.24 | 16 | 12683.52 | -71.68 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 624 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 625 | AVGO | 07-09 13:35 | 07-09 14:25 | 277.02 | 276.37 | 50 | 13851 | -32.5 | -0.23% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.66 | ↓275.15 | -0.0736 | 1.57 | **LOSS** |
| 626 | TSM | 07-09 13:40 | 07-09 14:10 | 232.36 | 231.61 | 60 | 13941.6 | -45 | -0.32% | 0.46R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 627 | CAT | 07-09 13:40 | 07-09 14:00 | 402.5 | 401.11 | 34 | 13685 | -47.26 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.17 | ↓400.82 | 1.1439 | 1.54 | **LOSS** |
| 628 | GE | 07-09 13:40 | 07-09 14:00 | 250.5 | 247.69 | 56 | 14028 | -157.36 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 80.26 | ↓250.15 | 0.4523 | 1.34 | **LOSS** |
| 629 | NET | 07-09 15:40 | 07-09 16:05 | 195.22 | 194.6 | 72 | 14055.84 | -44.64 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 78.16 | ↑193.99 | 0.3661 | 1.46 | **LOSS** |
| 630 | CELH | 07-09 16:10 | 07-09 17:00 | 46.08 | 46.07 | 299 | 13777.92 | -2.99 | -0.02% | 0.03R | 50m | market | breakeven-stop | breakout | breakout | neutral | 86.83 | ↑45.56 | 0.0537 | 2.56 | **LOSS** |
| 631 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 42 | 12918.36 | -184.38 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 632 | AMAT | 07-10 13:40 | 07-10 14:00 | 197.69 | 196.97 | 70 | 13838.3 | -50.4 | -0.36% | 0.51R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 633 | NKE | 07-10 14:15 | 07-10 16:00 | 74.85 | 75.2 | 187 | 13996.95 | +65.45 | +0.47% | 0.55R | 105m | market | timeout | trend | trend | neutral | 79.4 | ↑74 | 0.2429 | 1.34 | **WIN** |
| 634 | RIVN | 07-10 14:50 | 07-10 15:15 | 13.42 | 13.36 | 1051 | 14104.42 | -63.06 | -0.45% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 58.72 | ↑13.31 | 0.0564 | 1.04 | **LOSS** |
| 635 | HPE | 07-10 15:40 | 07-10 17:25 | 21.46 | 21.54 | 651 | 13970.46 | +52.08 | +0.37% | 0.52R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.89 | ↑21.02 | 0.1184 | 3.71 | **WIN** |
| 636 | ARM | 07-11 13:50 | 07-11 15:35 | 148.9 | 150.12 | 93 | 13847.7 | +113.46 | +0.82% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.33 | ↑146.74 | 0.1052 | 1.11 | **WIN** |
| 637 | GE | 07-11 14:05 | 07-11 15:00 | 255.53 | 255.22 | 54 | 13798.62 | -16.74 | -0.12% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 638 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.29 | 180.31 | 78 | 13984.62 | +79.56 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 639 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 640 | PYPL | 07-14 13:30 | 07-14 15:15 | 73.34 | 73.78 | 175 | 12834.5 | +77 | +0.6% | 0.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.46 | ↑72.77 | -0.6572 | 1.79 | **WIN** |
| 641 | BA | 07-14 13:35 | 07-14 13:55 | 230.81 | 228.84 | 60 | 13848.6 | -118.2 | -0.85% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 642 | CRM | 07-14 13:40 | 07-14 14:05 | 260.74 | 259.92 | 52 | 13558.48 | -42.64 | -0.31% | 0.44R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.48 | ↓259.88 | 0.0062 | 1.19 | **LOSS** |
| 643 | ABNB | 07-14 13:45 | 07-14 14:05 | 137.43 | 136.69 | 101 | 13880.43 | -74.74 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.53 | ↓136.57 | 0.0934 | 1.41 | **LOSS** |
| 644 | LMT | 07-14 14:30 | 07-14 14:50 | 474.59 | 471.37 | 29 | 13763.11 | -93.38 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 79.84 | ↓471.63 | 1.7867 | 1.06 | **LOSS** |
| 645 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 646 | SMCI | 07-14 17:35 | 07-14 17:55 | 50.64 | 50.21 | 276 | 13976.64 | -118.68 | -0.85% | 1.02R | 20m | market | early-reversal | trend | trend | neutral | 79.37 | ↑49.66 | 0.3118 | 1.32 | **LOSS** |
| 647 | MDB | 07-15 13:45 | 07-15 14:30 | 207.33 | 206.33 | 67 | 13891.11 | -67 | -0.48% | 0.55R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.38 | ↓204.74 | 0.3351 | 1.11 | **LOSS** |
| 648 | NET | 07-15 13:50 | 07-15 14:15 | 184.46 | 183.52 | 76 | 14018.96 | -71.44 | -0.51% | 0.5R | 25m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 649 | KLAC | 07-15 14:10 | 07-15 15:00 | 937.86 | 936.55 | 14 | 13130.04 | -18.34 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 73.03 | ↓934.41 | 3.0322 | 2.16 | **LOSS** |
| 650 | ELF | 07-15 14:10 | 07-15 14:35 | 108.42 | 107.35 | 129 | 13986.18 | -138.03 | -0.99% | 0.91R | 25m | market | early-reversal | breakout | trend | neutral | 62.1 | ↓107.68 | 0.0045 | 1.05 | **LOSS** |
| 651 | DDOG | 07-15 15:25 | 07-15 15:50 | 141.61 | 141.08 | 99 | 14019.39 | -52.47 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 58.22 | ↑140.3 | 0.4975 | 3.66 | **LOSS** |
| 652 | AAPL | 07-15 15:35 | 07-15 15:55 | 211.83 | 210.72 | 65 | 13768.95 | -72.15 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 71.52 | ↑210.12 | 0.4876 | 1.46 | **LOSS** |
| 653 | NET | 07-15 15:40 | 07-15 16:00 | 185.75 | 185.21 | 75 | 13931.25 | -40.5 | -0.29% | 0.4R | 20m | market | early-reversal | trend | trend | thinChop | 63.47 | ↑183.7 | 0.5731 | 1.5 | **LOSS** |
| 654 | RIVN | 07-15 15:40 | 07-15 16:00 | 12.97 | 12.89 | 1087 | 14098.39 | -86.96 | -0.62% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 86.49 | ↑12.8 | 0.0351 | 3.24 | **LOSS** |
| 655 | TSLA | 07-16 13:30 | 07-16 15:15 | 314.7 | 319.47 | 40 | 12588 | +190.8 | +1.52% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 56.59 | ↑314.34 | -0.832 | 2.95 | **WIN** |
| 656 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 657 | SHOP | 07-16 16:30 | 07-16 18:15 | 118.43 | 119.35 | 118 | 13974.74 | +108.56 | +0.78% | 0.53R | 105m | market | timeout | trend | trend | neutral | 64.3 | ↑116.4 | 0.6897 | 2.13 | **WIN** |
| 658 | HPE | 07-17 13:40 | 07-17 14:00 | 21.13 | 20.9 | 609 | 12868.17 | -140.07 | -1.09% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓21.02 | 0.1245 | 1.98 | **LOSS** |
| 659 | TGT | 07-17 13:40 | 07-17 14:30 | 102.55 | 102.46 | 137 | 14049.35 | -12.33 | -0.09% | 0.13R | 50m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 70.93 | ↓102.29 | 0.2008 | 1.58 | **LOSS** |
| 660 | COIN | 07-17 14:00 | 07-17 15:10 | 408.08 | 405.33 | 34 | 13874.72 | -93.5 | -0.67% | 0.54R | 70m | market | trailing-stop | breakout | breakout | neutral | 62.08 | ↓401.34 | -0.0601 | 1.53 | **LOSS** |
| 661 | PLTR | 07-17 14:05 | 07-17 15:50 | 152.53 | 153.6 | 92 | 14032.76 | +98.44 | +0.7% | 0.69R | 105m | market | timeout | trend | trend | neutral | 64.71 | ↑151.79 | 0.4528 | 1.53 | **WIN** |
| 662 | DDOG | 07-17 14:35 | 07-17 15:55 | 141.82 | 143.43 | 49 | 13898.36 | +78.89 | +1.14% | 1.52R | 80m | market | trim-profit-target | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 663 | DDOG | 07-17 14:35 | 07-17 16:20 | 141.82 | 143.91 | 49 | 13898.36 | +102.41 | +1.47% | 1.96R | 105m | market | timeout | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 664 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 114 | 14028.84 | +221.16 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 665 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.2 | 72.83 | 97 | 14006.8 | +61.11 | +0.87% | 1.04R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 666 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.2 | 72.84 | 97 | 14006.8 | +62.08 | +0.89% | 1.06R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 667 | BAC | 07-17 15:35 | 07-17 17:20 | 46.54 | 46.76 | 300 | 13962 | +66 | +0.47% | 0.67R | 105m | market | timeout | trend | trend | neutral | 74.73 | ↑46.15 | 0.0989 | 1.53 | **WIN** |
| 668 | INTC | 07-17 15:40 | 07-17 16:10 | 22.98 | 22.91 | 611 | 14040.78 | -42.77 | -0.3% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 75.58 | ↑22.76 | 0.0612 | 1.82 | **LOSS** |
| 669 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 598 | 14029.08 | -179.4 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 670 | DELL | 07-18 13:35 | 07-18 15:20 | 127.27 | 129.07 | 109 | 13872.43 | +196.2 | +1.41% | 1.78R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.92 | ↑126.77 | 0.4922 | 5.09 | **WIN** |
| 671 | ARM | 07-18 13:40 | 07-18 14:00 | 160.71 | 159.3 | 87 | 13981.77 | -122.67 | -0.88% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.21 | ↓159.81 | 0.5552 | 2.73 | **LOSS** |
| 672 | TSLA | 07-18 13:45 | 07-18 14:35 | 326.13 | 325.92 | 43 | 14023.59 | -9.03 | -0.06% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.78 | ↓324.69 | 1.3279 | 2.69 | **LOSS** |
| 673 | CVX | 07-18 14:10 | 07-18 14:25 | 153.12 | 151.56 | 91 | 13933.92 | -141.96 | -1.02% | 1.46R | 15m | market | stop-loss | trend | trend | neutral | 75.08 | ↓152.03 | 0.4351 | 2.35 | **LOSS** |
| 674 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.54 | 215.72 | 64 | 13858.56 | -52.48 | -0.38% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 675 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 96 | 14029.44 | +101.76 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 676 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 14029.44 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 677 | QCOM | 07-18 15:05 | 07-18 15:35 | 155.23 | 154.68 | 90 | 13970.7 | -49.5 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 76.24 | ↑153.84 | 0.5348 | 1.02 | **LOSS** |
| 678 | DDOG | 07-18 15:55 | 07-18 16:15 | 145.7 | 144.91 | 96 | 13987.2 | -75.84 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 61.21 | ↑144.46 | 0.5887 | 2.17 | **LOSS** |
| 679 | MRVL | 07-18 17:30 | 07-18 17:50 | 74.61 | 74.39 | 188 | 14026.68 | -41.36 | -0.29% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 53.64 | ↑73.47 | 0.2617 | 2.12 | **LOSS** |
| 680 | CVX | 07-21 13:30 | 07-21 13:50 | 151.52 | 150.18 | 92 | 13939.84 | -123.28 | -0.88% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.42 | ↓151.14 | 0.0925 | 3.38 | **LOSS** |
| 681 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.39 | 101.58 | 136 | 13925.04 | -110.16 | -0.79% | 1.13R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 682 | NKE | 07-21 13:35 | 07-21 15:20 | 73.95 | 74.52 | 189 | 13976.55 | +107.73 | +0.77% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.84 | ↑73.47 | 0.1352 | 2.5 | **WIN** |
| 683 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 19 | 13571.7 | -9.69 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 684 | UBER | 07-21 13:40 | 07-21 14:15 | 91.66 | 91.25 | 153 | 14023.98 | -62.73 | -0.45% | 0.58R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.23 | ↓91.37 | 0.2434 | 1.8 | **LOSS** |
| 685 | CRWD | 07-21 13:45 | 07-21 14:35 | 484.2 | 483.15 | 28 | 13557.6 | -29.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 686 | NET | 07-21 13:45 | 07-21 14:20 | 199.25 | 197.69 | 70 | 13947.5 | -109.2 | -0.78% | 0.73R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.31 | ↓197.5 | 0.5778 | 1.49 | **LOSS** |
| 687 | CRM | 07-21 14:00 | 07-21 14:20 | 264.24 | 262.6 | 53 | 14004.72 | -86.92 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 688 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 689 | AMD | 07-21 14:30 | 07-21 15:05 | 159.73 | 159.04 | 87 | 13896.51 | -60.03 | -0.43% | 0.34R | 35m | market | early-reversal | trend | trend | neutral | 69.08 | ↑158.57 | 0.4791 | 2.52 | **LOSS** |
| 690 | PANW | 07-21 17:45 | 07-21 18:10 | 203.1 | 196.63 | 68 | 13810.8 | -439.96 | -3.19% | 4.56R | 25m | market | stop-loss | trend | trend | neutral | 75.56 | ↓200.38 | 0.5238 | 2.43 | **LOSS** |
| 691 | LLY | 07-22 13:35 | 07-22 15:20 | 771.67 | 774.27 | 18 | 13890.06 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.01 | ↑768.57 | 0.2771 | 2.44 | **WIN** |
| 692 | ADBE | 07-22 13:45 | 07-22 14:05 | 373.38 | 371.3 | 37 | 13815.06 | -76.96 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.44 | ↓372.51 | 1.2979 | 1.65 | **LOSS** |
| 693 | SBUX | 07-22 13:45 | 07-22 14:50 | 95.12 | 95.01 | 147 | 13982.64 | -16.17 | -0.12% | 0.13R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.38 | ↑94.11 | 0.2112 | 1.33 | **LOSS** |
| 694 | NKE | 07-22 13:45 | 07-22 14:05 | 75.38 | 74.8 | 186 | 14020.68 | -107.88 | -0.77% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.93 | ↓75.13 | 0.0967 | 1.47 | **LOSS** |
| 695 | TGT | 07-22 13:45 | 07-22 14:35 | 104.89 | 104.77 | 134 | 14055.26 | -16.08 | -0.11% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.02 | ↑104.31 | 0.3853 | 1.66 | **LOSS** |
| 696 | TSLA | 07-22 15:45 | 07-22 16:05 | 332.2 | 331.17 | 42 | 13952.4 | -43.26 | -0.31% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 62.38 | ↑327.84 | 0.8549 | 1.26 | **LOSS** |
| 697 | IBM | 07-23 13:35 | 07-23 14:40 | 285.48 | 285.3 | 49 | 13988.52 | -8.82 | -0.06% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.28 | ↑284.91 | 0.3782 | 1.13 | **LOSS** |
| 698 | CAT | 07-23 13:40 | 07-23 14:00 | 425.55 | 423.12 | 32 | 13617.6 | -77.76 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 699 | CELH | 07-23 13:40 | 07-23 14:00 | 45.27 | 44.87 | 304 | 13762.08 | -121.6 | -0.88% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.21 | ↓45.33 | 0.3128 | 1.61 | **LOSS** |
| 700 | DIS | 07-23 14:00 | 07-23 14:20 | 122.44 | 122.1 | 114 | 13958.16 | -38.76 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 76.44 | ↑122.06 | 0.2652 | 1.15 | **LOSS** |
| 701 | XOM | 07-23 14:10 | 07-23 14:45 | 109.5 | 109.17 | 127 | 13906.5 | -41.91 | -0.3% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 74.59 | ↓109.22 | 0.217 | 1.48 | **LOSS** |
| 702 | HPE | 07-23 14:15 | 07-23 15:30 | 20.99 | 20.99 | 665 | 13958.35 | +0 | +0% | 0R | 75m | market | breakeven-stop | trend | trend | neutral | 75.86 | ↑20.86 | 0.1216 | 1.28 | **WIN** |
| 703 | LLY | 07-23 14:25 | 07-23 16:10 | 786.32 | 795.24 | 17 | 13367.44 | +151.64 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 704 | HD | 07-23 17:35 | 07-23 18:15 | 377.81 | 376.6 | 37 | 13978.97 | -44.77 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 78.19 | ↑374.28 | 0.7867 | 4.2 | **LOSS** |
| 705 | NVO | 07-24 13:30 | 07-24 14:15 | 70.87 | 70.61 | 197 | 13961.39 | -51.22 | -0.37% | 0.53R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 706 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 60 | 13870.8 | +5.4 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 707 | AVGO | 07-24 13:35 | 07-24 13:55 | 289.23 | 285.26 | 48 | 13883.04 | -190.56 | -1.37% | 1.22R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 708 | UBER | 07-24 13:35 | 07-24 15:20 | 92.35 | 92.12 | 152 | 14037.2 | -34.96 | -0.25% | 0.27R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 709 | PYPL | 07-24 13:35 | 07-24 15:15 | 78.09 | 78.13 | 178 | 13900.02 | +7.12 | +0.05% | 0.07R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.31 | ↓77.86 | 0.1157 | 2.06 | **WIN** |
| 710 | GE | 07-24 13:40 | 07-24 15:25 | 266.3 | 269.34 | 52 | 13847.6 | +158.08 | +1.14% | 1.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.08 | ↑265.31 | 0.6152 | 1.53 | **WIN** |
| 711 | ADBE | 07-24 14:00 | 07-24 14:15 | 375.99 | 372.62 | 37 | 13911.63 | -124.69 | -0.9% | 1.29R | 15m | market | stop-loss | trend | trend | neutral | 75.05 | ↓372.88 | 0.5707 | 1.17 | **LOSS** |
| 712 | CVX | 07-24 14:25 | 07-24 16:10 | 154.06 | 154.58 | 90 | 13865.4 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 70.82 | ↑153.15 | 0.2875 | 1.06 | **WIN** |
| 713 | SMCI | 07-24 14:55 | 07-24 15:45 | 52.33 | 52.14 | 267 | 13972.11 | -50.73 | -0.36% | 0.32R | 50m | market | stagnation | trend | trend | neutral | 66.67 | ↑51.74 | 0.0607 | 1.02 | **LOSS** |
| 714 | MU | 07-24 15:00 | 07-24 15:30 | 112.58 | 111.86 | 124 | 13959.92 | -89.28 | -0.64% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 715 | MDB | 07-25 13:30 | 07-25 14:30 | 237.56 | 243.57 | 58 | 13778.48 | +348.58 | +2.53% | 3.61R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.71 | ↑237.19 | 0.7381 | 1.73 | **WIN** |
| 716 | UNH | 07-25 13:30 | 07-25 13:50 | 284.04 | 282.48 | 46 | 13065.84 | -71.76 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 717 | NKE | 07-25 13:30 | 07-25 13:45 | 76.37 | 75.64 | 183 | 13975.71 | -133.59 | -0.96% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.46 | ↓76.33 | -0.0076 | 3.21 | **LOSS** |
| 718 | RIVN | 07-25 13:30 | 07-25 15:15 | 14.01 | 14.4 | 1005 | 14080.05 | +391.95 | +2.78% | 3.05R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 91.4 | ↑13.94 | 0.0865 | 2.15 | **WIN** |
| 719 | DDOG | 07-25 13:35 | 07-25 15:20 | 148.46 | 148.79 | 94 | 13955.24 | +31.02 | +0.22% | 0.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79 | ↑147.86 | 0.3474 | 1.18 | **WIN** |
| 720 | TSM | 07-25 14:00 | 07-25 14:50 | 244.35 | 244.19 | 57 | 13927.95 | -9.12 | -0.07% | 0.09R | 50m | market | breakeven-stop | trend | trend | neutral | 67.09 | ↑242.6 | 0.4724 | 1.57 | **LOSS** |
| 721 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 113 | 14075.28 | -14.69 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 722 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.06 | 321.32 | 22 | 13994.64 | +71.72 | +1.02% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 723 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.06 | 319.31 | 22 | 13994.64 | +27.5 | +0.39% | 0.48R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 724 | NVO | 07-25 16:00 | 07-25 16:50 | 71.47 | 71.29 | 196 | 14008.12 | -35.28 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 64.8 | ↑71.04 | 0.0861 | 6.75 | **LOSS** |
| 725 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 666 | 14019.3 | -39.96 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 726 | ABNB | 07-28 13:35 | 07-28 14:00 | 142.91 | 142.3 | 93 | 13290.63 | -56.73 | -0.43% | 0.61R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.83 | ↓142.66 | 0.1324 | 1.13 | **LOSS** |
| 727 | ASML | 07-28 13:40 | 07-28 14:10 | 733.88 | 730.99 | 17 | 12475.96 | -49.13 | -0.39% | 0.48R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.76 | ↓732.79 | 4.3311 | 2.08 | **LOSS** |
| 728 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 185 | 14074.8 | -90.65 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 729 | NOW | 07-28 14:00 | 07-28 14:20 | 995.08 | 985.42 | 14 | 13931.12 | -135.24 | -0.97% | 1.14R | 20m | market | early-reversal | trend | trend | neutral | 76.16 | ↓989.16 | 5.3555 | 1.28 | **LOSS** |
| 730 | ELF | 07-28 14:00 | 07-28 14:20 | 122 | 121.47 | 114 | 13908 | -60.42 | -0.43% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 731 | DELL | 07-28 14:40 | 07-28 15:00 | 132.95 | 131.65 | 105 | 13959.75 | -136.5 | -0.98% | 1.32R | 20m | market | stop-loss | trend | trend | neutral | 61.37 | ↓132.13 | 0.2872 | 1.42 | **LOSS** |
| 732 | IBM | 07-28 15:30 | 07-28 16:05 | 263.93 | 262.45 | 53 | 13988.29 | -78.44 | -0.56% | 0.8R | 35m | market | early-reversal | trend | trend | thinChop | 72.74 | ↑261.77 | 0.8646 | 1.02 | **LOSS** |
| 733 | CRM | 07-29 13:30 | 07-29 13:50 | 273.56 | 272.41 | 51 | 13951.56 | -58.65 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.05 | ↓272.97 | 0.3837 | 3.46 | **LOSS** |
| 734 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 181 | 13991.3 | +3.62 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 735 | ORCL | 07-29 13:35 | 07-29 14:25 | 251.87 | 250.4 | 56 | 14104.72 | -82.32 | -0.58% | 0.83R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 736 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 179 | 14001.38 | -68.02 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 737 | ADP | 07-30 13:35 | 07-30 15:20 | 311.51 | 315.13 | 44 | 13706.44 | +159.28 | +1.16% | 1.2R | 105m | market | timeout | breakout | breakout | neutral | 86.57 | ↑308.56 | 0.3705 | 1.4 | **WIN** |
| 738 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.42 | 158.35 | 89 | 14099.38 | -6.23 | -0.04% | 0.05R | 80m | market | stagnation | breakout | breakout | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 739 | META | 07-31 13:30 | 07-31 14:20 | 780.47 | 775.59 | 17 | 13267.99 | -82.96 | -0.63% | 0.32R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 740 | NET | 07-31 13:40 | 07-31 15:25 | 205.7 | 208.05 | 68 | 13987.6 | +159.8 | +1.14% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 741 | MA | 07-31 13:40 | 07-31 15:25 | 569.6 | 575.79 | 24 | 13670.4 | +148.56 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.42 | ↑566.65 | 0.7985 | 1.79 | **WIN** |
| 742 | SNOW | 07-31 13:45 | 07-31 15:30 | 224.39 | 226.7 | 62 | 13912.18 | +143.22 | +1.03% | 0.95R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.39 | ↑223.01 | 0.3172 | 1.1 | **WIN** |
| 743 | COST | 07-31 14:30 | 07-31 14:55 | 944.13 | 941.28 | 14 | 13217.82 | -39.9 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 78.59 | ↑936.64 | 2.7383 | 1.43 | **LOSS** |
| 744 | LLY | 08-01 13:50 | 08-01 14:10 | 763.93 | 758.66 | 16 | 12222.88 | -84.32 | -0.69% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.51 | ↓758.94 | 2.1923 | 1.24 | **LOSS** |
| 745 | LOW | 08-01 15:10 | 08-01 15:30 | 226.68 | 225.63 | 61 | 13827.48 | -64.05 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 64.34 | ↑224.85 | 0.329 | 3.24 | **LOSS** |
| 746 | LOW | 08-01 15:50 | 08-01 16:40 | 226.81 | 226.64 | 61 | 13835.41 | -10.37 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 69.05 | ↑225.19 | 0.583 | 2.14 | **LOSS** |
| 747 | PLTR | 08-01 16:00 | 08-01 16:50 | 157.15 | 156.96 | 89 | 13986.35 | -16.91 | -0.12% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 74.76 | ↑154.02 | 0.4798 | 1.29 | **LOSS** |
| 748 | BA | 08-01 16:05 | 08-01 16:25 | 222.22 | 221.43 | 63 | 13999.86 | -49.77 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 77.45 | ↑219.43 | 0.5907 | 1.9 | **LOSS** |
| 749 | COST | 08-01 16:30 | 08-01 17:00 | 954.75 | 951.09 | 14 | 13366.5 | -51.24 | -0.38% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 77.76 | ↑948.28 | 2.9841 | 2.59 | **LOSS** |
| 750 | LMT | 08-01 17:20 | 08-01 19:05 | 422.9 | 422.45 | 33 | 13955.7 | -14.85 | -0.11% | 0.16R | 105m | market | stagnation | trend | trend | neutral | 77.73 | ↑420 | 0.7624 | 2.81 | **LOSS** |
| 751 | AAPL | 08-04 13:30 | 08-04 15:15 | 205.54 | 205.81 | 67 | 13771.18 | +18.09 | +0.13% | 0.15R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.15 | ↓205.16 | 0.3696 | 2.6 | **WIN** |
| 752 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 753 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.74 | 533.46 | 26 | 13851.24 | +18.72 | +0.14% | 0.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 754 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 45 | 13950 | -47.7 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 755 | AVGO | 08-04 13:35 | 08-04 14:40 | 296.2 | 295.76 | 47 | 13921.4 | -20.68 | -0.15% | 0.15R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.25 | ↑293.84 | 1.0727 | 1.63 | **LOSS** |
| 756 | ARM | 08-04 13:35 | 08-04 13:55 | 140.38 | 139.09 | 99 | 13897.62 | -127.71 | -0.92% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.44 | ↓139.79 | 0.3632 | 1.18 | **LOSS** |
| 757 | SMCI | 08-04 13:35 | 08-04 14:25 | 58.78 | 58.72 | 219 | 12872.82 | -13.14 | -0.1% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.99 | ↑58.32 | 0.3921 | 1.57 | **LOSS** |
| 758 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 759 | DIS | 08-04 13:35 | 08-04 14:05 | 119.3 | 118.79 | 117 | 13958.1 | -59.67 | -0.43% | 0.53R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.87 | ↓118.78 | 0.4471 | 1.32 | **LOSS** |
| 760 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.89 | 97.53 | 142 | 13900.38 | -51.12 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 761 | UBER | 08-04 13:40 | 08-04 14:00 | 88.24 | 87.92 | 159 | 14030.16 | -50.88 | -0.36% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.8 | ↓88.05 | 0.3843 | 1.38 | **LOSS** |
| 762 | RIVN | 08-04 13:40 | 08-04 14:00 | 12.74 | 12.65 | 1110 | 14141.4 | -99.9 | -0.71% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.48 | ↓12.62 | 0.0527 | 1.42 | **LOSS** |
| 763 | PLTR | 08-04 13:45 | 08-04 14:05 | 160.15 | 159 | 81 | 12972.15 | -93.15 | -0.72% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.52 | ↓159.48 | 0.8038 | 2.14 | **LOSS** |
| 764 | CAT | 08-04 14:10 | 08-04 15:40 | 434.07 | 433.46 | 32 | 13890.24 | -19.52 | -0.14% | 0.2R | 90m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 765 | AMD | 08-04 14:30 | 08-04 14:50 | 177.31 | 176.2 | 74 | 13120.94 | -82.14 | -0.63% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 59.97 | ↑175.98 | 1.486 | 1.55 | **LOSS** |
| 766 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.36 | 89.37 | 156 | 13940.16 | +1.56 | +0.01% | 0.01R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **WIN** |
| 767 | NVDA | 08-04 16:00 | 08-04 17:45 | 178.57 | 178.96 | 78 | 13928.46 | +30.42 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑177.24 | 0.4412 | 1.19 | **WIN** |
| 768 | KLAC | 08-04 16:20 | 08-04 16:40 | 913.41 | 908.48 | 15 | 13701.15 | -73.95 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 73.79 | ↑904.38 | 6.5249 | 1.78 | **LOSS** |
| 769 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 64 | 13791.36 | -55.04 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 770 | PLTR | 08-05 13:35 | 08-05 14:40 | 173.71 | 172.32 | 81 | 14070.51 | -112.59 | -0.8% | 0.4R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.37 | ↓173.02 | 3.4269 | 4.06 | **LOSS** |
| 771 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 693 | 14019.39 | -6.93 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 772 | UBER | 08-05 13:40 | 08-05 14:30 | 90.33 | 89.71 | 155 | 14001.15 | -96.1 | -0.69% | 0.88R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.6 | ↓89.75 | 0.3437 | 3.63 | **LOSS** |
| 773 | TXN | 08-05 13:40 | 08-05 14:20 | 185.51 | 184.78 | 75 | 13913.25 | -54.75 | -0.39% | 0.56R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 774 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 180 | 14007.6 | -102.6 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 775 | TSLA | 08-05 13:50 | 08-05 14:10 | 312.15 | 308.35 | 45 | 14046.75 | -171 | -1.22% | 1.12R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57 | ↓308.63 | 0.1486 | 1.47 | **LOSS** |
| 776 | UNH | 08-05 15:20 | 08-05 15:40 | 247.62 | 245.55 | 52 | 12876.24 | -107.64 | -0.84% | 0.77R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 777 | TGT | 08-05 17:15 | 08-05 18:20 | 102.04 | 101.88 | 137 | 13979.48 | -21.92 | -0.16% | 0.23R | 65m | market | stagnation | trend | trend | neutral | 78.99 | ↑100.63 | 0.1822 | 1.74 | **LOSS** |
| 778 | SHOP | 08-05 17:35 | 08-05 18:25 | 125.95 | 125.79 | 112 | 14106.4 | -17.92 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 67.32 | ↑124.73 | 0.3198 | 1.17 | **LOSS** |
| 779 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.87 | 444.3 | 31 | 13821.97 | -48.67 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 780 | PYPL | 08-06 13:30 | 08-06 13:50 | 68.69 | 68.36 | 187 | 12845.03 | -61.71 | -0.48% | 0.69R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.76 | ↓68.59 | -0.013 | 4 | **LOSS** |
| 781 | NKE | 08-06 13:30 | 08-06 13:55 | 75.24 | 74.95 | 185 | 13919.4 | -53.65 | -0.39% | 0.56R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.2 | ↓74.92 | 0.0378 | 3.11 | **LOSS** |
| 782 | AAPL | 08-06 13:40 | 08-06 15:25 | 209.84 | 214.16 | 61 | 12800.24 | +263.52 | +2.06% | 2.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.59 | ↑208.26 | 0.8569 | 2.01 | **WIN** |
| 783 | TGT | 08-06 15:15 | 08-06 16:15 | 105.52 | 105.38 | 133 | 14034.16 | -18.62 | -0.13% | 0.19R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 784 | RIVN | 08-06 15:35 | 08-06 15:55 | 12.15 | 11.88 | 1163 | 14130.45 | -314.01 | -2.22% | 1.11R | 20m | market | stop-loss | breakout | breakout | thinChop | 72.62 | ↓11.96 | -0.0222 | 1.35 | **LOSS** |
| 785 | COIN | 08-06 16:05 | 08-06 16:40 | 298.98 | 299.07 | 47 | 14052.06 | +4.23 | +0.03% | 0.04R | 35m | market | breakeven-stop | breakout | breakout | noisyHighBeta | 66.68 | ↑296.24 | 0.0607 | 3.39 | **WIN** |
| 786 | MDB | 08-06 17:05 | 08-06 18:50 | 232.49 | 232.39 | 60 | 13949.4 | -6 | -0.04% | 0.06R | 105m | market | stagnation | trend | trend | neutral | 64.08 | ↑230.78 | 0.3577 | 1.09 | **LOSS** |
| 787 | DDOG | 08-06 17:35 | 08-06 18:15 | 135.7 | 135.31 | 103 | 13977.1 | -40.17 | -0.29% | 0.41R | 40m | market | early-reversal | trend | trend | neutral | 71.52 | ↑134.55 | 0.2537 | 1.12 | **LOSS** |
| 788 | AAPL | 08-07 13:35 | 08-07 14:25 | 219.05 | 218.23 | 63 | 13800.15 | -51.66 | -0.37% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.09 | ↓218.32 | 0.428 | 2.23 | **LOSS** |
| 789 | DELL | 08-07 13:35 | 08-07 14:20 | 132.04 | 131.21 | 98 | 12939.92 | -81.34 | -0.63% | 0.62R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.97 | ↓131.37 | 0.6529 | 1.95 | **LOSS** |
| 790 | UBER | 08-07 13:40 | 08-07 13:55 | 91.04 | 89.48 | 153 | 13929.12 | -238.68 | -1.71% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.27 | ↓90.86 | 0.4629 | 1.86 | **LOSS** |
| 791 | SBUX | 08-07 13:40 | 08-07 14:00 | 90.91 | 90.27 | 154 | 14000.14 | -98.56 | -0.7% | 0.95R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.52 | ↓90.6 | 0.2161 | 1.39 | **LOSS** |
| 792 | ELF | 08-07 17:50 | 08-07 18:15 | 99.03 | 98.43 | 140 | 13864.2 | -84 | -0.61% | 0.43R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.49 | ↑96.61 | 0.4267 | 1.76 | **LOSS** |
| 793 | PANW | 08-08 13:35 | 08-08 13:55 | 170 | 168.99 | 81 | 13770 | -81.81 | -0.59% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 794 | DDOG | 08-08 13:35 | 08-08 13:55 | 139.54 | 137.7 | 100 | 13954 | -184 | -1.32% | 0.93R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.07 | ↓138.67 | 1.3902 | 1.26 | **LOSS** |
| 795 | LLY | 08-08 13:35 | 08-08 13:55 | 654.36 | 648.32 | 21 | 13741.56 | -126.84 | -0.92% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.7 | ↓652.1 | 2.3997 | 1.72 | **LOSS** |
| 796 | CVX | 08-08 14:00 | 08-08 14:10 | 155.32 | 153.75 | 89 | 13823.48 | -139.73 | -1.01% | 1.44R | 10m | market | stop-loss | trend | trend | neutral | 71.92 | ↓154.69 | 0.3514 | 1.15 | **LOSS** |
| 797 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.02 | 91.75 | 152 | 13987.04 | -41.04 | -0.29% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 798 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 799 | DIS | 08-08 14:10 | 08-08 14:30 | 114.09 | 113.55 | 122 | 13918.98 | -65.88 | -0.47% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 73.28 | ↓113.71 | 0.3507 | 5.7 | **LOSS** |
| 800 | MU | 08-08 14:15 | 08-08 15:20 | 113.8 | 118.35 | 123 | 13997.4 | +559.65 | +4% | 4.21R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 801 | NFLX | 08-08 14:20 | 08-08 14:50 | 1205.82 | 1198.98 | 11 | 13264.02 | -75.24 | -0.57% | 0.81R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 802 | AAPL | 08-08 14:30 | 08-08 16:15 | 223.37 | 227.05 | 62 | 13848.94 | +228.16 | +1.65% | 1.7R | 105m | market | timeout | trend | trend | neutral | 77.34 | ↑221.79 | 0.8259 | 1.49 | **WIN** |
| 803 | MU | 08-08 15:25 | 08-08 15:45 | 119.16 | 118.42 | 118 | 14060.88 | -87.32 | -0.62% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.45 | ↑115.74 | 1.7368 | 2.27 | **LOSS** |
| 804 | MA | 08-08 16:05 | 08-08 17:50 | 571.79 | 574.29 | 24 | 13722.96 | +60 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑567.79 | 1.7432 | 1.31 | **WIN** |
| 805 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 93 | 14069.97 | -74.4 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 806 | SMCI | 08-11 13:40 | 08-11 14:30 | 45.82 | 45.56 | 305 | 13975.1 | -79.3 | -0.57% | 0.48R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 807 | QCOM | 08-11 13:45 | 08-11 14:05 | 150.85 | 149.87 | 92 | 13878.2 | -90.16 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 808 | ASML | 08-11 13:45 | 08-11 14:10 | 731.05 | 728.98 | 19 | 13889.95 | -39.33 | -0.28% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.3 | ↓729.69 | 2.0012 | 2.82 | **LOSS** |
| 809 | CELH | 08-11 13:50 | 08-11 15:35 | 53.12 | 53.69 | 259 | 13758.08 | +147.63 | +1.07% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.43 | ↑53.08 | 0.4977 | 1.13 | **WIN** |
| 810 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 811 | AAPL | 08-12 13:30 | 08-12 13:40 | 229.97 | 227.32 | 61 | 14028.17 | -161.65 | -1.15% | 1.64R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 73.18 | ↓229.26 | 0.0429 | 3.34 | **LOSS** |
| 812 | GE | 08-12 13:30 | 08-12 13:50 | 278.17 | 277 | 50 | 13908.5 | -58.5 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.64 | ↓277.39 | 0.1867 | 2.28 | **LOSS** |
| 813 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 61 | 13944.6 | +194.59 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 814 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 16 | 12594.88 | -118.72 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 815 | MDB | 08-12 13:35 | 08-12 13:50 | 203.52 | 200.81 | 68 | 13839.36 | -184.28 | -1.33% | 1.82R | 15m | market | stop-loss | trend | breakout | noisyHighBeta | 63.98 | ↓203.01 | -0.1816 | 1.8 | **LOSS** |
| 816 | PYPL | 08-12 13:35 | 08-12 15:20 | 68.23 | 68.31 | 204 | 13918.92 | +16.32 | +0.12% | 0.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.91 | ↓67.97 | 0.1445 | 1.29 | **WIN** |
| 817 | BAC | 08-12 13:35 | 08-12 15:20 | 46.99 | 47.4 | 297 | 13956.03 | +121.77 | +0.87% | 1.24R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.91 | ↑46.84 | 0.0902 | 1.66 | **WIN** |
| 818 | ORCL | 08-12 13:40 | 08-12 13:55 | 257.12 | 253.04 | 54 | 13884.48 | -220.32 | -1.59% | 2.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.72 | ↓255.28 | 0.2684 | 2.37 | **LOSS** |
| 819 | MDB | 08-12 16:15 | 08-12 17:20 | 208 | 207.75 | 67 | 13936 | -16.75 | -0.12% | 0.17R | 65m | market | stagnation | trend | trend | noisyHighBeta | 77.57 | ↑203.4 | 1.3959 | 1.13 | **LOSS** |
| 820 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 59 | 13833.73 | -76.11 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 821 | NVO | 08-13 13:30 | 08-13 15:15 | 50.45 | 51.05 | 277 | 13974.65 | +166.2 | +1.19% | 1.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 822 | NKE | 08-13 13:35 | 08-13 15:20 | 76.3 | 77.45 | 183 | 13962.9 | +210.45 | +1.51% | 2.16R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.11 | ↑75.8 | 0.166 | 1.79 | **WIN** |
| 823 | LLY | 08-13 13:40 | 08-13 15:25 | 649.59 | 655.6 | 21 | 13641.39 | +126.21 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.81 | ↑648.65 | 1.0009 | 1.68 | **WIN** |
| 824 | HD | 08-13 13:40 | 08-13 15:25 | 402.15 | 404.58 | 34 | 13673.1 | +82.62 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.48 | ↑400.5 | 1.1159 | 1.52 | **WIN** |
| 825 | V | 08-13 13:40 | 08-13 14:30 | 342.35 | 341.73 | 40 | 13694 | -24.8 | -0.18% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.22 | ↓341.12 | 1.1232 | 2.59 | **LOSS** |
| 826 | PYPL | 08-13 13:45 | 08-13 15:30 | 69.19 | 69.63 | 201 | 13907.19 | +88.44 | +0.64% | 0.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.64 | ↑68.77 | 0.2369 | 1.27 | **WIN** |
| 827 | IBM | 08-13 14:00 | 08-13 14:55 | 240.26 | 240.08 | 58 | 13935.08 | -10.44 | -0.07% | 0.08R | 55m | market | stagnation | breakout | breakout | neutral | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 828 | AAPL | 08-13 14:15 | 08-13 15:05 | 232.63 | 232.52 | 60 | 13957.8 | -6.6 | -0.05% | 0.06R | 50m | market | breakeven-stop | trend | trend | neutral | 75.62 | ↑231.66 | 0.7139 | 1.35 | **LOSS** |
| 829 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.34 | 195.5 | 71 | 13940.14 | -59.64 | -0.43% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 830 | CRM | 08-13 14:50 | 08-13 15:45 | 234.24 | 234.09 | 59 | 13820.16 | -8.85 | -0.06% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 831 | ADBE | 08-13 14:50 | 08-13 15:30 | 345.06 | 347.38 | 20 | 13802.4 | +46.4 | +0.67% | 0.88R | 40m | market | trim-profit-target | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 832 | ADBE | 08-13 14:50 | 08-13 15:55 | 345.06 | 345.2 | 20 | 13802.4 | +2.8 | +0.04% | 0.05R | 65m | market | breakeven-stop | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 833 | SNOW | 08-13 15:30 | 08-13 15:50 | 198.26 | 197.07 | 70 | 13878.2 | -83.3 | -0.6% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 66.67 | ↑195.55 | 0.9436 | 1.28 | **LOSS** |
| 834 | LLY | 08-13 15:55 | 08-13 16:25 | 660.99 | 658.2 | 21 | 13880.79 | -58.59 | -0.42% | 0.6R | 30m | market | early-reversal | trend | trend | neutral | 79.62 | ↑654.13 | 3.3587 | 1.15 | **LOSS** |
| 835 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 836 | COST | 08-14 14:30 | 08-14 15:20 | 987 | 985.87 | 14 | 13818 | -15.82 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 67.37 | ↑984.9 | 1.7164 | 1.42 | **LOSS** |
| 837 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 69 | 14091.87 | -66.93 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 838 | LLY | 08-14 17:50 | 08-14 19:35 | 679.38 | 682.21 | 20 | 13587.6 | +56.6 | +0.42% | 0.6R | 105m | market | timeout | trend | trend | neutral | 63.97 | ↑668.61 | 1.092 | 1.48 | **WIN** |
| 839 | MDB | 08-15 13:30 | 08-15 14:25 | 208.16 | 214.14 | 62 | 12905.92 | +370.76 | +2.87% | 4.1R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.36 | ↑207.76 | 0.3631 | 1.25 | **WIN** |
| 840 | NVO | 08-15 13:30 | 08-15 15:15 | 51.65 | 51.93 | 271 | 13997.15 | +75.88 | +0.54% | 0.77R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 841 | UNH | 08-15 13:35 | 08-15 13:45 | 300.14 | 298.95 | 46 | 13806.44 | -54.74 | -0.4% | 0.2R | 10m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.19 | ↓299.04 | 7.3176 | 6.17 | **LOSS** |
| 842 | LLY | 08-15 13:35 | 08-15 13:55 | 696.07 | 689.48 | 20 | 13921.4 | -131.8 | -0.95% | 1.36R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.05 | ↓693.66 | 2.9049 | 3.21 | **LOSS** |
| 843 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 844 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 845 | SNOW | 08-15 15:10 | 08-15 16:55 | 199 | 199.73 | 70 | 13930 | +51.1 | +0.37% | 0.53R | 105m | market | timeout | trend | trend | neutral | 65.32 | ↑197.7 | 0.874 | 2.18 | **WIN** |
| 846 | MDB | 08-15 15:30 | 08-15 16:20 | 215.52 | 214.91 | 64 | 13793.28 | -39.04 | -0.28% | 0.4R | 50m | market | early-reversal | trend | trend | neutral | 66.17 | ↑212.9 | 2.2444 | 1.23 | **LOSS** |
| 847 | INTC | 08-15 15:45 | 08-15 17:30 | 25.21 | 25.47 | 556 | 14016.76 | +144.56 | +1.03% | 0.63R | 105m | market | timeout | trend | trend | thinChop | 65.93 | ↑24.68 | 0.0921 | 1.04 | **WIN** |
| 848 | NOW | 08-15 17:30 | 08-15 18:30 | 867.12 | 866.18 | 16 | 13873.92 | -15.04 | -0.11% | 0.16R | 60m | market | stagnation | trend | trend | neutral | 76.55 | ↑858.94 | 2.2062 | 4.24 | **LOSS** |
| 849 | NVO | 08-18 13:35 | 08-18 13:55 | 54.86 | 54.25 | 255 | 13989.3 | -155.55 | -1.11% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.82 | ↓54.61 | 0.5586 | 2.83 | **LOSS** |
| 850 | SBUX | 08-18 13:35 | 08-18 15:20 | 91.73 | 92.87 | 152 | 13942.96 | +173.28 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.12 | ↑91.22 | 0.0459 | 1.57 | **WIN** |
| 851 | MDB | 08-18 13:45 | 08-18 15:30 | 224.96 | 228.2 | 62 | 13947.52 | +200.88 | +1.44% | 1.21R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.75 | ↑222.91 | 1.3885 | 1.12 | **WIN** |
| 852 | NFLX | 08-18 14:20 | 08-18 14:40 | 1251.07 | 1244.52 | 11 | 13761.77 | -72.05 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 70.33 | ↑1241.88 | 2.2788 | 1.17 | **LOSS** |
| 853 | BAC | 08-18 14:20 | 08-18 14:55 | 47.52 | 47.36 | 294 | 13970.88 | -47.04 | -0.34% | 0.49R | 35m | market | early-reversal | trend | trend | neutral | 77.6 | ↑47.27 | 0.0877 | 1.23 | **LOSS** |
| 854 | TGT | 08-18 14:45 | 08-18 15:05 | 106.02 | 105.57 | 132 | 13994.64 | -59.4 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 855 | ARM | 08-18 15:45 | 08-18 16:05 | 140.6 | 140.21 | 99 | 13919.4 | -38.61 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | thinChop | 70.72 | ↑139.35 | 0.2341 | 1.3 | **LOSS** |
| 856 | ELF | 08-18 15:45 | 08-18 16:30 | 122.52 | 122.12 | 113 | 13844.76 | -45.2 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 61.15 | ↑121.52 | 0.8956 | 1.3 | **LOSS** |
| 857 | COIN | 08-18 15:50 | 08-18 16:40 | 322.16 | 320.74 | 43 | 13852.88 | -61.06 | -0.44% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 77.62 | ↑314.48 | 1.8812 | 1.29 | **LOSS** |
| 858 | MDB | 08-18 16:20 | 08-18 16:40 | 229.95 | 228.77 | 60 | 13797 | -70.8 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 78.87 | ↑225.63 | 1.3761 | 1.8 | **LOSS** |
| 859 | MDB | 08-18 17:40 | 08-18 18:05 | 231.22 | 230.58 | 60 | 13873.2 | -38.4 | -0.28% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 71.17 | ↑226.26 | 0.9495 | 2.55 | **LOSS** |
| 860 | NVO | 08-19 13:30 | 08-19 13:55 | 54.76 | 54.71 | 255 | 13963.8 | -12.75 | -0.09% | 0.11R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 861 | HD | 08-19 13:35 | 08-19 15:15 | 408.29 | 408.27 | 31 | 12656.99 | -0.62 | 0% | 0R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.97 | ↓406.13 | 1.451 | 1.16 | **LOSS** |
| 862 | CAT | 08-19 13:40 | 08-19 15:25 | 417.64 | 419.47 | 33 | 13782.12 | +60.39 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.51 | ↑416.8 | 1.2247 | 1.46 | **WIN** |
| 863 | LOW | 08-19 13:40 | 08-19 15:20 | 256.69 | 256.49 | 54 | 13861.26 | -10.8 | -0.08% | 0.11R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.96 | ↓255.83 | 0.7387 | 1.77 | **LOSS** |
| 864 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 865 | DDOG | 08-19 14:15 | 08-19 14:40 | 130.92 | 129.88 | 106 | 13877.52 | -110.24 | -0.79% | 0.86R | 25m | market | early-reversal | breakout | breakout | neutral | 70.26 | ↓129.95 | 0.3091 | 1.2 | **LOSS** |
| 866 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.79 | 127.28 | 109 | 13929.11 | -55.59 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 867 | UBER | 08-19 15:30 | 08-19 15:55 | 96.51 | 96.21 | 144 | 13897.44 | -43.2 | -0.31% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 62.34 | ↑95.31 | 0.5087 | 2.04 | **LOSS** |
| 868 | DIS | 08-20 13:40 | 08-20 14:00 | 117.69 | 116.86 | 118 | 13887.42 | -97.94 | -0.71% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.15 | ↓117.14 | 0.2421 | 1.5 | **LOSS** |
| 869 | HPE | 08-20 15:20 | 08-20 15:45 | 21.04 | 20.96 | 568 | 11950.72 | -45.44 | -0.38% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.01 | ↑20.8 | -0.1327 | 1.37 | **LOSS** |
| 870 | CRWD | 08-20 15:25 | 08-20 15:45 | 417.63 | 416.48 | 33 | 13781.79 | -37.95 | -0.28% | 0.4R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.51 | ↑414.64 | -0.8738 | 3.49 | **LOSS** |
| 871 | GE | 08-20 15:30 | 08-20 15:50 | 268.6 | 267.35 | 52 | 13967.2 | -65 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | thinChop | 79.86 | ↑265.78 | 0.5907 | 1.09 | **LOSS** |
| 872 | DELL | 08-21 13:35 | 08-21 13:55 | 130.05 | 128.69 | 107 | 13915.35 | -145.52 | -1.05% | 1.38R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.25 | ↓129.72 | 0.3346 | 1.29 | **LOSS** |
| 873 | PLTR | 08-21 14:25 | 08-21 14:45 | 157.45 | 154.9 | 89 | 14013.05 | -226.95 | -1.62% | 0.81R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.95 | ↓155.75 | 0.5341 | 1.64 | **LOSS** |
| 874 | SMCI | 08-21 14:25 | 08-21 14:45 | 42.93 | 42.67 | 325 | 13952.25 | -84.5 | -0.61% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 55.76 | ↑42.61 | 0.1509 | 1.04 | **LOSS** |
| 875 | NVO | 08-21 15:00 | 08-21 16:45 | 55.45 | 55.62 | 252 | 13973.4 | +42.84 | +0.31% | 0.44R | 105m | market | timeout | trend | trend | neutral | 74.11 | ↑55.06 | 0.2703 | 1.08 | **WIN** |
| 876 | MA | 08-22 13:30 | 08-22 14:20 | 598.31 | 598.12 | 23 | 13761.13 | -4.37 | -0.03% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.88 | ↓597.64 | 0.9013 | 1.99 | **LOSS** |
| 877 | MU | 08-22 13:35 | 08-22 13:55 | 117.4 | 116.72 | 120 | 14088 | -81.6 | -0.58% | 0.71R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 878 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 61 | 13967.17 | +123.22 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 879 | V | 08-22 13:35 | 08-22 15:20 | 348.28 | 349.78 | 40 | 13931.2 | +60 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.17 | ↑347.52 | 0.5668 | 1.32 | **WIN** |
| 880 | LMT | 08-22 13:40 | 08-22 14:05 | 452.09 | 449.1 | 30 | 13562.7 | -89.7 | -0.66% | 0.94R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.62 | ↓451.64 | 0.546 | 3.87 | **LOSS** |
| 881 | NVO | 08-22 13:40 | 08-22 14:00 | 57.45 | 57.12 | 226 | 12983.7 | -74.58 | -0.57% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.33 | ↓57.08 | 0.3126 | 1.63 | **LOSS** |
| 882 | QCOM | 08-22 13:45 | 08-22 15:30 | 156.3 | 158.62 | 89 | 13910.7 | +206.48 | +1.48% | 2.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.52 | ↑155.78 | 0.4832 | 1.59 | **WIN** |
| 883 | AMD | 08-22 14:00 | 08-22 15:45 | 165.72 | 167.61 | 84 | 13920.48 | +158.76 | +1.14% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 60.21 | ↑163.91 | 0.1054 | 3.49 | **WIN** |
| 884 | ASML | 08-22 14:00 | 08-22 15:55 | 752.4 | 753.53 | 18 | 13543.2 | +20.34 | +0.15% | 0.21R | 115m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓745.02 | 2.4897 | 1.11 | **WIN** |
| 885 | HD | 08-22 14:00 | 08-22 15:45 | 404.92 | 413.97 | 34 | 13767.28 | +307.7 | +2.24% | 3.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 886 | TXN | 08-22 14:00 | 08-22 15:45 | 206.66 | 207.64 | 67 | 13846.22 | +65.66 | +0.47% | 0.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 887 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 62 | 13912.18 | +156.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 888 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 18 | 13519.44 | -81.18 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 889 | AVGO | 08-22 14:05 | 08-22 15:45 | 297.85 | 297.28 | 46 | 13701.1 | -26.22 | -0.19% | 0.15R | 100m | market | breakeven-stop | breakout | breakout | extendedBreakout | 81.61 | ↑292.68 | 1.7299 | 1.14 | **LOSS** |
| 890 | MU | 08-22 14:05 | 08-22 14:55 | 120.04 | 119.97 | 117 | 14044.68 | -8.19 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 79.27 | ↑117.97 | 0.5634 | 1.89 | **LOSS** |
| 891 | TSM | 08-22 14:05 | 08-22 15:50 | 231.38 | 233.15 | 60 | 13882.8 | +106.2 | +0.76% | 0.95R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 892 | SHOP | 08-22 14:05 | 08-22 15:50 | 141.09 | 141.99 | 92 | 12980.28 | +82.8 | +0.64% | 0.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.78 | ↑137.54 | 0.6418 | 2.33 | **WIN** |
| 893 | PANW | 08-22 14:05 | 08-22 14:55 | 186.52 | 186 | 74 | 13802.48 | -38.48 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 86.27 | ↑185.01 | 0.8172 | 1.31 | **LOSS** |
| 894 | SNOW | 08-22 14:05 | 08-22 14:55 | 199.25 | 199.12 | 70 | 13947.5 | -9.1 | -0.07% | 0.09R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 895 | PYPL | 08-22 14:05 | 08-22 15:50 | 69.17 | 69.12 | 202 | 13972.34 | -10.1 | -0.07% | 0.07R | 105m | market | stagnation | breakout | breakout | extendedBreakout | 83.9 | ↑68.47 | 0.316 | 1.25 | **LOSS** |
| 896 | NKE | 08-22 14:05 | 08-22 15:50 | 78.22 | 78.85 | 179 | 14001.38 | +112.77 | +0.81% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.74 | ↑77.22 | 0.4594 | 1.2 | **WIN** |
| 897 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.51 | 12.82 | 1126 | 14086.26 | +349.06 | +2.48% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 898 | MDB | 08-22 14:10 | 08-22 14:30 | 219.25 | 217.76 | 59 | 12935.75 | -87.91 | -0.68% | 0.49R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 78.12 | ↑215.14 | 1.31 | 1.11 | **LOSS** |
| 899 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 900 | AMAT | 08-22 14:10 | 08-22 15:00 | 164.38 | 164.27 | 85 | 13972.3 | -9.35 | -0.07% | 0.08R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 901 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 175 | 12981.5 | -29.75 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 902 | MSFT | 08-22 14:40 | 08-22 15:25 | 509.85 | 508.18 | 27 | 13765.95 | -45.09 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 73.45 | ↓507.24 | 0.8376 | 2.69 | **LOSS** |
| 903 | ORCL | 08-22 14:40 | 08-22 15:25 | 237.39 | 236.72 | 59 | 14006.01 | -39.53 | -0.28% | 0.24R | 45m | market | early-reversal | trend | trend | neutral | 69.38 | ↑234.55 | 0.7442 | 1.06 | **LOSS** |
| 904 | BAC | 08-22 14:40 | 08-22 16:25 | 49.13 | 49.41 | 285 | 14002.05 | +79.8 | +0.57% | 0.77R | 105m | market | timeout | trend | trend | neutral | 67.58 | ↑48.84 | 0.2138 | 1.05 | **WIN** |
| 905 | HPE | 08-22 14:40 | 08-22 16:25 | 22.43 | 22.48 | 622 | 13951.46 | +31.1 | +0.22% | 0.18R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑22.16 | 0.1518 | 1.31 | **WIN** |
| 906 | IBM | 08-22 14:40 | 08-22 15:05 | 243.42 | 242.57 | 57 | 13874.94 | -48.45 | -0.35% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 76.51 | ↓242.41 | 0.8806 | 2.11 | **LOSS** |
| 907 | RIVN | 08-22 16:40 | 08-22 17:25 | 12.85 | 12.86 | 1100 | 14135 | +11 | +0.08% | 0.09R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.6 | ↑12.6 | 0.0581 | 1.23 | **WIN** |
| 908 | HPE | 08-22 17:25 | 08-22 17:45 | 22.7 | 22.52 | 614 | 13937.8 | -110.52 | -0.79% | 1.13R | 20m | market | stop-loss | trend | trend | neutral | 74.6 | ↑22.44 | 0.0513 | 1.42 | **LOSS** |
| 909 | NVO | 08-25 13:35 | 08-25 14:30 | 57.77 | 57.78 | 242 | 13980.34 | +2.42 | +0.02% | 0.03R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.38 | ↓57.54 | 0.126 | 2.86 | **WIN** |
| 910 | NKE | 08-25 13:35 | 08-25 14:20 | 79.57 | 79.19 | 176 | 14004.32 | -66.88 | -0.48% | 0.69R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.7 | ↓79.26 | 0.0895 | 1.56 | **LOSS** |
| 911 | RIVN | 08-25 13:45 | 08-25 14:25 | 13.23 | 13.25 | 1068 | 14129.64 | +21.36 | +0.15% | 0.12R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 73.47 | ↓13.1 | 0.071 | 1.29 | **WIN** |
| 912 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 61 | 14007.43 | +150.67 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 913 | LLY | 08-26 13:40 | 08-26 14:05 | 723.22 | 718.65 | 17 | 12294.74 | -77.69 | -0.63% | 0.56R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.3 | ↓720.63 | 4.3747 | 1.33 | **LOSS** |
| 914 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.69 | 87.91 | 159 | 13942.71 | +34.98 | +0.25% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 915 | NOW | 08-27 13:35 | 08-27 15:05 | 881.35 | 880.53 | 15 | 13220.25 | -12.3 | -0.09% | 0.13R | 90m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.34 | ↓879.67 | 2.7234 | 2.79 | **LOSS** |
| 916 | NET | 08-27 13:40 | 08-27 15:25 | 201.39 | 204.97 | 69 | 13895.91 | +247.02 | +1.78% | 1.84R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 917 | MU | 08-27 16:10 | 08-27 16:30 | 118.44 | 117.66 | 118 | 13975.92 | -92.04 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑117.42 | 0.3013 | 1.79 | **LOSS** |
| 918 | COIN | 08-28 13:30 | 08-28 13:50 | 314.82 | 312.1 | 41 | 12907.62 | -111.52 | -0.86% | 1.09R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↓314.9 | 0.239 | 3.36 | **LOSS** |
| 919 | AMD | 08-28 13:35 | 08-28 13:50 | 170.19 | 167.97 | 82 | 13955.58 | -182.04 | -1.3% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 920 | MU | 08-28 13:35 | 08-28 13:55 | 121.02 | 118.84 | 116 | 14038.32 | -252.88 | -1.8% | 2.12R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 921 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 922 | SNOW | 08-28 13:45 | 08-28 14:15 | 232.21 | 239.44 | 55 | 12771.55 | +397.65 | +3.11% | 1.56R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 82.4 | ↑228.12 | 7.4764 | 2.11 | **WIN** |
| 923 | ELF | 08-28 13:45 | 08-28 15:30 | 128.02 | 130.74 | 108 | 13826.16 | +293.76 | +2.12% | 2.55R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.37 | ↑127.48 | 0.7557 | 3.86 | **WIN** |
| 924 | INTU | 08-28 14:30 | 08-28 15:25 | 670.57 | 669.31 | 20 | 13411.4 | -25.2 | -0.19% | 0.27R | 55m | market | stagnation | trend | trend | neutral | 79.04 | ↑665.43 | 1.5439 | 1.48 | **LOSS** |
| 925 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.33 | 232.38 | 60 | 13879.8 | +63 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 926 | ARM | 08-28 15:40 | 08-28 16:35 | 143.13 | 142.97 | 97 | 13883.61 | -15.52 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 76.32 | ↑141.61 | 0.4577 | 2.69 | **LOSS** |
| 927 | SNOW | 08-28 17:05 | 08-28 18:50 | 242.32 | 245.9 | 57 | 13812.24 | +204.06 | +1.48% | 1.36R | 105m | market | timeout | breakout | breakout | neutral | 85.04 | ↑234.12 | 0.6388 | 1.89 | **WIN** |
| 928 | RIVN | 08-28 17:35 | 08-28 17:55 | 13.44 | 13.4 | 1052 | 14138.88 | -42.08 | -0.3% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 75 | ↑13.24 | 0.0614 | 4.12 | **LOSS** |
| 929 | CELH | 08-29 13:45 | 08-29 15:10 | 62.38 | 62.34 | 203 | 12663.14 | -8.12 | -0.06% | 0.03R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.15 | ↓61.99 | 0.5071 | 1.98 | **LOSS** |
| 930 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.67 | 156.35 | 89 | 14032.63 | -117.48 | -0.84% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 931 | RIVN | 09-02 17:30 | 09-02 17:50 | 13.56 | 13.52 | 1042 | 14129.52 | -41.68 | -0.29% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.1 | ↑13.36 | 0.0598 | 1.15 | **LOSS** |
| 932 | MRVL | 09-02 17:40 | 09-02 19:15 | 63.48 | 64.13 | 110 | 14029.08 | +71.5 | +1.02% | 1.46R | 95m | market | trim-profit-target | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 933 | MRVL | 09-02 17:40 | 09-02 19:25 | 63.48 | 63.96 | 111 | 14029.08 | +53.28 | +0.76% | 1.09R | 105m | market | timeout | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 934 | HPE | 09-03 13:30 | 09-03 13:50 | 22.98 | 22.75 | 606 | 13925.88 | -139.38 | -1% | 1.43R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.72 | ↓22.97 | 0.0741 | 1.25 | **LOSS** |
| 935 | UBER | 09-03 13:35 | 09-03 13:55 | 93.92 | 93.01 | 148 | 13900.16 | -134.68 | -0.97% | 1.39R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.46 | ↓93.4 | 0.0909 | 1.57 | **LOSS** |
| 936 | ASML | 09-03 13:45 | 09-03 14:35 | 736.65 | 735.99 | 18 | 13259.7 | -11.88 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.6 | ↑732.83 | 2.2307 | 1.33 | **LOSS** |
| 937 | RIVN | 09-03 14:05 | 09-03 15:50 | 14.53 | 14.88 | 972 | 14123.16 | +340.2 | +2.41% | 1.28R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 81.16 | ↑14.25 | 0.2065 | 1.19 | **WIN** |
| 938 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 939 | TSM | 09-03 14:40 | 09-03 15:20 | 231.89 | 230.87 | 60 | 13913.4 | -61.2 | -0.44% | 0.63R | 40m | market | early-reversal | trend | trend | neutral | 79.01 | ↑230.25 | 0.9671 | 1.22 | **LOSS** |
| 940 | AVGO | 09-03 14:45 | 09-03 15:25 | 303.7 | 302.19 | 45 | 13666.5 | -67.95 | -0.5% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 69.6 | ↑299.96 | 1.3055 | 1.54 | **LOSS** |
| 941 | NFLX | 09-03 15:05 | 09-03 15:25 | 1225.4 | 1217.24 | 11 | 13479.4 | -89.76 | -0.67% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 76.17 | ↑1213.16 | 2.2553 | 1.11 | **LOSS** |
| 942 | DELL | 09-03 16:55 | 09-03 17:15 | 123.92 | 123.03 | 112 | 13879.04 | -99.68 | -0.72% | 1.03R | 20m | market | early-reversal | trend | trend | neutral | 75.27 | ↑122.18 | 0.2413 | 3.54 | **LOSS** |
| 943 | SHOP | 09-04 13:45 | 09-04 14:05 | 142.23 | 140.57 | 99 | 14080.77 | -164.34 | -1.17% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.94 | ↓141.9 | 0.4522 | 3.41 | **LOSS** |
| 944 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.39 | 100.15 | 140 | 13914.6 | +106.4 | +0.76% | 0.75R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 945 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 582 | 14037.84 | +81.48 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 946 | DIS | 09-04 14:30 | 09-04 16:05 | 118.6 | 118.48 | 117 | 13876.2 | -14.04 | -0.1% | 0.14R | 95m | market | stagnation | trend | trend | neutral | 76.09 | ↑117.94 | 0.4323 | 1.34 | **LOSS** |
| 947 | SMCI | 09-04 14:35 | 09-04 14:55 | 40.74 | 40.55 | 342 | 13933.08 | -64.98 | -0.47% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑40.32 | 0.1624 | 1.17 | **LOSS** |
| 948 | AMAT | 09-04 14:35 | 09-04 16:20 | 157.88 | 157.87 | 88 | 13893.44 | -0.88 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 76.82 | ↑156.79 | 0.7312 | 1.04 | **LOSS** |
| 949 | MDB | 09-04 14:45 | 09-04 16:35 | 311.54 | 315.41 | 44 | 13707.76 | +170.28 | +1.24% | 1.15R | 110m | market | timeout | trend | trend | noisyHighBeta | 57.43 | ↑308.48 | -0.0258 | 1.35 | **WIN** |
| 950 | ASML | 09-04 15:00 | 09-04 15:55 | 753.53 | 752.86 | 18 | 13563.54 | -12.06 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 75.61 | ↑746.98 | 4.9787 | 1.51 | **LOSS** |
| 951 | IBM | 09-04 15:00 | 09-04 16:45 | 246.47 | 248.12 | 56 | 13802.32 | +92.4 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 78.13 | ↑244.83 | 0.7761 | 1.49 | **WIN** |
| 952 | WMT | 09-04 15:40 | 09-04 16:00 | 101.22 | 100.92 | 138 | 13968.36 | -41.4 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 78.63 | ↑100.42 | 0.3938 | 1.09 | **LOSS** |
| 953 | INTC | 09-04 17:10 | 09-04 17:30 | 24.46 | 24.37 | 574 | 14040.04 | -51.66 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 66.34 | ↑24.14 | 0.0514 | 2.74 | **LOSS** |
| 954 | MDB | 09-04 17:40 | 09-04 18:35 | 317.86 | 317.72 | 44 | 13985.84 | -6.16 | -0.04% | 0.06R | 55m | market | stagnation | trend | trend | noisyHighBeta | 75 | ↑311.73 | 1.0645 | 1.21 | **LOSS** |
| 955 | NET | 09-05 13:30 | 09-05 13:50 | 213.18 | 211.91 | 61 | 13003.98 | -77.47 | -0.6% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 956 | CRM | 09-05 13:35 | 09-05 14:55 | 247.34 | 247.15 | 56 | 13851.04 | -10.64 | -0.08% | 0.1R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 78.66 | ↓246.29 | 0.5948 | 1.57 | **LOSS** |
| 957 | ADBE | 09-05 13:35 | 09-05 14:10 | 353.01 | 349.79 | 39 | 13767.39 | -125.58 | -0.91% | 1.3R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.68 | ↓350.85 | 1.6664 | 4.86 | **LOSS** |
| 958 | DDOG | 09-05 13:35 | 09-05 14:20 | 134.43 | 133.59 | 104 | 13980.72 | -87.36 | -0.62% | 0.89R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.69 | ↓133.92 | 0.254 | 1.7 | **LOSS** |
| 959 | PYPL | 09-05 13:35 | 09-05 13:55 | 69.89 | 69.49 | 199 | 13908.11 | -79.6 | -0.57% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.23 | ↓69.37 | 0.215 | 1.68 | **LOSS** |
| 960 | KLAC | 09-05 13:35 | 09-05 14:15 | 886.49 | 882.17 | 15 | 13297.35 | -64.8 | -0.49% | 0.7R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 961 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 60 | 14097.6 | -51 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 962 | TSM | 09-05 13:40 | 09-05 14:05 | 241.79 | 240.7 | 53 | 12814.87 | -57.77 | -0.45% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.7 | ↓240.79 | 1.3629 | 2.93 | **LOSS** |
| 963 | PANW | 09-05 13:40 | 09-05 14:00 | 196.18 | 195.28 | 70 | 13732.6 | -63 | -0.46% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 964 | CRWD | 09-05 13:40 | 09-05 13:55 | 417.46 | 412.62 | 33 | 13776.18 | -159.72 | -1.16% | 1.53R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 61.48 | ↓415.34 | 0.438 | 1.2 | **LOSS** |
| 965 | SNOW | 09-05 13:40 | 09-05 14:10 | 225.81 | 224.43 | 62 | 14000.22 | -85.56 | -0.61% | 0.62R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.3 | ↓224.98 | 0.5106 | 1.54 | **LOSS** |
| 966 | RIVN | 09-05 13:40 | 09-05 14:15 | 14.19 | 14.09 | 927 | 13154.13 | -92.7 | -0.7% | 0.56R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.07 | ↓13.97 | 0.0939 | 2.1 | **LOSS** |
| 967 | UNH | 09-05 13:45 | 09-05 14:10 | 314.49 | 313.08 | 44 | 13837.56 | -62.04 | -0.45% | 0.64R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.09 | ↓311.92 | 0.6952 | 2.55 | **LOSS** |
| 968 | RIVN | 09-05 14:25 | 09-05 14:45 | 14.39 | 14.26 | 907 | 13051.73 | -117.91 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 74.53 | ↑14.21 | 0.189 | 1.13 | **LOSS** |
| 969 | RIVN | 09-05 16:50 | 09-05 17:10 | 14.49 | 14.4 | 976 | 14142.24 | -87.84 | -0.62% | 0.52R | 20m | market | early-reversal | breakout | breakout | thinChop | 49.62 | ↑14.27 | 0.0263 | 1.36 | **LOSS** |
| 970 | SNOW | 09-08 13:35 | 09-08 14:40 | 228.48 | 228.13 | 61 | 13937.28 | -21.35 | -0.15% | 0.21R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 82.91 | ↓227.54 | 0.5413 | 1.34 | **LOSS** |
| 971 | NET | 09-08 13:35 | 09-08 14:20 | 219.21 | 217.45 | 64 | 14029.44 | -112.64 | -0.8% | 1.03R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 972 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 973 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 18 | 13775.76 | -76.68 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 974 | ORCL | 09-08 13:40 | 09-08 14:15 | 238.99 | 237.32 | 59 | 14100.41 | -98.53 | -0.7% | 0.43R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.79 | ↓237.83 | 1.4607 | 1.42 | **LOSS** |
| 975 | COIN | 09-08 14:00 | 09-08 14:20 | 302.97 | 300.07 | 46 | 13936.62 | -133.4 | -0.96% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↓300.78 | 0.926 | 1.12 | **LOSS** |
| 976 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.13 | 125.12 | 111 | 13889.43 | -1.11 | -0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 977 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.42 | 236.59 | 59 | 13948.78 | +10.03 | +0.07% | 0.09R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 978 | INTC | 09-08 15:40 | 09-08 16:00 | 24.73 | 24.56 | 567 | 14021.91 | -96.39 | -0.69% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 70.94 | ↑24.46 | 0.0559 | 1.52 | **LOSS** |
| 979 | LLY | 09-08 16:55 | 09-08 17:15 | 732.03 | 729.82 | 19 | 13908.57 | -41.99 | -0.3% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 70.55 | ↑726.19 | 0.3824 | 8.21 | **LOSS** |
| 980 | AMD | 09-09 13:35 | 09-09 13:50 | 154.08 | 152.45 | 90 | 13867.2 | -146.7 | -1.06% | 1.47R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.54 | ↓153.27 | 0.4219 | 3.06 | **LOSS** |
| 981 | JPM | 09-09 14:35 | 09-09 16:00 | 297.17 | 296.74 | 47 | 13966.99 | -20.21 | -0.14% | 0.19R | 85m | market | stagnation | trend | trend | neutral | 73.4 | ↑295.1 | 0.816 | 2.37 | **LOSS** |
| 982 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 983 | BAC | 09-09 15:25 | 09-09 15:50 | 50.52 | 50.35 | 277 | 13994.04 | -47.09 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.86 | ↑50.04 | 0.2452 | 1.07 | **LOSS** |
| 984 | UNH | 09-09 15:25 | 09-09 17:10 | 340.22 | 345.98 | 41 | 13949.02 | +236.16 | +1.69% | 1.67R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.41 | ↑332.07 | 3.8569 | 1.78 | **WIN** |
| 985 | NVO | 09-09 15:35 | 09-09 15:55 | 53.91 | 53.69 | 259 | 13962.69 | -56.98 | -0.41% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 67.34 | ↑53.19 | 0.0258 | 3.28 | **LOSS** |
| 986 | MU | 09-09 16:00 | 09-09 17:45 | 134.73 | 134.95 | 104 | 14011.92 | +22.88 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 75.3 | ↑132.83 | 0.5719 | 1.14 | **WIN** |
| 987 | SNOW | 09-10 13:40 | 09-10 14:10 | 231.09 | 229.03 | 60 | 13865.4 | -123.6 | -0.89% | 0.9R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.75 | ↓229.59 | 1.1173 | 1.39 | **LOSS** |
| 988 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 566 | 14014.16 | -96.22 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 989 | NOW | 09-10 13:45 | 09-10 14:05 | 944.28 | 937.88 | 14 | 13219.92 | -89.6 | -0.68% | 0.97R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.39 | ↓938.4 | 1.3648 | 1.13 | **LOSS** |
| 990 | ARM | 09-10 13:55 | 09-10 15:40 | 149.21 | 151.3 | 93 | 13876.53 | +194.37 | +1.4% | 0.82R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.83 | ↑147.98 | 1.9869 | 2.59 | **WIN** |
| 991 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 992 | NVO | 09-10 14:30 | 09-10 15:20 | 54.95 | 54.78 | 254 | 13957.3 | -43.18 | -0.31% | 0.25R | 50m | market | stagnation | trend | trend | neutral | 68.11 | ↑54.39 | 0.1926 | 1.39 | **LOSS** |
| 993 | RIVN | 09-10 17:10 | 09-10 18:50 | 14.01 | 14.02 | 1009 | 14136.09 | +10.09 | +0.07% | 0.09R | 100m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 71.08 | ↑13.86 | 0.0255 | 1.79 | **WIN** |
| 994 | RIVN | 09-11 13:35 | 09-11 14:00 | 14.47 | 14.29 | 900 | 13023 | -162 | -1.24% | 0.78R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.77 | ↓14.34 | 0.0133 | 1.75 | **LOSS** |
| 995 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 996 | INTU | 09-11 13:45 | 09-11 14:05 | 665.74 | 660.83 | 20 | 13314.8 | -98.2 | -0.74% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.05 | ↓663.92 | 1.8587 | 1.14 | **LOSS** |
| 997 | CAT | 09-11 14:00 | 09-11 14:20 | 435.28 | 432.88 | 32 | 13928.96 | -76.8 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.28 | ↓433.3 | 1.7475 | 5.99 | **LOSS** |
| 998 | NKE | 09-11 14:00 | 09-11 14:20 | 75.34 | 74.98 | 186 | 14013.24 | -66.96 | -0.48% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 79.46 | ↓74.98 | 0.278 | 1.24 | **LOSS** |
| 999 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 31 | 14038.66 | +81.22 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 1000 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 14038.66 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |

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

- ⚠️ **Profit factor 0.95 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T06:07:26.842Z*
