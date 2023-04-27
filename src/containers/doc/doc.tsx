import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import kebabCase from 'lodash.kebabcase'

import { Layout } from 'src/components'
import GithubConnector from 'src/components/github-connector'

import config from '../../../config'

import * as Styles from './doc.styles'

import 'src/components/styles.css'

export default function Doc(props: any) {
  const { data } = props;
  
  if (!data) {
    return null
  }

  const pageTitle = data.mdx.fields.title
  const pageId = kebabCase(data.mdx.fields.title.toLowerCase())

  return (
    <Layout {...props}>
      <Styles.Page className='page' id={pageId} key={pageId}>
        <Styles.Title id='pageTitle' className="page-menu-entry">
          {pageTitle}
        </Styles.Title>
        {data.pageContent.edges.map(({ node }, index: number) => {
          const filePath = `${config.header.githubDocsRoot}${node.fields.slug}.mdx`

          return (
            <>
              <MDXRenderer key={node.id}>{node.body}</MDXRenderer>
              <Styles.ShareContainer isFirstEntry={index === 0}>
                <GithubConnector filePath={filePath} />
              </Styles.ShareContainer>
            </>
          )
        })}
      </Styles.Page>
    </Layout>
  )
}

export const Head: React.FC<any> = ({ data }) => {
  const { mdx } = data;
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
    <>
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
    </>
  )
}