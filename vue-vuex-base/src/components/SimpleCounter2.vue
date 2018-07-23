<template>
  <div>
    {{ msg }}<br>
    {{ moreCount }}<br>
    {{ moreAge }}<br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SimpleCounter2',
  data () {
    return {
      msg: 'SimpleCounter2'
    }
  },
  computed: {
    simpleCount: function () {
      return 23
    },
    ...mapGetters({
      moreCount: 'moreCount',
      moreAge: 'moreAge'
    })
  }
}
</script>

<style scoped>
</style>
