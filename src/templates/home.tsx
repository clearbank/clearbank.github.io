import React from 'react'
import { graphql } from 'gatsby'

import HomePage from 'src/containers/homepage'
import CookieBanner from '../components/cookie-banner'

import * as Styles from './pages.styles'

const Home = (props: any) => {
  return (
    <>
      <HomePage {...props}/>
      <Styles.CookieWrapper>
        <CookieBanner />
      </Styles.CookieWrapper>
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
