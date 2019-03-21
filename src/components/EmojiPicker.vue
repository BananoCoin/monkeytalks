<template>
  <div class="emojiPicker">
    <ul class="list-unstyled bg-primary rounded-1 emoji-menu position-absolute px-5 mx-4 mt-2">
      <li class="my-4 h4 mx-3">
        <img class="emoji mr-3" src="../assets/img/bebe.png">:beb
      </li>
      <li class="my-4 h4 mx-3">
        <img class="emoji mr-3" src="../assets/img/coolstorybro.png">:csb
      </li>
      <li class="my-4 h4 mx-3">
        <img class="emoji mr-3" src="../assets/img/hng.svg">:hng
      </li>
      <li class="my-4 h4 mx-3">
        <img class="emoji mr-3" src="../assets/img/raugh.png">:rau
      </li>
      <li class="my-4 h4 mx-3">
        <img class="emoji mr-3" src="../assets/img/smug.svg">:smg
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "FaucetSection"
});
</script>