import { createApp } from 'vue'
import FaUI from '../packages'
import App from './App.vue'

const app = createApp(App)
console.log(FaUI)
app.use(FaUI)
app.mount('#app')
