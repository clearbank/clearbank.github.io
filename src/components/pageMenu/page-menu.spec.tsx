import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './page-menu'

import * as Types from './page-menu.types'

let component: any = null
const defaultProps: Types.PageMenuProps = {
  data: {}
}

jest.mock('src/utils/browser.services', () => ({
  hasWindow: () => {
    return true
  }
}))

// mock window.machMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
