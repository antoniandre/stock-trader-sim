<template lang="pug">
.glass-box.pa5.bot-panel
  header
    .w-flex.align-center.justify-space-between.gap2.wrap.mt-4
      .text-upper.size--xs.op6 Trading intelligence · {{ context.tickerSymbol }}
      w-button.w-button--icon(
        @click="$emit('refresh')"
        :loading="loading"
        :tooltip="loading ? 'Refreshing…' : 'Refresh'"
        text)
        icon(icon="mdi:refresh")
    .title2 Bot command center

  .w-flex.align-center.gap1.no-grow.mla(v-if="!hasApiError")
    span.size--xs.text-upper.op6 Risk profile
    w-button.w-button--icon(
      xs
      text
      :aria-label="riskProfilesHelpTooltip"
      :tooltip="riskProfilesHelpTooltip"
      :tooltip-props="{ maxWidth: 360 }")
      icon(icon="mdi:help-circle-outline")
    w-select(
      v-model="riskProfileModel"
      :items="riskProfileSelectItems"
      round
      outline)

  .bot-panel__autonomous
    AutonomousTradingToggle(
      :disabled="autonomousToggleDisabled"
      @update:autonomous="emit('update:autonomous', $event)")

  //- Bot fetch / API state
  template(v-if="showServiceStatus")
    .bot-panel__regime.bot-panel__regime--service
      .bot-panel__regime-meta
        span.size--xs.op6(v-if="!hasApiError") Bot status
        w-tag.bot-panel__market-tag.w-flex.align-center.px2(round sm :bg-color="serviceStatus.tone")
          span.bot-panel__market-tag__text {{ serviceStatus.label }}
      p.bot-panel__error.mb0.mt1(v-if="hasApiError") {{ error }}

  p.mt2.mb0.op7(v-if="idleHint") {{ idleHint }}

  template(v-else-if="decision")
    section.gradient-card.gradient-card--tall
      .gradient-card__wrap
        .title3.text-upper.size--xs.op7.mt-2 Live recommendation
        .bot-panel__action-line.lh1.my1
          .bot-panel__action(:class="actionToneClass")
            | {{ recommendationLabel }}
            w-button.mt-1.ml2.px2(
              v-if="oneClickBuy.visible"
              bg-color="success"
              :loading="oneClickBuy.loading"
              :disabled="oneClickBuy.disabled"
              @click="emit('execute-recommendation', decision)"
              :tooltip="oneClickBuy.tooltip"
              :tooltip-props="{ alignRight: true }"
              round
              sm) BUY
        .text-center
          w-divider
            span Confidence {{ decision.confidence }}%
          .mt-1
            em.op4.size--xs Entry {{ decision.scores.entry }} &bull; Risk {{ decision.scores.risk }}

        .w-flex.align-center.gap1.mt2.mx-1.wrap.justify-center(v-if="marketContextTag")
          //- span.size--xs.op6 Market
          w-tag.align-center.no-grow.bd0(
            round
            sm
            :color="marketContextTag.tone || undefined"
            bg-color="contrast-o05")
            span.bot-panel__market-tag__text.text-bold {{ marketContextTag.tagText }}
            w-button.bot-panel__market-tag__help.w-button--icon(
              xs
              text
              @click.stop
              :aria-label="marketContextTag.tooltip"
              :tooltip="marketContextTag.tooltip"
              :tooltip-props="{ maxWidth: 340 }")
              icon(icon="mdi:help-circle-outline")
          w-tag.bot-panel__market-tag.w-flex.align-center.no-grow(
            v-if="guardrailTag"
            xs
            round
            outline
            color="warning")
            span.bot-panel__market-tag__text {{ guardrailTag.label }}
            w-button.bot-panel__market-tag__help.w-button--icon(
              xs
              text
              @click.stop
              :aria-label="guardrailTag.tooltip"
              :tooltip="guardrailTag.tooltip"
              :tooltip-props="{ maxWidth: 300 }")
              icon(icon="mdi:help-circle-outline")

        p.mt3.contrast-o8 {{ recommendationDetail }}

    section(aria-labelledby="bot-plan-heading")
      .title3.text-upper.size--sm.op7.mb2#bot-plan-heading Execution plan
      .w-flex.basis-zero.wrap.gap2
        .bot-panel__chip(v-for="pill in executionPlanPills" :key="pill.key")
          .size--xs.op6 {{ pill.label }}
          strong {{ pill.text }}

    section.bot-panel__section
      .title3.text-upper.size--sm.op7.mb2 Indicators
      .bot-panel__stat-grid
        .bot-panel__stat(v-for="tile in metricTiles" :key="tile.key")
          .size--xs.op6 {{ tile.label }}
          .title3.mt1 {{ tile.value }}

    section.bot-panel__section
      .title3.text-upper.size--sm.op7.mb2 Decision factors
      ul.bot-panel__reasons
        li(v-for="reason in decision.reasons" :key="reason") {{ reason }}

    w-button.mla(round text @click="ui.simulationLab.show = true") Simulation lab

