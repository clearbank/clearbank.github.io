import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './endpoint-block-scopes'

import * as Types from './endpoint-block-scopes.types'

let component: any = null

const defaultProps: Types.EndpointBlockScopesProps = {
  scopes: [
    {
      id: 'webhooks:signature-keys:read',
      resource: 'webhooks:signature-keys',
      action: 'read',
      policies: ['webhooks-signature-keys-read'],
      operations: [
        {
          routeKey: 'GetWebhookSignatureKeys',
          path: '/webhooks/v1/signature-keys',
          methods: ['GET'],
          availability: 'exGateway'
        },
        {
          routeKey: 'GetWebhookSignatureKey',
          path: '/webhooks/v1/signature-keys/{keyId}',
          methods: ['GET'],
          availability: 'exGateway'
        }
      ]
    }
  ]
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })

  test('renders nothing when no scopes are provided', () => {
    const { container } = render(<Component scopes={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})
