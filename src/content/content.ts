import axios from 'axios'
import browser from 'webextension-polyfill'
import { retry } from '../common/utils'

let results: any = null

async function injectScript(path: string) {
  console.info('injectScript')
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.async = true
  const content = await axios.get(browser.runtime.getURL(path))
  script.text = content.data
  document.documentElement.appendChild(script)
}

function listenInject() {
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

function listenPopup() {
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
}

async function init(): Promise<boolean> {
  const options = await browser.storage.sync.get('enable')
  console.log('options', options)
  const enable = options['enable']
  if (!enable) {
    console.log('not enable')
    return false
  }
  listenInject()
  listenPopup()
  await injectScript('content/injectConsent.js')
  return true
}

init().catch((error) => console.error('init error', error))
