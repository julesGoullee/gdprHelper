import { logger } from '../../common/utils'
import {
  clickElements,
  hideElements,
  removeClasses,
  removeElements,
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
    'checkTarteAuCitron',
    'checkEbay',
    'checkAliexpress',
    'checkTwitch',
    'checkLdlc',
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
      logger('######################## yahoo')
      this.labels.add('yahoo')
      return true
    }
    return false
  }

  checkNytimes(): boolean {
    if (clickElements('[data-testid="expanded-dock-btn-selector"]')) {
      // https://www.nytimes.com
      logger('######################## bannerNytimes')
      this.labels.add('bannerNytimes')
      return true
    }
    return false
  }

  checkFacebook(): boolean {
    if (removeElements('[data-testid="cookie-policy-dialog"]')) {
      // https://www.facebook.com
      logger('######################## facebook')
      this.labels.add('facebook')
      return true
    }
    return false
  }

  checkAmazon(): boolean {
    // https://www.amazon.fr
    if (removeElements('[action="/cookieprefs?ref_=portal_banner_all"]')) {
      logger('######################## amz banner')
      this.labels.add('amazon')
      return true
    }
    return false
  }

  checkNouvelobs(): boolean {
    // https://www.nouvelobs.com
    if (hideElements('#cookiesEncourag')) {
      logger('######################## dataGdprExpressionBannerNoObs')
      this.labels.add('dataGdprExpressionBannerNoObs')
      return true
    }
    return false
  }

  checkDataGdpr(): boolean {
    let returnValue = false
    // https://www.lemonde.fr
    if (clickElements('[data-gdpr-expression="denyAll"]')) {
      logger('######################## dataGdprExpressionBtn')
      this.labels.add('dataGdprExpressionBtn')
      returnValue = true
    }
    if (hideElements('.gdpr-lmd-wall')) {
      logger('######################## gdprWall')
      this.labels.add('gdprWall')
    }

    if (hideElements('#js-message-register')) {
      logger('######################## dataGdprExpressionBanner')
      removeClasses('body', ['popin-gdpr-no-scroll'])
      removeClasses('html', ['popin-gdpr-no-scroll'])
      this.labels.add('dataGdprExpressionBanner')
      returnValue = true
    }
    return returnValue
  }

  checkFc(): boolean {
    // https://www.bbc.com
    if (removeElements('.fc-consent-root')) {
      logger('######################## bannerFc')
      this.labels.add('bannerFc')
      removeElements('.bbccookies-banner')
      return true
    }
    return false
  }

  checkIabeurope(): boolean {
    if (hideElements('#cookie-law-info-bar')) {
      // https://iabeurope.eu
      logger('######################## bannerIABEurope')
      this.labels.add('bannerIABEurope')
      return true
    }
    return false
  }

  checkStackoverflow(): boolean {
    if (hideElements('.js-consent-banner')) {
      // https://stackoverflow.com
      logger('######################## stackoverflowBanner')
      this.labels.add('stackoverflowBanner')
      return true
    }
    return false
  }

  checkGitBook(): boolean {
    if (clickElements(`#animatedComponent > div > div > div[tabindex="0"]`)) {
      // gitbook.com
      logger('######################## gitbookBanner')
      this.labels.add('gitbookBanner')
      return true
    }
    return false
  }

  checkSnigel(): boolean {
    if (hideElements('#snigel-cmp-framework')) {
      // https://www.linguee.fr
      logger('######################## snigel')
      this.labels.add('snigel')
      return true
    }
    return false
  }

  checkSfr(): boolean {
    if (hideElements('#CkC')) {
      // https://www.sfr.fr
      logger('######################## sfr')
      this.labels.add('sfr')
      return true
    }
    return false
  }

  checkTarteAuCitron(): boolean {
    if (hideElements('#tarteaucitronRoot')) {
      // https://www.ameli.fr
      logger('######################## tarte au citron')
      this.labels.add('tarteAuCitron')
      return true
    }
    return false
  }

  checkEbay(): boolean {
    if (clickElements('#gdpr-banner-decline')) {
      // https://ebay.fr
      logger('######################## ebay')
      this.labels.add('ebay')
      return true
    }
    return false
  }

  checkAliexpress(): boolean {
    if (clickElements('[data-role="gdpr-reject"]')) {
      // https://aliexpress.com
      logger('######################## aliexpress')
      this.labels.add('aliexpress')
      return true
    }
    return false
  }

  checkTwitch(): boolean {
    if (removeElements('.consent-banner')) {
      // https://www.twitch.tv
      logger('######################## twitch')
      this.labels.add('twitch')
      return true
    }
    return false
  }

  checkLdlc(): boolean {
    if (clickElements('#cookieConsentRefuseButton')) {
      // https://www.ldlc.com/
      logger('######################## ldlc')
      this.labels.add('ldlc')
      return true
    }
    return false
  }
}
