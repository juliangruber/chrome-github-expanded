'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const loop = () => {
    const buttons = Array.from(document.querySelectorAll('.load-diff-button'))
    for (let button of buttons) button.click()
    if (buttons.length) requestAnimationFrame(loop)
  }
  loop()
})
