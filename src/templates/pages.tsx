import React from 'react'
import { graphql } from 'gatsby'

import Doc, { Head as DocHead } from 'src/containers/doc'

const Pages = (props: any) => {
  return (
    <>
      <Doc {...props} />
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
        fields: { slug: { eq: $regexFilter }
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
