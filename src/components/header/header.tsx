import React, { useState } from 'react'
import '../styles.css'
import config from '../../../config.js'

import Loadable from 'react-loadable'
import Sidebar from 'src/components/sidebar'
import LoadingProvider from '../mdxComponents/loading'

import * as Styles from './header.styles'
import * as Types from './header.types'

import Logo from 'src/components/logo'
import IconClose from 'src/assets/svgs/close.inline.svg'
import IconMenu from 'src/assets/svgs/menu.inline.svg'

const isSearchEnabled = config.header.search && config.header.search.enabled

const Header: React.FunctionComponent<Types.HeaderProps> = ({ menuItems, currentPageURL }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)

  const toggleMobileNav = () => {
    const newShowMobileNav = !showMobileNav

    setShowMobileNav(newShowMobileNav)
  }

  return (
    <div className='header'>
      <Styles.Container>
        <Styles.LogoWrapper to='/'>
          <Logo />
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

      {isSearchEnabled ? (
        <div className='searchbar-desktop'>
          <div className='searchWrapper hiddenMobile navBarUL'>Search</div>
        </div>
      ) : null}

      <>
        {showMobileNav && menuItems && (
          <Sidebar menuItems={menuItems} currentPageURL={currentPageURL} />
        )}
      </>

      {isSearchEnabled ? (
        <div id='navbar'>
          <div className='visibleMobile'>
            <div className='searchbar-mobile'>Search</div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Header
