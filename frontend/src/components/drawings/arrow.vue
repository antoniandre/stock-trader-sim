<template>
  <g class="arrow">
    <line
      :x1="startX"
      :y1="startY"
      :x2="endX"
      :y2="endY"
      :stroke="color"
      :stroke-width="lineWidth"
    />
    <polygon
      :points="arrowPoints"
      :fill="color"
    />
  </g>
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

const arrowPoints = computed(() => {
  const size = 10
  const angle = Math.atan2(endY.value - startY.value, endX.value - startX.value)
  const x1 = endX.value - size * Math.cos(angle - Math.PI / 6)
  const y1 = endY.value - size * Math.sin(angle - Math.PI / 6)
  const x2 = endX.value - size * Math.cos(angle + Math.PI / 6)
  const y2 = endY.value - size * Math.sin(angle + Math.PI / 6)
  return `${endX.value},${endY.value} ${x1},${y1} ${x2},${y2}`
})
</script>
