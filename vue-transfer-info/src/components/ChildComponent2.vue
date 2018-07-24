<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ cProps }}</div>
    <div>{{ cProps2 }}</div>
    <div>{{ cProps3 }}</div>
    <div>{{ cProps4 }}</div>
    <div>{{ cPropsk }}</div>
    <div>{{ cPropsk2 }}</div>
    <div>{{ cPropsk3 }}</div>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent2',
  data () {
    return {
      msg: 'ChildComponent2'
    }
  },
  props: {
    'cProps': String,
    'cProps2': Number,
    'cProps3': [Number, String],
    'cProps4': {
      type: String,
      required: true
    },
    'cPropsk': {
      type: String,
      default: 'kk'
    },
    'cPropsk2': {
      type: String,
      default: function () {
        return 'kk2'
      }
    },
    cPropsk3: {
      // 如果有传入值，那么传入值没有大于10就会报错
      validator: function (value) {
        return value > 10
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
