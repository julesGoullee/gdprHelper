export class OneTrustProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'oneTrust'

  check() {
    // https://www.consentmanager.net
    if (window.cmpmngr && window.cmpmngr.setConsentViaBtn) {
      console.info('######################## oneTrust')
      window.cmpmngr.setConsentViaBtn(0)
      this.found = true
      this.done = true
      this.labels.add('oneTrust')
    }
  }
}
