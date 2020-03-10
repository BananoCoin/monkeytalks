<template>
  <div class="row align-items-center d-flex justify-content-around my-4">
    <div class="col-10 py-2 py-md-3 px-4 bg-secondary speech-bubble-purple opacity-animation-2">
      <div class="row align-items-center align-middle d-flex justify-content-between py-2">
        <h3
          class="text-left ml-4 font-weight-bold text-light bg-light rounded-100 px-3 my-2 opacity-animation"
        >hello world</h3>
        <h5
          class="text-left mx-4 font-weight-light text-light bg-light rounded-100 px-3 mx-2 opacity-animation"
        >22:15 / Thu, 16 Mar 2019</h5>
      </div>
      <div class="row justify-content-center my-2 px-3">
        <div class="col-12 rounded-100 divider bg-light"></div>
      </div>
      <div class="row align-items-center d-flex justify-content-center py-3 px-3 px-md-4">
        <h6
          class="tk-ibm-plex-mono text-center text-light font-weight-light bg-light break-word rounded-100 px-3 my-2 opacity-animation"
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

<style scoped>
.divider {
  height: 2px;
  opacity: 15%;
}
</style>