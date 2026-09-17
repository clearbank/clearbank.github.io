import React, { useState } from 'react'

import * as Styles from './header-menu.styles'
import * as Types from './header-menu.types'
import HeaderMenuListItem from './header-menu-list-item'

const HeaderSubMenu: React.FC<Types.IHeaderSubMenuProps> = ({ item, isActive, isOpen = false, onOpenChange }) => {
  const [borderState, setBorderState] = useState('normal')
  const submenuId = `header-submenu-${item.menuItem.slug ?? item.menuItem.title}`

  return (
    <Styles.Container>
      <Styles.TitleContainer>
        <Styles.TitleButton
          type='button'
          aria-expanded={isOpen}
          aria-controls={submenuId}
          onClick={() => onOpenChange?.(!isOpen)}
        >
          <Styles.Title isActive={isActive}>{item.menuItem.title}</Styles.Title>
        </Styles.TitleButton>
        {isActive && <Styles.Underline />}
      </Styles.TitleContainer>
      <Styles.List id={submenuId} borderState={borderState} isOpen={isOpen}>
        {item.subMenuItems?.map((element, index, array) => (
          <HeaderMenuListItem
            key={element.fields.id}
            item={element}
            onHover={(state: string) => setBorderState(state)}
            isLast={index === array.length - 1}
          />
        ))}
      </Styles.List>
    </Styles.Container>
  )
}

export default HeaderSubMenu