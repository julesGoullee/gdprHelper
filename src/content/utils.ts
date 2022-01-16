import { logger } from '../common/utils'

export const clickElements = (selector: string): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    logger('clickElements', selector, elements)
    elements.forEach((el: any) => el.click())
    return true
  }
  return false
}

export const removeClasses = (
  selector: string,
  classes: Array<string>
): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    logger('removeClasses', selector, classes, elements)
    elements.forEach((el: any) =>
      classes.forEach((c) => el.classList.remove(c))
    )
    return true
  }
  return false
}

export const hideElements = (selector: string): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    logger('hideElements', selector, elements)
    elements.forEach((el: any) => (el.style.display = 'none'))
    return true
  }
  return false
}

export const removeElements = (selector: string): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    logger('removeElements', selector, elements)
    elements.forEach((el: any) => el.remove())
    return true
  }
  return false
}
