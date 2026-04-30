/**
 * Shared report builder used by live-bot.mjs (session reports) and
 * run-100-trades.mjs (backtest reports).
 *
 * Both callers normalize their trade records to the shared schema via
 * normalizeLiveTrade() or normalizeBTTrade(), then call buildReport().
 *
 * Normalized trade schema:
 * {
 *   symbol      string
 *   setup       string
 *   regime      string
 *   entryPrice  number
 *   exitPrice   number
 *   qty         number
 *   notional    number
 *   pnlUsd      number
 *   pnlPct      number
 *   riskR       number
 *   durMin      number
 *   entryTs     string   "YYYY-MM-DD HH:MM" UTC
 *   exitTs      string   "YYYY-MM-DD HH:MM" UTC
 *   orderType   string
 *   exitReason  string
 *   behavior    string   (behaviorProfile)
 *   tradeState  string
 *   rsi         number|null
 *   vwap        number|null
 *   vwapAbove   boolean
 *   macd        number|null
 *   volR        number|null
 *   confidence  number|null
 *   status      'WIN'|'LOSS'
 * }
 *
 * reportCfg keys:
 *   mode              'paper'|'live'|'backtest'
 *   runDate           string (ISO)
 *   configName        string
 *   broker            string
 *   timeframe         string
 *   riskProfile       string
 *   startEquity       number
 *   symbolsCount      number
 *   allowedProfiles   string[]
 *   allowedSetups     string[]
 *   strategyParams    object
 *   rollingWindowTrades number
 *   -- backtest-only (all optional) --
 *   targetTrades      number
 *   lookbackDays      number
 *   universe          string
 *   symbolsScanned    number
 *   behaviorMode      string
 *   behaviorFilter    string[]
 *   setupFilter       string[]
 *   timeFilter        string[]
 *   lastEntryUtcMin   number
 *   excludedSymbols   string[]
 *   skippedSymbols    { symbol, reason }[]
 *   slippagePct       number
 *   promotionRows     object[]   (walk-forward check rows)
 *   slippageScenarios object[]   (slippage sensitivity rows)
 *
 * @module report-builder
 */

// ── Helpers ───────────────────────────────────────────────────────────────────

function r2(v)  { return Math.round((+v + Number.EPSILON) * 100) / 100 }
function avg(arr) { return arr.length ? arr.reduce((s, v) => s + v, 0) / arr.length : 0 }

function targetStatus(pass, near) { return pass ? '✅' : near ? '⚠️' : '❌' }

// ── Normalizers ───────────────────────────────────────────────────────────────

/**
 * Normalize a live-bot trade (allTrades entry) to the shared schema.
 * Live trades already use the new field names but `reason`/`heldMin` differ.
 */
export function normalizeLiveTrade(t) {
  return {
    symbol:     t.symbol,
    setup:      t.setup,
    regime:     t.regime,
    entryPrice: t.entryPrice,
    exitPrice:  t.exitPrice,
    qty:        t.qty,
    notional:   t.notional,
    pnlUsd:     t.pnlUsd,
    pnlPct:     t.pnlPct,
    riskR:      t.riskR,
    durMin:     t.durMin   ?? t.heldMin,
    entryTs:    t.entryTs,
    exitTs:     t.exitTs,
    orderType:  t.orderType || 'market',
    exitReason: t.exitReason ?? t.reason,
    behavior:   t.behavior  ?? t.behaviorProfile ?? 'neutral',
    tradeState: t.tradeState,
    rsi:        t.rsi,
    vwap:       t.vwap,
    vwapAbove:  t.vwapAbove,
    macd:       t.macd,
    volR:       t.volR      ?? t.volRatio,
    confidence: t.confidence,
    status:     t.status,
  }
}

/**
 * Normalize a backtest trade (completedTrades entry from run-100-trades) to
 * the shared schema.  Field mapping:
 *   behaviorProfile → behavior
 *   volRatio        → volR
 *   vwapPos         → vwapAbove (boolean)
 *   entryTime/exitTime (ISO) → entryTs/exitTs ("YYYY-MM-DD HH:MM")
 */
