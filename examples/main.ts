import { createApp } from 'vue'
import FaUI from '../lib/js/fa-ui.umd.js'
import '../lib/style/scss/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(FaUI)
app.mount('#app')
