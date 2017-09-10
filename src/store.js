import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    providerID: ''
  },
  getters: {
    providerID (state) {
      return state.providerID
    }
  },
  mutations: {
    setCredentials (state, providerID) {
      state.providerID = providerID
    }
  }
})
