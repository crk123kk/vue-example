<template>
  <div>
      {{msg}}<br>
      <transition name="slide">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
  data () {
    return {
      msg: 'PageTwo'
    }
  }
}
</script>

<style scoped>
/*路由组件进出场动画效果start*/
.slide-enter {
  opacity: 0;
}
.slide-enter-to {
  opacity: 1;
}
.slide-enter-active {
  transition: 1s
}
.slide-leave {
  opacity: 1;
}
.slide-leave-to {
  opacity: 0;
}
.slide-leave-active {
  transition:0.7s
}
/*路由组件进出场动画效果end*/
</style>
