import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
     state: {
          showHide : false
     },
     mutations: {
          change(state, showHide) {
               state.showHide = showHide
          }
     },
     getters: {
          showHide: state => state.showHide
     }
})