import React, { useState, useRef, useLayoutEffect, useMemo, useEffect } from 'react'
import throttle from 'lodash.throttle'
import flatten from 'lodash.flatten'
import kebabCase from 'lodash.kebabcase'

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
        <Styles.BaseLink href={href} isActive={isActive}>
          {heading.title}
        </Styles.BaseLink>
    )
    case 'H3':
      return (
        <Styles.ThirdLevelLink href={href} isActive={isActive}>
          {heading.title}
        </Styles.ThirdLevelLink>
      )
    case 'H4':
      return (
        <Styles.FourthLevelLink href={href} isActive={isActive}>
          {heading.title}
        </Styles.FourthLevelLink>
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
console.log({ headings })
  const rawHeadings = Array.from(document.querySelectorAll('.page .page-menu-entry'))
    .map(mdxTitle => ({
      tag: mdxTitle.tagName,
      parent: mdxTitle.closest('.page').id,
      title: mdxTitle.textContent,
      id: mdxTitle.id
    }))
    .filter((entry: any) => entry.id !== '')

    setHeadings(rawHeadings)
  }, [])

  return (
    <Styles.Container id='pageMenu'>
      <Styles.Title>On this page:</Styles.Title>
      <Styles.List>
        {headings.map(heading => (
          <li key={heading.id}>
            {mapHeadingToComponent(heading)}
          </li>
        ))}
      </Styles.List>
    </Styles.Container>
  )
}

export default PageMenu
