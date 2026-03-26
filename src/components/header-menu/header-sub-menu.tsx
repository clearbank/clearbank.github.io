import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderMenuListItem from './header-menu-list-item'

const HeaderSubMenu: React.FC<Types.IHeaderSubMenuProps> = ({ item, isActive }) => {
    return (
      <Styles.Container>
        <Styles.TitleContainer>
          <Styles.Title isActive={isActive}>
            {item.menuItem.title}
          </Styles.Title>
          {
            isActive && (
              <Styles.Underline />
            )
          }
        </Styles.TitleContainer>
        <Styles.List>
          {item.subMenuItems?.map(subMenuItem => (
            <HeaderMenuListItem item={subMenuItem} />
          ))}
        </Styles.List>
      </Styles.Container>
    )
  }

  export default HeaderSubMenu