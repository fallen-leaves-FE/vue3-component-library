import { App } from 'vue'
import PlmCard from './index.vue'

PlmCard.install = (app: App) => {
  app.component(PlmCard.name, PlmCard)
}

export default PlmCard