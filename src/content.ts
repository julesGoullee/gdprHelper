// import browser from 'webextension-polyfill'

import browser from 'webextension-polyfill'
import { Inject } from './injectConsent'
import { retry } from './utils'

// async function init1() {
//   const options = await optionsStorage.getAll()
//   const color =
//     'rgb(' +
//     options.colorRed +
//     ', ' +
//     options.colorGreen +
//     ',' +
//     options.colorBlue +
//     ')'
//   const text = options.text
//   const notice = document.createElement('div')
//   notice.innerHTML = text + 'caca'
//   document.body.append(notice)
//   notice.id = 'text-notice'
//   notice.style.border = '2px solid ' + color
//   notice.style.color = color
// }

// init1()

// function init(){
//   console.log('init', window.location.host)
//   if(window.location.host === 'www.lemonde.fr'){
//     const btn: HTMLElement | null = document.body.querySelector('[data-gdpr-expression="denyAll"]')
//     if(btn){
//       btn.click()
//       const banner = document.body.querySelector('#js-message-register')
//       if(banner){
//         banner.remove()
//         return true
//       }
//     }
//     return false
//   } else if(window.location.host === 'www.google.com'){
//     const btn: HTMLElement | null = document.body.querySelector('#VnjCcb')
//     if(btn){
//       btn.click()
//       return true
//     }
//     return false
//   } else if(window.location.host === 'consent.google.com'){
//     const btns: NodeListOf<HTMLInputElement> = document.querySelectorAll('[jsname="V67aGc"]')
//     btns.forEach(btn => btn.innerHTML === 'Off' && btn.click() )
//     const confirm = Array.from(btns).find(btn => btn.innerHTML === 'Confirm')
//     if(confirm){
//       confirm.click()
//       return true
//     }
//     return false
//   } else if(window.location.host === 'www.marmiton.org'){
//     const btn: HTMLElement | null = document.body.querySelector('#didomi-notice-disagree-button')
//     if(btn){
//       btn.click()
//       const banner = document.querySelector('#didomi-host')
//       if(banner){
//         banner.remove()
//         return true
//       }
//     }
//     return false
//   } else if(window.location.host === 'www.nytimes.com'){
//     const btn: HTMLElement | null = document.body.querySelector('[data-testid="GDPR-reject"]')
//     if(btn) {
//       btn.click()
//       return true
//     }
//     return false
//   } else {
//     return false
//   }
// // }
//
// console.info('content')

browser.storage.sync.get('enable').then((options) => {
  console.log('options', options)
  const enable = options['enable']
  if (!enable) {
    console.log('not enable')
    return false
  }
  function embed(fn: Function) {
    console.info('embed')
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.text = `(${fn.toString()})();`
    document.documentElement.appendChild(script)
  }
  setTimeout(() => embed(Inject), 100)
  let results: any = null
  window.addEventListener('message', async (event) => {
    if (event.data && event.data.type === 'GDPR_HELPER') {
      console.log('new window message', event.data)
      results = event.data.results
      if (results) {
        await retry(async () =>
          browser.runtime.sendMessage({ results: results })
        )
      }
    }
  })
  setTimeout(() => {
    browser.runtime.onMessage.addListener(async (message) => {
      console.log('new runtime message', message, results)
      if (message.type === 'GET_RESULT' && results) {
        await retry(async () =>
          browser.runtime.sendMessage({ results: results })
        )
      }
    })
  }, 5000)

  return true
})
