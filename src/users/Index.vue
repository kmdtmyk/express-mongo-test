<template>

  <h1>user list</h1>

  <form v-on:submit.prevent='search'>
    <input type='search' name='q' v-model='q' placeholder='search'>
  </form>

  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>furigana</th>
        <th>mail address</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='user in users'>
        <td>{{user.name}}</td>
        <td>{{user.furigana}}</td>
        <td>{{user.mailAddress}}</td>
        <td>
          <a v-link='{path: "users/" + user._id + "/edit"}'>edit</a>
          <button v-on:click='del(user)'>delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <a v-link="{path:'users/new'}">new user</a>

</template>

<script>
import request from '../request/user'

export default {
  data() {
    return {
      users: [],
      q: this.$route.query.q
    }
  },
  route: {
    data({ to, next }){
      let { query } = to

      request
        .query(query)
        .end(function(err, res){
          let users = res.body
          next({users})
        })

    },
  },
  methods: {
    search(e){
      this.$router.go('?q=' + this.q)
    },
    del(user){
      request.delete(user._id).end((err, res) => {
        this.users = this.users.filter((u) => u._id !== user._id)
      })
    }
  },
}
</script>

<style scoped>

</style>
