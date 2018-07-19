<template>
  <div>
      {{msg}}{{ $route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'Params',
  data () {
    return {
      msg: 'Params'
    }
  }
}
</script>

<style scoped>
</style>
