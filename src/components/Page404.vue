<template>
  <div id="error-section">
    <!-- NAVBAR -->
    <Navbar class="mb-1"></Navbar>
    <!-- NAVBAR END -->
    <!-- FAUCET END -->
    <transition-expand>
      <FaucetSection v-show="$store.state.showFaucet"/>
    </transition-expand>
    <!-- FAUCET END -->

    <!-- FOOTER -->
    <Footer/>
    <!-- FOOTER END -->
  </div>
</template>

<script>
import Vue from "vue";
import TransitionExpand from "./TransitionExpand.vue"
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"
import FaucetSection from "./FaucetSection.vue"

export default Vue.extend({
  name: "NotFound",
  components: {
    TransitionExpand,
    Navbar,
    Footer,
    FaucetSection
  }
});
</script>

<style lang="scss">
@import "../assets/css/atten_font.css";
@import "../assets/css/main.scss";
</style>