import './assets/main.css'

import { createApp } from 'vue'
import 'animate.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

import App from './App.vue'
import router from './router/router'
import './assets/main.css'

const app = createApp(App)



app.use(pinia)
app.use(router)

app.mount('#app')
