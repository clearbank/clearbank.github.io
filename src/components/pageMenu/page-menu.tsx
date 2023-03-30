import React, { useState, useRef, useLayoutEffect, useMemo } from 'react'
import throttle from 'lodash.throttle'
import flatten from 'lodash.flatten'
import kebabCase from 'lodash.kebabcase'

import { hasWindow } from 'src/utils/browser.services'

import * as Types from './page-menu.types'
import * as Styles from './page-menu.styles'

const mapHeadingToComponent = (heading: any) => {
  switch(heading.tag) {
    case 'H1':
      return (
        <Styles.FirstLevelListItem key={heading.id}>
          <Styles.Link href={`#${heading.id}`}>
            {heading.title}
          </Styles.Link>
        </Styles.FirstLevelListItem>
      )
    case 'H2':
      return (
        <Styles.SecondLevelListItem key={heading.id}>
          <Styles.Link href={`#${heading.id}`}>
            {heading.title}
          </Styles.Link>
        </Styles.SecondLevelListItem>
      );
    case 'H3':
      return (
        <Styles.ThirdLevelListItem key={heading.id}>
          <Styles.Link href={`#${heading.id}`}>
            {heading.title}
          </Styles.Link>
        </Styles.ThirdLevelListItem> 
      );
    case 'H4':
      return;
    default:
      return null;
  }
}


const PageMenu: React.FC<Types.PageMenuProps> = ({
  headings
}) => {

  return (
    <Styles.Container id='pageMenu'>
      <Styles.Title>On this page:</Styles.Title>
      
      <Styles.List>
        {headings.map(heading => mapHeadingToComponent(heading))}
      </Styles.List>
    </Styles.Container>
  )
}

export default PageMenu
