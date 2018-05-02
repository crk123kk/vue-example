<template>
  <div id="counter">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
    <button @click="incrementIfOdd()">Increment if odd</button>
    <button @click="incrementAsync()">Increment async</button>
  </div>
</template>

<script>

export default {
  name: 'Counter',
  computed: {
    count () {
      return this.$store.state.count
    },
    evenOrOdd () {
      return this.$store.getters.evenOrOdd
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment')
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>
