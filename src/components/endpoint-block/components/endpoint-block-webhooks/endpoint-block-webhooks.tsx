import React, { ReactElement } from 'react'
import kebabCase from 'lodash.kebabcase'

import * as Types from './endpoint-block-webhooks.types'
import * as Styles from './endpoint-block-webhooks.styles'

const EndpointBlockWebhooks: React.FunctionComponent<Types.EndpointBlockWebhooksProps> = ({
  webhooks
}): ReactElement => {
  if (webhooks.length < 1) {
    return <></>
  }

  return (
    <>
      <Styles.Title>Associated Webhooks</Styles.Title>
      <Styles.Summary>
        {!!webhooks &&
          webhooks.map((webhook: any, index: number) => (
            <Styles.ListEntry key={index}>
              <Styles.WebhookLink href={'#' + kebabCase(webhook.toLowerCase())}>
                {webhook}
              </Styles.WebhookLink>
            </Styles.ListEntry>
          ))}
      </Styles.Summary>
    </>
  )
}

export default EndpointBlockWebhooks
