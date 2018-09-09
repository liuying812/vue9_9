import * as types from './mutation-type.js';

export default {
  [types.SET_USERNAME](state, msg){
      state.username = msg
  },
  [types.COLLECT_SELECTS](state, obj){
      state.userselects[obj.itemIndex] = obj.msg
  },
  [types.COLLECT_ERROR](state, arr){
      state.errorselects = arr
  }
}
