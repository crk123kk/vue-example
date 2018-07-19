<template>
  <div>
        <div>
            {{msg}}
        </div>
        <router-view/>
        <router-view name="a"/>
        <router-view name="b"/>
  </div>
</template>

<script>
export default {
  name: 'NameViewChildTop',
  data () {
    return {
      msg: 'NameViewChildTop'
    }
  }
}
</script>

<style scoped>
</style>