w-dialog(
  v-model="ui.simulationLab.show"
  title="Simulation lab"
  width="640"
  :persistent="dialogPersistent"
  content-class="bot-panel__dialog ova")
  section.bot-panel__dialog-section
    .w-flex.align-center.justify-space-between.gap2.wrap.mb2
      div
        h3.size--sm.text-bold.mb0 Backtest
        p.size--xs.op6.mb0.mt1 Simulated P/L on recent history for the active risk profile.
      w-button(xs round text :loading="backtestLoading" @click="$emit('run-backtest')") Run backtest

    .bot-panel__error(v-if="backtestError") {{ backtestError }}
    template(v-else-if="backtest")
      .bot-panel__stat-grid.mb3
        .bot-panel__stat
          .size--xs.op6 Return
          .title3.mt1(:class="backtest.totalReturnPct >= 0 ? 'currency-positive' : 'currency-negative'") {{ formatPct(backtest.totalReturnPct) }}%
        .bot-panel__stat
          .size--xs.op6 Drawdown
          .title3.mt1 {{ formatPct(backtest.maxDrawdownPct) }}%
        .bot-panel__stat
          .size--xs.op6 Trades
          .title3.mt1 {{ backtest.tradeCount }}
        .bot-panel__stat
          .size--xs.op6 Win rate
          .title3.mt1 {{ formatPct(backtest.winRatePct) }}%
        .bot-panel__stat
          .size--xs.op6 Profit factor
          .title3.mt1 {{ backtest.profitFactor == null ? '∞' : formatNumber(backtest.profitFactor) }}
        .bot-panel__stat
          .size--xs.op6 R:R
          .title3.mt1 {{ backtest.rewardRiskRatio == null ? '∞' : formatNumber(backtest.rewardRiskRatio) }}
        .bot-panel__stat
          .size--xs.op6 Sharpe
          .title3.mt1 {{ formatNumber(backtest.sharpeAnnualized) }}
        .bot-panel__stat
          .size--xs.op6 Rejects
          .title3.mt1 {{ backtest.rejectedTradeCount || 0 }}
        .bot-panel__stat
          .size--xs.op6 Realized P/L
          .title3.mt1(:class="backtest.realizedPnL >= 0 ? 'currency-positive' : 'currency-negative'") {{ formatCurrency(backtest.realizedPnL) }}
        .bot-panel__stat
          .size--xs.op6 Ending equity
          .title3.mt1 {{ formatCurrency(backtest.endingEquity) }}
      p.size--xs.op6.mb2(v-if="backtest.captureId") Capture {{ backtest.captureId }}

      template(v-if="backtestComparisons.length")
        p.size--xs.op6.mb2 Risk profile comparison (by simulated return)
        .bot-panel__row
          .bot-panel__compare(
            v-for="item in rankedComparisons"
            :key="item.riskProfile"
            :class="{ 'bot-panel__compare--current': item.riskProfile === selectedRiskProfile }")
            .w-flex.align-center.justify-space-between.gap2
              strong {{ item.riskProfile }}
              span.size--xs.op6 {{ item.tradeCount }} trades
            .size--sm.mt1(:class="item.totalReturnPct >= 0 ? 'currency-positive' : 'currency-negative'") {{ formatPct(item.totalReturnPct) }}%
            .size--xs.op6 Drawdown {{ formatPct(item.maxDrawdownPct) }}% · Win {{ formatPct(item.winRatePct) }}% · PF {{ item.profitFactor == null ? '∞' : formatNumber(item.profitFactor) }}
      template(v-if="decision?.effectiveProfile")
        p.size--xs.op6.mb1 Active bot profile
        .bot-panel__chip.mb3
          .size--xs.op6 {{ decision.effectiveProfile.name }}
          strong {{ decision.effectiveProfile.activeGates?.length ? `${decision.effectiveProfile.activeGates.length} gate(s) active` : 'No active profile gates' }}
      template(v-if="calibrationSummary")
        .w-flex.align-center.justify-space-between.gap2.wrap.mb2
          p.size--xs.op6.mb0 Simulation calibration
          w-tag(round sm :color="calibrationTone") {{ calibrationLabel }}
        .bot-panel__stat-grid.mb3
          .bot-panel__stat
            .size--xs.op6 Accepted
            .title3.mt1 {{ calibrationSummary.acceptedEntries || 0 }}
          .bot-panel__stat
            .size--xs.op6 Rejected
            .title3.mt1 {{ calibrationSummary.rejectedEntries || 0 }}
          .bot-panel__stat
            .size--xs.op6 Latest profile
            .title3.mt1 {{ calibrationSummary.latestProfile || 'default' }}
          .bot-panel__stat
            .size--xs.op6 Checks
            .title3.mt1 {{ calibrationSummary.readiness?.passedCount || 0 }}/{{ calibrationSummary.readiness?.totalChecks || 0 }}
        .bot-panel__row.mb3(v-if="topCalibrationGates.length || topCalibrationRejects.length")
          .bot-panel__chip(v-for="item in topCalibrationGates" :key="`gate-${item.key}`")
            .size--xs.op6 Gate
            strong {{ item.key }} · {{ item.count }}
          .bot-panel__chip(v-for="item in topCalibrationRejects" :key="`reject-${item.key}`")
            .size--xs.op6 Reject
            strong {{ item.key }} · {{ item.count }}
        template(v-if="latestProfileEvents.length")
          p.size--xs.op6.mb2 Profile timeline
          .bot-panel__strategy-list.mb3
            .bot-panel__strategy(v-for="event in latestProfileEvents" :key="`${event.timestamp}-${event.action}-${event.profile}`")
              .w-flex.align-center.justify-space-between.gap2
                strong {{ event.profile || 'default' }}
                span.size--xs.op6 {{ event.action }} · {{ event.marketRegime || 'n/a' }}
              p.size--sm.mt1.mb0 {{ event.setup || 'unknown setup' }} · score {{ event.entryScore ?? '--' }} / risk {{ event.riskScore ?? '--' }}
    p.size--sm.op6(v-else-if="!backtestLoading") No backtest loaded yet — run one to see drawdown, win rate, and equity for this profile.

  w-divider.my4

  section.bot-panel__dialog-section
    .w-flex.align-center.justify-space-between.gap2.wrap.mb2
      div
        h3.size--sm.text-bold.mb0 Strategy evolution
        p.size--xs.op6.mb0.mt1 Explores variants offline; results do not change your live recommendation until you adopt logic elsewhere.
      w-button(xs round text :loading="evolutionLoading" @click="$emit('run-evolution')") Evolve

    .bot-panel__error(v-if="evolutionError") {{ evolutionError }}
    template(v-else-if="evolution")
      .bot-panel__row.mb3
        .bot-panel__chip
          .size--xs.op6 Evaluated
          strong {{ evolution.evaluatedCount }}
        .bot-panel__chip
          .size--xs.op6 Survivors
          strong {{ evolution.survivors.length }}
        .bot-panel__chip(v-if="bestSurvivor")
          .size--xs.op6 Best score
          strong {{ bestSurvivor.score }}
        .bot-panel__chip(v-if="evolution.captureId")
          .size--xs.op6 Capture
          strong {{ evolution.captureId }}

      template(v-for="(block, blockIdx) in evolutionBlocks" :key="block.key")
        w-divider.my4(v-if="blockIdx > 0")
        h4.size--sm.text-bold.mb2 {{ block.title }}
        .bot-panel__strategy-list
          .bot-panel__strategy(
            v-for="item in block.items"
            :key="item.id"
            :class="{ 'bot-panel__strategy--muted': block.muted }")
            .w-flex.align-center.justify-space-between.gap2
              strong {{ item.id }}
              span.size--xs.op6 {{ item.family }}
            p.size--sm.mt1.mb0(v-if="item.description") {{ item.description }}
            p.size--sm.mt2.mb0(v-if="item.summaryLine") {{ item.summaryLine }}
    p.size--sm.op6(v-else-if="!evolutionLoading") No evolution run yet — evolve to score and rank strategy ideas for this symbol.
