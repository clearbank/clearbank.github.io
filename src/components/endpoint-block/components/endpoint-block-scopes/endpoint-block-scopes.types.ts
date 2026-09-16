import { ScopeDefinition } from 'src/helpers/scopes'

export interface EndpointBlockScopesProps {
  scopes: ScopeDefinition[]
  requires?: 'any' | 'all'
}
