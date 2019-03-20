<template>
  <div class="row align-items-center d-flex justify-content-around my-2 my-md-3">
    <div class="col z-index-100">
      <popper
        :options="{
          placement: 'left',
          modifiers: { offset: { offset: '0,10px' } },   
        }"
      >
        <div class="popper bg-secondary p-3 speech-bubble-two">
          <h3 class="text-left text-primary font-weight-bold">Messages: 12</h3>
          <p class="text-left text-light font-weight-light">ban_1yekta1xn94qdnbmmj
            <br>1tqg76zk3apcfd31pjmuy6
            <br>d879e3mr469a4o4sdhd4
          </p>
        </div>
        <button slot="reference" class="btn-primary bg-transparent border-none rounded-100 px-0">
          <img class="w-100 grow" src="../assets/img/placeholder-monkey.svg">
        </button>
      </popper>
    </div>
    <div
      class="col-7 col-md-8 col-lg-9 py-1 py-md-3 py-lg-4 mr-4 mr-md-5"
      v-bind:class="[message.premium ? ['bg-primary', 'grow-2', 'glow-green', 'speech-bubble-green'] : ['bg-secondary', 'grow-2', 'glow-purple', 'speech-bubble-purple'] ]"
    >
      <div class="row align-items-center align-middle d-flex justify-content-between py-2">
        <h3 class="text-left ml-4 font-weight-bold" 
          v-linkified
          v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
        >{{ decodeMessage(message.content) }}</h3>
        <h5 class="text-left mx-4 font-weight-light"
          v-bind:class="[message.premium ? ['text-dark'] : ['text-light'] ]"
        >{{ message.date }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import Stenography from "../util/stenography.ts";
import linkify from 'vue-linkify'

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
      return Stenography.decodeMessage(content, this.$store.state.sikrit)
    }
  }
});
</script>