import axios from 'axios'
import { Config } from '../common/config'

export class AddWebsite {
  button: HTMLButtonElement
  location: string | null = null

  constructor() {
    this.button = AddWebsite.addButton()
    this.hideButton()
    this.listenButtonClick()
  }

  static addButton(): HTMLButtonElement {
    const element: HTMLButtonElement | null =
      document.querySelector('#btn-add-website')
    if (!element) {
      throw new Error('add website button missing')
    }
    return element
  }
  showButton() {
    this.button.style.display = 'inline-block'
  }

  hideButton() {
    this.button.style.display = 'none'
  }

  listenButtonClick() {
    this.button.addEventListener('click', async () => {
      this.button.classList.add('disable')
      this.button.disabled = true
      this.button.textContent = 'Sending....'
      if (this.location) {
        const res = await axios.get(
          `${Config.SPREADSHEET_BASE_URL}action=addUrl&data=${JSON.stringify({
            url: this.location,
          })}`
        )
        console.log('Added', res)
        this.button.textContent = 'We will take care of it'
      }
    })
  }
}
