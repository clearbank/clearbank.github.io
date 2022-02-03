import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './code-snippet'

import * as Types from './code-snippet.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.CodeSnippetProps = {
  code: 'hello world',
  type: 'type',
  className: 'className'
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

  test('is a code element', () => {
    expect(fragment.querySelectorAll('code').length).toBe(1)
    expect(root.tagName.toLowerCase()).toBe('code')
  })

  test('has class attribute from props', () => {
    expect(root.classList.contains(defaultProps.className)).toBe(true)
  })

  test('has type attribute from props', () => {
    expect(root).toHaveAttribute('type')
  })

  test('has code text child from props', () => {
    expect(root.hasChildNodes()).toBeTruthy()
    expect(root.textContent.includes(defaultProps.code as string)).toBeTruthy()
  })

  test('is not empty', () => {
    expect(root.textContent.length).toBeTruthy()
  })
})
