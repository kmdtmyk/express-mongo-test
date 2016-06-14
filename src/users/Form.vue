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

export default {
  data(){
    return {
      user: {},
    }
  },
  methods: {
    regist(){
      let user = this.user

      superagent
        .post('/api/users')
        .send(user)
        .end((err, res) => {
          this.$router.go('.')
        })

    },
  },
}
</script>

<style scoped>

</style>
