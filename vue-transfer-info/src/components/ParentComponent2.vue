<template>
  <div>
    <div>{{ msg }}</div>
    <child-component2
        v-bind:cProps="pmsg"
        v-bind:cProps2="pmsg2"
        v-bind:cProps3="pmsg3"
        v-bind:cProps4="pmsg4"
        v-bind:cPropsk3="cPropsk3"
    ></child-component2>
  </div>
</template>

<script>
import ChildComponent2 from './ChildComponent2'
export default {
  name: 'ParentComponent2',
  components: {
    ChildComponent2
  },
  data () {
    return {
      msg: 'ParentComponent2',
      pmsg: 'pInfo',
      pmsg2: 2,
      pmsg3: '3',
      pmsg4: 'pInfo4',
      cPropsk3: 30
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
