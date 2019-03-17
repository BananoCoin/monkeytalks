// View
import Vue from 'vue'
import App from './App.vue'
import { store } from './util/store'
import VueSocketio from 'vue-socket.io-extended'
import VShowSlide from 'v-show-slide'

// Socket.io
var channel = '/mtchannel'
Vue.use(VueSocketio, io(location.protocol + '//' + document.domain + ':' + location.port + channel), { store })

// V-show-slide
Vue.use(VShowSlide, {
  customEasing: {
    bezierOne: 'cubic-bezier(0,.55,.45,.99)'
  }
})

let v = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')