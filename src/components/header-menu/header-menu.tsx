import React from 'react'

import { hasWindow } from 'src/utils/browser.services'

import HeaderSubMenu from './header-sub-menu'

import * as Styles from './header-menu.styles'
import * as Types from'./header-meny.types'

const isMenuActive = (item: Types.IMenu) => {
  const currentPath = hasWindow() ? window.location.pathname : ''

  return currentPath.startsWith(item.menuItem.slug) 
}

const HeaderMenu: React.FC<Types.IHeaderMenuProps> = ({ items }) => {

  return (
    <Styles.MenuContainer>
      {items.map(item => <HeaderSubMenu key={item.menuItem.title} item={item} isActive={isMenuActive(item)} />)}
    </Styles.MenuContainer>
  )
} 

  export default HeaderMenu