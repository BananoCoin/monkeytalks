<template>
  <div id="home-section">
    <!-- NAVBAR -->
    <Navbar></Navbar>
    <!-- NAVBAR END -->
    <!-- FAUCET END -->
    <transition-expand>
      <FaucetSection v-if="$store.state.showFaucet"/>
    </transition-expand>
    <!-- FAUCET END -->
    <!-- ENTER MESSAGE SECTION -->
    <div class="section pt-4 pt-md-5 pb-4 px-1" id="enter-message-section">
      <div class="container pt-4 pt-md-5">
        <div class="row align-items-center d-flex justify-content-around">
          <div class="col-12 col-lg-10">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  class="font-weight-bold form-control form-control-lg rounded-100 bg-transparent border-2 px-4 px-lg-5 col-12 col-md-9 mx-0 mx-md-2"
                  id="messageInput"
                  @input="onMessageChanged"
                  v-model="messageContent"
                  placeholder="Write a message"
                  ref="messageInputValue"
                  v-bind:class="[$store.state.showSendCard ? ['textfield-secondary', 'text-secondary', 'border-secondary'] : ['textfield-primary', 'text-primary', 'border-primary'], 'text-lowercase']"
                >
                <span class="input-group-btn col-12 col-md-3 mt-3 mt-md-0 px-0 mx-0 mx-md-2">
                  <button
                    type="submit"
                    class="btn btn-lg btn-block mx-0"
                    @click = "toggleSendCard"
                    :disabled = "inputDisabled"
                    v-bind:class="[$store.state.showSendCard ? ['btn-secondary', 'text-light', 'glow-purple', 'grow-3'] 
                    : (messageContent.length == 0 ? ['btn-primary', 'text-dark'] : ['btn-primary', 'text-dark', 'glow-green', 'grow-3']) ]"
                  >{{$store.state.showSendCard ? "Close" : "Send"}}</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ENTER MESSAGE SECTION END -->
    <!-- SEND CARD SECTION END -->
    <transition-expand>
      <SendCardSection v-if="$store.state.showSendCard" :messageContent="messageContent"/>
    </transition-expand>
    <!-- SEND CARD SECTION END -->
    <!-- CHAT SECTION -->
    <div class="section" id="chat-section">
      <div class="container mt-4">
        <div class="row align-items-center d-flex justify-content-between pr-3">
          <div class="col-12 col-md-10 col-lg-9 mx-auto">
            <transition-group name="list-item">
              <ChatListItem v-for="message in messages" :message="message" :key="message.id"/>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
    <!-- CHAT SECTION END -->
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import ChatListItem from "./ChatListItem.vue";
import FaucetSection from "./FaucetSection.vue";
import TransitionExpand from "./TransitionExpand.vue";
import SendCardSection from "./SendCardSection.vue";
import Stenography from "../util/stenography.ts";
import Big from 'big.js'

// Dummy data
const messages = [
  {
    id: 5,
    content: "3085200816947056507",
    date: "3/16 02:02:02",
    premium : true
  },
  {
    id: 4,
    content: "34602775138082315",
    date: "3/16 03:02:02",
  },
  {
    id: 3,
    content: "3085200816947056507",
    date: "3/16 02:02:02",
  }
];

export default Vue.extend({
  name: "Home",
  data() {
    return {
      messages: messages,
      messageContent: ""
    };
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      messages.unshift({
        id: messages[0].id + 1,
        content: this.$refs.messageInputValue.value,
        date: new Date().toString()
      });
      this.$refs.messageInputValue.value = "";
    },
    toggleSendCard(event) {
      event.preventDefault();
      this.$store.state.showSendCard = !this.$store.state.showSendCard;
    },
    onMessageChanged(event) {
      // Replace characters not in the ascii range 32-96
      this.messageContent = this.messageContent.replace(/[^\x20-\x7A]+/g, "");
      this.messageContent = this.messageContent.toLowerCase()
      Big.DP = 29
      if (Big(Stenography.encodeMessage(this.messageContent)).gt(Big(10).pow(29))) {
        this.messageContent = this.messageContent.slice(0, -1)
      }
    }
  },
  computed: {
    inputDisabled: function() {
      return (
        this.messageContent.length == 0 && !this.$store.state.showSendCard
      );
    }
  },
  components: {
    Navbar,
    ChatListItem,
    FaucetSection,
    TransitionExpand,
    SendCardSection
  },
  sockets: {
    connect: function() {
      console.log("connected to websocket");
    },
    new_message: function(data) {
      console.log(data);
    }
  }
});
</script>

<style lang="scss">
@import "../assets/css/atten_font.css";
@import "../assets/css/main.scss";
</style>

<style>
/* faucet expand transition */
.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}

.expand-enter,
.expand-leave-to {
  opacity: 0;
}

/* list item animation */
.list-item-enter-active,
.list-item-leave-active {
  transition: opacity 0.3s, transform 0.3s;
  transform-origin: left center;
}
.list-item-enter,
.list-item-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>