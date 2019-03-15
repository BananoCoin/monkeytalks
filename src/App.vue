<template>
  <div id="app" class="bg-dark">
    <!-- NAVBAR -->
    <Navbar></Navbar>
    <!-- NAVBAR END -->
    <!-- ENTER MESSAGE SECTION -->
    <div class="section py-4 py-md-5" id="enter-message-section">
      <div class="container py-4 py-md-5">
        <div class="row align-items-center d-flex justify-content-around">
          <div class="col-12 col-md-10">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-lg rounded-100 text-primary bg-transparent border-primary px-4 col-12 col-md-9 ml-0 ml-md-3 ml-lg-4"
                  id="messageInput"
                  placeholder="write a message"
                >
                <span class="input-group-btn col-12 col-md-3 mt-3 mt-md-0">
                  <button
                    type="submit"
                    class="btn btn-lg btn-primary w-100 font-weight-bold mx-0"
                  >send</button>
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

export default Vue.extend({
  name: "app",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Navbar,
    ChatListItem
  }
});
</script>