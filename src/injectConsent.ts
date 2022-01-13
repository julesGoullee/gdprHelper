// import browser from 'webextension-polyfill'

export function Inject() {
  // console.log('inject')
  // const defaultWindowsKeys = [
  //   '0',
  //   'window',
  //   'self',
  //   'document',
  //   'name',
  //   'location',
  //   'customElements',
  //   'history',
  //   'locationbar',
  //   'menubar',
  //   'personalbar',
  //   'scrollbars',
  //   'statusbar',
  //   'toolbar',
  //   'status',
  //   'closed',
  //   'frames',
  //   'length',
  //   'top',
  //   'opener',
  //   'parent',
  //   'frameElement',
  //   'navigator',
  //   'origin',
  //   'external',
  //   'screen',
  //   'innerWidth',
  //   'innerHeight',
  //   'scrollX',
  //   'pageXOffset',
  //   'scrollY',
  //   'pageYOffset',
  //   'visualViewport',
  //   'screenX',
  //   'screenY',
  //   'outerWidth',
  //   'outerHeight',
  //   'devicePixelRatio',
  //   'clientInformation',
  //   'screenLeft',
  //   'screenTop',
  //   'defaultStatus',
  //   'defaultstatus',
  //   'styleMedia',
  //   'onsearch',
  //   'isSecureContext',
  //   'performance',
  //   'onappinstalled',
  //   'onbeforeinstallprompt',
  //   'crypto',
  //   'indexedDB',
  //   'webkitStorageInfo',
  //   'sessionStorage',
  //   'localStorage',
  //   'onbeforexrselect',
  //   'onabort',
  //   'onblur',
  //   'oncancel',
  //   'oncanplay',
  //   'oncanplaythrough',
  //   'onchange',
  //   'onclick',
  //   'onclose',
  //   'oncontextmenu',
  //   'oncuechange',
  //   'ondblclick',
  //   'ondrag',
  //   'ondragend',
  //   'ondragenter',
  //   'ondragleave',
  //   'ondragover',
  //   'ondragstart',
  //   'ondrop',
  //   'ondurationchange',
  //   'onemptied',
  //   'onended',
  //   'onerror',
  //   'onfocus',
  //   'onformdata',
  //   'oninput',
  //   'oninvalid',
  //   'onkeydown',
  //   'onkeypress',
  //   'onkeyup',
  //   'onload',
  //   'onloadeddata',
  //   'onloadedmetadata',
  //   'onloadstart',
  //   'onmousedown',
  //   'onmouseenter',
  //   'onmouseleave',
  //   'onmousemove',
  //   'onmouseout',
  //   'onmouseover',
  //   'onmouseup',
  //   'onmousewheel',
  //   'onpause',
  //   'onplay',
  //   'onplaying',
  //   'onprogress',
  //   'onratechange',
  //   'onreset',
  //   'onresize',
  //   'onscroll',
  //   'onsecuritypolicyviolation',
  //   'onseeked',
  //   'onseeking',
  //   'onselect',
  //   'onslotchange',
  //   'onstalled',
  //   'onsubmit',
  //   'onsuspend',
  //   'ontimeupdate',
  //   'ontoggle',
  //   'onvolumechange',
  //   'onwaiting',
  //   'onwebkitanimationend',
  //   'onwebkitanimationiteration',
  //   'onwebkitanimationstart',
  //   'onwebkittransitionend',
  //   'onwheel',
  //   'onauxclick',
  //   'ongotpointercapture',
  //   'onlostpointercapture',
  //   'onpointerdown',
  //   'onpointermove',
  //   'onpointerup',
  //   'onpointercancel',
  //   'onpointerover',
  //   'onpointerout',
  //   'onpointerenter',
  //   'onpointerleave',
  //   'onselectstart',
  //   'onselectionchange',
  //   'onanimationend',
  //   'onanimationiteration',
  //   'onanimationstart',
  //   'ontransitionrun',
  //   'ontransitionstart',
  //   'ontransitionend',
  //   'ontransitioncancel',
  //   'onafterprint',
  //   'onbeforeprint',
  //   'onbeforeunload',
  //   'onhashchange',
  //   'onlanguagechange',
  //   'onmessage',
  //   'onmessageerror',
  //   'onoffline',
  //   'ononline',
  //   'onpagehide',
  //   'onpageshow',
  //   'onpopstate',
  //   'onrejectionhandled',
  //   'onstorage',
  //   'onunhandledrejection',
  //   'onunload',
  //   'alert',
  //   'atob',
  //   'blur',
  //   'btoa',
  //   'cancelAnimationFrame',
  //   'cancelIdleCallback',
  //   'captureEvents',
  //   'clearInterval',
  //   'clearTimeout',
  //   'close',
  //   'confirm',
  //   'createImageBitmap',
  //   'fetch',
  //   'find',
  //   'focus',
  //   'getComputedStyle',
  //   'getSelection',
  //   'matchMedia',
  //   'moveBy',
  //   'moveTo',
  //   'open',
  //   'postMessage',
  //   'print',
  //   'prompt',
  //   'queueMicrotask',
  //   'releaseEvents',
  //   'reportError',
  //   'requestAnimationFrame',
  //   'requestIdleCallback',
  //   'resizeBy',
  //   'resizeTo',
  //   'scroll',
  //   'scrollBy',
  //   'scrollTo',
  //   'setInterval',
  //   'setTimeout',
  //   'stop',
  //   'webkitCancelAnimationFrame',
  //   'webkitRequestAnimationFrame',
  //   'chrome',
  //   'caches',
  //   'cookieStore',
  //   'ondevicemotion',
  //   'ondeviceorientation',
  //   'ondeviceorientationabsolute',
  //   'showDirectoryPicker',
  //   'showOpenFilePicker',
  //   'showSaveFilePicker',
  //   'originAgentCluster',
  //   'trustedTypes',
  //   'speechSynthesis',
  //   'onpointerrawupdate',
  //   'crossOriginIsolated',
  //   'scheduler',
  //   'openDatabase',
  //   'webkitRequestFileSystem',
  //   'webkitResolveLocalFileSystemURL',
  //   'JSCompiler_renameProperty',
  //   'ShadyCSS',
  //   'loadTimeData',
  //   'cr',
  //   'mojo',
  //   'url',
  //   'chromeCart',
  //   'drive',
  //   'photos',
  //   'taskModule',
  //   'mojoBase',
  //   'skia',
  //   'mostVisited',
  //   'realbox',
  //   'newTabPage',
  // ]
  // Object.keys(window).forEach(
  //   (k) => !defaultWindowsKeys.includes(k) && console.info('windows key', k)
  // )
  const results: any = {}

  function check() {
    let result = false
    if (window.Didomi && window.didomiOnReady) {
      // https://www.marmiton.org
      // https://www.lachainemeteo.com
      console.info('######################## Didomi')
      // if(window.Didomi.setUserDisagreeToAll){
      //   window.Didomi.setUserDisagreeToAll()
      //   result = true
      // }
      results.didomi = true
      window.didomiOnReady.push((Didomi: any) => {
        if (Didomi.notice.isVisible() && Didomi.setUserDisagreeToAll) {
          Didomi.setUserDisagreeToAll()
          const host: HTMLElement | null =
            document.querySelector('#didomi-host')
          if (host) {
            host.style.display = 'none'
            result = true
          }
          // const popup: HTMLElement | null =
          //   document.querySelector('#didomi-popup')
          // if (popup) {
          //   popup.style.display = 'none'
          //   result = true
          // }
        }
      })

      // https://www.20minutes.fr/
      const banners20min: NodeListOf<HTMLElement> =
        document.querySelectorAll('.mbrs-cookieBanner')
      if (banners20min.length > 0) {
        console.info('######################## 20 minutes')
        banners20min.forEach((b) => {
          b.style.display = 'none'
        })
        result = true
        results.banners20min = true
      }

      // https://actu.fr/
      const bannersActuFr: NodeListOf<HTMLElement> =
        document.querySelectorAll('.ac-banner-cookies')
      if (bannersActuFr.length > 0) {
        console.info('######################## bannersActuFr')
        bannersActuFr.forEach((b) => {
          b.style.display = 'none'
        })
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
      window.OneTrust.RejectAll()
      result = true
      results.OneTrust = true
    } else if (window.truste) {
      // https://www.forbes.com/
      console.info('######################## trustarc')
      const banner: HTMLElement | null = document.querySelector(
        '.trustarc-banner-section'
      )
      const overlay: HTMLElement | null = document.querySelector(
        '#trustarc-banner-overlay'
      )
      if (banner) {
        banner.style.display = 'none'
      }
      if (overlay) {
        overlay.style.display = 'none'
      }
      if (banner && overlay) {
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
    } else {
      // https://www.lemonde.fr/
      const dataGdprExpressionBtn: HTMLElement | null =
        document.body.querySelector('[data-gdpr-expression="denyAll"]')
      if (dataGdprExpressionBtn) {
        console.info('######################## dataGdprExpressionBtn')
        dataGdprExpressionBtn.click()
        results.dataGdprExpressionBtn = true
      }
      const dataGdprExpressionBanner: HTMLElement | null =
        document.body.querySelector('#js-message-register')
      if (dataGdprExpressionBanner) {
        console.info('######################## dataGdprExpressionBanner')
        dataGdprExpressionBanner.style.display = 'none'
        results.dataGdprExpressionBanner = true
      }

      // https://www.amazon.fr/
      const banner = document.body.querySelector(
        '[action="/cookieprefs?ref_=portal_banner_all"]'
      )
      if (banner) {
        console.info('######################## amz banner')
        banner.remove()
        result = true
        results.amazon = true
      }

      //https://www.nytimes.com/
      const bannerNytimes: HTMLElement | null = document.body.querySelector(
        '[data-testid="expanded-dock-btn-selector"]'
      )
      if (bannerNytimes) {
        console.info('######################## bannerNytimes')
        bannerNytimes.click()
        result = true
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
