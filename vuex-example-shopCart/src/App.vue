<template>
  <div id="app">
    <HelloWorld/>
    <ProductList/>
    <hr>
    <ShoppingCart/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductList,
    ShoppingCart
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
ul{
  list-style: none;
}
ul li{
  border: 1px solid blueviolet;
  background: gray;
  color: #fff;
  padding: 5px;
  margin: 10px 0;
}
</style>
