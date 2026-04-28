# Final Key Metrics — 300-Trade Target Backtest

Generated: 2026-04-28

Source report: `docs/reports/BOT-TRADE-REPORT-2026-04-28-5min-custom-300trades-365d-adaptive-time-open-mid-symbols10-dkwhxe.md`

Command:

```bash
node scripts/run-100-trades.mjs 5Min --target=300 --lookback=365 --adaptive=true --time-filter=open,mid --fetch-delay-ms=1 --rate-limit-wait-ms=180000 --symbols="TSLA,AMD,AMZN,MSFT,META,AAPL,PLTR,COIN,SMCI,CRWD"
```

Important: this was a 300-trade target run, but the latest classifier only found 11 completed qualifying round trips across the 10-symbol hard universe.

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+222.73 (+0.22%) | ✅ |
| Win rate | 45–60% | 36.36% (4W / 7L) | ❌ |
| Profit factor | ≥ 1.3 | 1.31 | ✅ |
| Sharpe (ann.) | > 1.5 | 1.72 | ✅ |
| R:R | 2:1 – 3:1 | 2.62:1 planned / 2.29:1 realized payoff | ✅ |
| Max drawdown | < 10% | 0.31% | ✅ |
| Expectancy | positive | $+20.25 / trade | ✅ |

Bottom line: the run is profitable and passes 6 of 7 target metrics, but it is not statistically strong because the new filters reduced the sample from the requested 300 trades to 11. Treat this as promising but not production-proof.
