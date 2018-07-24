<template>
  <div>
    <div>{{ msg }}</div>
    <child-component3
      v-on:childMessage="getChildMessage()"
      v-on:childMessage2="getChildMessage2($event)"
      v-on:childMessage3="getChildMessage3($event)"
    ></child-component3>
  </div>
</template>

<script>
import ChildComponent3 from './ChildComponent3'
export default {
  name: 'ParentComponent3',
  components: {
    ChildComponent3
  },
  data () {
    return {
      msg: 'ParentComponent3'
    }
  },
  methods: {
    getChildMessage: function () {
      console.log('I am child message')
    },
    getChildMessage2: function (event) {
      console.log('I am child message2')
      console.log(event)
    },
    getChildMessage3: function (event) {
      console.log('I am child message3')
      console.log(event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