</template>

<script setup>
import { computed, reactive, watch } from 'vue'
import { emitAutoExecutionEvent } from '@/api/bot-execution'
import AutonomousTradingToggle from '@/components/autonomous-trading-toggle.vue'

const ui = reactive({
  simulationLab: { show: false }
})

const props = defineProps({
  tickerSymbol: { type: String, default: '' },
  decision: { type: Object, default: null },
  loading: { type: Boolean, default: false },
  error: { type: String, default: '' },
  selectedRiskProfile: { type: String, default: 'balanced' },
  backtest: { type: Object, default: null },
  backtestLoading: { type: Boolean, default: false },
  backtestError: { type: String, default: '' },
  backtestComparisons: { type: Array, default: () => [] },
  evolution: { type: Object, default: null },
  evolutionLoading: { type: Boolean, default: false },
  evolutionError: { type: String, default: '' },
  executeRecommendationLoading: { type: Boolean, default: false },
  executeRecommendationBlocked: { type: String, default: '' },
  autonomousToggleDisabled: { type: Boolean, default: false }
})

const emit = defineEmits([
  'refresh',
  'update:risk-profile',
  'run-backtest',
  'run-evolution',
  'auto-fire-detected',
  'execute-recommendation',
  'update:autonomous'
])

const riskProfileModel = computed({
  get() {
    return props.selectedRiskProfile || 'balanced'
  },
  set(v) {
    emit('update:risk-profile', v)
  }
})

