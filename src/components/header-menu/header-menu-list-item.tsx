import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderLeafMenu from './header-leaf-menu'

const HeaderMenuListItem: React.FC<Types.IHeaderMenuItemProps> = ({ item }) => {
    if (item.leafMenuItems.length > 0) 
    {
      return (
        <li key={item.fields.id}>
          <Styles.LeafListItem>
            {item.fields.title}
          </Styles.LeafListItem>
          <HeaderLeafMenu items={item.leafMenuItems}/>
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