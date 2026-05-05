Fix stale watchlist cache causing screener to miss daily catalysts

## Problem
`SCREENER_WATCH_SYMBOLS` in `screener-watch-symbols.js` is set to the cached watchlist at module load time. This cache is populated either from disk (via `preloadWatchlist`) or as an empty/fallback value. The subsequent call to `getCachedWatchlist` in `getWatchlist()` returns the stale cached value instead of recomputing the merged list from `CORE_WATCHLIST + today's catalysts`.

## Fix
1. In `screener-watch-symbols.js`: change the default export from `getWatchlist()` to a function that calls `getCachedWatchlist` fresh each time (or ensure `preloadWatchlist()` is called before any consumer reads `SCREENER_WATCH_SYMBOLS`).
2. In `websocket-server.js`/`screener.js`: instead of importing the static `SCREENER_WATCH_SYMBOLS`, call `getWatchlist()` at runtime after `initializeScreener()` has run to ensure the merged catalyst+core list is used for subscriptions.
3. In `trade-screener-service.js`: `getDailyCatalystForSymbol` already computes per-symbol catalysts correctly; verify the date passed matches the trading day key format (NY timezone). If `asOfDate` is not provided it defaults to `new Date()` which is correct.

## Steps (Jacques)
- Update `screener-watch-symbols.js` to export a function or ensure `preloadWatchlist` runs before module-level `SCREENER_WATCH_SYMBOLS` is read.
- Update `websocket-server.js` to call `getWatchlist()` after `initializeScreener()` instead of importing `SCREENER_WATCH_SYMBOLS` at module top-level.
- Ensure `screener.js` also uses runtime `getWatchlist()` for `STOCKS_TO_WATCH` rather than relying on the module-level constant.
- Verify `getDailyCatalystForSymbol` date handling: `asOfDate = new Date()` is correct; NY timezone via `formatTradingDayKey` is properly applied.