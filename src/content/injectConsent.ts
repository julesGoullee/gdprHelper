import { logger } from '../common/utils'
import { providers } from './providers'

function tryIt(i = 1) {
  logger('try', i)
  if (i > 5) {
    logger('Try max time reach')
    window.postMessage({
      type: 'GDPR_HELPER',
      results: providers.map((p) => Array.from(p.labels)).flat(),
    })
    return
  }
  providers
    .filter((provider) => !provider.done)
    .forEach((provider) => provider.check())
  const providersDone = providers.filter((p) => p.done)
  if (providersDone.length === 0) {
    setTimeout(() => {
      tryIt(i + 1)
    }, 500 * i)
  }
  window.postMessage({
    type: 'GDPR_HELPER',
    results: providersDone.map((p) => Array.from(p.labels)).flat(),
  })
}

tryIt()
