<template>
  <div id="app" class="bg-dark">
    <!-- NAVBAR -->
    <div class="container-fluid z-top">
        <nav>
            <div class="container">
                <div class="row d-flex justify-content-between py-3">
                    <a href="./">
                        <img src="../assets/img/monkeytalks-logo.svg">
                    </a>
                    <button class="btn btn-primary btn-lg px-4 px-md-5 font-weight-bold">faucet</button>
                </div>
            </div>
        </nav>
    </div>
    <!-- NAVBAR END -->

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
})

</script>