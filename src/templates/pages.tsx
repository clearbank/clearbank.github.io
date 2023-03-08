import React from 'react'
import { graphql } from 'gatsby'

import Doc, { Head as DocHead } from 'src/containers/doc'
import CookieBanner from '../components/cookie-banner'

import * as Styles from './pages.styles'

const Pages = (props: any) => {
  return (
    <>
      <Doc {...props} />
      <Styles.CookieWrapper>
        <CookieBanner />
      </Styles.CookieWrapper>
    </>
  )
}

export default Pages
export const Head = DocHead;

// TODO: Use fragments for these page queries
// and share them between the doc template and this homepage
export const pageQuery = graphql`
  query($id: String!, $regexFilter: String!) {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        metaTitle
        metaDescription
        showPageMenu
      }
    }
    pageContent: allMdx(
      filter: {
        fields: { slug: { regex: $regexFilter }
      }
      frontmatter: {
        order: { gt: 0 }
      }
    }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          body
          fields {
            title
            slug
            order
            id
          }
        }
        next {
          fields {
            id
            slug
            title
          }
        }
        previous {
          fields {
            id
            slug
            title
          }
        }
      }
    }
  }
`
