<template lang="pug">
.glass-box.pa6.day-trading-bot-panel
  .w-flex.align-center.justify-space-between.gap3.wrap
    div
      .text-upper.size--xs.op6 Trading intelligence
      .title2.mt1 Bot command center
    w-tag(round sm :bg-color="statusTone") {{ statusLabel }}

  p.mt2.mb1.op7 {{ summaryText }}
  .size--sm.op6(v-if="decision") Profile tuned for {{ selectedRiskProfile }} execution.

  .day-trading-bot-panel__toolbar
    .w-flex.align-center.gap2.wrap
      span.size--sm.op6 Risk profile
      w-button(
        v-for="option in riskProfiles"
        :key="option"
        xs
        round
        :outline="option !== selectedRiskProfile"
        @click="$emit('update:risk-profile', option)") {{ option }}
    w-button(xs round text :loading="loading" @click="$emit('refresh')") Refresh

  .day-trading-bot-panel__error(v-if="error") {{ error }}

  template(v-else-if="decision")
    .day-trading-bot-panel__hero
      .day-trading-bot-panel__hero-main
        .size--xs.op6 Live ticker recommendation
        .day-trading-bot-panel__action(:class="actionToneClass") {{ recommendationLabel }}
        .size--sm.op7 Confidence {{ decision.confidence }}% · Entry {{ decision.scores.entry }} · Risk {{ decision.scores.risk }}
        .day-trading-bot-panel__badges
          .bot-pill
            .size--xs.op6 Setup
            strong {{ setupLabel }}
          .bot-pill(v-if="decision.guardrails?.lowConfidence")
            .size--xs.op6 Guardrail
            strong Low confidence
          .bot-pill(v-if="decision.guardrails?.weakEvidence")
            .size--xs.op6 Guardrail
            strong Weak evidence
        .size--sm.mt2 {{ recommendationDetail }}
      .day-trading-bot-panel__hero-plan
        .bot-pill
          .size--xs.op6 Size
          strong {{ decision.executionPlan.positionSizePct }}%
        .bot-pill
          .size--xs.op6 Stop
          strong {{ decision.executionPlan.stopLossPct }}%
        .bot-pill
          .size--xs.op6 Trail
          strong {{ decision.executionPlan.trailingStopPct }}%
        .bot-pill
          .size--xs.op6 Target
          strong {{ decision.executionPlan.rewardTargetPct }}%

    .day-trading-bot-panel__grid
      .bot-stat
        .size--xs.op6 Short trend
        .title3.mt1 {{ formatPct(decision.metrics.shortTrendPct) }}%
      .bot-stat
        .size--xs.op6 Medium trend
        .title3.mt1 {{ formatPct(decision.metrics.mediumTrendPct) }}%
      .bot-stat
        .size--xs.op6 Volume ratio
        .title3.mt1 {{ formatNumber(decision.metrics.volumeRatio) }}x
      .bot-stat
        .size--xs.op6 Volatility
        .title3.mt1 {{ formatPct(decision.metrics.realizedVolatilityPct) }}%
      .bot-stat(v-if="decision.executionPlan.trimFraction")
        .size--xs.op6 Trim size
        .title3.mt1 {{ Math.round(decision.executionPlan.trimFraction * 100) }}%
      .bot-stat
        .size--xs.op6 Unrealized P/L
        .title3.mt1 {{ formatPct(decision.metrics.unrealizedPnLPct) }}%

    .day-trading-bot-panel__section
      .w-flex.align-center.justify-space-between.gap2.wrap.mb2
        .size--sm.text-bold Why the bot leans this way
        .size--xs.op6 Live decision factors
      ul.day-trading-bot-panel__reason-list
        li(v-for="reason in decision.reasons" :key="reason") {{ reason }}

    .day-trading-bot-panel__section
      .w-flex.align-center.justify-space-between.gap2.wrap.mb3
        .size--sm.text-bold Backtest snapshot
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
        .size--xs.op6.mb2(v-if="backtest.captureId") Capture {{ backtest.captureId }}

        .day-trading-bot-panel__comparison(v-if="backtestComparisons.length")
          .size--xs.op6.mb2 Risk profile comparison
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

    .day-trading-bot-panel__section
      .w-flex.align-center.justify-space-between.gap2.wrap.mb3
        .size--sm.text-bold Strategy evolution lab
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

        .day-trading-bot-panel__section
          .size--sm.text-bold.mb2 Survivors
          .day-trading-bot-panel__strategy-list
            .bot-strategy-card(v-for="item in evolution.survivors" :key="item.id")
              .w-flex.align-center.justify-space-between.gap2
                strong {{ item.id }}
                span.size--xs.op6 {{ item.family }}
              .size--sm.mt1 {{ item.description }}
              .size--sm.mt2 Score {{ item.score }} · Return {{ formatPct(item.backtestSummary.totalReturnPct) }}% · DD {{ formatPct(item.backtestSummary.maxDrawdownPct) }}% · Win {{ formatPct(item.backtestSummary.winRatePct) }}%

        .day-trading-bot-panel__section(v-if="evolution.pruned?.length")
          .size--sm.text-bold.mb2 Pruned candidates
          .day-trading-bot-panel__strategy-list
            .bot-strategy-card.bot-strategy-card--muted(v-for="item in evolution.pruned" :key="item.id")
              .w-flex.align-center.justify-space-between.gap2
                strong {{ item.id }}
                span.size--xs.op6 {{ item.family }}
              .size--sm.mt2 Score {{ item.score }} · Return {{ formatPct(item.backtestSummary.totalReturnPct) }}% · Win {{ formatPct(item.backtestSummary.winRatePct) }}%

        .day-trading-bot-panel__section(v-if="evolution.nextGeneration?.length")
          .size--sm.text-bold.mb2 Next generation ideas
          .day-trading-bot-panel__strategy-list
            .bot-strategy-card(v-for="item in evolution.nextGeneration" :key="item.id")
              .w-flex.align-center.justify-space-between.gap2
                strong {{ item.id }}
                span.size--xs.op6 {{ item.family }}
              .size--sm.mt1 {{ item.description }}
