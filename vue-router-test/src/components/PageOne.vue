<template>
  <div>
      {{msg}}{{ $route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'PageOne',
  data () {
    return {
      msg: 'PageOne'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(this)
      // console.log(vm)
    })
    console.log('beforeRouteEnter')
  },
  beforeRouteUpdate (to, from, next) {
    next()
    // console.log(this)
    console.log('beforeRouteUpdate')
  },
  beforeRouteLeave (to, from, next) {
    next()
    console.log('beforeRouteLeave')
  }
}
</script>

<style scoped>
</style>
