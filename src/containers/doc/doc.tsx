import React, { Component } from 'react'
import Helmet from 'react-helmet'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import { Layout } from 'src/components'
import GithubConnector from 'src/components/github-connector'
import 'src/components/styles.css'
import config from '../../../config'
import kebabCase from 'lodash.kebabcase'

import * as Styles from './doc.styles'
export default class Doc extends Component {
  render() {
    const {
      data,
      data: { mdx }
    } = this.props
    if (!data) {
      return null
    }

    const contentInSubdirectory = new RegExp(/^\/docs\/([\w-_]+\/)[\w-_]+\/?$/)

    const pageContent = this.props.data.pageContent.edges.map(({ node }, index: number, array: any[]) => {
      const { id, slug, title } = node.fields
      const isInSubdirectory = contentInSubdirectory.test(slug)
      const hasSiblings = array.length > 1

      const isPageInAFilledSubmenu = isInSubdirectory && hasSiblings
      const isPageWithoutSubmenu = !isInSubdirectory && !hasSiblings

      // do not generate empty root pages in subdirectories
      if (!isPageInAFilledSubmenu && !isPageWithoutSubmenu) {
        return null
      }

      const pageId = isPageInAFilledSubmenu ? kebabCase(title.toLowerCase()) : null

      const filePath = `${config.header.githubDocsRoot}${slug}.mdx`

      return (
        <Styles.Page id={pageId} className='page' key={id}>
          <MDXRenderer>{node.body}</MDXRenderer>
          <Styles.ShareContainer isFirstEntry={index === 0}>
            <GithubConnector filePath={filePath} />
          </Styles.ShareContainer>
        </Styles.Page>
      )
    })

    // if you want a main page title for the whole thing
    const pageTitle = this.props.data.mdx.fields.title

    // meta tags
    const metaTitle = mdx.frontmatter.metaTitle
    const metaDescription = mdx.frontmatter.metaDescription
    let canonicalUrl = config.gatsby.siteUrl
    canonicalUrl =
      config.gatsby.pathPrefix !== '/'
        ? canonicalUrl + config.gatsby.pathPrefix
        : canonicalUrl
    canonicalUrl = canonicalUrl + mdx.fields.slug

    return (
      <Layout {...this.props}>
        <Helmet>
          {metaTitle ? <title>{metaTitle} | ClearBank® Developer Portal</title> : null}
          {metaTitle ? <meta name='title' content={metaTitle} /> : null}
          {metaDescription ? (
            <meta name='description' content={metaDescription} />
          ) : null}
          {metaTitle ? <meta property='og:title' content={metaTitle} /> : null}
          {metaDescription ? (
            <meta property='og:description' content={metaDescription} />
          ) : null}
          {metaTitle ? (
            <meta property='twitter:title' content={metaTitle} />
          ) : null}
          {metaDescription ? (
            <meta property='twitter:description' content={metaDescription} />
          ) : null}
          <link rel='canonical' href={canonicalUrl} />
        </Helmet>

        <Styles.Title id='pageTitle'>
          {pageTitle}
        </Styles.Title>
        <>
          {pageContent}
        </>
      </Layout>
    )
  }
}
