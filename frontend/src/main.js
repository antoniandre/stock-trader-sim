import { createApp } from 'vue'
import './scss/index.scss'
import App from './app.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import { Icon } from '@iconify/vue'

const app = createApp(App)
app.use(router)
app.use(WaveUI, {
  theme: 'auto',
  colors: {
    light: {
      primary: '#3d9ff5',
      light1: '#00000066',
      light2: '#00000018',
      'currency-positive': '#5acc4a',
      'currency-negative': '#f53d3d'
    },
    dark: {
      primary: '#3d9ff5',
      light1: '#ffffff66',
      light2: '#ffffff18',
      'currency-positive': '#a6db9f',
      'currency-negative': '#e46c6c'
    }
  }
})
app.component('Icon', Icon)

app.mount('#app')
