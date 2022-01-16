import { hideElements } from '../utils'

export class TrustArcProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'trustarc'

  check() {
    // https://www.forbes.com
    if (window.truste) {
      console.info('######################## trustarc')
      const banner1 = hideElements('.trustarc-banner-section')
      const overlay1 = hideElements('#trustarc-banner-overlay')

      const banner2 = hideElements('.truste_box_overlay')
      const overlay2 = hideElements('.truste_overlay')

      if ((banner1 && overlay1) || (banner2 && overlay2)) {
        this.found = true
        this.done = true
        this.labels.add('trustarc')
      }
    }
  }
}
