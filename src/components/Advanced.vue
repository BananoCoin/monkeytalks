<template>
  <div id="home-section">
    <!-- NAVBAR -->
    <Navbar class="mb-1" :showHomeButton="true"></Navbar>
    <!-- NAVBAR END -->
    <!-- SEARCH MESSAGE SECTION -->
    <div class="section pt-4 pt-md-5 pb-3 px-1" id="enter-message-section">
      <div class="container pt-4 pt-md-5">
        <div class="row align-items-center d-flex justify-content-center">
          <div class="col-12 col-lg-10 align-items-center justify-content-center">
            <input
              type="text"
              class="text-lowercase textfield-primary text-primary border-primary font-weight-bold form-control form-control-lg rounded-100 bg-transparent border-2 px-4 px-lg-5 col-12 col-md-9 mx-auto"
              id="searchInput"
              v-model="searchValue"
              placeholder="Search a message"
              ref="messageInputValue"
              autocomplete="off"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- SEARCH MESSAGE SECTION END -->
    <!-- CHAT SECTION -->
    <div class="section mb-5 mt-md-2 pb-0 pb-md-3" id="chat-section">
      <div class="container mb-5 mt-0 md-mt-5">
        <div class="row align-items-center d-flex justify-content-between">
          <div class="col-12 col-md-11 col-lg-9 mx-auto">
            <div v-if="messages && isThereAnyMatch">
              <ChatListItemAdvanced
                v-for="message in filteredMessages"
                :message="message"
                :key="message.id"
              />
            </div>
            <div
              v-else-if="!isThereAnyMatch"
              class="row align-items-center d-flex justify-content-around my-4"
            >
              <div class="col-10 py-2 py-md-3 px-3">
                <h3
                  class="text-center mx-auto font-weigh-bold text-primary word-break"
                >There is no match, be less original.</h3>
              </div>
            </div>
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
import Util from "../util/util.ts";
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
      isThereAnyMatch: true,
      messageContent: "",
      showEmojiMenu: false,
      emojiIndexStart: -1,
      emojiIndexEnd: -1,
      emojiSearchText: ""
    };
  },
  methods: {
    decodeMessage(content) {
      let decodedMessage = Stenography.decodeMessage(content);
      return decodedMessage;
    }
  },
  computed: {
    filteredMessages: function() {
      if (this.messages) {
        if (
          this.searchValue == "" ||
          this.searchValue == null ||
          this.searchValue.length < 1
        ) {
          this.isThereAnyMatch = true;
          return this.messages;
        } else {
          var filteredArray = this.messages.filter(message => {
            return this.decodeMessage(message.content).match(
              this.searchValue.toLowerCase()
            );
          });
          if (filteredArray.length < 1) {
            if (this.isThereAnyMatch) {
              this.isThereAnyMatch = false;
              console.log("There is no match");
            }
          } else {
            this.isThereAnyMatch = true;
            console.log("There is a match");
          }
          return filteredArray;
        }
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
#chat-section {
  min-height: 25vh;
}
@media only screen and (min-width: 768px) {
  #chat-section {
    min-height: 35vh;
  }
}
@media only screen and (min-width: 992px) {
  #chat-section {
    min-height: 45vh;
  }
}
</style>