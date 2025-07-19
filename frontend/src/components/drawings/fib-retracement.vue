<template>
  <g class="fib-retracement">
    <line
      :x1="startX"
      :y1="startY"
      :x2="endX"
      :y2="endY"
      :stroke="color"
      :stroke-width="lineWidth"
    />
    <line
      v-for="(level, index) in fibLevels"
      :key="index"
      :x1="startX"
      :y1="startY + (endY - startY) * level"
      :x2="endX"
      :y2="startY + (endY - startY) * level"
      :stroke="color"
      :stroke-width="1"
      stroke-dasharray="2,2"
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

const fibLevels = [0.236, 0.382, 0.5, 0.618, 0.786]
</script>
