<template>
  <div class="hv-100 mx-0 px-0 row d-flex align-items-stretch" id="error-section">
    <!-- NAVBAR -->
    <Navbar class="mb-1 col-12 mx-auto px-auto"></Navbar>
    <!-- NAVBAR END -->

    <!-- ERROR MESSAGE SECTION -->
    <div class="section bg-secondary col-12 align-self-center" id="error-message-section">
      <div class="container my-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-10 col-lg-8">
            <img class="w-100 grow-2" src="../assets/img/deadpool-404.svg">
          </div>
        </div>
      </div>
    </div>
    <!-- ERROR MESSAGE SECTION END -->

    <!-- FOOTER -->
    <Footer class="col-12 mx-auto px-auto"/>
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