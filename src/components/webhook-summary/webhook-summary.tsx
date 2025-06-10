import React from 'react'
import kebabCase from 'lodash.kebabcase'

import * as Types from './webhook-summary.types'
import * as Styles from './webhook-summary.styles'
import * as Hooks from 'src/hooks/allWebhooks'

const getWebhook = (webhooks: any, fileName: string) => {
  const { node } = webhooks.find(
    (webhook: any) => webhook.node.fields.slug === fileName
  )

  return node
}

const WebhookSummary: React.FC<Types.WebhookSummaryProps> = ({
  description,
  endpoint,
  method,
  webhooks = []
}) => {
  const allWebhooks: any = Hooks.getAllWebhooks()

  if (
    typeof allWebhooks === 'undefined' ||
    !('allMdx' in allWebhooks) ||
    !webhooks.length
  ) {
    return null
  }

  const webhookTitles: string[] = webhooks.map(webhookTitle => {
    const { allMdx } = allWebhooks
    const { frontmatter } = getWebhook(allMdx.edges, `/${webhookTitle}`)
    const { title } = frontmatter

    return title
  })

  return (
    <Styles.Summary>
      <Styles.Column>
        <Styles.Title>Associated Endpoint</Styles.Title>
        <Styles.List>
          <Styles.ListEntry>
            <Styles.EndpointTitle>
              <Styles.EndpointMethod type={method}>
                {method}
              </Styles.EndpointMethod>
              <Styles.EndpointName href={endpoint}>
                {description}
              </Styles.EndpointName>
            </Styles.EndpointTitle>
          </Styles.ListEntry>
        </Styles.List>
      </Styles.Column>
      <Styles.Column>
        <Styles.Title>Webhook</Styles.Title>
        <Styles.List>
          {webhookTitles.map(webhookTitle => (
            <Styles.ListEntry key={webhookTitle}>
              <Styles.WebhookTitle
                href={'#' + kebabCase(webhookTitle.toLowerCase())}
              >
                {webhookTitle}
              </Styles.WebhookTitle>
            </Styles.ListEntry>
          ))}
        </Styles.List>
      </Styles.Column>
    </Styles.Summary>
  )
}

export default WebhookSummary
