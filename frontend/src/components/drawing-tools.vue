<template lang="pug">
.drawing-tools-container
  //- Toolbar positioned absolutely
  .drawing-toolbar.absolute.left-2.top-2(style="z-index: 1001;")
    .toolbar-section
      .section-title.size--xs.op6.text-upper Cursor
      .tool-group.w-flex.column.gap1
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'cursor' }"
          @click="selectTool('cursor')"
          title="Cursor"
          size="xs")
          icon(icon="mdi:cursor-default")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'crosshair' }"
          @click="selectTool('crosshair')"
          title="Crosshair"
          size="xs")
          icon(icon="mdi:crosshairs")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'measure' }"
          @click="selectTool('measure')"
          title="Measure"
          size="xs")
          icon(icon="mdi:ruler")

    .toolbar-section
      .section-title.size--xs.op6.text-upper Trend Lines
      .tool-group.w-flex.column.gap1
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'trend-line' }"
          @click="selectTool('trend-line')"
          title="Trend Line"
          size="xs")
          icon(icon="mdi:chart-line")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'horizontal-line' }"
          @click="selectTool('horizontal-line')"
          title="Horizontal Line"
          size="xs")
          icon(icon="mdi:minus")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'vertical-line' }"
          @click="selectTool('vertical-line')"
          title="Vertical Line"
          size="xs")
          icon(icon="mdi:format-line-style")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'parallel-channel' }"
          @click="selectTool('parallel-channel')"
          title="Parallel Channel"
          size="xs")
          icon(icon="mdi:trending-up")

    .toolbar-section
      .section-title.size--xs.op6.text-upper Fibonacci
      .tool-group.w-flex.column.gap1
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'fib-retracement' }"
          @click="selectTool('fib-retracement')"
          title="Fibonacci Retracement"
          size="xs")
          icon(icon="mdi:chart-areaspline")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'fib-extension' }"
          @click="selectTool('fib-extension')"
          title="Fibonacci Extension"
          size="xs")
          icon(icon="mdi:chart-timeline-variant")

    .toolbar-section
      .section-title.size--xs.op6.text-upper Shapes
      .tool-group.w-flex.column.gap1
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'rectangle' }"
          @click="selectTool('rectangle')"
          title="Rectangle"
          size="xs")
          icon(icon="mdi:rectangle-outline")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'ellipse' }"
          @click="selectTool('ellipse')"
          title="Ellipse"
          size="xs")
          icon(icon="mdi:circle-outline")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'arrow' }"
          @click="selectTool('arrow')"
          title="Arrow"
          size="xs")
          icon(icon="mdi:arrow-top-right")

    .toolbar-section
      .section-title.size--xs.op6.text-upper Annotations
      .tool-group.w-flex.column.gap1
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'text' }"
          @click="selectTool('text')"
          title="Text"
          size="xs")
          icon(icon="mdi:format-text")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': activeTool === 'note' }"
          @click="selectTool('note')"
          title="Note"
          size="xs")
          icon(icon="mdi:note-text")

    .toolbar-section
      .section-title.size--xs.op6.text-upper Tools
      .tool-group.w-flex.column.gap1
        w-button.tool-btn(
          :class="{ 'tool-btn--active': magnetMode }"
          @click="toggleMagnet"
          title="Magnet Mode"
          size="xs")
          icon(icon="mdi:magnet")
        w-button.tool-btn(
          :class="{ 'tool-btn--active': keepDrawing }"
          @click="toggleKeepDrawing"
          title="Keep Drawing"
          size="xs")
          icon(icon="mdi:pencil-lock")
        w-button.tool-btn(
          @click="clearAllDrawings"
          title="Clear All"
          size="xs")
          icon(icon="mdi:eraser")

  //- Canvas overlay for drawing (fills entire parent container)
  .drawing-canvas-overlay(
    v-if="activeTool !== 'cursor'"
    ref="canvasOverlay"
    @mousedown="startDrawing"
    @mousemove="updateDrawing"
    @mouseup="endDrawing"
    @mouseleave="cancelDrawing")
    svg.drawing-svg(
      :width="canvasSize.width"
      :height="canvasSize.height"
      :viewBox="`0 0 ${canvasSize.width} ${canvasSize.height}`")

      // Render completed drawings
      g.completed-drawings
        component(
          v-for="drawing in drawings"
          :key="drawing.id"
          :is="getDrawingComponent(drawing.type)"
          v-bind="drawing.props"
          @click="selectDrawing(drawing.id)"
          @remove="removeDrawing(drawing.id)")

      // Render current drawing (in progress)
      g.current-drawing(v-if="currentDrawing")
        component(
          :is="getDrawingComponent(currentDrawing.type)"
          v-bind="currentDrawing.props"
          :is-preview="true")

  .drawing-settings-panel(v-if="selectedDrawing")
    .panel-header
      .panel-title Drawing Settings
      w-button(
        @click="selectedDrawing = null"
        size="xs"
        icon="mdi:close")

    .panel-content
      .setting-group
        label Color
        w-input(
          v-model="drawingSettings.color"
          type="color")

      .setting-group
        label Line Width
        w-input(
          v-model="drawingSettings.lineWidth"
          type="range"
          min="1"
          max="10")

      .setting-group
        label Style
        w-select(
          v-model="drawingSettings.lineStyle"
          :items="lineStyles")

      .setting-group
        w-button(
          @click="applySettings"
          color="primary"
          size="sm")
          | Apply Settings
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import TrendLine from './drawings/trend-line.vue'
import HorizontalLine from './drawings/horizontal-line.vue'
import VerticalLine from './drawings/vertical-line.vue'
import ParallelChannel from './drawings/parallel-channel.vue'
import FibRetracement from './drawings/fib-retracement.vue'
import FibExtension from './drawings/fib-extension.vue'
import Rectangle from './drawings/rectangle.vue'
import Ellipse from './drawings/ellipse.vue'
import Arrow from './drawings/arrow.vue'
import Text from './drawings/text.vue'
import Note from './drawings/note.vue'

