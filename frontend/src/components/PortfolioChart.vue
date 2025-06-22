<template>
  <canvas ref="canvas" width="400" height="200"></canvas>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart } from 'chart.js/auto'

const props = defineProps(['history'])
const canvas = ref(null)
let chartInstance

function buildChart () {
  if (chartInstance) chartInstance.destroy()
  chartInstance = new Chart(canvas.value, {
    type: 'line',
    data: {
      labels: props.history.map(h => new Date(h.timestamp).toLocaleTimeString()),
      datasets: [{
        label: 'Simulated Value',
        data: props.history.map(h => h.qty * h.price),
        borderWidth: 2
      }]
    }
  })
}

onMounted(buildChart)
watch(() => props.history, buildChart, { deep: true })
</script>