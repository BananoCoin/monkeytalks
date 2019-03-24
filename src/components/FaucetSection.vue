<template>
  <div class="section px-3" id="faucet-section">
    <div class="container px-0">
      <div class="container bg-secondary py-5 rounded-1" v-if="!requestStarted">
        <div class="row align-items-center d-flex justify-content-around">
          <div class="col-12">
            <h3
              class="text-center text-light font-weight-bold"
            >Enter your Banano address below.</h3>
            <h5
              class="text-center text-light font-weight-light"
            >We will send you 0.1% of the faucet balance.</h5>
          </div>
        </div>
        <div class="row align-items-center d-flex justify-content-around py-3">
          <div class="col-11 col-md-10 col-lg-8">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  :class="['font-weight-bold', 'textfield-light', 'form-control', 'form-control-lg', 'rounded-100', isValidAddress ? 'text-white' : 'text-light', 'bg-transparent', 'border-light', 'border-2', 'mt-3', 'px-4', 'px-lg-5']"
                  id="addressInput"
                  placeholder="ban_address"
                  v-model="addressValue"
                  @input="onAddressChanged"
                >
              </div>
              <vue-recaptcha
                  ref="recaptcha"
                  @verify="onCaptchaVerified"
                  @expired="onCaptchaExpired"
                  size="invisible"
                  theme="dark"
                  sitekey="6Lfxq5kUAAAAAEFflKdG_ajIT5WLxnvoQHt_ker1">
                <button
                  :class="['btn', 'btn-lg', isValidAddress ? ['btn-primary', 'glow-green'] : ['btn-light', 'glow-pink'], 'btn-block', 'mt-3', 'mx-auto', 'col-12', 'col-md-8', 'col-lg-6', 'text-secondary', 'grow-3']"
                  :disabled="!isValidAddress"
                  @click="onFaucetSubmit"
                >Send Me Some Banano</button>
              </vue-recaptcha>
            </form>
          </div>
        </div>
      </div>
      <div class="container bg-secondary py-5 rounded-1" v-else-if="requestResponse == null">
        Loading...
      </div>
      <div class="container bg-secondary py-5 rounded-1" v-else>
        Response received {{ requestResponse }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import API from "../util/api.ts"
import Util from "../util/util.ts"
import VueRecaptcha from 'vue-recaptcha'

export default Vue.extend({
  name: "FaucetSection",
  data() {
    return {
      addressValue: '',
      isValidAddress: false,
      requestStarted: false,
      requestResponse: null,
      requestError: false
    }
  },
  methods: {
    onAddressChanged(event) {
      if (this.addressValue.length < 64) {
        this.isValidAddress = false
      } else {
        let parsed = Util.validateAddress(this.addressValue)
        if (parsed !== false) {
          this.isValidAddress = true
          this.addressValue = parsed
        } else {
          this.isValidAddress = false
        }
      }
    },
    onFaucetSubmit(event) {
      event.preventDefault()
      this.$refs.recaptcha.execute();
    },
    onCaptchaVerified: function (recaptchaToken) {
      this.requestStarted = true
      API.postFaucet(recaptchaToken, this.addressValue).then(response => {
        if (response == null || response.status != 200) {
          this.requestError = true
          if (response != null && 'data' in response && 'error' in response.data) {
            this.requestResponse = response.data.error
          } else {
            this.requestResponse = 'Something went wrong. Try again later.'
          }
        } else {
          this.requestResponse = `You've been sent ${response.data.amount} BANANO. Recaptcha result is ${response.data.captcha_verified}`
        }
      });
    },
    onCaptchaExpired: function () {
      this.$refs.recaptcha.reset();
    }    
  },
  components: {
    VueRecaptcha
  }
});
</script>