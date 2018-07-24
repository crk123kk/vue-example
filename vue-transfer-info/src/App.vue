<template>
  <div id="app">
    <HelloWorld/>
    <ParentComponent/><br>
    <ParentComponent2/><br>
    <ParentComponent3/><br>
    <ParentComponent4/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ParentComponent from './components/ParentComponent'
import ParentComponent2 from './components/ParentComponent2'
import ParentComponent3 from './components/ParentComponent3'
import ParentComponent4 from './components/ParentComponent4'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ParentComponent,
    ParentComponent2,
    ParentComponent3,
    ParentComponent4
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
