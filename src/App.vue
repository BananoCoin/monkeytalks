<template>
  <div id="app" class="bg-dark">
    <!-- NAVBAR -->
    <Navbar></Navbar>
    <!-- NAVBAR END -->

    <!-- FAUCET END -->
    <FaucetSection></FaucetSection>
    <!-- FAUCET END -->

    <!-- ENTER MESSAGE SECTION -->
    <div class="section py-4 py-md-5" id="enter-message-section">
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
                >
                <span class="input-group-btn col-12 col-md-3 mt-3 mt-md-0 px-0 mx-0 mx-md-2">
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary text-dark btn-block font-weight-bold mx-0"
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
        <div class="row align-items-center d-flex justify-content-between">
          <div class="col-12 col-md-10 col-lg-10 mx-auto">
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
            <ChatListItem></ChatListItem>
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

export default Vue.extend({
  name: "app",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Navbar,
    ChatListItem,
    FaucetSection
  }
});
</script>