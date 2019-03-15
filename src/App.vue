<template>
  <div id="app">
    <img src="../assets/img/banano.svg">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
})

</script>