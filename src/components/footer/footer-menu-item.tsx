import React from 'react'

import * as Styles from './footer.styles'
import * as Types from './footer.types'

import FooterLeafMenu from './footer-leaf-menu'

const FooterMenuItem: React.FC<Types.IFooterMenuItemProps> = ({ item }) => {
  if (item.leafMenuItems.length > 0) 
  {
    return (
      <FooterLeafMenu 
        id={item.fields.id}
        title={item.fields.title} 
        items={item.leafMenuItems} />
    )
  }
  else {
    return (
      <Styles.ListItem key={item.fields.id}>
        <Styles.SubTitle href={item.fields.slug}>
          {item.fields.title}
        </Styles.SubTitle>
      </Styles.ListItem>
    )
  }
} 

export default FooterMenuItem