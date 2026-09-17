import React, { useEffect, useRef, useState } from 'react'

import { hasWindow } from 'src/utils/browser.services'

import HeaderSubMenu from './header-sub-menu'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'

const isMenuActive = (item: Types.IMenu) => {
  const currentPath = hasWindow() ? window.location.pathname : ''

  return currentPath.startsWith(item.menuItem.slug) 
}

const HeaderMenu: React.FC<Types.IHeaderMenuProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Closes whichever dropdown is open on Escape or on a click/tap outside
  // the menu. Only listens while one is actually open, so this never
  // competes with other handlers (e.g. the mobile nav sheet or the search
  // dialog) when the header menu is idle.
  useEffect(() => {
    if (!hasWindow() || openId === null) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenId(null)
      }
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenId(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handlePointerDown)
    window.addEventListener('touchstart', handlePointerDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handlePointerDown)
      window.removeEventListener('touchstart', handlePointerDown)
    }
  }, [openId])

  return (
    <Styles.MenuContainer ref={containerRef}>
      {items.map(item => (
        <HeaderSubMenu
          key={item.menuItem.title}
          item={item}
          isActive={isMenuActive(item)}
          isOpen={openId === item.menuItem.title}
          onOpenChange={isOpen => setOpenId(isOpen ? item.menuItem.title : null)}
        />
      ))}
    </Styles.MenuContainer>
  )
} 

export default HeaderMenu