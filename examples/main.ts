import { createApp } from 'vue'
import FaUI from '../lib/[name].umd.js' // name 表示package.json中的name属性
import '../lib/css/[name].min.css'
import App from './App.vue'

const app = createApp(App)

app.use(FaUI)
app.mount('#app')
