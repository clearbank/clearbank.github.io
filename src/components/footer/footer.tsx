import React from 'react'

import Logo from 'src/components/logo'

import * as Styles from './footer.styles'

const Footer:React.FunctionComponent = (): JSX.Element => (
  <Styles.Container role='contentinfo'>
    <Styles.CopyContainer>
      <Styles.Copy>
        Copyright ClearBank Ltd. Authorised by the Prudential Regulation Authority
        and regulated by the Financial Conduct Authority and the Prudential
        Regulation Authority (Financial Services Register number: 754568).
        Registered Address: ClearBank, 4th Floor, Prologue Works, 25 Marsh St, Bristol BS1 4AX.
      </Styles.Copy>
      <Styles.Copy>
        ClearBank® provides customers with a Definitive Services Agreement, which covers the provision of indirect access services.
        Code of Conduct for Indirect Access Providers
      </Styles.Copy>
    </Styles.CopyContainer>
    <Styles.CopywriteWrapper>
      <Styles.LogoWrapper>
        <Logo inverted />
      </Styles.LogoWrapper>
      <Styles.Copywrite className='long-primer'>
        &copy; Copyright {new Date().getFullYear()} ClearBank<sup>&reg;</sup>
      </Styles.Copywrite>
    </Styles.CopywriteWrapper>
  </Styles.Container>
)

export default Footer
