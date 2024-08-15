import React, { useState } from 'react'
import '../styles.css'

import * as Styles from './header.styles'
import * as Types from './header.types'

import IconClose from 'src/assets/svgs/close.inline.svg'
import IconMenu from 'src/assets/svgs/menu.inline.svg'

import Logo from 'src/components/logo'
import RegionSwitch from 'src/components/region-switch';

const Header: React.FunctionComponent<Types.HeaderProps> = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    const newShowMobileNav = !showMobileNav

    setShowMobileNav(newShowMobileNav)
  }

  return (
    <div className='header'>
      <Styles.Container>
        <Styles.LogoWrapper to={document?.location.href.includes('/eu') ? '/eu' : '/uk'}>
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
        <Styles.SwitchContainer>
          <RegionSwitch />
        </Styles.SwitchContainer>
      </Styles.Container>
    </div>
  )
}

export default Header
