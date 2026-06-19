import React from 'react'
import { graphql } from 'gatsby'

import HomePage from 'src/containers/homepage'


const Home = (props: any) => {

  return (
    <>
      <HomePage {...props}/>
    </>
  )
}

export default Home
// export const Head = DocHead;

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
  }
`
