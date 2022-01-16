import { logger } from '../../common/utils'
import { hideElements } from '../utils'

export class SibboProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'sibbo'

  check() {
    // https://sibboventures.com
    if (window.SibboCMP) {
      try {
        if (window.SibboCMP.isOpen()) {
          logger('######################## sibbo')
          if (hideElements('.sibbo-layout')) {
            this.found = true
            this.done = true
            this.labels.add('sibbo')
          }
        }
      } catch (error) {}
    }
  }
}
