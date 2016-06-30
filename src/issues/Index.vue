<template>

  <h1>issue list</h1>

  <form v-on:submit.prevent='search'>
    <input type='search' name='q' v-model='q' placeholder='search'>
  </form>

  <a v-link="{path:'issues/new'}">new issue</a>

  <table>
    <thead>
      <tr>
        <th>title</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='issue in issues'>
        <td>
          <a v-link='{path: "issues/" + issue._id}'>{{issue.title}}</a>
        </td>
        <td>
          <button v-on:click='del(issue)'>delete</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import request from '../request/issue'

export default {
  data() {
    return {
      issues: [],
      q: this.$route.query.q
    }
  },
  route: {
    data({ to, next }){
      let { query } = to

      request
        .query(query)
        .end(function(err, res){
          let issues = res.body
          next({issues})
        })

    },
  },
  methods: {
    search(e){
      this.$router.go('?q=' + this.q)
    },
    del(issue){
      request.delete(issue._id).end((err, res) => {
        this.issues = this.issues.filter((u) => u._id !== issue._id)
      })
    }
  },
}
</script>

<style scoped>

</style>
