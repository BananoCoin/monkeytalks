<template>
  <div class="section px-3" id="sendCard-section">
    <div class="container px-0 px-md-4">
      <div class="container bg-secondary py-5 rounded-1 col-12 col-lg-10">
        <div class="row align-items-center d-flex justify-content-center">
          <!-- TEXT AND BUTTON -->
          <div class="col-12 col-md-5 px-4">
            <h4 class="text-center text-md-left text-light font-weight-light">Your Message:</h4>
            <h2
              class="text-center text-md-left text-primary font-weight-extrabold"
              v-html="emojify(messageContent)"
            />
            <br>
            <h4
              v-if="!$store.state.mobileDetect.mobile()"
              class="text-center text-md-left text-light font-weight-light"
            >
              Scan the QR code with
              <h4 class="font-weight-extrabold h4 text-primary my-1">Kalium v2</h4>and send
              <h4
                class="font-weight-extrabold h4 text-primary my-1"
              >{{ computeWithFeeAsBanano(messageContent).split('.')[0] + "." + computeWithFeeAsBanano(messageContent).split('.')[1].substring(0, 6) + "~"}} Banano</h4> to publish the message.
            </h4>
             <!-- MOBILE -->
            <h5
              v-if="$store.state.mobileDetect.mobile()"
              class="text-center text-light font-weight-light"
            >
              Click the button below and send
              <h4
                class="font-weight-extrabold h3 text-primary my-1"
              >{{ computeWithFeeAsBanano(messageContent).split('.')[0] + "." + computeWithFeeAsBanano(messageContent).split('.')[1].substring(0, 6) + "~"}} Banano</h4>with
              <h4 class="font-weight-extrabold h3 text-primary my-1">Kalium v2</h4>to publish the message.
            </h5>
            <br>
            <div class="row pl-0 pl-md-3 d-flex justify-content-center align-middle">
              <input type="checkbox" name="premium-checkbox" v-model="isPremium">
              <span
                class="font-weight-extrabold h4 text-primary ml-0 mt-3 col-12 text-center col-md text-md-left mt-md-0"
              >Pimp My Message</span>
            </div>
            <a v-if="$store.state.mobileDetect.mobile()"
              class="btn btn-lg btn-light btn-block mt-4 mx-auto text-secondary glow-pink grow-3"
              :href="getQrUri(messageContent)"
            >Send with Kalium v2</a>
             <!-- MOBILE END -->
          </div>
          <!-- TEXT AND BUTTON END -->

          <!-- MONKEYQR -->
          <div
            v-if="!$store.state.mobileDetect.mobile()"
            class="col-10 col-md-6 col-lg-4 d-flex justify-content-center align-items-center mt-4 mt-md-0"
          >
            <div class="w-100">
              <img src="../assets/img/monkeyQR.svg">
            </div>
            <div class="position-absolute qrWidth">
              <qriously :value="getQrUri(messageContent)" :size="1024" level="L" id="amountQr"/>
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
import VueQriously from "vue-qriously";
import Stenography from "../util/stenography.ts";
import Util from "../util/util.ts";
import API from "../util/api.ts";

Vue.use(VueQriously);

export default Vue.extend({
  name: "SendCardSection",
  data() {
    return {
      isPremium: false
    };
  },
  props: {
    messageContent: ""
  },
  methods: {
    computeWithFeeAsBanano(content) {
      return Util.rawToBanano(
        Util.computeWithFee(
          Stenography.encodeMessage(content),
          this.isPremium ? this.$store.state.premiumFee : this.$store.state.fee
        )
      );
    },
    getQrUri(content) {
      return `ban:${this.$store.state.mtAccount}?amount=${Util.computeWithFee(
        Stenography.encodeMessage(content),
        this.isPremium ? this.$store.state.premiumFee : this.$store.state.fee
      )}`;
    },
    emojify(content) {
      let emojiMap = this.$store.state.emojiMap;
      // Process emojis/images
      Object.keys(emojiMap).forEach(function(key) {
        content = content.replace(
          new RegExp(key, 'g'),
          `<img src=${emojiMap[key]} height="30" width="30" />`
        );
      });
      return content;
    }
  },
  mounted: function() {
    API.getFees().then(response => {
      if (response != null) {
        this.$store.state.fee = response.fee;
        this.$store.state.premiumFee = response.premium;
      }
    });
  }
});
</script>