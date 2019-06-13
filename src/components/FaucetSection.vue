<template>
  <div class="section px-3" style="overflow-x:hidden;" id="faucet-section">
    <div class="container px-0">
      <div class="container bg-secondary py-5 rounded-1 px-0">
        <!-- FAUCET FIRST STEP -->
        <div id="faucet-first-step" v-if="!requestStarted">
          <div class="row align-items-center d-flex justify-content-around">
            <div class="col-12">
              <h3 class="text-center text-light font-weight-bold px-3">Enter your Banano address below.</h3>
              <h5
                class="text-center text-light font-weight-light mt-2 px-3"
              >We will send you a small dose of potassium.</h5>
            </div>
          </div>
          <div class="row align-items-center d-flex justify-content-around py-3">
            <div class="col-11 col-md-10 col-lg-8">
              <form id="faucet-form">
                <div class="input-group">
                  <input
                    type="text"
                    :class="['font-weight-bold', 'textfield-light', 'form-control', 'form-control-lg', 'rounded-100', isValidAddress ? 'text-primary' : 'text-light', 'bg-transparent', 'border-light', 'border-2', 'mt-3', 'px-4', 'px-lg-5']"
                    id="addressInput"
                    placeholder="ban_address"
                    @input="onAddressChanged"
                  >
                </div>
                <vue-recaptcha
                  ref="recaptcha"
                  @verify="onCaptchaVerified"
                  @expired="onCaptchaExpired"
                  size="invisible"
                  theme="dark"
                  sitekey="6Lfxq5kUAAAAAEFflKdG_ajIT5WLxnvoQHt_ker1"
                />
                <vue-hcaptcha
                  class="text-center mt-4"
                  sitekey="686846c4-7200-41c7-918c-ca28e37ef9f3"
                  theme="dark"
                  size="normal"
                  root="faucet-form"
                  @verify="onVerifyHcaptcha"
                />
                <h6 v-if="missingCaptcha"
                  class="text-center text-danger font-weight-light mt-2 px-3"
                >Captcha is required.</h6>
                <button
                  :class="['btn', 'btn-lg', isValidAddress ? ['btn-primary', 'glow-green', 'grow-3', 'text-dark'] : ['btn-light', 'text-secondary'], 'btn-block', 'mt-3', 'mx-auto', 'col-12', 'col-md-8', 'col-lg-6']"
                  :disabled="!isValidAddress"
                  @click="onFaucetSubmit"
                >Send Me Some Banano</button>
              </form>
            </div>
          </div>
        </div>
        <!-- FAUCET FIRST STEP END -->

        <!-- FAUCET LOADING -->
        <div id="faucet-loading" v-else-if="requestResponse == null">
          <div class="row align-items-center d-flex justify-content-around">
            <div class="col-12">
              <h3
                class="text-center text-light font-weight-bold px-3"
              >We're preparing your Banano, hang in there...</h3>
            </div>
          </div>
          <div class="row align-items-center d-flex justify-content-around mt-4">
            <div class="col-12">
              <img class="w-100" src="../assets/img/bananofactory_animation.gif">
            </div>
          </div>
        </div>
        <!-- FAUCET LOADING END -->

        <!-- FAUCET RESPONSE RECEIVED -->
        <div id="faucet-response-received" v-else>
          <div class="row align-items-center d-flex justify-content-around">
            <div class="col-12">
              <h3
                class="text-center text-light font-weight-bold px-3"
              >{{ requestResponse }}</h3>
            </div>
          </div>
        </div>
        <!-- FAUCET RESPONSE RECEIVED END-->

      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import API from "../util/api.ts";
import Util from "../util/util.ts";
import VueRecaptcha from "vue-recaptcha";
import VueHcaptcha from "hcaptcha-vue";

export default Vue.extend({
  name: "FaucetSection",
  data() {
    return {
      addressValue: "",
      isValidAddress: false,
      addressValue: "",
      isValidAddress: false,
      requestStarted: false,
      requestResponse: null,
      requestError: false,
      hCaptchaResponse: null,
      missingCaptcha: false
    };
  },
  components: {
    VueRecaptcha,
    VueHcaptcha
  },
  methods: {
    onAddressChanged(event) {
      this.addressValue = event.target.value
      if (this.addressValue.length < 64) {
        this.isValidAddress = false;
      } else {
        let parsed = Util.validateAddress(this.addressValue);
        if (parsed !== false) {
          this.isValidAddress = true;
          this.addressValue = parsed;
        } else {
          this.isValidAddress = false;
        }
      }
      event.target.value = this.addressValue
    },
    onFaucetSubmit(event) {
      event.preventDefault();
      if (this.isValidAddress) {
        this.$refs.recaptcha.execute();
      }
    },
    onVerifyHcaptcha: function(response) {
      this.hCaptchaResponse = response
      this.missingCaptcha = false
    },
    onCaptchaVerified: function(recaptchaToken) {
      if (this.hCaptchaResponse == null) {
        this.missingCaptcha = true
        return;
      }
      this.requestStarted = true;
      API.postFaucet(recaptchaToken, this.hCaptchaResponse, this.addressValue).then(response => {
        if (response == null || response.status != 200) {
          this.requestError = true;
          if (
            response != null &&
            "data" in response &&
            "error" in response.data
          ) {
            this.requestResponse = response.data.error;
          } else {
            this.requestResponse = "Something went wrong. Try again later.";
          }
        } else {
          if ("error" in response.data) {
            this.requestError = true
            this.requestResponse = response.data.error
          } else {
            this.requestResponse = response.data.success
          }
        }
      });
    },
    onCaptchaExpired: function() {
      this.$refs.recaptcha.reset();
    }
  }
});
</script>