<template lang="pug">
.mini-trend-chart(:class="trendClass" :style="`width: ${width}px; height: ${height}px`")
  .loading-state(v-if="loading" :style="`width: ${width}px; height: ${height}px`")
    .loading-shimmer

  //- Chart content
  svg(
    v-else-if="!loading"
    :viewBox="`0 0 ${width} ${height}`"
    preserveAspectRatio="none")
    //- Background gradient (optional)
    defs(v-if="showGradient")
      linearGradient(:id="`gradient-${chartId}`" x1="0%" y1="0%" x2="0%" y2="100%")
        stop(offset="0%" :stop-color="trendColor" stop-opacity="0.3")
        stop(offset="100%" :stop-color="trendColor" stop-opacity="0.05")

    //- Trend line
    polyline.trend-line(
      v-if="pathPoints"
      :points="pathPoints"
      :stroke="trendColor"
      :stroke-width="strokeWidth"
      fill="none"
      vector-effect="non-scaling-stroke")

    //- Fill area under line (optional)
    polygon.trend-fill(
      v-if="showGradient && fillPoints"
      :points="fillPoints"
      :fill="`url(#gradient-${chartId})`"
      stroke="none")

    //- Current price indicator dot
    circle.current-price-dot(
      v-if="showDot && lastPoint"
      :cx="lastPoint.x"
      :cy="lastPoint.y"
      :r="dotRadius"
      :fill="trendColor"
      :stroke="backgroundColor"
      :stroke-width="1")
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: { type: Array, default: () => [] }, // Array of price data points
  width: { type: Number, default: 120 },
  height: { type: Number, default: 40 },
  strokeWidth: { type: Number, default: 1.5 },
  showGradient: { type: Boolean, default: true },
  showDot: { type: Boolean, default: true },
  dotRadius: { type: Number, default: 2 },
  positiveColor: { type: String, default: '#22C55E' }, // Green for positive trend
  negativeColor: { type: String, default: '#EF4444' }, // Red for negative trend
  neutralColor: { type: String, default: '#6B7280' }, // Gray for neutral/no data
  backgroundColor: { type: String, default: 'transparent' },
  loading: { type: Boolean, default: false }
})

// Generate unique chart ID for gradients
const chartId = ref(Math.random().toString(36).substr(2, 9))

// Calculate trend direction and color
const trendDirection = computed(() => {
  if (!props.data || props.data.length < 2) return 'neutral'

  const firstPrice = props.data[0]?.price || props.data[0]?.close || 0
  const lastPrice = props.data[props.data.length - 1]?.price || props.data[props.data.length - 1]?.close || 0

  if (lastPrice > firstPrice) return 'positive'
  if (lastPrice < firstPrice) return 'negative'
  return 'neutral'
})

const trendColor = computed(() => {
  switch (trendDirection.value) {
    case 'positive': return props.positiveColor
    case 'negative': return props.negativeColor
    default: return props.neutralColor
  }
})

const trendClass = computed(() => `trend-${trendDirection.value}`)

// Calculate chart points
const chartPoints = computed(() => {
  if (!props.data || props.data.length === 0) return []

  // Extract prices from data
  const prices = props.data.map(item => item.price || item.close || 0).filter(p => p > 0)
  if (prices.length === 0) return []

  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const priceRange = maxPrice - minPrice || 1 // Avoid division by zero

  // Calculate points with padding
  const padding = 2
  const chartWidth = props.width - (padding * 2)
  const chartHeight = props.height - (padding * 2)

  return prices.map((price, index) => ({
    x: padding + (index / (prices.length - 1)) * chartWidth,
    y: padding + chartHeight - ((price - minPrice) / priceRange) * chartHeight
  }))
})

// Convert points to SVG polyline format
const pathPoints = computed(() => {
  if (chartPoints.value.length === 0) return null
  return chartPoints.value.map(point => `${point.x},${point.y}`).join(' ')
})

// Create fill polygon points (for gradient fill)
const fillPoints = computed(() => {
  if (chartPoints.value.length === 0) return null

  const points = [...chartPoints.value]
  // Add bottom corners to close the polygon
  const lastPoint = points[points.length - 1]
  const firstPoint = points[0]

  return [
    ...points.map(p => `${p.x},${p.y}`),
    `${lastPoint.x},${props.height}`, // Bottom right
    `${firstPoint.x},${props.height}` // Bottom left
  ].join(' ')
})

// Last point for current price indicator
const lastPoint = computed(() => {
  if (chartPoints.value.length === 0) return null
  return chartPoints.value[chartPoints.value.length - 1]
})
</script>

<style lang="scss" scoped>
.mini-trend-chart {
  display: inline-block;

  .loading-state {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;

    .loading-shimmer {
      width: 80%;
      height: 2px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      border-radius: 1px;
      animation: shimmer 1.5s infinite;
    }
  }

  svg {
    display: block;
    overflow: visible;
    width: 100%;
    height: 100%;
  }

  .trend-line {transition: stroke 0.2s ease;}
  .trend-fill {transition: fill 0.2s ease;}
  .current-price-dot {transition: fill 0.2s ease;}

  &.trend-positive {
    .trend-line {filter: drop-shadow(0 0 2px rgba(34, 197, 94, 0.3));}
  }

  &.trend-negative {
    .trend-line {filter: drop-shadow(0 0 2px rgba(239, 68, 68, 0.3));}
  }
}

@keyframes shimmer {
  0% {transform: translateX(-100%);}
  100% {transform: translateX(200%);}
}

// Theme-specific adjustments.
:root[data-theme="dark"] {
  .mini-trend-chart .current-price-dot {stroke: var(--w-base-bg-color);}
}

:root[data-theme="light"] {
  .mini-trend-chart .current-price-dot {stroke: #ffffff;}
}
</style>
