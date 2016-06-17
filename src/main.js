import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import routes from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
})

router.map(routes)

const app = Vue.extend(App)
router.start(app, '#app')
