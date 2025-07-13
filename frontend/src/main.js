import { createApp } from 'vue'
import './scss/index.scss'
import App from './app.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)
app.use(router)
app.use(WaveUI, {
  theme: 'auto',
  colors: {
    light: {
      primary: '#3d9ff5'
    },
    dark: {
      primary: '#3d9ff5'
    }
  }
})

app.mount('#app')
