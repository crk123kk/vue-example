<template>
  <div id="app">
    <HelloWorld/>
    <button v-on:click="changePage()">切换页面</button>
    <div v-if="page === 'one'">
      <TestDirective/>
    </div>
    <div v-if="page === 'two'">
      <DirectiveDetail/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import TestDirective from './components/TestDirective'
import DirectiveDetail from './components/DirectiveDetail'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestDirective,
    DirectiveDetail
  },
  data () {
    return {
      page: 'one'
    }
  },
  methods: {
    changePage () {
      this.page = this.page === 'one' ? 'two' : 'one'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
