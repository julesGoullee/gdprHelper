import browser from 'webextension-polyfill'

export function ToggleButton(enable: boolean): HTMLButtonElement {
  const btnToggle: HTMLButtonElement | null = document.querySelector('#toggle')

  if (!btnToggle) {
    throw new Error('btnToggle missing')
  }

  btnToggle.textContent = enable ? 'Disable' : 'Enable'
  btnToggle.textContent = enable ? 'Disable' : 'Enable'
  btnToggle.classList.add(enable ? 'disable' : 'enable')

  btnToggle.addEventListener('click', async () => {
    if (enable) {
      btnToggle.textContent = 'Enable'
      btnToggle.classList.remove('disable')
      btnToggle.classList.add('enable')
      enable = false
    } else {
      btnToggle.textContent = 'Disable'
      btnToggle.classList.remove('enable')
      btnToggle.classList.add('disable')
      enable = true
    }
    await browser.storage.sync.set({ enable })
  })
  return btnToggle
}
