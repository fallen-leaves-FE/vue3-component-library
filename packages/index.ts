import { App } from 'vue'
import Button from './Button'
import './style/scss/index.scss'

const components = [
  Button
]
// 全局注册
const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 局部注册
export {
  Button,
  install
}

export default {
  install
}
