import React, { useState, useEffect } from 'react'
import '../styles.css'

import * as Styles from './header.styles'
import * as Types from './header.types'

import IconClose from 'src/assets/svgs/close.inline.svg'
import IconMenu from 'src/assets/svgs/menu.inline.svg'

import Logo from 'src/components/logo'
import RegionSwitch from 'src/components/region-switch';
import Search from 'src/components/search'

const Header: React.FunctionComponent<Types.HeaderProps> = ( { location } ) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const isEu = location?.pathname?.includes('/eu')
  const region = isEu ? 'eu' : 'uk'

  const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  const shortcutHint = isMac ? 'Cmd K' : 'Ctrl K'

  const toggleMobileNav = () => {
    const newShowMobileNav = !showMobileNav

    setShowMobileNav(newShowMobileNav)
  }

  // Ctrl+K (Windows/Linux) or Cmd+K (macOS) opens the search modal from
  // anywhere on the page. preventDefault() stops the browser's own
  // Ctrl+K/Cmd+K shortcuts (e.g. address bar focus) from also firing.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setShowSearch(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className='header'>
      <Styles.Container>
        <Styles.LogoWrapper to={location?.pathname?.includes('/eu') ? '/eu' : '/uk'}>
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
                <Styles.RightGroup>
          <Styles.SearchTrigger
            onClick={() => setShowSearch(true)}
            data-cy='search-trigger'
            aria-label='Search documentation'
          >
            {/* Inline SVG magnifying-glass icon - avoids adding a new
                search.inline.svg asset file just for one small icon. */}
            <svg viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <Styles.SearchTriggerLabel>Search docs…</Styles.SearchTriggerLabel>
            <Styles.SearchTriggerHint>{shortcutHint}</Styles.SearchTriggerHint>
          </Styles.SearchTrigger>
          <Styles.SwitchContainer>
            <RegionSwitch location={location} />
          </Styles.SwitchContainer>
        </Styles.RightGroup>
      </Styles.Container>
      <Search
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
        region={region}
      />
    </div>
  )
}

export default Header