<template>
  <div>
    <div>{{ msg }}</div>
    <div>
      <button v-on:click="sendMessage1()">click and send</button><br><br>
      <button v-on:click="sendMessage2()">click and send2</button><br><br>
      <button v-on:click="sendMessage3()">click and send3</button><br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent3',
  data () {
    return {
      msg: 'ChildComponent3',
      cInfo: 'cInfo'
    }
  },
  methods: {
    sendMessage1: function () {
      this.$emit('childMessage')
    },
    sendMessage2: function () {
      this.$emit('childMessage2', { message: this.cInfo })
    },
    sendMessage3: function () {
      this.$emit('childMessage3', { message: this.cInfo, message2: this.msg })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
