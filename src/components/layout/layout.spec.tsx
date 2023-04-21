import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './layout'

import * as Types from './layout.types'

let component: any = null
const defaultProps:Types.LayoutProps = {
  children: '<div></div>',
  location: {
    pathname: '/',
    hash: ''
  },
  data: {},
  pageContext: {
    menuItems: [],
  }
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
