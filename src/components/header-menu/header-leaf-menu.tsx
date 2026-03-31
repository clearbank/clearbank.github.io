import React, { useRef, useState, useEffect } from 'react';

import * as Styles from './header-leaf-menu.styles'
import * as Types from'./header-menu.types'

const HeaderLeafMenu: React.FC<Types.IHeaderLeafMenuProps> = ({ id, title, items, onHover, isLast }) => {
  // TODO: Put min width on leaf list, if the root X + root width + min width > screen size put it right
  
  const handleMouseEnter = () => {
    if (isLast) {
      onHover('leaf-bottom-right');
    }
  };

  const handleMouseLeave = () => {
    if (isLast) {
      onHover('normal');
    }
  };

  return (
    <li key={id}>
      <Styles.LeafContainer
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
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