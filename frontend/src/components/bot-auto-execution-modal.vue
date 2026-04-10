<template lang="pug">
w-dialog(
  v-model="isOpen"
  :persistent="loading"
  @keydown.esc="!loading && (isOpen = false)")
  
  template(v-slot:activator)
    //- Modal is programmatically triggered; no activator button needed

  .bot-auto-execution-modal
    //- Header
    .modal-header
      .header-title
        w-icon(icon="wi-bot") 
        .title2 Bot Execution
        w-tag(
          round
          sm
          :bg-color="confidenceTone") Confidence {{ decision.confidence }}%
      w-button.close-btn(
        icon="wi-cross"
        @click="closeModal"
        text
        round
        :disabled="loading")

    //- Body
    .modal-body
      .recommendation-box(:class="actionClass")
        .action-label {{ decision.action === 'buy' ? '🔵 BUY' : '🔴 SELL' }}
        .symbol-display {{ symbol }}
        .qty-display {{ qty }} share{{ qty === 1 ? '' : 's' }}

      .details-grid
        .detail-item
          .detail-label Confidence
          .detail-value {{ decision.confidence }}%
          .detail-bar
            .bar-fill(:style="{ width: decision.confidence + '%' }")
        
        .detail-item
          .detail-label Execution Plan
          .detail-value
            .size--sm {{ decision.executionPlan.positionSizePct }}% position
            .size--sm.op7 Stop: {{ decision.executionPlan.stopLossPct }}%
            .size--sm.op7 Target: {{ decision.executionPlan.rewardTargetPct }}%
        
        .detail-item(v-if="estimatedNotional")
          .detail-label Est. Notional
          .detail-value {{ formatCurrency(estimatedNotional) }}
        
        .detail-item(v-if="decision.marketRegime")
          .detail-label Market Regime
          .detail-value {{ decision.marketRegime }}

      //- Reasons section
      .reasons-section(v-if="decision.reasons && decision.reasons.length")
        .size--sm.text-bold.mb2 Why the bot recommends this
        ul.reasons-list
          li(v-for="reason in decision.reasons" :key="reason") {{ reason }}

      //- Toggle state display
      .toggle-state
        .size--xs.op6 Autonomous Trading: 
        w-tag(
          round
          xs
          :bg-color="autonomousTrading ? 'success' : 'warning'")
          | {{ autonomousTrading ? 'ON' : 'OFF' }}

      //- Error display
      .error-message(v-if="error")
        w-icon(icon="wi-alert-circle" color="error")
        .size--sm {{ error }}

    //- Footer / Actions
    .modal-footer
      w-button(
        @click="handleSkip"
        outline
        text
        :disabled="loading") Skip

      w-button(
        @click="handleAdjustQty"
        outline
        text
        :disabled="loading") Adjust Qty

      w-button(
        @click="handleExecute"
        :loading="loading"
        bg-color="success") 
        w-icon(icon="wi-check" left)
        | Execute
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { formatCurrency } from '@/utils/formatters'

const props = defineProps({
  modelValue: Boolean,
  decision: Object,
  symbol: String,
  qty: {
    type: Number,
    default: 0
  },
  estimatedNotional: Number,
  autonomousTrading: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  error: String
})

const emit = defineEmits(['update:modelValue', 'execute', 'skip', 'adjust-qty'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const actionClass = computed(() => {
  return {
    'recommendation-box--buy': props.decision?.action === 'buy',
    'recommendation-box--sell': props.decision?.action === 'sell'
  }
})

const confidenceTone = computed(() => {
  const confidence = props.decision?.confidence || 0
  if (confidence >= 80) return 'success'
  if (confidence >= 70) return 'warning'
  return 'info'
})

const closeModal = () => {
  if (!props.loading) {
    isOpen.value = false
  }
}

const handleExecute = () => {
  emit('execute')
}

const handleSkip = () => {
  emit('skip')
  closeModal()
}

const handleAdjustQty = () => {
  emit('adjust-qty')
  // In full implementation, could open a qty adjuster modal
}
</script>

<style scoped lang="sass">
.bot-auto-execution-modal
  display: flex
  flex-direction: column
  min-width: 400px
  max-width: 500px
  gap: 0

  .modal-header
    display: flex
    align-items: center
    justify-content: space-between
    padding: 20px
    border-bottom: 1px solid rgba(255, 255, 255, 0.1)

    .header-title
      display: flex
      align-items: center
      gap: 12px
      flex: 1

  .close-btn
    margin-left: auto

  .modal-body
    padding: 20px
    display: flex
    flex-direction: column
    gap: 16px
    max-height: 60vh
    overflow-y: auto

  .recommendation-box
    padding: 16px
    border-radius: 8px
    border: 2px solid
    text-align: center

    &--buy
      border-color: rgba(76, 175, 80, 0.5)
      background: rgba(76, 175, 80, 0.1)

    &--sell
      border-color: rgba(244, 67, 54, 0.5)
      background: rgba(244, 67, 54, 0.1)

    .action-label
      font-size: 14px
      font-weight: bold
      margin-bottom: 4px
      text-transform: uppercase

    .symbol-display
      font-size: 24px
      font-weight: bold
      margin: 8px 0

    .qty-display
      font-size: 18px
      opacity: 0.7

  .details-grid
    display: grid
    gap: 12px

  .detail-item
    padding: 12px
    border-radius: 6px
    background: rgba(255, 255, 255, 0.05)
    border: 1px solid rgba(255, 255, 255, 0.1)

    .detail-label
      font-size: 12px
      opacity: 0.6
      margin-bottom: 4px
      text-transform: uppercase

    .detail-value
      font-size: 14px
      font-weight: bold

    .detail-bar
      height: 4px
      background: rgba(255, 255, 255, 0.1)
      border-radius: 2px
      margin-top: 6px
      overflow: hidden

      .bar-fill
        height: 100%
        background: linear-gradient(90deg, #4CAF50, #2196F3)
        transition: width 0.3s ease

  .reasons-section
    padding: 12px
    border-radius: 6px
    background: rgba(255, 255, 255, 0.05)
    border: 1px solid rgba(255, 255, 255, 0.1)

    .reasons-list
      list-style: none
      padding: 0
      margin: 0

      li
        font-size: 13px
        padding: 6px 0
        padding-left: 16px
        position: relative
        opacity: 0.8

        &:before
          content: '•'
          position: absolute
          left: 0

  .toggle-state
    padding: 12px
    border-radius: 6px
    background: rgba(255, 255, 255, 0.05)
    display: flex
    align-items: center
    gap: 8px

  .error-message
    padding: 12px
    border-radius: 6px
    background: rgba(244, 67, 54, 0.1)
    border: 1px solid rgba(244, 67, 54, 0.3)
    display: flex
    align-items: center
    gap: 8px
    color: #f44336

  .modal-footer
    display: flex
    gap: 12px
    padding: 16px 20px
    border-top: 1px solid rgba(255, 255, 255, 0.1)
    justify-content: flex-end

    w-button
      min-width: 100px
</style>
