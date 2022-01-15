import browser from 'webextension-polyfill'
import { retry } from './utils'

const detailsLink: any = {
  tcfapi:
    'https://iabeurope.eu/iab-europe-transparency-consent-framework-policies',
  didomi: 'https://www.didomi.io',
  sirdata: 'https://sirdata.com',
  oneTrust: 'https://www.onetrust.com',
  usercentrics: 'https://usercentrics.com',
}
async function init() {
  const btnToggle = document.querySelector('#toggle')

  if (!btnToggle) {
    throw new Error('btnToggle missing')
  }
  const options = await browser.storage.sync.get()
  let enable = options['enable']
  btnToggle.textContent = enable ? 'Disable' : 'Enable'
  btnToggle.textContent = enable ? 'Disable' : 'Enable'
  btnToggle.classList.add(enable ? 'disable' : 'enable')

  btnToggle.addEventListener('click', async () => {
    if (enable) {
      btnToggle.textContent = 'Enable'
      btnToggle.classList.remove('disable')
      btnToggle.classList.add('enable')
      enable = false
    } else {
      btnToggle.textContent = 'Disable'
      btnToggle.classList.remove('enable')
      btnToggle.classList.add('disable')
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
  browser.runtime.onMessage.addListener((message, sender) => {
    console.log('got message', message, sender.tab?.windowId)
    resultContainer.innerHTML = ''
    Object.keys(message.results).forEach((key) => {
      const el = document.createElement('li')
      const link = document.createElement('a')
      link.target = '_blank'
      el.appendChild(link)
      if (detailsLink[key]) {
        link.href = detailsLink[key]
      }
      link.textContent = `${key}`
      resultContainer.appendChild(el)
    })
  })
  const tabs = await browser.tabs.query({
    lastFocusedWindow: true,
    active: true,
  })
  const tab = tabs[0]
  if (!tab || !tab.id) {
    throw new Error('tab missing')
  }
  await retry(
    () => tab.id && browser.tabs.sendMessage(tab.id, { type: 'GET_RESULT' })
  )
}
init().catch((error) => console.error('init error', error))
