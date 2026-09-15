import React, { ReactElement } from 'react'

import { ScopeDefinition, ScopeOperation } from 'src/helpers/scopes'

import * as Types from './endpoint-block-scopes.types'
import * as Styles from './endpoint-block-scopes.styles'

const EndpointBlockScopes: React.FunctionComponent<Types.EndpointBlockScopesProps> = ({
  scopes
}): ReactElement => {
  if (!scopes || scopes.length < 1) {
    return <></>
  }

  return (
    <>
      <Styles.Title>Required API scopes</Styles.Title>
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
