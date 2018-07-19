<template>
  <div>
      <div>
          <router-link to="/">PageHome</router-link><br>
          <router-link to="/HelloWorld">HelloWorld</router-link><br>
          <router-link to="/PageOne/1">PageOne1</router-link><br>
          <router-link to="/PageOne/2">PageOne2</router-link><br>
          <router-link to="/PageTwo">PageTwo</router-link><br>
          <router-link to="/PageTwo/PageTwo1">PageTwo1</router-link><br>
          <router-link to="/PageTwo/PageTwo2">PageTwo2</router-link><br>
          <span @click="routeToPage()">编程式导航</span><br>
          <span @click="routeToPage2()">编程式导航带参数的</span><br>
          <router-link to="/NameView">NameView</router-link><br>
          <router-link to="/NameViewChildTop">NameViewChildTop</router-link><br>
          <router-link to="/Params/333">Params</router-link><br>
          <router-link to="/LazyPageOne">LazyPageOne</router-link><br>
          <router-link to="/LazyPageTwo">LazyPageTwo</router-link><br>
          <router-link to="/LazyPageGroup1">LazyPageGroup1</router-link><br>
          <router-link to="/LazyPageGroup2">LazyPageGroup2</router-link><br>
          <router-link to="/UserPage1">UserPage1</router-link><br>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RouterPage',
  data () {
    return {
      msg: 'RouterPage'
    }
  },
  methods: {
    routeToPage: function () {
      this.$router.push('/PageTwo')
    },
    routeToPage2: function () {
      this.$router.push({name: 'PageOne', params: { id: 123 }})
    }
  }
}
</script>

<style scoped>
</style>
