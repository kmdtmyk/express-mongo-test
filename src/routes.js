import users from './users/routes'
import issues from './issues/routes'

import NotFound from './components/NotFound'

export default {
  '/': {
    component: {
      template: '<h1>Home</h1>',
    },
  },
  '/users': users,
  '/issues': issues,
  '*': {
    component: NotFound
  },
}
