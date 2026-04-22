<template lang="pug">
w-dialog(
  :model-value="modelValue"
  @update:model-value="onUpdateModel"
  :title="title"
  width="520")
  .order-confirmation-dialog(v-if="pending")
    w-alert.pa3.bdrs2.mb4(:success="marketGate.reason === 'open'" :warning="marketGate.reason !== 'open'")
      strong {{ environmentLabel }}
      div.mt1 {{ marketGate.message }}
      div.mt1.caption {{ providerSummary }}
    slot(name="rows")
    slot(name="notes")
    .w-flex.justify-end.gap2.mt5
      w-button(@click="onCancel" text round bg-color="error") Cancel
      w-button(
        @click="$emit('confirm')"
        :disabled="confirmDisabled"
        :loading="submitting"
        bg-color="success"
        round) {{ confirmLabel }}
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'Confirm order' },
  /** When false, inner body is hidden (parent clears pending payload before closing). */
  pending: { type: Boolean, default: false },
  marketGate: {
    type: Object,
    default: () => ({ reason: 'closed', message: '' })
  },
  environmentLabel: { type: String, default: '' },
  providerSummary: { type: String, default: '' },
  submitting: { type: Boolean, default: false },
  confirmDisabled: { type: Boolean, default: false },
  confirmLabel: { type: String, default: 'Confirm' }
})

const emit = defineEmits(['update:modelValue', 'confirm'])

function onUpdateModel(v) {
  emit('update:modelValue', v)
}

function onCancel() {
  emit('update:modelValue', false)
}
</script>

<!-- Unscoped: slot content is authored by parents; these classes render inside the dialog. -->
<style lang="scss">
.order-confirmation-dialog__grid {
  display: grid;
  gap: 0.75rem;
}

.order-confirmation-dialog__row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
</style>
