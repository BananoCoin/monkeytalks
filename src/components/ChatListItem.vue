<template>
  <div class="row align-items-center d-flex justify-content-around my-3 my-md-4 pr-3">
    <div class="col z-index-100">
      <popper
        :options="{
          placement: 'left',
          modifiers: { offset: { offset: '0,10px' } },   
        }"
      >
        <div class="popper bg-secondary p-3 speech-bubble-two">
          <h3 class="text-left text-primary font-weight-bold">Messages: {{ message.count }}</h3>
          <p class="text-left text-light font-weight-light" v-html="threeLineAddress(message.address)" />
        </div>
        <button slot="reference" class="btn-primary bg-transparent border-none rounded-100 px-0">
          <img class="w-100 grow" src="../assets/img/placeholder-monkey.svg">
        </button>
      </popper>
    </div>
    <div
      class="col-7 col-md-8 col-lg-9 py-2 py-md-3 py-lg-4 px-4 mr-3 mr-md-4 mr-lg-5"
      v-bind:class="[message.premium ? ['bg-primary', 'grow-2', 'glow-green', 'speech-bubble-green'] : ['bg-secondary', 'grow-2', 'glow-purple', 'speech-bubble-purple'] ]"
    >
      <div class="row align-items-center align-middle d-flex justify-content-between py-2">
        <h3 class="col-12 text-left col-md-6 font-weight-bold" 
          v-linkified
          v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
          v-html="decodeMessage(message.content)"></h3>
        <h6 class="col-12 text-left mt-1 col-md-6 text-md-right mt-md-0 font-weight-light "
          v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
        >{{ formatDate(message.date) }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Popper from "vue-popperjs"
import "vue-popperjs/dist/vue-popper.css"
import Stenography from "../util/stenography.ts"
import linkify from 'vue-linkify'
import Util from '../util/util.ts'

Vue.directive('linkified', linkify)

export default Vue.extend({
  name: "ChatListItem",
  props: {
    message: Object
  },
  components: {
    popper: Popper
  },
  methods: {
    decodeMessage(content) {
      let decodedMessage =  Stenography.decodeMessage(content)
      let emojiMap = this.$store.state.emojiMap
      // Process emojis/images
      decodedMessage = Util.escapeHtml(decodedMessage)
      Object.keys(emojiMap).forEach(function(key) {
        decodedMessage = decodedMessage.replace(key, `<img src=${emojiMap[key]} height="50" width="50" />`)
      })
      return decodedMessage
    },
    formatDate(dateStr) {
      return Util.formatDateStr(dateStr)
    },
    threeLineAddress(address) {
      if (address.length < 64) {
        return address;
      }
      return `${address.substring(0, 22)}<br />${address.substring(22, 43)}<br />${address.substring(43, 64)}`
    }
  }
});
</script>