const props = defineProps({
  chartContainer: { type: Object, default: null },
  priceScale: { type: Function, default: null },
  timeScale: { type: Function, default: null }
})

const emit = defineEmits(['drawing-added', 'drawing-removed', 'drawing-updated'])

// Watch for chartContainer changes
watch(() => props.chartContainer, (newContainer) => {
  if (newContainer) {
    updateCanvasSize()
  }
}, { immediate: true })

const activeTool = ref('cursor')
const magnetMode = ref(false)
const keepDrawing = ref(false)
const drawings = ref([])
const currentDrawing = ref(null)
const selectedDrawing = ref(null)
const isDrawing = ref(false)
const canvasOverlay = ref(null)

const canvasSize = ref({
  width: 800,
  height: 600
})

const drawingSettings = ref({
  color: '#3B82F6',
  lineWidth: 2,
  lineStyle: 'solid'
})

const lineStyles = [
  { label: 'Solid', value: 'solid' },
  { label: 'Dashed', value: 'dashed' },
  { label: 'Dotted', value: 'dotted' }
]

const drawingComponents = {
  'trend-line': TrendLine,
  'horizontal-line': HorizontalLine,
  'vertical-line': VerticalLine,
  'parallel-channel': ParallelChannel,
  'fib-retracement': FibRetracement,
  'fib-extension': FibExtension,
  'rectangle': Rectangle,
  'ellipse': Ellipse,
  'arrow': Arrow,
  'text': Text,
  'note': Note
}

function selectTool(tool) {
  activeTool.value = tool
  currentDrawing.value = null
  selectedDrawing.value = null
}

function toggleMagnet() {
  magnetMode.value = !magnetMode.value
}

function toggleKeepDrawing() {
  keepDrawing.value = !keepDrawing.value
}

function clearAllDrawings() {
  drawings.value = []
  currentDrawing.value = null
  selectedDrawing.value = null
  emit('drawing-removed', 'all')
}

function getDrawingComponent(type) {
  return drawingComponents[type] || 'div'
}

function startDrawing(event) {
  if (activeTool.value === 'cursor' || activeTool.value === 'crosshair') return

  isDrawing.value = true
  const rect = canvasOverlay.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Convert screen coordinates to chart coordinates
  const time = props.timeScale ? props.timeScale.invertPixel(x) : x
  const price = props.priceScale ? props.priceScale.invertPixel(y) : y

  // Apply magnet mode
  const magnetizedPoint = magnetMode.value ? applyMagnet(time, price) : { time, price }

  currentDrawing.value = {
    id: Date.now(),
    type: activeTool.value,
    props: {
      startPoint: magnetizedPoint,
      endPoint: magnetizedPoint,
      color: drawingSettings.value.color,
      lineWidth: drawingSettings.value.lineWidth,
      lineStyle: drawingSettings.value.lineStyle
    }
  }
}

function updateDrawing(event) {
  if (!isDrawing.value || !currentDrawing.value) return

  const rect = canvasOverlay.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Convert screen coordinates to chart coordinates
  const time = props.timeScale ? props.timeScale.invertPixel(x) : x
  const price = props.priceScale ? props.priceScale.invertPixel(y) : y

  // Apply magnet mode
  const magnetizedPoint = magnetMode.value ? applyMagnet(time, price) : { time, price }

  currentDrawing.value.props.endPoint = magnetizedPoint
}

