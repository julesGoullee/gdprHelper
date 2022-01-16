import { clickElements } from '../utils'

export class SirdataProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'sirdata'
  check() {
    if (!!window.Sddan && window.Sddan.cmpLoaded) {
      console.info('######################## sirdata')
      if (
        clickElements(
          '#sd-cmp > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > button:nth-child(3)'
        )
      ) {
        // btn reject
        this.found = true
        this.done = true
        this.labels.add('sirdata')
      }
      if (clickElements('#sd-cmp')) {
        // banner
        this.found = true
        this.done = true
        this.labels.add('sirdata')
      }
    }
  }
}
