<template lang="pug">
.glass-box.pa6.day-trading-bot-panel
  header
    .w-flex.align-center.justify-space-between.gap2.wrap
      .text-upper.size--xs.op6 Trading intelligence · {{ (props.tickerSymbol || '').trim() }}
      w-button.w-button--icon(
        @click="$emit('refresh')"
        :loading="loading"
        :tooltip="loading ? 'Refreshing...' : 'Refresh'"
        text)
        icon(icon="mdi:refresh")
    .title2 Bot command center

  .day-trading-bot-panel__toolbar
    .w-flex.align-center.gap2.wrap
      span.size--sm.op6 Risk profile
      w-button.px1.lh2(
        v-for="option in riskProfiles"
        :key="option"
        sm
        round
        :outline="option !== selectedRiskProfile"
        :tooltip="riskProfileTooltip(option)"
        :tooltip-props="{ maxWidth: 360 }"
        @click="$emit('update:risk-profile', option)") {{ option }}

  .w-flex.align-center.gap2.no-grow
    w-tag.px2(round sm :bg-color="statusTone") {{ statusLabel }}
  p.mt2.mb0.op7(v-if="panelHeadline") {{ panelHeadline }}
  .day-trading-bot-panel__error(v-if="error") {{ error }}

  template(v-else-if="decision")
    section.day-trading-bot-panel__hero(aria-labelledby="bot-rec-heading")
      .size--xs.op6#bot-rec-heading Live recommendation
      .day-trading-bot-panel__action-row
        .day-trading-bot-panel__action(:class="actionToneClass")
          | {{ recommendationLabel }}
          w-button.mt-1.ml2.px2(
            v-if="showOneClickExecute"
            bg-color="success"
            :loading="executeRecommendationLoading"
            :disabled="executeRecommendationDisabled"
            @click="emit('execute-recommendation', decision)"
            :tooltip="executeRecommendationBlocked || 'Buy now (1-click)'"
            :tooltip-props="{ alignRight: true }"
            round
            sm) BUY
      p.size--sm
        span.op7 Confidence {{ decision.confidence }}%
        span.op4 · Entry {{ decision.scores.entry }} · Risk {{ decision.scores.risk }}
      .day-trading-bot-panel__context-strip
        .bot-pill
          .size--xs.op6 Setup
          strong {{ setupLabel }}
        .bot-pill(v-for="pill in guardrailPills" :key="pill.key")
          .size--xs.op6 {{ pill.label }}
          strong {{ pill.text }}
        .bot-pill(v-for="pill in executionPlanPills" :key="pill.key")
          .size--xs.op6 {{ pill.label }}
          strong {{ pill.text }}

      p.size--sm.mt2.mb0 {{ recommendationDetail }}

    section.day-trading-bot-panel__section
      h3.size--sm.text-bold.mb2 Tape &amp; position
      .day-trading-bot-panel__grid
        .bot-stat(v-for="tile in metricTiles" :key="tile.key")
          .size--xs.op6 {{ tile.label }}
          .title3.mt1 {{ tile.value }}

    section.day-trading-bot-panel__section
      .w-flex.align-center.justify-space-between.gap2.wrap.mb2
        .title3.text-upper.size--sm.op7 Decision factors
      ul.day-trading-bot-panel__reason-list
        li(v-for="reason in decision.reasons" :key="reason") {{ reason }}

    w-button.mla(round text @click="showSimulationLabDialog = true") Simulation lab

