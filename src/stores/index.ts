import { createPinia } from 'pinia'
import { piniaPersistPlugin } from './persist'

const pinia = createPinia()
pinia.use(piniaPersistPlugin)

export default pinia
