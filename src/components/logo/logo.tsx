import React from 'react'

import LogoCBDeveloper from 'src/assets/images/logo-cb-developer.inline.svg'
import LogoCB from 'src/assets/images/logo-cb.inline.svg'

import * as Types from './logo.types'
import * as Styles from './logo.styles'

export default ({ inverted, width, showDeveloperLogo }: Types.LogoProps) => {
  return (
    <Styles.Logo width={width} inverted={inverted}>
      {showDeveloperLogo
        ? <LogoCBDeveloper />
        : <LogoCB />}
    </Styles.Logo>
  )
}
