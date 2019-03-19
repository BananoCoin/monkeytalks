import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
     state: {
          showFaucet : false,
          showSendCard : false
     },
     mutations: {
          changeFaucet(state, showFaucet) {
               state.showFaucet = showFaucet
          },
          changeSendCard(state, showSendCard) {
               state.showSendCard = showSendCard
          }
     },
     getters: {
          showFaucet: state => state.showFaucet,
          showSendCard: state => state.showSendCard
     }
})