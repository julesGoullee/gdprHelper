import browser from 'webextension-polyfill'
import { logger } from './common/utils'

const tabsResults: any = {}
let currentTabsId: number | null = null

browser.runtime.onInstalled.addListener(async () => {
  const options = await browser.storage.sync.get()
  if (options['enable'] === undefined) {
    await browser.storage.sync.set({ enable: true })
  }
  const tabs = await browser.tabs.query({
    lastFocusedWindow: true,
    active: true,
  })
  const tab = tabs[0]
  if (tab && tab.id) {
    currentTabsId = tab.id
  }
})

browser.runtime.onMessage.addListener(async (message, sender) => {
  logger('bg got message', message, sender.tab?.id)
  if (sender.tab && sender.tab.id) {
    tabsResults[sender.tab.id] = message.results.length.toString()
    if (sender.tab.id === currentTabsId) {
      logger('bg update tabs result', tabsResults[currentTabsId])
      await browser.browserAction.setBadgeText({
        text:
          tabsResults[currentTabsId] && tabsResults[currentTabsId] !== '0'
            ? tabsResults[currentTabsId]
            : null,
      })
    }
  }
})

browser.tabs.onActivated.addListener(async (activeInfo) => {
  currentTabsId = activeInfo.tabId
  logger('bg onActivated', activeInfo, currentTabsId)
  const text =
    tabsResults[currentTabsId] && tabsResults[currentTabsId] !== '0'
      ? tabsResults[currentTabsId]
      : null
  await browser.browserAction.setBadgeText({ text })
  // browser.browserAction.setBadgeBackgroundColor({color:[190, 190, 190, 230]});
})

browser.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  logger('bg onUpdated', tabId, changeInfo)
  if (changeInfo.status === 'loading') {
    if (tabsResults[tabId]) {
      delete tabsResults[tabId]
    }
    await browser.browserAction.setBadgeText({ text: null })
  }
})
