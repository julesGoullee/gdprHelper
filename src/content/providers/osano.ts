export class OsanoProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'osano'

  check() {
    // https://www.osano.com
    if (window.Osano && window.Osano.cm && window.Osano.cm.hideWidget) {
      console.info('######################## osano')
      window.Osano.cm.hideDialog()
      this.labels.add('osano')
      this.found = true
      this.done = true
    }
  }
}
