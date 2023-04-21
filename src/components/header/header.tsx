import React, { useState } from 'react'
import '../styles.css'
import config from '../../../config.js'

import * as Styles from './header.styles'
import * as Types from './header.types'

import Logo from 'src/components/logo'
import IconClose from 'src/assets/svgs/close.inline.svg'
import IconMenu from 'src/assets/svgs/menu.inline.svg'

const Header: React.FunctionComponent<Types.HeaderProps> = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    const newShowMobileNav = !showMobileNav

    setShowMobileNav(newShowMobileNav)
  }

  return (
    <div className='header'>
      <Styles.Container>
        <Styles.LogoWrapper to='/'>
          <Logo inverted />
        </Styles.LogoWrapper>
        <Styles.BurgerIconWrapper isMenuOpen={showMobileNav} data-cy='burger-menu'>
          <Styles.Button onClick={toggleMobileNav}>
            {showMobileNav
              ? <IconClose />
              : <IconMenu />
            }
          </Styles.Button>
        </Styles.BurgerIconWrapper>
      </Styles.Container>
    </div>
  )
}

export default Header
