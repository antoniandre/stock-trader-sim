<template lang="pug">
.autonomous-trading-toggle.bd1
  .w-flex.align-center.gap3
    .w-flex.align-center.gap2
      w-switch(
        v-model="localToggle"
        @update:model-value="handleToggle"
        :disabled="disabled"
        size="sm")
      .label
        .size--sm.text-bold(:class="{ 'op6': disabled }") Autonomous Trading
        .size--xs.op6 {{ statusText }}

    .toggle-indicator(v-if="!disabled" :class="{ active: localToggle }")
      .indicator-dot
</template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:autonomous'])

const localToggle = ref(false)
const STORAGE_KEY = 'autonomousTrading'

const statusText = computed(() => {
  return localToggle.value ? 'Auto-execute enabled' : 'Manual execution only'
})

// Initialize from localStorage on mount
onMounted(() => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored !== null) localToggle.value = stored === 'true'
})

// Handle toggle changes
const handleToggle = (value) => {
  localToggle.value = value
  localStorage.setItem(STORAGE_KEY, String(value))
  emit('update:autonomous', value)
}

// Watch for external changes
watch(
  () => props.modelValue,
  newVal => {
    if (newVal !== undefined && newVal !== localToggle.value) localToggle.value = newVal
  }
)

// Export current state getter
const getAutonomousState = () => localToggle.value

defineExpose({
  getAutonomousState
})
</script>

<style scoped lang="scss">
.autonomous-trading-toggle {
  padding: 6px 11px 6px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);

  .w-flex {width: 100%;}

  .label {flex: 1;}

  .toggle-indicator {
    width: 12px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;

    &.active {
      background: #4caf50;
      box-shadow: 0 0 8px rgba(76, 175, 80, 0.5);
    }
  }

  .indicator-dot {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
