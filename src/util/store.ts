import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
     state: {
          showHideFaucet : false,
          showHideSendCard : false
     },
     mutations: {
          changeFaucet(state, showHideFaucet) {
               state.showHideFaucet = showHideFaucet
          },
          changeSendCard(state, showHideSendCard) {
               state.showHideSendCard = showHideSendCard
          }
     },
     getters: {
          showHideFaucet: state => state.showHideFaucet,
          showHideSendCard: state => state.showHideSendCard
     }
})