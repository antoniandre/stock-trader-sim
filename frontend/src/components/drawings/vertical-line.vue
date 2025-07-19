<template>
  <line
    :x1="xPosition"
    :y1="0"
    :x2="xPosition"
    :y2="chartHeight"
    :stroke="color"
    :stroke-width="lineWidth"
    :stroke-dasharray="dashArray"
    class="vertical-line"
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
  chartHeight: { type: Number, default: 600 }
})

const emit = defineEmits(['click', 'remove'])

const xPosition = computed(() => props.startPoint.x || 0)

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
.vertical-line {
  cursor: pointer;
  transition: all 0.2s ease;
}

.vertical-line:hover {
  stroke-width: 3;
}

.vertical-line.selected {
  stroke-width: 3;
  filter: drop-shadow(0 0 3px currentColor);
}
</style>
