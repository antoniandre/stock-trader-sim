<template>
  <g class="note">
    <rect
      :x="startX"
      :y="startY"
      :width="100"
      :height="50"
      :fill="color"
      fill-opacity="0.1"
      :stroke="color"
      :stroke-width="1"
    />
    <text
      :x="startX + 5"
      :y="startY + 15"
      :fill="color"
      font-size="10"
    >
      {{ text }}
    </text>
  </g>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  startPoint: { type: Object, required: true },
  endPoint: { type: Object, required: true },
  color: { type: String, default: '#3B82F6' },
  text: { type: String, default: 'Note' },
  isSelected: { type: Boolean, default: false },
  isPreview: { type: Boolean, default: false }
})

const emit = defineEmits(['click', 'remove'])

const startX = computed(() => props.startPoint.x || 0)
const startY = computed(() => props.startPoint.y || 0)
</script>
