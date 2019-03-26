<template>
  <div class="emojiPicker">
    <ul class="list-unstyled bg-primary rounded-1 emoji-menu position-absolute mx-4 mt-2">
      <li class="py-3 h4 px-5" v-for="(value, key) in emojiMap" :key="key + '1'" @click="emojiClicked(key)">
        <img class="emoji mr-3" :src="value">{{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "FaucetSection",
  data() {
    return {
      emojiMap: this.$store.state.emojiMap
    }
  },
  props: {
    searchText: String,
    itemClicked: Function
  },
  methods: {
    emojiClicked(key, event) {
      this.itemClicked(key)
    }
  },
  watch: {
    searchText: function(newVal, oldVal) {
      if (newVal.length == 0) {
        this.emojiMap = this.$store.state.emojiMap
      } else {
        let newEmojiMap = {}
        for (const [key, value] of Object.entries(this.$store.state.emojiMap)) {
          if (key.startsWith(newVal)) {
            newEmojiMap[key] = value
          }
        }
        this.emojiMap = newEmojiMap
      }
    }
  }
});
</script>