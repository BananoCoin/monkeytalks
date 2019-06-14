import hcaptcha from './hcaptcha-wrapper'

export default {
  name: 'VueHcaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    }
  },
  mounted () {
    hcaptcha.checkHcaptchaLoad()
    const opts = Object.assign(this.$props, {
      callback: this.emitVerify,
      'expired-callback': this.emitExpired
    })
    const container = this.$slots.default ? this.$el.children[0] : this.$el
    hcaptcha.render(container, opts, id => {
      this.$widgetId = id
      this.$emit('render', id)
    })
  },
  methods: {
    reset () {
      hcaptcha.reset(this.$widgetId)
    },
    execute () {
      hcaptcha.execute(this.$widgetId)
    },
    emitVerify (response) {
      this.$emit('verify', response)
    },
    emitExpired () {
      this.$emit('expired')
    }
  },
  render (h) {
    return h('div', {}, this.$slots.default)
  }
}