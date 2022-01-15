import browser from 'webextension-polyfill'
import { Inject } from './injectConsent'
import { retry } from './utils'

let results: any = null

function embed(fn: Function) {
  console.info('embed')
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  script.text = `(${fn.toString()})();`
  document.documentElement.appendChild(script)
}

function listenInPage() {
  window.addEventListener('message', async (event) => {
    if (event.data && event.data.type === 'GDPR_HELPER') {
      console.log('new window message', event.data)
      results = event.data.results
      if (results) {
        await retry(async () =>
          browser.runtime.sendMessage({
            results: results,
            location: window.location.href,
          })
        )
      }
    }
  })
}

browser.storage.sync.get('enable').then((options) => {
  console.log('options', options)
  const enable = options['enable']
  if (!enable) {
    console.log('not enable')
    return false
  }
  setTimeout(() => embed(Inject), 100)
  listenInPage()
  setTimeout(() => {
    browser.runtime.onMessage.addListener(async (message) => {
      console.log('new runtime message', message, results)
      if (message.type === 'GET_RESULT' && results) {
        await retry(async () =>
          browser.runtime.sendMessage({
            results: results,
            location: window.location.href,
          })
        )
      }
    })
  }, 5000)

  return true
})
