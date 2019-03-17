<template>
  <div id="app">
    <!-- NAVBAR -->
    <Navbar></Navbar>
    <!-- NAVBAR END -->
    <!-- FAUCET END -->
    <FaucetSection v-if="$store.state.showHide"/>
    <!-- FAUCET END -->
    <!-- ENTER MESSAGE SECTION -->
    <div class="section py-4" id="enter-message-section">
      <div class="container py-4 py-md-5">
        <div class="row align-items-center d-flex justify-content-around">
          <div class="col-12 col-md-10">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  class="textfield-primary form-control form-control-lg rounded-100 text-primary bg-transparent border-primary border-2 px-4 px-lg-5 col-12 col-md-9 mx-0 mx-md-2 ml-lg-4"
                  id="messageInput"
                  placeholder="Write a message"
                  ref="messageInputValue"
                >
                <span class="input-group-btn col-12 col-md-3 mt-3 mt-md-0 px-0 mx-0 mx-md-2">
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary text-dark btn-block font-weight-bold mx-0"
                    @click="sendMessage"
                  >Send</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ENTER MESSAGE SECTION END -->
    <!-- CHAT SECTION -->
    <div class="section" id="chat-section">
      <div class="container">
        <div class="row align-items-center d-flex justify-content-between pr-3">
          <div class="col-12 col-md-10 col-lg-9 mx-auto">
            <ChatListItem v-for="message in messages" :message="message" :key="message.content"/>
          </div>
        </div>
      </div>
    </div>
    <!-- CHAT SECTION END -->
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
import ChatListItem from "./components/ChatListItem.vue";
import FaucetSection from "./components/FaucetSection.vue";

// Dummy data
const messages = [
  {
    content: "hi jungle",
    date: "3/16 02:02:02"
  },
  {
    content: "hola",
    date: "3/16 03:02:02"
  },
  {
    content: "bbedward 4 president",
    date: "3/16 04:02:02"
  },
  {
    content: "a message",
    date: "3/16 05:02:02"
  },
  {
    content: "banano to the moon",
    date: "3/16 06:02:02"
  }
];

export default Vue.extend({
  name: "app",
  data() {
    return {
      msg: "",
      messages: messages
    };
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      messages.unshift({
        content: this.$refs.messageInputValue.value,
        date: new Date().toString()
      });
      this.$refs.messageInputValue.value = "";
    }
  },
  components: {
    Navbar,
    ChatListItem,
    FaucetSection,
  },
  sockets: {
    connect: function() {
      console.log("connected to websocket");
    }
  }
});
</script>