export function normalizeBTTrade(t) {
  const toTs = iso => iso ? iso.slice(0, 16).replace('T', ' ') : '?'
  return {
    symbol:     t.symbol,
    setup:      t.setup,
    regime:     t.regime,
    entryPrice: t.entryPrice,
    exitPrice:  t.exitPrice,
    qty:        t.qty,
    notional:   t.notional,
    pnlUsd:     t.pnlUsd,
    pnlPct:     t.pnlPct,
    riskR:      t.riskR,
    durMin:     t.durMin,
    entryTs:    toTs(t.entryTime),
    exitTs:     toTs(t.exitTime),
    orderType:  t.orderType || 'market',
    exitReason: t.exitReason,
    behavior:   t.behaviorProfile ?? 'neutral',
    tradeState: t.tradeState ?? t.behaviorProfile ?? 'neutral',
    rsi:        t.rsi,
    vwap:       t.vwap,
    vwapAbove:  t.vwapPos === 'above',
    macd:       t.macd,
    volR:       t.volRatio,
    confidence: t.confidence,
    status:     t.status,
  }
}

// ── Core builder ──────────────────────────────────────────────────────────────

/**
 * Build a full Markdown report from a normalized trades array + config.
 * Returns the Markdown string; the caller writes it to disk.
 *
 * @param {Array}  trades    Normalized trade records (see schema above)
 * @param {Object} cfg       Report configuration (see module docblock)
 * @returns {string|null}    Markdown, or null if no trades
 */
