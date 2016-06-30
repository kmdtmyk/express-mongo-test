import Index from './Index'
import New from './New'
import Show from './Show'


export default {
  component: {
    template: '<router-view></router-view>',
  },
  subRoutes: {
    '/': {
      component: Index,
    },
    '/new': {
      component: New,
    },
    '/:_id': {
      component: Show,
    },
  },
}
