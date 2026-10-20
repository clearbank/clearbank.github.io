import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import kebabCase from 'lodash.kebabcase'
import { Check, Copy } from 'react-feather'

import { Layout } from 'src/components'
import GithubConnector from 'src/components/github-connector'
import { htmlToMarkdown } from 'src/helpers/htmlToMarkdown'

import config from '../../../config'

import * as Styles from './doc.styles'

import 'src/components/styles.css'

export default function Doc(props: any) {
  const articleRef = React.useRef<HTMLDivElement>(null)
  const [copyStatus, setCopyStatus] = React.useState('')
  const { data } = props

  const handleCopyMarkdown = async () => {
    const article = articleRef.current

    if (!article) {
      setCopyStatus('Could not find page content to copy.')
      return
    }

    try {
      const markdown = htmlToMarkdown(article, window.location.href)
      await navigator.clipboard.writeText(markdown)
      setCopyStatus('Page copied as Markdown')
    } catch {
      setCopyStatus(
        'Copy failed. Please select and copy the page content manually.'
      )
    }
  }

  React.useEffect(() => {
    if (!copyStatus) return

    const timeoutId = window.setTimeout(() => {
      setCopyStatus('')
    }, 4000)

    return () => window.clearTimeout(timeoutId)
  }, [copyStatus])

  if (!data) {
    return null
  }

  const pageTitle = data.mdx.fields.title
  const pageId = kebabCase(pageTitle.toLowerCase())

  const region =
  props.location?.pathname?.split('/').filter(Boolean)[0] === 'eu'
    ? 'eu'
    : 'uk'
  const homePath = `/${region}`

  return (
    <Layout
  {...props}
  articleBreadcrumb={
    <Styles.ArticleBreadcrumb aria-label='Breadcrumb'>
      <a href={homePath}>Home</a>
      <span aria-hidden='true'> / </span>
      <span aria-current='page'>{pageTitle}</span>
    </Styles.ArticleBreadcrumb>
  }
  
  articleActions={
        <Styles.PageActions>
          <Styles.CopyMarkdownButton
            type='button'
            onClick={handleCopyMarkdown}
          >
            {copyStatus === 'Page copied as Markdown'
              ? <Check size={16} aria-hidden='true' />
              : <Copy size={16} aria-hidden='true' />}
            <span>Copy as Markdown</span>
          </Styles.CopyMarkdownButton>

          <Styles.CopyMarkdownStatus role='status' aria-live='polite'>
            {copyStatus}
          </Styles.CopyMarkdownStatus>
        </Styles.PageActions>
      }
    >
      <Styles.Page className='page' id={`doc-page-${pageId}`} key={pageId}>
        <Styles.Title id='pageTitle' className='page-menu-entry'>
          {pageTitle}
        </Styles.Title>

        <div ref={articleRef}>
          {data.pageContent.edges.map(({ node }, index: number) => {
            const filePath = `${config.header.githubDocsRoot}${node.fields.slug}.mdx`

            return (
              <React.Fragment key={node.id}>
                <MDXRenderer>{node.body}</MDXRenderer>
                <Styles.ShareContainer isFirstEntry={index === 0} data-markdown-exclude='true'>
                  <GithubConnector filePath={filePath} />
                </Styles.ShareContainer>
              </React.Fragment>
            )
          })}
        </div>
      </Styles.Page>
    </Layout>
  )
}