import React, { useEffect, useState } from 'react'

import Link from 'src/components/link'

import * as Styles from './docs-navigation.styles'
import * as Types from './docs-navigation.types'

interface OperationLink {
  id: string
  title: string
  method: string
}

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

const DocsNavigation: React.FC<Types.DocsNavigationProps> = ({
  items,
  currentPath
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() =>
    getInitialExpandedIds(items, currentPath)
  )

  const [operations, setOperations] = useState<OperationLink[]>([])

  useEffect(() => {
    const headings = document.querySelectorAll<HTMLElement>(
      '.page .endpoint-block-title[data-http-method]'
    )

    const nextOperations = Array.from(headings)
      .filter(heading => heading.id !== '')
      .map(heading => ({
        id: heading.id,
        title: heading.textContent?.trim() || '',
        method: heading.dataset.httpMethod || ''
      }))
      .filter(operation => operation.title !== '' && operation.method !== '')

    setOperations(nextOperations)
  }, [currentPath])

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

  const renderOperations = (slug: string) => {
  if (!isCurrentPage(slug, currentPath) || operations.length === 0) {
    return null
  }

  return (
    <>
      <Styles.OperationLabel>API operations</Styles.OperationLabel>

      <Styles.OperationList aria-label='API operations'>
        {operations.map(operation => (
          <li key={operation.id}>
            <Styles.OperationLink href={`#${operation.id}`}>
              <Styles.MethodBadge $method={operation.method}>
                {operation.method}
              </Styles.MethodBadge>
              <span>{operation.title}</span>
            </Styles.OperationLink>
          </li>
        ))}
      </Styles.OperationList>
    </>
  )
}

  return (
    <Styles.Nav aria-label='Documentation navigation'>
      <Styles.NavTitle>Documentation</Styles.NavTitle>
      <Styles.List>
        {items.map(item => {
          const hasSubItems = item.subMenuItems?.length > 0
          const rootPanelId = `docs-nav-sub-${item.menuItem.id}`
          const isRootExpanded = expandedIds.has(item.menuItem.id)

          // Root category pages are empty containers; link to their first child.
          const rootHref = hasSubItems
            ? item.subMenuItems[0].fields.slug
            : item.menuItem.slug

          return (
            <li key={item.menuItem.id}>
              <Styles.Row>
                <Styles.NavLink
                  as={Link}
                  to={rootHref}
                  aria-current={
                    isCurrentPage(item.menuItem.slug, currentPath)
                      ? 'page'
                      : undefined
                  }
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
                            aria-current={
                              isCurrentPage(subItem.fields.slug, currentPath)
                                ? 'page'
                                : undefined
                            }
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

                        {renderOperations(subItem.fields.slug)}

                        {hasLeafItems && (
                          <Styles.LeafList
                            id={leafPanelId}
                            hidden={!isSubExpanded}
                          >
                            {subItem.leafMenuItems.map(leaf => (
                              <li key={leaf.fields.id}>
                                <Styles.NavLink
                                  as={Link}
                                  to={leaf.fields.slug}
                                  aria-current={
                                    isCurrentPage(leaf.fields.slug, currentPath)
                                      ? 'page'
                                      : undefined
                                  }
                                >
                                  {leaf.fields.title}
                                </Styles.NavLink>

                                {renderOperations(leaf.fields.slug)}
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