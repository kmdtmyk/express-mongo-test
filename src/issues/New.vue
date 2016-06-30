<template>

  <h1>issue new</h1>

  <form v-on:submit.prevent='regist'>
    <div>
      <label>title</label>
      <input type='text' v-model='issue.title'>
    </div>
    <div>
      <textarea v-model='issue.body'></textarea>
    </div>
    <div>
      <button type='submit'>submit</button>
    </div>
  </form>
  
</template>

<script>
import request from '../request/issue'

export default {
  components: {
  },
  data(){
    return {
      issue: {},
    }
  },
  methods: {
    regist(){
      let issue = this.issue
      request.save(issue).end((err, res) => {
        this.$router.go('/issues')
      })
    },
  },
}
</script>

<style scoped>

</style>
