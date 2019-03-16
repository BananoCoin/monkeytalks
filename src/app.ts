// View
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'

let v = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})