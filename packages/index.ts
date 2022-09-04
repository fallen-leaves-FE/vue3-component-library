import { App } from 'vue'
import Button from './components/Button'
import Icon from './components/Icon'
import './assets/scss/index.scss'

const components = [
  Button,
  Icon
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
  Icon,
  install
}

export default {
  install
}
