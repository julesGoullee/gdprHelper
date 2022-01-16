import { clickElements } from '../utils'

export class OrejimeProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'orejime'

  check() {
    if (window.orejime) {
      console.info('######################## orejime')
      if (clickElements('.orejime-Button--decline')) {
        this.labels.add('orejime')
        this.found = true
        this.done = true
      }
    }
  }
}
