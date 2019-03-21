<template>
  <div class="section px-3" id="faucet-section">
    <div class="container px-0">
      <div class="container bg-secondary py-5 rounded-1">
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
              <button
                type="submit"
                :class="['btn', 'btn-lg', isValidAddress ? ['btn-primary', 'glow-green'] : ['btn-light', 'glow-pink'], 'btn-block', 'mt-3', 'mx-auto', 'col-12', 'col-md-8', 'col-lg-6', 'text-secondary', 'grow-3']"
              >Send Me Some Banano</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import Util from "../util/util.ts"

export default Vue.extend({
  name: "FaucetSection",
  data() {
    return {
      addressValue: '',
      isValidAddress: false
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
    }
  }
});
</script>