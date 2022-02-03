import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './pagination-link'

import * as Types from './pagination-link.types'

let component: any = null
const defaultProps:Types.PaginationLinkProps = {
  slug: '/slug/',
  title: 'Slug',
  direction: 'next'
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