w-dialog(
  v-model="showSimulationLabDialog"
  title="Simulation lab"
  width="640"
  :persistent="backtestLoading || evolutionLoading")
  .day-trading-bot-panel__dialog-body
    section.day-trading-bot-panel__dialog-section
      .w-flex.align-center.justify-space-between.gap2.wrap.mb2
        div
          h3.size--sm.text-bold.mb0 Backtest
          p.size--xs.op6.mb0.mt1 Simulated P/L on recent history for the active risk profile.
        w-button(xs round text :loading="backtestLoading" @click="$emit('run-backtest')") Run backtest

      .day-trading-bot-panel__error(v-if="backtestError") {{ backtestError }}
      template(v-else-if="backtest")
        .day-trading-bot-panel__grid.mb3
          .bot-stat
            .size--xs.op6 Return
            .title3.mt1(:class="backtest.totalReturnPct >= 0 ? 'currency-positive' : 'currency-negative'") {{ formatPct(backtest.totalReturnPct) }}%
          .bot-stat
            .size--xs.op6 Drawdown
            .title3.mt1 {{ formatPct(backtest.maxDrawdownPct) }}%
          .bot-stat
            .size--xs.op6 Trades
            .title3.mt1 {{ backtest.tradeCount }}
          .bot-stat
            .size--xs.op6 Win rate
            .title3.mt1 {{ formatPct(backtest.winRatePct) }}%
          .bot-stat
            .size--xs.op6 Realized P/L
            .title3.mt1(:class="backtest.realizedPnL >= 0 ? 'currency-positive' : 'currency-negative'") {{ formatCurrency(backtest.realizedPnL) }}
          .bot-stat
            .size--xs.op6 Ending equity
            .title3.mt1 {{ formatCurrency(backtest.endingEquity) }}
        p.size--xs.op6.mb2(v-if="backtest.captureId") Capture {{ backtest.captureId }}

        .day-trading-bot-panel__comparison(v-if="backtestComparisons.length")
          p.size--xs.op6.mb2 Risk profile comparison (by simulated return)
          .day-trading-bot-panel__comparison-list
            .bot-comparison-card(
              v-for="item in rankedComparisons"
              :key="item.riskProfile"
              :class="{ 'bot-comparison-card--active': item.riskProfile === selectedRiskProfile }")
              .w-flex.align-center.justify-space-between.gap2
                strong {{ item.riskProfile }}
                span.size--xs.op6 {{ item.tradeCount }} trades
              .size--sm.mt1(:class="item.totalReturnPct >= 0 ? 'currency-positive' : 'currency-negative'") {{ formatPct(item.totalReturnPct) }}%
              .size--xs.op6 Drawdown {{ formatPct(item.maxDrawdownPct) }}% · Win {{ formatPct(item.winRatePct) }}%
      p.size--sm.op6(v-else-if="!backtestLoading") No backtest loaded yet — run one to see drawdown, win rate, and equity for this profile.

    w-divider.my4

    section.day-trading-bot-panel__dialog-section
      .w-flex.align-center.justify-space-between.gap2.wrap.mb2
        div
          h3.size--sm.text-bold.mb0 Strategy evolution
          p.size--xs.op6.mb0.mt1 Explores variants offline; results do not change your live recommendation until you adopt logic elsewhere.
        w-button(xs round text :loading="evolutionLoading" @click="$emit('run-evolution')") Evolve

      .day-trading-bot-panel__error(v-if="evolutionError") {{ evolutionError }}
      template(v-else-if="evolution")
        .day-trading-bot-panel__evolution-summary.mb3
          .bot-pill
            .size--xs.op6 Evaluated
            strong {{ evolution.evaluatedCount }}
          .bot-pill
            .size--xs.op6 Survivors
            strong {{ evolution.survivors.length }}
          .bot-pill(v-if="bestSurvivor")
            .size--xs.op6 Best score
            strong {{ bestSurvivor.score }}
          .bot-pill(v-if="evolution.captureId")
            .size--xs.op6 Capture
            strong {{ evolution.captureId }}

        .day-trading-bot-panel__dialog-block(
          v-for="(block, blockIdx) in evolutionBlocks"
          :key="block.key")
          w-divider.my4(v-if="blockIdx > 0")
          h4.size--sm.text-bold.mb2 {{ block.title }}
          .day-trading-bot-panel__strategy-list
            .bot-strategy-card(
              v-for="item in block.items"
              :key="item.id"
              :class="{ 'bot-strategy-card--muted': block.muted }")
              .w-flex.align-center.justify-space-between.gap2
                strong {{ item.id }}
                span.size--xs.op6 {{ item.family }}
              p.size--sm.mt1.mb0(v-if="item.description") {{ item.description }}
              p.size--sm.mt2.mb0(v-if="item.summaryLine") {{ item.summaryLine }}
      p.size--sm.op6(v-else-if="!evolutionLoading") No evolution run yet — evolve to score and rank strategy ideas for this symbol.
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { emitAutoExecutionEvent } from '@/api/bot-execution'

