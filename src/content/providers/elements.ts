import {
  clickElements,
  hideElements,
  removeElements,
  rmClasses,
} from '../utils'

export class ElementsProvider {
  found: boolean = false
  done: boolean = false
  labels: Set<string> = new Set()
  key = 'element'
  website: Array<string> = [
    'checkYahoo',
    'checkNytimes',
    'checkFacebook',
    'checkAmazon',
    'checkNouvelobs',
    'checkDataGdpr',
    'checkFc',
    'checkIabeurope',
    'checkStackoverflow',
    'checkGitBook',
    'checkSnigel',
    'checkSfr',
  ]

  check() {
    this.website.some((website: string) => {
      const check: any = (this as any)[website]
      if (!check) {
        throw new Error('Element check not found')
      }
      if (check.bind(this)()) {
        this.found = true
        this.done = true
        return true
      }
      return false
    })
  }

  checkYahoo(): boolean {
    if (clickElements('#consent-page button.reject-all')) {
      // yahoo.com
      console.info('######################## yahoo')
      this.labels.add('yahoo')
      return true
    }
    return false
  }

  checkNytimes(): boolean {
    if (clickElements('[data-testid="expanded-dock-btn-selector"]')) {
      // https://www.nytimes.com
      console.info('######################## bannerNytimes')
      this.labels.add('bannerNytimes')
      return true
    }
    return false
  }

  checkFacebook(): boolean {
    if (removeElements('[data-testid="cookie-policy-dialog"]')) {
      // https://www.facebook.com
      console.info('######################## facebook')
      this.labels.add('facebook')
      return true
    }
    return false
  }

  checkAmazon(): boolean {
    // https://www.amazon.fr
    if (removeElements('[action="/cookieprefs?ref_=portal_banner_all"]')) {
      console.info('######################## amz banner')
      this.labels.add('amazon')
      return true
    }
    return false
  }

  checkNouvelobs(): boolean {
    // https://www.nouvelobs.com
    if (hideElements('#cookiesEncourag')) {
      console.info('######################## dataGdprExpressionBannerNoObs')
      this.labels.add('dataGdprExpressionBannerNoObs')
      return true
    }
    return false
  }

  checkDataGdpr(): boolean {
    let returnValue = false
    // https://www.lemonde.fr
    if (clickElements('[data-gdpr-expression="denyAll"]')) {
      console.info('######################## dataGdprExpressionBtn')
      this.labels.add('dataGdprExpressionBtn')
      returnValue = true
    }
    if (hideElements('.gdpr-lmd-wall')) {
      console.info('######################## gdprWall')
      this.labels.add('gdprWall')
    }

    if (hideElements('#js-message-register')) {
      console.info('######################## dataGdprExpressionBanner')
      rmClasses('body', ['popin-gdpr-no-scroll'])
      rmClasses('html', ['popin-gdpr-no-scroll'])
      this.labels.add('dataGdprExpressionBanner')
      returnValue = true
    }
    return returnValue
  }

  checkFc(): boolean {
    // https://www.bbc.com
    if (removeElements('.fc-consent-root')) {
      console.info('######################## bannerFc')
      this.labels.add('bannerFc')
      removeElements('.bbccookies-banner')
      return true
    }
    return false
  }

  checkIabeurope(): boolean {
    if (hideElements('#cookie-law-info-bar')) {
      // https://iabeurope.eu
      console.info('######################## bannerIABEurope')
      this.labels.add('bannerIABEurope')
      return true
    }
    return false
  }

  checkStackoverflow(): boolean {
    if (hideElements('.js-consent-banner')) {
      // https://stackoverflow.com
      console.info('######################## stackoverflowBanner')
      this.labels.add('stackoverflowBanner')
      return true
    }
    return false
  }

  checkGitBook(): boolean {
    if (clickElements(`#animatedComponent > div > div > div[tabindex="0"]`)) {
      // gitbook.com
      console.info('######################## gitbookBanner')
      this.labels.add('gitbookBanner')
      return true
    }
    return false
  }

  checkSnigel(): boolean {
    if (hideElements('#snigel-cmp-framework')) {
      // https://www.linguee.fr
      console.info('######################## snigel')
      this.labels.add('snigel')
      return true
    }
    return false
  }

  checkSfr(): boolean {
    if (hideElements('#CkC')) {
      // https://www.sfr.fr
      console.info('######################## sfr')
      this.labels.add('sfr')
      return true
    }
    return false
  }
}
