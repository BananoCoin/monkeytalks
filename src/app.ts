// View
import Vue from 'vue'
import App from './App.vue'
import { store } from './util/store'
import router from './router/index'
import VueSocketio from 'vue-socket.io-extended'
import MobileDetect from 'mobile-detect'

// Socket.io
var channel = '/mtchannel'
Vue.use(VueSocketio, io(location.protocol + '//' + document.domain + ':' + location.port + channel), { store })

let v = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
  created: function() {
    // Mobile detect
    let mobileDetect: MobileDetect = new MobileDetect(window.navigator.userAgent)
    this.$store.state.mobileDetect = mobileDetect
    // Get initial server-side provided data
    let nativeElement: HTMLElement = document.getElementById('globalData') as HTMLElement
    if (nativeElement != null) {
      this.$store.state.fee = nativeElement.getAttribute('data-fee')
      this.$store.state.premiumFee = nativeElement.getAttribute('data-premium')
      this.$store.state.mtAccount = nativeElement.getAttribute('data-account')
    }
  }
}).$mount('#app')