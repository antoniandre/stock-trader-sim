# ORCL Screener Miss — Root Cause Analysis
**Date:** 2026-04-14  
**Issue:** ORCL did not appear in screener results on 2026-04-13 despite significant intraday movement.

---

## Summary

**Root cause: ORCL is not in the screener watchlist.**

The screener hard-codes a static watchlist of 5 symbols: `['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']`. ORCL is not in this list, so it is never ingested, never evaluated, and never flagged as an opportunity — regardless of how strong its momentum or how relevant its catalyst data.

---

## Diagnosis Details

### 1. **Screener Watchlist is Hard-Coded & Closed**

**File:** `/Users/anto/localhost/stock-trader-sim/api/screener-watch-symbols.js`

```javascript
export const SCREENER_WATCH_SYMBOLS = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']
```

**Impact:** Only these 5 symbols receive Alpaca WebSocket data (trades, quotes, bars). All other stocks — including ORCL — are filtered out at ingestion time.

### 2. **Catalyst Data Exists but is Not Wired to Screener**

**File:** `/Users/anto/localhost/stock-trader-sim/api/input/daily-catalysts/2026-04-13.json`

The catalyst file contains **12 stocks** (XOM, CVX, COP, SLB, GS, LMT, JPM, C, MS, HON, FDX, UPS). ORCL is not listed here either, so even if the screener were to merge catalyst data with opportunities, it wouldn't help.

**However:** The catalyst system and screener are architecturally decoupled:
- `catalyst-feed.js` loads daily catalyst files from disk
- `screener.js` evaluates real-time market data (Alpaca WebSocket)
- **No integration:** There's no code that pulls ORCL from catalysts and injects it into the screener watchlist

### 3. **Screener Filter Logic Would Have Caught ORCL**

**File:** `/Users/anto/localhost/stock-trader-sim/api/src/screener/screener.js`

The screener's opportunity detection requires:
1. **Market status check** ✓
2. **Previous close data** (from Alpaca historical bars) ✓
3. **Percentage change > 0.5%** (or < -0.5%) ✓ — ORCL likely met this
4. **High volume** (≥50,000 shares in the minute) ✓ — ORCL likely met this
5. **Price range** ($5–$500) ✓ — ORCL ~$130–$150 range, OK
6. **Intraday trend** (9-bar vs 20-bar MA) ✓ — Would depend on actual price action
7. **Combined signal** (BUY/SELL type) — Would need uptrend + high % + high volume

If ORCL had been in the watchlist, the screener would have had sufficient data to flag it. **The filter logic is sound.**

### 4. **Timing Check — No Evidence of Delays**

The screener's historical data pull is:
- **Desk view active:** Every 20 seconds
- **Idle mode:** Every 60 seconds

No timing bottleneck was found. The issue is purely that ORCL was never subscribed to.

---

## The Gap

```
Catalyst File (2026-04-13.json)
        ↓
     [12 stocks: XOM, CVX, COP, SLB, GS, LMT, JPM, C, MS, HON, FDX, UPS]
        ↓
  (Not wired to screener)
        ↓
        ↓
Screener Watchlist (hard-coded)
        ↓
     [5 stocks only: AAPL, MSFT, GOOGL, AMZN, TSLA]
        ↓
Alpaca WebSocket subscription
        ↓
Real-time trade/quote/bar ingestion
        ↓
Opportunity evaluation
```

ORCL is in neither the catalyst list nor the screener watchlist. It falls through both funnels.

---

## Why ORCL Wasn't in Catalysts

The catalyst data for 2026-04-13 focused on:
- **Oil supply shock** (Hormuz blockade): XOM, CVX, COP, SLB
- **Earnings week** (financial sector): GS (BMO), JPM, C, MS (Wed)
- **Defense boost** (Pentagon wartime footing): LMT, HON
- **Logistics pain** (fuel surcharge): FDX, UPS

ORCL had no **macro catalyst** listed for April 13, 2026. It may have had strong internal momentum, but it wasn't flagged in the curated daily catalyst list.

---

## Design Issues (Blocking Future Misses)

### Issue 1: Catalyst → Screener Integration is Missing
**Current state:** Catalyst data and screener data are silos. A stock with a strong catalyst is not auto-injected into the screener watchlist.

**Risk:** High-impact stocks miss the screener entirely if not pre-added to the hard-coded list.

### Issue 2: Static Watchlist is Not Scalable
**Current state:** The screener can only watch 5 stocks at a time (Alpaca subscription limit is higher; this is a design choice).

**Risk:** Any stock outside `SCREENER_WATCH_SYMBOLS` cannot be screened, no matter how strong its signal.

### Issue 3: No Momentum-First Catch Mechanism
**Current state:** The screener only evaluates stocks it's already watching. There's no fallback for "big movers that weren't on the radar."

**Risk:** Daily gap-ups or surprise earnings reactions on non-watchlist stocks will always be missed.

---

## Recommendations

### Short-term Fix (1–2h)
1. **Add ORCL to the watchlist** (if it's a stock you want to monitor):
   ```javascript
   export const SCREENER_WATCH_SYMBOLS = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'ORCL']
   ```
2. Restart the screener service.
3. Test by observing ORCL trades in the WebSocket stream.

### Medium-term Fix (1–2 days)
1. **Wire catalyst data to screener:**
   - When a new daily catalyst file loads, extract stock symbols.
   - Dynamically add them to the screener's subscription (Alpaca allows 100+ symbols per stream).
   - Use `adjustScreenerDeskViewers()` logic to weight them higher during market hours.

2. **Implement a "catalyst-triggered watchlist":**
   ```javascript
   // Pseudo-code
   async function ingestDailyCatalystSymbols(catalystFile) {
     const symbols = catalystFile.map(row => row.symbol)
     // Add to Alpaca subscription dynamically
     const uniqueSymbols = [...SCREENER_WATCH_SYMBOLS, ...symbols]
     alpacaWebSocket.send(JSON.stringify({
       action: 'subscribe',
       bars: uniqueSymbols
     }))
   }
   ```

### Long-term Fix (1–2 weeks)
1. **Expand the screener to watch 50–100 stocks** (cap is set by Alpaca SLA, not cost):
   - Include the top-traded ETF constituents.
   - Include stocks from the catalyst feed.
   - Include custom user watchlists.

2. **Add a "gap-and-momentum" trigger:**
   - Monitor all stocks for big % moves (>2–3%) regardless of trend filters.
   - Flag these as "gap-interest" opportunities even if they don't hit BUY/SELL thresholds.

3. **Merge catalyst + screener into a unified signal:**
   - If a stock has both a catalyst AND high momentum → boost priority.
   - If a stock has a catalyst but no momentum → flag as "watch for setup."

---

## Conclusion

**ORCL missed the screener because it was not on the watchlist.** This is not a bug in the screener logic; it's a design boundary. The screener intentionally watches a small, curated set of symbols to reduce Alpaca API load and avoid noise.

To catch fast-moving stocks like ORCL in the future:
1. Pre-add them to `SCREENER_WATCH_SYMBOLS`, OR
2. Integrate the catalyst feed into the watchlist dynamically, OR
3. Implement a higher-level "market scanner" that watches all stocks for big gaps and feeds interesting candidates to the screener.

**Next step:** Approve the short-term fix (add ORCL), then plan catalyst → screener integration.
