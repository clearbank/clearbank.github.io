import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'

const HeaderMenuListItem: React.FC<Types.IHeaderMenuItemProps> = ({ item }) => {
    let title = item.fields.title;

    if (item.leafMenuItems.length > 0) 
    {
      title = title + " > "
    }

    return (
      <li key={item.fields.id}>
        <Styles.ListItem to={item.fields.slug}>
          {title}
        </Styles.ListItem>
      </li>
    )
} 

export default HeaderMenuListItem