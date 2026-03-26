import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'

import HeaderMenuListItem from './header-menu-list-item'

const HeaderNestedMenu: React.FC<Types.IHeaderNestedMenuProps> = ({ item }) => {
  return (
    <Styles.NestedList>
      {item.nestedMenuItems?.map(nestedMenuItem => (
        <HeaderMenuListItem item={nestedMenuItem} />
      ))}
    </Styles.NestedList>
  )
}

export default HeaderNestedMenu