const showSimulationLabDialog = ref(false)

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
  executeRecommendationBlocked: { type: String, default: '' }
})

const emit = defineEmits(['refresh', 'update:risk-profile', 'run-backtest', 'run-evolution', 'auto-fire-detected', 'execute-recommendation'])

watch(
  () => props.decision,
  (newDecision) => {
    if (!newDecision) {
      showSimulationLabDialog.value = false
      return
    }

    const autonomousTrading = localStorage.getItem('autonomousTrading') === 'true'
    const confidence = Number(newDecision.confidence || 0)
    const isHighConfidence = confidence >= 80
    const isValidAction = ['buy', 'add', 'sell', 'exit', 'trim'].includes(newDecision.action)

    if (autonomousTrading && isHighConfidence && isValidAction) {
      emitAutoExecutionEvent({
        symbol: 'unknown', // Will be set by parent
        action: newDecision.action,
        confidence,
        timestamp: new Date().toISOString()
      })
      emit('auto-fire-detected', newDecision)
    }
  }
)

const riskProfiles = ['conservative', 'balanced', 'aggressive']

function riskProfileTooltip(option) {
  const key = String(option || '').toLowerCase()
  const isSelected = key === String(props.selectedRiskProfile || '').toLowerCase()
  const tooltip = {
    conservative: 'Tighter risk, smaller size, fewer marginal entries.',
    balanced: 'Default middle path.',
    aggressive: 'Larger swings allowed, bigger size / wider risk tolerance in the model.'
  }
  return tooltip[key] || ''
}

/** Shown only while loading, on error, or before a decision — avoids repeating the headline action text. */
const panelHeadline = computed(() => {
  if (props.loading) return 'Refreshing the latest bot read for this ticker.'
  if (props.error) return 'Bot signals are temporarily unavailable. You can still trade manually and retry once the API settles.'
  if (!props.decision) return 'Load a decision to see whether the setup looks actionable, defensive, or best left alone.'
  return ''
})

const statusLabel = computed(() => {
  if (props.loading) return 'syncing'
  if (props.error) return 'degraded'
  return props.decision?.marketRegime || 'ready'
})

const statusTone = computed(() => {
  if (props.loading) return 'info'
  if (props.error) return 'error'
  const regime = props.decision?.marketRegime
  if (regime === 'trend') return 'success'
  if (regime === 'breakout') return 'warning'
  if (regime === 'chop') return 'error'
  return ''
})

const actionToneClass = computed(() => `day-trading-bot-panel__action--${props.decision?.action || 'hold'}`)

/** Green hero line = bullish buy/add; offer one-click market buy aligned with autonomous path. */
const showOneClickExecute = computed(() => {
  const d = props.decision
  if (!d?.executionPlan) return false
  return ['buy', 'add'].includes(d.action)
})

const executeRecommendationDisabled = computed(
  () => props.executeRecommendationLoading || Boolean(props.executeRecommendationBlocked?.trim())
)

const recommendationLabel = computed(() => props.decision?.recommendation?.label || props.decision?.action || 'No recommendation for now')
const recommendationDetail = computed(() => props.decision?.recommendation?.detail || 'The bot is reading the latest ticker state and scoring risk in real time.')
const setupLabel = computed(() => props.decision?.setup ? props.decision.setup.replace(/-/g, ' ') : 'unclassified')

