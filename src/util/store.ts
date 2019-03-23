import Vue from 'vue'
import Vuex from 'vuex'

/** Emojis  **/
import hng from '../assets/img/hng.svg'
import smug from '../assets/img/smug.svg'
import chibi from '../assets/img/chibi.svg'
import aww from '../assets/img/aww.svg'
import bebe from '../assets/img/bebe.png'
import raugh from '../assets/img/raugh.png'
import coolstorybro from '../assets/img/coolstorybro.png'
let emojiMap = {":hng": hng, ":smg": smug, ":beb": bebe, ":rau": raugh, ":csb": coolstorybro, ":chb": chibi, ":aww": aww}
/** END Emojis */

Vue.use(Vuex)

export const store = new Vuex.Store({
     state: {
          showFaucet : false,
          showSendCard : false,
          fee : null,
          premiumFee: null,
          mtAccount: null,
          mobileDetect: null,
          emojiMap: emojiMap
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
          showMobileDetect: state => state.mobileDetect,
          showEmojiMap: state => state.emojiMap
     }
})