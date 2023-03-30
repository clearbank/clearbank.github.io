import React, { useMemo } from 'react'
import { MDXProvider } from '@mdx-js/react'
import ThemeProvider from '../themeProvider'
import mdxComponents from '../mdxComponents'

import Header from '../header'
import Footer from '../footer'

import PageMenu from 'src/components/pageMenu'
import Pagination from 'src/components/pagination'
import BackToTop from 'src/components/back-to-top'
import HeaderMenu from 'src/components/header-menu'

import { hasWindow } from 'src/utils/browser.services'

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

  // const headings = useMemo(() => {
    // if (!hasWindow()) {
    //   return [];
    // }

    const mdxTitles: HTMLElement[] = Array.from(document.querySelectorAll('.page .page-menu-entry'))

    const headings = mdxTitles
      .map(mdxTitle => ({
        tag: mdxTitle.tagName,
        parent: mdxTitle.closest('.page').id,
        title: mdxTitle.textContent,
        id: mdxTitle.id
      }))
      .filter((entry: any) => entry.id !== '')
  // }, [data])

  if (!data || !data.mdx || !data.mdx.frontmatter) {
    return null
  }

  const { metaTitle: pageTitle, showPageMenu } = data.mdx.frontmatter

  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Styles.Wrapper>
          <Styles.HeaderWrapper>
            <Header
              menuItems={pageContext.menuItems}
              currentPageURL={`${pathname}${hash}`}
            />
            <HeaderMenu items={pageContext.menuItems} />
          </Styles.HeaderWrapper>
          <Styles.ContentWrapper>
            <Styles.InnerContentWrapper>
              {children}
              <Pagination menuItems={menuItems} />
            </Styles.InnerContentWrapper>
          </Styles.ContentWrapper>
          <Styles.RightSidebarWrapper>
            {showPageMenu && (
              <>
                {/* PageHeader only visible on small and medium viewport */}
                <Styles.PageHeader>{pageTitle}</Styles.PageHeader>
                <PageMenu headings={headings} />
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
