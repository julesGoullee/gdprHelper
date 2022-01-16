import { hideElements } from '../utils'

export class DidomiProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'didomi'
  check() {
    if (window.Didomi && window.didomiOnReady) {
      // https://www.marmiton.org
      // https://www.lachainemeteo.com
      console.info('######################## Didomi')
      this.found = true
      this.labels.add('didomi')
      window.didomiOnReady.push((Didomi: any) => {
        if (Didomi.notice.isVisible() && Didomi.setUserDisagreeToAll) {
          Didomi.setUserDisagreeToAll()
          if (hideElements('#didomi-host')) {
            this.done = true
          }
        }
      })

      // https://www.20minutes.fr/
      if (hideElements('.mbrs-cookieBanner')) {
        console.info('######################## 20 minutes')
        this.done = true
        this.labels.add('Banner 20minutes')
      }

      // https://actu.fr/
      if (hideElements('.ac-banner-cookies')) {
        console.info('######################## bannersActuFr')
        this.done = true
        this.labels.add('Banner actu.fr')
      }
    }
  }
}
