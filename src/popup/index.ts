import browser from 'webextension-polyfill'
import { AddWebsite } from './addWebsite'
import { Result } from './result'
import { ToggleButton } from './toogleButton'

async function init() {
  const options = await browser.storage.sync.get()
  const enable = options['enable']

  ToggleButton(enable)
  const addWebsite = new AddWebsite()
  const result = new Result(enable, addWebsite)
  await result.askPage()
}

init().catch((error) => console.error('init error', error))
