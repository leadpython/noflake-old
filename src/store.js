import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    setProviderID (state, providerID) {
      console.log(providerID)
      axios.post('https://noflake-database.herokuapp.com/api/providers/598f7522152653001159fc46/employees').then(response => {
        console.log(response.data)
      })
      state.providerID = providerID
    }
  }
})
