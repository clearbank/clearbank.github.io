import React from 'react'

import * as Styles from './header-leaf-menu.styles'
import * as Types from'./header-menu.types'

const HeaderLeafMenu: React.FC<Types.IHeaderLeafMenuProps> = ({ id, title, items }) => {
  return (
    <li key={id}>
      <Styles.LeafContainer>
        <Styles.LeafListItem>
          {title}
        </Styles.LeafListItem>
        <Styles.LeafList>
          {items?.map(item => (
            <li key={item.fields.id}>
              <Styles.LeafListSubItem to={item.fields.slug}>
                {item.fields.title}
              </Styles.LeafListSubItem>
            </li>
          ))}
        </Styles.LeafList>
      </Styles.LeafContainer>
    </li>
  )
}

export default HeaderLeafMenu