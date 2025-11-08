<template lang="pug">
.draggable-trading-interface(
  v-if="visible"
  :style="{ left: position.x + 'px', top: position.y + 'px' }"
  @mousedown.stop)
  w-button.absolute.ma2.close(
    width="20"
    height="20"
    @click.stop="$emit('close')"
    @mousedown.stop
    @touchstart.stop
    tooltip="Close"
    :tooltip-props="{ sm: true }"
    round
    text
    xs
    bg-color="error"
    icon="wi-cross")
  TradingInterface(
    :symbol="symbol"
    :stock="stock"
    :recent-trades="recentTrades"
    @mousedown="startDrag"
    @touchstart="startDrag")
</template>

<script setup>
import { ref, onUnmounted } from 'vue'
import TradingInterface from './trading-interface.vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  symbol: { type: String, required: true },
  stock: { type: Object, required: true },
  recentTrades: { type: Array, default: () => [] }
})

defineEmits(['close'])

const position = ref({ x: 50, y: 50 })
let isDragging = false
let dragStart = { x: 0, y: 0 }

function startDrag(e) {
  isDragging = true
  const clientX = e.touches ? e.touches[0].clientX : e.clientX
  const clientY = e.touches ? e.touches[0].clientY : e.clientY
  dragStart = {
    x: clientX - position.value.x,
    y: clientY - position.value.y
  }

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('touchend', stopDrag)

  e.preventDefault()
}

function onDrag(e) {
  if (!isDragging) return

  const clientX = e.touches ? e.touches[0].clientX : e.clientX
  const clientY = e.touches ? e.touches[0].clientY : e.clientY

  const newX = clientX - dragStart.x
  const newY = clientY - dragStart.y

  // Constrain to viewport bounds.
  const maxX = window.innerWidth - 300 // Max width is 300px.
  const maxY = window.innerHeight - 100 // Minimum height.

  position.value = {
    x: Math.max(0, Math.min(newX, maxX)),
    y: Math.max(0, Math.min(newY, maxY))
  }
}

function stopDrag() {
  isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', stopDrag)
}

onUnmounted(() => {
  stopDrag()
})
</script>

<style lang="scss">
.draggable-trading-interface {
  position: fixed;
  z-index: 10;
  max-width: 280px;

  .order-panel {
    background: var(--w-base-bg-color);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    cursor: move;
    user-select: none;
    .w-app & {padding: 12px;}

    &:active {cursor: grabbing;}
  }

  .close {
    right: 0;
    top: 0;
  }
}
</style>