const RISK_PROFILES = ['conservative', 'balanced', 'aggressive']

const riskProfileSelectItems = RISK_PROFILES.map(value => ({
  label: value.charAt(0).toUpperCase() + value.slice(1),
  value
}))

/** Single help for all profiles (per-option tooltips moved off the control). */
const riskProfilesHelpTooltip = [
  '&bull; <strong>Conservative:</strong> tighter risk, smaller size, fewer marginal entries.',
  '&bull; <strong>Balanced:</strong> default middle path.',
  '&bull; <strong>Aggressive:</strong> larger swings allowed, bigger size / wider risk tolerance in the model.',
  '',
  'Pick a profile to re-run the bot with that risk stance.'
].join('<br>')

const context = computed(() => ({
  tickerSymbol: String(props.tickerSymbol || '').trim()
}))

const dialogPersistent = computed(() => props.backtestLoading || props.evolutionLoading)

const hasApiError = computed(() => Boolean(props.error?.trim()))

/** Loading or failed fetch — separate from market tape (choppy / trend / …). */
const showServiceStatus = computed(() => hasApiError.value || props.loading)

const serviceStatus = computed(() => {
  if (hasApiError.value) {
    return { label: 'Degraded', tone: 'error' }
  }
  return { label: 'Syncing', tone: 'info' }
})

/** Hint when there is no decision yet (never duplicates the API error string). */
const idleHint = computed(() => {
  if (hasApiError.value || props.loading) return ''
  if (!props.decision) {
    return 'Load a decision to see whether the setup looks actionable, defensive, or best left alone.'
  }
  return ''
})

/**
 * Regime labels traders recognize; tooltips avoid the word "tape".
 * "Directional" ≈ session with a clear with-trend bias (distinct from a chop / range day).
 */
