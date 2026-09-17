import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { MDXProvider } from "@mdx-js/react"

import ThemeProvider from "../themeProvider"
import mdxComponents from "../mdxComponents"
import Header from "../header"
import Footer from "../footer"

import PageMenu from "src/components/pageMenu"
import Pagination from "src/components/pagination"
import BackToTop from "src/components/back-to-top"
import HeaderMenu from "src/components/header-menu"
import DocsNavigation from "src/components/docs-navigation"
import { breakpoints } from "src/components/theme"
import { hasWindow } from "src/utils/browser.services"

import * as Styles from "./layout.styles"
import * as Types from "./layout.types"

const Layout: React.FunctionComponent<Types.LayoutProps> = ({
  location,
  data,
  children,
  pageContext,
  hideFooterNavigation,
}): JSX.Element => {
  const { menuItems } = pageContext
  const currentPath = location?.pathname || ""
  const hasLeftNavigation = /^\/(uk|eu)\/docs(\/|$)/.test(currentPath)
  const hasRightNavigation = !!data?.mdx?.frontmatter?.showPageMenu

  const mobileNavigationId = "docs-navigation-modal"
  const leftNavigationId = "docs-navigation-panel"

  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState(false)
  const [isPageMenuOpen, setIsPageMenuOpen] = useState(false)

  const mobileNavigationCloseButtonRef = useRef<HTMLButtonElement>(null)
  const mobileNavigationTriggerRef = useRef<HTMLElement | null>(null)
  const pageMenuButtonRef = useRef<HTMLButtonElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const openMobileNavigation = () => {
    if (hasWindow()) {
      mobileNavigationTriggerRef.current = document.activeElement as HTMLElement
    }

    setIsMobileNavigationOpen(true)
  }

  const closeMobileNavigation = (restoreFocus = true) => {
    setIsMobileNavigationOpen(false)

    if (restoreFocus && hasWindow()) {
      window.setTimeout(() => {
        mobileNavigationTriggerRef.current?.focus()
      }, 0)
    }
  }

  const toggleMobileNavigation = () => {
    if (isMobileNavigationOpen) {
      closeMobileNavigation()
    } else {
      openMobileNavigation()
    }
  }

  useEffect(() => {
    if (!isPageMenuOpen || typeof window === "undefined") {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPageMenuOpen(false)
        pageMenuButtonRef.current?.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isPageMenuOpen])

  useEffect(() => {
    if (!isMobileNavigationOpen || !hasWindow()) {
      return
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"
    mobileNavigationCloseButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileNavigation()
      }
    }

    const handleResize = () => {
      if (window.matchMedia(`(min-width: ${breakpoints.xLarge})`).matches) {
        closeMobileNavigation(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("resize", handleResize)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobileNavigationOpen])

  // Measures the header's real rendered height (which changes whenever tab
  // titles wrap, fonts load, or the breakpoint changes) and writes it to a
  // CSS custom property. Every consumer that needs to offset itself below
  // the fixed header (grid rows, sticky sidebars/toolbar, mobile overlay)
  // reads var(--header-height) instead of a hardcoded pixel token, so it
  // self-corrects instead of drifting out of sync with the real layout.
  useLayoutEffect(() => {
    if (!hasWindow() || !headerRef.current || typeof ResizeObserver === "undefined") {
      return
    }

    const setHeaderHeightVar = () => {
      if (!headerRef.current) {
        return
      }

      const height = headerRef.current.getBoundingClientRect().height

      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`
      )
    }

    setHeaderHeightVar()

    const resizeObserver = new ResizeObserver(setHeaderHeightVar)
    resizeObserver.observe(headerRef.current)
    window.addEventListener("resize", setHeaderHeightVar)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", setHeaderHeightVar)
    }
  }, [])

  return (
    <ThemeProvider location={location}>
      <MDXProvider components={mdxComponents}>
        <Styles.Wrapper
          hasLeftNavigation={hasLeftNavigation}
          isLeftSidebarCollapsed={isLeftSidebarCollapsed}
        >
          <Styles.HeaderWrapper ref={headerRef}>
            <Header
              location={location}
              hasDocumentationNavigation={hasLeftNavigation}
              isMobileNavigationOpen={isMobileNavigationOpen}
              onMobileNavigationToggle={toggleMobileNavigation}
              mobileNavigationId={mobileNavigationId}
            />
            <HeaderMenu items={menuItems} />
          </Styles.HeaderWrapper>

          {hasLeftNavigation && isMobileNavigationOpen && (
            <Styles.MobileNavigationOverlay
              onClick={() => closeMobileNavigation()}
            >
              <Styles.MobileNavigationDialog
                id={mobileNavigationId}
                role="dialog"
                aria-modal="true"
                aria-label="Documentation navigation"
                onClick={(event) => event.stopPropagation()}
              >
                <Styles.MobileNavigationHeader>
                  <Styles.MobileNavigationTitle>
                    Documentation
                  </Styles.MobileNavigationTitle>

                  <Styles.MobileNavigationCloseButton
                    ref={mobileNavigationCloseButtonRef}
                    type="button"
                    onClick={() => closeMobileNavigation()}
                    aria-label="Close documentation navigation"
                  >
                    ×
                  </Styles.MobileNavigationCloseButton>
                </Styles.MobileNavigationHeader>

                <Styles.MobileNavigationContent
                  onClick={(event) => {
                    const target = event.target as HTMLElement

                    if (target.closest("a")) {
                      closeMobileNavigation(false)
                    }
                  }}
                >
                  <DocsNavigation items={menuItems} currentPath={currentPath} />
                </Styles.MobileNavigationContent>
              </Styles.MobileNavigationDialog>
            </Styles.MobileNavigationOverlay>
          )}

          {hasLeftNavigation && (
            <Styles.LeftSidebarWrapper isCollapsed={isLeftSidebarCollapsed}>
              <Styles.LeftSidebarToggle
                isCollapsed={isLeftSidebarCollapsed}
                type="button"
                aria-expanded={!isLeftSidebarCollapsed}
                aria-controls={leftNavigationId}
                aria-label={
                  isLeftSidebarCollapsed
                    ? "Show documentation navigation"
                    : "Hide documentation navigation"
                }
                title={
                  isLeftSidebarCollapsed
                    ? "Show documentation navigation"
                    : "Hide documentation navigation"
                }
                onClick={() =>
                  setIsLeftSidebarCollapsed((isCollapsed) => !isCollapsed)
                }
              >
                <span aria-hidden="true">
                  {isLeftSidebarCollapsed ? "›" : "‹"}
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
                <DocsNavigation items={menuItems} currentPath={currentPath} />
              </Styles.SidebarPanel>
            </Styles.LeftSidebarWrapper>
          )}

          <Styles.ContentWrapper>
            {hasRightNavigation && (
              <Styles.ArticleToolbar>
                <Styles.OnThisPageDisclosure>
                  <Styles.OnThisPageButton
                    ref={pageMenuButtonRef}
                    type="button"
                    aria-expanded={isPageMenuOpen}
                    aria-controls="on-this-page-panel"
                    onClick={() => setIsPageMenuOpen((isOpen) => !isOpen)}
                  >
                    On this page
                  </Styles.OnThisPageButton>

                  {isPageMenuOpen && (
                    <Styles.OnThisPagePanel id="on-this-page-panel">
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
