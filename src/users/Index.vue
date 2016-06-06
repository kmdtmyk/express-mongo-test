<template>
  <h1>user list</h1>
  <a v-link="{path:'new', append: true}">new user</a>
  <pre>{{$route | json}}</pre>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
