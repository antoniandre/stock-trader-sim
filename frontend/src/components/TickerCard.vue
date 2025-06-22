<template lang="pug">
div.bg-white.rounded-2xl.shadow-lg.p-4.flex.justify-between.items-center
  div
    h2.text-lg.font-bold {{ symbol }}
    p.text-gray-600.text-sm ${{ price.toFixed(2) }}
  span.text-xs(:class="sideClass") {{ lastSide.toUpperCase() }}
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['symbol', 'price', 'lastSide'])
const sideClass = computed(() =>
  props.lastSide === 'buy' ? 'text-green-600' : 'text-red-600'
)
</script>