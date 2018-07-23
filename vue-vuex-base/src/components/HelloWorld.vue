<template>
  <div>
    <div>{{ msg }}</div><br>
    <div>
      <button @click="increment()">+</button>
      <button @click="decrement()">-</button>
      <button @click="incrementPayload(10)">+10</button>
    </div><br>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld'
    }
  },
  methods: {
    increment () {
      // console.log('+++')
      this.$store.dispatch('increment')
    },
    decrement () {
      // console.log('---')
      this.$store.dispatch('decrement')
    },
    // incrementPayload () {
    //   console.log('++10')
    //   this.$store.commit('INCREMENTPAYLOAD', 10)
    // }
    ...mapMutations({
      incrementPayload: 'INCREMENTPAYLOAD'
    })
  }
}
</script>

<style scoped>
</style>
