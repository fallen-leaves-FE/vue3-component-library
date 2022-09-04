import { App } from 'vue'
import Icon from './src/FaIcon.vue'
import '@packages/assets/scss/icon.scss'

Icon.name = 'FaIcon'
Icon.install = (app: App) => {
  app.component(Icon.name, Icon)
}

export default Icon
