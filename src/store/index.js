import { createStore } from 'vuex';
import auth from './modules/auth';
import profile from './modules/profile';

export default createStore({
  state: {
    version: '0.0.3'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    profile
  },
  getters: {
    applicationVersion: state => state.version
  }
})
