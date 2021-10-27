import { App } from 'vue'
import Button from './src/index.vue'
import '../assets/scss/button.scss'

Button.install = (app: App) => {
	app.component(Button.name, Button)
}

export default Button
