<template>
  <div class="container-fluid z-top">
    <nav>
      <div class="container">
        <div class="row d-flex justify-content-between py-3">
          <a href="./">
            <img class="grow-3 d-none d-md-block" src="../assets/img/monkeytalks-logo.svg">
            <img class="grow-3 d-block d-md-none" src="../assets/img/monkeytalks-logo-narrow.svg">
          </a>
          <button
            @click="toggleFaucet"
            v-show="!showHomeButton"
            v-bind:class="[$store.state.showFaucet ? ['btn-secondary', 'text-light', 'glow-purple'] : ['btn-primary', 'text-dark', 'glow-green'] ]"
            class="btn btn-lg px-4 px-md-5 grow-3"
          >{{$store.state.showFaucet ? "Close" : "Faucet"}}</button>
          <router-link
            to="/"
            tag="button"
            v-show="showHomeButton"
            class="btn btn-lg px-4 px-md-5 grow-3 btn-primary text-darkk glow-green"
          >Home</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  methods: {
    toggleFaucet() {
      this.$store.state.showFaucet = !this.$store.state.showFaucet;
    }
  },
  name: "Navbar",
  props: {
    showHomeButton: Boolean
  }
});
</script>