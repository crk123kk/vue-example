import {
  INCREMENT,
  DECREMENT,
  INCREMENTPAYLOAD
} from './mutation-types.js'

export default {
  // 记录当前经度纬度
  [INCREMENT] (state) {
    state.count++
  },
  [DECREMENT] (state) {
    state.count--
  },
  [INCREMENTPAYLOAD] (state, n) {
    state.count = state.count + (n === undefined ? 5 : n)
  }

}
