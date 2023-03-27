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
  pageContext
}): JSX.Element => {
  const { pathname, hash } = location
  const { menuItems } = pageContext

  if (!data || !data.mdx || !data.mdx.frontmatter) {
    return null
  }

  const { metaTitle: pageTitle, showPageMenu } = data.mdx.frontmatter
  const showRightSidebar = showPageMenu === null ? true : showPageMenu !== false

  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Styles.Wrapper>
          <Styles.HeaderWrapper>
            <Header
              menuItems={pageContext.menuItems}
              currentPageURL={`${pathname}${hash}`}
            />
            <HeaderMenu items={pageContext.menuItems} currentPathname={pathname}/>
          </Styles.HeaderWrapper>
          <Styles.ContentWrapper>
            <Styles.InnerContentWrapper>
              {children}
              <Pagination menuItems={menuItems} />
            </Styles.InnerContentWrapper>
          </Styles.ContentWrapper>
          <Styles.RightSidebarWrapper>
            {showRightSidebar && (
              <>
                {/* PageHeader only visible on small and medium viewport */}
                <Styles.PageHeader>{pageTitle}</Styles.PageHeader>
                <PageMenu data={data} />
              </>
            )}
          </Styles.RightSidebarWrapper>
          <Styles.FooterWrapper>
            <Footer />
          </Styles.FooterWrapper>
          <BackToTop />
        </Styles.Wrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout
