<template>
  <div class="emojiPicker">
    <ul class="list-unstyled bg-primary rounded-1 emoji-menu position-absolute mx-4 mt-2">
      <li :id="key" class="py-4 h4 px-5" v-for="(value, key) in emojiMap" :key="key + '1'" @click="emojiClicked(key)" v-focus data-down="AUTOFOCUS" data-up="AUTOFOCUS">
        <img class="emoji mr-3" :src="value">{{ key }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import VueSpatialNavigation, {navigationService} from "vue-spatialnavigation";
Vue.use(VueSpatialNavigation)

export default Vue.extend({
  name: "FaucetSection",
  data() {
    return {
      emojiMap: this.$store.state.emojiMap
    }
  },
  created: function() {
    window.addEventListener('keydown', (e) => {
      if (!this.visible) {
        return
      }
      let charCode = e.which || e.keyCode;
      if (charCode == 9) {
        e.preventDefault()
        if (navigationService.getFocusElementInFocus() == null) {
          let el = navigationService.getFocusElementById(Object.keys(this.emojiMap)[0]);
          if (el != null) {
            el.focus()
          }
        } else {
          this.focusNextElement()
        }
      } else if (charCode == 13) {
        event.preventDefault()
        let el = navigationService.getFocusElementInFocus()
        if (el != null) {
          this.emojiClicked(el.id)
        }
      }
    });
  },
  props: {
    searchText: String,
    itemClicked: Function,
    visible: Boolean
  },
  methods: {
    emojiClicked(key, event) {
      this.itemClicked(key)
    },
    focusNextElement() {
      let el = navigationService.getFocusElementInFocus()
      if (el != null) {
        let foundElement = false;
        let nextElement = null
        for (const [key, value] of Object.entries(this.emojiMap)) {
          if (key == el.id) {
            foundElement = true;
          } else if (foundElement) {
            nextElement = key;
            break
          }
        }  
        if (nextElement != null) {
          let el = navigationService.getFocusElementById(nextElement)
          if (el != null) {
            el.focus()
          }
        } else {
          let el = navigationService.getFocusElementById(Object.keys(this.emojiMap)[0])
          if (el != null) {
            el.focus()
          }
        }
      }
    },
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