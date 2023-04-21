import React from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-meny.types'

const HeaderSubMenu: React.FC<Types.IHeaderSubMenuProps> = ({ item, isActive }) => {
    return (
      <Styles.Container>
        <Styles.TitleContainer>
          <Styles.Title
            to={item.menuItem.slug}
            isActive={isActive}
          >
            {item.menuItem.title}
          </Styles.Title>
          {
            isActive && (
              <Styles.Underline />
            )
          }
        </Styles.TitleContainer>
        <Styles.List>
          {item.subMenuItems?.map(subMenuItem => {
            const link = subMenuItem.node.fields.slug

            return (
              <li key={subMenuItem.node.fields.id}>
                <Styles.ListItem to={link}>
                  {subMenuItem.node.fields.title}
                </Styles.ListItem>
              </li>
            )
          })}
        </Styles.List>
      </Styles.Container>
    )
  }

  export default HeaderSubMenu