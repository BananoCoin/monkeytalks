<template>
  <div class="row align-items-center d-flex justify-content-around my-4">
    <div
      class="col-10 col-md-9 col-xl-10 py-2 py-md-3 py-lg-4 px-4"
      v-bind:class="[message.premium ? ['bg-primary', 'grow-2', 'glow-green', 'speech-bubble-green'] : ['bg-secondary', 'grow-2', 'glow-purple', 'speech-bubble-purple'] ]"
    >
      <div class="row align-items-center align-middle d-flex justify-content-between py-2">
        <h3
          class="col-12 text-left col-md-6 font-weight-bold break-word"
          v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
          v-html="decodeMessage(message.content)"
        ></h3>
        <h6
          class="col-12 text-left mt-1 col-md-6 text-md-right mt-md-0 font-weight-light"
          v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
        >{{ formatDate(message.date) }}</h6>
      </div>
      <div class="row align-items-center d-flex justify-content-center py-3 mt-4 px-3 px-md-4">
        <a :href="'https://creeper.banano.cc/explorer/account/'+message.address">
          <h6
            v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
            class="text-center font-weight-light"
          >{{message.address}}</h6>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Stenography from "../util/stenography.ts";
import Util from "../util/util.ts";

export default Vue.extend({
  name: "ChatListItemAdvanced",
  props: {
    message: Object
  },
  methods: {
    decodeMessage(content) {
      let decodedMessage = Stenography.decodeMessage(content);
      let emojiMap = this.$store.state.emojiMap;
      // Process emojis/images
      decodedMessage = Util.escapeHtml(decodedMessage);
      Object.keys(emojiMap).forEach(function(key) {
        decodedMessage = decodedMessage.replace(
          new RegExp(key, "g"),
          `<img src=${emojiMap[key]} class="emoji" />`
        );
      });
      return decodedMessage;
    },
    formatDate(dateStr) {
      return Util.formatDateStr(dateStr);
    }
  }
});
</script>
