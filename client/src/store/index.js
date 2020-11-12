import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '',
    onlineUsers: []
  },
  mutations: {
    SOCKET_userLogin(state, onlineUser) {
      state.username = localStorage.getItem('username', this.username)
      state.onlineUsers = onlineUser
    }
  },
  actions: {
  },
  modules: {
  }
})
