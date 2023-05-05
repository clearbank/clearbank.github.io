import React from 'react'

import Logo from 'src/components/logo'

import * as Styles from './footer.styles'

import * as Types from 'src/components/header-menu/header-meny.types'

const Footer: React.FC<Types.IHeaderMenuProps> = ({ items, hideNavigation }) => (
  <Styles.Container role='contentinfo'>
    {!hideNavigation && (
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
                    href={subMenuItem.node.fields.slug}
                  >
                    {subMenuItem.node.fields.title}
                  </Styles.SubTitle>
                </Styles.ListItem>
              ))}
            </Styles.List>
          </Styles.ColumnContainer>
        ))}
      </Styles.MenuContainer> 
    )}
    <Styles.CopywriteWrapper>
      <Styles.LogoWrapper>
        <Logo inverted />
      </Styles.LogoWrapper>

      <Styles.Copywrite className='long-primer'>
        Copyright © ClearBank Ltd {new Date().getFullYear()}. All rights reserved.
        <br/>
        Copyright ClearBank Ltd. Authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority (Financial Services Register number: 754568). Registered Address: ClearBank, Borough Yards, 13 Dirty Lane, London, SE1 9PA.
        <br/>
        ClearBank® provides customers with a Definitive Services Agreement, which covers the provision of indirect access services. 
        <a href="https://www.wearepay.uk/what-we-do/payment-systems/access-to-payment-systems/code-of-conduct-for-indirect-access-providers/" target="_blank" rel="noopener noreferrer">
          Code of Conduct for Indirect Access Providers.        
        </a>
      </Styles.Copywrite>
    </Styles.CopywriteWrapper>
  </Styles.Container>
)

export default Footer
