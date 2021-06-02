import { createApp } from 'vue'
import FaUI from '../lib/js/fa-ui.umd.js'
import '../lib/style/css/fa-ui.min.css'
import App from './App.vue'

const app = createApp(App)
app.use(FaUI)
app.mount('#app')