function endDrawing() {
  if (!isDrawing.value || !currentDrawing.value) return

  isDrawing.value = false

  // Add the completed drawing
  drawings.value.push({ ...currentDrawing.value })
  emit('drawing-added', currentDrawing.value)

  // Reset current drawing
  currentDrawing.value = null

  // Return to cursor mode unless keepDrawing is enabled
  if (!keepDrawing.value) {
    activeTool.value = 'cursor'
  }
}

function cancelDrawing() {
  if (isDrawing.value) {
    isDrawing.value = false
    currentDrawing.value = null
  }
}

function selectDrawing(id) {
  selectedDrawing.value = drawings.value.find(d => d.id === id)
}

function removeDrawing(id) {
  const index = drawings.value.findIndex(d => d.id === id)
  if (index > -1) {
    drawings.value.splice(index, 1)
    emit('drawing-removed', id)
  }

  if (selectedDrawing.value && selectedDrawing.value.id === id) {
    selectedDrawing.value = null
  }
}

function applySettings() {
  if (!selectedDrawing.value) return

  selectedDrawing.value.props.color = drawingSettings.value.color
  selectedDrawing.value.props.lineWidth = drawingSettings.value.lineWidth
  selectedDrawing.value.props.lineStyle = drawingSettings.value.lineStyle

  emit('drawing-updated', selectedDrawing.value)
}

function applyMagnet(time, price) {
  // TODO: Implement magnet functionality to snap to OHLC points
  // This would require access to the chart data to find the nearest price points
  return { time, price }
}

function updateCanvasSize() {
  if (props.chartContainer) {
    const rect = props.chartContainer.getBoundingClientRect()
    canvasSize.value = {
      width: rect.width,
      height: rect.height
    }
  }
}

onMounted(() => {
  updateCanvasSize()
  window.addEventListener('resize', updateCanvasSize)

  // Watch for changes to the chart container
  if (props.chartContainer) {
    // Use ResizeObserver for more reliable size updates
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize()
    })
    resizeObserver.observe(props.chartContainer)

    // Store observer for cleanup
    onUnmounted(() => {
      resizeObserver.disconnect()
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCanvasSize)
})

// Keyboard shortcuts
function handleKeyPress(event) {
  if (event.altKey) {
    switch (event.code) {
      case 'KeyT':
        selectTool('trend-line')
        break
      case 'KeyH':
        selectTool('horizontal-line')
        break
      case 'KeyV':
        selectTool('vertical-line')
        break
      case 'KeyF':
        selectTool('fib-retracement')
        break
      case 'KeyR':
        selectTool('rectangle')
        break
      case 'KeyN':
        selectTool('text')
        break
      case 'KeyC':
        selectTool('cursor')
        break
      case 'KeyM':
        toggleMagnet()
        break
      case 'KeyK':
        toggleKeepDrawing()
        break
      case 'KeyX':
        clearAllDrawings()
        break
    }
    event.preventDefault()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyPress)
})
</script>

<style lang="scss" scoped>
.drawing-tools-container {
  position: relative;
  width: 100%;
  height: 100%;

  .drawing-toolbar {
    width: 50px; /* Fixed width for the toolbar */
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.9);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    z-index: 1001; /* Ensure it's above the canvas */
    backdrop-filter: blur(8px); /* Professional glass effect */

    .toolbar-section {
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }

      .section-title {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        margin-bottom: 0.5rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .tool-group {
        .tool-btn {
          width: 100%;
          margin-bottom: 0.25rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.2s ease;

          &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
          }

          &--active {
            background: rgba(59, 130, 246, 0.8);
            border-color: rgba(59, 130, 246, 1);
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
          }
        }
      }
    }
  }

  .drawing-canvas-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: auto;
    cursor: crosshair;
    z-index: 999; // Below the toolbar

    .drawing-svg {
      width: 100%;
      height: 100%;
      pointer-events: none;

      .completed-drawings {
        pointer-events: auto;
      }

      .current-drawing {
        pointer-events: none;
        opacity: 0.7;
      }
    }
  }

  .drawing-settings-panel {
    position: absolute;
    right: 0;
    top: 0;
    width: 250px;
    background: rgba(0, 0, 0, 0.9);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      .panel-title {
        font-weight: 600;
      }
    }

    .panel-content {
      padding: 1rem;

      .setting-group {
        margin-bottom: 1rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