</template>

<script setup>
import { computed, watch } from 'vue'
import { shouldAutoFire, emitAutoExecutionEvent } from '@/api/bot-execution'

const props = defineProps({
  decision: {
    type: Object,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  selectedRiskProfile: {
    type: String,
    default: 'balanced'
  },
  backtest: {
    type: Object,
    default: null
  },
  backtestLoading: {
    type: Boolean,
    default: false
  },
  backtestError: {
    type: String,
    default: ''
  },
  backtestComparisons: {
    type: Array,
    default: () => []
  },
  evolution: {
    type: Object,
    default: null
  },
  evolutionLoading: {
    type: Boolean,
    default: false
  },
  evolutionError: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['refresh', 'update:risk-profile', 'run-backtest', 'run-evolution', 'auto-fire-detected'])

// Auto-fire detection when decision changes
watch(
  () => props.decision,
  (newDecision) => {
    if (newDecision) {
      const autonomousTrading = localStorage.getItem('autonomousTrading') === 'true'
      const confidence = Number(newDecision.confidence || 0)
      const isHighConfidence = confidence >= 80
      const isValidAction = ['buy', 'add', 'sell', 'exit'].includes(newDecision.action)
      
      if (autonomousTrading && isHighConfidence && isValidAction) {
        // Emit event so parent can handle auto-fire
        emitAutoExecutionEvent({
          symbol: 'unknown', // Will be set by parent
          action: newDecision.action,
          confidence,
          timestamp: new Date().toISOString()
        })
        // Notify parent component about auto-fire decision
        emit('auto-fire-detected', newDecision)
      }
    }
  }
)

const riskProfiles = ['conservative', 'balanced', 'aggressive']

const summaryText = computed(() => {
  if (props.loading) return 'Refreshing the latest bot read for this ticker.'
  if (props.error) return 'Bot signals are temporarily unavailable. You can still trade manually and retry once the API settles.'
  if (!props.decision) return 'Load a decision to see whether the setup looks actionable, defensive, or best left alone.'
  return `${recommendationLabel.value} · ${props.decision.confidence}% confidence.`
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
const recommendationLabel = computed(() => props.decision?.recommendation?.label || props.decision?.action || 'No recommendation for now')
const recommendationDetail = computed(() => props.decision?.recommendation?.detail || 'The bot is reading the latest ticker state and scoring risk in real time.')
const setupLabel = computed(() => props.decision?.setup ? props.decision.setup.replace(/-/g, ' ') : 'unclassified')

const rankedComparisons = computed(() => [...props.backtestComparisons].sort((a, b) => b.totalReturnPct - a.totalReturnPct))
const bestSurvivor = computed(() => props.evolution?.survivors?.[0] || null)

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
