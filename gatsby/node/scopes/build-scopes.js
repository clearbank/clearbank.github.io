const SCHEMA_VERSION = 1

const HTTP_METHOD_WILDCARD = 'ALL'

// Splits an OAuth 2.0 scope id (e.g. "webhooks:signature-keys:read") into its
// resource ("webhooks:signature-keys") and trailing action ("read").
function splitScopeId (scopeId) {
  const segments = scopeId.split(':')
  const action = segments.length > 1 ? segments[segments.length - 1] : ''
  const resource = segments.length > 1
    ? segments.slice(0, -1).join(':')
    : scopeId

  return { resource, action }
}

function normaliseMethods (methods) {
  if (!Array.isArray(methods) || methods.length === 0) {
    return [HTTP_METHOD_WILDCARD]
  }

  return methods.map(method => String(method).toUpperCase())
}

function buildPolicies (authSettings, warn) {
  const rawPolicies =
    (authSettings &&
      authSettings.AuthSettings &&
      authSettings.AuthSettings.Policies) ||
    []

  return rawPolicies.reduce((policies, policy) => {
    if (!policy || !policy.Name) {
      warn('Encountered a policy without a Name; skipping.')
      return policies
    }

    const scopeRequirements = policy.ScopeRequirements || {}
    const claimRequirements = policy.ClaimRequirements || {}

    policies[policy.Name] = {
      requires: scopeRequirements.Requires || 'All',
      scopes: Array.isArray(scopeRequirements.Values)
        ? scopeRequirements.Values
        : [],
      // Parsed but intentionally not surfaced downstream for now.
      claims: Array.isArray(claimRequirements.Values)
        ? claimRequirements.Values
        : []
    }

    return policies
  }, {})
}

function buildRoutes (reverseProxy) {
  const rawRoutes =
    (reverseProxy &&
      reverseProxy.ReverseProxy &&
      reverseProxy.ReverseProxy.Routes) ||
    {}

  return Object.keys(rawRoutes).reduce((routes, routeKey) => {
    const route = rawRoutes[routeKey] || {}
    const match = route.Match || {}

    routes[routeKey] = {
      path: match.Path || '',
      methods: normaliseMethods(match.Methods),
      policy: route.AuthorizationPolicy || null,
      cluster: route.ClusterId || null
    }

    return routes
  }, {})
}

// Produces the intermediary scopes manifest that the rest of the site depends
// upon. The shape is deliberately decoupled from the raw config source so the
// source and this parser can change without refactoring downstream consumers.
function buildScopes ({ authSettings, reverseProxy }, options = {}) {
  const warn =
    typeof options.warn === 'function'
      ? options.warn
      : message => console.warn(`[scopes] ${message}`)

  const policies = buildPolicies(authSettings, warn)
  const routes = buildRoutes(reverseProxy)

  const scopes = {}

  const ensureScope = scopeId => {
    if (!scopes[scopeId]) {
      const { resource, action } = splitScopeId(scopeId)
      scopes[scopeId] = {
        id: scopeId,
        resource,
        action,
        policies: [],
        operations: []
      }
    }

    return scopes[scopeId]
  }

  Object.keys(routes).forEach(routeKey => {
    const route = routes[routeKey]

    if (!route.policy) {
      return
    }

    const policy = policies[route.policy]

    if (!policy) {
      warn(
        `Route "${routeKey}" references unknown policy "${route.policy}"; no scopes resolved.`
      )
      return
    }

    if (policy.scopes.length === 0) {
      warn(
        `Policy "${route.policy}" (route "${routeKey}") defines no scopes; skipping.`
      )
      return
    }

    policy.scopes.forEach(scopeId => {
      const scope = ensureScope(scopeId)

      if (!scope.policies.includes(route.policy)) {
        scope.policies.push(route.policy)
      }

      scope.operations.push({
        routeKey,
        path: route.path,
        methods: route.methods,
        availability: 'exGateway'
      })
    })
  })

  return {
    schemaVersion: SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    scopes,
    policies,
    routes
  }
}

module.exports = buildScopes
module.exports.SCHEMA_VERSION = SCHEMA_VERSION
module.exports.splitScopeId = splitScopeId
