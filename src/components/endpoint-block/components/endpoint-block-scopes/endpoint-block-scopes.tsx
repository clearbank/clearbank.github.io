import React, { ReactElement } from 'react'

import { ScopeDefinition, ScopeOperation } from 'src/helpers/scopes'

import * as Types from './endpoint-block-scopes.types'
import * as Styles from './endpoint-block-scopes.styles'

const EndpointBlockScopes: React.FunctionComponent<Types.EndpointBlockScopesProps> = ({
  scopes,
  requires = 'all'
}): ReactElement => {
  if (!scopes || scopes.length < 1) {
    return <></>
  }

  const title =
    scopes.length > 1 && requires === 'any'
      ? 'Required API scopes (any one of)'
      : 'Required API scopes'

  return (
    <>
      <Styles.Title>{title}</Styles.Title>
      <Styles.GatewayBadge>External Gateway</Styles.GatewayBadge>
      <Styles.Summary>
        {scopes.map((scope: ScopeDefinition) => (
          <Styles.ScopeEntry key={scope.id}>
            <Styles.ScopeId>{scope.id}</Styles.ScopeId>
            {scope.operations.length > 0 && (
              <>
                <Styles.OperationsLabel>
                  Granting this scope also permits the following operations:
                </Styles.OperationsLabel>
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
              </>
            )}
          </Styles.ScopeEntry>
        ))}
      </Styles.Summary>
    </>
  )
}

export default EndpointBlockScopes
