import React from 'react'
import classnames from 'classnames'

import * as Styles from './header-menu.styles'

const HeaderSubMenu = ({ item, isActive }) => {
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
            const [hash] = subMenuItem.node.fields.slug.match(new RegExp(/[^\/]+$/))
            const link = `${item.menuItem.slug}#${hash}`

            return (
              <li>
                <Styles.ListItem
                  to={link}
                  className={classnames({
                    active: false,
                  })}
                  key={subMenuItem.node.fields.id}
                >{subMenuItem.node.fields.title}</Styles.ListItem>
              </li>
            )
          })}
        </Styles.List>
      </Styles.Container>
    )
  }

  export default HeaderSubMenu