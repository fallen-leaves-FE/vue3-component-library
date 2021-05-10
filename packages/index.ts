import { App } from 'vue'
import PlmCard from './plm-card'

const components = [
  PlmCard
]
// 全局注册
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 局部注册
export {
  PlmCard,
  install
}

export default {
  install
}
