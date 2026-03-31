import React, {useState} from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderLeafMenu from './header-leaf-menu'

const HeaderMenuListItem: React.FC<Types.IHeaderMenuItemProps> = ({ item, onHover, isLast }) => {
  if (item.leafMenuItems.length > 0) 
  {
    return (
      <HeaderLeafMenu 
        id={item.fields.id} 
        title={item.fields.title} 
        items={item.leafMenuItems}
        onHover={onHover}
        isLast={isLast} />
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