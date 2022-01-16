export const clickElements = (selector: string): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    console.info('clickElements', elements)
    elements.forEach((el: any) => el.click())
    return true
  }
  return false
}

export const rmClasses = (
  selector: string,
  classes: Array<string>
): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    console.info('rmClasses', elements)
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
    console.info('hideElements', elements)
    elements.forEach((el: any) => (el.style.display = 'none'))
    return true
  }
  return false
}

export const removeElements = (selector: string): boolean => {
  const elements = document.querySelectorAll(selector)
  if (elements.length > 0) {
    console.info('removeElements', elements)
    elements.forEach((el: any) => el.remove())
    return true
  }
  return false
}
