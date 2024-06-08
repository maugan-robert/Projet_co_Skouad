import './assets/css/style.css'
import App from './App.vue'
import V3ScrollLock from 'v3-scroll-lock' 
import './assets/css/style.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const app = createApp(App)

app.use(
  createRouter({
    history: createWebHistory(),
    routes,
  })
)

app.use(V3ScrollLock, {})
app.mount('#app')
