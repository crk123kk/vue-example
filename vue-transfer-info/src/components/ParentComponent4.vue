<template>
  <div>
    <div>{{ msg }}</div>
    <child-component4
      :selfModel = "initModel"
      @selfModel = "val => { initModel = val }"
    ></child-component4>
    {{initModel}}
  </div>
</template>

<script>
import ChildComponent4 from './ChildComponent4'
export default {
  name: 'ParentComponent4',
  components: {
    ChildComponent4
  },
  data () {
    return {
      msg: 'ParentComponent4',
      initModel: 'init'
    }
  },
  methods: {
    changeValue (event) {
      this.initModel = event
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
