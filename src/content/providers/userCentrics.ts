import { logger } from '../../common/utils'
import { removeElements } from '../utils'

export class UserCentricsProvider {
  found: boolean = false
  done: boolean = false
  isV1: boolean = false
  isV2: boolean = false
  labels: Set<string> = new Set()
  key = 'userCentrics'

  check() {
    if (!this.isV2) {
      this.v1()
    }

    if (!this.isV1) {
      this.v2()
    }
  }

  v1() {
    if (window.cmpmngr && window.cmpmngr.setConsentViaBtn) {
      logger('######################## UserCentrics')
      window.cmpmngr.setConsentViaBtn(0)
      this.found = true
      this.done = true
      this.labels.add('userCentrics')
    }
  }

  v2() {
    // https://usercentrics.com
    if (window.uc && window.uc.isCMPLoaded) {
      this.found = true
      logger('######################## usercentrics uc')
      this.labels.add('userCentrics')
      if (removeElements('#usercentrics-root')) {
        this.done = true
      }
    }
  }
}
