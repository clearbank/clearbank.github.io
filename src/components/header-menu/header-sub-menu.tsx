import React, { useLayoutEffect, useRef } from 'react'

import * as Styles from './header-menu.styles'
import * as Types from './header-menu.types'
import HeaderMenuListItem from './header-menu-list-item'

const compactLabels: { [key: string]: string } = {
  'gbp-accounts': 'Accounts',
  'gbp-payments': 'Payments',
  'multi-currency': 'MCCY, FX & SEPA',
  'embedded-banking': 'Embedded',
  'eur-payments': 'EUR payments'
}

const HeaderSubMenu: React.FC<Types.IHeaderSubMenuProps> = ({
  item,
  isActive,
  isOpen = false,
  onOpenChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const title = item.menuItem.title
  const category = (item.menuItem.slug || '')
    .split('/')
    .filter(Boolean)
    .pop()

  const compactTitle = compactLabels[category || ''] || title
  const submenuId = `header-submenu-${item.menuItem.slug ?? title}`

  useLayoutEffect(() => {
    if (!isOpen) return

    const container = containerRef.current
    const list = listRef.current

    if (!container || !list) return

    const updateAvailableHeight = () => {
  const viewport = document.documentElement
  const viewportHeight = viewport.clientHeight || window.innerHeight
  const viewportWidth = viewport.clientWidth || window.innerWidth
  const containerRect = container.getBoundingClientRect()

  const top = containerRect.bottom + 8
  const availableHeight = Math.max(0, viewportHeight - top - 16)

  list.style.setProperty(
    '--category-menu-height',
    `${availableHeight}px`
  )

  const dropdownWidth = list.getBoundingClientRect().width
  const dropdownLeft = Math.max(
    20,
    Math.min(
      containerRect.left,
      viewportWidth - dropdownWidth - 20
    )
  )

  list.style.left = `${dropdownLeft - containerRect.left}px`
  list.style.right = 'auto'
}

    updateAvailableHeight()

    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(updateAvailableHeight)
        : null

    if (observer && container.parentElement) {
      observer.observe(container.parentElement)
    }

    window.addEventListener('resize', updateAvailableHeight)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updateAvailableHeight)
    }
  }, [isOpen])

  return (
    <Styles.Container ref={containerRef}>
      <Styles.TitleContainer>
        <Styles.TitleButton
          ref={buttonRef}
          type='button'
          aria-label={title}
          title={title}
          aria-expanded={isOpen}
          aria-controls={submenuId}
          onClick={() => onOpenChange?.(!isOpen)}
        >
          <Styles.Title isActive={isActive}>
            <Styles.FullLabel>{title}</Styles.FullLabel>
            <Styles.CompactLabel>{compactTitle}</Styles.CompactLabel>
          </Styles.Title>
        </Styles.TitleButton>

        {isActive && <Styles.Underline />}
      </Styles.TitleContainer>

      <Styles.List
        ref={listRef}
        id={submenuId}
        isOpen={isOpen}
        onKeyDown={event => {
          if (event.key === 'Escape') {
            onOpenChange?.(false)
            buttonRef.current?.focus()
          }
        }}
        onClick={event => {
          const target = event.target

          if (target instanceof Element && target.closest('a[href]')) {
            onOpenChange?.(false)
          }
        }}
      >
        {item.subMenuItems?.map((element, index, array) => (
          <HeaderMenuListItem
            key={element.fields.id}
            item={element}
            onHover={() => undefined}
            isLast={index === array.length - 1}
          />
        ))}
      </Styles.List>
    </Styles.Container>
  )
}

export default HeaderSubMenu