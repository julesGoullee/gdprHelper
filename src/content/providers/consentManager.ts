import { logger } from '../../common/utils'

export class ConsentManagerProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'consentManager'

  check() {
    // https://www.freepik.com
    // https://www.vanityfair.fr
    if (window.OneTrust && window.OneTrust.RejectAll) {
      logger('######################## ConsentManager')
      try {
        window.OneTrust.RejectAll()
      } catch (err) {}
      this.found = true
      this.done = true
      this.labels.add('consentManager')
    }
  }
}
