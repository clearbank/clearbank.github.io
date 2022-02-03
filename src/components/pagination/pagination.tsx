import React from 'react'

import { hasWindow } from 'src/utils/browser.services'
import PaginationLink from '../paginationLink/pagination-link'

import * as Types from './pagination.types'
import * as Styles from './pagination.styles'

const Pagination: React.FunctionComponent<Types.PaginationProps> = ({
  menuItems
}): JSX.Element => {
  const currentPath = hasWindow() ? window.location.pathname : ''
  const currentSlug = currentPath.replace(/\/$/, '')

  const currentMenuIndex = menuItems.findIndex((item: any) => {
    const menuSlug: string = item.menuItem.slug

    return menuSlug.toUpperCase() === currentSlug.toUpperCase()
  })

  if (currentMenuIndex === -1) {
    return null
  }

  let prevPage = null
  let nextPage = null

  // has prev page
  if (typeof menuItems[currentMenuIndex - 1] !== 'undefined') {
    prevPage = menuItems[currentMenuIndex - 1].menuItem
  }

  // has next page
  if (typeof menuItems[currentMenuIndex + 1] !== 'undefined') {
    nextPage = menuItems[currentMenuIndex + 1].menuItem
  }

  return (
    <Styles.Container>
      {!!prevPage && (
        <PaginationLink
          direction={Types.direction.previous}
          key={prevPage.id}
          slug={prevPage.slug}
          title={prevPage.title}
        />
      )}
      {!!nextPage && (
        <PaginationLink
          direction={Types.direction.next}
          key={nextPage.id}
          slug={nextPage.slug}
          title={nextPage.title}
        />
      )}
    </Styles.Container>
  )
}

export default Pagination
