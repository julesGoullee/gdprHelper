export class IubendaProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'iubenda'
  check() {
    if (
      window._iub &&
      window._iub.cs &&
      window._iub.cs.options &&
      window._iub.cs.options.callback &&
      window._iub.cs.api &&
      window._iub.cs.api.consentGiven
    ) {
      console.info('######################## iubenda')
      this.found = true
      window._iub.cs.options.callback.onBannerShown = () => {
        window._iub.cs.api.consentGiven('rejectButtonClick')
        this.done = true
        this.labels.add('iubenda')
      }
    }
  }
}
