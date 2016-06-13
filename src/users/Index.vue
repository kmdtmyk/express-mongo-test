<template>

  <h1>user list</h1>

  <form>
    <input type='search' name='q' value='{{$route.query.q}}'>
  </form>

  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>furigana</th>
        <th>mail address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='user in users'>
        <td>{{user.name}}</td>
        <td>{{user.furigana}}</td>
        <td>{{user.mailAddress}}</td>
      </tr>
    </tbody>
  </table>

  <a v-link="{path:'new', append: true}">new user</a>

  <!-- <pre>{{$route | json}}</pre> -->
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
      // console.log(to)
      let { query } = to
      console.log(query)

      superagent
        .get('/api/users')
        .query(query)
        .end(function(err, res){
          let users = res.body
          next({users})
        })

    },
  },
  
}
</script>

<style scoped>

</style>
