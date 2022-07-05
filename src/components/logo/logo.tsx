import React from 'react'

import WhiteLogo from 'src/assets/images/Clear.Bank-Logo-White.png'
import BlackLogo from 'src/assets/images/Clear.Bank-Logo-Black.png'

import * as Types from './logo.types'
import * as Styles from './logo.styles'

export default ({ inverted, width }: Types.LogoProps) => {
  return (
    <Styles.Logo width={width} inverted={inverted}>      
      <img src={inverted
        ? BlackLogo
        : WhiteLogo} alt="ClearBank" />
    </Styles.Logo>
  )
}
