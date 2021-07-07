import { createStore } from 'vuex'

export default createStore({
  state: {
    version: '0.0.2'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    applicationVersion: state => state.version
  }
})
