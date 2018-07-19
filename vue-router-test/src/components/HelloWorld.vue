<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
    console.log('beforeRouteEnter')
  },
  beforeRouteUpdata (to, from, next) {
    next()
    console.log('beforRouteUpdata')
  },
  beforeRouteLeave (to, from, next) {
    next()
    console.log('beforRouteLeave')
  }
}
</script>

<style scoped>
</style>
