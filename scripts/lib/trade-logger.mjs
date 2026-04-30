/**
 * Shared trade logger for paper, live, and backtest modes.
 *
 * Log paths:
 *   logs/paper/trades/[YYYY-MM].md
 *   logs/paper/round-trip-trades/[YYYY-MM].md
 *   logs/paper/skipped-trades/[YYYY-MM].md
 *   logs/live/...
 *   logs/backtest/...
 *
 * All functions are synchronous and non-blocking (append only).
 * @module trade-logger
 */

import { appendFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const LOG_ROOT   = join(__dirname, '../../logs')

function _r2(v)    { return Math.round((+v + Number.EPSILON) * 100) / 100 }
function _fmt(n)   { return Number(n).toFixed(2) }
function _ym()     { return new Date().toISOString().slice(0, 7) }
function _utc()    { return new Date().toISOString().slice(0, 16).replace('T', ' ') }
function _clean(s) { return (s || '').replace(/\|/g, '–') }

function _ensureLogFile(subdir, yearMonth, headerLines) {
  const dir  = join(LOG_ROOT, subdir)
  mkdirSync(dir, { recursive: true })
  const file = join(dir, `${yearMonth}.md`)
  if (!existsSync(file)) appendFileSync(file, headerLines + '\n', 'utf8')
  return file
}

/**
 * Log an individual BUY, TRIM, or SELL fill event.
 * Written immediately on fill — not deferred.
 *
 * @param {'paper'|'live'|'backtest'} mode
 * @param {'BUY'|'TRIM'|'SELL'} type
 * @param {{ symbol, qty, price, regime, setup, behavior, score, rsi, vwapStr, macd, volR, reason }} data
 */
export function logTradeEvent(mode, type, { symbol, qty, price, regime, setup, behavior, score, rsi, vwapStr, macd, volR, reason }) {
  const ym       = _ym()
  const ts       = _utc()
  const notional = _r2(qty * price)
  const header =
    `# Trade Events — ${ym}\n\n` +
    `| Timestamp (UTC) | Type | Symbol | Qty | Price | Notional | Regime | Setup | Behavior | Score | RSI | VWAP | MACD | VolR | Reason |\n` +
    `|:--|:--|:--|--:|--:|--:|:--|:--|:--|--:|--:|--:|--:|--:|:--|`
  const file = _ensureLogFile(`${mode}/trades`, ym, header)
  appendFileSync(file,
    `| ${ts} | **${type}** | ${symbol} | ${qty} | $${_fmt(price)} | $${_fmt(notional)}` +
    ` | ${regime || '?'} | ${setup || '?'} | ${behavior || '?'} | ${score ?? '?'}` +
    ` | ${rsi ?? '?'} | ${vwapStr ?? '?'} | ${macd ?? '?'} | ${volR ?? '?'}` +
    ` | ${_clean(reason)} |\n`,
    'utf8'
  )
}

/**
 * Log a completed round-trip when a position closes.
 * Uses entry-time indicators stored on the position — not exit-time values.
 *
 * @param {'paper'|'live'|'backtest'} mode
 * @param {{ idx, symbol, entryTs, exitTs, entryPrice, exitPrice, qty, pnlUsd, pnlPct, riskR,
 *           durMin, exitReason, regime, setup, behavior, tradeState, rsi, vwapStr, macd, volR }} data
 */
export function logRoundTrip(mode, { idx, symbol, entryTs, exitTs, entryPrice, exitPrice, qty,
                                     pnlUsd, pnlPct, riskR, durMin, exitReason,
                                     regime, setup, behavior, tradeState, rsi, vwapStr, macd, volR }) {
  const ym       = _ym()
  const notional = _r2(qty * entryPrice)
  const pSign    = pnlUsd >= 0 ? '+' : ''
  const result   = pnlUsd > 0 ? '**WIN**' : '**LOSS**'
  const header =
    `# Round-Trip Trades — ${ym}\n\n` +
    `| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |\n` +
    `|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|`
  const file = _ensureLogFile(`${mode}/round-trip-trades`, ym, header)
  appendFileSync(file,
    `| ${idx} | ${symbol} | ${entryTs} | ${exitTs}` +
    ` | ${entryPrice} | ${exitPrice} | ${qty} | ${notional}` +
    ` | ${pSign}$${Math.abs(pnlUsd).toFixed(2)} | ${pSign}${Math.abs(pnlPct).toFixed(2)}%` +
    ` | ${riskR}R | ${durMin}m | ${_clean(exitReason)}` +
    ` | ${regime || '?'} | ${setup || '?'} | ${behavior || '?'} | ${tradeState || behavior || '?'}` +
    ` | ${rsi ?? '?'} | ${vwapStr ?? '?'} | ${macd ?? '?'} | ${volR ?? '?'} | ${result} |\n`,
    'utf8'
  )
}

/**
 * Log a skipped entry where action==='buy' was returned by the engine
 * but blocked by a whitelist/guard in the bot executor.
 * Not called for every flat-symbol bar — only for meaningful rejections.
 *
 * @param {'paper'|'live'|'backtest'} mode
 * @param {{ symbol, regime, setup, behavior, score, rsi, vwapStr, macd, volR, reason }} data
 */
export function logSkippedTrade(mode, { symbol, regime, setup, behavior, score, rsi, vwapStr, macd, volR, reason }) {
  const ym = _ym()
  const ts = _utc()
  const header =
    `# Skipped Trades — ${ym}\n\n` +
    `| Timestamp (UTC) | Symbol | Regime | Setup | Behavior | Score | RSI | VWAP | MACD | VolR | Reason |\n` +
    `|:--|:--|:--|:--|:--|--:|--:|--:|--:|--:|:--|`
  const file = _ensureLogFile(`${mode}/skipped-trades`, ym, header)
  appendFileSync(file,
    `| ${ts} | ${symbol} | ${regime || '?'} | ${setup || '?'} | ${behavior || '?'} | ${score ?? '?'}` +
    ` | ${rsi ?? '?'} | ${vwapStr ?? '?'} | ${macd ?? '?'} | ${volR ?? '?'}` +
    ` | ${_clean(reason)} |\n`,
    'utf8'
  )
}
