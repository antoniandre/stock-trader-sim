<template lang="pug">
.volume-filter.w-flex.align-center.gap2
  w-icon(color="primary" size="1.2rem") wi-bar-chart
  .title4.mr2 Volume Activity:

  w-select(
    v-model="selectedFilter"
    :items="filterOptions"
    item-label="label"
    item-value="value"
    color="primary"
    bg-color="transparent"
    outline
    no-padding
    class="size--sm"
    style="min-width: 180px"
    @input="$emit('filter-change', $event)")

  //- Volume stats display
  .volume-stats.ml3(v-if="showStats")
    .w-flex.align-center.gap3
      .stat-item(v-if="stats.total > 0")
        .size--sm.op6 Total:
        .text-bold {{ stats.total }}
      .stat-item(v-if="stats.highVolume > 0")
        .size--sm.op6 High Volume:
        .text-bold.warning {{ stats.highVolume }}
      .stat-item(v-if="stats.unusualVolume > 0")
        .size--sm.op6 Unusual:
        .text-bold.error {{ stats.unusualVolume }}
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Current filter value
  modelValue: {
    type: String,
    default: 'all'
  },

  // Show statistics about volume distribution
  showStats: {
    type: Boolean,
    default: true
  },

  // Statistics data for display
  stats: {
    type: Object,
    default: () => ({
      total: 0,
      highVolume: 0,
      unusualVolume: 0
    })
  }
})

const emit = defineEmits(['filter-change'])

// Filter options for volume activity
const filterOptions = [
  { label: 'All Stocks', value: 'all', description: 'Show all stocks regardless of volume' },
  { label: 'High Volume Only', value: 'high', description: 'Show stocks with volume ≥1.5x average' },
  { label: 'Very High Volume', value: 'very-high', description: 'Show stocks with volume ≥2x average' },
  { label: 'Extremely High Volume', value: 'extremely-high', description: 'Show stocks with volume ≥3x average' },
  { label: 'Low Volume', value: 'low', description: 'Show stocks with volume ≤0.5x average' },
  { label: 'Normal Volume', value: 'normal', description: 'Show stocks with normal volume activity' }
]

// Computed property for selected filter
const selectedFilter = computed({
  get: () => props.modelValue,
  set: (value) => emit('filter-change', value)
})
</script>

<script>
/**
 * Filter function to be used by parent components
 * @param {Array} stocks - Array of stock objects with volumeAnalysis
 * @param {String} filterValue - Filter value ('all', 'high', 'very-high', etc.)
 * @returns {Array} Filtered array of stocks
 */
export function filterStocksByVolume(stocks, filterValue) {
  if (!stocks || !Array.isArray(stocks) || filterValue === 'all') {
    return stocks || []
  }

  return stocks.filter(stock => {
    const volumeAnalysis = stock.volumeAnalysis
    if (!volumeAnalysis) return false

    switch (filterValue) {
      case 'high':
        return volumeAnalysis.isUnusualVolume // ≥1.5x average
      case 'very-high':
        return volumeAnalysis.volumeStatus === 'very-high' || volumeAnalysis.volumeStatus === 'extremely-high'
      case 'extremely-high':
        return volumeAnalysis.volumeStatus === 'extremely-high'
      case 'low':
        return volumeAnalysis.volumeStatus === 'low'
      case 'normal':
        return volumeAnalysis.volumeStatus === 'normal'
      default:
        return true
    }
  })
}

/**
 * Calculate volume statistics for a list of stocks
 * @param {Array} stocks - Array of stock objects with volumeAnalysis
 * @returns {Object} Statistics object
 */
export function calculateVolumeStats(stocks) {
  if (!stocks || !Array.isArray(stocks)) {
    return { total: 0, highVolume: 0, unusualVolume: 0 }
  }

  const stats = {
    total: stocks.length,
    highVolume: 0,
    unusualVolume: 0
  }

  stocks.forEach(stock => {
    if (stock.volumeAnalysis) {
      if (stock.volumeAnalysis.isUnusualVolume) {
        stats.highVolume++
      }
      if (stock.volumeAnalysis.volumeStatus === 'very-high' || stock.volumeAnalysis.volumeStatus === 'extremely-high') {
        stats.unusualVolume++
      }
    }
  })

  return stats
}
</script>

<style lang="scss" scoped>
.volume-filter {
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .volume-stats {
    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 60px;
    }
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .volume-filter {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    .volume-stats {
      margin-left: 0 !important;
      margin-top: 0.5rem;

      .w-flex {
        gap: 1rem;
      }
    }
  }
}
</style>
