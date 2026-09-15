import scopesManifest from '../../data/scopes.json'

// The intermediary scopes contract. Components must depend on these types and
// the helpers below rather than the raw config, so the source and parser can
// change without downstream refactoring. See gatsby/node/scopes/build-scopes.js.

export type ScopeAvailability = 'exGateway'

export interface ScopeOperation {
  routeKey: string
  path: string
  methods: string[]
  availability: ScopeAvailability
}

export interface ScopeDefinition {
  id: string
  resource: string
  action: string
  policies: string[]
  operations: ScopeOperation[]
}

export interface ScopePolicy {
  requires: string
  scopes: string[]
  claims: string[]
}

export interface ScopeRoute {
  path: string
  methods: string[]
  policy: string | null
  cluster: string | null
}

export interface ScopesManifest {
  schemaVersion: number
  generatedAt: string
  scopes: Record<string, ScopeDefinition>
  policies: Record<string, ScopePolicy>
  routes: Record<string, ScopeRoute>
}

const manifest: ScopesManifest = scopesManifest as ScopesManifest

export const getScope = (id: string): ScopeDefinition | undefined =>
  manifest.scopes[id]

export const getAllScopes = (): ScopeDefinition[] =>
  Object.values(manifest.scopes)

// Region is accepted for forward-compatibility. Scope data is currently
// region-agnostic, so every region resolves the full set; regional filtering
// can be introduced at the source/parser without changing this signature.
export const getScopesForRegion = (region?: string): ScopeDefinition[] =>
  getAllScopes()

export const resolveScopeRefs = (
  scopeRefs: string[] = []
): ScopeDefinition[] => {
  return scopeRefs.reduce<ScopeDefinition[]>((resolved, scopeRef) => {
    const scope = getScope(scopeRef)

    if (!scope) {
      console.warn(`[scopes] Unknown scope reference "${scopeRef}".`)
      return resolved
    }

    resolved.push(scope)
    return resolved
  }, [])
}
