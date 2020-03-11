<template>
  <div class="row align-items-center d-flex justify-content-around my-4">
    <div class="col-10 py-2 py-md-3 px-4 bg-secondary speech-bubble-purple opacity-animation-2">
      <div class="row align-items-center align-middle d-flex justify-content-between py-2">
        <h3
          class="text-left font-weight-bold mx-3 mx-md-4 text-light bg-light rounded-100 px-3 my-2 opacity-animation"
        >hello world</h3>
        <h5
          class="text-left font-weight-light mx-3 mx-md-4 text-light bg-light rounded-100 px-3 mx-2 opacity-animation"
        >22:15 / Thu, 16 Mar 2019</h5>
      </div>
      <div
        class="row align-items-center d-flex justify-content-center mx-0 mx-md-2 px-3 px-md-4 py-2 my-2 rounded-2 bg-black-15"
      >
        <h6
          class="text-center font-weight-light break-word text-transparent tk-ibm-plex-mono text-small"
        >549536066067248428368798158059 raw</h6>
      </div>
      <div class="row align-items-center d-flex justify-content-center px-3 px-md-4 py-1">
        <h6
          class="tk-ibm-plex-mono text-small text-center text-light font-weight-light bg-light break-word rounded-100 px-3 my-2 opacity-animation"
        >ban_3h9ykbjs5aor438byaopjekjcwnxixfhmuzsqepsoifxr4qnrfwmn1t6qfh3</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ChatListItemDummy"
});
</script>

<style>
.text-transparent {
  color: transparent;
}
</style>