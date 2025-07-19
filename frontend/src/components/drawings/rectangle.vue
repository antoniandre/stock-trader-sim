<template>
  <rect
    :x="Math.min(startX, endX)"
    :y="Math.min(startY, endY)"
    :width="Math.abs(endX - startX)"
    :height="Math.abs(endY - startY)"
    :stroke="color"
    :stroke-width="lineWidth"
    fill="none"
    class="rectangle"
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
</script>
