<template>
  <div class="section px-3 mt-1 mb-5" id="sendCard-section">
    <div class="container px-0 px-md-4">
      <div class="container bg-secondary py-5 rounded-1 col-12 col-md-10">
        <div class="row align-items-center d-flex justify-content-center">
          <div class="col-12 col-md-5 px-4">
            <h4 class="text-center text-md-left text-light font-weight-light">Your Message:</h4>
            <h2 class="text-center text-md-left text-light font-weight-extrabold">Hello World</h2>
            <br>
            <h4 class="text-center text-md-left text-light font-weight-light">
              Scan the QR code with
              <span class="font-weight-extrabold h3">Kalium</span> and send
              <span class="font-weight-extrabold h3">10.12 Banano</span> to publish the message.
            </h4>
          </div>
          <div class="col-10 col-md-3 d-flex justify-content-center align-items-center mx-0 px-0">
              <div class="position-absolute w-100">
                <img class="w-100" src="../assets/img/monkeyQR.svg">
              </div>
              <div class="position-absolute w-49">
                <qriously value="ban_1yekta1xn94qdnbmmj1tqg76zk3apcfd31pjmuy6d879e3mr469a4o4sdhd4" 
                    :size="1024" 
                    level="M" 
                    id="amountQr"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import posed from "vue-pose";
import VueQriously from "vue-qriously";
Vue.use(VueQriously);
export default Vue.extend({
  name: "SendCardSection"
});
</script>

<style>
#amountQr > canvas {
  width: 100%;
  margin-top: 55%;
}
#amountQR {
  position: absolute;
}
.qrSize {
  size: 50rem;
}
.w-49{
     width: 48%;
}
</style>