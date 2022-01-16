import { logger } from '../../common/utils'
import { clickElements } from '../utils'

export class QuantcastProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'quantcast'

  check() {
    // https://www.huffpost.com
    if (clickElements('.qc-cmp2-summary-buttons > button[mode="secondary"]')) {
      logger('######################## quantcast')
      this.found = true
      this.done = true
      this.labels.add('quantcast')
    }
  }
}
