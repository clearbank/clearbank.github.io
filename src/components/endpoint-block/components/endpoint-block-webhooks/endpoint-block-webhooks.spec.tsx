import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './endpoint-block-webhooks'

import * as Types from './endpoint-block-webhooks.types'

let component: any = null
const defaultProps:Types.EndpointBlockWebhooksProps = {
  webhooks: ['payment-message-assessment-failed-webhook-v1']
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
