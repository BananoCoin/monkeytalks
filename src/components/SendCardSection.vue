<template>
  <div class="section px-3 mt-1 mb-5" id="sendCard-section">
    <div class="container px-0 px-md-4">
      <div class="container bg-secondary py-5 rounded-1 col-12 col-lg-10">
        <div class="row align-items-center d-flex justify-content-center">
          <!-- DESKTOP -->
          <div v-if="!$store.state.mobileDetect.mobile()" class="col-12 col-md-5 px-4">
            <h4 class="text-center text-md-left text-light font-weight-light">Your Message:</h4>
            <h2 class="text-center text-md-left text-primary font-weight-extrabold">{{ messageContent }}</h2>
            <br>
            <h4 class="text-center text-md-left text-light font-weight-light">
              Scan the QR code with
              <span class="font-weight-extrabold h3 text-primary"> Kalium </span>and send<span class="font-weight-extrabold h3 text-primary"> {{ encodeMessage(messageContent) }} Banano</span> to publish the message.
            </h4>
            <br>
          </div>
          <!-- DESKTOP END -->

          <!-- MOBILE -->
          <div v-if="$store.state.mobileDetect.mobile()" class="col-12 col-md-5 px-4">
            <h4 class="text-center text-light font-weight-light">Your Message:</h4>
            <h2 class="text-center text-primary font-weight-extrabold">Hello World</h2>
            <br>
            <h4 class="text-center text-light font-weight-light">
              Click the button below and send<span class="font-weight-extrabold h3 text-primary"> {{ encodeMessage(messageContent) }} Banano </span>with<span class="font-weight-extrabold h3 text-primary"> Kalium </span>to publish the message.
            </h4>
            <br>
            <button
              class="btn btn-lg btn-light btn-block mt-3 mx-auto text-secondary glow-pink grow-3"
            >Send with Kalium</button>
          </div>
          <!-- MOBILE END -->

          <!-- MONKEYQR -->
          <div v-if="!$store.state.mobileDetect.mobile()" 
            class="col-10 col-md-6 col-lg-4 d-flex justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div class="w-100">
              <img src="../assets/img/monkeyQR.svg">
            </div>
            <div class="position-absolute qrWidth">
              <qriously
                :value="getQrUri(messageContent)" 
                :size="1024"
                level="H"
                id="amountQr"
              />
            </div>
        </div>
        <!-- MONKEYQR END -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import posed from "vue-pose";
import VueQriously from "vue-qriously";
import Stenography from "../util/stenography.ts";

Vue.use(VueQriously);

export default Vue.extend({
  name: "SendCardSection",
  props: {
    messageContent: ''
  },
  methods: {
    encodeMessage(content) {
      return Stenography.encodeMessage(content)
    },
    getQrUri(content) {
      return `ban:${this.$store.state.mtAccount}?amount=${Stenography.encodeMessage(content)}`
    }
  }
});
</script>