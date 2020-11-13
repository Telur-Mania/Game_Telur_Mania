import Vue from 'vue'
import Vuex from 'vuex'
import Swal from "sweetalert2";
import router from '../router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    room: {},
  },
  mutations: {
    'SOCKET_FETCH_ROOM' (state, payload) {
      state.rooms = payload
    },
    'SOCKET_ERROR_JOIN' (state, payload) {
      Swal.fire({
        icon: 'error',
        title: 'failed join..',
        text: payload.msg
      })
      .then(() => {
        if(router.currentRoute.name === 'Game') {
          router.push({ name: 'Rooms' })
        }
      })
    },
    'SOCKET_UPDATE_ROOM' (state, payload){
      state.room = payload
    }

  },
  actions: {
  },
  modules: {
  }
})
