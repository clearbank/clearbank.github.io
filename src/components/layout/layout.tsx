import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from '../themeProvider'
import mdxComponents from '../mdxComponents'

import Header from '../header'
import Footer from '../footer'

import Sidebar from 'src/components/sidebar'
import PageMenu from 'src/components/pageMenu'
import Pagination from 'src/components/pagination'
import BackToTop from 'src/components/back-to-top'

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
          </Styles.HeaderWrapper>
          <Styles.LeftSidebarWrapper id='navigation' className='hiddenMobile'>
            <>
              {/* I'm not sure why we have to do a check here for pageContext.menuItems && */}
              {/* But not having it breaks the build (not development) */}
              {/* I think it must do two runs and doesn't have it the first time around */}
              {!!menuItems && (
                <Sidebar
                  menuItems={menuItems}
                  currentPageURL={`${pathname}${hash}`}
                />
              )}
            </>
          </Styles.LeftSidebarWrapper>
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
