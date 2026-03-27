import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'

const HeaderLeafMenu: React.FC<Types.IHeaderLeafMenuProps> = ({ items }) => {
  return (
    <Styles.LeafList>
      {items?.map(item => (
        <li key={item.fields.id}>
          <Styles.ListItem to={item.fields.slug}>
            {item.fields.title}
          </Styles.ListItem>
        </li>
      ))}
    </Styles.LeafList>
  )
}

export default HeaderLeafMenu