import React, { useState } from 'react'

import * as Styles from './header-menu.styles'
import * as Types from'./header-menu.types'
import HeaderMenuListItem from './header-menu-list-item'

const HeaderSubMenu: React.FC<Types.IHeaderSubMenuProps> = ({ item, isActive }) => {
    const [borderState, setBorderState] = useState("normal");

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
        <Styles.List borderState={borderState}>
          {item.subMenuItems?.map((element, index, array) => (
            <HeaderMenuListItem item={element} onHover={(state: string) => setBorderState(state)} isLast={index == array.length - 1}/>
          ))}
        </Styles.List>
      </Styles.Container>
    )
  }

  export default HeaderSubMenu