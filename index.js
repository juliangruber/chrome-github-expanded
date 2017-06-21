'use strict'

const debug = false

document.addEventListener('DOMContentLoaded', () => {
  const loop = () => {
    const start = debug && Date.now()
    const buttons = Array.from(document.querySelectorAll('.load-diff-button'))
    for (let button of buttons) {
      let header
      let container = button
      while (container = container.parentNode) {
        header = container.querySelector('.file-header')
        if (header) break
      }
      if (/^[^\/]+\/node_modules\//.test(header.dataset.path)) {
        button.click()
      }
    }
    if (buttons.length) requestAnimationFrame(loop)
    if (debug) console.log('%sms', Date.now() - start)
  }
  loop()
  window.addEventListener('pjax:complete', loop)
})
