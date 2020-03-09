<template>
  <div id="home-section">
    <!-- NAVBAR -->
    <Navbar class="mb-1" :showHomeButton="true"></Navbar>
    <!-- NAVBAR END -->
    <!-- CHAT SECTION -->
    <div class="section mb-5 mt-4 mt-md-5 pb-0 pb-md-3" id="chat-section">
      <div class="container mb-5 mt-0 md-mt-5">
        <div class="row align-items-center d-flex justify-content-between">
          <div class="col-12 col-md-11 col-lg-9 mx-auto">
            <transition-group name="list-item" v-if="messages">
              <a :href="'https://creeper.banano.cc/explorer/block/'+message.block_hash">
                <ChatListItemAdvanced
                  v-for="message in messages"
                  :message="message"
                  :key="message.id"
                />
              </a>
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
      loadingMessages: [],
      messageContent: "",
      showEmojiMenu: false,
      emojiIndexStart: -1,
      emojiIndexEnd: -1,
      emojiSearchText: ""
    };
  },
  methods: {},
  computed: {
    inputDisabled: function() {
      return this.messageContent.length == 0 && !this.$store.state.showSendCard;
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
        this.loadingMessages.forEach(element => {
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