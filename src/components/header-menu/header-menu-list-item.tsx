import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderNestedMenu from './header-nested-menu'

const HeaderMenuListItem: React.FC<Types.IHeaderMenuItemProps> = ({ item }) => {
    return (
      <li key={item.node.fields.id}>
        <Styles.ListItem to={item.node.fields.slug}>
          {item.node.fields.title}
        </Styles.ListItem>
      </li>
    )
} 

export default HeaderMenuListItem