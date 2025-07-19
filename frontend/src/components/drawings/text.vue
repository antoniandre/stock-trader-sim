<template>
  <text
    :x="startX"
    :y="startY"
    :fill="color"
    :font-size="fontSize"
    class="text-annotation"
    @click="$emit('click')"
    @dblclick="$emit('remove')"
  >
    {{ text }}
  </text>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  startPoint: { type: Object, required: true },
  endPoint: { type: Object, required: true },
  color: { type: String, default: '#3B82F6' },
  text: { type: String, default: 'Text' },
  fontSize: { type: Number, default: 12 },
  isSelected: { type: Boolean, default: false },
  isPreview: { type: Boolean, default: false }
})

const emit = defineEmits(['click', 'remove'])

const startX = computed(() => props.startPoint.x || 0)
const startY = computed(() => props.startPoint.y || 0)
</script>
