import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import DetectBrowserNavigationInVueRouter from 'detect-browser-navigation-in-vue-router'
import DetectBrowserNavigationInVueRouter from '../../detect-browser-navigation-in-vue-router/dist/detect-browser-navigation-in-vue-router.es'

const app = createApp(App)

app.use(router)

const backCallback = () => {
  console.log('back')
}

const forwardCallback = () => {
  console.log('forward')
}

app.use(DetectBrowserNavigationInVueRouter, { router, backCallback, forwardCallback })

app.mount('#app')
