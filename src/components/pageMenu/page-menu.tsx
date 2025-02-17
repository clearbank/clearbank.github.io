import React, { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

import { hasWindow } from 'src/utils/browser.services'

import * as Types from './page-menu.types'
import * as Styles from './page-menu.styles'

const mapHeadingToComponent = (heading: any, activeHash: string) => {
  const hash = `#${heading.id}`
  const isActive = activeHash === hash

  switch(heading.tag) {
    case 'H1':
      return (
        <Styles.FirstLevelLink href={hash} isActive={isActive}>
          {heading.title}
        </Styles.FirstLevelLink>
      )
    case 'H2':
      return (
        <Styles.LinkWrapper level={0}>
          <Styles.BaseLink href={hash} isActive={isActive}>
            {heading.title}
          </Styles.BaseLink>
        </Styles.LinkWrapper>
      )
    case 'H3':
      return (
        <Styles.LinkWrapper>
          <Styles.ThirdLevelLink href={hash} isActive={isActive}>
            {heading.title}
          </Styles.ThirdLevelLink>
        </Styles.LinkWrapper>
      )
    case 'H4':
      return (
        <Styles.LinkWrapper level={2}>
          <Styles.FourthLevelLink href={hash} isActive={isActive}>
            {heading.title}
          </Styles.FourthLevelLink>
        </Styles.LinkWrapper>
      )
    default:
      return null;
  }
}

interface IHeadingRepresentation {
  tag: string;
  parent: string;
  title: string;
  id: string;
}

const mapHeadings = (headings: Array<Element>): Array<IHeadingRepresentation> => 
  headings.map(heading => ({
    tag: heading.tagName,
    parent: heading.closest('.page').id,
    title: heading.textContent,
    id: heading.id
  }))
  .filter((entry) => entry.id !== '')

const PageMenu: React.FC<Types.PageMenuProps> = () => {
  const [headings, setHeadings] = useState<Array<IHeadingRepresentation>>([]);
  const [activeHash, setActiveHash] = useState(hasWindow() ? window.location.hash : null);

  useEffect(() => {
    if (!hasWindow()) {
      return
    }

  const rawHeadings = mapHeadings(
    Array.from(document.querySelectorAll('.page .page-menu-entry'))
  )
    
    setHeadings(rawHeadings)
  }, [])


  useEffect(() => {
    if (!hasWindow()) {
      return
    }

    const handleHashChange = () => setActiveHash(window.location.hash)
    const throttledHandler = throttle(handleHashChange, 33)

    window.addEventListener('scroll', throttledHandler)

    return () => {
      window.removeEventListener('scroll', throttledHandler)
    }
  }, [])

  return (
    <Styles.Container id='pageMenu'>
      <Styles.Title>On this page:</Styles.Title>
      <Styles.List>
        {headings.map(heading => (
          <Styles.ListItem key={heading.id}>
            {mapHeadingToComponent(heading, activeHash)}
          </Styles.ListItem>
        ))}
      </Styles.List>
    </Styles.Container>
  )
}

export default PageMenu
