<template>
  <div class="emojiPicker">
    <ul class="list-unstyled bg-primary rounded-1 emoji-menu position-absolute px-5 mx-4 mt-2">
      <li class="my-4 h4 mx-3" v-for="(value, key) in $store.state.emojiMap" :key="key">
        <img class="emoji mr-3" :src="value">{{ key }}
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