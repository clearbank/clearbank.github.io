import React, { useEffect, useState } from 'react'
import '../styles.css'

import * as Styles from './header.styles'
import * as Types from './header.types'

import IconClose from 'src/assets/svgs/close.inline.svg'
import IconMenu from 'src/assets/svgs/menu.inline.svg'

import Logo from 'src/components/logo'
import RegionSwitch from 'src/components/region-switch'
import Search from 'src/components/search'

const Header: React.FunctionComponent<Types.HeaderProps> = ({
  location,
  isMobileNavigationOpen = false,
  onMobileNavigationToggle,
  mobileNavigationId,
}) => {
  const [showSearch, setShowSearch] = useState(false)
  const [shortcutHint, setShortcutHint] = useState('Ctrl K')

  const isEu = location?.pathname?.includes('/eu')
  const region = isEu ? 'eu' : 'uk'

  useEffect(() => {
    const isAppleDevice =
      typeof navigator !== 'undefined' &&
      (
        /Mac|iPod|iPhone|iPad/.test(navigator.platform) ||
        /Mac|iPod|iPhone|iPad/.test(navigator.userAgent) ||
        (navigator.maxTouchPoints > 1 &&
          navigator.platform === 'MacIntel')
      )

    if (isAppleDevice) {
      setShortcutHint('Cmd K')
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === 'k'
      ) {
        event.preventDefault()
        setShowSearch(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <div className="header">
        <Styles.Container>
          <Styles.LogoWrapper to={isEu ? '/eu' : '/uk'}>
            <Logo inverted />
          </Styles.LogoWrapper>

          <Styles.BurgerIconWrapper
            isMenuOpen={isMobileNavigationOpen}
            data-cy="burger-menu"
          >
            <Styles.Button
              type="button"
              onClick={onMobileNavigationToggle}
              aria-expanded={isMobileNavigationOpen}
              aria-controls={mobileNavigationId || undefined}
              aria-label={
                isMobileNavigationOpen
                  ? 'Close documentation navigation'
                  : 'Open documentation navigation'
              }
            >
              {isMobileNavigationOpen ? (
                <IconClose />
              ) : (
                <IconMenu />
              )}
            </Styles.Button>
          </Styles.BurgerIconWrapper>

          <Styles.RightGroup>
            <Styles.SearchTrigger
              type="button"
              onClick={() => setShowSearch(true)}
              data-cy="search-trigger"
              aria-label="Search documentation"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Styles.SearchTriggerLabel>
                Search docs…
              </Styles.SearchTriggerLabel>

              <Styles.SearchTriggerHint>
                {shortcutHint}
              </Styles.SearchTriggerHint>
            </Styles.SearchTrigger>

            <RegionSwitch location={location} />
          </Styles.RightGroup>
        </Styles.Container>
      </div>

      {showSearch && (
        <Search
          region={region}
          onClose={() => setShowSearch(false)}
        />
      )}
    </>
  )
}

export default Header