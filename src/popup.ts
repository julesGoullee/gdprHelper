import browser from 'webextension-polyfill'

async function init(){
  const btnToggle = document.querySelector('#toggle')

  if(!btnToggle){
    throw new Error('btnToggle missing')
  }
  const options = await browser.storage.sync.get()
  let enable = options['enable']
  btnToggle.textContent = enable ? 'Disable' : 'Enable'

  btnToggle.addEventListener('click', async () => {
    if(enable){
      btnToggle.textContent = 'Enable'
      enable = false
    } else {
      btnToggle.textContent = 'Disable'
      enable = true
    }
    await browser.storage.sync.set({ enable })
  })

  // const listUrl = 'abp:subscribe?location=https://secure.fanboy.co.nz/fanboy-annoyance_ubo.txt&title=Fanboy-Annoyances%20List&requiresLocation=https://easylist-downloads.adblockplus.org/easylist.txt&requiresTitle=Easylist'
  // const listUrl = 'https://subscribe.adblockplus.org/?location=https://secure.fanboy.co.nz/fanboy-annoyance.txt&title=Fanboy%27s%20Annoyance%20List'
  const linkEl = document.querySelector('#link-annoyance-list')

  if(!linkEl){
    throw new Error('link missing')
  }

  linkEl.addEventListener('click', () => {
    // browser.tabs.create({url: listUrl})
  })
}
init().catch(error => console.error('init error', error))
