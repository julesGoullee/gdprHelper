import browser from 'webextension-polyfill'
import { Config } from '../common/config'
import { logger, retry } from '../common/utils'
import { AddWebsite } from './addWebsite'

export class Result {
  title: HTMLElement
  enable: boolean
  container: HTMLElement
  addWebsite: AddWebsite

  constructor(enable: boolean, addWebsite: AddWebsite) {
    this.enable = enable
    this.addWebsite = addWebsite
    this.title = Result.getTitle()
    this.container = Result.getResultContainer()
    this.listenPage()
  }

  static getTitle(): HTMLElement {
    const element: HTMLElement | null = document.querySelector('#results-title')
    if (!element) {
      throw new Error('result title missing')
    }
    return element
  }

  static getResultContainer(): HTMLElement {
    const element: HTMLElement | null =
      document.querySelector('#results-container')
    if (!element) {
      throw new Error('result container missing')
    }
    element.style.display = 'none'
    return element
  }

  async askPage(): Promise<boolean> {
    const tabs = await browser.tabs.query({
      lastFocusedWindow: true,
      active: true,
    })
    const tab = tabs[0]
    if (!tab || !tab.id) {
      throw new Error('tab missing')
    }
    if (this.enable) {
      this.title.textContent = 'Loading....'
      await retry(
        () => tab.id && browser.tabs.sendMessage(tab.id, { type: 'GET_RESULT' })
      )
      return true
    }
    return false
  }

  listenPage(): boolean {
    if (!this.enable) {
      return false
    }
    browser.runtime.onMessage.addListener((message, sender) => {
      logger('got message', message, sender.tab?.windowId)
      this.title.textContent = 'Founds:'
      this.container.style.display = 'block'
      this.addWebsite.showButton()
      this.addWebsite.location = message.location
      if (Object.keys(message.results).length === 0) {
        this.container.innerHTML = 'Nothing'
      } else {
        this.container.innerHTML = ''
        message.results.forEach((label: string) => {
          logger('label', label)
          const el = document.createElement('li')
          const link = document.createElement('a')
          link.target = '_blank'
          el.appendChild(link)
          if (Config.details[label]) {
            link.href = Config.details[label].url
            link.textContent = `${Config.details[label].label}`
          } else {
            link.textContent = label
          }
          this.container.appendChild(el)
        })
      }
    })
    return true
  }
}
