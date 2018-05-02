<template>
    <div id="get-todo" class="container">
        <input class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to ..." />
        <button class="btn btn-primary crk-margin" @click="addTodo">Todo</button>
    </div>
</template>
<script>
export default {
  methods: {
    getTodo (e) {
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo () {
      this.$store.dispatch('addTodo')
      this.$store.dispatch('clearTodo')
    }
  },
  computed: {
    newTodo () {
      return this.$store.getters.newTodo
    }
  }
}
</script>
<style>
    .crk-margin{
        margin: 10px 0 0 0;
    }
</style>
