import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from '../themeProvider'
import mdxComponents from '../mdxComponents'

import Header from '../header'
import Footer from '../footer'

import PageMenu from 'src/components/pageMenu'
import Pagination from 'src/components/pagination'
import BackToTop from 'src/components/back-to-top'
import HeaderMenu from 'src/components/header-menu'

import * as Styles from './layout.styles'
import * as Types from './layout.types'

const Layout: React.FunctionComponent<Types.LayoutProps> = ({
  location,
  data,
  children,
  pageContext,
  hideFooterNavigation,
}): JSX.Element => {
  const { menuItems } = pageContext

  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Styles.Wrapper>
          <Styles.HeaderWrapper>
            <Header />
            <HeaderMenu items={pageContext.menuItems} />
          </Styles.HeaderWrapper>
          <Styles.ContentWrapper>
            <Styles.InnerContentWrapper>
              {children}
              <Pagination menuItems={menuItems} />
            </Styles.InnerContentWrapper>
          </Styles.ContentWrapper>
          <Styles.RightSidebarWrapper>
            {data?.mdx?.frontmatter?.showPageMenu && (
              <>
                <Styles.PageHeader>{data?.mdx?.frontmatter?.metaTitle}</Styles.PageHeader>
                <PageMenu />
              </>
            )}
          </Styles.RightSidebarWrapper>
          <Styles.FooterWrapper>
            <Footer items={pageContext.menuItems} hideNavigation={hideFooterNavigation} />
          </Styles.FooterWrapper>
          <BackToTop />
        </Styles.Wrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout
