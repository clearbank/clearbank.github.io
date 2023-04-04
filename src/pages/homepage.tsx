import React from 'react'
import { graphql } from 'gatsby'
// import Doc from 'src/containers/doc'

const Pages = (props) => {
  return (
    <>
      {/* <Doc {...props} /> */}
    </>
  )
}

export default Pages

// TODO: Use fragments for these page queries
// and share them between the doc template and this homepage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        docsLocation
      }
    }
    mdx(fields: {slug: {eq: "/"}}) {
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
      }
    }
    pageContent: allMdx(filter: {fields: {slug: {eq: "/"}}}) {
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
      }
    }
  }
`