function resolveMarketRegime(raw) {
  const key = typeof raw === 'string' ? raw.toLowerCase() : ''
  const catalog = {
    trend: {
      label: 'Directional',
      tone: 'success',
      tooltip:
        'The model reads a clear directional bias on this horizon (similar to what many traders call a trend day or trending conditions). Trend-following setups get more weight than fade / range plays.'
    },
    breakout: {
      label: 'Breakout',
      tone: 'warning',
      tooltip:
        'Volatility or range expansion: wider swings than a quiet grind—often higher risk/reward; watch false breaks and size.'
    },
    chop: {
      label: 'Choppy',
      tone: 'error',
      tooltip:
        'Sideways or noisy price action—often favors patience, smaller size, or mean-reversion over chasing breakouts.'
    },
    ready: {
      label: 'Neutral',
      tone: '',
      tooltip:
        'Not enough fresh structure yet to label the session type. Refresh or wait for the next decision tick.'
    }
  }

  if (key && catalog[key]) return catalog[key]

  return {
    label: raw ? String(raw).replace(/-/g, ' ') : 'Neutral',
    tone: '',
    tooltip:
      'How the model reads recent price action on this horizon; it nudges how aggressive or defensive the recommendation is.'
  }
}

function normalizeForRegimeCompare(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

/**
 * True when setup does not add information beyond the regime label (e.g. Directional + "trend").
 */
function isSetupRedundantWithRegime(regimeRaw, regimeLabel, setupPretty) {
  const rk = String(regimeRaw || '').toLowerCase()
  const setupN = normalizeForRegimeCompare(setupPretty)
  const labelN = normalizeForRegimeCompare(regimeLabel)

  if (rk === 'trend' && (setupN === 'trend' || setupN === 'trending')) return true
  if (rk === 'chop' && (setupN === 'chop' || setupN === 'choppy')) return true
  if (rk === 'breakout' && setupN.includes('breakout')) return true

  if (!labelN || !setupN) return true
  if (labelN === setupN) return true

  const minLen = 3
  if (
    labelN.length >= minLen &&
    setupN.length >= minLen &&
    (labelN.includes(setupN) || setupN.includes(labelN))
  ) {
    return true
  }

  const setupWords = [...new Set(setupN.split(' ').filter(w => w.length >= 2))]
  if (!setupWords.length) return true

  const labelWords = labelN.split(' ').filter(w => w.length >= 2)

  function wordCoveredByLabel(word) {
    if (labelN.includes(word)) return true
    return labelWords.some(lw => {
      if (lw.length < 3 || word.length < 3) return lw === word
      return lw.startsWith(word) || word.startsWith(lw)
    })
  }

  return setupWords.every(wordCoveredByLabel)
}

/** One pill: regime (+ setup only when it adds detail). */
const marketContextTag = computed(() => {
  if (!props.decision || hasApiError.value || props.loading) return null

  const regimeRaw = props.decision.marketRegime
  const regime = resolveMarketRegime(regimeRaw)
  const raw = props.decision.setup
  const setupPretty =
    raw != null && String(raw).trim() !== '' ? String(raw).replace(/-/g, ' ').trim() : ''
  const setupWorth = setupPretty && !/^unclassified$/i.test(setupPretty)

  let tagText = regime.label
  let tooltip = regime.tooltip

  if (setupWorth && !isSetupRedundantWithRegime(regimeRaw, regime.label, setupPretty)) {
    tagText = `${regime.label} · ${setupPretty}`
    tooltip = `${regime.tooltip} Pattern: ${setupPretty}.`
  }

  return {
    tagText,
    tone: regime.tone,
    tooltip
  }
})

/** Single caution pill instead of multiple guardrail boxes. */
const guardrailTag = computed(() => {
  const g = props.decision?.guardrails
  if (!g) return null
  const parts = []
  if (g.lowConfidence) parts.push('Low confidence')
  if (g.weakEvidence) parts.push('Weak evidence')
  if (!parts.length) return null
  return {
    label: parts.join(' · '),
    tooltip: `The model is flagging: ${parts.join(' and ')}. It may size down or wait for cleaner structure.`
  }
})

const oneClickBuy = computed(() => {
  const d = props.decision
  const visible = Boolean(d?.executionPlan && ['buy', 'add'].includes(d.action))
  const blocked = Boolean(props.executeRecommendationBlocked?.trim())
  return {
    visible,
    loading: props.executeRecommendationLoading,
    disabled: props.executeRecommendationLoading || blocked,
    tooltip: blocked ? props.executeRecommendationBlocked : 'Place a market buy aligned with this recommendation (if your account and gates allow it).'
  }
})

const actionToneClass = computed(() => `bot-panel__action--${props.decision?.action || 'hold'}`)

const recommendationLabel = computed(
  () => props.decision?.recommendation?.label || props.decision?.action || 'No recommendation for now'
)
const recommendationDetail = computed(
  () =>
    props.decision?.recommendation?.detail ||
    'The bot is reading the latest ticker state and scoring risk in real time.'
)
const executionPlanPills = computed(() => {
  const ep = props.decision?.executionPlan
  if (!ep) return []
  return [
    { key: 'size', label: 'Size', text: `${ep.positionSizePct}%` },
    { key: 'stop', label: 'Stop', text: `${ep.stopLossPct}%` },
    { key: 'trail', label: 'Trail', text: `${ep.trailingStopPct}%` },
    { key: 'target', label: 'Target', text: `${ep.rewardTargetPct}%` }
  ]
})

const positionTimeframeLabel = computed(() => {
  if (!props.decision?.metrics?.positionQty || props.decision.metrics.positionQty <= 0) {
    return null
  }
  return {
    label: 'Position Timeframe',
    value: 'Day Trade',
    detail: 'Intraday hold (~20 candles max before timeout)',
    tone: 'info'
  }
})

const metricTiles = computed(() => {
  const d = props.decision
  if (!d?.metrics) return []
  const m = d.metrics
  const ep = d.executionPlan
  const tiles = [
    { key: 'short', label: 'Short trend', value: `${formatPct(m.shortTrendPct)}%` },
    { key: 'med', label: 'Medium trend', value: `${formatPct(m.mediumTrendPct)}%` },
    { key: 'volr', label: 'Volume ratio', value: `${formatNumber(m.volumeRatio)}x` },
    { key: 'rvol', label: 'Volatility', value: `${formatPct(m.realizedVolatilityPct)}%` }
  ]
  if (ep?.trimFraction) tiles.push({ key: 'trim', label: 'Trim size', value: `${Math.round(ep.trimFraction * 100)}%` })
  tiles.push({ key: 'upl', label: 'Unrealized P/L', value: `${formatPct(m.unrealizedPnLPct)}%` })
  return tiles
})

const rankedComparisons = computed(() =>
  [...props.backtestComparisons].sort((a, b) => b.totalReturnPct - a.totalReturnPct)
)
const bestSurvivor = computed(() => props.evolution?.survivors?.[0] || null)
const calibrationSummary = computed(() => props.backtest?.calibration || null)
const calibrationLabel = computed(() => {
  const status = calibrationSummary.value?.readiness?.status || ''
  if (status === 'ready') return 'Promotion-ready'
  if (status === 'watchlist') return 'Watchlist'
  if (status === 'not-ready') return 'Not ready'
  return 'Unrated'
})
const calibrationTone = computed(() => {
  const status = calibrationSummary.value?.readiness?.status || ''
  if (status === 'ready') return 'success'
  if (status === 'watchlist') return 'warning'
  if (status === 'not-ready') return 'error'
  return ''
})
const topCalibrationGates = computed(() => calibrationSummary.value?.topActiveGates?.slice(0, 3) || [])
const topCalibrationRejects = computed(() => calibrationSummary.value?.topRejectReasons?.slice(0, 3) || [])
const latestProfileEvents = computed(() => props.backtest?.profileTimeline?.slice(-5).reverse() || [])

const evolutionBlocks = computed(() => {
  const ev = props.evolution
  if (!ev) return []

  const blocks = [
    {
      key: 'survivors',
      title: 'Survivors',
      muted: false,
      items: (ev.survivors || []).map(item => ({
        ...item,
        description: item.description || '',
        summaryLine: evolutionSummaryLine(item, { includeDrawdown: true })
      }))
    }
  ]

  if (ev.pruned?.length) {
    blocks.push({
      key: 'pruned',
      title: 'Pruned candidates',
      muted: true,
      items: ev.pruned.map(item => ({
        ...item,
        description: '',
        summaryLine: evolutionSummaryLine(item, { includeDrawdown: false })
      }))
    })
  }

  if (ev.nextGeneration?.length) {
    blocks.push({
      key: 'next',
      title: 'Next generation ideas',
      muted: false,
      items: ev.nextGeneration.map(item => ({
        ...item,
        description: item.description || '',
        summaryLine: ''
      }))
    })
  }

  return blocks
})

function formatPct(value) {
  return Number.isFinite(Number(value)) ? Math.round((Number(value) + Number.EPSILON) * 100) / 100 : '--'
}

function formatNumber(value) {
  return Number.isFinite(Number(value)) ? Math.round((Number(value) + Number.EPSILON) * 100) / 100 : '--'
}

function formatCurrency(value) {
  const amount = Number(value)
  if (!Number.isFinite(amount)) return '--'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount)
}

