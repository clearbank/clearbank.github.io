import React from 'react'
import kebabCase from 'lodash.kebabcase'

import Logo from 'src/components/logo'

import * as Styles from './footer.styles'

import * as Types from 'src/components/header-menu/header-meny.types'

const Footer: React.FC<Types.IHeaderMenuProps> = ({ items }) => (
  <Styles.Container role='contentinfo'>
    <Styles.MenuContainer>
      {items.map(item => (
        <Styles.ColumnContainer key={item.menuItem.title}>
          <Styles.Title>
            {item.menuItem.title}
          </Styles.Title>
          <Styles.List>
            {item.subMenuItems.map(subMenuItem => (
              <Styles.ListItem key={subMenuItem.node.fields.slug}>
                <Styles.SubTitle
                  href={
                    `${item.menuItem.slug}#${kebabCase(subMenuItem.node.fields.title.toLowerCase())}`
                  }
                >
                  {subMenuItem.node.fields.title}
                </Styles.SubTitle>
              </Styles.ListItem>  
            ))}
          </Styles.List>
        </Styles.ColumnContainer>
      ))}
    </Styles.MenuContainer> 
    <Styles.CopywriteWrapper>
      <Styles.LogoWrapper>
        <Logo inverted />
      </Styles.LogoWrapper>

      <Styles.Copywrite className='long-primer'>
        Copyright ClearBank Ltd. Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority
        (Financial Services Register number: 754568). Registered Address: ClearBank, 4th Floor, Prologue Works, 25 Marsh St, Bristol BS1 4AX
      </Styles.Copywrite>
    </Styles.CopywriteWrapper>
  </Styles.Container>
)

export default Footer
