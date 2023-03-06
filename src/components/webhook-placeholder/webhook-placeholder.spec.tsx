import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './webhook-placeholder'

import * as Types from './webhook-placeholder.types'

jest.mock('__mocks__/gatsby-plugin-mdx')

let component: any = null
const defaultProps:Types.WebhookPlaceholderProps = {
  render: 'title',
  title: 'title'
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})


describe('Component', () => {
  test('matches snapshot', () => {
      expect(component.asFragment()).toMatchSnapshot()
  })
})
