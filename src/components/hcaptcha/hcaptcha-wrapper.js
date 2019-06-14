import defer from './defer'

export function createHcaptcha () {
  const deferred = defer()

  return {
    notify () {
      deferred.resolve()
    },

    wait () {
      return deferred.promise
    },

    render (ele, options, cb) {
      this.wait().then(() => {
        cb(window.hcaptcha.render(ele, options))
      })
    },

    reset (widgetId) {
      if (typeof widgetId === 'undefined') {
        return
      }

      this.assertLoaded()
      this.wait().then(() => window.hcaptcha.reset(widgetId))
    },

    execute (widgetId) {
      if (typeof widgetId === 'undefined') {
        return
      }

      this.assertLoaded()
      this.wait().then(() => window.hcaptcha.execute(widgetId))
    },

    checkHcaptchaLoad () {
      if (
        window.hasOwnProperty('hcaptcha') &&
        window.hcaptcha.hasOwnProperty('render')
      ) {
        this.notify()
      }
    },

    assertLoaded () {
      if (!deferred.resolved()) {
        throw new Error('HCaptcha has not been loaded')
      }
    }
  }
}

const hcaptcha = createHcaptcha()

if (typeof window !== 'undefined') {
  window.vueHcaptchaApiLoaded = hcaptcha.notify
}

export default hcaptcha