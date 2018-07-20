<template>
  <div>
    <div>
        <span class="title">双向绑定数据：v-model</span><br>
        <input type="text" v-model="msg"/><br>
        <span>{{msg}}</span>
    </div><br>
    <div>
        <span class="title">循环：v-for</span><br>
        <div v-for="item of items" v-bind:key="item.name">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
        </div>
    </div><br>
    <div>
      <span class="title">存在或不存在：v-if</span><br>
      <span v-if="condition">存在</span><br>
      <span v-if="!condition">不存在</span><br>
      <span>v-else/v-else-if配合v-if使用</span>
    </div><br>
    <div>
      <span class="title">显示或隐藏：v-show</span><br>
      <span v-show="condition">显示</span><br>
      <span v-show="!condition">隐藏</span><br>
    </div><br>
    <div>
      <span class="title">属性的值的动态绑定：v-bind</span><br>
      <input v-bind:value="name">
    </div><br>
    <div>
      <span class="title">style的动态绑定：v-style（通过v-bind实现）</span><br>
      <span v-bind:style="{'color':'red'}">绑定color:red样式</span>
    </div><br>
    <div>
      <span class="title">class的动态绑定：v-class（通过v-bind实现）</span><br>
      <span v-bind:class="'text'">绑定title样式</span>
    </div><br>
    <div>
      <span class="title">事件绑定：v-on</span><br>
      <span v-on:click="clickMe()">点击我输出日志</span>
    </div><br>
    <div>
      <span class="title">读取文本内容：v-text</span><br>
      <span v-text="someText"></span>
    </div><br>
    <div>
      <span class="title">读取html标签：v-html</span><br>
      <span v-html="someHtml"></span>
    </div><br>
    <div>
      <span class="title">只渲染一次：v-once</span><br>
      <span v-on.once:click="clickMe()">我是只渲染一次的点击事件</span>
    </div><br>
    <div>
      <span class="title">防闪烁：v-cloak</span><br>
      <span v-cloak>防止闪烁</span>
    </div><br>
    <div>
      <span class="title">把标签内部的元素原位输出：v-pre</span><br>
      <span v-pre>{{soemPreText}}</span>
    </div><br>
  </div>
</template>

<script>
export default {
  name: 'TestDirective',
  data () {
    return {
      msg: 'kk',
      items: [
        {'name': 'xiaohong1', 'age': 12},
        {'name': 'xiaohong2', 'age': 12},
        {'name': 'xiaohong3', 'age': 12},
        {'name': 'xiaohong4', 'age': 12}
      ],
      condition: true,
      name: 'bindName',
      bindClass: 'text',
      someText: '我是一些文本',
      someHtml: '<i><b>我是一些html斜体字</b></i>',
      soemPreText: '   <b>preText</b>'
    }
  },
  methods: {
    clickMe () {
      console.log('click click click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  color: blue;
}
.text {
  color: coral;
}
</style>
