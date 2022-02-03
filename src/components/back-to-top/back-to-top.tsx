import React, { useState, useEffect } from 'react'
import { hasWindow } from 'src/utils/browser.services'
import throttle from 'lodash.throttle'

import * as Types from './back-to-top.types'
import * as Styles from './back-to-top.styles'

const BackToTop: React.FunctionComponent<Types.BackToTopProps> = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  function handleClick () {
    if (!hasWindow) {
      return
    }

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const visibilityThreshold = 500

      setIsVisible(currentScrollPosition >= visibilityThreshold)
    }

    const throttledScroll = throttle(handleScroll, 300)

    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  return (
    <Styles.Container isVisible={isVisible}>
      <Styles.Button onClick={handleClick}>
        <Styles.Icon className='cb-icon-arrow-up' />
      </Styles.Button>
    </Styles.Container>
  )
}

export default BackToTop
