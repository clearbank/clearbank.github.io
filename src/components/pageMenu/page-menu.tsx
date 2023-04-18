import React, { useState, useEffect } from 'react'

import { hasWindow } from 'src/utils/browser.services'

import * as Types from './page-menu.types'
import * as Styles from './page-menu.styles'

const mapHeadingToComponent = (heading: any) => {
  const currentHash = hasWindow() ? window.location.hash : ''
  const href = `#${heading.id}`
  const isActive = currentHash === href

  switch(heading.tag) {
    case 'H1':
      return (
        <Styles.FirstLevelLink href={href} isActive={isActive}>
          {heading.title}
        </Styles.FirstLevelLink>
      )
    case 'H2':
      return (
        <Styles.LinkWrapper level={0}>
          <Styles.BaseLink href={href} isActive={isActive}>
            {heading.title}
          </Styles.BaseLink>
        </Styles.LinkWrapper>
      )
    case 'H3':
      return (
        <Styles.LinkWrapper>
          <Styles.ThirdLevelLink href={href} isActive={isActive}>
            {heading.title}
          </Styles.ThirdLevelLink>
        </Styles.LinkWrapper>
      )
    case 'H4':
      return (
        <Styles.LinkWrapper level={2}>
          <Styles.FourthLevelLink href={href} isActive={isActive}>
            {heading.title}
          </Styles.FourthLevelLink>
        </Styles.LinkWrapper>
      )
    default:
      return null;
  }
}


const PageMenu: React.FC<Types.PageMenuProps> = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!hasWindow()) {
      return
    }

  const rawHeadings = Array.from(document.querySelectorAll('.page .page-menu-entry'))
    .map(mdxTitle => ({
      tag: mdxTitle.tagName,
      parent: mdxTitle.closest('.page').id,
      title: mdxTitle.textContent,
      id: mdxTitle.id
    }))
    .filter((entry) => entry.id !== '')

    setHeadings(rawHeadings)
  }, [])

  return (
    <Styles.Container id='pageMenu'>
      <Styles.Title>On this page:</Styles.Title>
      <Styles.List>
        {headings.map(heading => (
          <li key={heading.slug}>
            {mapHeadingToComponent(heading)}
          </li>
        ))}
      </Styles.List>
    </Styles.Container>
  )
}

export default PageMenu
