<template>
  <line
    :x1="0"
    :y1="yPosition"
    :x2="chartWidth"
    :y2="yPosition"
    :stroke="color"
    :stroke-width="lineWidth"
    :stroke-dasharray="dashArray"
    class="horizontal-line"
    :class="{ 'selected': isSelected }"
    @click="$emit('click')"
    @dblclick="$emit('remove')"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  startPoint: { type: Object, required: true },
  endPoint: { type: Object, required: true },
  color: { type: String, default: '#3B82F6' },
  lineWidth: { type: Number, default: 2 },
  lineStyle: { type: String, default: 'solid' },
  isSelected: { type: Boolean, default: false },
  isPreview: { type: Boolean, default: false },
  chartWidth: { type: Number, default: 800 }
})

const emit = defineEmits(['click', 'remove'])

const yPosition = computed(() => props.startPoint.y || 0)

const dashArray = computed(() => {
  switch (props.lineStyle) {
    case 'dashed':
      return '5,5'
    case 'dotted':
      return '2,2'
    default:
      return 'none'
  }
})
</script>

<style scoped>
.horizontal-line {
  cursor: pointer;
  transition: all 0.2s ease;
}

.horizontal-line:hover {
  stroke-width: 3;
}

.horizontal-line.selected {
  stroke-width: 3;
  filter: drop-shadow(0 0 3px currentColor);
}
</style>
