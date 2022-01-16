import { clickElements, removeClasses, removeElements } from '../utils'

export class TrustCommanderProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'trustCommander'

  check() {
    // if (window.tc_closePrivacyButton) {
    //   this.found = true
    //   try {
    //     if (window.tc_closePrivacyButton()) {
    //       console.info('######################## trustCommander tc_closePrivacyButton')
    //       this.done = true
    //       this.labels.add('trustCommander')
    //     }
    //   } catch (error) {}
    // }
    // https://www.labanquepostale.fr/
    // if(window.tc_hide_privacy){
    //   try {
    //     if (window.tc_hide_privacy()) {
    //       console.info('######################## trustCommander tc_hide_privacy')
    //       this.found = true
    //       this.done = true
    //       this.labels.add('trustCommander')
    //     }
    //   } catch (error) {}
    //
    // }
    // if(window.tc_closePrivacyCenter){
    //   try {
    //     if (window.tc_closePrivacyCenter()) {
    //       console.info('######################## trustCommander tc_closePrivacyCenter')
    //       this.found = true
    //       this.done = true
    //       this.labels.add('trustCommander')
    //     }
    //   } catch (error) {}
    //
    // }

    if (window.tc_closePrivacyButton || window.tc_hide_privacy) {
      if (clickElements('#popin_tc_privacy_button_3')) {
        console.info('######################## trustCommander button')
        this.found = true
        this.done = true
        this.labels.add('trustCommander')
      }
      if (removeElements('#tc-privacy-wrapper')) {
        console.info('######################## trustCommander banner')
        this.found = true
        this.done = true
        this.labels.add('trustCommander')
      }
      if (removeElements('.tc-privacy-overlay')) {
        console.info('######################## trustCommander banner')
        this.found = true
        this.done = true
        this.labels.add('trustCommander')
      }
      if (removeElements('#privacy-overlay')) {
        console.info('######################## trustCommander banner')
        this.found = true
        this.done = true
        this.labels.add('trustCommander')
      }
      removeClasses('body', ['tc-modal-open'])
    }
  }
}
