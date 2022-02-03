import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './back-to-top'

import * as Types from './back-to-top.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null

let root: HTMLElement = null

jest.mock('src/utils/browser.services', () => ({
  hasWindow: () => {
    return true
  }
}))

const defaultProps: Types.BackToTopProps = {}

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
    expect(root.hasChildNodes()).toBeTruthy()
  })

  test('has correct icon', () => {
    expect(root.querySelectorAll('.cb-icon-arrow-up').length).toBeTruthy
    expect(root.querySelector('.cb-icon-arrow-up').tagName.toLowerCase()).toBe(
      'i'
    )
  })
})
