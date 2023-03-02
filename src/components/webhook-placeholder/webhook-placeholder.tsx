import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import kebabCase from 'lodash.kebabcase'

import customMDXComponents from './webhook-placeholder-mdx-components'
import * as StandardStyles from '../mdxComponents/mdx-components.styles'

import * as Types from './webhook-placeholder.types'
import * as Hooks from './webhook-placeholder.hooks'
import * as Styles from './webhook-placeholder.styles'

const renderTitle = (title: string) =>
  title && <Styles.Title>{title}</Styles.Title>

const getWebhook = (webhooks: any, fileName: string) => {
  const { node } = webhooks.find(
    (webhook: any) => webhook.node.fields.slug === fileName
  )

  return node
}

const renderWebhookMarkdown = (render: string) => {
  const allWebhooks: any = Hooks.getAllWebhooks()

  if (typeof allWebhooks === 'undefined' || !('allMdx' in allWebhooks)) {
    return null
  }

  const { allMdx } = allWebhooks
  const { body, frontmatter } = getWebhook(allMdx.edges, `/${render}`)
  const { title } = frontmatter

  return (
    <>
      {title && (
        <StandardStyles.H3
          as='h3'
          className='cannon page-menu-entry'
          id={kebabCase(title.toLowerCase())}
        >
          {title}
        </StandardStyles.H3>
      )}
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

const WebhookPlaceholder: React.FunctionComponent<Types.WebhookPlaceholderProps> = ({
  render,
  title
}): JSX.Element => {
  if (!render && !title) return null

  return (
    <MDXProvider components={customMDXComponents}>
      <Styles.Container className='page-menu-entry-parent'>
        {render ? renderWebhookMarkdown(render) : renderTitle(title)}
      </Styles.Container>
    </MDXProvider>
  )
}

export default WebhookPlaceholder
