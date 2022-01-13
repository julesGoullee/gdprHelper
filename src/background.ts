import browser from 'webextension-polyfill'

browser.runtime.onInstalled.addListener(async () => {
  const options = await browser.storage.sync.get()
  if (options['enable'] === undefined) {
    await browser.storage.sync.set({ enable: true })
  }
})
