import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './footer'

import * as Types from './footer.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.FooterProps = {
  items: [],
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
    expect(root.hasChildNodes()).toBeTruthy()
  })

  test('has offical company name in text', () => {
    expect(root.textContent.includes('Copyright ClearBank Limited')).toBeTruthy()
  })

  test('is not empty', () => {
    expect(fragment.textContent.length).toBeTruthy()
  })
})
