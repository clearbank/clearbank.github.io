import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './codeblock'

import * as Types from './codeblock.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.CodeblockProps = {
  codeblock: {
    title: 'title',
    codeSnippet: 'hello-world',
    section: 'request',
    language: 'turbo-pascal',
    copyCode: false,
    color: 'red'
  }
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

  test('has child elements', () => {
    expect(root.querySelectorAll('header').length).toBeGreaterThanOrEqual(1)
    expect(root.querySelectorAll('header h4').length).toBeGreaterThanOrEqual(1)
    expect(root.querySelectorAll('pre').length).toBeGreaterThanOrEqual(1)
  })

  test('has title from props', () => {
    expect(root.textContent.includes(defaultProps.codeblock.title)).toBeTruthy()
  })

  test('has code-snippets from props', () => {
    expect(
      root.textContent.includes(defaultProps.codeblock.codeSnippet)
    ).toBeTruthy()
  })

  test('has language attributes from props', () => {
    expect(
      root.querySelectorAll(`[class*="${defaultProps.codeblock.language}"]`)
        .length
    ).toBeTruthy
  })

  test('has color attribute from props', () => {
    expect(root.querySelector('header')).toHaveAttribute('color')
  })

  test('is not empty', () => {
    expect(root.textContent.length).toBeTruthy()
  })
})
