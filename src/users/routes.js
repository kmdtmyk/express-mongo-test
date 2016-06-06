
export default {
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
}
