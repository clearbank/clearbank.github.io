import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './footer'

import * as Types from './footer.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.FooterProps = {}

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
    expect(root.textContent.includes('Copyright ClearBank Ltd.')).toBeTruthy()
  })

  test('has address in text', () => {
    expect(
      root.textContent.includes('ClearBank, 4th Floor, Prologue Works, 25 Marsh St, Bristol BS1 4AX.')
    ).toBeTruthy()
  })

  test('has current year in text', () => {
    const currentYear = new Date().getFullYear().toString()

    expect(root.textContent.includes(currentYear)).toBeTruthy()
  })

  test('is not empty', () => {
    expect(fragment.textContent.length).toBeTruthy()
  })
})
