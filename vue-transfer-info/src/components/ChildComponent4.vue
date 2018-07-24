<template>
  <div>
    <div>{{ msg }}</div>
    <input :value="selfModel" type="text" @input="changeValue($event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'ChildComponent4',
  data () {
    return {
      msg: 'ChildComponent4'
    }
  },
  props: {
    selfModel: {
      type: String
    }
  },
  methods: {
    changeValue: function (newValue) {
      this.$emit('selfModel', newValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
