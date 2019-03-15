<template>
  <div id="app" class="bg-dark">
    <!-- NAVBAR -->
    <Navbar></Navbar>
    <!-- NAVBAR END -->

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/Navbar.vue'

export default Vue.extend({
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
      Navbar
  }
})

</script>