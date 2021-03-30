import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // 非批量数据可以省略调用 actions 可以直接调用commit
  // actions: {
  //  changeCity (ctx, city) {
  //    // 调用 mutations 需要先调用 commit
  //    // changeCity 是 mutations 执行的方法 city 是需要改变的值
  //    ctx.commit('changeCity', city)
  //  }
  // },
  mutations,
  // 当需要根据 state 中的属性算出新的属性时，就可以用 getters 可以避免数据的冗余
  getters: {
    doubleCity () {
      return state.city + ' ' + state.city
    }
  }
})
