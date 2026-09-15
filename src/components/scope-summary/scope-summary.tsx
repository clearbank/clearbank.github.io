import React, { ReactElement } from 'react'

import {
  getScopesForRegion,
  ScopeDefinition,
  ScopeOperation
} from 'src/helpers/scopes'

import * as Types from './scope-summary.types'
import * as Styles from './scope-summary.styles'

const ScopeSummary: React.FunctionComponent<Types.ScopeSummaryProps> = ({
  region
}): ReactElement => {
  const scopes = getScopesForRegion(region)

  if (!scopes.length) {
    return <Styles.Empty>No API scopes are currently published.</Styles.Empty>
  }

  return (
    <Styles.Container>
      {scopes.map((scope: ScopeDefinition) => (
        <Styles.ScopeCard key={scope.id}>
          <Styles.ScopeId>{scope.id}</Styles.ScopeId>
          <Styles.Meta>
            Resource: {scope.resource} — Action: {scope.action}
          </Styles.Meta>
          <Styles.OperationList>
            {scope.operations.map((operation: ScopeOperation) => (
              <Styles.OperationItem key={operation.routeKey}>
                <Styles.Method type={operation.methods[0]}>
                  {operation.methods.join(', ')}
                </Styles.Method>
                <Styles.Path>{operation.path}</Styles.Path>
              </Styles.OperationItem>
            ))}
          </Styles.OperationList>
        </Styles.ScopeCard>
      ))}
    </Styles.Container>
  )
}

export default ScopeSummary
