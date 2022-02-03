import React, { useState, useRef, useLayoutEffect } from 'react'
import throttle from 'lodash.throttle'
import flatten from 'lodash.flatten'
import kebabCase from 'lodash.kebabcase'

import { hasWindow } from 'src/utils/browser.services'

import * as Types from './page-menu.types'
import * as Styles from './page-menu.styles'

const SubmenuMdx: React.FunctionComponent<Types.PageSubmenuProps> = ({
  submenu,
  activeElementIds
}): JSX.Element => {
  // Prevent widows
  const formatTitle = (title: string): string => {
    return title.replace(/\s(?=[^\s]*$)/g, '\u00A0')
  }

  return (
    <Styles.List level={1}>
      {submenu.map(({ id, title }, index: number) => {
        const isHighlighted = activeElementIds.includes(id)

        // ignore first entry that is identically to the headlines
        if (index === 0) {
          return null
        }

        return (
          <Styles.SecondLevelEntry key={index}>
            <Styles.SecondLevelLink
              href={`#${id}`}
              isHighlighted={isHighlighted}
            >
              {formatTitle(title)}
            </Styles.SecondLevelLink>
          </Styles.SecondLevelEntry>
        )
      })}
    </Styles.List>
  )
}

const PageMenu: React.FunctionComponent<Types.PageMenuProps> = ({
  data
}): JSX.Element => {
  const [submenusMdx, setSubmenusMdx] = useState([])
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [activeParentIds, setActiveParentIds] = useState<string[]>([])
  const [activeElementIds, setActiveElementsIds] = useState<string[]>([])
  const scrollYPositionPrev = useRef(0)

  const contentInSubdirectory = new RegExp(/^\/docs\/([\w-_]+\/)[\w-_]+\/?$/)

  // calculate scrollPosition
  useLayoutEffect(() => {
    if (!hasWindow) {
      return
    }

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY

      setScrollPosition(oldScrollPosition => {
        scrollYPositionPrev.current = oldScrollPosition

        return currentScrollPosition
      })
    }

    const throttledScroll = throttle(handleScroll, 100)

    window.addEventListener('scroll', throttledScroll)

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  // create menu
  useLayoutEffect(() => {
    if (!hasWindow) {
      return
    }

    const mdxTitles: HTMLElement[] = Array.from(
      document.querySelectorAll('.page .page-menu-entry')
    )

    const mdxTitlesDomElements = mdxTitles
      .map(mdxTitle => ({
        parent: mdxTitle.closest('.page').id,
        title: mdxTitle.textContent,
        id: mdxTitle.id
      }))
      // remove entries with missing attributes
      .filter((entry: any) =>
        Object.values(entry).every(value => value !== null)
      )
      .filter((entry: any) => entry.id !== '')

    // group subpages by parent
    const mappedMdxTitles = mdxTitlesDomElements.reduce(
      (total, { parent, id, title }) => {
        const entryNew = {
          id,
          title
        }

        total[parent] =
          parent in total
            ? total[parent].concat([entryNew])
            : (total[parent] = [entryNew])

        return total
      },
      {} as any
    )

    setSubmenusMdx(mappedMdxTitles)
  }, [])

  // find active parent
  useLayoutEffect(() => {
    if (!hasWindow) {
      return
    }

    if (window.matchMedia('(max-width: 991px)').matches) {
      return
    }

    const inViewCheckpoint = window.scrollY + window.innerHeight // bottom of viewport

    // merge mainnav
    const levelAlphaEntries = flatten(Object.keys(submenusMdx))

    const sectionsInViewport = levelAlphaEntries.filter((entry: any) => {
      if (entry === '') {
        return false
      }

      const section: HTMLElement = document.querySelector(`#${entry}`)

      // section not found in main content
      if (section === null) {
        return false
      }

      const elementStart = section.offsetTop
      const elementEnd = section.offsetTop + section.offsetHeight

      if (elementStart <= inViewCheckpoint && elementEnd >= inViewCheckpoint) {
        return true
      }

      return false
    })

    setActiveParentIds(sectionsInViewport)
  }, [submenusMdx, scrollPosition])

  // find active subentries
  useLayoutEffect(() => {
    if (!hasWindow) {
      return
    }

    if (window.matchMedia('(max-width: 991px)').matches) {
      return
    }

    // lower screen border
    const inViewCheckpoint = window.scrollY + window.innerHeight // bottom of viewport

    // merge subnav
    const lowerLevelEntries = flatten(Object.values(submenusMdx))
    const sectionsInViewport = lowerLevelEntries
      .filter((entry: any) => {
        if (entry.id === '') {
          return false
        }

        const section: HTMLElement = document.querySelector(`#${entry.id}`)

        // section not found in main content
        if (section === null) {
          return false
        }

        const parent: HTMLElement = section.closest('.page-menu-entry-parent')

        if (parent === null) {
          return false
        }

        const container = parent.offsetParent
        const containerOffset = (container as HTMLElement).offsetTop

        const parentStart = containerOffset + parent.offsetTop
        const parentEnd =
          containerOffset + parent.offsetTop + parent.offsetHeight

        if (parentStart <= inViewCheckpoint && parentEnd >= inViewCheckpoint) {
          return true
        }

        return false
      })
      .map((entry: any) => entry.id)

    setActiveElementsIds(sectionsInViewport)
  }, [submenusMdx, scrollPosition])

  if (!data || !data.pageContent || !data.pageContent.edges) {
    return null
  }

  const firstLevelEntries = data.pageContent.edges
    .map(({ node }: any) => node.fields)
    .filter((node: any) => contentInSubdirectory.test(node.slug))

  if (!firstLevelEntries.length) {
    return null
  }

  return (
    <Styles.Container id='pageMenu'>
      <Styles.Title>On this page</Styles.Title>
      <Styles.List level={0}>
        {firstLevelEntries.map(({ title }: any, index: number) => {
          const titleConverted = kebabCase(title.toLowerCase())

          const target = `#${titleConverted}`
          const submenuMdx = submenusMdx[titleConverted] || []
          const isActiveParent = activeParentIds.includes(titleConverted)
          const hasChildren = !!submenuMdx.length

          return (
            <Styles.Entry key={index}>
              <Styles.FirstLevelLink
                isHighlighted={isActiveParent}
                href={target}
              >
                {title}
              </Styles.FirstLevelLink>
              {hasChildren && (
                <SubmenuMdx
                  target={target}
                  submenu={submenuMdx}
                  activeElementIds={activeElementIds}
                />
              )}
            </Styles.Entry>
          )
        })}
      </Styles.List>
    </Styles.Container>
  )
}

export default PageMenu
