<template>
  <div class="section px-3" id="sendCard-section">
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
              <span class="font-weight-extrabold h4 text-primary"> Kalium </span>and send
              <span class="font-weight-extrabold h4 text-primary"> {{ computeWithFeeAsBanano(messageContent).split('.')[0] + "." + computeWithFeeAsBanano(messageContent).split('.')[1].substring(0, 2) + "~"}} Banano</span> to publish the message.
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
              Click the button below and send<span class="font-weight-extrabold h3 text-primary"> {{ computeWithFeeAsBanano(messageContent).split('.')[0] + "." + computeWithFeeAsBanano(messageContent).split('.')[1].substring(0, 6) + "~"}} Banano </span>with<span class="font-weight-extrabold h3 text-primary"> Kalium </span>to publish the message.
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
import Vue from "vue"
import posed from "vue-pose"
import VueQriously from "vue-qriously"
import Stenography from "../util/stenography.ts"
import Conversions from "../util/conversions.ts"
import API from "../util/api.ts"

Vue.use(VueQriously);

export default Vue.extend({
  name: "SendCardSection",
  props: {
    messageContent: ''
  },
  methods: {
    computeWithFeeAsBanano(content) {
      return Conversions.rawToBanano(Conversions.computeWithFee(Stenography.encodeMessage(content), this.$store.state.fee))
    },
    getQrUri(content) {
      return `ban:${this.$store.state.mtAccount}?amount=${Conversions.computeWithFee(Stenography.encodeMessage(content), this.$store.state.fee)}`
    }
  },
  mounted: function() {
    API.getFees().then((response) => {
      if (response != null) {
        this.$store.state.fee = response.fee
        this.$store.state.premiumFee = response.premiumFee
      }
    });
  }
});
</script>