function evolutionSummaryLine(item, { includeDrawdown }) {
  const b = item.backtestSummary
  if (!b) return ''
  let s = `Score ${item.score} · Return ${formatPct(b.totalReturnPct)}%`
  if (includeDrawdown) s += ` · DD ${formatPct(b.maxDrawdownPct)}%`
  s += ` · Win ${formatPct(b.winRatePct)}%`
  if (b.calibrationStatus) s += ` · ${b.calibrationStatus}`
  if (b.topRejectReason) s += ` · top reject: ${b.topRejectReason}`
  return s
}

watch(
  () => props.decision,
  newDecision => {
    if (!newDecision) {
      ui.simulationLab.show = false
      return
    }

    const autonomousTrading = localStorage.getItem('autonomousTrading') === 'true'
    const confidence = Number(newDecision.confidence || 0)
    const isHighConfidence = confidence >= 80
    const isValidAction = ['buy', 'add', 'sell', 'exit', 'trim'].includes(newDecision.action)

    if (autonomousTrading && isHighConfidence && isValidAction) {
      emitAutoExecutionEvent({
        symbol: 'unknown',
        action: newDecision.action,
        confidence,
        timestamp: new Date().toISOString()
      })
      emit('auto-fire-detected', newDecision)
    }
  }
)
</script>

