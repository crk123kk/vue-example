import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// // 状态
// // state保存的应该是初始的状态，或者是某个直观的状态
// // 所以虽然他也可以像getters那样的放入函数来返回值，
// // 但是总感觉这个和state设计的初衷相违背，如果真有需要，通过
// // getters来实现就好了
// const state = {
//   count: 0,
//   age: 233333,
//   name: 'cc'
// }

// const mutations = {
//   INCREMENT (state) {
//     state.count++
//   },
//   DECREMENT (state) {
//     state.count--
//   },
//   INCREMENTPAYLOAD (state, n) {
//     state.count = state.count + (n === undefined ? 5 : n)
//   }
// }

// const actions = {
//   increment: ({ commit }) => commit('INCREMENT'),
//   decrement: ({ commit }) => commit('DECREMENT')
// }

// const getters = {
//   // getter中可以接收state和getters为参数
//   moreCount: function () {
//     return state.count + 'more'
//   },
//   // 通过属性访问
//   moreAge: (state, getters) => {
//     return state.age + 'more'
//   },
//   moreName: (state) => (newName) => {
//     return state.name + newName
//   },
//   moreName2: function (state) {
//     return function (newName) {
//       return state.name + '2' + newName
//     }
//   }
// }

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
