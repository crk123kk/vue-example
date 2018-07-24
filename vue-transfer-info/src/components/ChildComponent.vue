<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ pInfo1 }}</div>
    <div>{{ parentInfo }}</div>
    <div>{{ parentInfo2 }}</div>
    <div>{{ parentInfo3 }}</div>
    <div>{{ parentInfo4 }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  data () {
    return {
      msg: 'ChildComponent'
    }
  },
  props: [
    'pInfo1',
    'parentInfo',
    'parentInfo2',
    'parentInfo3',
    'parentInfo4'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
