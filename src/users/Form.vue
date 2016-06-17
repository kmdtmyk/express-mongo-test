<template>
  <form v-on:submit.prevent='regist'>
    <div>
      <label>name</label>
      <input type='text' v-model='user.name'>
    </div>

    <div>
      <label>furigana</label>
      <input type='text' v-model='user.furigana'>
    </div>

    <div>
      <label>mail address</label>
      <input type='text' v-model='user.mailAddress'>
    </div>

    <button type='submit'>regist</button>
  </form>
  <pre>{{user|json}}</pre>
</template>

<script>
import superagent from 'superagent'
import request from '../request/user'

export default {
  props: ['user'],
  methods: {
    regist(){
      let user = this.user
      request.save(user).end((err, res) => {
        this.$router.go('/users')
      })
    },
  },
}
</script>

<style scoped>

</style>
