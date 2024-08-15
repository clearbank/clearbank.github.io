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
        <h5>Copyright © ClearBank Limited {new Date().getFullYear()}. All rights reserved.</h5>

        ClearBank Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority (FRN: 754568). Registered in England and Wales under Company Number 09736376. Registered Address: ClearBank Limited, Borough Yards, 13 Dirty Lane, London, SE1 9PA.

        <br/><br/>ClearBank Limited is a subscriber to the <a href="https://www.wearepay.uk/what-we-do/payment-systems/access-to-payment-systems/code-of-conduct-for-indirect-access-providers/" target="_blank" rel="noopener noreferrer">
          Code of Conduct for Indirect Access Providers
        </a> in respect of the indirect access services which it provides to its customers.
        <br/><br/>
        ClearBank Europe N.V. is authorised by the European Central Bank and regulated by De Nederlandsche Bank. ClearBank Europe N.V. is registered at the Chamber of Commerce Amsterdam Trade Registry under number 89463366. Registered address: ClearBank Europe N.V., Keizersgracht 391A, 1016 EJ Amsterdam. VAT ID is NL864989829B01.

      </Styles.Copywrite>
    </Styles.CopywriteWrapper>
  </Styles.Container>
)

export default Footer
