import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },
  getters: {
  },
  // 修改容器数据必须使用mutation函数
  mutations: {
  // payload载荷数据 也就是用户传的数据
    setUser(state, payload) {
      state.user = JSON.parse(payload)
      // 为了防止页面刷新数据丢失，user数据持久化
      // 本地存储只能存字符串
      window.localStorage.setItem('user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
