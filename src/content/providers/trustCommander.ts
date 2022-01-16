import { clickElements } from '../utils'

export class TrustCommanderProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'trustCommander'

  check() {
    // https://www.labanquepostale.fr/
    if (window.tc_closePrivacyButton) {
      try {
        if (window.tc_closePrivacyButton()) {
          console.info('######################## trustCommander')
          this.found = true
          this.done = true
          this.labels.add('trustCommander')
        }
      } catch (error) {}

      if (clickElements('#popin_tc_privacy_button_3')) {
        console.info('######################## trustCommander button')
        this.found = true
        this.done = true
        this.labels.add('trustCommander')
      }
    }
  }
}
