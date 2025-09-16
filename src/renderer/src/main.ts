import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

const vuetify = createVuetify({
  components,
  theme: {
    defaultTheme: 'light'
  }
})

app.use(pinia)
app.use(vuetify)
app.mount('#app')
