import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderLeafMenu from './header-leaf-menu'

const HeaderMenuListItem: React.FC<Types.IHeaderMenuItemProps> = ({ item, onHover, isLast }) => {
  if (item.leafMenuItems.length > 0) 
  {
    return (
      <li key={item.fields.id}>
        <HeaderLeafMenu
          title={item.fields.title} 
          items={item.leafMenuItems}
          onHover={onHover}
          isLast={isLast} />
      </li>
    )
  }
  else {
    return (
      <li key={item.fields.id}>
        <Styles.ListItem to={item.fields.slug}>
          {item.fields.title}
        </Styles.ListItem>
      </li>
    )
  }
} 

export default HeaderMenuListItem