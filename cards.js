import { getElement } from './utility.js'

export function cards() {
  const heading = getElement('h2')

  heading.addEventListener('click', () => {
    heading.classList.toggle('text-hotpink')
  })
}
