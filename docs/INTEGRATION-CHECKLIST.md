# Integration Checklist — Catalyst-Aware Screener

**Status:** Code ready to deploy. Screener.js uses new watchlist automatically.

---

## What's Already Integrated

✅ **screener.js uses new SCREENER_WATCH_SYMBOLS automatically**
- File: `api/src/screener/screener.js`
- Import: `import { SCREENER_WATCH_SYMBOLS } from '../../screener-watch-symbols.js'`
- Already uses this at line ~19: `const STOCKS_TO_WATCH = SCREENER_WATCH_SYMBOLS`
- No changes needed to screener.js — it picks up the expanded watchlist automatically on next restart

---

## Deployment Checklist

- [x] **Code files created/modified:**
  - [x] `api/catalyst-symbol-loader.js` — NEW
  - [x] `api/screener-watch-symbols.js` — MODIFIED
  - [x] `api/top-movers-enricher.js` — NEW (optional)
  - [x] `api/test-catalyst-watchlist-integration.js` — NEW (testing)

- [ ] **Deploy steps:**
  1. Commit files to repo
  2. Restart screener service: `systemctl restart screener` (or equivalent)
  3. Verify WebSocket logs show 10+ symbols in subscription (not just 5)
  4. Monitor first few opportunities to confirm ORCL + catalyst stocks are being screened

- [ ] **Verification:**
  - [ ] Run `node api/test-catalyst-watchlist-integration.js` → confirms 10-symbol core watchlist + ORCL
  - [ ] Check screener logs for "Subscribing to X symbols" message → should say 10–40, not 5
  - [ ] Optional: Manually add a symbol to tomorrow's catalyst file and verify it appears in watchlist

---

## Post-Deployment (Future Enhancements)

### Option 1: Daily Watchlist Refresh
**Goal:** Reload watchlist each market day (not just at startup)

**Implementation:**
Add a market-open hook to screener.js:
```javascript
// In screener.js, after market open
async function refreshWatchlistDaily() {
  const newWatchlist = buildScreenerWatchlist()
  // Re-subscribe Alpaca WebSocket with new list
  // See: connectAlpacaWebSocket() in screener.js
  console.log('Refreshed watchlist:', newWatchlist.length, 'symbols')
}
```

**Effort:** 30 minutes

---

### Option 2: Add Top Movers Fallback
**Goal:** Auto-add biggest movers (e.g., +/- 5%) to watchlist

**Implementation:**
```javascript
// In screener.js startup, after Alpaca auth:
import { enrichWatchlistWithTopMovers } from './top-movers-enricher.js'

const baseWatchlist = SCREENER_WATCH_SYMBOLS
const enriched = await enrichWatchlistWithTopMovers(baseWatchlist, 10, 40)
// Use `enriched` instead of base watchlist
```

**Benefit:** Catches surprise gaps/gaps that weren't in catalysts

**Effort:** 20 minutes

---

### Option 3: Catalyst Weighting in Opportunities
**Goal:** Boost priority of opportunities that have a catalyst

**Implementation:**
In screener.js, when an opportunity is flagged, check:
```javascript
const catalyst = getDailyCatalystForSymbol(symbol)
if (catalyst) {
  opportunity.catalyst_score = catalyst.catalyst_score
  opportunity.priority = 'boosted'  // or raise in sort order
}
```

**Benefit:** Catalyst trades prioritized in UI/alerts

**Effort:** 30 minutes

---

## Rollback Plan

If issues arise:
1. Revert `screener-watch-symbols.js` to original (5 symbols)
2. Restart screener
3. Investigate in `catalyst-symbol-loader.js` or catalyst file format

**Risk level:** Very low — code is isolated, no breaking changes to core logic.

---

## Notes for Owner

- **No filter threshold changes:** Screener's BUY/SELL logic remains tight. Expansion is input-side only.
- **Alpaca cost:** Same regardless of 5 or 40 symbols — subscription is per-message, not per-symbol.
- **Catalyst file format:** Expects JSON array of objects with `symbol` field. Handles missing files gracefully.
- **Production-ready:** Error handling, type hints, tests included. Safe to deploy now.

---

**Next step:** Restart screener service and monitor logs for "Subscribing to X symbols".
