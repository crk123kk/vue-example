<template>
  <div id="app">
    <RouterPage/><br><br>
    <router-view/>
    <transition name="left">
      <router-view name="a"/>
    </transition>
    <router-view name="b"/>
  </div>
</template>

<script>
import RouterPage from '@/components/RouterPage'
export default {
  name: 'App',
  components: {
    RouterPage
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

/*自定义的组件动画方式start*/
/*注意，在自定义动画时候的class只能修改v-，后面的不可以修改*/
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0%)
}
.left-enter-active,.left-leave-active {
  transition: 1s
}
.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%)
}
/*自定义的组件动画方式end*/
</style>
