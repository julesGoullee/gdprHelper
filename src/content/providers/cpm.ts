import { logger } from '../../common/utils'

export class CpmProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'cpm'

  check() {
    if (window.cmp && window.cmp.refuse) {
      // https://www.allianz.fr
      logger('######################## cpm')
      window.cmp.refuse()
      this.labels.add('cpm')
      this.found = true
      this.done = true
    }
  }
}
