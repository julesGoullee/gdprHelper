import { logger } from '../../common/utils'
import { hideElements } from '../utils'

export class AxeptioProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'axeptio'

  check() {
    // https://www.frenchweb.fr
    if (window.axeptioSDK) {
      logger('######################## axeptio')
      if (hideElements('.axeptio_mount')) {
        this.found = true
        this.done = true
        this.labels.add('axeptio')
      }
    }
  }
}
