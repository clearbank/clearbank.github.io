import React from 'react';

import * as Styles from './footer.styles'
import * as Types from './footer.types'

const FooterLeafMenu: React.FC<Types.IFooterLeafMenuProps> = ({ id, title, items, maxWidth}) => {
  
  return (
    <Styles.LeafContainer key={id} maxWidth={maxWidth}>
      <Styles.LeafTitle>
        {title}
      </Styles.LeafTitle>
      <Styles.LeafList>
        {items?.map(item => (
          <Styles.ListItem key={item.fields.id}>
            <Styles.SubTitle href={item.fields.slug}>
              {item.fields.title}
            </Styles.SubTitle>
          </Styles.ListItem>
        ))}
      </Styles.LeafList>
    </Styles.LeafContainer>
  )
}

export default FooterLeafMenu