<style lang="scss">
.bot-panel {
  display: grid;
  gap: 0.875rem;

  &__row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__autonomous {
    width: 100%;
    padding-block: 4px;
    border-radius: 1.5em;
  }

  &__analysis {
    display: grid;
    gap: 0.5rem;
  }

  &__regime {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 8px 1rem;
  }

  /** Loading / degraded: single pill, right-aligned; no help icon or duplicate error copy. */
  &__regime--service {
    width: 100%;
    justify-content: flex-end;
  }

  &__regime-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
  }

  &__market-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.65rem;
    width: 100%;
  }

  &__market-tag {
    max-width: 100%;
    gap: 0.1rem;
  }

  &__market-tag__text {
    line-height: 1.25;
    text-transform: capitalize;
    padding-right: 0.1rem;
  }

  &__market-tag__help {
    opacity: 0.85;
    margin: 0 -0.15rem 0 -0.1rem;
  }

  &__hero {
    display: grid;
    gap: 0.5rem;
    padding: 1rem 0.8rem;
    border-radius: 18px;
    background: linear-gradient(
      135deg,
      color-mix(in srgb, var(--w-primary-color) 18%, transparent),
      color-mix(in srgb, var(--w-base-bg-color) 86%, transparent)
    );
  }

  &__action-line {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 8px;
  }

  &__action {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: capitalize;

    &--buy, &--add {color: var(--w-success-color);}
    &--trim, &--wait {color: var(--w-warning-color);}
    &--exit {color: var(--w-error-color);}
    &--hold {color: var(--w-primary-color);}
  }

  &__stat-grid {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }

  &__chip,
  &__stat,
  &__strategy,
  &__compare {
    padding: 0.85rem 0.95rem;
    border-radius: 16px;
    background: color-mix(in srgb, var(--w-contrast-bg-color) 6%, transparent);
  }

  &__chip {min-width: 100px;}

  &__section {
    padding-top: 1rem;
    border-top: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  }

  &__dialog {
    max-height: min(72vh, 640px);
    overflow-y: auto;
  }

  &__dialog-section:first-of-type h3 {margin-top: 0;}

  &__reasons {
    display: grid;
    gap: 0.3rem;
    padding-left: 1rem;
  }
  &__strategy-list {
    display: grid;
    gap: 0.6rem;
  }

  &__compare--current {
    outline: 1px solid color-mix(in srgb, var(--w-primary-color) 45%, transparent);
  }

  &__strategy--muted {opacity: 0.72;}
  &__error {color: var(--w-error-color);}
}
</style>
