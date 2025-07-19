<template>
  <line
    :x1="startX"
    :y1="startY"
    :x2="endX"
    :y2="endY"
    :stroke="color"
    :stroke-width="lineWidth"
    :stroke-dasharray="dashArray"
    class="trend-line"
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
  isPreview: { type: Boolean, default: false }
})

const emit = defineEmits(['click', 'remove'])

const startX = computed(() => props.startPoint.x || 0)
const startY = computed(() => props.startPoint.y || 0)
const endX = computed(() => props.endPoint.x || 0)
const endY = computed(() => props.endPoint.y || 0)

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
.trend-line {
  cursor: pointer;
  transition: all 0.2s ease;
}

.trend-line:hover {
  stroke-width: 3;
}

.trend-line.selected {
  stroke-width: 3;
  filter: drop-shadow(0 0 3px currentColor);
}
</style>
