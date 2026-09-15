const buildScopes = require('./build-scopes')

const authSettings = {
  AuthSettings: {
    Policies: [
      {
        Name: 'webhooks-signature-keys-read',
        ScopeRequirements: {
          Requires: 'All',
          Values: ['webhooks:signature-keys:read']
        },
        ClaimRequirements: {
          Requires: 'All',
          Values: ['client_institution_id']
        }
      }
    ]
  }
}

const reverseProxy = {
  ReverseProxy: {
    Routes: {
      GetWebhookSignatureKeys: {
        ClusterId: 'apim',
        AuthorizationPolicy: 'webhooks-signature-keys-read',
        Match: {
          Path: '/webhooks/v1/signature-keys',
          Methods: ['Get']
        }
      },
      DeleteWebhookSignatureKey: {
        ClusterId: 'apim',
        AuthorizationPolicy: 'webhooks-signature-keys-delete',
        Match: {
          Path: '/webhooks/v1/signature-keys/{keyId}',
          Methods: ['DELETE']
        }
      }
    }
  }
}

describe('buildScopes', () => {
  test('resolves routes to scopes with a derived resource and action', () => {
    const result = buildScopes({ authSettings, reverseProxy }, { warn: () => {} })

    expect(result.schemaVersion).toBe(buildScopes.SCHEMA_VERSION)
    expect(result.scopes['webhooks:signature-keys:read']).toEqual(
      expect.objectContaining({
        id: 'webhooks:signature-keys:read',
        resource: 'webhooks:signature-keys',
        action: 'read',
        policies: ['webhooks-signature-keys-read']
      })
    )

    const { operations } = result.scopes['webhooks:signature-keys:read']
    expect(operations).toHaveLength(1)
    expect(operations[0]).toEqual({
      routeKey: 'GetWebhookSignatureKeys',
      path: '/webhooks/v1/signature-keys',
      methods: ['GET'],
      availability: 'exGateway'
    })
  })

  test('warns but does not throw when a route references an unknown policy', () => {
    const warn = jest.fn()

    buildScopes({ authSettings, reverseProxy }, { warn })

    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('webhooks-signature-keys-delete')
    )
  })
})
