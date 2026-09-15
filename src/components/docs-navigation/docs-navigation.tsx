import React, { useState } from 'react'

import Link from 'src/components/link'

import * as Styles from './docs-navigation.styles'
import * as Types from './docs-navigation.types'

const normalize = (path: string) => path.replace(/\/$/, '')

const isCurrentPage = (slug: string, currentPath: string) =>
  normalize(slug) === normalize(currentPath)

const getInitialExpandedIds = (
  items: Types.DocsNavigationProps['items'],
  currentPath: string
): Set<string> => {
  const expanded = new Set<string>()

  items.forEach(item => {
    item.subMenuItems?.forEach(subItem => {
      const isLeafActive = subItem.leafMenuItems?.some(leaf =>
        isCurrentPage(leaf.fields.slug, currentPath)
      )

      if (isLeafActive) {
        expanded.add(item.menuItem.id)
        expanded.add(subItem.fields.id)
      }

      if (isCurrentPage(subItem.fields.slug, currentPath)) {
        expanded.add(item.menuItem.id)
      }
    })
  })

  return expanded
}

const DocsNavigation: React.FC<Types.DocsNavigationProps> = ({ items, currentPath }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() =>
    getInitialExpandedIds(items, currentPath)
  )

  const toggle = (id: string) => {
    setExpandedIds(previous => {
      const next = new Set(previous)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

  return (
    <Styles.Nav aria-label='Documentation navigation'>
      <Styles.List>
        {items.map(item => {
          const hasSubItems = item.subMenuItems?.length > 0
          const rootPanelId = `docs-nav-sub-${item.menuItem.id}`
          const isRootExpanded = expandedIds.has(item.menuItem.id)

          return (
            <li key={item.menuItem.id}>
              <Styles.Row>
                <Styles.NavLink
                  as={Link}
                  to={item.menuItem.slug}
                  aria-current={isCurrentPage(item.menuItem.slug, currentPath) ? 'page' : undefined}
                >
                  {item.menuItem.title}
                </Styles.NavLink>
                {hasSubItems && (
                  <Styles.DisclosureButton
                    type='button'
                    aria-expanded={isRootExpanded}
                    aria-controls={rootPanelId}
                    onClick={() => toggle(item.menuItem.id)}
                  >
                    {isRootExpanded ? '−' : '+'}
                  </Styles.DisclosureButton>
                )}
              </Styles.Row>
              {hasSubItems && (
                <Styles.SubList id={rootPanelId} hidden={!isRootExpanded}>
                  {item.subMenuItems.map(subItem => {
                    const hasLeafItems = subItem.leafMenuItems?.length > 0
                    const leafPanelId = `docs-nav-leaf-${subItem.fields.id}`
                    const isSubExpanded = expandedIds.has(subItem.fields.id)

                    return (
                      <li key={subItem.fields.id}>
                        <Styles.Row>
                          <Styles.NavLink
                            as={Link}
                            to={subItem.fields.slug}
                            aria-current={isCurrentPage(subItem.fields.slug, currentPath) ? 'page' : undefined}
                          >
                            {subItem.fields.title}
                          </Styles.NavLink>
                          {hasLeafItems && (
                            <Styles.DisclosureButton
                              type='button'
                              aria-expanded={isSubExpanded}
                              aria-controls={leafPanelId}
                              onClick={() => toggle(subItem.fields.id)}
                            >
                              {isSubExpanded ? '−' : '+'}
                            </Styles.DisclosureButton>
                          )}
                        </Styles.Row>
                        {hasLeafItems && (
                          <Styles.LeafList id={leafPanelId} hidden={!isSubExpanded}>
                            {subItem.leafMenuItems.map(leaf => (
                              <li key={leaf.fields.id}>
                                <Styles.NavLink
                                  as={Link}
                                  to={leaf.fields.slug}
                                  aria-current={isCurrentPage(leaf.fields.slug, currentPath) ? 'page' : undefined}
                                >
                                  {leaf.fields.title}
                                </Styles.NavLink>
                              </li>
                            ))}
                          </Styles.LeafList>
                        )}
                      </li>
                    )
                  })}
                </Styles.SubList>
              )}
            </li>
          )
        })}
      </Styles.List>
    </Styles.Nav>
  )
}

export default DocsNavigation