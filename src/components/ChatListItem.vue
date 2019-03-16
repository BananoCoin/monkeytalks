<template>
  <div class="row align-items-center d-flex justify-content-around my-2 my-md-3">
    <div class="col">
      <img class="w-100" src="../assets/img/placeholder-monkey.svg">
    </div>
    <div class="col-7 col-md-8 col-lg-9 bg-secondary py-1 py-md-3 py-lg-4 speech-bubble mr-4 mr-md-5">
      <div class="row align-items-center align-middle d-flex justify-content-between py-2">
        <h3 class="text-left text-light font-weight-light ml-4">{{ message.content }}</h3>
        <h5 class="text-left text-light font-weight-light mx-4">{{ message.date }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "ChatListItem",
  props: {
    message : Object
  }
});
</script>