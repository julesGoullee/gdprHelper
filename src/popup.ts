import axios from 'axios'
import browser from 'webextension-polyfill'
import { retry } from './utils'

const SPREADSHEET_BASE_URL =
  'https://script.google.com/macros/s/AKfycbzZElwSPpV3GX0lOLYaKVB2-XqtDnYLzxmV8y0v733b6XyIRLe0t8-0Hs-FWm15dJTs/exec?'

const details: any = {
  tcfapi: {
    url: 'https://iabeurope.eu/iab-europe-transparency-consent-framework-policies',
    label: 'TCF standard api',
  },
  didomi: {
    url: 'https://www.didomi.io',
    label: 'Didomi',
  },
  sirdata: {
    url: 'https://sirdata.com',
    label: 'Sirdata',
  },
  oneTrust: {
    url: 'https://www.onetrust.com',
    label: 'One trust',
  },
  usercentrics: {
    url: 'https://usercentrics.com',
    label: 'User centrics',
  },
  snigel: {
    url: 'https://snigel.com/adconsent',
    label: 'Snigel',
  },
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
  const resultTitle: HTMLElement | null =
    document.querySelector('#results-title')
  if (!resultTitle) {
    throw new Error('result title missing')
  }

  let location: string | null = null
  const resultContainer: HTMLElement | null =
    document.querySelector('#results-container')
  if (!resultContainer) {
    throw new Error('resultContainer missing')
  }
  resultContainer.style.display = 'none'

  const addWebsiteButton: HTMLButtonElement | null =
    document.querySelector('#btn-add-website')
  if (!addWebsiteButton) {
    throw new Error('add website button missing')
  }
  addWebsiteButton.style.display = 'none'

  addWebsiteButton.addEventListener('click', async () => {
    addWebsiteButton.classList.add('disable')
    addWebsiteButton.disabled = true
    addWebsiteButton.textContent = 'Sending....'
    if (location) {
      const res = await axios.get(
        `${SPREADSHEET_BASE_URL}action=addUrl&data=${JSON.stringify({
          url: location,
        })}`
      )
      console.log('Added', res)
      addWebsiteButton.textContent = 'We will take care of it'
    }
  })
  browser.runtime.onMessage.addListener((message, sender) => {
    console.log('got message', message, sender.tab?.windowId)
    addWebsiteButton.style.display = 'inline-block'
    resultTitle.textContent = 'Founds:'
    resultContainer.style.display = 'block'
    location = message.location
    if (Object.keys(message.results).length === 0) {
      resultContainer.innerHTML = 'Nothing'
    } else {
      resultContainer.innerHTML = ''
      Object.keys(message.results).forEach((key) => {
        const el = document.createElement('li')
        const link = document.createElement('a')
        link.target = '_blank'
        el.appendChild(link)
        if (details[key]) {
          link.href = details[key].url
        }
        link.textContent = `${details[key].label}`
        resultContainer.appendChild(el)
      })
    }
  })
  const tabs = await browser.tabs.query({
    lastFocusedWindow: true,
    active: true,
  })
  const tab = tabs[0]
  if (!tab || !tab.id) {
    throw new Error('tab missing')
  }
  if (enable) {
    resultTitle.textContent = 'Loading....'
    await retry(
      () => tab.id && browser.tabs.sendMessage(tab.id, { type: 'GET_RESULT' })
    )
  }
}
init().catch((error) => console.error('init error', error))
