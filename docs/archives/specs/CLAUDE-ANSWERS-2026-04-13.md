# Claude's Questions — Antoni's Answers

## Q1: Should catalyst stocks auto-appear in screener even if they don't meet technical filters?
**A:** No. Only if they're considered a **recommended trade**. Don't bypass screener rules.

## Q2: Current decision poll interval?
**A:** Move to event-driven (agreed). Find interval and attach to WebSocket price updates.

## Q3: Expected position hold time? (For timeout logic — currently 20 candles assumed.)
**A:** Bot logic should decide. But add **clear UI indicator** showing estimated position timeframe.

## Q4: Catalyst data freshness requirement?
**A:** End-of-day data is acceptable. (Chef rec: If real-time catalyst detection exists later, use that. But daily JSON is fine for now.)

---

Use these answers to finalize implementation. Prioritize sell execution + decision event-driven.
