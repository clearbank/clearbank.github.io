import React from 'react'

import { hasWindow } from 'src/utils/browser.services'
import HeaderSubMenu from './header-sub-menu'
import * as Styles from './header-menu.styles'

const isMenuActive = (item) => {
  const currentPath = hasWindow() ? window.location.pathname : ''
  
  return currentPath === item.menuItem.slug
}

const HeaderMenu = ({ items, currentPathname }) => {

  return (
    <Styles.MenuContainer>
      {items.map(item => <HeaderSubMenu key={item.menuItem.title} item={item} isActive={isMenuActive(item)} />)}
    </Styles.MenuContainer>
  )
} 

  export default HeaderMenu