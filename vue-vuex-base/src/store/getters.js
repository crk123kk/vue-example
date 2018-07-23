import state from './states'

export default {
  // getter中可以接收state和getters为参数
  moreCount: function () {
    return state.count + 'more'
  },
  // 通过属性访问
  moreAge: (state, getters) => {
    return state.age + 'more'
  },
  moreName: (state) => (newName) => {
    return state.name + newName
  },
  moreName2: function (state) {
    return function (newName) {
      return state.name + '2' + newName
    }
  }
}
