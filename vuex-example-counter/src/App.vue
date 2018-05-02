<template>
  <div id="app">
    <HelloWorld/>
    <br>
    <Counter/>
    <br>
    <MyCounter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import MyCounter from './components/MyCounter'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter,
    MyCounter
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
