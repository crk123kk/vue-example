<template>
  <div id="app">
    <completed-todos></completed-todos>
    <br>
    <current-todos></current-todos>
    <br>
    <get-todo></get-todo>
  </div>
</template>

<script>
import GetTodo from './components/GetTodo.vue'
import CurrentTodos from './components/CurrentTodos.vue'
import CompletedTodos from './components/CompletedTodos.vue'
export default {
  name: 'App',
  components: {
    GetTodo,
    CurrentTodos,
    CompletedTodos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 30px 0 0 0;
}
</style>
