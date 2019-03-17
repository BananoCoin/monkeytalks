// View
import Vue from 'vue'
import App from './App.vue'
import { store } from './util/store'
import VueSocketIO from 'vue-socket.io'

var channel = '/mtchannel'

Vue.use(new VueSocketIO({
    connection: location.protocol + '//' + document.domain + ':' + location.port + channel,
    options: {
        'reconnection': true,
        'reconnectionDelay': 1000,
        'reconnectionDelayMax' : 5000,
        'reconnectionAttempts': 5 
    }
}))

let v = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')