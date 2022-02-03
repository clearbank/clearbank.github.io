import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './pagination'

import * as Types from './pagination.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

jest.mock('src/utils/browser.services', () => ({
  hasWindow: () => {
    return true
  }
}))

const defaultProps: Types.PaginationProps = {
  menuItems: [
    {
      menuItem: {
        id: 'id1',
        order: 1,
        slug: '/doc/slug1',
        title: 'title1'
      },
      subMenuItems: [
        {
          node: {
            fields: {
              id: 'subid1',
              order: 1,
              slug: '/doc/slug1/subslug1',
              title: 'subtitle1'
            }
          }
        },
        {
          node: {
            fields: {
              id: 'subid2',
              order: 2,
              slug: '/doc/slug1/subslug2',
              title: 'subtitle2'
            }
          }
        }
      ]
    },
    {
      menuItem: {
        id: 'id2',
        order: 2,
        slug: '/doc/slug2',
        title: 'title2'
      },
      subMenuItems: [
        {
          node: {
            fields: {
              id: 'subid1',
              order: 1,
              slug: '/doc/slug2/subslug1',
              title: 'subtitle1'
            }
          }
        },
        {
          node: {
            fields: {
              id: 'subid2',
              order: 2,
              slug: '/doc/slug2/subslug2',
              title: 'subtitle2'
            }
          }
        }
      ]
    },
    {
      menuItem: {
        id: 'id3',
        order: 3,
        slug: '/doc/slug3',
        title: 'title3'
      },
      subMenuItems: [
        {
          node: {
            fields: {
              id: 'subid1',
              order: 1,
              slug: '/doc/slug3/subslug1',
              title: 'subtitle1'
            }
          }
        },
        {
          node: {
            fields: {
              id: 'subid2',
              order: 2,
              slug: '/doc/slug3/subslug2',
              title: 'subtitle2'
            }
          }
        }
      ]
    }
  ]
}

beforeAll(() => {
  // mock global location object
  delete window.location

  // has prev and next child
  window.location = { pathname: '/doc/slug2' }
})

beforeEach(() => {
  component = render(<Component {...defaultProps} children='children' />)

  fragment = component.asFragment()
  root = component.container.firstChild
})

afterEach(() => {
  fragment = null
  root = null
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(root).toMatchSnapshot()
  })

  test('is a nav element', () => {
    expect(fragment.querySelectorAll('nav').length).toBe(1)
    expect(root.tagName.toLowerCase()).toBe('nav')
  })

  test('is not empty', () => {
    expect(root.textContent.length).toBeTruthy()
  })

  test('has no menu when menuList is empty', () => {
    component.rerender(<Component menuItems={[]} />)

    expect(component.asFragment().hasChildNodes()).toBeFalsy()
  })

  test('has no menu when slug is not found in menuList', () => {
    window.location = { pathname: '/path/subpath' }
    component.rerender(<Component menuItems={[]} />)

    expect(component.asFragment().hasChildNodes()).toBeFalsy()

    // restore default state
    window.location = { pathname: '/doc/slug2' }
    component.rerender(<Component {...defaultProps} children='children' />)
  })

  test('has prev and next link', () => {
    expect(root.children.length).toBe(2)
  })

  test('has prev link before next link (correct order)', () => {
    expect(
      root.children[0].textContent.toLowerCase().includes('previous')
    ).toBeTruthy()

    expect(
      root.children[1].textContent.toLowerCase().includes('next')
    ).toBeTruthy()
  })

  test('has prev link with correct link, direction attribute and icon', () => {
    const link = root.children[0]

    expect(link.hasAttribute('direction')).toBeTruthy()
    expect(link.getAttribute('direction')).toBe('previous')

    expect(link.querySelectorAll('a').length).toBe(1)
    expect(link.querySelector('a').hasAttribute('href')).toBeTruthy()
    expect(link.querySelector('a').getAttribute('href')).toBe(
      defaultProps.menuItems[0].menuItem.slug
    )
    expect(link.querySelector('a').hasAttribute('direction')).toBeTruthy()
    expect(link.querySelector('a').getAttribute('direction')).toBe('previous')

    expect(link.querySelectorAll('.cb-icon-arrow-left').length).toBeTruthy
    expect(
      link.querySelector('.cb-icon-arrow-left').tagName.toLowerCase()
    ).toBe('i')
  })

  test('has prev link with correct link, direction attribute and icon', () => {
    const link = root.children[1]

    expect(link.hasAttribute('direction')).toBeTruthy()
    expect(link.getAttribute('direction')).toBe('next')

    expect(link.querySelectorAll('a').length).toBe(1)
    expect(link.querySelector('a').hasAttribute('href')).toBeTruthy()
    expect(link.querySelector('a').getAttribute('href')).toBe(
      defaultProps.menuItems[2].menuItem.slug
    )
    expect(link.querySelector('a').hasAttribute('direction')).toBeTruthy()
    expect(link.querySelector('a').getAttribute('direction')).toBe('next')

    expect(link.querySelectorAll('.cb-icon-arrow-right').length).toBeTruthy
    expect(
      link.querySelector('.cb-icon-arrow-right').tagName.toLowerCase()
    ).toBe('i')
  })

  test('has no prev link when slug is first in menu', () => {
    window.location = { pathname: '/doc/slug1' }
    component.rerender(<Component {...defaultProps} children='children' />)

    expect(root.children.length).toBe(1)
    expect(
      root.children[0].textContent.toLowerCase().includes('previous')
    ).toBeFalsy()
    expect(
      root.children[0].textContent.toLowerCase().includes('next')
    ).toBeTruthy()

    // restore default state
    window.location = { pathname: '/doc/slug2' }
    component.rerender(<Component {...defaultProps} children='children' />)
  })

  test('has no next link when slug is last in menu', () => {
    window.location = { pathname: '/doc/slug3' }
    component.rerender(<Component {...defaultProps} children='children' />)

    expect(root.children.length).toBe(1)
    expect(
      root.children[0].textContent.toLowerCase().includes('next')
    ).toBeFalsy()
    expect(
      root.children[0].textContent.toLowerCase().includes('previous')
    ).toBeTruthy()

    // restore default state
    window.location = { pathname: '/doc/slug2' }
    component.rerender(<Component {...defaultProps} children='children' />)
  })
})
