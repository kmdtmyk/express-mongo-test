import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
})

router.map({
  '/hello': {
    component: require('./Hello')
  },
  '*': {
    component: require('./components/NotFound')
  }
})

const app = Vue.extend(App)
router.start(app, '#app')