const guardrailPills = computed(() => {
  const g = props.decision?.guardrails
  if (!g) return []
  const out = []
  if (g.lowConfidence) out.push({ key: 'low-conf', label: 'Guardrail', text: 'Low confidence' })
  if (g.weakEvidence) out.push({ key: 'weak-ev', label: 'Guardrail', text: 'Weak evidence' })
  return out
})

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
  if (ep?.trimFraction) {
    tiles.push({ key: 'trim', label: 'Trim size', value: `${Math.round(ep.trimFraction * 100)}%` })
  }
  tiles.push({ key: 'upl', label: 'Unrealized P/L', value: `${formatPct(m.unrealizedPnLPct)}%` })
  return tiles
})

const rankedComparisons = computed(() => [...props.backtestComparisons].sort((a, b) => b.totalReturnPct - a.totalReturnPct))
const bestSurvivor = computed(() => props.evolution?.survivors?.[0] || null)

function evolutionSummaryLine(item, { includeDrawdown }) {
  const b = item.backtestSummary
  if (!b) return ''
  let s = `Score ${item.score} · Return ${formatPct(b.totalReturnPct)}%`
  if (includeDrawdown) s += ` · DD ${formatPct(b.maxDrawdownPct)}%`
  s += ` · Win ${formatPct(b.winRatePct)}%`
  return s
}

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
</script>

<style lang="scss" scoped>
.day-trading-bot-panel {
  display: grid;
  gap: 0.9rem;
}

.day-trading-bot-panel__toolbar,
.day-trading-bot-panel__hero,
.day-trading-bot-panel__comparison-list,
.day-trading-bot-panel__evolution-summary,
.day-trading-bot-panel__badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.day-trading-bot-panel__toolbar,
.day-trading-bot-panel__hero {
  justify-content: space-between;
  align-items: center;
}

.day-trading-bot-panel__hero {
  padding: 1rem;
  border-radius: 18px;
  background: linear-gradient(135deg, color-mix(in srgb, var(--w-primary-color) 18%, transparent), color-mix(in srgb, var(--w-base-bg-color) 86%, transparent));
}

.day-trading-bot-panel__hero-main {
  display: grid;
  gap: 0.35rem;
}

.day-trading-bot-panel__one-click {
  margin-top: 0.25rem;
}

.day-trading-bot-panel__hero-plan,
.day-trading-bot-panel__grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
}

.day-trading-bot-panel__action {
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: capitalize;
}

.day-trading-bot-panel__action--buy,
.day-trading-bot-panel__action--add {
  color: var(--w-success-color);
}

.day-trading-bot-panel__action--trim,
.day-trading-bot-panel__action--wait {
  color: var(--w-warning-color);
}

.day-trading-bot-panel__action--exit {
  color: var(--w-error-color);
}

.day-trading-bot-panel__action--hold {
  color: var(--w-primary-color);
}

.bot-stat,
.bot-pill,
.bot-strategy-card,
.bot-comparison-card {
  padding: 0.85rem 0.95rem;
  border-radius: 16px;
  background: color-mix(in srgb, var(--w-contrast-bg-color) 6%, transparent);
}

.bot-pill {
  min-width: 100px;
}

.day-trading-bot-panel__section {
  border-top: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  padding-top: 1rem;
}

.day-trading-bot-panel__section--compact {
  padding-top: 0.65rem;
}

.day-trading-bot-panel__dialog-body {
  max-height: min(72vh, 640px);
  overflow-y: auto;
  padding-right: 0.15rem;

  .day-trading-bot-panel__section:first-of-type {
    border-top: none;
    padding-top: 0;
  }
}

.day-trading-bot-panel__reason-list,
.day-trading-bot-panel__strategy-list {
  display: grid;
  gap: 0.6rem;
  margin: 0;
}

.day-trading-bot-panel__reason-list {
  padding-left: 1rem;
}

.bot-comparison-card--active {
  outline: 1px solid color-mix(in srgb, var(--w-primary-color) 45%, transparent);
}

.bot-strategy-card--muted {
  opacity: 0.72;
}

.day-trading-bot-panel__error {
  color: var(--w-error-color);
}
</style>
