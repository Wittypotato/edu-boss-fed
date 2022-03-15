import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null // 当前登录用户状态
  },
  getters: {
  },
  // 修改容器数据必须使用mutation函数
  mutations: {
  // payload载荷数据 也就是用户传的数据
    setUser(state, payload) {
      state.user = Json.parse(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
