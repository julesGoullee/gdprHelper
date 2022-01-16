import { clickElements } from '../utils'

export class GoogleProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'google'

  check() {
    if (window.location.host === 'www.google.com') {
      if (clickElements('#VnjCcb')) {
        console.info('######################## google btn')
        this.found = true
        this.done = true
        this.labels.add('googleBtn')
      }
    } else if (window.location.host === 'consent.google.com') {
      const btns: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('[jsname="V67aGc"]')
      btns.forEach((btn) => btn.innerHTML === 'Off' && btn.click())
      const confirm = Array.from(btns).find(
        (btn) => btn.innerHTML === 'Confirm'
      )
      if (confirm) {
        console.info('######################## google consent confirm')
        confirm.click()
        this.found = true
        this.done = true
        this.labels.add('googleConsent')
      }
    }
  }
}
