import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
     state: {
          showFaucet : false,
          showSendCard : false,
          fee : null,
          premiumFee: null,
          mtAccount: null,
          mobileDetect: null
     },
     mutations: {
          changeFaucet(state, showFaucet) {
               state.showFaucet = showFaucet
          },
          changeSendCard(state, showSendCard) {
               state.showSendCard = showSendCard
          },
          changeFee(state, fee) {
               state.fee = fee
          },
          changePremiumFee(state, premiumFee) {
               state.premiumFee = premiumFee
          },
          changeMtAccount(state, mtAccount) {
               state.mtAccount = mtAccount
          },
          changeMobileDetect(state, mobileDetect) {
               state.mobileDetect = mobileDetect
          }
     },
     getters: {
          showFaucet: state => state.showFaucet,
          showSendCard: state => state.showSendCard,
          showFee: state => state.fee,
          showPremiumFee: state => state.premiumFee,
          showMtAccount: state => state.mtAccount,
          showMobileDetect: state => state.mobileDetect
     }
})