export function buildReport(trades, cfg) {
  const total = trades.length
  if (total === 0) return null

  const {
    mode        = 'paper',
    runDate     = new Date().toISOString(),
    configName  = '',
    broker      = '',
    timeframe   = '5Min',
    riskProfile = 'balanced',
    startEquity = 100_000,
    symbolsCount,
    allowedProfiles = [],
    allowedSetups   = [],
    strategyParams  = {},
    rollingWindowTrades = 4,
    // backtest-only
    targetTrades, lookbackDays, universe, symbolsScanned, behaviorMode,
    behaviorFilter = [], setupFilter = [], timeFilter = [], lastEntryUtcMin,
    excludedSymbols = [], skippedSymbols = [],
    slippagePct = 0.05,
    promotionRows = [],
    slippageScenarios = [],
  } = cfg

  const wins        = trades.filter(t => t.status === 'WIN')
  const losses      = trades.filter(t => t.status === 'LOSS')
  const netPnL      = r2(trades.reduce((s, t) => s + t.pnlUsd, 0))
  const netPnLPct   = r2((netPnL / startEquity) * 100)
  const grossProfit = r2(wins.reduce((s, t) => s + t.pnlUsd, 0))
  const grossLoss   = r2(Math.abs(losses.reduce((s, t) => s + t.pnlUsd, 0)))
  const winRate     = r2(wins.length / total * 100)
  const profitFactor = grossLoss > 0 ? r2(grossProfit / grossLoss) : grossProfit > 0 ? '∞' : '0'
  const avgWin      = wins.length   ? r2(grossProfit / wins.length)   : 0
  const avgLoss     = losses.length ? r2(grossLoss   / losses.length) : 0
  const payoffRatio = avgLoss > 0 ? r2(avgWin / avgLoss) : '∞'
  const expectancy  = r2(netPnL / total)
  const avgConf     = r2(avg(trades.map(t => t.confidence ?? 0)))
  const avgDurMin   = r2(avg(trades.map(t => t.durMin)))
  const avgRiskR    = r2(avg(trades.map(t => t.riskR || 0)))
  const avgPlannedRR = r2(avg(trades.map(t =>
    (strategyParams.rewardTargetPct && strategyParams.stopLossPct)
      ? strategyParams.rewardTargetPct / strategyParams.stopLossPct
      : 2.0
  )))

  // Max drawdown
  let peak = startEquity, equity = startEquity, maxDD = 0
  for (const t of trades) {
    equity += t.pnlUsd
    if (equity > peak) peak = equity
    const dd = peak > 0 ? ((peak - equity) / peak) * 100 : 0
    if (dd > maxDD) maxDD = dd
  }
  maxDD = r2(maxDD)

  // Sharpe (annualised from daily returns)
  const dailyPnlMap = {}
  for (const t of trades) {
    const day = (t.exitTs || '').slice(0, 10)
    if (day) { dailyPnlMap[day] = (dailyPnlMap[day] || 0) + t.pnlUsd }
  }
  const dailyReturns = Object.values(dailyPnlMap).map(p => (p / startEquity) * 100)
  const meanDR = avg(dailyReturns)
  const stdDR  = dailyReturns.length > 1
    ? Math.sqrt(dailyReturns.reduce((s, r) => s + (r - meanDR) ** 2, 0) / (dailyReturns.length - 1))
    : 0
  const sharpe = stdDR > 0 ? r2((meanDR / stdDR) * Math.sqrt(252)) : 'N/A'

  // Days active
  const activeDays = Object.keys(dailyPnlMap).length || 1
  const tradesPerDay = r2(total / activeDays)

  // Breakdown maps
  const symMap = {}, setupMap = {}, regimeMap = {}, behaviorMap = {}, tradeStateMap = {}, exitMap = {}
  const timeSlots = {
    'Open  9:30–10:30':    { t: 0, w: 0, pnl: 0 },
    'Mid  10:30–11:30':    { t: 0, w: 0, pnl: 0 },
    'Midday 11:30–13:00':  { t: 0, w: 0, pnl: 0 },
    'Aft  13:00–14:00':    { t: 0, w: 0, pnl: 0 },
    'Late 14:00–15:30':    { t: 0, w: 0, pnl: 0 },
  }

  function etSlot(utcStr) {
    if (!utcStr || utcStr === '?') return null
    const [, time] = utcStr.split(' ')
    if (!time) return null
    const [h, m] = time.split(':').map(Number)
    const etMin  = h * 60 + m - 4 * 60   // UTC → ET (summer / EDT)
    if (etMin >= 9*60+30  && etMin < 10*60+30) return 'Open  9:30–10:30'
    if (etMin >= 10*60+30 && etMin < 11*60+30) return 'Mid  10:30–11:30'
    if (etMin >= 11*60+30 && etMin < 13*60)    return 'Midday 11:30–13:00'
    if (etMin >= 13*60    && etMin < 14*60)    return 'Aft  13:00–14:00'
    if (etMin >= 14*60    && etMin < 15*60+30) return 'Late 14:00–15:30'
    return null
  }

  for (const t of trades) {
    const sym = t.symbol
    if (!symMap[sym]) symMap[sym] = { t: 0, w: 0, pnl: 0, gp: 0, gl: 0 }
    symMap[sym].t++; symMap[sym].pnl += t.pnlUsd
    if (t.status === 'WIN') { symMap[sym].w++; symMap[sym].gp += t.pnlUsd }
    else symMap[sym].gl += Math.abs(t.pnlUsd)

    const su = t.setup || 'unknown'
    if (!setupMap[su]) setupMap[su] = { t: 0, w: 0, pnl: 0 }
    setupMap[su].t++; setupMap[su].pnl += t.pnlUsd; if (t.status === 'WIN') setupMap[su].w++

    const rg = t.regime || 'unknown'
    if (!regimeMap[rg]) regimeMap[rg] = { t: 0, w: 0, pnl: 0 }
    regimeMap[rg].t++; regimeMap[rg].pnl += t.pnlUsd; if (t.status === 'WIN') regimeMap[rg].w++

    const bv = t.behavior || 'neutral'
    if (!behaviorMap[bv]) behaviorMap[bv] = { t: 0, w: 0, pnl: 0 }
    behaviorMap[bv].t++; behaviorMap[bv].pnl += t.pnlUsd; if (t.status === 'WIN') behaviorMap[bv].w++

    const ts2 = t.tradeState || bv
    if (!tradeStateMap[ts2]) tradeStateMap[ts2] = { t: 0, w: 0, pnl: 0 }
    tradeStateMap[ts2].t++; tradeStateMap[ts2].pnl += t.pnlUsd; if (t.status === 'WIN') tradeStateMap[ts2].w++

    exitMap[t.exitReason] = (exitMap[t.exitReason] || 0) + 1

    const slot = etSlot(t.entryTs)
    if (slot && timeSlots[slot]) {
      timeSlots[slot].t++; timeSlots[slot].pnl += t.pnlUsd; if (t.status === 'WIN') timeSlots[slot].w++
    }
  }

  // ── Target metric check ─────────────────────────────────────────────────────
  const pfNum     = profitFactor === '∞' ? Infinity : Number(profitFactor)
  const sharpeNum = sharpe === 'N/A' ? 0 : Number(sharpe)
  const rrTarget  = mode === 'backtest' ? avgPlannedRR : avgRiskR

  const targetRows = [
    ['Net P&L',       'positive',  `$${netPnL >= 0 ? '+' : ''}${netPnL}`,
      netPnL > 0,     netPnL >= -50],
    ['Win rate',      '45–60%',    `${winRate}%`,
      winRate >= 45 && winRate <= 60,  winRate >= 40 && winRate < 45],
    ['Profit factor', '≥ 1.3',     `${profitFactor}`,
      pfNum >= 1.3,   pfNum >= 1.0 && pfNum < 1.3],
    ['Sharpe (ann.)', '> 1.5',     `${sharpe}`,
      sharpeNum > 1.5, sharpeNum > 0.5 && sharpeNum <= 1.5],
    ['R:R',           '2:1 – 3:1', `${rrTarget}:1 ${mode === 'backtest' ? 'planned' : 'avg'}`,
      rrTarget >= 2 && rrTarget <= 3,  rrTarget >= 1.5 && rrTarget < 2],
    ['Max drawdown',  '< 10%',     `${maxDD}%`,
      maxDD < 10,     maxDD >= 10 && maxDD < 15],
    ['Expectancy',    'positive',  `$${expectancy >= 0 ? '+' : ''}${expectancy}/trade`,
      expectancy > 0, expectancy >= -5],
  ]
  const allPass = targetRows.every(([,,,pass]) => pass)

  // ── Markdown build ──────────────────────────────────────────────────────────
  const verdict = netPnL > 0
    ? `✅ **PROFITABLE** — net gain of $${netPnL} (+${netPnLPct}%) over ${total} trades`
    : `❌ **UNPROFITABLE** — net loss of $${Math.abs(netPnL)} (${netPnLPct}%) over ${total} trades`

  const modeLabel  = mode === 'live' ? 'LIVE 🔴' : mode === 'paper' ? 'PAPER 💵' : 'Backtest'
  const totalLabel = mode === 'backtest' ? `${total} BUY+SELL Round-Trip Trades` : `${total} Round-Trip Trades`

  let md = `# ${mode === 'backtest' ? 'Bot Trade Report' : 'Session Report'} — ${totalLabel}\n\n`
  md += `> **Generated:** ${runDate}  \n`

  if (mode === 'backtest') {
    md += `> **Risk profile:** ${riskProfile} | **Capital:** $${startEquity.toLocaleString()} | **Timeframe:** ${timeframe} | **Mode:** Alpaca historical bars (IEX feed)\n`
    md += `> **Target trades:** ${targetTrades ?? '?'} | **Lookback:** ${lookbackDays ?? '?'} days | **Universe:** ${universe ?? '?'} | **Symbols scanned:** ${symbolsScanned ?? symbolsCount ?? '?'} | **Behavior classifier:** ${behaviorMode ?? '?'}\n`
    md += `> **Behavior entry filter:** ${behaviorFilter.length ? behaviorFilter.join(', ') : 'none'}\n\n`
    md += `> **Setup filter:** ${setupFilter.length ? setupFilter.join(', ') : 'none'} | **Time filter:** ${timeFilter.length ? timeFilter.join(', ') : 'none'} | **Last entry UTC min:** ${lastEntryUtcMin ?? 'default'} | **Excluded symbols:** ${excludedSymbols.length ? excludedSymbols.join(', ') : 'none'}\n\n`
    md += `> **Strategy params:** \`${JSON.stringify(strategyParams)}\`\n\n`
  } else {
    md += `> **Mode:** ${modeLabel} | **Broker:** ${broker} | **Timeframe:** ${timeframe}  \n`
    if (configName) md += `> **Config:** ${configName}  \n`
    md += `> **Risk profile:** ${riskProfile} | **Starting equity:** $${startEquity.toLocaleString()} | **Universe:** ${symbolsCount ?? '?'} symbols  \n`
    md += `> **Profiles:** ${allowedProfiles.join(', ')} | **Setups:** ${allowedSetups.join(', ')}  \n`
    md += `> **Strategy params:** \`${JSON.stringify(strategyParams)}\`\n\n`
  }

  md += `## Verdict\n\n${verdict}\n\n`

  md += `## Summary Statistics\n\n`
  md += `| Metric | Value |\n|:--|--:|\n`
  md += `| Total round-trip trades | ${total} |\n`
  md += `| Win rate | ${winRate}% (${wins.length}W / ${losses.length}L) |\n`
  md += `| Net P&L | $${netPnL >= 0 ? '+' : ''}${netPnL} (${netPnLPct >= 0 ? '+' : ''}${netPnLPct}%) |\n`
  md += `| Gross profit | $${grossProfit} |\n`
  md += `| Gross loss | $${grossLoss} |\n`
  md += `| Profit factor | ${profitFactor} |\n`
  md += `| Avg win | $${avgWin} |\n`
  md += `| Avg loss | $${avgLoss} |\n`
  md += `| Payoff ratio | ${payoffRatio}:1 |\n`
  md += `| Expectancy | $${expectancy >= 0 ? '+' : ''}${expectancy} / trade |\n`
  md += `| Max drawdown | ${maxDD}% |\n`
  md += `| Sharpe ratio (ann.) | ${sharpe} |\n`
  if (mode === 'backtest') md += `| Trades / active day | ${tradesPerDay} |\n`
  md += `| Avg confidence | ${avgConf}% |\n`
  md += `| Avg trade duration | ${avgDurMin} min |\n`
  if (mode === 'backtest') md += `| Avg planned R:R | ${avgPlannedRR}:1 |\n`
  md += `| Avg risk ratio | ${avgRiskR}R |\n`
  md += `| Starting equity | $${startEquity.toLocaleString()} |\n`
  md += `| Ending equity | $${r2(startEquity + netPnL).toLocaleString()} |\n\n`

  md += `## Target Metric Check\n\n`
  md += `| Metric | Target | Value | Status |\n|:--|--:|:--|:--|\n`
  for (const [metric, target, value, pass, near] of targetRows) {
    md += `| ${metric} | ${target} | ${value} | ${targetStatus(pass, near)} |\n`
  }
  md += '\n'
  if (allPass) {
    md += `> **All targets passed.** Ready for paper-trade validation.\n\n`
  } else {
    const missed = targetRows.filter(([,,,p]) => !p).map(([m]) => m).join(', ')
    md += `> **Targets not yet met:** ${missed}\n\n`
  }

  md += `## Time-of-Day Breakdown (ET)\n\n`
  md += `| Window | Trades | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|\n`
  for (const [slot, s] of Object.entries(timeSlots)) {
    if (s.t === 0) continue
    const pnl = r2(s.pnl)
    md += `| ${slot} | ${s.t} | ${r2(s.w / s.t * 100)}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${r2(s.pnl / s.t)} |\n`
  }
  md += '\n'

  md += `## Per-Symbol Breakdown\n\n`
  md += `| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |\n|:--|--:|--:|--:|--:|--:|--:|:--|\n`
  for (const [sym, s] of Object.entries(symMap).sort((a, b) => b[1].pnl - a[1].pnl)) {
    const pnl = r2(s.pnl), exp = r2(s.pnl / s.t)
    const pf  = s.gl > 0 ? r2(s.gp / s.gl) : s.gp > 0 ? '∞' : '0'
    const winPct = r2(s.w / s.t * 100)
    const elig = s.t < rollingWindowTrades
      ? 'watch'
      : (pnl > 0 && exp > 0 && winPct >= 40 ? 'eligible' : 'throttle')
    md += `| ${sym} | ${s.t} | ${s.w} | ${winPct}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${exp >= 0 ? '+' : ''}${exp} | ${pf} | ${elig} |\n`
  }

  if (skippedSymbols.length) {
    md += `\n## Skipped Symbols\n\n`
    md += `| Symbol | Reason |\n|:--|:--|\n`
    for (const sk of skippedSymbols) md += `| ${sk.symbol} | ${sk.reason} |\n`
  }

  md += `\n## Setup Performance\n\n`
  md += `| Setup | Trades | Wins | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|--:|\n`
  for (const [su, s] of Object.entries(setupMap)) {
    const pnl = r2(s.pnl)
    md += `| ${su} | ${s.t} | ${s.w} | ${r2(s.w / s.t * 100)}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${r2(s.pnl / s.t)} |\n`
  }

  md += `\n## Regime Performance\n\n`
  md += `| Regime | Trades | Wins | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|--:|\n`
  for (const [rg, s] of Object.entries(regimeMap).sort((a, b) => b[1].pnl - a[1].pnl)) {
    const pnl = r2(s.pnl)
    md += `| ${rg} | ${s.t} | ${s.w} | ${r2(s.w / s.t * 100)}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${r2(s.pnl / s.t)} |\n`
  }

  md += `\n## Symbol Behavior Profile Performance\n\n`
  md += `| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|--:|\n`
  for (const [bv, s] of Object.entries(behaviorMap).sort((a, b) => b[1].pnl - a[1].pnl)) {
    const pnl = r2(s.pnl)
    md += `| ${bv} | ${s.t} | ${s.w} | ${r2(s.w / s.t * 100)}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${r2(s.pnl / s.t)} |\n`
  }

  md += `\n## Dynamic Trade-State Performance\n\n`
  md += `| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |\n|:--|--:|--:|--:|--:|--:|\n`
  for (const [ts2, s] of Object.entries(tradeStateMap).sort((a, b) => b[1].pnl - a[1].pnl)) {
    const pnl = r2(s.pnl)
    md += `| ${ts2} | ${s.t} | ${s.w} | ${r2(s.w / s.t * 100)}% | $${pnl >= 0 ? '+' : ''}${pnl} | $${r2(s.pnl / s.t)} |\n`
  }

  // Walk-forward (backtest only)
  if (promotionRows.length) {
    md += `\n## Walk-Forward Promotion Check\n\n`
    md += `First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.\n\n`
    md += `| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |\n`
    md += `|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|\n`
    for (const row of promotionRows.slice(0, 30)) {
      md += `| ${row.dimension} | ${row.key} | ${row.train.total} | ${row.train.pf} | $${row.train.expectancy >= 0 ? '+' : ''}${row.train.expectancy} | ${row.test.total} | ${row.test.pf} | $${row.test.expectancy >= 0 ? '+' : ''}${row.test.expectancy} | ${row.test.maxDD}% | ${row.testSlip5.pf} | ${row.verdict} |\n`
    }
  }

  // Slippage sensitivity (backtest only)
  if (slippageScenarios.length) {
    md += `\n## Slippage Sensitivity\n\n`
    md += `Additional slippage is applied on top of the built-in ${slippagePct}% per-side model.\n\n`
    md += `| Extra slippage | Adjusted net P&L | Adjusted PF |\n|:--|--:|--:|\n`
    for (const s of slippageScenarios) {
      md += `| +${s.extraBpsEachWay} bps/side | $${s.adjustedNet >= 0 ? '+' : ''}${s.adjustedNet} | ${s.adjustedPF} |\n`
    }
  }

  md += `\n## Exit Reason Breakdown\n\n`
  md += `| Exit Reason | Count |\n|:--|--:|\n`
  for (const [reason, count] of Object.entries(exitMap).sort((a, b) => b[1] - a[1])) {
    md += `| ${reason} | ${count} |\n`
  }

  md += `\n## Trade Log\n\n`
  md += `| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |\n`
  md += `|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|\n`
  trades.forEach((t, idx) => {
    const pSign    = t.pnlUsd >= 0 ? '+' : ''
    const vwapMark = t.vwapAbove ? '↑' : '↓'
    md += `| ${idx + 1} | ${t.symbol} | ${t.entryTs || '?'} | ${t.exitTs || '?'}` +
      ` | ${t.entryPrice} | ${t.exitPrice} | ${t.qty} | ${t.notional}` +
      ` | ${pSign}$${Math.abs(t.pnlUsd).toFixed(2)} | ${pSign}${Math.abs(t.pnlPct).toFixed(2)}%` +
      ` | ${t.riskR}R | ${t.durMin}m | ${t.orderType || 'market'} | ${t.exitReason}` +
      ` | ${t.regime || '?'} | ${t.setup || '?'} | ${t.behavior || 'neutral'} | ${t.tradeState || t.behavior || 'neutral'}` +
      ` | ${t.rsi ?? '?'} | ${vwapMark}${t.vwap ?? '?'} | ${t.macd ?? '?'} | ${t.volR ?? '?'} | **${t.status}** |\n`
  })

  md += `\n## Readiness Assessment\n\n`
  if (pfNum >= 1.5) {
    md += `- ✅ **Profit factor ${profitFactor}** — healthy; validate on a fresh out-of-sample date range before going live\n`
  } else if (pfNum >= 1.3) {
    md += `- ✅ **Profit factor ${profitFactor} ≥ 1.3** — meets target; aim for ≥ 1.5 before live capital\n`
  } else {
    md += `- ⚠️ **Profit factor ${profitFactor} < 1.3** — needs further tuning or filter improvement\n`
  }
  if (avgRiskR >= 1.0) {
    md += `- ✅ **Avg R = ${avgRiskR}R** — exits are capturing meaningful profit relative to risk\n`
  } else {
    md += `- ⚠️ **Avg R = ${avgRiskR}R < 1R** — exiting before reaching the 2× target; consider widening timeout or using trailing exit\n`
  }

  const source = mode === 'backtest' ? '`scripts/run-100-trades.mjs` | Alpaca IEX feed' : `\`scripts/live-bot.mjs\` | ${mode === 'live' ? 'Live broker' : 'Alpaca paper'}`
  md += `\n---\n*Generated by ${source} | Slippage: ${slippagePct} bps | ${runDate}*\n`

  return md
}

