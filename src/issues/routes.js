import Index from './Index'
// import New from './New'
// import Show from './Show'
// import Edit from './Edit'


export default {
  component: {
    template: '<router-view></router-view>',
  },
  subRoutes: {
    '/': {
      component: Index,
    },
    // '/new': {
    //   component: New,
    // },
    // '/:_id': {
    //   component: Show,
    // },
    // '/:_id/edit': {
    //   component: Edit,
    // },
  },
}
