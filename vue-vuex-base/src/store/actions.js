import {
  INCREMENT,
  DECREMENT
} from './mutation-types.js'

export default {
  increment: ({ commit }) => commit(INCREMENT),
  decrement: ({ commit }) => commit(DECREMENT)
}
