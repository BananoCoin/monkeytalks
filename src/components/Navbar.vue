<template>
  <div class="container-fluid z-top">
    <nav>
      <div class="container">
        <div class="row d-flex justify-content-between py-3">
          <a href="./">
            <img src="../assets/img/monkeytalks-logo.svg">
          </a>
          <button @click = "myToggle"
            class="btn btn-primary btn-lg px-4 px-md-5 font-weight-bold"
          >Faucet</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  methods: {
    myToggle(){
      this.$store.state.showHide = !this.$store.state.showHide;
    },
  },
  name: "Navbar"
});
</script>