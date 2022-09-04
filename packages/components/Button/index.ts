import { App } from 'vue'
import Button from './src/FaButton.vue'
import '@packages/assets/scss/button.scss'

Button.name = 'FaButton'
Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button
