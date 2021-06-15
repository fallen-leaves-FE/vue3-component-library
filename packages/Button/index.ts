import { App } from 'vue'
import Button from './index.vue'
import '../style/scss/button.scss'

Button.install = (app: App) => {
	app.component(Button.name, Button)
}

export default Button
