export class TcfApiProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'tcfApi'

  check() {
    if (window.__tcfapi) {
      console.info(
        '######################## Consent Management framework',
        window.__tcfapi
      )
      window.__tcfapi('deny', 2, () => {
        this.found = true
        // this.done = true
        this.labels.add('tcfApi')
      })
      window.__tcfapi('reject', 2, () => {
        window.__tcfapi('toggleConsentTool', 2, null, false)
        this.labels.add('tcfApi')
        this.found = true
      })
      // window.__tcfapi('getTCData', 2, (tcData: any, ok: any) => {
      //   console.info('getTCData', tcData, ok)
      // })
      // window.__tcfapi('reject', 2, () => {
      //   window.__tcfapi('toggleConsentTool', 2, null, false)
      // })
    }
  }
}
