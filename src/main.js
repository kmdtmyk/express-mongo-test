import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
})

router.map({
  '/users': {
    component: {
      template: '<router-view></router-view>',
    },
    subRoutes: {
      '/': {
        component: {
          template: '<h1>user list</h1><pre>{{$route | json}}</pre>'
        },
      },
      '/new': {
        component: {
          template: '<h1>user new</h1>'
        },
      },
      '/:_id': {
        component: {
          template: '<h1>user detail {{$route.params._id}}</h1>'
        },
      },
      '/:_id/edit': {
        component: {
          template: '<h1>user edit {{$route.params._id}}</h1>'
        },
      },
    }
  },
  '*': {
    component: require('./components/NotFound')
  }
})

const app = Vue.extend(App)
router.start(app, '#app')
