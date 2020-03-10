<template>
  <div id="home-section">
    <!-- NAVBAR -->
    <Navbar class="mb-1" :showHomeButton="true"></Navbar>
    <!-- NAVBAR END -->
    <!-- SEARCH MESSAGE SECTION -->
    <div class="section pt-4 pt-md-5 pb-4 px-1 my-1" id="enter-message-section">
      <div class="container pt-4 pt-md-5">
        <div class="row align-items-center d-flex justify-content-center">
          <div class="col-12 col-lg-10 align-items-center justify-content-center">
            <input
              type="text"
              class="font-weight-bold form-control form-control-lg rounded-100 bg-transparent border-2 px-4 px-lg-5 col-12 col-md-9 mx-auto"
              id="searchInput"
              v-model="searchValue"
              placeholder="Search a message"
              ref="messageInputValue"
              autocomplete="off"
              v-bind:class="[$store.state.showSendCard ? ['textfield-secondary', 'text-secondary', 'border-secondary'] : ['textfield-primary', 'text-primary', 'border-primary'], 'text-lowercase']"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- SEARCH MESSAGE SECTION END -->
    <!-- CHAT SECTION -->
    <div class="section mb-5 mt-2 mt-md-5 pb-0 pb-md-3" id="chat-section">
      <div class="container mb-5 mt-0 md-mt-5">
        <div class="row align-items-center d-flex justify-content-between">
          <div class="col-12 col-md-11 col-lg-9 mx-auto">
            <transition-group name="list-item" v-if="messages">
              <ChatListItemAdvanced
                v-for="message in filteredMessages"
                :message="message"
                :key="message.id"
              />
            </transition-group>
            <div v-else>
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
              <ChatListItemAdvancedDummy />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CHAT SECTION END -->
    <!-- FOOTER -->
    <Footer />
    <!-- FOOTER END -->
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import ChatListItemAdvanced from "./ChatListItemAdvanced.vue";
import ChatListItemAdvancedDummy from "./ChatListItemAdvancedDummy.vue";
import Stenography from "../util/stenography.ts";
import Closable from "../directives/closable";
import API from "../util/api.ts";
import Big from "big.js";
import bigInt from "big-integer";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      messages: null,
      searchValue: "",
      messageContent: "",
      showEmojiMenu: false,
      emojiIndexStart: -1,
      emojiIndexEnd: -1,
      emojiSearchText: ""
    };
  },
  methods: {},
  computed: {
    filteredMessages: function() {
      if (this.messages != null) {
        return this.messages.filter(message => {
          return message.content.match(this.searchValue);
        });
      }
    }
  },
  components: {
    Navbar,
    ChatListItemAdvanced,
    ChatListItemAdvancedDummy,
    Footer
  },
  mounted: function() {
    API.get2000Messages().then(response => {
      if (response != null) {
        this.messages = [];
        response.forEach(element => {
          if (Stenography.decodeMessage(element.content) !== false) {
            this.messages.push(element);
          }
        });
      }
    });
  }
});
</script>

<style lang="scss">
@import "../assets/css/atten_font.css";
@import "../assets/css/main.scss";
</style>

<style>
</style>