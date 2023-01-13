import { createApp } from 'vue'

import App from './App.vue'
// import store from './vuexpersist/index.js'
import router from './router/index.js'

import './assets/css/style-view-product.css'

createApp(App)
.use(router)
// .use(store)
.mount('#app')
