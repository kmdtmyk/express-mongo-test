<template>
  <h1>user edit {{$route.params._id}}</h1>
  <user-form :user='user'></user-form>
</template>

<script>
import UserForm from './Form'
import request from '../request/user'

export default {
  components: {
    UserForm,
  },
  data(){
    return {
      user: {}
    }
  },
  route: {
    data({ to, next }){
      let { _id } = this.$route.params

      request.get(_id).end((err, res) => {
        let user = res.body
        next({user})
      })

    },
  },
}
</script>

<style scoped>

</style>
