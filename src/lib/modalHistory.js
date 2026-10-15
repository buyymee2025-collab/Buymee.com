// Add a same-page history entry so a phone's Back button dismisses the modal.
// Preserve React Router's key and user state to avoid remounting the catalogue.
export function beginModalHistory(onClose, browser = window) {
  const { history } = browser
  const previous = history.state || {}
  const url = browser.location.href
  const position = { left: browser.scrollX, top: browser.scrollY, behavior: 'instant' }
  const token = `product-${Date.now()}-${Math.random()}`
  let active = true
  let closing = false
  const ownsEntry = () => history.state?.buyymeeProductModal === token
  const finish = () => {
    if (!active) return
    active = false
    browser.removeEventListener('popstate', finish)
    onClose()
    if (browser.location.href === url) {
      browser.requestAnimationFrame(() => browser.requestAnimationFrame(() => browser.scrollTo(position)))
    }
  }
  history.pushState({ ...previous, ...(typeof previous.idx === 'number' ? { idx: previous.idx + 1 } : {}), buyymeeProductModal: token }, '', url)
  browser.addEventListener('popstate', finish)
  return {
    close() {
      if (!active || closing) return
      closing = true
      if (ownsEntry()) history.back()
      else finish()
    },
    dispose() {
      if (!active) return
      active = false
      browser.removeEventListener('popstate', finish)
      // Consume only our entry; never undo navigation to a different page.
      if (ownsEntry() && browser.location.href === url) history.back()
    },
  }
}
