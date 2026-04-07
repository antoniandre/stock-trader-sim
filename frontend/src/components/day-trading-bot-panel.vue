<template lang="pug">
.glass-box.pa6.day-trading-bot-panel
  .w-flex.align-center.justify-space-between.gap3.wrap
    div
      .text-upper.size--xs.op6 Day-trading bot
      .title2.mt1 Strategy assistant
    w-tag(round sm :bg-color="regimeColor") {{ decision?.marketRegime || 'idle' }}

  p.mt3.mb4.op7 {{ summaryText }}

  .w-flex.align-center.gap2.wrap.mb4
    span.size--sm.op6 Risk profile
    w-button(
      v-for="option in riskProfiles"
      :key="option"
      xs
      round
      :outline="option !== selectedRiskProfile"
      @click="$emit('update:risk-profile', option)") {{ option }}
    w-button.ml-auto(xs round text :loading="loading" @click="$emit('refresh')") Refresh

  .day-trading-bot-panel__error(v-if="error") {{ error }}

  template(v-else-if="decision")
    .w-flex.wrap.gap3.mb4
      .bot-stat
        .size--xs.op6 Action
        .title3.mt1 {{ decision.action }}
      .bot-stat
        .size--xs.op6 Confidence
        .title3.mt1 {{ decision.confidence }}
      .bot-stat
        .size--xs.op6 Risk
        .title3.mt1 {{ decision.scores.risk }}
      .bot-stat
        .size--xs.op6 Size
        .title3.mt1 {{ decision.executionPlan.positionSizePct }}%

    .w-flex.wrap.gap3.mb4
      .bot-stat
        .size--xs.op6 Stop
        .title3.mt1 {{ decision.executionPlan.stopLossPct }}%
      .bot-stat
        .size--xs.op6 Trail
        .title3.mt1 {{ decision.executionPlan.trailingStopPct }}%
      .bot-stat
        .size--xs.op6 Target
        .title3.mt1 {{ decision.executionPlan.rewardTargetPct }}%
      .bot-stat(v-if="decision.executionPlan.trimFraction")
        .size--xs.op6 Trim
        .title3.mt1 {{ Math.round(decision.executionPlan.trimFraction * 100) }}%

    .day-trading-bot-panel__reasons
      .size--sm.text-bold.mb2 Why it thinks that
      ul
        li(v-for="reason in decision.reasons" :key="reason") {{ reason }}

    .day-trading-bot-panel__backtest
      .w-flex.align-center.justify-space-between.gap2.wrap.mb3
        .size--sm.text-bold Backtest snapshot
        w-button(xs round text :loading="backtestLoading" @click="$emit('run-backtest')") Run backtest

      .day-trading-bot-panel__error(v-if="backtestError") {{ backtestError }}
      template(v-else-if="backtest")
        .w-flex.wrap.gap3.mb3
          .bot-stat
            .size--xs.op6 Return
            .title3.mt1(:class="backtest.totalReturnPct >= 0 ? 'currency-positive' : 'currency-negative'") {{ backtest.totalReturnPct }}%
          .bot-stat
            .size--xs.op6 Drawdown
            .title3.mt1 {{ backtest.maxDrawdownPct }}%
          .bot-stat
            .size--xs.op6 Trades
            .title3.mt1 {{ backtest.tradeCount }}
          .bot-stat
            .size--xs.op6 Equity
            .title3.mt1 {{ backtest.endingEquity }}

        .size--sm.op7(v-if="comparisonSummary.length") Profile comparison: {{ comparisonSummary }}
</template>

<script setup>
import { computed } from 'vue'

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
  }
})

defineEmits(['refresh', 'update:risk-profile', 'run-backtest'])

const riskProfiles = ['conservative', 'balanced', 'aggressive']

const summaryText = computed(() => {
  if (props.error) return 'The bot could not generate a decision yet.'
  if (!props.decision) return 'Load a decision to see whether the setup looks like a buy, trim, hold, or exit.'
  return `Current bias: ${props.decision.action} with ${props.decision.confidence}% confidence.`
})

const regimeColor = computed(() => {
  const regime = props.decision?.marketRegime
  if (regime === 'trend') return 'success'
  if (regime === 'breakout') return 'warning'
  if (regime === 'chop') return 'error'
  return ''
})

const comparisonSummary = computed(() => {
  if (!props.backtestComparisons.length) return ''
  return props.backtestComparisons
    .map(item => `${item.riskProfile}: ${item.totalReturnPct}%`)
    .join(' • ')
})
</script>

<style lang="scss" scoped>
.day-trading-bot-panel {
  display: grid;
  gap: 0.75rem;
}

.bot-stat {
  min-width: 96px;
  padding: 0.8rem 0.9rem;
  border-radius: 16px;
  background: color-mix(in srgb, var(--w-contrast-bg-color) 6%, transparent);
}

.day-trading-bot-panel__reasons ul {
  margin: 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
}

.day-trading-bot-panel__backtest {
  border-top: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  padding-top: 1rem;
}

.day-trading-bot-panel__error {
  color: var(--w-error-color);
}
</style>
