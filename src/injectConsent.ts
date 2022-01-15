// import browser from 'webextension-polyfill'

export function Inject() {
  // console.log('inject')
  const defaultWindowsKeys = [
    '0',
    'window',
    'self',
    'document',
    'name',
    'location',
    'customElements',
    'history',
    'locationbar',
    'menubar',
    'personalbar',
    'scrollbars',
    'statusbar',
    'toolbar',
    'status',
    'closed',
    'frames',
    'length',
    'top',
    'opener',
    'parent',
    'frameElement',
    'navigator',
    'origin',
    'external',
    'screen',
    'innerWidth',
    'innerHeight',
    'scrollX',
    'pageXOffset',
    'scrollY',
    'pageYOffset',
    'visualViewport',
    'screenX',
    'screenY',
    'outerWidth',
    'outerHeight',
    'devicePixelRatio',
    'clientInformation',
    'screenLeft',
    'screenTop',
    'defaultStatus',
    'defaultstatus',
    'styleMedia',
    'onsearch',
    'isSecureContext',
    'performance',
    'onappinstalled',
    'onbeforeinstallprompt',
    'crypto',
    'indexedDB',
    'webkitStorageInfo',
    'sessionStorage',
    'localStorage',
    'onbeforexrselect',
    'onabort',
    'onblur',
    'oncancel',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'onclose',
    'oncontextmenu',
    'oncuechange',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onfocus',
    'onformdata',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadstart',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onpause',
    'onplay',
    'onplaying',
    'onprogress',
    'onratechange',
    'onreset',
    'onresize',
    'onscroll',
    'onsecuritypolicyviolation',
    'onseeked',
    'onseeking',
    'onselect',
    'onslotchange',
    'onstalled',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'ontoggle',
    'onvolumechange',
    'onwaiting',
    'onwebkitanimationend',
    'onwebkitanimationiteration',
    'onwebkitanimationstart',
    'onwebkittransitionend',
    'onwheel',
    'onauxclick',
    'ongotpointercapture',
    'onlostpointercapture',
    'onpointerdown',
    'onpointermove',
    'onpointerup',
    'onpointercancel',
    'onpointerover',
    'onpointerout',
    'onpointerenter',
    'onpointerleave',
    'onselectstart',
    'onselectionchange',
    'onanimationend',
    'onanimationiteration',
    'onanimationstart',
    'ontransitionrun',
    'ontransitionstart',
    'ontransitionend',
    'ontransitioncancel',
    'onafterprint',
    'onbeforeprint',
    'onbeforeunload',
    'onhashchange',
    'onlanguagechange',
    'onmessage',
    'onmessageerror',
    'onoffline',
    'ononline',
    'onpagehide',
    'onpageshow',
    'onpopstate',
    'onrejectionhandled',
    'onstorage',
    'onunhandledrejection',
    'onunload',
    'alert',
    'atob',
    'blur',
    'btoa',
    'cancelAnimationFrame',
    'cancelIdleCallback',
    'captureEvents',
    'clearInterval',
    'clearTimeout',
    'close',
    'confirm',
    'createImageBitmap',
    'fetch',
    'find',
    'focus',
    'getComputedStyle',
    'getSelection',
    'matchMedia',
    'moveBy',
    'moveTo',
    'open',
    'postMessage',
    'print',
    'prompt',
    'queueMicrotask',
    'releaseEvents',
    'reportError',
    'requestAnimationFrame',
    'requestIdleCallback',
    'resizeBy',
    'resizeTo',
    'scroll',
    'scrollBy',
    'scrollTo',
    'setInterval',
    'setTimeout',
    'stop',
    'webkitCancelAnimationFrame',
    'webkitRequestAnimationFrame',
    'chrome',
    'caches',
    'cookieStore',
    'ondevicemotion',
    'ondeviceorientation',
    'ondeviceorientationabsolute',
    'showDirectoryPicker',
    'showOpenFilePicker',
    'showSaveFilePicker',
    'originAgentCluster',
    'trustedTypes',
    'speechSynthesis',
    'onpointerrawupdate',
    'crossOriginIsolated',
    'scheduler',
    'openDatabase',
    'webkitRequestFileSystem',
    'webkitResolveLocalFileSystemURL',
    'JSCompiler_renameProperty',
    'ShadyCSS',
    'loadTimeData',
    'cr',
    'mojo',
    'url',
    'chromeCart',
    'drive',
    'photos',
    'taskModule',
    'mojoBase',
    'skia',
    'mostVisited',
    'realbox',
    'newTabPage',
  ]
  Object.keys(window)
    .filter((k) => !defaultWindowsKeys.includes(k))
    .sort((a, b) => (a > b ? 1 : -1))
    .forEach((k) => console.info('windows key', k))
  const results: any = {}

  const clickElements = (selector: string): boolean => {
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      console.info('clickElements', elements)
      elements.forEach((el: any) => el.click())
      return true
    }
    return false
  }

  const hideElements = (selector: string): boolean => {
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      console.info('hideElements', elements)
      elements.forEach((el: any) => (el.style.display = 'none'))
      return true
    }
    return false
  }

  const removeElements = (selector: string): boolean => {
    const elements = document.querySelectorAll(selector)
    if (elements.length > 0) {
      console.info('removeElements', elements)
      elements.forEach((el: any) => el.remove())
      return true
    }
    return false
  }

  function check() {
    let result = false
    if (window.Didomi && window.didomiOnReady) {
      // https://www.marmiton.org
      // https://www.lachainemeteo.com
      console.info('######################## Didomi')
      results.didomi = true
      window.didomiOnReady.push((Didomi: any) => {
        if (Didomi.notice.isVisible() && Didomi.setUserDisagreeToAll) {
          Didomi.setUserDisagreeToAll()
          if (hideElements('#didomi-host')) {
            result = true
          }
        }
      })

      // https://www.20minutes.fr/
      if (hideElements('.mbrs-cookieBanner')) {
        console.info('######################## 20 minutes')
        result = true
        results.banners20min = true
      }

      // https://actu.fr/
      if (hideElements('.ac-banner-cookies')) {
        console.info('######################## bannersActuFr')
        result = true
        results.bannersActuFr = true
      }
    } else if (window.cmpmngr && window.cmpmngr.setConsentViaBtn) {
      // https://www.consentmanager.net
      console.info('######################## consentmanager')
      window.cmpmngr.setConsentViaBtn(0)
      result = true
      results.cmpmngr = true
    } else if (
      window.usercentrics &&
      window.usercentrics.denyAllConsentsAndCloseInitialView
    ) {
      // https://www.oxid-esales.com
      console.info('######################## usercentrics')
      window.usercentrics.denyAllConsentsAndCloseInitialView()
      result = true
      results.usercentrics = true
    } else if (window.uc && window.uc.isCMPLoaded) {
      // https://usercentrics.com
      console.info('######################## usercentrics uc')
      if (removeElements('#usercentrics-root')) {
        result = true
        results.usercentrics = true
      }
    } else if (window.Osano && window.Osano.cm && window.Osano.cm.hideWidget) {
      // https://www.osano.com/
      console.info('######################## osano')
      window.Osano.cm.hideDialog()
      result = true
      results.Osano = true
    } else if (window.cmp && window.cmp.refuse) {
      // https://www.allianz.fr/
      window.cmp.refuse()
      result = true
      results.cmp = true
    } else if (window.OneTrust && window.OneTrust.RejectAll) {
      // https://www.freepik.com/
      console.info('######################## onetrust')
      try {
        window.OneTrust.RejectAll()
      } catch (err) {}
      result = true
      results.oneTrust = true
    } else if (window.truste) {
      // https://www.forbes.com/
      console.info('######################## trustarc')
      const banner1 = hideElements('.trustarc-banner-section')
      const overlay1 = hideElements('#trustarc-banner-overlay')

      const banner2 = hideElements('.truste_box_overlay')
      const overlay2 = hideElements('.truste_overlay')

      if ((banner1 && overlay1) || (banner2 && overlay2)) {
        result = true
        results.trustarc = true
      }
    } else if (
      window._iub &&
      window._iub.cs &&
      window._iub.cs.options &&
      window._iub.cs.options.callback &&
      window._iub.cs.api &&
      window._iub.cs.api.consentGiven
    ) {
      console.info('######################## iubenda')
      window._iub.cs.options.callback.onBannerShown = () =>
        window._iub.cs.api.consentGiven('rejectButtonClick')
      result = true
      results.iubenda = true
    } else if (!!window.Sddan && window.Sddan.cmpLoaded) {
      console.info('######################## Sddan')
      if (
        clickElements(
          '#sd-cmp > div:nth-child(2) > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(1) > button:nth-child(3)'
        )
      ) {
        // btn reject
        results.sirdata = true
        result = true
      } else if (clickElements('#sd-cmp')) {
        // banner
        results.sirdata = true
        result = true
      }
    } else if (window.location.host === 'www.google.com') {
      if (clickElements('#VnjCcb')) {
        console.info('######################## google btn')
        results.googleBtn = true
        result = true
      }
    } else if (window.location.host === 'consent.google.com') {
      const btns: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('[jsname="V67aGc"]')
      btns.forEach((btn) => btn.innerHTML === 'Off' && btn.click())
      const confirm = Array.from(btns).find(
        (btn) => btn.innerHTML === 'Confirm'
      )
      if (confirm) {
        console.info('######################## google consent confirm')
        confirm.click()
        results.googleConsent = true
        result = true
      }
    } else {
      // https://www.lemonde.fr/
      if (clickElements('[data-gdpr-expression="denyAll"]')) {
        console.info('######################## dataGdprExpressionBtn')
        results.dataGdprExpressionBtn = true
      }

      if (hideElements('#js-message-register')) {
        console.info('######################## dataGdprExpressionBanner')
        results.dataGdprExpressionBanner = true
      }

      // https://www.nouvelobs.com/
      if (hideElements('#cookiesEncourag')) {
        console.info('######################## dataGdprExpressionBannerNoObs')
        results.dataGdprExpressionBannerNoObs = true
      }

      // https://www.amazon.fr/
      if (removeElements('[action="/cookieprefs?ref_=portal_banner_all"]')) {
        console.info('######################## amz banner')
        result = true
        results.amazon = true
      }

      //https://www.nytimes.com/
      if (clickElements('[data-testid="expanded-dock-btn-selector"]')) {
        console.info('######################## bannerNytimes')
        result = true
        results.bannerNytimes = true
      }

      // https://www.facebook.com/
      if (removeElements('[data-testid="cookie-policy-dialog"]')) {
        console.info('######################## facebook')
        result = true
        results.facebook = true
      }

      // yahoo.com
      if (clickElements('#consent-page button.reject-all')) {
        console.info('######################## yahoo')
        result = true
        results.yahoo = true
      }

      //Fc
      if (removeElements('.fc-consent-root')) {
        console.info('######################## bannerFc')
        result = true
        results.bannerFc = true
        // https://www.bbc.com/
        removeElements('.bbccookies-banner')
      }

      // https://iabeurope.eu
      if (hideElements('#cookie-law-info-bar')) {
        console.info('######################## bannerIABEurope')
        result = true
        results.bannerIABEurope = true
      }

      // https://stackoverflow.com
      if (hideElements('.js-consent-banner')) {
        console.info('######################## stackoverflowBanner')
        result = true
        results.stackoverflowBanner = true
      }

      // gitbook.com
      if (hideElements('#animatedComponent')) {
        console.info('######################## gitbookBanner')
        result = true
        results.gitbookBanner = true
      }
    }
    if (window.__tcfapi) {
      // https://www.vanityfair.fr
      console.info(
        '######################## Consent Management Providers',
        window.__tcfapi
      )
      results.tcfapi = true
      // window.__tcfapi('getTCData', 2, (tcData: any, ok: any) => {
      // console.info('getTCData', tcData, ok)
      // })
      window.__tcfapi('deny', 2, console.log)
      // window.__tcfapi('reject', 2, () => {
      //   window.__tcfapi('toggleConsentTool', 2, null, false);
      // });
    }
    return result
  }

  function tryIt(i = 1) {
    // console.log('try', i)
    if (i > 5) {
      // console.log('Try max time reach')
      window.postMessage({ type: 'GDPR_HELPER', results })
      return
    }
    if (!check()) {
      setTimeout(() => {
        tryIt(i + 1)
      }, 500 * i)
    } else {
      window.postMessage({ type: 'GDPR_HELPER', results })
    }
  }

  tryIt()
}
