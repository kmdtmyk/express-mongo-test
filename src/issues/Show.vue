<template>
  <h1>issue detail</h1>

  <h2>
    #{{issue.number}} {{issue.title}}
  </h2>

  <div>
    <p>
      {{issue.body}}
    </p>
  </div>

</template>

<script>
import request from '../request/issue'

export default {
  data(){
    return {
      issue: {}
    }
  },
  route: {
    data({ to, next }){
      let { _id } = this.$route.params

      request.get(_id).end((err, res) => {
        let issue = res.body
        next({issue})
      })

    },
  },
}
</script>

<style scoped>

</style>
