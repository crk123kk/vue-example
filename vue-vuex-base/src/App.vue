<template>
  <div id="app">
    <HelloWorld/>
    <SimpleCounter/>
    <SimpleCounter2/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SimpleCounter from './components/SimpleCounter'
import SimpleCounter2 from './components/SimpleCounter2'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SimpleCounter,
    SimpleCounter2
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
