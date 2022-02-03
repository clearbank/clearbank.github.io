import React, { useContext, useEffect } from 'react'

import ViewportContext from 'src/context/viewport'
import { hasWindow } from 'src/utils/browser.services'

import * as Types from './sidebar.types'
import * as Styles from './sidebar.styles'

// TODO: see if we can get get currentPageURL from context instead of playing hot potato with parameters

const renderSubMenuLinks = (subMenuItems: any[], currentPageURL: string, parentLink: string) => (
  <Styles.List>
    {subMenuItems.map((item, subMenuIndex) => {
      const entry = item.node.fields
      // eslint-disable-next-line no-useless-escape
      const [hash] = entry.slug.match(new RegExp(/[^\/]+$/))
      const link = `${parentLink}/#${hash}`
      const currentHash = hasWindow() ? window.location.hash : ''

      let isActive = false

      if (!!currentHash && link.includes(currentHash)) {
        // hide other pages with the same hash but different first level path
        if (currentPageURL.includes(parentLink)) {
          isActive = true
        }
      }

      return (
        <Styles.ListEntry key={subMenuIndex}>
          <Styles.SecondLevelLink
            key={link}
            to={link}
            className={isActive ? 'active' : ''}
          >
            {entry.title}
          </Styles.SecondLevelLink>
        </Styles.ListEntry>
      )
    })}
  </Styles.List>
)

const renderLinks = (menuItems: any, currentPageURL: string) => menuItems.map((item: any, index: number) => {
  const { slug, title } = item.menuItem
  const hasSubMenus = item.subMenuItems !== null
  const currentHash = hasWindow() ? window.location.hash : ''
  let isActive = false

  if (currentHash === '' && currentPageURL === slug) {
    isActive = true
  }

  return (
    <Styles.ListEntry key={index}>
      {hasSubMenus ? (
        <>
          <Styles.FirstLevelLink
            className={isActive ? 'active' : ''}
            to={slug}
          >
            {title}
          </Styles.FirstLevelLink>
          <>
            {renderSubMenuLinks(item.subMenuItems, currentPageURL, slug)}
          </>
        </>
      ) : (
        <Styles.FirstLevelLink
          className={isActive ? 'active' : ''}
          to={slug}
        >
          {title}
        </Styles.FirstLevelLink>
      )}
    </Styles.ListEntry>
  )
})

const Sidebar: React.FunctionComponent<Types.SidebarProps> = ({ currentPageURL, menuItems }): JSX.Element => {
  const pageInViewport: string = useContext(ViewportContext)

  // TODO: Find permanent solution for menu state between page loads
  useEffect(() => {
    const currentPath = hasWindow() ? window.location.pathname : ''
    const currentSlug = currentPath.replace(/\/$/, '')
    const menuLinks = document.querySelectorAll(`a[href='${currentSlug}']`)

    if (menuLinks.length >= 1) {
      menuLinks[0].scrollIntoView()
    }
  })

  return (
    <Styles.Container>
      <Styles.List key={pageInViewport}>
        {renderLinks(menuItems, currentPageURL)}
      </Styles.List>
    </Styles.Container>
  )
}
export default Sidebar

