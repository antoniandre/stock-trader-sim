import { createApp } from 'vue'
import './scss/index.scss'
import App from './app.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

const app = createApp(App)
app.use(router)
app.use(WaveUI, {
  theme: 'dark',
  colors: {
    dark: {
      primary: 'purple',
      secondary: 'grey',
      success: 'green',
      error: 'red',
    }
  }
  // 'grey': {
  //   900: '#0D1117',
  //   800: '#161B22',
  //   700: '#21262D',
  //   200: '#C9D1D9',
  //   100: '#F0F6FC'
  // },
  // 'blue': {
  //   400: '#38BDF8',
  //   500: '#3B82F6'
  // },
  // 'purple': {
  //   500: '#8B5CF6'
  // }

})

app.mount('#app')
