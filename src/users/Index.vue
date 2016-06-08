<template>
  <h1>user list</h1>
  <a v-link="{path:'new', append: true}">new user</a>
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>furigana</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='user in users'>
        <td>{{user.name}}</td>
        <td>{{user.furigana}}</td>
      </tr>
    </tbody>
  </table>
  <pre>{{$route | json}}</pre>
</template>

<script>
import superagent from 'superagent'

export default {
  data() {
    return {
      users: [],
    }
  },
  route: {
    data({ to, next }){
      superagent
        .get('/api/users')
        .query({ q: 'a' })
        .end(function(err, res){
          let users = res.body
          next({users})
        })

    }
  }
}
</script>

<style scoped>

</style>
