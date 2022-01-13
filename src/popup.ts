import browser from 'webextension-polyfill'
import { retry } from './utils'

async function init() {
  const btnToggle = document.querySelector('#toggle')

  if (!btnToggle) {
    throw new Error('btnToggle missing')
  }
  const options = await browser.storage.sync.get()
  let enable = options['enable']
  btnToggle.textContent = enable ? 'Disable' : 'Enable'

  btnToggle.addEventListener('click', async () => {
    if (enable) {
      btnToggle.textContent = 'Enable'
      enable = false
    } else {
      btnToggle.textContent = 'Disable'
      enable = true
    }
    await browser.storage.sync.set({ enable })
  })

  // const listUrl = 'abp:subscribe?location=https://secure.fanboy.co.nz/fanboy-annoyance_ubo.txt&title=Fanboy-Annoyances%20List&requiresLocation=https://easylist-downloads.adblockplus.org/easylist.txt&requiresTitle=Easylist'
  // const listUrl = 'https://subscribe.adblockplus.org/?location=https://secure.fanboy.co.nz/fanboy-annoyance.txt&title=Fanboy%27s%20Annoyance%20List'
  const linkEl = document.querySelector('#link-annoyance-list')

  if (!linkEl) {
    throw new Error('link missing')
  }

  linkEl.addEventListener('click', () => {
    // browser.tabs.create({url: listUrl})
  })

  const resultContainer = document.querySelector('#results-container')
  if (!resultContainer) {
    throw new Error('resultContainer missing')
  }
  console.log('add listener')
  browser.runtime.onMessage.addListener((message, sender) => {
    console.log('got message', message, sender.tab?.windowId)
    resultContainer.innerHTML = ''
    Object.keys(message.results).forEach((key) => {
      const el = document.createElement('li')
      el.textContent = `${key}: ${message.results[key]}`
      resultContainer.appendChild(el)
    })
  })
  console.log('get tabs')
  const tabs = await browser.tabs.query({
    // currentWindow: true,
    lastFocusedWindow: true,
    active: true,
  })
  const tab = tabs[0]
  if (!tab || !tab.id) {
    throw new Error('tab missing')
  }
  console.log('sendMessage', tab.windowId)
  await retry(
    () => tab.id && browser.tabs.sendMessage(tab.id, { type: 'GET_RESULT' })
  )
}
init().catch((error) => console.error('init error', error))
