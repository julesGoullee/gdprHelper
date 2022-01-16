import { Config } from './config'

export const wait = async (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function retry(fn: Function, i = 0): Promise<any> {
  try {
    const res = await fn()
    return res
  } catch (error) {
    if (i < 5) {
      await wait(500 * i)
      return retry(fn, ++i)
    }
  }
}
export const logger: any = Config.debug ? console.log : () => {}
