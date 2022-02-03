import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './code-highlight'

import * as Types from './code-highlight.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.CodeHighlightProps = {
  code: 'hello world',
  language: 'turbo-pascal'
}

beforeEach(() => {
  component = render(<Component {...defaultProps} children='children' />)

  fragment = component.asFragment()
  root = component.container.firstChild
})

afterEach(() => {
  fragment = null
  root = null
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(root).toMatchSnapshot()
  })

  test('has attributes from props', () => {
    expect(root.classList.contains(`language-${defaultProps.language}`)).toBe(
      true
    )
  })

  test('contains at least one pre-element', () => {
    expect(fragment.querySelectorAll('pre').length).toBeGreaterThanOrEqual(1)
  })

  test('is not empty', () => {
    expect(fragment.textContent.length).toBeTruthy()
  })
})
