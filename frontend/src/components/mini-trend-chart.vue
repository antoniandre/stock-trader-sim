<template lang="pug">
.mini-trend-chart(
  :class="trendClass"
  :style="`height: ${height}px; --path-length: ${actualPathLength}px;`")
  template(v-if="!loading")
    svg(
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      :height="height")
      //- Background gradient (optional)
      defs(v-if="showGradient")
        linearGradient(:id="`gradient-${chartId}`" x1="0%" y1="0%" x2="0%" y2="100%")
          stop.gradient-start(offset="0%" stop-opacity="0.3")
          stop.gradient-end(offset="100%" stop-opacity="0.05")

      //- Trend line.
      polyline.trend-line(
        v-if="pathPoints"
        :points="pathPoints"
        :stroke-width="strokeWidth"
        fill="none"
        vector-effect="non-scaling-stroke"
        :stroke-dasharray="actualPathLength"
        :stroke-dashoffset="actualPathLength"
        :class="{ draw: shouldAnimate }")

      //- Fill area under line (optional).
      polygon.trend-fill(
        v-if="showGradient && fillPoints"
        :points="fillPoints"
        :fill="`url(#gradient-${chartId})`"
        stroke="none")

    //- Current price indicator as positioned div (appears after animation).
    .current-price-dot(v-if="showDot && chartPoints.length" :style="dotStyle")
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] },
  width: { type: Number, default: 120 },
  height: { type: Number, default: 40 },
  strokeWidth: { type: Number, default: 1.5 },
  showGradient: { type: Boolean, default: true },
  showDot: { type: Boolean, default: true },
  dotRadius: { type: Number, default: 2 },
  loading: { type: Boolean, default: false }
})

// Generate unique chart ID for gradients.
const chartId = ref(Math.random().toString(36).substr(2, 9))

// Animation state.
const shouldAnimate = ref(false)
const animationComplete = ref(false)
const actualPathLength = ref(0)

// Calculate trend direction for CSS classes.
const trendClass = computed(() => {
  let color = 'grey'
  if (!props.data || props.data.length < 2) return color

  const firstPrice = props.data[0]?.price || props.data[0]?.close || 0
  const lastPrice = props.data[props.data.length - 1]?.price || props.data[props.data.length - 1]?.close || 0

  if (lastPrice > firstPrice) color = 'success'
  if (lastPrice < firstPrice) color = 'error'

  return { [color]: true, 'animation-complete': animationComplete.value }
})

// Calculate chart points using percentage-based coordinates.
const chartPoints = computed(() => {
  if (!props.data?.length) return []

  // Extract prices from data.
  const prices = props.data.map(item => item.price || item.close || 0).filter(p => p > 0)
  if (!prices.length) return []

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const priceRange = maxPrice - minPrice || 1 // Avoid division by zero.

  // Use percentage-based coordinates (0-100% for both x and y).
  const padding = 5 // 5% padding.
  const chartWidth = 100 - (padding * 2)  // 90% usable width.
  const chartHeight = 100 - (padding * 2)  // 90% usable height.

  // Handle single point case.
  if (prices.length === 1) {
    return [{
      x: 50, // Center horizontally.
      y: 50  // Center vertically.
    }]
  }

  return prices.map((price, index) => {
    const xProgress = index / (prices.length - 1) // This is now safe since prices.length >= 2.
    const yProgress = (price - minPrice) / priceRange

    return {
      x: padding + xProgress * chartWidth,
      y: padding + chartHeight - yProgress * chartHeight
    }
  })
})

// Convert points to SVG polyline format.
const pathPoints = computed(() => {
  if (chartPoints.value.length === 0) return null

  // Additional safety check for NaN values.
  const validPoints = chartPoints.value.filter(point =>
    !isNaN(point.x) && !isNaN(point.y) &&
    isFinite(point.x) && isFinite(point.y)
  )

  if (validPoints.length === 0) return null

  return validPoints.map(point => `${point.x},${point.y}`).join(' ')
})

// Create fill polygon points (for gradient fill).
const fillPoints = computed(() => {
  if (chartPoints.value.length === 0) return null

  // Use the same validated points as pathPoints.
  const validPoints = chartPoints.value.filter(point =>
    !isNaN(point.x) && !isNaN(point.y) &&
    isFinite(point.x) && isFinite(point.y)
  )

  if (validPoints.length === 0) return null

  // Add bottom corners to close the polygon.
  const lastPoint = validPoints[validPoints.length - 1]
  const firstPoint = validPoints[0]

  return [
    ...validPoints.map(p => `${p.x},${p.y}`),
    `${lastPoint.x},100`, // Bottom right (100% height).
    `${firstPoint.x},100` // Bottom left (100% height).
  ].join(' ')
})

// Dot styling and position for the positioned div.
const dotStyle = computed(() => {
  if (chartPoints.value.length === 0) return {}

  const lastPoint = chartPoints.value[chartPoints.value.length - 1]

  // Safety check for valid coordinates.
  if (!lastPoint || isNaN(lastPoint.x) || isNaN(lastPoint.y) ||
      !isFinite(lastPoint.x) || !isFinite(lastPoint.y)) {
    return {}
  }

  return {
    left: `${lastPoint.x}%`,
    top: `${lastPoint.y}%`,
    width: `${props.dotRadius * 2}px`,
    height: `${props.dotRadius * 2}px`
  }
})

// Function to calculate path length for animation.
function updatePathLength() {
  if (chartPoints.value.length >= 2) {
    // Calculate path length based on percentage coordinates.
    let totalLength = 0
    for (let i = 1; i < chartPoints.value.length; i++) {
      const prev = chartPoints.value[i - 1]
      const curr = chartPoints.value[i]
      const dx = curr.x - prev.x
      const dy = curr.y - prev.y
      totalLength += Math.sqrt(dx * dx + dy * dy)
    }
    // Scale the length for better animation timing.
    actualPathLength.value = totalLength * 2
  }
  else actualPathLength.value = 0
}

// Watch for data changes to trigger animation.
watch(() => props.data, (newData) => {
  if (newData?.length) {
    // Reset animation state.
    shouldAnimate.value = false
    animationComplete.value = false

    nextTick(() => {
      updatePathLength()
      // Start animation after SVG renders.
        shouldAnimate.value = true
        // Show dot after 1s animation completes.
        setTimeout(() => {
          animationComplete.value = true
        }, 500)
    })
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.mini-trend-chart {
  display: inline-block;
  width: 100%;
  position: relative;

  svg {
    display: block;
    overflow: visible;
  }

  .current-price-dot {
    position: absolute;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0); // Center the dot on the point.
    pointer-events: none;
    z-index: 10;
    border: 0.5px solid var(--w-base-bg-color);
    transition: transform 0.3s ease-in-out;
    background-color: currentColor;
  }

  .trend-line {
    transition: stroke 0.2s ease;
    stroke: currentColor;

    &.draw {animation: draw-line 1s ease-in-out forwards;}
  }

  .trend-fill {
    opacity: 0;
    transition: fill 0.2s ease, opacity 0.2s;
  }
  .gradient-start, .gradient-end {stop-color: currentColor;}

  &.animation-complete {
    .current-price-dot {transform: translate(-50%, -50%) scale(1.5);}
    .trend-fill {opacity: 1;}
  }
}

@keyframes draw-line {
  0% {stroke-dashoffset: var(--path-length);}
  100% {stroke-dashoffset: 0;}
}
</style>
