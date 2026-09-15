import React, { useEffect, useRef, useState } from 'react'
import { MDXProvider } from '@mdx-js/react'

import ThemeProvider from '../themeProvider'
import mdxComponents from '../mdxComponents'

import Header from '../header'
import Footer from '../footer'

import PageMenu from 'src/components/pageMenu'
import Pagination from 'src/components/pagination'
import BackToTop from 'src/components/back-to-top'
import HeaderMenu from 'src/components/header-menu'
import DocsNavigation from 'src/components/docs-navigation'

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

  const currentPath = location?.pathname || ''
  const hasLeftNavigation = /^\/(uk|eu)\/docs(\/|$)/.test(currentPath)
  const hasRightNavigation = !!data?.mdx?.frontmatter?.showPageMenu

  const mobileNavigationId = 'docs-navigation-modal'
  const leftNavigationId = 'docs-navigation-panel'

  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false)

  const [isPageMenuOpen, setIsPageMenuOpen] = useState(false)
  const pageMenuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
  if (!isPageMenuOpen || typeof window === 'undefined') {
    return
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsPageMenuOpen(false)
      pageMenuButtonRef.current?.focus()
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [isPageMenuOpen])

  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Styles.Wrapper
          hasLeftNavigation={hasLeftNavigation}
          isLeftSidebarCollapsed={isLeftSidebarCollapsed}
        >
          <Styles.HeaderWrapper>
            <Header
              location={location}
              isMobileNavigationOpen={isMobileNavigationOpen}
              onMobileNavigationToggle={() =>
                setIsMobileNavigationOpen(isOpen => !isOpen)
              }
              mobileNavigationId={mobileNavigationId}
            />
            <HeaderMenu items={pageContext.menuItems} />
          </Styles.HeaderWrapper>

          {hasLeftNavigation && (
            <Styles.LeftSidebarWrapper isCollapsed={isLeftSidebarCollapsed}>
  <Styles.LeftSidebarToggle
    isCollapsed={isLeftSidebarCollapsed}
    type='button'
    aria-expanded={!isLeftSidebarCollapsed}
    aria-controls={leftNavigationId}
    aria-label={
      isLeftSidebarCollapsed
        ? 'Show documentation navigation'
        : 'Hide documentation navigation'
    }
    title={
      isLeftSidebarCollapsed
        ? 'Show documentation navigation'
        : 'Hide documentation navigation'
    }
    onClick={() =>
      setIsLeftSidebarCollapsed(isCollapsed => !isCollapsed)
    }
  >
    <span aria-hidden='true'>
  {isLeftSidebarCollapsed ? '›' : '‹'}
</span>
  </Styles.LeftSidebarToggle>

  {isLeftSidebarCollapsed && (
    <Styles.CollapsedSidebarLabel>
      Docs
    </Styles.CollapsedSidebarLabel>
  )}

  <Styles.SidebarPanel
    id={leftNavigationId}
    hidden={isLeftSidebarCollapsed}
  >
    <DocsNavigation
      items={menuItems}
      currentPath={currentPath}
    />
  </Styles.SidebarPanel>
</Styles.LeftSidebarWrapper>
          )}

          <Styles.ContentWrapper>
            {hasRightNavigation && (
              <Styles.ArticleToolbar>
                <Styles.OnThisPageDisclosure>
  <Styles.OnThisPageButton
    ref={pageMenuButtonRef}
    type='button'
    aria-expanded={isPageMenuOpen}
    aria-controls='on-this-page-panel'
    onClick={() => setIsPageMenuOpen(isOpen => !isOpen)}
  >
    On this page
  </Styles.OnThisPageButton>

  {isPageMenuOpen && (
    <Styles.OnThisPagePanel id='on-this-page-panel'>
      <PageMenu />
    </Styles.OnThisPagePanel>
  )}
</Styles.OnThisPageDisclosure>
              </Styles.ArticleToolbar>
            )}

            <Styles.InnerContentWrapper>
              {children}
              <Pagination menuItems={menuItems} />
            </Styles.InnerContentWrapper>
          </Styles.ContentWrapper>

          <Styles.FooterWrapper>
            <Footer
              items={pageContext.menuItems}
              hideNavigation={hideFooterNavigation}
            />
          </Styles.FooterWrapper>

          <BackToTop />
        </Styles.Wrapper>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default Layout