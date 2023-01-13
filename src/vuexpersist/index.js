// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'my-app', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const store = new Vuex.Store({
  state: {
    isLoggedIn: false,
    user: {}
  },
  mutations: {
    login (state, user) {
      state.isLoggedIn = true
      state.user = user
    },
    logout (state) {
      state.isLoggedIn = false
      state.user = {}
    }
  },
  plugins: [vuexPersist.plugin]
})

export default store
