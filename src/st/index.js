// src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'dark'
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    changeTheme({ commit }, theme) {
      commit('setTheme', theme)
    }
  }
})