/**
 * Return true if all 7 target metrics pass for this trade set.
 * Used to build the filename suffix (ok | fail).
 *
 * @param {Array}  trades       Normalized trade records
 * @param {number} startEquity
 * @param {Object} [opts]
 * @param {'backtest'|'paper'|'live'} [opts.mode]   Default 'paper'
 * @param {number} [opts.plannedRR]  For backtests, the configured R:R ratio
 *                                   (rewardTargetPct / stopLossPct). When
 *                                   provided the R:R target uses this value
 *                                   instead of the realized avg riskR.
 * @returns {boolean}
 */
export function allTargetsPassed(trades, startEquity, { mode = 'paper', plannedRR } = {}) {
  if (!trades.length) return false
  const wins        = trades.filter(t => t.status === 'WIN')
  const losses      = trades.filter(t => t.status === 'LOSS')
  const netPnL      = r2(trades.reduce((s, t) => s + t.pnlUsd, 0))
  const winRate     = r2(wins.length / trades.length * 100)
  const grossProfit = wins.reduce((s, t) => s + t.pnlUsd, 0)
  const grossLoss   = Math.abs(losses.reduce((s, t) => s + t.pnlUsd, 0))
  const pf          = grossLoss > 0 ? grossProfit / grossLoss : grossProfit > 0 ? Infinity : 0
  const avgRiskR    = r2(avg(trades.map(t => t.riskR || 0)))
  const rrCheck     = (mode === 'backtest' && plannedRR != null) ? plannedRR : avgRiskR
  const expectancy  = r2(netPnL / trades.length)

  let peak = startEquity, equity = startEquity, maxDD = 0
  for (const t of trades) {
    equity += t.pnlUsd
    if (equity > peak) peak = equity
    const dd = peak > 0 ? ((peak - equity) / peak) * 100 : 0
    if (dd > maxDD) maxDD = dd
  }

  const dailyPnlMap = {}
  for (const t of trades) {
    const day = (t.exitTs || '').slice(0, 10)
    if (day) dailyPnlMap[day] = (dailyPnlMap[day] || 0) + t.pnlUsd
  }
  const dailyReturns = Object.values(dailyPnlMap).map(p => (p / startEquity) * 100)
  const meanDR = avg(dailyReturns)
  const stdDR  = dailyReturns.length > 1
    ? Math.sqrt(dailyReturns.reduce((s, r) => s + (r - meanDR) ** 2, 0) / (dailyReturns.length - 1))
    : 0
  const sharpe = stdDR > 0 ? (meanDR / stdDR) * Math.sqrt(252) : 0

  return netPnL > 0
    && winRate >= 45 && winRate <= 60
    && pf >= 1.3
    && sharpe > 1.5
    && rrCheck >= 2 && rrCheck <= 3
    && maxDD < 10
    && expectancy > 0
}
