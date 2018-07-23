<template>
  <div>
    {{ msg }}<br>
    {{ count }}<br>
    {{ age }}<br>
    {{ name }}<br>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SimpleCounter',
  data () {
    return {
      msg: 'SimpleCounter'
    }
  },
  computed: {
    simpleCount: function () {
      return 23
    },
    ...mapState({
      count: state => state.count,
      age: 'age',
      name (state) {
        return state.name
      }
    })
  }
}
</script>

<style scoped>
</style>
