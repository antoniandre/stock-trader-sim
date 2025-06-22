<template lang="pug">
.bg-white.rounded-2xl.shadow-lg.p-6
  h3.text-lg.font-bold.mb-4 Portfolio Performance
  line(:data="chartData" :options="chartOptions")
</template>

<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps(['history'])

const chartData = computed(() => ({
  labels: props.history.map(h => new Date(h.timestamp).toLocaleTimeString()),
  datasets: [{
    label: 'Portfolio Value',
    data: props.history.map(h => h.qty * h.price),
    borderColor: 'rgb(59, 130, 246)',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    borderWidth: 2,
    fill: true
  }]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>
