import { logger } from '../../common/utils'
import { removeElements } from '../utils'

export class OsanoProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'osano'

  check() {
    // https://www.osano.com
    // https://playvalorant.com
    if (window.Osano && window.Osano.cm) {
      logger('######################## osano')
      if (removeElements('.osano-cm-dialog')) {
        logger('######################## osano banner')
        this.labels.add('osano')
        this.found = true
        this.done = true
      }
      // if(window.Osano.cm.hideWidget){
      //   logger('######################## osano hideWidget')
      //   window.Osano.cm.hideDialog()
      //   this.labels.add('osano')
      //   this.found = true
      //   this.done = true
      // }
    }
  }
}
