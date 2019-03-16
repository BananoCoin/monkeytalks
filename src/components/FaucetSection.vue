<template>
  <div v-if="$store.state.showHide" class="section px-3 my-2" id="faucet-section">
    <div class="container px-0">
      <div class="container bg-secondary py-5 rounded-1">
        <div class="row align-items-center d-flex justify-content-around">
          <div class="col-12">
            <h3
              class="text-center text-light font-weight-bold"
            >Please enter your Banano address below.</h3>
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
                  class="textfield-light form-control form-control-lg rounded-100 text-light bg-transparent border-light border-2 mt-3 px-4 px-lg-5"
                  id="addressInput"
                  placeholder="ban_address"
                >
              </div>
              <button
                type="submit"
                class="btn btn-lg btn-light btn-block font-weight-bold mt-3 mx-auto col-12 col-md-8 col-lg-6 text-secondary"
              >Send Me Some Banano</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "FaucetSection",
});
</script>