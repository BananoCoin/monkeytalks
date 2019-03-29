<template>
  <div class="hv-100 mx-0 px-0 row d-flex align-items-stretch" id="error-section">
    <!-- NAVBAR -->
    <Navbar 
    :showHomeButton="true"
    class="mb-1 col-12 align-self-start"></Navbar>
    <!-- NAVBAR END -->

    <!-- ERROR MESSAGE SECTION -->
    <div class="section col-12 align-self-center pb-0 pb-md-5" id="error-message-section">
      <div class="container my-auto">
        <div class="row d-flex justify-content-center pb-0 pb-md-5">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7">
            <a href="/">
            <img class="w-100 grow-3" src="../assets/img/deadpool-404.svg">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- ERROR MESSAGE SECTION END -->

    <!-- FOOTER -->
    <Footer class="col-12 align-self-end px-0"/>
    <!-- FOOTER END -->
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue"
import Footer from "./Footer.vue"

export default Vue.extend({
  name: "NotFound",
  components: {
    Navbar,
    Footer,
  }
});
</script>

<style lang="scss">
@import "../assets/css/atten_font.css";
@import "../assets/css/main.scss";
</style>