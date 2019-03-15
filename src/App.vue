<template>
  <div id="app" class="bg-dark">
    <!-- NAVBAR -->
    <Navbar></Navbar>
    <!-- NAVBAR END -->
    <!-- ENTER MESSAGE SECTION -->
    <div class="section py-5" id="enter-message">
      <div class="container py-5">
        <div class="row align-items-center d-flex justify-content-around px-4">
          <div class="col-12 col-md-10">
            <form>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control form-control-lg rounded-100 text-primary bg-transparent border-primary px-4"
                  id="messageInput"
                  placeholder="write a message"
                >
                <span class="input-group-btn ml-4">
                  <button type="submit" class="btn btn-lg btn-primary px-5 font-weight-bold">send</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- ENTER MESSAGE SECTION END -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./components/Navbar.vue";

export default Vue.extend({
  name: "app",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Navbar
  }
});
</script>