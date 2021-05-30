import { createApp } from 'vue'
import FaUI from '../lib/js/fa-ui.umd'
import '../lib/style/scss/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(FaUI)
app.mount('#app')