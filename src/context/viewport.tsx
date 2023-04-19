import React, { useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import throttle from 'lodash.throttle'

import * as Types from './viewport.types'

const ViewportContext = React.createContext('')

const ViewportProvider: React.FC<Types.ViewportProviderProps> = ({ children }) => {
  const [currentTitle, setCurrentTitle] = useState('')

  const { pathname, hash } = useLocation()

  useEffect(() => {
    const allSections: HTMLElement[] = Array.from(document.querySelectorAll('.page .page-menu-entry'))
    // only pages with ids
    const pages = allSections.filter(entry => {
      const id = entry.getAttribute('id')

      return !!(id)
    })

    if (!pages) {
      return
    }

    const onScroll = function () {
      const intersectionPositionY = window.scrollY + 100
      const urlHash = (window as Window).location.hash

      pages.forEach(page => {
        const elementStartY = page.offsetTop
        const elementEndY = page.offsetTop + page.offsetHeight
        const { id } = page
        const idWithHash = `#${id}`

        if (idWithHash === urlHash) {
          return
        }

        // intersectionPositionY within element
        if (elementStartY <= intersectionPositionY && elementEndY > intersectionPositionY) {
          window.history.pushState(null, null, idWithHash)

          setCurrentTitle(id)
        }
      })
    }

    // 30fps
    const throttledScroll = throttle(onScroll, 33)

    window.addEventListener('resize', throttledScroll)
    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('resize', throttledScroll)
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [pathname, hash])

  return (
    <ViewportContext.Provider value={currentTitle}>
      {children}
    </ViewportContext.Provider>
  )
}

export default ViewportContext
export { ViewportProvider }
