import React, { useState } from 'react'

import * as Styles from './header-leaf-menu.styles'
import * as Types from './header-menu.types'

const HeaderLeafMenu: React.FC<Types.IHeaderLeafMenuProps> = ({
  id,
  title,
  items
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const listId = `header-leaf-list-${id}`

  return (
    <Styles.LeafContainer>
      <Styles.LeafToggle
        type='button'
        aria-expanded={isExpanded}
        aria-controls={listId}
        onClick={() => setIsExpanded(expanded => !expanded)}
      >
        <span>{title}</span>
        <span aria-hidden='true'>
          {isExpanded ? '−' : '+'}
        </span>
      </Styles.LeafToggle>

      <Styles.LeafList id={listId} hidden={!isExpanded}>
        {items.map(item => (
          <li key={item.fields.id}>
            <Styles.LeafListSubItem to={item.fields.slug}>
              {item.fields.title}
            </Styles.LeafListSubItem>
          </li>
        ))}
      </Styles.LeafList>
    </Styles.LeafContainer>
  )
}

export default HeaderLeafMenu