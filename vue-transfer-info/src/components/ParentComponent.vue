<template>
  <div>
    <div>{{ msg }}</div>
    <child-component
      v-bind:pInfo1 ="pmsg"
      v-bind:parentInfo ="pmsg1"
      v-bind:parent-info2 ="pmsg2"
      parentInfo3 = "pmsg3"
      parent-info4 = "pmsg4"
    ></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent'
export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  data () {
    return {
      msg: 'ParentComponent',
      pmsg: 'pInfo',
      pmsg1: 'pInfo1',
      pmsg2: 'pInfo2',
      pmsg3: 'pInfo3',
      pmsg4: 'pInfo4'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
