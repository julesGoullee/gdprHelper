import { logger } from '../../common/utils'
import { clickElements } from '../utils'

export class CookieBotProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'cookieBot'

  check() {
    // https://www.cookiebot.com
    if (window.CookieConsent) {
      logger('######################## cookieBot')
      if (clickElements('#CybotCookiebotDialogBodyButtonDecline')) {
        this.found = true
        this.done = true
        this.labels.add('cookieBot')
      }
    }
  }
}
