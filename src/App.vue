<template>
  <div>
    <navigation-bar></navigation-bar>
    <h1>hello</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'

export default {
  components: {
    NavigationBar,
  }
}
</script>

<style>

</style>
