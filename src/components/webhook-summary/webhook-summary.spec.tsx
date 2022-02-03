import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './webhook-summary'

import * as Types from './webhook-summary.types'

let component: any = null
const defaultProps: Types.WebhookSummaryProps = {
  description: 'description',
  endpoint: 'endpoint',
  method: 'method',
  webhooks: ['webhook 1', 'webhook 2']
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
